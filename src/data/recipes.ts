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
];
