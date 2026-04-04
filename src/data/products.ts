export interface Product {
    id: string;
    name: string;
    description: string;
    price: number; // Base price (per kg for weight-based products, unit price otherwise)
    image: string;
    category: 'fresh' | 'dried' | 'snacks' | 'ready-to-cook' | 'spices' | 'grow' | 'gift' | 'merch';
    rating: number;
    // Weight/quantity options
    weightOptions?: number[]; // Available weights in grams [250, 500, 750, 1000]
    allowCustomWeight?: boolean; // Allow custom quantity input
    unit?: 'grams' | 'unit'; // Unit type
    stock?: number;
}


export const products: Product[] = [
    // 1. Fresh Mushrooms
    {
        id: 'fresh-1',
        name: 'Fresh Paddy Straw Mushrooms',
        description: 'Fresh, organic Paddy Straw mushrooms directly from our farm. Sweet, silky texture and distinct aroma.',
        price: 200, // <-- CHANGE PRICE HERE (e.g. 200 rupees)
        image: '/paddy-straw.jpg', // <-- CHANGE IMAGE HERE (Upload your real image directly to the "public" folder and write its name here, e.g., "/my-image.jpg")
        category: 'fresh',
        rating: 4.8,
        weightOptions: [300], // <-- CHANGE QUANTITY OPTIONS HERE (in grams. e.g. [200, 300, 500])
        allowCustomWeight: true,
        unit: 'grams',
    },
    {
        id: 'fresh-2',
        name: 'White Oyster Mushrooms',
        description: 'Delicate and velvety White Oyster mushrooms. Farm fresh and 100% organic.',
        price: 150, // <-- CHANGE PRICE HERE
        image: '/white-oyster.jpg', // <-- CHANGE IMAGE HERE (Upload your real image to the "public" folder)
        category: 'fresh',
        rating: 4.7,
        weightOptions: [250, 500], // <-- CHANGE QUANTITY OPTIONS HERE
        allowCustomWeight: true,
        unit: 'grams',
    },
    {
        id: 'fresh-3',
        name: 'Fresh Shiitake Mushrooms',
        description: 'Rich, savory, and meaty. Perfect for stir-fries and soups. Strong umami flavour with compounds that may support heart health and immune function. (These are general nutritional benefits; not intended as medical advice or treatment.)',
        price: 14.50,
        image: 'https://images.unsplash.com/photo-1623594073766-3b9e42220f44?auto=format&fit=crop&q=80&w=800',
        category: 'fresh',
        rating: 4.9,
        weightOptions: [250, 500, 750, 1000],
        allowCustomWeight: true,
        unit: 'grams',
    },
    {
        id: 'fresh-4',
        name: 'Fresh Enoki Mushrooms',
        description: 'Delicate, noodle-like stems with tiny caps. Mild flavor and crunchy texture. Light, crunchy, low calorie mushroom with fiber and antioxidants for everyday wellness. (These are general nutritional benefits; not intended as medical advice or treatment.)',
        price: 8.99,
        image: 'https://images.unsplash.com/photo-1603569283847-aa295f0d016a?auto=format&fit=crop&q=80&w=800',
        category: 'fresh',
        rating: 4.8,
        weightOptions: [250, 500, 750, 1000],
        allowCustomWeight: true,
        unit: 'grams',
    },
    {
        id: 'fresh-5',
        name: 'King Oyster Mushrooms',
        description: 'Thick, meaty stems and small caps. Excellent for grilling as a vegan scallop. Meaty texture, good veg protein and fiber option that can replace some meat in meals. (These are general nutritional benefits; not intended as medical advice or treatment.)',
        price: 15.50,
        image: 'https://images.unsplash.com/photo-1605218427368-35b0f996d716?auto=format&fit=crop&q=80&w=800',
        category: 'fresh',
        rating: 4.8,
        weightOptions: [250, 500, 750, 1000],
        allowCustomWeight: true,
        unit: 'grams',
    },
    {
        id: 'fresh-6',
        name: 'Fresh Milky Mushrooms',
        description: 'Large, white, and robust. Native to India, known for their long shelf life and meaty texture. Indian-friendly mushroom, offers veg protein, fiber and potassium for daily nutrition. (These are general nutritional benefits; not intended as medical advice or treatment.)',
        price: 13.99,
        image: 'https://images.unsplash.com/photo-1615214640325-16c39e6e5079?auto=format&fit=crop&q=80&w=800',
        category: 'fresh',
        rating: 4.7,
        weightOptions: [250, 500, 750, 1000],
        allowCustomWeight: true,
        unit: 'grams',
    },

    {
        id: 'fresh-8',
        name: 'Premium White Truffles',
        description: 'Rare and aromatic white truffles harvested from the forests of Alba. The diamond of the kitchen.',
        price: 129.99,
        image: 'https://images.unsplash.com/photo-1599923832810-63952f144eab?q=80&w=2070&auto=format&fit=crop',
        category: 'fresh',
        rating: 5.0,
        weightOptions: [25, 50, 75, 100], // Truffles in smaller quantities
        allowCustomWeight: true,
        unit: 'grams',
    },

    // 2. Dried Mushrooms
    {
        id: 'dried-1',
        name: 'Dried Button Mushrooms',
        description: 'Dehydrated button mushrooms. Great for adding texture to stews and gravies. Low calorie, rich in B-vitamins and antioxidants that support energy and immunity. (These are general nutritional benefits; not intended as medical advice or treatment.)',
        price: 9.99,
        image: 'https://images.unsplash.com/photo-1504382103100-db7e92322d39?auto=format&fit=crop&q=80&w=800',
        category: 'dried',
        rating: 4.5,
        weightOptions: [250, 500, 750, 1000],
        allowCustomWeight: true,
        unit: 'grams',
    },
    {
        id: 'dried-2',
        name: 'Dried Oyster Mushrooms',
        description: 'Dried oyster mushrooms retain their delicate flavor. Rehydrate for soups. Higher in protein and fiber, may help support heart health and healthy cholesterol levels. (These are general nutritional benefits; not intended as medical advice or treatment.)',
        price: 12.99,
        image: 'https://images.unsplash.com/photo-1552010099-5dc86fcfaa38?q=80&w=1964&auto=format&fit=crop',
        category: 'dried',
        rating: 4.7,
        weightOptions: [250, 500, 750, 1000],
        allowCustomWeight: true,
        unit: 'grams',
    },
    {
        id: 'dried-3',
        name: 'Dried Shiitake Whole',
        description: 'Rich, smoky, and packed with umami. Essential for Asian soups, stir-fries, and stocks. Strong umami flavour with compounds that may support heart health and immune function. (These are general nutritional benefits; not intended as medical advice or treatment.)',
        price: 14.99,
        image: 'https://images.unsplash.com/photo-1623594073766-3b9e42220f44?auto=format&fit=crop&q=80&w=800',
        category: 'dried',
        rating: 4.9,
        weightOptions: [250, 500, 750, 1000],
        allowCustomWeight: true,
        unit: 'grams',
    },
    {
        id: 'dried-4',
        name: 'Dried Enoki Mushrooms',
        description: 'Dried Enoki for a concentrated flavor boost in broths and hot pots. Light, crunchy, low calorie mushroom with fiber and antioxidants for everyday wellness. (These are general nutritional benefits; not intended as medical advice or treatment.)',
        price: 10.99,
        image: 'https://images.unsplash.com/photo-1603569283847-aa295f0d016a?auto=format&fit=crop&q=80&w=800',
        category: 'dried',
        rating: 4.8,
        weightOptions: [250, 500, 750, 1000],
        allowCustomWeight: true,
        unit: 'grams',
    },
    {
        id: 'dried-5',
        name: 'Dried King Oyster Slices',
        description: 'Thick slices of dried King Oyster. Chewy texture, perfect for vegan jerky. Meaty texture, good veg protein and fiber option that can replace some meat in meals. (These are general nutritional benefits; not intended as medical advice or treatment.)',
        price: 16.99,
        image: 'https://images.unsplash.com/photo-1605218427368-35b0f996d716?auto=format&fit=crop&q=80&w=800',
        category: 'dried',
        rating: 4.8,
        weightOptions: [250, 500, 750, 1000],
        allowCustomWeight: true,
        unit: 'grams',
    },
    {
        id: 'dried-6',
        name: 'Dried Milky Mushrooms',
        description: 'Dried Milky mushrooms. Rehydrate to enjoy their robust, meaty texture. Indian-friendly mushroom, offers veg protein, fiber and potassium for daily nutrition. (These are general nutritional benefits; not intended as medical advice or treatment.)',
        price: 15.99,
        image: 'https://images.unsplash.com/photo-1615214640325-16c39e6e5079?auto=format&fit=crop&q=80&w=800',
        category: 'dried',
        rating: 4.7,
        weightOptions: [250, 500, 750, 1000],
        allowCustomWeight: true,
        unit: 'grams',
    },
    {
        id: 'dried-7',
        name: 'Dried Paddy Straw Mushrooms',
        description: 'Dried Paddy Straw mushrooms. A pantry staple for Asian cooking. Easy-to-digest mushroom with protein, fiber and some vitamin C for balanced meals. (These are general nutritional benefits; not intended as medical advice or treatment.)',
        price: 13.99,
        image: 'https://images.unsplash.com/photo-1595123550441-d377e017de6a?auto=format&fit=crop&q=80&w=800',
        category: 'dried',
        rating: 4.6,
        weightOptions: [250, 500, 750, 1000],
        allowCustomWeight: true,
        unit: 'grams',
    },
    {
        id: 'dried-8',
        name: 'Dried Porcini Slices',
        description: 'Intense, nutty flavor perfect for risottos and sauces. Wild-harvested and sun-dried.',
        price: 18.50,
        image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?q=80&w=2070&auto=format&fit=crop',
        category: 'dried',
        rating: 4.9,
        weightOptions: [250, 500, 750, 1000],
        allowCustomWeight: true,
        unit: 'grams',
    },
    {
        id: 'dried-9',
        name: 'Dried Morel Mushrooms',
        description: 'The honeycomb texture holds sauces beautifully. A luxurious addition to cream sauces.',
        price: 49.99,
        image: 'https://images.unsplash.com/photo-1616428352668-3d33b2843e8d?auto=format&fit=crop&q=80&w=800',
        category: 'dried',
        rating: 5.0,
        weightOptions: [100, 250, 500, 750], // Morels in smaller quantities due to premium pricing
        allowCustomWeight: true,
        unit: 'grams',
    },

    // 3. Snacks & Ready-to-Eat
    {
        id: 'snack-1',
        name: 'Peri-Peri Mushroom Chips',
        description: 'Crunchy vacuum-fried oyster mushroom chips dusted with spicy Peri-Peri seasoning.',
        price: 6.99,
        image: 'https://images.unsplash.com/photo-1606914469725-e39c37155490?auto=format&fit=crop&q=80&w=800',
        category: 'snacks',
        rating: 4.7
    },
    {
        id: 'snack-2',
        name: 'Spicy Mushroom Pickle',
        description: 'Traditional Indian style pickle made with button mushrooms, mustard oil, and aromatic spices.',
        price: 12.99,
        image: 'https://images.unsplash.com/photo-1589135233689-d53804194e34?auto=format&fit=crop&q=80&w=800',
        category: 'snacks',
        rating: 4.8
    },
    {
        id: 'snack-3',
        name: 'Truffle & Nut Trail Mix',
        description: 'A gourmet blend of roasted nuts, seeds, and dried truffle bits.',
        price: 9.99,
        image: 'https://images.unsplash.com/photo-1536591375315-1988d69605aa?auto=format&fit=crop&q=80&w=800',
        category: 'snacks',
        rating: 4.9
    },

    // 4. Ready-to-Cook
    {
        id: 'cook-1',
        name: 'Mushroom Biryani Kit',
        description: 'Includes Basmati rice, dried mushrooms, and a special spice paste for a royal meal.',
        price: 19.99,
        image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=800',
        category: 'ready-to-cook',
        rating: 4.8
    },
    {
        id: 'cook-2',
        name: 'Creamy Mushroom Risotto Mix',
        description: 'Italian Arborio rice with dried porcini, herbs, and spices. Just add water and olive oil.',
        price: 15.99,
        image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&q=80&w=800',
        category: 'ready-to-cook',
        rating: 4.8
    },
    {
        id: 'cook-3',
        name: 'Mushroom Millet Breakfast Mix',
        description: 'A healthy savory porridge mix with oats, millets, and dried mushroom bits.',
        price: 8.99,
        image: 'https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&q=80&w=800',
        category: 'ready-to-cook',
        rating: 4.6
    },

    // 5. Spices & Sauces
    {
        id: 'spice-1',
        name: 'Magic Mushroom Masala',
        description: 'A secret blend of 15 spices and dried porcini powder. Adds umami to any dish.',
        price: 9.99,
        image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=800',
        category: 'spices',
        rating: 4.9
    },
    {
        id: 'spice-3',
        name: 'Vegan Wild Mushroom Pesto',
        description: 'A rich pesto made with basil, pine nuts, nutritional yeast, and wild mushrooms.',
        price: 11.99,
        image: 'https://images.unsplash.com/photo-1593253705421-4e6380a42232?auto=format&fit=crop&q=80&w=800',
        category: 'spices',
        rating: 4.7
    },

    // 7. Grow & Learn
    {
        id: 'grow-1',
        name: 'Lion\'s Mane Grow Kit',
        description: 'Grow your own brain-boosting Lion\'s Mane mushrooms at home. Easy to use.',
        price: 29.99,
        image: 'https://images.unsplash.com/photo-1626202378372-c288f615f1b1?q=80&w=2070&auto=format&fit=crop',
        category: 'grow',
        rating: 4.8,
    },
    {
        id: 'grow-2',
        name: 'Kids Mushroom Experiment Kit',
        description: 'A fun educational kit for kids to learn about fungi biology while growing pink oysters.',
        price: 24.99,
        image: 'https://images.unsplash.com/photo-1555447405-058428d65699?auto=format&fit=crop&q=80&w=800',
        category: 'grow',
        rating: 4.9
    },
    {
        id: 'grow-3',
        name: 'Online Mushroom Cultivation Course',
        description: 'Lifetime access to our masterclass on growing mushrooms at home. Includes digital certificate.',
        price: 49.99,
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800',
        category: 'grow',
        rating: 5.0
    },

    // 8. Gifts
    {
        id: 'gift-1',
        name: 'Ultimate Mushroom Gift Hamper',
        description: 'A luxurious collection of Truffle Oil, Dried Porcini, Mushroom Pickle, and a Grow Kit.',
        price: 89.99,
        image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=800',
        category: 'gift',
        rating: 5.0
    },
    {
        id: 'gift-2',
        name: 'Wellness Starter Box',
        description: 'Includes Reishi Hot Chocolate, Lion\'s Mane Coffee, and Mushroom Chips.',
        price: 39.99,
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800',
        category: 'gift',
        rating: 4.8
    },

    // 9. Merch
    {
        id: 'merch-1',
        name: 'Fungi Lover Fridge Magnets',
        description: 'Set of 5 cute hand-painted mushroom magnets.',
        price: 9.99,
        image: 'https://images.unsplash.com/photo-1582794543139-8ac92a900275?auto=format&fit=crop&q=80&w=800',
        category: 'merch',
        rating: 4.5
    },
    {
        id: 'merch-2',
        name: '2025 Mushroom Recipe Calendar',
        description: 'Beautifully illustrated calendar with a new mushroom recipe for every month.',
        price: 14.99,
        image: 'https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&q=80&w=800',
        category: 'merch',
        rating: 4.7
    }
];
