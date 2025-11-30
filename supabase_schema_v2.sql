-- Enable UUID extension
create extension if not exists "uuid-ossp";
-- PROFILES TABLE (Linked to Auth)
create table profiles (
    id uuid references auth.users on delete cascade not null primary key,
    email text,
    full_name text,
    avatar_url text,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
-- PRODUCTS TABLE
create table products (
    id uuid default uuid_generate_v4() primary key,
    name text not null,
    description text,
    price decimal(10, 2) not null,
    image text,
    category text,
    rating decimal(2, 1) default 5.0,
    stock integer default 0,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
-- ORDERS TABLE
create table orders (
    id uuid default uuid_generate_v4() primary key,
    user_id uuid references profiles(id),
    status text default 'pending',
    -- pending, paid, shipped, delivered
    total decimal(10, 2) not null,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
-- ORDER ITEMS TABLE
create table order_items (
    id uuid default uuid_generate_v4() primary key,
    order_id uuid references orders(id) on delete cascade,
    product_id uuid references products(id),
    quantity integer not null,
    price_at_purchase decimal(10, 2) not null
);
-- REVIEWS TABLE
create table reviews (
    id uuid default uuid_generate_v4() primary key,
    product_id uuid references products(id) on delete cascade,
    user_id uuid references profiles(id) on delete cascade,
    rating integer check (
        rating >= 1
        and rating <= 5
    ),
    comment text,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
-- RLS POLICIES
alter table profiles enable row level security;
alter table products enable row level security;
alter table orders enable row level security;
alter table order_items enable row level security;
alter table reviews enable row level security;
-- Public read access for products
create policy "Products are viewable by everyone" on products for
select using (true);
-- Profiles: Users can view/edit their own profile
create policy "Users can view own profile" on profiles for
select using (auth.uid() = id);
create policy "Users can update own profile" on profiles for
update using (auth.uid() = id);
-- Orders: Users can view their own orders
create policy "Users can view own orders" on orders for
select using (auth.uid() = user_id);
create policy "Users can create orders" on orders for
insert with check (auth.uid() = user_id);
-- Order Items: Users can view their own order items
create policy "Users can view own order items" on order_items for
select using (
        exists (
            select 1
            from orders
            where orders.id = order_items.order_id
                and orders.user_id = auth.uid()
        )
    );
-- Reviews: Public read, Authenticated insert
create policy "Reviews are viewable by everyone" on reviews for
select using (true);
create policy "Users can create reviews" on reviews for
insert with check (auth.uid() = user_id);
-- Insert Initial Data (Comprehensive Catalog)
insert into products (
        name,
        description,
        price,
        image,
        category,
        rating,
        stock
    )
values -- Fresh
    (
        'Organic Button Mushrooms (White & Brown)',
        'Fresh, firm, and versatile. A mix of classic white buttons and earthy creminis. Low calorie, rich in B-vitamins and antioxidants that support energy and immunity. (These are general nutritional benefits; not intended as medical advice or treatment.)',
        5.99,
        'https://images.unsplash.com/photo-1504382103100-db7e92322d39?auto=format&fit=crop&q=80&w=800',
        'fresh',
        4.8,
        100
    ),
    (
        'Assorted Oyster Mushrooms',
        'A vibrant mix of White, Grey, and Pink Oyster mushrooms. Delicate and velvety. Higher in protein and fiber, may help support heart health and healthy cholesterol levels. (These are general nutritional benefits; not intended as medical advice or treatment.)',
        12.00,
        'https://images.unsplash.com/photo-1552010099-5dc86fcfaa38?q=80&w=1964&auto=format&fit=crop',
        'fresh',
        4.7,
        50
    ),
    (
        'Fresh Shiitake Mushrooms',
        'Rich, savory, and meaty. Perfect for stir-fries and soups. Strong umami flavour with compounds that may support heart health and immune function. (These are general nutritional benefits; not intended as medical advice or treatment.)',
        14.50,
        'https://images.unsplash.com/photo-1623594073766-3b9e42220f44?auto=format&fit=crop&q=80&w=800',
        'fresh',
        4.9,
        40
    ),
    (
        'Fresh Enoki Mushrooms',
        'Delicate, noodle-like stems with tiny caps. Mild flavor and crunchy texture. Light, crunchy, low calorie mushroom with fiber and antioxidants for everyday wellness. (These are general nutritional benefits; not intended as medical advice or treatment.)',
        8.99,
        'https://images.unsplash.com/photo-1603569283847-aa295f0d016a?auto=format&fit=crop&q=80&w=800',
        'fresh',
        4.8,
        60
    ),
    (
        'King Oyster Mushrooms',
        'Thick, meaty stems and small caps. Excellent for grilling as a meat substitute. Meaty texture, good veg protein and fiber option that can replace some meat in meals. (These are general nutritional benefits; not intended as medical advice or treatment.)',
        15.50,
        'https://images.unsplash.com/photo-1605218427368-35b0f996d716?auto=format&fit=crop&q=80&w=800',
        'fresh',
        4.8,
        30
    ),
    (
        'Fresh Milky Mushrooms',
        'Large, white, and robust. Native to India, known for their long shelf life and meaty texture. Indian-friendly mushroom, offers veg protein, fiber and potassium for daily nutrition. (These are general nutritional benefits; not intended as medical advice or treatment.)',
        13.99,
        'https://images.unsplash.com/photo-1615214640325-16c39e6e5079?auto=format&fit=crop&q=80&w=800',
        'fresh',
        4.7,
        25
    ),
    (
        'Fresh Paddy Straw Mushrooms',
        'Popular in Asian cuisine. Sweet, silky texture and distinct aroma. Easy-to-digest mushroom with protein, fiber and some vitamin C for balanced meals. (These are general nutritional benefits; not intended as medical advice or treatment.)',
        11.99,
        'https://images.unsplash.com/photo-1595123550441-d377e017de6a?auto=format&fit=crop&q=80&w=800',
        'fresh',
        4.6,
        30
    ),
    (
        'Premium White Truffles',
        'Rare and aromatic white truffles harvested from the forests of Alba. The diamond of the kitchen.',
        129.99,
        'https://images.unsplash.com/photo-1599923832810-63952f144eab?q=80&w=2070&auto=format&fit=crop',
        'fresh',
        5.0,
        10
    ),
    -- Dried
    (
        'Dried Button Mushrooms',
        'Dehydrated button mushrooms. Great for adding texture to stews and gravies. Low calorie, rich in B-vitamins and antioxidants that support energy and immunity. (These are general nutritional benefits; not intended as medical advice or treatment.)',
        9.99,
        'https://images.unsplash.com/photo-1504382103100-db7e92322d39?auto=format&fit=crop&q=80&w=800',
        'dried',
        4.5,
        100
    ),
    (
        'Dried Oyster Mushrooms',
        'Dried oyster mushrooms retain their delicate flavor. Rehydrate for soups. Higher in protein and fiber, may help support heart health and healthy cholesterol levels. (These are general nutritional benefits; not intended as medical advice or treatment.)',
        12.99,
        'https://images.unsplash.com/photo-1552010099-5dc86fcfaa38?q=80&w=1964&auto=format&fit=crop',
        'dried',
        4.7,
        100
    ),
    (
        'Dried Shiitake Whole',
        'Rich, smoky, and packed with umami. Essential for Asian soups, stir-fries, and stocks. Strong umami flavour with compounds that may support heart health and immune function. (These are general nutritional benefits; not intended as medical advice or treatment.)',
        14.99,
        'https://images.unsplash.com/photo-1623594073766-3b9e42220f44?auto=format&fit=crop&q=80&w=800',
        'dried',
        4.9,
        100
    ),
    (
        'Dried Enoki Mushrooms',
        'Dried Enoki for a concentrated flavor boost in broths and hot pots. Light, crunchy, low calorie mushroom with fiber and antioxidants for everyday wellness. (These are general nutritional benefits; not intended as medical advice or treatment.)',
        10.99,
        'https://images.unsplash.com/photo-1603569283847-aa295f0d016a?auto=format&fit=crop&q=80&w=800',
        'dried',
        4.8,
        80
    ),
    (
        'Dried King Oyster Slices',
        'Thick slices of dried King Oyster. Chewy texture, perfect for vegan jerky. Meaty texture, good veg protein and fiber option that can replace some meat in meals. (These are general nutritional benefits; not intended as medical advice or treatment.)',
        16.99,
        'https://images.unsplash.com/photo-1605218427368-35b0f996d716?auto=format&fit=crop&q=80&w=800',
        'dried',
        4.8,
        50
    ),
    (
        'Dried Milky Mushrooms',
        'Dried Milky mushrooms. Rehydrate to enjoy their robust, meaty texture. Indian-friendly mushroom, offers veg protein, fiber and potassium for daily nutrition. (These are general nutritional benefits; not intended as medical advice or treatment.)',
        15.99,
        'https://images.unsplash.com/photo-1615214640325-16c39e6e5079?auto=format&fit=crop&q=80&w=800',
        'dried',
        4.7,
        40
    ),
    (
        'Dried Paddy Straw Mushrooms',
        'Dried Paddy Straw mushrooms. A pantry staple for Asian cooking. Easy-to-digest mushroom with protein, fiber and some vitamin C for balanced meals. (These are general nutritional benefits; not intended as medical advice or treatment.)',
        13.99,
        'https://images.unsplash.com/photo-1595123550441-d377e017de6a?auto=format&fit=crop&q=80&w=800',
        'dried',
        4.6,
        60
    ),
    (
        'Dried Porcini Slices',
        'Intense, nutty flavor perfect for risottos and sauces. Wild-harvested and sun-dried.',
        18.50,
        'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?q=80&w=2070&auto=format&fit=crop',
        'dried',
        4.9,
        100
    ),
    (
        'Dried Morel Mushrooms',
        'The honeycomb texture holds sauces beautifully. A luxurious addition to cream sauces.',
        49.99,
        'https://images.unsplash.com/photo-1616428352668-3d33b2843e8d?auto=format&fit=crop&q=80&w=800',
        'dried',
        5.0,
        20
    ),
    -- Snacks
    (
        'Peri-Peri Mushroom Chips',
        'Crunchy vacuum-fried oyster mushroom chips dusted with spicy Peri-Peri seasoning.',
        6.99,
        'https://images.unsplash.com/photo-1606914469725-e39c37155490?auto=format&fit=crop&q=80&w=800',
        'snacks',
        4.7,
        100
    ),
    (
        'Spicy Mushroom Pickle',
        'Traditional Indian style pickle made with button mushrooms, mustard oil, and aromatic spices.',
        12.99,
        'https://images.unsplash.com/photo-1589135233689-d53804194e34?auto=format&fit=crop&q=80&w=800',
        'snacks',
        4.8,
        50
    ),
    (
        'Truffle & Nut Trail Mix',
        'A gourmet blend of roasted nuts, seeds, and dried truffle bits.',
        9.99,
        'https://images.unsplash.com/photo-1536591375315-1988d69605aa?auto=format&fit=crop&q=80&w=800',
        'snacks',
        4.9,
        50
    ),
    -- Ready to Cook
    (
        'Mushroom Biryani Kit',
        'Includes Basmati rice, dried mushrooms, and a special spice paste for a royal meal.',
        19.99,
        'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=800',
        'ready-to-cook',
        4.8,
        40
    ),
    (
        'Creamy Mushroom Risotto Mix',
        'Italian Arborio rice with dried porcini, herbs, and spices. Just add water and olive oil.',
        15.99,
        'https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&q=80&w=800',
        'ready-to-cook',
        4.8,
        40
    ),
    (
        'Mushroom Millet Breakfast Mix',
        'A healthy savory porridge mix with oats, millets, and dried mushroom bits.',
        8.99,
        'https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&q=80&w=800',
        'ready-to-cook',
        4.6,
        60
    ),
    -- Spices
    (
        'Magic Mushroom Masala',
        'A secret blend of 15 spices and dried porcini powder. Adds umami to any dish.',
        9.99,
        'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=800',
        'spices',
        4.9,
        100
    ),
    (
        'Vegan Wild Mushroom Pesto',
        'A rich pesto made with basil, pine nuts, nutritional yeast, and wild mushrooms.',
        11.99,
        'https://images.unsplash.com/photo-1593253705421-4e6380a42232?auto=format&fit=crop&q=80&w=800',
        'spices',
        4.7,
        50
    ),
    -- Grow & Learn
    (
        'Lion''s Mane Grow Kit',
        'Grow your own brain-boosting Lion''s Mane mushrooms at home. Easy to use.',
        29.99,
        'https://images.unsplash.com/photo-1626202378372-c288f615f1b1?q=80&w=2070&auto=format&fit=crop',
        'grow',
        4.8,
        50
    ),
    (
        'Kids Mushroom Experiment Kit',
        'A fun educational kit for kids to learn about fungi biology while growing pink oysters.',
        24.99,
        'https://images.unsplash.com/photo-1555447405-058428d65699?auto=format&fit=crop&q=80&w=800',
        'grow',
        4.9,
        30
    ),
    (
        'Online Mushroom Cultivation Course',
        'Lifetime access to our masterclass on growing mushrooms at home. Includes digital certificate.',
        49.99,
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800',
        'grow',
        5.0,
        100
    ),
    -- Gifts
    (
        'Ultimate Mushroom Gift Hamper',
        'A luxurious collection of Truffle Oil, Dried Porcini, Mushroom Pickle, and a Grow Kit.',
        89.99,
        'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=800',
        'gift',
        5.0,
        10
    ),
    (
        'Wellness Starter Box',
        'Includes Reishi Hot Chocolate, Lion''s Mane Coffee, and Mushroom Chips.',
        39.99,
        'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800',
        'gift',
        4.8,
        20
    ),
    -- Merch
    (
        'Fungi Lover Fridge Magnets',
        'Set of 5 cute hand-painted mushroom magnets.',
        9.99,
        'https://images.unsplash.com/photo-1582794543139-8ac92a900275?auto=format&fit=crop&q=80&w=800',
        'merch',
        4.5,
        100
    ),
    (
        '2025 Mushroom Recipe Calendar',
        'Beautifully illustrated calendar with a new mushroom recipe for every month.',
        14.99,
        'https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&q=80&w=800',
        'merch',
        4.7,
        50
    );