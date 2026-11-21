/* Menu from the store's own DoorDash listing (prices set by the merchant), Nov 2026.
   Update prices here and the whole site follows. img = file stem in img/food/ */
window.NS_MENU = [
  { id: "breakfast", name: "Breakfast", note: "Roll, bagel or hero. Served from 8am.", items: [
    ["Bacon, Egg & Cheese", "The classic breakfast sandwich.", 7.79],
    ["Sausage, Egg & Cheese", "On a roll, bagel or hero.", 7.79],
    ["Steak, Egg & Cheese", "Chopped steak, egg and cheese.", 7.99],
    ["Turkey, Egg & Cheese", "On a roll, bagel or hero.", 7.79],
    ["Pastrami, Egg & Cheese", "Hot pastrami, egg and cheese.", 8.99],
    ["Egg & Cheese", "On a roll, bagel or hero.", 5.29],
    ["Bagel", "Ring-shaped and fresh.", 3.24],
    ["Morning Classic Wrap", "Scrambled eggs, bacon, cheddar, hash browns.", 9.99],
    ["Veggie Power Wrap", "Eggs, spinach, mushrooms, peppers, onions, mozzarella.", 8.79],
    ["Classic Pancake Combo", "Two eggs your way, bacon or sausage, two buttermilk pancakes.", 12.49],
    ["Eggs & Meat Breakfast", "Eggs any style, bacon or sausage, home fries, buttered toast.", 11.49],
    ["The Meat Lover's Omelet", "Bacon, sausage, cheddar, onions.", 12.49],
    ["The Sunrise Special Omelet", "Cheddar, onions, peppers, ham.", 10.49],
    ["The Garden Delight Omelet", "Spinach, mushrooms, tomatoes, onions, mozzarella.", 10.99]
  ]},
  { id: "burgers", name: "Burgers", note: "Every burger comes with fries.", items: [
    ["Classic Smash", "Double smashed patties, American, sautéed onions, smash sauce.", 15.49, "classic-smash"],
    ["Double Cheese Burger", "Lettuce, tomato, cheese, pickles, mayo, ketchup.", 16.49, "double-cheese"],
    ["Cheese Burger", "Lettuce, tomato, cheese, pickles, mayo, ketchup.", 11.99],
    ["BBQ Bacon Crunch Burger", "Cheddar, crispy bacon, onion rings, BBQ sauce, lettuce.", 15.99],
    ["The Mushroom Swiss Melt", "Sautéed mushrooms, Swiss, caramelized onions, garlic aioli.", 14.99],
    ["The Spicy Inferno", "Pepper jack, jalapeños, chipotle mayo, lettuce, tomato.", 13.99],
    ["The Sunrise", "Fried egg, bacon, American, lettuce, tomato, mayo.", 13.99]
  ]},
  { id: "heroes", name: "Hot heroes", note: "Hot rolls and heroes, all with fries.", items: [
    ["Chopped Cheese", "Seasoned ground beef, onions, melted cheese, lettuce, tomato, mayo, ketchup.", 9.99],
    ["Philly Cheesesteak", "Peppers, onions, American cheese, mayo.", 9.99, "philly"],
    ["NY Philly Cheesesteak", "House special: peppers, onions, mushrooms, American, mayo.", 9.99],
    ["Chicken Cutlet", "Lettuce, tomato, mayo, cheese.", 9.99],
    ["Buffalo Chicken Cutlet", "Buffalo sauce, lettuce, ranch or blue cheese.", 9.99],
    ["Chicken Parm", "Tomato sauce, mozzarella, parmesan.", 9.99],
    ["Meatball Parm", "Marinara, mozzarella, parmesan.", 9.99],
    ["Grilled Chicken", "Peppers, onions, cheese.", 9.99],
    ["Pastrami Papi", "Hot pastrami, muenster, cheddar, peppers, garlic aioli.", 10.99],
    ["Melted Me Down", "Hot roast beef, provolone, caramelized onions, mustard, mayo.", 10.99],
    ["Hot Desire", "Hot corned beef, Swiss, onions, mushrooms, pickles, Russian.", 10.99],
    ["Spicy Mistress", "Hot salami, Monterey jack, banana peppers, jalapeños, chipotle mayo.", 10.99],
    ["Veggie Hero", "Grilled peppers, onions, mushrooms, spinach, mozzarella.", 8.99]
  ]},
  { id: "platters", name: "Platters", note: "Halal-cart style, over rice or fries.", items: [
    ["Chicken & Rice", "Peppers, onions, white sauce, hot sauce, lettuce, tomato.", 14.99, "chicken-rice"],
    ["Lamb & Rice", "Peppers, onions, white sauce, hot sauce, lettuce, tomato.", 14.99, "lamb-rice"],
    ["Mixed Lamb & Chicken", "Both meats, white sauce, hot sauce, lettuce, tomato.", 15.99, "mixed-plate"],
    ["Animal Fries", "Fresh ground beef, American cheese, smash sauce, onions.", 14.99, "animal-fries"],
    ["Philly Fries", "Steak, bell peppers, onions, American cheese.", 14.99, "philly-fries"]
  ]},
  { id: "chicken", name: "Wings & tenders", note: "Ask for hot honey.", items: [
    ["Chicken Wings, 10 pc", "Bone-in, tossed in your sauce.", 16.99, "wings10"],
    ["Chicken Wings, 12 pc", "Sweet, spicy, tangy or cheesy.", 18.49, "wings12"],
    ["Chicken Wings, 20 pc", "Bone-in, tossed in your sauce.", 25.99],
    ["Chicken Wings, 24 pc", "Sweet, spicy, savory or classic.", 30.99],
    ["Chicken Tenders, 4 pc", "Boneless white meat.", 8.49],
    ["Chicken Tenders, 8 pc", "Boneless white meat.", 15.99, "tenders8"]
  ]},
  { id: "wraps", name: "Paninis & wraps", note: "Hot pressed, with chips.", items: [
    ["Buffalo Chicken Wrap", "Crispy chicken, buffalo, lettuce, tomato, ranch or blue cheese.", 14.49],
    ["BBQ Crunch Wrap", "Crispy chicken, BBQ, cheddar, lettuce, onion rings.", 13.99],
    ["Turkey Club Wrap", "Turkey, bacon, lettuce, tomato, American, mayo.", 14.49],
    ["Cheesy Melt Wrap", "Grilled chicken, mozzarella, roasted peppers, onions, garlic sauce.", 12.99],
    ["Spicy Ranch Kick Wrap", "Grilled chicken, jalapeños, pepper jack, chipotle ranch.", 12.99],
    ["Italian Classic Panini", "Ham, salami, provolone, roasted red peppers, Italian dressing.", 15.49],
    ["Buffalo Chicken Panini", "Breaded cutlet, buffalo, mozzarella, lettuce, ranch.", 13.99],
    ["Chicken Bacon Ranch Panini", "Grilled chicken, bacon, cheddar, lettuce, tomato, ranch.", 13.99],
    ["Turkey Pesto Panini", "Roasted turkey, mozzarella, tomato, spinach, pesto.", 12.99],
    ["Veggie Melt Panini", "Spinach, mushrooms, roasted peppers, onions, mozzarella, balsamic.", 11.49]
  ]},
  { id: "cold", name: "Cold heroes", note: "Stacked to order, with chips.", items: [
    ["Chicken Caesar Wrap", "Chicken, romaine, parmesan, mozzarella, Caesar.", 12.99, "caesar-wrap"],
    ["All-American", "Roast beef, turkey, cheddar, lettuce, tomato, mayo.", 15.99, "all-american"],
    ["Beef Titan", "Roast beef, provolone, lettuce, tomato, horseradish mayo.", 15.99, "beef-titan"],
    ["The Heatwave", "Pepper turkey, pepper jack, cucumber, jalapeños, chipotle mayo.", 15.99, "heatwave"],
    ["Golden Slice", "Turkey, Swiss, lettuce, tomato, mayo.", 15.99, "golden-slice"],
    ["Empire Italian Hero", "Ham, salami, pepperoni, provolone, oil and vinegar.", 15.99],
    ["Deli Supreme Wrap", "Ham, salami, provolone, lettuce, tomato, onions, Italian.", 15.99],
    ["Ham Slammer", "Ham, American, lettuce, tomato, mustard.", 15.99],
    ["Tuna Salad Wrap", "Tuna salad, lettuce, tomato, onions, cucumber.", 12.99, "tuna-wrap"],
    ["Veggie Delight Wrap", "Spinach, cucumber, roasted peppers, onions, olives, mozzarella.", 10.99]
  ]},
  { id: "subs", name: "Build-a-sub", note: "One meat, one cheese, unlimited toppings, chips. $10.99 any way.", items: [
    ["Honey Turkey Sub", "Your cheese, your toppings.", 10.99],
    ["Turkey Sub", "Your cheese, your toppings.", 10.99],
    ["Cajun Turkey Sub", "Your cheese, your toppings.", 10.99],
    ["Salsalito Turkey Sub", "Your cheese, your toppings.", 10.99],
    ["Ham Sub", "Your cheese, your toppings.", 10.99],
    ["Roast Beef Sub", "Your cheese, your toppings.", 10.99],
    ["Pastrami Sub", "Your cheese, your toppings.", 10.99],
    ["Corned Beef Sub", "Your cheese, your toppings.", 10.99],
    ["Salami Sub", "Your cheese, your toppings.", 10.99],
    ["Buffalo Chicken Sub", "Your cheese, your toppings.", 10.99],
    ["Tuna Sub", "Your cheese, your toppings.", 10.99]
  ]},
  { id: "salads", name: "Salads", note: "", items: [
    ["Buffalo Chicken Salad", "Romaine, crispy buffalo chicken, tomato, cucumber, cheddar.", 12.49],
    ["Chef's Salad", "Romaine, turkey, boiled egg, cucumber, tomato.", 12.99],
    ["Greek Salad", "Romaine, cucumber, tomato, red onion, olives, feta.", 10.99],
    ["Classic Caesar Salad", "Romaine, parmesan, mozzarella, croutons, Caesar.", 9.99]
  ]},
  { id: "smoothies", name: "Smoothies", note: "Blended to order.", items: [
    ["Power Fuel", "Banana, peanut butter, protein, milk.", 10.99],
    ["Berry Bombshell", "Blueberry, strawberry, raspberry, yogurt.", 10.49],
    ["Green Machine", "Spinach, kale, banana, pineapple, apple juice.", 10.49],
    ["Sunrise Bliss", "Strawberry, banana, yogurt.", 9.99],
    ["Tropical Storm", "Mango, pineapple, orange juice.", 9.99]
  ]},
  { id: "sides", name: "Sides", note: "", items: [
    ["Mozzarella Sticks", "With marinara.", 6.99, "mozz-sticks"],
    ["Onion Rings", "Crispy, golden.", 4.99, "onion-rings"],
    ["Cheese Fries", "Fries under melted cheese.", 5.99],
    ["Curly Fries", "Spiral cut.", 5.49],
    ["French Fries", "Fried golden.", 4.49],
    ["Wedges", "Thick-cut potato.", 4.49],
    ["Macaroni & Cheese", "Baked.", 6.99],
    ["Jamaican Beef Patty", "The classic patty.", 4.49],
    ["Loaded Beef Patty", "With lettuce, tomato, onions, cheese.", 6.49],
    ["Macaroni Salad", "Served cold.", 6.49],
    ["Potato Salad", "Served cold.", 6.49],
    ["Tuna Salad", "House-seasoned.", 6.99],
    ["Rice", "A side of rice.", 6.49]
  ]}
];
