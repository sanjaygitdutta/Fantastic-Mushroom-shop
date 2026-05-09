export interface Ingredient {
    item: string;
    amount: string;
    productId?: string; // Link to a product in our shop
}

export interface Recipe {
    id: string;
    title: string;
    description: string;
    image: string;
    prepTime: string;
    cookTime: string;
    difficulty: 'Easy' | 'Medium' | 'Hard';
    servings: number;
    ingredients: Ingredient[];
    instructions: string[];
    tags: string[];
    translations?: Record<string, {
        title: string;
        description: string;
        ingredients: { item: string; amount: string }[];
        instructions: string[];
    }>;
}

export const recipes: Recipe[] = [
    {
        id: '1',
        title: 'Creamy Wild Mushroom Risotto',
        description: 'A luxurious Italian classic using our Dried Porcini and White Truffle Oil. Rich, earthy, and comforting.',
        image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&q=80&w=2070',
        prepTime: '20 min',
        cookTime: '40 min',
        difficulty: 'Medium',
        servings: 4,
        ingredients: [
            { item: 'Arborio Rice', amount: '2 cups' },
            { item: 'Dried Porcini Mushrooms', amount: '30g', productId: '3' },
            { item: 'Vegetable Broth', amount: '1.5 liters' },
            { item: 'White Wine', amount: '1/2 cup' },
            { item: 'Shallots', amount: '2, finely chopped' },
            { item: 'Butter', amount: '50g' },
            { item: 'Parmesan Cheese', amount: '1/2 cup' },
            { item: 'Truffle Infused Desi Ghee', amount: '1 tbsp', productId: '9' }
        ],
        instructions: [
            'Rehydrate the dried porcini mushrooms in warm water for 20 minutes. Drain and chop, reserving the liquid.',
            'In a large pan, sauté shallots in half the butter until soft.',
            'Add the rice and toast for 2 minutes until translucent at the edges.',
            'Pour in the wine and stir until evaporated.',
            'Gradually add warm broth (and mushroom liquid) one ladle at a time, stirring constantly.',
            'Stir in the chopped mushrooms halfway through cooking.',
            'Once rice is al dente, remove from heat. Stir in remaining butter, parmesan, and Truffle Ghee.',
            'Serve immediately with fresh parsley.'
        ],
        tags: ['Dinner', 'Italian', 'Vegetarian']
    },
    {
        id: '2',
        title: 'Lion\'s Mane "Crab" Cakes',
        description: 'A plant-based twist on the seafood favorite. Lion\'s Mane has a texture remarkably similar to crab meat.',
        image: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&q=80&w=2070',
        prepTime: '30 min',
        cookTime: '15 min',
        difficulty: 'Medium',
        servings: 2,
        ingredients: [
            { item: 'Fresh Lion\'s Mane (from Kit)', amount: '500g', productId: '2' },
            { item: 'Panko Breadcrumbs', amount: '1 cup' },
            { item: 'Mayonnaise', amount: '1/4 cup' },
            { item: 'Dijon Mustard', amount: '1 tsp' },
            { item: 'Old Bay Seasoning', amount: '1 tsp' },
            { item: 'Egg', amount: '1' },
            { item: 'Green Onions', amount: '2, chopped' }
        ],
        instructions: [
            'Shred the Lion\'s Mane mushrooms into small, crab-like pieces.',
            'Sauté the mushrooms in a dry pan to remove excess moisture.',
            'In a bowl, mix mayonnaise, mustard, egg, seasoning, and green onions.',
            'Fold in the mushrooms and breadcrumbs.',
            'Form into patties and refrigerate for 20 minutes to set.',
            'Pan-fry in oil until golden brown on both sides.',
            'Serve with lemon wedges and tartar sauce.'
        ],
        tags: ['Lunch', 'Vegan Option', 'Seafood Alternative']
    },
    {
        id: '3',
        title: 'Spicy Mushroom Masala Curry',
        description: 'A robust Indian curry featuring our Magic Mushroom Masala blend. Perfect with naan or rice.',
        image: 'https://images.unsplash.com/photo-1628294895950-98052523e036?auto=format&fit=crop&q=80&w=2070',
        prepTime: '15 min',
        cookTime: '30 min',
        difficulty: 'Easy',
        servings: 4,
        ingredients: [
            { item: 'Mixed Fresh Mushrooms', amount: '500g' },
            { item: 'Onions', amount: '2, chopped' },
            { item: 'Tomatoes', amount: '2, pureed' },
            { item: 'Ginger-Garlic Paste', amount: '1 tbsp' },
            { item: 'Magic Mushroom Masala', amount: '2 tbsp', productId: '10' },
            { item: 'Coconut Milk', amount: '1 cup' },
            { item: 'Cilantro', amount: 'For garnish' }
        ],
        instructions: [
            'Sauté onions in oil until golden brown. Add ginger-garlic paste and cook for 1 minute.',
            'Add tomato puree and cook until oil separates.',
            'Stir in the Magic Mushroom Masala and salt.',
            'Add mushrooms and toss to coat. Cook for 5 minutes.',
            'Pour in coconut milk and simmer for 10-15 minutes until sauce thickens.',
            'Garnish with fresh cilantro and serve hot.'
        ],
        tags: ['Dinner', 'Indian', 'Spicy']
    }
,
    {
        id: '2026-04-18',
        title: 'Tabbouleh',
        description: 'Tabbouleh is the vibrant, herbaceous soul of Lebanese cuisine, a refreshing salad that celebrates the bounty of fresh parsley and mint. This iconic dish perfectly balances the tang of lemon with the subtle chew of fine bulgur, offering a burst of Mediterranean sunshine in every bite.',
        image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&q=80&w=2058',
        prepTime: '30 min',
        cookTime: '30 min',
        difficulty: 'Easy',
        servings: 4,
        ingredients: [
            { item: 'Fine bulgur (burghul na\'am)', amount: '90g' },
            { item: 'Fresh flat-leaf parsley', amount: '2 large bunches (approx. 250g)' },
            { item: 'Fresh mint leaves', amount: '1/2 cup packed (approx. 30g)' },
            { item: 'Ripe tomatoes', amount: '2 medium (approx. 300g)' },
            { item: 'Spring onions', amount: '4-5 stalks' },
            { item: 'Fresh lemon juice', amount: '1/4 cup (approx. 60ml)' },
            { item: 'Extra virgin olive oil', amount: '1/4 cup (approx. 60ml)' },
            { item: 'Salt', amount: '1 tsp' },
            { item: 'Freshly ground black pepper', amount: '1/2 tsp (optional)' }
        ],
        instructions: [
            'Place the fine bulgur in a medium bowl. Rinse it quickly under cold water, then drain thoroughly using a fine-mesh sieve, pressing out excess water. Let it soak in the residual moisture for 20-30 minutes until plump and tender, then fluff with a fork.',
            'While the bulgur soaks, meticulously wash and thoroughly dry the parsley and mint. Finely chop the parsley, ensuring it\'s almost like a coarse powder, and finely chop the mint leaves. Place them in a large mixing bowl.',
            'Finely dice the ripe tomatoes, ensuring all excess liquid is drained. Thinly slice the spring onions, using both the white and light green parts. Add the chopped tomatoes and spring onions to the bowl with the herbs.',
            'Add the fluffed bulgur to the bowl containing the herbs and vegetables.',
            'Pour the fresh lemon juice and extra virgin olive oil over the mixture. Season with salt and freshly ground black pepper (if using).',
            'Gently toss all the ingredients together until well combined. Taste and adjust seasoning as needed. For best results, cover the bowl and let the tabbouleh rest in the refrigerator for at least 30 minutes to allow the flavors to meld.',
            'Serve chilled as a refreshing side dish, appetizer, or part of a mezze platter, often with crisp lettuce leaves for scooping.'
        ],
        tags: ['Lebanese', 'Appetizer', 'Vegan']
    }
,
    {
        id: '2026-04-19',
        title: 'Pulpo a la Gallega',
        description: 'This classic Galician dish features tender, perfectly cooked octopus, simply dressed with extra virgin olive oil, smoked paprika, and coarse sea salt. It\'s a quintessential tapa that embodies the rustic elegance of Spanish coastal cuisine.',
        image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=2071',
        prepTime: '20 min',
        cookTime: '40 min',
        difficulty: 'Medium',
        servings: 4,
        ingredients: [
            { item: 'Octopus', amount: '1 kg (cleaned, fresh or frozen)' },
            { item: 'Potatoes', amount: '500g (waxy variety, peeled)' },
            { item: 'Extra Virgin Olive Oil', amount: '100 ml' },
            { item: 'Smoked Paprika (Pimentón de la Vera)', amount: '2 teaspoons (dulce or agridulce)' },
            { item: 'Coarse Sea Salt', amount: '1 teaspoon (plus more for seasoning)' },
            { item: 'Bay Leaves', amount: '2 large' },
            { item: 'Onion', amount: '1 medium (peeled, halved)' },
            { item: 'Garlic', amount: '3 cloves (peeled, smashed)' }
        ],
        instructions: [
            'Step 1: Prepare the octopus. If using fresh octopus, freeze it for at least 24 hours and then thaw completely; this tenderizes the meat. Clean the octopus thoroughly under cold water, removing eyes and beak if not already done.',
            'Step 2: Bring a large pot of water to a rolling boil. Add the halved onion, bay leaves, and smashed garlic cloves to the water. "Frighten" the octopus by dipping it into the boiling water for 10 seconds, then removing it. Repeat this process three times; this helps to curl the tentacles and tenderize the meat.',
            'Step 3: After the third dip, submerge the octopus completely in the boiling water. Reduce heat to a gentle simmer, cover, and cook for 30-40 minutes, or until very tender when pierced with a knife at the thickest part of the tentacle. Cooking time varies with the size of the octopus.',
            'Step 4: While the octopus cooks, peel the potatoes and cut them into 1/2-inch thick slices. About 15 minutes before the octopus is done, add the potato slices to the same pot of simmering water (or cook separately in salted water) until tender but not mushy.',
            'Step 5: Once cooked, carefully remove the octopus from the water and let it rest on a cutting board for a few minutes. Drain the potatoes. Using kitchen shears or a sharp knife, cut the octopus tentacles into 1/2-inch thick rounds.',
            'Step 6: Arrange the cooked potato slices on a traditional wooden serving platter or individual plates. Neatly place the sliced octopus on top of the potatoes.',
            'Step 7: Drizzle generously with extra virgin olive oil. Sprinkle evenly with smoked paprika and a good pinch of coarse sea salt. Serve immediately, traditionally accompanied by a crisp Albariño wine.'
        ],
        tags: ['Spanish', 'Dinner', 'Non-Vegetarian']
    }
,
    {
        id: '2026-04-20',
        title: 'Pastitsio',
        description: 'Pastitsio, often called \'Greek lasagna\', is a beloved baked pasta dish featuring layers of seasoned ground meat, tubular pasta, and a rich, creamy béchamel sauce. It\'s a comforting classic from Greece, perfect for family gatherings and special occasions.',
        image: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&q=80&w=2070',
        prepTime: '30 min',
        cookTime: '45 min',
        difficulty: 'Medium',
        servings: 6,
        ingredients: [
            { item: 'Lean ground beef or lamb', amount: '500g' },
            { item: 'Bucatini or thick macaroni', amount: '300g' },
            { item: 'Large onion, finely chopped', amount: '1' },
            { item: 'Garlic cloves, minced', amount: '3' },
            { item: 'Crushed tomatoes', amount: '400g can' },
            { item: 'Dry red wine (optional, or beef broth)', amount: '120ml' },
            { item: 'Cinnamon stick', amount: '1' },
            { item: 'Unsalted butter', amount: '100g' },
            { item: 'All-purpose flour', amount: '100g' },
            { item: 'Full-fat milk', amount: '1 liter' },
            { item: 'Large eggs', amount: '2' },
            { item: 'Parmesan cheese, freshly grated', amount: '100g' }
        ],
        instructions: [
            'Step 1: Prepare the Meat Sauce (Ragu). Heat 2 tbsp olive oil in a large pan over medium-high heat. Sauté the chopped onion until softened, about 5 minutes. Add the minced garlic and cook for another minute until fragrant. Add the ground beef or lamb, breaking it up with a spoon, and brown thoroughly. Drain any excess fat.',
            'Step 2: Finish the Ragu. Stir in the crushed tomatoes, red wine (if using), cinnamon stick, 1 bay leaf, 1 tsp salt, and 1/2 tsp freshly ground black pepper. Bring to a simmer, then reduce heat to low, cover, and cook for at least 20 minutes, or up to 45 minutes, allowing the flavors to meld. Remove the cinnamon stick and bay leaf before assembly.',
            'Step 3: Cook the Pasta. While the ragu simmers, cook the bucatini or macaroni in a large pot of generously salted boiling water according to package directions until al dente. Drain well. In a large bowl, toss the hot pasta with 1 beaten egg and 2 tbsp of the grated Parmesan cheese. This helps bind the pasta layer.',
            'Step 4: Prepare the Béchamel Sauce. In a separate saucepan, melt the unsalted butter over medium heat. Whisk in the all-purpose flour and cook for 1-2 minutes, stirring constantly, to create a roux. Gradually whisk in the full-fat milk, a little at a time, ensuring no lumps form. Continue whisking until the sauce thickens to a creamy consistency, about 5-7 minutes.',
            'Step 5: Finish the Béchamel. Remove the béchamel from the heat. Whisk in the remaining beaten egg, 50g of the grated Parmesan cheese, 1/2 tsp freshly grated nutmeg, 1/2 tsp salt, and 1/4 tsp black pepper. Stir until smooth and well combined.',
            'Step 6: Assemble the Pastitsio. Preheat your oven to 180°C (350°F). Lightly grease a 9x13 inch (23x33 cm) baking dish. Spread the prepared pasta evenly over the bottom of the dish. Top with the meat sauce, spreading it out evenly over the pasta layer.',
            'Step 7: Top and Bake. Pour the creamy béchamel sauce evenly over the meat layer, ensuring it covers the entire surface. Sprinkle the remaining 48g of grated Parmesan cheese over the béchamel. Bake for 35-45 minutes, or until the top is golden brown and bubbly.',
            'Step 8: Rest and Serve. Remove the Pastitsio from the oven and let it rest for at least 15-20 minutes before slicing and serving. This allows the layers to set, making for cleaner cuts and a more enjoyable texture.'
        ],
        tags: ['Greek', 'Dinner', 'Non-Vegetarian']
    }
,
    {
        id: '2026-04-21',
        title: 'Merguez Sausages',
        description: 'These vibrant, spicy lamb sausages are a cornerstone of Moroccan cuisine, bursting with aromatic spices and a fiery kick. Traditionally grilled or pan-fried, they offer a taste of North African culinary heritage in every succulent bite.',
        image: 'https://images.unsplash.com/photo-1604152135912-04a022e23696?auto=format&fit=crop&q=80&w=2070',
        prepTime: '30 min',
        cookTime: '20 min',
        difficulty: 'Medium',
        servings: 4,
        ingredients: [
            { item: 'Boneless Lamb Shoulder', amount: '500g (finely minced or ground)' },
            { item: 'Lamb Fat (or Beef Fat)', amount: '100g (finely minced or ground)' },
            { item: 'Garlic Cloves', amount: '4 (large, minced)' },
            { item: 'Kashmiri Red Chili Powder', amount: '2 tbsp' },
            { item: 'Cumin Powder', amount: '1.5 tsp' },
            { item: 'Coriander Powder', amount: '1 tsp' },
            { item: 'Hot Red Chili Powder (or Cayenne)', amount: '1 tsp (adjust to taste)' },
            { item: 'Salt', amount: '1.5 tsp (or to taste)' },
            { item: 'Black Pepper', amount: '0.5 tsp (freshly ground)' },
            { item: 'Cold Water', amount: '2-3 tbsp' },
            { item: 'Natural Lamb Casings', amount: '2 meters (soaked and rinsed, optional)' }
        ],
        instructions: [
            'Step 1: Prepare the Meat: If not already minced, finely mince the boneless lamb shoulder and lamb fat together. For best texture, use a meat grinder with a medium die, or finely chop by hand.',
            'Step 2: Combine Spices: In a large bowl, combine the minced lamb and fat with minced garlic, Kashmiri red chili powder, cumin powder, coriander powder, hot red chili powder, salt, and black pepper.',
            'Step 3: Mix Thoroughly: Add the cold water and mix vigorously by hand for 5-7 minutes until the mixture becomes sticky and well-emulsified. This develops the protein and ensures a good texture.',
            'Step 4: Rest the Mixture: Cover the bowl and refrigerate the mixture for at least 2 hours, or preferably overnight. This allows the flavors to meld and the meat to firm up.',
            'Step 5: Stuff the Casings (Optional): If using casings, rinse them thoroughly and thread onto a sausage stuffer. Carefully stuff the lamb mixture into the casings, ensuring no air pockets. Twist or tie into 10-12 cm links. If not using casings, form the mixture into small, thick patties.',
            'Step 6: Cook the Sausages: Heat a grill pan or heavy-bottomed skillet over medium heat. Lightly oil the pan. Cook the Merguez sausages (or patties) for 8-12 minutes, turning occasionally, until beautifully browned on all sides and cooked through.',
            'Step 7: Serve: Serve the hot Merguez sausages immediately with crusty bread, a fresh salad, or a dollop of harissa on the side.'
        ],
        tags: ['Moroccan', 'Dinner', 'Non-Vegetarian']
    }
,
    {
        id: '2026-04-22',
        title: 'Bulgogi',
        description: 'A quintessential Korean dish, Bulgogi, meaning "fire meat," features thinly sliced marinated beef grilled or pan-fried to tender perfection. Its sweet and savory flavors, often with a hint of fruit, make it a beloved staple of Korean cuisine.',
        image: 'https://images.unsplash.com/photo-1593826904040-3b79e96a5d8f?auto=format&fit=crop&q=80&w=2070',
        prepTime: '25 min',
        cookTime: '15 min',
        difficulty: 'Medium',
        servings: 4,
        ingredients: [
            { item: 'Beef Sirloin or Ribeye, thinly sliced against the grain', amount: '500g' },
            { item: 'Soy Sauce', amount: '1/2 cup' },
            { item: 'Brown Sugar', amount: '2 tablespoons' },
            { item: 'Sesame Oil', amount: '2 tablespoons' },
            { item: 'Garlic, minced', amount: '5 cloves' },
            { item: 'Ginger, grated', amount: '1 tablespoon' },
            { item: 'Pear (Bosc or Anjou), grated', amount: '1/2 medium' },
            { item: 'Yellow Onion, thinly sliced', amount: '1/2 medium' },
            { item: 'Green Onions, chopped', amount: '3 stalks' },
            { item: 'Black Pepper, freshly ground', amount: '1/2 teaspoon' },
            { item: 'Toasted Sesame Seeds', amount: '1 teaspoon' }
        ],
        instructions: [
            'Step 1: Prepare the beef by slicing it very thinly against the grain. For easier slicing, you can partially freeze the beef for about 30 minutes before cutting.',
            'Step 2: In a large mixing bowl, combine the soy sauce, brown sugar, sesame oil, minced garlic, grated ginger, grated pear, and freshly ground black pepper. Whisk thoroughly until the sugar is dissolved.',
            'Step 3: Add the thinly sliced beef, sliced yellow onion, and half of the chopped green onions to the marinade. Mix everything well with your hands to ensure every piece of beef is coated. Cover the bowl and refrigerate for at least 1 hour, or preferably 4 hours to overnight for deeper flavor.',
            'Step 4: Heat a large skillet, cast-iron pan, or grill pan over medium-high heat. A tiny bit of oil can be added if your pan is not non-stick, though the fat from the beef usually suffices.',
            'Step 5: Add the marinated beef to the hot pan in a single layer, working in batches if necessary to avoid overcrowding. Overcrowding will steam the meat instead of searing it.',
            'Step 6: Cook the bulgogi for 2-3 minutes per side, until it is beautifully caramelized, tender, and cooked through. Be careful not to overcook, as this can make the beef tough.',
            'Step 7: Transfer the cooked bulgogi to a serving platter. Garnish generously with the remaining chopped green onions and toasted sesame seeds. Serve immediately with warm steamed rice and your favorite Korean banchan.'
        ],
        tags: ['Korean', 'Dinner', 'Non-Vegetarian']
    }
,
    {
        id: '2026-04-23',
        title: 'Com Tam (Broken Rice)',
        description: 'Com Tam is a beloved Vietnamese street food, a vibrant symphony of textures and flavors centered around delicate broken rice. This iconic dish typically features grilled pork, a savory egg meatloaf, and a fried egg, all brought together by a tangy-sweet nuoc cham dipping sauce.',
        image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80&w=2069',
        prepTime: '25 min',
        cookTime: '40 min',
        difficulty: 'Medium',
        servings: 4,
        ingredients: [
            { item: 'Broken rice (or short-grain rice)', amount: '500g' },
            { item: 'Pork shoulder or belly, thinly sliced', amount: '500g' },
            { item: 'Fish sauce (nuoc mam)', amount: '100ml' },
            { item: 'Granulated sugar', amount: '50g' },
            { item: 'Garlic, minced', amount: '6 cloves' },
            { item: 'Shallots, minced', amount: '2 medium' },
            { item: 'Lemongrass, finely chopped', amount: '2 stalks' },
            { item: 'Large eggs', amount: '6' },
            { item: 'Ground pork', amount: '200g' },
            { item: 'Dried wood ear mushrooms', amount: '10g' },
            { item: 'Glass noodles (vermicelli)', amount: '20g' },
            { item: 'White vinegar', amount: '50ml' }
        ],
        instructions: [
            'Step 1: Prepare the Grilled Pork (Suon Nuong). Slice pork thinly. Marinate with 2 tbsp fish sauce, 1 tbsp sugar, 3 minced garlic cloves, 1 minced shallot, and 1 tbsp finely chopped lemongrass. Mix well and refrigerate for at least 30 minutes, or preferably 2-3 hours.',
            'Step 2: Make Nuoc Cham (Dipping Sauce). In a bowl, combine 4 tbsp fish sauce, 3 tbsp sugar, 50ml white vinegar, the juice of 1 lime, and 100ml warm water. Add 3 minced garlic cloves and finely chopped bird\'s eye chili (if desired). Stir until the sugar completely dissolves.',
            'Step 3: Prepare Cha Trung (Steamed Egg Meatloaf). Soak wood ear mushrooms and glass noodles in warm water until soft. Drain and chop finely. In a bowl, combine ground pork, chopped mushrooms, chopped noodles, 2 eggs, 1 tbsp fish sauce, 1 tsp sugar, and a pinch of black pepper. Mix thoroughly. Steam in a greased heatproof dish for 20-25 minutes until firm and cooked through. Let cool slightly, then slice into serving pieces.',
            'Step 4: Cook the Broken Rice. Rinse the broken rice thoroughly under cold water until the water runs clear. Cook in a rice cooker or pot with a 1:1 water-to-rice ratio (e.g., 500g rice to 500ml water). Once cooked, let it steam for an additional 10-15 minutes to ensure a fluffy texture.',
            'Step 5: Grill the Pork. Preheat a grill or grill pan to medium-high heat. Grill the marinated pork slices for 3-4 minutes per side, or until beautifully caramelized, tender, and cooked through.',
            'Step 6: Fry the Eggs. Heat a little vegetable oil in a non-stick pan over medium heat. Fry 4 eggs sunny-side up, ensuring the yolks remain runny for a classic Com Tam presentation.',
            'Step 7: Assemble the Dish. On each plate, serve a generous portion of the broken rice. Arrange the grilled pork slices, a piece of the steamed egg meatloaf, and a fried egg on top. Garnish with fresh slices of cucumber and tomato.',
            'Step 8: Serve. Drizzle a spoonful of the prepared Nuoc Cham over the entire dish or serve it on the side for individual dipping. Enjoy this authentic Vietnamese classic immediately.'
        ],
        tags: ['Vietnamese', 'Dinner', 'Non-Vegetarian']
    }
,
    {
        id: '2026-04-24',
        title: 'New England Lobster Roll',
        description: 'The New England Lobster Roll is a quintessential American summer delight, featuring succulent lobster meat lightly dressed and nestled in a butter-toasted bun. This iconic dish celebrates the pristine flavors of the Atlantic, offering a taste of coastal luxury in every bite.',
        image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=2072',
        prepTime: '20 min',
        cookTime: '20 min',
        difficulty: 'Medium',
        servings: 4,
        ingredients: [
            { item: 'Cooked lobster meat', amount: '450g (from 2 x 500-600g lobsters)' },
            { item: 'Mayonnaise', amount: '1/2 cup (120ml)' },
            { item: 'Celery', amount: '2 stalks, finely diced' },
            { item: 'Fresh lemon juice', amount: '1 tbsp (15ml)' },
            { item: 'Fresh chives', amount: '2 tbsp, finely chopped (or fresh parsley)' },
            { item: 'Unsalted butter', amount: '4 tbsp (60g), melted' },
            { item: 'Hot dog buns (top-split preferred)', amount: '4' },
            { item: 'Salt', amount: '1/2 tsp (or to taste)' },
            { item: 'Black pepper', amount: '1/4 tsp (freshly ground, or to taste)' },
            { item: 'Paprika (for garnish, optional)', amount: 'Pinch' }
        ],
        instructions: [
            'Step 1: If using live lobsters, bring a large pot of heavily salted water to a rolling boil. Carefully add the lobsters, headfirst, and boil for 10-12 minutes for 500-600g lobsters, or until bright red. Remove and plunge into an ice bath to stop cooking.',
            'Step 2: Once the lobsters are cooled, twist off the claws and tail. Crack open the claws and knuckles to extract the meat. Split the tail lengthwise and remove the dark vein, then extract the tail meat. Roughly chop the lobster meat into bite-sized pieces.',
            'Step 3: In a medium bowl, combine the mayonnaise, finely diced celery, fresh lemon juice, chopped chives (or parsley), salt, and black pepper. Mix well until thoroughly combined.',
            'Step 4: Gently fold the chopped lobster meat into the mayonnaise mixture. Be careful not to overmix, as you want to preserve the delicate texture of the lobster. Taste and adjust seasoning if necessary.',
            'Step 5: Heat a large skillet or griddle over medium heat. Brush the outsides of the hot dog buns generously with melted butter. Place the buttered sides down on the skillet and toast for 2-3 minutes per side, or until golden brown and crisp.',
            'Step 6: Carefully open each toasted bun and fill generously with the prepared lobster salad.',
            'Step 7: Serve immediately, perhaps with a sprinkle of paprika or an extra chive sprig for garnish, alongside potato chips or a simple green salad for a complete New England experience.'
        ],
        tags: ['American', 'Dinner', 'Non-Vegetarian']
    }
,
    {
        id: '2026-04-25',
        title: 'Arroz con Leche',
        description: 'This creamy, comforting rice pudding is a beloved staple in Peruvian homes, a sweet embrace of cinnamon and citrus that evokes cherished memories. It\'s a simple yet elegant dessert, deeply rooted in the country\'s culinary soul, perfect for any occasion.',
        image: 'https://images.unsplash.com/photo-1631292784640-2b24be784d5d?auto=format&fit=crop&q=80&w=2069',
        prepTime: '20 min',
        cookTime: '40 min',
        difficulty: 'Medium',
        servings: 4,
        ingredients: [
            { item: 'Short-grain white rice (e.g., Arborio or Gobindobhog)', amount: '1 cup (200g)' },
            { item: 'Water', amount: '2 cups (480ml)' },
            { item: 'Whole milk', amount: '4 cups (960ml)' },
            { item: 'Sweetened condensed milk', amount: '1 can (397g)' },
            { item: 'Granulated sugar', amount: '1/2 cup (100g)' },
            { item: 'Cinnamon sticks', amount: '2 (3-inch)' },
            { item: 'Whole cloves', amount: '4-5' },
            { item: 'Lemon zest strip', amount: '1 (from 1/2 lemon)' },
            { item: 'Vanilla extract', amount: '1 teaspoon' },
            { item: 'Salt', amount: '1/4 teaspoon' },
            { item: 'Golden raisins', amount: '1/2 cup (75g)' },
            { item: 'Ground cinnamon', amount: 'For garnish' }
        ],
        instructions: [
            'Rinse the rice thoroughly under cold water until the water runs clear. In a heavy-bottomed pot, combine the rinsed rice with 2 cups of water, the cinnamon sticks, whole cloves, and lemon zest strip. Bring to a boil over medium-high heat, then reduce heat to low, cover, and simmer for 10-12 minutes, or until most of the water has been absorbed.',
            'Once the water is mostly absorbed, pour in the whole milk, add the granulated sugar and salt. Stir gently to combine. Increase the heat to medium-low and bring the mixture to a gentle simmer, stirring occasionally to prevent sticking.',
            'Continue to simmer, stirring frequently (especially towards the bottom of the pot), for 20-25 minutes, or until the rice is tender and the mixture has thickened to a creamy consistency. The rice should be fully cooked but still hold its shape.',
            'Carefully remove and discard the cinnamon sticks, whole cloves, and lemon zest strip from the pot. Stir in the sweetened condensed milk, vanilla extract, and golden raisins.',
            'Cook for another 5-7 minutes, stirring constantly, allowing the flavors to meld and the pudding to thicken further. The consistency should be rich and creamy, but it will thicken more as it cools.',
            'Remove the pot from the heat. Cover and let the Arroz con Leche rest for at least 10-15 minutes. This allows the rice to absorb more liquid and the flavors to deepen.',
            'Serve warm or chilled in individual bowls. Garnish generously with a dusting of ground cinnamon before serving. For an extra touch, a sprinkle of toasted shredded coconut can also be added.'
        ],
        tags: ['Peruvian', 'Dessert', 'Vegetarian']
    }
,
    {
        id: '2026-04-26',
        title: 'Zilzil Tibs',
        description: 'A beloved Ethiopian stir-fry featuring tender strips of beef sautéed with aromatic spices, Niter Kibbeh, and a vibrant Berbere blend, often served with injera.',
        image: 'https://images.unsplash.com/photo-1567364816519-cbc9c4e51d8b?auto=format&fit=crop&q=80&w=2070',
        prepTime: '20 min',
        cookTime: '40 min',
        difficulty: 'Medium',
        servings: 4,
        ingredients: [
            { item: 'Beef Sirloin or Tenderloin, thinly sliced into strips', amount: '500g' },
            { item: 'Spiced Clarified Butter (Niter Kibbeh)', amount: '4 tbsp' },
            { item: 'Berbere Spice Blend', amount: '2 tbsp' },
            { item: 'Red Onion, thinly sliced', amount: '1 large' },
            { item: 'Garlic, minced', amount: '4 cloves' },
            { item: 'Fresh Ginger, grated', amount: '1 tbsp' },
            { item: 'Green Chili, finely chopped (adjust to taste)', amount: '1-2' }
        ],
        instructions: [
            'Heat 2 tablespoons of Niter Kibbeh in a large skillet or pot over medium-high heat.',
            'Add the beef strips and sear quickly until browned on all sides, then remove from the pan and set aside.',
            'In the same pan, add the remaining Niter Kibbeh, then sauté the red onion until softened, followed by garlic, ginger, and green chili for 2 minutes.',
            'Stir in the Berbere spice blend and cook for another minute until fragrant, then return the seared beef to the pan.',
            'Toss everything together, ensuring the beef is well coated with the spices, and cook for 5-7 minutes until the beef is tender and flavors are melded.',
            'Season with salt to taste and serve immediately, traditionally with injera.'
        ],
        tags: ['Ethiopian', 'Dinner', 'Non-Vegetarian'],
        translations: {
            hi: {
                title: 'ज़िलज़िल टिब्स',
                description: 'एक प्रिय इथियोपियाई स्टिर-फ्राई जिसमें सुगंधित मसालों, नाइटर किब्बे और एक जीवंत बेरबेरे मिश्रण के साथ तले हुए बीफ़ के कोमल स्ट्रिप्स होते हैं, जिसे अक्सर इंजेरा के साथ परोसा जाता है।',
                ingredients: [{ item: 'बीफ़ सिरोलिन या टेंडरलॉइन, पतले स्ट्रिप्स में कटा हुआ', amount: '500g' }, { item: 'मसालेदार स्पष्ट मक्खन (नाइटर किब्बे)', amount: '4 बड़े चम्मच' }, { item: 'बेरबेरे मसाला मिश्रण', amount: '2 बड़े चम्मच' }, { item: 'लाल प्याज, पतला कटा हुआ', amount: '1 बड़ा' }, { item: 'लहसुन, बारीक कटा हुआ', amount: '4 कलियाँ' }, { item: 'ताजा अदरक, कद्दूकस किया हुआ', amount: '1 बड़ा चम्मच' }, { item: 'हरी मिर्च, बारीक कटी हुई (स्वाद अनुसार समायोजित करें)', amount: '1-2' }],
                instructions: ['एक बड़ी कड़ाही या बर्तन में मध्यम-तेज आंच पर 2 बड़े चम्मच नाइटर किब्बे गरम करें।', 'बीफ़ स्ट्रिप्स डालें और सभी तरफ से भूरा होने तक जल्दी से भूनें, फिर पैन से निकालकर एक तरफ रख दें।', 'उसी पैन में बचा हुआ नाइटर किब्बे डालें, फिर लाल प्याज को नरम होने तक भूनें, उसके बाद लहसुन, अदरक और हरी मिर्च को 2 मिनट तक भूनें।', 'बेरबेरे मसाला मिश्रण डालकर एक और मिनट तक सुगंधित होने तक पकाएं, फिर भुने हुए बीफ़ को पैन में वापस डालें।', 'सब कुछ एक साथ मिलाएं, सुनिश्चित करें कि बीफ़ मसालों से अच्छी तरह लिपटा हुआ है, और 5-7 मिनट तक पकाएं जब तक कि बीफ़ नरम न हो जाए और स्वाद मिल न जाए।', 'स्वाद अनुसार नमक डालें और तुरंत परोसें, पारंपरिक रूप से इंजेरा के साथ।']
            },
            bn: {
                title: 'জিলজিল টিবস',
                description: 'একটি প্রিয় ইথিওপিয়ান স্ট্রি-ফ্রাই যেখানে সুগন্ধি মশলা, নাইটার কিব্বে এবং একটি প্রাণবন্ত বেরবেরে মিশ্রণের সাথে ভাজা গরুর মাংসের নরম ফালি থাকে, যা প্রায়শই ইনজেরার সাথে পরিবেশন করা হয়।',
                ingredients: [{ item: 'গরুর মাংসের সিরলইন বা টেন্ডারলইন, পাতলা ফালি করে কাটা', amount: '500g' }, { item: 'মশলাযুক্ত পরিষ্কার মাখন (নাইটার কিব্বে)', amount: '4 টেবিল চামচ' }, { item: 'বেরবেরে মশলা মিশ্রণ', amount: '2 টেবিল চামচ' }, { item: 'লাল পেঁয়াজ, পাতলা করে কাটা', amount: '1টি বড়' }, { item: 'রসুন, কুচি করা', amount: '4 কোয়া' }, { item: 'তাজা আদা, গ্রেট করা', amount: '1 টেবিল চামচ' }, { item: 'কাঁচা লঙ্কা, মিহি করে কাটা (স্বাদমতো সামঞ্জস্য করুন)', amount: '1-2টি' }],
                instructions: ['একটি বড় কড়াই বা পাত্রে মাঝারি-উচ্চ আঁচে 2 টেবিল চামচ নাইটার কিব্বে গরম করুন।', 'গরুর মাংসের ফালিগুলি যোগ করুন এবং সব দিক থেকে বাদামী হওয়া পর্যন্ত দ্রুত ভাজুন, তারপর প্যান থেকে সরিয়ে একপাশে রাখুন।', 'একই প্যানে বাকি নাইটার কিব্বে যোগ করুন, তারপর লাল পেঁয়াজ নরম হওয়া পর্যন্ত ভাজুন, এরপর রসুন, আদা এবং কাঁচা লঙ্কা 2 মিনিট ভাজুন।', 'বেরবেরে মশলা মিশ্রণ মিশিয়ে আরও এক মিনিট সুগন্ধি হওয়া পর্যন্ত রান্না করুন, তারপর ভাজা গরুর মাংস প্যানে ফিরিয়ে আনুন।', 'সবকিছু একসাথে মেশান, নিশ্চিত করুন যে গরুর মাংস মশলা দিয়ে ভালোভাবে আবৃত হয়েছে, এবং 5-7 মিনিট রান্না করুন যতক্ষণ না গরুর মাংস নরম হয় এবং স্বাদগুলি মিশে যায়।', 'স্বাদমতো লবণ দিন এবং ঐতিহ্যগতভাবে ইনজেরার সাথে অবিলম্বে পরিবেশন করুন।']
            },
            mr: {
                title: 'झिलझिल टिब्स',
                description: 'एक आवडता इथिओपियन स्टिर-फ्राय ज्यात सुगंधी मसाले, नायटर किब्बे आणि एक ज्वलंत बेरबेरे मिश्रणासह तळलेल्या बीफच्या कोमल पट्ट्या असतात, जे अनेकदा इंजेरासोबत दिले जाते.',
                ingredients: [{ item: 'बीफ सिरलोईन किंवा टेंडरलॉईन, पातळ पट्ट्यांमध्ये कापलेले', amount: '500g' }, { item: 'मसालेदार स्पष्ट लोणी (नायटर किब्बे)', amount: '4 चमचे' }, { item: 'बेरबेरे मसाला मिश्रण', amount: '2 चमचे' }, { item: 'लाल कांदा, पातळ कापलेला', amount: '1 मोठा' }, { item: 'लसूण, बारीक चिरलेला', amount: '4 पाकळ्या' }, { item: 'ताजे आले, किसलेले', amount: '1 चमचा' }, { item: 'हिरवी मिरची, बारीक चिरलेली (चवीनुसार समायोजित करा)', amount: '1-2' }],
                instructions: ['एका मोठ्या कढईत किंवा भांड्यात मध्यम-उच्च आचेवर 2 चमचे नायटर किब्बे गरम करा.', 'बीफच्या पट्ट्या घाला आणि सर्व बाजूंनी तपकिरी होईपर्यंत लवकर परतून घ्या, नंतर पॅनमधून काढून बाजूला ठेवा.', 'त्याच पॅनमध्ये उरलेले नायटर किब्बे घाला, नंतर लाल कांदा मऊ होईपर्यंत परतून घ्या, त्यानंतर लसूण, आले आणि हिरवी मिरची 2 मिनिटे परतून घ्या.', 'बेरबेरे मसाला मिश्रण घालून आणखी एक मिनिट सुगंध येईपर्यंत शिजवा, नंतर परतलेले बीफ पॅनमध्ये परत घाला.', 'सर्वकाही एकत्र मिसळा, बीफ मसाल्यांनी चांगले लेपले आहे याची खात्री करा आणि बीफ मऊ होईपर्यंत आणि चव मिसळेपर्यंत 5-7 मिनिटे शिजवा.', 'चवीनुसार मीठ घाला आणि लगेच सर्व्ह करा, पारंपरिकपणे इंजेरासोबत.']
            },
            te: {
                title: 'జిల్జిల్ టిబ్స్',
                description: 'సుగంధ ద్రవ్యాలు, నైటర్ కిబ్బే మరియు శక్తివంతమైన బెర్బెరే మిశ్రమంతో వేయించిన లేత గొడ్డు మాంసం ముక్కలతో కూడిన ఒక ప్రియమైన ఇథియోపియన్ స్టిర్-ఫ్రై, తరచుగా ఇంజెరాతో వడ్డిస్తారు.',
                ingredients: [{ item: 'గొడ్డు మాంసం సిర్లోయిన్ లేదా టెండర్లోయిన్, సన్నని ముక్కలుగా కట్ చేయబడింది', amount: '500g' }, { item: 'మసాలా దినుసులతో కూడిన నెయ్యి (నైటర్ కిబ్బే)', amount: '4 టేబుల్ స్పూన్లు' }, { item: 'బెర్బెరే మసాలా మిశ్రమం', amount: '2 టేబుల్ స్పూన్లు' }, { item: 'ఎర్ర ఉల్లిపాయ, సన్నగా తరిగినది', amount: '1 పెద్దది' }, { item: 'వెల్లుల్లి, తరిగినది', amount: '4 రెబ్బలు' }, { item: 'తాజా అల్లం, తురిమినది', amount: '1 టేబుల్ స్పూన్' }, { item: 'పచ్చిమిర్చి, సన్నగా తరిగినది (రుచికి తగ్గట్టు సర్దుబాటు చేయండి)', amount: '1-2' }],
                instructions: ['ఒక పెద్ద స్కిల్లెట్ లేదా పాత్రలో మధ్యస్థ-అధిక వేడి మీద 2 టేబుల్ స్పూన్ల నైటర్ కిబ్బే వేడి చేయండి.', 'గొడ్డు మాంసం ముక్కలను వేసి, అన్ని వైపులా గోధుమ రంగు వచ్చేవరకు త్వరగా వేయించి, ఆపై పాన్ నుండి తీసి పక్కన పెట్టండి.', 'అదే పాన్‌లో మిగిలిన నైటర్ కిబ్బే వేసి, ఎర్ర ఉల్లిపాయ మెత్తబడే వరకు వేయించి, ఆపై వెల్లుల్లి, అల్లం మరియు పచ్చిమిర్చిని 2 నిమిషాలు వేయించండి.', 'బెర్బెరే మసాలా మిశ్రమాన్ని కలిపి, సువాసన వచ్చే వరకు మరో నిమిషం ఉడికించి, ఆపై వేయించిన గొడ్డు మాంసాన్ని తిరిగి పాన్‌లోకి వేయండి.', 'అన్నింటినీ కలిపి, గొడ్డు మాంసం మసాలాతో బాగా పూత పూసిందని నిర్ధారించుకోండి మరియు గొడ్డు మాంసం మెత్తగా అయ్యే వరకు మరియు రుచులు కలిసిపోయే వరకు 5-7 నిమిషాలు ఉడికించండి.', 'రుచికి సరిపడా ఉప్పు వేసి, సాంప్రదాయకంగా ఇంజెరాతో వెంటనే వడ్డించండి.']
            },
            ta: {
                title: 'ஸில்ஸில் டிப்ஸ்',
                description: 'நறுமண மசாலாப் பொருட்கள், நைட்டர் கிப்பே மற்றும் துடிப்பான பெர்பெரே கலவையுடன் வதக்கிய மென்மையான மாட்டிறைச்சி துண்டுகளைக் கொண்ட ஒரு பிரபலமான எத்தியோப்பியன் ஸ்டிர்-ஃப்ரை, இது பெரும்பாலும் இன்ஜெராவுடன் பரிமாறப்படுகிறது.',
                ingredients: [{ item: 'மாட்டிறைச்சி சில்லறை அல்லது டெண்டர்லோயின், மெல்லிய துண்டுகளாக நறுக்கப்பட்டது', amount: '500g' }, { item: 'மசாலா கலந்த தெளிந்த வெண்ணெய் (நைட்டர் கிப்பே)', amount: '4 தேக்கரண்டி' }, { item: 'பெர்பெரே மசாலா கலவை', amount: '2 தேக்கரண்டி' }, { item: 'சிவப்பு வெங்காயம், மெல்லியதாக நறுக்கப்பட்டது', amount: '1 பெரியது' }, { item: 'பூண்டு, பொடியாக நறுக்கப்பட்டது', amount: '4 பற்கள்' }, { item: 'புதிய இஞ்சி, துருவியது', amount: '1 தேக்கரண்டி' }, { item: 'பச்சை மிளகாய், பொடியாக நறுக்கப்பட்டது (சுவைக்கு ஏற்ப சரிசெய்யவும்)', amount: '1-2' }],
                instructions: ['ஒரு பெரிய வாணலி அல்லது பாத்திரத்தில் நடுத்தர-அதிக வெப்பத்தில் 2 தேக்கரண்டி நைட்டர் கிப்பேவை சூடாக்கவும்.', 'மாட்டிறைச்சி துண்டுகளைச் சேர்த்து, எல்லாப் பக்கங்களிலும் பழுப்பு நிறமாக மாறும் வரை விரைவாக வதக்கி, பின்னர் பாத்திரத்திலிருந்து எடுத்து தனியாக வைக்கவும்.', 'அதே பாத்திரத்தில் மீதமுள்ள நைட்டர் கிப்பேவைச் சேர்த்து, பின்னர் சிவப்பு வெங்காயம் மென்மையாகும் வரை வதக்கி, அதைத் தொடர்ந்து பூண்டு, இஞ்சி மற்றும் பச்சை மிளகாயை 2 நிமிடங்கள் வதக்கவும்.', 'பெர்பெரே மசாலா கலவையைச் சேர்த்து, நறுமணம் வரும் வரை ஒரு நிமிடம் சமைத்து, பின்னர் வதக்கிய மாட்டிறைச்சியை மீண்டும் பாத்திரத்தில் சேர்க்கவும்.', 'எல்லாவற்றையும் ஒன்றாகக் கலந்து, மாட்டிறைச்சி மசாலாப் பொருட்களால் நன்கு பூசப்பட்டிருப்பதை உறுதிசெய்து, மாட்டிறைச்சி மென்மையாகும் வரை மற்றும் சுவைகள் கலக்கும் வரை 5-7 நிமிடங்கள் சமைக்கவும்.', 'சுவைக்கு ஏற்ப உப்பு சேர்த்து, பாரம்பரியமாக இன்ஜெராவுடன் உடனடியாக பரிமாறவும்.']
            }
        }
    }
,
    {
        id: '2026-04-27',
        title: 'Chapli Kebab',
        description: 'A quintessential Pakistani shallow-fried kebab, known for its rustic texture and bold, spicy flavors, often enjoyed with naan or chutney.',
        image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&q=80&w=2070',
        prepTime: '20 min',
        cookTime: '40 min',
        difficulty: 'Medium',
        servings: 4,
        ingredients: [
            { item: 'Minced Beef or Lamb (Keema)', amount: '500g' },
            { item: 'Onion, finely chopped and squeezed dry', amount: '1 large' },
            { item: 'Tomato, deseeded and finely chopped', amount: '1 medium' },
            { item: 'Fresh Herbs & Aromatics (Green Chillies, Coriander Leaves, Ginger-Garlic Paste)', amount: '2-3 green chillies, 1/4 cup coriander, 1 tbsp paste' },
            { item: 'Chapli Kebab Spice Blend (Crushed Coriander, Anardana, Cumin, Red Chilli Flakes, Salt)', amount: '2 tbsp' },
            { item: 'Binding Agents (Egg, Cornflour)', amount: '1 egg, 2 tbsp cornflour' },
            { item: 'Oil', amount: 'For shallow frying' }
        ],
        instructions: [
            'Step 1: In a large bowl, combine the minced meat with the chopped onion, tomato, fresh herbs & aromatics, and the chapli kebab spice blend.',
            'Step 2: Add the beaten egg and cornflour to the mixture, then knead thoroughly for 5-7 minutes until well combined and slightly sticky.',
            'Step 3: Divide the mixture into equal portions and flatten each into a thin, large patty (chapli shape), optionally pressing a small tomato slice onto the center.',
            'Step 4: Heat oil in a large frying pan over medium heat, then shallow-fry the kebabs for 5-7 minutes per side until golden brown and cooked through.',
            'Step 5: Serve the hot Chapli Kebabs immediately with warm naan, raita, or your favorite chutney.'
        ],
        tags: ['Pakistani', 'Dinner', 'Non-Vegetarian'],
        translations: {
            hi: {
                title: 'चपली कबाब',
                description: 'एक विशिष्ट पाकिस्तानी शैलो-फ्राइड कबाब, जो अपनी देहाती बनावट और तीखे, मसालेदार स्वाद के लिए जाना जाता है, जिसे अक्सर नान या चटनी के साथ परोसा जाता है।',
                ingredients: [{ item: 'कीमा (भेड़ या बीफ का)', amount: '500 ग्राम' }, { item: 'प्याज, बारीक कटा और निचोड़ा हुआ', amount: '1 बड़ा' }, { item: 'टमाटर, बीज निकाले हुए और बारीक कटा हुआ', amount: '1 मध्यम' }, { item: 'ताज़ी जड़ी-बूटियाँ और सुगंधित सामग्री (हरी मिर्च, धनिया पत्ती, अदरक-लहसुन का पेस्ट)', amount: '2-3 हरी मिर्च, 1/4 कप धनिया, 1 बड़ा चम्मच पेस्ट' }, { item: 'चपली कबाब मसाला मिश्रण (कुटा हुआ धनिया, अनारदाना, जीरा, लाल मिर्च के गुच्छे, नमक)', amount: '2 बड़े चम्मच' }, { item: 'बांधने वाले एजेंट (अंडा, कॉर्नफ्लोर)', amount: '1 अंडा, 2 बड़े चम्मच कॉर्नफ्लोर' }, { item: 'तेल', amount: 'शैलो-फ्राई करने के लिए' }],
                instructions: ['Step 1: एक बड़े कटोरे में, कीमा को कटे हुए प्याज, टमाटर, ताज़ी जड़ी-बूटियों और सुगंधित सामग्री, और चपली कबाब मसाला मिश्रण के साथ मिलाएं।', 'Step 2: मिश्रण में फेंटा हुआ अंडा और कॉर्नफ्लोर डालें, फिर अच्छी तरह से मिलने और थोड़ा चिपचिपा होने तक 5-7 मिनट के लिए गूंधें।', 'Step 3: मिश्रण को बराबर भागों में बांटें और प्रत्येक को एक पतली, बड़ी टिक्की (चपली आकार) में चपटा करें, वैकल्पिक रूप से प्रत्येक के केंद्र पर एक छोटा टमाटर का टुकड़ा दबाएं।', 'Step 4: एक बड़े फ्राइंग पैन में मध्यम आंच पर तेल गरम करें, फिर कबाब को प्रत्येक तरफ 5-7 मिनट के लिए शैलो-फ्राई करें जब तक कि वे सुनहरे भूरे और पूरी तरह से पक न जाएं।', 'Step 5: गरमागरम चपली कबाब को तुरंत गर्म नान, रायता या अपनी पसंदीदा चटनी के साथ परोसें।']
            },
            bn: {
                title: 'চাপলি কাবাব',
                description: 'একটি অপরিহার্য পাকিস্তানি শ্যালো-ফ্রাইড কাবাব, যা এর গ্রামীণ গঠন এবং সাহসী, মশলাদার স্বাদের জন্য পরিচিত, প্রায়শই নান বা চাটনির সাথে উপভোগ করা হয়।',
                ingredients: [{ item: 'কিমা করা গরুর মাংস বা ভেড়ার মাংস (কিমার)', amount: '500 গ্রাম' }, { item: 'পেঁয়াজ, মিহি করে কুচি করে জল ঝরানো', amount: '1টি বড়' }, { item: 'টমেটো, বীজ ছাড়ানো এবং মিহি করে কুচি করা', amount: '1টি মাঝারি' }, { item: 'তাজা ভেষজ ও সুগন্ধি (কাঁচা লঙ্কা, ধনে পাতা, আদা-রসুন বাটা)', amount: '2-3টি কাঁচা লঙ্কা, 1/4 কাপ ধনে, 1 টেবিল চামচ বাটা' }, { item: 'চাপলি কাবাব মশলা মিশ্রণ (থেঁতো করা ধনে, আনারদানা, জিরা, লাল লঙ্কার ফ্লেক্স, লবণ)', amount: '2 টেবিল চামচ' }, { item: 'বাঁধাইকারী উপাদান (ডিম, কর্নফ্লাওয়ার)', amount: '1টি ডিম, 2 টেবিল চামচ কর্নফ্লাওয়ার' }, { item: 'তেল', amount: 'শ্যালো ফ্রাই করার জন্য' }],
                instructions: ['Step 1: একটি বড় বাটিতে, কিমা করা মাংসের সাথে কুচি করা পেঁয়াজ, টমেটো, তাজা ভেষজ ও সুগন্ধি এবং চাপলি কাবাব মশলা মিশ্রণ একত্রিত করুন।', 'Step 2: মিশ্রণে ফেটানো ডিম এবং কর্নফ্লাওয়ার যোগ করুন, তারপর 5-7 মিনিটের জন্য ভালোভাবে মেখে নিন যতক্ষণ না এটি ভালোভাবে মিশে যায় এবং সামান্য আঠালো হয়।', 'Step 3: মিশ্রণটিকে সমান অংশে ভাগ করুন এবং প্রতিটি অংশকে একটি পাতলা, বড় প্যাটি (চাপলি আকৃতি) তৈরি করুন, ঐচ্ছিকভাবে প্রতিটি কেন্দ্রে একটি ছোট টমেটোর টুকরা চাপুন।', 'Step 4: একটি বড় ফ্রাইং প্যানে মাঝারি আঁচে তেল গরম করুন, তারপর কাবাবগুলিকে প্রতি পাশে 5-7 মিনিটের জন্য শ্যালো-ফ্রাই করুন যতক্ষণ না সোনালি বাদামী এবং ভালোভাবে রান্না হয়।', 'Step 5: গরম চাপলি কাবাবগুলি অবিলম্বে গরম নান, রায়তা বা আপনার পছন্দের চাটনির সাথে পরিবেশন করুন।']
            },
            mr: {
                title: 'चपली कबाब',
                description: 'एक उत्कृष्ट पाकिस्तानी शॅलो-फ्राइड कबाब, जो त्याच्या ग्रामीण पोत आणि तीव्र, मसालेदार चवीसाठी ओळखला जातो, जो अनेकदा नान किंवा चटणीसोबत खाल्ला जातो.',
                ingredients: [{ item: 'खिमा (बीफ किंवा मेंढीचे मांस)', amount: '500 ग्रॅम' }, { item: 'कांदा, बारीक चिरलेला आणि पाणी पिळून काढलेला', amount: '1 मोठा' }, { item: 'टोमॅटो, बिया काढलेला आणि बारीक चिरलेला', amount: '1 मध्यम' }, { item: 'ताजी औषधी वनस्पती आणि सुगंधी पदार्थ (हिरवी मिरची, कोथिंबीर, आले-लसूण पेस्ट)', amount: '2-3 हिरव्या मिरच्या, 1/4 कप कोथिंबीर, 1 मोठा चमचा पेस्ट' }, { item: 'चपली कबाब मसाला मिश्रण (कुटलेली धणे, डाळिंबाचे दाणे, जिरे, लाल मिरचीचे फ्लेक्स, मीठ)', amount: '2 मोठे चमचे' }, { item: 'बांधणारे घटक (अंडी, कॉर्नफ्लोर)', amount: '1 अंडे, 2 मोठे चमचे कॉर्नफ्लोर' }, { item: 'तेल', amount: 'शॅलो फ्राय करण्यासाठी' }],
                instructions: ['Step 1: एका मोठ्या भांड्यात, खिमा, चिरलेला कांदा, टोमॅटो, ताजी औषधी वनस्पती आणि सुगंधी पदार्थ, आणि चपली कबाब मसाला मिश्रण एकत्र करा.', 'Step 2: मिश्रणात फेटलेले अंडे आणि कॉर्नफ्लोर घाला, नंतर चांगले मिसळेपर्यंत आणि थोडे चिकट होईपर्यंत 5-7 मिनिटे चांगले मळून घ्या.', 'Step 3: मिश्रणाचे समान भाग करा आणि प्रत्येक भागाला पातळ, मोठ्या पॅटी (चपली आकार) मध्ये चपटे करा, इच्छित असल्यास प्रत्येकच्या मध्यभागी टोमॅटोचा एक छोटा तुकडा दाबा.', 'Step 4: एका मोठ्या तळण्याच्या पॅनमध्ये मध्यम आचेवर तेल गरम करा, नंतर कबाब दोन्ही बाजूंनी 5-7 मिनिटे शॅलो-फ्राय करा जोपर्यंत ते सोनेरी तपकिरी आणि पूर्णपणे शिजत नाहीत.', 'Step 5: गरमागरम चपली कबाब लगेच गरम नान, रायता किंवा तुमच्या आवडत्या चटणीसोबत सर्व्ह करा.']
            },
            te: {
                title: 'చప్లీ కబాబ్',
                description: 'ఇది ఒక విలక్షణమైన పాకిస్తానీ షాలో-ఫ్రైడ్ కబాబ్, ఇది దాని గ్రామీణ ఆకృతికి మరియు ఘాటైన, కారంగా ఉండే రుచులకు ప్రసిద్ధి చెందింది, తరచుగా నాన్ లేదా చట్నీతో ఆనందించబడుతుంది.',
                ingredients: [{ item: 'కీమా (గొడ్డు మాంసం లేదా గొర్రె మాంసం)', amount: '500 గ్రాములు' }, { item: 'ఉల్లిపాయ, సన్నగా తరిగి నీరు పిండినది', amount: '1 పెద్దది' }, { item: 'టమాటో, గింజలు తీసి సన్నగా తరిగినది', amount: '1 మధ్యస్థం' }, { item: 'తాజా మూలికలు & సుగంధ ద్రవ్యాలు (పచ్చి మిరపకాయలు, కొత్తిమీర ఆకులు, అల్లం-వెల్లుల్లి పేస్ట్)', amount: '2-3 పచ్చి మిరపకాయలు, 1/4 కప్పు కొత్తిమీర, 1 టేబుల్ స్పూన్ పేస్ట్' }, { item: 'చప్లీ కబాబ్ మసాలా మిశ్రమం (దంచిన ధనియాలు, దానిమ్మ గింజలు, జీలకర్ర, ఎర్ర మిరప రేకులు, ఉప్పు)', amount: '2 టేబుల్ స్పూన్లు' }, { item: 'బైండింగ్ ఏజెంట్లు (గుడ్డు, కార్న్‌ఫ్లోర్)', amount: '1 గుడ్డు, 2 టేబుల్ స్పూన్లు కార్న్‌ఫ్లోర్' }, { item: 'నూనె', amount: 'షాలో ఫ్రై చేయడానికి' }],
                instructions: ['Step 1: ఒక పెద్ద గిన్నెలో, కీమాను తరిగిన ఉల్లిపాయ, టమాటో, తాజా మూలికలు & సుగంధ ద్రవ్యాలు మరియు చప్లీ కబాబ్ మసాలా మిశ్రమంతో కలపండి.', 'Step 2: మిశ్రమానికి కొట్టిన గుడ్డు మరియు కార్న్‌ఫ్లోర్ వేసి, బాగా కలిసే వరకు మరియు కొద్దిగా జిగురుగా మారే వరకు 5-7 నిమిషాలు బాగా కలపండి.', 'Step 3: మిశ్రమాన్ని సమాన భాగాలుగా విభజించి, ప్రతి భాగాన్ని సన్నని, పెద్ద ప్యాటీ (చప్లీ ఆకారం) గా చదును చేయండి, కావాలంటే ప్రతి దాని మధ్యలో ఒక చిన్న టమాటో ముక్కను నొక్కండి.', 'Step 4: ఒక పెద్ద ఫ్రైయింగ్ పాన్‌లో మధ్యస్థ మంటపై నూనెను వేడి చేసి, కబాబ్‌లను ప్రతి వైపు 5-7 నిమిషాలు బంగారు గోధుమ రంగులోకి మారి పూర్తిగా ఉడికే వరకు షాలో-ఫ్రై చేయండి.', 'Step']
            },
            ta: {
                title: '',
                description: '',
                ingredients: [],
                instructions: []
            }
        }
    }
,
    {
        id: '2026-04-28',
        title: 'Vatapá',
        description: 'A creamy, flavorful Afro-Brazilian stew with shrimp, bread, coconut milk, and dendê oil.',
        image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&q=80&w=2070',
        prepTime: '20 min',
        cookTime: '40 min',
        difficulty: 'Medium',
        servings: 4,
        ingredients: [
            { item: 'Dried shrimp', amount: '1 cup, rehydrated and chopped' },
            { item: 'Stale white bread', amount: '4 slices, crusts removed, soaked' },
            { item: 'Coconut milk', amount: '1 can (400ml)' },
            { item: 'Dendê oil (palm oil)', amount: '1/4 cup' },
            { item: 'Onion', amount: '1 medium, chopped' },
            { item: 'Garlic', amount: '3 cloves, minced' },
            { item: 'Cashews', amount: '1/2 cup, toasted and ground' }
        ],
        instructions: [
            'Sauté onion and garlic in dendê oil until fragrant.',
            'Add chopped dried shrimp and ground cashews, cooking for a few minutes.',
            'Blend soaked bread with coconut milk until smooth.',
            'Stir the bread-coconut mixture into the pan, cooking until thickened.',
            'Season with salt and cook, stirring constantly, until creamy.',
            'Serve hot, traditionally with acarajé or white rice.'
        ],
        tags: ['Brazilian', 'Dinner', 'Non-Vegetarian'],
        translations: {
            hi: {
                title: 'वटापा',
                description: 'झींगा, ब्रेड, नारियल के दूध और डेंडे तेल के साथ एक मलाईदार, स्वादिष्ट एफ्रो-ब्राज़ीलियाई स्टू।',
                ingredients: [{ item: 'सूखे झींगा', amount: '1 कप, फिर से हाइड्रेटेड और कटा हुआ' }, { item: 'बासी सफेद ब्रेड', amount: '4 स्लाइस, किनारे हटाकर, भिगोया हुआ' }, { item: 'नारियल का दूध', amount: '1 कैन (400 मिली)' }, { item: 'डेंडे तेल (पाम तेल)', amount: '1/4 कप' }, { item: 'प्याज', amount: '1 मध्यम, कटा हुआ' }, { item: 'लहसुन', amount: '3 कलियाँ, बारीक कटा हुआ' }, { item: 'काजू', amount: '1/2 कप, भुना हुआ और पिसा हुआ' }],
                instructions: ['डेंडे तेल में प्याज और लहसुन को सुगंधित होने तक भूनें।', 'कटे हुए सूखे झींगा और पिसे हुए काजू डालकर कुछ मिनट तक पकाएं।', 'भीगी हुई ब्रेड को नारियल के दूध के साथ चिकना होने तक ब्लेंड करें।', 'ब्रेड-नारियल मिश्रण को पैन में डालकर गाढ़ा होने तक पकाएं।', 'नमक के साथ सीज़न करें और लगातार चलाते हुए मलाईदार होने तक पकाएं।', 'गरमागरम परोसें, पारंपरिक रूप से अकारजे या सफेद चावल के साथ।']
            },
            bn: {
                title: 'ভাটাপা',
                description: 'চিংড়ি, রুটি, নারকেলের দুধ এবং ডেন্ডে তেল দিয়ে তৈরি একটি ক্রিমি, সুস্বাদু আফ্রো-ব্রাজিলিয়ান স্টু।',
                ingredients: [{ item: 'শুকনো চিংড়ি', amount: '১ কাপ, পুনরায় হাইড্রেটেড এবং কাটা' }, { item: 'বাসি সাদা রুটি', amount: '৪ টুকরা, ধার বাদ দিয়ে, ভেজানো' }, { item: 'নারকেলের দুধ', amount: '১ ক্যান (৪০০ মিলি)' }, { item: 'ডেন্ডে তেল (পাম তেল)', amount: '১/৪ কাপ' }, { item: 'পেঁয়াজ', amount: '১টি মাঝারি, কাটা' }, { item: 'রসুন', amount: '৩ কোয়া, কুচি করা' }, { item: 'কাজু', amount: '১/২ কাপ, ভাজা এবং গুঁড়ো করা' }],
                instructions: ['ডেন্ডে তেলে পেঁয়াজ ও রসুন সুগন্ধি হওয়া পর্যন্ত ভাজুন।', 'কাটা শুকনো চিংড়ি এবং গুঁড়ো কাজু যোগ করে কয়েক মিনিট রান্না করুন।', 'ভেজানো রুটি নারকেলের দুধের সাথে মসৃণ হওয়া পর্যন্ত ব্লেন্ড করুন।', 'রুটি-নারকেলের মিশ্রণটি প্যানে ঢেলে ঘন হওয়া পর্যন্ত রান্না করুন।', 'লবণ দিয়ে সিজন করুন এবং ক্রমাগত নাড়তে নাড়তে ক্রিমি হওয়া পর্যন্ত রান্না করুন।', 'গরম গরম পরিবেশন করুন, ঐতিহ্যগতভাবে আকারাজে বা সাদা ভাতের সাথে।']
            },
            mr: {
                title: 'वटापा',
                description: 'कोळंबी, ब्रेड, नारळाचे दूध आणि डेंडे तेलासह एक मलईदार, चवदार आफ्रिकन-ब्राझिलियन स्टू.',
                ingredients: [{ item: 'सुकी कोळंबी', amount: '1 कप, पुन्हा भिजवून चिरलेली' }, { item: 'शिळी पांढरी ब्रेड', amount: '4 स्लाइस, कडा काढून, भिजवलेली' }, { item: 'नारळाचे दूध', amount: '1 कॅन (400 मिली)' }, { item: 'डेंडे तेल (पाम तेल)', amount: '1/4 कप' }, { item: 'कांदा', amount: '1 मध्यम, चिरलेला' }, { item: 'लसूण', amount: '3 पाकळ्या, बारीक चिरलेला' }, { item: 'काजू', amount: '1/2 कप, भाजलेले आणि वाटलेले' }],
                instructions: ['डेंडे तेलात कांदा आणि लसूण सुगंधित होईपर्यंत परतून घ्या.', 'चिरलेली सुकी कोळंबी आणि वाटलेले काजू घालून काही मिनिटे शिजवा.', 'भिजवलेली ब्रेड नारळाच्या दुधासोबत गुळगुळीत होईपर्यंत ब्लेंड करा.', 'ब्रेड-नारळाचे मिश्रण पॅनमध्ये घालून घट्ट होईपर्यंत शिजवा.', 'मीठ घालून चव घ्या आणि सतत ढवळत मलईदार होईपर्यंत शिजवा.', 'गरमागरम सर्व्ह करा, पारंपरिकपणे अकारजे किंवा पांढऱ्या भातासोबत.']
            },
            te: {
                title: 'వటపా',
                description: 'రొయ్యలు, బ్రెడ్, కొబ్బరి పాలు మరియు డెండే నూనెతో కూడిన క్రీమీ, రుచికరమైన ఆఫ్రో-బ్రెజిలియన్ స్టూ.',
                ingredients: [{ item: 'ఎండిన రొయ్యలు', amount: '1 కప్పు, తిరిగి హైడ్రేట్ చేసి తరిగినవి' }, { item: 'పాత తెల్ల బ్రెడ్', amount: '4 ముక్కలు, అంచులు తీసి, నానబెట్టినవి' }, { item: 'కొబ్బరి పాలు', amount: '1 డబ్బా (400 మి.లీ)' }, { item: 'డెండే నూనె (పామ్ ఆయిల్)', amount: '1/4 కప్పు' }, { item: 'ఉల్లిపాయ', amount: '1 మధ్యస్థం, తరిగినది' }, { item: 'వెల్లుల్లి', amount: '3 రెబ్బలు, సన్నగా తరిగినవి' }, { item: 'జీడిపప్పు', amount: '1/2 కప్పు, వేయించి పొడి చేసినవి' }],
                instructions: ['డెండే నూనెలో ఉల్లిపాయ మరియు వెల్లుల్లి సువాసన వచ్చేవరకు వేయించండి.', 'తరిగిన ఎండిన రొయ్యలు మరియు పొడి చేసిన జీడిపప్పు వేసి కొన్ని నిమిషాలు ఉడికించండి.', 'నానబెట్టిన బ్రెడ్‌ను కొబ్బరి పాలతో కలిపి మెత్తగా బ్లెండ్ చేయండి.', 'బ్రెడ్-కొబ్బరి మిశ్రమాన్ని పాన్‌లో వేసి చిక్కబడే వరకు ఉడికించండి.', 'ఉప్పుతో రుచి చూసి, నిరంతరం కలుపుతూ క్రీమీగా మారే వరకు ఉడికించండి.', 'వేడిగా వడ్డించండి, సాంప్రదాయకంగా అకరాజే లేదా తెల్ల అన్నంతో.']
            },
            ta: {
                title: 'வடாபா',
                description: 'இறால், ரொட்டி, தேங்காய் பால் மற்றும் டெண்டே எண்ணெயுடன் கூடிய ஒரு கிரீமி, சுவையான ஆப்ரோ-பிரேசிலியன் ஸ்டூ.',
                ingredients: [{ item: 'உலர்ந்த இறால்', amount: '1 கப், மீண்டும் ஊறவைத்து நறுக்கியது' }, { item: 'பழைய வெள்ளை ரொட்டி', amount: '4 துண்டுகள், ஓரங்களை நீக்கி, ஊறவைத்தது' }, { item: 'தேங்காய் பால்', amount: '1 டின் (400 மிலி)' }, { item: 'டெண்டே எண்ணெய் (பனை எண்ணெய்)', amount: '1/4 கப்' }, { item: 'வெங்காயம்', amount: '1 நடுத்தர, நறுக்கியது' }, { item: 'பூண்டு', amount: '3 பற்கள், பொடியாக நறுக்கியது' }, { item: 'முந்திரி', amount: '1/2 கப், வறுத்து அரைத்தது' }],
                instructions: ['டெண்டே எண்ணெயில் வெங்காயம் மற்றும் பூண்டை மணம் வரும் வரை வதக்கவும்.', 'நறுக்கிய உலர்ந்த இறால் மற்றும் அரைத்த முந்திரியை சேர்த்து சில நிமிடங்கள் சமைக்கவும்.', 'ஊறவைத்த ரொட்டியை தேங்காய் பாலுடன் சேர்த்து மென்மையாக அரைக்கவும்.', 'ரொட்டி-தேங்காய் கலவையை கடாயில் சேர்த்து கெட்டியாகும் வரை சமைக்கவும்.', 'உப்பு சேர்த்து, தொடர்ந்து கிளறி, கிரீமியாக மாறும் வரை சமைக்கவும்.', 'சூடாக பரிமாறவும், பாரம்பரியமாக அக்காரஜே அல்லது வெள்ளை சாதத்துடன்.']
            }
        }
    }
,
    {
        id: '2026-04-29',
        title: 'Mie Goreng',
        description: 'A vibrant Indonesian stir-fried noodle dish, savory, spicy, and utterly satisfying.',
        image: 'https://images.unsplash.com/photo-1625339020895-c9e64cb8fcce?auto=format&fit=crop&q=80&w=2070',
        prepTime: '20 min',
        cookTime: '25 min',
        difficulty: 'Medium',
        servings: 4,
        ingredients: [
            { item: 'Fresh yellow egg noodles', amount: '400g' },
            { item: 'Chicken breast (sliced)', amount: '200g' },
            { item: 'Shrimp (peeled & deveined)', amount: '150g' },
            { item: 'Mixed vegetables (shredded cabbage, julienned carrot)', amount: '2 cups' },
            { item: 'Kecap Manis (sweet soy sauce)', amount: '4 tbsp' },
            { item: 'Aromatics (minced garlic, sliced shallots, optional chilies)', amount: '1 tbsp paste' },
            { item: 'Eggs', amount: '2' }
        ],
        instructions: [
            'Boil noodles as per package, drain, and set aside.',
            'Heat oil in a wok, stir-fry chicken and shrimp until cooked, then remove.',
            'Sauté aromatics until fragrant, then add vegetables and stir-fry until tender-crisp.',
            'Return chicken and shrimp, add noodles and kecap manis, tossing thoroughly.',
            'Stir in scrambled eggs or omelette strips, mix gently, and serve hot.'
        ],
        tags: ['Indonesian', 'Dinner', 'Non-Vegetarian', 'Noodles'],
        translations: {
            hi: {
                title: 'मी गोरेंग',
                description: 'एक जीवंत इंडोनेशियाई स्टिर-फ्राइड नूडल डिश, नमकीन, मसालेदार और बेहद संतोषजनक।',
                ingredients: [{ item: 'ताजे पीले अंडे के नूडल्स', amount: '400 ग्राम' }, { item: 'चिकन ब्रेस्ट (कटा हुआ)', amount: '200 ग्राम' }, { item: 'झींगा (छिला और साफ किया हुआ)', amount: '150 ग्राम' }, { item: 'मिली-जुली सब्जियां (पत्तागोभी, गाजर)', amount: '2 कप' }, { item: 'केचाप मानिस (मीठा सोया सॉस)', amount: '4 बड़े चम्मच' }, { item: 'खुशबूदार मसाले (लहसुन, प्याज, मिर्च)', amount: '1 बड़ा चम्मच पेस्ट' }, { item: 'अंडे', amount: '2' }],
                instructions: ['नूडल्स को पैकेज के निर्देशानुसार उबालें, छान लें और अलग रख दें।', 'एक कड़ाही में तेल गरम करें, चिकन और झींगा को पकने तक भूनें, फिर निकाल लें।', 'खुशबूदार मसाले सुगंधित होने तक भूनें, फिर सब्जियां डालें और नरम-कुरकुरा होने तक भूनें।', 'चिकन और झींगा वापस डालें, नूडल्स और केचाप मानिस मिलाएं, अच्छी तरह टॉस करें।', 'फेंटे हुए अंडे या आमलेट स्ट्रिप्स मिलाएं, धीरे से मिलाएं और गरमागरम परोसें।']
            },
            bn: {
                title: 'মি গোরং',
                description: 'একটি প্রাণবন্ত ইন্দোনেশিয়ান স্টিয়ার-ফ্রাইড নুডল ডিশ, সুস্বাদু, মশলাদার এবং অত্যন্ত তৃপ্তিদায়ক।',
                ingredients: [{ item: 'তাজা হলুদ ডিমের নুডুলস', amount: '400 গ্রাম' }, { item: 'চিকেন ব্রেস্ট (টুকরো করা)', amount: '200 গ্রাম' }, { item: 'চিংড়ি (খোসা ছাড়ানো ও শিরা পরিষ্কার করা)', amount: '150 গ্রাম' }, { item: 'মিশ্র সবজি (বাঁধাকপি, গাজর)', amount: '2 কাপ' }, { item: 'কেচাপ মানিস (মিষ্টি সয়া সস)', amount: '4 টেবিল চামচ' }, { item: 'সুগন্ধি মশলা (রসুন, পেঁয়াজ, লঙ্কা)', amount: '1 টেবিল চামচ পেস্ট' }, { item: 'ডিম', amount: '2টি' }],
                instructions: ['প্যাকেজের নির্দেশ অনুযায়ী নুডুলস সিদ্ধ করুন, জল ঝরিয়ে একপাশে রাখুন।', 'একটি কড়াইতে তেল গরম করুন, মুরগি ও চিংড়ি রান্না হওয়া পর্যন্ত ভেজে তুলে নিন।', 'সুগন্ধি মশলা সুগন্ধি হওয়া পর্যন্ত ভাজুন, তারপর সবজি যোগ করে নরম-খাস্তা হওয়া পর্যন্ত ভাজুন।', 'মুরগি ও চিংড়ি ফিরিয়ে আনুন, নুডুলস ও কেচাপ মানিস যোগ করে ভালোভাবে মেশান।', 'ফেঁটানো ডিম বা অমলেট স্ট্রিপস মিশিয়ে আলতো করে নাড়ুন এবং গরম গরম পরিবেশন করুন।']
            },
            mr: {
                title: 'मी गोरेंग',
                description: 'एक स्वादिष्ट इंडोनेशियन स्टिर-फ्राइड नूडल डिश, चवदार, मसालेदार आणि अत्यंत समाधानकारक.',
                ingredients: [{ item: 'ताजे पिवळे अंड्याचे नूडल्स', amount: '400 ग्रॅम' }, { item: 'चिकन ब्रेस्ट (कापलेले)', amount: '200 ग्रॅम' }, { item: 'कोळंबी (सोललेली आणि साफ केलेली)', amount: '150 ग्रॅम' }, { item: 'मिश्र भाज्या (कोबी, गाजर)', amount: '2 कप' }, { item: 'केचाप मानिस (गोड सोया सॉस)', amount: '4 मोठे चमचे' }, { item: 'सुगंधित मसाले (लसूण, कांदा, मिरची)', amount: '1 मोठा चमचा पेस्ट' }, { item: 'अंडी', amount: '2' }],
                instructions: ['पॅकेजच्या निर्देशानुसार नूडल्स उकळा, पाणी काढून बाजूला ठेवा.', 'कढईत तेल गरम करा, चिकन आणि कोळंबी शिजेपर्यंत परतून घ्या, नंतर काढून टाका.', 'सुगंधित मसाले सुगंधित होईपर्यंत परतून घ्या, नंतर भाज्या घालून नरम-कुरकुरीत होईपर्यंत परतून घ्या.', 'चिकन आणि कोळंबी परत घाला, नूडल्स आणि केचाप मानिस घालून चांगले मिसळा.', 'फेटलेली अंडी किंवा ऑम्लेटचे पट्टे मिसळा, हळूवारपणे ढवळून गरम सर्व्ह करा.']
            },
            te: {
                title: 'మీ గోరెంగ్',
                description: 'ఒక శక్తివంతమైన ఇండోనేషియన్ స్టిర్-ఫ్రైడ్ నూడిల్ వంటకం, రుచికరమైన, కారంగా మరియు అత్యంత సంతృప్తికరమైనది.',
                ingredients: [{ item: 'తాజా పసుపు గుడ్డు నూడుల్స్', amount: '400 గ్రా' }, { item: 'చికెన్ బ్రెస్ట్ (ముక్కలుగా చేసినది)', amount: '200 గ్రా' }, { item: 'రొయ్యలు (పొట్టు తీసి, శుభ్రం చేసినవి)', amount: '150 గ్రా' }, { item: 'మిశ్రమ కూరగాయలు (క్యాబేజీ, క్యారెట్)', amount: '2 కప్పులు' }, { item: 'కెచాప్ మానిస్ (తీపి సోయా సాస్)', amount: '4 టేబుల్ స్పూన్లు' }, { item: 'సుగంధ ద్రవ్యాలు (వెల్లుల్లి, ఉల్లిపాయలు, మిరపకాయలు)', amount: '1 టేబుల్ స్పూన్ పేస్ట్' }, { item: 'గుడ్లు', amount: '2' }],
                instructions: ['ప్యాకేజీ సూచనల ప్రకారం నూడుల్స్ ఉడికించి, నీరు తీసి పక్కన పెట్టండి.', 'ఒక వోక్‌లో నూనె వేడి చేసి, చికెన్ మరియు రొయ్యలను ఉడికే వరకు వేయించి, తీసివేయండి.', 'సుగంధ ద్రవ్యాలను సువాసన వచ్చేవరకు వేయించి, ఆపై కూరగాయలను జోడించి, మెత్తగా-క్రిస్పీగా అయ్యేవరకు వేయించండి.', 'చికెన్ మరియు రొయ్యలను తిరిగి వేసి, నూడుల్స్ మరియు కెచాప్ మానిస్ కలిపి బాగా కలపండి.', 'స్క్రాంబుల్ చేసిన గుడ్లు లేదా ఆమ్లెట్ ముక్కలను కలిపి, మెల్లగా కలిపి వెంటనే సర్వ్ చేయండి.']
            },
            ta: {
                title: 'மீ கோரெங்',
                description: 'ஒரு துடிப்பான இந்தோனேசிய வறுத்த நூடுல்ஸ் உணவு, சுவையானது, காரமானது மற்றும் மிகவும் திருப்திகரமானது.',
                ingredients: [{ item: 'புதிய மஞ்சள் முட்டை நூடுல்ஸ்', amount: '400 கிராம்' }, { item: 'கோழி மார்பு (துண்டுகளாக்கப்பட்டது)', amount: '200 கிராம்' }, { item: 'இறால் (தோல் நீக்கி, சுத்தம் செய்யப்பட்டது)', amount: '150 கிராம்' }, { item: 'கலப்பு காய்கறிகள் (முட்டைக்கோஸ், கேரட்)', amount: '2 கப்' }, { item: 'கெட்சாப் மனிஸ் (இனிப்பு சோயா சாஸ்)', amount: '4 தேக்கரண்டி' }, { item: 'நறுமணப் பொருட்கள் (பூண்டு, வெங்காயம், மிளகாய்)', amount: '1 தேக்கரண்டி விழுது' }, { item: 'முட்டைகள்', amount: '2' }],
                instructions: ['பேக்கேஜ் அறிவுறுத்தல்களின்படி நூடுல்ஸை சமைத்து, வடிகட்டி தனியாக வைக்கவும்.', 'ஒரு வோக்கில் எண்ணெய் சூடாக்கி, கோழி மற்றும் இறாலை சமைக்கும் வரை வறுத்து, பின்னர் அகற்றவும்.', 'நறுமணப் பொருட்களை மணம் வரும் வரை வறுத்து, பின்னர் காய்கறிகளை சேர்த்து, மென்மையாகும் வரை வறுக்கவும்.', 'கோழி மற்றும் இறாலை மீண்டும் சேர்த்து, நூடுல்ஸ் மற்றும் கெட்சாப் மனிஸ் சேர்த்து நன்கு கிளறவும்.', 'வறுத்த முட்டை அல்லது ஆம்லெட் துண்டுகளை சேர்த்து, மெதுவாக கலந்து உடனடியாக பரிமாறவும்.']
            }
        }
    }
,
    {
        id: '2026-04-30',
        title: 'Cacio e Pepe',
        description: 'A Roman classic, simple yet sublime, with pasta, cheese, and pepper.',
        image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=2072',
        prepTime: '10 min',
        cookTime: '15 min',
        difficulty: 'Medium',
        servings: 4,
        ingredients: [
            { item: 'Spaghetti or Tonnarelli', amount: '400g' },
            { item: 'Pecorino Romano cheese, finely grated', amount: '200g' },
            { item: 'Black peppercorns, freshly cracked', amount: '15g' },
            { item: 'Salt', amount: 'to taste' },
            { item: 'Pasta cooking water', amount: 'as needed' }
        ],
        instructions: [
            'Boil pasta in lightly salted water until al dente, reserving plenty of starchy pasta water.',
            'Toast cracked black pepper in a large pan over medium heat until fragrant, then add a ladle of pasta water.',
            'Remove pan from heat, add grated Pecorino Romano and a splash more pasta water, stirring vigorously to create a creamy emulsion.',
            'Drain pasta and immediately add it to the pan with the cheese sauce, tossing continuously to coat.',
            'Add more pasta water or cheese if needed to achieve a smooth, glossy sauce.',
            'Serve immediately, garnished with extra cracked pepper and Pecorino.'
        ],
        tags: ['Italian', 'Dinner', 'Vegetarian'],
        translations: {
            hi: {
                title: 'काचो ए पेपे',
                description: 'एक रोमन क्लासिक, पास्ता, पनीर और काली मिर्च के साथ सरल फिर भी शानदार।',
                ingredients: [{ item: 'स्पेगेटी या टोनारेली', amount: '400 ग्राम' }, { item: 'पेकोरिनो रोमानो पनीर, बारीक कसा हुआ', amount: '200 ग्राम' }, { item: 'काली मिर्च के दाने, ताज़ी कुटी हुई', amount: '15 ग्राम' }, { item: 'नमक', amount: 'स्वादानुसार' }, { item: 'पास्ता पकाने का पानी', amount: 'आवश्यकतानुसार' }],
                instructions: ['पास्ता को हल्के नमकीन पानी में अल डेंटे होने तक उबालें, और पर्याप्त स्टार्च वाला पास्ता पानी बचा कर रखें।', 'एक बड़े पैन में मध्यम आंच पर कुटी हुई काली मिर्च को सुगंधित होने तक भूनें, फिर एक करछी पास्ता पानी डालें।', 'पैन को आंच से हटा दें, कसा हुआ पेकोरिनो रोमानो और थोड़ा और पास्ता पानी डालें, और एक क्रीमी इमल्शन बनाने के लिए तेजी से हिलाएं।', 'पास्ता को छान लें और तुरंत पनीर सॉस वाले पैन में डालें, लगातार उछालते हुए मिलाएं।', 'एक चिकनी, चमकदार सॉस प्राप्त करने के लिए आवश्यकतानुसार और पास्ता पानी या पनीर डालें।', 'अतिरिक्त कुटी हुई काली मिर्च और पेकोरिनो से सजाकर तुरंत परोसें।']
            },
            bn: {
                title: 'কাচিও এ পেপে',
                description: 'একটি রোমান ক্লাসিক, পাস্তা, পনির এবং গোলমরিচ দিয়ে সহজ অথচ অসাধারণ।',
                ingredients: [{ item: 'স্প্যাগেটি বা টোনারেলি', amount: '400 গ্রাম' }, { item: 'পেকরিনো রোমানো পনির, মিহি করে গ্রেট করা', amount: '200 গ্রাম' }, { item: 'কালো গোলমরিচ, টাটকা গুঁড়ো করা', amount: '15 গ্রাম' }, { item: 'লবণ', amount: 'স্বাদমতো' }, { item: 'পাস্তা রান্নার জল', amount: 'প্রয়োজন অনুযায়ী' }],
                instructions: ['হালকা লবণাক্ত জলে পাস্তা আল ডেন্তে হওয়া পর্যন্ত সেদ্ধ করুন, প্রচুর পরিমাণে স্টার্চি পাস্তা জল সংরক্ষণ করুন।', 'একটি বড় প্যানে মাঝারি আঁচে গুঁড়ো করা কালো গোলমরিচ সুগন্ধি না হওয়া পর্যন্ত ভাজুন, তারপর এক হাতা পাস্তা জল যোগ করুন।', 'প্যানটি আঁচ থেকে সরিয়ে নিন, গ্রেট করা পেকরিনো রোমানো এবং আরও কিছুটা পাস্তা জল যোগ করুন, একটি ক্রিমি ইমালসন তৈরি করতে দ্রুত নাড়ুন।', 'পাস্তা ছেঁকে নিন এবং অবিলম্বে পনির সস সহ প্যানে যোগ করুন, ক্রমাগত টস করে মেশান।', 'একটি মসৃণ, চকচকে সস পেতে প্রয়োজন অনুযায়ী আরও পাস্তা জল বা পনির যোগ করুন।', 'অতিরিক্ত গুঁড়ো করা গোলমরিচ এবং পেকরিনো দিয়ে সাজিয়ে অবিলম্বে পরিবেশন করুন।']
            },
            mr: {
                title: 'काचो ए पेपे',
                description: 'एक रोमन क्लासिक, पास्ता, चीज आणि मिरीसह सोपे पण उत्कृष्ट.',
                ingredients: [{ item: 'स्पेगेटी किंवा टोनारेली', amount: '400 ग्रॅम' }, { item: 'पेकोरिनो रोमानो चीज, बारीक किसलेले', amount: '200 ग्रॅम' }, { item: 'काळी मिरीचे दाणे, ताजे कुटलेले', amount: '15 ग्रॅम' }, { item: 'मीठ', amount: 'चवीनुसार' }, { item: 'पास्ता शिजवण्याचे पाणी', amount: 'गरजेनुसार' }],
                instructions: ['पास्ता हलक्या मीठ घातलेल्या पाण्यात अल डेंटे होईपर्यंत उकळा, भरपूर स्टार्च असलेले पास्ता पाणी बाजूला ठेवा.', 'एका मोठ्या पॅनमध्ये मध्यम आचेवर कुटलेली काळी मिरी सुगंधित होईपर्यंत भाजून घ्या, नंतर एक चमचा पास्ता पाणी घाला.', 'पॅन आचेवरून काढून टाका, किसलेले पेकोरिनो रोमानो आणि थोडे अधिक पास्ता पाणी घालून, एक क्रीमी इमल्शन तयार करण्यासाठी वेगाने ढवळा.', 'पास्ता काढून टाका आणि लगेच चीज सॉस असलेल्या पॅनमध्ये घाला, सतत टॉस करून लेप करा.', 'गुळगुळीत, चमकदार सॉस मिळवण्यासाठी आवश्यकतेनुसार अधिक पास्ता पाणी किंवा चीज घाला.', 'अतिरिक्त कुटलेली मिरी आणि पेकोरिनोने सजवून लगेच सर्व्ह करा.']
            },
            te: {
                title: 'కాసియో ఎ పెపే',
                description: 'పాస్తా, చీజ్ మరియు మిరియాలతో కూడిన రోమన్ క్లాసిక్, సరళమైనది ఇంకా అద్భుతమైనది.',
                ingredients: [{ item: 'స్పఘెట్టి లేదా టోనారెల్లి', amount: '400 గ్రాములు' }, { item: 'పెకోరినో రోమనో చీజ్, సన్నగా తురిమినది', amount: '200 గ్రాములు' }, { item: 'నల్ల మిరియాలు, తాజాగా దంచినవి', amount: '15 గ్రాములు' }, { item: 'ఉప్పు', amount: 'రుచికి సరిపడా' }, { item: 'పాస్తా వండిన నీరు', amount: 'అవసరమైనంత' }],
                instructions: ['పాస్తాను తేలికగా ఉప్పు వేసిన నీటిలో అల్ డెంటే అయ్యే వరకు ఉడకబెట్టండి, స్టార్చ్ ఉన్న పాస్తా నీటిని పుష్కలంగా పక్కన పెట్టండి.', 'ఒక పెద్ద పాన్‌లో మధ్యస్థ మంటపై దంచిన నల్ల మిరియాలను సువాసన వచ్చేవరకు వేయించి, ఆపై ఒక గరిటెడు పాస్తా నీటిని కలపండి.', 'పాన్‌ను మంట నుండి తీసివేసి, తురిమిన పెకోరినో రోమనో మరియు మరికొంత పాస్తా నీటిని వేసి, క్రీమీ ఎమల్షన్ ఏర్పడే వరకు వేగంగా కలపండి.', 'పాస్తాను వడకట్టి, వెంటనే చీజ్ సాస్‌తో ఉన్న పాన్‌లోకి వేసి, నిరంతరం టాస్ చేస్తూ కలపండి.', 'మృదువైన, నిగనిగలాడే సాస్ పొందడానికి అవసరమైతే మరికొంత పాస్తా నీరు లేదా చీజ్ కలపండి.', 'అదనపు దంచిన మిరియాలు మరియు పెకోరినోతో అలంకరించి వెంటనే వడ్డించండి।']
            },
            ta: {
                title: 'காசியோ எ பெப்பே',
                description: 'பாஸ்தா, சீஸ் மற்றும் மிளகுடன் கூடிய ஒரு ரோமன் கிளாசிக், எளிமையானது ஆனால் அருமையானது.',
                ingredients: [{ item: 'ஸ்பாகெட்டி அல்லது டோனாரெல்லி', amount: '400 கிராம்' }, { item: 'பெக்கோரினோ ரோமானோ சீஸ், மெல்லியதாக துருவியது', amount: '200 கிராம்' }, { item: 'கருப்பு மிளகுத்தூள், புதிதாக இடித்தது', amount: '15 கிராம்' }, { item: 'உப்பு', amount: 'சுவைக்கு' }, { item: 'பாஸ்தா சமைத்த நீர்', amount: 'தேவைக்கேற்ப' }],
                instructions: ['பாஸ்தாவை லேசாக உப்பு சேர்த்த நீரில் அல் டென்டே ஆகும் வரை கொதிக்க வைத்து, நிறைய ஸ்டார்ச் உள்ள பாஸ்தா நீரை ஒதுக்கி வைக்கவும்.', 'ஒரு பெரிய கடாயில் நடுத்தர தீயில் இடித்த கருப்பு மிளகை மணம் வரும் வரை வறுத்து, பின்னர் ஒரு கரண்டி பாஸ்தா நீரை சேர்க்கவும்.', 'கடாயை தீயிலிருந்து அகற்றி, துருவிய பெக்கோரினோ ரோமானோ மற்றும் இன்னும் கொஞ்சம் பாஸ்தா நீரை சேர்த்து, ஒரு கிரீமி எமல்ஷனை உருவாக்க வேகமாக கிளறவும்.', 'பாஸ்தாவை வடிகட்டி, உடனடியாக சீஸ் சாஸ் உள்ள கடாயில் சேர்த்து, தொடர்ந்து கிளறி பூசவும்.', 'மென்மையான, பளபளப்பான சாஸ் பெற தேவைப்பட்டால் மேலும் பாஸ்தா நீர் அல்லது சீஸ் சேர்க்கவும்.', 'கூடுதல் இடித்த மிளகு மற்றும் பெக்கோரினோவுடன் அலங்கரித்து உடனடியாக பரிமாறவும்।']
            }
        }
    }
,
    {
        id: '2026-05-01',
        title: 'Yakitori',
        description: 'Savory Japanese grilled chicken skewers, glazed with a sweet and salty tare sauce.',
        image: 'https://www.themealdb.com/images/media/meals/tvtxpq1511464705.jpg',
        prepTime: '30 min',
        cookTime: '15 min',
        difficulty: 'Medium',
        servings: 4,
        ingredients: [
            { item: 'Chicken Thighs (boneless, skin-on)', amount: '500g' },
            { item: 'Soy Sauce', amount: '1/2 cup' },
            { item: 'Mirin', amount: '1/2 cup' },
            { item: 'Sake', amount: '1/4 cup' },
            { item: 'Sugar', amount: '2 tbsp' },
            { item: 'Green Onions (for garnish)', amount: '2 stalks' },
            { item: 'Bamboo Skewers', amount: '12-15' }
        ],
        instructions: [
            'Cut chicken into bite-sized pieces and thread onto bamboo skewers.',
            'Combine soy sauce, mirin, sake, and sugar in a saucepan; simmer until slightly thickened to make the tare sauce.',
            'Grill skewers over medium-high heat, turning frequently and basting with tare sauce.',
            'Continue grilling and basting until chicken is cooked through and caramelized.',
            'Garnish with chopped green onions and serve immediately.'
        ],
        tags: ['Japanese', 'Dinner', 'Non-Vegetarian'],
        translations: {
            hi: {
                title: 'याकिटोरी',
                description: 'मीठे और नमकीन तारे सॉस के साथ स्वादिष्ट जापानी ग्रिल्ड चिकन स्क्यूअर।',
                ingredients: [{ item: 'चिकन जांघ (हड्डी रहित, त्वचा सहित)', amount: '500 ग्राम' }, { item: 'सोया सॉस', amount: '1/2 कप' }, { item: 'मिरिन', amount: '1/2 कप' }, { item: 'साके', amount: '1/4 कप' }, { item: 'चीनी', amount: '2 बड़े चम्मच' }, { item: 'हरी प्याज (सजावट के लिए)', amount: '2 डंठल' }, { item: 'बांस की सीखें', amount: '12-15' }],
                instructions: ['चिकन को छोटे टुकड़ों में काट लें और बांस की सीखों पर पिरो लें।', 'सोया सॉस, मिरिन, साके और चीनी को एक सॉसपैन में मिलाएं; तारे सॉस बनाने के लिए गाढ़ा होने तक उबालें।', 'मध्यम-तेज आंच पर सीखों को ग्रिल करें, बार-बार पलटते रहें और तारे सॉस से ब्रश करें।', 'चिकन के पूरी तरह पकने और कैरामेल होने तक ग्रिल करना और ब्रश करना जारी रखें।', 'कटी हुई हरी प्याज से सजाकर तुरंत परोसें।']
            },
            bn: {
                title: 'ইয়াকিতোরি',
                description: 'মিষ্টি এবং নোনতা টারে সস দিয়ে সুস্বাদু জাপানি গ্রিলড চিকেন স্কিউয়ার।',
                ingredients: [{ item: 'চিকেন থাই (হাড়বিহীন, চামড়াসহ)', amount: '500 গ্রাম' }, { item: 'সয়া সস', amount: '1/2 কাপ' }, { item: 'মিরিন', amount: '1/2 কাপ' }, { item: 'সাকে', amount: '1/4 কাপ' }, { item: 'চিনি', amount: '2 টেবিল চামচ' }, { item: 'সবুজ পেঁয়াজ (সাজানোর জন্য)', amount: '2 ডাঁটা' }, { item: 'বাঁশের কাঠি', amount: '12-15' }],
                instructions: ['চিকেন ছোট টুকরো করে কেটে বাঁশের কাঠিতে গেঁথে নিন।', 'সয়া সস, মিরিন, সাকে এবং চিনি একটি সসপ্যানে মিশিয়ে নিন; টারে সস তৈরি করতে সামান্য ঘন হওয়া পর্যন্ত ফুটিয়ে নিন।', 'মাঝারি-উচ্চ আঁচে কাঠিগুলো গ্রিল করুন, ঘন ঘন উল্টে দিন এবং টারে সস দিয়ে ব্রাশ করুন।', 'চিকেন পুরোপুরি রান্না হওয়া এবং ক্যারামেলাইজড না হওয়া পর্যন্ত গ্রিল করা এবং ব্রাশ করা চালিয়ে যান।', 'কাটা সবুজ পেঁয়াজ দিয়ে সাজিয়ে সাথে সাথে পরিবেশন করুন।']
            },
            mr: {
                title: 'याकिटोरी',
                description: 'गोड आणि खारट तारे सॉसने लेपलेले चविष्ट जपानी ग्रिल्ड चिकन स्क्यूअर्स.',
                ingredients: [{ item: 'चिकन थाई (हाड नसलेले, त्वचेसह)', amount: '500 ग्रॅम' }, { item: 'सोया सॉस', amount: '1/2 कप' }, { item: 'मिरिन', amount: '1/2 कप' }, { item: 'साके', amount: '1/4 कप' }, { item: 'साखर', amount: '2 मोठे चमचे' }, { item: 'हिरवी कांदापात (सजावटीसाठी)', amount: '2 देठ' }, { item: 'बांबूच्या काड्या', amount: '12-15' }],
                instructions: ['चिकनचे लहान तुकडे करून बांबूच्या काड्यांवर ओवून घ्या.', 'सोया सॉस, मिरिन, साके आणि साखर एका सॉसपॅनमध्ये एकत्र करा; तारे सॉस बनवण्यासाठी थोडे घट्ट होईपर्यंत उकळा.', 'मध्यम-उच्च आचेवर स्क्यूअर्स ग्रिल करा, वारंवार फिरवा आणि तारे सॉसने ब्रश करा.', 'चिकन पूर्णपणे शिजून कॅरामेल होईपर्यंत ग्रिल करणे आणि ब्रश करणे सुरू ठेवा.', 'बारीक चिरलेल्या हिरव्या कांदापातीने सजवून लगेच सर्व्ह करा.']
            },
            te: {
                title: 'యాకిటోరి',
                description: 'తీపి మరియు ఉప్పగా ఉండే టేర్ సాస్‌తో రుచికరమైన జపనీస్ గ్రిల్డ్ చికెన్ స్కేవర్స్.',
                ingredients: [{ item: 'చికెన్ తొడలు (ఎముకలు లేనివి, చర్మంతో)', amount: '500 గ్రా' }, { item: 'సోయా సాస్', amount: '1/2 కప్పు' }, { item: 'మిరిన్', amount: '1/2 కప్పు' }, { item: 'సాకే', amount: '1/4 కప్పు' }, { item: 'చక్కెర', amount: '2 టేబుల్ స్పూన్లు' }, { item: 'పచ్చి ఉల్లిపాయలు (అలంకరణ కోసం)', amount: '2 కాడలు' }, { item: 'వెదురు పుల్లలు', amount: '12-15' }],
                instructions: ['చికెన్‌ను చిన్న ముక్కలుగా కట్ చేసి వెదురు పుల్లలకు గుచ్చండి.', 'సోయా సాస్, మిరిన్, సాకే మరియు చక్కెరను ఒక సాస్‌పాన్‌లో కలపండి; టేర్ సాస్ చేయడానికి కొద్దిగా చిక్కబడే వరకు ఉడకబెట్టండి.', 'మధ్యస్థ-అధిక వేడి మీద స్కేవర్స్‌ను గ్రిల్ చేయండి, తరచుగా తిప్పుతూ మరియు టేర్ సాస్‌తో బ్రష్ చేయండి.', 'చికెన్ పూర్తిగా ఉడికి, క్యారమెలైజ్ అయ్యే వరకు గ్రిల్ చేయడం మరియు బ్రష్ చేయడం కొనసాగించండి.', 'తరిగిన పచ్చి ఉల్లిపాయలతో అలంకరించి వెంటనే వడ్డించండి.']
            },
            ta: {
                title: 'யாகிடோரி',
                description: 'இனிப்பு மற்றும் உப்பு சுவையுள்ள டேர் சாஸுடன் சுவையான ஜப்பானிய கிரில்ட் சிக்கன் ஸ்கீவர்ஸ்.',
                ingredients: [{ item: 'சிக்கன் தொடை (எலும்பில்லாதது, தோலுடன்)', amount: '500 கிராம்' }, { item: 'சோயா சாஸ்', amount: '1/2 கப்' }, { item: 'மிரின்', amount: '1/2 கப்' }, { item: 'சாக்', amount: '1/4 கப்' }, { item: 'சர்க்கரை', amount: '2 தேக்கரண்டி' }, { item: 'பச்சை வெங்காயம் (அலங்காரத்திற்கு)', amount: '2 தண்டுகள்' }, { item: 'மூங்கில் குச்சிகள்', amount: '12-15' }],
                instructions: ['சிக்கனை கடித்து சாப்பிடும் அளவு துண்டுகளாக வெட்டி மூங்கில் குச்சிகளில் கோர்க்கவும்.', 'சோயா சாஸ், மிரின், சாக் மற்றும் சர்க்கரையை ஒரு சாஸ்பானில் சேர்த்து; டேர் சாஸ் தயாரிக்க சற்று கெட்டியாகும் வரை கொதிக்க விடவும்.', 'நடுத்தர-அதிக வெப்பத்தில் குச்சிகளை கிரில் செய்யவும், அடிக்கடி திருப்பி டேர் சாஸால் தடவவும்.', 'சிக்கன் முழுமையாக வெந்து, கேரமலைஸ் ஆகும் வரை கிரில் செய்து தடவுவதை தொடரவும்.', 'நறுக்கிய பச்சை வெங்காயத்தால் அலங்கரித்து உடனடியாக பரிமாறவும்.']
            }
        }
    }
,
    {
        id: '2026-05-02',
        title: 'Bouillabaisse',
        description: 'A rich, aromatic Provençal fish stew, bursting with Mediterranean flavors.',
        image: 'https://www.themealdb.com/images/media/meals/usywpp1511189648.jpg',
        prepTime: '20 min',
        cookTime: '40 min',
        difficulty: 'Medium',
        servings: 4,
        ingredients: [
            { item: 'Mixed Seafood (firm white fish, shrimp, mussels)', amount: '2.5 lbs total' },
            { item: 'Olive oil', amount: '3 tbsp' },
            { item: 'Aromatic Vegetables (onion, garlic, fennel)', amount: '1 large onion, 4 cloves garlic, 1 small fennel bulb' },
            { item: 'Canned crushed tomatoes', amount: '1 (28 oz) can' },
            { item: 'Saffron threads', amount: '1/2 tsp' },
            { item: 'Fish stock', amount: '4 cups' },
            { item: 'Dry white wine', amount: '1 cup' }
        ],
        instructions: [
            'Sauté onion, garlic, and fennel in olive oil until softened in a large pot.',
            'Add tomatoes, saffron, fish stock, and white wine; bring to a simmer and cook for 15 minutes.',
            'Gently add the firm fish pieces and cook for 5-7 minutes until almost done.',
            'Stir in shrimp and mussels, cooking until shellfish open and shrimp are pink, about 3-5 minutes.',
            'Season with salt and pepper, then serve immediately with crusty bread.'
        ],
        tags: ['French', 'Dinner', 'Non-Vegetarian'],
        translations: {
            hi: {
                title: 'बुइयाबेस',
                description: 'भूमध्यसागरीय स्वादों से भरपूर एक समृद्ध, सुगंधित प्रोवेन्सल मछली स्टू।',
                ingredients: [{ item: 'मिश्रित समुद्री भोजन (सफेद मछली, झींगा, मसल्स)', amount: 'कुल 2.5 पाउंड' }, { item: 'जैतून का तेल', amount: '3 बड़े चम्मच' }, { item: 'सुगंधित सब्जियां (प्याज, लहसुन, सौंफ)', amount: '1 बड़ा प्याज, 4 कली लहसुन, 1 छोटा सौंफ का कंद' }, { item: 'डिब्बाबंद कुचले हुए टमाटर', amount: '1 (28 औंस) कैन' }, { item: 'केसर के धागे', amount: '1/2 छोटा चम्मच' }, { item: 'मछली का शोरबा', amount: '4 कप' }, { item: 'सूखी सफेद शराब', amount: '1 कप' }],
                instructions: ['एक बड़े बर्तन में जैतून के तेल में प्याज, लहसुन और सौंफ को नरम होने तक भूनें।', 'टमाटर, केसर, मछली का शोरबा और सफेद शराब डालें; उबाल आने दें और 15 मिनट तक पकाएं।', 'धीरे से मछली के टुकड़े डालें और लगभग पकने तक 5-7 मिनट तक पकाएं।', 'झींगा और मसल्स डालकर तब तक पकाएं जब तक शेलफिश खुल न जाए और झींगा गुलाबी न हो जाए, लगभग 3-5 मिनट।', 'नमक और काली मिर्च के साथ सीज़न करें, फिर तुरंत कुरकुरी रोटी के साथ परोसें।']
            },
            bn: {
                title: 'বুইয়াবেস',
                description: 'ভূমধ্যসাগরীয় স্বাদে ভরপুর একটি সমৃদ্ধ, সুগন্ধি প্রোভেনসাল ফিশ স্টু।',
                ingredients: [{ item: 'মিশ্র সামুদ্রিক খাবার (সাদা মাছ, চিংড়ি, ঝিনুক)', amount: 'মোট 2.5 পাউন্ড' }, { item: 'জলপাই তেল', amount: '3 টেবিল চামচ' }, { item: 'সুগন্ধি সবজি (পেঁয়াজ, রসুন, মৌরি)', amount: '1টি বড় পেঁয়াজ, 4 কোয়া রসুন, 1টি ছোট মৌরি কন্দ' }, { item: 'টিনজাত থেঁতলানো টমেটো', amount: '1 (28 আউন্স) ক্যান' }, { item: 'জাফরান সুতা', amount: '1/2 চা চামচ' }, { item: 'মাছের স্টক', amount: '4 কাপ' }, { item: 'শুকনো সাদা ওয়াইন', amount: '1 কাপ' }],
                instructions: ['একটি বড় পাত্রে জলপাই তেলে পেঁয়াজ, রসুন এবং মৌরি নরম হওয়া পর্যন্ত ভাজুন।', 'টমেটো, জাফরান, মাছের স্টক এবং সাদা ওয়াইন যোগ করুন; ফুটিয়ে 15 মিনিট রান্না করুন।', 'আলতো করে মাছের টুকরোগুলি যোগ করুন এবং প্রায় সিদ্ধ হওয়া পর্যন্ত 5-7 মিনিট রান্না করুন।', 'চিংড়ি এবং ঝিনুক মিশিয়ে দিন, শেলফিশ খোলা এবং চিংড়ি গোলাপী হওয়া পর্যন্ত, প্রায় 3-5 মিনিট রান্না করুন।', 'লবণ এবং গোলমরিচ দিয়ে সিজন করুন, তারপর অবিলম্বে ক্রাস্টি রুটির সাথে পরিবেশন করুন।']
            },
            mr: {
                title: 'बुइयाबेस',
                description: 'भूमध्यसागरीय चवींनी भरलेले एक समृद्ध, सुगंधी प्रोव्हेन्सल फिश स्टू.',
                ingredients: [{ item: 'मिश्रित सीफूड (घट्ट पांढरा मासा, कोळंबी, शिंपले)', amount: 'एकूण 2.5 पौंड' }, { item: 'ऑलिव्ह तेल', amount: '3 चमचे' }, { item: 'सुगंधी भाज्या (कांदा, लसूण, बडीशेप)', amount: '1 मोठा कांदा, 4 लसूण पाकळ्या, 1 लहान बडीशेप कंद' }, { item: 'कॅन केलेला ठेचलेला टोमॅटो', amount: '1 (28 औंस) कॅन' }, { item: 'केसरचे धागे', amount: '1/2 चमचा' }, { item: 'फिश स्टॉक', amount: '4 कप' }, { item: 'कोरडी पांढरी वाईन', amount: '1 कप' }],
                instructions: ['एका मोठ्या भांड्यात ऑलिव्ह तेलात कांदा, लसूण आणि बडीशेप मऊ होईपर्यंत परतून घ्या.', 'टोमॅटो, केसर, फिश स्टॉक आणि पांढरी वाईन घाला; उकळी आणून 15 मिनिटे शिजवा.', 'माशाचे तुकडे हळूवारपणे घाला आणि जवळजवळ शिजेपर्यंत 5-7 मिनिटे शिजवा.', 'कोळंबी आणि शिंपले घालून, शेलफिश उघडेपर्यंत आणि कोळंबी गुलाबी होईपर्यंत, सुमारे 3-5 मिनिटे शिजवा.', 'मीठ आणि मिरपूड घालून सीझन करा, नंतर लगेच कुरकुरीत ब्रेडसोबत सर्व्ह करा.']
            },
            te: {
                title: 'బూయబేస్',
                description: 'మధ్యధరా రుచులతో నిండిన గొప్ప, సుగంధభరితమైన ప్రోవెన్సల్ ఫిష్ స్టూ.',
                ingredients: [{ item: 'మిశ్రమ సీఫుడ్ (గట్టి తెల్ల చేప, రొయ్యలు, మస్సెల్స్)', amount: 'మొత్తం 2.5 పౌండ్లు' }, { item: 'ఆలివ్ నూనె', amount: '3 టేబుల్ స్పూన్లు' }, { item: 'సుగంధ కూరగాయలు (ఉల్లిపాయ, వెల్లుల్లి, సోంపు)', amount: '1 పెద్ద ఉల్లిపాయ, 4 వెల్లుల్లి రెబ్బలు, 1 చిన్న సోంపు గడ్డ' }, { item: 'డబ్బాలో ఉన్న నలిపిన టొమాటోలు', amount: '1 (28 ఔన్సులు) డబ్బా' }, { item: 'కుంకుమపువ్వు దారాలు', amount: '1/2 టీస్పూన్' }, { item: 'చేపల స్టాక్', amount: '4 కప్పులు' }, { item: 'పొడి తెలుపు వైన్', amount: '1 కప్పు' }],
                instructions: ['ఒక పెద్ద కుండలో ఆలివ్ నూనెలో ఉల్లిపాయ, వెల్లుల్లి మరియు సోంపు మెత్తబడే వరకు వేయించాలి.', 'టొమాటోలు, కుంకుమపువ్వు, చేపల స్టాక్ మరియు తెలుపు వైన్ వేసి; మరిగించి 15 నిమిషాలు ఉడికించాలి.', 'చేప ముక్కలను నెమ్మదిగా వేసి, దాదాపు ఉడికే వరకు 5-7 నిమిషాలు ఉడికించాలి.', 'రొయ్యలు మరియు మస్సెల్స్ వేసి, షెల్ఫిష్ తెరుచుకునే వరకు మరియు రొయ్యలు గులాబీ రంగులోకి మారే వరకు, సుమారు 3-5 నిమిషాలు ఉడికించాలి.', 'ఉప్పు మరియు మిరియాలు వేసి, ఆపై వెంటనే క్రస్టీ బ్రెడ్‌తో వడ్డించండి.']
            },
            ta: {
                title: 'பூயபேஸ்',
                description: 'மத்தியதரைக் கடல் சுவைகளுடன் நிறைந்த ஒரு செழுமையான, நறுமணமிக்க ப்ரோவென்சல் மீன் குழம்பு.',
                ingredients: [{ item: 'கலப்பு கடல் உணவு (கெட்டியான வெள்ளை மீன், இறால், மஸ்ஸல்ஸ்)', amount: 'மொத்தம் 2.5 பவுண்டுகள்' }, { item: 'ஆலிவ் எண்ணெய்', amount: '3 தேக்கரண்டி' }, { item: 'நறுமண காய்கறிகள் (வெங்காயம், பூண்டு, சோம்பு)', amount: '1 பெரிய வெங்காயம், 4 பல் பூண்டு, 1 சிறிய சோம்பு கிழங்கு' }, { item: 'டின் செய்யப்பட்ட நசுக்கிய தக்காளி', amount: '1 (28 அவுன்ஸ்) டின்' }, { item: 'குங்குமப்பூ இழைகள்', amount: '1/2 தேக்கரண்டி' }, { item: 'மீன் குழம்பு', amount: '4 கப்' }, { item: 'உலர்ந்த வெள்ளை ஒயின்', amount: '1 கப்' }],
                instructions: ['ஒரு பெரிய பாத்திரத்தில் ஆலிவ் எண்ணெயில் வெங்காயம், பூண்டு மற்றும் சோம்பு மென்மையாகும் வரை வதக்கவும்.', 'தக்காளி, குங்குமப்பூ, மீன் குழம்பு மற்றும் வெள்ளை ஒயின் சேர்த்து; கொதிக்க வைத்து 15 நிமிடங்கள் சமைக்கவும்.', 'மீன் துண்டுகளை மெதுவாக சேர்த்து, கிட்டத்தட்ட சமைக்கும் வரை 5-7 நிமிடங்கள் சமைக்கவும்.', 'இறால் மற்றும் மஸ்ஸல்ஸ் சேர்த்து, கடல் உணவுகள் திறக்கும் வரை மற்றும் இறால் இளஞ்சிவப்பு ஆகும் வரை, சுமார் 3-5 நிமிடங்கள் சமைக்கவும்.', 'உப்பு மற்றும் மிளகு சேர்த்து, பின்னர் உடனடியாக மொறுமொறுப்பான ரொட்டியுடன் பரிமாறவும்.']
            }
        }
    }
,
    {
        id: '2026-05-03',
        title: 'Mole Poblano',
        description: 'A rich, complex, and iconic Mexican sauce with chilies, spices, and chocolate.',
        image: 'https://www.themealdb.com/images/media/meals/n3xxd91598732796.jpg',
        prepTime: '30 min',
        cookTime: '60 min',
        difficulty: 'Medium',
        servings: 6,
        ingredients: [
            { item: 'Chicken pieces (thighs/drumsticks)', amount: '1.5 kg' },
            { item: 'Dried Ancho chilies', amount: '4' },
            { item: 'Dried Mulato chilies', amount: '2' },
            { item: 'Dried Pasilla chilies', amount: '2' },
            { item: 'Tomatillos', amount: '250g' },
            { item: 'Mexican chocolate (tablets)', amount: '50g' },
            { item: 'Almonds, sesame seeds, spices (cumin, cloves, cinnamon)', amount: '1/4 cup mixed' }
        ],
        instructions: [
            'Boil chicken until tender; reserve broth and shred chicken.',
            'Toast chilies, then rehydrate in hot water; blend with tomatillos and spices.',
            'Sauté the blended sauce in oil until thickened, stirring constantly.',
            'Stir in chocolate until melted, then add reserved chicken broth.',
            'Simmer the mole until rich and flavorful, then add shredded chicken.',
            'Serve hot with rice, garnished with sesame seeds.'
        ],
        tags: ['Mexican', 'Dinner', 'Non-Vegetarian'],
        translations: {
            hi: {
                title: 'मोल पोब्लानो',
                description: 'मिर्च, मसालों और चॉकलेट के साथ एक समृद्ध, जटिल और प्रतिष्ठित मैक्सिकन सॉस।',
                ingredients: [{ item: 'चिकन के टुकड़े (जांघ/ड्रमस्टिक)', amount: '1.5 किग्रा' }, { item: 'सूखी एंचो मिर्च', amount: '4' }, { item: 'सूखी मुलाटो मिर्च', amount: '2' }, { item: 'सूखी पासिला मिर्च', amount: '2' }, { item: 'टमाटरिल्लो', amount: '250 ग्राम' }, { item: 'मैक्सिकन चॉकलेट (टैबलेट)', amount: '50 ग्राम' }, { item: 'बादाम, तिल, मसाले (जीरा, लौंग, दालचीनी)', amount: '1/4 कप मिश्रित' }],
                instructions: ['चिकन को नरम होने तक उबालें; शोरबा अलग रखें और चिकन को श्रेड करें।', 'मिर्च को भूनें, फिर गर्म पानी में भिगोकर नरम करें; टमाटरिल्लो और मसालों के साथ पीस लें।', 'पिसे हुए सॉस को तेल में गाढ़ा होने तक लगातार चलाते हुए भूनें।', 'चॉकलेट पिघलने तक मिलाएं, फिर बचा हुआ चिकन शोरबा डालें।', 'मोल को गाढ़ा और स्वादिष्ट होने तक धीमी आंच पर पकाएं, फिर श्रेडेड चिकन डालें।', 'चावल के साथ गरमागरम परोसें, तिल से सजाएं।']
            },
            bn: {
                title: 'মোল পোব্লানো',
                description: 'মরিচ, মশলা এবং চকোলেট দিয়ে তৈরি একটি সমৃদ্ধ, জটিল এবং আইকনিক মেক্সিকান সস।',
                ingredients: [{ item: 'মুরগির টুকরা (উরুর/ড্রামস্টিক)', amount: '1.5 কেজি' }, { item: 'শুকনো অ্যাঙ্কো মরিচ', amount: '4টি' }, { item: 'শুকনো মুলাটো মরিচ', amount: '2টি' }, { item: 'শুকনো পাসিলা মরিচ', amount: '2টি' }, { item: 'টমাটিলো', amount: '250 গ্রাম' }, { item: 'মেক্সিকান চকোলেট (ট্যাবলেট)', amount: '50 গ্রাম' }, { item: 'বাদাম, তিল, মশলা (জিরা, লবঙ্গ, দারুচিনি)', amount: '1/4 কাপ মিশ্রিত' }],
                instructions: ['মুরগিকে নরম হওয়া পর্যন্ত সেদ্ধ করুন; ঝোল আলাদা রাখুন এবং মুরগি ছিঁড়ে নিন।', 'মরিচ ভেজে নিন, তারপর গরম জলে ভিজিয়ে নরম করুন; টমাটিলো এবং মশলা দিয়ে ব্লেন্ড করুন।', 'ব্লেন্ড করা সস তেলে ঘন হওয়া পর্যন্ত ক্রমাগত নাড়তে থাকুন।', 'চকোলেট গলে যাওয়া পর্যন্ত মেশান, তারপর সংরক্ষিত মুরগির ঝোল যোগ করুন।', 'মোল ঘন ও সুস্বাদু হওয়া পর্যন্ত অল্প আঁচে রান্না করুন, তারপর ছিঁড়ে রাখা মুরগি যোগ করুন।', 'ভাত দিয়ে গরম গরম পরিবেশন করুন, তিল দিয়ে সাজান।']
            },
            mr: {
                title: 'मोल पोब्लानो',
                description: 'मिरची, मसाले आणि चॉकलेटसह एक समृद्ध, जटिल आणि प्रतिष्ठित मेक्सिकन सॉस.',
                ingredients: [{ item: 'चिकनचे तुकडे (मांडी/ड्रमस्टिक)', amount: '1.5 किलो' }, { item: 'सुक्या अँको मिरच्या', amount: '4' }, { item: 'सुक्या मुलाटो मिरच्या', amount: '2' }, { item: 'सुक्या पासिला मिरच्या', amount: '2' }, { item: 'टोमॅटिलो', amount: '250 ग्रॅम' }, { item: 'मेक्सिकन चॉकलेट (गोळ्या)', amount: '50 ग्रॅम' }, { item: 'बदाम, तीळ, मसाले (जिरे, लवंग, दालचिनी)', amount: '1/4 कप मिश्रित' }],
                instructions: ['चिकन मऊ होईपर्यंत उकळा; सूप बाजूला ठेवा आणि चिकनचे तुकडे करा.', 'मिरच्या भाजून घ्या, नंतर गरम पाण्यात भिजवून मऊ करा; टोमॅटिलो आणि मसाल्यांसोबत वाटून घ्या.', 'वाटलेले सॉस तेलात घट्ट होईपर्यंत सतत ढवळत परतून घ्या.', 'चॉकलेट वितळेपर्यंत मिसळा, नंतर बाजूला ठेवलेले चिकन सूप घाला.', 'मोल घट्ट आणि चवदार होईपर्यंत मंद आचेवर शिजवा, नंतर चिकनचे तुकडे घाला.', 'गरम भातासोबत सर्व्ह करा, तिळाने सजवा.']
            },
            te: {
                title: 'మోల్ పోబ్లానో',
                description: 'మిరపకాయలు, మసాలాలు మరియు చాక్లెట్‌తో కూడిన గొప్ప, సంక్లిష్టమైన మరియు ఐకానిక్ మెక్సికన్ సాస్.',
                ingredients: [{ item: 'చికెన్ ముక్కలు (తొడలు/డ్రమ్‌స్టిక్‌లు)', amount: '1.5 కిలోలు' }, { item: 'ఎండిన అంచో మిరపకాయలు', amount: '4' }, { item: 'ఎండిన ములాటో మిరపకాయలు', amount: '2' }, { item: 'ఎండిన పాసిల్లా మిరపకాయలు', amount: '2' }, { item: 'టొమాటిల్లోలు', amount: '250 గ్రా' }, { item: 'మెక్సికన్ చాక్లెట్ (టాబ్లెట్‌లు)', amount: '50 గ్రా' }, { item: 'బాదం, నువ్వులు, మసాలాలు (జీలకర్ర, లవంగాలు, దాల్చినచెక్క)', amount: '1/4 కప్పు మిశ్రమం' }],
                instructions: ['చికెన్‌ను మెత్తగా ఉడికించి; రసం పక్కన పెట్టి, చికెన్‌ను తురుముకోవాలి.', 'మిరపకాయలను వేయించి, ఆపై వేడి నీటిలో నానబెట్టి; టొమాటిల్లోలు మరియు మసాలాలతో కలిపి రుబ్బుకోవాలి.', 'రుబ్బిన సాస్‌ను నూనెలో చిక్కబడే వరకు నిరంతరం కలుపుతూ వేయించాలి.', 'చాక్లెట్ కరిగే వరకు కలిపి, ఆపై పక్కన పెట్టిన చికెన్ రసం కలపాలి.', 'మోల్‌ను చిక్కగా మరియు రుచికరంగా అయ్యే వరకు ఉడికించి, ఆపై తురిమిన చికెన్ కలపాలి.', 'నువ్వులతో అలంకరించి, అన్నంతో వేడివేడిగా వడ్డించాలి.']
            },
            ta: {
                title: 'மோல் போப்லானோ',
                description: 'மிளகாய், மசாலா மற்றும் சாக்லேட் கொண்ட ஒரு செழுமையான, சிக்கலான மற்றும் பிரபலமான மெக்சிகன் சாஸ்.',
                ingredients: [{ item: 'கோழி துண்டுகள் (தொடை/டிரம்ஸ்டிக்ஸ்)', amount: '1.5 கிலோ' }, { item: 'உலர்ந்த அன்சோ மிளகாய்', amount: '4' }, { item: 'உலர்ந்த முலாட்டோ மிளகாய்', amount: '2' }, { item: 'உலர்ந்த பாசில்லா மிளகாய்', amount: '2' }, { item: 'தக்காளி (Tomatillos)', amount: '250 கிராம்' }, { item: 'மெக்சிகன் சாக்லேட் (மாத்திரைகள்)', amount: '50 கிராம்' }, { item: 'பாதாம், எள், மசாலாப் பொருட்கள் (சீரகம், கிராம்பு, இலவங்கப்பட்டை)', amount: '1/4 கப் கலவை' }],
                instructions: ['கோழியை மென்மையாகும் வரை வேகவைத்து; குழம்பை ஒதுக்கி வைத்து, கோழியை உதிர்த்துக்கொள்ளவும்.', 'மிளகாயை வறுத்து, பின்னர் சூடான நீரில் ஊறவைத்து; தக்காளி மற்றும் மசாலாப் பொருட்களுடன் அரைக்கவும்.', 'அரைத்த சாஸை எண்ணெயில் கெட்டியாகும் வரை தொடர்ந்து கிளறி வதக்கவும்.', 'சாக்லேட் உருகும் வரை கிளறி, பின்னர் ஒதுக்கி வைத்த கோழி குழம்பைச் சேர்க்கவும்.', 'மோல் கெட்டியாகி சுவையாகும் வரை கொதிக்கவைத்து, பின்னர் உதிர்த்த கோழியைச் சேர்க்கவும்.', 'அரிசி சாதத்துடன் சூடாகப் பரிமாறவும், எள் கொண்டு அலங்கரிக்கவும்.']
            }
        }
    }
,
    {
        id: '2026-05-04',
        title: 'Khao Pad (Fried Rice)',
        description: 'Experience the vibrant symphony of flavors in this classic Thai Khao Pad! Perfectly wok-tossed rice, infused with savory sauces, tender protein, and crisp vegetables, creates an irresistible harmony of sweet, salty, and umami. Each spoonful is a journey to the bustling streets of Bangkok, promising a truly authentic taste sensation. Don\'t just dream about it – bring the magic of Thailand to your kitchen tonight!',
        image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=75&w=800',
        prepTime: '20 min',
        cookTime: '15 min',
        difficulty: 'Medium',
        servings: 4,
        ingredients: [
            { item: 'Cooked Jasmine Rice (day-old, chilled)', amount: '4 cups' },
            { item: 'Chicken breast (or shrimp), thinly sliced', amount: '1 lb (approx 450g)' },
            { item: 'Large eggs', amount: '2' },
            { item: 'Garlic, minced', amount: '4 cloves' },
            { item: 'Shallots, thinly sliced', amount: '2 medium' },
            { item: 'Fish Sauce', amount: '3 tbsp' },
            { item: 'Oyster Sauce', amount: '2 tbsp' },
            { item: 'Soy Sauce (light)', amount: '1 tbsp' },
            { item: 'Sugar (palm or granulated)', amount: '1 tsp' },
            { item: 'White pepper', amount: '1/2 tsp' },
            { item: 'Vegetable oil', amount: '3 tbsp' },
            { item: 'Onion, diced', amount: '1/2 medium' },
            { item: 'Tomato, wedged', amount: '1 medium' },
            { item: 'Scallions, chopped', amount: '1/4 cup' },
            { item: 'Cucumber slices, lime wedges, fresh cilantro (for garnish)', amount: 'As needed' }
        ],
        instructions: [
            'Prepare the Sauce: In a small bowl, whisk together the fish sauce, oyster sauce, light soy sauce, sugar, and white pepper. Set aside. Ensure your day-old jasmine rice is broken up and free of clumps, as this prevents stickiness and ensures even frying.',
            'Cook Protein and Eggs: Heat 1 tablespoon of vegetable oil in a large wok or skillet over medium-high heat. Add the chicken (or shrimp) and stir-fry until cooked through and lightly browned, about 3-4 minutes. Push the protein to one side, add the remaining 2 tablespoons of oil, and crack in the eggs. Scramble the eggs until just set, then break them into smaller pieces and mix with the protein.',
            'Aromatics and Vegetables: Add the minced garlic and sliced shallots to the wok and stir-fry for about 1 minute until fragrant. Next, add the diced onion and stir-fry for another 2-3 minutes until softened. The aroma should be incredibly inviting at this stage.',
            'Combine and Fry: Add the chilled jasmine rice to the wok. Pour the prepared sauce mixture evenly over the rice. Using a spatula, continuously stir and toss the rice, breaking up any clumps and ensuring every grain is coated with the sauce and mixed with the other ingredients. Continue frying for 3-5 minutes until the rice is heated through and slightly toasted.',
            'Final Touches: Gently fold in the tomato wedges and chopped scallions, stirring just until they are heated through but still retain some freshness and bite. Avoid overcooking them to maintain their vibrant color and texture.',
            'Serve: Transfer the Khao Pad to serving plates. Garnish generously with fresh cucumber slices, lime wedges, and a sprinkle of fresh cilantro. Serve immediately and enjoy the authentic taste of Thailand!'
        ],
        tags: ['Thai', 'Dinner', 'Non-Vegetarian'],
        translations: {
            hi: {
                title: 'खाओ पैड (फ्राइड राइस)',
                description: 'इस क्लासिक थाई खाओ पैड में स्वादों की जीवंत सिम्फनी का अनुभव करें! पूरी तरह से वोक-टॉस्ड चावल, स्वादिष्ट सॉस, नरम प्रोटीन और कुरकुरी सब्जियों से भरपूर, मीठे, नमकीन और उमामी का एक अनूठा सामंजस्य बनाता है। हर निवाला बैंकॉक की हलचल भरी सड़कों की यात्रा है, जो वास्तव में प्रामाणिक स्वाद का वादा करता है। इसके बारे में सिर्फ सपने न देखें - आज रात थाईलैंड का जादू अपनी रसोई में लाएँ!',
                ingredients: [{ item: 'पके हुए जैस्मीन चावल (एक दिन पुराने, ठंडे)', amount: '4 कप' }, { item: 'चिकन ब्रेस्ट (या झींगा), पतले कटे हुए', amount: '1 पौंड (लगभग 450 ग्राम)' }, { item: 'बड़े अंडे', amount: '2' }, { item: 'लहसुन, बारीक कटा हुआ', amount: '4 कलियाँ' }, { item: 'शैलट्स, पतले कटे हुए', amount: '2 मध्यम' }, { item: 'फिश सॉस', amount: '3 बड़े चम्मच' }, { item: 'ऑयस्टर सॉस', amount: '2 बड़े चम्मच' }, { item: 'सोया सॉस (हल्का)', amount: '1 बड़ा चम्मच' }, { item: 'चीनी (पाम या दानेदार)', amount: '1 छोटा चम्मच' }, { item: 'सफेद मिर्च', amount: '1/2 छोटा चम्मच' }, { item: 'वनस्पति तेल', amount: '3 बड़े चम्मच' }, { item: 'प्याज, कटा हुआ', amount: '1/2 मध्यम' }, { item: 'टमाटर, फांकों में कटा हुआ', amount: '1 मध्यम' }, { item: 'स्प्रिंग अनियन, कटा हुआ', amount: '1/4 कप' }, { item: 'खीरे के टुकड़े, नींबू के फांक', amount: 'undefined' }],
                instructions: []
            },
            bn: {
                title: '',
                description: '',
                ingredients: [],
                instructions: []
            },
            mr: {
                title: '',
                description: '',
                ingredients: [],
                instructions: []
            },
            te: {
                title: '',
                description: '',
                ingredients: [],
                instructions: []
            },
            ta: {
                title: '',
                description: '',
                ingredients: [],
                instructions: []
            }
        }
    }
,
    {
        id: '2026-05-05',
        title: 'Mongolian Beef',
        description: 'Indulge in the ultimate comfort food: tender, thinly sliced beef bathed in a rich, savory-sweet sauce with aromatic ginger and garlic. This iconic dish promises a symphony of flavors, perfectly caramelized and incredibly satisfying. Elevate your dinner tonight with this restaurant-quality delight!',
        image: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&q=75&w=800',
        prepTime: '20 min',
        cookTime: '15 min',
        difficulty: 'Medium',
        servings: 4,
        ingredients: [
            { item: 'Beef Flank Steak', amount: '1.5 lbs (thinly sliced)' },
            { item: 'Cornstarch', amount: '2 tbsp' },
            { item: 'Soy Sauce', amount: '1/2 cup' },
            { item: 'Water', amount: '1/4 cup' },
            { item: 'Brown Sugar', amount: '1/2 cup' },
            { item: 'Fresh Ginger', amount: '1 tbsp (grated)' },
            { item: 'Garlic', amount: '3 cloves (minced)' },
            { item: 'Vegetable Oil', amount: '3 tbsp' },
            { item: 'Green Onions', amount: '1 bunch (chopped)' }
        ],
        instructions: [
            'Coat sliced beef with cornstarch.',
            'Whisk soy sauce, water, brown sugar, ginger, and garlic for the sauce.',
            'Heat oil in a wok; stir-fry beef in batches until browned, then remove.',
            'Add sauce to wok, simmer until thickened. Return beef, toss to coat, and cook 1-2 minutes.',
            'Garnish with green onions and serve hot with rice.'
        ],
        tags: ['Chinese', 'Dinner', 'Non-Vegetarian'],
        translations: {
            hi: {
                title: 'मंगोलियाई बीफ',
                description: 'बेहतरीन आरामदायक भोजन का आनंद लें: नरम, पतले कटे हुए बीफ को सुगंधित अदरक और लहसुन के साथ एक समृद्ध, नमकीन-मीठी चटनी में नहलाया गया। यह प्रतिष्ठित व्यंजन स्वादों की एक सिम्फनी का वादा करता है, पूरी तरह से कैरामेलाइज़्ड और अविश्वसनीय रूप से संतोषजनक। इस रेस्टोरेंट-गुणवत्ता वाले व्यंजन से आज रात अपने खाने को बेहतर बनाएं!',
                ingredients: [{ item: 'बीफ फ्लैंक स्टेक', amount: '1.5 पाउंड (पतले कटे हुए)' }, { item: 'कॉर्नस्टार्च', amount: '2 बड़े चम्मच' }, { item: 'सोया सॉस', amount: '1/2 कप' }, { item: 'पानी', amount: '1/4 कप' }, { item: 'ब्राउन शुगर', amount: '1/2 कप' }, { item: 'ताजा अदरक', amount: '1 बड़ा चम्मच (कद्दूकस किया हुआ)' }, { item: 'लहसुन', amount: '3 कलियाँ (बारीक कटा हुआ)' }, { item: 'वनस्पति तेल', amount: '3 बड़े चम्मच' }, { item: 'हरी प्याज', amount: '1 गुच्छा (कटी हुई)' }],
                instructions: ['कटे हुए बीफ को कॉर्नस्टार्च से लपेटें।', 'सॉस के लिए सोया सॉस, पानी, ब्राउन शुगर, अदरक और लहसुन को फेंटें।', 'कड़ाही में तेल गरम करें; बीफ को बैचों में भूनें जब तक कि वह भूरा न हो जाए, फिर निकाल लें।', 'कड़ाही में सॉस डालें, गाढ़ा होने तक उबालें। बीफ वापस डालें, लपेटने के लिए टॉस करें, और 1-2 मिनट तक पकाएं।', 'हरी प्याज से सजाकर चावल के साथ गरमागरम परोसें।']
            },
            bn: {
                title: 'মঙ্গোলিয়ান বিফ',
                description: 'চূড়ান্ত আরামদায়ক খাবারের স্বাদ নিন: নরম, পাতলা করে কাটা গরুর মাংস সুগন্ধি আদা এবং রসুনের সাথে একটি সমৃদ্ধ, সুস্বাদু-মিষ্টি সসে ডুবানো। এই আইকনিক খাবারটি স্বাদের এক সিম্ফনির প্রতিশ্রুতি দেয়, পুরোপুরি ক্যারামেলাইজড এবং অবিশ্বাস্যভাবে সন্তোষজনক। এই রেস্তোরাঁ-মানের খাবার দিয়ে আজ রাতে আপনার ডিনারকে উন্নত করুন!',
                ingredients: [{ item: 'বিফ ফ্ল্যাঙ্ক স্টেক', amount: '1.5 পাউন্ড (পাতলা করে কাটা)' }, { item: 'কর্নস্টার্চ', amount: '2 টেবিল চামচ' }, { item: 'সয়া সস', amount: '1/2 কাপ' }, { item: 'জল', amount: '1/4 কাপ' }, { item: 'ব্রাউন সুগার', amount: '1/2 কাপ' }, { item: 'তাজা আদা', amount: '1 টেবিল চামচ (গ্রেট করা)' }, { item: 'রসুন', amount: '3 কোয়া (কুচি করা)' }, { item: 'উদ্ভিজ্জ তেল', amount: '3 টেবিল চামচ' }, { item: 'সবুজ পেঁয়াজ', amount: '1 গুচ্ছ (কাটা)' }],
                instructions: ['পাতলা করে কাটা গরুর মাংস কর্নস্টার্চ দিয়ে মাখিয়ে নিন।', 'সসের জন্য সয়া সস, জল, ব্রাউন সুগার, আদা এবং রসুন ফেটিয়ে নিন।', 'কড়াইতে তেল গরম করুন; গরুর মাংস ব্যাচে বাদামী হওয়া পর্যন্ত ভাজুন, তারপর তুলে নিন।', 'কড়াইতে সস যোগ করুন, ঘন হওয়া পর্যন্ত ফুটিয়ে নিন। গরুর মাংস ফিরিয়ে দিন, মাখিয়ে নিন এবং 1-2 মিনিট রান্না করুন।', 'সবুজ পেঁয়াজ দিয়ে সাজিয়ে ভাতের সাথে গরম গরম পরিবেশন করুন।']
            },
            mr: {
                title: 'मंगोलियन बीफ',
                description: 'अंतिम आरामदायक अन्नाचा आनंद घ्या: कोमल, पातळ कापलेले बीफ सुगंधी आले आणि लसूण असलेल्या समृद्ध, चवदार-गोड सॉसमध्ये बुडवलेले. हा प्रतिष्ठित पदार्थ चवींची सिम्फनी देतो, पूर्णपणे कॅरमेलाइज्ड आणि अविश्वसनीयपणे समाधानकारक. या रेस्टॉरंट-गुणवत्तेच्या पदार्थाने आज रात्री तुमचे जेवण उत्कृष्ट बनवा!',
                ingredients: [{ item: 'बीफ फ्लँक स्टेक', amount: '1.5 पौंड (पातळ कापलेले)' }, { item: 'कॉर्नस्टार्च', amount: '2 चमचे' }, { item: 'सोया सॉस', amount: '1/2 कप' }, { item: 'पाणी', amount: '1/4 कप' }, { item: 'ब्राऊन शुगर', amount: '1/2 कप' }, { item: 'ताजे आले', amount: '1 चमचा (किसलेले)' }, { item: 'लसूण', amount: '3 पाकळ्या (बारीक चिरलेले)' }, { item: 'वनस्पती तेल', amount: '3 चमचे' }, { item: 'हिरवी कांदा', amount: '1 जुडी (चिरलेली)' }],
                instructions: ['पातळ कापलेल्या बीफला कॉर्नस्टार्च लावा.', 'सॉससाठी सोया सॉस, पाणी, ब्राऊन शुगर, आले आणि लसूण एकत्र फेटा.', 'कढईत तेल गरम करा; बीफचे तुकडे सोनेरी होईपर्यंत तळा, नंतर काढून टाका.', 'कढईत सॉस घाला, घट्ट होईपर्यंत उकळा. बीफ परत घाला, एकत्र करा आणि 1-2 मिनिटे शिजवा.', 'हिरव्या कांद्याने सजवा आणि भातासोबत गरम सर्व्ह करा.']
            },
            te: {
                title: 'మంగోలియన్ బీఫ్',
                description: 'అద్భుతమైన సౌకర్యవంతమైన ఆహారాన్ని ఆస్వాదించండి: సువాసనగల అల్లం మరియు వెల్లుల్లితో కూడిన రుచికరమైన, తీపి సాస్‌లో ముంచిన మృదువైన, సన్నగా తరిగిన బీఫ్. ఈ ఐకానిక్ వంటకం రుచుల సింఫొనీని అందిస్తుంది, సంపూర్ణంగా కారామెలైజ్ చేయబడినది మరియు అద్భుతంగా సంతృప్తికరమైనది. ఈ రెస్టారెంట్-నాణ్యత వంటకంతో ఈ రాత్రి మీ విందును మెరుగుపరచండి!',
                ingredients: [{ item: 'బీఫ్ ఫ్లాంక్ స్టీక్', amount: '1.5 పౌండ్లు (సన్నగా తరిగిన)' }, { item: 'కార్న్‌స్టార్చ్', amount: '2 టేబుల్ స్పూన్లు' }, { item: 'సోయా సాస్', amount: '1/2 కప్పు' }, { item: 'నీరు', amount: '1/4 కప్పు' }, { item: 'బ్రౌన్ షుగర్', amount: '1/2 కప్పు' }, { item: 'తాజా అల్లం', amount: '1 టేబుల్ స్పూన్ (తురిమిన)' }, { item: 'వెల్లుల్లి', amount: '3 రెబ్బలు (ముక్కలు చేసిన)' }, { item: 'కూరగాయల నూనె', amount: '3 టేబుల్ స్పూన్లు' }, { item: 'పచ్చి ఉల్లిపాయలు', amount: '1 కట్ట (తరిగిన)' }],
                instructions: ['తరిగిన బీఫ్‌ను కార్న్‌స్టార్చ్‌తో పూయండి.', 'సాస్ కోసం సోయా సాస్, నీరు, బ్రౌన్ షుగర్, అల్లం మరియు వెల్లుల్లిని కలపండి.', 'కడాయిలో నూనె వేడి చేయండి; బీఫ్‌ను బ్యాచ్‌లలో గోధుమ రంగు వచ్చేవరకు వేయించి, తీసివేయండి.', 'కడాయిలో సాస్ వేసి, చిక్కబడే వరకు ఉడకబెట్టండి. బీఫ్‌ను తిరిగి వేసి, కలపండి మరియు 1-2 నిమిషాలు ఉడికించండి.', 'పచ్చి ఉల్లిపాయలతో అలంకరించి, అన్నంతో వేడివేడిగా వడ్డించండి.']
            },
            ta: {
                title: 'மங்கோலியன் மாட்டிறைச்சி',
                description: 'மென்மையான, மெல்லியதாக வெட்டப்பட்ட மாட்டிறைச்சியை நறுமணமிக்க இஞ்சி மற்றும் பூண்டுடன் கூடிய செழுமையான, சுவையான-இனிப்பு சாஸில் குளிப்பாட்டி, அற்புதமான ஆறுதல் உணவை அனுபவிக்கவும். இந்த சின்னமான உணவு சுவைகளின் சிம்பொனியை உறுதியளிக்கிறது, கச்சிதமாக கேரமலைஸ் செய்யப்பட்டு நம்பமுடியாத திருப்தியை அளிக்கிறது. இந்த உணவகத் தரமான உணவின் மூலம் இன்றிரவு உங்கள் இரவு உணவை மேம்படுத்துங்கள்!',
                ingredients: [{ item: 'மாட்டிறைச்சி ஃபிளாங்க் ஸ்டீக்', amount: '1.5 பவுண்ட் (மெல்லியதாக வெட்டப்பட்டது)' }, { item: 'சோள மாவு', amount: '2 தேக்கரண்டி' }, { item: 'சோயா சாஸ்', amount: '1/2 கப்' }, { item: 'தண்ணீர்', amount: '1/4 கப்' }, { item: 'பழுப்பு சர்க்கரை', amount: '1/2 கப்' }, { item: 'புதிய இஞ்சி', amount: '1 தேக்கரண்டி (துருவியது)' }, { item: 'பூண்டு', amount: '3 பற்கள் (நறுக்கியது)' }, { item: 'காய்கறி எண்ணெய்', amount: '3 தேக்கரண்டி' }, { item: 'பச்சை வெங்காயம்', amount: '1 கொத்து (நறுக்கியது)' }],
                instructions: ['வெட்டப்பட்ட மாட்டிறைச்சியை சோள மாவுடன் பூசவும்.', 'சாஸிற்காக சோயா சாஸ், தண்ணீர், பழுப்பு சர்க்கரை, இஞ்சி மற்றும் பூண்டு ஆகியவற்றை ஒன்றாக கலக்கவும்.', 'கடாயில் எண்ணெய் சூடாக்கவும்; மாட்டிறைச்சியை பொன்னிறமாகும் வரை வறுத்து, பின்னர் அகற்றவும்.', 'கடாயில் சாஸை சேர்த்து, கெட்டியாகும் வரை கொதிக்க விடவும். மாட்டிறைச்சியை மீண்டும் சேர்த்து, கலக்கி, 1-2 நிமிடங்கள் சமைக்கவும்.', 'பச்சை வெங்காயத்தால் அலங்கரித்து, சாதத்துடன் சூடாக பரிமாறவும்.']
            }
        }
    }
,
    {
        id: '2026-05-06',
        title: 'Hainanese Chicken Rice',
        description: 'Experience the iconic flavors of Singapore with this classic Hainanese Chicken Rice. Succulent, poached chicken, fragrant rice cooked in chicken broth, and a trio of vibrant dipping sauces create an unforgettable culinary journey. Prepare to be transported to the bustling hawker centers with every exquisite bite!',
        image: 'https://images.unsplash.com/photo-1551183053-bf91798d792e?auto=format&fit=crop&q=75&w=800',
        prepTime: '20 min',
        cookTime: '40 min',
        difficulty: 'Medium',
        servings: 4,
        ingredients: [
            { item: 'Whole Chicken', amount: '1.2-1.5 kg' },
            { item: 'Ginger', amount: '1 large knob, sliced' },
            { item: 'Garlic', amount: '8 cloves, smashed' },
            { item: 'Spring Onions', amount: '3 stalks, chopped' },
            { item: 'Jasmine Rice', amount: '2 cups' },
            { item: 'Cucumber', amount: '1, sliced' },
            { item: 'Fresh Coriander', amount: 'for garnish' },
            { item: 'Light Soy Sauce', amount: 'for dipping' },
            { item: 'Chilli Sauce', amount: 'for dipping' },
            { item: 'Ginger-Scallion Sauce', amount: 'for dipping' }
        ],
        instructions: [
            'Poach the whole chicken in a large pot with ginger, garlic, and spring onions until cooked through. Reserve the broth.',
            'Immediately plunge the cooked chicken into an ice bath for 10 minutes, then pat dry and chop into serving pieces.',
            'Sauté some ginger and garlic, then add jasmine rice and cook with reserved chicken broth until fluffy and fragrant.',
            'Serve the chopped chicken over the fragrant rice, garnished with cucumber and coriander, alongside the three dipping sauces.'
        ],
        tags: ['Singaporean', 'Dinner', 'Non-Vegetarian'],
        translations: {
            hi: {
                title: 'हैनानीज़ चिकन राइस',
                description: 'सिंगापुर के प्रतिष्ठित हैनानीज़ चिकन राइस के साथ उसके क्लासिक स्वाद का अनुभव करें। रसीला, उबला हुआ चिकन, चिकन शोरबे में पका हुआ सुगंधित चावल, और तीन जीवंत डिपिंग सॉस एक अविस्मरणीय पाक यात्रा बनाते हैं। हर स्वादिष्ट निवाले के साथ हलचल भरे हॉकर सेंटरों में पहुँचने के लिए तैयार हो जाइए!',
                ingredients: [{ item: 'साबुत चिकन', amount: '1.2-1.5 किग्रा' }, { item: 'अदरक', amount: '1 बड़ा टुकड़ा, कटा हुआ' }, { item: 'लहसुन', amount: '8 कलियाँ, कुचला हुआ' }, { item: 'हरा प्याज', amount: '3 डंठल, कटा हुआ' }, { item: 'जैस्मीन चावल', amount: '2 कप' }, { item: 'खीरा', amount: '1, कटा हुआ' }, { item: 'ताजा धनिया', amount: 'सजावट के लिए' }, { item: 'हल्का सोया सॉस', amount: 'डिपिंग के लिए' }, { item: 'चिली सॉस', amount: 'डिपिंग के लिए' }, { item: 'अदरक-हरा प्याज सॉस', amount: 'डिपिंग के लिए' }],
                instructions: ['साबुत चिकन को अदरक, लहसुन और हरे प्याज के साथ एक बड़े बर्तन में पकने तक उबालें। शोरबा बचाकर रखें।', 'पके हुए चिकन को तुरंत 10 मिनट के लिए बर्फ के पानी में डुबोएं, फिर सुखाकर परोसने वाले टुकड़ों में काट लें।', 'थोड़ा अदरक और लहसुन भूनें, फिर जैस्मीन चावल डालें और बचे हुए चिकन शोरबे के साथ सुगंधित और फूला हुआ होने तक पकाएं।', 'कटे हुए चिकन को सुगंधित चावल के ऊपर परोसें, खीरे और धनिये से सजाकर, तीन डिपिंग सॉस के साथ।']
            },
            bn: {
                title: 'হাইনানিজ চিকেন রাইস',
                description: 'সিঙ্গাপুরের আইকনিক হাইনানিজ চিকেন রাইসের ক্লাসিক স্বাদের অভিজ্ঞতা নিন। রসালো, পোচ করা মুরগি, মুরগির ঝোলে রান্না করা সুগন্ধি ভাত এবং তিনটি প্রাণবন্ত ডিপিং সস একটি অবিস্মরণীয় রন্ধনশিল্পের যাত্রা তৈরি করে। প্রতিটি সুস্বাদু কামড়ে ব্যস্ত হকার সেন্টারগুলিতে পৌঁছে যাওয়ার জন্য প্রস্তুত হন!',
                ingredients: [{ item: 'পুরো মুরগি', amount: '1.2-1.5 কেজি' }, { item: 'আদা', amount: '1 বড় টুকরা, স্লাইস করা' }, { item: 'রসুন', amount: '8 কোয়া, থেঁতলানো' }, { item: 'পেঁয়াজ কলি', amount: '3 ডাঁটা, কাটা' }, { item: 'জুঁই চাল', amount: '2 কাপ' }, { item: 'শসা', amount: '1টি, স্লাইস করা' }, { item: 'তাজা ধনে পাতা', amount: 'সাজানোর জন্য' }, { item: 'হালকা সয়া সস', amount: 'ডিপিংয়ের জন্য' }, { item: 'চিলি সস', amount: 'ডিপিংয়ের জন্য' }, { item: 'আদা-পেঁয়াজ কলি সস', amount: 'ডিপিংয়ের জন্য' }],
                instructions: ['আদা, রসুন এবং পেঁয়াজ কলি দিয়ে একটি বড় পাত্রে পুরো মুরগি সিদ্ধ করুন যতক্ষণ না এটি ভালোভাবে সেদ্ধ হয়। ঝোল সংরক্ষণ করুন।', 'সেদ্ধ মুরগিটি অবিলম্বে 10 মিনিটের জন্য বরফ জলে ডুবিয়ে রাখুন, তারপর শুকিয়ে পরিবেশনের জন্য টুকরো করে কাটুন।', 'কিছু আদা ও রসুন ভেজে নিন, তারপর জুঁই চাল যোগ করুন এবং সংরক্ষিত মুরগির ঝোল দিয়ে সুগন্ধি ও ঝরঝরে হওয়া পর্যন্ত রান্না করুন।', 'কাটা মুরগি সুগন্ধি ভাতের উপর পরিবেশন করুন, শসা ও ধনে পাতা দিয়ে সাজিয়ে, তিনটি ডিপিং সসের সাথে।']
            },
            mr: {
                title: 'हैनानीज चिकन राईस',
                description: 'सिंगापूरच्या प्रतिष्ठित हैनानीज चिकन राईसच्या क्लासिक चवीचा अनुभव घ्या. रसाळ, उकडलेले चिकन, चिकनच्या रसात शिजवलेला सुगंधी भात आणि तीन चमकदार डिपिंग सॉस एक अविस्मरणीय पाककृती प्रवास तयार करतात. प्रत्येक स्वादिष्ट घासासोबत गजबजलेल्या हॉकर सेंटर्समध्ये पोहोचण्यासाठी तयार व्हा!',
                ingredients: [{ item: 'पूर्ण चिकन', amount: '1.2-1.5 किलो' }, { item: 'आले', amount: '1 मोठा तुकडा, कापलेले' }, { item: 'लसूण', amount: '8 पाकळ्या, ठेचलेले' }, { item: 'कांद्याची पात', amount: '3 देठ, चिरलेली' }, { item: 'जास्मिन तांदूळ', amount: '2 कप' }, { item: 'काकडी', amount: '1, कापलेली' }, { item: 'ताजी कोथिंबीर', amount: 'सजावटीसाठी' }, { item: 'हलका सोया सॉस', amount: 'डिपिंगसाठी' }, { item: 'चिली सॉस', amount: 'डिपिंगसाठी' }, { item: 'आले-कांद्याची पात सॉस', amount: 'डिपिंगसाठी' }],
                instructions: ['आले, लसूण आणि कांद्याच्या पाथीसोबत एका मोठ्या भांड्यात पूर्ण चिकन शिजवून घ्या. सूप बाजूला ठेवा.', 'शिजवलेले चिकन लगेच 10 मिनिटांसाठी बर्फाच्या पाण्यात बुडवा, नंतर कोरडे करून सर्व्ह करण्यायोग्य तुकड्यांमध्ये कापा.', 'थोडे आले आणि लसूण परतून घ्या, नंतर जास्मिन तांदूळ घालून बाजूला ठेवलेल्या चिकन सूपमध्ये सुगंधी आणि मोकळा होईपर्यंत शिजवा.', 'चिरलेले चिकन सुगंधी भातावर, काकडी आणि कोथिंबीरीने सजवून, तीन डिपिंग सॉससोबत सर्व्ह करा.']
            },
            te: {
                title: 'హైనానీస్ చికెన్ రైస్',
                description: 'సింగపూర్ యొక్క ఐకానిక్ హైనానీస్ చికెన్ రైస్ యొక్క క్లాసిక్ రుచులను అనుభవించండి. జ్యుసి, ఉడికించిన చికెన్, చికెన్ రసంలో వండిన సువాసనగల అన్నం, మరియు మూడు రకాల డిప్పింగ్ సాస్‌లు మరపురాని పాక ప్రయాణాన్ని సృష్టిస్తాయి. ప్రతి రుచికరమైన కాటుతో సందడిగా ఉండే హాకర్ సెంటర్లకు రవాణా కావడానికి సిద్ధంగా ఉండండి!',
                ingredients: [{ item: 'మొత్తం చికెన్', amount: '1.2-1.5 కిలోలు' }, { item: 'అల్లం', amount: '1 పెద్ద ముక్క, ముక్కలుగా కోసినది' }, { item: 'వెల్లుల్లి', amount: '8 రెబ్బలు, నలిపినది' }, { item: 'స్ప్రింగ్ ఆనియన్స్', amount: '3 కాడలు, తరిగినవి' }, { item: 'జాస్మిన్ రైస్', amount: '2 కప్పులు' }, { item: 'దోసకాయ', amount: '1, ముక్కలుగా కోసినది' }, { item: 'తాజా కొత్తిమీర', amount: 'అలంకరణ కోసం' }, { item: 'లేత సోయా సాస్', amount: 'డిప్పింగ్ కోసం' }, { item: 'మిరప సాస్', amount: 'డిప్పింగ్ కోసం' }, { item: 'అల్లం-స్ప్రింగ్ ఆనియన్ సాస్', amount: 'డిప్పింగ్ కోసం' }],
                instructions: ['అల్లం, వెల్లుల్లి మరియు స్ప్రింగ్ ఆనియన్స్‌తో ఒక పెద్ద పాత్రలో మొత్తం చికెన్‌ను ఉడికించాలి. రసాన్ని పక్కన పెట్టండి.', 'ఉడికించిన చికెన్‌ను వెంటనే 10 నిమిషాలు ఐస్ వాటర్‌లో ముంచి, ఆపై ఆరబెట్టి, సర్వింగ్ ముక్కలుగా కోయండి.', 'కొద్దిగా అల్లం మరియు వెల్లుల్లిని వేయించి, ఆపై జాస్మిన్ రైస్ వేసి, పక్కన పెట్టిన చికెన్ రసంతో మెత్తగా మరియు సువాసనగా అయ్యే వరకు ఉడికించాలి.', 'తరిగిన చికెన్‌ను సువాసనగల అన్నంపై, దోసకాయ మరియు కొత్తిమీరతో అలంకరించి, మూడు డిప్పింగ్ సాస్‌లతో వడ్డించండి.']
            },
            ta: {
                title: 'ஹெய்னானீஸ் சிக்கன் ரைஸ்',
                description: 'சிங்கப்பூரின் அடையாளமான ஹெய்னானீஸ் சிக்கன் ரைஸின் கிளாசிக் சுவைகளை அனுபவியுங்கள். மென்மையான, வேகவைத்த கோழி, கோழி சூப்பில் சமைத்த நறுமணமுள்ள சாதம், மற்றும் மூன்று துடிப்பான டிப்பிங் சாஸ்கள் ஒரு மறக்க முடியாத சமையல் பயணத்தை உருவாக்குகின்றன. ஒவ்வொரு சுவையான கடியிலும் பரபரப்பான ஹாக்கர் மையங்களுக்குச் செல்ல தயாராகுங்கள்!',
                ingredients: [{ item: 'முழு கோழி', amount: '1.2-1.5 கிலோ' }, { item: 'இஞ்சி', amount: '1 பெரிய துண்டு, நறுக்கியது' }, { item: 'பூண்டு', amount: '8 பற்கள், நசுக்கியது' }, { item: 'வெங்காயத் தாள்', amount: '3 தண்டுகள், நறுக்கியது' }, { item: 'மல்லிகை அரிசி', amount: '2 கப்' }, { item: 'வெள்ளரி', amount: '1, நறுக்கியது' }, { item: 'புதிய கொத்தமல்லி', amount: 'அலங்காரத்திற்கு' }, { item: 'லேசான சோயா சாஸ்', amount: 'டிப்பிங்கிற்கு' }, { item: 'மிளகாய் சாஸ்', amount: 'டிப்பிங்கிற்கு' }, { item: 'இஞ்சி-வெங்காயத் தாள் சாஸ்', amount: 'டிப்பிங்கிற்கு' }],
                instructions: ['இஞ்சி, பூண்டு மற்றும் வெங்காயத் தாளுடன் ஒரு பெரிய பாத்திரத்தில் முழு கோழியை வேகும் வரை வேகவைக்கவும். சூப்பை தனியே வைக்கவும்.', 'வேகவைத்த கோழியை உடனடியாக 10 நிமிடங்கள் ஐஸ் தண்ணீரில் மூழ்கடித்து, பின்னர் உலர்த்தி, பரிமாறும் துண்டுகளாக வெட்டவும்.', 'சிறிது இஞ்சி மற்றும் பூண்டை வதக்கி, பின்னர் மல்லிகை அரிசியைச் சேர்த்து, தனியே வைத்த கோழி சூப்புடன் மென்மையாகவும் நறுமணத்துடனும் வரும் வரை சமைக்கவும்.', 'நறுக்கிய கோழியை நறுமணமுள்ள சாதத்தின் மீது, வெள்ளரி மற்றும் கொத்தமல்லியால் அலங்கரித்து, மூன்று டிப்பிங் சாஸ்களுடன் பரிமாறவும்.']
            }
        }
    }
,
    {
        id: '2026-05-07',
        title: 'Manti Dumplings',
        description: 'Experience the exquisite taste of Turkish Manti, tiny, delicate dumplings filled with spiced ground meat. Bathed in a creamy garlic yogurt sauce and drizzled with sizzling, aromatic butter infused with red pepper and mint, each bite is a symphony of textures and flavors. Prepare to be captivated by this culinary masterpiece – your journey to Turkish delight begins today!',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=75&w=800',
        prepTime: '60 min',
        cookTime: '20 min',
        difficulty: 'Medium',
        servings: 4,
        ingredients: [
            { item: 'All-purpose Flour', amount: '3 cups' },
            { item: 'Egg', amount: '1 large' },
            { item: 'Water', amount: '1/2 cup' },
            { item: 'Ground Beef/Lamb', amount: '300g' },
            { item: 'Onion', amount: '1 small, finely grated' },
            { item: 'Plain Yogurt', amount: '2 cups' },
            { item: 'Garlic', amount: '3 cloves, minced' },
            { item: 'Unsalted Butter', amount: '4 tbsp' },
            { item: 'Red Pepper Flakes (Pul Biber)', amount: '1 tsp' },
            { item: 'Dried Mint', amount: '1 tsp' }
        ],
        instructions: [
            'Prepare Dough & Filling: Combine flour, egg, water, and a pinch of salt to form a firm dough. Knead, rest. Mix ground meat, grated onion, salt, and pepper for filling.',
            'Shape Manti: Roll dough thinly, cut into small squares (approx. 1.5 cm). Place a tiny amount of filling in the center of each square and pinch all four corners together to form a small parcel.',
            'Cook Manti: Bring a large pot of salted water to a boil. Gently drop the manti into the boiling water and cook for 8-10 minutes until they float and are tender.',
            'Prepare Sauces & Serve: Whisk yogurt with minced garlic and a pinch of salt. Melt butter, add red pepper flakes and dried mint; heat until fragrant. Drain manti, arrange on plates, top with garlic yogurt, and drizzle generously with the hot spiced butter.'
        ],
        tags: ['Turkish', 'Dinner', 'Non-Vegetarian'],
        translations: {
            hi: {
                title: 'मंती पकौड़ी',
                description: 'तुर्की मंती के उत्कृष्ट स्वाद का अनुभव करें, छोटे, नाजुक पकौड़े जो मसालेदार कीमा से भरे होते हैं। मलाईदार लहसुन दही सॉस में डूबे हुए और लाल मिर्च और पुदीने से युक्त सुगंधित मक्खन के साथ परोसे जाने पर, हर निवाला बनावट और स्वाद का एक अद्भुत संगम है।',
                ingredients: [{ item: 'मैदा', amount: '3 कप' }, { item: 'अंडा', amount: '1 बड़ा' }, { item: 'पानी', amount: '1/2 कप' }, { item: 'कीमा बनाया हुआ मांस (बीफ/भेड़ का)', amount: '300 ग्राम' }, { item: 'प्याज', amount: '1 छोटा, बारीक कसा हुआ' }, { item: 'सादा दही', amount: '2 कप' }, { item: 'लहसुन', amount: '3 कलियाँ' }],
                instructions: []
            },
            bn: {
                title: '',
                description: '',
                ingredients: [],
                instructions: []
            },
            mr: {
                title: '',
                description: '',
                ingredients: [],
                instructions: []
            },
            te: {
                title: '',
                description: '',
                ingredients: [],
                instructions: []
            },
            ta: {
                title: '',
                description: '',
                ingredients: [],
                instructions: []
            }
        }
    }
,
    {
        id: '2026-05-08',
        title: 'Char Kway Teow',
        description: 'Experience the smoky, savory symphony of Char Kway Teow, Singapore\'s beloved stir-fried noodle dish. Flat rice noodles wok-tossed with succulent prawns, Chinese sausage, and cockles, all coated in a rich, dark soy sauce. The intense \'wok hei\' flavor will transport your taste buds straight to the hawker stalls. Ready to master this iconic street food in your own kitchen today?',
        image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&q=75&w=800',
        prepTime: '20 min',
        cookTime: '40 min',
        difficulty: 'Medium',
        servings: 4,
        ingredients: [
            { item: 'Fresh Flat Rice Noodles (Kway Teow)', amount: '500g' },
            { item: 'Prawns (shelled, deveined)', amount: '200g' },
            { item: 'Chinese Sausage (lap cheong), sliced', amount: '2 links' },
            { item: 'Cockles (hum), shelled (optional)', amount: '100g' },
            { item: 'Bean Sprouts', amount: '100g' },
            { item: 'Chives (kuchai), cut', amount: '50g' },
            { item: 'Eggs', amount: '2' },
            { item: 'Garlic, minced', amount: '3 cloves' },
            { item: 'Sauce Mixture (Dark Soy, Light Soy, Sugar, Fish Sauce, White Pepper)', amount: '4 tbsp' },
            { item: 'Lard (or vegetable oil)', amount: '2 tbsp' }
        ],
        instructions: [
            'Heat lard in a wok until smoking. Sauté garlic, then add prawns and Chinese sausage, stir-frying until fragrant.',
            'Push ingredients to one side, crack in eggs and scramble briefly. Add noodles and cockles, tossing well.',
            'Pour in the sauce mixture and chili paste (if using). Stir-fry vigorously to coat everything.',
            'Add bean sprouts and chives, continuing to stir-fry for another minute until vegetables are just cooked and noodles have a smoky \'wok hei\'.',
            'Serve immediately, garnished with fresh chili slices if desired.'
        ],
        tags: ['Singaporean', 'Dinner', 'Non-Vegetarian'],
        translations: {
            hi: {
                title: 'चार क्वाय टियो',
                description: 'सिंगापुर के प्रिय स्टिर-फ्राइड नूडल डिश, चार क्वाय टियो के धुएँदार, स्वादिष्ट सिम्फनी का अनुभव करें। फ्लैट चावल के नूडल्स को रसीले झींगे, चीनी सॉसेज और कॉकल्स के साथ वोक में उछाला जाता है, सभी एक समृद्ध, गहरे सोया सॉस में लिपटे होते हैं। तीव्र \'वोक हेई\' स्वाद आपकी स्वाद कलिकाओं को सीधे हॉकर स्टालों तक ले जाएगा। आज ही अपनी रसोई में इस प्रतिष्ठित स्ट्रीट फूड में महारत हासिल करने के लिए तैयार हैं?',
                ingredients: [{ item: 'ताज़े फ्लैट चावल के नूडल्स (क्वाय टियो)', amount: '500 ग्राम' }, { item: 'झींगे (छिले हुए, डीवेन किए हुए)', amount: '200 ग्राम' }, { item: 'चीनी सॉसेज (लैप चेओंग), कटा हुआ', amount: '2 लिंक' }, { item: 'कॉकल्स (हम), छिले हुए (वैकल्पिक)', amount: '100 ग्राम' }, { item: 'अंकुरित दालें', amount: '100 ग्राम' }, { item: 'चाइव्स (कुचाई), कटे हुए', amount: '50 ग्राम' }, { item: 'अंडे', amount: '2' }, { item: 'लहसुन, बारीक कटा हुआ', amount: '3 कलियाँ' }, { item: 'सॉस मिश्रण (डार्क सोया, लाइट सोया, चीनी, फिश सॉस, सफेद मिर्च)', amount: '4 बड़े चम्मच' }, { item: 'लार्ड (या वनस्पति तेल)', amount: '2 बड़े चम्मच' }],
                instructions: ['एक कड़ाही में लार्ड को धुआँ निकलने तक गरम करें। लहसुन भूनें, फिर झींगे और चीनी सॉसेज डालकर सुगंधित होने तक भूनें।', 'सामग्री को एक तरफ धकेलें, अंडे फोड़ें और संक्षेप में स्क्रैम्बल करें। नूडल्स और कॉकल्स डालें, अच्छी तरह टॉस करें।', 'सॉस मिश्रण और मिर्च का पेस्ट (यदि उपयोग कर रहे हैं) डालें। सब कुछ कोट करने के लिए जोर से स्टिर-फ्राई करें।', 'अंकुरित दालें और चाइव्स डालें, सब्जियों के पकने और नूडल्स में धुएँदार \'वोक हेई\' आने तक एक और मिनट के लिए स्टिर-फ्राई करते रहें।', 'तुरंत परोसें, यदि चाहें तो ताज़ी मिर्च के स्लाइस से गार्निश करें।']
            },
            bn: {
                title: 'চার কোয়ে টিও',
                description: 'সিঙ্গাপুরের প্রিয় স্ট্রিট ফুড, চার কোয়ে টিও-এর ধোঁয়াটে, সুস্বাদু সিম্ফনির অভিজ্ঞতা নিন। ফ্ল্যাট রাইস নুডুলস রসালো চিংড়ি, চাইনিজ সসেজ এবং ককলস দিয়ে ওওকে টস করা হয়, যা একটি সমৃদ্ধ, গাঢ় সয়া সসে আবৃত। তীব্র \'ওওক হেই\' স্বাদ আপনার স্বাদগ্রন্থিকে সরাসরি হকার স্টলে নিয়ে যাবে। আজই আপনার রান্নাঘরে এই আইকনিক স্ট্রিট ফুড আয়ত্ত করতে প্রস্তুত?',
                ingredients: [{ item: 'তাজা ফ্ল্যাট রাইস নুডুলস (কোয়ে টিও)', amount: '500 গ্রাম' }, { item: 'চিংড়ি (খোসা ছাড়ানো, শিরাবিহীন)', amount: '200 গ্রাম' }, { item: 'চাইনিজ সসেজ (ল্যাপ চেওং), টুকরো করা', amount: '2 লিঙ্ক' }, { item: 'ককলস (হাম), খোসা ছাড়ানো (ঐচ্ছিক)', amount: '100 গ্রাম' }, { item: 'বিন স্প্রাউটস', amount: '100 গ্রাম' }, { item: 'চাইভস (কুচাই), কাটা', amount: '50 গ্রাম' }, { item: 'ডিম', amount: '2টি' }, { item: 'রসুন, কুচি করা', amount: '3 কোয়া' }, { item: 'সস মিশ্রণ (ডার্ক সয়া, লাইট সয়া, চিনি, ফিশ সস, সাদা গোলমরিচ)', amount: '4 টেবিল চামচ' }, { item: 'লার্ড (বা উদ্ভিজ্জ তেল)', amount: '2 টেবিল চামচ' }],
                instructions: ['একটি কড়াইতে লার্ড গরম করুন যতক্ষণ না ধোঁয়া বের হয়। রসুন ভাজুন, তারপর চিংড়ি এবং চাইনিজ সসেজ যোগ করুন, সুগন্ধি না হওয়া পর্যন্ত ভাজুন।', 'উপাদানগুলি একপাশে সরিয়ে দিন, ডিম ভেঙে দিন এবং সংক্ষেপে স্ক্র্যাম্বল করুন। নুডুলস এবং ককলস যোগ করুন, ভালভাবে টস করুন।', 'সস মিশ্রণ এবং চিলি পেস্ট (যদি ব্যবহার করেন) ঢেলে দিন। সবকিছু ভালোভাবে মিশে যাওয়া পর্যন্ত দ্রুত ভাজুন।', 'বিন স্প্রাউটস এবং চাইভস যোগ করুন, সবজি রান্না হওয়া পর্যন্ত এবং নুডুলসে ধোঁয়াটে \'ওওক হেই\' আসা পর্যন্ত আরও এক মিনিট ভাজতে থাকুন।', 'অবিলম্বে পরিবেশন করুন, যদি ইচ্ছা হয় তাজা কাঁচা লঙ্কার টুকরো দিয়ে সাজান।']
            },
            mr: {
                title: 'चार क्वाय टियो',
                description: 'सिंगापूरच्या प्रिय स्टिर-फ्राइड नूडल डिश, चार क्वाय टियोच्या धुरकट, चवदार सिम्फनीचा अनुभव घ्या. सपाट तांदळाचे नूडल्स रसाळ कोळंबी, चायनीज सॉसेज आणि कॉकल्ससह वोकमध्ये टॉस केले जातात, सर्व एका समृद्ध, गडद सोया सॉसमध्ये लेपलेले असतात. तीव्र \'वोक हेई\' चव तुमच्या चवीच्या कळ्या थेट हॉकर स्टॉल्सपर्यंत पोहोचवेल. आजच तुमच्या स्वयंपाकघरात या प्रतिष्ठित स्ट्रीट फूडमध्ये प्रभुत्व मिळवण्यासाठी तयार आहात?',
                ingredients: [{ item: 'ताजे सपाट तांदळाचे नूडल्स (क्वाय टियो)', amount: '500 ग्रॅम' }, { item: 'कोळंबी (सोललेली, डीव्हेन केलेली)', amount: '200 ग्रॅम' }, { item: 'चायनीज सॉसेज (लॅप चेओंग), कापलेले', amount: '2 लिंक' }, { item: 'कॉकल्स (हम), सोललेले (ऐच्छिक)', amount: '100 ग्रॅम' }, { item: 'मोड आलेले कडधान्य', amount: '100 ग्रॅम' }, { item: 'चाइव्स (कुचाई), कापलेले', amount: '50 ग्रॅम' }, { item: 'अंडी', amount: '2' }, { item: 'लसूण, बारीक चिरलेला', amount: '3 पाकळ्या' }, { item: 'सॉस मिश्रण (डार्क सोया, लाईट सोया, साखर, फिश सॉस, पांढरी मिरी)', amount: '4 चमचे' }, { item: 'लार्ड (किंवा वनस्पती तेल)', amount: '2 चमचे' }],
                instructions: ['एका कढईत लार्ड धूर येईपर्यंत गरम करा. लसूण परतून घ्या, नंतर कोळंबी आणि चायनीज सॉसेज घालून सुगंध येईपर्यंत परता.', 'साहित्य एका बाजूला सरकवा, अंडी फोडून थोडक्यात स्क्रॅम्बल करा. नूडल्स आणि कॉकल्स घालून चांगले टॉस करा.', 'सॉस मिश्रण आणि मिरची पेस्ट (वापरत असल्यास) घाला. सर्वकाही कोट करण्यासाठी जोरदारपणे स्टिर-फ्राय करा.', 'मोड आलेले कडधान्य आणि चाइव्स घाला, भाज्या शिजल्याशिवाय आणि नूडल्सला धुरकट \'वोक हेई\' येईपर्यंत आणखी एक मिनिट स्टिर-फ्राय करत रहा.', 'लगेच सर्व्ह करा, इच्छित असल्यास ताज्या मिरचीच्या तुकड्यांनी सजवा.']
            },
            te: {
                title: 'చార్ క్వే టియో',
                description: 'సింగపూర్ యొక్క ప్రియమైన స్టిర్-ఫ్రైడ్ నూడిల్ డిష్, చార్ క్వే టియో యొక్క పొగతో కూడిన, రుచికరమైన సింఫనీని అనుభవించండి. ఫ్లాట్ రైస్ నూడుల్స్ రసవంతమైన రొయ్యలు, చైనీస్ సాసేజ్ మరియు కాకిల్స్‌తో వోక్‌లో టాస్ చేయబడతాయి, అన్నీ గొప్ప, ముదురు సోయా సాస్‌లో పూత పూయబడతాయి. తీవ్రమైన \'వోక్ హేయ్\' రుచి మీ రుచి మొగ్గలను నేరుగా హాకర్ స్టాల్స్‌కు తీసుకువెళుతుంది. ఈ ఐకానిక్ స్ట్రీట్ ఫుడ్‌ను ఈరోజే మీ వంటగదిలో నేర్చుకోవడానికి సిద్ధంగా ఉన్నారా?',
                ingredients: [{ item: 'తాజా ఫ్లాట్ రైస్ నూడుల్స్ (క్వే టియో)', amount: '500 గ్రా' }, { item: 'రొయ్యలు (పొట్టు తీసి, డీవీన్ చేసినవి)', amount: '200 గ్రా' }, { item: 'చైనీస్ సాసేజ్ (లాప్ చెయోంగ్), ముక్కలు చేసినవి', amount: '2 లింకులు' }, { item: 'కాకిల్స్ (హమ్', amount: 'undefined' }],
                instructions: []
            },
            ta: {
                title: '',
                description: '',
                ingredients: [],
                instructions: []
            }
        }
    }
,
    {
        id: '2026-05-09',
        title: 'Croquetas',
        description: 'Experience the ultimate Spanish comfort food! These golden, crispy croquettes, with their creamy, savory béchamel filling, are an irresistible bite of pure culinary bliss. Prepare to fall in love with every single melt-in-your-mouth morsel – you simply must make them today!',
        image: 'https://www.themealdb.com/images/media/meals/6dpa7m1763331105.jpg/preview',
        prepTime: '20 min',
        cookTime: '40 min',
        difficulty: 'Medium',
        servings: 4,
        ingredients: [
            { item: 'Unsalted butter', amount: '50g' },
            { item: 'All-purpose flour', amount: '50g' },
            { item: 'Whole milk, warm', amount: '500ml' },
            { item: 'Jamón Serrano (or cooked ham), finely diced', amount: '100g' },
            { item: 'Nutmeg', amount: 'Pinch' },
            { item: 'Salt', amount: 'To taste' },
            { item: 'Black pepper', amount: 'To taste' },
            { item: 'Eggs, beaten', amount: '2' },
            { item: 'Breadcrumbs', amount: '150g' },
            { item: 'Vegetable oil', amount: 'For deep frying' }
        ],
        instructions: [
            'Melt butter, add flour to make a roux. Gradually whisk in warm milk until a thick béchamel forms.',
            'Stir in diced jamón, nutmeg, salt, and pepper. Cook for 5 minutes, then spread to cool completely.',
            'Shape cooled mixture into small cylinders or ovals. Dip each croqueta in beaten egg, then roll in breadcrumbs.',
            'Heat oil to 170°C (340°F). Fry croquetas in batches until golden brown and crispy.',
            'Drain on paper towels and serve hot.'
        ],
        tags: ['Spanish', 'Appetizer', 'Non-Vegetarian'],
        translations: {
            hi: {
                title: 'क्रोकेटास',
                description: 'स्पेनिश कम्फर्ट फूड का बेहतरीन अनुभव करें! ये सुनहरे, कुरकुरे क्रोकेटास, अपनी मलाईदार, स्वादिष्ट बेचेमेल फिलिंग के साथ, शुद्ध पाक आनंद का एक अनूठा टुकड़ा हैं। हर पिघलने वाले निवाले के साथ प्यार में पड़ने के लिए तैयार हो जाइए - आपको इन्हें आज ही बनाना चाहिए!',
                ingredients: [{ item: 'बिना नमक का मक्खन', amount: '50 ग्राम' }, { item: 'मैदा', amount: '50 ग्राम' }, { item: 'साबुत दूध, गर्म', amount: '500 मिलीलीटर' }, { item: 'जामोन सेरानो (या पका हुआ हैम), बारीक कटा हुआ', amount: '100 ग्राम' }, { item: 'जायफल', amount: 'एक चुटकी' }, { item: 'नमक', amount: 'स्वादानुसार' }, { item: 'काली मिर्च', amount: 'स्वादानुसार' }, { item: 'अंडे, फेंटे हुए', amount: '2' }, { item: 'ब्रेडक्रम्ब्स', amount: '150 ग्राम' }, { item: 'वनस्पति तेल', amount: 'तलने के लिए' }],
                instructions: ['मक्खन पिघलाएं, मैदा डालकर रऊ बनाएं। धीरे-धीरे गर्म दूध डालकर गाढ़ा बेचेमेल बनने तक फेंटें।', 'कटा हुआ जामोन, जायफल, नमक और काली मिर्च मिलाएं। 5 मिनट पकाएं, फिर ठंडा होने के लिए फैला दें।', 'ठंडे मिश्रण को छोटे बेलनाकार या अंडाकार आकार दें। प्रत्येक क्रोकेटा को फेंटे हुए अंडे में डुबोएं, फिर ब्रेडक्रम्ब्स में लपेटें।', 'तेल को 170°C (340°F) पर गरम करें। क्रोकेटास को सुनहरा भूरा और कुरकुरा होने तक बैचों में तलें।', 'कागज़ के तौलिये पर निकाल कर गरमागरम परोसें।']
            },
            bn: {
                title: 'ক্রোকেতাস',
                description: 'স্প্যানিশ কমফোর্ট ফুডের চূড়ান্ত অভিজ্ঞতা নিন! এই সোনালী, মুচমুচে ক্রোকেতাস, তাদের ক্রিমি, সুস্বাদু বেচামেল ফিলিং সহ, বিশুদ্ধ রন্ধনশিল্পের আনন্দের এক অনবদ্য কামড়। প্রতিটি মুখে গলে যাওয়া টুকরোর সাথে প্রেমে পড়তে প্রস্তুত হন – আপনাকে আজই এটি তৈরি করতে হবে!',
                ingredients: [{ item: 'লবণবিহীন মাখন', amount: '50 গ্রাম' }, { item: 'ময়দা', amount: '50 গ্রাম' }, { item: 'পুরো দুধ, উষ্ণ', amount: '500 মিলি' }, { item: 'জামোন সেরানো (বা রান্না করা হ্যাম), মিহি করে কাটা', amount: '100 গ্রাম' }, { item: 'জায়ফল', amount: 'এক চিমটি' }, { item: 'লবণ', amount: 'স্বাদমতো' }, { item: 'কালো গোলমরিচ', amount: 'স্বাদমতো' }, { item: 'ডিম, ফেটানো', amount: '2টি' }, { item: 'ব্রেডক্রাম্বস', amount: '150 গ্রাম' }, { item: 'উদ্ভিজ্জ তেল', amount: 'গভীর ভাজার জন্য' }],
                instructions: ['মাখন গলিয়ে ময়দা যোগ করে রু তৈরি করুন। ধীরে ধীরে উষ্ণ দুধ মিশিয়ে ঘন বেচামেল তৈরি করুন।', 'কাটা জামোন, জায়ফল, লবণ এবং গোলমরিচ মেশান। 5 মিনিট রান্না করে সম্পূর্ণ ঠান্ডা হতে দিন।', 'ঠান্ডা মিশ্রণকে ছোট সিলিন্ডার বা ডিম্বাকৃতি আকার দিন। প্রতিটি ক্রোকেটা ফেটানো ডিমে ডুবিয়ে ব্রেডক্রাম্বসে রোল করুন।', 'তেল 170°C (340°F) এ গরম করুন। ক্রোকেটাগুলো সোনালী বাদামী ও মুচমুচে হওয়া পর্যন্ত ব্যাচে ভাজুন।', 'কাগজের তোয়ালেতে তেল ঝরিয়ে গরম গরম পরিবেশন করুন।']
            },
            mr: {
                title: 'क्रोकेटास',
                description: 'स्पॅनिश कम्फर्ट फूडचा अंतिम अनुभव घ्या! हे सोनेरी, कुरकुरीत क्रोकेटास, त्यांच्या मलईदार, चवदार बेचेमेल फिलिंगसह, शुद्ध पाककृती आनंदाचा एक अप्रतिम घास आहेत. प्रत्येक तोंडात विरघळणाऱ्या घासाच्या प्रेमात पडायला तयार व्हा – तुम्हाला ते आजच बनवायला हवे!',
                ingredients: [{ item: 'मीठ नसलेले लोणी', amount: '50 ग्रॅम' }, { item: 'मैदा', amount: '50 ग्रॅम' }, { item: 'पूर्ण दूध, कोमट', amount: '500 मिली' }, { item: 'जामोन सेरानो (किंवा शिजवलेले हॅम), बारीक चिरलेले', amount: '100 ग्रॅम' }, { item: 'जायफळ', amount: 'चिमूटभर' }, { item: 'मीठ', amount: 'चवीनुसार' }, { item: 'काळी मिरी', amount: 'चवीनुसार' }, { item: 'अंडी, फेटलेली', amount: '2' }, { item: 'ब्रेडक्रंब्स', amount: '150 ग्रॅम' }, { item: 'वनस्पती तेल', amount: 'तळण्यासाठी' }],
                instructions: ['लोणी वितळवा, मैदा घालून रौ बनवा. हळूहळू कोमट दूध घालून घट्ट बेचेमेल तयार होईपर्यंत फेटा.', 'चिरलेले जामोन, जायफळ, मीठ आणि मिरी घाला. 5 मिनिटे शिजवा, नंतर पूर्णपणे थंड होण्यासाठी पसरवा.', 'थंड झालेल्या मिश्रणाला लहान दंडगोलाकार किंवा अंडाकृती आकार द्या. प्रत्येक क्रोकेटाला फेटलेल्या अंड्यात बुडवा, नंतर ब्रेडक्रंब्समध्ये घोळवा.', 'तेल 170°C (340°F) पर्यंत गरम करा. क्रोकेटास सोनेरी तपकिरी आणि कुरकुरीत होईपर्यंत तुकड्यांमध्ये तळा.', 'पेपर टॉवेलवर काढून गरम सर्व्ह करा.']
            },
            te: {
                title: 'క్రోకెటాస్',
                description: 'స్పానిష్ కంఫర్ట్ ఫుడ్ యొక్క అంతిమ అనుభవాన్ని పొందండి! ఈ బంగారు, క్రిస్పీ క్రోకెటాస్, వాటి క్రీమీ, రుచికరమైన బెచామెల్ ఫిల్లింగ్‌తో, స్వచ్ఛమైన పాక ఆనందం యొక్క అద్భుతమైన కాటు. ప్రతి నోటిలో కరిగిపోయే ముక్కతో ప్రేమలో పడటానికి సిద్ధంగా ఉండండి – మీరు వాటిని ఈరోజే తయారు చేయాలి!',
                ingredients: [{ item: 'ఉప్పు లేని వెన్న', amount: '50 గ్రా' }, { item: 'మైదా పిండి', amount: '50 గ్రా' }, { item: 'పాలు, వెచ్చని', amount: '500 మి.లీ' }, { item: 'జామోన్ సెరానో (లేదా వండిన హామ్), సన్నగా తరిగిన', amount: '100 గ్రా' }, { item: 'జాజికాయ', amount: 'చిటికెడు' }, { item: 'ఉప్పు', amount: 'రుచికి' }, { item: 'నల్ల మిరియాలు', amount: 'రుచికి' }, { item: 'గుడ్లు, కొట్టినవి', amount: '2' }, { item: 'బ్రెడ్‌క్రమ్స్', amount: '150 గ్రా' }, { item: 'కూరగాయల నూనె', amount: 'డీప్ ఫ్రై చేయడానికి' }],
                instructions: ['వెన్న కరిగించి, మైదా వేసి రౌక్స్ చేయండి. వెచ్చని పాలు నెమ్మదిగా కలుపుతూ చిక్కటి బెచామెల్ అయ్యే వరకు కలపండి.', 'తరిగిన జామోన్, జాజికాయ, ఉప్పు, మిరియాలు కలపండి. 5 నిమిషాలు ఉడికించి, పూర్తిగా చల్లబరచడానికి విస్తరించండి.', 'చల్లబడిన మిశ్రమాన్ని చిన్న సిలిండర్లు లేదా ఓవల్ ఆకారంలో చేయండి. ప్రతి క్రోకెటాను కొట్టిన గుడ్డులో ముంచి, బ్రెడ్‌క్రమ్స్‌లో రోల్ చేయండి.', 'నూనెను 170°C (340°F) వరకు వేడి చేయండి. క్రోకెటాలను బంగారు గోధుమ రంగులోకి మారి క్రిస్పీగా అయ్యే వరకు బ్యాచ్‌లలో వేయించండి.', 'పేపర్ టవల్స్‌పై తీసి వేడిగా సర్వ్ చేయండి.']
            },
            ta: {
                title: 'க்ரோக்கெட்டாஸ்',
                description: 'ஸ்பானிஷ் கம்ஃபர்ட் ஃபுட்டின் இறுதி அனுபவத்தைப் பெறுங்கள்! இந்த தங்க நிற, மொறுமொறுப்பான க்ரோக்கெட்டாஸ், அவற்றின் கிரீமி, சுவையான பெச்சாமெல் ஃபில்லிங்குடன், தூய சமையல் இன்பத்தின் ஒரு தவிர்க்க முடியாத கடி. ஒவ்வொரு வாயில் உருகும் கடியுடனும் காதலில் விழ தயாராகுங்கள் – நீங்கள் இதை இன்றே செய்ய வேண்டும்!',
                ingredients: [{ item: 'உப்பில்லாத வெண்ணெய்', amount: '50 கிராம்' }, { item: 'மைதா மாவு', amount: '50 கிராம்' }, { item: 'முழு பால், சூடான', amount: '500 மில்லி' }, { item: 'ஜாமோன் செரானோ (அல்லது சமைத்த ஹாம்), மெல்லியதாக நறுக்கியது', amount: '100 கிராம்' }, { item: 'ஜாதிக்காய்', amount: 'ஒரு சிட்டிகை' }, { item: 'உப்பு', amount: 'சுவைக்கு' }, { item: 'கருப்பு மிளகு', amount: 'சுவைக்கு' }, { item: 'முட்டைகள், அடித்தது', amount: '2' }, { item: 'பிரட் க்ரம்ப்ஸ்', amount: '150 கிராம்' }, { item: 'தாவர எண்ணெய்', amount: 'ஆழமாக வறுக்க' }],
                instructions: ['வெண்ணெயை உருக்கி, மாவை சேர்த்து ரௌக்ஸ் செய்யவும். சூடான பாலை மெதுவாக சேர்த்து, கெட்டியான பெச்சாமெல் உருவாகும் வரை கிளறவும்.', 'நறுக்கிய ஜாமோன், ஜாதிக்காய், உப்பு மற்றும் மிளகு சேர்க்கவும். 5 நிமிடங்கள் சமைத்து, பின்னர் முழுமையாக குளிர்விக்க பரப்பவும்.', 'குளிர்ந்த கலவையை சிறிய உருளைகள் அல்லது ஓவல் வடிவங்களாக உருவாக்கவும். ஒவ்வொரு க்ரோக்கெட்டாவையும் அடித்த முட்டையில் தோய்த்து, பின்னர் பிரட் க்ரம்ப்ஸில் உருட்டவும்.', 'எண்ணெயை 170°C (340°F) வரை சூடாக்கவும். க்ரோக்கெட்டாக்களை பொன்னிறமாக மற்றும் மொறுமொறுப்பாக மாறும் வரை தொகுதிகளாக வறுக்கவும்.', 'காகித துண்டுகளில் வடிகட்டி சூடாக பரிமாறவும்.']
            }
        }
    }
,
    {
        id: '2026-05-10',
        title: 'Avgolemono Soup',
        description: 'Experience the comforting embrace of Greece with Avgolemono Soup! This velvety, lemon-infused chicken and rice soup is a symphony of bright, tangy flavors and creamy texture, guaranteed to warm your soul. Prepare to be transported to the Mediterranean with every spoonful – you simply must try this classic today!',
        image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&q=75&w=800',
        prepTime: '20 min',
        cookTime: '40 min',
        difficulty: 'Medium',
        servings: 4,
        ingredients: [
            { item: 'Chicken broth', amount: '6 cups' },
            { item: 'Arborio rice', amount: '1/2 cup' },
            { item: 'Cooked shredded chicken', amount: '1 cup' },
            { item: 'Large eggs', amount: '3' },
            { item: 'Fresh lemon juice', amount: '1/4 cup' },
            { item: 'Salt', amount: 'To taste' },
            { item: 'Freshly ground black pepper', amount: 'To taste' },
            { item: 'Fresh dill (chopped)', amount: '2 tbsp' }
        ],
        instructions: [
            'Bring chicken broth to a boil in a large pot. Add rice, reduce heat, and simmer until tender, about 15-20 minutes.',
            'Stir in the cooked shredded chicken and heat through. Season with salt and pepper.',
            'In a separate bowl, whisk eggs until frothy. Gradually whisk in lemon juice.',
            'Slowly temper the egg-lemon mixture: Ladle about 1 cup of hot broth into the egg mixture, whisking constantly.',
            'Pour the tempered egg mixture back into the pot, stirring gently. Heat through without boiling until slightly thickened. Garnish with fresh dill.'
        ],
        tags: ['Greek', 'Dinner', 'Non-Vegetarian'],
        translations: {
            hi: {
                title: 'अवगोलेमोनो सूप',
                description: 'अवगोलेमोनो सूप के साथ ग्रीस के आरामदायक आलिंगन का अनुभव करें! यह मखमली, नींबू-युक्त चिकन और चावल का सूप चमकीले, तीखे स्वादों और मलाईदार बनावट की एक सिम्फनी है, जो आपकी आत्मा को गर्म करने की गारंटी देता है। हर चम्मच के साथ भूमध्य सागर में ले जाने के लिए तैयार हो जाइए - आपको आज ही इस क्लासिक को आज़माना चाहिए!',
                ingredients: [{ item: 'चिकन शोरबा', amount: '6 कप' }, { item: 'अरबोरियो चावल', amount: '1/2 कप' }, { item: 'पका हुआ कटा हुआ चिकन', amount: '1 कप' }, { item: 'बड़े अंडे', amount: '3' }, { item: 'ताजा नींबू का रस', amount: '1/4 कप' }, { item: 'नमक', amount: 'स्वादानुसार' }, { item: 'ताज़ी पिसी हुई काली मिर्च', amount: 'स्वादानुसार' }, { item: 'ताजा डिल (कटा हुआ)', amount: '2 बड़े चम्मच' }],
                instructions: ['एक बड़े बर्तन में चिकन शोरबा उबाल लें। चावल डालें, आंच कम करें और नरम होने तक, लगभग 15-20 मिनट तक उबालें।', 'पका हुआ कटा हुआ चिकन डालें और गरम करें। नमक और काली मिर्च से सीज़न करें।', 'एक अलग कटोरे में, अंडे को झागदार होने तक फेंटें। धीरे-धीरे नींबू का रस फेंटें।', 'अंडे-नींबू के मिश्रण को धीरे-धीरे मिलाएं: अंडे के मिश्रण में लगभग 1 कप गर्म शोरबा डालें, लगातार फेंटते रहें।', 'तैयार अंडे के मिश्रण को वापस बर्तन में डालें, धीरे से हिलाएं। बिना उबाले थोड़ा गाढ़ा होने तक गरम करें। ताजे डिल से गार्निश करें।']
            },
            bn: {
                title: 'অ্যাভগলেমনো স্যুপ',
                description: 'অ্যাভগলেমনো স্যুপের সাথে গ্রীসের আরামদায়ক আলিঙ্গন অনুভব করুন! এই মখমলের মতো, লেবু-মিশ্রিত চিকেন এবং চালের স্যুপ উজ্জ্বল, টক স্বাদ এবং ক্রিমি টেক্সচারের একটি সিম্ফনি, যা আপনার আত্মাকে উষ্ণ করার গ্যারান্টি দেয়। প্রতিটি চামচ দিয়ে ভূমধ্যসাগরে স্থানান্তরিত হওয়ার জন্য প্রস্তুত হন – আজই এই ক্লাসিকটি চেষ্টা করা আপনার জন্য আবশ্যক!',
                ingredients: [{ item: 'চিকেন ব্রোথ', amount: '6 কাপ' }, { item: 'আরবোরিও চাল', amount: '1/2 কাপ' }, { item: 'রান্না করা কাটা মুরগি', amount: '1 কাপ' }, { item: 'বড় ডিম', amount: '3টি' }, { item: 'তাজা লেবুর রস', amount: '1/4 কাপ' }, { item: 'লবণ', amount: 'স্বাদমতো' }, { item: 'তাজা গোলমরিচ গুঁড়ো', amount: 'স্বাদমতো' }, { item: 'তাজা ডিল (কাটা)', amount: '2 টেবিল চামচ' }],
                instructions: ['একটি বড় পাত্রে চিকেন ব্রোথ ফুটিয়ে নিন। চাল যোগ করুন, আঁচ কমিয়ে দিন এবং নরম হওয়া পর্যন্ত, প্রায় 15-20 মিনিট ধরে সিদ্ধ করুন।', 'রান্না করা কাটা মুরগি মিশিয়ে গরম করুন। লবণ এবং গোলমরিচ দিয়ে সিজন করুন।', 'একটি আলাদা বাটিতে, ডিম ফেটিয়ে ফেনা তৈরি করুন। ধীরে ধীরে লেবুর রস ফেটিয়ে নিন।', 'ডিম-লেবুর মিশ্রণটি ধীরে ধীরে গরম করুন: ডিমের মিশ্রণে প্রায় 1 কাপ গরম ব্রোথ ঢেলে দিন, ক্রমাগত ফেটাতে থাকুন।', 'তৈরি ডিমের মিশ্রণটি আবার পাত্রে ঢেলে দিন, আলতো করে নাড়ুন। সামান্য ঘন হওয়া পর্যন্ত না ফুটিয়ে গরম করুন। তাজা ডিল দিয়ে সাজান।']
            },
            mr: {
                title: 'अवगोलेमोनो सूप',
                description: 'अवगोलेमोनो सूपसह ग्रीसच्या आरामदायक आलिंगनाचा अनुभव घ्या! हे मखमली, लिंबू-युक्त चिकन आणि तांदळाचे सूप चमकदार, आंबट चवी आणि मलईदार पोत यांची एक सिम्फनी आहे, जे तुमच्या आत्म्याला उबदार करण्याची हमी देते. प्रत्येक चमच्याने भूमध्य समुद्रात पोहोचण्यासाठी तयार रहा – तुम्हाला आजच हे क्लासिक करून पहावे लागेल!',
                ingredients: [{ item: 'चिकन शोरबा', amount: '6 कप' }, { item: 'आर्बोरिओ तांदूळ', amount: '1/2 कप' }, { item: 'शिजवलेले किसलेले चिकन', amount: '1 कप' }, { item: 'मोठी अंडी', amount: '3' }, { item: 'ताजा लिंबाचा रस', amount: '1/4 कप' }, { item: 'मीठ', amount: 'चवीनुसार' }, { item: 'ताजी दळलेली काळी मिरी', amount: 'चवीनुसार' }, { item: 'ताजे डिल (चिरलेले)', amount: '2 चमचे' }],
                instructions: ['एका मोठ्या भांड्यात चिकन शोरबा उकळा. तांदूळ घाला, आंच कमी करा आणि मऊ होईपर्यंत, सुमारे 15-20 मिनिटे शिजवा.', 'शिजवलेले किसलेले चिकन घालून गरम करा. मीठ आणि मिरीने सीझन करा.', 'एका वेगळ्या भांड्यात, अंडी फेस येईपर्यंत फेटा. हळूहळू लिंबाचा रस फेटा.', 'अंडी-लिंबाचे मिश्रण हळू हळू गरम करा: अंड्याच्या मिश्रणात सुमारे 1 कप गरम शोरबा घाला, सतत फेटत रहा.', 'गरम केलेले अंड्याचे मिश्रण परत भांड्यात घाला, हळूवारपणे ढवळत रहा. उकळू न देता थोडे घट्ट होईपर्यंत गरम करा. ताजे डिलने सजवा.']
            },
            te: {
                title: 'అవ్గోలెమోనో సూప్',
                description: 'అవ్గోలెమోనో సూప్‌తో గ్రీస్ యొక్క హాయిని అనుభవించండి! ఈ వెల్వెట్, నిమ్మకాయ రుచిగల చికెన్ మరియు అన్నం సూప్ ప్రకాశవంతమైన, పుల్లని రుచులు మరియు క్రీమీ ఆకృతి యొక్క సింఫొనీ, ఇది మీ ఆత్మను వెచ్చగా ఉంచుతుంది. ప్రతి స్పూన్‌తో మధ్యధరా ప్రాంతానికి రవాణా చేయబడటానికి సిద్ధంగా ఉండండి – మీరు ఈ క్లాసిక్‌ను ఈరోజే ప్రయత్నించాలి!',
                ingredients: [{ item: 'చికెన్ బ్రోత్', amount: '6 కప్పులు' }, { item: 'అర్బోరియో బియ్యం', amount: '1/2 కప్పు' }, { item: 'వండిన తురిమిన చికెన్', amount: '1 కప్పు' }, { item: 'పెద్ద గుడ్లు', amount: '3' }, { item: 'తాజా నిమ్మరసం', amount: '1/4 కప్పు' }, { item: 'ఉప్పు', amount: 'రుచికి' }, { item: 'తాజాగా నూరిన నల్ల మిరియాలు', amount: 'రుచికి' }, { item: 'తాజా డిల్ (తరిగిన)', amount: '2 టేబుల్ స్పూన్లు' }],
                instructions: ['ఒక పెద్ద కుండలో చికెన్ బ్రోత్‌ను మరిగించండి. బియ్యం వేసి, మంట తగ్గించి, మెత్తబడే వరకు, సుమారు 15-20 నిమిషాలు ఉడికించండి.', 'వండిన తురిమిన చికెన్‌ను కలిపి వేడి చేయండి. ఉప్పు మరియు మిరియాలతో రుచి చూడండి.', 'ఒక ప్రత్యేక గిన్నెలో, గుడ్లను నురుగు వచ్చేవరకు కొట్టండి. నిమ్మరసాన్ని నెమ్మదిగా కొట్టండి.', 'గుడ్డు-నిమ్మకాయ మిశ్రమాన్ని నెమ్మదిగా వేడి చేయండి: గుడ్డు మిశ్రమంలో సుమారు 1 కప్పు వేడి బ్రోత్‌ను వేసి, నిరంతరం కొట్టండి.', 'వేడి చేసిన గుడ్డు మిశ్రమాన్ని తిరిగి కుండలోకి పోసి, మెల్లగా కలపండి. కొద్దిగా చిక్కబడే వరకు మరిగించకుండా వేడి చేయండి. తాజా డిల్‌తో అలంకరించండి.']
            },
            ta: {
                title: 'அவ்கோலெமோனோ சூப்',
                description: 'அவ்கோலெமோனோ சூப்புடன் கிரேக்கத்தின் இதமான அரவணைப்பை அனுபவியுங்கள்! இந்த வெல்வெட், எலுமிச்சை கலந்த சிக்கன் மற்றும் அரிசி சூப் பிரகாசமான, புளிப்பு சுவைகள் மற்றும் கிரீமி அமைப்பின் ஒரு சிம்பொனி ஆகும், இது உங்கள் ஆன்மாவை சூடேற்றும். ஒவ்வொரு கரண்டியிலும் மத்தியதரைக் கடலுக்கு அழைத்துச் செல்லத் தயாராகுங்கள் – இந்த கிளாசிக் உணவை நீங்கள் இன்றே முயற்சிக்க வேண்டும்!',
                ingredients: [{ item: 'சிக்கன் குழம்பு', amount: '6 கப்' }, { item: 'அர்போரியோ அரிசி', amount: '1/2 கப்' }, { item: 'சமைத்த துண்டாக்கப்பட்ட சிக்கன்', amount: '1 கப்' }, { item: 'பெரிய முட்டைகள்', amount: '3' }, { item: 'புதிய எலுமிச்சை சாறு', amount: '1/4 கப்' }, { item: 'உப்பு', amount: 'சுவைக்கு' }, { item: 'புதிதாக அரைத்த கருப்பு மிளகு', amount: 'சுவைக்கு' }, { item: 'புதிய டில் (நறுக்கியது)', amount: '2 தேக்கரண்டி' }],
                instructions: ['ஒரு பெரிய பாத்திரத்தில் சிக்கன் குழம்பை கொதிக்க விடவும். அரிசியைச் சேர்த்து, தீயைக் குறைத்து, மென்மையாகும் வரை, சுமார் 15-20 நிமிடங்கள் சமைக்கவும்.', 'சமைத்த துண்டாக்கப்பட்ட சிக்கனைச் சேர்த்து சூடாக்கவும். உப்பு மற்றும் மிளகு சேர்த்து சுவையூட்டவும்.', 'ஒரு தனி கிண்ணத்தில், முட்டைகளை நுரை வரும் வரை அடிக்கவும். மெதுவாக எலுமிச்சை சாற்றை அடிக்கவும்.', 'முட்டை-எலுமிச்சை கலவையை மெதுவாக சூடாக்கவும்: முட்டை கலவையில் சுமார் 1 கப் சூடான குழம்பை ஊற்றி, தொடர்ந்து அடித்துக் கொண்டே இருக்கவும்.', 'சூடாக்கப்பட்ட முட்டை கலவையை மீண்டும் பாத்திரத்தில் ஊற்றி, மெதுவாக கிளறவும். கொதிக்க விடாமல் சற்று கெட்டியாகும் வரை சூடாக்கவும். புதிய டில் கொண்டு அலங்கரிக்கவும்.']
            }
        }
    }
];
