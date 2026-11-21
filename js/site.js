(() => {
  const STORE_TEL = "+13152148388";
  const HOURS = { open: 8, close: 22 }; // every day, store time (America/New_York)
  const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const money = n => "$" + n.toFixed(2);
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

  document.documentElement.classList.add("js");

  /* ---------- Hero entrance ---------- */
  const hero = $(".hero");
  requestAnimationFrame(() => requestAnimationFrame(() => hero.classList.add("is-in")));

  /* ---------- Nav ---------- */
  const nav = $("[data-nav]");
  const onScroll = () => nav.classList.toggle("is-solid", scrollY > 40);
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  const toggle = $("[data-menu-toggle]");
  const mm = $("#mobile-menu");
  const setMenu = open => {
    toggle.setAttribute("aria-expanded", open);
    mm.hidden = !open;
    nav.classList.toggle("is-solid", open || scrollY > 40);
  };
  toggle.addEventListener("click", () => setMenu(mm.hidden));
  $$("a", mm).forEach(a => a.addEventListener("click", () => setMenu(false)));

  /* ---------- Open now (store time) ---------- */
  function storeNow() {
    const parts = new Intl.DateTimeFormat("en-US", { timeZone: "America/New_York", weekday: "long", hour: "numeric", minute: "numeric", hour12: false }).formatToParts(new Date());
    const get = t => parts.find(p => p.type === t).value;
    return { day: get("weekday"), h: +get("hour") % 24, m: +get("minute") };
  }
  function paintStatus() {
    const { day, h, m } = storeNow();
    const mins = h * 60 + m;
    const open = mins >= HOURS.open * 60 && mins < HOURS.close * 60;
    const closingSoon = open && HOURS.close * 60 - mins <= 45;
    const text = open ? (closingSoon ? "Open, closes at 10pm" : "Open now until 10pm") : (mins < HOURS.open * 60 ? "Closed, opens at 8am" : "Closed, opens 8am tomorrow");
    $$("[data-status]").forEach(el => el.classList.toggle("is-open", open));
    $$("[data-status-text]").forEach(el => (el.textContent = text));
    const board = $("[data-openboard]");
    board.classList.toggle("is-open", open);
    $("[data-neon]").textContent = open ? "Open" : "Closed";
    $("[data-openboard-text]").textContent = open ? "Now until 10pm" : (mins < HOURS.open * 60 ? "Opens at 8am" : "Opens 8am tomorrow");
    if (open && !reduce && !board.dataset.flickered) { board.dataset.flickered = 1; board.classList.add("flicker"); }
    const tb = $("[data-hours]");
    const order = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    tb.innerHTML = order.map(d => `<tr class="${d === day ? "is-today" : ""}"><td>${d}${d === day ? " (today)" : ""}</td><td>8am – 10pm</td></tr>`).join("");
  }
  paintStatus();
  setInterval(paintStatus, 60000);

  /* ---------- Menu board ---------- */
  const MENU = window.NS_MENU || [];
  const tabs = $("[data-tabs]");
  const board = $("[data-board]");
  const esc = s => s.replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  tabs.innerHTML = `<button class="tab" role="tab" aria-selected="true" data-tab="all">Everything</button>` +
    MENU.map(s => `<button class="tab" role="tab" aria-selected="false" data-tab="${s.id}">${esc(s.name)}</button>`).join("");
  board.innerHTML = MENU.map(s => `
    <section class="board__sec" id="m-${s.id}" data-sec="${s.id}">
      <div class="board__head"><h3>${esc(s.name)}</h3>${s.note ? `<p>${esc(s.note)}</p>` : ""}</div>
      <ul class="board__list">
        ${s.items.map(([name, desc, price, img]) => `
          <li class="item" data-name="${esc((name + " " + desc + " " + s.name).toLowerCase())}">
            ${img ? `<div class="item__pic"><img src="img/food/${img}-520.webp" width="64" height="64" loading="lazy" alt=""></div>` : `<div class="item__pic item__pic--none"></div>`}
            <div><p class="item__name">${esc(name)}</p><p class="item__desc">${esc(desc)}</p></div>
            <div class="item__right"><span class="item__price">${money(price)}</span><button class="plus" type="button" data-add="${esc(name)}|${price}" aria-label="Add ${esc(name)} to pickup order">+</button></div>
          </li>`).join("")}
      </ul>
    </section>`).join("") + `<p class="board__empty" hidden data-empty>Nothing matches that. Try “chicken”, “wrap” or call the counter, they'll make it.</p>`;

  let activeTab = "all";
  const search = $("[data-search]");
  function filter() {
    const q = search.value.trim().toLowerCase();
    let shown = 0;
    $$(".board__sec", board).forEach(sec => {
      const inTab = activeTab === "all" || sec.dataset.sec === activeTab;
      let n = 0;
      $$(".item", sec).forEach(it => {
        const hit = inTab && (!q || it.dataset.name.includes(q));
        it.hidden = !hit; if (hit) n++;
      });
      sec.hidden = n === 0; shown += n;
    });
    $("[data-empty]").hidden = shown > 0;
  }
  function setTab(id, scroll) {
    activeTab = id;
    $$(".tab", tabs).forEach(t => t.setAttribute("aria-selected", t.dataset.tab === id));
    filter();
    const t = $(`[data-tab="${id}"]`, tabs);
    t && t.scrollIntoView({ block: "nearest", inline: "center", behavior: reduce ? "auto" : "smooth" });
    if (scroll) $("#menu").scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
  }
  tabs.addEventListener("click", e => { const b = e.target.closest("[data-tab]"); if (b) setTab(b.dataset.tab); });
  search.addEventListener("input", () => { if (search.value && activeTab !== "all") setTab("all"); else filter(); });
  $$("[data-jump]").forEach(a => a.addEventListener("click", e => { e.preventDefault(); setTab(a.dataset.jump, true); }));

  /* ---------- Pickup cart ---------- */
  const KEY = "ns-pickup";
  let cart = [];
  try { cart = JSON.parse(localStorage.getItem(KEY)) || []; } catch (e) { cart = []; }
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(cart)); } catch (e) {} };
  const tray = $(".tray");
  const total = () => cart.reduce((s, i) => s + i.price * i.qty, 0);
  const count = () => cart.reduce((s, i) => s + i.qty, 0);

  function paintCart(bump) {
    tray.hidden = count() === 0;
    $("[data-tray-count]").textContent = count();
    $("[data-tray-total]").textContent = money(total());
    if (bump && !reduce) { tray.classList.remove("bump"); void tray.offsetWidth; tray.classList.add("bump"); }
    const list = $("[data-cart]");
    list.innerHTML = cart.length ? cart.map((i, k) => `
      <li><span class="cart__name">${esc(i.name)}</span>
        <span class="cart__qty"><button type="button" data-q="${k}|-1" aria-label="One less ${esc(i.name)}">−</button><span>${i.qty}</span><button type="button" data-q="${k}|1" aria-label="One more ${esc(i.name)}">+</button></span>
        <span class="cart__line">${money(i.price * i.qty)}</span></li>`).join("")
      : `<li class="cart__empty">Nothing in your order yet. Tap + on anything in the menu.</li>`;
    $("[data-cart-total]").textContent = money(total());
    const names = new Set(cart.map(i => i.name));
    $$("[data-add]").forEach(b => b.classList.toggle("is-added", names.has(b.dataset.add.split("|")[0])));
  }
  function add(name, price) {
    const hit = cart.find(i => i.name === name);
    hit ? hit.qty++ : cart.push({ name, price: +price, qty: 1 });
    save(); paintCart(true);
  }
  document.addEventListener("click", e => {
    const b = e.target.closest("[data-add]");
    if (!b) return;
    const [name, price] = b.dataset.add.split("|");
    add(name, price);
    if (b.classList.contains("add")) { const t = b.textContent; b.textContent = "Added"; setTimeout(() => (b.textContent = t), 1200); }
  });
  $("[data-cart]").addEventListener("click", e => {
    const b = e.target.closest("[data-q]"); if (!b) return;
    const [k, d] = b.dataset.q.split("|").map(Number);
    cart[k].qty += d; if (cart[k].qty <= 0) cart.splice(k, 1);
    save(); paintCart();
  });
  paintCart();

  /* ---------- Sheets ---------- */
  const sheets = { order: $("#sheet-order"), cart: $("#sheet-cart") };
  $$("[data-open]").forEach(b => b.addEventListener("click", () => { const d = sheets[b.dataset.open]; d && d.showModal(); }));
  Object.values(sheets).forEach(d => {
    d.addEventListener("click", e => { if (e.target === d || e.target.closest("[data-close]")) d.close(); });
    $$("[data-close-go]", d).forEach(a => a.addEventListener("click", () => d.close()));
  });

  const smsLink = body => `sms:${STORE_TEL}${/iPhone|iPad|Mac/.test(navigator.userAgent) ? "&" : "?"}body=${encodeURIComponent(body)}`;
  function check(form) {
    let ok = true;
    $$("[required]", form).forEach(inp => {
      const f = inp.closest(".field"), bad = !inp.value.trim();
      f.classList.toggle("has-err", bad); $(".field__err", f).hidden = !bad;
      if (bad && ok) { inp.focus(); ok = false; }
    });
    return ok;
  }
  function sent(form, msg) {
    let n = $(".form__sent", form);
    if (!n) { n = document.createElement("p"); n.className = "form__sent"; n.setAttribute("role", "status"); form.append(n); }
    n.textContent = msg;
  }

  $("[data-checkout]").addEventListener("submit", e => {
    e.preventDefault();
    const f = e.target;
    if (!cart.length) { sent(f, "Add something from the menu first."); return; }
    if (!check(f)) return;
    const d = new FormData(f);
    const lines = cart.map(i => `${i.qty} x ${i.name} (${money(i.price * i.qty)})`).join("\n");
    const body = `PICKUP ORDER for ${d.get("name")}\n${d.get("time")}\n\n${lines}\n\nEst. ${money(total())} before tax${d.get("notes") ? "\nNotes: " + d.get("notes") : ""}\n(sent from the website)`;
    location.href = smsLink(body);
    sent(f, "Your messages app is opening with the order. Hit send, and if you don't hear back in a few minutes, give us a call.");
  });
  $("[data-catering]").addEventListener("submit", e => {
    e.preventDefault();
    const f = e.target;
    if (!check(f)) return;
    const d = new FormData(f);
    const body = `BIG ORDER REQUEST\nName: ${d.get("name")}\nPhone: ${d.get("phone")}\nDate: ${d.get("date") || "not set"}\nPeople: ${d.get("people") || "not set"}\n\n${d.get("what")}`;
    location.href = smsLink(body);
    sent(f, "Your messages app is opening with the request. Hit send and we'll call you back.");
  });
  $$("[required]").forEach(inp => inp.addEventListener("input", () => { const f = inp.closest(".field"); if (inp.value.trim()) { f.classList.remove("has-err"); $(".field__err", f).hidden = true; } }));

  /* ---------- Section moments: the poster wipes in, tickets slide onto the rail ---------- */
  const io = new IntersectionObserver(es => es.forEach(en => {
    if (!en.isIntersecting) return;
    en.target.classList.add("is-seen");
    if (en.target.matches("[data-rail]")) $$(".ticket", en.target).forEach((t, i) => (t.style.transitionDelay = Math.min(i, 5) * 80 + "ms"));
    io.unobserve(en.target);
  }), { threshold: .25 });
  $$(".poster, [data-rail]").forEach(el => io.observe(el));

  const track = $("[data-track]");
  const step = () => (track.querySelector(".ticket").offsetWidth + 20) * (innerWidth < 640 ? 1 : 2);
  $("[data-rail-prev]").addEventListener("click", () => track.scrollBy({ left: -step() }));
  $("[data-rail-next]").addEventListener("click", () => track.scrollBy({ left: step() }));
})();
