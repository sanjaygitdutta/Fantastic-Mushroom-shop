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
    seoTitle?: string;
    seoDescription?: string;
    seoKeywords?: string;
    translations?: Record<string, {
        title: string;
        description: string;
        ingredients: { item: string; amount: string }[];
        instructions: string[];
        seoTitle?: string;
        seoDescription?: string;
        seoKeywords?: string;
    }>;
    publishedAt?: string;
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
            'Rehydrate dried porcini in warm water for 20 mins. Drain, chop, and save that mushroom liquid!',
            'Sauté shallots in half the butter until soft in a big pan.',
            'Add rice, toast for 2 minutes until the edges look clear.',
            'Pour in wine, stir until it\'s all gone.',
            'Gradually add warm broth and mushroom liquid, one ladle at a time, stirring constantly.',
            'Stir in chopped mushrooms when you\'re halfway through cooking the rice.',
            'Once rice is al dente, off the heat! Stir in the rest of the butter, Parmesan, and Truffle Ghee.',
            'Serve immediately, sprinkled with fresh parsley.'
        ],
        tags: ['Dinner', 'Italian', 'Vegetarian'],
        translations: {
            'zh-CN': {
                title: '奶油野菌烩饭',
                description: '这道奶油野菌烩饭，用干牛肝菌和白松露油做的，香浓又满足，吃一口就忘不了！',
                ingredients: [
                    { item: '意大利烩饭米', amount: '2 杯' },
                    { item: '干牛肝菌', amount: '30克' },
                    { item: '蔬菜高汤', amount: '1.5 升' },
                    { item: '白葡萄酒', amount: '1/2 杯' },
                    { item: '小洋葱', amount: '2 个，切碎' },
                    { item: '黄油', amount: '50克' },
                    { item: '帕尔马干酪', amount: '1/2 杯' },
                    { item: '松露酥油', amount: '1 汤匙' }
                ],
                instructions: [
                    '牛肝菌泡软切碎，水留着。',
                    '黄油炒洋葱，炒软。',
                    '加米饭炒2分钟。',
                    '倒白葡萄酒，炒干。',
                    '慢慢加高汤和蘑菇水，边加边搅。',
                    '煮到一半，加蘑菇。',
                    '米饭弹牙后，关火，加黄油、芝士、松露油。',
                    '撒欧芹，趁热吃！'
                ]
            },
            'ms': {
                title: 'Risotto Cendawan Liar Berkrim',
                description: 'Risotto cendawan ni memang klasik Itali. Kaya rasa, sedap sangat!',
                ingredients: [
                    { item: 'Beras Arborio', amount: '2 cawan' },
                    { item: 'Cendawan Porcini Kering', amount: '30g' },
                    { item: 'Stok Sayuran', amount: '1.5 liter' },
                    { item: 'Wain Putih', amount: '1/2 cawan' },
                    { item: 'Bawang Merah Kecil', amount: '2 biji, dicincang halus' },
                    { item: 'Mentega', amount: '50g' },
                    { item: 'Keju Parmesan', amount: '1/2 cawan' },
                    { item: 'Ghee Desi Infusi Truffle', amount: '1 sudu besar' }
                ],
                instructions: [
                    'Rendam cendawan porcini kering 20 minit. Toskan, cincang, simpan air rendaman.',
                    'Tumis bawang merah dengan separuh mentega sampai lembut.',
                    'Masukkan beras, tumis 2 minit sampai jernih.',
                    'Tuang wain, kacau sampai kering.',
                    'Masukkan stok suam (dan air cendawan) sikit-sikit, kacau selalu.',
                    'Masukkan cendawan cincang bila dah separuh masak.',
                    'Bila nasi dah al dente, angkat. Kacau masuk baki mentega, parmesan, dan Ghee Truffle.',
                    'Hidang segera dengan pasli segar.'
                ]
            }
        }
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
            'Shred Lion\'s Mane mushrooms into crab-like pieces.',
            'Sauté mushrooms in a dry pan to get rid of extra moisture.',
            'Mix mayo, mustard, egg, seasoning, and green onions in a bowl.',
            'Fold in the mushrooms and breadcrumbs.',
            'Form into patties and chill for 20 minutes to firm up.',
            'Pan-fry in oil until golden brown on both sides.',
            'Serve with lemon wedges and tartar sauce.'
        ],
        tags: ['Lunch', 'Vegan Option', 'Seafood Alternative'],
        translations: {
            'zh-CN': {
                title: '猴头菇“蟹肉”饼',
                description: '这个猴头菇“蟹肉”饼，吃起来跟真蟹肉一样，素食朋友也能大饱口福！',
                ingredients: [
                    { item: '新鲜猴头菇（来自套件）', amount: '500克' },
                    { item: '日式面包糠', amount: '1 杯' },
                    { item: '蛋黄酱', amount: '1/4 杯' },
                    { item: '第戎芥末酱', amount: '1 茶匙' },
                    { item: '老湾调味料', amount: '1 茶匙' },
                    { item: '鸡蛋', amount: '1 个' },
                    { item: '香葱', amount: '2 根，切碎' }
                ],
                instructions: [
                    '猴头菇撕成蟹肉状。',
                    '干锅炒蘑菇，去水分。',
                    '蛋黄酱、芥末、鸡蛋、调料、香葱拌匀。',
                    '加蘑菇、面包糠拌匀。',
                    '做成饼状，冷藏20分钟。',
                    '用油煎至两面金黄。',
                    '配柠檬角和塔塔酱吃。'
                ]
            },
            'ms': {
                title: 'Kek "Ketam" Cendawan Lion\'s Mane',
                description: 'Kek \'ketam\' cendawan ni memang lain dari yang lain. Tekstur dia macam isi ketam betul!',
                ingredients: [
                    { item: 'Cendawan Lion\'s Mane Segar (dari Kit)', amount: '500g' },
                    { item: 'Serbuk Roti Panko', amount: '1 cawan' },
                    { item: 'Mayonis', amount: '1/4 cawan' },
                    { item: 'Mustard Dijon', amount: '1 sudu kecil' },
                    { item: 'Perasa Old Bay', amount: '1 sudu kecil' },
                    { item: 'Telur', amount: '1 biji' },
                    { item: 'Daun Bawang', amount: '2 batang, dicincang' }
                ],
                instructions: [
                    'Carik-carikkan cendawan Lion\'s Mane macam isi ketam.',
                    'Tumis cendawan dalam kuali kering, buang air lebihan.',
                    'Dalam mangkuk, campur mayonis, mustard, telur, perasa, dan daun bawang.',
                    'Gaulkan cendawan dan serbuk roti.',
                    'Bentukkan jadi bebola leper, sejukkan 20 minit.',
                    'Goreng dalam minyak sampai perang keemasan.',
                    'Hidang dengan hirisan lemon dan sos tartar.'
                ]
            }
        }
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
            'Sauté onions in oil until golden. Add ginger-garlic paste and cook for a minute.',
            'Stir in tomato puree and cook until the oil separates.',
            'Mix in Magic Mushroom Masala and salt.',
            'Add mushrooms, toss to coat, and cook for 5 minutes.',
            'Pour in coconut milk and simmer for 10-15 minutes until the sauce thickens.',
            'Garnish with fresh cilantro and serve hot.'
        ],
        tags: ['Dinner', 'Indian', 'Spicy'],
        translations: {
            'zh-CN': {
                title: '辛辣蘑菇马萨拉咖喱',
                description: '这道辛辣蘑菇马萨拉咖喱，香料味浓郁，配烤饼或米饭都超赞！',
                ingredients: [
                    { item: '混合新鲜蘑菇', amount: '500克' },
                    { item: '洋葱', amount: '2个，切碎' },
                    { item: '番茄', amount: '2个，打成泥' },
                    { item: '姜蒜酱', amount: '1汤匙' },
                    { item: '魔力蘑菇马萨拉', amount: '2汤匙' },
                    { item: '椰奶', amount: '1杯' },
                    { item: '香菜', amount: '用于装饰' }
                ],
                instructions: [
                    '油炒洋葱至金黄，加姜蒜酱煮1分钟。',
                    '加番茄泥，煮到油水分离。',
                    '拌入马萨拉和盐。',
                    '加蘑菇炒匀，煮5分钟。',
                    '倒椰奶，小火炖10-15分钟。',
                    '撒香菜，趁热吃。'
                ]
            },
            'ms': {
                title: 'Kari Masala Cendawan Pedas',
                description: 'Kari cendawan ni memang kaya rasa India. Sedap makan dengan naan atau nasi!',
                ingredients: [
                    { item: 'Cendawan Campuran Segar', amount: '500g' },
                    { item: 'Bawang Besar', amount: '2 biji, dicincang' },
                    { item: 'Tomato', amount: '2 biji, dilumatkan' },
                    { item: 'Pes Halia-Bawang Putih', amount: '1 sudu besar' },
                    { item: 'Magic Mushroom Masala', amount: '2 sudu besar' },
                    { item: 'Santan', amount: '1 cawan' },
                    { item: 'Daun Ketumbar', amount: 'Untuk hiasan' }
                ],
                instructions: [
                    'Tumis bawang besar sampai perang. Masukkan pes halia-bawang putih, masak seminit.',
                    'Masukkan puri tomato, masak sampai minyak terpisah.',
                    'Masukkan Magic Mushroom Masala dan garam, kacau rata.',
                    'Masukkan cendawan, gaul rata. Masak 5 minit.',
                    'Tuang santan, reneh 10-15 minit sampai kuah pekat.',
                    'Hias dengan daun ketumbar segar, hidang panas-panas.'
                ]
            }
        }
    },
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
            'Quickly rinse fine bulgur, drain well, and press out excess water. Let it soak for 20-30 minutes until plump, then fluff.',
            'Finely chop fresh parsley and mint. Make sure they\'re super dry first!',
            'Dice ripe tomatoes and thinly slice spring onions. Add them to the herbs.',
            'Combine the fluffed bulgur with the herbs and veggies.',
            'Dress with fresh lemon juice, olive oil, salt, and pepper.',
            'Gently toss everything together. Chill for at least 30 minutes to let those flavors mingle.',
            'Serve chilled as a refreshing side or with crisp lettuce cups.'
        ],
        tags: ['Lebanese', 'Appetizer', 'Vegan'],
        translations: {
            'zh-CN': {
                title: '塔布勒沙拉',
                description: '塔布勒沙拉，清爽又开胃，新鲜欧芹和薄荷的香气，让你仿佛置身地中海！',
                ingredients: [
                    { item: '细粒布格麦 (burghul na\'am)', amount: '90克' },
                    { item: '新鲜平叶欧芹', amount: '2大束 (约250克)' },
                    { item: '新鲜薄荷叶', amount: '1/2杯压实 (约30克)' },
                    { item: '熟番茄', amount: '2个中等大小 (约300克)' },
                    { item: '小葱', amount: '4-5根' },
                    { item: '新鲜柠檬汁', amount: '1/4杯 (约60毫升)' },
                    { item: '特级初榨橄榄油', amount: '1/4杯 (约60毫升)' },
                    { item: '盐', amount: '1茶匙' },
                    { item: '现磨黑胡椒', amount: '1/2茶匙 (可选)' }
                ],
                instructions: [
                    '布格麦冲洗沥干，泡20-30分钟，拨松。',
                    '欧芹、薄荷洗净切碎。',
                    '番茄切丁沥水，小葱切片。',
                    '布格麦、香草、蔬菜拌一起。',
                    '淋柠檬汁、橄榄油，加盐、胡椒。',
                    '轻轻拌匀，尝味调整。',
                    '盖好冷藏30分钟，更入味。',
                    '冰镇后配生菜叶吃，清爽！'
                ]
            },
            'ms': {
                title: 'Tabbouleh',
                description: 'Tabbouleh ni memang jiwa masakan Lubnan. Salad segar penuh pasli dan pudina, masam-masam lemon, memang sedap!',
                ingredients: [
                    { item: 'Bulgur Halus (burghul na\'am)', amount: '90g' },
                    { item: 'Daun Pasli Segar', amount: '2 ikat besar (anggaran 250g)' },
                    { item: 'Daun Pudina Segar', amount: '1/2 cawan padat (anggaran 30g)' },
                    { item: 'Tomato Masak', amount: '2 biji sederhana (anggaran 300g)' },
                    { item: 'Daun Bawang', amount: '4-5 batang' },
                    { item: 'Jus Lemon Segar', amount: '1/4 cawan (anggaran 60ml)' },
                    { item: 'Minyak Zaitun Extra Virgin', amount: '1/4 cawan (anggaran 60ml)' },
                    { item: 'Garam', amount: '1 sudu teh' },
                    { item: 'Lada Hitam Baru Dikisar', amount: '1/2 sudu teh (pilihan)' }
                ],
                instructions: [
                    'Letak bulgur halus dalam mangkuk. Bilas cepat, toskan betul-betul. Biar kembang 20-30 minit, lepas tu gemburkan.',
                    'Sementara tu, basuh pasli dan pudina. Cincang halus kedua-duanya. Letak dalam mangkuk besar.',
                    'Potong dadu tomato masak, toskan air. Hiris nipis daun bawang. Masukkan tomato dan daun bawang ke dalam mangkuk herba.',
                    'Masukkan bulgur yang dah kembang ke dalam mangkuk herba dan sayur.',
                    'Tuang jus lemon segar dan minyak zaitun. Perasakan dengan garam dan lada hitam.',
                    'Gaul perlahan-lahan sampai sebati. Rasa dan sesuaikan. Tutup, sejukkan 30 minit biar rasa sebati.',
                    'Hidang sejuk sebagai lauk sampingan atau pembuka selera. Sedap dengan daun salad rangup.'
                ]
            }
        }
    },
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
            'Freeze fresh octopus for a day, then thaw; this makes it tender. Clean it well.',
            'Boil water with onion, bay leaves, and garlic. Dip the octopus in and out three times to \'frighten\' it and curl the tentacles.',
            'Submerge the octopus, simmer gently for 30-40 minutes until super tender. Time varies by size.',
            'About 15 minutes before the octopus is done, add sliced potatoes to the pot to cook until tender.',
            'Remove octopus and potatoes. Slice the octopus tentacles into rounds.',
            'Arrange potato slices on a platter, then top with the sliced octopus.',
            'Drizzle generously with olive oil, sprinkle with smoked paprika and coarse sea salt. Serve right away!'
        ],
        tags: ['Spanish', 'Dinner', 'Non-Vegetarian'],
        translations: {
            'zh-CN': {
                title: '加利西亚章鱼 (Pulpo a la Gallega)',
                description: '这道加利西亚章鱼，鲜嫩的章鱼配上橄榄油和辣椒粉，简单又美味，是西班牙小吃的经典！',
                ingredients: [
                    { item: '章鱼', amount: '1公斤 (已清理，新鲜或冷冻)' },
                    { item: '土豆', amount: '500克 (蜡质品种，去皮)' },
                    { item: '特级初榨橄榄油', amount: '100毫升' },
                    { item: '烟熏辣椒粉 (Pimentón de la Vera)', amount: '2茶匙 (甜味或半甜味)' },
                    { item: '粗海盐', amount: '1茶匙 (另加少许用于调味)' },
                    { item: '月桂叶', amount: '2大片' },
                    { item: '洋葱', amount: '1个中等大小 (去皮，对半切开)' },
                    { item: '大蒜', amount: '3瓣 (去皮，拍扁)' }
                ],
                instructions: [
                    '章鱼冷冻解冻，洗净去眼喙。',
                    '水烧开，加洋葱、月桂叶、蒜。',
                    '章鱼“吓”三次，每次10秒。',
                    '章鱼煮30-40分钟，直到很嫩。',
                    '章鱼快好时，土豆去皮切片，入锅煮软。',
                    '章鱼取出切片，土豆沥干。',
                    '土豆铺盘，章鱼放上面。',
                    '淋橄榄油，撒辣椒粉、海盐，趁热吃！'
                ]
            },
            'ms': {
                title: 'Sotong Kurita Gaya Galicia (Pulpo a la Gallega)',
                description: 'Sotong kurita gaya Galicia ni memang klasik. Lembut, berperisa minyak zaitun, paprika, dan garam laut. Tapa penting dari Sepanyol!',
                ingredients: [
                    { item: 'Sotong Kurita', amount: '1 kg (dibersihkan, segar atau beku)' },
                    { item: 'Kentang', amount: '500g (jenis berlilin, dikupas)' },
                    { item: 'Minyak Zaitun Extra Virgin', amount: '100 ml' },
                    { item: 'Paprika Salai (Pimentón de la Vera)', amount: '2 sudu teh (manis atau separa manis)' },
                    { item: 'Garam Laut Kasar', amount: '1 sudu teh (dan lebih untuk perasa)' },
                    { item: 'Daun Salam', amount: '2 helai besar' },
                    { item: 'Bawang Besar', amount: '1 biji sederhana (dikupas, dibelah dua)' },
                    { item: 'Bawang Putih', amount: '3 ulas (dikupas, dihancurkan)' }
                ],
                instructions: [
                    'Sediakan sotong kurita. Kalau segar, bekukan 24 jam, lepas tu nyahbeku. Bersihkan, buang mata dan paruh.',
                    'Didihkan air dalam periuk besar. Masukkan bawang, daun salam, dan bawang putih. \'Takutkan\' sotong kurita 3 kali dalam air mendidih.',
                    'Lepas celupan ketiga, rendam sotong kurita sepenuhnya. Reneh perlahan 30-40 minit sampai lembut.',
                    'Sementara sotong masak, kupas kentang, potong 1/2 inci. Masukkan kentang dalam air reneh sotong (atau masak asing) 15 minit sebelum sotong siap.',
                    'Bila dah masak, angkat sotong, biar rehat. Toskan kentang. Gunting sesungut sotong jadi kepingan bulat 1/2 inci.',
                    'Susun hirisan kentang atas pinggan. Letak hirisan sotong kurita atas kentang.',
                    'Renjis minyak zaitun banyak-banyak. Tabur paprika salai dan garam laut kasar. Hidang segera dengan wain Albariño.'
                ]
            }
        }
    },
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
            'Sauté onion and garlic, then brown ground beef or lamb. Drain any fat.',
            'Stir in crushed tomatoes, wine (if using), cinnamon, bay leaf, salt, and pepper. Simmer for 20-45 minutes; remove cinnamon and bay leaf.',
            'Cook pasta al dente. Toss hot pasta with one egg and 2 tbsp Parmesan to bind.',
            'Melt butter, whisk in flour for a roux. Gradually whisk in milk until thick and creamy.',
            'Off heat, whisk in another egg, 50g Parmesan, nutmeg, salt, and pepper until smooth.',
            'Preheat oven to 180°C (350°F). Layer pasta, then meat sauce in a greased 9x13 inch dish.',
            'Pour béchamel over the meat, sprinkle with remaining Parmesan. Bake 35-45 minutes until golden and bubbly.',
            'Let it rest 15-20 minutes before slicing. This helps the layers set beautifully.'
        ],
        tags: ['Greek', 'Dinner', 'Non-Vegetarian'],
        translations: {
            'zh-CN': {
                title: '希腊千层面 (Pastitsio)',
                description: '希腊千层面，香浓的肉酱、意面和奶油白酱层层叠叠，烤出来香喷喷的，是家里聚餐的好选择！',
                ingredients: [
                    { item: '瘦牛肉末或羊肉末', amount: '500克' },
                    { item: '粗管面或粗通心粉', amount: '300克' },
                    { item: '大洋葱，切碎', amount: '1个' },
                    { item: '大蒜瓣，切末', amount: '3瓣' },
                    { item: '碎番茄', amount: '400克罐装' },
                    { item: '干红葡萄酒 (可选，或牛肉高汤)', amount: '120毫升' },
                    { item: '肉桂棒', amount: '1根' },
                    { item: '无盐黄油', amount: '100克' },
                    { item: '中筋面粉', amount: '100克' },
                    { item: '全脂牛奶', amount: '1升' },
                    { item: '大鸡蛋', amount: '2个' },
                    { item: '帕尔马干酪，新鲜磨碎', amount: '100克' }
                ],
                instructions: [
                    '大锅热油，炒香洋葱。',
                    '加蒜末，再炒一分钟。',
                    '放肉末炒散，炒到金黄。',
                    '把多余的油倒掉。',
                    '加番茄、红酒、桂皮、月桂叶、盐和胡椒。',
                    '煮开后小火炖20-45分钟。',
                    '炖好后取出桂皮和月桂叶。',
                    '另起锅煮意面，煮到有嚼劲。',
                    '沥干水，趁热拌入鸡蛋和芝士。',
                    '小锅融化黄油，加面粉炒香。',
                    '慢慢加牛奶，边加边搅，别结块。',
                    '搅到酱汁浓稠，像奶油一样。',
                    '离火，拌入鸡蛋、芝士、肉豆蔻、盐和胡椒。',
                    '搅匀，让酱汁滑滑的。',
                    '烤箱预热180°C。',
                    '烤盘抹油，铺上意面。',
                    '再铺上肉酱，铺平。',
                    '把白酱均匀倒在肉酱上。',
                    '撒上剩下的芝士。',
                    '烤35-45分钟，直到金黄冒泡。',
                    '取出放15-20分钟再切。',
                    '这样切出来才漂亮，好吃！'
                ]
            },
            'ms': {
                title: 'Lasagna Yunani (Pastitsio)',
                description: 'Pastitsio ni macam lasagna versi Greek, memang sedap sangat! Ada lapisan daging, pasta tiub, dengan sos béchamel yang berkrim. Sesuai sangat untuk makan ramai-ramai.',
                ingredients: [
                    { item: 'Daging lembu atau kambing cincang tanpa lemak', amount: '500g' },
                    { item: 'Bucatini atau makaroni tebal', amount: '300g' },
                    { item: 'Bawang besar, dicincang halus', amount: '1 biji' },
                    { item: 'Ulas bawang putih, dicincang', amount: '3 ulas' },
                    { item: 'Tomato hancur', amount: '400g tin' },
                    { item: 'Wain merah kering (pilihan, atau stok daging lembu)', amount: '120ml' },
                    { item: 'Batang kayu manis', amount: '1 batang' },
                    { item: 'Mentega tanpa garam', amount: '100g' },
                    { item: 'Tepung serbaguna', amount: '100g' },
                    { item: 'Susu penuh krim', amount: '1 liter' },
                    { item: 'Telur besar', amount: '2 biji' },
                    { item: 'Keju Parmesan, diparut segar', amount: '100g' }
                ],
                instructions: [
                    'Mula-mula, buat sos daging. Panaskan minyak zaitun, tumis bawang sampai lembut, lepas tu masukkan bawang putih.',
                    'Masukkan daging cincang, goreng sampai perang. Buang minyak lebihan.',
                    'Campurkan tomato hancur, wain merah (kalau guna), kayu manis, daun salam, garam, dan lada hitam.',
                    'Didihkan, lepas tu renehkan perlahan-lahan 20-45 minit. Buang kayu manis dan daun salam.',
                    'Sementara tu, masak pasta bucatini atau makaroni dalam air garam sampai al dente. Toskan.',
                    'Gaulkan pasta panas dengan telur dan keju Parmesan. Ini nak bagi pasta melekat elok.',
                    'Sekarang, buat sos béchamel. Cairkan mentega, masukkan tepung, kacau jadi roux.',
                    'Tuang susu sikit-sikit, kacau sampai sos pekat dan berkrim, dalam 5-7 minit.',
                    'Angkat béchamel dari api. Masukkan telur, keju Parmesan, buah pala, garam, dan lada hitam. Kacau sebati.',
                    'Panaskan oven 180°C. Gris loyang 9x13 inci. Susun pasta di bawah loyang.',
                    'Lapisan seterusnya sos daging, ratakan elok-elok.',
                    'Tuang sos béchamel atas daging, pastikan semua tertutup. Tabur baki keju Parmesan.',
                    'Bakar 35-45 minit sampai atasnya perang keemasan dan berbuih.',
                    'Keluarkan dari oven, biarkan rehat 15-20 minit sebelum potong dan hidang. Barulah cantik potongannya!'
                ]
            }
        }
    },
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
            'Finely mince lamb shoulder and fat together, or use a grinder.',
            'In a big bowl, mix the minced lamb and fat with garlic, chili powders, cumin, coriander, salt, and pepper.',
            'Add cold water and mix vigorously by hand for 5-7 minutes until sticky.',
            'Cover and chill the mixture for at least 2 hours, or overnight, for best flavor.',
            'Stuff into casings for links, or form into thick patties if going casing-free.',
            'Heat a grill or skillet over medium heat. Cook sausages 8-12 minutes, turning, until browned and cooked through.',
            'Serve hot with crusty bread, a fresh salad, or a dollop of harissa.'
        ],
        tags: ['Moroccan', 'Dinner', 'Non-Vegetarian'],
        translations: {
            'zh-CN': {
                title: 'Merguez 香肠',
                description: '摩洛哥的Merguez香肠，香料味足，辣辣的，烤着吃煎着吃都特别香！',
                ingredients: [
                    { item: '去骨羊肩肉', amount: '500克（精细绞碎）' },
                    { item: '羊油（或牛油）', amount: '100克（精细绞碎）' },
                    { item: '大蒜瓣', amount: '4瓣（大，切末）' },
                    { item: '克什米尔红辣椒粉', amount: '2汤匙' },
                    { item: '孜然粉', amount: '1.5茶匙' },
                    { item: '香菜粉', amount: '1茶匙' },
                    { item: '辣红辣椒粉（或卡宴辣椒粉）', amount: '1茶匙（根据口味调整）' },
                    { item: '盐', amount: '1.5茶匙（或根据口味）' },
                    { item: '黑胡椒粉', amount: '0.5茶匙（现磨）' },
                    { item: '冷水', amount: '2-3汤匙' },
                    { item: '天然羊肠衣', amount: '2米（浸泡并冲洗，可选）' }
                ],
                instructions: [
                    '羊肉和羊油绞碎，或切碎。',
                    '大碗里放肉，加蒜末、辣椒粉、孜然、香菜、盐和胡椒。',
                    '加冷水，用手抓匀5-7分钟。',
                    '盖好放冰箱，冷藏至少2小时，最好过夜。',
                    '肠衣冲洗好，套在灌肠机上。',
                    '把肉馅灌进去，别有气泡。',
                    '扭成10-12厘米长的香肠。',
                    '不灌肠就做成小肉饼。',
                    '烤盘或平底锅中火加热，抹点油。',
                    '香肠或肉饼煎8-12分钟。',
                    '翻面，煎到两面金黄，熟透。',
                    '趁热吃，配面包、沙拉或辣酱都行。'
                ]
            },
            'ms': {
                title: 'Sosej Merguez',
                description: 'Sosej kambing ni memang bersemangat dan pedas, penuh rempah ratus. Selalu orang panggang atau goreng, memang rasa Afrika Utara sangat!',
                ingredients: [
                    { item: 'Bahu Kambing Tanpa Tulang', amount: '500g (dicincang halus atau dikisar)' },
                    { item: 'Lemak Kambing (atau Lemak Daging Lembu)', amount: '100g (dicincang halus atau dikisar)' },
                    { item: 'Ulas Bawang Putih', amount: '4 (besar, dicincang)' },
                    { item: 'Serbuk Cili Merah Kashmiri', amount: '2 sudu besar' },
                    { item: 'Serbuk Jintan Manis', amount: '1.5 sudu kecil' },
                    { item: 'Serbuk Ketumbar', amount: '1 sudu kecil' },
                    { item: 'Serbuk Cili Merah Pedas (atau Cayenne)', amount: '1 sudu kecil (sesuaikan rasa)' },
                    { item: 'Garam', amount: '1.5 sudu kecil (atau secukup rasa)' },
                    { item: 'Lada Hitam', amount: '0.5 sudu kecil (baru dikisar)' },
                    { item: 'Air Sejuk', amount: '2-3 sudu besar' },
                    { item: 'Sarung Usus Kambing Asli', amount: '2 meter (direndam dan dibilas, pilihan)' }
                ],
                instructions: [
                    'Kalau daging belum cincang, cincang halus bahu kambing dan lemak kambing. Boleh guna mesin atau cincang tangan.',
                    'Dalam mangkuk besar, campurkan daging kambing, lemak, bawang putih, serbuk cili Kashmiri, jintan manis, ketumbar, cili pedas, garam, dan lada hitam.',
                    'Masukkan air sejuk, gaul kuat-kuat 5-7 minit sampai melekit. Ini penting untuk tekstur sosej.',
                    'Tutup mangkuk, sejukkan adunan sekurang-kurangnya 2 jam, atau semalaman lagi bagus.',
                    'Kalau guna sarung usus, bilas bersih dan sumbat adunan kambing. Pusing atau ikat jadi pautan 10-12 cm.',
                    'Kalau tak guna sarung usus, bentukkan jadi bebola daging kecil dan tebal.',
                    'Panaskan kuali panggang atau kuali tebal dengan sedikit minyak. Masak sosej (atau bebola daging) 8-12 minit.',
                    'Balik-balikkan sampai perang keemasan dan masak elok.',
                    'Hidangkan sosej Merguez panas-panas dengan roti, salad segar, atau harissa.'
                ]
            }
        }
    },
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
            'Slice beef super thin against the grain. Partially freeze it first for easier slicing!',
            'Whisk together soy sauce, brown sugar, sesame oil, garlic, ginger, grated pear, and pepper in a large bowl.',
            'Add beef, sliced onion, and half the green onions to the marinade. Mix well and chill for 1-4 hours, or overnight.',
            'Heat a skillet or grill pan over medium-high heat. A little oil if needed, but beef fat usually does the trick.',
            'Cook marinated beef in a single layer, in batches if necessary, to get a good sear.',
            'Cook 2-3 minutes per side until caramelized and tender. Don\'t overcook!',
            'Transfer to a platter. Garnish with remaining green onions and sesame seeds. Serve with rice and banchan.'
        ],
        tags: ['Korean', 'Dinner', 'Non-Vegetarian'],
        translations: {
            'zh-CN': {
                title: '韩式烤肉',
                description: '韩式烤肉，薄薄的牛肉片腌得甜咸入味，烤出来又香又嫩，配米饭最棒了！',
                ingredients: [
                    { item: '牛里脊或牛眼肉，逆纹切薄片', amount: '500克' },
                    { item: '酱油', amount: '1/2杯' },
                    { item: '红糖', amount: '2汤匙' },
                    { item: '香油', amount: '2汤匙' },
                    { item: '蒜末', amount: '5瓣' },
                    { item: '姜末', amount: '1汤匙' },
                    { item: '梨（博斯克或安茹品种），磨碎', amount: '1/2个中等大小' },
                    { item: '黄洋葱，切薄片', amount: '1/2个中等大小' },
                    { item: '小葱，切段', amount: '3根' },
                    { item: '现磨黑胡椒粉', amount: '1/2茶匙' },
                    { item: '烤芝麻', amount: '1茶匙' }
                ],
                instructions: [
                    '牛肉逆纹切薄片。',
                    '冷冻30分钟更好切。',
                    '大碗里放酱油、红糖、香油、蒜末、姜末、梨泥和胡椒。',
                    '搅匀直到糖化开。',
                    '放牛肉片、洋葱片和一半小葱。',
                    '用手抓匀，让每片肉都沾上腌料。',
                    '盖好冷藏至少1小时，最好过夜。',
                    '大煎锅或烤盘中高火加热。',
                    '锅里可以抹点油。',
                    '牛肉分批平铺，别堆太多。',
                    '每面煎2-3分钟，煎到焦糖色。',
                    '别煎过头，不然肉会老。',
                    '盛盘，撒上剩下的小葱和芝麻。',
                    '趁热配米饭和韩式小菜吃。'
                ]
            },
            'ms': {
                title: 'Bulgogi',
                description: 'Bulgogi ni hidangan Korea yang terkenal, daging lembu hiris nipis diperap manis-savuri. Bakar atau goreng sampai lembut, memang kegemaran ramai!',
                ingredients: [
                    { item: 'Daging Sirloin atau Ribeye, dihiris nipis melawan urat', amount: '500g' },
                    { item: 'Kicap Cair', amount: '1/2 cawan' },
                    { item: 'Gula Perang', amount: '2 sudu besar' },
                    { item: 'Minyak Bijan', amount: '2 sudu besar' },
                    { item: 'Bawang Putih, dicincang', amount: '5 ulas' },
                    { item: 'Halia, diparut', amount: '1 sudu besar' },
                    { item: 'Buah Pir (Bosc atau Anjou), diparut', amount: '1/2 biji sederhana' },
                    { item: 'Bawang Holland, dihiris nipis', amount: '1/2 biji sederhana' },
                    { item: 'Daun Bawang, dicincang', amount: '3 batang' },
                    { item: 'Lada Hitam, baru dikisar', amount: '1/2 sudu kecil' },
                    { item: 'Biji Bijan Bakar', amount: '1 sudu kecil' }
                ],
                instructions: [
                    'Hiris daging lembu nipis-nipis melawan urat. Kalau susah, bekukan sikit daging 30 minit dulu.',
                    'Dalam mangkuk besar, campurkan kicap cair, gula perang, minyak bijan, bawang putih, halia, pir parut, dan lada hitam. Kacau sampai gula larut.',
                    'Masukkan daging lembu hiris, bawang holland hiris, dan separuh daun bawang cincang ke dalam perapan.',
                    'Gaul rata dengan tangan. Tutup, sejukkan sekurang-kurangnya 1 jam, atau semalaman lagi sedap.',
                    'Panaskan kuali besar atau kuali panggang atas api sederhana-tinggi. Boleh letak sikit minyak kalau perlu.',
                    'Masukkan daging lembu yang diperap dalam satu lapisan. Jangan sumbat banyak sangat nanti daging kukus.',
                    'Masak bulgogi 2-3 minit setiap sisi sampai cantik karamel, lembut, dan masak elok. Jangan terlebih masak nanti liat.',
                    'Pindahkan bulgogi yang dah masak ke pinggan. Tabur baki daun bawang dan biji bijan bakar.',
                    'Hidangkan segera dengan nasi kukus panas dan banchan Korea kegemaran.'
                ]
            }
        }
    },
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
            'Slice pork thinly. Marinate with fish sauce, sugar, garlic, shallot, and lemongrass. Chill for 30 mins to 2 hours.',
            'Whisk fish sauce, sugar, vinegar, lime juice, and warm water for Nuoc Cham. Add garlic and chili if you like it spicy!',
            'Soak and chop wood ear mushrooms and glass noodles. Mix with ground pork, eggs, fish sauce, sugar, and pepper. Steam until firm, then slice.',
            'Rinse broken rice until clear. Cook with equal parts water in a rice cooker or pot. Let it steam for 10-15 minutes after cooking.',
            'Grill marinated pork over medium-high heat for 3-4 minutes per side until caramelized and cooked through.',
            'Fry eggs sunny-side up in a non-stick pan, keeping those yolks runny!',
            'Plate broken rice, grilled pork, egg meatloaf, and a fried egg. Garnish with cucumber and tomato.',
            'Drizzle with Nuoc Cham or serve on the side. Enjoy this classic Vietnamese dish right away!'
        ],
        tags: ['Vietnamese', 'Dinner', 'Non-Vegetarian'],
        translations: {
            'zh-CN': {
                title: '越南碎米饭 (Com Tam)',
                description: '越南碎米饭，有烤猪肉、肉饼和煎蛋，再淋上酸甜鱼露，味道丰富，是街头小吃里的明星！',
                ingredients: [
                    { item: '碎米（或短粒米）', amount: '500g' },
                    { item: '猪肩肉或五花肉，切薄片', amount: '500g' },
                    { item: '鱼露', amount: '100ml' },
                    { item: '砂糖', amount: '50g' },
                    { item: '大蒜，切末', amount: '6瓣' },
                    { item: '青葱，切末', amount: '2个中等大小' },
                    { item: '香茅，切碎', amount: '2根' },
                    { item: '大鸡蛋', amount: '6个' },
                    { item: '猪绞肉', amount: '200g' },
                    { item: '干木耳', amount: '10g' },
                    { item: '粉丝', amount: '20g' },
                    { item: '白醋', amount: '50ml' }
                ],
                instructions: [
                    '猪肉切薄片。',
                    '用鱼露、糖、蒜末、青葱末、香茅腌肉。',
                    '拌匀，冷藏至少30分钟。',
                    '碗里放鱼露、糖、白醋、青柠汁和温水。',
                    '加蒜末和辣椒（可选），搅匀。',
                    '木耳和粉丝泡软切碎。',
                    '碗里放猪绞肉、木耳、粉丝、鸡蛋、鱼露、糖和胡椒。',
                    '拌匀，放抹油的盘里蒸20-25分钟。',
                    '放凉切块。',
                    '碎米淘洗干净。',
                    '电饭煲或锅里，米水1:1煮饭。',
                    '煮好再焖10-15分钟。',
                    '烤架或烤盘中高火预热。',
                    '猪肉片每面烤3-4分钟，烤熟。',
                    '不粘锅中火热油，煎4个太阳蛋。',
                    '盘里盛米饭，摆上烤猪肉、肉饼和煎蛋。',
                    '用黄瓜片和番茄片装饰。',
                    '淋上鱼露蘸酱，或放旁边蘸着吃。',
                    '趁热享用这道越南美味！'
                ]
            },
            'ms': {
                title: 'Com Tam (Nasi Hancur Vietnam)',
                description: 'Com Tam ni makanan jalanan Vietnam yang meriah, ada nasi hancur, daging babi panggang, bebola daging telur, dan telur goreng. Memang padu dengan sos nuoc cham!',
                ingredients: [
                    { item: 'Nasi hancur (atau beras biji pendek)', amount: '500g' },
                    { item: 'Bahu atau perut babi, dihiris nipis', amount: '500g' },
                    { item: 'Sos ikan (nuoc mam)', amount: '100ml' },
                    { item: 'Gula pasir', amount: '50g' },
                    { item: 'Bawang putih, dicincang', amount: '6 ulas' },
                    { item: 'Bawang merah, dicincang', amount: '2 biji sederhana' },
                    { item: 'Serai, dicincang halus', amount: '2 batang' },
                    { item: 'Telur besar', amount: '6 biji' },
                    { item: 'Daging babi cincang', amount: '200g' },
                    { item: 'Cendawan telinga kayu kering', amount: '10g' },
                    { item: 'Mi suhun (vermicelli)', amount: '20g' },
                    { item: 'Cuka putih', amount: '50ml' }
                ],
                instructions: [
                    'Mula-mula, sediakan daging babi panggang. Hiris nipis, perap dengan sos ikan, gula, bawang putih, bawang merah, dan serai.',
                    'Gaul rata, sejukkan 30 minit, atau 2-3 jam lagi bagus.',
                    'Buat Nuoc Cham. Campurkan sos ikan, gula, cuka putih, jus limau nipis, dan air suam. Masukkan bawang putih dan cili padi cincang. Kacau sampai gula larut.',
                    'Sediakan Cha Trung (bebola daging telur kukus). Rendam cendawan telinga kayu dan mi suhun sampai lembut. Toskan dan cincang halus.',
                    'Campurkan daging babi cincang, cendawan, mi, telur, sos ikan, gula, dan lada hitam. Gaul rata.',
                    'Kukus dalam pinggan yang digris 20-25 minit sampai pejal. Biarkan sejuk sikit, lepas tu hiris.',
                    'Masak nasi hancur. Bilas nasi bersih-bersih. Masak dalam periuk nasi dengan nisbah air 1:1. Lepas masak, biarkan mengukus 10-15 minit lagi.',
                    'Panggang daging babi. Panaskan gril, panggang daging babi 3-4 minit setiap sisi sampai perang keemasan dan masak elok.',
                    'Goreng telur. Panaskan minyak, goreng 4 biji telur mata kerbau. Kuning telur biar cair sikit, baru cantik Com Tam.',
                    'Susun hidangan. Letak nasi hancur, susun daging babi panggang, bebola daging telur, dan telur goreng atasnya. Hias dengan timun dan tomato.',
                    'Tuang Nuoc Cham atas hidangan atau hidang di sisi. Nikmati Com Tam panas-panas!'
                ]
            }
        }
    },
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
            'Boil lobsters in heavily salted water for 10-12 minutes until bright red. Plunge them into an ice bath to stop cooking.',
            'Extract the meat from cooled lobsters, then roughly chop it into bite-sized pieces.',
            'Mix mayo, celery, lemon juice, chives, salt, and pepper in a bowl.',
            'Gently fold the lobster meat into the mayo mixture. Taste and adjust seasoning.',
            'Brush hot dog buns with melted butter and toast them in a skillet until golden brown.',
            'Fill the toasted buns generously with the lobster salad. Serve immediately.'
        ],
        tags: ['American', 'Dinner', 'Non-Vegetarian'],
        translations: {
            'zh-CN': {
                title: '新英格兰龙虾卷',
                description: '新英格兰龙虾卷，鲜甜的龙虾肉配上黄油烤过的面包，一口咬下去，满嘴都是大海的味道，夏天吃最舒服了！',
                ingredients: [
                    { item: '熟龙虾肉', amount: '450g (来自2只500-600g龙虾)' },
                    { item: '蛋黄酱', amount: '1/2杯 (120ml)' },
                    { item: '芹菜，切小丁', amount: '2根' },
                    { item: '新鲜柠檬汁', amount: '1汤匙 (15ml)' },
                    { item: '新鲜细香葱，切碎（或新鲜欧芹）', amount: '2汤匙' },
                    { item: '无盐黄油，融化', amount: '4汤匙 (60g)' },
                    { item: '热狗面包（最好是顶部开口的）', amount: '4个' },
                    { item: '盐', amount: '1/2茶匙 (或根据口味)' },
                    { item: '黑胡椒（现磨，或根据口味）', amount: '1/4茶匙' },
                    { item: '红椒粉（用于装饰，可选）', amount: '少许' }
                ],
                instructions: [
                    '大锅盐水烧开，放龙虾煮10-12分钟。',
                    '捞出放冰水里，停住烹饪。',
                    '龙虾凉了，拧下钳子和尾巴。',
                    '取出钳子和关节的肉。',
                    '尾巴切开，去肠线，取肉。',
                    '龙虾肉粗略切块。',
                    '碗里放蛋黄酱、芹菜丁、柠檬汁、细香葱、盐和胡椒。',
                    '搅匀。',
                    '龙虾肉轻轻拌入蛋黄酱，别搅太多。',
                    '尝尝味道，不够再加调料。',
                    '大煎锅或烤盘中火加热。',
                    '热狗面包外侧抹黄油。',
                    '黄油面朝下，每面烤2-3分钟，烤到金黄酥脆。',
                    '小心掰开面包，塞满龙虾沙拉。',
                    '撒点红椒粉或细香葱装饰。',
                    '配薯片或沙拉，趁热吃！'
                ]
            },
            'ms': {
                title: 'Roti Gulung Udang Kara New England',
                description: 'Roti Gulung Udang Kara New England ni hidangan musim panas Amerika yang wajib cuba. Isi udang kara yang sedap, diperasakan ringan, dalam roti bakar mentega. Memang rasa mewah tepi pantai!',
                ingredients: [
                    { item: 'Isi udang kara yang telah dimasak', amount: '450g (dari 2 ekor udang kara 500-600g)' },
                    { item: 'Mayonis', amount: '1/2 cawan (120ml)' },
                    { item: 'Saderi, dipotong dadu halus', amount: '2 batang' },
                    { item: 'Jus lemon segar', amount: '1 sudu besar (15ml)' },
                    { item: 'Daun kucai segar, dicincang halus (atau pasli segar)', amount: '2 sudu besar' },
                    { item: 'Mentega tanpa garam, dicairkan', amount: '4 sudu besar (60g)' },
                    { item: 'Roti hot dog (lebih disukai yang belah atas)', amount: '4 biji' },
                    { item: 'Garam', amount: '1/2 sudu kecil (atau secukup rasa)' },
                    { item: 'Lada hitam (baru dikisar, atau secukup rasa)', amount: '1/4 sudu kecil' },
                    { item: 'Paprika (untuk hiasan, pilihan)', amount: 'Secubit' }
                ],
                instructions: [
                    'Kalau guna udang kara hidup, didihkan air garam banyak-banyak. Masukkan udang kara, rebus 10-12 minit sampai merah terang.',
                    'Angkat, masukkan dalam air ais untuk hentikan masak.',
                    'Bila udang kara dah sejuk, putar tangkai dan ekornya. Pecahkan tangkai dan buku jari untuk keluarkan isi.',
                    'Belah ekor, buang urat gelap, lepas tu keluarkan isi. Cincang kasar isi udang kara saiz gigitan.',
                    'Dalam mangkuk sederhana, campurkan mayonis, saderi dadu halus, jus lemon, daun kucai (atau pasli), garam, dan lada hitam. Gaul rata.',
                    'Lipat perlahan-lahan isi udang kara cincang ke dalam campuran mayonis. Jangan gaul kuat sangat nanti udang kara hancur.',
                    'Rasa, kalau perlu tambah perasa.',
                    'Panaskan kuali besar atas api sederhana. Sapu mentega cair pada luar roti hot dog.',
                    'Bakar roti 2-3 minit setiap sisi sampai perang keemasan dan rangup.',
                    'Buka roti bakar, isi dengan salad udang kara yang dah siap.',
                    'Hidangkan segera, boleh tabur paprika atau kucai, dengan kerepek kentang atau salad hijau. Memang lengkap rasa New England!'
                ]
            }
        }
    },
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
            'Rinse rice, then simmer it with water, cinnamon sticks, cloves, and lemon zest until the water is mostly absorbed.',
            'Stir in whole milk, sugar, and salt. Bring to a gentle simmer, stirring often, until creamy and thickened.',
            'Remove cinnamon, cloves, and lemon zest. Stir in condensed milk, vanilla, and raisins.',
            'Cook for another 5-7 minutes, stirring constantly, until the pudding is rich and thick. Let it rest.',
            'Serve warm or chilled, dusted generously with ground cinnamon.'
        ],
        tags: ['Peruvian', 'Dessert', 'Vegetarian'],
        translations: {
            'zh-CN': {
                title: 'Arroz con Leche (西班牙牛奶米布丁)',
                description: '秘鲁的牛奶米布丁，香甜软糯，带着肉桂和柑橘的香气，是家里常做的甜点，暖心又美味！',
                ingredients: [
                    { item: '短粒白米（例如：阿博里奥米或戈宾多博格米）', amount: '1 杯 (200克)' },
                    { item: '水', amount: '2 杯 (480毫升)' },
                    { item: '全脂牛奶', amount: '4 杯 (960毫升)' },
                    { item: '炼乳', amount: '1 罐 (397克)' },
                    { item: '砂糖', amount: '1/2 杯 (100克)' },
                    { item: '肉桂棒', amount: '2 根 (3英寸)' },
                    { item: '丁香', amount: '4-5 颗' },
                    { item: '柠檬皮条', amount: '1 条 (来自1/2个柠檬)' },
                    { item: '香草精', amount: '1 茶匙' },
                    { item: '盐', amount: '1/4 茶匙' },
                    { item: '金色葡萄干', amount: '1/2 杯 (75克)' },
                    { item: '肉桂粉', amount: '用于装饰' }
                ],
                instructions: [
                    '大米淘洗干净。',
                    '厚底锅里放大米、水、桂皮、丁香和柠檬皮。',
                    '中高火煮开，转小火盖盖，炖10-12分钟。',
                    '水快干了，倒入牛奶，加糖和盐。',
                    '轻轻搅匀，转中低火煮开。',
                    '边煮边搅，别粘锅底。',
                    '炖20-25分钟，米饭变软，布丁浓稠。',
                    '取出桂皮、丁香和柠檬皮。',
                    '拌入炼乳、香草精和葡萄干。',
                    '再煮5-7分钟，边搅边让味道融合。',
                    '离火，盖盖焖10-15分钟。',
                    '温热或冷藏后盛碗。',
                    '撒上肉桂粉，或烤椰丝，开吃！'
                ]
            },
            'ms': {
                title: 'Arroz con Leche (Puding Nasi Susu Sepanyol)',
                description: 'Puding nasi berkrim ni memang kegemaran di rumah-rumah Peru, manis kayu manis dan sitrus yang menggamit memori. Pencuci mulut ringkas tapi elegan, sesuai untuk semua majlis.',
                ingredients: [
                    { item: 'Beras putih biji pendek (cth: Arborio atau Gobindobhog)', amount: '1 cawan (200g)' },
                    { item: 'Air', amount: '2 cawan (480ml)' },
                    { item: 'Susu penuh krim', amount: '4 cawan (960ml)' },
                    { item: 'Susu pekat manis', amount: '1 tin (397g)' },
                    { item: 'Gula pasir', amount: '1/2 cawan (100g)' },
                    { item: 'Batang kayu manis', amount: '2 batang (3 inci)' },
                    { item: 'Bunga cengkih', amount: '4-5 biji' },
                    { item: 'Jalur kulit lemon', amount: '1 jalur (dari 1/2 lemon)' },
                    { item: 'Ekstrak vanila', amount: '1 sudu teh' },
                    { item: 'Garam', amount: '1/4 sudu teh' },
                    { item: 'Kismis emas', amount: '1/2 cawan (75g)' },
                    { item: 'Serbuk kayu manis', amount: 'Untuk hiasan' }
                ],
                instructions: [
                    'Bilas beras bersih-bersih. Dalam periuk tebal, campurkan beras, 2 cawan air, kayu manis, bunga cengkih, dan kulit lemon.',
                    'Didihkan, lepas tu kecilkan api, tutup, reneh 10-12 minit sampai air serap.',
                    'Bila air dah serap, tuang susu penuh krim, masukkan gula dan garam. Kacau perlahan.',
                    'Besarkan api sikit ke sederhana rendah, biarkan mendidih perlahan, kacau sekali-sekala jangan bagi melekat.',
                    'Teruskan reneh, kacau selalu (terutama bawah periuk), 20-25 minit sampai nasi lembut dan pekat berkrim.',
                    'Buang kayu manis, bunga cengkih, dan kulit lemon.',
                    'Kacau masuk susu pekat manis, esen vanila, dan kismis emas.',
                    'Masak lagi 5-7 minit, kacau selalu, biar rasa sebati dan puding makin pekat.',
                    'Angkat periuk dari api. Tutup, biarkan Arroz con Leche rehat 10-15 minit. Nanti lagi sedap dan pekat.',
                    'Hidangkan panas atau sejuk dalam mangkuk. Tabur serbuk kayu manis sebelum hidang. Boleh juga tabur kelapa parut panggang.'
                ]
            }
        }
    },
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
            'Heat Niter Kibbeh in a skillet, sear beef strips until browned, then set aside.',
            'Sauté onion, garlic, ginger, and chili in the same pan until softened.',
            'Stir in Berbere spice, then return the beef to the pan. Toss to coat.',
            'Cook for 5-7 minutes until beef is tender and flavors meld. Season with salt.',
            'Serve immediately, traditionally with injera.'
        ],
        tags: ['Ethiopian', 'Dinner', 'Non-Vegetarian'],
        translations: {
            'zh-CN': {
                title: 'Zilzil Tibs (埃塞俄比亚香辣牛肉条)',
                description: '埃塞俄比亚的香辣牛肉条，用香料黄油和Berbere香料炒出来，香气扑鼻，配英杰拉饼吃最地道！',
                ingredients: [
                    { item: '牛里脊或牛柳，切成薄条', amount: '500克' },
                    { item: '香料澄清黄油 (Niter Kibbeh)', amount: '4 汤匙' },
                    { item: 'Berbere香料混合物', amount: '2 汤匙' },
                    { item: '红洋葱，切薄片', amount: '1 个大' },
                    { item: '大蒜，切末', amount: '4 瓣' },
                    { item: '新鲜姜，磨碎', amount: '1 汤匙' },
                    { item: '青辣椒，切碎（根据口味调整）', amount: '1-2 个' }
                ],
                instructions: [
                    '大煎锅热2勺香料黄油。',
                    '牛肉条快速煎到金黄，取出。',
                    '锅里再加香料黄油，炒软洋葱。',
                    '加蒜、姜和青辣椒炒2分钟。',
                    '拌入Berbere香料，炒香1分钟。',
                    '牛肉倒回锅里。',
                    '搅匀，让牛肉沾满香料。',
                    '煮5-7分钟，牛肉变软，入味。',
                    '加盐调味，趁热配英杰拉饼吃。'
                ]
            },
            'ms': {
                title: 'Zilzil Tibs (Daging Lembu Goreng Pedas Ethiopia)',
                description: 'Hidangan tumis Ethiopia yang sedap ni ada hirisan daging lembu lembut, ditumis dengan rempah aromatik, Niter Kibbeh, dan campuran Berbere yang bersemangat. Selalu makan dengan injera.',
                ingredients: [
                    { item: 'Daging batang pinang atau tenderloin, dihiris nipis menjadi jalur', amount: '500g' },
                    { item: 'Mentega jernih berempah (Niter Kibbeh)', amount: '4 sudu besar' },
                    { item: 'Campuran Rempah Berbere', amount: '2 sudu besar' },
                    { item: 'Bawang merah, dihiris nipis', amount: '1 biji besar' },
                    { item: 'Bawang putih, dicincang', amount: '4 ulas' },
                    { item: 'Halia segar, diparut', amount: '1 sudu besar' },
                    { item: 'Cili hijau, dicincang halus (sesuaikan mengikut rasa)', amount: '1-2 biji' }
                ],
                instructions: [
                    'Panaskan 2 sudu besar Niter Kibbeh dalam kuali besar atas api sederhana tinggi.',
                    'Masukkan hirisan daging lembu, goreng cepat sampai perang semua sisi. Angkat, ketepikan.',
                    'Dalam kuali yang sama, masukkan baki Niter Kibbeh. Tumis bawang merah sampai lembut.',
                    'Masukkan bawang putih, halia, dan cili hijau, tumis 2 minit.',
                    'Kacau masuk campuran rempah Berbere, masak seminit lagi sampai wangi.',
                    'Masukkan semula daging lembu yang dah digoreng ke dalam kuali.',
                    'Gaulkan semua bahan, pastikan daging lembu bersalut rempah. Masak 5-7 minit sampai daging lembut dan rasa sebati.',
                    'Perasakan dengan garam secukup rasa. Hidangkan segera, biasanya dengan injera.'
                ]
            },
            'hi': {
                title: 'ज़िलज़िल टिब्स',
                description: 'एक प्रिय इथियोपियाई स्टिर-फ्राई जिसमें सुगंधित मसालों, नाइटर किब्बे और एक जीवंत बेरबेरे मिश्रण के साथ तले हुए बीफ़ के कोमल स्ट्रिप्स होते हैं, जिसे अक्सर इंजेरा के साथ परोसा जाता है।',
                ingredients: [
                    { item: 'बीफ़ सिरोलिन या टेंडरलॉइन, पतले स्ट्रिप्स में कटा हुआ', amount: '500g' },
                    { item: 'मसालेदार स्पष्ट मक्खन (नाइटर किब्बे)', amount: '4 बड़े चम्मच' },
                    { item: 'बेरबेरे मसाला मिश्रण', amount: '2 बड़े चम्मच' },
                    { item: 'लाल प्याज, पतला कटा हुआ', amount: '1 बड़ा' },
                    { item: 'लहसुन, बारीक कटा हुआ', amount: '4 कलियाँ' },
                    { item: 'ताजा अदरक, कद्दूकस किया हुआ', amount: '1 बड़ा चम्मच' },
                    { item: 'हरी मिर्च, बारीक कटी हुई (स्वाद अनुसार समायोजित करें)', amount: '1-2' }
                ],
                instructions: [
                    'एक बड़ी कड़ाही या बर्तन में मध्यम-तेज आंच पर 2 बड़े चम्मच नाइटर किब्बे गरम करें।',
                    'बीफ़ स्ट्रिप्स डालें और सभी तरफ से भूरा होने तक जल्दी से भूनें, फिर पैन से निकालकर एक तरफ रख दें।',
                    'उसी पैन में बचा हुआ नाइटर किब्बे डालें, फिर लाल प्याज को नरम होने तक भूनें, उसके बाद लहसुन, अदरक और हरी मिर्च को 2 मिनट तक भूनें।',
                    'बेरबेरे मसाला मिश्रण डालकर एक और मिनट तक सुगंधित होने तक पकाएं, फिर भुने हुए बीफ़ को पैन में वापस डालें।',
                    'सब कुछ एक साथ मिलाएं, सुनिश्चित करें कि बीफ़ मसालों से अच्छी तरह लिपटा हुआ है, और 5-7 मिनट तक पकाएं जब तक कि बीफ़ नरम न हो जाए और स्वाद मिल न जाए।',
                    'स्वाद अनुसार नमक डालें और तुरंत परोसें, पारंपरिक रूप से इंजेरा के साथ।'
                ]
            },
            'bn': {
                title: 'জিলজিল টিবস',
                description: 'একটি প্রিয় ইথিওপিয়ান স্ট্রি-ফ্রাই যেখানে সুগন্ধি মশলা, নাইটার কিব্বে এবং একটি প্রাণবন্ত বেরবেরে মিশ্রণের সাথে ভাজা গরুর মাংসের নরম ফালি থাকে, যা প্রায়শই ইনজেরার সাথে পরিবেশন করা হয়।',
                ingredients: [
                    { item: 'গরুর মাংসের সিরলইন বা টেন্ডারলইন, পাতলা ফালি করে কাটা', amount: '500g' },
                    { item: 'মশলাযুক্ত পরিষ্কার মাখন (নাইটার কিব্বে)', amount: '4 টেবিল চামচ' },
                    { item: 'বেরবেরে মশলা মিশ্রণ', amount: '2 টেবিল চামচ' },
                    { item: 'লাল পেঁয়াজ, পাতলা করে কাটা', amount: '1টি বড়' },
                    { item: 'রসুন, কুচি করা', amount: '4 কোয়া' },
                    { item: 'তাজা আদা, গ্রেট করা', amount: '1 টেবিল চামচ' },
                    { item: 'কাঁচা লঙ্কা, মিহি করে কাটা (স্বাদমতো সামঞ্জস্য করুন)', amount: '1-2টি' }
                ],
                instructions: [
                    'একটি বড় কড়াই বা পাত্রে মাঝারি-উচ্চ আঁচে 2 টেবিল চামচ নাইটার কিব্বে গরম করুন।',
                    'গরুর মাংসের ফালিগুলি যোগ করুন এবং সব দিক থেকে বাদামী হওয়া পর্যন্ত দ্রুত ভাজুন, তারপর প্যান থেকে সরিয়ে একপাশে রাখুন।',
                    'একই প্যানে বাকি নাইটার কিব্বে যোগ করুন, তারপর লাল পেঁয়াজ নরম হওয়া পর্যন্ত ভাজুন, এরপর রসুন, আদা এবং কাঁচা লঙ্কা 2 মিনিট ভাজুন।',
                    'বেরবেরে মশলা মিশ্রণ মিশিয়ে আরও এক মিনিট সুগন্ধি হওয়া পর্যন্ত রান্না করুন, তারপর ভাজা গরুর মাংস প্যানে ফিরিয়ে আনুন।',
                    'সবকিছু একসাথে মেশান, নিশ্চিত করুন যে গরুর মাংস মশলা দিয়ে ভালোভাবে আবৃত হয়েছে, এবং 5-7 মিনিট রান্না করুন যতক্ষণ না গরুর মাংস নরম হয় এবং স্বাদগুলি মিশে যায়।',
                    'স্বাদমতো লবণ দিন এবং ঐতিহ্যগতভাবে ইনজেরার সাথে অবিলম্বে পরিবেশন করুন।'
                ]
            },
            'mr': {
                title: 'झिलझिल टिब्स',
                description: 'एक आवडता इथिओपियन स्टिर-फ्राय ज्यात सुगंधी मसाले, नायटर किब्बे आणि एक ज्वलंत बेरबेरे मिश्रणासह तळलेल्या बीफच्या कोमल पट्ट्या असतात, जे अनेकदा इंजेरासोबत दिले जाते.',
                ingredients: [
                    { item: 'बीफ सिरलोईन किंवा टेंडरलॉईन, पातळ पट्ट्यांमध्ये कापलेले', amount: '500g' },
                    { item: 'मसालेदार स्पष्ट लोणी (नायटर किब्बे)', amount: '4 चमचे' },
                    { item: 'बेरबेरे मसाला मिश्रण', amount: '2 चमचे' },
                    { item: 'लाल कांदा, पातळ कापलेला', amount: '1 मोठा' },
                    { item: 'लसूण, बारीक चिरलेला', amount: '4 पाकळ्या' },
                    { item: 'ताजे आले, किसलेले', amount: '1 चमचा' },
                    { item: 'हिरवी मिरची, बारीक चिरलेली (चवीनुसार समायोजित करा)', amount: '1-2' }
                ],
                instructions: [
                    'एका मोठ्या कढईत किंवा भांड्यात मध्यम-उच्च आचेवर 2 चमचे नायटर किब्बे गरम करा.',
                    'बीफच्या पट्ट्या घाला आणि सर्व बाजूंनी तपकिरी होईपर्यंत लवकर परतून घ्या, नंतर पॅनमधून काढून बाजूला ठेवा.',
                    'त्याच पॅनमध्ये उरलेले नायटर किब्बे घाला, नंतर लाल कांदा मऊ होईपर्यंत परतून घ्या, त्यानंतर लसूण, आले आणि हिरवी मिरची 2 मिनिटे परतून घ्या.',
                    'बेरबेरे मसाला मिश्रण घालून आणखी एक मिनिट सुगंध येईपर्यंत शिजवा, नंतर परतलेले बीफ पॅनमध्ये परत घाला.',
                    'सर्वकाही एकत्र मिसळा, बीफ मसाल्यांनी चांगले लेपले आहे याची खात्री करा आणि बीफ मऊ होईपर्यंत आणि चव मिसळेपर्यंत 5-7 मिनिटे शिजवा.',
                    'चवीनुसार मीठ घाला आणि लगेच सर्व्ह करा, पारंपरिकपणे इंजेरासोबत.'
                ]
            },
            'te': {
                title: 'జిల్జిల్ టిబ్స్',
                description: 'సుగంధ ద్రవ్యాలు, నైటర్ కిబ్బే మరియు శక్తివంతమైన బెర్బెరే మిశ్రమంతో వేయించిన లేత గొడ్డు మాంసం ముక్కలతో కూడిన ఒక ప్రియమైన ఇథియోపియన్ స్టిర్-ఫ్రై, తరచుగా ఇంజెరాతో వడ్డిస్తారు.',
                ingredients: [
                    { item: 'గొడ్డు మాంసం సిర్లోయిన్ లేదా టెండర్లోయిన్, సన్నని ముక్కలుగా కట్ చేయబడింది', amount: '500g' },
                    { item: 'మసాలా దినుసులతో కూడిన నెయ్యి (నైటర్ కిబ్బే)', amount: '4 టేబుల్ స్పూన్లు' },
                    { item: 'బెర్బెరే మసాలా మిశ్రమం', amount: '2 టేబుల్ స్పూన్లు' },
                    { item: 'ఎర్ర ఉల్లిపాయ, సన్నగా తరిగినది', amount: '1 పెద్దది' },
                    { item: 'వెల్లుల్లి, తరిగినది', amount: '4 రెబ్బలు' },
                    { item: 'తాజా అల్లం, తురిమినది', amount: '1 టేబుల్ స్పూన్' },
                    { item: 'పచ్చిమిర్చి, సన్నగా తరిగినది (రుచికి తగ్గట్టు సర్దుబాటు చేయండి)', amount: '1-2' }
                ],
                instructions: [
                    'ఒక పెద్ద స్కిల్లెట్ లేదా పాత్రలో మధ్యస్థ-అధిక వేడి మీద 2 టేబుల్ స్పూన్ల నైటర్ కిబ్బే వేడి చేయండి.',
                    'గొడ్డు మాంసం ముక్కలను వేసి, అన్ని వైపులా గోధుమ రంగు వచ్చేవరకు త్వరగా వేయించి, ఆపై పాన్ నుండి తీసి పక్కన పెట్టండి.',
                    'అదే పాన్‌లో మిగిలిన నైటర్ కిబ్బే వేసి, ఎర్ర ఉల్లిపాయ మెత్తబడే వరకు వేయించి, ఆపై వెల్లుల్లి, అల్లం మరియు పచ్చిమిర్చిని 2 నిమిషాలు వేయించండి.',
                    'బెర్బెరే మసాలా మిశ్రమాన్ని కలిపి, సువాసన వచ్చే వరకు మరో నిమిషం ఉడికించి, ఆపై వేయించిన గొడ్డు మాంసాన్ని తిరిగి పాన్‌లోకి వేయండి.',
                    'అన్నింటినీ కలిపి, గొడ్డు మాంసం మసాలాతో బాగా పూత పూసిందని నిర్ధారించుకోండి మరియు గొడ్డు మాంసం మెత్తగా అయ్యే వరకు మరియు రుచులు కలిసిపోయే వరకు 5-7 నిమిషాలు ఉడికించండి.',
                    'రుచికి సరిపడా ఉప్పు వేసి, సాంప్రదాయకంగా ఇంజెరాతో వెంటనే వడ్డించండి.'
                ]
            },
            'ta': {
                title: 'ஸில்ஸில் டிப்ஸ்',
                description: 'நறுமண மசாலாப் பொருட்கள், நைட்டர் கிப்பே மற்றும் துடிப்பான பெர்பெரே கலவையுடன் வதக்கிய மென்மையான மாட்டிறைச்சி துண்டுகளைக் கொண்ட ஒரு பிரபலமான எத்தியோப்பியன் ஸ்டிர்-ஃப்ரை, இது பெரும்பாலும் இன்ஜெராவுடன் பரிமாறப்படுகிறது.',
                ingredients: [
                    { item: 'மாட்டிறைச்சி சில்லறை அல்லது டெண்டர்லோயின், மெல்லிய துண்டுகளாக நறுக்கப்பட்டது', amount: '500g' },
                    { item: 'மசாலா கலந்த தெளிந்த வெண்ணெய் (நைட்டர் கிப்பே)', amount: '4 தேக்கரண்டி' },
                    { item: 'பெர்பெரே மசாலா கலவை', amount: '2 தேக்கரண்டி' },
                    { item: 'சிவப்பு வெங்காயம், மெல்லியதாக நறுக்கப்பட்டது', amount: '1 பெரியது' },
                    { item: 'பூண்டு, பொடியாக நறுக்கப்பட்டது', amount: '4 பற்கள்' },
                    { item: 'புதிய இஞ்சி, துருவியது', amount: '1 தேக்கரண்டி' },
                    { item: 'பச்சை மிளகாய், பொடியாக நறுக்கப்பட்டது (சுவைக்கு ஏற்ப சரிசெய்யவும்)', amount: '1-2' }
                ],
                instructions: [
                    'ஒரு பெரிய வாணலி அல்லது பாத்திரத்தில் நடுத்தர-அதிக வெப்பத்தில் 2 தேக்கரண்டி நைட்டர் கிப்பேவை சூடாக்கவும்.',
                    'மாட்டிறைச்சி துண்டுகளைச் சேர்த்து, எல்லாப் பக்கங்களிலும் பழுப்பு நிறமாக மாறும் வரை விரைவாக வதக்கி, பின்னர் பாத்திரத்திலிருந்து எடுத்து தனியாக வைக்கவும்.',
                    'அதே பாத்திரத்தில் மீதமுள்ள நைட்டர் கிப்பேவைச் சேர்த்து, பின்னர் சிவப்பு வெங்காயம் மென்மையாகும் வரை வதக்கி, அதைத் தொடர்ந்து பூண்டு, இஞ்சி மற்றும் பச்சை மிளகாயை 2 நிமிடங்கள் வதக்கவும்.',
                    'பெர்பெரே மசாலா கலவையைச் சேர்த்து, நறுமணம் வரும் வரை ஒரு நிமிடம் சமைத்து, பின்னர் வதக்கிய மாட்டிறைச்சியை மீண்டும் பாத்திரத்தில் சேர்க்கவும்.',
                    'எல்லாவற்றையும் ஒன்றாகக் கலந்து, மாட்டிறைச்சி மசாலாப் பொருட்களால் நன்கு பூசப்பட்டிருப்பதை உறுதிசெய்து, மாட்டிறைச்சி மென்மையாகும் வரை மற்றும் சுவைகள் கலக்கும் வரை 5-7 நிமிடங்கள் சமைக்கவும்.',
                    'சுவைக்கு ஏற்ப உப்பு சேர்த்து, பாரம்பரியமாக இன்ஜெராவுடன் உடனடியாக பரிமாறவும்.'
                ]
            }
        }
    },
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
            'Combine minced meat, onion, tomato, herbs, aromatics, and spice blend in a large bowl.',
            'Add egg and cornflour, then knead thoroughly for 5-7 minutes until sticky.',
            'Form the mixture into thin, large patties. Optionally, press a tomato slice into the center.',
            'Shallow-fry the kebabs in hot oil for 5-7 minutes per side until golden and cooked through.',
            'Serve hot with warm naan, raita, or your favorite chutney.'
        ],
        tags: ['Pakistani', 'Dinner', 'Non-Vegetarian'],
        translations: {
            'zh-CN': {
                title: '查普利烤肉串',
                description: '巴基斯坦的查普利烤肉串，香辣有嚼劲，配馕或酸辣酱，味道特别棒！',
                ingredients: [
                    { item: '牛肉末或羊肉末 (Keema)', amount: '500克' },
                    { item: '洋葱，切碎并挤干水分', amount: '1个大' },
                    { item: '番茄，去籽并切碎', amount: '1个中等大小' },
                    { item: '新鲜香草和香料 (青辣椒、香菜叶、姜蒜酱)', amount: '2-3个青辣椒，1/4杯香菜，1汤匙酱' },
                    { item: '查普利烤肉串香料混合物 (碎香菜籽、石榴籽、孜然、红辣椒片、盐)', amount: '2汤匙' },
                    { item: '粘合剂 (鸡蛋、玉米淀粉)', amount: '1个鸡蛋，2汤匙玉米淀粉' },
                    { item: '油', amount: '用于浅炸' }
                ],
                instructions: [
                    '大碗里放肉末、洋葱、番茄、香草和香料。',
                    '加鸡蛋和玉米淀粉，揉5-7分钟。',
                    '分成等份，压成大肉饼。',
                    '中间可以放片小番茄。',
                    '大煎锅中火热油。',
                    '肉饼每面煎5-7分钟，煎到金黄熟透。',
                    '趁热配馕、雷塔或酸辣酱吃！'
                ]
            },
            'ms': {
                title: 'Chapli Kebab',
                description: 'Chapli Kebab ni kebab goreng cetek Pakistan yang terkenal. Teksturnya kasar, rasanya pedas kuat, memang sedap makan dengan naan atau chutney.',
                ingredients: [
                    { item: 'Daging Cincang Lembu atau Kambing (Keema)', amount: '500g' },
                    { item: 'Bawang, dicincang halus dan diperah kering', amount: '1 biji besar' },
                    { item: 'Tomato, dibuang biji dan dicincang halus', amount: '1 biji sederhana' },
                    { item: 'Herba Segar & Aromatik (Cili Hijau, Daun Ketumbar, Pes Halia-Bawang Putih)', amount: '2-3 biji cili hijau, 1/4 cawan daun ketumbar, 1 sudu besar pes' },
                    { item: 'Campuran Rempah Chapli Kebab (Ketumbar Hancur, Anardana, Jintan Manis, Serpihan Cili Merah, Garam)', amount: '2 sudu besar' },
                    { item: 'Agen Pengikat (Telur, Tepung Jagung)', amount: '1 biji telur, 2 sudu besar tepung jagung' },
                    { item: 'Minyak', amount: 'Untuk menggoreng cetek' }
                ],
                instructions: [
                    'Dalam mangkuk besar, campurkan daging cincang dengan bawang, tomato, herba segar, dan campuran rempah chapli kebab.',
                    'Masukkan telur yang dipukul dan tepung jagung. Uli betul-betul 5-7 minit sampai sebati dan melekit sikit.',
                    'Bahagikan adunan, leperkan jadi patty nipis dan besar (bentuk chapli). Boleh tekan hirisan tomato kecil di tengah.',
                    'Panaskan minyak dalam kuali besar atas api sederhana. Goreng kebab 5-7 minit setiap sisi sampai perang keemasan dan masak elok.',
                    'Hidangkan Chapli Kebab panas-panas dengan naan hangat, raita, atau chutney kegemaran.'
                ]
            },
            'hi': {
                title: 'चपली कबाब',
                description: 'एक विशिष्ट पाकिस्तानी शैलो-फ्राइड कबाब, जो अपनी देहाती बनावट और तीखे, मसालेदार स्वाद के लिए जाना जाता है, जिसे अक्सर नान या चटनी के साथ परोसा जाता है।',
                ingredients: [
                    { item: 'कीमा (भेड़ या बीफ का)', amount: '500 ग्राम' },
                    { item: 'प्याज, बारीक कटा और निचोड़ा हुआ', amount: '1 बड़ा' },
                    { item: 'टमाटर, बीज निकाले हुए और बारीक कटा हुआ', amount: '1 मध्यम' },
                    { item: 'ताज़ी जड़ी-बूटियाँ और सुगंधित सामग्री (हरी मिर्च, धनिया पत्ती, अदरक-लहसुन का पेस्ट)', amount: '2-3 हरी मिर्च, 1/4 कप धनिया, 1 बड़ा चम्मच पेस्ट' },
                    { item: 'चपली कबाब मसाला मिश्रण (कुटा हुआ धनिया, अनारदाना, जीरा, लाल मिर्च के गुच्छे, नमक)', amount: '2 बड़े चम्मच' },
                    { item: 'बांधने वाले एजेंट (अंडा, कॉर्नफ्लोर)', amount: '1 अंडा, 2 बड़े चम्मच कॉर्नफ्लोर' },
                    { item: 'तेल', amount: 'शैलो-फ्राई करने के लिए' }
                ],
                instructions: [
                    'Step 1: एक बड़े कटोरे में, कीमा को कटे हुए प्याज, टमाटर, ताज़ी जड़ी-बूटियों और सुगंधित सामग्री, और चपली कबाब मसाला मिश्रण के साथ मिलाएं।',
                    'Step 2: मिश्रण में फेंटा हुआ अंडा और कॉर्नफ्लोर डालें, फिर अच्छी तरह से मिलने और थोड़ा चिपचिपा होने तक 5-7 मिनट के लिए गूंधें।',
                    'Step 3: मिश्रण को बराबर भागों में बांटें और प्रत्येक को एक पतली, बड़ी टिक्की (चपली आकार) में चपटा करें, वैकल्पिक रूप से प्रत्येक के केंद्र पर एक छोटा टमाटर का टुकड़ा दबाएं।',
                    'Step 4: एक बड़े फ्राइंग पैन में मध्यम आंच पर तेल गरम करें, फिर कबाब को प्रत्येक तरफ 5-7 मिनट के लिए शैलो-फ्राई करें जब तक कि वे सुनहरे भूरे और पूरी तरह से पक न जाएं।',
                    'Step 5: गरमागरम चपली कबाब को तुरंत गर्म नान, रायता या अपनी पसंदीदा चटनी के साथ परोसें।'
                ]
            },
            'bn': {
                title: 'চাপলি কাবাব',
                description: 'একটি অপরিহার্য পাকিস্তানি শ্যালো-ফ্রাইড কাবাব, যা এর গ্রামীণ গঠন এবং সাহসী, মশলাদার স্বাদের জন্য পরিচিত, প্রায়শই নান বা চাটনির সাথে উপভোগ করা হয়।',
                ingredients: [
                    { item: 'কিমা করা গরুর মাংস বা ভেড়ার মাংস (কিমার)', amount: '500 গ্রাম' },
                    { item: 'পেঁয়াজ, মিহি করে কুচি করে জল ঝরানো', amount: '1টি বড়' },
                    { item: 'টমেটো, বীজ ছাড়ানো এবং মিহি করে কুচি করা', amount: '1টি মাঝারি' },
                    { item: 'তাজা ভেষজ ও সুগন্ধি (কাঁচা লঙ্কা, ধনে পাতা, আদা-রসুন বাটা)', amount: '2-3টি কাঁচা লঙ্কা, 1/4 কাপ ধনে, 1 টেবিল চামচ বাটা' },
                    { item: 'চাপলি কাবাব মশলা মিশ্রণ (থেঁতো করা ধনে, আনারদানা, জিরা, লাল লঙ্কার ফ্লেক্স, লবণ)', amount: '2 টেবিল চামচ' },
                    { item: 'বাঁধাইকারী উপাদান (ডিম, কর্নফ্লাওয়ার)', amount: '1টি ডিম, 2 টেবিল চামচ কর্নফ্লাওয়ার' },
                    { item: 'তেল', amount: 'শ্যালো ফ্রাই করার জন্য' }
                ],
                instructions: [
                    'Step 1: একটি বড় বাটিতে, কিমা করা মাংসের সাথে কুচি করা পেঁয়াজ, টমেটো, তাজা ভেষজ ও সুগন্ধি এবং চাপলি কাবাব মশলা মিশ্রণ একত্রিত করুন।',
                    'Step 2: মিশ্রণে ফেটানো ডিম এবং কর্নফ্লাওয়ার যোগ করুন, তারপর 5-7 মিনিটের জন্য ভালোভাবে মেখে নিন যতক্ষণ না এটি ভালোভাবে মিশে যায় এবং সামান্য আঠালো হয়।',
                    'Step 3: মিশ্রণটিকে সমান অংশে ভাগ করুন এবং প্রতিটি অংশকে একটি পাতলা, বড় প্যাটি (চাপলি আকৃতি) তৈরি করুন, ঐচ্ছিকভাবে প্রতিটি কেন্দ্রে একটি ছোট টমেটোর টুকরা চাপুন।',
                    'Step 4: একটি বড় ফ্রাইং প্যানে মাঝারি আঁচে তেল গরম করুন, তারপর কাবাবগুলিকে প্রতি পাশে 5-7 মিনিটের জন্য শ্যালো-ফ্রাই করুন যতক্ষণ না সোনালি বাদামী এবং ভালোভাবে রান্না হয়।',
                    'Step 5: গরম চাপলি কাবাবগুলি অবিলম্বে গরম নান, রায়তা বা আপনার পছন্দের চাটনির সাথে পরিবেশন করুন।'
                ]
            },
            'mr': {
                title: 'चपली कबाब',
                description: 'एक उत्कृष्ट पाकिस्तानी शॅलो-फ्राइड कबाब, जो त्याच्या ग्रामीण पोत आणि तीव्र, मसालेदार चवीसाठी ओळखला जातो, जो अनेकदा नान किंवा चटणीसोबत खाल्ला जातो.',
                ingredients: [
                    { item: 'खिमा (बीफ किंवा मेंढीचे मांस)', amount: '500 ग्रॅम' },
                    { item: 'कांदा, बारीक चिरलेला आणि पाणी पिळून काढलेला', amount: '1 मोठा' },
                    { item: 'टोमॅटो, बिया काढलेला आणि बारीक चिरलेला', amount: '1 मध्यम' },
                    { item: 'ताजी औषधी वनस्पती आणि सुगंधी पदार्थ (हिरवी मिरची, कोथिंबीर, आले-लसूण पेस्ट)', amount: '2-3 हिरव्या मिरच्या, 1/4 कप कोथिंबीर, 1 मोठा चमचा पेस्ट' },
                    { item: 'चपली कबाब मसाला मिश्रण (कुटलेली धणे, डाळिंबाचे दाणे, जिरे, लाल मिरचीचे फ्लेक्स, मीठ)', amount: '2 मोठे चमचे' },
                    { item: 'बांधणारे घटक (अंडी, कॉर्नफ्लोर)', amount: '1 अंडे, 2 मोठे चमचे कॉर्नफ्लोर' },
                    { item: 'तेल', amount: 'शॅलो फ्राय करण्यासाठी' }
                ],
                instructions: [
                    'Step 1: एका मोठ्या भांड्यात, खिमा, चिरलेला कांदा, टोमॅटो, ताजी औषधी वनस्पती आणि सुगंधी पदार्थ, आणि चपली कबाब मसाला मिश्रण एकत्र करा.',
                    'Step 2: मिश्रणात फेटलेले अंडे आणि कॉर्नफ्लोर घाला, नंतर चांगले मिसळेपर्यंत आणि थोडे चिकट होईपर्यंत 5-7 मिनिटे चांगले मळून घ्या.',
                    'Step 3: मिश्रणाचे समान भाग करा आणि प्रत्येक भागाला पातळ, मोठ्या पॅटी (चपली आकार) मध्ये चपटे करा, इच्छित असल्यास प्रत्येकच्या मध्यभागी टोमॅटोचा एक छोटा तुकडा दाबा.',
                    'Step 4: एका मोठ्या तळण्याच्या पॅनमध्ये मध्यम आचेवर तेल गरम करा, नंतर कबाब दोन्ही बाजूंनी 5-7 मिनिटे शॅलो-फ्राय करा जोपर्यंत ते सोनेरी तपकिरी आणि पूर्णपणे शिजत नाहीत.',
                    'Step 5: गरमागरम चपली कबाब लगेच गरम नान, रायता किंवा तुमच्या आवडत्या चटणीसोबत सर्व्ह करा.'
                ]
            },
            'te': {
                title: 'చప్లీ కబాబ్',
                description: 'ఇది ఒక విలక్షణమైన పాకిస్తానీ షాలో-ఫ్రైడ్ కబాబ్, ఇది దాని గ్రామీణ ఆకృతికి మరియు ఘాటైన, కారంగా ఉండే రుచులకు ప్రసిద్ధి చెందింది, తరచుగా నాన్ లేదా చట్నీతో ఆనందించబడుతుంది.',
                ingredients: [
                    { item: 'కీమా (గొడ్డు మాంసం లేదా గొర్రె మాంసం)', amount: '500 గ్రాములు' },
                    { item: 'ఉల్లిపాయ, సన్నగా తరిగి నీరు పిండినది', amount: '1 పెద్దది' },
                    { item: 'టమాటో, గింజలు తీసి సన్నగా తరిగినది', amount: '1 మధ్యస్థం' },
                    { item: 'తాజా మూలికలు & సుగంధ ద్రవ్యాలు (పచ్చి మిరపకాయలు, కొత్తిమీర ఆకులు, అల్లం-వెల్లుల్లి పేస్ట్)', amount: '2-3 పచ్చి మిరపకాయలు, 1/4 కప్పు కొత్తిమీర, 1 టేబుల్ స్పూన్ పేస్ట్' },
                    { item: 'చప్లీ కబాబ్ మసాలా మిశ్రమం (దంచిన ధనియాలు, దానిమ్మ గింజలు, జీలకర్ర, ఎర్ర మిరప రేకులు, ఉప్పు)', amount: '2 టేబుల్ స్పూన్లు' },
                    { item: 'బైండింగ్ ఏజెంట్లు (గుడ్డు, కార్న్‌ఫ్లోర్)', amount: '1 గుడ్డు, 2 టేబుల్ స్పూన్లు కార్న్‌ఫ్లోర్' },
                    { item: 'నూనె', amount: 'షాలో ఫ్రై చేయడానికి' }
                ],
                instructions: [
                    'Step 1: ఒక పెద్ద గిన్నెలో, కీమాను తరిగిన ఉల్లిపాయ, టమాటో, తాజా మూలికలు & సుగంధ ద్రవ్యాలు మరియు చప్లీ కబాబ్ మసాలా మిశ్రమంతో కలపండి.',
                    'Step 2: మిశ్రమానికి కొట్టిన గుడ్డు మరియు కార్న్‌ఫ్లోర్ వేసి, బాగా కలిసే వరకు మరియు కొద్దిగా జిగురుగా మారే వరకు 5-7 నిమిషాలు బాగా కలపండి.',
                    'Step 3: మిశ్రమాన్ని సమాన భాగాలుగా విభజించి, ప్రతి భాగాన్ని సన్నని, పెద్ద ప్యాటీ (చప్లీ ఆకారం) గా చదును చేయండి, కావాలంటే ప్రతి దాని మధ్యలో ఒక చిన్న టమాటో ముక్కను నొక్కండి.',
                    'Step 4: ఒక పెద్ద ఫ్రైయింగ్ పాన్‌లో మధ్యస్థ మంటపై నూనెను వేడి చేసి, కబాబ్‌లను ప్రతి వైపు 5-7 నిమిషాలు బంగారు గోధుమ రంగులోకి మారి పూర్తిగా ఉడికే వరకు షాలో-ఫ్రై చేయండి.',
                    'Step'
                ]
            },
            'ta': {
                title: '',
                description: '',
                ingredients: [

                ],
                instructions: [

                ]
            }
        }
    },
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
            'Add dried shrimp and ground cashews, cooking for a few minutes.',
            'Blend soaked bread with coconut milk until smooth, then stir into the pan.',
            'Cook, stirring constantly, until the mixture thickens and becomes creamy. Season with salt.',
            'Serve hot, traditionally with acarajé or white rice.'
        ],
        tags: ['Brazilian', 'Dinner', 'Non-Vegetarian'],
        translations: {
            'zh-CN': {
                title: '瓦塔帕',
                description: '瓦塔帕，巴西的奶油炖菜，有虾、面包、椰奶和登德油，香浓美味，口感丰富！',
                ingredients: [
                    { item: '虾米', amount: '1杯，泡软并切碎' },
                    { item: '陈白面包', amount: '4片，去皮，泡软' },
                    { item: '椰奶', amount: '1罐 (400毫升)' },
                    { item: '登德油 (棕榈油)', amount: '1/4杯' },
                    { item: '洋葱', amount: '1个中等大小，切碎' },
                    { item: '大蒜', amount: '3瓣，切末' },
                    { item: '腰果', amount: '1/2杯，烤香并磨碎' }
                ],
                instructions: [
                    '登德油炒香洋葱和大蒜。',
                    '加虾米和腰果碎，炒几分钟。',
                    '泡软的面包和椰奶搅匀。',
                    '面包椰奶糊倒入锅中，煮浓稠。',
                    '加盐调味，边搅边煮到奶油状。',
                    '趁热吃，配阿卡拉热或白米饭。'
                ]
            },
            'ms': {
                title: 'Vatapá',
                description: 'Vatapá ni rebusan Afro-Brazil yang berkrim dan berperisa, ada udang, roti, santan, dan minyak dendê. Memang unik dan sedap!',
                ingredients: [
                    { item: 'Udang kering', amount: '1 cawan, direndam dan dicincang' },
                    { item: 'Roti putih basi', amount: '4 keping, dibuang kerak, direndam' },
                    { item: 'Santan', amount: '1 tin (400ml)' },
                    { item: 'Minyak dendê (minyak sawit)', amount: '1/4 cawan' },
                    { item: 'Bawang', amount: '1 biji sederhana, dicincang' },
                    { item: 'Bawang putih', amount: '3 ulas, dicincang' },
                    { item: 'Gajus', amount: '1/2 cawan, dipanggang dan dikisar' }
                ],
                instructions: [
                    'Tumis bawang dan bawang putih dalam minyak dendê sampai wangi.',
                    'Masukkan udang kering cincang dan gajus kisar, masak beberapa minit.',
                    'Kisar roti yang direndam dengan santan sampai licin.',
                    'Kacau campuran roti-santan ke dalam kuali, masak sampai pekat.',
                    'Perasakan dengan garam, masak sambil kacau selalu sampai berkrim.',
                    'Hidangkan panas, biasanya dengan acarajé atau nasi putih.'
                ]
            },
            'hi': {
                title: 'वटापा',
                description: 'झींगा, ब्रेड, नारियल के दूध और डेंडे तेल के साथ एक मलाईदार, स्वादिष्ट एफ्रो-ब्राज़ीलियाई स्टू।',
                ingredients: [
                    { item: 'सूखे झींगा', amount: '1 कप, फिर से हाइड्रेटेड और कटा हुआ' },
                    { item: 'बासी सफेद ब्रेड', amount: '4 स्लाइस, किनारे हटाकर, भिगोया हुआ' },
                    { item: 'नारियल का दूध', amount: '1 कैन (400 मिली)' },
                    { item: 'डेंडे तेल (पाम तेल)', amount: '1/4 कप' },
                    { item: 'प्याज', amount: '1 मध्यम, कटा हुआ' },
                    { item: 'लहसुन', amount: '3 कलियाँ, बारीक कटा हुआ' },
                    { item: 'काजू', amount: '1/2 कप, भुना हुआ और पिसा हुआ' }
                ],
                instructions: [
                    'डेंडे तेल में प्याज और लहसुन को सुगंधित होने तक भूनें।',
                    'कटे हुए सूखे झींगा और पिसे हुए काजू डालकर कुछ मिनट तक पकाएं।',
                    'भीगी हुई ब्रेड को नारियल के दूध के साथ चिकना होने तक ब्लेंड करें।',
                    'ब्रेड-नारियल मिश्रण को पैन में डालकर गाढ़ा होने तक पकाएं।',
                    'नमक के साथ सीज़न करें और लगातार चलाते हुए मलाईदार होने तक पकाएं।',
                    'गरमागरम परोसें, पारंपरिक रूप से अकारजे या सफेद चावल के साथ।'
                ]
            },
            'bn': {
                title: 'ভাটাপা',
                description: 'চিংড়ি, রুটি, নারকেলের দুধ এবং ডেন্ডে তেল দিয়ে তৈরি একটি ক্রিমি, সুস্বাদু আফ্রো-ব্রাজিলিয়ান স্টু।',
                ingredients: [
                    { item: 'শুকনো চিংড়ি', amount: '১ কাপ, পুনরায় হাইড্রেটেড এবং কাটা' },
                    { item: 'বাসি সাদা রুটি', amount: '৪ টুকরা, ধার বাদ দিয়ে, ভেজানো' },
                    { item: 'নারকেলের দুধ', amount: '১ ক্যান (৪০০ মিলি)' },
                    { item: 'ডেন্ডে তেল (পাম তেল)', amount: '১/৪ কাপ' },
                    { item: 'পেঁয়াজ', amount: '১টি মাঝারি, কাটা' },
                    { item: 'রসুন', amount: '৩ কোয়া, কুচি করা' },
                    { item: 'কাজু', amount: '১/২ কাপ, ভাজা এবং গুঁড়ো করা' }
                ],
                instructions: [
                    'ডেন্ডে তেলে পেঁয়াজ ও রসুন সুগন্ধি হওয়া পর্যন্ত ভাজুন।',
                    'কাটা শুকনো চিংড়ি এবং গুঁড়ো কাজু যোগ করে কয়েক মিনিট রান্না করুন।',
                    'ভেজানো রুটি নারকেলের দুধের সাথে মসৃণ হওয়া পর্যন্ত ব্লেন্ড করুন।',
                    'রুটি-নারকেলের মিশ্রণটি প্যানে ঢেলে ঘন হওয়া পর্যন্ত রান্না করুন।',
                    'লবণ দিয়ে সিজন করুন এবং ক্রমাগত নাড়তে নাড়তে ক্রিমি হওয়া পর্যন্ত রান্না করুন।',
                    'গরম গরম পরিবেশন করুন, ঐতিহ্যগতভাবে আকারাজে বা সাদা ভাতের সাথে।'
                ]
            },
            'mr': {
                title: 'वटापा',
                description: 'कोळंबी, ब्रेड, नारळाचे दूध आणि डेंडे तेलासह एक मलईदार, चवदार आफ्रिकन-ब्राझिलियन स्टू.',
                ingredients: [
                    { item: 'सुकी कोळंबी', amount: '1 कप, पुन्हा भिजवून चिरलेली' },
                    { item: 'शिळी पांढरी ब्रेड', amount: '4 स्लाइस, कडा काढून, भिजवलेली' },
                    { item: 'नारळाचे दूध', amount: '1 कॅन (400 मिली)' },
                    { item: 'डेंडे तेल (पाम तेल)', amount: '1/4 कप' },
                    { item: 'कांदा', amount: '1 मध्यम, चिरलेला' },
                    { item: 'लसूण', amount: '3 पाकळ्या, बारीक चिरलेला' },
                    { item: 'काजू', amount: '1/2 कप, भाजलेले आणि वाटलेले' }
                ],
                instructions: [
                    'डेंडे तेलात कांदा आणि लसूण सुगंधित होईपर्यंत परतून घ्या.',
                    'चिरलेली सुकी कोळंबी आणि वाटलेले काजू घालून काही मिनिटे शिजवा.',
                    'भिजवलेली ब्रेड नारळाच्या दुधासोबत गुळगुळीत होईपर्यंत ब्लेंड करा.',
                    'ब्रेड-नारळाचे मिश्रण पॅनमध्ये घालून घट्ट होईपर्यंत शिजवा.',
                    'मीठ घालून चव घ्या आणि सतत ढवळत मलईदार होईपर्यंत शिजवा.',
                    'गरमागरम सर्व्ह करा, पारंपरिकपणे अकारजे किंवा पांढऱ्या भातासोबत.'
                ]
            },
            'te': {
                title: 'వటపా',
                description: 'రొయ్యలు, బ్రెడ్, కొబ్బరి పాలు మరియు డెండే నూనెతో కూడిన క్రీమీ, రుచికరమైన ఆఫ్రో-బ్రెజిలియన్ స్టూ.',
                ingredients: [
                    { item: 'ఎండిన రొయ్యలు', amount: '1 కప్పు, తిరిగి హైడ్రేట్ చేసి తరిగినవి' },
                    { item: 'పాత తెల్ల బ్రెడ్', amount: '4 ముక్కలు, అంచులు తీసి, నానబెట్టినవి' },
                    { item: 'కొబ్బరి పాలు', amount: '1 డబ్బా (400 మి.లీ)' },
                    { item: 'డెండే నూనె (పామ్ ఆయిల్)', amount: '1/4 కప్పు' },
                    { item: 'ఉల్లిపాయ', amount: '1 మధ్యస్థం, తరిగినది' },
                    { item: 'వెల్లుల్లి', amount: '3 రెబ్బలు, సన్నగా తరిగినవి' },
                    { item: 'జీడిపప్పు', amount: '1/2 కప్పు, వేయించి పొడి చేసినవి' }
                ],
                instructions: [
                    'డెండే నూనెలో ఉల్లిపాయ మరియు వెల్లుల్లి సువాసన వచ్చేవరకు వేయించండి.',
                    'తరిగిన ఎండిన రొయ్యలు మరియు పొడి చేసిన జీడిపప్పు వేసి కొన్ని నిమిషాలు ఉడికించండి.',
                    'నానబెట్టిన బ్రెడ్‌ను కొబ్బరి పాలతో కలిపి మెత్తగా బ్లెండ్ చేయండి.',
                    'బ్రెడ్-కొబ్బరి మిశ్రమాన్ని పాన్‌లో వేసి చిక్కబడే వరకు ఉడికించండి.',
                    'ఉప్పుతో రుచి చూసి, నిరంతరం కలుపుతూ క్రీమీగా మారే వరకు ఉడికించండి.',
                    'వేడిగా వడ్డించండి, సాంప్రదాయకంగా అకరాజే లేదా తెల్ల అన్నంతో.'
                ]
            },
            'ta': {
                title: 'வடாபா',
                description: 'இறால், ரொட்டி, தேங்காய் பால் மற்றும் டெண்டே எண்ணெயுடன் கூடிய ஒரு கிரீமி, சுவையான ஆப்ரோ-பிரேசிலியன் ஸ்டூ.',
                ingredients: [
                    { item: 'உலர்ந்த இறால்', amount: '1 கப், மீண்டும் ஊறவைத்து நறுக்கியது' },
                    { item: 'பழைய வெள்ளை ரொட்டி', amount: '4 துண்டுகள், ஓரங்களை நீக்கி, ஊறவைத்தது' },
                    { item: 'தேங்காய் பால்', amount: '1 டின் (400 மிலி)' },
                    { item: 'டெண்டே எண்ணெய் (பனை எண்ணெய்)', amount: '1/4 கப்' },
                    { item: 'வெங்காயம்', amount: '1 நடுத்தர, நறுக்கியது' },
                    { item: 'பூண்டு', amount: '3 பற்கள், பொடியாக நறுக்கியது' },
                    { item: 'முந்திரி', amount: '1/2 கப், வறுத்து அரைத்தது' }
                ],
                instructions: [
                    'டெண்டே எண்ணெயில் வெங்காயம் மற்றும் பூண்டை மணம் வரும் வரை வதக்கவும்.',
                    'நறுக்கிய உலர்ந்த இறால் மற்றும் அரைத்த முந்திரியை சேர்த்து சில நிமிடங்கள் சமைக்கவும்.',
                    'ஊறவைத்த ரொட்டியை தேங்காய் பாலுடன் சேர்த்து மென்மையாக அரைக்கவும்.',
                    'ரொட்டி-தேங்காய் கலவையை கடாயில் சேர்த்து கெட்டியாகும் வரை சமைக்கவும்.',
                    'உப்பு சேர்த்து, தொடர்ந்து கிளறி, கிரீமியாக மாறும் வரை சமைக்கவும்.',
                    'சூடாக பரிமாறவும், பாரம்பரியமாக அக்காரஜே அல்லது வெள்ளை சாதத்துடன்.'
                ]
            }
        }
    },
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
            'Boil noodles, drain, and set aside.',
            'Stir-fry chicken and shrimp in a wok until cooked, then remove.',
            'Sauté aromatics, then add vegetables and stir-fry until tender-crisp.',
            'Return chicken and shrimp, add noodles and kecap manis, tossing well.',
            'Stir in scrambled eggs or omelette strips. Mix gently and serve hot.'
        ],
        tags: ['Indonesian', 'Dinner', 'Non-Vegetarian', 'Noodles'],
        translations: {
            'zh-CN': {
                title: '炒面',
                description: '印尼炒面，咸香带点辣，味道浓郁，吃起来特别过瘾！',
                ingredients: [
                    { item: '新鲜黄鸡蛋面', amount: '400克' },
                    { item: '鸡胸肉（切片）', amount: '200克' },
                    { item: '虾（去皮去虾线）', amount: '150克' },
                    { item: '混合蔬菜（卷心菜丝、胡萝卜丝）', amount: '2杯' },
                    { item: '甜酱油（Kecap Manis）', amount: '4汤匙' },
                    { item: '香料（蒜蓉、葱头片、可选辣椒）', amount: '1汤匙酱' },
                    { item: '鸡蛋', amount: '2个' }
                ],
                instructions: [
                    '面条煮好，沥干备用。',
                    '炒锅热油，炒熟鸡肉和虾，取出。',
                    '爆香香料，再炒蔬菜到脆嫩。',
                    '倒回鸡肉和虾，加面条和甜酱油。',
                    '大火翻炒均匀。',
                    '拌入炒鸡蛋或蛋皮丝，轻轻混合。',
                    '趁热吃！'
                ]
            },
            'ms': {
                title: 'Mi Goreng',
                description: 'Mi Goreng ni hidangan mi goreng Indonesia yang bersemangat, berperisa, pedas, dan memang mengenyangkan. Satu pinggan tak cukup!',
                ingredients: [
                    { item: 'Mi telur kuning segar', amount: '400g' },
                    { item: 'Isi ayam (dihiris)', amount: '200g' },
                    { item: 'Udang (dikupas & dibuang urat)', amount: '150g' },
                    { item: 'Sayur-sayuran campuran (kubis dihiris, lobak merah dihiris julienne)', amount: '2 cawan' },
                    { item: 'Kicap Manis', amount: '4 sudu besar' },
                    { item: 'Bahan aromatik (bawang putih cincang, bawang merah dihiris, cili pilihan)', amount: '1 sudu besar pes' },
                    { item: 'Telur', amount: '2 biji' }
                ],
                instructions: [
                    'Rebus mi ikut arahan bungkusan, toskan, ketepikan.',
                    'Panaskan minyak dalam kuali, tumis ayam dan udang sampai masak. Angkat.',
                    'Tumis bahan aromatik sampai wangi. Masukkan sayur-sayuran, tumis sampai lembut rangup.',
                    'Masukkan semula ayam dan udang, tambah mi dan kicap manis. Gaul rata.',
                    'Masukkan telur hancur atau telur dadar hiris. Gaul perlahan, hidangkan panas-panas.'
                ]
            },
            'hi': {
                title: 'मी गोरेंग',
                description: 'एक जीवंत इंडोनेशियाई स्टिर-फ्राइड नूडल डिश, नमकीन, मसालेदार और बेहद संतोषजनक।',
                ingredients: [
                    { item: 'ताजे पीले अंडे के नूडल्स', amount: '400 ग्राम' },
                    { item: 'चिकन ब्रेस्ट (कटा हुआ)', amount: '200 ग्राम' },
                    { item: 'झींगा (छिला और साफ किया हुआ)', amount: '150 ग्राम' },
                    { item: 'मिली-जुली सब्जियां (पत्तागोभी, गाजर)', amount: '2 कप' },
                    { item: 'केचाप मानिस (मीठा सोया सॉस)', amount: '4 बड़े चम्मच' },
                    { item: 'खुशबूदार मसाले (लहसुन, प्याज, मिर्च)', amount: '1 बड़ा चम्मच पेस्ट' },
                    { item: 'अंडे', amount: '2' }
                ],
                instructions: [
                    'नूडल्स को पैकेज के निर्देशानुसार उबालें, छान लें और अलग रख दें।',
                    'एक कड़ाही में तेल गरम करें, चिकन और झींगा को पकने तक भूनें, फिर निकाल लें।',
                    'खुशबूदार मसाले सुगंधित होने तक भूनें, फिर सब्जियां डालें और नरम-कुरकुरा होने तक भूनें।',
                    'चिकन और झींगा वापस डालें, नूडल्स और केचाप मानिस मिलाएं, अच्छी तरह टॉस करें।',
                    'फेंटे हुए अंडे या आमलेट स्ट्रिप्स मिलाएं, धीरे से मिलाएं और गरमागरम परोसें।'
                ]
            },
            'bn': {
                title: 'মি গোরং',
                description: 'একটি প্রাণবন্ত ইন্দোনেশিয়ান স্টিয়ার-ফ্রাইড নুডল ডিশ, সুস্বাদু, মশলাদার এবং অত্যন্ত তৃপ্তিদায়ক।',
                ingredients: [
                    { item: 'তাজা হলুদ ডিমের নুডুলস', amount: '400 গ্রাম' },
                    { item: 'চিকেন ব্রেস্ট (টুকরো করা)', amount: '200 গ্রাম' },
                    { item: 'চিংড়ি (খোসা ছাড়ানো ও শিরা পরিষ্কার করা)', amount: '150 গ্রাম' },
                    { item: 'মিশ্র সবজি (বাঁধাকপি, গাজর)', amount: '2 কাপ' },
                    { item: 'কেচাপ মানিস (মিষ্টি সয়া সস)', amount: '4 টেবিল চামচ' },
                    { item: 'সুগন্ধি মশলা (রসুন, পেঁয়াজ, লঙ্কা)', amount: '1 টেবিল চামচ পেস্ট' },
                    { item: 'ডিম', amount: '2টি' }
                ],
                instructions: [
                    'প্যাকেজের নির্দেশ অনুযায়ী নুডুলস সিদ্ধ করুন, জল ঝরিয়ে একপাশে রাখুন।',
                    'একটি কড়াইতে তেল গরম করুন, মুরগি ও চিংড়ি রান্না হওয়া পর্যন্ত ভেজে তুলে নিন।',
                    'সুগন্ধি মশলা সুগন্ধি হওয়া পর্যন্ত ভাজুন, তারপর সবজি যোগ করে নরম-খাস্তা হওয়া পর্যন্ত ভাজুন।',
                    'মুরগি ও চিংড়ি ফিরিয়ে আনুন, নুডুলস ও কেচাপ মানিস যোগ করে ভালোভাবে মেশান।',
                    'ফেঁটানো ডিম বা অমলেট স্ট্রিপস মিশিয়ে আলতো করে নাড়ুন এবং গরম গরম পরিবেশন করুন।'
                ]
            },
            'mr': {
                title: 'मी गोरेंग',
                description: 'एक स्वादिष्ट इंडोनेशियन स्टिर-फ्राइड नूडल डिश, चवदार, मसालेदार आणि अत्यंत समाधानकारक.',
                ingredients: [
                    { item: 'ताजे पिवळे अंड्याचे नूडल्स', amount: '400 ग्रॅम' },
                    { item: 'चिकन ब्रेस्ट (कापलेले)', amount: '200 ग्रॅम' },
                    { item: 'कोळंबी (सोललेली आणि साफ केलेली)', amount: '150 ग्रॅम' },
                    { item: 'मिश्र भाज्या (कोबी, गाजर)', amount: '2 कप' },
                    { item: 'केचाप मानिस (गोड सोया सॉस)', amount: '4 मोठे चमचे' },
                    { item: 'सुगंधित मसाले (लसूण, कांदा, मिरची)', amount: '1 मोठा चमचा पेस्ट' },
                    { item: 'अंडी', amount: '2' }
                ],
                instructions: [
                    'पॅकेजच्या निर्देशानुसार नूडल्स उकळा, पाणी काढून बाजूला ठेवा.',
                    'कढईत तेल गरम करा, चिकन आणि कोळंबी शिजेपर्यंत परतून घ्या, नंतर काढून टाका.',
                    'सुगंधित मसाले सुगंधित होईपर्यंत परतून घ्या, नंतर भाज्या घालून नरम-कुरकुरीत होईपर्यंत परतून घ्या.',
                    'चिकन आणि कोळंबी परत घाला, नूडल्स आणि केचाप मानिस घालून चांगले मिसळा.',
                    'फेटलेली अंडी किंवा ऑम्लेटचे पट्टे मिसळा, हळूवारपणे ढवळून गरम सर्व्ह करा.'
                ]
            },
            'te': {
                title: 'మీ గోరెంగ్',
                description: 'ఒక శక్తివంతమైన ఇండోనేషియన్ స్టిర్-ఫ్రైడ్ నూడిల్ వంటకం, రుచికరమైన, కారంగా మరియు అత్యంత సంతృప్తికరమైనది.',
                ingredients: [
                    { item: 'తాజా పసుపు గుడ్డు నూడుల్స్', amount: '400 గ్రా' },
                    { item: 'చికెన్ బ్రెస్ట్ (ముక్కలుగా చేసినది)', amount: '200 గ్రా' },
                    { item: 'రొయ్యలు (పొట్టు తీసి, శుభ్రం చేసినవి)', amount: '150 గ్రా' },
                    { item: 'మిశ్రమ కూరగాయలు (క్యాబేజీ, క్యారెట్)', amount: '2 కప్పులు' },
                    { item: 'కెచాప్ మానిస్ (తీపి సోయా సాస్)', amount: '4 టేబుల్ స్పూన్లు' },
                    { item: 'సుగంధ ద్రవ్యాలు (వెల్లుల్లి, ఉల్లిపాయలు, మిరపకాయలు)', amount: '1 టేబుల్ స్పూన్ పేస్ట్' },
                    { item: 'గుడ్లు', amount: '2' }
                ],
                instructions: [
                    'ప్యాకేజీ సూచనల ప్రకారం నూడుల్స్ ఉడికించి, నీరు తీసి పక్కన పెట్టండి.',
                    'ఒక వోక్‌లో నూనె వేడి చేసి, చికెన్ మరియు రొయ్యలను ఉడికే వరకు వేయించి, తీసివేయండి.',
                    'సుగంధ ద్రవ్యాలను సువాసన వచ్చేవరకు వేయించి, ఆపై కూరగాయలను జోడించి, మెత్తగా-క్రిస్పీగా అయ్యేవరకు వేయించండి.',
                    'చికెన్ మరియు రొయ్యలను తిరిగి వేసి, నూడుల్స్ మరియు కెచాప్ మానిస్ కలిపి బాగా కలపండి.',
                    'స్క్రాంబుల్ చేసిన గుడ్లు లేదా ఆమ్లెట్ ముక్కలను కలిపి, మెల్లగా కలిపి వెంటనే సర్వ్ చేయండి.'
                ]
            },
            'ta': {
                title: 'மீ கோரெங்',
                description: 'ஒரு துடிப்பான இந்தோனேசிய வறுத்த நூடுல்ஸ் உணவு, சுவையானது, காரமானது மற்றும் மிகவும் திருப்திகரமானது.',
                ingredients: [
                    { item: 'புதிய மஞ்சள் முட்டை நூடுல்ஸ்', amount: '400 கிராம்' },
                    { item: 'கோழி மார்பு (துண்டுகளாக்கப்பட்டது)', amount: '200 கிராம்' },
                    { item: 'இறால் (தோல் நீக்கி, சுத்தம் செய்யப்பட்டது)', amount: '150 கிராம்' },
                    { item: 'கலப்பு காய்கறிகள் (முட்டைக்கோஸ், கேரட்)', amount: '2 கப்' },
                    { item: 'கெட்சாப் மனிஸ் (இனிப்பு சோயா சாஸ்)', amount: '4 தேக்கரண்டி' },
                    { item: 'நறுமணப் பொருட்கள் (பூண்டு, வெங்காயம், மிளகாய்)', amount: '1 தேக்கரண்டி விழுது' },
                    { item: 'முட்டைகள்', amount: '2' }
                ],
                instructions: [
                    'பேக்கேஜ் அறிவுறுத்தல்களின்படி நூடுல்ஸை சமைத்து, வடிகட்டி தனியாக வைக்கவும்.',
                    'ஒரு வோக்கில் எண்ணெய் சூடாக்கி, கோழி மற்றும் இறாலை சமைக்கும் வரை வறுத்து, பின்னர் அகற்றவும்.',
                    'நறுமணப் பொருட்களை மணம் வரும் வரை வறுத்து, பின்னர் காய்கறிகளை சேர்த்து, மென்மையாகும் வரை வறுக்கவும்.',
                    'கோழி மற்றும் இறாலை மீண்டும் சேர்த்து, நூடுல்ஸ் மற்றும் கெட்சாப் மனிஸ் சேர்த்து நன்கு கிளறவும்.',
                    'வறுத்த முட்டை அல்லது ஆம்லெட் துண்டுகளை சேர்த்து, மெதுவாக கலந்து உடனடியாக பரிமாறவும்.'
                ]
            }
        }
    },
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
            'Boil pasta until al dente, reserving plenty of starchy pasta water.',
            'Toast cracked black pepper in a pan, then add a ladle of pasta water.',
            'Remove from heat, add Pecorino Romano and more pasta water, stirring vigorously for a creamy sauce.',
            'Add drained pasta to the pan, tossing continuously to coat. Adjust with more water or cheese if needed.',
            'Serve immediately, garnished with extra pepper and Pecorino.'
        ],
        tags: ['Italian', 'Dinner', 'Vegetarian'],
        translations: {
            'zh-CN': {
                title: '奶酪胡椒意面',
                description: '这道罗马经典，简单又美味，面条、奶酪和胡椒的完美结合。',
                ingredients: [
                    { item: '意大利面或Tonnarelli面', amount: '400克' },
                    { item: '佩科里诺罗马羊奶酪，磨碎', amount: '200克' },
                    { item: '黑胡椒粒，现磨', amount: '15克' },
                    { item: '盐', amount: '适量' },
                    { item: '煮意面的水', amount: '适量' }
                ],
                instructions: [
                    '面水加点盐，意面煮到弹牙。',
                    '黑胡椒炒香，加一勺面汤。',
                    '离火加奶酪和面汤，快速搅匀。',
                    '意面沥干，马上倒进酱汁锅。',
                    '不够滑再加点面汤或奶酪。',
                    '趁热吃，撒点胡椒和奶酪。'
                ]
            },
            'ms': {
                title: 'Cacio e Pepe',
                description: 'Resepi klasik dari Rome, ringkas tapi sedap sangat. Pasta, keju, dan lada hitam, memang padu!',
                ingredients: [
                    { item: 'Spaghetti atau Tonnarelli', amount: '400g' },
                    { item: 'Keju Pecorino Romano, disagar halus', amount: '200g' },
                    { item: 'Lada hitam biji, baru dihancurkan', amount: '15g' },
                    { item: 'Garam', amount: 'secukup rasa' },
                    { item: 'Air rebusan pasta', amount: 'secukupnya' }
                ],
                instructions: [
                    'Rebus pasta dalam air garam sikit, sampai elok al dente. Jangan buang air rebusan tu, simpan sikit.',
                    'Dalam kuali besar, sangai lada hitam sampai wangi. Lepas tu, masukkan sesenduk air rebusan pasta tadi.',
                    'Angkat kuali dari api. Masukkan keju Pecorino Romano parut dengan sikit lagi air rebusan. Kacau laju-laju sampai jadi sos krim.',
                    'Toskan pasta, terus masukkan dalam kuali sos keju. Gaul rata-rata sampai semua bersalut elok.',
                    'Kalau rasa sos pekat sangat, tambah sikit lagi air rebusan atau keju. Nak sos licin berkilat kan?',
                    'Hidang cepat-cepat. Tabur lada hitam dan keju Pecorino lebih kalau suka.'
                ]
            },
            'hi': {
                title: 'काचो ए पेपे',
                description: 'एक रोमन क्लासिक, पास्ता, पनीर और काली मिर्च के साथ सरल फिर भी शानदार।',
                ingredients: [
                    { item: 'स्पेगेटी या टोनारेली', amount: '400 ग्राम' },
                    { item: 'पेकोरिनो रोमानो पनीर, बारीक कसा हुआ', amount: '200 ग्राम' },
                    { item: 'काली मिर्च के दाने, ताज़ी कुटी हुई', amount: '15 ग्राम' },
                    { item: 'नमक', amount: 'स्वादानुसार' },
                    { item: 'पास्ता पकाने का पानी', amount: 'आवश्यकतानुसार' }
                ],
                instructions: [
                    'पास्ता को हल्के नमकीन पानी में अल डेंटे होने तक उबालें, और पर्याप्त स्टार्च वाला पास्ता पानी बचा कर रखें।',
                    'एक बड़े पैन में मध्यम आंच पर कुटी हुई काली मिर्च को सुगंधित होने तक भूनें, फिर एक करछी पास्ता पानी डालें।',
                    'पैन को आंच से हटा दें, कसा हुआ पेकोरिनो रोमानो और थोड़ा और पास्ता पानी डालें, और एक क्रीमी इमल्शन बनाने के लिए तेजी से हिलाएं।',
                    'पास्ता को छान लें और तुरंत पनीर सॉस वाले पैन में डालें, लगातार उछालते हुए मिलाएं।',
                    'एक चिकनी, चमकदार सॉस प्राप्त करने के लिए आवश्यकतानुसार और पास्ता पानी या पनीर डालें।',
                    'अतिरिक्त कुटी हुई काली मिर्च और पेकोरिनो से सजाकर तुरंत परोसें।'
                ]
            },
            'bn': {
                title: 'কাচিও এ পেপে',
                description: 'একটি রোমান ক্লাসিক, পাস্তা, পনির এবং গোলমরিচ দিয়ে সহজ অথচ অসাধারণ।',
                ingredients: [
                    { item: 'স্প্যাগেটি বা টোনারেলি', amount: '400 গ্রাম' },
                    { item: 'পেকরিনো রোমানো পনির, মিহি করে গ্রেট করা', amount: '200 গ্রাম' },
                    { item: 'কালো গোলমরিচ, টাটকা গুঁড়ো করা', amount: '15 গ্রাম' },
                    { item: 'লবণ', amount: 'স্বাদমতো' },
                    { item: 'পাস্তা রান্নার জল', amount: 'প্রয়োজন অনুযায়ী' }
                ],
                instructions: [
                    'হালকা লবণাক্ত জলে পাস্তা আল ডেন্তে হওয়া পর্যন্ত সেদ্ধ করুন, প্রচুর পরিমাণে স্টার্চি পাস্তা জল সংরক্ষণ করুন।',
                    'একটি বড় প্যানে মাঝারি আঁচে গুঁড়ো করা কালো গোলমরিচ সুগন্ধি না হওয়া পর্যন্ত ভাজুন, তারপর এক হাতা পাস্তা জল যোগ করুন।',
                    'প্যানটি আঁচ থেকে সরিয়ে নিন, গ্রেট করা পেকরিনো রোমানো এবং আরও কিছুটা পাস্তা জল যোগ করুন, একটি ক্রিমি ইমালসন তৈরি করতে দ্রুত নাড়ুন।',
                    'পাস্তা ছেঁকে নিন এবং অবিলম্বে পনির সস সহ প্যানে যোগ করুন, ক্রমাগত টস করে মেশান।',
                    'একটি মসৃণ, চকচকে সস পেতে প্রয়োজন অনুযায়ী আরও পাস্তা জল বা পনির যোগ করুন।',
                    'অতিরিক্ত গুঁড়ো করা গোলমরিচ এবং পেকরিনো দিয়ে সাজিয়ে অবিলম্বে পরিবেশন করুন।'
                ]
            },
            'mr': {
                title: 'काचो ए पेपे',
                description: 'एक रोमन क्लासिक, पास्ता, चीज आणि मिरीसह सोपे पण उत्कृष्ट.',
                ingredients: [
                    { item: 'स्पेगेटी किंवा टोनारेली', amount: '400 ग्रॅम' },
                    { item: 'पेकोरिनो रोमानो चीज, बारीक किसलेले', amount: '200 ग्रॅम' },
                    { item: 'काळी मिरीचे दाणे, ताजे कुटलेले', amount: '15 ग्रॅम' },
                    { item: 'मीठ', amount: 'चवीनुसार' },
                    { item: 'पास्ता शिजवण्याचे पाणी', amount: 'गरजेनुसार' }
                ],
                instructions: [
                    'पास्ता हलक्या मीठ घातलेल्या पाण्यात अल डेंटे होईपर्यंत उकळा, भरपूर स्टार्च असलेले पास्ता पाणी बाजूला ठेवा.',
                    'एका मोठ्या पॅनमध्ये मध्यम आचेवर कुटलेली काळी मिरी सुगंधित होईपर्यंत भाजून घ्या, नंतर एक चमचा पास्ता पाणी घाला.',
                    'पॅन आचेवरून काढून टाका, किसलेले पेकोरिनो रोमानो आणि थोडे अधिक पास्ता पाणी घालून, एक क्रीमी इमल्शन तयार करण्यासाठी वेगाने ढवळा.',
                    'पास्ता काढून टाका आणि लगेच चीज सॉस असलेल्या पॅनमध्ये घाला, सतत टॉस करून लेप करा.',
                    'गुळगुळीत, चमकदार सॉस मिळवण्यासाठी आवश्यकतेनुसार अधिक पास्ता पाणी किंवा चीज घाला.',
                    'अतिरिक्त कुटलेली मिरी आणि पेकोरिनोने सजवून लगेच सर्व्ह करा.'
                ]
            },
            'te': {
                title: 'కాసియో ఎ పెపే',
                description: 'పాస్తా, చీజ్ మరియు మిరియాలతో కూడిన రోమన్ క్లాసిక్, సరళమైనది ఇంకా అద్భుతమైనది.',
                ingredients: [
                    { item: 'స్పఘెట్టి లేదా టోనారెల్లి', amount: '400 గ్రాములు' },
                    { item: 'పెకోరినో రోమనో చీజ్, సన్నగా తురిమినది', amount: '200 గ్రాములు' },
                    { item: 'నల్ల మిరియాలు, తాజాగా దంచినవి', amount: '15 గ్రాములు' },
                    { item: 'ఉప్పు', amount: 'రుచికి సరిపడా' },
                    { item: 'పాస్తా వండిన నీరు', amount: 'అవసరమైనంత' }
                ],
                instructions: [
                    'పాస్తాను తేలికగా ఉప్పు వేసిన నీటిలో అల్ డెంటే అయ్యే వరకు ఉడకబెట్టండి, స్టార్చ్ ఉన్న పాస్తా నీటిని పుష్కలంగా పక్కన పెట్టండి.',
                    'ఒక పెద్ద పాన్‌లో మధ్యస్థ మంటపై దంచిన నల్ల మిరియాలను సువాసన వచ్చేవరకు వేయించి, ఆపై ఒక గరిటెడు పాస్తా నీటిని కలపండి.',
                    'పాన్‌ను మంట నుండి తీసివేసి, తురిమిన పెకోరినో రోమనో మరియు మరికొంత పాస్తా నీటిని వేసి, క్రీమీ ఎమల్షన్ ఏర్పడే వరకు వేగంగా కలపండి.',
                    'పాస్తాను వడకట్టి, వెంటనే చీజ్ సాస్‌తో ఉన్న పాన్‌లోకి వేసి, నిరంతరం టాస్ చేస్తూ కలపండి.',
                    'మృదువైన, నిగనిగలాడే సాస్ పొందడానికి అవసరమైతే మరికొంత పాస్తా నీరు లేదా చీజ్ కలపండి.',
                    'అదనపు దంచిన మిరియాలు మరియు పెకోరినోతో అలంకరించి వెంటనే వడ్డించండి।'
                ]
            },
            'ta': {
                title: 'காசியோ எ பெப்பே',
                description: 'பாஸ்தா, சீஸ் மற்றும் மிளகுடன் கூடிய ஒரு ரோமன் கிளாசிக், எளிமையானது ஆனால் அருமையானது.',
                ingredients: [
                    { item: 'ஸ்பாகெட்டி அல்லது டோனாரெல்லி', amount: '400 கிராம்' },
                    { item: 'பெக்கோரினோ ரோமானோ சீஸ், மெல்லியதாக துருவியது', amount: '200 கிராம்' },
                    { item: 'கருப்பு மிளகுத்தூள், புதிதாக இடித்தது', amount: '15 கிராம்' },
                    { item: 'உப்பு', amount: 'சுவைக்கு' },
                    { item: 'பாஸ்தா சமைத்த நீர்', amount: 'தேவைக்கேற்ப' }
                ],
                instructions: [
                    'பாஸ்தாவை லேசாக உப்பு சேர்த்த நீரில் அல் டென்டே ஆகும் வரை கொதிக்க வைத்து, நிறைய ஸ்டார்ச் உள்ள பாஸ்தா நீரை ஒதுக்கி வைக்கவும்.',
                    'ஒரு பெரிய கடாயில் நடுத்தர தீயில் இடித்த கருப்பு மிளகை மணம் வரும் வரை வறுத்து, பின்னர் ஒரு கரண்டி பாஸ்தா நீரை சேர்க்கவும்.',
                    'கடாயை தீயிலிருந்து அகற்றி, துருவிய பெக்கோரினோ ரோமானோ மற்றும் இன்னும் கொஞ்சம் பாஸ்தா நீரை சேர்த்து, ஒரு கிரீமி எமல்ஷனை உருவாக்க வேகமாக கிளறவும்.',
                    'பாஸ்தாவை வடிகட்டி, உடனடியாக சீஸ் சாஸ் உள்ள கடாயில் சேர்த்து, தொடர்ந்து கிளறி பூசவும்.',
                    'மென்மையான, பளபளப்பான சாஸ் பெற தேவைப்பட்டால் மேலும் பாஸ்தா நீர் அல்லது சீஸ் சேர்க்கவும்.',
                    'கூடுதல் இடித்த மிளகு மற்றும் பெக்கோரினோவுடன் அலங்கரித்து உடனடியாக பரிமாறவும்।'
                ]
            }
        }
    },
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
            'Cut chicken into bite-sized pieces and thread onto skewers.',
            'Simmer soy sauce, mirin, sake, and sugar to make the tare sauce.',
            'Grill skewers over medium-high heat, turning and basting with tare sauce.',
            'Continue grilling until chicken is cooked through and caramelized.',
            'Garnish with green onions and serve immediately.'
        ],
        tags: ['Japanese', 'Dinner', 'Non-Vegetarian'],
        translations: {
            'zh-CN': {
                title: '日式烤鸡肉串',
                description: '香甜可口的日式烤鸡肉串，淋上照烧酱，好吃得不得了。',
                ingredients: [
                    { item: '鸡腿肉（去骨带皮）', amount: '500克' },
                    { item: '酱油', amount: '1/2 杯' },
                    { item: '味醂', amount: '1/2 杯' },
                    { item: '清酒', amount: '1/4 杯' },
                    { item: '糖', amount: '2 汤匙' },
                    { item: '青葱（装饰用）', amount: '2 根' },
                    { item: '竹签', amount: '12-15 根' }
                ],
                instructions: [
                    '鸡肉切小块，串起来。',
                    '酱油、味醂、清酒、糖煮浓。',
                    '中高火烤鸡串，边烤边刷酱。',
                    '烤到鸡肉熟透，焦糖色。',
                    '撒点葱花，趁热吃。'
                ]
            },
            'ms': {
                title: 'Yakitori',
                description: 'Sate ayam Jepun ni memang sedap, disalut sos tare yang manis-masin. Cuba lah!',
                ingredients: [
                    { item: 'Paha Ayam (tanpa tulang, dengan kulit)', amount: '500g' },
                    { item: 'Kicap Soya', amount: '1/2 cawan' },
                    { item: 'Mirin', amount: '1/2 cawan' },
                    { item: 'Sake', amount: '1/4 cawan' },
                    { item: 'Gula', amount: '2 sudu besar' },
                    { item: 'Daun Bawang (untuk hiasan)', amount: '2 tangkai' },
                    { item: 'Pencucuk Buluh', amount: '12-15 batang' }
                ],
                instructions: [
                    'Potong ayam kecil-kecil, cucuk kat lidi buluh.',
                    'Campur kicap, mirin, sake, gula dalam periuk. Reneh sampai pekat sikit, jadilah sos tare.',
                    'Bakar sate atas api sederhana. Balik-balikkan dan sapu sos tare tu.',
                    'Terus bakar dan sapu sampai ayam masak elok dan nampak berkaramel.',
                    'Tabur daun bawang cincang, hidang panas-panas.'
                ]
            },
            'hi': {
                title: 'याकिटोरी',
                description: 'मीठे और नमकीन तारे सॉस के साथ स्वादिष्ट जापानी ग्रिल्ड चिकन स्क्यूअर।',
                ingredients: [
                    { item: 'चिकन जांघ (हड्डी रहित, त्वचा सहित)', amount: '500 ग्राम' },
                    { item: 'सोया सॉस', amount: '1/2 कप' },
                    { item: 'मिरिन', amount: '1/2 कप' },
                    { item: 'साके', amount: '1/4 कप' },
                    { item: 'चीनी', amount: '2 बड़े चम्मच' },
                    { item: 'हरी प्याज (सजावट के लिए)', amount: '2 डंठल' },
                    { item: 'बांस की सीखें', amount: '12-15' }
                ],
                instructions: [
                    'चिकन को छोटे टुकड़ों में काट लें और बांस की सीखों पर पिरो लें।',
                    'सोया सॉस, मिरिन, साके और चीनी को एक सॉसपैन में मिलाएं; तारे सॉस बनाने के लिए गाढ़ा होने तक उबालें।',
                    'मध्यम-तेज आंच पर सीखों को ग्रिल करें, बार-बार पलटते रहें और तारे सॉस से ब्रश करें।',
                    'चिकन के पूरी तरह पकने और कैरामेल होने तक ग्रिल करना और ब्रश करना जारी रखें।',
                    'कटी हुई हरी प्याज से सजाकर तुरंत परोसें।'
                ]
            },
            'bn': {
                title: 'ইয়াকিতোরি',
                description: 'মিষ্টি এবং নোনতা টারে সস দিয়ে সুস্বাদু জাপানি গ্রিলড চিকেন স্কিউয়ার।',
                ingredients: [
                    { item: 'চিকেন থাই (হাড়বিহীন, চামড়াসহ)', amount: '500 গ্রাম' },
                    { item: 'সয়া সস', amount: '1/2 কাপ' },
                    { item: 'মিরিন', amount: '1/2 কাপ' },
                    { item: 'সাকে', amount: '1/4 কাপ' },
                    { item: 'চিনি', amount: '2 টেবিল চামচ' },
                    { item: 'সবুজ পেঁয়াজ (সাজানোর জন্য)', amount: '2 ডাঁটা' },
                    { item: 'বাঁশের কাঠি', amount: '12-15' }
                ],
                instructions: [
                    'চিকেন ছোট টুকরো করে কেটে বাঁশের কাঠিতে গেঁথে নিন।',
                    'সয়া সস, মিরিন, সাকে এবং চিনি একটি সসপ্যানে মিশিয়ে নিন; টারে সস তৈরি করতে সামান্য ঘন হওয়া পর্যন্ত ফুটিয়ে নিন।',
                    'মাঝারি-উচ্চ আঁচে কাঠিগুলো গ্রিল করুন, ঘন ঘন উল্টে দিন এবং টারে সস দিয়ে ব্রাশ করুন।',
                    'চিকেন পুরোপুরি রান্না হওয়া এবং ক্যারামেলাইজড না হওয়া পর্যন্ত গ্রিল করা এবং ব্রাশ করা চালিয়ে যান।',
                    'কাটা সবুজ পেঁয়াজ দিয়ে সাজিয়ে সাথে সাথে পরিবেশন করুন।'
                ]
            },
            'mr': {
                title: 'याकिटोरी',
                description: 'गोड आणि खारट तारे सॉसने लेपलेले चविष्ट जपानी ग्रिल्ड चिकन स्क्यूअर्स.',
                ingredients: [
                    { item: 'चिकन थाई (हाड नसलेले, त्वचेसह)', amount: '500 ग्रॅम' },
                    { item: 'सोया सॉस', amount: '1/2 कप' },
                    { item: 'मिरिन', amount: '1/2 कप' },
                    { item: 'साके', amount: '1/4 कप' },
                    { item: 'साखर', amount: '2 मोठे चमचे' },
                    { item: 'हिरवी कांदापात (सजावटीसाठी)', amount: '2 देठ' },
                    { item: 'बांबूच्या काड्या', amount: '12-15' }
                ],
                instructions: [
                    'चिकनचे लहान तुकडे करून बांबूच्या काड्यांवर ओवून घ्या.',
                    'सोया सॉस, मिरिन, साके आणि साखर एका सॉसपॅनमध्ये एकत्र करा; तारे सॉस बनवण्यासाठी थोडे घट्ट होईपर्यंत उकळा.',
                    'मध्यम-उच्च आचेवर स्क्यूअर्स ग्रिल करा, वारंवार फिरवा आणि तारे सॉसने ब्रश करा.',
                    'चिकन पूर्णपणे शिजून कॅरामेल होईपर्यंत ग्रिल करणे आणि ब्रश करणे सुरू ठेवा.',
                    'बारीक चिरलेल्या हिरव्या कांदापातीने सजवून लगेच सर्व्ह करा.'
                ]
            },
            'te': {
                title: 'యాకిటోరి',
                description: 'తీపి మరియు ఉప్పగా ఉండే టేర్ సాస్‌తో రుచికరమైన జపనీస్ గ్రిల్డ్ చికెన్ స్కేవర్స్.',
                ingredients: [
                    { item: 'చికెన్ తొడలు (ఎముకలు లేనివి, చర్మంతో)', amount: '500 గ్రా' },
                    { item: 'సోయా సాస్', amount: '1/2 కప్పు' },
                    { item: 'మిరిన్', amount: '1/2 కప్పు' },
                    { item: 'సాకే', amount: '1/4 కప్పు' },
                    { item: 'చక్కెర', amount: '2 టేబుల్ స్పూన్లు' },
                    { item: 'పచ్చి ఉల్లిపాయలు (అలంకరణ కోసం)', amount: '2 కాడలు' },
                    { item: 'వెదురు పుల్లలు', amount: '12-15' }
                ],
                instructions: [
                    'చికెన్‌ను చిన్న ముక్కలుగా కట్ చేసి వెదురు పుల్లలకు గుచ్చండి.',
                    'సోయా సాస్, మిరిన్, సాకే మరియు చక్కెరను ఒక సాస్‌పాన్‌లో కలపండి; టేర్ సాస్ చేయడానికి కొద్దిగా చిక్కబడే వరకు ఉడకబెట్టండి.',
                    'మధ్యస్థ-అధిక వేడి మీద స్కేవర్స్‌ను గ్రిల్ చేయండి, తరచుగా తిప్పుతూ మరియు టేర్ సాస్‌తో బ్రష్ చేయండి.',
                    'చికెన్ పూర్తిగా ఉడికి, క్యారమెలైజ్ అయ్యే వరకు గ్రిల్ చేయడం మరియు బ్రష్ చేయడం కొనసాగించండి.',
                    'తరిగిన పచ్చి ఉల్లిపాయలతో అలంకరించి వెంటనే వడ్డించండి.'
                ]
            },
            'ta': {
                title: 'யாகிடோரி',
                description: 'இனிப்பு மற்றும் உப்பு சுவையுள்ள டேர் சாஸுடன் சுவையான ஜப்பானிய கிரில்ட் சிக்கன் ஸ்கீவர்ஸ்.',
                ingredients: [
                    { item: 'சிக்கன் தொடை (எலும்பில்லாதது, தோலுடன்)', amount: '500 கிராம்' },
                    { item: 'சோயா சாஸ்', amount: '1/2 கப்' },
                    { item: 'மிரின்', amount: '1/2 கப்' },
                    { item: 'சாக்', amount: '1/4 கப்' },
                    { item: 'சர்க்கரை', amount: '2 தேக்கரண்டி' },
                    { item: 'பச்சை வெங்காயம் (அலங்காரத்திற்கு)', amount: '2 தண்டுகள்' },
                    { item: 'மூங்கில் குச்சிகள்', amount: '12-15' }
                ],
                instructions: [
                    'சிக்கனை கடித்து சாப்பிடும் அளவு துண்டுகளாக வெட்டி மூங்கில் குச்சிகளில் கோர்க்கவும்.',
                    'சோயா சாஸ், மிரின், சாக் மற்றும் சர்க்கரையை ஒரு சாஸ்பானில் சேர்த்து; டேர் சாஸ் தயாரிக்க சற்று கெட்டியாகும் வரை கொதிக்க விடவும்.',
                    'நடுத்தர-அதிக வெப்பத்தில் குச்சிகளை கிரில் செய்யவும், அடிக்கடி திருப்பி டேர் சாஸால் தடவவும்.',
                    'சிக்கன் முழுமையாக வெந்து, கேரமலைஸ் ஆகும் வரை கிரில் செய்து தடவுவதை தொடரவும்.',
                    'நறுக்கிய பச்சை வெங்காயத்தால் அலங்கரித்து உடனடியாக பரிமாறவும்.'
                ]
            }
        }
    },
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
            'Sauté onion, garlic, and fennel in olive oil until soft.',
            'Add tomatoes, saffron, fish stock, and white wine; simmer for 15 minutes.',
            'Gently add firm fish pieces and cook for 5-7 minutes.',
            'Stir in shrimp and mussels, cooking until shellfish open and shrimp are pink.',
            'Season with salt and pepper, then serve immediately with crusty bread.'
        ],
        tags: ['French', 'Dinner', 'Non-Vegetarian'],
        translations: {
            'zh-CN': {
                title: '马赛鱼汤',
                description: '浓郁芬芳的普罗旺斯鱼汤，地中海风味十足。',
                ingredients: [
                    { item: '什锦海鲜（结实白鱼、虾、贻贝）', amount: '共 2.5 磅' },
                    { item: '橄榄油', amount: '3 汤匙' },
                    { item: '芳香蔬菜（洋葱、大蒜、茴香）', amount: '1 个大洋葱，4 瓣大蒜，1 个小茴香头' },
                    { item: '罐装碎番茄', amount: '1 罐（28 盎司）' },
                    { item: '藏红花丝', amount: '1/2 茶匙' },
                    { item: '鱼汤', amount: '4 杯' },
                    { item: '干白葡萄酒', amount: '1 杯' }
                ],
                instructions: [
                    '橄榄油炒洋葱、蒜、茴香。',
                    '加番茄、藏红花、鱼汤、白酒，煮15分钟。',
                    '轻轻放鱼块，煮5-7分钟。',
                    '加虾和贻贝，煮到开口变粉。',
                    '加盐胡椒调味，配面包吃。'
                ]
            },
            'ms': {
                title: 'Bouillabaisse',
                description: 'Sup ikan Provençal ni memang kaya rasa, penuh aroma Mediterranean. Sedap sangat!',
                ingredients: [
                    { item: 'Makanan Laut Campuran (ikan putih pejal, udang, kupang)', amount: '2.5 paun jumlah' },
                    { item: 'Minyak Zaitun', amount: '3 sudu besar' },
                    { item: 'Sayuran Beraroma (bawang, bawang putih, adas)', amount: '1 biji bawang besar, 4 ulas bawang putih, 1 ulas adas kecil' },
                    { item: 'Tomato Hancur dalam Tin', amount: '1 tin (28 oz)' },
                    { item: 'Benang Saffron', amount: '1/2 sudu teh' },
                    { item: 'Stok Ikan', amount: '4 cawan' },
                    { item: 'Wain Putih Kering', amount: '1 cawan' }
                ],
                instructions: [
                    'Dalam periuk besar, tumis bawang, bawang putih, adas dalam minyak zaitun sampai lembut.',
                    'Masukkan tomato, saffron, stok ikan, dan wain putih. Didihkan, masak 15 minit.',
                    'Masukkan ikan perlahan-lahan, masak 5-7 minit sampai hampir masak.',
                    'Kacau udang dan kupang. Masak sampai kerang terbuka dan udang merah jambu, dalam 3-5 minit.',
                    'Perasakan dengan garam dan lada. Hidang terus dengan roti keras.'
                ]
            },
            'hi': {
                title: 'बुइयाबेस',
                description: 'भूमध्यसागरीय स्वादों से भरपूर एक समृद्ध, सुगंधित प्रोवेन्सल मछली स्टू।',
                ingredients: [
                    { item: 'मिश्रित समुद्री भोजन (सफेद मछली, झींगा, मसल्स)', amount: 'कुल 2.5 पाउंड' },
                    { item: 'जैतून का तेल', amount: '3 बड़े चम्मच' },
                    { item: 'सुगंधित सब्जियां (प्याज, लहसुन, सौंफ)', amount: '1 बड़ा प्याज, 4 कली लहसुन, 1 छोटा सौंफ का कंद' },
                    { item: 'डिब्बाबंद कुचले हुए टमाटर', amount: '1 (28 औंस) कैन' },
                    { item: 'केसर के धागे', amount: '1/2 छोटा चम्मच' },
                    { item: 'मछली का शोरबा', amount: '4 कप' },
                    { item: 'सूखी सफेद शराब', amount: '1 कप' }
                ],
                instructions: [
                    'एक बड़े बर्तन में जैतून के तेल में प्याज, लहसुन और सौंफ को नरम होने तक भूनें।',
                    'टमाटर, केसर, मछली का शोरबा और सफेद शराब डालें; उबाल आने दें और 15 मिनट तक पकाएं।',
                    'धीरे से मछली के टुकड़े डालें और लगभग पकने तक 5-7 मिनट तक पकाएं।',
                    'झींगा और मसल्स डालकर तब तक पकाएं जब तक शेलफिश खुल न जाए और झींगा गुलाबी न हो जाए, लगभग 3-5 मिनट।',
                    'नमक और काली मिर्च के साथ सीज़न करें, फिर तुरंत कुरकुरी रोटी के साथ परोसें।'
                ]
            },
            'bn': {
                title: 'বুইয়াবেস',
                description: 'ভূমধ্যসাগরীয় স্বাদে ভরপুর একটি সমৃদ্ধ, সুগন্ধি প্রোভেনসাল ফিশ স্টু।',
                ingredients: [
                    { item: 'মিশ্র সামুদ্রিক খাবার (সাদা মাছ, চিংড়ি, ঝিনুক)', amount: 'মোট 2.5 পাউন্ড' },
                    { item: 'জলপাই তেল', amount: '3 টেবিল চামচ' },
                    { item: 'সুগন্ধি সবজি (পেঁয়াজ, রসুন, মৌরি)', amount: '1টি বড় পেঁয়াজ, 4 কোয়া রসুন, 1টি ছোট মৌরি কন্দ' },
                    { item: 'টিনজাত থেঁতলানো টমেটো', amount: '1 (28 আউন্স) ক্যান' },
                    { item: 'জাফরান সুতা', amount: '1/2 চা চামচ' },
                    { item: 'মাছের স্টক', amount: '4 কাপ' },
                    { item: 'শুকনো সাদা ওয়াইন', amount: '1 কাপ' }
                ],
                instructions: [
                    'একটি বড় পাত্রে জলপাই তেলে পেঁয়াজ, রসুন এবং মৌরি নরম হওয়া পর্যন্ত ভাজুন।',
                    'টমেটো, জাফরান, মাছের স্টক এবং সাদা ওয়াইন যোগ করুন; ফুটিয়ে 15 মিনিট রান্না করুন।',
                    'আলতো করে মাছের টুকরোগুলি যোগ করুন এবং প্রায় সিদ্ধ হওয়া পর্যন্ত 5-7 মিনিট রান্না করুন।',
                    'চিংড়ি এবং ঝিনুক মিশিয়ে দিন, শেলফিশ খোলা এবং চিংড়ি গোলাপী হওয়া পর্যন্ত, প্রায় 3-5 মিনিট রান্না করুন।',
                    'লবণ এবং গোলমরিচ দিয়ে সিজন করুন, তারপর অবিলম্বে ক্রাস্টি রুটির সাথে পরিবেশন করুন।'
                ]
            },
            'mr': {
                title: 'बुइयाबेस',
                description: 'भूमध्यसागरीय चवींनी भरलेले एक समृद्ध, सुगंधी प्रोव्हेन्सल फिश स्टू.',
                ingredients: [
                    { item: 'मिश्रित सीफूड (घट्ट पांढरा मासा, कोळंबी, शिंपले)', amount: 'एकूण 2.5 पौंड' },
                    { item: 'ऑलिव्ह तेल', amount: '3 चमचे' },
                    { item: 'सुगंधी भाज्या (कांदा, लसूण, बडीशेप)', amount: '1 मोठा कांदा, 4 लसूण पाकळ्या, 1 लहान बडीशेप कंद' },
                    { item: 'कॅन केलेला ठेचलेला टोमॅटो', amount: '1 (28 औंस) कॅन' },
                    { item: 'केसरचे धागे', amount: '1/2 चमचा' },
                    { item: 'फिश स्टॉक', amount: '4 कप' },
                    { item: 'कोरडी पांढरी वाईन', amount: '1 कप' }
                ],
                instructions: [
                    'एका मोठ्या भांड्यात ऑलिव्ह तेलात कांदा, लसूण आणि बडीशेप मऊ होईपर्यंत परतून घ्या.',
                    'टोमॅटो, केसर, फिश स्टॉक आणि पांढरी वाईन घाला; उकळी आणून 15 मिनिटे शिजवा.',
                    'माशाचे तुकडे हळूवारपणे घाला आणि जवळजवळ शिजेपर्यंत 5-7 मिनिटे शिजवा.',
                    'कोळंबी आणि शिंपले घालून, शेलफिश उघडेपर्यंत आणि कोळंबी गुलाबी होईपर्यंत, सुमारे 3-5 मिनिटे शिजवा.',
                    'मीठ आणि मिरपूड घालून सीझन करा, नंतर लगेच कुरकुरीत ब्रेडसोबत सर्व्ह करा.'
                ]
            },
            'te': {
                title: 'బూయబేస్',
                description: 'మధ్యధరా రుచులతో నిండిన గొప్ప, సుగంధభరితమైన ప్రోవెన్సల్ ఫిష్ స్టూ.',
                ingredients: [
                    { item: 'మిశ్రమ సీఫుడ్ (గట్టి తెల్ల చేప, రొయ్యలు, మస్సెల్స్)', amount: 'మొత్తం 2.5 పౌండ్లు' },
                    { item: 'ఆలివ్ నూనె', amount: '3 టేబుల్ స్పూన్లు' },
                    { item: 'సుగంధ కూరగాయలు (ఉల్లిపాయ, వెల్లుల్లి, సోంపు)', amount: '1 పెద్ద ఉల్లిపాయ, 4 వెల్లుల్లి రెబ్బలు, 1 చిన్న సోంపు గడ్డ' },
                    { item: 'డబ్బాలో ఉన్న నలిపిన టొమాటోలు', amount: '1 (28 ఔన్సులు) డబ్బా' },
                    { item: 'కుంకుమపువ్వు దారాలు', amount: '1/2 టీస్పూన్' },
                    { item: 'చేపల స్టాక్', amount: '4 కప్పులు' },
                    { item: 'పొడి తెలుపు వైన్', amount: '1 కప్పు' }
                ],
                instructions: [
                    'ఒక పెద్ద కుండలో ఆలివ్ నూనెలో ఉల్లిపాయ, వెల్లుల్లి మరియు సోంపు మెత్తబడే వరకు వేయించాలి.',
                    'టొమాటోలు, కుంకుమపువ్వు, చేపల స్టాక్ మరియు తెలుపు వైన్ వేసి; మరిగించి 15 నిమిషాలు ఉడికించాలి.',
                    'చేప ముక్కలను నెమ్మదిగా వేసి, దాదాపు ఉడికే వరకు 5-7 నిమిషాలు ఉడికించాలి.',
                    'రొయ్యలు మరియు మస్సెల్స్ వేసి, షెల్ఫిష్ తెరుచుకునే వరకు మరియు రొయ్యలు గులాబీ రంగులోకి మారే వరకు, సుమారు 3-5 నిమిషాలు ఉడికించాలి.',
                    'ఉప్పు మరియు మిరియాలు వేసి, ఆపై వెంటనే క్రస్టీ బ్రెడ్‌తో వడ్డించండి.'
                ]
            },
            'ta': {
                title: 'பூயபேஸ்',
                description: 'மத்தியதரைக் கடல் சுவைகளுடன் நிறைந்த ஒரு செழுமையான, நறுமணமிக்க ப்ரோவென்சல் மீன் குழம்பு.',
                ingredients: [
                    { item: 'கலப்பு கடல் உணவு (கெட்டியான வெள்ளை மீன், இறால், மஸ்ஸல்ஸ்)', amount: 'மொத்தம் 2.5 பவுண்டுகள்' },
                    { item: 'ஆலிவ் எண்ணெய்', amount: '3 தேக்கரண்டி' },
                    { item: 'நறுமண காய்கறிகள் (வெங்காயம், பூண்டு, சோம்பு)', amount: '1 பெரிய வெங்காயம், 4 பல் பூண்டு, 1 சிறிய சோம்பு கிழங்கு' },
                    { item: 'டின் செய்யப்பட்ட நசுக்கிய தக்காளி', amount: '1 (28 அவுன்ஸ்) டின்' },
                    { item: 'குங்குமப்பூ இழைகள்', amount: '1/2 தேக்கரண்டி' },
                    { item: 'மீன் குழம்பு', amount: '4 கப்' },
                    { item: 'உலர்ந்த வெள்ளை ஒயின்', amount: '1 கப்' }
                ],
                instructions: [
                    'ஒரு பெரிய பாத்திரத்தில் ஆலிவ் எண்ணெயில் வெங்காயம், பூண்டு மற்றும் சோம்பு மென்மையாகும் வரை வதக்கவும்.',
                    'தக்காளி, குங்குமப்பூ, மீன் குழம்பு மற்றும் வெள்ளை ஒயின் சேர்த்து; கொதிக்க வைத்து 15 நிமிடங்கள் சமைக்கவும்.',
                    'மீன் துண்டுகளை மெதுவாக சேர்த்து, கிட்டத்தட்ட சமைக்கும் வரை 5-7 நிமிடங்கள் சமைக்கவும்.',
                    'இறால் மற்றும் மஸ்ஸல்ஸ் சேர்த்து, கடல் உணவுகள் திறக்கும் வரை மற்றும் இறால் இளஞ்சிவப்பு ஆகும் வரை, சுமார் 3-5 நிமிடங்கள் சமைக்கவும்.',
                    'உப்பு மற்றும் மிளகு சேர்த்து, பின்னர் உடனடியாக மொறுமொறுப்பான ரொட்டியுடன் பரிமாறவும்.'
                ]
            }
        }
    },
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
            'Boil chicken until tender, shred it, and reserve the broth.',
            'Toast chilies, rehydrate them, then blend with tomatillos and spices.',
            'Sauté the blended sauce in oil until thickened, stirring constantly.',
            'Stir in chocolate until melted, then add reserved chicken broth.',
            'Simmer the mole until rich and flavorful, then add the shredded chicken.',
            'Serve hot with rice, garnished with sesame seeds.'
        ],
        tags: ['Mexican', 'Dinner', 'Non-Vegetarian'],
        translations: {
            'zh-CN': {
                title: '莫雷酱鸡肉 (Mole Poblano)',
                description: '浓郁复杂的墨西哥酱汁，辣椒、香料和巧克力的奇妙组合。',
                ingredients: [
                    { item: '鸡肉块（鸡腿/鸡翅）', amount: '1.5 公斤' },
                    { item: '干安乔辣椒', amount: '4' },
                    { item: '干穆拉托辣椒', amount: '2' },
                    { item: '干帕西利亚辣椒', amount: '2' },
                    { item: '墨西哥酸浆', amount: '250克' },
                    { item: '墨西哥巧克力（块状）', amount: '50克' },
                    { item: '杏仁、芝麻、香料（孜然、丁香、肉桂）', amount: '1/4 杯混合' }
                ],
                instructions: [
                    '鸡肉煮烂，留汤撕碎。',
                    '辣椒烤香泡软，打成泥。',
                    '油炒酱汁，不停搅拌至稠。',
                    '加巧克力融化，再加鸡汤。',
                    '小火炖浓，放回鸡肉。',
                    '配米饭，撒芝麻，趁热吃。'
                ]
            },
            'ms': {
                title: 'Mole Poblano',
                description: 'Sos Mexico ni memang istimewa, penuh rasa cili, rempah, dan coklat. Cuba lah!',
                ingredients: [
                    { item: 'Potongan ayam (peha/kepak)', amount: '1.5 kg' },
                    { item: 'Cili Ancho kering', amount: '4' },
                    { item: 'Cili Mulato kering', amount: '2' },
                    { item: 'Cili Pasilla kering', amount: '2' },
                    { item: 'Tomatillo', amount: '250g' },
                    { item: 'Coklat Mexico (tablet)', amount: '50g' },
                    { item: 'Badam, bijan, rempah-ratus (jintan manis, cengkih, kayu manis)', amount: '1/4 cawan campuran' }
                ],
                instructions: [
                    'Rebus ayam sampai empuk. Simpan stok ayam, carikkan ayam tu.',
                    'Bakar cili, lepas tu rendam dalam air panas. Kisar dengan tomatillo dan rempah.',
                    'Tumis sos yang dah dikisar dalam minyak sampai pekat. Kacau selalu ya.',
                    'Masukkan coklat, kacau sampai cair. Lepas tu, masukkan stok ayam yang disimpan tadi.',
                    'Reneh mole sampai pekat dan sedap. Masukkan ayam carik tadi.',
                    'Hidang panas dengan nasi. Tabur bijan sikit bagi cantik.'
                ]
            },
            'hi': {
                title: 'मोल पोब्लानो',
                description: 'मिर्च, मसालों और चॉकलेट के साथ एक समृद्ध, जटिल और प्रतिष्ठित मैक्सिकन सॉस।',
                ingredients: [
                    { item: 'चिकन के टुकड़े (जांघ/ड्रमस्टिक)', amount: '1.5 किग्रा' },
                    { item: 'सूखी एंचो मिर्च', amount: '4' },
                    { item: 'सूखी मुलाटो मिर्च', amount: '2' },
                    { item: 'सूखी पासिला मिर्च', amount: '2' },
                    { item: 'टमाटरिल्लो', amount: '250 ग्राम' },
                    { item: 'मैक्सिकन चॉकलेट (टैबलेट)', amount: '50 ग्राम' },
                    { item: 'बादाम, तिल, मसाले (जीरा, लौंग, दालचीनी)', amount: '1/4 कप मिश्रित' }
                ],
                instructions: [
                    'चिकन को नरम होने तक उबालें; शोरबा अलग रखें और चिकन को श्रेड करें।',
                    'मिर्च को भूनें, फिर गर्म पानी में भिगोकर नरम करें; टमाटरिल्लो और मसालों के साथ पीस लें।',
                    'पिसे हुए सॉस को तेल में गाढ़ा होने तक लगातार चलाते हुए भूनें।',
                    'चॉकलेट पिघलने तक मिलाएं, फिर बचा हुआ चिकन शोरबा डालें।',
                    'मोल को गाढ़ा और स्वादिष्ट होने तक धीमी आंच पर पकाएं, फिर श्रेडेड चिकन डालें।',
                    'चावल के साथ गरमागरम परोसें, तिल से सजाएं।'
                ]
            },
            'bn': {
                title: 'মোল পোব্লানো',
                description: 'মরিচ, মশলা এবং চকোলেট দিয়ে তৈরি একটি সমৃদ্ধ, জটিল এবং আইকনিক মেক্সিকান সস।',
                ingredients: [
                    { item: 'মুরগির টুকরা (উরুর/ড্রামস্টিক)', amount: '1.5 কেজি' },
                    { item: 'শুকনো অ্যাঙ্কো মরিচ', amount: '4টি' },
                    { item: 'শুকনো মুলাটো মরিচ', amount: '2টি' },
                    { item: 'শুকনো পাসিলা মরিচ', amount: '2টি' },
                    { item: 'টমাটিলো', amount: '250 গ্রাম' },
                    { item: 'মেক্সিকান চকোলেট (ট্যাবলেট)', amount: '50 গ্রাম' },
                    { item: 'বাদাম, তিল, মশলা (জিরা, লবঙ্গ, দারুচিনি)', amount: '1/4 কাপ মিশ্রিত' }
                ],
                instructions: [
                    'মুরগিকে নরম হওয়া পর্যন্ত সেদ্ধ করুন; ঝোল আলাদা রাখুন এবং মুরগি ছিঁড়ে নিন।',
                    'মরিচ ভেজে নিন, তারপর গরম জলে ভিজিয়ে নরম করুন; টমাটিলো এবং মশলা দিয়ে ব্লেন্ড করুন।',
                    'ব্লেন্ড করা সস তেলে ঘন হওয়া পর্যন্ত ক্রমাগত নাড়তে থাকুন।',
                    'চকোলেট গলে যাওয়া পর্যন্ত মেশান, তারপর সংরক্ষিত মুরগির ঝোল যোগ করুন।',
                    'মোল ঘন ও সুস্বাদু হওয়া পর্যন্ত অল্প আঁচে রান্না করুন, তারপর ছিঁড়ে রাখা মুরগি যোগ করুন।',
                    'ভাত দিয়ে গরম গরম পরিবেশন করুন, তিল দিয়ে সাজান।'
                ]
            },
            'mr': {
                title: 'मोल पोब्लानो',
                description: 'मिरची, मसाले आणि चॉकलेटसह एक समृद्ध, जटिल आणि प्रतिष्ठित मेक्सिकन सॉस.',
                ingredients: [
                    { item: 'चिकनचे तुकडे (मांडी/ड्रमस्टिक)', amount: '1.5 किलो' },
                    { item: 'सुक्या अँको मिरच्या', amount: '4' },
                    { item: 'सुक्या मुलाटो मिरच्या', amount: '2' },
                    { item: 'सुक्या पासिला मिरच्या', amount: '2' },
                    { item: 'टोमॅटिलो', amount: '250 ग्रॅम' },
                    { item: 'मेक्सिकन चॉकलेट (गोळ्या)', amount: '50 ग्रॅम' },
                    { item: 'बदाम, तीळ, मसाले (जिरे, लवंग, दालचिनी)', amount: '1/4 कप मिश्रित' }
                ],
                instructions: [
                    'चिकन मऊ होईपर्यंत उकळा; सूप बाजूला ठेवा आणि चिकनचे तुकडे करा.',
                    'मिरच्या भाजून घ्या, नंतर गरम पाण्यात भिजवून मऊ करा; टोमॅटिलो आणि मसाल्यांसोबत वाटून घ्या.',
                    'वाटलेले सॉस तेलात घट्ट होईपर्यंत सतत ढवळत परतून घ्या.',
                    'चॉकलेट वितळेपर्यंत मिसळा, नंतर बाजूला ठेवलेले चिकन सूप घाला.',
                    'मोल घट्ट आणि चवदार होईपर्यंत मंद आचेवर शिजवा, नंतर चिकनचे तुकडे घाला.',
                    'गरम भातासोबत सर्व्ह करा, तिळाने सजवा.'
                ]
            },
            'te': {
                title: 'మోల్ పోబ్లానో',
                description: 'మిరపకాయలు, మసాలాలు మరియు చాక్లెట్‌తో కూడిన గొప్ప, సంక్లిష్టమైన మరియు ఐకానిక్ మెక్సికన్ సాస్.',
                ingredients: [
                    { item: 'చికెన్ ముక్కలు (తొడలు/డ్రమ్‌స్టిక్‌లు)', amount: '1.5 కిలోలు' },
                    { item: 'ఎండిన అంచో మిరపకాయలు', amount: '4' },
                    { item: 'ఎండిన ములాటో మిరపకాయలు', amount: '2' },
                    { item: 'ఎండిన పాసిల్లా మిరపకాయలు', amount: '2' },
                    { item: 'టొమాటిల్లోలు', amount: '250 గ్రా' },
                    { item: 'మెక్సికన్ చాక్లెట్ (టాబ్లెట్‌లు)', amount: '50 గ్రా' },
                    { item: 'బాదం, నువ్వులు, మసాలాలు (జీలకర్ర, లవంగాలు, దాల్చినచెక్క)', amount: '1/4 కప్పు మిశ్రమం' }
                ],
                instructions: [
                    'చికెన్‌ను మెత్తగా ఉడికించి; రసం పక్కన పెట్టి, చికెన్‌ను తురుముకోవాలి.',
                    'మిరపకాయలను వేయించి, ఆపై వేడి నీటిలో నానబెట్టి; టొమాటిల్లోలు మరియు మసాలాలతో కలిపి రుబ్బుకోవాలి.',
                    'రుబ్బిన సాస్‌ను నూనెలో చిక్కబడే వరకు నిరంతరం కలుపుతూ వేయించాలి.',
                    'చాక్లెట్ కరిగే వరకు కలిపి, ఆపై పక్కన పెట్టిన చికెన్ రసం కలపాలి.',
                    'మోల్‌ను చిక్కగా మరియు రుచికరంగా అయ్యే వరకు ఉడికించి, ఆపై తురిమిన చికెన్ కలపాలి.',
                    'నువ్వులతో అలంకరించి, అన్నంతో వేడివేడిగా వడ్డించాలి.'
                ]
            },
            'ta': {
                title: 'மோல் போப்லானோ',
                description: 'மிளகாய், மசாலா மற்றும் சாக்லேட் கொண்ட ஒரு செழுமையான, சிக்கலான மற்றும் பிரபலமான மெக்சிகன் சாஸ்.',
                ingredients: [
                    { item: 'கோழி துண்டுகள் (தொடை/டிரம்ஸ்டிக்ஸ்)', amount: '1.5 கிலோ' },
                    { item: 'உலர்ந்த அன்சோ மிளகாய்', amount: '4' },
                    { item: 'உலர்ந்த முலாட்டோ மிளகாய்', amount: '2' },
                    { item: 'உலர்ந்த பாசில்லா மிளகாய்', amount: '2' },
                    { item: 'தக்காளி (Tomatillos)', amount: '250 கிராம்' },
                    { item: 'மெக்சிகன் சாக்லேட் (மாத்திரைகள்)', amount: '50 கிராம்' },
                    { item: 'பாதாம், எள், மசாலாப் பொருட்கள் (சீரகம், கிராம்பு, இலவங்கப்பட்டை)', amount: '1/4 கப் கலவை' }
                ],
                instructions: [
                    'கோழியை மென்மையாகும் வரை வேகவைத்து; குழம்பை ஒதுக்கி வைத்து, கோழியை உதிர்த்துக்கொள்ளவும்.',
                    'மிளகாயை வறுத்து, பின்னர் சூடான நீரில் ஊறவைத்து; தக்காளி மற்றும் மசாலாப் பொருட்களுடன் அரைக்கவும்.',
                    'அரைத்த சாஸை எண்ணெயில் கெட்டியாகும் வரை தொடர்ந்து கிளறி வதக்கவும்.',
                    'சாக்லேட் உருகும் வரை கிளறி, பின்னர் ஒதுக்கி வைத்த கோழி குழம்பைச் சேர்க்கவும்.',
                    'மோல் கெட்டியாகி சுவையாகும் வரை கொதிக்கவைத்து, பின்னர் உதிர்த்த கோழியைச் சேர்க்கவும்.',
                    'அரிசி சாதத்துடன் சூடாகப் பரிமாறவும், எள் கொண்டு அலங்கரிக்கவும்.'
                ]
            }
        }
    },
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
            'Whisk fish sauce, oyster sauce, soy sauce, sugar, and white pepper for the sauce. Set aside.',
            'Heat oil in a wok. Stir-fry chicken or shrimp until cooked, then push aside. Scramble eggs, then mix with protein.',
            'Add garlic and shallots to the wok, stir-fry until fragrant. Add onion and cook until soft.',
            'Toss in day-old jasmine rice and the prepared sauce. Stir-fry for 3-5 minutes until heated through and slightly toasted.',
            'Fold in tomato wedges and scallions. Cook just until warm, keeping them fresh and vibrant.',
            'Serve immediately with cucumber, lime, and cilantro. Enjoy your authentic Khao Pad!'
        ],
        tags: ['Thai', 'Dinner', 'Non-Vegetarian'],
        translations: {
            'zh-CN': {
                title: '泰式炒饭 (Khao Pad)',
                description: '这泰式炒饭，甜咸鲜香，每一口都像去了曼谷！',
                ingredients: [
                    { item: '煮熟的茉莉香米（隔夜，冷藏）', amount: '4 杯' },
                    { item: '鸡胸肉（或虾），切薄片', amount: '1 磅 (约 450克)' },
                    { item: '大鸡蛋', amount: '2' },
                    { item: '蒜末', amount: '4 瓣' },
                    { item: '葱头，切薄片', amount: '2 中等' },
                    { item: '鱼露', amount: '3 汤匙' },
                    { item: '蚝油', amount: '2 汤匙' },
                    { item: '生抽', amount: '1 汤匙' },
                    { item: '糖（棕榈糖或砂糖）', amount: '1 茶匙' },
                    { item: '白胡椒粉', amount: '1/2 茶匙' },
                    { item: '植物油', amount: '3 汤匙' },
                    { item: '洋葱，切丁', amount: '1/2 中等' },
                    { item: '番茄，切块', amount: '1 中等' },
                    { item: '香葱，切碎', amount: '1/4 杯' },
                    { item: '黄瓜片、青柠角、新鲜香菜（用于装饰）', amount: '适量' }
                ],
                instructions: [
                    '鱼露、蚝油、生抽、糖、胡椒调酱。',
                    '鸡肉炒熟推一边，鸡蛋炒散。',
                    '蒜、葱头炒香，加洋葱炒软。',
                    '加冷饭和酱汁，大火翻炒。',
                    '拌入番茄、香葱，炒匀。',
                    '摆盘，配黄瓜、青柠、香菜，快吃！'
                ]
            },
            'ms': {
                title: 'Khao Pad (Nasi Goreng Thai)',
                description: 'Nak rasa macam kat Bangkok? Cuba lah Khao Pad ni! Nasi goreng Thai yang penuh rasa, manis, masin, umami, semua ada.',
                ingredients: [
                    { item: 'Nasi Jasmine yang dimasak (semalaman, disejukkan)', amount: '4 cawan' },
                    { item: 'Isi ayam (atau udang), dihiris nipis', amount: '1 paun (kira-kira 450g)' },
                    { item: 'Telur besar', amount: '2' },
                    { item: 'Bawang putih, dicincang', amount: '4 ulas' },
                    { item: 'Bawang merah, dihiris nipis', amount: '2 sederhana' },
                    { item: 'Sos ikan', amount: '3 sudu besar' },
                    { item: 'Sos tiram', amount: '2 sudu besar' },
                    { item: 'Kicap cair', amount: '1 sudu besar' },
                    { item: 'Gula (gula melaka atau gula pasir)', amount: '1 sudu kecil' },
                    { item: 'Lada putih', amount: '1/2 sudu kecil' },
                    { item: 'Minyak sayuran', amount: '3 sudu besar' },
                    { item: 'Bawang besar, didadu', amount: '1/2 sederhana' },
                    { item: 'Tomato, dipotong baji', amount: '1 sederhana' },
                    { item: 'Daun bawang, dicincang', amount: '1/4 cawan' },
                    { item: 'Hirisan timun, hirisan limau nipis, daun ketumbar segar (untuk hiasan)', amount: 'Secukupnya' }
                ],
                instructions: [
                    'Campur sos ikan, sos tiram, kicap cair, gula, lada putih dalam mangkuk kecil. Ketepikan.',
                    'Panaskan minyak dalam kuali. Goreng ayam atau udang sampai masak dan keperangan.',
                    'Tolak tepi protein, masukkan lagi minyak. Pecahkan telur, hancurkan sampai masak, campur dengan protein.',
                    'Masukkan bawang putih dan bawang merah, tumis sampai wangi. Lepas tu, masukkan bawang besar, tumis sampai lembut.',
                    'Masukkan nasi sejuk dalam kuali. Tuang sos tadi rata-rata. Gaul nasi sampai semua bersalut elok.',
                    'Terus goreng 3-5 minit sampai nasi panas dan garing sikit.',
                    'Masukkan tomato dan daun bawang, gaul sekejap je. Jangan masak lama sangat nanti layu.',
                    'Hidang Khao Pad dengan timun, limau nipis, dan daun ketumbar. Selamat menjamu selera!'
                ]
            },
            'hi': {
                title: 'खाओ पैड (फ्राइड राइस)',
                description: 'इस क्लासिक थाई खाओ पैड में स्वादों की जीवंत सिम्फनी का अनुभव करें! पूरी तरह से वोक-टॉस्ड चावल, स्वादिष्ट सॉस, नरम प्रोटीन और कुरकुरी सब्जियों से भरपूर, मीठे, नमकीन और उमामी का एक अनूठा सामंजस्य बनाता है। हर निवाला बैंकॉक की हलचल भरी सड़कों की यात्रा है, जो वास्तव में प्रामाणिक स्वाद का वादा करता है। इसके बारे में सिर्फ सपने न देखें - आज रात थाईलैंड का जादू अपनी रसोई में लाएँ!',
                ingredients: [
                    { item: 'पके हुए जैस्मीन चावल (एक दिन पुराने, ठंडे)', amount: '4 कप' },
                    { item: 'चिकन ब्रेस्ट (या झींगा), पतले कटे हुए', amount: '1 पौंड (लगभग 450 ग्राम)' },
                    { item: 'बड़े अंडे', amount: '2' },
                    { item: 'लहसुन, बारीक कटा हुआ', amount: '4 कलियाँ' },
                    { item: 'शैलट्स, पतले कटे हुए', amount: '2 मध्यम' },
                    { item: 'फिश सॉस', amount: '3 बड़े चम्मच' },
                    { item: 'ऑयस्टर सॉस', amount: '2 बड़े चम्मच' },
                    { item: 'सोया सॉस (हल्का)', amount: '1 बड़ा चम्मच' },
                    { item: 'चीनी (पाम या दानेदार)', amount: '1 छोटा चम्मच' },
                    { item: 'सफेद मिर्च', amount: '1/2 छोटा चम्मच' },
                    { item: 'वनस्पति तेल', amount: '3 बड़े चम्मच' },
                    { item: 'प्याज, कटा हुआ', amount: '1/2 मध्यम' },
                    { item: 'टमाटर, फांकों में कटा हुआ', amount: '1 मध्यम' },
                    { item: 'स्प्रिंग अनियन, कटा हुआ', amount: '1/4 कप' },
                    { item: 'खीरे के टुकड़े, नींबू के फांक', amount: 'undefined' }
                ],
                instructions: [

                ]
            },
            'bn': {
                title: '',
                description: '',
                ingredients: [

                ],
                instructions: [

                ]
            },
            'mr': {
                title: '',
                description: '',
                ingredients: [

                ],
                instructions: [

                ]
            },
            'te': {
                title: '',
                description: '',
                ingredients: [

                ],
                instructions: [

                ]
            },
            'ta': {
                title: '',
                description: '',
                ingredients: [

                ],
                instructions: [

                ]
            }
        }
    },
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
            'Coat thinly sliced beef with cornstarch.',
            'Whisk soy sauce, water, brown sugar, ginger, and garlic for your sauce.',
            'Heat oil in a wok. Stir-fry beef in batches until browned, then remove.',
            'Add sauce to the wok and simmer until it thickens. Return beef, toss to coat, and cook for 1-2 minutes.',
            'Garnish with green onions and serve hot with rice.'
        ],
        tags: ['Chinese', 'Dinner', 'Non-Vegetarian'],
        translations: {
            'zh-CN': {
                title: '蒙古牛肉',
                description: '嫩牛肉裹着甜甜的酱汁，姜蒜味香浓，配饭一流！',
                ingredients: [
                    { item: '牛腩', amount: '1.5 磅 (薄切)' },
                    { item: '玉米淀粉', amount: '2 汤匙' },
                    { item: '酱油', amount: '1/2 杯' },
                    { item: '水', amount: '1/4 杯' },
                    { item: '红糖', amount: '1/2 杯' },
                    { item: '新鲜姜', amount: '1 汤匙 (磨碎)' },
                    { item: '大蒜', amount: '3 瓣 (切碎)' },
                    { item: '植物油', amount: '3 汤匙' },
                    { item: '青葱', amount: '1 束 (切段)' }
                ],
                instructions: [
                    '牛肉裹上玉米淀粉。',
                    '酱油、水、红糖、姜、蒜调酱。',
                    '炒锅热油，牛肉炒变色取出。',
                    '酱汁入锅煮浓，牛肉回锅炒匀。',
                    '撒葱花，配米饭，趁热吃。'
                ]
            },
            'ms': {
                title: 'Daging Mongolia',
                description: 'Daging lembu lembut dengan sos manis-masin, ada halia dan bawang putih. Memang sedap sangat!',
                ingredients: [
                    { item: 'Daging lembu rusuk', amount: '1.5 paun (dihiris nipis)' },
                    { item: 'Tepung jagung', amount: '2 sudu besar' },
                    { item: 'Kicap', amount: '1/2 cawan' },
                    { item: 'Air', amount: '1/4 cawan' },
                    { item: 'Gula perang', amount: '1/2 cawan' },
                    { item: 'Halia segar', amount: '1 sudu besar (diparut)' },
                    { item: 'Bawang putih', amount: '3 ulas (dicincang)' },
                    { item: 'Minyak sayuran', amount: '3 sudu besar' },
                    { item: 'Daun bawang', amount: '1 ikat (dicincang)' }
                ],
                instructions: [
                    'Salut hirisan daging lembu dengan tepung jagung.',
                    'Campur kicap, air, gula perang, halia, bawang putih untuk sos.',
                    'Panaskan minyak dalam kuali. Goreng daging lembu sikit-sikit sampai perang, angkat.',
                    'Masukkan sos dalam kuali, reneh sampai pekat. Masukkan balik daging lembu, gaul rata, masak 1-2 minit.',
                    'Tabur daun bawang, hidang panas dengan nasi.'
                ]
            },
            'hi': {
                title: 'मंगोलियाई बीफ',
                description: 'बेहतरीन आरामदायक भोजन का आनंद लें: नरम, पतले कटे हुए बीफ को सुगंधित अदरक और लहसुन के साथ एक समृद्ध, नमकीन-मीठी चटनी में नहलाया गया। यह प्रतिष्ठित व्यंजन स्वादों की एक सिम्फनी का वादा करता है, पूरी तरह से कैरामेलाइज़्ड और अविश्वसनीय रूप से संतोषजनक। इस रेस्टोरेंट-गुणवत्ता वाले व्यंजन से आज रात अपने खाने को बेहतर बनाएं!',
                ingredients: [
                    { item: 'बीफ फ्लैंक स्टेक', amount: '1.5 पाउंड (पतले कटे हुए)' },
                    { item: 'कॉर्नस्टार्च', amount: '2 बड़े चम्मच' },
                    { item: 'सोया सॉस', amount: '1/2 कप' },
                    { item: 'पानी', amount: '1/4 कप' },
                    { item: 'ब्राउन शुगर', amount: '1/2 कप' },
                    { item: 'ताजा अदरक', amount: '1 बड़ा चम्मच (कद्दूकस किया हुआ)' },
                    { item: 'लहसुन', amount: '3 कलियाँ (बारीक कटा हुआ)' },
                    { item: 'वनस्पति तेल', amount: '3 बड़े चम्मच' },
                    { item: 'हरी प्याज', amount: '1 गुच्छा (कटी हुई)' }
                ],
                instructions: [
                    'कटे हुए बीफ को कॉर्नस्टार्च से लपेटें।',
                    'सॉस के लिए सोया सॉस, पानी, ब्राउन शुगर, अदरक और लहसुन को फेंटें।',
                    'कड़ाही में तेल गरम करें; बीफ को बैचों में भूनें जब तक कि वह भूरा न हो जाए, फिर निकाल लें।',
                    'कड़ाही में सॉस डालें, गाढ़ा होने तक उबालें। बीफ वापस डालें, लपेटने के लिए टॉस करें, और 1-2 मिनट तक पकाएं।',
                    'हरी प्याज से सजाकर चावल के साथ गरमागरम परोसें।'
                ]
            },
            'bn': {
                title: 'মঙ্গোলিয়ান বিফ',
                description: 'চূড়ান্ত আরামদায়ক খাবারের স্বাদ নিন: নরম, পাতলা করে কাটা গরুর মাংস সুগন্ধি আদা এবং রসুনের সাথে একটি সমৃদ্ধ, সুস্বাদু-মিষ্টি সসে ডুবানো। এই আইকনিক খাবারটি স্বাদের এক সিম্ফনির প্রতিশ্রুতি দেয়, পুরোপুরি ক্যারামেলাইজড এবং অবিশ্বাস্যভাবে সন্তোষজনক। এই রেস্তোরাঁ-মানের খাবার দিয়ে আজ রাতে আপনার ডিনারকে উন্নত করুন!',
                ingredients: [
                    { item: 'বিফ ফ্ল্যাঙ্ক স্টেক', amount: '1.5 পাউন্ড (পাতলা করে কাটা)' },
                    { item: 'কর্নস্টার্চ', amount: '2 টেবিল চামচ' },
                    { item: 'সয়া সস', amount: '1/2 কাপ' },
                    { item: 'জল', amount: '1/4 কাপ' },
                    { item: 'ব্রাউন সুগার', amount: '1/2 কাপ' },
                    { item: 'তাজা আদা', amount: '1 টেবিল চামচ (গ্রেট করা)' },
                    { item: 'রসুন', amount: '3 কোয়া (কুচি করা)' },
                    { item: 'উদ্ভিজ্জ তেল', amount: '3 টেবিল চামচ' },
                    { item: 'সবুজ পেঁয়াজ', amount: '1 গুচ্ছ (কাটা)' }
                ],
                instructions: [
                    'পাতলা করে কাটা গরুর মাংস কর্নস্টার্চ দিয়ে মাখিয়ে নিন।',
                    'সসের জন্য সয়া সস, জল, ব্রাউন সুগার, আদা এবং রসুন ফেটিয়ে নিন।',
                    'কড়াইতে তেল গরম করুন; গরুর মাংস ব্যাচে বাদামী হওয়া পর্যন্ত ভাজুন, তারপর তুলে নিন।',
                    'কড়াইতে সস যোগ করুন, ঘন হওয়া পর্যন্ত ফুটিয়ে নিন। গরুর মাংস ফিরিয়ে দিন, মাখিয়ে নিন এবং 1-2 মিনিট রান্না করুন।',
                    'সবুজ পেঁয়াজ দিয়ে সাজিয়ে ভাতের সাথে গরম গরম পরিবেশন করুন।'
                ]
            },
            'mr': {
                title: 'मंगोलियन बीफ',
                description: 'अंतिम आरामदायक अन्नाचा आनंद घ्या: कोमल, पातळ कापलेले बीफ सुगंधी आले आणि लसूण असलेल्या समृद्ध, चवदार-गोड सॉसमध्ये बुडवलेले. हा प्रतिष्ठित पदार्थ चवींची सिम्फनी देतो, पूर्णपणे कॅरमेलाइज्ड आणि अविश्वसनीयपणे समाधानकारक. या रेस्टॉरंट-गुणवत्तेच्या पदार्थाने आज रात्री तुमचे जेवण उत्कृष्ट बनवा!',
                ingredients: [
                    { item: 'बीफ फ्लँक स्टेक', amount: '1.5 पौंड (पातळ कापलेले)' },
                    { item: 'कॉर्नस्टार्च', amount: '2 चमचे' },
                    { item: 'सोया सॉस', amount: '1/2 कप' },
                    { item: 'पाणी', amount: '1/4 कप' },
                    { item: 'ब्राऊन शुगर', amount: '1/2 कप' },
                    { item: 'ताजे आले', amount: '1 चमचा (किसलेले)' },
                    { item: 'लसूण', amount: '3 पाकळ्या (बारीक चिरलेले)' },
                    { item: 'वनस्पती तेल', amount: '3 चमचे' },
                    { item: 'हिरवी कांदा', amount: '1 जुडी (चिरलेली)' }
                ],
                instructions: [
                    'पातळ कापलेल्या बीफला कॉर्नस्टार्च लावा.',
                    'सॉससाठी सोया सॉस, पाणी, ब्राऊन शुगर, आले आणि लसूण एकत्र फेटा.',
                    'कढईत तेल गरम करा; बीफचे तुकडे सोनेरी होईपर्यंत तळा, नंतर काढून टाका.',
                    'कढईत सॉस घाला, घट्ट होईपर्यंत उकळा. बीफ परत घाला, एकत्र करा आणि 1-2 मिनिटे शिजवा.',
                    'हिरव्या कांद्याने सजवा आणि भातासोबत गरम सर्व्ह करा.'
                ]
            },
            'te': {
                title: 'మంగోలియన్ బీఫ్',
                description: 'అద్భుతమైన సౌకర్యవంతమైన ఆహారాన్ని ఆస్వాదించండి: సువాసనగల అల్లం మరియు వెల్లుల్లితో కూడిన రుచికరమైన, తీపి సాస్‌లో ముంచిన మృదువైన, సన్నగా తరిగిన బీఫ్. ఈ ఐకానిక్ వంటకం రుచుల సింఫొనీని అందిస్తుంది, సంపూర్ణంగా కారామెలైజ్ చేయబడినది మరియు అద్భుతంగా సంతృప్తికరమైనది. ఈ రెస్టారెంట్-నాణ్యత వంటకంతో ఈ రాత్రి మీ విందును మెరుగుపరచండి!',
                ingredients: [
                    { item: 'బీఫ్ ఫ్లాంక్ స్టీక్', amount: '1.5 పౌండ్లు (సన్నగా తరిగిన)' },
                    { item: 'కార్న్‌స్టార్చ్', amount: '2 టేబుల్ స్పూన్లు' },
                    { item: 'సోయా సాస్', amount: '1/2 కప్పు' },
                    { item: 'నీరు', amount: '1/4 కప్పు' },
                    { item: 'బ్రౌన్ షుగర్', amount: '1/2 కప్పు' },
                    { item: 'తాజా అల్లం', amount: '1 టేబుల్ స్పూన్ (తురిమిన)' },
                    { item: 'వెల్లుల్లి', amount: '3 రెబ్బలు (ముక్కలు చేసిన)' },
                    { item: 'కూరగాయల నూనె', amount: '3 టేబుల్ స్పూన్లు' },
                    { item: 'పచ్చి ఉల్లిపాయలు', amount: '1 కట్ట (తరిగిన)' }
                ],
                instructions: [
                    'తరిగిన బీఫ్‌ను కార్న్‌స్టార్చ్‌తో పూయండి.',
                    'సాస్ కోసం సోయా సాస్, నీరు, బ్రౌన్ షుగర్, అల్లం మరియు వెల్లుల్లిని కలపండి.',
                    'కడాయిలో నూనె వేడి చేయండి; బీఫ్‌ను బ్యాచ్‌లలో గోధుమ రంగు వచ్చేవరకు వేయించి, తీసివేయండి.',
                    'కడాయిలో సాస్ వేసి, చిక్కబడే వరకు ఉడకబెట్టండి. బీఫ్‌ను తిరిగి వేసి, కలపండి మరియు 1-2 నిమిషాలు ఉడికించండి.',
                    'పచ్చి ఉల్లిపాయలతో అలంకరించి, అన్నంతో వేడివేడిగా వడ్డించండి.'
                ]
            },
            'ta': {
                title: 'மங்கோலியன் மாட்டிறைச்சி',
                description: 'மென்மையான, மெல்லியதாக வெட்டப்பட்ட மாட்டிறைச்சியை நறுமணமிக்க இஞ்சி மற்றும் பூண்டுடன் கூடிய செழுமையான, சுவையான-இனிப்பு சாஸில் குளிப்பாட்டி, அற்புதமான ஆறுதல் உணவை அனுபவிக்கவும். இந்த சின்னமான உணவு சுவைகளின் சிம்பொனியை உறுதியளிக்கிறது, கச்சிதமாக கேரமலைஸ் செய்யப்பட்டு நம்பமுடியாத திருப்தியை அளிக்கிறது. இந்த உணவகத் தரமான உணவின் மூலம் இன்றிரவு உங்கள் இரவு உணவை மேம்படுத்துங்கள்!',
                ingredients: [
                    { item: 'மாட்டிறைச்சி ஃபிளாங்க் ஸ்டீக்', amount: '1.5 பவுண்ட் (மெல்லியதாக வெட்டப்பட்டது)' },
                    { item: 'சோள மாவு', amount: '2 தேக்கரண்டி' },
                    { item: 'சோயா சாஸ்', amount: '1/2 கப்' },
                    { item: 'தண்ணீர்', amount: '1/4 கப்' },
                    { item: 'பழுப்பு சர்க்கரை', amount: '1/2 கப்' },
                    { item: 'புதிய இஞ்சி', amount: '1 தேக்கரண்டி (துருவியது)' },
                    { item: 'பூண்டு', amount: '3 பற்கள் (நறுக்கியது)' },
                    { item: 'காய்கறி எண்ணெய்', amount: '3 தேக்கரண்டி' },
                    { item: 'பச்சை வெங்காயம்', amount: '1 கொத்து (நறுக்கியது)' }
                ],
                instructions: [
                    'வெட்டப்பட்ட மாட்டிறைச்சியை சோள மாவுடன் பூசவும்.',
                    'சாஸிற்காக சோயா சாஸ், தண்ணீர், பழுப்பு சர்க்கரை, இஞ்சி மற்றும் பூண்டு ஆகியவற்றை ஒன்றாக கலக்கவும்.',
                    'கடாயில் எண்ணெய் சூடாக்கவும்; மாட்டிறைச்சியை பொன்னிறமாகும் வரை வறுத்து, பின்னர் அகற்றவும்.',
                    'கடாயில் சாஸை சேர்த்து, கெட்டியாகும் வரை கொதிக்க விடவும். மாட்டிறைச்சியை மீண்டும் சேர்த்து, கலக்கி, 1-2 நிமிடங்கள் சமைக்கவும்.',
                    'பச்சை வெங்காயத்தால் அலங்கரித்து, சாதத்துடன் சூடாக பரிமாறவும்.'
                ]
            }
        }
    },
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
            'Poach a whole chicken with ginger, garlic, and spring onions. Save that delicious broth!',
            'Plunge the cooked chicken into an ice bath for 10 minutes. Pat dry, then chop into serving pieces.',
            'Sauté ginger and garlic, then add jasmine rice. Cook it with the reserved chicken broth until fluffy and fragrant.',
            'Serve the chopped chicken over the fragrant rice. Garnish with cucumber and coriander, and don\'t forget those three dipping sauces!'
        ],
        tags: ['Singaporean', 'Dinner', 'Non-Vegetarian'],
        translations: {
            'zh-CN': {
                title: '海南鸡饭',
                description: '新加坡的海南鸡饭，鸡肉嫩滑，米饭香喷喷，蘸酱更美味！',
                ingredients: [
                    { item: '整鸡', amount: '1.2-1.5 公斤' },
                    { item: '姜', amount: '1 大块 (切片)' },
                    { item: '大蒜', amount: '8 瓣 (拍碎)' },
                    { item: '香葱', amount: '3 根 (切段)' },
                    { item: '茉莉香米', amount: '2 杯' },
                    { item: '黄瓜', amount: '1 根 (切片)' },
                    { item: '新鲜香菜', amount: '用于装饰' },
                    { item: '生抽', amount: '用于蘸食' },
                    { item: '辣椒酱', amount: '用于蘸食' },
                    { item: '姜葱酱', amount: '用于蘸食' }
                ],
                instructions: [
                    '整鸡加姜蒜葱煮熟，留鸡汤。',
                    '鸡肉冰水泡10分钟，切块。',
                    '姜蒜炒香，加米饭用鸡汤煮。',
                    '鸡肉放饭上，配黄瓜香菜和蘸酱。'
                ]
            },
            'ms': {
                title: 'Nasi Ayam Hainan',
                description: 'Nasi Ayam Hainan ni memang ikonik Singapura. Ayam lembut, nasi wangi, dengan tiga jenis sos. Memang terangkat!',
                ingredients: [
                    { item: 'Ayam bulat', amount: '1.2-1.5 kg' },
                    { item: 'Halia', amount: '1 buku besar, dihiris' },
                    { item: 'Bawang putih', amount: '8 ulas, ditumbuk' },
                    { item: 'Daun bawang', amount: '3 batang, dicincang' },
                    { item: 'Beras melati', amount: '2 cawan' },
                    { item: 'Timun', amount: '1 biji, dihiris' },
                    { item: 'Daun ketumbar segar', amount: 'untuk hiasan' },
                    { item: 'Kicap cair', amount: 'untuk pencicah' },
                    { item: 'Sos cili', amount: 'untuk pencicah' },
                    { item: 'Sos halia-daun bawang', amount: 'untuk pencicah' }
                ],
                instructions: [
                    'Rebus ayam bulat dalam periuk besar dengan halia, bawang putih, daun bawang sampai masak. Simpan stok ayam.',
                    'Terus masukkan ayam dalam air ais 10 minit. Keringkan, potong-potong.',
                    'Tumis sikit halia dan bawang putih. Masukkan beras, masak dengan stok ayam sampai gebu dan wangi.',
                    'Hidang ayam atas nasi wangi. Hias dengan timun dan daun ketumbar. Jangan lupa tiga sos pencicah tu!'
                ]
            },
            'hi': {
                title: 'हैनानीज़ चिकन राइस',
                description: 'सिंगापुर के प्रतिष्ठित हैनानीज़ चिकन राइस के साथ उसके क्लासिक स्वाद का अनुभव करें। रसीला, उबला हुआ चिकन, चिकन शोरबे में पका हुआ सुगंधित चावल, और तीन जीवंत डिपिंग सॉस एक अविस्मरणीय पाक यात्रा बनाते हैं। हर स्वादिष्ट निवाले के साथ हलचल भरे हॉकर सेंटरों में पहुँचने के लिए तैयार हो जाइए!',
                ingredients: [
                    { item: 'साबुत चिकन', amount: '1.2-1.5 किग्रा' },
                    { item: 'अदरक', amount: '1 बड़ा टुकड़ा, कटा हुआ' },
                    { item: 'लहसुन', amount: '8 कलियाँ, कुचला हुआ' },
                    { item: 'हरा प्याज', amount: '3 डंठल, कटा हुआ' },
                    { item: 'जैस्मीन चावल', amount: '2 कप' },
                    { item: 'खीरा', amount: '1, कटा हुआ' },
                    { item: 'ताजा धनिया', amount: 'सजावट के लिए' },
                    { item: 'हल्का सोया सॉस', amount: 'डिपिंग के लिए' },
                    { item: 'चिली सॉस', amount: 'डिपिंग के लिए' },
                    { item: 'अदरक-हरा प्याज सॉस', amount: 'डिपिंग के लिए' }
                ],
                instructions: [
                    'साबुत चिकन को अदरक, लहसुन और हरे प्याज के साथ एक बड़े बर्तन में पकने तक उबालें। शोरबा बचाकर रखें।',
                    'पके हुए चिकन को तुरंत 10 मिनट के लिए बर्फ के पानी में डुबोएं, फिर सुखाकर परोसने वाले टुकड़ों में काट लें।',
                    'थोड़ा अदरक और लहसुन भूनें, फिर जैस्मीन चावल डालें और बचे हुए चिकन शोरबे के साथ सुगंधित और फूला हुआ होने तक पकाएं।',
                    'कटे हुए चिकन को सुगंधित चावल के ऊपर परोसें, खीरे और धनिये से सजाकर, तीन डिपिंग सॉस के साथ।'
                ]
            },
            'bn': {
                title: 'হাইনানিজ চিকেন রাইস',
                description: 'সিঙ্গাপুরের আইকনিক হাইনানিজ চিকেন রাইসের ক্লাসিক স্বাদের অভিজ্ঞতা নিন। রসালো, পোচ করা মুরগি, মুরগির ঝোলে রান্না করা সুগন্ধি ভাত এবং তিনটি প্রাণবন্ত ডিপিং সস একটি অবিস্মরণীয় রন্ধনশিল্পের যাত্রা তৈরি করে। প্রতিটি সুস্বাদু কামড়ে ব্যস্ত হকার সেন্টারগুলিতে পৌঁছে যাওয়ার জন্য প্রস্তুত হন!',
                ingredients: [
                    { item: 'পুরো মুরগি', amount: '1.2-1.5 কেজি' },
                    { item: 'আদা', amount: '1 বড় টুকরা, স্লাইস করা' },
                    { item: 'রসুন', amount: '8 কোয়া, থেঁতলানো' },
                    { item: 'পেঁয়াজ কলি', amount: '3 ডাঁটা, কাটা' },
                    { item: 'জুঁই চাল', amount: '2 কাপ' },
                    { item: 'শসা', amount: '1টি, স্লাইস করা' },
                    { item: 'তাজা ধনে পাতা', amount: 'সাজানোর জন্য' },
                    { item: 'হালকা সয়া সস', amount: 'ডিপিংয়ের জন্য' },
                    { item: 'চিলি সস', amount: 'ডিপিংয়ের জন্য' },
                    { item: 'আদা-পেঁয়াজ কলি সস', amount: 'ডিপিংয়ের জন্য' }
                ],
                instructions: [
                    'আদা, রসুন এবং পেঁয়াজ কলি দিয়ে একটি বড় পাত্রে পুরো মুরগি সিদ্ধ করুন যতক্ষণ না এটি ভালোভাবে সেদ্ধ হয়। ঝোল সংরক্ষণ করুন।',
                    'সেদ্ধ মুরগিটি অবিলম্বে 10 মিনিটের জন্য বরফ জলে ডুবিয়ে রাখুন, তারপর শুকিয়ে পরিবেশনের জন্য টুকরো করে কাটুন।',
                    'কিছু আদা ও রসুন ভেজে নিন, তারপর জুঁই চাল যোগ করুন এবং সংরক্ষিত মুরগির ঝোল দিয়ে সুগন্ধি ও ঝরঝরে হওয়া পর্যন্ত রান্না করুন।',
                    'কাটা মুরগি সুগন্ধি ভাতের উপর পরিবেশন করুন, শসা ও ধনে পাতা দিয়ে সাজিয়ে, তিনটি ডিপিং সসের সাথে।'
                ]
            },
            'mr': {
                title: 'हैनानीज चिकन राईस',
                description: 'सिंगापूरच्या प्रतिष्ठित हैनानीज चिकन राईसच्या क्लासिक चवीचा अनुभव घ्या. रसाळ, उकडलेले चिकन, चिकनच्या रसात शिजवलेला सुगंधी भात आणि तीन चमकदार डिपिंग सॉस एक अविस्मरणीय पाककृती प्रवास तयार करतात. प्रत्येक स्वादिष्ट घासासोबत गजबजलेल्या हॉकर सेंटर्समध्ये पोहोचण्यासाठी तयार व्हा!',
                ingredients: [
                    { item: 'पूर्ण चिकन', amount: '1.2-1.5 किलो' },
                    { item: 'आले', amount: '1 मोठा तुकडा, कापलेले' },
                    { item: 'लसूण', amount: '8 पाकळ्या, ठेचलेले' },
                    { item: 'कांद्याची पात', amount: '3 देठ, चिरलेली' },
                    { item: 'जास्मिन तांदूळ', amount: '2 कप' },
                    { item: 'काकडी', amount: '1, कापलेली' },
                    { item: 'ताजी कोथिंबीर', amount: 'सजावटीसाठी' },
                    { item: 'हलका सोया सॉस', amount: 'डिपिंगसाठी' },
                    { item: 'चिली सॉस', amount: 'डिपिंगसाठी' },
                    { item: 'आले-कांद्याची पात सॉस', amount: 'डिपिंगसाठी' }
                ],
                instructions: [
                    'आले, लसूण आणि कांद्याच्या पाथीसोबत एका मोठ्या भांड्यात पूर्ण चिकन शिजवून घ्या. सूप बाजूला ठेवा.',
                    'शिजवलेले चिकन लगेच 10 मिनिटांसाठी बर्फाच्या पाण्यात बुडवा, नंतर कोरडे करून सर्व्ह करण्यायोग्य तुकड्यांमध्ये कापा.',
                    'थोडे आले आणि लसूण परतून घ्या, नंतर जास्मिन तांदूळ घालून बाजूला ठेवलेल्या चिकन सूपमध्ये सुगंधी आणि मोकळा होईपर्यंत शिजवा.',
                    'चिरलेले चिकन सुगंधी भातावर, काकडी आणि कोथिंबीरीने सजवून, तीन डिपिंग सॉससोबत सर्व्ह करा.'
                ]
            },
            'te': {
                title: 'హైనానీస్ చికెన్ రైస్',
                description: 'సింగపూర్ యొక్క ఐకానిక్ హైనానీస్ చికెన్ రైస్ యొక్క క్లాసిక్ రుచులను అనుభవించండి. జ్యుసి, ఉడికించిన చికెన్, చికెన్ రసంలో వండిన సువాసనగల అన్నం, మరియు మూడు రకాల డిప్పింగ్ సాస్‌లు మరపురాని పాక ప్రయాణాన్ని సృష్టిస్తాయి. ప్రతి రుచికరమైన కాటుతో సందడిగా ఉండే హాకర్ సెంటర్లకు రవాణా కావడానికి సిద్ధంగా ఉండండి!',
                ingredients: [
                    { item: 'మొత్తం చికెన్', amount: '1.2-1.5 కిలోలు' },
                    { item: 'అల్లం', amount: '1 పెద్ద ముక్క, ముక్కలుగా కోసినది' },
                    { item: 'వెల్లుల్లి', amount: '8 రెబ్బలు, నలిపినది' },
                    { item: 'స్ప్రింగ్ ఆనియన్స్', amount: '3 కాడలు, తరిగినవి' },
                    { item: 'జాస్మిన్ రైస్', amount: '2 కప్పులు' },
                    { item: 'దోసకాయ', amount: '1, ముక్కలుగా కోసినది' },
                    { item: 'తాజా కొత్తిమీర', amount: 'అలంకరణ కోసం' },
                    { item: 'లేత సోయా సాస్', amount: 'డిప్పింగ్ కోసం' },
                    { item: 'మిరప సాస్', amount: 'డిప్పింగ్ కోసం' },
                    { item: 'అల్లం-స్ప్రింగ్ ఆనియన్ సాస్', amount: 'డిప్పింగ్ కోసం' }
                ],
                instructions: [
                    'అల్లం, వెల్లుల్లి మరియు స్ప్రింగ్ ఆనియన్స్‌తో ఒక పెద్ద పాత్రలో మొత్తం చికెన్‌ను ఉడికించాలి. రసాన్ని పక్కన పెట్టండి.',
                    'ఉడికించిన చికెన్‌ను వెంటనే 10 నిమిషాలు ఐస్ వాటర్‌లో ముంచి, ఆపై ఆరబెట్టి, సర్వింగ్ ముక్కలుగా కోయండి.',
                    'కొద్దిగా అల్లం మరియు వెల్లుల్లిని వేయించి, ఆపై జాస్మిన్ రైస్ వేసి, పక్కన పెట్టిన చికెన్ రసంతో మెత్తగా మరియు సువాసనగా అయ్యే వరకు ఉడికించాలి.',
                    'తరిగిన చికెన్‌ను సువాసనగల అన్నంపై, దోసకాయ మరియు కొత్తిమీరతో అలంకరించి, మూడు డిప్పింగ్ సాస్‌లతో వడ్డించండి.'
                ]
            },
            'ta': {
                title: 'ஹெய்னானீஸ் சிக்கன் ரைஸ்',
                description: 'சிங்கப்பூரின் அடையாளமான ஹெய்னானீஸ் சிக்கன் ரைஸின் கிளாசிக் சுவைகளை அனுபவியுங்கள். மென்மையான, வேகவைத்த கோழி, கோழி சூப்பில் சமைத்த நறுமணமுள்ள சாதம், மற்றும் மூன்று துடிப்பான டிப்பிங் சாஸ்கள் ஒரு மறக்க முடியாத சமையல் பயணத்தை உருவாக்குகின்றன. ஒவ்வொரு சுவையான கடியிலும் பரபரப்பான ஹாக்கர் மையங்களுக்குச் செல்ல தயாராகுங்கள்!',
                ingredients: [
                    { item: 'முழு கோழி', amount: '1.2-1.5 கிலோ' },
                    { item: 'இஞ்சி', amount: '1 பெரிய துண்டு, நறுக்கியது' },
                    { item: 'பூண்டு', amount: '8 பற்கள், நசுக்கியது' },
                    { item: 'வெங்காயத் தாள்', amount: '3 தண்டுகள், நறுக்கியது' },
                    { item: 'மல்லிகை அரிசி', amount: '2 கப்' },
                    { item: 'வெள்ளரி', amount: '1, நறுக்கியது' },
                    { item: 'புதிய கொத்தமல்லி', amount: 'அலங்காரத்திற்கு' },
                    { item: 'லேசான சோயா சாஸ்', amount: 'டிப்பிங்கிற்கு' },
                    { item: 'மிளகாய் சாஸ்', amount: 'டிப்பிங்கிற்கு' },
                    { item: 'இஞ்சி-வெங்காயத் தாள் சாஸ்', amount: 'டிப்பிங்கிற்கு' }
                ],
                instructions: [
                    'இஞ்சி, பூண்டு மற்றும் வெங்காயத் தாளுடன் ஒரு பெரிய பாத்திரத்தில் முழு கோழியை வேகும் வரை வேகவைக்கவும். சூப்பை தனியே வைக்கவும்.',
                    'வேகவைத்த கோழியை உடனடியாக 10 நிமிடங்கள் ஐஸ் தண்ணீரில் மூழ்கடித்து, பின்னர் உலர்த்தி, பரிமாறும் துண்டுகளாக வெட்டவும்.',
                    'சிறிது இஞ்சி மற்றும் பூண்டை வதக்கி, பின்னர் மல்லிகை அரிசியைச் சேர்த்து, தனியே வைத்த கோழி சூப்புடன் மென்மையாகவும் நறுமணத்துடனும் வரும் வரை சமைக்கவும்.',
                    'நறுக்கிய கோழியை நறுமணமுள்ள சாதத்தின் மீது, வெள்ளரி மற்றும் கொத்தமல்லியால் அலங்கரித்து, மூன்று டிப்பிங் சாஸ்களுடன் பரிமாறவும்.'
                ]
            }
        }
    },
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
            'Make a firm dough from flour, egg, water, and salt. Knead, then let it rest. Mix ground meat, onion, salt, and pepper for the filling.',
            'Roll the dough thin and cut into small squares. Place a tiny bit of filling in each, then pinch the four corners together to form little parcels.',
            'Boil salted water. Gently drop in the manti and cook for 8-10 minutes until they float and are tender.',
            'Whisk yogurt with garlic and salt. Melt butter, add red pepper flakes and dried mint until fragrant. Drain manti, top with garlic yogurt, and drizzle with the hot spiced butter.'
        ],
        tags: ['Turkish', 'Dinner', 'Non-Vegetarian'],
        translations: {
            'zh-CN': {
                title: '土耳其曼提饺子',
                description: '土耳其小饺子，肉馅香香的，配上蒜味酸奶和辣椒黄油，太好吃了！',
                ingredients: [
                    { item: '中筋面粉', amount: '3 杯' },
                    { item: '鸡蛋', amount: '1 个 (大)' },
                    { item: '水', amount: '1/2 杯' },
                    { item: '牛肉/羊肉馅', amount: '300克' },
                    { item: '洋葱', amount: '1 个 (小，磨碎)' },
                    { item: '原味酸奶', amount: '2 杯' },
                    { item: '大蒜', amount: '3 瓣 (切碎)' },
                    { item: '无盐黄油', amount: '4 汤匙' },
                    { item: '红辣椒片 (Pul Biber)', amount: '1 茶匙' },
                    { item: '干薄荷', amount: '1 茶匙' }
                ],
                instructions: [
                    '面粉、鸡蛋、水、盐揉面团。',
                    '肉馅、洋葱、盐、胡椒拌匀。',
                    '面团擀薄切小方块，包馅。',
                    '开水煮饺子8-10分钟。',
                    '酸奶加蒜盐搅匀。黄油加辣椒薄荷炒香。',
                    '饺子沥水，淋酸奶，再淋热黄油。'
                ]
            },
            'ms': {
                title: 'Ladle Manti Turki',
                description: 'Ladu kecil berisi daging, disiram yogurt bawang putih dan mentega cili. Ladle Manti Turki ni memang sedap sangat!',
                ingredients: [
                    { item: 'Tepung Gandum Serbaguna', amount: '3 cawan' },
                    { item: 'Telur', amount: '1 biji (besar)' },
                    { item: 'Air', amount: '1/2 cawan' },
                    { item: 'Daging Cincang Lembu/Kambing', amount: '300g' },
                    { item: 'Bawang Merah', amount: '1 biji (kecil, disagat halus)' },
                    { item: 'Yogurt Asli', amount: '2 cawan' },
                    { item: 'Bawang Putih', amount: '3 ulas (dicincang)' },
                    { item: 'Mentega Tanpa Garam', amount: '4 sudu besar' },
                    { item: 'Serbuk Cili Merah (Pul Biber)', amount: '1 sudu kecil' },
                    { item: 'Pudina Kering', amount: '1 sudu kecil' }
                ],
                instructions: [
                    'Campur tepung, telur, air, garam jadi doh. Uli, rehatkan. Campur daging cincang, bawang parut, garam, lada hitam untuk inti.',
                    'Canaikan doh nipis, potong segi empat kecil. Letak inti, cubit empat bucu jadi bungkusan kecil.',
                    'Didihkan air garam dalam periuk besar. Masukkan manti, masak 8-10 minit sampai timbul dan lembut.',
                    'Pukul yogurt dengan bawang putih cincang dan garam. Cairkan mentega, masukkan serbuk cili dan pudina kering sampai wangi.',
                    'Toskan manti, susun atas pinggan. Tuang yogurt bawang putih, siram dengan mentega berperisa panas.'
                ]
            },
            'hi': {
                title: 'मंती पकौड़ी',
                description: 'तुर्की मंती के उत्कृष्ट स्वाद का अनुभव करें, छोटे, नाजुक पकौड़े जो मसालेदार कीमा से भरे होते हैं। मलाईदार लहसुन दही सॉस में डूबे हुए और लाल मिर्च और पुदीने से युक्त सुगंधित मक्खन के साथ परोसे जाने पर, हर निवाला बनावट और स्वाद का एक अद्भुत संगम है।',
                ingredients: [
                    { item: 'मैदा', amount: '3 कप' },
                    { item: 'अंडा', amount: '1 बड़ा' },
                    { item: 'पानी', amount: '1/2 कप' },
                    { item: 'कीमा बनाया हुआ मांस (बीफ/भेड़ का)', amount: '300 ग्राम' },
                    { item: 'प्याज', amount: '1 छोटा, बारीक कसा हुआ' },
                    { item: 'सादा दही', amount: '2 कप' },
                    { item: 'लहसुन', amount: '3 कलियाँ' }
                ],
                instructions: [

                ]
            },
            'bn': {
                title: '',
                description: '',
                ingredients: [

                ],
                instructions: [

                ]
            },
            'mr': {
                title: '',
                description: '',
                ingredients: [

                ],
                instructions: [

                ]
            },
            'te': {
                title: '',
                description: '',
                ingredients: [

                ],
                instructions: [

                ]
            },
            'ta': {
                title: '',
                description: '',
                ingredients: [

                ],
                instructions: [

                ]
            }
        }
    },
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
            'Heat lard in a smoking hot wok. Sauté garlic, then add prawns and Chinese sausage, stir-frying until fragrant.',
            'Push ingredients aside, scramble eggs briefly. Add noodles and cockles, tossing well.',
            'Pour in the sauce mixture and chili paste. Stir-fry vigorously to coat everything.',
            'Add bean sprouts and chives. Continue stir-frying for another minute until just cooked and the noodles have that smoky \'wok hei\'.',
            'Serve immediately, with fresh chili slices if you like a little extra kick.'
        ],
        tags: ['Singaporean', 'Dinner', 'Non-Vegetarian'],
        translations: {
            'zh-CN': {
                title: '炒粿条',
                description: '这炒粿条，有锅气，有虾有腊肠，味道浓郁，好吃到停不下来！',
                ingredients: [
                    { item: '新鲜扁河粉 (粿条)', amount: '500克' },
                    { item: '虾 (去壳，去肠线)', amount: '200克' },
                    { item: '腊肠 (切片)', amount: '2 根' },
                    { item: '血蚶 (去壳，可选)', amount: '100克' },
                    { item: '豆芽', amount: '100克' },
                    { item: '韭菜 (切段)', amount: '50克' },
                    { item: '鸡蛋', amount: '2 个' },
                    { item: '大蒜 (切碎)', amount: '3 瓣' },
                    { item: '酱汁混合物 (老抽、生抽、糖、鱼露、白胡椒粉)', amount: '4 汤匙' },
                    { item: '猪油 (或植物油)', amount: '2 汤匙' }
                ],
                instructions: [
                    '猪油烧热，蒜爆香，炒虾和腊肠。',
                    '推开食材，鸡蛋炒散，加河粉血蚶。',
                    '倒酱汁和辣椒酱，大火快炒。',
                    '加豆芽韭菜，再炒一分钟。',
                    '马上吃，喜欢就加点辣椒。'
                ]
            },
            'ms': {
                title: 'Char Kway Teow',
                description: 'Char Kway Teow ni memang kegemaran ramai. Mi goreng dengan udang, sosej, kerang, kicap pekat. Rasa \'wok hei\' dia tu yang buat sedap!',
                ingredients: [
                    { item: 'Mi Beras Leper Segar (Kway Teow)', amount: '500g' },
                    { item: 'Udang (dibuang kulit, dibuang urat)', amount: '200g' },
                    { item: 'Sosej Cina (lap cheong), dihiris', amount: '2 batang' },
                    { item: 'Kerang (hum), dibuang kulit (pilihan)', amount: '100g' },
                    { item: 'Taugeh', amount: '100g' },
                    { item: 'Kucai (dipotong)', amount: '50g' },
                    { item: 'Telur', amount: '2 biji' },
                    { item: 'Bawang Putih, dicincang', amount: '3 ulas' },
                    { item: 'Campuran Sos (Kicap Pekat, Kicap Cair, Gula, Sos Ikan, Lada Putih)', amount: '4 sudu besar' },
                    { item: 'Minyak Babi (atau minyak sayuran)', amount: '2 sudu besar' }
                ],
                instructions: [
                    'Panaskan minyak babi dalam kuali sampai berasap. Tumis bawang putih, masukkan udang dan sosej Cina, goreng sampai wangi.',
                    'Tolak tepi bahan-bahan, pecahkan telur, kacau sekejap. Masukkan mi dan kerang, gaul rata.',
                    'Tuang campuran sos dan pes cili (kalau guna). Goreng laju-laju sampai semua bersalut.',
                    'Masukkan taugeh dan kucai, teruskan goreng seminit lagi sampai sayur baru masak dan mi ada \'wok hei\'.',
                    'Hidang cepat-cepat. Hias dengan hirisan cili segar kalau suka pedas.'
                ]
            },
            'hi': {
                title: 'चार क्वाय टियो',
                description: 'सिंगापुर के प्रिय स्टिर-फ्राइड नूडल डिश, चार क्वाय टियो के धुएँदार, स्वादिष्ट सिम्फनी का अनुभव करें। फ्लैट चावल के नूडल्स को रसीले झींगे, चीनी सॉसेज और कॉकल्स के साथ वोक में उछाला जाता है, सभी एक समृद्ध, गहरे सोया सॉस में लिपटे होते हैं। तीव्र \'वोक हेई\' स्वाद आपकी स्वाद कलिकाओं को सीधे हॉकर स्टालों तक ले जाएगा। आज ही अपनी रसोई में इस प्रतिष्ठित स्ट्रीट फूड में महारत हासिल करने के लिए तैयार हैं?',
                ingredients: [
                    { item: 'ताज़े फ्लैट चावल के नूडल्स (क्वाय टियो)', amount: '500 ग्राम' },
                    { item: 'झींगे (छिले हुए, डीवेन किए हुए)', amount: '200 ग्राम' },
                    { item: 'चीनी सॉसेज (लैप चेओंग), कटा हुआ', amount: '2 लिंक' },
                    { item: 'कॉकल्स (हम), छिले हुए (वैकल्पिक)', amount: '100 ग्राम' },
                    { item: 'अंकुरित दालें', amount: '100 ग्राम' },
                    { item: 'चाइव्स (कुचाई), कटे हुए', amount: '50 ग्राम' },
                    { item: 'अंडे', amount: '2' },
                    { item: 'लहसुन, बारीक कटा हुआ', amount: '3 कलियाँ' },
                    { item: 'सॉस मिश्रण (डार्क सोया, लाइट सोया, चीनी, फिश सॉस, सफेद मिर्च)', amount: '4 बड़े चम्मच' },
                    { item: 'लार्ड (या वनस्पति तेल)', amount: '2 बड़े चम्मच' }
                ],
                instructions: [
                    'एक कड़ाही में लार्ड को धुआँ निकलने तक गरम करें। लहसुन भूनें, फिर झींगे और चीनी सॉसेज डालकर सुगंधित होने तक भूनें।',
                    'सामग्री को एक तरफ धकेलें, अंडे फोड़ें और संक्षेप में स्क्रैम्बल करें। नूडल्स और कॉकल्स डालें, अच्छी तरह टॉस करें।',
                    'सॉस मिश्रण और मिर्च का पेस्ट (यदि उपयोग कर रहे हैं) डालें। सब कुछ कोट करने के लिए जोर से स्टिर-फ्राई करें।',
                    'अंकुरित दालें और चाइव्स डालें, सब्जियों के पकने और नूडल्स में धुएँदार \'वोक हेई\' आने तक एक और मिनट के लिए स्टिर-फ्राई करते रहें।',
                    'तुरंत परोसें, यदि चाहें तो ताज़ी मिर्च के स्लाइस से गार्निश करें।'
                ]
            },
            'bn': {
                title: 'চার কোয়ে টিও',
                description: 'সিঙ্গাপুরের প্রিয় স্ট্রিট ফুড, চার কোয়ে টিও-এর ধোঁয়াটে, সুস্বাদু সিম্ফনির অভিজ্ঞতা নিন। ফ্ল্যাট রাইস নুডুলস রসালো চিংড়ি, চাইনিজ সসেজ এবং ককলস দিয়ে ওওকে টস করা হয়, যা একটি সমৃদ্ধ, গাঢ় সয়া সসে আবৃত। তীব্র \'ওওক হেই\' স্বাদ আপনার স্বাদগ্রন্থিকে সরাসরি হকার স্টলে নিয়ে যাবে। আজই আপনার রান্নাঘরে এই আইকনিক স্ট্রিট ফুড আয়ত্ত করতে প্রস্তুত?',
                ingredients: [
                    { item: 'তাজা ফ্ল্যাট রাইস নুডুলস (কোয়ে টিও)', amount: '500 গ্রাম' },
                    { item: 'চিংড়ি (খোসা ছাড়ানো, শিরাবিহীন)', amount: '200 গ্রাম' },
                    { item: 'চাইনিজ সসেজ (ল্যাপ চেওং), টুকরো করা', amount: '2 লিঙ্ক' },
                    { item: 'ককলস (হাম), খোসা ছাড়ানো (ঐচ্ছিক)', amount: '100 গ্রাম' },
                    { item: 'বিন স্প্রাউটস', amount: '100 গ্রাম' },
                    { item: 'চাইভস (কুচাই), কাটা', amount: '50 গ্রাম' },
                    { item: 'ডিম', amount: '2টি' },
                    { item: 'রসুন, কুচি করা', amount: '3 কোয়া' },
                    { item: 'সস মিশ্রণ (ডার্ক সয়া, লাইট সয়া, চিনি, ফিশ সস, সাদা গোলমরিচ)', amount: '4 টেবিল চামচ' },
                    { item: 'লার্ড (বা উদ্ভিজ্জ তেল)', amount: '2 টেবিল চামচ' }
                ],
                instructions: [
                    'একটি কড়াইতে লার্ড গরম করুন যতক্ষণ না ধোঁয়া বের হয়। রসুন ভাজুন, তারপর চিংড়ি এবং চাইনিজ সসেজ যোগ করুন, সুগন্ধি না হওয়া পর্যন্ত ভাজুন।',
                    'উপাদানগুলি একপাশে সরিয়ে দিন, ডিম ভেঙে দিন এবং সংক্ষেপে স্ক্র্যাম্বল করুন। নুডুলস এবং ককলস যোগ করুন, ভালভাবে টস করুন।',
                    'সস মিশ্রণ এবং চিলি পেস্ট (যদি ব্যবহার করেন) ঢেলে দিন। সবকিছু ভালোভাবে মিশে যাওয়া পর্যন্ত দ্রুত ভাজুন।',
                    'বিন স্প্রাউটস এবং চাইভস যোগ করুন, সবজি রান্না হওয়া পর্যন্ত এবং নুডুলসে ধোঁয়াটে \'ওওক হেই\' আসা পর্যন্ত আরও এক মিনিট ভাজতে থাকুন।',
                    'অবিলম্বে পরিবেশন করুন, যদি ইচ্ছা হয় তাজা কাঁচা লঙ্কার টুকরো দিয়ে সাজান।'
                ]
            },
            'mr': {
                title: 'चार क्वाय टियो',
                description: 'सिंगापूरच्या प्रिय स्टिर-फ्राइड नूडल डिश, चार क्वाय टियोच्या धुरकट, चवदार सिम्फनीचा अनुभव घ्या. सपाट तांदळाचे नूडल्स रसाळ कोळंबी, चायनीज सॉसेज आणि कॉकल्ससह वोकमध्ये टॉस केले जातात, सर्व एका समृद्ध, गडद सोया सॉसमध्ये लेपलेले असतात. तीव्र \'वोक हेई\' चव तुमच्या चवीच्या कळ्या थेट हॉकर स्टॉल्सपर्यंत पोहोचवेल. आजच तुमच्या स्वयंपाकघरात या प्रतिष्ठित स्ट्रीट फूडमध्ये प्रभुत्व मिळवण्यासाठी तयार आहात?',
                ingredients: [
                    { item: 'ताजे सपाट तांदळाचे नूडल्स (क्वाय टियो)', amount: '500 ग्रॅम' },
                    { item: 'कोळंबी (सोललेली, डीव्हेन केलेली)', amount: '200 ग्रॅम' },
                    { item: 'चायनीज सॉसेज (लॅप चेओंग), कापलेले', amount: '2 लिंक' },
                    { item: 'कॉकल्स (हम), सोललेले (ऐच्छिक)', amount: '100 ग्रॅम' },
                    { item: 'मोड आलेले कडधान्य', amount: '100 ग्रॅम' },
                    { item: 'चाइव्स (कुचाई), कापलेले', amount: '50 ग्रॅम' },
                    { item: 'अंडी', amount: '2' },
                    { item: 'लसूण, बारीक चिरलेला', amount: '3 पाकळ्या' },
                    { item: 'सॉस मिश्रण (डार्क सोया, लाईट सोया, साखर, फिश सॉस, पांढरी मिरी)', amount: '4 चमचे' },
                    { item: 'लार्ड (किंवा वनस्पती तेल)', amount: '2 चमचे' }
                ],
                instructions: [
                    'एका कढईत लार्ड धूर येईपर्यंत गरम करा. लसूण परतून घ्या, नंतर कोळंबी आणि चायनीज सॉसेज घालून सुगंध येईपर्यंत परता.',
                    'साहित्य एका बाजूला सरकवा, अंडी फोडून थोडक्यात स्क्रॅम्बल करा. नूडल्स आणि कॉकल्स घालून चांगले टॉस करा.',
                    'सॉस मिश्रण आणि मिरची पेस्ट (वापरत असल्यास) घाला. सर्वकाही कोट करण्यासाठी जोरदारपणे स्टिर-फ्राय करा.',
                    'मोड आलेले कडधान्य आणि चाइव्स घाला, भाज्या शिजल्याशिवाय आणि नूडल्सला धुरकट \'वोक हेई\' येईपर्यंत आणखी एक मिनिट स्टिर-फ्राय करत रहा.',
                    'लगेच सर्व्ह करा, इच्छित असल्यास ताज्या मिरचीच्या तुकड्यांनी सजवा.'
                ]
            },
            'te': {
                title: 'చార్ క్వే టియో',
                description: 'సింగపూర్ యొక్క ప్రియమైన స్టిర్-ఫ్రైడ్ నూడిల్ డిష్, చార్ క్వే టియో యొక్క పొగతో కూడిన, రుచికరమైన సింఫనీని అనుభవించండి. ఫ్లాట్ రైస్ నూడుల్స్ రసవంతమైన రొయ్యలు, చైనీస్ సాసేజ్ మరియు కాకిల్స్‌తో వోక్‌లో టాస్ చేయబడతాయి, అన్నీ గొప్ప, ముదురు సోయా సాస్‌లో పూత పూయబడతాయి. తీవ్రమైన \'వోక్ హేయ్\' రుచి మీ రుచి మొగ్గలను నేరుగా హాకర్ స్టాల్స్‌కు తీసుకువెళుతుంది. ఈ ఐకానిక్ స్ట్రీట్ ఫుడ్‌ను ఈరోజే మీ వంటగదిలో నేర్చుకోవడానికి సిద్ధంగా ఉన్నారా?',
                ingredients: [
                    { item: 'తాజా ఫ్లాట్ రైస్ నూడుల్స్ (క్వే టియో)', amount: '500 గ్రా' },
                    { item: 'రొయ్యలు (పొట్టు తీసి, డీవీన్ చేసినవి)', amount: '200 గ్రా' },
                    { item: 'చైనీస్ సాసేజ్ (లాప్ చెయోంగ్), ముక్కలు చేసినవి', amount: '2 లింకులు' },
                    { item: 'కాకిల్స్ (హమ్', amount: 'undefined' }
                ],
                instructions: [

                ]
            },
            'ta': {
                title: '',
                description: '',
                ingredients: [

                ],
                instructions: [

                ]
            }
        }
    },
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
            'Melt butter, add flour to make a roux. Gradually whisk in warm milk until you have a thick béchamel.',
            'Stir in diced jamón, nutmeg, salt, and pepper. Cook for 5 minutes, then spread to cool completely.',
            'Shape the cooled mixture into small cylinders or ovals. Dip each in beaten egg, then roll in breadcrumbs.',
            'Heat oil to 170°C (340°F). Fry croquetas in batches until they\'re beautifully golden brown and crispy.',
            'Drain on paper towels and serve them hot. Pure bliss!'
        ],
        tags: ['Spanish', 'Appetizer', 'Non-Vegetarian'],
        translations: {
            'zh-CN': {
                title: '西班牙炸丸子 (Croquetas)',
                description: '西班牙炸丸子，外酥里嫩，奶香浓郁，一口一个停不下来！',
                ingredients: [
                    { item: '无盐黄油', amount: '50克' },
                    { item: '中筋面粉', amount: '50克' },
                    { item: '全脂牛奶（温热）', amount: '500毫升' },
                    { item: '塞拉诺火腿（或熟火腿），切丁', amount: '100克' },
                    { item: '肉豆蔻粉', amount: '一小撮' },
                    { item: '盐', amount: '适量' },
                    { item: '黑胡椒粉', amount: '适量' },
                    { item: '鸡蛋（打散）', amount: '2个' },
                    { item: '面包屑', amount: '150克' },
                    { item: '植物油', amount: '用于油炸' }
                ],
                instructions: [
                    '黄油面粉做面糊，慢慢加牛奶成白酱。',
                    '拌入火腿、肉豆蔻、盐、胡椒，煮5分钟放凉。',
                    '搓成小圆柱，先蘸蛋液再裹面包屑。',
                    '油烧到170°C，分批炸金黄。',
                    '沥油，趁热吃。'
                ]
            },
            'ms': {
                title: 'Kroket Sepanyol (Croquetas)',
                description: 'Kroket Sepanyol ni memang sedap sangat! Rangup di luar, krimi di dalam. Mesti cuba hari ni!',
                ingredients: [
                    { item: 'Mentega tanpa garam', amount: '50g' },
                    { item: 'Tepung serbaguna', amount: '50g' },
                    { item: 'Susu penuh krim, suam', amount: '500ml' },
                    { item: 'Jamón Serrano (atau ham masak), dipotong dadu halus', amount: '100g' },
                    { item: 'Buah pala', amount: 'Secubit' },
                    { item: 'Garam', amount: 'Secukup rasa' },
                    { item: 'Lada hitam', amount: 'Secukup rasa' },
                    { item: 'Telur, dipukul', amount: '2 biji' },
                    { item: 'Serbuk roti', amount: '150g' },
                    { item: 'Minyak sayuran', amount: 'Untuk menggoreng jeluk' }
                ],
                instructions: [
                    'Cairkan mentega, masukkan tepung jadi roux. Pukul susu suam sikit-sikit sampai béchamel pekat.',
                    'Masukkan jamón dadu, buah pala, garam, lada. Masak 5 minit, sejukkan betul-betul.',
                    'Bentuk adunan sejuk jadi silinder atau bujur kecil. Celup dalam telur pukul, golek dalam serbuk roti.',
                    'Panaskan minyak sampai 170°C. Goreng kroket sikit-sikit sampai perang keemasan dan rangup.',
                    'Toskan atas tisu dapur, hidang panas-panas.'
                ]
            },
            'hi': {
                title: 'क्रोकेटास',
                description: 'स्पेनिश कम्फर्ट फूड का बेहतरीन अनुभव करें! ये सुनहरे, कुरकुरे क्रोकेटास, अपनी मलाईदार, स्वादिष्ट बेचेमेल फिलिंग के साथ, शुद्ध पाक आनंद का एक अनूठा टुकड़ा हैं। हर पिघलने वाले निवाले के साथ प्यार में पड़ने के लिए तैयार हो जाइए - आपको इन्हें आज ही बनाना चाहिए!',
                ingredients: [
                    { item: 'बिना नमक का मक्खन', amount: '50 ग्राम' },
                    { item: 'मैदा', amount: '50 ग्राम' },
                    { item: 'साबुत दूध, गर्म', amount: '500 मिलीलीटर' },
                    { item: 'जामोन सेरानो (या पका हुआ हैम), बारीक कटा हुआ', amount: '100 ग्राम' },
                    { item: 'जायफल', amount: 'एक चुटकी' },
                    { item: 'नमक', amount: 'स्वादानुसार' },
                    { item: 'काली मिर्च', amount: 'स्वादानुसार' },
                    { item: 'अंडे, फेंटे हुए', amount: '2' },
                    { item: 'ब्रेडक्रम्ब्स', amount: '150 ग्राम' },
                    { item: 'वनस्पति तेल', amount: 'तलने के लिए' }
                ],
                instructions: [
                    'मक्खन पिघलाएं, मैदा डालकर रऊ बनाएं। धीरे-धीरे गर्म दूध डालकर गाढ़ा बेचेमेल बनने तक फेंटें।',
                    'कटा हुआ जामोन, जायफल, नमक और काली मिर्च मिलाएं। 5 मिनट पकाएं, फिर ठंडा होने के लिए फैला दें।',
                    'ठंडे मिश्रण को छोटे बेलनाकार या अंडाकार आकार दें। प्रत्येक क्रोकेटा को फेंटे हुए अंडे में डुबोएं, फिर ब्रेडक्रम्ब्स में लपेटें।',
                    'तेल को 170°C (340°F) पर गरम करें। क्रोकेटास को सुनहरा भूरा और कुरकुरा होने तक बैचों में तलें।',
                    'कागज़ के तौलिये पर निकाल कर गरमागरम परोसें।'
                ]
            },
            'bn': {
                title: 'ক্রোকেতাস',
                description: 'স্প্যানিশ কমফোর্ট ফুডের চূড়ান্ত অভিজ্ঞতা নিন! এই সোনালী, মুচমুচে ক্রোকেতাস, তাদের ক্রিমি, সুস্বাদু বেচামেল ফিলিং সহ, বিশুদ্ধ রন্ধনশিল্পের আনন্দের এক অনবদ্য কামড়। প্রতিটি মুখে গলে যাওয়া টুকরোর সাথে প্রেমে পড়তে প্রস্তুত হন – আপনাকে আজই এটি তৈরি করতে হবে!',
                ingredients: [
                    { item: 'লবণবিহীন মাখন', amount: '50 গ্রাম' },
                    { item: 'ময়দা', amount: '50 গ্রাম' },
                    { item: 'পুরো দুধ, উষ্ণ', amount: '500 মিলি' },
                    { item: 'জামোন সেরানো (বা রান্না করা হ্যাম), মিহি করে কাটা', amount: '100 গ্রাম' },
                    { item: 'জায়ফল', amount: 'এক চিমটি' },
                    { item: 'লবণ', amount: 'স্বাদমতো' },
                    { item: 'কালো গোলমরিচ', amount: 'স্বাদমতো' },
                    { item: 'ডিম, ফেটানো', amount: '2টি' },
                    { item: 'ব্রেডক্রাম্বস', amount: '150 গ্রাম' },
                    { item: 'উদ্ভিজ্জ তেল', amount: 'গভীর ভাজার জন্য' }
                ],
                instructions: [
                    'মাখন গলিয়ে ময়দা যোগ করে রু তৈরি করুন। ধীরে ধীরে উষ্ণ দুধ মিশিয়ে ঘন বেচামেল তৈরি করুন।',
                    'কাটা জামোন, জায়ফল, লবণ এবং গোলমরিচ মেশান। 5 মিনিট রান্না করে সম্পূর্ণ ঠান্ডা হতে দিন।',
                    'ঠান্ডা মিশ্রণকে ছোট সিলিন্ডার বা ডিম্বাকৃতি আকার দিন। প্রতিটি ক্রোকেটা ফেটানো ডিমে ডুবিয়ে ব্রেডক্রাম্বসে রোল করুন।',
                    'তেল 170°C (340°F) এ গরম করুন। ক্রোকেটাগুলো সোনালী বাদামী ও মুচমুচে হওয়া পর্যন্ত ব্যাচে ভাজুন।',
                    'কাগজের তোয়ালেতে তেল ঝরিয়ে গরম গরম পরিবেশন করুন।'
                ]
            },
            'mr': {
                title: 'क्रोकेटास',
                description: 'स्पॅनिश कम्फर्ट फूडचा अंतिम अनुभव घ्या! हे सोनेरी, कुरकुरीत क्रोकेटास, त्यांच्या मलईदार, चवदार बेचेमेल फिलिंगसह, शुद्ध पाककृती आनंदाचा एक अप्रतिम घास आहेत. प्रत्येक तोंडात विरघळणाऱ्या घासाच्या प्रेमात पडायला तयार व्हा – तुम्हाला ते आजच बनवायला हवे!',
                ingredients: [
                    { item: 'मीठ नसलेले लोणी', amount: '50 ग्रॅम' },
                    { item: 'मैदा', amount: '50 ग्रॅम' },
                    { item: 'पूर्ण दूध, कोमट', amount: '500 मिली' },
                    { item: 'जामोन सेरानो (किंवा शिजवलेले हॅम), बारीक चिरलेले', amount: '100 ग्रॅम' },
                    { item: 'जायफळ', amount: 'चिमूटभर' },
                    { item: 'मीठ', amount: 'चवीनुसार' },
                    { item: 'काळी मिरी', amount: 'चवीनुसार' },
                    { item: 'अंडी, फेटलेली', amount: '2' },
                    { item: 'ब्रेडक्रंब्स', amount: '150 ग्रॅम' },
                    { item: 'वनस्पती तेल', amount: 'तळण्यासाठी' }
                ],
                instructions: [
                    'लोणी वितळवा, मैदा घालून रौ बनवा. हळूहळू कोमट दूध घालून घट्ट बेचेमेल तयार होईपर्यंत फेटा.',
                    'चिरलेले जामोन, जायफळ, मीठ आणि मिरी घाला. 5 मिनिटे शिजवा, नंतर पूर्णपणे थंड होण्यासाठी पसरवा.',
                    'थंड झालेल्या मिश्रणाला लहान दंडगोलाकार किंवा अंडाकृती आकार द्या. प्रत्येक क्रोकेटाला फेटलेल्या अंड्यात बुडवा, नंतर ब्रेडक्रंब्समध्ये घोळवा.',
                    'तेल 170°C (340°F) पर्यंत गरम करा. क्रोकेटास सोनेरी तपकिरी आणि कुरकुरीत होईपर्यंत तुकड्यांमध्ये तळा.',
                    'पेपर टॉवेलवर काढून गरम सर्व्ह करा.'
                ]
            },
            'te': {
                title: 'క్రోకెటాస్',
                description: 'స్పానిష్ కంఫర్ట్ ఫుడ్ యొక్క అంతిమ అనుభవాన్ని పొందండి! ఈ బంగారు, క్రిస్పీ క్రోకెటాస్, వాటి క్రీమీ, రుచికరమైన బెచామెల్ ఫిల్లింగ్‌తో, స్వచ్ఛమైన పాక ఆనందం యొక్క అద్భుతమైన కాటు. ప్రతి నోటిలో కరిగిపోయే ముక్కతో ప్రేమలో పడటానికి సిద్ధంగా ఉండండి – మీరు వాటిని ఈరోజే తయారు చేయాలి!',
                ingredients: [
                    { item: 'ఉప్పు లేని వెన్న', amount: '50 గ్రా' },
                    { item: 'మైదా పిండి', amount: '50 గ్రా' },
                    { item: 'పాలు, వెచ్చని', amount: '500 మి.లీ' },
                    { item: 'జామోన్ సెరానో (లేదా వండిన హామ్), సన్నగా తరిగిన', amount: '100 గ్రా' },
                    { item: 'జాజికాయ', amount: 'చిటికెడు' },
                    { item: 'ఉప్పు', amount: 'రుచికి' },
                    { item: 'నల్ల మిరియాలు', amount: 'రుచికి' },
                    { item: 'గుడ్లు, కొట్టినవి', amount: '2' },
                    { item: 'బ్రెడ్‌క్రమ్స్', amount: '150 గ్రా' },
                    { item: 'కూరగాయల నూనె', amount: 'డీప్ ఫ్రై చేయడానికి' }
                ],
                instructions: [
                    'వెన్న కరిగించి, మైదా వేసి రౌక్స్ చేయండి. వెచ్చని పాలు నెమ్మదిగా కలుపుతూ చిక్కటి బెచామెల్ అయ్యే వరకు కలపండి.',
                    'తరిగిన జామోన్, జాజికాయ, ఉప్పు, మిరియాలు కలపండి. 5 నిమిషాలు ఉడికించి, పూర్తిగా చల్లబరచడానికి విస్తరించండి.',
                    'చల్లబడిన మిశ్రమాన్ని చిన్న సిలిండర్లు లేదా ఓవల్ ఆకారంలో చేయండి. ప్రతి క్రోకెటాను కొట్టిన గుడ్డులో ముంచి, బ్రెడ్‌క్రమ్స్‌లో రోల్ చేయండి.',
                    'నూనెను 170°C (340°F) వరకు వేడి చేయండి. క్రోకెటాలను బంగారు గోధుమ రంగులోకి మారి క్రిస్పీగా అయ్యే వరకు బ్యాచ్‌లలో వేయించండి.',
                    'పేపర్ టవల్స్‌పై తీసి వేడిగా సర్వ్ చేయండి.'
                ]
            },
            'ta': {
                title: 'க்ரோக்கெட்டாஸ்',
                description: 'ஸ்பானிஷ் கம்ஃபர்ட் ஃபுட்டின் இறுதி அனுபவத்தைப் பெறுங்கள்! இந்த தங்க நிற, மொறுமொறுப்பான க்ரோக்கெட்டாஸ், அவற்றின் கிரீமி, சுவையான பெச்சாமெல் ஃபில்லிங்குடன், தூய சமையல் இன்பத்தின் ஒரு தவிர்க்க முடியாத கடி. ஒவ்வொரு வாயில் உருகும் கடியுடனும் காதலில் விழ தயாராகுங்கள் – நீங்கள் இதை இன்றே செய்ய வேண்டும்!',
                ingredients: [
                    { item: 'உப்பில்லாத வெண்ணெய்', amount: '50 கிராம்' },
                    { item: 'மைதா மாவு', amount: '50 கிராம்' },
                    { item: 'முழு பால், சூடான', amount: '500 மில்லி' },
                    { item: 'ஜாமோன் செரானோ (அல்லது சமைத்த ஹாம்), மெல்லியதாக நறுக்கியது', amount: '100 கிராம்' },
                    { item: 'ஜாதிக்காய்', amount: 'ஒரு சிட்டிகை' },
                    { item: 'உப்பு', amount: 'சுவைக்கு' },
                    { item: 'கருப்பு மிளகு', amount: 'சுவைக்கு' },
                    { item: 'முட்டைகள், அடித்தது', amount: '2' },
                    { item: 'பிரட் க்ரம்ப்ஸ்', amount: '150 கிராம்' },
                    { item: 'தாவர எண்ணெய்', amount: 'ஆழமாக வறுக்க' }
                ],
                instructions: [
                    'வெண்ணெயை உருக்கி, மாவை சேர்த்து ரௌக்ஸ் செய்யவும். சூடான பாலை மெதுவாக சேர்த்து, கெட்டியான பெச்சாமெல் உருவாகும் வரை கிளறவும்.',
                    'நறுக்கிய ஜாமோன், ஜாதிக்காய், உப்பு மற்றும் மிளகு சேர்க்கவும். 5 நிமிடங்கள் சமைத்து, பின்னர் முழுமையாக குளிர்விக்க பரப்பவும்.',
                    'குளிர்ந்த கலவையை சிறிய உருளைகள் அல்லது ஓவல் வடிவங்களாக உருவாக்கவும். ஒவ்வொரு க்ரோக்கெட்டாவையும் அடித்த முட்டையில் தோய்த்து, பின்னர் பிரட் க்ரம்ப்ஸில் உருட்டவும்.',
                    'எண்ணெயை 170°C (340°F) வரை சூடாக்கவும். க்ரோக்கெட்டாக்களை பொன்னிறமாக மற்றும் மொறுமொறுப்பாக மாறும் வரை தொகுதிகளாக வறுக்கவும்.',
                    'காகித துண்டுகளில் வடிகட்டி சூடாக பரிமாறவும்.'
                ]
            }
        }
    },
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
            'Bring chicken broth to a boil, add rice, then simmer until tender.',
            'Stir in cooked shredded chicken and heat through. Season with salt and pepper.',
            'Whisk eggs until frothy, then gradually whisk in lemon juice.',
            'Temper the egg-lemon mixture: slowly ladle hot broth into the eggs, whisking constantly.',
            'Pour the tempered egg mixture back into the pot, stirring gently. Heat until slightly thickened, but don\'t boil. Garnish with fresh dill.'
        ],
        tags: ['Greek', 'Dinner', 'Non-Vegetarian'],
        translations: {
            'zh-CN': {
                title: '希腊柠檬蛋花鸡汤 (Avgolemono Soup)',
                description: '来尝尝希腊的温暖滋味吧！这碗柠檬蛋花鸡汤，又滑又香，保证暖到你心里。每一口都像去了地中海，快来试试！',
                ingredients: [
                    { item: '鸡高汤', amount: '6杯' },
                    { item: '意大利米（Arborio rice）', amount: '1/2杯' },
                    { item: '煮熟的鸡丝', amount: '1杯' },
                    { item: '大鸡蛋', amount: '3个' },
                    { item: '新鲜柠檬汁', amount: '1/4杯' },
                    { item: '盐', amount: '适量' },
                    { item: '现磨黑胡椒', amount: '适量' },
                    { item: '新鲜莳萝（切碎）', amount: '2汤匙' }
                ],
                instructions: [
                    '大锅鸡汤烧开。',
                    '下米饭，小火煮15-20分钟，直到米饭软烂。',
                    '加入鸡丝，热透。加盐、胡椒调味。',
                    '另碗打发鸡蛋，慢慢加柠檬汁。',
                    '舀一杯热汤入蛋液，边倒边搅。',
                    '蛋液倒回锅中，轻轻搅匀。',
                    '加热至微稠，别煮开。撒点莳萝就好啦！'
                ]
            },
            'ms': {
                title: 'Sup Avgolemono',
                description: 'Makcik nak kongsi resipi Sup Avgolemono ni. Sup ayam lemon yang lembut, dengan nasi, memang sedap dan menyegarkan jiwa. Cuba ya, mesti suka!',
                ingredients: [
                    { item: 'Stok ayam', amount: '6 cawan' },
                    { item: 'Beras Arborio', amount: '1/2 cawan' },
                    { item: 'Ayam carik masak', amount: '1 cawan' },
                    { item: 'Telur besar', amount: '3 biji' },
                    { item: 'Jus lemon segar', amount: '1/4 cawan' },
                    { item: 'Garam', amount: 'Secukup rasa' },
                    { item: 'Lada hitam kisar segar', amount: 'Secukup rasa' },
                    { item: 'Dill segar (dicincang)', amount: '2 sudu besar' }
                ],
                instructions: [
                    'Didihkan stok ayam dalam periuk besar. Masukkan beras, reneh sampai lembut.',
                    'Masukkan ayam carik, panaskan. Perasakan dengan garam dan lada.',
                    'Pukul telur sampai berbuih. Masukkan jus lemon sikit-sikit sambil pukul.',
                    'Ambil secawan stok panas, campur perlahan-lahan ke dalam adunan telur lemon.',
                    'Tuang balik adunan telur ke dalam periuk, kacau perlahan. Panaskan sampai pekat, jangan mendidih. Tabur dill segar.'
                ]
            },
            'hi': {
                title: 'अवगोलेमोनो सूप',
                description: 'अवगोलेमोनो सूप के साथ ग्रीस के आरामदायक आलिंगन का अनुभव करें! यह मखमली, नींबू-युक्त चिकन और चावल का सूप चमकीले, तीखे स्वादों और मलाईदार बनावट की एक सिम्फनी है, जो आपकी आत्मा को गर्म करने की गारंटी देता है। हर चम्मच के साथ भूमध्य सागर में ले जाने के लिए तैयार हो जाइए - आपको आज ही इस क्लासिक को आज़माना चाहिए!',
                ingredients: [
                    { item: 'चिकन शोरबा', amount: '6 कप' },
                    { item: 'अरबोरियो चावल', amount: '1/2 कप' },
                    { item: 'पका हुआ कटा हुआ चिकन', amount: '1 कप' },
                    { item: 'बड़े अंडे', amount: '3' },
                    { item: 'ताजा नींबू का रस', amount: '1/4 कप' },
                    { item: 'नमक', amount: 'स्वादानुसार' },
                    { item: 'ताज़ी पिसी हुई काली मिर्च', amount: 'स्वादानुसार' },
                    { item: 'ताजा डिल (कटा हुआ)', amount: '2 बड़े चम्मच' }
                ],
                instructions: [
                    'एक बड़े बर्तन में चिकन शोरबा उबाल लें। चावल डालें, आंच कम करें और नरम होने तक, लगभग 15-20 मिनट तक उबालें।',
                    'पका हुआ कटा हुआ चिकन डालें और गरम करें। नमक और काली मिर्च से सीज़न करें।',
                    'एक अलग कटोरे में, अंडे को झागदार होने तक फेंटें। धीरे-धीरे नींबू का रस फेंटें।',
                    'अंडे-नींबू के मिश्रण को धीरे-धीरे मिलाएं: अंडे के मिश्रण में लगभग 1 कप गर्म शोरबा डालें, लगातार फेंटते रहें।',
                    'तैयार अंडे के मिश्रण को वापस बर्तन में डालें, धीरे से हिलाएं। बिना उबाले थोड़ा गाढ़ा होने तक गरम करें। ताजे डिल से गार्निश करें।'
                ]
            },
            'bn': {
                title: 'অ্যাভগলেমনো স্যুপ',
                description: 'অ্যাভগলেমনো স্যুপের সাথে গ্রীসের আরামদায়ক আলিঙ্গন অনুভব করুন! এই মখমলের মতো, লেবু-মিশ্রিত চিকেন এবং চালের স্যুপ উজ্জ্বল, টক স্বাদ এবং ক্রিমি টেক্সচারের একটি সিম্ফনি, যা আপনার আত্মাকে উষ্ণ করার গ্যারান্টি দেয়। প্রতিটি চামচ দিয়ে ভূমধ্যসাগরে স্থানান্তরিত হওয়ার জন্য প্রস্তুত হন – আজই এই ক্লাসিকটি চেষ্টা করা আপনার জন্য আবশ্যক!',
                ingredients: [
                    { item: 'চিকেন ব্রোথ', amount: '6 কাপ' },
                    { item: 'আরবোরিও চাল', amount: '1/2 কাপ' },
                    { item: 'রান্না করা কাটা মুরগি', amount: '1 কাপ' },
                    { item: 'বড় ডিম', amount: '3টি' },
                    { item: 'তাজা লেবুর রস', amount: '1/4 কাপ' },
                    { item: 'লবণ', amount: 'স্বাদমতো' },
                    { item: 'তাজা গোলমরিচ গুঁড়ো', amount: 'স্বাদমতো' },
                    { item: 'তাজা ডিল (কাটা)', amount: '2 টেবিল চামচ' }
                ],
                instructions: [
                    'একটি বড় পাত্রে চিকেন ব্রোথ ফুটিয়ে নিন। চাল যোগ করুন, আঁচ কমিয়ে দিন এবং নরম হওয়া পর্যন্ত, প্রায় 15-20 মিনিট ধরে সিদ্ধ করুন।',
                    'রান্না করা কাটা মুরগি মিশিয়ে গরম করুন। লবণ এবং গোলমরিচ দিয়ে সিজন করুন।',
                    'একটি আলাদা বাটিতে, ডিম ফেটিয়ে ফেনা তৈরি করুন। ধীরে ধীরে লেবুর রস ফেটিয়ে নিন।',
                    'ডিম-লেবুর মিশ্রণটি ধীরে ধীরে গরম করুন: ডিমের মিশ্রণে প্রায় 1 কাপ গরম ব্রোথ ঢেলে দিন, ক্রমাগত ফেটাতে থাকুন।',
                    'তৈরি ডিমের মিশ্রণটি আবার পাত্রে ঢেলে দিন, আলতো করে নাড়ুন। সামান্য ঘন হওয়া পর্যন্ত না ফুটিয়ে গরম করুন। তাজা ডিল দিয়ে সাজান।'
                ]
            },
            'mr': {
                title: 'अवगोलेमोनो सूप',
                description: 'अवगोलेमोनो सूपसह ग्रीसच्या आरामदायक आलिंगनाचा अनुभव घ्या! हे मखमली, लिंबू-युक्त चिकन आणि तांदळाचे सूप चमकदार, आंबट चवी आणि मलईदार पोत यांची एक सिम्फनी आहे, जे तुमच्या आत्म्याला उबदार करण्याची हमी देते. प्रत्येक चमच्याने भूमध्य समुद्रात पोहोचण्यासाठी तयार रहा – तुम्हाला आजच हे क्लासिक करून पहावे लागेल!',
                ingredients: [
                    { item: 'चिकन शोरबा', amount: '6 कप' },
                    { item: 'आर्बोरिओ तांदूळ', amount: '1/2 कप' },
                    { item: 'शिजवलेले किसलेले चिकन', amount: '1 कप' },
                    { item: 'मोठी अंडी', amount: '3' },
                    { item: 'ताजा लिंबाचा रस', amount: '1/4 कप' },
                    { item: 'मीठ', amount: 'चवीनुसार' },
                    { item: 'ताजी दळलेली काळी मिरी', amount: 'चवीनुसार' },
                    { item: 'ताजे डिल (चिरलेले)', amount: '2 चमचे' }
                ],
                instructions: [
                    'एका मोठ्या भांड्यात चिकन शोरबा उकळा. तांदूळ घाला, आंच कमी करा आणि मऊ होईपर्यंत, सुमारे 15-20 मिनिटे शिजवा.',
                    'शिजवलेले किसलेले चिकन घालून गरम करा. मीठ आणि मिरीने सीझन करा.',
                    'एका वेगळ्या भांड्यात, अंडी फेस येईपर्यंत फेटा. हळूहळू लिंबाचा रस फेटा.',
                    'अंडी-लिंबाचे मिश्रण हळू हळू गरम करा: अंड्याच्या मिश्रणात सुमारे 1 कप गरम शोरबा घाला, सतत फेटत रहा.',
                    'गरम केलेले अंड्याचे मिश्रण परत भांड्यात घाला, हळूवारपणे ढवळत रहा. उकळू न देता थोडे घट्ट होईपर्यंत गरम करा. ताजे डिलने सजवा.'
                ]
            },
            'te': {
                title: 'అవ్గోలెమోనో సూప్',
                description: 'అవ్గోలెమోనో సూప్‌తో గ్రీస్ యొక్క హాయిని అనుభవించండి! ఈ వెల్వెట్, నిమ్మకాయ రుచిగల చికెన్ మరియు అన్నం సూప్ ప్రకాశవంతమైన, పుల్లని రుచులు మరియు క్రీమీ ఆకృతి యొక్క సింఫొనీ, ఇది మీ ఆత్మను వెచ్చగా ఉంచుతుంది. ప్రతి స్పూన్‌తో మధ్యధరా ప్రాంతానికి రవాణా చేయబడటానికి సిద్ధంగా ఉండండి – మీరు ఈ క్లాసిక్‌ను ఈరోజే ప్రయత్నించాలి!',
                ingredients: [
                    { item: 'చికెన్ బ్రోత్', amount: '6 కప్పులు' },
                    { item: 'అర్బోరియో బియ్యం', amount: '1/2 కప్పు' },
                    { item: 'వండిన తురిమిన చికెన్', amount: '1 కప్పు' },
                    { item: 'పెద్ద గుడ్లు', amount: '3' },
                    { item: 'తాజా నిమ్మరసం', amount: '1/4 కప్పు' },
                    { item: 'ఉప్పు', amount: 'రుచికి' },
                    { item: 'తాజాగా నూరిన నల్ల మిరియాలు', amount: 'రుచికి' },
                    { item: 'తాజా డిల్ (తరిగిన)', amount: '2 టేబుల్ స్పూన్లు' }
                ],
                instructions: [
                    'ఒక పెద్ద కుండలో చికెన్ బ్రోత్‌ను మరిగించండి. బియ్యం వేసి, మంట తగ్గించి, మెత్తబడే వరకు, సుమారు 15-20 నిమిషాలు ఉడికించండి.',
                    'వండిన తురిమిన చికెన్‌ను కలిపి వేడి చేయండి. ఉప్పు మరియు మిరియాలతో రుచి చూడండి.',
                    'ఒక ప్రత్యేక గిన్నెలో, గుడ్లను నురుగు వచ్చేవరకు కొట్టండి. నిమ్మరసాన్ని నెమ్మదిగా కొట్టండి.',
                    'గుడ్డు-నిమ్మకాయ మిశ్రమాన్ని నెమ్మదిగా వేడి చేయండి: గుడ్డు మిశ్రమంలో సుమారు 1 కప్పు వేడి బ్రోత్‌ను వేసి, నిరంతరం కొట్టండి.',
                    'వేడి చేసిన గుడ్డు మిశ్రమాన్ని తిరిగి కుండలోకి పోసి, మెల్లగా కలపండి. కొద్దిగా చిక్కబడే వరకు మరిగించకుండా వేడి చేయండి. తాజా డిల్‌తో అలంకరించండి.'
                ]
            },
            'ta': {
                title: 'அவ்கோலெமோனோ சூப்',
                description: 'அவ்கோலெமோனோ சூப்புடன் கிரேக்கத்தின் இதமான அரவணைப்பை அனுபவியுங்கள்! இந்த வெல்வெட், எலுமிச்சை கலந்த சிக்கன் மற்றும் அரிசி சூப் பிரகாசமான, புளிப்பு சுவைகள் மற்றும் கிரீமி அமைப்பின் ஒரு சிம்பொனி ஆகும், இது உங்கள் ஆன்மாவை சூடேற்றும். ஒவ்வொரு கரண்டியிலும் மத்தியதரைக் கடலுக்கு அழைத்துச் செல்லத் தயாராகுங்கள் – இந்த கிளாசிக் உணவை நீங்கள் இன்றே முயற்சிக்க வேண்டும்!',
                ingredients: [
                    { item: 'சிக்கன் குழம்பு', amount: '6 கப்' },
                    { item: 'அர்போரியோ அரிசி', amount: '1/2 கப்' },
                    { item: 'சமைத்த துண்டாக்கப்பட்ட சிக்கன்', amount: '1 கப்' },
                    { item: 'பெரிய முட்டைகள்', amount: '3' },
                    { item: 'புதிய எலுமிச்சை சாறு', amount: '1/4 கப்' },
                    { item: 'உப்பு', amount: 'சுவைக்கு' },
                    { item: 'புதிதாக அரைத்த கருப்பு மிளகு', amount: 'சுவைக்கு' },
                    { item: 'புதிய டில் (நறுக்கியது)', amount: '2 தேக்கரண்டி' }
                ],
                instructions: [
                    'ஒரு பெரிய பாத்திரத்தில் சிக்கன் குழம்பை கொதிக்க விடவும். அரிசியைச் சேர்த்து, தீயைக் குறைத்து, மென்மையாகும் வரை, சுமார் 15-20 நிமிடங்கள் சமைக்கவும்.',
                    'சமைத்த துண்டாக்கப்பட்ட சிக்கனைச் சேர்த்து சூடாக்கவும். உப்பு மற்றும் மிளகு சேர்த்து சுவையூட்டவும்.',
                    'ஒரு தனி கிண்ணத்தில், முட்டைகளை நுரை வரும் வரை அடிக்கவும். மெதுவாக எலுமிச்சை சாற்றை அடிக்கவும்.',
                    'முட்டை-எலுமிச்சை கலவையை மெதுவாக சூடாக்கவும்: முட்டை கலவையில் சுமார் 1 கப் சூடான குழம்பை ஊற்றி, தொடர்ந்து அடித்துக் கொண்டே இருக்கவும்.',
                    'சூடாக்கப்பட்ட முட்டை கலவையை மீண்டும் பாத்திரத்தில் ஊற்றி, மெதுவாக கிளறவும். கொதிக்க விடாமல் சற்று கெட்டியாகும் வரை சூடாக்கவும். புதிய டில் கொண்டு அலங்கரிக்கவும்.'
                ]
            }
        }
    },
    {
        id: '2026-05-11',
        title: 'Mee Rebus',
        description: 'Dive into a bowl of Mee Rebus, a Singaporean hawker classic featuring springy yellow noodles drenched in a rich, sweet, and savory potato-based gravy. Each spoonful is a symphony of flavors, topped with hard-boiled eggs, fried tofu, and fresh green chilies. Ready to recreate this iconic street food sensation in your own kitchen today?',
        image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&q=75&w=800',
        prepTime: '20 min',
        cookTime: '40 min',
        difficulty: 'Medium',
        servings: 4,
        ingredients: [
            { item: 'Yellow Hokkien Noodles', amount: '500g' },
            { item: 'Sweet Potatoes', amount: '2 medium (boiled, mashed)' },
            { item: 'Mee Rebus Spice Paste (blend of shallots, garlic, red chillies, dried shrimp)', amount: '4 tbsp' },
            { item: 'Fermented Bean Paste (Taucheo)', amount: '1 tbsp' },
            { item: 'Tamarind Paste', amount: '1 tbsp' },
            { item: 'Gula Melaka (Palm Sugar)', amount: '1 tbsp' },
            { item: 'Water', amount: '4 cups' },
            { item: 'Hard-boiled eggs', amount: '4 (halved)' },
            { item: 'Fried Tofu Puffs (Tau Pok)', amount: '8' },
            { item: 'Garnishes (Bean Sprouts, Lime wedges, Sliced Green Chillies, Crushed Roasted Peanuts)', amount: 'As needed' }
        ],
        instructions: [
            'Sauté Mee Rebus Spice Paste and Taucheo until fragrant. Add mashed sweet potatoes, tamarind, Gula Melaka, and water. Simmer until the gravy thickens.',
            'Blanch yellow noodles and bean sprouts briefly in hot water. Drain them well.',
            'Divide the blanched noodles and sprouts among your serving bowls.',
            'Ladle generous amounts of that hot, thick gravy over the noodles.',
            'Top each bowl with halved hard-boiled eggs, fried tofu puffs, and your favorite garnishes. Serve immediately!'
        ],
        tags: ['Singaporean', 'Dinner', 'Non-Vegetarian'],
        translations: {
            'zh-CN': {
                title: '爪哇面 (Mee Rebus)',
                description: '尝尝这碗爪哇面，新加坡小贩的经典！Q弹黄面配浓郁土豆酱，还有水煮蛋、炸豆腐，味道好极了！',
                ingredients: [
                    { item: '福建黄面', amount: '500克' },
                    { item: '红薯', amount: '2个中等大小 (煮熟，捣成泥)' },
                    { item: '爪哇面香料酱（小葱头、大蒜、红辣椒、虾米混合研磨）', amount: '4汤匙' },
                    { item: '豆酱 (Taucheo)', amount: '1汤匙' },
                    { item: '罗望子酱', amount: '1汤匙' },
                    { item: '马六甲椰糖 (Gula Melaka)', amount: '1汤匙' },
                    { item: '水', amount: '4杯' },
                    { item: '水煮蛋', amount: '4个 (对半切)' },
                    { item: '炸豆腐泡 (Tau Pok)', amount: '8个' },
                    { item: '配料（豆芽、青柠角、青辣椒片、花生碎）', amount: '适量' }
                ],
                instructions: [
                    '爆香香料酱和豆酱。',
                    '加红薯泥、罗望子酱、椰糖和水。',
                    '小火慢炖，酱汁变浓稠。',
                    '黄面、豆芽焯水，沥干。',
                    '面条、豆芽分装碗里。',
                    '浇上热腾腾的浓酱。',
                    '放半个蛋、炸豆腐，撒点青辣椒，趁热吃！'
                ]
            },
            'ms': {
                title: 'Mee Rebus',
                description: 'Mee Rebus ni memang kegemaran ramai! Mi kuning dengan kuah keledek pekat, manis dan savuri. Cuba buat sendiri, lagi puas hati!',
                ingredients: [
                    { item: 'Mi Hokkien Kuning', amount: '500g' },
                    { item: 'Ubi Keledek', amount: '2 sederhana (direbus, dilenyek)' },
                    { item: 'Pes Rempah Mee Rebus (campuran bawang merah, bawang putih, cili merah, udang kering)', amount: '4 sudu besar' },
                    { item: 'Taucu (Pes Kacang Fermentasi)', amount: '1 sudu besar' },
                    { item: 'Pes Asam Jawa', amount: '1 sudu besar' },
                    { item: 'Gula Melaka (Gula Aren)', amount: '1 sudu besar' },
                    { item: 'Air', amount: '4 cawan' },
                    { item: 'Telur Rebus', amount: '4 biji (dibelah dua)' },
                    { item: 'Tauhu Pok Goreng', amount: '8 biji' },
                    { item: 'Hiasan (Taugeh, Hirisan Limau Nipis, Hirisan Cili Hijau, Kacang Tanah Panggang Hancur)', amount: 'Secukupnya' }
                ],
                instructions: [
                    'Tumis pes rempah Mee Rebus dan taucu sampai wangi. Masukkan keledek lenyek, asam jawa, Gula Melaka, dan air. Reneh sampai kuah pekat.',
                    'Celur mi kuning dan taugeh sekejap, tos elok-elok.',
                    'Bahagikan mi dan taugeh dalam mangkuk.',
                    'Sendukkan kuah panas pekat tu banyak-banyak atas mi.',
                    'Letak telur rebus, tauhu pok goreng, dan hiasan lain. Hidang terus!'
                ]
            },
            'hi': {
                title: 'मी रीबस',
                description: 'मी रीबस के एक कटोरे में गोता लगाएँ, सिंगापुर का एक क्लासिक हॉकर व्यंजन जिसमें समृद्ध, मीठी और नमकीन आलू-आधारित ग्रेवी में डूबे हुए लोचदार पीले नूडल्स होते हैं। प्रत्येक निवाला स्वादों का एक सिम्फनी है, जिसके ऊपर उबले अंडे, तले हुए टोफू और ताज़ी हरी मिर्च होती है। आज ही अपनी रसोई में इस प्रतिष्ठित स्ट्रीट फूड सनसनी को फिर से बनाने के लिए तैयार हैं?',
                ingredients: [
                    { item: 'पीले होक्कियन नूडल्स', amount: '500 ग्राम' },
                    { item: 'शकरकंद', amount: '2 मध्यम (उबले, मसले हुए)' },
                    { item: 'मी रीबस मसाला पेस्ट (शैलट्स, लहसुन, लाल मिर्च, सूखे झींगा का मिश्रण)', amount: '4 बड़े चम्मच' },
                    { item: 'किण्वित बीन पेस्ट (टौचेओ)', amount: '1 बड़ा चम्मच' },
                    { item: 'इमली का पेस्ट', amount: '1 बड़ा चम्मच' },
                    { item: 'गुला मेलाका (ताड़ का गुड़)', amount: '1 बड़ा चम्मच' },
                    { item: 'पानी', amount: '4 कप' },
                    { item: 'उबले अंडे', amount: '4 (आधे कटे हुए)' },
                    { item: 'तले हुए टोफू पफ्स (ताऊ पोक)', amount: '8' },
                    { item: 'गार्निश (बीन स्प्राउट्स, नींबू के टुकड़े, कटी हुई हरी मिर्च, कुचले हुए भुने हुए मूंगफली)', amount: 'आवश्यकतानुसार' }
                ],
                instructions: [
                    'मी रीबस मसाला पेस्ट और टौचेओ को सुगंधित होने तक भूनें। मसले हुए शकरकंद, इमली का पेस्ट, गुला मेलाका और पानी डालें। ग्रेवी गाढ़ी होने तक उबालें।',
                    'पीले नूडल्स और बीन स्प्राउट्स को गर्म पानी में संक्षेप में उबालें। अच्छी तरह से छान लें।',
                    'उबले हुए नूडल्स और स्प्राउट्स को सर्विंग बाउल में बाँट लें।',
                    'नूडल्स के ऊपर गर्म, गाढ़ी ग्रेवी की उदार मात्रा डालें।',
                    'प्रत्येक कटोरे को आधे उबले अंडे, तले हुए टोफू पफ्स और वांछित गार्निश के साथ ऊपर से सजाएँ। तुरंत परोसें।'
                ]
            },
            'bn': {
                title: 'মি রিভাস',
                description: 'মি রিভাস-এর একটি বাটিতে ডুব দিন, সিঙ্গাপুরের একটি ক্লাসিক হকার খাবার যা সমৃদ্ধ, মিষ্টি এবং সুস্বাদু আলু-ভিত্তিক গ্রেভিতে ভেজানো স্প্রিংগি হলুদ নুডুলস দিয়ে তৈরি। প্রতিটি চামচ স্বাদের একটি সিম্ফনি, উপরে সেদ্ধ ডিম, ভাজা টোফু এবং তাজা সবুজ লঙ্কা দিয়ে সাজানো। আজই আপনার নিজের রান্নাঘরে এই আইকনিক স্ট্রিট ফুড সেনসেশনটি তৈরি করতে প্রস্তুত?',
                ingredients: [
                    { item: 'হলুদ হক্কিয়ান নুডুলস', amount: '500 গ্রাম' },
                    { item: 'মিষ্টি আলু', amount: '2 মাঝারি (সেদ্ধ, ম্যাশ করা)' },
                    { item: 'মি রিভাস স্পাইস পেস্ট (পেঁয়াজ, রসুন, লাল লঙ্কা, শুকনো চিংড়ির মিশ্রণ)', amount: '4 টেবিল চামচ' },
                    { item: 'ফার্মেন্টেড বিন পেস্ট (তাউচেও)', amount: '1 টেবিল চামচ' },
                    { item: 'তেঁতুলের পেস্ট', amount: '1 টেবিল চামচ' },
                    { item: 'গুলা মেলাকা (পাম সুগার)', amount: '1 টেবিল চামচ' },
                    { item: 'জল', amount: '4 কাপ' },
                    { item: 'সেদ্ধ ডিম', amount: '4 (অর্ধেক করা)' },
                    { item: 'ভাজা টোফু পাফস (তাউ পোক)', amount: '8' },
                    { item: 'গার্নিশ (বিন স্প্রাউটস, লেবুর ফালি, কাটা সবুজ লঙ্কা, গুঁড়ো ভাজা চিনাবাদাম)', amount: 'প্রয়োজন অনুযায়ী' }
                ],
                instructions: [
                    'মি রিভাস স্পাইস পেস্ট এবং তাউচেও সুগন্ধি না হওয়া পর্যন্ত ভাজুন। ম্যাশ করা মিষ্টি আলু, তেঁতুলের পেস্ট, গুলা মেলাকা এবং জল যোগ করুন। গ্রেভি ঘন না হওয়া পর্যন্ত সিদ্ধ করুন।',
                    'হলুদ নুডুলস এবং বিন স্প্রাউটস গরম জলে সংক্ষেপে ব্লাঞ্চ করুন। ভালো করে জল ঝরিয়ে নিন।',
                    'ব্লাঞ্চ করা নুডুলস এবং স্প্রাউটস পরিবেশনের বাটিগুলিতে ভাগ করে নিন।',
                    'নুডুলসের উপর গরম, ঘন গ্রেভি উদার পরিমাণে ঢেলে দিন।',
                    'প্রতিটি বাটি অর্ধেক সেদ্ধ ডিম, ভাজা টোফু পাফস এবং পছন্দসই গার্নিশ দিয়ে সাজিয়ে নিন। অবিলম্বে পরিবেশন করুন।'
                ]
            },
            'mr': {
                title: 'मी रीबस',
                description: 'मी रीबसच्या वाटीत डुबकी मारा, सिंगापूरमधील एक क्लासिक हॉकर डिश ज्यात समृद्ध, गोड आणि चवदार बटाट्याच्या ग्रेव्हीमध्ये बुडवलेले लवचिक पिवळे नूडल्स असतात. प्रत्येक घास चवींची एक सिम्फनी आहे, ज्यावर उकडलेले अंडे, तळलेले टोफू आणि ताज्या हिरव्या मिरच्या असतात. आजच आपल्या स्वयंपाकघरात ही प्रतिष्ठित स्ट्रीट फूड सनसनाटी पुन्हा तयार करण्यास तयार आहात?',
                ingredients: [
                    { item: 'पिवळे होक्कियन नूडल्स', amount: '500 ग्रॅम' },
                    { item: 'रताळे', amount: '2 मध्यम (उकडलेले, मॅश केलेले)' },
                    { item: 'मी रीबस मसाला पेस्ट (शॅलॉट्स, लसूण, लाल मिरच्या, सुक्या कोळंबीचे मिश्रण)', amount: '4 चमचे' },
                    { item: 'आंबवलेले बीन पेस्ट (टौचेओ)', amount: '1 चमचा' },
                    { item: 'चिंचेचा लगदा', amount: '1 चमचा' },
                    { item: 'गुला मेलाका (पाम शुगर)', amount: '1 चमचा' },
                    { item: 'पाणी', amount: '4 कप' },
                    { item: 'उकडलेले अंडे', amount: '4 (अर्धे केलेले)' },
                    { item: 'तळलेले टोफू पफ्स (ताऊ पोक)', amount: '8' },
                    { item: 'गार्निश (बीन स्प्राउट्स, लिंबाचे तुकडे, चिरलेल्या हिरव्या मिरच्या, कुटलेले भाजलेले शेंगदाणे)', amount: 'आवश्यकतेनुसार' }
                ],
                instructions: [
                    'मी रीबस मसाला पेस्ट आणि टौचेओ सुगंधित होईपर्यंत परतून घ्या. मॅश केलेले रताळे, चिंचेचा लगदा, गुला मेलाका आणि पाणी घाला. ग्रेव्ही घट्ट होईपर्यंत उकळा.',
                    'पिवळे नूडल्स आणि बीन स्प्राउट्स गरम पाण्यात थोडक्यात ब्लँच करा. चांगले निथळून घ्या.',
                    'ब्लँच केलेले नूडल्स आणि स्प्राउट्स सर्व्हिंग बाऊल्समध्ये वाटून घ्या.',
                    'नूडल्सवर गरम, घट्ट ग्रेव्ही उदारपणे ओता.',
                    'प्रत्येक वाटीवर अर्धे उकडलेले अंडे, तळलेले टोफू पफ्स आणि इच्छित गार्निश घालून सजवा. लगेच सर्व्ह करा.'
                ]
            },
            'te': {
                title: 'మీ రీబస్',
                description: 'మీ రీబస్ గిన్నెలో మునిగిపోండి, ఇది సింగపూర్ యొక్క క్లాసిక్ హాకర్ వంటకం, ఇందులో గొప్ప, తీపి మరియు రుచికరమైన బంగాళాదుంప ఆధారిత గ్రేవీలో ముంచిన స్ప్రింగ్గి పసుపు నూడుల్స్ ఉంటాయి. ప్రతి స్పూన్‌ఫుల్ రుచుల సింఫనీ, ఉడికించిన గుడ్లు, వేయించిన టోఫు మరియు తాజా పచ్చిమిర్చితో అగ్రస్థానంలో ఉంటుంది. ఈ ఐకానిక్ స్ట్రీట్ ఫుడ్ సంచలనాన్ని ఈరోజే మీ స్వంత వంటగదిలో తిరిగి సృష్టించడానికి సిద్ధంగా ఉన్నారా?',
                ingredients: [
                    { item: 'పసుపు హోక్కియన్ నూడుల్స్', amount: '500 గ్రా' },
                    { item: 'చిలగడదుంపలు', amount: '2 మధ్యస్థ (ఉడికించినవి, మెత్తగా చేసినవి)' },
                    { item: 'మీ రీబస్ స్పైస్ పేస్ట్ (షాలట్స్, వెల్లుల్లి, ఎర్ర మిరపకాయలు, ఎండిన రొయ్యల మిశ్రమం)', amount: '4 టేబుల్ స్పూన్లు' },
                    { item: 'పులియబెట్టిన బీన్ పేస్ట్ (టౌచెయో)', amount: '1 టేబుల్ స్పూన్' },
                    { item: 'చింతపండు పేస్ట్', amount: '1 టేబుల్ స్పూన్' },
                    { item: 'గులా మెలాకా (పామ్ షుగర్)', amount: '1 టేబుల్ స్పూన్' },
                    { item: 'నీరు', amount: '4 కప్పులు' },
                    { item: 'ఉడికించిన గుడ్లు', amount: '4 (సగానికి కోసినవి)' },
                    { item: 'వేయించిన టోఫు పఫ్స్ (టౌ పోక్)', amount: '8' },
                    { item: 'గార్నిష్ (బీన్ మొలకలు, నిమ్మకాయ ముక్కలు, తరిగిన పచ్చిమిరపకాయలు, నలిపిన వేయించిన వేరుశెనగ)', amount: 'అవసరమైనంత' }
                ],
                instructions: [
                    'మీ రీబస్ స్పైస్ పేస్ట్ మరియు టౌచెయో సువాసన వచ్చే వరకు వేయించాలి. మెత్తగా చేసిన చిలగడదుంపలు, చింతపండు పేస్ట్, గులా మెలాకా మరియు నీరు వేయాలి. గ్రేవీ చిక్కబడే వరకు ఉడికించాలి.',
                    'పసుపు నూడుల్స్ మరియు బీన్ మొలకలను వేడి నీటిలో కొద్దిసేపు బ్లంచ్ చేయాలి. బాగా వడకట్టాలి.',
                    'బ్లంచ్ చేసిన నూడుల్స్ మరియు మొలకలను సర్వింగ్ గిన్నెల్లో పంచుకోవాలి.',
                    'నూడుల్స్ పైన వేడి, చిక్కటి గ్రేవీని ఉదారంగా వేయాలి.',
                    'ప్రతి గిన్నెను సగానికి కోసిన ఉడికించిన గుడ్లు, వేయించిన టోఫు పఫ్స్ మరియు కావలసిన గార్నిష్‌లతో అలంకరించాలి. వెంటనే సర్వ్ చేయాలి.'
                ]
            },
            'ta': {
                title: 'மீ ரீபஸ்',
                description: 'மீ ரீபஸ் கிண்ணத்தில் மூழ்கிவிடுங்கள், இது சிங்கப்பூரின் ஒரு கிளாசிக் ஹாக்கர் உணவாகும், இதில் செழுமையான, இனிப்பு மற்றும் சுவையான உருளைக்கிழங்கு அடிப்படையிலான கிரேவியில் தோய்க்கப்பட்ட மீள் மஞ்சள் நூடுல்ஸ் இடம்பெறுகிறது. ஒவ்வொரு கரண்டியும் சுவைகளின் சிம்பொனி, வேகவைத்த முட்டைகள், வறுத்த டோஃபு மற்றும் புதிய பச்சை மிளகாய்களுடன் மேலே உள்ளது. இன்று உங்கள் சொந்த சமையலறையில் இந்த சின்னமான தெரு உணவு உணர்வை மீண்டும் உருவாக்க தயாரா?',
                ingredients: [
                    { item: 'மஞ்சள் ஹொக்கியன் நூடுல்ஸ்', amount: '500 கிராம்' },
                    { item: 'சர்க்கரைவள்ளி கிழங்கு', amount: '2 நடுத்தர (வேகவைத்து, மசித்த)' },
                    { item: 'மீ ரீபஸ் மசாலா பேஸ்ட் (சின்ன வெங்காயம், பூண்டு, சிவப்பு மிளகாய், உலர்ந்த இறால் கலவை)', amount: '4 தேக்கரண்டி' },
                    { item: 'புளித்த பீன் பேஸ்ட் (டௌச்சியோ)', amount: '1 தேக்கரண்டி' },
                    { item: 'புளி பேஸ்ட்', amount: '1 தேக்கரண்டி' },
                    { item: 'குலா மெலாக்கா (பனை சர்க்கரை)', amount: '1 தேக்கரண்டி' },
                    { item: 'தண்ணீர்', amount: '4 கப்' },
                    { item: 'வேகவைத்த முட்டைகள்', amount: '4 (பாதியாக வெட்டப்பட்ட)' },
                    { item: 'வறுத்த டோஃபு பஃப்ஸ் (டௌ போக்)', amount: '8' },
                    { item: 'அலங்காரங்கள் (பீன்ஸ் முளைகள், எலுமிச்சை துண்டுகள், நறுக்கிய பச்சை மிளகாய், நொறுக்கப்பட்ட வறுத்த வேர்க்கடலை)', amount: 'தேவைக்கேற்ப' }
                ],
                instructions: [
                    'மீ ரீபஸ் மசாலா பேஸ்ட் மற்றும் டௌச்சியோவை மணம் வரும் வரை வதக்கவும். மசித்த சர்க்கரைவள்ளி கிழங்கு, புளி பேஸ்ட், குலா மெலாக்கா மற்றும் தண்ணீர் சேர்க்கவும். கிரேவி கெட்டியாகும் வரை கொதிக்க விடவும்.',
                    'மஞ்சள் நூடுல்ஸ் மற்றும் பீன்ஸ் முளைகளை சூடான நீரில் சுருக்கமாக பிளான்ச் செய்யவும். நன்கு வடிகட்டவும்.',
                    'பிளான்ச் செய்யப்பட்ட நூடுல்ஸ் மற்றும் முளைகளை பரிமாறும் கிண்ணங்களில் பிரிக்கவும்.',
                    'நூடுல்ஸ் மீது சூடான, கெட்டியான கிரேவியை தாராளமாக ஊற்றவும்.',
                    'ஒவ்வொரு கிண்ணத்தையும் பாதியாக வெட்டப்பட்ட வேகவைத்த முட்டைகள், வறுத்த டோஃபு பஃப்ஸ் மற்றும் விரும்பிய அலங்காரங்களுடன் மேலே வைக்கவும். உடனடியாக பரிமாறவும்.'
                ]
            }
        }
    },
    {
        id: '2026-05-12',
        title: 'Tteokbokki',
        description: 'Experience the fiery, chewy delight of Tteokbokki, a beloved Korean street food sensation! Tender rice cakes bathed in a rich, spicy gochujang sauce, often accompanied by fish cakes and boiled eggs. This iconic dish offers an explosion of sweet, savory, and spicy flavors that will tantalize your taste buds. Ready to ignite your kitchen with this irresistible Korean classic?',
        image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&q=75&w=800',
        prepTime: '20 min',
        cookTime: '40 min',
        difficulty: 'Medium',
        servings: 4,
        ingredients: [
            { item: 'Garaetteok (Korean rice cakes)', amount: '500g' },
            { item: 'Gochujang (Korean chili paste)', amount: '3 tbsp' },
            { item: 'Gochugaru (Korean chili flakes)', amount: '1 tbsp' },
            { item: 'Dashima (dried kelp) / Anchovy broth', amount: '4 cups' },
            { item: 'Fish cakes (eomuk)', amount: '200g' },
            { item: 'Boiled eggs', amount: '2-4' },
            { item: 'Green onions', amount: '2 stalks' },
            { item: 'Sugar', amount: '1 tbsp' },
            { item: 'Soy sauce', amount: '1 tbsp' },
            { item: 'Garlic (minced)', amount: '1 tsp' }
        ],
        instructions: [
            'Soak rice cakes if they\'re hard. Make a simple broth with dashima and anchovies, then remove the solids.',
            'In the broth, add gochujang, gochugaru, sugar, soy sauce, and minced garlic. Bring it to a boil.',
            'Add the rice cakes and fish cakes. Simmer, stirring occasionally, until the rice cakes are soft and the sauce thickens nicely.',
            'Stir in boiled eggs and chopped green onions. Serve immediately for that spicy, chewy delight!'
        ],
        tags: ['Korean', 'Dinner', 'Non-Vegetarian', 'Spicy'],
        translations: {
            'zh-CN': {
                title: '辣炒年糕 (Tteokbokki)',
                description: '辣炒年糕，韩国街头小吃！软糯年糕裹着辣酱，配鱼饼、水煮蛋，甜辣过瘾，快来试试！',
                ingredients: [
                    { item: '韩式年糕 (Garaetteok)', amount: '500克' },
                    { item: '韩式辣酱 (Gochujang)', amount: '3汤匙' },
                    { item: '韩式辣椒粉 (Gochugaru)', amount: '1汤匙' },
                    { item: '海带 (Dashima) / 鳀鱼高汤', amount: '4杯' },
                    { item: '鱼饼 (eomuk)', amount: '200克' },
                    { item: '水煮蛋', amount: '2-4个' },
                    { item: '青葱', amount: '2根' },
                    { item: '糖', amount: '1汤匙' },
                    { item: '酱油', amount: '1汤匙' },
                    { item: '蒜蓉', amount: '1茶匙' }
                ],
                instructions: [
                    '年糕硬就先泡泡。',
                    '海带/鳀鱼煮高汤，捞出。',
                    '高汤加辣酱、辣椒粉、糖、酱油、蒜蓉，煮开。',
                    '下年糕、鱼饼，小火炖。',
                    '年糕软烂，酱汁浓稠就好。',
                    '拌入水煮蛋、葱花，趁热吃！'
                ]
            },
            'ms': {
                title: 'Tteokbokki',
                description: 'Tteokbokki ni pedas-pedas kenyal, memang sedap! Kek beras dengan sos gochujang pedas, makan dengan kek ikan dan telur rebus. Jom cuba!',
                ingredients: [
                    { item: 'Garaetteok (Kek Beras Korea)', amount: '500g' },
                    { item: 'Gochujang (Pes Cili Korea)', amount: '3 sudu besar' },
                    { item: 'Gochugaru (Serbuk Cili Korea)', amount: '1 sudu besar' },
                    { item: 'Dashima (rumpai laut kering) / Stok Ikan Bilis', amount: '4 cawan' },
                    { item: 'Kek ikan (eomuk)', amount: '200g' },
                    { item: 'Telur rebus', amount: '2-4 biji' },
                    { item: 'Daun bawang', amount: '2 tangkai' },
                    { item: 'Gula', amount: '1 sudu besar' },
                    { item: 'Kicap', amount: '1 sudu besar' },
                    { item: 'Bawang putih (dicincang)', amount: '1 sudu kecil' }
                ],
                instructions: [
                    'Rendam kek beras kalau keras. Buat stok ikan bilis, buang bahan pepejal.',
                    'Dalam stok, masukkan gochujang, gochugaru, gula, kicap, dan bawang putih. Didihkan.',
                    'Masukkan kek beras dan kek ikan. Reneh, kacau selalu, sampai kek beras lembut dan sos pekat.',
                    'Masukkan telur rebus dan daun bawang. Hidang panas-panas.'
                ]
            },
            'hi': {
                title: 'टॉकबोक्की',
                description: 'टॉकबोक्की के तीखे, चबाने वाले आनंद का अनुभव करें, जो एक प्रिय कोरियाई स्ट्रीट फूड सनसनी है! नरम चावल के केक एक समृद्ध, मसालेदार गोचुजांग सॉस में डूबे हुए, अक्सर मछली के केक और उबले अंडे के साथ परोसे जाते हैं। यह प्रतिष्ठित व्यंजन मीठे, नमकीन और मसालेदार स्वादों का एक विस्फोट प्रदान करता है जो आपकी स्वाद कलिकाओं को उत्तेजित करेगा। इस अनूठे कोरियाई क्लासिक के साथ अपनी रसोई को प्रज्वलित करने के लिए तैयार हैं?',
                ingredients: [
                    { item: 'गारेट्टोक (कोरियाई चावल के केक)', amount: '500 ग्राम' },
                    { item: 'गोचुजांग (कोरियाई मिर्च का पेस्ट)', amount: '3 बड़े चम्मच' },
                    { item: 'गोचुगारू (कोरियाई मिर्च के गुच्छे)', amount: '1 बड़ा चम्मच' },
                    { item: 'दशिमा (सूखे केल्प) / एंकोवी शोरबा', amount: '4 कप' },
                    { item: 'मछली के केक (ओमुक)', amount: '200 ग्राम' },
                    { item: 'उबले अंडे', amount: '2-4' },
                    { item: 'हरी प्याज', amount: '2 डंठल' },
                    { item: 'चीनी', amount: '1 बड़ा चम्मच' },
                    { item: 'सोया सॉस', amount: '1 बड़ा चम्मच' },
                    { item: 'लहसुन (बारीक कटा हुआ)', amount: '1 छोटा चम्मच' }
                ],
                instructions: [
                    'यदि चावल के केक सख्त हों तो उन्हें भिगो दें। दशिमा/एंकोवी से शोरबा तैयार करें, फिर ठोस पदार्थ हटा दें।',
                    'शोरबा में गोचुजांग, गोचुगारू, चीनी, सोया सॉस और बारीक कटा हुआ लहसुन डालें। उबाल लें।',
                    'चावल के केक और मछली के केक डालें। धीमी आंच पर पकाएं, कभी-कभी हिलाते रहें, जब तक चावल के केक नरम न हो जाएं और सॉस गाढ़ा न हो जाए।',
                    'उबले अंडे और कटी हुई हरी प्याज डालकर मिलाएं। तुरंत परोसें।'
                ]
            },
            'bn': {
                title: 'টোকবোক্কি',
                description: 'টোকবোক্কির জ্বলন্ত, চিবানো আনন্দের অভিজ্ঞতা নিন, একটি প্রিয় কোরিয়ান স্ট্রিট ফুড সেনসেশন! নরম চালের কেক একটি সমৃদ্ধ, মশলাদার গোচুজাং সসে ডুবানো, প্রায়শই মাছের কেক এবং সেদ্ধ ডিমের সাথে পরিবেশন করা হয়। এই আইকনিক খাবারটি মিষ্টি, সুস্বাদু এবং মশলাদার স্বাদের একটি বিস্ফোরণ সরবরাহ করে যা আপনার স্বাদকোরককে মুগ্ধ করবে। এই অপ্রতিরোধ্য কোরিয়ান ক্লাসিক দিয়ে আপনার রান্নাঘরকে আলোকিত করতে প্রস্তুত?',
                ingredients: [
                    { item: 'গ্যারেত্তেওক (কোরিয়ান চালের কেক)', amount: '500 গ্রাম' },
                    { item: 'গোচুজাং (কোরিয়ান লঙ্কার পেস্ট)', amount: '3 টেবিল চামচ' },
                    { item: 'গোচুগারু (কোরিয়ান লঙ্কার ফ্লেক্স)', amount: '1 টেবিল চামচ' },
                    { item: 'দাশিমা (শুকনো কেল্প) / অ্যাঙ্কোভি ব্রোথ', amount: '4 কাপ' },
                    { item: 'ফিশ কেক (ওমুক)', amount: '200 গ্রাম' },
                    { item: 'সেদ্ধ ডিম', amount: '2-4টি' },
                    { item: 'সবুজ পেঁয়াজ', amount: '2টি ডাঁটা' },
                    { item: 'চিনি', amount: '1 টেবিল চামচ' },
                    { item: 'সয়া সস', amount: '1 টেবিল চামচ' },
                    { item: 'রসুন (কুচি)', amount: '1 চা চামচ' }
                ],
                instructions: [
                    'যদি চালের কেক শক্ত হয় তবে ভিজিয়ে রাখুন। দাশিমা/অ্যাঙ্কোভি দিয়ে ব্রোথ তৈরি করুন, তারপর কঠিন অংশগুলি সরিয়ে ফেলুন।',
                    'ব্রোথে গোচুজাং, গোচুগারু, চিনি, সয়া সস এবং কুচি করা রসুন যোগ করুন। ফুটিয়ে নিন।',
                    'চালের কেক এবং ফিশ কেক যোগ করুন। মাঝে মাঝে নাড়তে নাড়তে সিদ্ধ করুন, যতক্ষণ না চালের কেক নরম হয় এবং সস ঘন হয়।',
                    'সেদ্ধ ডিম এবং কাটা সবুজ পেঁয়াজ মিশিয়ে নিন। অবিলম্বে পরিবেশন করুন।'
                ]
            },
            'mr': {
                title: 'टॉकबोक्की',
                description: 'टॉकबोक्कीच्या ज्वलंत, चिवट आनंदाचा अनुभव घ्या, एक प्रिय कोरियन स्ट्रीट फूड सेन्सेशन! मऊ तांदळाचे केक एका समृद्ध, मसालेदार गोचुजांग सॉसमध्ये बुडवलेले, अनेकदा फिश केक आणि उकडलेल्या अंड्यांसह. हा प्रतिष्ठित पदार्थ गोड, चवदार आणि मसालेदार चवींचा स्फोट देतो जो तुमच्या चवीच्या कळ्यांना उत्तेजित करेल. या अप्रतिम कोरियन क्लासिकने तुमचे स्वयंपाकघर प्रज्वलित करण्यास तयार आहात?',
                ingredients: [
                    { item: 'गारेट्टोक (कोरियन तांदळाचे केक)', amount: '500 ग्रॅम' },
                    { item: 'गोचुजांग (कोरियन मिरची पेस्ट)', amount: '3 चमचे' },
                    { item: 'गोचुगारू (कोरियन मिरचीचे फ्लेक्स)', amount: '1 चमचा' },
                    { item: 'दाशिमा (सुके केल्प) / अँकोवी सूप', amount: '4 कप' },
                    { item: 'फिश केक (ओमुक)', amount: '200 ग्रॅम' },
                    { item: 'उकडलेली अंडी', amount: '2-4' },
                    { item: 'हिरवी कांदा', amount: '2 देठ' },
                    { item: 'साखर', amount: '1 चमचा' },
                    { item: 'सोया सॉस', amount: '1 चमचा' },
                    { item: 'लसूण (बारीक चिरलेला)', amount: '1 छोटा चमचा' }
                ],
                instructions: [
                    'तांदळाचे केक कडक असल्यास भिजवा. दाशिमा/अँकोवी वापरून सूप तयार करा, नंतर घन पदार्थ काढून टाका.',
                    'सूपमध्ये गोचुजांग, गोचुगारू, साखर, सोया सॉस आणि बारीक चिरलेला लसूण घाला. उकळी आणा.',
                    'तांदळाचे केक आणि फिश केक घाला. तांदळाचे केक मऊ होईपर्यंत आणि सॉस घट्ट होईपर्यंत अधूनमधून ढवळत शिजवा.',
                    'उकडलेली अंडी आणि चिरलेली हिरवी कांदा घालून मिसळा. लगेच सर्व्ह करा.'
                ]
            },
            'te': {
                title: 'టెయోక్‌బొక్కీ',
                description: 'కొరియన్ స్ట్రీట్ ఫుడ్ సంచలనం, టెయోక్‌బొక్కీ యొక్క మండుతున్న, నమలగల ఆనందాన్ని అనుభవించండి! మృదువైన బియ్యం కేకులు గొప్ప, కారంగా ఉండే గోచుజాంగ్ సాస్‌లో మునిగి, తరచుగా చేపల కేకులు మరియు ఉడికించిన గుడ్లతో వడ్డిస్తారు. ఈ ఐకానిక్ వంటకం తీపి, రుచికరమైన మరియు కారంగా ఉండే రుచుల పేలుడును అందిస్తుంది, ఇది మీ రుచి మొగ్గలను ఉత్తేజపరుస్తుంది. ఈ తిరుగులేని కొరియన్ క్లాసిక్‌తో మీ వంటగదిని వెలిగించడానికి సిద్ధంగా ఉన్నారా?',
                ingredients: [
                    { item: 'గారేటియోక్ (కొరియన్ బియ్యం కేకులు)', amount: '500 గ్రా' },
                    { item: 'గోచుజాంగ్ (కొరియన్ మిరప పేస్ట్)', amount: '3 టేబుల్ స్పూన్లు' },
                    { item: 'గోచుగారు (కొరియన్ మిరప రేకులు)', amount: '1 టేబుల్ స్పూన్' },
                    { item: 'దాషిమా (ఎండిన కెల్ప్) / ఆంకోవీ రసం', amount: '4 కప్పులు' },
                    { item: 'చేపల కేకులు (ఓముక్)', amount: '200 గ్రా' },
                    { item: 'ఉడికించిన గుడ్లు', amount: '2-4' },
                    { item: 'పచ్చి ఉల్లిపాయలు', amount: '2 కాడలు' },
                    { item: 'చక్కెర', amount: '1 టేబుల్ స్పూన్' },
                    { item: 'సోయా సాస్', amount: '1 టేబుల్ స్పూన్' },
                    { item: 'వెల్లుల్లి (ముక్కలు)', amount: '1 టీ స్పూన్' }
                ],
                instructions: [
                    'బియ్యం కేకులు గట్టిగా ఉంటే నానబెట్టండి. దాషిమా/ఆంకోవీలతో రసం తయారు చేసి, ఆపై ఘనపదార్థాలను తొలగించండి.',
                    'రసంలో గోచుజాంగ్, గోచుగారు, చక్కెర, సోయా సాస్ మరియు ముక్కలు చేసిన వెల్లుల్లిని కలపండి. మరిగించండి.',
                    'బియ్యం కేకులు మరియు చేపల కేకులు వేయండి. బియ్యం కేకులు మృదువుగా అయ్యే వరకు మరియు సాస్ చిక్కబడే వరకు అప్పుడప్పుడు కలుపుతూ ఉడికించండి.',
                    'ఉడికించిన గుడ్లు మరియు తరిగిన పచ్చి ఉల్లిపాయలు వేసి కలపండి. వెంటనే వడ్డించండి.'
                ]
            },
            'ta': {
                title: 'டியோக்போக்கி',
                description: 'கொரியன் தெரு உணவின் விருப்பமான உணர்வான டியோக்போக்கியின் காரமான, மெல்லக்கூடிய இன்பத்தை அனுபவிக்கவும்! மென்மையான அரிசி கேக்குகள் ஒரு செழுமையான, காரமான கோச்சுஜாங் சாஸில் மூழ்கி, பெரும்பாலும் மீன் கேக்குகள் மற்றும் வேகவைத்த முட்டைகளுடன் பரிமாறப்படுகின்றன. இந்த சின்னமான உணவு இனிப்பு, சுவையான மற்றும் காரமான சுவைகளின் வெடிப்பை வழங்குகிறது, இது உங்கள் சுவை மொட்டுகளைத் தூண்டும். இந்த தவிர்க்க முடியாத கொரியன் கிளாசிக் மூலம் உங்கள் சமையலறையை ஒளிரச் செய்யத் தயாரா?',
                ingredients: [
                    { item: 'கரேட்டியோக் (கொரியன் அரிசி கேக்குகள்)', amount: '500 கிராம்' },
                    { item: 'கோச்சுஜாங் (கொரியன் மிளகாய் விழுது)', amount: '3 தேக்கரண்டி' },
                    { item: 'கோச்சுகாரு (கொரியன் மிளகாய் செதில்கள்)', amount: '1 தேக்கரண்டி' },
                    { item: 'தாஷிமா (உலர்ந்த கெல்ப்) / அஞ்சோவி குழம்பு', amount: '4 கப்' },
                    { item: 'மீன் கேக்குகள் (ஓமுக்)', amount: '200 கிராம்' },
                    { item: 'வேகவைத்த முட்டைகள்', amount: '2-4' },
                    { item: 'பச்சை வெங்காயம்', amount: '2 தண்டுகள்' },
                    { item: 'சர்க்கரை', amount: '1 தேக்கரண்டி' },
                    { item: 'சோயா சாஸ்', amount: '1 தேக்கரண்டி' },
                    { item: 'பூண்டு (நறுக்கியது)', amount: '1 தேக்கரண்டி' }
                ],
                instructions: [
                    'அரிசி கேக்குகள் கடினமாக இருந்தால் ஊறவைக்கவும். தாஷிமா/அஞ்சோவிகளுடன் குழம்பு தயாரித்து, பின்னர் திடப்பொருட்களை அகற்றவும்.',
                    'குழம்பில் கோச்சுஜாங், கோச்சுகாரு, சர்க்கரை, சோயா சாஸ் மற்றும் நறுக்கிய பூண்டு சேர்க்கவும். கொதிக்க விடவும்.',
                    'அரிசி கேக்குகள் மற்றும் மீன் கேக்குகளை சேர்க்கவும். அரிசி கேக்குகள் மென்மையாகும் வரை மற்றும் சாஸ் கெட்டியாகும் வரை அவ்வப்போது கிளறி, மெதுவாக கொதிக்க விடவும்.',
                    'வேகவைத்த முட்டைகள் மற்றும் நறுக்கிய பச்சை வெங்காயத்தை சேர்த்து கிளறவும். உடனடியாக பரிமாறவும்.'
                ]
            }
        }
    },
    {
        id: '2026-05-13',
        title: 'Hokkien Mee',
        description: 'Dive into the irresistible symphony of wok-hei infused noodles, succulent prawns, tender squid, and crispy pork belly, all bathed in a rich, savory prawn broth. This iconic Singaporean stir-fry is a textural masterpiece, bursting with umami in every bite. Get ready to ignite your taste buds and bring the vibrant flavors of Singapore right into your kitchen tonight!',
        image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=75&w=800',
        prepTime: '20 min',
        cookTime: '40 min',
        difficulty: 'Medium',
        servings: 4,
        ingredients: [
            { item: 'Mixed Noodles (Yellow Hokkien & Bee Hoon)', amount: '700g total, soaked if dry' },
            { item: 'Mixed Seafood (Fresh Prawns & Squid)', amount: '500g total, cleaned and prepared' },
            { item: 'Pork Belly', amount: '150g, sliced thinly' },
            { item: 'Prawn Broth', amount: '750ml (rich and flavorful)' },
            { item: 'Hokkien Mee Sauce', amount: '4 tbsp (blend of light soy, dark soy, fish sauce)' },
            { item: 'Aromatics & Greens (Minced Garlic, Bean Sprouts, Chives)', amount: '200g total' },
            { item: 'Lard or Vegetable Oil', amount: '3 tbsp' },
            { item: 'Sambal Belacan & Lime', amount: 'For serving' }
        ],
        instructions: [
            'Heat lard in a wok. Fry pork belly until crispy. Add garlic, then stir-fry seafood until just cooked. Set aside.',
            'Add mixed noodles to the wok. Pour in prawn broth and Hokkien Mee sauce. Simmer until noodles soak up most of the liquid.',
            'Return pork and seafood to the wok. Add bean sprouts and chives. Stir-fry vigorously until well combined and slightly charred.',
            'Serve immediately with a dollop of sambal belacan and a squeeze of fresh lime. Pure wok-hei magic!'
        ],
        tags: ['Singaporean', 'Dinner', 'Non-Vegetarian'],
        translations: {
            'zh-CN': {
                title: '福建炒虾面',
                description: '福建炒虾面，锅气十足！虾、鱿鱼、五花肉，浸在鲜美虾汤里，每一口都好吃。快把新加坡味道带回家！',
                ingredients: [
                    { item: '混合面条（黄福建面和米粉）', amount: '共700克，干面需提前泡软' },
                    { item: '混合海鲜（新鲜虾和鱿鱼）', amount: '共500克，洗净处理好' },
                    { item: '五花肉', amount: '150克，切薄片' },
                    { item: '虾汤', amount: '750毫升（浓郁鲜美）' },
                    { item: '福建炒面酱', amount: '4汤匙（生抽、老抽、鱼露混合）' },
                    { item: '调味品和蔬菜（蒜蓉、豆芽、韭菜）', amount: '共200克' },
                    { item: '猪油或植物油', amount: '3汤匙' },
                    { item: '参巴峇拉煎和青柠', amount: '供食用' }
                ],
                instructions: [
                    '热锅下猪油，炒脆五花肉。',
                    '加蒜蓉，炒熟海鲜，盛出。',
                    '下混合面条，倒虾汤、炒面酱。',
                    '小火炖，面条吸饱汤汁。',
                    '倒回五花肉、海鲜。',
                    '加调料、豆芽、韭菜，大火快炒。',
                    '趁热上桌，配参巴酱、青柠汁。'
                ]
            },
            'ms': {
                title: 'Mee Hokkien',
                description: 'Mee Hokkien ni memang padu! Mi goreng dengan udang, sotong, perut babi rangup, disiram kuah udang pekat. Rasa umami yang tak boleh lawan!',
                ingredients: [
                    { item: 'Mi Campur (Mi Hokkien Kuning & Bihun)', amount: 'Jumlah 700g, rendam jika kering' },
                    { item: 'Makanan Laut Campur (Udang Segar & Sotong)', amount: 'Jumlah 500g, dibersihkan dan disediakan' },
                    { item: 'Perut Babi', amount: '150g, dihiris nipis' },
                    { item: 'Kuah Udang', amount: '750ml (kaya dan berperisa)' },
                    { item: 'Sos Mi Hokkien', amount: '4 sudu besar (campuran kicap cair, kicap pekat, sos ikan)' },
                    { item: 'Bahan Aromatik & Sayuran (Bawang Putih Cincang, Taugeh, Kucai)', amount: 'Jumlah 200g' },
                    { item: 'Minyak Babi atau Minyak Sayuran', amount: '3 sudu besar' },
                    { item: 'Sambal Belacan & Limau Nipis', amount: 'Untuk hidangan' }
                ],
                instructions: [
                    'Panaskan minyak, goreng perut babi sampai rangup. Masukkan bawang putih, tumis makanan laut sampai masak. Angkat.',
                    'Masukkan mi campur. Tuang kuah udang dan sos Mi Hokkien. Reneh sampai mi serap kuah.',
                    'Masukkan balik babi dan makanan laut. Masukkan taugeh dan kucai. Tumis kuat-kuat sampai sebati.',
                    'Hidang terus dengan sambal belacan dan perahan limau nipis.'
                ]
            },
            'hi': {
                title: 'होक्कियन मी',
                description: 'वोक-हेई से भरपूर नूडल्स, रसीले झींगे, नरम स्क्वीड और कुरकुरी पोर्क बेली का एक अनूठा संगम, जो एक समृद्ध, स्वादिष्ट झींगा शोरबे में डूबा हुआ है। यह प्रतिष्ठित सिंगापुरियन स्टिर-फ्राई एक बनावट वाली उत्कृष्ट कृति है, जो हर निवाले में उमामी से भरपूर है। आज ही अपनी स्वाद कलिकाओं को जगाने और सिंगापुर के जीवंत स्वादों को अपनी रसोई में लाने के लिए तैयार हो जाइए!',
                ingredients: [
                    { item: 'मिश्रित नूडल्स (पीले होक्कियन और बी हून)', amount: 'कुल 700 ग्राम, सूखे होने पर भिगो' }
                ],
                instructions: [

                ]
            },
            'bn': {
                title: '',
                description: '',
                ingredients: [

                ],
                instructions: [

                ]
            },
            'mr': {
                title: '',
                description: '',
                ingredients: [

                ],
                instructions: [

                ]
            },
            'te': {
                title: '',
                description: '',
                ingredients: [

                ],
                instructions: [

                ]
            },
            'ta': {
                title: '',
                description: '',
                ingredients: [

                ],
                instructions: [

                ]
            }
        }
    },
    {
        id: '2026-05-14',
        title: 'Texas Chili',
        description: 'This isn\'t just chili; it\'s a culinary journey to the heart of the Lone Star State, promising warmth, flavor, and pure satisfaction. Get ready to ignite your taste buds and make this iconic dish tonight!',
        image: '/recipe-images/2026-05-14.jpg',
        prepTime: '20 min',
        cookTime: '40 min',
        difficulty: 'Medium',
        servings: 4,
        ingredients: [
            { item: 'Ground Beef (80/20)', amount: '1.5 lbs' },
            { item: 'Beef Broth', amount: '2 cups' },
            { item: 'Tomato Paste', amount: '2 tbsp' },
            { item: 'Chili Powder', amount: '3 tbsp' },
            { item: 'Cumin', amount: '1 tbsp' },
            { item: 'Garlic Powder', amount: '1 tsp' },
            { item: 'Onion Powder', amount: '1 tsp' },
            { item: 'Cayenne Pepper', amount: '1/2 tsp (optional)' },
            { item: 'Salt', amount: '1 tsp' },
            { item: 'Vegetable Oil', amount: '1 tbsp' }
        ],
        instructions: [
            'Brown ground beef in a large pot, then drain the fat. This keeps it from getting greasy.',
            'Stir in chili powder, cumin, garlic, onion powder, cayenne, and salt. Cook for just a minute until it smells amazing.',
            'Add beef broth and tomato paste. Bring it to a simmer, then drop the heat to low.',
            'Cover and let it bubble gently for 30-40 minutes. Give it a stir now and then to blend those flavors.',
            'Serve it hot with your favorite toppings, like cheese, onions, or a side of cornbread.'
        ],
        tags: ['American', 'Dinner', 'Non-Vegetarian'],
        translations: {
            'zh-CN': {
                title: '德州辣肉酱',
                description: '尝尝正宗德州辣肉酱，香浓牛肉配大胆香料，暖心又满足。今晚就做这道菜，唤醒你的味蕾！',
                ingredients: [
                    { item: '牛肉末（80%瘦肉/20%肥肉）', amount: '1.5磅' },
                    { item: '牛肉高汤', amount: '2杯' },
                    { item: '番茄酱', amount: '2汤匙' },
                    { item: '辣椒粉', amount: '3汤匙' },
                    { item: '孜然粉', amount: '1汤匙' },
                    { item: '蒜粉', amount: '1茶匙' },
                    { item: '洋葱粉', amount: '1茶匙' },
                    { item: '辣椒（卡宴辣椒）', amount: '1/2茶匙（可选）' },
                    { item: '盐', amount: '1茶匙' },
                    { item: '植物油', amount: '1汤匙' }
                ],
                instructions: [
                    '大锅热油，炒香牛肉末。',
                    '沥干多余的油。',
                    '加辣椒粉、孜然粉、蒜粉、洋葱粉、辣椒、盐，炒香1分钟。',
                    '倒牛肉高汤、番茄酱，煮开转小火。',
                    '盖盖炖30-40分钟，偶尔搅搅。',
                    '趁热吃，配奶酪、洋葱或玉米面包。'
                ]
            },
            'ms': {
                title: 'Cili Texas',
                description: 'Cili Texas ni memang mengenyangkan! Stew daging lembu dengan rempah ratus yang kuat. Rasa dia memang padu, cuba lah buat malam ni!',
                ingredients: [
                    { item: 'Daging Lembu Kisar (80/20)', amount: '1.5 paun' },
                    { item: 'Stok Daging Lembu', amount: '2 cawan' },
                    { item: 'Pes Tomato', amount: '2 sudu besar' },
                    { item: 'Serbuk Cili', amount: '3 sudu besar' },
                    { item: 'Jintan Manis', amount: '1 sudu besar' },
                    { item: 'Serbuk Bawang Putih', amount: '1 sudu teh' },
                    { item: 'Serbuk Bawang Merah', amount: '1 sudu teh' },
                    { item: 'Cili Cayenne', amount: '1/2 sudu teh (pilihan)' },
                    { item: 'Garam', amount: '1 sudu teh' },
                    { item: 'Minyak Sayuran', amount: '1 sudu besar' }
                ],
                instructions: [
                    'Panaskan minyak, goreng daging lembu kisar sampai perang. Toskan lemak.',
                    'Gaulkan serbuk cili, jintan, serbuk bawang putih, serbuk bawang merah, cili cayenne, dan garam. Masak seminit sampai wangi.',
                    'Masukkan stok daging lembu dan pes tomato. Didihkan, kemudian kecilkan api.',
                    'Tutup dan reneh 30-40 minit, kacau sekali-sekala, biar rasa sebati.',
                    'Hidang panas dengan keju, bawang, atau roti jagung.'
                ]
            },
            'hi': {
                title: 'टेक्सास चिली',
                description: 'प्रामाणिक टेक्सास चिली का शानदार स्वाद अनुभव करें, एक हार्दिक, मजबूत स्टू जिसमें कोमल बीफ और बोल्ड मसालों का एक सिम्फनी है। यह सिर्फ चिली नहीं है; यह लोन स्टार राज्य के दिल की एक पाक यात्रा है, जो गर्माहट, स्वाद और शुद्ध संतुष्टि का वादा करती है।',
                ingredients: [
                    { item: 'कीमा बनाया हुआ बीफ (80/20)', amount: '1.5 पाउंड' },
                    { item: 'बीफ शोरबा', amount: '2 कप' },
                    { item: 'टमाटर का पेस्ट', amount: '2 बड़े चम्मच' },
                    { item: 'चिली पाउडर', amount: '3 बड़े चम्मच' },
                    { item: 'जीरा', amount: '1 बड़ा चम्मच' },
                    { item: 'लहसुन पाउडर', amount: '1 छोटा चम्मच' },
                    { item: 'प्याज पाउडर', amount: '1 छोटा चम्मच' },
                    { item: 'लाल मिर्च पाउडर', amount: '1/2 छोटा चम्मच (वैकल्पिक)' },
                    { item: 'नमक', amount: '1 छोटा चम्मच' },
                    { item: 'वनस्पति तेल', amount: '1 बड़ा चम्मच' }
                ],
                instructions: [
                    'एक बड़े बर्तन में मध्यम-तेज आंच पर तेल गरम करें। कीमा बनाया हुआ बीफ भूनें, इसे तोड़ते हुए, फिर अतिरिक्त वसा निकाल दें।',
                    'चिली पाउडर, जीरा, लहसुन पाउडर, प्याज पाउडर, लाल मिर्च और नमक मिलाएं। सुगंधित होने तक 1 मिनट तक पकाएं।',
                    'बीफ शोरबा और टमाटर का पेस्ट डालें। उबाल आने दें, फिर आंच धीमी कर दें।',
                    'ढककर 30-40 मिनट तक धीमी आंच पर पकाएं, कभी-कभी हिलाते रहें, ताकि स्वाद मिल जाएं।',
                    'पनीर, प्याज या कॉर्नब्रेड जैसे अपने पसंदीदा टॉपिंग के साथ गरमागरम परोसें।'
                ]
            },
            'bn': {
                title: 'টেক্সাস চিলি',
                description: 'খাঁটি টেক্সাস চিলির কিংবদন্তি স্বাদ উপভোগ করুন, একটি হৃদয়গ্রাহী, শক্তিশালী স্টু যা নরম গরুর মাংস এবং সাহসী মশলার সিম্ফনিতে ভরা। এটি কেবল চিলি নয়; এটি লোন স্টার স্টেটের হৃদয়ে একটি রন্ধনসম্পর্কীয় যাত্রা, যা উষ্ণতা, স্বাদ এবং বিশুদ্ধ তৃপ্তির প্রতিশ্রুতি দেয়।',
                ingredients: [
                    { item: 'কিমা করা গরুর মাংস (80/20)', amount: '1.5 পাউন্ড' },
                    { item: 'গরুর মাংসের ঝোল', amount: '2 কাপ' },
                    { item: 'টমেটো পেস্ট', amount: '2 টেবিল চামচ' },
                    { item: 'চিলি পাউডার', amount: '3 টেবিল চামচ' },
                    { item: 'জিরা', amount: '1 টেবিল চামচ' },
                    { item: 'রসুন গুঁড়ো', amount: '1 চা চামচ' },
                    { item: 'পেঁয়াজ গুঁড়ো', amount: '1 চা চামচ' },
                    { item: 'কায়েন গোলমরিচ', amount: '1/2 চা চামচ (ঐচ্ছিক)' },
                    { item: 'লবণ', amount: '1 চা চামচ' },
                    { item: 'উদ্ভিজ্জ তেল', amount: '1 টেবিল চামচ' }
                ],
                instructions: [
                    'একটি বড় পাত্রে মাঝারি-উচ্চ আঁচে তেল গরম করুন। কিমা করা গরুর মাংস বাদামী করুন, ভেঙে দিন, তারপর অতিরিক্ত চর্বি ঝরিয়ে নিন।',
                    'চিলি পাউডার, জিরা, রসুন গুঁড়ো, পেঁয়াজ গুঁড়ো, কায়েন এবং লবণ মিশিয়ে দিন। সুগন্ধি না হওয়া পর্যন্ত 1 মিনিট রান্না করুন।',
                    'গরুর মাংসের ঝোল এবং টমেটো পেস্ট যোগ করুন। ফুটিয়ে নিন, তারপর আঁচ কমিয়ে দিন।',
                    'ঢেকে 30-40 মিনিট ধরে অল্প আঁচে রান্না করুন, মাঝে মাঝে নাড়ুন, যাতে স্বাদগুলি মিশে যায়।',
                    'পনির, পেঁয়াজ বা কর্নব্রেডের মতো আপনার পছন্দের টপিং সহ গরম গরম পরিবেশন করুন।'
                ]
            },
            'mr': {
                title: 'टेक्सास चिली',
                description: 'अस्सल टेक्सास चिलीचा पौराणिक स्वाद अनुभवा, एक हार्दिक, मजबूत स्टू जो कोमल बीफ आणि मसालेदार चवींनी भरलेला आहे. हे फक्त चिली नाही; ही लोन स्टार राज्याच्या हृदयाची एक पाककृती यात्रा आहे, जी उबदारपणा, चव आणि शुद्ध समाधानाचे वचन देते.',
                ingredients: [
                    { item: 'ग्राउंड बीफ (80/20)', amount: '1.5 पाउंड' },
                    { item: 'बीफ ब्रोथ', amount: '2 कप' },
                    { item: 'टोमॅटो पेस्ट', amount: '2 चमचे' },
                    { item: 'चिली पावडर', amount: '3 चमचे' },
                    { item: 'जिरे', amount: '1 चमचा' },
                    { item: 'लसूण पावडर', amount: '1 छोटा चमचा' },
                    { item: 'कांदा पावडर', amount: '1 छोटा चमचा' },
                    { item: 'कॅयेन मिरची', amount: '1/2 छोटा चमचा (ऐच्छिक)' },
                    { item: 'मीठ', amount: '1 छोटा चमचा' },
                    { item: 'वनस्पती तेल', amount: '1 चमचा' }
                ],
                instructions: [
                    'एका मोठ्या भांड्यात मध्यम-उच्च आचेवर तेल गरम करा. ग्राउंड बीफ तपकिरी करा, ते तोडून घ्या, नंतर अतिरिक्त चरबी काढून टाका.',
                    'चिली पावडर, जिरे, लसूण पावडर, कांदा पावडर, कॅयेन आणि मीठ घालून ढवळा. सुगंध येईपर्यंत 1 मिनिट शिजवा.',
                    'बीफ ब्रोथ आणि टोमॅटो पेस्ट घाला. उकळी येऊ द्या, नंतर आंच कमी करा.',
                    'झाकून 30-40 मिनिटे मंद आचेवर शिजवा, अधूनमधून ढवळत रहा, जेणेकरून चव मिसळतील।',
                    'चीज, कांदे किंवा कॉर्नब्रेड सारख्या तुमच्या आवडत्या टॉपिंग्जसह गरम सर्व्ह करा।'
                ]
            },
            'te': {
                title: 'టెక్సాస్ చిల్లి',
                description: 'ప్రామాణికమైన టెక్సాస్ చిల్లి యొక్క పురాణ రుచిని అనుభవించండి, ఇది మృదువైన గొడ్డు మాంసం మరియు బోల్డ్ మసాలాల సింఫనీతో నిండిన హృదయపూర్వక, బలమైన స్టూ. ఇది కేవలం చిల్లి కాదు; ఇది లోన్ స్టార్ రాష్ట్రం యొక్క హృదయానికి ఒక పాక ప్రయాణం, ఇది వెచ్చదనం, రుచి మరియు స్వచ్ఛమైన సంతృప్తిని వాగ్దానం చేస్తుంది.',
                ingredients: [
                    { item: 'గ్రౌండ్ బీఫ్ (80/20)', amount: '1.5 పౌండ్లు' },
                    { item: 'బీఫ్ బ్రోత్', amount: '2 కప్పులు' },
                    { item: 'టొమాటో పేస్ట్', amount: '2 టేబుల్ స్పూన్లు' },
                    { item: 'చిల్లి పౌడర్', amount: '3 టేబుల్ స్పూన్లు' },
                    { item: 'జీలకర్ర', amount: '1 టేబుల్ స్పూన్' },
                    { item: 'వెల్లుల్లి పౌడర్', amount: '1 టీస్పూన్' },
                    { item: 'ఉల్లిపాయ పౌడర్', amount: '1 టీస్పూన్' },
                    { item: 'కాయెన్ పెప్పర్', amount: '1/2 టీస్పూన్ (ఐచ్ఛికం)' },
                    { item: 'ఉప్పు', amount: '1 టీస్పూన్' },
                    { item: 'వనస్పతి నూనె', amount: '1 టేబుల్ స్పూన్' }
                ],
                instructions: [
                    'ఒక పెద్ద కుండలో మధ్యస్థ-అధిక వేడి మీద నూనె వేడి చేయండి. గ్రౌండ్ బీఫ్‌ను బ్రౌన్ చేయండి, దానిని విడదీయండి, ఆపై అదనపు కొవ్వును తీసివేయండి.',
                    'చిల్లి పౌడర్, జీలకర్ర, వెల్లుల్లి పౌడర్, ఉల్లిపాయ పౌడర్, కాయెన్ మరియు ఉప్పు కలపండి. సువాసన వచ్చేవరకు 1 నిమిషం ఉడికించాలి.',
                    'బీఫ్ బ్రోత్ మరియు టొమాటో పేస్ట్ వేయండి. మరిగించి, ఆపై మంటను తగ్గించండి.',
                    'మూతపెట్టి 30-40 నిమిషాలు తక్కువ మంటపై ఉడికించాలి, రుచులు కలపడానికి అప్పుడప్పుడు కదిలించండి.',
                    'చీజ్, ఉల్లిపాయలు లేదా కార్న్‌బ్రెడ్ వంటి మీకు ఇష్టమైన టాపింగ్స్‌తో వేడిగా వడ్డించండి.'
                ]
            },
            'ta': {
                title: 'டெக்சாஸ் சில்லி',
                description: 'உண்மையான டெக்சாஸ் சில்லியின் புகழ்பெற்ற சுவையை அனுபவியுங்கள், இது மென்மையான மாட்டிறைச்சி மற்றும் தைரியமான மசாலாப் பொருட்களின் சிம்பொனியால் நிரப்பப்பட்ட ஒரு இதமான, வலுவான ஸ்டூ. இது வெறும் சில்லி அல்ல; இது லோன் ஸ்டார் மாநிலத்தின் இதயத்திற்கு ஒரு சமையல் பயணம், இது அரவணைப்பு, சுவை மற்றும் தூய திருப்தியை உறுதியளிக்கிறது.',
                ingredients: [
                    { item: 'அரைத்த மாட்டிறைச்சி (80/20)', amount: '1.5 பவுண்டுகள்' },
                    { item: 'மாட்டிறைச்சி குழம்பு', amount: '2 கப்' },
                    { item: 'தக்காளி பேஸ்ட்', amount: '2 தேக்கரண்டி' },
                    { item: 'மிளகாய் தூள்', amount: '3 தேக்கரண்டி' },
                    { item: 'சீரகம்', amount: '1 தேக்கரண்டி' },
                    { item: 'பூண்டு தூள்', amount: '1 தேக்கரண்டி' },
                    { item: 'வெங்காய தூள்', amount: '1 தேக்கரண்டி' },
                    { item: 'கயேன் மிளகு', amount: '1/2 தேக்கரண்டி (விரும்பினால்)' },
                    { item: 'உப்பு', amount: '1 தேக்கரண்டி' },
                    { item: 'காய்கறி எண்ணெய்', amount: '1 தேக்கரண்டி' }
                ],
                instructions: [
                    'ஒரு பெரிய பாத்திரத்தில் நடுத்தர-அதிக வெப்பத்தில் எண்ணெய் சூடாக்கவும். அரைத்த மாட்டிறைச்சியை பழுப்பு நிறமாக வறுக்கவும், அதை உடைத்து, பின்னர் அதிகப்படியான கொழுப்பை வடிகட்டவும்.',
                    'மிளகாய் தூள், சீரகம், பூண்டு தூள், வெங்காய தூள், கயேன் மற்றும் உப்பு சேர்த்து கிளறவும். மணம் வரும் வரை 1 நிமிடம் சமைக்கவும்.',
                    'மாட்டிறைச்சி குழம்பு மற்றும் தக்காளி பேஸ்ட் சேர்க்கவும். ஒரு கொதி நிலைக்கு கொண்டு வந்து, பின்னர் வெப்பத்தை குறைக்கவும்.',
                    'மூடி வைத்து 30-40 நிமிடங்கள் குறைந்த வெப்பத்தில் சமைக்கவும், சுவைகள் கலக்க அவ்வப்போது கிளறவும்.',
                    'சீஸ், வெங்காயம் அல்லது சோள ரொட்டி போன்ற உங்களுக்கு பிடித்த டாப்பிங்ஸுடன் சூடாக பரிமாறவும்.'
                ]
            }
        }
    },
    {
        id: '2026-05-15',
        title: 'Fish Head Curry',
        description: 'Dive into the heart of Singaporean cuisine with this legendary Fish Head Curry! It\'s a symphony of rich, spicy, and tangy flavors, promising an unforgettable experience. Ready to create this authentic taste sensation in your own home?',
        image: '/recipe-images/2026-05-15.jpg',
        prepTime: '20 min',
        cookTime: '40 min',
        difficulty: 'Medium',
        servings: 4,
        ingredients: [
            { item: 'Red Snapper Fish Head, halved', amount: '1 (approx. 1.5 kg)' },
            { item: 'Singaporean Fish Head Curry Paste', amount: '150g' },
            { item: 'Coconut Milk (thick)', amount: '400ml' },
            { item: 'Tamarind Paste', amount: '2 tbsp' },
            { item: 'Water', amount: '500ml' },
            { item: 'Okra (lady\'s fingers), trimmed', amount: '8-10 pcs' },
            { item: 'Eggplant (brinjal), cut into wedges', amount: '1 medium' },
            { item: 'Tomatoes, quartered', amount: '2 medium' },
            { item: 'Fish Sauce', amount: '1-2 tbsp (to taste)' },
            { item: 'Curry Leaves', amount: '1 sprig' }
        ],
        instructions: [
            'Heat oil in a big pot. Sauté curry paste and curry leaves until they\'re super fragrant.',
            'Stir in tamarind paste, water, and coconut milk. Bring it to a gentle simmer.',
            'Carefully add the fish head, okra, eggplant, and tomatoes. Cook for 15-20 minutes until the fish is tender and veggies are done.',
            'Season with fish sauce to your liking. Serve it hot with fluffy steamed rice.'
        ],
        tags: ['Singaporean', 'Dinner', 'Non-Vegetarian'],
        translations: {
            'zh-CN': {
                title: '鱼头咖喱',
                description: '新加坡的鱼头咖喱，味道浓郁、辛辣又带点酸！鲜嫩鱼头配椰奶蔬菜，保证让你难忘。快来家里做这道美味吧！',
                ingredients: [
                    { item: '红鲷鱼头，对半切开', amount: '1个 (约1.5公斤)' },
                    { item: '新加坡鱼头咖喱酱', amount: '150克' },
                    { item: '浓椰浆', amount: '400毫升' },
                    { item: '罗望子酱', amount: '2汤匙' },
                    { item: '水', amount: '500毫升' },
                    { item: '秋葵（羊角豆），修剪过', amount: '8-10根' },
                    { item: '茄子，切块', amount: '1个中等大小' },
                    { item: '番茄，切四瓣', amount: '2个中等大小' },
                    { item: '鱼露', amount: '1-2汤匙 (依口味)' },
                    { item: '咖喱叶', amount: '1小枝' }
                ],
                instructions: [
                    '大锅热油，炒香咖喱酱、咖喱叶。',
                    '加罗望子酱、水、椰奶，小火炖。',
                    '小心放入鱼头、秋葵、茄子、番茄。',
                    '煮15-20分钟，鱼熟菜软。',
                    '用鱼露调味。配热米饭吃！'
                ]
            },
            'ms': {
                title: 'Kari Kepala Ikan',
                description: 'Kari Kepala Ikan ni memang legend! Kuah santan pekat, pedas, masam, dengan kepala ikan dan sayur-sayuran segar. Mesti cuba!',
                ingredients: [
                    { item: 'Kepala Ikan Merah, dibelah dua', amount: '1 (anggaran 1.5 kg)' },
                    { item: 'Pes Kari Kepala Ikan Singapura', amount: '150g' },
                    { item: 'Santan pekat', amount: '400ml' },
                    { item: 'Pes Asam Jawa', amount: '2 sudu besar' },
                    { item: 'Air', amount: '500ml' },
                    { item: 'Bendi (jari wanita), dipotong hujungnya', amount: '8-10 biji' },
                    { item: 'Terung, dipotong baji', amount: '1 biji sederhana' },
                    { item: 'Tomato, dipotong empat', amount: '2 biji sederhana' },
                    { item: 'Sos Ikan', amount: '1-2 sudu besar (secukup rasa)' },
                    { item: 'Daun Kari', amount: '1 tangkai' }
                ],
                instructions: [
                    'Panaskan minyak, tumis pes kari dan daun kari sampai wangi.',
                    'Masukkan pes asam jawa, air, dan santan; biar mendidih perlahan.',
                    'Masukkan kepala ikan, bendi, terung, dan tomato. Masak 15-20 minit sampai ikan empuk dan sayur masak.',
                    'Perasakan dengan sos ikan. Hidang panas dengan nasi kukus.'
                ]
            },
            'hi': {
                title: 'फिश हेड करी',
                description: 'इस पौराणिक फिश हेड करी के साथ सिंगापुर के व्यंजनों के दिल में गोता लगाएँ! समृद्ध, मसालेदार और तीखे स्वादों का एक सामंजस्य, यह व्यंजन ताज़ी सब्जियों के साथ एक जीवंत नारियल के दूध की ग्रेवी में उबाले गए रसीले मछली के सिर को प्रस्तुत करता है। यह एक पाक कला का उत्कृष्ट नमूना है जो एक अविस्मरणीय अनुभव का वादा करता है। अपने घर में इस प्रामाणिक स्वाद को बनाने के लिए तैयार हैं?',
                ingredients: [
                    { item: 'रेड स्नैपर मछली का सिर, आधा', amount: '1 (लगभग 1.5 किग्रा)' },
                    { item: 'सिंगापुरियन फिश हेड करी पेस्ट', amount: '150 ग्राम' },
                    { item: 'नारियल का दूध (गाढ़ा)', amount: '400 मिली' },
                    { item: 'इमली का पेस्ट', amount: '2 बड़े चम्मच' },
                    { item: 'पानी', amount: '500 मिली' },
                    { item: 'भिंडी (लेडी फिंगर्स), कटी हुई', amount: '8-10 नग' },
                    { item: 'बैंगन, फांकों में कटा हुआ', amount: '1 मध्यम' },
                    { item: 'टमाटर, चौथाई कटे हुए', amount: '2 मध्यम' },
                    { item: 'फिश सॉस', amount: '1-2 बड़े चम्मच (स्वादानुसार)' },
                    { item: 'कड़ी पत्ता', amount: '1 टहनी' }
                ],
                instructions: [
                    'एक बड़े बर्तन में तेल गरम करें, करी पेस्ट और कड़ी पत्ते को सुगंधित होने तक भूनें।',
                    'इमली का पेस्ट, पानी और नारियल का दूध डालें; धीमी आंच पर उबाल आने दें।',
                    'ध्यान से मछली का सिर, भिंडी, बैंगन और टमाटर डालें। 15-20 मिनट तक पकाएं जब तक मछली नरम न हो जाए और सब्जियां पक न जाएं।',
                    'स्वादानुसार फिश सॉस डालें। उबले हुए चावल के साथ गरमागरम परोसें।'
                ]
            },
            'bn': {
                title: 'ফিশ হেড কারি',
                description: 'এই কিংবদন্তী ফিশ হেড কারি দিয়ে সিঙ্গাপুরের রন্ধনপ্রণালীর হৃদয়ে ডুব দিন! সমৃদ্ধ, মশলাদার এবং টক স্বাদের এক সিম্ফনি, এই পদটি তাজা সবজির সাথে একটি প্রাণবন্ত নারকেলের দুধের গ্রেভিতে সিদ্ধ করা একটি রসালো মাছের মাথা দিয়ে তৈরি। এটি একটি রন্ধনশিল্পের মাস্টারপিস যা একটি অবিস্মরণীয় অভিজ্ঞতার প্রতিশ্রুতি দেয়। আপনার নিজের বাড়িতে এই খাঁটি স্বাদের অনুভূতি তৈরি করতে প্রস্তুত?',
                ingredients: [
                    { item: 'রেড স্ন্যাপার মাছের মাথা, অর্ধেক করা', amount: '1 (প্রায় 1.5 কেজি)' },
                    { item: 'সিঙ্গাপুরিয়ান ফিশ হেড কারি পেস্ট', amount: '150 গ্রাম' },
                    { item: 'নারকেলের দুধ (ঘন)', amount: '400 মিলি' },
                    { item: 'তেঁতুলের পেস্ট', amount: '2 টেবিল চামচ' },
                    { item: 'জল', amount: '500 মিলি' },
                    { item: 'ঢেঁড়স (লেডিজ ফিঙ্গার), ছাঁটা', amount: '8-10 পিস' },
                    { item: 'বেগুন, ফালি করে কাটা', amount: '1 মাঝারি' },
                    { item: 'টমেটো, চার ভাগ করা', amount: '2 মাঝারি' },
                    { item: 'ফিশ সস', amount: '1-2 টেবিল চামচ (স্বাদমতো)' },
                    { item: 'কারি পাতা', amount: '1 ডাল' }
                ],
                instructions: [
                    'একটি বড় পাত্রে তেল গরম করুন, কারি পেস্ট এবং কারি পাতা সুগন্ধি না হওয়া পর্যন্ত ভাজুন।',
                    'তেঁতুলের পেস্ট, জল এবং নারকেলের দুধ যোগ করুন; হালকা আঁচে ফুটিয়ে নিন।',
                    'সাবধানে মাছের মাথা, ঢেঁড়স, বেগুন এবং টমেটো যোগ করুন। 15-20 মিনিট রান্না করুন যতক্ষণ না মাছ নরম হয় এবং সবজি সেদ্ধ হয়।',
                    'স্বাদমতো ফিশ সস দিয়ে সিজন করুন। গরম ভাতের সাথে গরম গরম পরিবেশন করুন।'
                ]
            },
            'mr': {
                title: 'फिश हेड करी',
                description: 'या पौराणिक फिश हेड करीने सिंगापूरच्या पाककृतीच्या हृदयात डुबकी मारा! समृद्ध, मसालेदार आणि आंबट चवींची एक सिम्फनी, हा पदार्थ ताजे भाज्यांसह एका दोलायमान नारळाच्या दुधाच्या ग्रेव्हीमध्ये शिजवलेले रसाळ माशाचे डोके वैशिष्ट्यीकृत करतो. ही एक पाककृतीची उत्कृष्ट कलाकृती आहे जी अविस्मरणीय अनुभवाचे वचन देते. आपल्या घरात ही अस्सल चवदार संवेदना तयार करण्यास तयार आहात?',
                ingredients: [
                    { item: 'रेड स्नॅपर माशाचे डोके, अर्धे केलेले', amount: '1 (सुमारे 1.5 किलो)' },
                    { item: 'सिंगापूरियन फिश हेड करी पेस्ट', amount: '150 ग्रॅम' },
                    { item: 'नारळाचे दूध (घट्ट)', amount: '400 मिली' },
                    { item: 'चिंचेचा लगदा', amount: '2 चमचे' },
                    { item: 'पाणी', amount: '500 मिली' },
                    { item: 'भेंडी, कापलेली', amount: '8-10 नग' },
                    { item: 'वांगे, फोडींमध्ये कापलेले', amount: '1 मध्यम' },
                    { item: 'टोमॅटो, चार तुकड्यांमध्ये कापलेले', amount: '2 मध्यम' },
                    { item: 'फिश सॉस', amount: '1-2 चमचे (चवीनुसार)' },
                    { item: 'कढीपत्ता', amount: '1 डहाळी' }
                ],
                instructions: [
                    'एका मोठ्या भांड्यात तेल गरम करा, करी पेस्ट आणि कढीपत्ता सुगंधित होईपर्यंत परतून घ्या.',
                    'चिंचेचा लगदा, पाणी आणि नारळाचे दूध घाला; हळूवारपणे उकळी येऊ द्या.',
                    'काळजीपूर्वक माशाचे डोके, भेंडी, वांगे आणि टोमॅटो घाला. मासे मऊ होईपर्यंत आणि भाज्या शिजेपर्यंत 15-20 मिनिटे शिजवा.',
                    'चवीनुसार फिश सॉसने सीझन करा. गरम भातासोबत गरमागरम सर्व्ह करा.'
                ]
            },
            'te': {
                title: 'ఫిష్ హెడ్ కర్రీ',
                description: 'ఈ పురాణ ఫిష్ హెడ్ కర్రీతో సింగపూర్ వంటకాల హృదయంలోకి ప్రవేశించండి! గొప్ప, కారంగా మరియు పుల్లని రుచుల సింఫనీ, ఈ వంటకం తాజా కూరగాయలతో కూడిన శక్తివంతమైన కొబ్బరి పాలు గ్రేవీలో ఉడికించిన జ్యుసి చేపల తలను కలిగి ఉంటుంది. ఇది మరపురాని అనుభవాన్ని వాగ్దానం చేసే పాక కళాఖండం. మీ స్వంత ఇంట్లో ఈ ప్రామాణికమైన రుచి సంచలనాన్ని సృష్టించడానికి సిద్ధంగా ఉన్నారా?',
                ingredients: [
                    { item: 'రెడ్ స్నాపర్ చేప తల, సగానికి కట్ చేయబడింది', amount: '1 (సుమారు 1.5 కిలోలు)' },
                    { item: 'సింగపూర్ ఫిష్ హెడ్ కర్రీ పేస్ట్', amount: '150 గ్రా' },
                    { item: 'కొబ్బరి పాలు (చిక్కటి)', amount: '400 మి.లీ' },
                    { item: 'చింతపండు పేస్ట్', amount: '2 టేబుల్ స్పూన్లు' },
                    { item: 'నీరు', amount: '500 మి.లీ' },
                    { item: 'బెండకాయలు, కత్తిరించినవి', amount: '8-10 ముక్కలు' },
                    { item: 'వంకాయ, ముక్కలుగా కట్ చేయబడింది', amount: '1 మధ్యస్థం' },
                    { item: 'టొమాటోలు, పావు వంతు కట్ చేయబడినవి', amount: '2 మధ్యస్థం' },
                    { item: 'ఫిష్ సాస్', amount: '1-2 టేబుల్ స్పూన్లు (రుచికి)' },
                    { item: 'కరివేపాకు', amount: '1 రెమ్మ' }
                ],
                instructions: [
                    'ఒక పెద్ద కుండలో నూనె వేడి చేసి, కర్రీ పేస్ట్ మరియు కరివేపాకు సువాసన వచ్చేవరకు వేయించాలి.',
                    'చింతపండు పేస్ట్, నీరు మరియు కొబ్బరి పాలు వేసి; నెమ్మదిగా ఉడకనివ్వాలి.',
                    'జాగ్రత్తగా చేప తల, బెండకాయలు, వంకాయ మరియు టొమాటోలు వేయాలి. చేప మెత్తగా అయ్యే వరకు మరియు కూరగాయలు ఉడికే వరకు 15-20 నిమిషాలు ఉడికించాలి.',
                    'రుచికి సరిపడా ఫిష్ సాస్ వేసి సర్వ్ చేయాలి. ఉడికించిన అన్నంతో వేడిగా వడ్డించండి.'
                ]
            },
            'ta': {
                title: 'மீன் தலை கறி',
                description: 'இந்த புகழ்பெற்ற மீன் தலை கறியுடன் சிங்கப்பூர் சமையலின் இதயத்தில் மூழ்குங்கள்! செழுமையான, காரமான மற்றும் புளிப்பு சுவைகளின் ஒரு சிம்பொனி, இந்த உணவு புதிய காய்கறிகளுடன் ஒரு துடிப்பான தேங்காய் பால் கிரேவியில் சமைக்கப்பட்ட ஒரு சுவையான மீன் தலையை கொண்டுள்ளது. இது ஒரு மறக்க முடியாத அனுபவத்தை உறுதியளிக்கும் ஒரு சமையல் தலைசிறந்த படைப்பு. உங்கள் சொந்த வீட்டில் இந்த உண்மையான சுவை உணர்வை உருவாக்க தயாரா?',
                ingredients: [
                    { item: 'சிவப்பு ஸ்னாப்பர் மீன் தலை, பாதியாக வெட்டப்பட்டது', amount: '1 (தோராயமாக 1.5 கிலோ)' },
                    { item: 'சிங்கப்பூர் மீன் தலை கறி பேஸ்ட்', amount: '150 கிராம்' },
                    { item: 'தேங்காய் பால் (தடித்தது)', amount: '400 மிலி' },
                    { item: 'புளி பேஸ்ட்', amount: '2 தேக்கரண்டி' },
                    { item: 'தண்ணீர்', amount: '500 மிலி' },
                    { item: 'வெண்டைக்காய், நறுக்கப்பட்டது', amount: '8-10 துண்டுகள்' },
                    { item: 'கத்தரிக்காய், துண்டுகளாக வெட்டப்பட்டது', amount: '1 நடுத்தர' },
                    { item: 'தக்காளி, கால் பாகமாக வெட்டப்பட்டது', amount: '2 நடுத்தர' },
                    { item: 'மீன் சாஸ்', amount: '1-2 தேக்கரண்டி (சுவைக்கு)' },
                    { item: 'கறிவேப்பிலை', amount: '1 கொத்து' }
                ],
                instructions: [
                    'ஒரு பெரிய பாத்திரத்தில் எண்ணெய் சூடாக்கி, கறி பேஸ்ட் மற்றும் கறிவேப்பிலையை மணம் வரும் வரை வதக்கவும்.',
                    'புளி பேஸ்ட், தண்ணீர் மற்றும் தேங்காய் பால் சேர்த்து; மெதுவாக கொதிக்க விடவும்.',
                    'மீன் தலை, வெண்டைக்காய், கத்தரிக்காய் மற்றும் தக்காளியை கவனமாக சேர்க்கவும். மீன் மென்மையாகும் வரை மற்றும் காய்கறிகள் சமைக்கும் வரை 15-20 நிமிடங்கள் சமைக்கவும்.',
                    'சுவைக்கு ஏற்ப மீன் சாஸ் சேர்க்கவும். சூடான சாதத்துடன் சூடாக பரிமாறவும்.'
                ]
            }
        }
    },
    {
        id: '2026-05-16',
        title: 'Ful Medames',
        description: 'Experience the soulful embrace of Ethiopian Ful Medames, a hearty and aromatic fava bean stew that awakens your senses. Prepare to be transported to the bustling markets of Addis Ababa with every delicious spoonful – why wait, let\'s cook it today!',
        image: '/recipe-images/2026-05-16.jpg',
        prepTime: '20 min',
        cookTime: '40 min',
        difficulty: 'Medium',
        servings: 4,
        ingredients: [
            { item: 'Fava Beans (canned, drained and rinsed)', amount: '2 cans (15 oz each)' },
            { item: 'Red Onion (finely chopped)', amount: '1 medium' },
            { item: 'Tomatoes (diced)', amount: '2 medium' },
            { item: 'Garlic (minced)', amount: '3 cloves' },
            { item: 'Jalapeño or Green Chili (finely chopped)', amount: '1 (optional, for heat)' },
            { item: 'Lemon Juice (freshly squeezed)', amount: '2 tbsp' },
            { item: 'Olive Oil', amount: '3 tbsp' },
            { item: 'Cumin Powder', amount: '1 tsp' },
            { item: 'Salt', amount: 'To taste' },
            { item: 'Black Pepper', amount: 'To taste' }
        ],
        instructions: [
            'Heat olive oil in a pan. Sauté red onion until soft, then add garlic, jalapeño, and tomatoes for 5 minutes.',
            'Stir in cumin, salt, and pepper. Add the drained fava beans and a splash of water.',
            'Mash about half the beans gently. Simmer for 15-20 minutes to let the flavors really come together.',
            'Stir in fresh lemon juice. Serve hot, garnished with parsley or cilantro, maybe even a hard-boiled egg and a drizzle of olive oil.'
        ],
        tags: ['Ethiopian', 'Vegetarian', 'Breakfast', 'Brunch', 'Dinner'],
        translations: {
            'zh-CN': {
                title: '埃塞俄比亚炖蚕豆 (Ful Medames)',
                description: '埃塞俄比亚炖蚕豆，香气扑鼻，暖心又饱足。香料、香草、柠檬汁，炖得刚刚好。快来尝尝这道美味！',
                ingredients: [
                    { item: '蚕豆（罐装，沥干并冲洗）', amount: '2罐 (每罐15盎司)' },
                    { item: '红洋葱（切碎）', amount: '1个中等大小' },
                    { item: '番茄（切丁）', amount: '2个中等大小' },
                    { item: '大蒜（切末）', amount: '3瓣' },
                    { item: '墨西哥辣椒或青辣椒（切碎）', amount: '1个 (可选，用于增加辣度)' },
                    { item: '柠檬汁（鲜榨）', amount: '2汤匙' },
                    { item: '橄榄油', amount: '3汤匙' },
                    { item: '孜然粉', amount: '1茶匙' },
                    { item: '盐', amount: '适量' },
                    { item: '黑胡椒', amount: '适量' }
                ],
                instructions: [
                    '锅里热油，炒软红洋葱。',
                    '加蒜、墨西哥辣椒、番茄，煮5分钟。',
                    '拌入孜然、盐、胡椒。',
                    '加沥干的蚕豆和一点水。',
                    '轻轻捣碎一半蚕豆，小火炖15-20分钟。',
                    '拌入新鲜柠檬汁。',
                    '趁热吃，撒点欧芹，配鸡蛋、橄榄油更好。'
                ]
            },
            'ms': {
                title: 'Ful Medames (Rebusan Kacang Fava Ethiopia)',
                description: 'Ful Medames ni rebusan kacang fava Ethiopia yang sedap dan mengenyangkan. Rempah ratus, herba segar, dan lemon, memang padu! Jom cuba!',
                ingredients: [
                    { item: 'Kacang Fava (dalam tin, ditos dan dibilas)', amount: '2 tin (setiap satu 15 oz)' },
                    { item: 'Bawang Merah (dicincang halus)', amount: '1 biji sederhana' },
                    { item: 'Tomato (dipotong dadu)', amount: '2 biji sederhana' },
                    { item: 'Bawang Putih (dicincang)', amount: '3 ulas' },
                    { item: 'Cili Jalapeño atau Cili Hijau (dicincang halus)', amount: '1 biji (pilihan, untuk kepedasan)' },
                    { item: 'Jus Lemon (baru diperah)', amount: '2 sudu besar' },
                    { item: 'Minyak Zaitun', amount: '3 sudu besar' },
                    { item: 'Serbuk Jintan Putih', amount: '1 sudu kecil' },
                    { item: 'Garam', amount: 'Secukup rasa' },
                    { item: 'Lada Hitam', amount: 'Secukup rasa' }
                ],
                instructions: [
                    'Panaskan minyak zaitun, tumis bawang merah sampai lembut. Masukkan bawang putih, cili jalapeño, dan tomato, masak 5 minit.',
                    'Masukkan jintan, garam, lada hitam, kacang fava yang ditos, dan sedikit air.',
                    'Lenyek separuh kacang. Reneh 15-20 minit, biar rasa sebati.',
                    'Masukkan jus lemon segar. Hidang panas, tabur pasli atau ketumbar, boleh tambah telur rebus dan minyak zaitun.'
                ]
            },
            'hi': {
                title: 'फुल मेदामेस',
                description: 'इथियोपियाई फुल मेदामेस के हार्दिक और सुगंधित फवा बीन स्टू का अनुभव करें जो आपकी इंद्रियों को जगाता है। जीवंत मसालों, ताजी जड़ी-बूटियों और एक तीखे नींबू के स्वाद के साथ पूर्णता तक उबाला गया, यह वास्तव में संतोषजनक व्यंजन है। हर स्वादिष्ट निवाले के साथ अदीस अबाबा के हलचल भरे बाजारों में ले जाने के लिए तैयार हो जाइए - इंतजार क्यों करें, आइए इसे आज ही पकाएं!',
                ingredients: [
                    { item: 'फवा बीन्स (डिब्बाबंद, सूखा और धोया हुआ)', amount: '2 डिब्बे (प्रत्येक 15 औंस)' },
                    { item: 'लाल प्याज (बारीक कटा हुआ)', amount: '1 मध्यम' },
                    { item: 'टमाटर (कटे हुए)', amount: '2 मध्यम' },
                    { item: 'लहसुन (बारीक कटा हुआ)', amount: '3 कलियाँ' },
                    { item: 'जलापेनो या हरी मिर्च (बारीक कटी हुई)', amount: '1 (वैकल्पिक, तीखेपन के लिए)' },
                    { item: 'नींबू का रस (ताजा निचोड़ा हुआ)', amount: '2 बड़े चम्मच' },
                    { item: 'जैतून का तेल', amount: '3 बड़े चम्मच' },
                    { item: 'जीरा पाउडर', amount: '1 छोटा चम्मच' },
                    { item: 'नमक', amount: 'स्वादानुसार' },
                    { item: 'काली मिर्च', amount: 'स्वादानुसार' }
                ],
                instructions: [
                    'एक पैन में जैतून का तेल गरम करें, लाल प्याज को नरम होने तक भूनें, फिर लहसुन, जलापेनो और टमाटर डालकर 5 मिनट तक पकाएं।',
                    'जीरा, नमक और काली मिर्च मिलाएं, फिर सूखे फवा बीन्स और थोड़ा पानी डालें।',
                    'लगभग आधे बीन्स को कांटे या आलू मैशर से धीरे से मैश करें, फिर 15-20 मिनट तक धीमी आंच पर पकाएं ताकि स्वाद मिल जाएं।',
                    'ताजा नींबू का रस मिलाएं। गरमागरम परोसें, ताजे अजमोद या धनिया से सजाएं, और वैकल्पिक रूप से उबले अंडे और जैतून के तेल की बूंदा बांदी के साथ।'
                ]
            },
            'bn': {
                title: 'ফুল মেদেমস',
                description: 'ইথিওপিয়ান ফুল মেদেমসের হৃদয়গ্রাহী এবং সুগন্ধি ফাভা বিন স্টু-এর অভিজ্ঞতা নিন যা আপনার ইন্দ্রিয়গুলিকে জাগিয়ে তোলে। প্রাণবন্ত মশলা, তাজা ভেষজ এবং একটি সুস্বাদু লেবুর ছোঁয়ায় নিখুঁতভাবে সিদ্ধ করা, এটি সত্যিই একটি তৃপ্তিদায়ক খাবার। প্রতিটি সুস্বাদু চামচ দিয়ে আদ্দিস আবাবার ব্যস্ত বাজারে পৌঁছে যাওয়ার জন্য প্রস্তুত হন – কেন অপেক্ষা করবেন, আসুন আজই এটি রান্না করি!',
                ingredients: [
                    { item: 'ফাভা বিনস (ক্যানড, জল ঝরানো এবং ধোয়া)', amount: '2 ক্যান (প্রতিটি 15 আউন্স)' },
                    { item: 'লাল পেঁয়াজ (মিহি করে কাটা)', amount: '1 মাঝারি' },
                    { item: 'টমেটো (ডাইস করা)', amount: '2 মাঝারি' },
                    { item: 'রসুন (কুচি করা)', amount: '3 কোয়া' },
                    { item: 'জালপেনো বা কাঁচা লঙ্কা (মিহি করে কাটা)', amount: '1 (ঐচ্ছিক, ঝালের জন্য)' },
                    { item: 'লেবুর রস (তাজা নিংড়ানো)', amount: '2 টেবিল চামচ' },
                    { item: 'জলপাই তেল', amount: '3 টেবিল চামচ' },
                    { item: 'জিরা গুঁড়ো', amount: '1 চা চামচ' },
                    { item: 'লবণ', amount: 'স্বাদমতো' },
                    { item: 'কালো গোলমরিচ', amount: 'স্বাদমতো' }
                ],
                instructions: [
                    'একটি প্যানে জলপাই তেল গরম করুন, লাল পেঁয়াজ নরম হওয়া পর্যন্ত ভাজুন, তারপর রসুন, জালপেনো এবং টমেটো যোগ করে 5 মিনিট রান্না করুন।',
                    'জিরা, লবণ এবং গোলমরিচ মিশিয়ে নিন, তারপর জল ঝরানো ফাভা বিনস এবং সামান্য জল যোগ করুন।',
                    'একটি কাঁটাচামচ বা আলু ম্যাশার দিয়ে প্রায় অর্ধেক বিনস আলতো করে ম্যাশ করুন, তারপর 15-20 মিনিট ধরে সিদ্ধ করুন যাতে স্বাদগুলি মিশে যায়।',
                    'তাজা লেবুর রস মিশিয়ে নিন। গরম গরম পরিবেশন করুন, তাজা পার্সলে বা ধনে দিয়ে সাজিয়ে, এবং ঐচ্ছিকভাবে সেদ্ধ ডিম ও সামান্য জলপাই তেল ছড়িয়ে দিন।'
                ]
            },
            'mr': {
                title: 'फुल मेदामेस',
                description: 'इथिओपियन फुल मेदामेसच्या हार्दिक आणि सुगंधी फवा बीन स्टूचा अनुभव घ्या जो तुमच्या इंद्रियांना जागृत करतो. चमकदार मसाले, ताजी औषधी वनस्पती आणि लिंबाच्या चवीने परिपूर्ण, हा खरोखरच समाधानकारक पदार्थ आहे. प्रत्येक स्वादिष्ट घासासोबत अदिस अबाबाच्या गजबजलेल्या बाजारात पोहोचण्यासाठी तयार व्हा – वाट कशाला पाहता, चला आजच शिजवूया!',
                ingredients: [
                    { item: 'फवा बीन्स (कॅन केलेला, पाणी काढून धुतलेला)', amount: '2 कॅन (प्रत्येकी 15 औंस)' },
                    { item: 'लाल कांदा (बारीक चिरलेला)', amount: '1 मध्यम' },
                    { item: 'टोमॅटो (चिरलेले)', amount: '2 मध्यम' },
                    { item: 'लसूण (बारीक चिरलेला)', amount: '3 पाकळ्या' },
                    { item: 'जलापेनो किंवा हिरवी मिरची (बारीक चिरलेली)', amount: '1 (ऐच्छिक, तिखटपणासाठी)' },
                    { item: 'लिंबाचा रस (ताजा पिळलेला)', amount: '2 मोठे चमचे' },
                    { item: 'ऑलिव्ह तेल', amount: '3 मोठे चमचे' },
                    { item: 'जिरे पूड', amount: '1 लहान चमचा' },
                    { item: 'मीठ', amount: 'चवीनुसार' },
                    { item: 'काळी मिरी', amount: 'चवीनुसार' }
                ],
                instructions: [
                    'एका पॅनमध्ये ऑलिव्ह तेल गरम करा, लाल कांदा मऊ होईपर्यंत परतून घ्या, नंतर लसूण, जलापेनो आणि टोमॅटो घालून 5 मिनिटे शिजवा.',
                    'जिरे, मीठ आणि मिरी मिसळा, नंतर पाणी काढलेले फवा बीन्स आणि थोडे पाणी घाला.',
                    'सुमारे अर्धे बीन्स काट्याने किंवा बटाटा मॅशरने हळूवारपणे मॅश करा, नंतर 15-20 मिनिटे मंद आचेवर शिजवा जेणेकरून चव मिसळतील.',
                    'ताजा लिंबाचा रस मिसळा. गरम सर्व्ह करा, ताजी पार्सली किंवा कोथिंबीरने सजवा, आणि ऐच्छिकपणे उकडलेली अंडी आणि ऑलिव्ह तेलाची धार घालून.'
                ]
            },
            'te': {
                title: 'ఫుల్ మెడామెస్',
                description: 'ఇథియోపియన్ ఫుల్ మెడామెస్ యొక్క హృదయపూర్వక మరియు సుగంధ ఫావా బీన్ స్టూను అనుభవించండి, ఇది మీ ఇంద్రియాలను మేల్కొల్పుతుంది. శక్తివంతమైన మసాలాలు, తాజా మూలికలు మరియు నిమ్మ రుచితో పరిపూర్ణంగా ఉడికించిన ఇది నిజంగా సంతృప్తికరమైన వంటకం. ప్రతి రుచికరమైన స్పూన్‌తో అడిస్ అబాబాలోని సందడిగా ఉండే మార్కెట్‌లకు రవాణా చేయబడటానికి సిద్ధంగా ఉండండి – ఎందుకు వేచి ఉండాలి, ఈరోజే వండుదాం!',
                ingredients: [
                    { item: 'ఫావా బీన్స్ (డబ్బాలోవి, నీరు తీసి కడిగినవి)', amount: '2 డబ్బాలు (ప్రతి 15 ఔన్సులు)' },
                    { item: 'ఎర్ర ఉల్లిపాయ (సన్నగా తరిగినది)', amount: '1 మధ్యస్థం' },
                    { item: 'టొమాటోలు (ముక్కలుగా తరిగినవి)', amount: '2 మధ్యస్థం' },
                    { item: 'వెల్లుల్లి (ముక్కలుగా తరిగినది)', amount: '3 రెబ్బలు' },
                    { item: 'జలపెనో లేదా పచ్చిమిర్చి (సన్నగా తరిగినది)', amount: '1 (ఐచ్ఛికం, కారం కోసం)' },
                    { item: 'నిమ్మరసం (తాజాగా పిండినది)', amount: '2 టేబుల్ స్పూన్లు' },
                    { item: 'ఆలివ్ నూనె', amount: '3 టేబుల్ స్పూన్లు' },
                    { item: 'జీలకర్ర పొడి', amount: '1 టీస్పూన్' },
                    { item: 'ఉప్పు', amount: 'రుచికి సరిపడా' },
                    { item: 'నల్ల మిరియాల పొడి', amount: 'రుచికి సరిపడా' }
                ],
                instructions: [
                    'ఒక పాన్‌లో ఆలివ్ నూనె వేడి చేసి, ఎర్ర ఉల్లిపాయను మెత్తబడే వరకు వేయించి, ఆపై వెల్లుల్లి, జలపెనో మరియు టొమాటోలు వేసి 5 నిమిషాలు ఉడికించాలి.',
                    'జీలకర్ర, ఉప్పు మరియు మిరియాల పొడిని కలపండి, ఆపై నీరు తీసిన ఫావా బీన్స్ మరియు కొద్దిగా నీరు వేయండి.',
                    'సుమారు సగం బీన్స్‌ను ఫోర్క్ లేదా పొటాటో మాషర్‌తో మెత్తగా చేయండి, ఆపై రుచులు కలవడానికి 15-20 నిమిషాలు ఉడికించాలి.',
                    'తాజా నిమ్మరసం కలపండి. వేడిగా వడ్డించండి, తాజా పార్స్లీ లేదా కొత్తిమీరతో అలంకరించండి, మరియు ఐచ్ఛికంగా ఉడికించిన గుడ్లు మరియు కొద్దిగా ఆలివ్ నూనెతో.'
                ]
            },
            'ta': {
                title: 'ஃபுல் மெடாமெஸ்',
                description: 'எத்தியோப்பியன் ஃபுல் மெடாமெஸின் இதமான மற்றும் நறுமணமிக்க ஃபாபா பீன் ஸ்டூவை அனுபவியுங்கள், இது உங்கள் உணர்வுகளைத் தூண்டும். துடிப்பான மசாலாப் பொருட்கள், புதிய மூலிகைகள் மற்றும் புளிப்பு எலுமிச்சை சுவையுடன் கச்சிதமாக சமைக்கப்பட்டது, இது உண்மையிலேயே திருப்திகரமான உணவாகும். ஒவ்வொரு சுவையான கரண்டியுடனும் அடிஸ் அபாபாவின் பரபரப்பான சந்தைகளுக்கு அழைத்துச் செல்லத் தயாராகுங்கள் – ஏன் காத்திருக்க வேண்டும், இன்றே சமைப்போம்!',
                ingredients: [
                    { item: 'ஃபாபா பீன்ஸ் (டின் செய்யப்பட்ட, வடிகட்டி கழுவியது)', amount: '2 டின் (ஒவ்வொன்றும் 15 அவுன்ஸ்)' },
                    { item: 'சிவப்பு வெங்காயம் (நறுக்கியது)', amount: '1 நடுத்தர' },
                    { item: 'தக்காளி (நறுக்கியது)', amount: '2 நடுத்தர' },
                    { item: 'பூண்டு (நறுக்கியது)', amount: '3 பற்கள்' },
                    { item: 'ஜலபெனோ அல்லது பச்சை மிளகாய் (நறுக்கியது)', amount: '1 (விரும்பினால், காரத்திற்கு)' },
                    { item: 'எலுமிச்சை சாறு (புதிதாகப் பிழிந்தது)', amount: '2 தேக்கரண்டி' },
                    { item: 'ஆலிவ் எண்ணெய்', amount: '3 தேக்கரண்டி' },
                    { item: 'சீரகப் பொடி', amount: '1 தேக்கரண்டி' },
                    { item: 'உப்பு', amount: 'சுவைக்கு ஏற்ப' },
                    { item: 'கருப்பு மிளகு', amount: 'சுவைக்கு ஏற்ப' }
                ],
                instructions: [
                    'ஒரு கடாயில் ஆலிவ் எண்ணெயை சூடாக்கி, சிவப்பு வெங்காயத்தை மென்மையாகும் வரை வதக்கவும், பின்னர் பூண்டு, ஜலபெனோ மற்றும் தக்காளியை சேர்த்து 5 நிமிடங்கள் சமைக்கவும்.',
                    'சீரகம், உப்பு மற்றும் மிளகு சேர்த்து, பின்னர் வடிகட்டிய ஃபாபா பீன்ஸ் மற்றும் சிறிது தண்ணீர் சேர்க்கவும்.',
                    'சுமார் பாதி பீன்ஸை ஒரு முட்கரண்டி அல்லது உருளைக்கிழங்கு மஷர் மூலம் மெதுவாக மசிக்கவும், பின்னர் சுவைகள் கலக்க 15-20 நிமிடங்கள் சிம்மரில் வைக்கவும்.',
                    'புதிய எலுமிச்சை சாறு சேர்க்கவும். சூடாக பரிமாறவும், புதிய பார்ஸ்லி அல்லது கொத்தமல்லியால் அலங்கரிக்கவும், மேலும் விரும்பினால் வேகவைத்த முட்டைகள் மற்றும் சிறிது ஆலிவ் எண்ணெய் தூவி பரிமாறவும்.'
                ]
            }
        }
    },
    {
        id: '2026-05-17',
        title: 'Daal Chawal',
        description: 'Experience the heartwarming embrace of Pakistan\'s beloved comfort food, Daal Chawal! This simple yet profoundly flavorful dish combines tender, spiced lentils with fluffy, aromatic rice. Ready to whip up this authentic delight today?',
        image: '/recipe-images/2026-05-17.jpg',
        prepTime: '20 min',
        cookTime: '40 min',
        difficulty: 'Medium',
        servings: 4,
        ingredients: [
            { item: 'Masoor Daal (Red Lentils)', amount: '1 cup' },
            { item: 'Basmati Rice', amount: '2 cups' },
            { item: 'Onion', amount: '1 medium, finely chopped' },
            { item: 'Tomato', amount: '1 medium, chopped' },
            { item: 'Ginger-Garlic Paste', amount: '1 tbsp' },
            { item: 'Cumin Seeds', amount: '1 tsp' },
            { item: 'Turmeric Powder', amount: '1/2 tsp' },
            { item: 'Red Chilli Powder', amount: '1 tsp' },
            { item: 'Salt', amount: 'To taste' },
            { item: 'Cooking Oil/Ghee', amount: '3 tbsp' }
        ],
        instructions: [
            'Wash and soak daal for 20 minutes, rice for 30 minutes. Cook the rice separately until it\'s nice and fluffy.',
            'Heat oil or ghee. Sauté cumin, then onions until golden. Add ginger-garlic paste and tomatoes, cooking until soft.',
            'Stir in turmeric, red chili powder, salt, and the soaked daal with 3 cups of water. Bring to a boil, then simmer until the daal is tender.',
            'Serve the hot daal right alongside your fluffy Basmati rice. Pure comfort!'
        ],
        tags: ['Pakistani', 'Dinner', 'Vegetarian'],
        translations: {
            'zh-CN': {
                title: '达尔查瓦尔 (巴基斯坦扁豆饭)',
                description: '巴基斯坦的达尔查瓦尔，暖心又美味！软糯扁豆配蓬松米饭，口感丰富。快来做这道地道美食吧！',
                ingredients: [
                    { item: '马苏尔扁豆 (红扁豆)', amount: '1 杯' },
                    { item: '印度香米', amount: '2 杯' },
                    { item: '洋葱', amount: '1 个中等大小，切碎' },
                    { item: '番茄', amount: '1 个中等大小，切碎' },
                    { item: '姜蒜蓉', amount: '1 汤匙' },
                    { item: '孜然籽', amount: '1 茶匙' },
                    { item: '姜黄粉', amount: '1/2 茶匙' },
                    { item: '红辣椒粉', amount: '1 茶匙' },
                    { item: '盐', amount: '适量' },
                    { item: '食用油/酥油', amount: '3 汤匙' }
                ],
                instructions: [
                    '扁豆洗净泡20分钟，米饭泡30分钟。',
                    '米饭单独煮熟，要蓬松。',
                    '热油/酥油，炒香孜然籽。',
                    '加洋葱炒金黄，再加姜蒜蓉、番茄，煮软。',
                    '拌入姜黄粉、辣椒粉、盐、泡好的扁豆。',
                    '加3杯水，煮开转小火，炖到扁豆软烂。',
                    '热扁豆配煮好的米饭吃。'
                ]
            },
            'ms': {
                title: 'Daal Chawal (Nasi Dal Pakistan)',
                description: 'Daal Chawal ni hidangan selesa Pakistan yang Makcik suka sangat. Lentil lembut dengan nasi gebu, memang padu! Jom buat hari ni.',
                ingredients: [
                    { item: 'Dal Masoor (Lentil Merah)', amount: '1 cawan' },
                    { item: 'Beras Basmati', amount: '2 cawan' },
                    { item: 'Bawang Besar', amount: '1 biji sederhana, dicincang halus' },
                    { item: 'Tomato', amount: '1 biji sederhana, dicincang' },
                    { item: 'Pes Halia Bawang Putih', amount: '1 sudu besar' },
                    { item: 'Biji Jintan Putih', amount: '1 sudu kecil' },
                    { item: 'Serbuk Kunyit', amount: '1/2 sudu kecil' },
                    { item: 'Serbuk Cili Merah', amount: '1 sudu kecil' },
                    { item: 'Garam', amount: 'Secukup rasa' },
                    { item: 'Minyak Masak/Ghee', amount: '3 sudu besar' }
                ],
                instructions: [
                    'Basuh dan rendam dal 20 minit, nasi 30 minit. Masak nasi berasingan sampai gebu.',
                    'Panaskan minyak/ghee, tumis jintan, kemudian bawang besar sampai keemasan. Masukkan pes halia bawang putih dan tomato; masak sampai lembut.',
                    'Masukkan serbuk kunyit, serbuk cili merah, garam, dan dal yang direndam dengan 3 cawan air. Didihkan, kemudian reneh sampai dal lembut.',
                    'Hidang dal panas dengan nasi Basmati yang dah masak.'
                ]
            },
            'hi': {
                title: 'दाल चावल',
                description: 'पाकिस्तान के इस प्रिय आरामदायक भोजन, दाल चावल के हार्दिक आलिंगन का अनुभव करें! यह सरल लेकिन गहरा स्वादिष्ट व्यंजन कोमल, मसालेदार दाल को फूले हुए, सुगंधित चावल के साथ जोड़ता है, जिससे बनावट और स्वाद का एक अद्भुत संगम बनता है। क्या आप आज ही इस प्रामाणिक व्यंजन को बनाने के लिए तैयार हैं?',
                ingredients: [
                    { item: 'मसूर दाल (लाल दाल)', amount: '1 कप' },
                    { item: 'बासमती चावल', amount: '2 कप' },
                    { item: 'प्याज', amount: '1 मध्यम, बारीक कटा हुआ' },
                    { item: 'टमाटर', amount: '1 मध्यम, कटा हुआ' },
                    { item: 'अदरक-लहसुन का पेस्ट', amount: '1 बड़ा चम्मच' },
                    { item: 'जीरा', amount: '1 छोटा चम्मच' },
                    { item: 'हल्दी पाउडर', amount: '1/2 छोटा चम्मच' },
                    { item: 'लाल मिर्च पाउडर', amount: '1 छोटा चम्मच' },
                    { item: 'नमक', amount: 'स्वादानुसार' },
                    { item: 'खाना पकाने का तेल/घी', amount: '3 बड़े चम्मच' }
                ],
                instructions: [
                    'दाल को 20 मिनट और चावल को 30 मिनट के लिए धोकर भिगो दें। चावल को अलग से नरम होने तक पकाएं।',
                    'तेल/घी गरम करें, जीरा भूनें, फिर प्याज को सुनहरा होने तक भूनें। अदरक-लहसुन का पेस्ट और टमाटर डालकर नरम होने तक पकाएं।',
                    'हल्दी, लाल मिर्च पाउडर, नमक और भीगी हुई दाल को 3 कप पानी के साथ मिलाएं। उबाल आने दें, फिर दाल के नरम होने तक धीमी आंच पर पकाएं।',
                    'पके हुए बासमती चावल के साथ गरमागरम दाल परोसें।'
                ]
            },
            'bn': {
                title: 'ডাল চাউল',
                description: 'পাকিস্তানের প্রিয় আরামদায়ক খাবার, ডাল চাউলের উষ্ণ আলিঙ্গন অনুভব করুন! এই সহজ কিন্তু গভীরভাবে সুস্বাদু খাবারটি নরম, মশলাদার ডালকে নরম, সুগন্ধি ভাতের সাথে একত্রিত করে, যা টেক্সচার এবং স্বাদের একটি সিম্ফনি তৈরি করে। আজই এই খাঁটি খাবারটি তৈরি করতে প্রস্তুত?',
                ingredients: [
                    { item: 'মসুর ডাল (লাল ডাল)', amount: '1 কাপ' },
                    { item: 'বাসমতী চাল', amount: '2 কাপ' },
                    { item: 'পেঁয়াজ', amount: '1টি মাঝারি, মিহি করে কাটা' },
                    { item: 'টমেটো', amount: '1টি মাঝারি' }
                ],
                instructions: [

                ]
            },
            'mr': {
                title: '',
                description: '',
                ingredients: [

                ],
                instructions: [

                ]
            },
            'te': {
                title: '',
                description: '',
                ingredients: [

                ],
                instructions: [

                ]
            },
            'ta': {
                title: '',
                description: '',
                ingredients: [

                ],
                instructions: [

                ]
            }
        }
    },
    {
        id: '2026-05-18',
        title: 'Chilli Crab',
        description: 'Chilli Crab. Ah, the very name brings back the humid air of East Coast Lagoon Food Centre, the clatter of plates, and the joyous, messy slurping. This isn\'t just a dish; it\'s a Singaporean institution, a rite of passage. It’s messy, it’s loud, and it’s absolutely perfect.',
        image: '/recipe-images/2026-05-18.jpg',
        prepTime: '25 min',
        cookTime: '45 min',
        difficulty: 'Medium',
        servings: 4,
        ingredients: [
            { item: 'Fresh Mud Crabs', amount: '2 (approx. 800g - 1kg each), cleaned and cracked' },
            { item: 'Cooking Oil', amount: '1/2 cup' },
            { item: 'Garlic', amount: '8 cloves, minced' },
            { item: 'Ginger', amount: '2-inch piece, grated' },
            { item: 'Shallots', amount: '4, finely chopped' },
            { item: 'Dried Red Chilies', amount: '15-20, soaked in hot water, deseeded (adjust to spice preference)' },
            { item: 'Fresh Red Chilies', amount: '5-6, deseeded (for color and fresh heat)' },
            { item: 'Belacan (Shrimp Paste)', amount: '1 tsp, toasted' },
            { item: 'Tomato Ketchup', amount: '1/2 cup' },
            { item: 'Bottled Chilli Sauce', amount: '1/4 cup (e.g., Maggi or similar sweet chili sauce)' },
            { item: 'Water or Chicken Stock', amount: '1.5 cups' },
            { item: 'Sugar', amount: '2-3 tbsp (adjust to taste)' },
            { item: 'Salt', amount: '1 tsp (or to taste)' },
            { item: 'White Vinegar', amount: '1 tbsp' },
            { item: 'Cornstarch', amount: '2 tbsp, mixed with 4 tbsp water (slurry)' },
            { item: 'Eggs', amount: '2 large, lightly beaten' },
            { item: 'Coriander Leaves', amount: 'For garnish, chopped' },
            { item: 'Spring Onions', amount: 'For garnish, sliced' },
            { item: 'Fried Mantou Buns', amount: 'For serving' }
        ],
        instructions: [
            'Clean your crabs well. Crack the shells and claws with a cleaver so the sauce can get in. Set them aside.',
            'Blend dried and fresh red chilies, shallots, garlic, ginger, and toasted belacan into a smooth, fragrant paste.',
            'Heat oil in a wok. Sauté the chili paste for 8-10 minutes, stirring constantly, until it darkens and the oil separates. Don\'t rush this!',
            'Add ketchup, chili sauce, water or stock, sugar, salt, and vinegar. Simmer for 5 minutes to deepen the flavors.',
            'Add the crab to the sauce, coating it well. Cover and cook for 8-10 minutes until the crab is vibrant orange and cooked through. Don\'t overcook!',
            'Stir cornstarch slurry into the simmering sauce slowly until it thickens and becomes glossy. Let it bubble for a minute.',
            'Reduce heat. Slowly drizzle in beaten eggs while gently stirring to create delicate ribbons. Turn off the heat.',
            'Serve immediately on a big platter, garnished with coriander and spring onions. Don\'t forget those fried mantou buns for dipping!'
        ],
        tags: ['Singaporean', 'Dinner', 'Authentic'],
        translations: {
            'hi': {
                title: 'चिली क्रैब',
                description: 'चिली क्रैब। आह, यह नाम सुनते ही ईस्ट कोस्ट लैगून फूड सेंटर की उमस भरी हवा, बर्तनों की खड़खड़ाहट और खुशी से, गंदे तरीके से खाने की याद आ जाती है। यह सिर्फ एक व्यंजन नहीं है; यह सिंगापुर की एक संस्था है, एक परंपरा है। मुझे इसे बनाने का मेरा पहला वास्तविक प्रयास याद है, जब मैं सिर्फ एक युवा रसोइया था, पूरा जोश था पर तकनीक नहीं थी। मैंने अपनी चाची मेई को इसे अनगिनत बार बनाते देखा था, उनके हाव-भाव सटीक, लगभग अनुष्ठानिक थे। लेकिन देखना और करना दो अलग-अलग बातें हैं। मेरे पहले कुछ प्रयास? आपदाएँ। सॉस या तो बहुत पतला था, केकड़े से चिपकने से इनकार कर रहा था, या इतना गाढ़ा था कि वह एक चिपचिपा गड़बड़ बन गया। और केकड़ा! ओह, ज़्यादा पका हुआ, रबर जैसा केकड़ा कितना भयानक होता है। चाची मेई, उनकी धैर्यवान आत्मा को आशीर्वाद, बस अपना सिर हिलातीं, एक छोटी, समझदार मुस्कान देतीं, और फिर धीरे से मेरा हाथ पकड़कर मुझे दिखातीं कि कैसे प्याज़ से मिठास निकालनी है, कैसे उस सही क्षण का न्याय करना है जब मिर्च का पेस्ट तेल में वास्तव में \'खिलता\' है। ईमानदारी से कहूँ तो, इस संतुलन को सही करने में, इस व्यंजन की आत्मा को समझने में सालों लग गए।  इसका रहस्य, अगर कोई है, तो वह मिर्च के पेस्ट और आपके केकड़े की ताज़गी में निहित है। उन पहले से बने जारों को भूल जाइए; वे बस काम नहीं करते। आपको सूखी मिर्च से वह जीवंत, जटिल गर्मी चाहिए, ताज़े प्याज़ की तीखी मिठास, लहसुन और अदरक का तीखा स्वाद, और बेलाचन की एक छोटी, महत्वपूर्ण फुसफुसाहट। कुछ शुद्धतावादी पूरी तरह से टमाटर-आधारित सॉस के लिए तर्क देते हैं, लेकिन मैंने पाया है कि अच्छी गुणवत्ता वाले बोतल बंद चिली सॉस और केचप का एक विवेकपूर्ण मिश्रण, ताज़े टमाटरों के साथ, इसे वह विशिष्ट खट्टा-मीठा-मसालेदार गहराई देता है जो आपको प्लेट चाटने पर मजबूर कर देता है। और अंडा! अंत में वह नाजुक, रेशमी अंडे का घुमाव सिर्फ दिखाने के लिए नहीं है; यह एक सुंदर समृद्धि और बनावट जोड़ता है, सॉस को एक साथ बांधता है। चाल यह है कि इसे धीरे-धीरे, धीरे से हिलाते हुए डालें, जिससे यह सुंदर, पतली धारियाँ बना सके। इसे बस ऐसे ही मत डालिए, वरना आपके केकड़े में अंडे का भुर्जी बन जाएगी। मुझ पर विश्वास करें, मैं वहाँ रहा हूँ।  यह व्यंजन साझा करने के लिए है, अपने हाथों से खाने के लिए है, उस शानदार, उग्र लाल सॉस में कोहनी तक डूबकर। यह एक सामुदायिक अनुभव है, एक उत्सव है। आपको ढेर सारे नैपकिन, शायद एक बिब भी, और निश्चित रूप से उन फूले हुए, तले हुए मंटौ बन्स का एक ढेर चाहिए होगा। वे वैकल्पिक नहीं हैं; वे उस अविश्वसनीय सॉस की हर आखिरी बूंद को सोखने के लिए आवश्यक हैं। केकड़े के एक रसीले टुकड़े को फाड़कर, उस समृद्ध, मसालेदार, थोड़े मीठे सॉस में लपेटकर, और फिर उसे सॉस में डूबे मंटौ के साथ खाने जैसा कुछ भी नहीं है। यह गंदा है, यह शोरगुल वाला है, और यह बिल्कुल सही है। एक बार जब केकड़ा अंदर चला जाए तो स्टोव से दूर न हटें; यह जल्दी पकता है। इस पर नज़र रखें, और आपको एक ऐसा भोजन मिलेगा जो वास्तव में गाता है।',
                ingredients: [
                    { item: 'ताजे मड क्रैब', amount: '2 (लगभग 800 ग्राम - 1 किलो प्रत्येक), साफ और तोड़े हुए' },
                    { item: 'खाना पकाने का तेल', amount: '1/2 कप' },
                    { item: 'लहसुन', amount: '8 कलियाँ, बारीक कटी हुई' },
                    { item: 'अदरक', amount: '2 इंच का टुकड़ा, कद्दूकस किया हुआ' },
                    { item: 'प्याज़ (शैलट्स)', amount: '4, बारीक कटे हुए' },
                    { item: 'सूखी लाल मिर्च', amount: '15-20, गर्म पानी में भिगोकर, बीज निकाले हुए (मसाले के अनुसार समायोजित करें)' },
                    { item: 'ताजी लाल मिर्च', amount: '5-6, बीज निकाले हुए (रंग और ताजी गर्मी के लिए)' },
                    { item: 'बेलाचन (झींगा पेस्ट)', amount: '1 छोटा चम्मच, भुना हुआ' },
                    { item: 'टमाटर केचप', amount: '1/2 कप' },
                    { item: 'बोतल बंद चिली सॉस', amount: '1/4 कप (जैसे मैगी या इसी तरह का मीठा चिली सॉस)' },
                    { item: 'पानी या चिकन स्टॉक', amount: '1.5 कप' },
                    { item: 'चीनी', amount: '2-3 बड़े चम्मच (स्वाद के अनुसार समायोजित करें)' },
                    { item: 'नमक', amount: '1 छोटा चम्मच (या स्वाद के अनुसार)' },
                    { item: 'सफेद सिरका', amount: '1 बड़ा चम्मच' },
                    { item: 'कॉर्नस्टार्च', amount: '2 बड़े चम्मच, 4 बड़े चम्मच पानी के साथ मिलाया हुआ (घोल)' },
                    { item: 'अंडे', amount: '2 बड़े, हल्के फेंटे हुए' },
                    { item: 'धनिया पत्ती', amount: 'सजाने के लिए, कटी हुई' },
                    { item: 'हरी प्याज़', amount: 'सजाने के लिए, कटी हुई' },
                    { item: 'तले हुए मंटौ बन्स', amount: 'परोसने के लिए' }
                ],
                instructions: [
                    'केकड़ा तैयार करें: सबसे पहले, स्टार! अपने केकड़े लें। उन्हें बहते पानी के नीचे अच्छी तरह साफ करें। खोल और पंजों को तोड़ने के लिए एक मजबूत कुल्हाड़ी या भारी चाकू का उपयोग करें। शर्माएं नहीं; आप चाहते हैं कि सॉस हर कोने में जाए। शरीर को आधे या चौथाई हिस्सों में अलग करें, पैरों और पंजों को जुड़ा रहने दें। एक तरफ रख दें।',
                    'चिली पेस्ट बनाएं: यहीं से जादू शुरू होता है। एक फूड प्रोसेसर या मोर्टार और मूसल में, भिगोई हुई सूखी लाल मिर्च, ताजी लाल मिर्च, प्याज़, लहसुन, अदरक और भुना हुआ बेलाचन मिलाएं। तब तक ब्लेंड या पीसें जब तक आपको एक अपेक्षाकृत चिकना, सुगंधित पेस्ट न मिल जाए। इसकी महक जीवंत, थोड़ी तीखी और आशाजनक होनी चाहिए।',
                    'पेस्ट भूनें: एक बड़ी कड़ाही या गहरे पैन में मध्यम-तेज आंच पर खाना पकाने का तेल गरम करें। अपना ताज़ा बना हुआ चिली पेस्ट डालें। लगातार हिलाते रहें, इसे भुनने और चटकने दें। आप चाहते हैं कि मिर्च और लहसुन के कच्चे, तीखे किनारे नरम हो जाएं, पेस्ट थोड़ा गहरा हो जाए, और तेल \'अलग\' होकर पैन के किनारों पर जमा होने लगे। इसमें लगभग 8-10 मिनट लगते हैं। जल्दी न करें; यह कदम स्वाद की नींव बनाता है।',
                    'सॉस बेस बनाएं: टमाटर केचप, बोतल बंद चिली सॉस, पानी या चिकन स्टॉक, चीनी, नमक और सफेद सिरका डालें। सब कुछ एक साथ मिलाएं जब तक कि यह अच्छी तरह से मिल न जाए और धीरे-धीरे बुलबुले न उठने लगें। इसे लगभग 5 मिनट तक उबलने दें, जिससे स्वाद मिल जाएं और गहरा हो जाए। सुगंध मीठा, खट्टा और मसालेदार का एक सुंदर मिश्रण होना चाहिए।',
                    'केकड़ा पकाएं: अब मुख्य कार्यक्रम के लिए। तैयार केकड़े के टुकड़ों को उबलते सॉस में डालें। सभी केकड़ों को उस शानदार लाल मिश्रण से ढकने के लिए धीरे से हिलाएं। कड़ाही को ढक दें और इसे लगभग 8-10 मिनट तक पकने दें, या जब तक केकड़े के खोल चमकीले नारंगी-लाल न हो जाएं और मांस अपारदर्शी न हो जाए। ज़्यादा न पकाएं! रबर जैसा केकड़ा एक पाक त्रासदी है।',
                    'सॉस गाढ़ा करें: कॉर्नस्टार्च के घोल को एक बार फिर से हिलाएं (यह बैठ जाता है!)। इसे धीरे-धीरे उबलते सॉस में डालें, लगातार हिलाते रहें। देखें कि सॉस कैसे बदलता है, एक चमकदार, शानदार स्थिरता में गाढ़ा होता है जो केकड़े से खूबसूरती से चिपकेगा। कच्चे कॉर्नस्टार्च के स्वाद को पकाने के लिए इसे एक और मिनट के लिए उबलने दें।',
                    'अंडा डालें: आंच धीमी कर दें। धीरे-धीरे, एक पतली धार में, हल्के फेंटे हुए अंडे को सॉस में डालें जबकि एक चम्मच या स्पैटुला से धीरे-धीरे हिलाते रहें। आप अंडे की नाजुक, रेशमी धारियाँ बनाना चाहते हैं, न कि तले हुए टुकड़े। बस इतना हिलाएं कि वह मिल जाए, फिर आंच बंद कर दें। बची हुई गर्मी अंडे को पूरी तरह पका देगी।',
                    'तुरंत परोसें: चिली क्रैब को एक बड़ी सर्विंग प्लेट में निकालें। ताजी धनिया पत्ती और कटी हुई हरी प्याज़ से उदारतापूर्वक सजाएं। गरमागरम तले हुए मंटौ बन्स के ढेर के साथ परोसें। गंदे हो जाएं, खाना शुरू करें, और हर शानदार निवाले का आनंद लें!'
                ]
            },
            'bn': {
                title: 'চিলি ক্র্যাব',
                description: 'চিলি ক্র্যাব। আহা, এই নামটাই ইস্ট কোস্ট ল্যাগুন ফুড সেন্টারের আর্দ্র বাতাস, প্লেটের ঠনঠন শব্দ আর আনন্দময়, অগোছালো স্লাপিংয়ের স্মৃতি ফিরিয়ে আনে। এটা শুধু একটা পদ নয়; এটা সিঙ্গাপুরের একটা প্রতিষ্ঠান, একটা দীক্ষার মতো। আমার মনে আছে, যখন আমি একজন তরুণ রাঁধুনি ছিলাম, তখন আমি প্রথমবার এটা বানানোর চেষ্টা করেছিলাম, তখন শুধু সাহস ছিল, কৌশল ছিল না। আমি আমার মাসি মেইকে অসংখ্যবার এটা বানাতে দেখেছি, তাঁর নড়াচড়া ছিল নিখুঁত, প্রায় আচার-অনুষ্ঠানের মতো। কিন্তু দেখা আর করা দুটো ভিন্ন জিনিস। আমার প্রথম কয়েকটি চেষ্টা? বিপর্যয়। সস হয় খুব পাতলা হয়ে যেত, কাঁকড়ার গায়ে লেগে থাকত না, অথবা এত ঘন হয়ে যেত যে একটা আঠালো জগাখিচুড়ি হয়ে যেত। আর কাঁকড়া! ওহ, অতিরিক্ত সেদ্ধ, রাবারি কাঁকড়ার ভয়াবহতা। মাসি মেই, তাঁর ধৈর্যশীল আত্মাকে আশীর্বাদ করি, শুধু মাথা নাড়তেন, একটা ছোট, জ্ঞাত হাসি দিতেন, এবং তারপর আলতো করে আমার হাত ধরে দেখাতেন কিভাবে শ্যালট থেকে মিষ্টি বের করতে হয়, কিভাবে মরিচ পেস্ট তেলে ঠিক কখন \'ফুটে ওঠে\' তা বিচার করতে হয়। সত্যি বলতে, এই ভারসাম্য ঠিক করতে, এই পদের আত্মাকে বুঝতে কয়েক বছর লেগেছিল। গোপন রহস্য, যদি কিছু থাকে, তবে তা মরিচ পেস্ট এবং আপনার কাঁকড়ার সতেজতার মধ্যে নিহিত। সেই তৈরি করা জারগুলো ভুলে যান; সেগুলো দিয়ে কাজ হবে না। আপনার দরকার শুকনো মরিচ থেকে সেই প্রাণবন্ত, জটিল ঝাল, তাজা শ্যালটের তীব্র মিষ্টি, রসুন ও আদার তীক্ষ্ণ কামড়, এবং বেলাকানের একটি ক্ষুদ্র, গুরুত্বপূর্ণ ফিসফিস। কিছু বিশুদ্ধতাবাদী শুধুমাত্র টমেটো-ভিত্তিক সসের পক্ষে যুক্তি দেন, কিন্তু আমি দেখেছি যে ভালো মানের বোতলজাত চিলি সস এবং কেচাপের সাথে তাজা টমেটোর একটি বিচক্ষণ মিশ্রণ এটিকে সেই স্বাক্ষর টক-মিষ্টি-ঝাল গভীরতা দেয় যা আপনাকে প্লেট চেটেপুটে খেতে বাধ্য করে। আর ডিম! শেষে সেই সূক্ষ্ম, রেশমি ডিমের ঘূর্ণি শুধু দেখানোর জন্য নয়; এটি একটি সুন্দর সমৃদ্ধি এবং টেক্সচার যোগ করে, সসকে একসাথে বেঁধে রাখে। কৌশলটি হল ধীরে ধীরে, আলতো করে নাড়তে নাড়তে এটি ঢালা, যাতে এটি সুন্দর, পাতলা ফিতা তৈরি করে। শুধু ঢেলে দেবেন না, তাহলে আপনার কাঁকড়ায় স্ক্র্যাম্বলড ডিম হয়ে যাবে। বিশ্বাস করুন, আমি সেখানে ছিলাম। এই পদটি ভাগ করে নেওয়ার জন্য, হাত দিয়ে গোগ্রাসে খাওয়ার জন্য, সেই মহিমান্বিত, জ্বলন্ত লাল সসে কনুই ডুবিয়ে। এটি একটি সম্মিলিত অভিজ্ঞতা, একটি উদযাপন। আপনার প্রচুর ন্যাপকিন লাগবে, হয়তো একটা বিবও, এবং অবশ্যই সেই নরম, ভাজা মানতাউ বানের স্তূপ। এগুলো ঐচ্ছিক নয়; সেই অবিশ্বাস্য সসের প্রতিটি শেষ ফোঁটা মুছে ফেলার জন্য এগুলো অপরিহার্য। সেই সমৃদ্ধ, ঝাল, সামান্য মিষ্টি সসে মোড়ানো কাঁকড়ার একটি রসালো টুকরো ছিঁড়ে খাওয়া, এবং তারপর সসে ভেজানো মানতাউ দিয়ে তা অনুসরণ করার মতো আর কিছুই নেই। এটা অগোছালো, এটা কোলাহলপূর্ণ, এবং এটা একেবারে নিখুঁত। কাঁকড়া একবার কড়াইতে গেলে চুলা থেকে দূরে যাবেন না; এটি দ্রুত রান্না হয়। এর দিকে নজর রাখুন, এবং আপনি এমন একটি খাবারের সাথে পুরস্কৃত হবেন যা সত্যিই গান গায়।',
                ingredients: [
                    { item: 'তাজা মাড ক্র্যাব', amount: '২টি (প্রতিটি প্রায় ৮০০ গ্রাম - ১ কেজি), পরিষ্কার করে ফাটানো' },
                    { item: 'রান্নার তেল', amount: '১/২ কাপ' },
                    { item: 'রসুন', amount: '৮ কোয়া, কুচি করা' },
                    { item: 'আদা', amount: '২ ইঞ্চি টুকরা, গ্রেট করা' },
                    { item: 'পেঁয়াজকলি', amount: '৪টি, মিহি করে কুচি করা' },
                    { item: 'শুকনো লাল লঙ্কা', amount: '১৫-২০টি, গরম জলে ভিজিয়ে, বীজ ছাড়ানো (ঝাল অনুযায়ী)' },
                    { item: 'তাজা লাল লঙ্কা', amount: '৫-৬টি, বীজ ছাড়ানো (রং ও তাজা ঝালের জন্য)' },
                    { item: 'বেলাকান (চিংড়ি পেস্ট)', amount: '১ চা চামচ, টোস্ট করা' },
                    { item: 'টমেটো কেচাপ', amount: '১/২ কাপ' },
                    { item: 'বোতলজাত চিলি সস', amount: '১/৪ কাপ (যেমন, ম্যাগি বা অনুরূপ মিষ্টি চিলি সস)' },
                    { item: 'জল বা চিকেন স্টক', amount: '১.৫ কাপ' },
                    { item: 'চিনি', amount: '২-৩ টেবিল চামচ (স্বাদমতো)' },
                    { item: 'লবণ', amount: '১ চা চামচ (বা স্বাদমতো)' },
                    { item: 'সাদা ভিনেগার', amount: '১ টেবিল চামচ' },
                    { item: 'কর্নস্টার্চ', amount: '২ টেবিল চামচ, ৪ টেবিল চামচ জলের সাথে মেশানো (স্লারি)' },
                    { item: 'ডিম', amount: '২টি বড়, হালকা ফেটানো' },
                    { item: 'ধনে পাতা', amount: 'সাজানোর জন্য, কুচি করা' },
                    { item: 'পেঁয়াজ পাতা', amount: 'সাজানোর জন্য, স্লাইস করা' },
                    { item: 'ভাজা মানতাউ বান', amount: 'পরিবেশনের জন্য' }
                ],
                instructions: [
                    'কাঁকড়া প্রস্তুত করুন: প্রথমে, তারকা! আপনার কাঁকড়া নিন। চলমান জলের নিচে ভালোভাবে পরিষ্কার করুন। একটি মজবুত ক্লিভার বা ভারী ছুরি ব্যবহার করে শেল এবং নখর ফাটান। লজ্জা পাবেন না; আপনি চান সস প্রতিটি কোণে এবং ফাটলে প্রবেশ করুক। শরীরকে অর্ধেক বা চতুর্থাংশে ভাগ করুন, পা এবং নখর সংযুক্ত রাখুন। একপাশে রাখুন।',
                    'চিলি পেস্ট তৈরি করুন: এখান থেকেই জাদু শুরু হয়। একটি ফুড প্রসেসরে বা হামানদিস্তায়, ভেজানো শুকনো লাল লঙ্কা, তাজা লাল লঙ্কা, পেঁয়াজকলি, রসুন, আদা এবং টোস্ট করা বেলাকান একত্রিত করুন। একটি তুলনামূলকভাবে মসৃণ, সুগন্ধি পেস্ট না হওয়া পর্যন্ত ব্লেন্ড করুন বা পিষে নিন। এটির প্রাণবন্ত, কিছুটা তীব্র এবং আশাব্যঞ্জক গন্ধ হওয়া উচিত।',
                    'পেস্ট ভাজুন: একটি বড় কড়াই বা গভীর প্যানে মাঝারি-উচ্চ আঁচে রান্নার তেল গরম করুন। আপনার সদ্য তৈরি চিলি পেস্ট যোগ করুন। ক্রমাগত নাড়ুন, এটিকে ভাজতে দিন এবং ফুটতে দিন। আপনি চান লঙ্কা এবং রসুনের কাঁচা, তীক্ষ্ণ ধারগুলো নরম হোক, পেস্টটি কিছুটা গাঢ় হোক এবং তেল \'আলাদা\' হতে শুরু করে প্যানের চারপাশে জমা হোক। এতে প্রায় ৮-১০ মিনিট সময় লাগে। তাড়াহুড়ো করবেন না; এই ধাপটি স্বাদের ভিত্তি তৈরি করে।',
                    'সসের ভিত্তি তৈরি করুন: টমেটো কেচাপ, বোতলজাত চিলি সস, জল বা চিকেন স্টক, চিনি, লবণ এবং সাদা ভিনেগার ঢেলে দিন। সবকিছু একসাথে নাড়ুন যতক্ষণ না এটি ভালোভাবে মিশে যায় এবং আলতো করে ফুটতে শুরু করে। প্রায় ৫ মিনিট ধরে এটিকে ফুটতে দিন, যাতে স্বাদগুলো মিশে যায় এবং গভীর হয়। সুগন্ধটি মিষ্টি, টক এবং ঝালের একটি সুন্দর মিশ্রণ হওয়া উচিত।',
                    'কাঁকড়া রান্না করুন: এবার মূল ঘটনা। প্রস্তুত কাঁকড়ার টুকরোগুলো ফুটন্ত সসে যোগ করুন। আলতো করে নাড়ুন যাতে সমস্ত কাঁকড়া সেই মহিমান্বিত লাল মিশ্রণে আবৃত হয়। কড়াই ঢেকে প্রায় ৮-১০ মিনিট রান্না করুন, অথবা কাঁকড়ার শেলগুলো উজ্জ্বল কমলা-লাল না হওয়া পর্যন্ত এবং মাংস অস্বচ্ছ না হওয়া পর্যন্ত। অতিরিক্ত রান্না করবেন না! রাবারি কাঁকড়া একটি রন্ধনসম্পর্কীয় ট্র্যাজেডি।',
                    'সস ঘন করুন: কর্নস্টার্চ স্লারিটি দ্রুত নাড়ুন (এটি থিতিয়ে যায়!)। এটি ধীরে ধীরে ফুটন্ত সসে ঢালুন, ক্রমাগত নাড়তে থাকুন। দেখুন কিভাবে সস রূপান্তরিত হয়, একটি চকচকে, বিলাসবহুল ঘনত্বে ঘন হয় যা কাঁকড়ার সাথে সুন্দরভাবে লেগে থাকবে। কাঁচা কর্নস্টার্চের স্বাদ দূর করার জন্য এটিকে আরও এক মিনিট ফুটতে দিন।',
                    'ডিম যোগ করুন: আঁচ কমিয়ে দিন। ধীরে ধীরে, একটি পাতলা ধারায়, হালকা ফেটানো ডিমগুলো সসে ঢালুন যখন একটি চামচ বা স্প্যাটুলা দিয়ে আলতো করে নাড়তে থাকুন। আপনি ডিমের সূক্ষ্ম, রেশমি ফিতা তৈরি করতে চান, স্ক্র্যাম্বলড টুকরা নয়। মেশানোর জন্য যথেষ্ট নাড়ুন, তারপর আঁচ বন্ধ করুন। অবশিষ্ট তাপ ডিম রান্না শেষ করবে।',
                    'অবিলম্বে পরিবেশন করুন: চিলি ক্র্যাব একটি বড় পরিবেশন প্লেটে স্থানান্তর করুন। তাজা ধনে পাতা এবং স্লাইস করা পেঁয়াজ পাতা দিয়ে উদারভাবে সাজান। গরম গরম পরিবেশন করুন প্রচুর পরিমাণে সদ্য ভাজা মানতাউ বানের সাথে। অগোছালো হন, ডুব দিন এবং প্রতিটি মহিমান্বিত কামড় উপভোগ করুন!'
                ]
            },
            'mr': {
                title: 'चिली क्रॅब',
                description: 'चिली क्रॅब. अहा, हे नाव ऐकताच ईस्ट कोस्ट लॅगून फूड सेंटरमधील दमट हवा, प्लेट्सचा खडखडाट आणि आनंदी, गबाळेपणे खाण्याचा आवाज आठवतो. हा फक्त एक पदार्थ नाही; ही सिंगापूरची एक संस्था आहे, एक संस्कार आहे. मला आठवतं, जेव्हा मी एक तरुण स्वयंपाकी होतो, तेव्हा मी पहिल्यांदा हा पदार्थ बनवण्याचा प्रयत्न केला होता, तेव्हा फक्त धाडस होतं, तंत्रज्ञान नव्हतं. मी माझ्या मावशी मेईला हे अनेक वेळा बनवताना पाहिलं होतं, तिची हालचाल अचूक, जवळजवळ विधीवत होती. पण पाहणं आणि करणं या दोन वेगवेगळ्या गोष्टी आहेत. माझे पहिले काही प्रयत्न? आपत्त्या. सॉस एकतर खूप पातळ असायचा, खेकड्याला चिकटत नसे, किंवा इतका घट्ट असायचा की तो चिकट गोळा बनत असे. आणि खेकडा! ओह, जास्त शिजवलेल्या, रबरी खेकड्याची भीती. मावशी मेई, तिच्या सहनशील आत्म्याला आशीर्वाद असो, फक्त डोकं हलवायची, एक छोटी, जाणकार हसू द्यायची आणि मग हळूवारपणे माझा हात धरून दाखवायची की शॅलॉट्समधून गोडवा कसा काढायचा, मिरचीची पेस्ट तेलात कधी \'फुलते\' याचा अचूक अंदाज कसा घ्यायचा. खरं सांगायचं तर, हे संतुलन साधायला, या पदार्थाचा आत्मा समजून घ्यायला अनेक वर्षं लागली. रहस्य, जर काही असेल तर, ते मिरचीच्या पेस्टमध्ये आणि तुमच्या खेकड्याच्या ताजेपणात आहे. त्या तयार जार विसरून जा; ते काही कामाचे नाहीत. तुम्हाला सुक्या मिरच्यांमधून ती तेजस्वी, जटिल तिखटपणा, ताज्या शॅलॉट्सचा तीव्र गोडवा, लसूण आणि आल्याचा तीक्ष्ण स्वाद आणि बेलाकानची एक छोटी, महत्त्वाची कुजबुज हवी आहे. काही शुद्धतावादी केवळ टोमॅटो-आधारित सॉससाठी युक्तिवाद करतात, परंतु मला आढळले आहे की चांगल्या दर्जाच्या बाटलीतील चिली सॉस आणि केचपचा, ताज्या टोमॅटोसह, एक योग्य मिश्रण त्याला ती खास आंबट-गोड-तिखट खोली देते ज्यामुळे तुम्हाला प्लेट चाटून खावीशी वाटते. आणि अंडं! शेवटी तो नाजूक, रेशमी अंड्याचा फिरका फक्त दाखवण्यासाठी नाही; तो एक सुंदर समृद्धी आणि पोत जोडतो, सॉसला एकत्र बांधतो. युक्ती अशी आहे की ते हळू हळू, हलकेच ढवळत ओतावे, ज्यामुळे ते सुंदर, पातळ रिबन तयार करेल. फक्त ओतू नका, नाहीतर तुमच्या खेकड्यात स्क्रॅम्बल्ड अंडं होईल. माझ्यावर विश्वास ठेवा, मी तिथे होतो. हा पदार्थ वाटून घेण्यासाठी आहे, हातांनी खाण्यासाठी आहे, त्या तेजस्वी, ज्वलंत लाल सॉसमध्ये कोपर बुडवून. हा एक सामुदायिक अनुभव आहे, एक उत्सव आहे. तुम्हाला भरपूर नॅपकिन्स लागतील, कदाचित एक बिब देखील, आणि निश्चितपणे त्या मऊ, तळलेल्या मांतोऊ बन्सचा ढिगारा. ते पर्यायी नाहीत; त्या अविश्वसनीय सॉसचा प्रत्येक शेवटचा थेंब पुसून काढण्यासाठी ते आवश्यक आहेत. त्या समृद्ध, तिखट, किंचित गोड सॉसमध्ये बुडवलेला खेकड्याचा रसाळ तुकडा खाण्यासारखं आणि मग सॉसमध्ये भिजवलेल्या मांतोऊने त्याचा पाठलाग करण्यासारखं काहीही नाही. ते गबाळं आहे, ते गोंगाटाचं आहे, आणि ते पूर्णपणे परिपूर्ण आहे. खेकडा एकदा कढईत घातल्यावर स्टोव्हपासून दूर जाऊ नका; तो लवकर शिजतो. त्यावर लक्ष ठेवा, आणि तुम्हाला खरोखरच गाणं गाणारं जेवण मिळेल.',
                ingredients: [
                    { item: 'ताजे मड क्रॅब', amount: '२ (प्रत्येकी अंदाजे ८०० ग्रॅम - १ किलो), स्वच्छ करून फोडलेले' },
                    { item: 'खाद्यतेल', amount: '१/२ कप' },
                    { item: 'लसूण', amount: '८ पाकळ्या, बारीक चिरलेला' },
                    { item: 'आले', amount: '२ इंच तुकडा, किसलेले' },
                    { item: 'शॅलॉट्स', amount: '४, बारीक चिरलेले' },
                    { item: 'सुख्या लाल मिरच्या', amount: '१५-२०, गरम पाण्यात भिजवून, बिया काढलेल्या (तिखटपणाच्या आवडीनुसार)' },
                    { item: 'ताज्या लाल मिरच्या', amount: '५-६, बिया काढलेल्या (रंग आणि ताज्या तिखटपणासाठी)' },
                    { item: 'बेलाकान (कोळंबी पेस्ट)', amount: '१ चमचा, भाजलेले' },
                    { item: 'टोमॅटो केचप', amount: '१/२ कप' },
                    { item: 'बाटलीतील चिली सॉस', amount: '१/४ कप (उदा. मॅगी किंवा तत्सम गोड चिली सॉस)' },
                    { item: 'पाणी किंवा चिकन स्टॉक', amount: '१.५ कप' },
                    { item: 'साखर', amount: '२-३ चमचे (चवीनुसार)' },
                    { item: 'मीठ', amount: '१ चमचा (किंवा चवीनुसार)' },
                    { item: 'पांढरा व्हिनेगर', amount: '१ चमचा' },
                    { item: 'कॉर्नस्टार्च', amount: '२ चमचे, ४ चमचे पाण्यात मिसळलेले (स्लरी)' },
                    { item: 'अंडी', amount: '२ मोठी, हलके फेटलेली' },
                    { item: 'कोथिंबीर', amount: 'सजावटीसाठी, चिरलेली' },
                    { item: 'कांद्याची पात', amount: 'सजावटीसाठी, कापलेली' },
                    { item: 'तळलेले मांतोऊ बन्स', amount: 'सर्व्ह करण्यासाठी' }
                ],
                instructions: [
                    'खेकडा तयार करा: सर्वप्रथम, स्टार! तुमचे खेकडे घ्या. त्यांना वाहत्या पाण्याखाली पूर्णपणे स्वच्छ करा. एक मजबूत कोयता किंवा जड चाकू वापरून कवच आणि नखे फोडा. लाजू नका; तुम्हाला सॉस प्रत्येक कोपऱ्यात आणि फटीत जायला हवा आहे. शरीर अर्ध्या किंवा चतुर्थांश भागांमध्ये वेगळे करा, पाय आणि नखे जोडलेले ठेवा. बाजूला ठेवा.',
                    'चिली पेस्ट बनवा: येथून जादू सुरू होते. फूड प्रोसेसरमध्ये किंवा खलबत्त्यात, भिजवलेल्या सुक्या लाल मिरच्या, ताज्या लाल मिरच्या, शॅलॉट्स, लसूण, आले आणि भाजलेले बेलाकान एकत्र करा. ते तुलनेने गुळगुळीत, सुगंधी पेस्ट होईपर्यंत वाटून घ्या किंवा कुटून घ्या. त्याचा वास तेजस्वी, थोडा तिखट आणि आशादायक असावा.',
                    'पेस्ट परतून घ्या: एका मोठ्या कढईत किंवा खोलगट पॅनमध्ये मध्यम-उच्च आचेवर खाद्यतेल गरम करा. तुमची ताजी बनवलेली चिली पेस्ट घाला. सतत ढवळत रहा, त्याला तडतडू द्या आणि फुटू द्या. तुम्हाला मिरच्या आणि लसणाचे कच्चे, तीक्ष्ण कडा मऊ झालेले, पेस्ट किंचित गडद झालेली आणि तेल \'वेगळे\' होऊन पॅनच्या कडांभोवती जमा झालेले दिसायला हवे. याला सुमारे ८-१० मिनिटे लागतात. घाई करू नका; ही पायरी चवीचा पाया तयार करते.',
                    'सॉसचा आधार तयार करा: टोमॅटो केचप, बाटलीतील चिली सॉस, पाणी किंवा चिकन स्टॉक, साखर, मीठ आणि पांढरा व्हिनेगर घाला. सर्वकाही चांगले मिसळेपर्यंत ढवळून घ्या आणि हळू हळू उकळायला सुरुवात होईपर्यंत शिजवा. चवींना एकत्र मिसळण्यासाठी आणि अधिक खोल होण्यासाठी सुमारे ५ मिनिटे उकळू द्या. सुगंध गोड, आंबट आणि तिखट यांचा सुंदर मिश्रण असावा.',
                    'खेकडा शिजवा: आता मुख्य कार्यक्रम. तयार खेकड्याचे तुकडे उकळत्या सॉसमध्ये घाला. सर्व खेकड्याला त्या तेजस्वी लाल मिश्रणाने लेपण्यासाठी हळूवारपणे ढवळून घ्या. कढई झाका आणि सुमारे ८-१० मिनिटे शिजवा, किंवा खेकड्याचे कवच चमकदार नारंगी-लाल होईपर्यंत आणि मांस अपारदर्शक होईपर्यंत. जास्त शिजवू नका! रबरी खेकडा ही एक पाककृतीची शोकांतिका आहे.',
                    'सॉस घट्ट करा: कॉर्नस्टार्च स्लरीला एक जलद ढवळून घ्या (ते खाली बसते!). ते हळू हळू उकळत्या सॉसमध्ये ओता, सतत ढवळत रहा. सॉस कसे बदलते ते पहा, ते खेकड्याला सुंदरपणे चिकटून राहण्यासाठी चमकदार, आलिशान सुसंगततेमध्ये घट्ट होते. कच्च्या कॉर्नस्टार्चची चव जाण्यासाठी आणखी एक मिनिट उकळू द्या.',
                    'अंडं घाला: गॅस मंद करा. हळू हळू, पातळ धारेने, हलके फेटलेली अंडी सॉसमध्ये ओता, चमच्याने किंवा स्पॅटुल्याने हळूवारपणे ढवळत रहा. तुम्हाला अंड्याचे नाजूक, रेशमी रिबन तयार करायचे आहेत, स्क्रॅम्बल्ड तुकडे नाहीत. फक्त मिसळण्यासाठी पुरेसे ढवळून घ्या, नंतर गॅस बंद करा. उर्वरित उष्णता अंडं शिजवून पूर्ण करेल.',
                    'लगेच सर्व्ह करा: चिली क्रॅब एका मोठ्या सर्व्हिंग प्लेटमध्ये काढा. ताज्या कोथिंबीर आणि कापलेल्या कांद्याच्या पातीने उदारपणे सजवा. गरम गरम, ताज्या तळलेल्या मांतोऊ बन्सच्या ढिगाऱ्यासोबत सर्व्ह करा. गबाळे व्हा, खाण्यात मग्न व्हा आणि प्रत्येक अद्भुत घासाचा आनंद घ्या!'
                ]
            },
            'te': {
                title: 'చిల్లీ క్రాబ్',
                description: 'చిల్లీ క్రాబ్. ఆహా, ఆ పేరు వినగానే ఈస్ట్ కోస్ట్ లగూన్ ఫుడ్ సెంటర్ యొక్క తేమతో కూడిన గాలి, ప్లేట్ల చప్పుడు, మరియు ఆనందకరమైన, చిందరవందరగా తినే శబ్దం గుర్తుకు వస్తాయి. ఇది కేవలం ఒక వంటకం కాదు; ఇది సింగపూర్ సంస్కృతిలో ఒక భాగం, ఒక ఆచారం. నేను చిన్న కుక్‌గా ఉన్నప్పుడు, ధైర్యం తప్ప సాంకేతికత లేని రోజుల్లో, దీన్ని మొదటిసారి నిజంగా ప్రయత్నించినప్పుడు నాకు గుర్తుంది. నా అత్తయ్య మీయ్ దీన్ని లెక్కలేనన్ని సార్లు తయారుచేయడం చూశాను, ఆమె కదలికలు ఖచ్చితమైనవి, దాదాపు ఆచారబద్ధమైనవి. కానీ చూడటం మరియు చేయడం రెండు వేర్వేరు విషయాలు. నా మొదటి కొన్ని ప్రయత్నాలు? విపత్తులు. సాస్ చాలా నీరుగా ఉండేది, పీతకు అంటుకోవడానికి నిరాకరించేది, లేదా చాలా చిక్కగా జిగురుగా మారేది. మరియు పీత! ఓహ్, అతిగా ఉడికిన, రబ్బరు లాంటి పీత యొక్క భయం. అత్తయ్య మీయ్, ఆమె ఓపికగల ఆత్మకు ధన్యవాదాలు, కేవలం తల ఊపి, చిన్న, తెలిసిన చిరునవ్వును అందించి, ఆపై నా చేతిని సున్నితంగా నడిపించి, చిన్న ఉల్లిపాయల నుండి తీపిని ఎలా బయటకు తీయాలో, నూనెలో మిరప పేస్ట్ నిజంగా \'వికసించే\' సరైన క్షణాన్ని ఎలా అంచనా వేయాలో చూపించేది. ఈ సమతుల్యతను సరిగ్గా సాధించడానికి, ఈ వంటకం యొక్క ఆత్మను అర్థం చేసుకోవడానికి నిజాయితీగా సంవత్సరాలు పట్టింది. రహస్యం, ఏదైనా ఉంటే, మిరప పేస్ట్ మరియు మీ పీత యొక్క తాజాదనంలో ఉంది. ఆ ముందుగా తయారుచేసిన జాడీలను మర్చిపోండి; అవి పనికిరావు. మీకు ఎండు మిరపకాయల నుండి ఆ శక్తివంతమైన, సంక్లిష్టమైన వేడి, తాజా చిన్న ఉల్లిపాయల ఘాటైన తీపి, వెల్లుల్లి మరియు అల్లం యొక్క పదునైన రుచి, మరియు బెలకన్ యొక్క చిన్న, కీలకమైన గుసగుస కావాలి. కొందరు శుద్ధవాదులు పూర్తిగా టొమాటో ఆధారిత సాస్ కోసం వాదిస్తారు, కానీ నేను మంచి నాణ్యత గల బాటిల్ చిల్లీ సాస్ మరియు కెచప్, తాజా టొమాటోలతో కలిపి, ప్లేట్‌ను శుభ్రంగా నాకాలనిపించే ఆ ప్రత్యేకమైన పుల్లని-తీపి-కారం రుచిని ఇస్తుందని కనుగొన్నాను. మరియు గుడ్డు! చివరిలో ఆ సున్నితమైన, పట్టులాంటి గుడ్డు సుడి కేవలం ప్రదర్శన కోసం కాదు; ఇది ఒక అందమైన గొప్పదనాన్ని మరియు ఆకృతిని జోడిస్తుంది, సాస్‌ను బంధిస్తుంది. నెమ్మదిగా, సున్నితంగా కలుపుతూ, అది ఆ అందమైన, సన్నని రిబ్బన్‌లను ఏర్పరచడానికి అనుమతించడం ట్రిక్. కేవలం దానిని పడేయకండి, లేకపోతే మీ పీతలో స్క్రాంబుల్డ్ గుడ్డుతో ముగుస్తుంది. నన్ను నమ్మండి, నేను అక్కడ ఉన్నాను. ఈ వంటకం పంచుకోవడానికి ఉద్దేశించబడింది, మీ చేతులతో, ఆ అద్భుతమైన, మండుతున్న ఎర్రటి సాస్‌లో మోచేతులు లోతుగా మునిగి తినడానికి ఉద్దేశించబడింది. ఇది ఒక సామూహిక అనుభవం, ఒక వేడుక. మీకు చాలా నాప్‌కిన్‌లు, బహుశా ఒక బిబ్ కూడా, మరియు ఖచ్చితంగా ఆ మెత్తటి, వేయించిన మంటౌ బన్‌ల స్టాక్ అవసరం. అవి ఐచ్ఛికం కాదు; ఆ అద్భుతమైన సాస్ యొక్క ప్రతి చివరి చుక్కను తుడిచిపెట్టడానికి అవి అవసరం. ఆ గొప్ప, కారంగా, కొద్దిగా తీపి సాస్‌లో పూత పూసిన జ్యుసి పీత ముక్కను చీల్చి, ఆపై సాస్‌లో నానబెట్టిన మంటౌతో దాన్ని తినడం లాంటిది ఏదీ లేదు. ఇది చిందరవందరగా ఉంటుంది, ఇది బిగ్గరగా ఉంటుంది, మరియు ఇది ఖచ్చితంగా పరిపూర్ణంగా ఉంటుంది. పీత లోపలికి వెళ్ళిన తర్వాత స్టవ్ నుండి దూరంగా వెళ్ళకండి; అది త్వరగా ఉడుకుతుంది. దానిపై ఒక కన్ను వేసి ఉంచండి, మరియు మీరు నిజంగా పాట పాడే భోజనంతో బహుమతి పొందుతారు.',
                ingredients: [
                    { item: 'తాజా మట్టి పీతలు', amount: '2 (సుమారు 800గ్రా - 1కిలో ఒక్కొక్కటి), శుభ్రం చేసి పగలగొట్టినవి' },
                    { item: 'వంట నూనె', amount: 'అర కప్పు' },
                    { item: 'వెల్లుల్లి', amount: '8 రెబ్బలు, సన్నగా తరిగినవి' },
                    { item: 'అల్లం', amount: '2 అంగుళాల ముక్క, తురిమినది' },
                    { item: 'చిన్న ఉల్లిపాయలు', amount: '4, సన్నగా తరిగినవి' },
                    { item: 'ఎండు మిరపకాయలు', amount: '15-20, వేడి నీటిలో నానబెట్టి, గింజలు తీసినవి (కారం ప్రకారం సర్దుబాటు చేయండి)' },
                    { item: 'తాజా ఎర్ర మిరపకాయలు', amount: '5-6, గింజలు తీసినవి (రంగు మరియు తాజా కారం కోసం)' },
                    { item: 'బెలకన్ (రొయ్యల పేస్ట్)', amount: '1 టీస్పూన్, కాల్చినది' },
                    { item: 'టొమాటో కెచప్', amount: 'అర కప్పు' },
                    { item: 'బాటిల్ చిల్లీ సాస్', amount: 'పావు కప్పు (ఉదా. మాగీ లేదా అలాంటి తీపి చిల్లీ సాస్)' },
                    { item: 'నీరు లేదా చికెన్ స్టాక్', amount: '1.5 కప్పులు' },
                    { item: 'చక్కెర', amount: '2-3 టేబుల్ స్పూన్లు (రుచికి సరిపడా సర్దుబాటు చేయండి)' },
                    { item: 'ఉప్పు', amount: '1 టీస్పూన్ (లేదా రుచికి సరిపడా)' },
                    { item: 'తెల్ల వెనిగర్', amount: '1 టేబుల్ స్పూన్' },
                    { item: 'కార్న్‌స్టార్చ్', amount: '2 టేబుల్ స్పూన్లు, 4 టేబుల్ స్పూన్ల నీటితో కలిపినది (స్లర్రీ)' },
                    { item: 'గుడ్లు', amount: '2 పెద్దవి, తేలికగా కొట్టినవి' },
                    { item: 'కొత్తిమీర ఆకులు', amount: 'అలంకరణ కోసం, తరిగినవి' },
                    { item: 'స్ప్రింగ్ ఆనియన్స్', amount: 'అలంకరణ కోసం, ముక్కలుగా చేసినవి' },
                    { item: 'వేయించిన మంటౌ బన్స్', amount: 'వడ్డించడానికి' }
                ],
                instructions: [
                    'పీతను సిద్ధం చేయండి: ముందుగా, స్టార్! మీ పీతలను తీసుకోండి. వాటిని పారే నీటి కింద పూర్తిగా శుభ్రం చేయండి. షెల్లు మరియు పీత కాళ్ళను పగలగొట్టడానికి బలమైన క్లీవర్ లేదా భారీ కత్తిని ఉపయోగించండి. సిగ్గుపడకండి; సాస్ ప్రతి మూలకూ చేరాలని మీరు కోరుకుంటారు. శరీరాన్ని సగం లేదా పావు వంతులుగా వేరు చేయండి, కాళ్ళు మరియు పీత కాళ్ళను అటాచ్ చేసి ఉంచండి. పక్కన పెట్టండి.',
                    'చిల్లీ పేస్ట్ తయారు చేయండి: ఇక్కడే మాయ మొదలవుతుంది. ఫుడ్ ప్రాసెసర్‌లో లేదా రోలు మరియు రోకలితో, నానబెట్టిన ఎండు మిరపకాయలు, తాజా ఎర్ర మిరపకాయలు, చిన్న ఉల్లిపాయలు, వెల్లుల్లి, అల్లం మరియు కాల్చిన బెలకన్‌ను కలపండి. సాపేక్షంగా మృదువైన, సువాసనగల పేస్ట్ వచ్చేవరకు బ్లెండ్ చేయండి లేదా దంచండి. ఇది శక్తివంతంగా, కొద్దిగా ఘాటుగా మరియు ఆశాజనకంగా వాసన చూడాలి.',
                    'పేస్ట్‌ను వేయించండి: పెద్ద వోక్ లేదా లోతైన పాన్‌లో మధ్యస్థ-అధిక వేడి మీద వంట నూనెను వేడి చేయండి. మీ తాజాగా తయారుచేసిన చిల్లీ పేస్ట్‌ను జోడించండి. నిరంతరం కలుపుతూ, అది చిటపటలాడటానికి మరియు పేలడానికి అనుమతించండి. మిరపకాయలు మరియు వెల్లుల్లి యొక్క పచ్చి, పదునైన అంచులు మృదువుగా మారడానికి, పేస్ట్ కొద్దిగా ముదురు రంగులోకి మారడానికి, మరియు నూనె \'విడిపోయి\' పాన్ అంచుల చుట్టూ సేకరించడం ప్రారంభించడానికి మీరు చూస్తున్నారు. దీనికి సుమారు 8-10 నిమిషాలు పడుతుంది. తొందరపడకండి; ఈ దశ రుచికి పునాదిని నిర్మిస్తుంది.',
                    'సాస్ బేస్‌ను నిర్మించండి: టొమాటో కెచప్, బాటిల్ చిల్లీ సాస్, నీరు లేదా చికెన్ స్టాక్, చక్కెర, ఉప్పు మరియు తెల్ల వెనిగర్‌ను పోయండి. అన్నీ బాగా కలిసే వరకు కలుపుతూ, అది నెమ్మదిగా బుడగలు రావడం ప్రారంభించే వరకు ఉడకనివ్వండి. రుచులు కలిసిపోయి లోతుగా మారడానికి సుమారు 5 నిమిషాలు ఉడకనివ్వండి. సువాసన తీపి, పుల్లని మరియు కారంగా ఉండే అందమైన మిశ్రమంగా ఉండాలి.',
                    'పీతను ఉడికించండి: ఇప్పుడు ప్రధాన కార్యక్రమం. సిద్ధం చేసిన పీత ముక్కలను ఉడుకుతున్న సాస్‌లో జోడించండి. ఆ అద్భుతమైన ఎర్రటి మిశ్రమంతో అన్ని పీతలను పూత పూయడానికి సున్నితంగా కలుపుకోండి. వోక్‌ను మూతపెట్టి, సుమారు 8-10 నిమిషాలు ఉడకనివ్వండి, లేదా పీత షెల్లు శక్తివంతమైన నారింజ-ఎరుపు రంగులోకి మారి, మాంసం అపారదర్శకంగా మారే వరకు. అతిగా ఉడికించవద్దు! రబ్బరు పీత ఒక పాక విషాదం.',
                    'సాస్‌ను చిక్కగా చేయండి: కార్న్‌స్టార్చ్ స్లర్రీని త్వరగా కదిలించండి (అది స్థిరపడుతుంది!). దానిని నెమ్మదిగా ఉడుకుతున్న సాస్‌లో పోయండి, నిరంతరం కలుపుతూ ఉండండి. సాస్ ఎలా మారుతుందో చూడండి, పీతకు అందంగా అంటుకునే మెరిసే, విలాసవంతమైన స్థిరత్వానికి చిక్కగా మారుతుంది. పచ్చి కార్న్‌స్టార్చ్ రుచిని వండటానికి మరో నిమిషం పాటు బుడగలు రానివ్వండి.',
                    'గుడ్డును జోడించండి: వేడిని తక్కువకు తగ్గించండి. నెమ్మదిగా, సన్నని ప్రవాహంలో, తేలికగా కొట్టిన గుడ్లను సాస్‌లో పోయండి, అదే సమయంలో ఒక చెంచా లేదా గరిటెతో సున్నితంగా కలుపుతూ ఉండండి. మీరు స్క్రాంబుల్డ్ ముక్కలు కాకుండా సున్నితమైన, పట్టులాంటి గుడ్డు రిబ్బన్‌లను సృష్టించాలనుకుంటున్నారు. కలపడానికి సరిపడా కదిలించండి, ఆపై వేడిని ఆపివేయండి. మిగిలిన వేడి గుడ్డును వండటం పూర్తి చేస్తుంది.',
                    'వెంటనే వడ్డించండి: చిల్లీ క్రాబ్‌ను పెద్ద సర్వింగ్ ప్లేట్‌కు మార్చండి. తాజా కొత్తిమీర ఆకులు మరియు ముక్కలుగా చేసిన స్ప్రింగ్ ఆనియన్స్‌తో ఉదారంగా అలంకరించండి. తాజాగా వేయించిన మంటౌ బన్‌ల పెద్ద కుప్పతో వేడివేడిగా వడ్డించండి. చిందరవందరగా తినండి, లోతుగా తవ్వండి మరియు ప్రతి అద్భుతమైన కాటును ఆస్వాదించండి!'
                ]
            },
            'ta': {
                title: 'சில்லி கிராப்',
                description: 'சில்லி கிராப். ஆஹா, அந்தப் பெயரே ஈஸ்ட் கோஸ்ட் லாகூன் உணவு மையத்தின் ஈரப்பதமான காற்று, தட்டுகளின் சத்தம், மற்றும் மகிழ்ச்சியான, குழப்பமான உறிஞ்சும் ஒலிகளை நினைவூட்டுகிறது. இது வெறும் ஒரு உணவு மட்டுமல்ல; இது ஒரு சிங்கப்பூர் நிறுவனம், ஒரு சடங்கு. நான் ஒரு இளம் சமையல்காரனாக இருந்தபோது, தைரியம் மட்டுமே இருந்து நுட்பம் இல்லாத நாட்களில், இதை முதன்முதலில் செய்ய முயற்சித்தபோது எனக்கு நினைவிருக்கிறது. என் அத்தை மேய் இதை எண்ணற்ற முறை சமைப்பதைப் பார்த்திருக்கிறேன், அவளது அசைவுகள் துல்லியமானவை, கிட்டத்தட்ட சடங்குத்தனமானவை. ஆனால் பார்ப்பதும் செய்வதும் இரண்டு வெவ்வேறு விஷயங்கள். என் முதல் சில முயற்சிகள்? பேரழிவுகள். சாஸ் ஒன்று மிகவும் நீர்த்திருந்தது, நண்டுடன் ஒட்ட மறுத்தது, அல்லது மிகவும் கெட்டியாகி ஒரு பிசுபிசுப்பான குழப்பமாக மாறியது. மற்றும் நண்டு! ஓ, அதிகமாக சமைத்த, ரப்பர் போன்ற நண்டின் பயங்கரம். அத்தை மேய், அவளது பொறுமையான ஆன்மாவுக்கு நன்றி, தலையை அசைத்து, ஒரு சிறிய, அறிந்த புன்னகையை அளித்து, பின்னர் என் கையை மெதுவாக வழிநடத்தி, சின்ன வெங்காயத்திலிருந்து இனிப்பை எப்படி வெளிக்கொணர்வது, மிளகாய் விழுது எண்ணெயில் உண்மையாக \'மலரும்\' சரியான தருணத்தை எப்படி மதிப்பிடுவது என்று காட்டினாள். இந்த சமநிலையை சரியாகப் பெற, இந்த உணவின் ஆன்மாவைப் புரிந்துகொள்ள பல ஆண்டுகள் ஆனது, உண்மையிலேயே. ரகசியம், ஏதேனும் இருந்தால், மிளகாய் விழுது மற்றும் உங்கள் நண்டின் புத்துணர்ச்சியில் உள்ளது. அந்த முன் தயாரிக்கப்பட்ட ஜாடிகளை மறந்துவிடுங்கள்; அவை சரியாக வராது. காய்ந்த மிளகாயிலிருந்து அந்த துடிப்பான, சிக்கலான காரம், புதிய சின்ன வெங்காயத்தின் காரமான இனிப்பு, பூண்டு மற்றும் இஞ்சியின் கூர்மையான சுவை, மற்றும் பெலகனின் ஒரு சிறிய, முக்கியமான கிசுகிசுப்பு உங்களுக்குத் தேவை. சில தூய்மைவாதிகள் முற்றிலும் தக்காளி அடிப்படையிலான சாஸை வாதிடுகிறார்கள், ஆனால் நல்ல தரமான பாட்டில் சில்லி சாஸ் மற்றும் கெட்சப், புதிய தக்காளியுடன் சேர்த்து, தட்டை சுத்தமாக நக்கத் தூண்டும் அந்த தனித்துவமான புளிப்பு-இனிப்பு-காரமான ஆழத்தை அளிக்கிறது என்று நான் கண்டறிந்துள்ளேன். மற்றும் முட்டை! இறுதியில் அந்த மென்மையான, பட்டு போன்ற முட்டை சுழல் வெறும் காட்சிக்கு மட்டுமல்ல; இது ஒரு அழகான செழுமையையும் அமைப்பையும் சேர்க்கிறது, சாஸை ஒன்றாக பிணைக்கிறது. மெதுவாக, மெதுவாக கிளறி, அந்த அழகான, மெல்லிய ரிப்பன்களை உருவாக்க அனுமதிப்பதுதான் தந்திரம். அதை அப்படியே கொட்டிவிடாதீர்கள், இல்லையெனில் உங்கள் நண்டில் முட்டை பொரியலுடன் முடிவடையும். என்னை நம்புங்கள், நான் அங்கே இருந்திருக்கிறேன். இந்த உணவு பகிர்ந்து கொள்ளப்பட வேண்டும், உங்கள் கைகளால், அந்த அற்புதமான, தீப்பிழம்பு சிவப்பு சாஸில் முழங்கைகள் ஆழமாக மூழ்கி உண்ணப்பட வேண்டும். இது ஒரு சமூக அனுபவம், ஒரு கொண்டாட்டம். உங்களுக்கு நிறைய நாப்கின்கள், ஒருவேளை ஒரு பிப் கூட, மற்றும் நிச்சயமாக அந்த பஞ்சுபோன்ற, பொரித்த மாண்டோ பன்களின் ஒரு அடுக்கு தேவைப்படும். அவை விருப்பமானவை அல்ல; அந்த நம்பமுடியாத சாஸின் ஒவ்வொரு கடைசி துளியையும் துடைக்க அவை அவசியம். அந்த செழுமையான, காரமான, சற்று இனிப்பான சாஸில் பூசப்பட்ட ஒரு சுவையான நண்டுத் துண்டைப் பிழிந்து, பின்னர் சாஸில் ஊறிய மாண்டோவுடன் அதைத் துரத்துவது போல் வேறு எதுவும் இல்லை. இது குழப்பமானது, இது சத்தமானது, மற்றும் இது முற்றிலும் சரியானது. நண்டு உள்ளே சென்றவுடன் அடுப்பிலிருந்து விலகிச் செல்லாதீர்கள்; அது வேகமாக சமைக்கிறது. அதைக் கவனியுங்கள், நீங்கள் உண்மையிலேயே பாடும் ஒரு உணவுடன் வெகுமதி பெறுவீர்கள்.',
                ingredients: [
                    { item: 'புதிய சேற்று நண்டுகள்', amount: '2 (தோராயமாக 800கி - 1கி ஒவ்வொன்றும்), சுத்தம் செய்து உடைக்கப்பட்டவை' },
                    { item: 'சமையல் எண்ணெய்', amount: 'அரை கப்' },
                    { item: 'பூண்டு', amount: '8 பற்கள், பொடியாக நறுக்கியது' },
                    { item: 'இஞ்சி', amount: '2 அங்குல துண்டு, துருவியது' },
                    { item: 'சின்ன வெங்காயம்', amount: '4, பொடியாக நறுக்கியது' },
                    { item: 'காய்ந்த சிவப்பு மிளகாய்', amount: '15-20, வெந்நீரில் ஊறவைத்து, விதை நீக்கப்பட்டது (காரத்திற்கு ஏற்ப சரிசெய்யவும்)' },
                    { item: 'புதிய சிவப்பு மிளகாய்', amount: '5-6, விதை நீக்கப்பட்டது (நிறம் மற்றும் புதிய காரத்திற்கு)' },
                    { item: 'பெலகன் (இறால் பேஸ்ட்)', amount: '1 தேக்கரண்டி, வறுத்தது' },
                    { item: 'தக்காளி கெட்சப்', amount: 'அரை கப்' },
                    { item: 'பாட்டில் சில்லி சாஸ்', amount: 'கால் கப் (எ.கா., மேகி அல்லது ஒத்த இனிப்பு சில்லி சாஸ்)' },
                    { item: 'தண்ணீர் அல்லது சிக்கன் ஸ்டாக்', amount: '1.5 கப்' },
                    { item: 'சர்க்கரை', amount: '2-3 தேக்கரண்டி (சுவைக்கு ஏற்ப சரிசெய்யவும்)' },
                    { item: 'உப்பு', amount: '1 தேக்கரண்டி (அல்லது சுவைக்கு ஏற்ப)' },
                    { item: 'வெள்ளை வினிகர்', amount: '1 தேக்கரண்டி' },
                    { item: 'கார்ன்ஸ்டார்ச்', amount: '2 தேக்கரண்டி, 4 தேக்கரண்டி தண்ணீருடன் கலக்கப்பட்டது (ஸ்லரி)' },
                    { item: 'முட்டைகள்', amount: '2 பெரியது, லேசாக அடித்தது' },
                    { item: 'கொத்தமல்லி இலைகள்', amount: 'அலங்கரிக்க, நறுக்கியது' },
                    { item: 'வெங்காயத்தாள்', amount: 'அலங்கரிக்க, நறுக்கியது' },
                    { item: 'பொரித்த மாண்டோ பன்கள்', amount: 'பரிமாற' }
                ],
                instructions: [
                    'நண்டை தயார் செய்யவும்: முதலில், நட்சத்திரம்! உங்கள் நண்டுகளைப் பெறுங்கள். ஓடும் நீரின் கீழ் அவற்றை நன்கு சுத்தம் செய்யவும். ஓடுகள் மற்றும் நகங்களை உடைக்க ஒரு உறுதியான கத்தி அல்லது கனமான கத்தியைப் பயன்படுத்தவும். வெட்கப்பட வேண்டாம்; சாஸ் ஒவ்வொரு மூலை முடுக்கிலும் செல்ல வேண்டும் என்று நீங்கள் விரும்புகிறீர்கள். உடலை பாதியாக அல்லது கால் பகுதிகளாகப் பிரிக்கவும், கால்கள் மற்றும் நகங்களை இணைத்து வைக்கவும். ஒதுக்கி வைக்கவும்.',
                    'சில்லி விழுது தயாரிக்கவும்: இங்கிருந்துதான் மாயாஜாலம் தொடங்குகிறது. ஒரு உணவு செயலி அல்லது உரல் மற்றும் உலக்கையைப் பயன்படுத்தி, ஊறவைத்த காய்ந்த சிவப்பு மிளகாய், புதிய சிவப்பு மிளகாய், சின்ன வெங்காயம், பூண்டு, இஞ்சி மற்றும் வறுத்த பெலகன் ஆகியவற்றைச் சேர்க்கவும். ஒப்பீட்டளவில் மென்மையான, நறுமணமுள்ள விழுது கிடைக்கும் வரை அரைக்கவும் அல்லது இடிக்கவும். இது துடிப்பானதாகவும், சற்று காரமாகவும், நம்பிக்கைக்குரியதாகவும் வாசனை வர வேண்டும்.',
                    'விழுதை வதக்கவும்: ஒரு பெரிய வாணலி அல்லது ஆழமான பாத்திரத்தில் நடுத்தர-அதிக தீயில் சமையல் எண்ணெயை சூடாக்கவும். நீங்கள் புதிதாக தயாரித்த சில்லி விழுதைச் சேர்க்கவும். தொடர்ந்து கிளறி, அது சத்தம் போட்டு வெடிக்க விடவும். மிளகாய் மற்றும் பூண்டின் பச்சையான, கூர்மையான முனைகள் மென்மையாவதற்கும், விழுது சற்று கருமையாவதற்கும், எண்ணெய் \'பிரிந்து\' பாத்திரத்தின் ஓரங்களில் சேரத் தொடங்குவதற்கும் நீங்கள் பார்க்கிறீர்கள். இதற்கு சுமார் 8-10 நிமிடங்கள் ஆகும். அவசரப்பட வேண்டாம்; இந்த படி சுவையின் அடித்தளத்தை உருவாக்குகிறது.',
                    'சாஸ் அடிப்படையை உருவாக்கவும்: தக்காளி கெட்சப், பாட்டில் சில்லி சாஸ், தண்ணீர் அல்லது சிக்கன் ஸ்டாக், சர்க்கரை, உப்பு மற்றும் வெள்ளை வினிகரை ஊற்றவும். அனைத்தும் நன்கு கலந்து மெதுவாக குமிழ ஆரம்பிக்கும் வரை கிளறவும். சுவைகள் கலந்து ஆழமடைய சுமார் 5 நிமிடங்கள் கொதிக்க விடவும். நறுமணம் இனிப்பு, புளிப்பு மற்றும் காரமான ஒரு அழகான கலவையாக இருக்க வேண்டும்.',
                    'நண்டை சமைக்கவும்: இப்போது முக்கிய நிகழ்வு. தயாரிக்கப்பட்ட நண்டு துண்டுகளை கொதிக்கும் சாஸில் சேர்க்கவும். அந்த அற்புதமான சிவப்பு கலவையுடன் அனைத்து நண்டுகளையும் பூச மெதுவாக கிளறவும். வாணலியை மூடி, சுமார் 8-10 நிமிடங்கள் சமைக்கவும், அல்லது நண்டு ஓடுகள் துடிப்பான ஆரஞ்சு-சிவப்பு நிறமாக மாறி, சதை ஒளிபுகாவாக மாறும் வரை. அதிகமாக சமைக்க வேண்டாம்! ரப்பர் நண்டு ஒரு சமையல் சோகம்.',
                    'சாஸை கெட்டியாக்கவும்: கார்ன்ஸ்டார்ச் ஸ்லரியை ஒரு விரைவான கிளறல் கொடுக்கவும் (அது அடியில் தங்கும்!). அதை மெதுவாக கொதிக்கும் சாஸில் ஊற்றவும், தொடர்ந்து கிளறவும். சாஸ் எப்படி மாறுகிறது என்று பாருங்கள், நண்டுடன் அழகாக ஒட்டிக்கொள்ளும் ஒரு பளபளப்பான, ஆடம்பரமான நிலைத்தன்மைக்கு கெட்டியாகிறது. பச்சையான கார்ன்ஸ்டார்ச் சுவை வெளியேற மற்றொரு நிமிடம் குமிழ விடவும்.',
                    'முட்டையை சேர்க்கவும்: தீயை குறைக்கவும். மெதுவாக, ஒரு மெல்லிய நீரோட்டத்தில், லேசாக அடித்த முட்டைகளை சாஸில் ஊற்றவும், அதே நேரத்தில் ஒரு கரண்டி அல்லது ஸ்பேட்டூலால் மெதுவாக கிளறவும். நீங்கள் முட்டை பொரியல் துண்டுகள் அல்ல, மென்மையான, பட்டு போன்ற முட்டை ரிப்பன்களை உருவாக்க விரும்புகிறீர்கள். கலக்க போதுமான அளவு கிளறவும், பின்னர் தீயை அணைக்கவும். மீதமுள்ள வெப்பம் முட்டையை சமைப்பதை முடிக்கும்.',
                    'உடனடியாக பரிமாறவும்: சில்லி கிராப்பை ஒரு பெரிய பரிமாறும் தட்டுக்கு மாற்றவும். புதிய கொத்தமல்லி இலைகள் மற்றும் நறுக்கிய வெங்காயத்தாள் கொண்டு தாராளமாக அலங்கரிக்கவும். புதிதாக பொரித்த மாண்டோ பன்களின் ஒரு பெரிய குவியலுடன் சூடாக பரிமாறவும். குழப்பமாக இருங்கள், உள்ளே தோண்டி, ஒவ்வொரு அற்புதமான கடியையும் அனுபவிக்கவும்!'
                ]
            },
            'kn': {
                title: 'ಚಿಲ್ಲಿ ಕ್ರಾಬ್',
                description: 'ಚಿಲ್ಲಿ ಕ್ರಾಬ್. ಆಹಾ, ಈ ಹೆಸರೇ ಈಸ್ಟ್ ಕೋಸ್ಟ್ ಲಗೂನ್ ಫುಡ್ ಸೆಂಟರ್‌ನ ಆರ್ದ್ರ ವಾತಾವರಣ, ತಟ್ಟೆಗಳ ಸದ್ದು ಮತ್ತು ಸಂತೋಷದ, ಅಸ್ತವ್ಯಸ್ತವಾದ ಸಪ್ಪಳವನ್ನು ನೆನಪಿಸುತ್ತದೆ. ಇದು ಕೇವಲ ಒಂದು ಖಾದ್ಯವಲ್ಲ; ಇದು ಸಿಂಗಾಪುರದ ಒಂದು ಸಂಸ್ಥೆ, ಒಂದು ಸಂಪ್ರದಾಯ. ನಾನು ಚಿಕ್ಕ ಅಡುಗೆಯವನಾಗಿದ್ದಾಗ, ಕೇವಲ ಧೈರ್ಯವಿದ್ದಾಗ ಮತ್ತು ತಂತ್ರಜ್ಞಾನವಿಲ್ಲದಿದ್ದಾಗ, ಅದನ್ನು ಮೊದಲ ಬಾರಿಗೆ ಮಾಡಲು ಪ್ರಯತ್ನಿಸಿದ್ದು ನನಗೆ ನೆನಪಿದೆ. ನನ್ನ ಚಿಕ್ಕಮ್ಮ ಮೇಯ್ ಅದನ್ನು ಅಸಂಖ್ಯಾತ ಬಾರಿ ತಯಾರಿಸುವುದನ್ನು ನಾನು ನೋಡಿದ್ದೆ, ಅವಳ ಚಲನೆಗಳು ನಿಖರವಾಗಿದ್ದವು, ಬಹುತೇಕ ವಿಧಿವಿಧಾನದಂತೆ. ಆದರೆ ನೋಡುವುದು ಮತ್ತು ಮಾಡುವುದು ಎರಡು ವಿಭಿನ್ನ ವಿಷಯಗಳು. ನನ್ನ ಮೊದಲ ಕೆಲವು ಪ್ರಯತ್ನಗಳು? ವಿಪತ್ತುಗಳು. ಸಾಸ್ ತುಂಬಾ ನೀರಾಗಿತ್ತು, ಏಡಿಗೆ ಅಂಟಿಕೊಳ್ಳಲು ನಿರಾಕರಿಸುತ್ತಿತ್ತು, ಅಥವಾ ತುಂಬಾ ದಪ್ಪವಾಗಿ ಗಟ್ಟಿಯಾದ ಗೊಂದಲವಾಗಿ ಮಾರ್ಪಟ್ಟಿತ್ತು. ಮತ್ತು ಏಡಿ! ಓಹ್, ಅತಿಯಾಗಿ ಬೇಯಿಸಿದ, ರಬ್ಬರ್‌ನಂತಹ ಏಡಿಯ ಭಯಾನಕತೆ. ಚಿಕ್ಕಮ್ಮ ಮೇಯ್, ಅವಳ ತಾಳ್ಮೆಯ ಆತ್ಮಕ್ಕೆ ಆಶೀರ್ವಾದ, ಕೇವಲ ತಲೆ ಅಲ್ಲಾಡಿಸುತ್ತಿದ್ದಳು, ಒಂದು ಸಣ್ಣ, ತಿಳಿದಿರುವ ನಗುವನ್ನು ನೀಡುತ್ತಿದ್ದಳು, ಮತ್ತು ನಂತರ ನಿಧಾನವಾಗಿ ನನ್ನ ಕೈಗೆ ಮಾರ್ಗದರ್ಶನ ನೀಡುತ್ತಿದ್ದಳು, ಶಾಲೋಟ್‌ಗಳಿಂದ ಸಿಹಿಯನ್ನು ಹೇಗೆ ಹೊರತೆಗೆಯುವುದು, ಮೆಣಸಿನಕಾಯಿ ಪೇಸ್ಟ್ ಎಣ್ಣೆಯಲ್ಲಿ ನಿಜವಾಗಿಯೂ \'ಅರಳುವ\' ಪರಿಪೂರ್ಣ ಕ್ಷಣವನ್ನು ಹೇಗೆ ನಿರ್ಣಯಿಸುವುದು ಎಂದು ತೋರಿಸುತ್ತಿದ್ದಳು. ಪ್ರಾಮಾಣಿಕವಾಗಿ ಹೇಳಬೇಕೆಂದರೆ, ಆ ಸಮತೋಲನವನ್ನು ಸರಿಯಾಗಿ ಪಡೆಯಲು, ಖಾದ್ಯದ ಆತ್ಮವನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ವರ್ಷಗಳು ಬೇಕಾಯಿತು. ರಹಸ್ಯ, ಏನಾದರೂ ಇದ್ದರೆ, ಅದು ಮೆಣಸಿನಕಾಯಿ ಪೇಸ್ಟ್ ಮತ್ತು ನಿಮ್ಮ ಏಡಿಯ ತಾಜಾತನದಲ್ಲಿದೆ. ಆ ಪೂರ್ವಸಿದ್ಧ ಜಾರ್‌ಗಳನ್ನು ಮರೆತುಬಿಡಿ; ಅವು ಕೆಲಸ ಮಾಡುವುದಿಲ್ಲ. ನಿಮಗೆ ಒಣ ಮೆಣಸಿನಕಾಯಿಗಳಿಂದ ಆ ರೋಮಾಂಚಕ, ಸಂಕೀರ್ಣವಾದ ಖಾರ, ತಾಜಾ ಶಾಲೋಟ್‌ಗಳ ತೀಕ್ಷ್ಣವಾದ ಸಿಹಿ, ಬೆಳ್ಳುಳ್ಳಿ ಮತ್ತು ಶುಂಠಿಯ ತೀಕ್ಷ್ಣವಾದ ಕಚ್ಚುವಿಕೆ, ಮತ್ತು ಬೆಲಾಕನ್‌ನ ಒಂದು ಸಣ್ಣ, ನಿರ್ಣಾಯಕ ಪಿಸುಮಾತು ಬೇಕು. ಕೆಲವು ಶುದ್ಧತಾವಾದಿಗಳು ಸಂಪೂರ್ಣವಾಗಿ ಟೊಮೆಟೊ ಆಧಾರಿತ ಸಾಸ್‌ಗಾಗಿ ವಾದಿಸುತ್ತಾರೆ, ಆದರೆ ಉತ್ತಮ ಗುಣಮಟ್ಟದ ಬಾಟಲಿ ಚಿಲ್ಲಿ ಸಾಸ್ ಮತ್ತು ಕೆಚಪ್‌ನ ವಿವೇಚನಾಯುಕ್ತ ಮಿಶ್ರಣವು, ತಾಜಾ ಟೊಮೆಟೊಗಳೊಂದಿಗೆ, ನಿಮಗೆ ಪ್ಲೇಟ್ ಅನ್ನು ನೆಕ್ಕಲು ಬಯಸುವಂತಹ ವಿಶಿಷ್ಟವಾದ ಹುಳಿ-ಸಿಹಿ-ಖಾರದ ಆಳವನ್ನು ನೀಡುತ್ತದೆ ಎಂದು ನಾನು ಕಂಡುಕೊಂಡಿದ್ದೇನೆ. ಮತ್ತು ಮೊಟ್ಟೆ! ಕೊನೆಯಲ್ಲಿ ಆ ಸೂಕ್ಷ್ಮ, ರೇಷ್ಮೆಯಂತಹ ಮೊಟ್ಟೆಯ ಸುರುಳಿ ಕೇವಲ ಪ್ರದರ್ಶನಕ್ಕಲ್ಲ; ಇದು ಸುಂದರವಾದ ಸಮೃದ್ಧಿ ಮತ್ತು ವಿನ್ಯಾಸವನ್ನು ಸೇರಿಸುತ್ತದೆ, ಸಾಸ್ ಅನ್ನು ಒಟ್ಟಿಗೆ ಬಂಧಿಸುತ್ತದೆ. ತಂತ್ರವೆಂದರೆ ಅದನ್ನು ನಿಧಾನವಾಗಿ, ನಿಧಾನವಾಗಿ ಬೆರೆಸುತ್ತಾ ಸುರಿಯುವುದು, ಅದು ಆ ಸುಂದರವಾದ, ತೆಳುವಾದ ರಿಬ್ಬನ್‌ಗಳನ್ನು ರೂಪಿಸಲು ಬಿಡುವುದು. ಅದನ್ನು ಕೇವಲ ಸುರಿಯಬೇಡಿ, ಇಲ್ಲದಿದ್ದರೆ ನಿಮ್ಮ ಏಡಿಯಲ್ಲಿ ಸ್ಕ್ರ್ಯಾಂಬಲ್ಡ್ ಮೊಟ್ಟೆ ಸಿಗುತ್ತದೆ. ನನ್ನನ್ನು ನಂಬಿ, ನಾನು ಅಲ್ಲಿಗೆ ಹೋಗಿದ್ದೇನೆ. ಈ ಖಾದ್ಯವನ್ನು ಹಂಚಿಕೊಳ್ಳಲು, ನಿಮ್ಮ ಕೈಗಳಿಂದ, ಆ ಅದ್ಭುತ, ಉರಿಯುತ್ತಿರುವ ಕೆಂಪು ಸಾಸ್‌ನಲ್ಲಿ ಮೊಣಕೈಯನ್ನು ಆಳವಾಗಿ ಅದ್ದಿ ತಿನ್ನಲು ಉದ್ದೇಶಿಸಲಾಗಿದೆ. ಇದು ಒಂದು ಸಮುದಾಯದ ಅನುಭವ, ಒಂದು ಆಚರಣೆ. ನಿಮಗೆ ಸಾಕಷ್ಟು ನ್ಯಾಪ್ಕಿನ್‌ಗಳು ಬೇಕಾಗುತ್ತವೆ, ಬಹುಶಃ ಒಂದು ಬಿಬ್ ಕೂಡ, ಮತ್ತು ಖಂಡಿತವಾಗಿಯೂ ಆ ನಯವಾದ, ಕರಿದ ಮಾಂಟೌ ಬನ್‌ಗಳ ರಾಶಿ. ಅವು ಐಚ್ಛಿಕವಲ್ಲ; ಆ ಅದ್ಭುತ ಸಾಸ್‌ನ ಪ್ರತಿಯೊಂದು ಕೊನೆಯ ಹನಿಗಳನ್ನು ಒರೆಸಲು ಅವು ಅತ್ಯಗತ್ಯ. ಆ ಶ್ರೀಮಂತ, ಖಾರ, ಸ್ವಲ್ಪ ಸಿಹಿ ಸಾಸ್‌ನಲ್ಲಿ ಲೇಪಿತವಾದ ಏಡಿಯ ರಸಭರಿತ ತುಂಡನ್ನು ಹರಿದು ತಿನ್ನುವುದು, ಮತ್ತು ನಂತರ ಸಾಸ್‌ನಲ್ಲಿ ನೆನೆಸಿದ ಮಾಂಟೌನೊಂದಿಗೆ ಅದನ್ನು ಬೆನ್ನಟ್ಟುವುದು ಬೇರೆ ಯಾವುದಕ್ಕೂ ಹೋಲಿಸಲಾಗದು. ಇದು ಅಸ್ತವ್ಯಸ್ತವಾಗಿದೆ, ಇದು ಗದ್ದಲಮಯವಾಗಿದೆ, ಮತ್ತು ಇದು ಸಂಪೂರ್ಣವಾಗಿ ಪರಿಪೂರ್ಣವಾಗಿದೆ. ಏಡಿ ಒಳಗೆ ಹೋದ ನಂತರ ಒಲೆಯಿಂದ ದೂರ ಹೋಗಬೇಡಿ; ಅದು ಬೇಗನೆ ಬೇಯುತ್ತದೆ. ಅದರ ಮೇಲೆ ಕಣ್ಣಿಡಿ, ಮತ್ತು ನೀವು ನಿಜವಾಗಿಯೂ ಹಾಡುವಂತಹ ಊಟದೊಂದಿಗೆ ಬಹುಮಾನ ಪಡೆಯುತ್ತೀರಿ.',
                ingredients: [
                    { item: 'ತಾಜಾ ಮಡ್ ಏಡಿಗಳು', amount: '೨ (ಸುಮಾರು ೮೦೦ ಗ್ರಾಂ - ೧ ಕೆಜಿ ಪ್ರತಿ), ಸ್ವಚ್ಛಗೊಳಿಸಿ ಮತ್ತು ಒಡೆದ' },
                    { item: 'ಅಡುಗೆ ಎಣ್ಣೆ', amount: '೧/೨ ಕಪ್' },
                    { item: 'ಬೆಳ್ಳುಳ್ಳಿ', amount: '೮ ಎಸಳು, ಸಣ್ಣಗೆ ಹೆಚ್ಚಿದ' },
                    { item: 'ಶುಂಠಿ', amount: '೨ ಇಂಚು ತುಂಡು, ತುರಿದ' },
                    { item: 'ಶಾಲೋಟ್ಸ್', amount: '೪, ನುಣ್ಣಗೆ ಹೆಚ್ಚಿದ' },
                    { item: 'ಒಣ ಕೆಂಪು ಮೆಣಸಿನಕಾಯಿಗಳು', amount: '೧೫-೨೦, ಬಿಸಿ ನೀರಿನಲ್ಲಿ ನೆನೆಸಿ, ಬೀಜ ತೆಗೆದ (ಖಾರದ ಆದ್ಯತೆಗೆ ಅನುಗುಣವಾಗಿ)' },
                    { item: 'ತಾಜಾ ಕೆಂಪು ಮೆಣಸಿನಕಾಯಿಗಳು', amount: '೫-೬, ಬೀಜ ತೆಗೆದ (ಬಣ್ಣ ಮತ್ತು ತಾಜಾ ಖಾರಕ್ಕಾಗಿ)' },
                    { item: 'ಬೆಲಾಕನ್ (ಸೀಗಡಿ ಪೇಸ್ಟ್)', amount: '೧ ಟೀಸ್ಪೂನ್, ಹುರಿದ' },
                    { item: 'ಟೊಮೆಟೊ ಕೆಚಪ್', amount: '೧/೨ ಕಪ್' },
                    { item: 'ಬಾಟಲಿ ಚಿಲ್ಲಿ ಸಾಸ್', amount: '೧/೪ ಕಪ್ (ಉದಾಹರಣೆಗೆ, ಮ್ಯಾಗಿ ಅಥವಾ ಅಂತಹುದೇ ಸಿಹಿ ಚಿಲ್ಲಿ ಸಾಸ್)' },
                    { item: 'ನೀರು ಅಥವಾ ಚಿಕನ್ ಸ್ಟಾಕ್', amount: '೧.೫ ಕಪ್' },
                    { item: 'ಸಕ್ಕರೆ', amount: '೨-೩ ಟೇಬಲ್ಸ್ಪೂನ್ (ರುಚಿಗೆ ತಕ್ಕಂತೆ)' },
                    { item: 'ಉಪ್ಪು', amount: '೧ ಟೀಸ್ಪೂನ್ (ಅಥವಾ ರುಚಿಗೆ ತಕ್ಕಂತೆ)' },
                    { item: 'ಬಿಳಿ ವಿನೆಗರ್', amount: '೧ ಟೇಬಲ್ಸ್ಪೂನ್' },
                    { item: 'ಕಾರ್ನ್‌ಸ್ಟಾರ್ಚ್', amount: '೨ ಟೇಬಲ್ಸ್ಪೂನ್, ೪ ಟೇಬಲ್ಸ್ಪೂನ್ ನೀರಿನೊಂದಿಗೆ ಮಿಶ್ರಣ (ಸ್ಲರಿ)' },
                    { item: 'ಮೊಟ್ಟೆಗಳು', amount: '೨ ದೊಡ್ಡ, ಲಘುವಾಗಿ ಹೊಡೆದ' },
                    { item: 'ಕೊತ್ತಂಬರಿ ಸೊಪ್ಪು', amount: 'ಅಲಂಕಾರಕ್ಕಾಗಿ, ಹೆಚ್ಚಿದ' },
                    { item: 'ಸ್ಪ್ರಿಂಗ್ ಈರುಳ್ಳಿ', amount: 'ಅಲಂಕಾರಕ್ಕಾಗಿ, ಹೆಚ್ಚಿದ' },
                    { item: 'ಕರಿದ ಮಾಂಟೌ ಬನ್‌ಗಳು', amount: 'ಬಡಿಸಲು' }
                ],
                instructions: [
                    'ಏಡಿಯನ್ನು ತಯಾರಿಸಿ: ಮೊದಲು, ನಾಯಕ! ನಿಮ್ಮ ಏಡಿಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳಿ. ಹರಿಯುವ ನೀರಿನಲ್ಲಿ ಅವುಗಳನ್ನು ಚೆನ್ನಾಗಿ ಸ್ವಚ್ಛಗೊಳಿಸಿ. ಗಟ್ಟಿಮುಟ್ಟಾದ ಕತ್ತಿ ಅಥವಾ ಭಾರವಾದ ಚಾಕುವನ್ನು ಬಳಸಿ ಚಿಪ್ಪುಗಳು ಮತ್ತು ಹಿಡಿಕಟ್ಟುಗಳನ್ನು ಒಡೆಯಿರಿ. ನಾಚಿಕೆಪಡಬೇಡಿ; ಸಾಸ್ ಪ್ರತಿ ಮೂಲೆ ಮತ್ತು ಬಿರುಕಿಗೆ ತಲುಪಬೇಕು. ದೇಹವನ್ನು ಅರ್ಧ ಅಥವಾ ಕಾಲು ಭಾಗಗಳಾಗಿ ಬೇರ್ಪಡಿಸಿ, ಕಾಲುಗಳು ಮತ್ತು ಹಿಡಿಕಟ್ಟುಗಳನ್ನು ಜೋಡಿಸಿಡಿ. ಪಕ್ಕಕ್ಕೆ ಇಡಿ.',
                    'ಚಿಲ್ಲಿ ಪೇಸ್ಟ್ ತಯಾರಿಸಿ: ಇಲ್ಲಿಂದ ಮ್ಯಾಜಿಕ್ ಪ್ರಾರಂಭವಾಗುತ್ತದೆ. ಆಹಾರ ಸಂಸ್ಕಾರಕದಲ್ಲಿ ಅಥವಾ ಕಲ್ಲಿನ ಒರಳು ಮತ್ತು ಕುಟ್ಟಾಣಿಯಲ್ಲಿ, ನೆನೆಸಿದ ಒಣ ಕೆಂಪು ಮೆಣಸಿನಕಾಯಿಗಳು, ತಾಜಾ ಕೆಂಪು ಮೆಣಸಿನಕಾಯಿಗಳು, ಶಾಲೋಟ್ಸ್, ಬೆಳ್ಳುಳ್ಳಿ, ಶುಂಠಿ ಮತ್ತು ಹುರಿದ ಬೆಲಾಕನ್ ಅನ್ನು ಸೇರಿಸಿ. ತುಲನಾತ್ಮಕವಾಗಿ ನಯವಾದ, ಸುಗಂಧಭರಿತ ಪೇಸ್ಟ್ ಆಗುವವರೆಗೆ ಮಿಶ್ರಣ ಮಾಡಿ ಅಥವಾ ಕುಟ್ಟಿ. ಇದು ರೋಮಾಂಚಕ, ಸ್ವಲ್ಪ ತೀಕ್ಷ್ಣವಾದ ಮತ್ತು ಭರವಸೆಯ ವಾಸನೆಯನ್ನು ಹೊಂದಿರಬೇಕು.',
                    'ಪೇಸ್ಟ್ ಅನ್ನು ಹುರಿಯಿರಿ: ದೊಡ್ಡ ಬಾಣಲೆ ಅಥವಾ ಆಳವಾದ ಪ್ಯಾನ್‌ನಲ್ಲಿ ಮಧ್ಯಮ-ಹೆಚ್ಚಿನ ಉರಿಯಲ್ಲಿ ಅಡುಗೆ ಎಣ್ಣೆಯನ್ನು ಬಿಸಿ ಮಾಡಿ. ನಿಮ್ಮ ಹೊಸದಾಗಿ ತಯಾರಿಸಿದ ಚಿಲ್ಲಿ ಪೇಸ್ಟ್ ಅನ್ನು ಸೇರಿಸಿ. ನಿರಂತರವಾಗಿ ಬೆರೆಸಿ, ಅದು ಸೀಳಲು ಮತ್ತು ಸಿಡಿಯಲು ಬಿಡಿ. ಮೆಣಸಿನಕಾಯಿಗಳು ಮತ್ತು ಬೆಳ್ಳುಳ್ಳಿಯ ಕಚ್ಚಾ, ತೀಕ್ಷ್ಣವಾದ ಅಂಚುಗಳು ಮೃದುವಾಗಲು, ಪೇಸ್ಟ್ ಸ್ವಲ್ಪ ಗಾಢವಾಗಲು ಮತ್ತು ಎಣ್ಣೆ \'ಬೇರ್ಪಡಿಸಲು\' ಪ್ರಾರಂಭಿಸಿ ಪ್ಯಾನ್‌ನ ಅಂಚುಗಳ ಸುತ್ತ ಸಂಗ್ರಹವಾಗಲು ನೀವು ನೋಡಬೇಕು. ಇದಕ್ಕೆ ಸುಮಾರು ೮-೧೦ ನಿಮಿಷಗಳು ಬೇಕಾಗುತ್ತದೆ. ಆತುರಪಡಬೇಡಿ; ಈ ಹಂತವು ಸುವಾಸನೆಯ ಅಡಿಪಾಯವನ್ನು ನಿರ್ಮಿಸುತ್ತದೆ.',
                    'ಸಾಸ್ ಬೇಸ್ ಅನ್ನು ನಿರ್ಮಿಸಿ: ಟೊಮೆಟೊ ಕೆಚಪ್, ಬಾಟಲಿ ಚಿಲ್ಲಿ ಸಾಸ್, ನೀರು ಅಥವಾ ಚಿಕನ್ ಸ್ಟಾಕ್, ಸಕ್ಕರೆ, ಉಪ್ಪು ಮತ್ತು ಬಿಳಿ ವಿನೆಗರ್ ಅನ್ನು ಸುರಿಯಿರಿ. ಎಲ್ಲವನ್ನೂ ಚೆನ್ನಾಗಿ ಮಿಶ್ರಣವಾಗುವವರೆಗೆ ಬೆರೆಸಿ ಮತ್ತು ನಿಧಾನವಾಗಿ ಕುದಿಯಲು ಪ್ರಾರಂಭಿಸಿ. ಸುಮಾರು ೫ ನಿಮಿಷಗಳ ಕಾಲ ಕುದಿಯಲು ಬಿಡಿ, ಸುವಾಸನೆಗಳು ಬೆರೆತು ಆಳವಾಗಲು ಅವಕಾಶ ನೀಡಿ. ಸುವಾಸನೆಯು ಸಿಹಿ, ಹುಳಿ ಮತ್ತು ಖಾರದ ಸುಂದರ ಮಿಶ್ರಣವಾಗಿರಬೇಕು.',
                    'ಏಡಿಯನ್ನು ಬೇಯಿಸಿ: ಈಗ ಮುಖ್ಯ ಘಟನೆ. ತಯಾರಿಸಿದ ಏಡಿ ತುಂಡುಗಳನ್ನು ಕುದಿಯುತ್ತಿರುವ ಸಾಸ್‌ಗೆ ಸೇರಿಸಿ. ಆ ಅದ್ಭುತ ಕೆಂಪು ಮಿಶ್ರಣದಿಂದ ಎಲ್ಲಾ ಏಡಿಗಳನ್ನು ಲೇಪಿಸಲು ನಿಧಾನವಾಗಿ ಬೆರೆಸಿ. ಬಾಣಲೆಯನ್ನು ಮುಚ್ಚಿ ಸುಮಾರು ೮-೧೦ ನಿಮಿಷಗಳ ಕಾಲ ಬೇಯಿಸಿ, ಅಥವಾ ಏಡಿಯ ಚಿಪ್ಪುಗಳು ರೋಮಾಂಚಕ ಕಿತ್ತಳೆ-ಕೆಂಪು ಬಣ್ಣಕ್ಕೆ ತಿರುಗುವವರೆಗೆ ಮತ್ತು ಮಾಂಸವು ಅಪಾರದರ್ಶಕವಾಗುವವರೆಗೆ. ಅತಿಯಾಗಿ ಬೇಯಿಸಬೇಡಿ! ರಬ್ಬರ್ ಏಡಿ ಒಂದು ಪಾಕಶಾಲೆಯ ದುರಂತ.',
                    'ಸಾಸ್ ಅನ್ನು ದಪ್ಪವಾಗಿಸಿ: ಕಾರ್ನ್‌ಸ್ಟಾರ್ಚ್ ಸ್ಲರಿಯನ್ನು ಒಂದು ಕ್ಷಿಪ್ರವಾಗಿ ಬೆರೆಸಿ (ಅದು ಕೆಳಗೆ ಕುಳಿತುಕೊಳ್ಳುತ್ತದೆ!). ಅದನ್ನು ನಿಧಾನವಾಗಿ ಕುದಿಯುತ್ತಿರುವ ಸಾಸ್‌ಗೆ ಸುರಿಯಿರಿ, ನಿರಂತರವಾಗಿ ಬೆರೆಸುತ್ತಾ ಇರಿ. ಸಾಸ್ ಹೇಗೆ ರೂಪಾಂತರಗೊಳ್ಳುತ್ತದೆ ಎಂಬುದನ್ನು ನೋಡಿ, ಅದು ಏಡಿಗೆ ಸುಂದರವಾಗಿ ಅಂಟಿಕೊಳ್ಳುವ ಹೊಳೆಯುವ, ಐಷಾರಾಮಿ ಸ್ಥಿರತೆಗೆ ದಪ್ಪವಾಗುತ್ತದೆ. ಕಚ್ಚಾ ಕಾರ್ನ್‌ಸ್ಟಾರ್ಚ್ ರುಚಿಯನ್ನು ಹೋಗಲಾಡಿಸಲು ಇನ್ನೊಂದು ನಿಮಿಷ ಕುದಿಯಲು ಬಿಡಿ.',
                    'ಮೊಟ್ಟೆಯನ್ನು ಸೇರಿಸಿ: ಉರಿಯನ್ನು ಕಡಿಮೆ ಮಾಡಿ. ನಿಧಾನವಾಗಿ, ತೆಳುವಾದ ಹರಿವಿನಲ್ಲಿ, ಲಘುವಾಗಿ ಹೊಡೆದ ಮೊಟ್ಟೆಗಳನ್ನು ಸಾಸ್‌ಗೆ ಸುರಿಯಿರಿ, ಅದೇ ಸಮಯದಲ್ಲಿ ಚಮಚ ಅಥವಾ ಸ್ಪಾಟುಲಾದಿಂದ ನಿಧಾನವಾಗಿ ಬೆರೆಸುತ್ತಾ ಇರಿ. ನೀವು ಮೊಟ್ಟೆಯ ಸೂಕ್ಷ್ಮ, ರೇಷ್ಮೆಯಂತಹ ರಿಬ್ಬನ್‌ಗಳನ್ನು ರಚಿಸಲು ಬಯಸುತ್ತೀರಿ, ಸ್ಕ್ರ್ಯಾಂಬಲ್ಡ್ ತುಂಡುಗಳನ್ನಲ್ಲ. ಸೇರಿಸಲು ಸಾಕಷ್ಟು ಬೆರೆಸಿ, ನಂತರ ಉರಿಯನ್ನು ಆಫ್ ಮಾಡಿ. ಉಳಿದಿರುವ ಶಾಖವು ಮೊಟ್ಟೆಯನ್ನು ಬೇಯಿಸುವುದನ್ನು ಪೂರ್ಣಗೊಳಿಸುತ್ತದೆ.',
                    'ತಕ್ಷಣವೇ ಬಡಿಸಿ: ಚಿಲ್ಲಿ ಕ್ರಾಬ್ ಅನ್ನು ದೊಡ್ಡ ಬಡಿಸುವ ತಟ್ಟೆಗೆ ವರ್ಗಾಯಿಸಿ. ತಾಜಾ ಕೊತ್ತಂಬರಿ ಸೊಪ್ಪು ಮತ್ತು ಹೆಚ್ಚಿದ ಸ್ಪ್ರಿಂಗ್ ಈರುಳ್ಳಿಯಿಂದ ಉದಾರವಾಗಿ ಅಲಂಕರಿಸಿ. ಬಿಸಿ ಬಿಸಿಯಾಗಿ, ಹೊಸದಾಗಿ ಕರಿದ ಮಾಂಟೌ ಬನ್‌ಗಳ ರಾಶಿಯೊಂದಿಗೆ ಬಡಿಸಿ. ಅಸ್ತವ್ಯಸ್ತವಾಗಿರಿ, ತಿನ್ನಲು ಪ್ರಾರಂಭಿಸಿ, ಮತ್ತು ಪ್ರತಿ ಅದ್ಭುತ ಕಚ್ಚುವಿಕೆಯನ್ನು ಆನಂದಿಸಿ!'
                ]
            },
            'zh-CN': {
                title: '辣椒螃蟹',
                description: '辣椒螃蟹，新加坡的招牌菜！香辣浓郁的酱汁，配上鲜美的螃蟹，再来几个炸馒头蘸汁，简直是人间美味。快来试试这道让人吮指回味的大菜吧！',
                ingredients: [
                    { item: '活泥蟹', amount: '2只 (每只约800克-1公斤)，已清洗并敲碎' },
                    { item: '食用油', amount: '1/2 杯' },
                    { item: '大蒜', amount: '8瓣，切末' },
                    { item: '生姜', amount: '2英寸块，磨碎' },
                    { item: '红葱头', amount: '4个，切碎' },
                    { item: '干红辣椒', amount: '15-20个，用热水泡软，去籽 (根据辣度调整)' },
                    { item: '新鲜红辣椒', amount: '5-6个，去籽 (用于增色和新鲜辣味)' },
                    { item: '峇拉煎 (虾酱)', amount: '1茶匙，烤香' },
                    { item: '番茄酱', amount: '1/2 杯' },
                    { item: '瓶装辣椒酱', amount: '1/4 杯 (例如美极或类似甜辣酱)' },
                    { item: '水或鸡高汤', amount: '1.5 杯' },
                    { item: '糖', amount: '2-3汤匙 (根据口味调整)' },
                    { item: '盐', amount: '1茶匙 (或根据口味)' },
                    { item: '白醋', amount: '1汤匙' },
                    { item: '玉米淀粉', amount: '2汤匙，与4汤匙水混合成水淀粉' },
                    { item: '鸡蛋', amount: '2个大号，轻轻打散' },
                    { item: '香菜叶', amount: '用于装饰，切碎' },
                    { item: '小葱', amount: '用于装饰，切片' },
                    { item: '炸馒头', amount: '用于佐餐' }
                ],
                instructions: [
                    '螃蟹洗净，敲碎蟹壳蟹钳。',
                    '蟹身分两半，备用。',
                    '干辣椒、鲜辣椒、红葱头、蒜、姜、峇拉煎。',
                    '一起打成香料酱。',
                    '热锅热油，炒香香料酱8-10分钟。',
                    '酱料颜色变深，油开始分离就好。',
                    '倒番茄酱、辣椒酱、水/鸡高汤、糖、盐、白醋。',
                    '搅匀，小火炖5分钟。',
                    '下螃蟹，裹匀酱汁。',
                    '盖盖煮8-10分钟，螃蟹变红，肉变白。',
                    '水淀粉搅匀，慢慢倒入酱汁，边倒边搅。',
                    '酱汁变浓稠发亮，再煮1分钟。',
                    '关小火，慢慢淋入打散的鸡蛋。',
                    '轻轻搅拌，形成蛋花丝带，关火。',
                    '盛盘，撒香菜、葱花。',
                    '配炸馒头，趁热吃！'
                ]
            },
            'ms': {
                title: 'Ketam Cili',
                description: 'Ketam Cili ni memang hidangan ikonik Singapura! Sos pedas manis melekat pada ketam, memang tak cukup sepinggan. Jom cuba resipi Makcik ni!',
                ingredients: [
                    { item: 'Ketam Nipah Segar', amount: '2 ekor (anggaran 800g - 1kg setiap satu), dibersihkan dan dipecahkan' },
                    { item: 'Minyak Masak', amount: '1/2 cawan' },
                    { item: 'Bawang Putih', amount: '8 ulas, dicincang' },
                    { item: 'Halia', amount: 'sekeping 2 inci, diparut' },
                    { item: 'Bawang Merah Kecil', amount: '4 biji, dicincang halus' },
                    { item: 'Cili Kering Merah', amount: '15-20 biji, direndam dalam air panas, dibuang biji (sesuaikan mengikut tahap kepedasan)' },
                    { item: 'Cili Merah Segar', amount: '5-6 biji, dibuang biji (untuk warna dan kepedasan segar)' },
                    { item: 'Belacan', amount: '1 sudu kecil, dibakar' },
                    { item: 'Sos Tomato', amount: '1/2 cawan' },
                    { item: 'Sos Cili Botol', amount: '1/4 cawan (cth., Maggi atau sos cili manis yang serupa)' },
                    { item: 'Air atau Stok Ayam', amount: '1.5 cawan' },
                    { item: 'Gula', amount: '2-3 sudu besar (sesuaikan mengikut rasa)' },
                    { item: 'Garam', amount: '1 sudu kecil (atau secukup rasa)' },
                    { item: 'Cuka Putih', amount: '1 sudu besar' },
                    { item: 'Tepung Jagung', amount: '2 sudu besar, dicampur dengan 4 sudu besar air (larutan)' },
                    { item: 'Telur', amount: '2 biji besar, dipukul ringan' },
                    { item: 'Daun Ketumbar', amount: 'Untuk hiasan, dicincang' },
                    { item: 'Daun Bawang', amount: 'Untuk hiasan, dihiris' },
                    { item: 'Roti Mantou Goreng', amount: 'Untuk hidangan' }
                ],
                instructions: [
                    'Bersihkan ketam elok-elok. Pecahkan cengkerang dan penyepit. Asingkan badan, biar kaki dan penyepit melekat. Ketepikan.',
                    'Kisar cili kering, cili merah segar, bawang merah, bawang putih, halia, dan belacan bakar sampai jadi pes wangi.',
                    'Panaskan minyak dalam kuali besar. Tumis pes cili sampai wangi, minyak mula terpisah. Jangan gopoh, ini penting untuk rasa.',
                    'Tuang sos tomato, sos cili botol, air/stok ayam, gula, garam, dan cuka. Kacau sebati, biar mereneh 5 minit.',
                    'Masukkan ketam. Kacau perlahan. Tutup kuali, masak 8-10 minit sampai ketam merah jingga dan isi legap. Jangan terlebih masak!',
                    'Kacau bancuhan tepung jagung. Tuang perlahan-lahan ke dalam sos sambil kacau. Biar sos pekat dan berkilat. Masak seminit lagi.',
                    'Kecilkan api. Titiskan telur yang dipukul perlahan-lahan ke dalam sos sambil kacau lembut. Jangan kacau kuat sangat. Matikan api.',
                    'Pindahkan ke pinggan besar. Hias dengan daun ketumbar dan daun bawang. Hidang panas dengan roti Mantou goreng. Selamat menjamu selera!'
                ]
            }
        }
    }
,
    {
        id: '2026-05-19',
        publishedAt: '2026-05-19T02:42:00.000Z',
        title: 'Sambal Terasi (Indonesian Chili Paste)',
        description: 'Ah, sambal. It\'s not just a condiment in Indonesia; it\'s the very soul of our meals, the fiery heart that beats through every plate. I remember my first attempts, a disaster really. My grandmother, a tiny woman with hands that could pound chilies for hours, would just shake her head. \'Too raw, too watery, no soul!\' she\'d declare, pushing my sad little bowl back. It took years, truly, to understand that sambal isn\'t just about heat; it\'s about balance, about coaxing out the deep, complex flavors from simple ingredients. It\'s a labor of love, a ritual, and a non-negotiable part of our culinary identity. You simply cannot have an Indonesian meal without it. It\'s like trying to eat nasi goreng without rice – unthinkable! This particular recipe, Sambal Terasi, is a classic, a staple you\'ll find on almost every table. It\'s robust, fragrant, and utterly addictive. Trust me on this one.   My biggest frustration early on was rushing the cooking process. I\'d blend everything, give it a quick stir in the pan, and wonder why it tasted so sharp, so unfinished. Grandma would always say, \'You must \'cook\' the sambal, not just heat it.\' This means a slow, patient sauté, letting the oil separate, letting the raw chili bite mellow into a rich, aromatic warmth. Another common failure? Not enough oil. People try to be healthy, but sambal needs that oil to truly bloom, to carry the flavors, and to preserve it. Don\'t skimp. And the terasi, that pungent shrimp paste, is non-negotiable. It\'s the umami backbone, the secret weapon. Without it, it\'s just spicy chili paste, not sambal.   For this recipe, fresh ingredients are paramount. Don\'t even think about using pre-chopped garlic or old, shriveled chilies. The vibrant color, the sharp aroma of fresh shallots and chilies, that\'s what you\'re aiming for. I always go for a mix of red chilies – some big ones for bulk and color, and a few bird\'s eye chilies (cabe rawit) for that proper kick. Adjust the amount to your liking, of course, but don\'t be shy. This isn\'t a timid dish. The palm sugar is crucial for balancing the heat and acidity, giving it that signature sweet-savory depth. And remember, every family has their own \'best\' sambal. This is mine, perfected over countless batches, and I\'m sharing it with you. It\'s a little piece of home, a little bit of fire, and a whole lot of flavor.',
        image: '/recipe-images/2026-05-19.jpg',
        prepTime: '25 min',
        cookTime: '45 min',
        difficulty: 'Medium',
        servings: 4,
        ingredients: [
            { item: 'Large Red Chilies (cabe merah besar)', amount: '10-12, deseeded if less heat desired' },
            { item: 'Bird\'s Eye Chilies (cabe rawit)', amount: '5-10, or to taste (keep seeds for heat)' },
            { item: 'Shallots', amount: '8-10 medium' },
            { item: 'Garlic Cloves', amount: '4-5 large' },
            { item: 'Tomato', amount: '1 medium, roughly chopped' },
            { item: 'Shrimp Paste (terasi)', amount: '1 block (about 1.5-2 cm cube), toasted' },
            { item: 'Palm Sugar (gula merah)', amount: '1-2 tablespoons, grated or finely chopped' },
            { item: 'Tamarind Paste (asam jawa)', amount: '1 teaspoon, mixed with 2 tablespoons hot water, strained' },
            { item: 'Salt', amount: '1 teaspoon, or to taste' },
            { item: 'Cooking Oil', amount: '1/2 cup (about 120 ml)' }
        ],
        instructions: [
            'First, get those chilies, shallots, garlic, and tomato ready. Roughly chop them all. You\'ll feel that familiar tingle on your fingers from the chilies, a good sign of what\'s to come. Don\'t worry too much about neatness; they\'re all going to be pounded or blended.',
            'Now, for the \'terasi\'. This is crucial. Gently toast the block of shrimp paste in a dry pan over low heat for about 2-3 minutes. You\'ll see it darken slightly and smell its wonderfully pungent aroma filling your kitchen. This mellows its raw edge and deepens its flavor. Set it aside.',
            'Time to make the paste! In a mortar and pestle (the traditional way, and my preferred method for texture) or a food processor, combine the chopped chilies, shallots, garlic, and toasted \'terasi\'. Pound or blend until you have a coarse, rustic paste. It shouldn\'t be completely smooth; you want some texture there. The vibrant red and orange hues will start to pop.',
            'Heat the cooking oil in a wok or a large, deep pan over medium heat. This is where the magic happens. Once the oil shimmers, carefully add your chili paste. It will sizzle and spit a bit, so be careful! Stir constantly. You\'ll see the oil start to turn a beautiful fiery red, and the aroma will intensify, shifting from sharp to deeply fragrant. This is the \'cooking\' part my grandma talked about. Keep stirring for about 15-20 minutes, until the paste darkens slightly and the oil starts to separate and rise to the surface. This means the raw flavors are gone, and the sambal is truly cooked.',
            'Add the chopped tomato, palm sugar, strained tamarind water, and salt. Stir everything together, making sure the palm sugar dissolves completely. The sambal will become a bit wetter and glossier. Continue to cook, stirring occasionally, for another 10-15 minutes, until the sambal thickens again and the oil separates once more. Taste it. Does it need more salt? More sugar to balance the heat? Adjust it to your liking. It should be a harmonious blend of spicy, savory, sweet, and a touch of sour.',
            'Once it\'s reached that perfect balance and the oil is glistening on top, your sambal is ready. The color should be a deep, rich red, almost brick-like. Transfer it to a clean, dry jar. It\'s fantastic served immediately with warm rice, grilled fish, or fried chicken. This sambal will keep well in the refrigerator for up to two weeks, or even longer if you ensure there\'s a good layer of oil on top to seal it.'
        ],
        tags: ['Indonesian', 'Condiment', 'Spicy', 'Authentic'],
        translations: {
            hi: {
                title: 'सांबळ तेरासी',
                description: 'सांबळ इंडोनेशियाई व्यंजनों की आत्मा है, हर भोजन का ज्वलंत हृदय। मेरी दादी कहती थीं कि सांबळ सिर्फ तीखापन नहीं, बल्कि संतुलन और गहरे स्वाद का खेल है। इसे बनाने में धैर्य, धीमी आंच पर पकाना और पर्याप्त तेल का उपयोग महत्वपूर्ण है। \'तेरासी\' (झींगा पेस्ट) इसका गुप्त हथियार है, जो इसे अद्वितीय उमामी स्वाद देता है। यह सिर्फ एक चटनी नहीं, बल्कि हमारी पाक पहचान का एक अभिन्न अंग है, जिसके बिना इंडोनेशियाई भोजन अधूरा है।',
                ingredients: [{ item: 'बड़ी लाल मिर्च (काबे मेराह बेसार)', amount: '10-12, कम तीखापन चाहिए तो बीज निकाल दें' }, { item: 'बर्ड\'स आई मिर्च (काबे राविट)', amount: '5-10, या स्वादानुसार (तीखेपन के लिए बीज रखें)' }, { item: 'प्याज़', amount: '8-10 मध्यम' }, { item: 'लहसुन की कलियाँ', amount: '4-5 बड़ी' }, { item: 'टमाटर', amount: '1 मध्यम, मोटा कटा हुआ' }, { item: 'झींगा पेस्ट (तेरासी)', amount: '1 ब्लॉक (लगभग 1.5-2 सेमी क्यूब), भुना हुआ' }, { item: 'ताड़ का गुड़ (गुला मेराह)', amount: '1-2 बड़े चम्मच, कसा हुआ या बारीक कटा हुआ' }, { item: 'इमली का पेस्ट (असम जावा)', amount: '1 चम्मच, 2 बड़े चम्मच गर्म पानी में मिलाकर, छाना हुआ' }, { item: 'नमक', amount: '1 चम्मच, या स्वादानुसार' }, { item: 'खाना पकाने का तेल', amount: '1/2 कप (लगभग 120 मिली)' }],
                instructions: ['सबसे पहले, मिर्च, प्याज़, लहसुन और टमाटर तैयार कर लें। इन सभी को मोटा-मोटा काट लें। आपको मिर्च से उंगलियों में हल्की झनझनाहट महसूस होगी, जो आने वाले स्वाद का अच्छा संकेत है।', 'अब, \'तेरासी\' के लिए। यह महत्वपूर्ण है। झींगा पेस्ट के ब्लॉक को एक सूखे पैन में धीमी आंच पर लगभग 2-3 मिनट तक धीरे से भूनें। आप देखेंगे कि यह थोड़ा गहरा हो जाएगा और इसकी अद्भुत तीखी सुगंध आपकी रसोई में भर जाएगी।', 'अब पेस्ट बनाने का समय है! एक मोर्टार और मूसल या एक फूड प्रोसेसर में, कटी हुई मिर्च, प्याज़, लहसुन और भुनी हुई \'तेरासी\' को मिलाएं। तब तक पीसें या ब्लेंड करें जब तक आपको एक मोटा, देहाती पेस्ट न मिल जाए।', 'एक कड़ाही या एक बड़े, गहरे पैन में मध्यम आंच पर खाना पकाने का तेल गरम करें। जैसे ही तेल चमकने लगे, सावधानी से अपना मिर्च का पेस्ट डालें। लगभग 15-20 मिनट तक चलाते रहें, जब तक कि पेस्ट थोड़ा गहरा न हो जाए और तेल अलग होकर सतह पर न आने लगे।', 'कटा हुआ टमाटर, ताड़ का गुड़, छाना हुआ इमली का पानी और नमक डालें। सब कुछ एक साथ मिलाएं, सुनिश्चित करें कि ताड़ का गुड़ पूरी तरह से घुल जाए। बीच-बीच में चलाते हुए, इसे और 10-15 मिनट तक पकाते रहें, जब तक कि सांबळ फिर से गाढ़ा न हो जाए और तेल एक बार फिर अलग न हो जाए।', 'एक बार जब यह सही संतुलन पर पहुंच जाए और तेल ऊपर चमक रहा हो, तो आपका सांबळ तैयार है। इसे एक साफ, सूखे जार में स्थानांतरित करें। यह गर्म चावल, ग्रिल्ड मछली या तले हुए चिकन के साथ तुरंत परोसा जाने पर शानदार लगता है। यह सांबळ रेफ्रिजरेटर में दो सप्ताह तक अच्छी तरह से रहेगा।']
            },
            bn: {
                title: 'সাম্বাল তেরাসি',
                description: 'সাম্বাল শুধু একটি মশলা নয়, এটি ইন্দোনেশিয়ান খাবারের প্রাণ, প্রতিটি পাতের জ্বলন্ত হৃদয়। আমার দাদী বলতেন, সাম্বাল কেবল ঝাল নয়, এটি ভারসাম্য এবং গভীর স্বাদের খেলা। এটি তৈরিতে ধৈর্য, ধীর গতিতে রান্না করা এবং পর্যাপ্ত তেল ব্যবহার করা অপরিহার্য। \'তেরাসি\' (চিংড়ি পেস্ট) এর গোপন অস্ত্র, যা এটিকে একটি অনন্য উমামি স্বাদ দেয়। এটি আমাদের রন্ধনশিল্পের অবিচ্ছেদ্য অংশ, যা ছাড়া ইন্দোনেশিয়ান খাবার অসম্পূর্ণ।',
                ingredients: [{ item: 'বড় লাল লঙ্কা (কাবে মেরাহ বেসার)', amount: '10-12, কম ঝাল চাইলে বীজ ফেলে দিন' }, { item: 'বার্ড\'স আই লঙ্কা (কাবে রাউইট)', amount: '5-10, বা স্বাদমতো (ঝালের জন্য বীজ রাখুন)' }, { item: 'শ্যালোট', amount: '8-10 মাঝারি' }, { item: 'রসুনের কোয়া', amount: '4-5 বড়' }, { item: 'টমেটো', amount: '1 মাঝারি, মোটা করে কাটা' }, { item: 'চিংড়ি পেস্ট (তেরাসি)', amount: '1 ব্লক (প্রায় 1.5-2 সেমি কিউব), ভাজা' }, { item: 'পাম সুগার (গুলা মেরাহ)', amount: '1-2 টেবিল চামচ, গ্রেট করা বা মিহি করে কাটা' }, { item: 'তেঁতুলের পেস্ট (আসাম জাভা)', amount: '1 চা চামচ, 2 টেবিল চামচ গরম জলের সাথে মিশিয়ে, ছেঁকে নেওয়া' }, { item: 'লবণ', amount: '1 চা চামচ, বা স্বাদমতো' }, { item: 'রান্নার তেল', amount: '1/2 কাপ (প্রায় 120 মিলি)' }],
                instructions: ['প্রথমে লঙ্কা, শ্যালোট, রসুন এবং টমেটো প্রস্তুত করুন। সব মোটা করে কেটে নিন। লঙ্কার কারণে আপনার আঙুলে পরিচিত ঝনঝনানি অনুভব করবেন, যা আসন্ন স্বাদের একটি ভালো লক্ষণ।', 'এবার \'তেরাসি\'র জন্য। এটি অত্যন্ত গুরুত্বপূর্ণ। একটি শুকনো প্যানে কম আঁচে চিংড়ি পেস্টের ব্লকটি প্রায় 2-3 মিনিট ধরে আলতো করে ভাজুন। এটি সামান্য গাঢ় হবে এবং এর চমৎকার তীব্র সুগন্ধ আপনার রান্নাঘর ভরে দেবে।', 'পেস্ট তৈরির সময়! একটি হামানদিস্তা বা একটি ফুড প্রসেসরে, কাটা লঙ্কা, শ্যালোট, রসুন এবং ভাজা \'তেরাসি\' একত্রিত করুন। একটি মোটা, গ্রামীণ পেস্ট না হওয়া পর্যন্ত পিষুন বা ব্লেন্ড করুন।', 'একটি কড়াই বা একটি বড়, গভীর প্যানে মাঝারি আঁচে রান্নার তেল গরম করুন। তেল ঝলমল করলে, সাবধানে আপনার লঙ্কার পেস্ট যোগ করুন। প্রায় 15-20 মিনিট ধরে নাড়তে থাকুন, যতক্ষণ না পেস্ট সামান্য গাঢ় হয় এবং তেল আলাদা হয়ে পৃষ্ঠে উঠে আসে।', 'কাটা টমেটো, পাম সুগার, ছেঁকে নেওয়া তেঁতুলের জল এবং লবণ যোগ করুন। সবকিছু একসাথে মেশান, নিশ্চিত করুন যে পাম সুগার সম্পূর্ণ গলে গেছে। মাঝে মাঝে নাড়তে নাড়তে আরও 10-15 মিনিট রান্না করতে থাকুন, যতক্ষণ না সাম্বাল আবার ঘন হয় এবং তেল আবার আলাদা হয়ে যায়।', 'একবার এটি নিখুঁত ভারসাম্যে পৌঁছে গেলে এবং তেল উপরে চকচক করলে, আপনার সাম্বাল প্রস্তুত। এটি একটি পরিষ্কার, শুকনো জারে স্থানান্তর করুন। গরম ভাত, গ্রিলড মাছ বা ভাজা মুরগির সাথে তাৎক্ষণিকভাবে পরিবেশন করলে এটি দুর্দান্ত লাগে। এই সাম্বাল ফ্রিজে দুই সপ্তাহ পর্যন্ত ভালো থাকবে।']
            },
            mr: {
                title: 'सांबळ तेरासी',
                description: 'सांबळ केवळ एक चटणी नाही, तर ते इंडोनेशियन जेवणाचा आत्मा आहे, प्रत्येक ताटाचे ज्वलंत हृदय. माझ्या आजी म्हणायच्या की सांबळ म्हणजे फक्त तिखटपणा नाही, तर ते संतुलन आणि खोल चवीचा खेळ आहे. ते बनवण्यासाठी संयम, मंद आचेवर शिजवणे आणि पुरेसे तेल वापरणे महत्त्वाचे आहे. \'तेरासी\' (कोळंबी पेस्ट) हे त्याचे गुप्त शस्त्र आहे, जे त्याला एक अद्वितीय उमामी चव देते. हे आपल्या पाककृती ओळखीचा अविभाज्य भाग आहे, ज्याशिवाय इंडोनेशियन जेवण अपूर्ण आहे।',
                ingredients: [{ item: 'मोठ्या लाल मिरच्या (काबे मेराह बेसार)', amount: '10-12, कमी तिखटपणा हवा असल्यास बिया काढून टाका' }, { item: 'बर्ड\'स आय मिरच्या (काबे राविट)', amount: '5-10, किंवा चवीनुसार (तिखटपणासाठी बिया ठेवा)' }, { item: 'शॅलोट्स', amount: '8-10 मध्यम' }, { item: 'लसूण पाकळ्या', amount: '4-5 मोठ्या' }, { item: 'टोमॅटो', amount: '1 मध्यम, अंदाजे चिरलेला' }, { item: 'कोळंबी पेस्ट (तेरासी)', amount: '1 ब्लॉक (सुमारे 1.5-2 सेमी क्यूब), भाजलेला' }, { item: 'पाम शुगर (गुला मेराह)', amount: '1-2 चमचे, किसलेला किंवा बारीक चिरलेला' }, { item: 'चिंचेचा लगदा (आसाम जावा)', amount: '1 चमचा, 2 चमचे गरम पाण्यात मिसळून, गाळलेला' }, { item: 'मीठ', amount: '1 चमचा, किंवा चवीनुसार' }, { item: 'खाद्यतेल', amount: '1/2 कप (सुमारे 120 मिली)' }],
                instructions: ['प्रथम, मिरच्या, शॅलोट्स, लसूण आणि टोमॅटो तयार करा. ते सर्व अंदाजे चिरून घ्या. मिरच्यांमुळे तुमच्या बोटांना एक परिचित झणझणीतपणा जाणवेल, जे पुढे काय येणार आहे याचे चांगले लक्षण आहे।', 'आता, \'तेरासी\'साठी. हे महत्त्वाचे आहे. कोळंबी पेस्टचा ब्लॉक एका कोरड्या पॅनमध्ये मंद आचेवर सुमारे 2-3 मिनिटे हलके भाजून घ्या. ते थोडे गडद होईल आणि त्याचा अद्भुत तिखट सुगंध तुमच्या स्वयंपाकघरात भरेल।', 'आता पेस्ट बनवण्याची वेळ! खलबत्त्यात किंवा फूड प्रोसेसरमध्ये, चिरलेल्या मिरच्या, शॅलोट्स, लसूण आणि भाजलेली \'तेरासी\' एकत्र करा. तुम्हाला जाडसर, ग्रामीण पेस्ट मिळेपर्यंत कुटा किंवा ब्लेंड करा।', 'एका कढईत किंवा मोठ्या, खोल पॅनमध्ये मध्यम आचेवर खाद्यतेल गरम करा. तेल गरम झाल्यावर, तुमची मिरची पेस्ट काळजीपूर्वक घाला. सुमारे 15-20 मिनिटे ढवळत रहा, जोपर्यंत पेस्ट थोडी गडद होत नाही आणि तेल वेगळे होऊन पृष्ठभागावर येऊ लागत नाही।', 'चिरलेला टोमॅटो, पाम शुगर, गाळलेले चिंचेचे पाणी आणि मीठ घाला. सर्वकाही एकत्र ढवळा, पाम शुगर पूर्णपणे विरघळल्याची खात्री करा. अधूनमधून ढवळत, आणखी 10-15 मिनिटे शिजवत रहा, जोपर्यंत सांबळ पुन्हा घट्ट होत नाही आणि तेल पुन्हा वेगळे होत नाही।', 'एकदा ते परिपूर्ण संतुलनावर पोहोचले आणि तेल वर चमकत असेल, की तुमचे सांबळ तयार आहे. ते एका स्वच्छ, कोरड्या बरणीत ठेवा. गरम भात, भाजलेले मासे किंवा तळलेल्या चिकनसोबत लगेच सर्व्ह केल्यास ते अप्रतिम लागते. हे सांबळ रेफ्रिजरेटरमध्ये दोन आठवड्यांपर्यंत चांगले राहील।']
            },
            te: {
                title: 'సంబల్ టెరాసి',
                description: 'ఇండోనేషియా వంటకాలకు సంబల్ కేవలం ఒక సాస్ కాదు, అది ఆ వంటకాల ఆత్మ, ప్రతి ప్లేట్‌కు మసాలా రుచినిచ్చే హృదయం. నా అమ్మమ్మ నాకు సంబల్ ఎలా చేయాలో నేర్పింది, అది కేవలం కారం గురించి కాదు, రుచుల సమతుల్యత గురించి. నెమ్మదిగా వండటం, నూనెను సరిగ్గా ఉపయోగించడం, మరియు టెరాసి (రొయ్యల పేస్ట్) కలపడం దీని ప్రత్యేకత. ఇది శ్రమతో కూడుకున్న ప్రేమ, ఇండోనేషియా వంటల గుర్తింపులో ఇది ఒక ముఖ్యమైన భాగం. ఈ సంబల్ టెరాసి రెసిపీ చాలా రుచికరమైనది, సువాసనభరితమైనది మరియు చాలా వ్యసనపరుస్తుంది.',
                ingredients: [{ item: 'పెద్ద ఎర్ర మిరపకాయలు (కేబ్ మెరా బేసర్)', amount: '10-12, తక్కువ కారం కావాలంటే గింజలు తీసివేయండి' }, { item: 'బర్డ్\'స్ ఐ మిరపకాయలు (కేబ్ రావిట్)', amount: '5-10, లేదా రుచికి (కారం కోసం గింజలు ఉంచండి)' }, { item: 'చిన్న ఉల్లిపాయలు', amount: '8-10 మధ్యస్థం' }, { item: 'వెల్లుల్లి రెబ్బలు', amount: '4-5 పెద్దవి' }, { item: 'టమోటా', amount: '1 మధ్యస్థం, సుమారుగా తరిగినది' }, { item: 'రొయ్యల పేస్ట్ (టెరాసి)', amount: '1 బ్లాక్ (సుమారు 1.5-2 సెం.మీ. క్యూబ్), కాల్చినది' }, { item: 'పామ్ షుగర్ (గులా మెరా)', amount: '1-2 టేబుల్‌స్పూన్లు, తురిమినది లేదా సన్నగా తరిగినది' }, { item: 'చింతపండు పేస్ట్ (అసమ్ జావా)', amount: '1 టీస్పూన్, 2 టేబుల్‌స్పూన్ల వేడి నీటితో కలిపి, వడకట్టినది' }, { item: 'ఉప్పు', amount: '1 టీస్పూన్, లేదా రుచికి' }, { item: 'వంట నూనె', amount: '1/2 కప్పు (సుమారు 120 మి.లీ.)' }],
                instructions: ['ముందుగా మిరపకాయలు, చిన్న ఉల్లిపాయలు, వెల్లుల్లి మరియు టమోటాను సిద్ధం చేసుకోండి. వాటన్నింటినీ సుమారుగా తరగండి. మీ చేతులకు మిరపకాయల నుండి వచ్చే పరిచయం రాబోయే రుచికి మంచి సంకేతం.', 'ఇప్పుడు, \'టెరాసి\' కోసం. ఒక పొడి పాన్‌లో తక్కువ మంటపై రొయ్యల పేస్ట్ బ్లాక్‌ను సుమారు 2-3 నిమిషాలు నెమ్మదిగా కాల్చండి. ఇది కొద్దిగా ముదురు రంగులోకి మారి, దాని అద్భుతమైన ఘాటైన సువాసన మీ వంటగదిని నింపుతుంది. ఇది దాని పచ్చిదనాన్ని తగ్గించి, రుచిని పెంచుతుంది. దీనిని పక్కన పెట్టండి.', 'పెస్ట్ చేయడానికి, తరిగిన మిరపకాయలు, చిన్న ఉల్లిపాయలు, వెల్లుల్లి మరియు కాల్చిన \'టెరాసి\'ని రోలులో లేదా ఫుడ్ ప్రాసెసర్‌లో కలపండి. ముతక పేస్ట్‌గా అయ్యే వరకు దంచండి లేదా బ్లెండ్ చేయండి. ఇది పూర్తిగా నునుపుగా ఉండకూడదు; మీకు కొంత ఆకృతి కావాలి. ప్రకాశవంతమైన ఎరుపు మరియు నారింజ రంగులు బయటకు వస్తాయి.', 'ఒక వోక్ లేదా పెద్ద, లోతైన పాన్‌లో వంట నూనెను మధ్యస్థ మంటపై వేడి చేయండి. నూనె వేడెక్కిన తర్వాత, మీ మిరపకాయ పేస్ట్‌ను జాగ్రత్తగా వేయండి. ఇది చిటపటలాడుతుంది, కాబట్టి జాగ్రత్తగా ఉండండి! నిరంతరం కలుపుతూ ఉండండి. పేస్ట్ కొద్దిగా ముదురు రంగులోకి మారి, నూనె ఉపరితలంపైకి వచ్చే వరకు సుమారు 15-20 నిమిషాలు నిరంతరం కలుపుతూ ఉడికించండి. దీని అర్థం పచ్చి రుచులు పోయాయి మరియు సంబల్ నిజంగా ఉడికింది.', 'తరిగిన టమోటా, పామ్ షుగర్, వడకట్టిన చింతపండు నీరు మరియు ఉప్పు వేయండి. పామ్ షుగర్ పూర్తిగా కరిగేలా అన్నీ కలిపి, సంబల్ మళ్లీ చిక్కబడి, నూనె విడిపోయే వరకు మరో 10-15 నిమిషాలు ఉడికించండి. రుచి చూసి, అవసరమైతే ఉప్పు లేదా చక్కెరను సర్దుబాటు చేయండి. ఇది కారంగా, రుచికరంగా, తీపిగా మరియు కొద్దిగా పుల్లగా ఉండాలి.', 'ఇది సరైన సమతుల్యతకు చేరుకుని, నూనె పైన మెరుస్తున్న తర్వాత, మీ సంబల్ సిద్ధంగా ఉంటుంది. రంగు ముదురు, గొప్ప ఎరుపు రంగులో, దాదాపు ఇటుక రంగులో ఉండాలి. దీనిని శుభ్రమైన, పొడి జాడీలోకి మార్చండి. వేడి అన్నం, కాల్చిన చేప లేదా వేయించిన చికెన్‌తో వెంటనే వడ్డిస్తే అద్భుతంగా ఉంటుంది. ఈ సంబల్ రిఫ్రిజిరేటర్‌లో రెండు వారాల వరకు బాగా నిల్వ ఉంటుంది, లేదా పైన నూనె పొర ఉంటే ఇంకా ఎక్కువ కాలం ఉంటుంది.']
            },
            ta: {
                title: 'சம்பல் டெராசி',
                description: 'இந்தோனேசிய உணவுகளின் உயிர்நாடி சம்பல். இது வெறும் துணையல்ல, ஒவ்வொரு தட்டிலும் துடிக்கும் காரமான இதயம். என் பாட்டி எனக்கு சம்பல் செய்ய கற்றுக்கொடுத்தார், அது வெறும் காரம் மட்டுமல்ல, சுவைகளின் சமநிலை பற்றியது. மெதுவாக சமைப்பது, சரியான அளவு எண்ணெய் பயன்படுத்துவது, மற்றும் டெராசி (இறால் பேஸ்ட்) சேர்ப்பது இதன் தனிச்சிறப்பு. இது ஒரு அன்பின் உழைப்பு, ஒரு சடங்கு, மற்றும் எங்கள் சமையல் அடையாளத்தின் பிரிக்க முடியாத பகுதி. இந்த சம்பல் டெராசி செய்முறை மிகவும் சுவையானது, நறுமணமானது மற்றும் அடிமையாக்கும் தன்மை கொண்டது.',
                ingredients: [{ item: 'பெரிய சிவப்பு மிளகாய் (கேப் மெரா பெசார்)', amount: '10-12, காரம் குறைவாக வேண்டுமானால் விதைகளை நீக்கவும்' }, { item: 'பறவை கண் மிளகாய் (கேப் ராவீட்)', amount: '5-10, அல்லது சுவைக்கு (காரத்திற்காக விதைகளை வைத்திருக்கவும்)' }, { item: 'சின்ன வெங்காயம்', amount: '8-10 நடுத்தர அளவு' }, { item: 'பூண்டு பற்கள்', amount: '4-5 பெரியது' }, { item: 'தக்காளி', amount: '1 நடுத்தர அளவு, தோராயமாக நறுக்கியது' }, { item: 'இறால் பேஸ்ட் (டெராசி)', amount: '1 கட்டி (சுமார் 1.5-2 செ.மீ. கனசதுரம்), வறுத்தது' }, { item: 'பனை வெல்லம் (குலா மேரா)', amount: '1-2 தேக்கரண்டி, துருவியது அல்லது பொடியாக நறுக்கியது' }, { item: 'புளி பேஸ்ட் (அசம் ஜாவா)', amount: '1 தேக்கரண்டி, 2 தேக்கரண்டி சூடான நீரில் கலந்து, வடிகட்டியது' }, { item: 'உப்பு', amount: '1 தேக்கரண்டி, அல்லது சுவைக்கு' }, { item: 'சமையல் எண்ணெய்', amount: '1/2 கப் (சுமார் 120 மில்லி)' }],
                instructions: ['முதலில் மிளகாய், சின்ன வெங்காயம், பூண்டு மற்றும் தக்காளியை தயார் செய்யவும். அனைத்தையும் தோராயமாக நறுக்கவும். மிளகாயிலிருந்து உங்கள் விரல்களில் ஏற்படும் கூச்ச உணர்வு வரவிருக்கும் சுவையின் நல்ல அறிகுறி.', 'இப்போது, \'டெராசி\'க்கு. ஒரு உலர்ந்த கடாயில் குறைந்த தீயில் இறால் பேஸ்ட் கட்டியை சுமார் 2-3 நிமிடங்கள் மெதுவாக வறுக்கவும். இது சற்று கருமையாகி, அதன் அற்புதமான காரமான நறுமணம் உங்கள் சமையலறையை நிரப்பும். இது அதன் பச்சையான தன்மையைக் குறைத்து, சுவையை ஆழமாக்குகிறது. இதை ஒதுக்கி வைக்கவும்.', 'பேஸ்ட் செய்ய, நறுக்கிய மிளகாய், சின்ன வெங்காயம், பூண்டு மற்றும் வறுத்த \'டெராசி\'யை ஒரு உரல் மற்றும் உலக்கையில் அல்லது உணவு செயலியில் சேர்க்கவும். ஒரு கரடுமுரடான பேஸ்ட் கிடைக்கும் வரை இடிக்கவும் அல்லது அரைக்கவும். இது முற்றிலும் மென்மையாக இருக்கக்கூடாது; உங்களுக்கு சிறிது அமைப்பு தேவை. துடிப்பான சிவப்பு மற்றும் ஆரஞ்சு நிறங்கள் வெளிவரத் தொடங்கும்.', 'ஒரு வாணலி அல்லது பெரிய, ஆழமான கடாயில் சமையல் எண்ணெயை நடுத்தர தீயில் சூடாக்கவும். எண்ணெய் சூடானதும், உங்கள் மிளகாய் பேஸ்ட்டை கவனமாக சேர்க்கவும். இது சலசலத்து தெறிக்கும், எனவே கவனமாக இருங்கள்! தொடர்ந்து கிளறவும். பேஸ்ட் சற்று கருமையாகி, எண்ணெய் மேற்பரப்புக்கு வரும் வரை சுமார் 15-20 நிமிடங்கள் தொடர்ந்து கிளறி சமைக்கவும். இதன் பொருள் பச்சையான சுவைகள் நீங்கி, சம்பல் உண்மையாக சமைக்கப்பட்டுள்ளது.', 'நறுக்கிய தக்காளி, பனை வெல்லம், வடிகட்டிய புளி நீர் மற்றும் உப்பு சேர்க்கவும். பனை வெல்லம் முழுமையாக கரையும் வரை அனைத்தையும் ஒன்றாக கிளறி, சம்பல் மீண்டும் கெட்டியாகி, எண்ணெய் மீண்டும் பிரியும் வரை மேலும் 10-15 நிமிடங்கள் சமைக்கவும். சுவை பார்த்து, தேவைப்பட்டால் உப்பு அல்லது சர்க்கரையை சரிசெய்யவும். இது காரமான, சுவையான, இனிப்பு மற்றும் சிறிது புளிப்பு கலவையாக இருக்க வேண்டும்.', 'சரியான சமநிலையை அடைந்து, எண்ணெய் மேலே பளபளத்தவுடன், உங்கள் சம்பல் தயாராக உள்ளது. நிறம் அடர், செழுமையான சிவப்பு நிறத்தில், கிட்டத்தட்ட செங்கல் போன்றதாக இருக்க வேண்டும். இதை ஒரு சுத்தமான, உலர்ந்த ஜாருக்கு மாற்றவும். சூடான சாதம், வறுத்த மீன் அல்லது பொரித்த கோழியுடன் உடனடியாக பரிமாறினால் அருமையாக இருக்கும். இந்த சம்பல் குளிர்சாதன பெட்டியில் இரண்டு வாரங்கள் வரை நன்றாக இருக்கும், அல்லது மேலே ஒரு நல்ல எண்ணெய் அடுக்கு இருந்தால் இன்னும் நீண்ட காலம் இருக்கும்.']
            },
            kn: {
                title: 'ಸಾಂಬಲ್ ಟೆರಾಸಿ',
                description: 'ಇಂಡೋನೇಷಿಯನ್ ಊಟಕ್ಕೆ ಸಾಂಬಲ್ ಕೇವಲ ಒಂದು ಸಾಸ್ ಅಲ್ಲ, ಅದು ನಮ್ಮ ಊಟದ ಆತ್ಮ, ಪ್ರತಿ ತಟ್ಟೆಯಲ್ಲೂ ಮಿಡಿಯುವ ಉರಿಯುವ ಹೃದಯ. ನನ್ನ ಅಜ್ಜಿ ನನಗೆ ಸಾಂಬಲ್ ಮಾಡುವುದನ್ನು ಕಲಿಸಿದರು, ಅದು ಕೇವಲ ಖಾರದ ಬಗ್ಗೆ ಅಲ್ಲ, ರುಚಿಗಳ ಸಮತೋಲನದ ಬಗ್ಗೆ. ನಿಧಾನವಾಗಿ ಬೇಯಿಸುವುದು, ಸರಿಯಾದ ಪ್ರಮಾಣದ ಎಣ್ಣೆಯನ್ನು ಬಳಸುವುದು ಮತ್ತು ಟೆರಾಸಿ (ಸೀಗಡಿ ಪೇಸ್ಟ್) ಸೇರಿಸುವುದು ಇದರ ವಿಶೇಷತೆ. ಇದು ಪ್ರೀತಿಯ ಶ್ರಮ, ಒಂದು ಆಚರಣೆ, ಮತ್ತು ನಮ್ಮ ಪಾಕಶಾಲೆಯ ಗುರುತಿನ ಅವಿಭಾಜ್ಯ ಅಂಗವಾಗಿದೆ. ಈ ಸಾಂಬಲ್ ಟೆರಾಸಿ ಪಾಕವಿಧಾನವು ದೃಢವಾದ, ಸುಗಂಧಭರಿತ ಮತ್ತು ಸಂಪೂರ್ಣವಾಗಿ ವ್ಯಸನಕಾರಿಯಾಗಿದೆ.',
                ingredients: [{ item: 'ದೊಡ್ಡ ಕೆಂಪು ಮೆಣಸಿನಕಾಯಿಗಳು (ಕೇಬ್ ಮೆರಾ ಬೆಸಾರ್)', amount: '10-12, ಕಡಿಮೆ ಖಾರ ಬೇಕಿದ್ದರೆ ಬೀಜಗಳನ್ನು ತೆಗೆಯಿರಿ' }, { item: 'ಬರ್ಡ್\'ಸ್ ಐ ಮೆಣಸಿನಕಾಯಿಗಳು (ಕೇಬ್ ರಾವಿಟ್)', amount: '5-10, ಅಥವಾ ರುಚಿಗೆ (ಖಾರಕ್ಕಾಗಿ ಬೀಜಗಳನ್ನು ಇರಿಸಿ)' }, { item: 'ಈರುಳ್ಳಿ', amount: '8-10 ಮಧ್ಯಮ' }, { item: 'ಬೆಳ್ಳುಳ್ಳಿ ಎಸಳುಗಳು', amount: '4-5 ದೊಡ್ಡದು' }, { item: 'ಟೊಮೆಟೊ', amount: '1 ಮಧ್ಯಮ, ಒರಟಾಗಿ ಕತ್ತರಿಸಿದ' }, { item: 'ಸೀಗಡಿ ಪೇಸ್ಟ್ (ಟೆರಾಸಿ)', amount: '1 ಬ್ಲಾಕ್ (ಸುಮಾರು 1.5-2 ಸೆಂ.ಮೀ. ಘನ), ಹುರಿದ' }, { item: 'ತಾಳೆ ಬೆಲ್ಲ (ಗುಲಾ ಮೆರಾ)', amount: '1-2 ಚಮಚ, ತುರಿದ ಅಥವಾ ನುಣ್ಣಗೆ ಕತ್ತರಿಸಿದ' }, { item: 'ಹುಣಸೆಹಣ್ಣಿನ ಪೇಸ್ಟ್ (ಅಸಮ್ ಜಾವಾ)', amount: '1 ಚಮಚ, 2 ಚಮಚ ಬಿಸಿ ನೀರಿನೊಂದಿಗೆ ಬೆರೆಸಿ, ಸೋಸಿದ' }, { item: 'ಉಪ್ಪು', amount: '1 ಚಮಚ, ಅಥವಾ ರುಚಿಗೆ' }, { item: 'ಅಡುಗೆ ಎಣ್ಣೆ', amount: '1/2 ಕಪ್ (ಸುಮಾರು 120 ಮಿ.ಲೀ.)' }],
                instructions: ['ಮೊದಲು, ಮೆಣಸಿನಕಾಯಿಗಳು, ಈರುಳ್ಳಿ, ಬೆಳ್ಳುಳ್ಳಿ ಮತ್ತು ಟೊಮೆಟೊವನ್ನು ಸಿದ್ಧಪಡಿಸಿಕೊಳ್ಳಿ. ಅವೆಲ್ಲವನ್ನೂ ಒರಟಾಗಿ ಕತ್ತರಿಸಿ. ಮೆಣಸಿನಕಾಯಿಗಳಿಂದ ನಿಮ್ಮ ಬೆರಳುಗಳ ಮೇಲೆ ಆ ಪರಿಚಿತ ಜುಮ್ಮೆನಿಸುವಿಕೆ, ಬರಲಿರುವದಕ್ಕೆ ಉತ್ತಮ ಸಂಕೇತ.', 'ಈಗ, \'ಟೆರಾಸಿ\'ಗಾಗಿ. ಒಣ ಬಾಣಲೆಯಲ್ಲಿ ಕಡಿಮೆ ಉರಿಯಲ್ಲಿ ಸೀಗಡಿ ಪೇಸ್ಟ್ ಬ್ಲಾಕ್ ಅನ್ನು ಸುಮಾರು 2-3 ನಿಮಿಷಗಳ ಕಾಲ ನಿಧಾನವಾಗಿ ಹುರಿಯಿರಿ. ಇದು ಸ್ವಲ್ಪ ಗಾಢವಾಗುವುದನ್ನು ನೀವು ನೋಡುತ್ತೀರಿ ಮತ್ತು ಅದರ ಅದ್ಭುತವಾದ ತೀಕ್ಷ್ಣವಾದ ಸುವಾಸನೆಯು ನಿಮ್ಮ ಅಡುಗೆಮನೆಯನ್ನು ತುಂಬುತ್ತದೆ. ಇದು ಅದರ ಕಚ್ಚಾ ಅಂಚನ್ನು ಮೃದುಗೊಳಿಸುತ್ತದೆ ಮತ್ತು ಅದರ ರುಚಿಯನ್ನು ಆಳವಾಗಿಸುತ್ತದೆ. ಅದನ್ನು ಪಕ್ಕಕ್ಕೆ ಇರಿಸಿ.', 'ಪೇಸ್ಟ್ ಮಾಡಲು, ಕತ್ತರಿಸಿದ ಮೆಣಸಿನಕಾಯಿಗಳು, ಈರುಳ್ಳಿ, ಬೆಳ್ಳುಳ್ಳಿ ಮತ್ತು ಹುರಿದ \'ಟೆರಾಸಿ\'ಯನ್ನು ಕಲ್ಲಿನ ಒರಳು ಮತ್ತು ಕುಟ್ಟಣಿಯಲ್ಲಿ ಅಥವಾ ಆಹಾರ ಸಂಸ್ಕಾರಕದಲ್ಲಿ ಸೇರಿಸಿ. ಒರಟಾದ ಪೇಸ್ಟ್ ಆಗುವವರೆಗೆ ಕುಟ್ಟಿ ಅಥವಾ ಮಿಶ್ರಣ ಮಾಡಿ. ಇದು ಸಂಪೂರ್ಣವಾಗಿ ನಯವಾಗಿರಬಾರದು; ನಿಮಗೆ ಸ್ವಲ್ಪ ವಿನ್ಯಾಸ ಬೇಕು. ರೋಮಾಂಚಕ ಕೆಂಪು ಮತ್ತು ಕಿತ್ತಳೆ ಬಣ್ಣಗಳು ಹೊರಹೊಮ್ಮಲು ಪ್ರಾರಂಭಿಸುತ್ತವೆ.', 'ಒಂದು ಬಾಣಲೆ ಅಥವಾ ದೊಡ್ಡ, ಆಳವಾದ ಪ್ಯಾನ್‌ನಲ್ಲಿ ಅಡುಗೆ ಎಣ್ಣೆಯನ್ನು ಮಧ್ಯಮ ಉರಿಯಲ್ಲಿ ಬಿಸಿ ಮಾಡಿ. ಎಣ್ಣೆ ಬಿಸಿಯಾದ ನಂತರ, ನಿಮ್ಮ ಮೆಣಸಿನಕಾಯಿ ಪೇಸ್ಟ್ ಅನ್ನು ಎಚ್ಚರಿಕೆಯಿಂದ ಸೇರಿಸಿ. ಅದು ಚಿಮ್ಮುತ್ತದೆ, ಆದ್ದರಿಂದ ಜಾಗರೂಕರಾಗಿರಿ! ನಿರಂತರವಾಗಿ ಬೆರೆಸಿ. ಪೇಸ್ಟ್ ಸ್ವಲ್ಪ ಗಾಢವಾಗುವವರೆಗೆ ಮತ್ತು ಎಣ್ಣೆ ಮೇಲ್ಮೈಗೆ ಬರುವವರೆಗೆ ಸುಮಾರು 15-20 ನಿಮಿಷಗಳ ಕಾಲ ನಿರಂತರವಾಗಿ ಬೆರೆಸುತ್ತಾ ಬೇಯಿಸಿ. ಇದರರ್ಥ ಕಚ್ಚಾ ರುಚಿಗಳು ಹೋಗಿವೆ ಮತ್ತು ಸಾಂಬಲ್ ನಿಜವಾಗಿಯೂ ಬೇಯಿಸಿದೆ.', 'ಕತ್ತರಿಸಿದ ಟೊಮೆಟೊ, ತಾಳೆ ಬೆಲ್ಲ, ಸೋಸಿದ ಹುಣಸೆಹಣ್ಣಿನ ನೀರು ಮತ್ತು ಉಪ್ಪನ್ನು ಸೇರಿಸಿ. ತಾಳೆ ಬೆಲ್ಲ ಸಂಪೂರ್ಣವಾಗಿ ಕರಗುವಂತೆ ಎಲ್ಲವನ್ನೂ ಒಟ್ಟಿಗೆ ಬೆರೆಸಿ, ಸಾಂಬಲ್ ಮತ್ತೆ ದಪ್ಪವಾಗುವವರೆಗೆ ಮತ್ತು ಎಣ್ಣೆ ಮತ್ತೊಮ್ಮೆ ಬೇರ್ಪಡುವವರೆಗೆ ಇನ್ನೊಂದು 10-15 ನಿಮಿಷಗಳ ಕಾಲ ಬೇಯಿಸುವುದನ್ನು ಮುಂದುವರಿಸಿ. ರುಚಿ ನೋಡಿ. ಇದಕ್ಕೆ ಹೆಚ್ಚು ಉಪ್ಪು ಬೇಕೇ? ಖಾರವನ್ನು ಸಮತೋಲನಗೊಳಿಸಲು ಹೆಚ್ಚು ಸಕ್ಕರೆ ಬೇಕೇ? ನಿಮ್ಮ ಇಚ್ಛೆಯಂತೆ ಹೊಂದಿಸಿ. ಇದು ಖಾರ, ರುಚಿಕರ, ಸಿಹಿ ಮತ್ತು ಸ್ವಲ್ಪ ಹುಳಿಯ ಸಾಮರಸ್ಯದ ಮಿಶ್ರಣವಾಗಿರಬೇಕು.', 'ಒಮ್ಮೆ ಅದು ಪರಿಪೂರ್ಣ ಸಮತೋಲನವನ್ನು ತಲುಪಿ, ಎಣ್ಣೆ ಮೇಲೆ ಹೊಳೆಯುತ್ತಿದ್ದರೆ, ನಿಮ್ಮ ಸಾಂಬಲ್ ಸಿದ್ಧವಾಗಿದೆ. ಬಣ್ಣವು ಆಳವಾದ, ಸಮೃದ್ಧ ಕೆಂಪು, ಬಹುತೇಕ ಇಟ್ಟಿಗೆಯಂತೆ ಇರಬೇಕು. ಅದನ್ನು ಸ್ವಚ್ಛವಾದ, ಒಣ ಜಾಡಿಗೆ ವರ್ಗಾಯಿಸಿ. ಬಿಸಿ ಅನ್ನ, ಗ್ರಿಲ್ಡ್ ಮೀನು ಅಥವಾ ಹುರಿದ ಚಿಕನ್‌ನೊಂದಿಗೆ ತಕ್ಷಣವೇ ಬಡಿಸಿದರೆ ಇದು ಅದ್ಭುತವಾಗಿದೆ. ಈ ಸಾಂಬಲ್ ಅನ್ನು ರೆಫ್ರಿಜರೇಟರ್‌ನಲ್ಲಿ ಎರಡು ವಾರಗಳವರೆಗೆ ಚೆನ್ನಾಗಿ ಇಡಬಹುದು, ಅಥವಾ ಅದರ ಮೇಲೆ ಉತ್ತಮ ಎಣ್ಣೆಯ ಪದರವನ್ನು ಹೊಂದಿದ್ದರೆ ಇನ್ನೂ ಹೆಚ್ಚು ಕಾಲ ಇಡಬಹುದು.']
            },
            'zh-CN': {
                title: '参巴特拉西',
                description: '印尼参巴酱不仅仅是一种调味品，它是我们餐桌的灵魂，是每道菜肴中跳动的火热之心。我记得奶奶曾教导我，参巴酱的精髓在于平衡，在于从简单的食材中提炼出深邃复杂的风味。它是一份爱的劳动，一种仪式，也是印尼烹饪身份不可或缺的一部分。这份经典的参巴特拉西食谱，香气浓郁，令人上瘾，是几乎每张餐桌上都能找到的主食。',
                ingredients: [{ item: '大红辣椒 (cabe merah besar)', amount: '10-12根，若想减少辣度可去籽' }, { item: '小红辣椒 (cabe rawit)', amount: '5-10根，或依个人口味 (保留籽以增加辣度)' }, { item: '小葱头', amount: '8-10个中等大小' }, { item: '蒜瓣', amount: '4-5瓣大蒜' }, { item: '番茄', amount: '1个中等大小，粗略切碎' }, { item: '虾酱 (terasi)', amount: '1块 (约1.5-2厘米立方体)，烤香' }, { item: '棕榈糖 (gula merah)', amount: '1-2汤匙，磨碎或切碎' }, { item: '罗望子酱 (asam jawa)', amount: '1茶匙，与2汤匙热水混合，过滤' }, { item: '盐', amount: '1茶匙，或依个人口味' }, { item: '食用油', amount: '1/2杯 (约120毫升)' }],
                instructions: ['首先，准备好辣椒、小葱头、蒜和番茄，将它们粗略切碎。您会感觉到辣椒在指尖上带来的熟悉刺痛感，这是即将到来的美味预兆。无需过于讲究切工，因为它们最终都会被捣碎或搅打。', '接下来是关键的\'虾酱\'。将虾酱块放入干锅中，用小火轻轻烤2-3分钟。您会看到它颜色略微变深，并闻到其美妙而浓郁的香气弥漫厨房。这能柔化其生涩味并深化风味。将其取出备用。', '现在开始制作酱料！在研钵和杵中 (传统方法，也是我偏爱的方法，能保留质感) 或食物料理机中，将切碎的辣椒、小葱头、蒜和烤好的虾酱混合。捣碎或搅打成粗糙的酱。它不应该完全光滑；您需要保留一些质感。鲜艳的红色和橙色会开始显现。', '在炒锅或大而深的锅中，用中火加热食用油。奇迹将在此发生。当油开始闪烁时，小心地加入辣椒酱。它会发出滋滋声并溅出一些，所以请小心！不断搅拌。您会看到油开始变成美丽的火红色，香气也会增强，从尖锐转变为深沉的芳香。这就是我奶奶所说的\'烹煮\'过程。持续搅拌约15-20分钟，直到酱料颜色略微变深，油开始分离并浮到表面。这意味着生涩的味道已经消失，参巴酱真正煮熟了。', '加入切碎的番茄、棕榈糖、过滤后的罗望子水和盐。将所有食材搅拌均匀，确保棕榈糖完全溶解。参巴酱会变得稍微湿润和有光泽。继续烹煮，偶尔搅拌，再煮10-15分钟，直到参巴酱再次变稠，油再次分离。品尝一下。是否需要更多的盐？更多的糖来平衡辣度？根据您的喜好调整。它应该是一种辛辣、咸香、甜美和微酸的和谐混合。', '一旦达到完美的平衡，并且油在表面闪闪发光，您的参巴酱就做好了。颜色应该是深沉、浓郁的红色，几乎像砖红色。将其转移到干净、干燥的罐子里。它与热米饭、烤鱼或炸鸡一起食用非常美味。这种参巴酱在冰箱中可保存长达两周，如果确保表面有一层厚厚的油来密封，甚至可以保存更长时间。']
            },
            ms: {
                title: 'Sambal Terasi',
                description: 'Sambal bukan sekadar perasa di Indonesia; ia adalah jiwa hidangan kami, hati berapi yang berdenyut dalam setiap pinggan. Nenek saya pernah mengajar bahawa sambal bukan hanya tentang kepedasan, tetapi tentang keseimbangan, mengeluarkan rasa yang mendalam dan kompleks dari bahan-bahan ringkas. Ia adalah kerja keras yang penuh kasih sayang, ritual, dan bahagian yang tidak boleh dirunding dalam identiti masakan kami. Resipi Sambal Terasi klasik ini, yang kuat, harum, dan sangat ketagihan, adalah hidangan utama yang akan anda temui di hampir setiap meja.',
                ingredients: [{ item: 'Cili Merah Besar (cabe merah besar)', amount: '10-12 biji, buang biji jika kurang pedas' }, { item: 'Cili Padi (cabe rawit)', amount: '5-10 biji, atau secukup rasa (kekalkan biji untuk kepedasan)' }, { item: 'Bawang Merah Kecil', amount: '8-10 biji sederhana' }, { item: 'Bawang Putih', amount: '4-5 ulas besar' }, { item: 'Tomato', amount: '1 biji sederhana, dicincang kasar' }, { item: 'Belacan (terasi)', amount: '1 blok (kira-kira 1.5-2 cm kiub), dibakar' }, { item: 'Gula Melaka (gula merah)', amount: '1-2 sudu besar, disagat atau dicincang halus' }, { item: 'Asam Jawa (asam jawa)', amount: '1 sudu teh, dicampur dengan 2 sudu besar air panas, ditapis' }, { item: 'Garam', amount: '1 sudu teh, atau secukup rasa' }, { item: 'Minyak Masak', amount: '1/2 cawan (kira-kira 120 ml)' }],
                instructions: ['Mula-mula, sediakan cili, bawang merah kecil, bawang putih, dan tomato. Cincang kasar semuanya. Anda akan merasakan sengatan pedas yang biasa pada jari anda dari cili, petanda baik untuk apa yang akan datang. Jangan terlalu risau tentang kekemasan; semuanya akan ditumbuk atau dikisar.', 'Sekarang, untuk \'belacan\'. Ini sangat penting. Bakar perlahan blok belacan dalam kuali kering dengan api perlahan selama kira-kira 2-3 minit. Anda akan melihatnya sedikit gelap dan menghidu aroma harumnya yang memenuhi dapur anda. Ini melembutkan rasa mentahnya dan mendalamkan rasanya. Ketepikan.', 'Masa untuk membuat pes! Dalam lesung batu (cara tradisional, dan kaedah pilihan saya untuk tekstur) atau pengisar makanan, satukan cili yang dicincang, bawang merah kecil, bawang putih, dan belacan yang telah dibakar. Tumbuk atau kisar sehingga anda mendapat pes yang kasar. Ia tidak sepatutnya terlalu halus; anda mahukan sedikit tekstur di sana. Warna merah dan oren yang terang akan mula menyerlah.', 'Panaskan minyak masak dalam kuali atau periuk besar dan dalam dengan api sederhana. Di sinilah keajaiban berlaku. Apabila minyak berkilat, masukkan pes cili anda dengan berhati-hati. Ia akan berdesir dan memercik sedikit, jadi berhati-hati! Kacau sentiasa. Anda akan melihat minyak mula bertukar menjadi merah menyala yang cantik, dan aroma akan bertambah kuat, beralih dari tajam kepada sangat harum. Inilah bahagian \'memasak\' yang nenek saya ceritakan. Terus kacau selama kira-kira 15-20 minit, sehingga pes sedikit gelap dan minyak mula terpisah dan naik ke permukaan. Ini bermakna rasa mentah telah hilang, dan sambal benar-benar masak.', 'Masukkan tomato cincang, gula melaka, air asam jawa yang telah ditapis, dan garam. Kacau semuanya bersama, pastikan gula melaka larut sepenuhnya. Sambal akan menjadi sedikit lebih basah dan berkilat. Terus masak, kacau sekali-sekala, selama 10-15 minit lagi, sehingga sambal pekat semula dan minyak terpisah sekali lagi. Rasakannya. Adakah ia memerlukan lebih garam? Lebih gula untuk mengimbangi kepedasan? Sesuaikan mengikut citarasa anda. Ia sepatutnya menjadi gabungan harmoni antara pedas, masin, manis, dan sedikit masam.', 'Setelah mencapai keseimbangan yang sempurna dan minyak berkilat di atas, sambal anda sudah siap. Warnanya sepatutnya merah pekat dan kaya, hampir seperti bata. Pindahkan ke dalam balang yang bersih dan kering. Ia sangat sedap dihidangkan segera dengan nasi panas, ikan bakar, atau ayam goreng. Sambal ini akan tahan lama di dalam peti sejuk sehingga dua minggu, atau lebih lama jika anda memastikan ada lapisan minyak yang baik di atas untuk menutupnya.']
            }
        }
    }
,
    {
        id: '2026-05-20',
        publishedAt: '2026-05-20T11:58:00.000Z',
        title: 'Sultan',
        description: 'Sultan\' isn\'t just a dish; it\'s a memory, a warm hug from my childhood kitchen. I first learned this recipe, or rather, absorbed it through osmosis, watching my grandmother, my \'Nenek\', in her tiny, bustling kitchen in Geylang Serai. She never used measuring spoons, just her experienced hand and a knowing glance. The first time I tried to make it myself, fresh out of culinary school with all my fancy techniques, I burnt the rempah (spice paste) to a crisp. The kitchen filled with an acrid smoke, and Nenek just shook her head, a gentle smile playing on her lips. \'You rush, you ruin,\' she\'d say, \'Patience is the best spice.\' It was a humbling lesson, one that taught me the true essence of Singaporean cooking isn\'t about precision, but about feeling, about understanding the ingredients. The secret, I\'ve come to realize, lies in the rempah. You can\'t just blitz everything in a food processor and call it a day. Nenek would painstakingly pound her spices in a mortar and pestle, releasing their oils slowly, coaxing out their full fragrance. I\'m not going to lie, I use a food processor now, but I\'ve learned to \'bruise\' the spices first, a quick pulse, then add the aromatics. And the frying? Oh, the frying of the rempah is critical. It\'s not just about cooking it; it\'s about \'breaking the oil\', letting the spices truly bloom until the oil separates and shimmers on top, a deep, rich red. If you skimp on this step, your Sultan will taste flat, like a song without its chorus. Trust me on this, I\'ve made that mistake more times than I care to admit. And the chicken! Don\'t even think about using breast meat here. It\'s too lean, too dry. You need the succulent, forgiving nature of chicken thighs. Bone-in, skin-on if you\'re feeling adventurous and want extra flavor, but boneless, skinless works perfectly fine for a quicker prep. The slow simmer allows the chicken to absorb all those incredible flavors, becoming fork-tender, almost melting in your mouth. This dish isn\'t about speed; it\'s about building layers of flavor, letting them meld and deepen over time. It\'s a dish that demands respect, and in return, it gives you a meal that truly feels like royalty.',
        image: '/recipe-images/2026-05-20.jpg',
        prepTime: '25 min',
        cookTime: '45 min',
        difficulty: 'Medium',
        servings: 4,
        ingredients: [
            { item: 'Chicken Thighs, boneless, skinless', amount: '800g, cut into 2-inch pieces' },
            { item: 'Shallots', amount: '8-10, peeled and roughly chopped' },
            { item: 'Garlic cloves', amount: '6, peeled' },
            { item: 'Ginger', amount: '2-inch piece, peeled and sliced' },
            { item: 'Lemongrass', amount: '2 stalks, white part only, bruised' },
            { item: 'Dried Red Chilies', amount: '8-10, soaked in hot water for 15 mins, deseeded (adjust to spice preference)' },
            { item: 'Coriander Powder', amount: '2 tbsp' },
            { item: 'Cumin Powder', amount: '1 tbsp' },
            { item: 'Turmeric Powder', amount: '1 tsp' },
            { item: 'Star Anise', amount: '2 whole' },
            { item: 'Cardamom Pods', amount: '4-5, lightly crushed' },
            { item: 'Cloves', amount: '5-6' },
            { item: 'Cinnamon Stick', amount: '1 (2-inch piece)' },
            { item: 'Coconut Milk', amount: '400ml can (full fat, please!)' },
            { item: 'Tomatoes', amount: '2 medium, roughly chopped' },
            { item: 'Tamarind Paste', amount: '1 tbsp, mixed with 2 tbsp warm water, strained' },
            { item: 'Gula Melaka (Palm Sugar)', amount: '1 tbsp, grated or finely chopped (or brown sugar)' },
            { item: 'Salt', amount: 'To taste' },
            { item: 'Cooking Oil', amount: '4-5 tbsp' },
            { item: 'Fresh Coriander', amount: 'For garnish' },
            { item: 'Fried Shallots', amount: 'For garnish' }
        ],
        instructions: [
            'Prep the Rempah: First things first, get your spice paste ready. In a food processor, combine the chopped shallots, garlic, ginger, and the soaked, deseeded dried chilies. Pulse it a few times until it forms a coarse paste. Don\'t go for a super smooth puree; you want a bit of texture. Now, add the coriander powder, cumin powder, and turmeric powder. Give it another quick pulse to combine. The aroma should already be starting to wake up your kitchen.',
            'Sear the Chicken: Heat 2 tablespoons of cooking oil in a large, heavy-bottomed pot or Dutch oven over medium-high heat. When the oil shimmers, add your chicken pieces. Don\'t overcrowd the pan; do it in batches if you have to. Sear the chicken until it\'s beautifully golden-brown on all sides. You\'re not cooking it through, just getting that lovely crust. This step locks in the juices and adds depth. Remove the chicken and set aside.',
            'Fry the Rempah (The Crucial Step!): In the same pot, add another 2-3 tablespoons of oil. Reduce the heat to medium-low. Add your rempah paste, bruised lemongrass, star anise, crushed cardamom, cloves, and cinnamon stick. Now, this is where you earn your stripes. Stir constantly, patiently, for about 15-20 minutes. You\'ll see the paste darken, and the oil will start to \'break\' and separate, shimmering on the surface. The smell will transform from raw spices to a deep, intoxicating fragrance that fills your entire house. This is the \'wok hei\' of curries, the soul of the dish. Don\'t rush it, don\'t walk away!',
            'Build the Curry: Once your rempah is perfectly fried, add the chopped tomatoes. Stir and cook for about 5 minutes until they soften and break down, releasing their juices. Then, return the seared chicken to the pot. Stir well to coat every piece with that glorious spice paste. Pour in the full-fat coconut milk, the strained tamarind paste, and add the gula melaka (or brown sugar). Stir everything together gently.',
            'Simmer to Perfection: Bring the mixture to a gentle simmer, then reduce the heat to low, cover the pot, and let it cook for at least 25-30 minutes. Check occasionally, giving it a stir to prevent sticking. The sauce will thicken, and the chicken will become incredibly tender, practically falling apart. Taste and adjust the salt. You might need a bit more, or maybe a touch more sugar if you like it sweeter. The flavors should be rich, balanced, and complex.',
            'Serve It Up: Once the chicken is fork-tender and the sauce is thick and glossy, you\'re done! Ladle this magnificent Sultan onto a bed of fluffy steamed basmati rice. Garnish generously with fresh coriander leaves and a sprinkle of crispy fried shallots. Take a moment to admire your handiwork. This isn\'t just dinner; it\'s a celebration.'
        ],
        tags: ['Singaporean', 'Dinner', 'Authentic'],
        translations: {
            hi: {
                title: 'सुल्तान',
                description: '\'सुल्तान\' सिर्फ एक व्यंजन नहीं, यह मेरे बचपन की रसोई से मिली एक गर्मजोशी भरी याद है। मैंने यह नुस्खा अपनी नानी \'नेनेक\' को गेलांग सेराई की उनकी छोटी, हलचल भरी रसोई में देखकर सीखा था। वह कभी मापने वाले चम्मच का इस्तेमाल नहीं करती थीं, बस उनका अनुभवी हाथ और एक समझदार नज़र। इस व्यंजन का असली रहस्य \'रेम्पा\' (मसाला पेस्ट) में छिपा है। मसालों को धैर्य से भूनना और तेल का अलग होना ही इस डिश को शाही स्वाद देता है। यह जल्दबाजी का नहीं, बल्कि स्वाद की परतों को धीरे-धीरे विकसित करने का व्यंजन है, जो आपको सचमुच शाही अनुभव कराता है।',
                ingredients: [{ item: 'बोनलेस, स्किनलेस चिकन जांघें', amount: '800 ग्राम, 2-इंच के टुकड़ों में कटा हुआ' }, { item: 'प्याज़', amount: '8-10, छिले हुए और मोटे कटे हुए' }, { item: 'लहसुन की कलियाँ', amount: '6, छिले हुए' }, { item: 'अदरक', amount: '2-इंच का टुकड़ा, छिला हुआ और कटा हुआ' }, { item: 'लेमनग्रास', amount: '2 डंठल, केवल सफेद भाग, कुचला हुआ' }, { item: 'सूखी लाल मिर्च', amount: '8-10, 15 मिनट के लिए गर्म पानी में भिगोई हुई, बीज निकाली हुई (मसाले के अनुसार समायोजित करें)' }, { item: 'धनिया पाउडर', amount: '2 बड़े चम्मच' }, { item: 'जीरा पाउडर', amount: '1 बड़ा चम्मच' }, { item: 'हल्दी पाउडर', amount: '1 छोटा चम्मच' }, { item: 'चक्र फूल', amount: '2 साबुत' }, { item: 'इलायची', amount: '4-5, हल्का कुचला हुआ' }, { item: 'लौंग', amount: '5-6' }, { item: 'दालचीनी', amount: '1 (2-इंच का टुकड़ा)' }, { item: 'नारियल का दूध', amount: '400 मिलीलीटर का डिब्बा (फुल फैट, कृपया!)' }, { item: 'टमाटर', amount: '2 मध्यम, मोटे कटे हुए' }, { item: 'इमली का पेस्ट', amount: '1 बड़ा चम्मच, 2 बड़े चम्मच गर्म पानी के साथ मिलाया हुआ, छाना हुआ' }, { item: 'गुड़ मेलाका (खजूर का गुड़)', amount: '1 बड़ा चम्मच, कसा हुआ या बारीक कटा हुआ (या ब्राउन शुगर)' }, { item: 'नमक', amount: 'स्वादानुसार' }, { item: 'खाना पकाने का तेल', amount: '4-5 बड़े चम्मच' }, { item: 'ताज़ा धनिया', amount: 'सजाने के लिए' }, { item: 'तले हुए प्याज़', amount: 'सजाने के लिए' }],
                instructions: ['रेम्पा तैयार करें: सबसे पहले, अपना मसाला पेस्ट तैयार करें। फूड प्रोसेसर में कटे हुए प्याज़, लहसुन, अदरक और भिगोई हुई, बीज निकाली हुई सूखी मिर्च डालें। इसे कुछ बार पल्स करें जब तक यह दरदरा पेस्ट न बन जाए। अब धनिया पाउडर, जीरा पाउडर और हल्दी पाउडर डालकर एक बार फिर पल्स करें।', 'चिकन को भूनें: एक बड़े, भारी तले वाले बर्तन या डच ओवन में मध्यम-तेज आंच पर 2 बड़े चम्मच खाना पकाने का तेल गरम करें। जब तेल चमकने लगे, तो चिकन के टुकड़े डालें और सुनहरा भूरा होने तक भूनें। चिकन को पूरी तरह से पकाना नहीं है, बस एक सुंदर परत बनानी है। चिकन को निकालकर अलग रख दें।', 'रेम्पा भूनें (महत्वपूर्ण कदम!): उसी बर्तन में 2-3 बड़े चम्मच तेल और डालें। आंच को मध्यम-धीमा करें। रेम्पा पेस्ट, कुचली हुई लेमनग्रास, चक्र फूल, कुचली हुई इलायची, लौंग और दालचीनी डालें। लगातार, धैर्यपूर्वक लगभग 15-20 मिनट तक चलाते रहें, जब तक पेस्ट गहरा न हो जाए और तेल अलग होकर सतह पर चमकने न लगे।', 'करी तैयार करें: जब आपका रेम्पा पूरी तरह से भुन जाए, तो कटे हुए टमाटर डालें। 5 मिनट तक पकाएं जब तक वे नरम न हो जाएं। फिर, भुना हुआ चिकन वापस बर्तन में डालें और अच्छी तरह मिलाएं। पूरा नारियल का दूध, छाना हुआ इमली का पेस्ट और गुड़ मेलाका (या ब्राउन शुगर) डालें।', 'धीमी आंच पर पकाएं: मिश्रण को धीमी आंच पर उबाल आने दें, फिर आंच धीमी करके, बर्तन को ढककर कम से कम 25-30 मिनट तक पकने दें। बीच-बीच में चलाते रहें। सॉस गाढ़ा हो जाएगा और चिकन अविश्वसनीय रूप से नरम हो जाएगा। नमक चखकर आवश्यकतानुसार समायोजित करें।', 'परोसें: जब चिकन नरम हो जाए और सॉस गाढ़ा और चमकदार हो जाए, तो आपका सुल्तान तैयार है! इस शानदार व्यंजन को गरमागरम बासमती चावल के साथ परोसें। ताज़े धनिया के पत्तों और कुरकुरे तले हुए प्याज़ से सजाएँ।']
            },
            bn: {
                title: 'সুলতান',
                description: '\'সুলতান\' শুধু একটি পদ নয়; এটি আমার শৈশবের রান্নাঘরের এক উষ্ণ স্মৃতি। আমি এই রেসিপিটি আমার ঠাকুমা \'নেনেক\'-এর কাছ থেকে শিখেছিলাম, গেলাং সেরাই-এর তার ছোট, ব্যস্ত রান্নাঘরে তাকে দেখে। তিনি কখনো মাপার চামচ ব্যবহার করতেন না, শুধু তার অভিজ্ঞ হাত আর এক ঝলক দৃষ্টি। এই খাবারের আসল রহস্য \'রেম্পা\' (মশলার পেস্ট)-এর মধ্যে নিহিত। ধৈর্য ধরে মশলা ভাজা এবং তেল আলাদা হওয়া এই পদটিকে রাজকীয় স্বাদ দেয়। এটি দ্রুত তৈরির খাবার নয়, বরং ধীরে ধীরে স্বাদের স্তর তৈরি করার একটি প্রক্রিয়া, যা আপনাকে সত্যিই রাজকীয় অনুভূতি দেবে।',
                ingredients: [{ item: 'বোনলেস, স্কিনলেস মুরগির উরু', amount: '800 গ্রাম, 2-ইঞ্চির টুকরো করে কাটা' }, { item: 'শ্যালট পেঁয়াজ', amount: '8-10টি, খোসা ছাড়ানো এবং মোটা করে কাটা' }, { item: 'রসুনের কোয়া', amount: '6টি, খোসা ছাড়ানো' }, { item: 'আদা', amount: '2-ইঞ্চির টুকরো, খোসা ছাড়ানো এবং স্লাইস করা' }, { item: 'লেমনগ্রাস', amount: '2টি ডাঁটা, শুধুমাত্র সাদা অংশ, থেঁতো করা' }, { item: 'শুকনো লাল লঙ্কা', amount: '8-10টি, 15 মিনিটের জন্য গরম জলে ভেজানো, বীজ ছাড়ানো (ঝাল অনুযায়ী সামঞ্জস্য করুন)' }, { item: 'ধনে গুঁড়ো', amount: '2 টেবিল চামচ' }, { item: 'জিরে গুঁড়ো', amount: '1 টেবিল চামচ' }, { item: 'হলুদ গুঁড়ো', amount: '1 চা চামচ' }, { item: 'স্টার অ্যানিস', amount: '2টি আস্ত' }, { item: 'এলাচ', amount: '4-5টি, হালকা থেঁতো করা' }, { item: 'লবঙ্গ', amount: '5-6টি' }, { item: 'দারচিনি', amount: '1টি (2-ইঞ্চির টুকরো)' }, { item: 'নারকেলের দুধ', amount: '400 মিলি ক্যান (ফুল ফ্যাট, দয়া করে!)' }, { item: 'টমেটো', amount: '2টি মাঝারি, মোটা করে কাটা' }, { item: 'তেঁতুলের পেস্ট', amount: '1 টেবিল চামচ, 2 টেবিল চামচ গরম জলের সাথে মেশানো, ছাঁকা' }, { item: 'গুলা মেলাকা (তাল গুড়)', amount: '1 টেবিল চামচ, গ্রেট করা বা মিহি করে কাটা (বা ব্রাউন সুগার)' }, { item: 'লবণ', amount: 'স্বাদমতো' }, { item: 'রান্নার তেল', amount: '4-5 টেবিল চামচ' }, { item: 'তাজা ধনে পাতা', amount: 'সাজানোর জন্য' }, { item: 'ভাজা শ্যালট পেঁয়াজ', amount: 'সাজানোর জন্য' }],
                instructions: ['রেম্পা প্রস্তুত করুন: প্রথমে আপনার মশলার পেস্ট তৈরি করুন। ফুড প্রসেসরে কাটা শ্যালট পেঁয়াজ, রসুন, আদা এবং ভেজানো, বীজ ছাড়ানো শুকনো লঙ্কা একসাথে নিন। এটি কয়েকবার পালস করুন যতক্ষণ না এটি একটি মোটা পেস্ট তৈরি হয়। এবার ধনে গুঁড়ো, জিরে গুঁড়ো এবং হলুদ গুঁড়ো যোগ করে আরও একবার পালস করুন।', 'মুরগি ভাজুন: একটি বড়, ভারী তলার পাত্রে বা ডাচ ওভেনে মাঝারি-উচ্চ আঁচে 2 টেবিল চামচ রান্নার তেল গরম করুন। তেল গরম হলে মুরগির টুকরোগুলি যোগ করুন। মুরগি সব দিক থেকে সুন্দর সোনালি-বাদামী হওয়া পর্যন্ত ভাজুন। এটি পুরোপুরি রান্না করার দরকার নেই, শুধু একটি সুন্দর ক্রাস্ট তৈরি করুন। মুরগি তুলে একপাশে রাখুন।', 'রেম্পা ভাজুন (গুরুত্বপূর্ণ ধাপ!): একই পাত্রে আরও 2-3 টেবিল চামচ তেল যোগ করুন। আঁচ মাঝারি-নিচু করুন। আপনার রেম্পা পেস্ট, থেঁতো করা লেমনগ্রাস, স্টার অ্যানিস, থেঁতো করা এলাচ, লবঙ্গ এবং দারচিনি যোগ করুন। ক্রমাগত, ধৈর্য ধরে প্রায় 15-20 মিনিট নাড়ুন, যতক্ষণ না পেস্ট গাঢ় হয় এবং তেল আলাদা হয়ে উপরে চকচক করে।', 'কারি তৈরি করুন: আপনার রেম্পা পুরোপুরি ভাজা হয়ে গেলে, কাটা টমেটো যোগ করুন। প্রায় 5 মিনিট নাড়ুন এবং রান্না করুন যতক্ষণ না তারা নরম হয়ে যায়। তারপর, ভাজা মুরগি পাত্রে ফিরিয়ে আনুন। প্রতিটি টুকরা মশলার পেস্ট দিয়ে ভালোভাবে মাখিয়ে নিন। পুরো নারকেলের দুধ, ছাঁকা তেঁতুলের পেস্ট এবং গুলা মেলাকা (বা ব্রাউন সুগার) ঢেলে দিন।', 'সিদ্ধ করুন: মিশ্রণটি হালকা আঁচে সিদ্ধ হতে দিন, তারপর আঁচ কমিয়ে, পাত্রটি ঢেকে অন্তত 25-30 মিনিট রান্না করুন। মাঝে মাঝে নাড়ুন যাতে লেগে না যায়। সস ঘন হবে এবং মুরগি অবিশ্বাস্যভাবে নরম হয়ে যাবে। লবণ চেখে প্রয়োজন অনুযায়ী সামঞ্জস্য করুন।', 'পরিবেশন করুন: মুরগি কাঁটাচামচ দিয়ে নরম হয়ে গেলে এবং সস ঘন ও চকচকে হলে, আপনার সুলতান প্রস্তুত! এই চমৎকার সুলতান গরম বাসমতী ভাতের উপর পরিবেশন করুন। তাজা ধনে পাতা এবং কুড়কুড়ে ভাজা শ্যালট পেঁয়াজ দিয়ে উদারভাবে সাজান।']
            },
            mr: {
                title: 'सुलतान',
                description: '\'सुलतान\' हे केवळ एक पदार्थ नाही, तर माझ्या बालपणीच्या आठवणींचा एक उबदार स्पर्श आहे. माझ्या \'नेनेक\' आजीच्या गीलंग सेराई येथील छोट्या स्वयंपाकघरात मी हा पदार्थ शिकले. त्यांनी कधी मोजमाप वापरले नाही, फक्त त्यांचा अनुभवी हात आणि एक जाणकार नजर. मसाल्यांना घाई न करता, तेल सुटेपर्यंत परतून घेणे हे या पदार्थाचे रहस्य आहे. चिकनच्या मांडीचे मांस वापरल्याने ते रसाळ राहते. हा पदार्थ म्हणजे चवींचे थर हळूवारपणे एकत्र येऊन एक शाही अनुभव देतो.',
                ingredients: [{ item: 'बोनलेस, स्किनलेस चिकन मांडीचे तुकडे', amount: '८०० ग्रॅम, २ इंचाच्या तुकड्यांमध्ये कापलेले' }, { item: 'शालोट्स', amount: '८-१०, सोलून अंदाजे चिरलेले' }, { item: 'लसूण पाकळ्या', amount: '६, सोललेल्या' }, { item: 'आले', amount: '२ इंचाचा तुकडा, सोलून कापलेले' }, { item: 'लेमनग्रास', amount: '२ देठ, फक्त पांढरा भाग, ठेचलेले' }, { item: 'सुक्या लाल मिरच्या', amount: '८-१०, १५ मिनिटे गरम पाण्यात भिजवून, बिया काढलेल्या (तिखटपणा आवडीनुसार)' }, { item: 'धणे पूड', amount: '२ मोठे चमचे' }, { item: 'जिरे पूड', amount: '१ मोठा चमचा' }, { item: 'हळद पूड', amount: '१ लहान चमचा' }, { item: 'स्टार ॲनिस', amount: '२ अख्खे' }, { item: 'वेलदोडे', amount: '४-५, हलके ठेचलेले' }, { item: 'लवंगा', amount: '५-६' }, { item: 'दालचिनीचा तुकडा', amount: '१ (२ इंचाचा)' }, { item: 'नारळाचे दूध', amount: '४०० मिली कॅन (फुल फॅट, कृपया!)' }, { item: 'टोमॅटो', amount: '२ मध्यम, अंदाजे चिरलेले' }, { item: 'चिंचेचा कोळ', amount: '१ मोठा चमचा, २ मोठे चमचे कोमट पाण्यात मिसळून, गाळलेला' }, { item: 'गुळाची पावडर (पाम शुगर)', amount: '१ मोठा चमचा, किसलेली किंवा बारीक चिरलेली (किंवा ब्राऊन शुगर)' }, { item: 'मीठ', amount: 'चवीनुसार' }, { item: 'खाद्यतेल', amount: '४-५ मोठे चमचे' }, { item: 'ताजी कोथिंबीर', amount: 'सजावटीसाठी' }, { item: 'तळलेले शालोट्स', amount: 'सजावटीसाठी' }],
                instructions: ['मसाल्याची पेस्ट तयार करा: फूड प्रोसेसरमध्ये चिरलेले शालोट्स, लसूण, आले आणि भिजवलेल्या, बिया काढलेल्या सुक्या मिरच्या एकत्र करा. जाडसर पेस्ट होईपर्यंत काही वेळा पल्स करा. आता धणे पूड, जिरे पूड आणि हळद पूड घालून पुन्हा पल्स करा.', 'चिकन परतून घ्या: एका मोठ्या, जाड बुडाच्या भांड्यात किंवा डच ओव्हनमध्ये २ मोठे चमचे तेल मध्यम-उच्च आचेवर गरम करा. तेल गरम झाल्यावर चिकनचे तुकडे घाला. चिकन सर्व बाजूंनी सोनेरी तपकिरी होईपर्यंत परतून घ्या. चिकन बाजूला काढून ठेवा.', 'मसाल्याची पेस्ट परता (महत्त्वाची पायरी!): त्याच भांड्यात आणखी २-३ मोठे चमचे तेल घाला. आच मध्यम-मंद करा. मसाल्याची पेस्ट, ठेचलेले लेमनग्रास, स्टार ॲनिस, ठेचलेले वेलदोडे, लवंगा आणि दालचिनीचा तुकडा घाला. १५-२० मिनिटे सतत ढवळत, संयमाने परता. पेस्ट गडद होईल आणि तेल वेगळे होऊन वर तरंगू लागेल.', 'करी तयार करा: मसाल्याची पेस्ट व्यवस्थित परतल्यावर, चिरलेले टोमॅटो घाला. ५ मिनिटे ढवळून शिजवा, ते मऊ होऊन रस सोडतील. नंतर परतलेले चिकन भांड्यात घाला. प्रत्येक तुकड्याला मसाल्याची पेस्ट लागेल असे चांगले ढवळा. फुल-फॅट नारळाचे दूध, गाळलेला चिंचेचा कोळ आणि गुळाची पावडर घाला. सर्वकाही हळूवारपणे एकत्र ढवळा.', 'मंद आचेवर शिजवा: मिश्रण हलके उकळीला आणा, नंतर आच मंद करा, भांडे झाका आणि किमान २५-३० मिनिटे शिजवा. अधूनमधून ढवळत रहा. ग्रेव्ही घट्ट होईल आणि चिकन खूप मऊ होईल. चवीनुसार मीठ घाला.', 'सर्व्ह करा: चिकन मऊ झाल्यावर आणि ग्रेव्ही घट्ट व चमकदार झाल्यावर, तुमचा \'सुलतान\' तयार आहे! गरमागरम बासमती भातासोबत वाढा. ताज्या कोथिंबिरीने आणि कुरकुरीत तळलेल्या शालोट्सने सजवा.']
            },
            te: {
                title: 'సుల్తాన్',
                description: '\'సుల్తాన్\' కేవలం ఒక వంటకం కాదు, అది నా చిన్ననాటి జ్ఞాపకం, అమ్మమ్మ చేతి వంట రుచి. ఆమె \'రెమ్పా\' (మసాలా పేస్ట్)ని ఓపికగా వేయించే విధానం, నూనె విడిపోయే వరకు వేచి చూడటం, ఆ సువాసన ఇంటిని నింపేయడం నాకు ఇప్పటికీ గుర్తుంది. ఈ వంటకం వేగం గురించి కాదు, రుచుల పొరలను నిర్మించడం గురించి. ప్రతి ముక్కలోనూ రాజసం ఉట్టిపడేలా, నోట్లో కరిగిపోయేలా ఉండే ఈ చికెన్ కూర నిజంగా ఒక అద్భుతం.',
                ingredients: [{ item: 'ఎముకలు లేని, చర్మం లేని చికెన్ తొడలు', amount: '800 గ్రాములు, 2-అంగుళాల ముక్కలుగా కట్ చేయాలి' }, { item: 'చిన్న ఉల్లిపాయలు', amount: '8-10, తొక్క తీసి, సుమారుగా తరిగినవి' }, { item: 'వెల్లుల్లి రెబ్బలు', amount: '6, తొక్క తీసినవి' }, { item: 'అల్లం', amount: '2-అంగుళాల ముక్క, తొక్క తీసి, ముక్కలుగా చేసినది' }, { item: 'నిమ్మగడ్డి', amount: '2 కాడలు, తెల్లటి భాగం మాత్రమే, నలిపినవి' }, { item: 'ఎండు మిరపకాయలు', amount: '8-10, 15 నిమిషాలు వేడి నీటిలో నానబెట్టి, గింజలు తీసినవి (కారం ప్రకారం సర్దుబాటు చేయండి)' }, { item: 'ధనియాల పొడి', amount: '2 టేబుల్ స్పూన్లు' }, { item: 'జీలకర్ర పొడి', amount: '1 టేబుల్ స్పూన్' }, { item: 'పసుపు పొడి', amount: '1 టీస్పూన్' }, { item: 'స్టార్ అనైస్', amount: '2 మొత్తం' }, { item: 'యాలకులు', amount: '4-5, తేలికగా నలిపినవి' }, { item: 'లవంగాలు', amount: '5-6' }, { item: 'దాల్చినచెక్క', amount: '1 (2-అంగుళాల ముక్క)' }, { item: 'కొబ్బరి పాలు', amount: '400 మి.లీ డబ్బా (పూర్తి కొవ్వు, దయచేసి!)' }, { item: 'టమాటాలు', amount: '2 మధ్యస్థం, సుమారుగా తరిగినవి' }, { item: 'చింతపండు గుజ్జు', amount: '1 టేబుల్ స్పూన్, 2 టేబుల్ స్పూన్ల గోరువెచ్చని నీటితో కలిపి, వడకట్టినది' }, { item: 'గులా మెలాకా (తాటి బెల్లం)', amount: '1 టేబుల్ స్పూన్, తురిమినది లేదా సన్నగా తరిగినది (లేదా బ్రౌన్ షుగర్)' }, { item: 'ఉప్పు', amount: 'రుచికి సరిపడా' }, { item: 'వంట నూనె', amount: '4-5 టేబుల్ స్పూన్లు' }, { item: 'తాజా కొత్తిమీర', amount: 'అలంకరణ కోసం' }, { item: 'వేయించిన చిన్న ఉల్లిపాయలు', amount: 'అలంకరణ కోసం' }],
                instructions: ['రెమ్పా సిద్ధం చేయండి: ముందుగా, మీ మసాలా పేస్ట్ సిద్ధం చేసుకోండి. ఫుడ్ ప్రాసెసర్‌లో తరిగిన చిన్న ఉల్లిపాయలు, వెల్లుల్లి, అల్లం మరియు నానబెట్టిన, గింజలు తీసిన ఎండు మిరపకాయలను కలపండి. ఇది ముతక పేస్ట్‌గా మారే వరకు కొన్ని సార్లు పల్స్ చేయండి. ఇప్పుడు, ధనియాల పొడి, జీలకర్ర పొడి మరియు పసుపు పొడిని జోడించండి. కలపడానికి మరోసారి త్వరగా పల్స్ చేయండి.', 'చికెన్‌ను వేయించండి: ఒక పెద్ద, మందపాటి అడుగున్న కుండ లేదా డచ్ ఓవెన్‌లో మధ్యస్థ-అధిక వేడి మీద 2 టేబుల్ స్పూన్ల వంట నూనెను వేడి చేయండి. నూనె వేడెక్కగానే, మీ చికెన్ ముక్కలను వేయండి. చికెన్ అన్ని వైపులా అందంగా బంగారు గోధుమ రంగులోకి మారే వరకు వేయించండి. చికెన్‌ను తీసి పక్కన పెట్టండి.', 'రెమ్పాను వేయించండి (ముఖ్యమైన దశ!): అదే కుండలో, మరో 2-3 టేబుల్ స్పూన్ల నూనెను జోడించండి. మంటను మధ్యస్థ-తక్కువకు తగ్గించండి. మీ రెమ్పా పేస్ట్, నలిపిన నిమ్మగడ్డి, స్టార్ అనైస్, నలిపిన యాలకులు, లవంగాలు మరియు దాల్చినచెక్కను జోడించండి. సుమారు 15-20 నిమిషాలు నిరంతరం, ఓపికగా కలుపుతూ ఉండండి. పేస్ట్ ముదురు రంగులోకి మారి, నూనె విడిపోయి, ఉపరితలంపై మెరుస్తూ ఉంటుంది.', 'కూరను తయారు చేయండి: మీ రెమ్పా సంపూర్ణంగా వేగిన తర్వాత, తరిగిన టమాటాలను జోడించండి. అవి మెత్తబడి, రసాలను విడుదల చేసే వరకు సుమారు 5 నిమిషాలు కలుపుతూ ఉడికించండి. తరువాత, వేయించిన చికెన్‌ను కుండలోకి తిరిగి వేయండి. ప్రతి ముక్కకు మసాలా పేస్ట్ బాగా పట్టేలా కలపండి. పూర్తి కొవ్వు కొబ్బరి పాలు, వడకట్టిన చింతపండు గుజ్జును పోసి, గులా మెలాకా (లేదా బ్రౌన్ షుగర్) జోడించండి.', 'పరిపూర్ణంగా ఉడికించండి: మిశ్రమాన్ని నెమ్మదిగా మరిగించి, ఆపై మంటను తక్కువకు తగ్గించి, కుండను మూతపెట్టి, కనీసం 25-30 నిమిషాలు ఉడికించండి. అప్పుడప్పుడు తనిఖీ చేస్తూ, అడుగు అంటకుండా కలుపుతూ ఉండండి. సాస్ చిక్కబడి, చికెన్ చాలా మృదువుగా మారుతుంది. ఉప్పును రుచి చూసి సర్దుబాటు చేయండి.', 'వడ్డించండి: చికెన్ మృదువుగా మారి, సాస్ చిక్కగా మరియు నిగనిగలాడుతూ ఉన్న తర్వాత, మీరు పూర్తి చేసినట్లే! ఈ అద్భుతమైన సుల్తాన్‌ను మెత్తటి బాస్మతి అన్నం మీద వడ్డించండి. తాజా కొత్తిమీర ఆకులు మరియు కొద్దిగా క్రిస్పీ వేయించిన చిన్న ఉల్లిపాయలతో అలంకరించండి.']
            },
            ta: {
                title: 'சுல்தான்',
                description: '\'சுல்தான்\' என்பது வெறும் உணவு அல்ல; அது என் குழந்தைப்பருவ சமையலறையின் நினைவுகள், என் பாட்டி \'நெனெக்\'கின் அன்பான அரவணைப்பு. மசாலாப் பொருட்களைப் பொறுமையுடன் வறுத்து, எண்ணெய் பிரிந்து வரும் வரை காத்திருந்து, அந்த நறுமணம் வீடெங்கும் பரவும் விதம் எனக்கு இன்றும் நினைவிருக்கிறது. இந்த உணவு அவசரத்தைப் பற்றியது அல்ல, சுவையின் அடுக்குகளை உருவாக்குவது பற்றியது. ஒவ்வொரு கவளத்திலும் ராஜ கம்பீரமும், வாயில் கரையும் மென்மையும் கொண்ட இந்த கோழி குழம்பு ஒரு உண்மையான விருந்து.',
                ingredients: [{ item: 'எலும்பில்லாத, தோலில்லாத கோழித் தொடைப் பகுதிகள்', amount: '800 கிராம், 2 அங்குல துண்டுகளாக வெட்டப்பட்டது' }, { item: 'சின்ன வெங்காயம்', amount: '8-10, தோல் உரித்து, தோராயமாக நறுக்கியது' }, { item: 'பூண்டு பற்கள்', amount: '6, தோல் உரித்தது' }, { item: 'இஞ்சி', amount: '2 அங்குல துண்டு, தோல் உரித்து, துண்டுகளாக வெட்டப்பட்டது' }, { item: 'எலுமிச்சை புல்', amount: '2 தண்டுகள், வெள்ளை பகுதி மட்டும், நசுக்கியது' }, { item: 'காய்ந்த மிளகாய்', amount: '8-10, 15 நிமிடங்கள் வெந்நீரில் ஊறவைத்து, விதைகள் நீக்கப்பட்டது (காரத்திற்கு ஏற்ப சரிசெய்யவும்)' }, { item: 'மல்லித்தூள்', amount: '2 தேக்கரண்டி' }, { item: 'சீரகத்தூள்', amount: '1 தேக்கரண்டி' }, { item: 'மஞ்சள் தூள்', amount: '1 தேக்கரண்டி' }, { item: 'நட்சத்திர சோம்பு', amount: '2 முழுது' }, { item: 'ஏலக்காய்', amount: '4-5, லேசாக நசுக்கியது' }, { item: 'கிராம்பு', amount: '5-6' }, { item: 'இலவங்கப்பட்டை', amount: '1 (2 அங்குல துண்டு)' }, { item: 'தேங்காய்ப் பால்', amount: '400 மில்லி டின் (முழு கொழுப்பு, தயவுசெய்து!)' }, { item: 'தக்காளி', amount: '2 நடுத்தர, தோராயமாக நறுக்கியது' }, { item: 'புளிக்கரைசல்', amount: '1 தேக்கரண்டி, 2 தேக்கரண்டி வெதுவெதுப்பான நீரில் கலந்து, வடிகட்டியது' }, { item: 'குலா மெலாக்கா (பனை வெல்லம்)', amount: '1 தேக்கரண்டி, துருவியது அல்லது பொடியாக நறுக்கியது (அல்லது பழுப்பு சர்க்கரை)' }, { item: 'உப்பு', amount: 'சுவைக்கு ஏற்ப' }, { item: 'சமையல் எண்ணெய்', amount: '4-5 தேக்கரண்டி' }, { item: 'புதிய கொத்தமல்லி', amount: 'அலங்கரிக்க' }, { item: 'வறுத்த சின்ன வெங்காயம்', amount: 'அலங்கரிக்க' }],
                instructions: ['ரெம்பாவை தயார் செய்யவும்: முதலில், உங்கள் மசாலா விழுதை தயார் செய்யவும். ஒரு உணவு செயலியில் நறுக்கிய சின்ன வெங்காயம், பூண்டு, இஞ்சி மற்றும் ஊறவைத்த, விதை நீக்கப்பட்ட காய்ந்த மிளகாயை சேர்க்கவும். இது ஒரு கரடுமுரடான விழுதாக மாறும் வரை சில முறை அரைக்கவும். இப்போது, மல்லித்தூள், சீரகத்தூள் மற்றும் மஞ்சள் தூள் சேர்க்கவும். கலக்க மற்றொரு முறை விரைவாக அரைக்கவும்.', 'கோழியை வறுக்கவும்: ஒரு பெரிய, கனமான அடிப்பகுதியுள்ள பாத்திரம் அல்லது டச்சு அடுப்பில் நடுத்தர-அதிக வெப்பத்தில் 2 தேக்கரண்டி சமையல் எண்ணெயை சூடாக்கவும். எண்ணெய் சூடானதும், உங்கள் கோழித் துண்டுகளை சேர்க்கவும். கோழி அனைத்து பக்கங்களிலும் அழகாக பொன்னிறமாக மாறும் வரை வறுக்கவும். கோழியை எடுத்து தனியாக வைக்கவும்.', 'ரெம்பாவை வறுக்கவும் (முக்கியமான படி!): அதே பாத்திரத்தில், மேலும் 2-3 தேக்கரண்டி எண்ணெய் சேர்க்கவும். வெப்பத்தை நடுத்தர-குறைவாக குறைக்கவும். உங்கள் ரெம்பா விழுது, நசுக்கிய எலுமிச்சை புல், நட்சத்திர சோம்பு, நசுக்கிய ஏலக்காய், கிராம்பு மற்றும் இலவங்கப்பட்டை சேர்க்கவும். சுமார் 15-20 நிமிடங்கள் தொடர்ந்து, பொறுமையாக கிளறவும். விழுது கருமையாவதையும், எண்ணெய் பிரிந்து மேற்பரப்பில் பளபளப்பதையும் நீங்கள் காண்பீர்கள்.', 'குழம்பை உருவாக்கவும்: உங்கள் ரெம்பா சரியாக வறுத்ததும், நறுக்கிய தக்காளியை சேர்க்கவும். அவை மென்மையாகும் வரை சுமார் 5 நிமிடங்கள் கிளறி சமைக்கவும். பின்னர், வறுத்த கோழியை மீண்டும் பாத்திரத்தில் சேர்க்கவும். ஒவ்வொரு துண்டிலும் அந்த அற்புதமான மசாலா விழுது பூசப்படும் வரை நன்கு கிளறவும். முழு கொழுப்பு தேங்காய்ப் பால், வடிகட்டிய புளிக்கரைசல் மற்றும் குலா மெலாக்கா (அல்லது பழுப்பு சர்க்கரை) சேர்க்கவும்.', 'சரியாக வேகவைக்கவும்: கலவையை மெதுவாக கொதிக்க வைத்து, பின்னர் வெப்பத்தை குறைத்து, பாத்திரத்தை மூடி, குறைந்தபட்சம் 25-30 நிமிடங்கள் சமைக்கவும். அவ்வப்போது சரிபார்த்து, ஒட்டாமல் இருக்க கிளறவும். சாஸ் கெட்டியாகி, கோழி நம்பமுடியாத அளவிற்கு மென்மையாக மாறும். உப்பு சரிபார்க்கவும்.', 'பரிமாறவும்: கோழி மென்மையாகவும், சாஸ் கெட்டியாகவும், பளபளப்பாகவும் ஆனதும், நீங்கள் முடித்துவிட்டீர்கள்! இந்த அற்புதமான சுல்தானை மென்மையான பாஸ்மதி அரிசி மீது பரிமாறவும். புதிய கொத்தமல்லி இலைகள் மற்றும் சிறிது மொறுமொறுப்பான வறுத்த சின்ன வெங்காயத்துடன் தாராளமாக அலங்கரிக்கவும்.']
            },
            kn: {
                title: 'ಸುಲ್ತಾನ್',
                description: '\'ಸುಲ್ತಾನ್\' ಕೇವಲ ಒಂದು ಖಾದ್ಯವಲ್ಲ, ಅದು ನನ್ನ ಬಾಲ್ಯದ ಅಡುಗೆಮನೆಯಿಂದ ಬಂದ ಪ್ರೀತಿಯ ನೆನಪು. ನನ್ನ \'ನೆನೆಕ್\' ಅಜ್ಜಿ ಗೇಲಾಂಗ್ ಸೆರಾಯ್‌ನಲ್ಲಿರುವ ಅವರ ಪುಟ್ಟ ಅಡುಗೆಮನೆಯಲ್ಲಿ ಇದನ್ನು ತಯಾರಿಸುವುದನ್ನು ನೋಡಿ ನಾನು ಕಲಿತೆ. ಅವರು ಅಳತೆ ಚಮಚಗಳನ್ನು ಬಳಸುತ್ತಿರಲಿಲ್ಲ, ಕೇವಲ ಅವರ ಅನುಭವಿ ಕೈ ಮತ್ತು ಒಂದು ನೋಟ. ಮಸಾಲೆಗಳನ್ನು ಸರಿಯಾಗಿ ಹುರಿಯುವುದು, ಎಣ್ಣೆ ಬೇರ್ಪಡುವವರೆಗೆ ತಾಳ್ಮೆಯಿಂದ ಕಾಯುವುದು ಈ ಖಾದ್ಯದ ರಹಸ್ಯ. ಕೋಳಿ ತೊಡೆಯ ಮಾಂಸವು ಇದನ್ನು ರಸಭರಿತವಾಗಿಸುತ್ತದೆ. ಇದು ರುಚಿಗಳ ಪದರಗಳನ್ನು ನಿಧಾನವಾಗಿ ಬೆರೆಸಿ, ರಾಜಮನೆತನದ ಅನುಭವ ನೀಡುವ ಖಾದ್ಯ.',
                ingredients: [{ item: 'ಮೂಳೆರಹಿತ, ಚರ್ಮರಹಿತ ಕೋಳಿ ತೊಡೆಯ ಮಾಂಸ', amount: '೮೦೦ ಗ್ರಾಂ, ೨ ಇಂಚಿನ ತುಂಡುಗಳಾಗಿ ಕತ್ತರಿಸಿದ' }, { item: 'ಶಾಲೋಟ್ಸ್', amount: '೮-೧೦, ಸಿಪ್ಪೆ ಸುಲಿದು ಒರಟಾಗಿ ಕತ್ತರಿಸಿದ' }, { item: 'ಬೆಳ್ಳುಳ್ಳಿ ಎಸಳುಗಳು', amount: '೬, ಸಿಪ್ಪೆ ಸುಲಿದ' }, { item: 'ಶುಂಠಿ', amount: '೨ ಇಂಚಿನ ತುಂಡು, ಸಿಪ್ಪೆ ಸುಲಿದು ಹೋಳು ಮಾಡಿದ' }, { item: 'ನಿಂಬೆ ಹುಲ್ಲು', amount: '೨ ಕಾಂಡಗಳು, ಬಿಳಿ ಭಾಗ ಮಾತ್ರ, ಜಜ್ಜಿದ' }, { item: 'ಒಣ ಕೆಂಪು ಮೆಣಸಿನಕಾಯಿ', amount: '೮-೧೦, ೧೫ ನಿಮಿಷ ಬಿಸಿ ನೀರಿನಲ್ಲಿ ನೆನೆಸಿ, ಬೀಜ ತೆಗೆದ (ಖಾರದ ಆದ್ಯತೆಗೆ ಅನುಗುಣವಾಗಿ ಹೊಂದಿಸಿ)' }, { item: 'ಕೊತ್ತಂಬರಿ ಪುಡಿ', amount: '೨ ದೊಡ್ಡ ಚಮಚ' }, { item: 'ಜೀರಿಗೆ ಪುಡಿ', amount: '೧ ದೊಡ್ಡ ಚಮಚ' }, { item: 'ಅರಿಶಿನ ಪುಡಿ', amount: '೧ ಸಣ್ಣ ಚಮಚ' }, { item: 'ಸ್ಟಾರ್ ಅನೀಸ್', amount: '೨ ಇಡೀ' }, { item: 'ಏಲಕ್ಕಿ ಕಾಯಿಗಳು', amount: '೪-೫, ಲಘುವಾಗಿ ಜಜ್ಜಿದ' }, { item: 'ಲವಂಗ', amount: '೫-೬' }, { item: 'ದಾಲ್ಚಿನ್ನಿ ತುಂಡು', amount: '೧ (೨ ಇಂಚಿನ)' }, { item: 'ತೆಂಗಿನ ಹಾಲು', amount: '೪೦೦ ಮಿಲಿ ಕ್ಯಾನ್ (ಪೂರ್ಣ ಕೊಬ್ಬಿನ, ದಯವಿಟ್ಟು!)' }, { item: 'ಟೊಮೆಟೊ', amount: '೨ ಮಧ್ಯಮ, ಒರಟಾಗಿ ಕತ್ತರಿಸಿದ' }, { item: 'ಹುಣಸೆಹಣ್ಣಿನ ಪೇಸ್ಟ್', amount: '೧ ದೊಡ್ಡ ಚಮಚ, ೨ ದೊಡ್ಡ ಚಮಚ ಬೆಚ್ಚಗಿನ ನೀರಿನಲ್ಲಿ ಬೆರೆಸಿ, ಸೋಸಿದ' }, { item: 'ಗುಲಾ ಮೆಲಾಕಾ (ತಾಳೆ ಬೆಲ್ಲ)', amount: '೧ ದೊಡ್ಡ ಚಮಚ, ತುರಿದ ಅಥವಾ ನುಣ್ಣಗೆ ಕತ್ತರಿಸಿದ (ಅಥವಾ ಕಂದು ಸಕ್ಕರೆ)' }, { item: 'ಉಪ್ಪು', amount: 'ರುಚಿಗೆ ತಕ್ಕಷ್ಟು' }, { item: 'ಅಡುಗೆ ಎಣ್ಣೆ', amount: '೪-೫ ದೊಡ್ಡ ಚಮಚ' }, { item: 'ತಾಜಾ ಕೊತ್ತಂಬರಿ', amount: 'ಅಲಂಕಾರಕ್ಕಾಗಿ' }, { item: 'ಹುರಿದ ಶಾಲೋಟ್ಸ್', amount: 'ಅಲಂಕಾರಕ್ಕಾಗಿ' }],
                instructions: ['ರೆಂಪಾ ತಯಾರಿಸಿ: ಮೊದಲಿಗೆ, ನಿಮ್ಮ ಮಸಾಲೆ ಪೇಸ್ಟ್ ಅನ್ನು ಸಿದ್ಧಪಡಿಸಿ. ಆಹಾರ ಸಂಸ್ಕಾರಕದಲ್ಲಿ ಕತ್ತರಿಸಿದ ಶಾಲೋಟ್ಸ್, ಬೆಳ್ಳುಳ್ಳಿ, ಶುಂಠಿ ಮತ್ತು ನೆನೆಸಿದ, ಬೀಜ ತೆಗೆದ ಒಣ ಮೆಣಸಿನಕಾಯಿಗಳನ್ನು ಸೇರಿಸಿ. ಒರಟಾದ ಪೇಸ್ಟ್ ಆಗುವವರೆಗೆ ಕೆಲವು ಬಾರಿ ಪಲ್ಸ್ ಮಾಡಿ. ಈಗ ಕೊತ್ತಂಬರಿ ಪುಡಿ, ಜೀರಿಗೆ ಪುಡಿ ಮತ್ತು ಅರಿಶಿನ ಪುಡಿ ಸೇರಿಸಿ. ಮಿಶ್ರಣ ಮಾಡಲು ಮತ್ತೊಮ್ಮೆ ಪಲ್ಸ್ ಮಾಡಿ.', 'ಕೋಳಿಯನ್ನು ಹುರಿಯಿರಿ: ದೊಡ್ಡ, ದಪ್ಪ ತಳದ ಪಾತ್ರೆ ಅಥವಾ ಡಚ್ ಓವನ್‌ನಲ್ಲಿ ೨ ದೊಡ್ಡ ಚಮಚ ಅಡುಗೆ ಎಣ್ಣೆಯನ್ನು ಮಧ್ಯಮ-ಹೆಚ್ಚಿನ ಉರಿಯಲ್ಲಿ ಬಿಸಿ ಮಾಡಿ. ಎಣ್ಣೆ ಬಿಸಿಯಾದಾಗ, ಕೋಳಿ ತುಂಡುಗಳನ್ನು ಸೇರಿಸಿ. ಕೋಳಿ ಎಲ್ಲಾ ಕಡೆ ಸುಂದರವಾಗಿ ಚಿನ್ನದ ಕಂದು ಬಣ್ಣ ಬರುವವರೆಗೆ ಹುರಿಯಿರಿ. ಕೋಳಿಯನ್ನು ತೆಗೆದು ಪಕ್ಕಕ್ಕೆ ಇಡಿ.', 'ರೆಂಪಾವನ್ನು ಹುರಿಯಿರಿ (ನಿರ್ಣಾಯಕ ಹಂತ!): ಅದೇ ಪಾತ್ರೆಯಲ್ಲಿ ಮತ್ತಷ್ಟು ೨-೩ ದೊಡ್ಡ ಚಮಚ ಎಣ್ಣೆ ಸೇರಿಸಿ. ಉರಿಯನ್ನು ಮಧ್ಯಮ-ಕಡಿಮೆಗೆ ಇಳಿಸಿ. ನಿಮ್ಮ ರೆಂಪಾ ಪೇಸ್ಟ್, ಜಜ್ಜಿದ ನಿಂಬೆ ಹುಲ್ಲು, ಸ್ಟಾರ್ ಅನೀಸ್, ಜಜ್ಜಿದ ಏಲಕ್ಕಿ, ಲವಂಗ ಮತ್ತು ದಾಲ್ಚಿನ್ನಿ ತುಂಡು ಸೇರಿಸಿ. ಸುಮಾರು ೧೫-೨೦ ನಿಮಿಷಗಳ ಕಾಲ ನಿರಂತರವಾಗಿ, ತಾಳ್ಮೆಯಿಂದ ಬೆರೆಸಿ. ಪೇಸ್ಟ್ ಕಪ್ಪಾಗುತ್ತದೆ ಮತ್ತು ಎಣ್ಣೆ \'ಬೇರ್ಪಟ್ಟು\' ಮೇಲ್ಮೈಯಲ್ಲಿ ಹೊಳೆಯಲು ಪ್ರಾರಂಭಿಸುತ್ತದೆ.', 'ಕರಿ ತಯಾರಿಸಿ: ನಿಮ್ಮ ರೆಂಪಾ ಸಂಪೂರ್ಣವಾಗಿ ಹುರಿದ ನಂತರ, ಕತ್ತರಿಸಿದ ಟೊಮೆಟೊಗಳನ್ನು ಸೇರಿಸಿ. ಅವು ಮೃದುವಾಗಿ ಒಡೆಯುವವರೆಗೆ ಸುಮಾರು ೫ ನಿಮಿಷಗಳ ಕಾಲ ಬೆರೆಸಿ ಬೇಯಿಸಿ. ನಂತರ, ಹುರಿದ ಕೋಳಿಯನ್ನು ಪಾತ್ರೆಗೆ ಹಿಂತಿರುಗಿಸಿ. ಪ್ರತಿ ತುಂಡಿಗೂ ಮಸಾಲೆ ಪೇಸ್ಟ್ ಲೇಪಿಸುವಂತೆ ಚೆನ್ನಾಗಿ ಬೆರೆಸಿ. ಪೂರ್ಣ ಕೊಬ್ಬಿನ ತೆಂಗಿನ ಹಾಲು, ಸೋಸಿದ ಹುಣಸೆಹಣ್ಣಿನ ಪೇಸ್ಟ್ ಮತ್ತು ಗುಲಾ ಮೆಲಾಕಾ (ಅಥವಾ ಕಂದು ಸಕ್ಕರೆ) ಸೇರಿಸಿ. ಎಲ್ಲವನ್ನೂ ನಿಧಾನವಾಗಿ ಒಟ್ಟಿಗೆ ಬೆರೆಸಿ.', 'ಪರಿಪೂರ್ಣತೆಗೆ ಕುದಿಸಿ: ಮಿಶ್ರಣವನ್ನು ನಿಧಾನವಾಗಿ ಕುದಿಯಲು ತಂದು, ನಂತರ ಉರಿಯನ್ನು ಕಡಿಮೆ ಮಾಡಿ, ಪಾತ್ರೆಯನ್ನು ಮುಚ್ಚಿ ಮತ್ತು ಕನಿಷ್ಠ ೨೫-೩೦ ನಿಮಿಷಗಳ ಕಾಲ ಬೇಯಲು ಬಿಡಿ. ಸಾಸ್ ದಪ್ಪವಾಗುತ್ತದೆ ಮತ್ತು ಕೋಳಿ ನಂಬಲಾಗದಷ್ಟು ಮೃದುವಾಗುತ್ತದೆ. ರುಚಿಗೆ ತಕ್ಕಂತೆ ಉಪ್ಪನ್ನು ಹೊಂದಿಸಿ.', 'ಬಡಿಸಿ: ಕೋಳಿ ಮೃದುವಾಗಿ ಮತ್ತು ಸಾಸ್ ದಪ್ಪ ಮತ್ತು ಹೊಳೆಯುವಂತಾದ ನಂತರ, ನಿಮ್ಮ \'ಸುಲ್ತಾನ್\' ಸಿದ್ಧವಾಗಿದೆ! ಈ ಭವ್ಯವಾದ ಸುಲ್ತಾನ್ ಅನ್ನು ಮೃದುವಾದ ಬಾಸಮತಿ ಅನ್ನದ ಮೇಲೆ ಬಡಿಸಿ. ತಾಜಾ ಕೊತ್ತಂಬರಿ ಸೊಪ್ಪು ಮತ್ತು ಗರಿಗರಿಯಾದ ಹುರಿದ ಶಾಲೋಟ್ಸ್‌ನಿಂದ ಅಲಂಕರಿಸಿ.']
            },
            'zh-CN': {
                title: '苏丹',
                description: '这道\'苏丹\'咖喱承载着我童年厨房的温暖回忆，是奶奶在芽笼士乃小厨房里，凭着经验和直觉教会我的。她常说，\'心急吃不了热豆腐，耐心是最好的香料。\' 制作这道菜的精髓在于香料酱（rempah），需要耐心炒至\'出油\'，让香料的芬芳完全释放。选用多汁的鸡腿肉慢炖，让每一层风味完美融合，最终成就一道口感丰富、令人回味无穷的佳肴。',
                ingredients: [{ item: '去骨去皮鸡腿肉', amount: '800克，切成2英寸块' }, { item: '小葱头', amount: '8-10个，去皮粗切' }, { item: '蒜瓣', amount: '6瓣，去皮' }, { item: '姜', amount: '2英寸块，去皮切片' }, { item: '香茅', amount: '2根，仅用白色部分，拍扁' }, { item: '干红辣椒', amount: '8-10个，用热水浸泡15分钟，去籽（根据辣度喜好调整）' }, { item: '香菜粉', amount: '2汤匙' }, { item: '孜然粉', amount: '1汤匙' }, { item: '黄姜粉', amount: '1茶匙' }, { item: '八角', amount: '2个' }, { item: '豆蔻荚', amount: '4-5个，轻微压碎' }, { item: '丁香', amount: '5-6个' }, { item: '肉桂棒', amount: '1根（2英寸长）' }, { item: '椰浆', amount: '400毫升罐装（请选用全脂！）' }, { item: '番茄', amount: '2个中等大小，粗切' }, { item: '罗望子酱', amount: '1汤匙，与2汤匙温水混合，过滤' }, { item: '马六甲椰糖', amount: '1汤匙，磨碎或切碎（或用红糖）' }, { item: '盐', amount: '适量' }, { item: '食用油', amount: '4-5汤匙' }, { item: '新鲜香菜', amount: '装饰用' }, { item: '炸葱酥', amount: '装饰用' }],
                instructions: ['准备香料酱：首先，准备好您的香料酱。将切好的小葱头、蒜、姜和泡软去籽的干辣椒放入食物料理机中。搅打几次，直到形成粗糙的糊状，保留一些质感。现在，加入香菜粉、孜然粉和黄姜粉，再快速搅打几下混合。', '煎鸡肉：在一个大而厚的锅或荷兰烤箱中，用中高火加热2汤匙食用油。油热后，加入鸡肉块。不要一次放太多，如果需要可以分批煎。将鸡肉煎至四面金黄。这只是为了锁住汁水并增加风味，无需完全煮熟。取出鸡肉备用。', '炒香料酱（关键步骤！）：在同一个锅中，再加入2-3汤匙油。将火调至中低。加入香料酱、拍扁的香茅、八角、压碎的豆蔻、丁香和肉桂棒。现在是展现您厨艺的时候了。持续搅拌，耐心炒约15-20分钟。您会看到香料酱颜色变深，油开始\'分离\'并浮在表面，闪着光泽。香气会从生香料味转变为浓郁诱人的芬芳，弥漫整个厨房。这是咖喱的灵魂，切勿心急！', '制作咖喱：香料酱炒好后，加入切碎的番茄。搅拌并煮约5分钟，直到番茄变软并出汁。然后，将煎好的鸡肉放回锅中。充分搅拌，让每一块鸡肉都裹上美味的香料酱。倒入全脂椰浆、过滤后的罗望子酱，并加入马六甲椰糖（或红糖）。轻轻搅拌所有食材。', '慢炖至完美：将混合物煮至微沸，然后将火调至小火，盖上锅盖，慢炖至少25-30分钟。偶尔检查并搅拌，以防粘锅。酱汁会变浓稠，鸡肉会变得异常鲜嫩，几乎入口即化。尝尝味道，调整盐分。您可能需要再加一点盐，或者如果您喜欢更甜，可以再加一点糖。风味应该浓郁、平衡且复杂。', '上菜：当鸡肉用叉子一碰即烂，酱汁浓稠有光泽时，就完成了！将这道美味的\'苏丹\'咖喱盛在蓬松的蒸米饭上。撒上新鲜香菜叶和酥脆的炸葱酥作为装饰。花点时间欣赏您的杰作吧。这不仅仅是一顿晚餐，更是一场盛宴。']
            },
            ms: {
                title: 'Sultan',
                description: 'Kari \'Sultan\' ini bukan sekadar hidangan; ia adalah pelukan hangat dari dapur zaman kanak-kanak saya, di mana Nenek mengajar saya dengan tangan dan pandangan berpengalaman. \'Jika tergesa-gesa, kamu akan merosakkan,\' katanya, \'Kesabaran adalah rempah terbaik.\' Rahsia hidangan ini terletak pada rempah yang ditumis hingga \'pecah minyak\', membebaskan aroma penuhnya. Paha ayam yang empuk dimasak perlahan, menyerap setiap lapisan rasa yang kaya, menghasilkan hidangan yang benar-benar diraja.',
                ingredients: [{ item: 'Paha ayam tanpa tulang, tanpa kulit', amount: '800g, dipotong 2 inci' }, { item: 'Bawang merah kecil', amount: '8-10 biji, dikupas dan dicincang kasar' }, { item: 'Bawang putih', amount: '6 ulas, dikupas' }, { item: 'Halia', amount: 'Sekeping 2 inci, dikupas dan dihiris' }, { item: 'Serai', amount: '2 batang, bahagian putih sahaja, dititik' }, { item: 'Cili kering', amount: '8-10 biji, direndam dalam air panas selama 15 minit, dibuang biji (sesuaikan mengikut tahap kepedasan)' }, { item: 'Serbuk ketumbar', amount: '2 sudu besar' }, { item: 'Serbuk jintan putih', amount: '1 sudu besar' }, { item: 'Serbuk kunyit', amount: '1 sudu kecil' }, { item: 'Bunga lawang', amount: '2 biji' }, { item: 'Buah pelaga', amount: '4-5 biji, dititik sedikit' }, { item: 'Bunga cengkih', amount: '5-6 biji' }, { item: 'Kulit kayu manis', amount: '1 batang (2 inci)' }, { item: 'Santan', amount: '1 tin 400ml (santan penuh lemak, ya!)' }, { item: 'Tomato', amount: '2 biji sederhana, dicincang kasar' }, { item: 'Pes asam jawa', amount: '1 sudu besar, dicampur dengan 2 sudu besar air suam, ditapis' }, { item: 'Gula Melaka', amount: '1 sudu besar, disagat atau dicincang halus (atau gula perang)' }, { item: 'Garam', amount: 'Secukup rasa' }, { item: 'Minyak masak', amount: '4-5 sudu besar' }, { item: 'Daun ketumbar segar', amount: 'Untuk hiasan' }, { item: 'Bawang goreng', amount: 'Untuk hiasan' }],
                instructions: ['Sediakan Rempah: Pertama sekali, sediakan pes rempah anda. Dalam pemproses makanan, gabungkan bawang merah kecil yang dicincang, bawang putih, halia, dan cili kering yang telah direndam dan dibuang biji. Kisar beberapa kali sehingga menjadi pes kasar. Jangan kisar terlalu halus; anda mahukan sedikit tekstur. Sekarang, masukkan serbuk ketumbar, serbuk jintan putih, dan serbuk kunyit. Kisar lagi sebentar untuk menggabungkan. Aromanya pasti sudah mula membangkitkan dapur anda.', 'Bakar Ayam: Panaskan 2 sudu besar minyak masak dalam periuk besar atau Dutch oven di atas api sederhana tinggi. Apabila minyak berkilat, masukkan kepingan ayam anda. Jangan terlalu padat; lakukan secara berperingkat jika perlu. Bakar ayam sehingga berwarna keemasan yang cantik di semua sisi. Anda tidak memasaknya hingga masak sepenuhnya, hanya untuk mendapatkan kerak yang menarik. Langkah ini mengunci jus dan menambah kedalaman rasa. Angkat ayam dan ketepikan.', 'Tumis Rempah (Langkah Penting!): Dalam periuk yang sama, masukkan lagi 2-3 sudu besar minyak. Kurangkan api ke sederhana rendah. Masukkan pes rempah anda, serai yang dititik, bunga lawang, buah pelaga yang dititik, bunga cengkih, dan kulit kayu manis. Sekarang, di sinilah anda menunjukkan kemahiran anda. Kacau sentiasa, dengan sabar, selama kira-kira 15-20 minit. Anda akan melihat pes menjadi gelap, dan minyak akan mula \'pecah\' dan terpisah, berkilat di permukaan. Baunya akan berubah dari rempah mentah menjadi aroma yang mendalam dan memabukkan yang memenuhi seluruh rumah anda. Ini adalah \'wok hei\' kari, jiwa hidangan ini. Jangan tergesa-gesa, jangan tinggalkan!', 'Sediakan Kari: Setelah rempah anda ditumis dengan sempurna, masukkan tomato yang dicincang. Kacau dan masak selama kira-kira 5 minit sehingga ia lembut dan hancur, mengeluarkan jusnya. Kemudian, masukkan semula ayam yang telah dibakar ke dalam periuk. Kacau rata untuk menyalut setiap kepingan dengan pes rempah yang hebat itu. Tuangkan santan penuh lemak, pes asam jawa yang telah ditapis, dan masukkan gula Melaka (atau gula perang). Kacau semua bahan perlahan-lahan.', 'Rebus Hingga Sempurna: Biarkan campuran mendidih perlahan, kemudian kurangkan api ke rendah, tutup periuk, dan biarkan masak selama sekurang-kurangnya 25-30 minit. Periksa sekali-sekala, kacau untuk mengelakkan melekat. Kuah akan memekat, dan ayam akan menjadi sangat lembut, hampir hancur di mulut. Rasa dan sesuaikan garam. Anda mungkin memerlukan sedikit lagi, atau mungkin sedikit lagi gula jika anda suka lebih manis. Rasa harus kaya, seimbang, dan kompleks.', 'Hidangkan: Apabila ayam sudah empuk dan kuah pekat serta berkilat, anda sudah selesai! Sendukkan \'Sultan\' yang hebat ini ke atas nasi basmati kukus yang gebu. Hias dengan daun ketumbar segar dan taburan bawang goreng rangup. Luangkan masa untuk mengagumi hasil kerja anda. Ini bukan sekadar makan malam; ini adalah satu perayaan.']
            }
        }
    }
,
    {
        id: '2026-05-21',
        publishedAt: '2026-05-21T10:46:00.000Z',
        title: 'Samb',
        description: 'Samb isn\'t just a dish; it\'s a memory, a feeling, a whole afternoon spent in my grandmother\'s sweltering kitchen. I remember her, Mak Cik Fatimah, a tiny woman with hands that could pound a sambal paste into submission. Learning this wasn\'t about following a recipe book; it was about watching, smelling, and getting scolded for not pounding hard enough. The first few times, my sambal was watery, or worse, burnt. The smell of burnt belacan? That\'s a mistake you only make once. Mak Cik would say, \'You must coax the flavors out, not bash them into submission!\' She taught me the rhythm of the pestle, the way the chilies and shallots slowly surrender their essence, transforming from a rough heap into a glistening, fragrant paste. It\'s a labor of love, truly. The secret, she always insisted, lies in the sambal itself. You can\'t rush it. You need good, plump dried chilies, soaked until they\'re pliable, and fresh, pungent belacan. Don\'t even think about using those pre-made pastes from a jar; they lack the soul, the depth. And the frying! Oh, the frying of the sambal. It\'s not just about cooking it; it\'s about \'breaking the oil\', where the oil separates from the paste, turning a deep, inviting red. That\'s when you know you\'ve done it right. If you pull it off the heat too soon, it\'ll taste raw and sharp. Too long, and it\'s bitter. It\'s a delicate balance, a dance between heat and patience. And the ingredients you add to the sambal? They must be fresh, vibrant. For this version, I love prawns and squid, but the real star for me is the petai beans. Some people shy away from their pungent aroma, but for me, that\'s what makes it authentic, that little \'kick\'. If you can\'t find petai, okra is a good substitute, but it\'s not quite the same. Always choose firm, fresh prawns and squid; overcooked seafood in a beautiful sambal is a tragedy. This dish, when done right, is a riot of flavors and textures, a true taste of home. It\'s messy, it\'s spicy, and it\'s utterly unforgettable.',
        image: '/recipe-images/2026-05-21.jpg',
        prepTime: '25 min',
        cookTime: '45 min',
        difficulty: 'Medium',
        servings: 4,
        ingredients: [
            { item: 'Dried red chilies', amount: '15-20, soaked in hot water for 20 mins, deseeded (optional, for less heat)' },
            { item: 'Shallots', amount: '8-10 medium, peeled' },
            { item: 'Garlic', amount: '3-4 cloves, peeled' },
            { item: 'Belacan (shrimp paste)', amount: '1-inch cube, toasted' },
            { item: 'Candlenuts', amount: '3-4, lightly toasted' },
            { item: 'Galangal', amount: '1-inch piece, peeled' },
            { item: 'Lemongrass', amount: '1 stalk, white part only, thinly sliced' },
            { item: 'Tamarind paste', amount: '1 tbsp, mixed with 2 tbsp warm water, strained (tamarind juice)' },
            { item: 'Cooking oil', amount: '4-5 tbsp' },
            { item: 'Prawns', amount: '300g, peeled, deveined, tails on' },
            { item: 'Squid', amount: '200g, cleaned, scored, cut into rings' },
            { item: 'Petai beans (stink beans)', amount: '100g, shelled (or okra, 150g, sliced)' },
            { item: 'Onion', amount: '1 large, sliced' },
            { item: 'Sugar', amount: '1-2 tsp (to taste)' },
            { item: 'Salt', amount: '1 tsp (to taste)' },
            { item: 'Lime juice', amount: '1 tbsp (freshly squeezed)' }
        ],
        instructions: [
            'First, get those dried chilies soaking. While they\'re softening, gently toast your belacan in a dry pan until it\'s fragrant and slightly smoky – don\'t burn it! It should smell like the sea, not a bonfire. Once the chilies are soft, drain them. Now, into your food processor or mortar and pestle go the soaked chilies, shallots, garlic, toasted belacan, candlenuts, galangal, and lemongrass. Pound or blend until you have a fine, smooth paste. This takes patience; don\'t rush it. You want a deep red, uniform consistency.',
            'Heat 4-5 tablespoons of cooking oil in a wok or large pan over medium heat. When the oil shimmers, carefully spoon in your freshly made sambal paste. Oh, the sizzle! Stir constantly. This is the crucial part, the \'breaking the oil\' stage. You\'ll see the paste darken, and the oil will start to separate and pool around the edges, turning a vibrant, glossy red. This usually takes a good 15-20 minutes. Your kitchen should smell incredible right now – spicy, earthy, and deeply aromatic. If it smells burnt, you\'ve gone too far.',
            'Once the oil has broken, stir in the tamarind juice, sugar, and salt. Give it a good mix. Let it simmer for another 2-3 minutes, allowing the flavors to meld and the sauce to thicken slightly. Taste it. Adjust the sugar and salt if needed. It should be a balance of spicy, sour, and a touch of sweet.',
            'Now, toss in your sliced onions. Stir-fry for about 2 minutes until they start to soften and become translucent. Next, add the petai beans (or okra). Cook for another 2-3 minutes. Finally, add the prawns and squid. Stir-fry quickly, just until the prawns turn pink and opaque, and the squid curls and turns white. This takes only 2-3 minutes; seriously, don\'t overcook them, or they\'ll turn rubbery and sad.',
            'Remove the wok from the heat immediately. Squeeze in the fresh lime juice and give everything one last gentle toss. The lime brightens everything up, adding a lovely zing. Serve your \'Samb\' piping hot with fluffy white rice. It\'s a messy, glorious dish, perfect for sharing.'
        ],
        tags: ['Singaporean', 'Dinner', 'Authentic'],
        translations: {
            hi: {
                title: 'सांब',
                description: 'सांब सिर्फ एक व्यंजन नहीं, यह मेरी दादी माँ की रसोई की यादें हैं, जहाँ उन्होंने मुझे प्यार से सांभर पेस्ट बनाना सिखाया था। यह सिर्फ एक रेसिपी नहीं थी, बल्कि मसालों को कूटने की कला थी, जहाँ मिर्च और प्याज़ धीरे-धीरे अपना स्वाद छोड़ते थे। \'तेल तोड़ने\' की प्रक्रिया, जहाँ तेल पेस्ट से अलग होकर गहरा लाल हो जाता है, इसकी जान है। ताज़ी सामग्री, जैसे झींगे, स्क्विड और पेटाई बीन्स, इस डिश को एक अनोखा स्वाद देते हैं। यह तीखा, स्वादिष्ट और सचमुच यादगार है।',
                ingredients: [{ item: 'सूखी लाल मिर्च', amount: '15-20, 20 मिनट के लिए गर्म पानी में भिगोई हुई, बीज निकाले हुए (वैकल्पिक, कम तीखेपन के लिए)' }, { item: 'छोटी प्याज़ (शैलट)', amount: '8-10 मध्यम आकार की, छील हुई' }, { item: 'लहसुन', amount: '3-4 कलियाँ, छील हुई' }, { item: 'बेलाचन (झींगा पेस्ट)', amount: '1 इंच का टुकड़ा, भुना हुआ' }, { item: 'कैंडल नट्स', amount: '3-4, हल्के भुने हुए' }, { item: 'गलांगाल', amount: '1 इंच का टुकड़ा, छील हुआ' }, { item: 'लेमनग्रास', amount: '1 डंठल, केवल सफेद भाग, पतला कटा हुआ' }, { item: 'इमली का पेस्ट', amount: '1 बड़ा चम्मच, 2 बड़े चम्मच गर्म पानी में मिलाकर छाना हुआ (इमली का रस)' }, { item: 'खाना पकाने का तेल', amount: '4-5 बड़े चम्मच' }, { item: 'झींगे', amount: '300 ग्राम, छिले हुए, डी-वेन किए हुए, पूंछ के साथ' }, { item: 'स्क्विड', amount: '200 ग्राम, साफ किया हुआ, चीरा लगाया हुआ, छल्ले में कटा हुआ' }, { item: 'पेटाई बीन्स (स्टिंक बीन्स)', amount: '100 ग्राम, छिले हुए (या भिंडी, 150 ग्राम, कटी हुई)' }, { item: 'प्याज़', amount: '1 बड़ी, कटी हुई' }, { item: 'चीनी', amount: '1-2 छोटा चम्मच (स्वादानुसार)' }, { item: 'नमक', amount: '1 छोटा चम्मच (स्वादानुसार)' }, { item: 'नींबू का रस', amount: '1 बड़ा चम्मच (ताज़ा निचोड़ा हुआ)' }],
                instructions: ['सबसे पहले, सूखी मिर्चों को भिगो दें। जब वे नरम हो रही हों, तो एक सूखे पैन में बेलाचन को धीमी आंच पर भूनें जब तक कि उसमें से खुशबू न आने लगे – इसे जलाना नहीं है! मिर्च नरम होने पर, पानी निकाल दें। अब, भीगी हुई मिर्च, छोटी प्याज़, लहसुन, भुना हुआ बेलाचन, कैंडल नट्स, गलांगाल और लेमनग्रास को फूड प्रोसेसर या खलबट्टे में डालें। तब तक कूटें या पीसें जब तक एक महीन, चिकना पेस्ट न बन जाए। इसमें धैर्य रखें, जल्दबाजी न करें। आपको एक गहरा लाल, एक समान पेस्ट चाहिए।', 'एक कड़ाही या बड़े पैन में मध्यम आंच पर 4-5 बड़े चम्मच खाना पकाने का तेल गरम करें। जब तेल चमकने लगे, तो सावधानी से अपना ताज़ा बना हुआ सांब पेस्ट डालें। लगातार चलाते रहें। यह \'तेल तोड़ने\' का महत्वपूर्ण चरण है। आप देखेंगे कि पेस्ट गहरा हो जाएगा, और तेल किनारों पर अलग होकर इकट्ठा होने लगेगा, जो एक चमकदार, गहरा लाल रंग का हो जाएगा। इसमें आमतौर पर 15-20 मिनट लगते हैं। इस समय आपकी रसोई में मसालेदार, मिट्टी जैसी और गहरी सुगंध आनी चाहिए। अगर जलने की गंध आए, तो आपने ज़्यादा पका दिया है।', 'जब तेल अलग हो जाए, तो इमली का रस, चीनी और नमक डालकर अच्छी तरह मिलाएँ। इसे 2-3 मिनट तक धीमी आंच पर पकने दें, ताकि स्वाद आपस में मिल जाएँ और सॉस थोड़ी गाढ़ी हो जाए। चखकर देखें। आवश्यकतानुसार चीनी और नमक समायोजित करें। इसमें तीखा, खट्टा और थोड़ा मीठा स्वाद का संतुलन होना चाहिए।', 'अब, कटी हुई प्याज़ डालें। लगभग 2 मिनट तक भूनें जब तक वे नरम और पारदर्शी न हो जाएँ। इसके बाद, पेटाई बीन्स (या भिंडी) डालें। 2-3 मिनट और पकाएँ। अंत में, झींगे और स्क्विड डालें। जल्दी से भूनें, बस तब तक जब तक झींगे गुलाबी और अपारदर्शी न हो जाएँ, और स्क्विड मुड़कर सफेद न हो जाए। इसमें केवल 2-3 मिनट लगते हैं; सच में, इन्हें ज़्यादा न पकाएँ, वरना वे रबर जैसे और बेस्वाद हो जाएँगे।', 'कड़ाही को तुरंत आंच से हटा दें। ताज़ा नींबू का रस निचोड़ें और सब कुछ एक आखिरी बार धीरे से मिलाएँ। नींबू सब कुछ ताज़ा कर देता है, एक प्यारा ज़िंग जोड़ता है। अपने \'सांब\' को गरमागरम, फूले हुए सफेद चावल के साथ परोसें। यह एक स्वादिष्ट, शानदार व्यंजन है, जो साझा करने के लिए एकदम सही है।']
            },
            bn: {
                title: 'সাম্বাল',
                description: 'সাম্বাল শুধু একটা পদ নয়, এটা আমার দাদির রান্নাঘরের স্মৃতি, এক উষ্ণ অনুভূতি। মাক চিক ফাতিমা, ছোটখাটো মানুষটি, যার হাতে সাম্বাল বাটার এক অদ্ভুত জাদু ছিল। রেসিপি বই দেখে নয়, তাঁর কাজ দেখে, গন্ধ শুঁকে আর বকা খেয়েই শিখেছি। সাম্বালের আসল রহস্য লুকিয়ে আছে এর পেস্ট তৈরিতে – তাড়াহুড়ো করলে চলবে না। শুকনো লঙ্কা আর বেলাচান দিয়ে তৈরি এই পেস্টকে ধৈর্য ধরে ভাজতে হয়, যতক্ষণ না তেল ছেড়ে উজ্জ্বল লাল রঙ ধরে। চিংড়ি, স্কুইড আর পেটাই বিনের সাথে এই সাম্বাল এক অসাধারণ স্বাদের অভিজ্ঞতা দেয়, যা সত্যিই ভোলার নয়।',
                ingredients: [{ item: 'শুকনো লাল লঙ্কা', amount: '১৫-২০টি, ২০ মিনিট গরম জলে ভিজিয়ে, বীজ ফেলে দেওয়া (ঐচ্ছিক, কম ঝালের জন্য)' }, { item: 'শ্যালট পেঁয়াজ', amount: '৮-১০টি মাঝারি, খোসা ছাড়ানো' }, { item: 'রসুন', amount: '৩-৪ কোয়া, খোসা ছাড়ানো' }, { item: 'বেলাচান (চিংড়ি পেস্ট)', amount: '১ ইঞ্চি কিউব, সেঁকা' }, { item: 'ক্যান্ডেলনাট', amount: '৩-৪টি, হালকা সেঁকা' }, { item: 'গালাঙ্গাল', amount: '১ ইঞ্চি টুকরো, খোসা ছাড়ানো' }, { item: 'লেমনগ্রাস', amount: '১টি ডাঁটা, শুধু সাদা অংশ, পাতলা করে কাটা' }, { item: 'তেঁতুলের ক্বাথ', amount: '১ টেবিল চামচ, ২ টেবিল চামচ গরম জলের সাথে মিশিয়ে, ছেঁকে নেওয়া (তেঁতুলের রস)' }, { item: 'রান্নার তেল', amount: '৪-৫ টেবিল চামচ' }, { item: 'চিংড়ি', amount: '৩০০ গ্রাম, খোসা ছাড়ানো, শির ফেলে দেওয়া, লেজ রাখা' }, { item: 'স্কুইড', amount: '২০০ গ্রাম, পরিষ্কার করা, চেরা, রিং করে কাটা' }, { item: 'পেটাই বিন (স্টিনক বিন)', amount: '১০০ গ্রাম, খোসা ছাড়ানো (অথবা ঢেঁড়স, ১৫০ গ্রাম, স্লাইস করা)' }, { item: 'পেঁয়াজ', amount: '১টি বড়, স্লাইস করা' }, { item: 'চিনি', amount: '১-২ চা চামচ (স্বাদমতো)' }, { item: 'নুন', amount: '১ চা চামচ (স্বাদমতো)' }, { item: 'লেবুর রস', amount: '১ টেবিল চামচ (টাটকা নিংড়ানো)' }],
                instructions: ['শুরুতে শুকনো লঙ্কাগুলো ভিজিয়ে রাখুন। লঙ্কা নরম হতে হতে, শুকনো প্যানে বেলাচান হালকা করে সেঁকে নিন যতক্ষণ না সুগন্ধ বের হয় – পুড়িয়ে ফেলবেন না যেন! সমুদ্রের মতো গন্ধ হওয়া চাই, আগুনের মতো নয়। লঙ্কা নরম হলে জল ঝরিয়ে নিন। এবার ভেজানো লঙ্কা, শ্যালট, রসুন, সেঁকা বেলাচান, ক্যান্ডেলনাট, গালাঙ্গাল আর লেমনগ্রাস ফুড প্রসেসর বা হামানদিস্তায় নিয়ে মিহি পেস্ট তৈরি করুন। এতে ধৈর্য ধরুন, তাড়াহুড়ো করবেন না। গাঢ় লাল রঙের মসৃণ পেস্ট হওয়া চাই।', 'একটি কড়াই বা বড় প্যানে মাঝারি আঁচে ৪-৫ টেবিল চামচ রান্নার তেল গরম করুন। তেল গরম হলে সাবধানে তৈরি করা সাম্বাল পেস্ট দিয়ে দিন। কী দারুণ ছ্যাঁত ছ্যাঁত শব্দ! অনবরত নাড়তে থাকুন। এটাই আসল ধাপ, \'তেল ছাড়ার\' পর্যায়। পেস্ট গাঢ় হবে আর তেল আলাদা হয়ে চারপাশে জমা হবে, উজ্জ্বল লাল রঙ ধরবে। এতে সাধারণত ১৫-২০ মিনিট সময় লাগে। এই সময় আপনার রান্নাঘরটা দারুণ সুগন্ধি হয়ে উঠবে – ঝাল, মাটির গন্ধ আর গভীর সুবাসে ভরে যাবে। যদি পোড়া গন্ধ আসে, বুঝবেন বেশি হয়ে গেছে।', 'তেল ছেড়ে এলে তেঁতুলের রস, চিনি আর নুন দিয়ে ভালো করে মিশিয়ে নিন। আরও ২-৩ মিনিট অল্প আঁচে ফুটতে দিন, যাতে সব স্বাদ মিশে যায় আর সসটা একটু ঘন হয়। চেখে দেখুন। প্রয়োজন হলে চিনি আর নুন যোগ করুন। ঝাল, টক আর মিষ্টির একটা দারুণ ভারসাম্য থাকা চাই।', 'এবার স্লাইস করা পেঁয়াজ দিয়ে দিন। প্রায় ২ মিনিট ভেজে নিন যতক্ষণ না নরম হয়ে স্বচ্ছ হয়। এরপর পেটাই বিন (বা ঢেঁড়স) যোগ করুন। আরও ২-৩ মিনিট রান্না করুন। সবশেষে চিংড়ি আর স্কুইড দিয়ে দিন। দ্রুত ভেজে নিন, যতক্ষণ না চিংড়ি গোলাপি আর অস্বচ্ছ হয় এবং স্কুইড কুঁকড়ে সাদা হয়ে যায়। এতে মাত্র ২-৩ মিনিট লাগে; সত্যি বলছি, বেশি রান্না করবেন না, তাহলে শক্ত আর বিস্বাদ হয়ে যাবে।', 'তাৎক্ষণিকভাবে কড়াই আঁচ থেকে নামিয়ে নিন। টাটকা লেবুর রস নিংড়ে দিয়ে সবটা একবার আলতো করে মিশিয়ে নিন। লেবু সবকিছুর স্বাদ উজ্জ্বল করে তোলে, একটা দারুণ সতেজতা যোগ করে। আপনার \'সাম্বাল\' গরম গরম সাদা ভাতের সাথে পরিবেশন করুন। এটা একটা দারুণ, সুস্বাদু পদ, ভাগ করে খাওয়ার জন্য উপযুক্ত।']
            },
            mr: {
                title: 'सांब',
                description: 'सांब हे फक्त एक पदार्थ नाही, तर ती माझ्या आजीच्या उष्ण स्वयंपाकघरातील आठवण आहे. तिच्या हातांनी वाटलेला सांबारचा ठेचा, मिरची आणि कांद्याचा सुगंध, तेल सुटेपर्यंत भाजण्याची कला... हे सगळं शिकताना तिने मला संयम आणि चवीची खरी ओळख करून दिली. तयार पेस्ट वापरण्याऐवजी, स्वतः मिरची वाटून, बेलचन भाजून, तेल सुटेपर्यंत परतून बनवलेला सांबार म्हणजे एक वेगळीच चव. कोळंबी, स्क्विड आणि पेटाई बीन्सचा (किंवा भेंडीचा) वापर करून बनवलेला हा पदार्थ म्हणजे घरगुती चवीचा एक अनोखा अनुभव, जो एकदा खाल्ला की विसरता येत नाही.',
                ingredients: [{ item: 'सुक्या लाल मिरच्या', amount: '१५-२०, २० मिनिटे गरम पाण्यात भिजवून, बिया काढलेल्या (ऐच्छिक, कमी तिखटासाठी)' }, { item: 'लहान कांदे (शालोट्स)', amount: '८-१० मध्यम आकाराचे, सोललेले' }, { item: 'लसूण', amount: '३-४ पाकळ्या, सोललेल्या' }, { item: 'बेलाचन (कोळंबीची पेस्ट)', amount: '१ इंच चौकोनी तुकडा, भाजलेला' }, { item: 'कॅन्डल नट्स', amount: '३-४, हलके भाजलेले' }, { item: 'गालंगल (आलेवर्गीय कंद)', amount: '१ इंच तुकडा, सोललेला' }, { item: 'लेमनग्रास (गवती चहा)', amount: '१ देठ, फक्त पांढरा भाग, पातळ चिरलेला' }, { item: 'चिंचेचा कोळ', amount: '१ मोठा चमचा, २ मोठे चमचे कोमट पाण्यात मिसळून, गाळलेला (चिंचेचे पाणी)' }, { item: 'खाद्यतेल', amount: '४-५ मोठे चमचे' }, { item: 'कोळंबी', amount: '३०० ग्रॅम, सोललेली, शिरा काढलेल्या, शेपटीसहित' }, { item: 'स्क्विड (कळंबी)', amount: '२०० ग्रॅम, स्वच्छ केलेले, कापलेले, रिंग्जमध्ये चिरलेले' }, { item: 'पेटाई बीन्स (स्टिंक बीन्स)', amount: '१०० ग्रॅम, सोललेले (किंवा भेंडी, १५० ग्रॅम, चिरलेली)' }, { item: 'कांदा', amount: '१ मोठा, चिरलेला' }, { item: 'साखर', amount: '१-२ लहान चमचे (चवीनुसार)' }, { item: 'मीठ', amount: '१ लहान चमचा (चवीनुसार)' }, { item: 'लिंबाचा रस', amount: '१ मोठा चमचा (ताजा पिळलेला)' }],
                instructions: ['प्रथम सुक्या मिरच्या भिजत घाला. त्या मऊ होत असताना, एका कोरड्या पॅनमध्ये बेलाचन हलके भाजून घ्या, त्याचा सुगंध सुटेपर्यंत. मिरच्या मऊ झाल्यावर पाणी काढून घ्या. आता भिजवलेल्या मिरच्या, लहान कांदे, लसूण, भाजलेले बेलाचन, कॅन्डल नट्स, गालंगल आणि लेमनग्रास फूड प्रोसेसरमध्ये किंवा खलबत्त्यात बारीक वाटून गुळगुळीत पेस्ट बनवा. ही पेस्ट एकसमान आणि गडद लाल रंगाची होईपर्यंत वाटायला संयम लागतो.', 'एका कढईत किंवा मोठ्या पॅनमध्ये मध्यम आचेवर ४-५ मोठे चमचे तेल गरम करा. तेल गरम झाल्यावर त्यात तयार सांबार पेस्ट काळजीपूर्वक घाला आणि सतत ढवळत राहा. ही \'तेल सुटण्याची\' महत्त्वाची पायरी आहे; पेस्टचा रंग गडद होईल आणि तेल कडेने सुटून चमकदार लाल दिसेल. याला साधारण १५-२० मिनिटे लागतील. तुमच्या स्वयंपाकघरात आता तिखट, मातीचा आणि सुगंधित वास दरवळायला हवा.', 'तेल सुटल्यावर त्यात चिंचेचे पाणी, साखर आणि मीठ घालून चांगले मिसळा. चवीनुसार साखर आणि मीठ कमी-जास्त करा. हे मिश्रण २-३ मिनिटे मंद आचेवर शिजू द्या, जेणेकरून चवी एकजीव होतील आणि ग्रेव्ही थोडी घट्ट होईल.', 'आता चिरलेला कांदा घालून २ मिनिटे परतून घ्या, तो मऊ आणि पारदर्शक होईपर्यंत. त्यानंतर पेटाई बीन्स (किंवा भेंडी) घालून आणखी २-३ मिनिटे शिजवा. शेवटी कोळंबी आणि स्क्विड घालून जलद परता; कोळंबी गुलाबी आणि अपारदर्शक होईपर्यंत आणि स्क्विड पांढरे होऊन वळेपर्यंत फक्त २-३ मिनिटे शिजवा, जास्त शिजवू नका नाहीतर ते रबरासारखे होतील.', 'कढई लगेच आचेवरून खाली उतरवा. त्यात ताजा लिंबाचा रस पिळून सर्वकाही हलकेच मिसळा. लिंबाचा रस पदार्थाला ताजेपणा देतो. गरमागरम पांढऱ्या भातासोबत तुमचा \'सांब\' लगेच सर्व्ह करा. हा एक स्वादिष्ट आणि अविस्मरणीय पदार्थ आहे.']
            },
            te: {
                title: 'సాంబ',
                description: 'సాంబ కేవలం ఒక వంటకం కాదు, అది నా అమ్మమ్మ వేడి వంటగదిలో గడిపిన మధురమైన జ్ఞాపకం. మక్ చిక్ ఫాతిమా, ఆ చిన్నారి చేతులతో సాంబాల్ పేస్ట్‌ను ఎంత అద్భుతంగా రుబ్బేవారో! వంట పుస్తకాలు చూసి నేర్చుకోవడం కాదు, ఆమెను చూస్తూ, వాసన పీలుస్తూ, సరిగా రుబ్బలేదని తిట్లు తింటూ నేర్చుకున్నాను. సాంబాల్‌ను సరిగ్గా వేయించడం, నూనె విడిపోయే వరకు ఓపికగా ఉడికించడం చాలా ముఖ్యం. రొయ్యలు, స్క్విడ్, పెటాయ్ బీన్స్‌తో కలిపి చేసే ఈ సాంబ రుచి అద్భుతం. ఇది కారంగా, రుచికరంగా, మర్చిపోలేని ఇంటి రుచిని అందిస్తుంది.',
                ingredients: [{ item: 'ఎండు మిరపకాయలు', amount: '15-20, 20 నిమిషాలు వేడి నీటిలో నానబెట్టి, గింజలు తీసివేయాలి (కారంగా తక్కువ కావాలంటే)' }, { item: 'చిన్న ఉల్లిపాయలు', amount: '8-10 మధ్యస్థ పరిమాణం, పొట్టు తీసినవి' }, { item: 'వెల్లుల్లి రెబ్బలు', amount: '3-4, పొట్టు తీసినవి' }, { item: 'బెలాకన్ (రొయ్యల పేస్ట్)', amount: '1 అంగుళం ముక్క, వేయించినది' }, { item: 'కాండిల్‌నట్స్', amount: '3-4, తేలికగా వేయించినవి' }, { item: 'గాలాంగల్', amount: '1 అంగుళం ముక్క, పొట్టు తీసినది' }, { item: 'లెమన్‌గ్రాస్', amount: '1 కాడ, తెల్లటి భాగం మాత్రమే, సన్నగా తరిగినది' }, { item: 'చింతపండు గుజ్జు', amount: '1 టేబుల్‌స్పూన్, 2 టేబుల్‌స్పూన్ల గోరువెచ్చని నీటిలో కలిపి, వడకట్టినది (చింతపండు రసం)' }, { item: 'వంట నూనె', amount: '4-5 టేబుల్‌స్పూన్లు' }, { item: 'రొయ్యలు', amount: '300 గ్రాములు, పొట్టు తీసి, నరం తీసి, తోకలతో' }, { item: 'స్క్విడ్', amount: '200 గ్రాములు, శుభ్రం చేసి, గాట్లు పెట్టి, రింగులుగా కట్ చేసినవి' }, { item: 'పెటాయ్ బీన్స్ (స్టింక్ బీన్స్)', amount: '100 గ్రాములు, పొట్టు తీసినవి (లేదా బెండకాయలు, 150 గ్రాములు, ముక్కలుగా కోసినవి)' }, { item: 'ఉల్లిపాయ', amount: '1 పెద్దది, ముక్కలుగా కోసినది' }, { item: 'చక్కెర', amount: '1-2 టీస్పూన్లు (రుచికి సరిపడా)' }, { item: 'ఉప్పు', amount: '1 టీస్పూన్ (రుచికి సరిపడా)' }, { item: 'నిమ్మరసం', amount: '1 టేబుల్‌స్పూన్ (తాజాగా పిండినది)' }],
                instructions: ['ముందుగా ఎండు మిరపకాయలను నానబెట్టండి. అవి మెత్తబడేలోపు, బెలాకన్‌ను పొడి పెనంలో సువాసన వచ్చే వరకు, కొద్దిగా పొగ వచ్చే వరకు వేయించండి – మాడిపోకుండా చూసుకోండి! అది సముద్రం వాసన రావాలి, మంట వాసన కాదు. మిరపకాయలు మెత్తబడిన తర్వాత, నీటిని తీసివేయండి. ఇప్పుడు, నానబెట్టిన మిరపకాయలు, చిన్న ఉల్లిపాయలు, వెల్లుల్లి, వేయించిన బెలాకన్, కాండిల్‌నట్స్, గాలాంగల్, లెమన్‌గ్రాస్‌ను ఫుడ్ ప్రాసెసర్‌లో లేదా రోలులో వేసి మెత్తని పేస్ట్‌లా రుబ్బండి. దీనికి ఓపిక అవసరం; తొందరపడకండి. మీకు ముదురు ఎరుపు రంగు, ఏకరీతి పేస్ట్ కావాలి.', 'ఒక కడాయిలో లేదా పెద్ద పాన్‌లో మధ్యస్థ మంటపై 4-5 టేబుల్‌స్పూన్ల వంట నూనెను వేడి చేయండి. నూనె వేడెక్కిన తర్వాత, తాజాగా తయారుచేసిన సాంబాల్ పేస్ట్‌ను జాగ్రత్తగా వేయండి. జివ్వుమని శబ్దం వస్తుంది! నిరంతరం కలుపుతూ ఉండండి. ఇది చాలా ముఖ్యమైన దశ, \'నూనె విడిపోయే\' దశ. పేస్ట్ రంగు ముదురుతుంది, నూనె అంచుల చుట్టూ విడిపోయి, ప్రకాశవంతమైన, నిగనిగలాడే ఎరుపు రంగులోకి మారుతుంది. దీనికి సాధారణంగా 15-20 నిమిషాలు పడుతుంది. మీ వంటగది ఇప్పుడు అద్భుతమైన వాసనతో నిండిపోవాలి – కారంగా, మట్టి వాసనతో, లోతైన సువాసనతో. మాడిన వాసన వస్తే, మీరు ఎక్కువసేపు వేయించినట్లు.', 'నూనె విడిపోయిన తర్వాత, చింతపండు రసం, చక్కెర, ఉప్పు వేసి బాగా కలపండి. రుచులు కలిసి, సాస్ కొద్దిగా చిక్కబడే వరకు మరో 2-3 నిమిషాలు ఉడకనివ్వండి. రుచి చూడండి. అవసరమైతే చక్కెర, ఉప్పు సర్దుబాటు చేయండి. ఇది కారం, పులుపు, కొద్దిగా తీపి సమతుల్యతతో ఉండాలి.', 'ఇప్పుడు, తరిగిన ఉల్లిపాయలను వేయండి. అవి మెత్తబడి, పారదర్శకంగా మారే వరకు సుమారు 2 నిమిషాలు వేయించండి. తరువాత, పెటాయ్ బీన్స్ (లేదా బెండకాయలు) వేయండి. మరో 2-3 నిమిషాలు ఉడికించండి. చివరగా, రొయ్యలు, స్క్విడ్ వేయండి. రొయ్యలు గులాబీ రంగులోకి మారి, స్క్విడ్ ముడుచుకుని తెల్లగా మారే వరకు త్వరగా వేయించండి. దీనికి కేవలం 2-3 నిమిషాలు మాత్రమే పడుతుంది; దయచేసి వాటిని ఎక్కువసేపు ఉడికించవద్దు, లేకపోతే అవి రబ్బరులా మారిపోతాయి.', 'వెంటనే కడాయిని మంటపై నుండి తీసివేయండి. తాజాగా పిండిన నిమ్మరసం వేసి, అన్నింటినీ ఒకసారి మెల్లగా కలపండి. నిమ్మరసం అన్ని రుచులను ప్రకాశవంతం చేస్తుంది, ఒక అద్భుతమైన రుచిని జోడిస్తుంది. మీ \'సాంబ\'ను వేడివేడి తెల్ల అన్నంతో వడ్డించండి. ఇది రుచికరమైన, అద్భుతమైన వంటకం, పంచుకోవడానికి సరైనది.']
            },
            ta: {
                title: 'சாம்பல்',
                description: 'இந்த சாம்பல் வெறும் உணவு அல்ல; அது என் பாட்டியின் அன்பான சமையலறையில் கழித்த ஒரு முழு மதியத்தின் நினைவுகள். மிளகாய் மற்றும் வெங்காயத்தை உரலில் இடித்து, சுவைகளை மெதுவாக வெளிக்கொண்டு வரும் கலையை அவர் எனக்குக் கற்றுக்கொடுத்தார். பெலாகன் வாசனை, எண்ணெய் பிரிந்து வரும் அந்த அழகான சிவப்பு நிறம் – இவை அனைத்தும் பொறுமையின் பலன். புதிய இறால், கணவாய் மீன், மற்றும் பெட்டாய் பீன்ஸ் சேர்த்து செய்யப்படும் இந்த சாம்பல், காரம், புளிப்பு, இனிப்பு என பல சுவைகளின் கலவையாக, வீட்டிற்குரிய உண்மையான சுவையைத் தரும்.',
                ingredients: [{ item: 'காய்ந்த சிவப்பு மிளகாய்', amount: '15-20, 20 நிமிடம் வெந்நீரில் ஊறவைத்து, விதை நீக்கப்பட்டது (விரும்பினால், காரம் குறைக்க)' }, { item: 'சின்ன வெங்காயம்', amount: '8-10 நடுத்தர அளவு, தோல் உரிக்கப்பட்டது' }, { item: 'பூண்டு', amount: '3-4 பற்கள், தோல் உரிக்கப்பட்டது' }, { item: 'பெலாகன் (இறால் பசை)', amount: '1 அங்குல கனசதுரம், வறுக்கப்பட்டது' }, { item: 'கெமிரி நட்ஸ்', amount: '3-4, லேசாக வறுக்கப்பட்டது' }, { item: 'சித்திரத்தை', amount: '1 அங்குல துண்டு, தோல் உரிக்கப்பட்டது' }, { item: 'லெமன் கிராஸ்', amount: '1 தண்டு, வெள்ளை பகுதி மட்டும், மெல்லியதாக நறுக்கப்பட்டது' }, { item: 'புளி விழுது', amount: '1 தேக்கரண்டி, 2 தேக்கரண்டி வெந்நீரில் கலந்து, வடிகட்டப்பட்டது (புளிச்சாறு)' }, { item: 'சமையல் எண்ணெய்', amount: '4-5 தேக்கரண்டி' }, { item: 'இறால்', amount: '300 கிராம், தோல் உரித்து, நரம்பு நீக்கி, வால் பகுதி நீக்காமல்' }, { item: 'கணவாய் மீன்', amount: '200 கிராம், சுத்தம் செய்து, கீறி, வளையங்களாக வெட்டப்பட்டது' }, { item: 'பெட்டாய் பீன்ஸ் (நாற்றமுள்ள பீன்ஸ்)', amount: '100 கிராம், உரிக்கப்பட்டது (அல்லது வெண்டைக்காய், 150 கிராம், நறுக்கப்பட்டது)' }, { item: 'வெங்காயம்', amount: '1 பெரியது, நறுக்கப்பட்டது' }, { item: 'சர்க்கரை', amount: '1-2 தேக்கரண்டி (சுவைக்கு ஏற்ப)' }, { item: 'உப்பு', amount: '1 தேக்கரண்டி (சுவைக்கு ஏற்ப)' }, { item: 'எலுமிச்சை சாறு', amount: '1 தேக்கரண்டி (புதிதாக பிழியப்பட்டது)' }],
                instructions: ['முதலில், காய்ந்த மிளகாயை ஊறவைக்கவும். அவை மென்மையாகும் போது, பெலாகனை ஒரு உலர்ந்த கடாயில் வாசனை வரும் வரை லேசாக வறுக்கவும் – கருக விடாதீர்கள்! மிளகாய் மென்மையானதும், தண்ணீரை வடிகட்டவும். இப்போது, ஊறவைத்த மிளகாய், சின்ன வெங்காயம், பூண்டு, வறுத்த பெலாகன், கெமிரி நட்ஸ், சித்திரத்தை மற்றும் லெமன் கிராஸ் ஆகியவற்றை மிக்ஸியில் அல்லது உரலில் போட்டு, மென்மையான விழுதாக அரைக்கவும். இது பொறுமை தேவைப்படும் வேலை; அவசரப்பட வேண்டாம்.', 'ஒரு கடாயில் அல்லது பெரிய பாத்திரத்தில் 4-5 தேக்கரண்டி சமையல் எண்ணெயை மிதமான சூட்டில் சூடாக்கவும். எண்ணெய் சூடானதும், அரைத்த சாம்பல் விழுதை கவனமாக சேர்க்கவும். தொடர்ந்து கிளறவும். இது \'எண்ணெய் பிரிந்து வரும்\' முக்கியமான கட்டம். விழுது கருமையடைந்து, எண்ணெய் பிரிந்து, பளபளப்பான சிவப்பு நிறமாக மாறும். இதற்கு பொதுவாக 15-20 நிமிடங்கள் ஆகும்.', 'எண்ணெய் பிரிந்ததும், புளிச்சாறு, சர்க்கரை மற்றும் உப்பு சேர்த்து நன்கு கலக்கவும். 2-3 நிமிடங்கள் கொதிக்க விடவும், சுவைகள் கலந்து சாஸ் சற்று கெட்டியாகும். சுவைத்துப் பார்த்து, தேவைப்பட்டால் சர்க்கரை மற்றும் உப்பை சரிசெய்யவும். இது காரம், புளிப்பு மற்றும் லேசான இனிப்பு ஆகியவற்றின் சமநிலையாக இருக்க வேண்டும்.', 'இப்போது, நறுக்கிய வெங்காயத்தைச் சேர்க்கவும். 2 நிமிடங்கள் வதக்கவும், அவை மென்மையாகவும் வெளிப்படையாகவும் மாறும். அடுத்து, பெட்டாய் பீன்ஸ் (அல்லது வெண்டைக்காய்) சேர்க்கவும். மேலும் 2-3 நிமிடங்கள் சமைக்கவும். இறுதியாக, இறால் மற்றும் கணவாய் மீனைச் சேர்க்கவும். இறால் இளஞ்சிவப்பு நிறமாக மாறி, கணவாய் மீன் சுருண்டு வெள்ளை நிறமாக மாறும் வரை விரைவாக வதக்கவும். இது 2-3 நிமிடங்கள் மட்டுமே எடுக்கும்; அதிகமாக சமைக்க வேண்டாம், இல்லையெனில் அவை ரப்பராகிவிடும்.', 'உடனே கடாயை அடுப்பிலிருந்து இறக்கவும். புதிய எலுமிச்சை சாற்றை பிழிந்து, அனைத்தையும் ஒரு முறை மெதுவாக கலக்கவும். எலுமிச்சை சாறு சுவையை மேம்படுத்தும். உங்கள் \'சாம்பல்\' சூடான வெள்ளை சாதத்துடன் பரிமாறவும். இது ஒரு சுவையான, மறக்க முடியாத உணவு.']
            },
            kn: {
                title: 'ಸಾಂಬ್',
                description: 'ಸಾಂಬ್ ಕೇವಲ ಒಂದು ಖಾದ್ಯವಲ್ಲ, ಅದು ನನ್ನ ಅಜ್ಜಿಯ ಬೆವರಿನ ಅಡುಗೆಮನೆಯಲ್ಲಿ ಕಳೆದ ಮಧ್ಯಾಹ್ನದ ನೆನಪು. ಮಕ್ ಚಿಕ್ ಫಾತಿಮಾ ಅವರ ಕೈಗಳು ಸಾಂಬಲ್ ಪೇಸ್ಟ್ ಅನ್ನು ಪರಿಪೂರ್ಣತೆಗೆ ತರಲು ಶ್ರಮಿಸುತ್ತಿದ್ದವು. ಪಾಕವಿಧಾನ ಪುಸ್ತಕದಿಂದ ಕಲಿಯುವುದಕ್ಕಿಂತ ಹೆಚ್ಚಾಗಿ, ಇದು ವೀಕ್ಷಿಸುವುದು, ವಾಸನೆ ನೋಡುವುದು ಮತ್ತು ಸರಿಯಾಗಿ ಅರೆಯದಿದ್ದಕ್ಕೆ ಬೈಗುಳ ಕೇಳುವುದಾಗಿತ್ತು. ಸಾಂಬಲ್ ಅನ್ನು ಸರಿಯಾಗಿ ಹುರಿಯುವುದು, ಎಣ್ಣೆ ಬೇರ್ಪಡುವ ಹಂತವನ್ನು ತಲುಪುವುದು ನಿಜವಾದ ಕಲೆ. ತಾಜಾ ಪದಾರ್ಥಗಳು, ವಿಶೇಷವಾಗಿ ಪೆಟೈ ಬೀನ್ಸ್, ಈ ಖಾದ್ಯಕ್ಕೆ ವಿಶಿಷ್ಟ ರುಚಿ ನೀಡುತ್ತವೆ. ಇದು ಪ್ರೀತಿಯಿಂದ ಮಾಡುವ ಕೆಲಸ, ನಿಜಕ್ಕೂ ಮರೆಯಲಾಗದ ರುಚಿ.',
                ingredients: [{ item: 'ಒಣ ಕೆಂಪು ಮೆಣಸಿನಕಾಯಿ', amount: '15-20, 20 ನಿಮಿಷ ಬಿಸಿ ನೀರಿನಲ್ಲಿ ನೆನೆಸಿ, ಬೀಜ ತೆಗೆದ (ಕಡಿಮೆ ಖಾರಕ್ಕೆ ಬೇಕಿದ್ದರೆ)' }, { item: 'ಸಣ್ಣ ಈರುಳ್ಳಿ (ಶಾಲೋಟ್ಸ್)', amount: '8-10 ಮಧ್ಯಮ ಗಾತ್ರದ, ಸಿಪ್ಪೆ ಸುಲಿದ' }, { item: 'ಬೆಳ್ಳುಳ್ಳಿ', amount: '3-4 ಎಸಳು, ಸಿಪ್ಪೆ ಸುಲಿದ' }, { item: 'ಬೆಲಾಕನ್ (ಸೀಗಡಿ ಪೇಸ್ಟ್)', amount: '1 ಇಂಚು ತುಂಡು, ಹುರಿದ' }, { item: 'ಕ್ಯಾಂಡಲ್ ನಟ್ಸ್', amount: '3-4, ಲಘುವಾಗಿ ಹುರಿದ' }, { item: 'ಗಲಂಗಲ್', amount: '1 ಇಂಚು ತುಂಡು, ಸಿಪ್ಪೆ ಸುಲಿದ' }, { item: 'ಲೆಮನ್‌ಗ್ರಾಸ್', amount: '1 ಕಾಂಡ, ಬಿಳಿ ಭಾಗ ಮಾತ್ರ, ತೆಳುವಾಗಿ ಹೆಚ್ಚಿದ' }, { item: 'ಹುಣಸೆಹಣ್ಣಿನ ಪೇಸ್ಟ್', amount: '1 ಚಮಚ, 2 ಚಮಚ ಬಿಸಿ ನೀರಿನಲ್ಲಿ ಬೆರೆಸಿ, ಸೋಸಿದ (ಹುಣಸೆ ರಸ)' }, { item: 'ಅಡುಗೆ ಎಣ್ಣೆ', amount: '4-5 ಚಮಚ' }, { item: 'ಸೀಗಡಿ', amount: '300 ಗ್ರಾಂ, ಸಿಪ್ಪೆ ಸುಲಿದ, ನರ ತೆಗೆದ, ಬಾಲದೊಂದಿಗೆ' }, { item: 'ಸ್ಕ್ವಿಡ್', amount: '200 ಗ್ರಾಂ, ಸ್ವಚ್ಛಗೊಳಿಸಿದ, ಗೆರೆ ಎಳೆದ, ಉಂಗುರಗಳಾಗಿ ಕತ್ತರಿಸಿದ' }, { item: 'ಪೆಟೈ ಬೀನ್ಸ್ (ಸ್ಟಿಂಕ್ ಬೀನ್ಸ್)', amount: '100 ಗ್ರಾಂ, ಸಿಪ್ಪೆ ಸುಲಿದ (ಅಥವಾ ಬೆಂಡೆಕಾಯಿ, 150 ಗ್ರಾಂ, ಹೆಚ್ಚಿದ)' }, { item: 'ಈರುಳ್ಳಿ', amount: '1 ದೊಡ್ಡದು, ಹೆಚ್ಚಿದ' }, { item: 'ಸಕ್ಕರೆ', amount: '1-2 ಚಮಚ (ರುಚಿಗೆ ತಕ್ಕಷ್ಟು)' }, { item: 'ಉಪ್ಪು', amount: '1 ಚಮಚ (ರುಚಿಗೆ ತಕ್ಕಷ್ಟು)' }, { item: 'ನಿಂಬೆ ರಸ', amount: '1 ಚಮಚ (ತಾಜಾ ಹಿಂಡಿದ)' }],
                instructions: ['ಮೊದಲು ಒಣ ಮೆಣಸಿನಕಾಯಿಗಳನ್ನು ನೆನೆಸಿಡಿ. ಅವು ಮೃದುವಾಗುತ್ತಿರುವಾಗ, ಒಣ ಬಾಣಲೆಯಲ್ಲಿ ಬೆಲಾಕನ್ ಅನ್ನು ಸುವಾಸನೆ ಬರುವವರೆಗೆ ಮತ್ತು ಸ್ವಲ್ಪ ಹೊಗೆ ಬರುವವರೆಗೆ ನಿಧಾನವಾಗಿ ಹುರಿಯಿರಿ – ಸುಡಬೇಡಿ! ಅದು ಸಮುದ್ರದಂತೆ ವಾಸನೆ ಬರಬೇಕು, ಬೆಂಕಿಯಂತೆ ಅಲ್ಲ. ಮೆಣಸಿನಕಾಯಿಗಳು ಮೃದುವಾದ ನಂತರ, ನೀರನ್ನು ಬಸಿದುಬಿಡಿ. ಈಗ, ನೆನೆಸಿದ ಮೆಣಸಿನಕಾಯಿಗಳು, ಸಣ್ಣ ಈರುಳ್ಳಿ, ಬೆಳ್ಳುಳ್ಳಿ, ಹುರಿದ ಬೆಲಾಕನ್, ಕ್ಯಾಂಡಲ್ ನಟ್ಸ್, ಗಲಂಗಲ್ ಮತ್ತು ಲೆಮನ್‌ಗ್ರಾಸ್ ಅನ್ನು ಫುಡ್ ಪ್ರೊಸೆಸರ್ ಅಥವಾ ಕಲ್ಲಿನ ಒರಳಿನಲ್ಲಿ ಹಾಕಿ. ನುಣ್ಣಗೆ, ನಯವಾದ ಪೇಸ್ಟ್ ಆಗುವವರೆಗೆ ಅರೆಯಿರಿ ಅಥವಾ ರುಬ್ಬಿ. ಇದಕ್ಕೆ ತಾಳ್ಮೆ ಬೇಕು; ಆತುರಪಡಬೇಡಿ. ನಿಮಗೆ ಗಾಢ ಕೆಂಪು, ಏಕರೂಪದ ಸ್ಥಿರತೆ ಬೇಕು.', 'ಒಂದು ಬಾಣಲೆ ಅಥವಾ ದೊಡ್ಡ ಪಾತ್ರೆಯಲ್ಲಿ ಮಧ್ಯಮ ಉರಿಯಲ್ಲಿ 4-5 ಚಮಚ ಅಡುಗೆ ಎಣ್ಣೆಯನ್ನು ಬಿಸಿ ಮಾಡಿ. ಎಣ್ಣೆ ಬಿಸಿಯಾದಾಗ, ತಾಜಾ ಸಾಂಬಲ್ ಪೇಸ್ಟ್ ಅನ್ನು ಎಚ್ಚರಿಕೆಯಿಂದ ಹಾಕಿ. ಸೀಳು ಸೀಳು ಶಬ್ದ! ನಿರಂತರವಾಗಿ ತಿರುಗಿಸುತ್ತಾ ಇರಿ. ಇದು ಪ್ರಮುಖ ಹಂತ, \'ಎಣ್ಣೆ ಬೇರ್ಪಡಿಸುವ\' ಹಂತ. ಪೇಸ್ಟ್ ಗಾಢವಾಗುವುದನ್ನು ಮತ್ತು ಎಣ್ಣೆ ಅಂಚುಗಳಲ್ಲಿ ಬೇರ್ಪಟ್ಟು ಹೊಳೆಯುವ, ಕೆಂಪು ಬಣ್ಣಕ್ಕೆ ತಿರುಗುವುದನ್ನು ನೀವು ನೋಡುತ್ತೀರಿ. ಇದಕ್ಕೆ ಸಾಮಾನ್ಯವಾಗಿ 15-20 ನಿಮಿಷಗಳು ಬೇಕಾಗುತ್ತವೆ. ನಿಮ್ಮ ಅಡುಗೆಮನೆ ಈಗ ಅದ್ಭುತವಾಗಿ ವಾಸನೆ ಬರಬೇಕು – ಖಾರ, ಮಣ್ಣಿನಂತಹ ಮತ್ತು ಆಳವಾದ ಸುವಾಸನೆ. ಸುಟ್ಟ ವಾಸನೆ ಬಂದರೆ, ನೀವು ಹೆಚ್ಚು ಹುರಿದಿದ್ದೀರಿ ಎಂದರ್ಥ.', 'ಎಣ್ಣೆ ಬೇರ್ಪಟ್ಟ ನಂತರ, ಹುಣಸೆ ರಸ, ಸಕ್ಕರೆ ಮತ್ತು ಉಪ್ಪನ್ನು ಸೇರಿಸಿ. ಚೆನ್ನಾಗಿ ಮಿಶ್ರಣ ಮಾಡಿ. ರುಚಿಗಳು ಬೆರೆಯಲು ಮತ್ತು ಸಾಸ್ ಸ್ವಲ್ಪ ದಪ್ಪವಾಗಲು ಇನ್ನೊಂದು 2-3 ನಿಮಿಷ ಕುದಿಯಲು ಬಿಡಿ. ರುಚಿ ನೋಡಿ. ಅಗತ್ಯವಿದ್ದರೆ ಸಕ್ಕರೆ ಮತ್ತು ಉಪ್ಪನ್ನು ಹೊಂದಿಸಿ. ಇದು ಖಾರ, ಹುಳಿ ಮತ್ತು ಸ್ವಲ್ಪ ಸಿಹಿಯ ಸಮತೋಲನವನ್ನು ಹೊಂದಿರಬೇಕು.', 'ಈಗ, ಹೆಚ್ಚಿದ ಈರುಳ್ಳಿಗಳನ್ನು ಸೇರಿಸಿ. ಅವು ಮೃದುವಾಗಿ ಪಾರದರ್ಶಕವಾಗುವವರೆಗೆ ಸುಮಾರು 2 ನಿಮಿಷ ಹುರಿಯಿರಿ. ನಂತರ, ಪೆಟೈ ಬೀನ್ಸ್ (ಅಥವಾ ಬೆಂಡೆಕಾಯಿ) ಸೇರಿಸಿ. ಇನ್ನೊಂದು 2-3 ನಿಮಿಷ ಬೇಯಿಸಿ. ಕೊನೆಯದಾಗಿ, ಸೀಗಡಿ ಮತ್ತು ಸ್ಕ್ವಿಡ್ ಸೇರಿಸಿ. ಸೀಗಡಿ ಗುಲಾಬಿ ಬಣ್ಣಕ್ಕೆ ತಿರುಗಿ ಅಪಾರದರ್ಶಕವಾಗುವವರೆಗೆ ಮತ್ತು ಸ್ಕ್ವಿಡ್ ಸುರುಳಿಯಾಗಿ ಬಿಳಿಯಾಗುವವರೆಗೆ ಬೇಗನೆ ಹುರಿಯಿರಿ. ಇದಕ್ಕೆ ಕೇವಲ 2-3 ನಿಮಿಷಗಳು ಬೇಕಾಗುತ್ತವೆ; ದಯವಿಟ್ಟು ಅವುಗಳನ್ನು ಹೆಚ್ಚು ಬೇಯಿಸಬೇಡಿ, ಇಲ್ಲದಿದ್ದರೆ ಅವು ರಬ್ಬರ್‌ನಂತೆ ಆಗುತ್ತವೆ.', 'ತಕ್ಷಣವೇ ಬಾಣಲೆಯನ್ನು ಉರಿಯಿಂದ ಇಳಿಸಿ. ತಾಜಾ ನಿಂಬೆ ರಸವನ್ನು ಹಿಂಡಿ ಮತ್ತು ಎಲ್ಲವನ್ನೂ ಕೊನೆಯದಾಗಿ ನಿಧಾನವಾಗಿ ಮಿಶ್ರಣ ಮಾಡಿ. ನಿಂಬೆ ಎಲ್ಲವನ್ನೂ ತಾಜಾಗೊಳಿಸುತ್ತದೆ, ಉತ್ತಮವಾದ ಹುಳಿ ರುಚಿ ನೀಡುತ್ತದೆ. ನಿಮ್ಮ \'ಸಾಂಬ್\' ಅನ್ನು ಬಿಸಿ ಬಿಸಿ ಬಿಳಿ ಅನ್ನದೊಂದಿಗೆ ಬಡಿಸಿ. ಇದು ಹಂಚಿಕೊಳ್ಳಲು ಸೂಕ್ತವಾದ, ಅಸ್ತವ್ಯಸ್ತವಾದ, ಅದ್ಭುತವಾದ ಖಾದ್ಯ.']
            },
            'zh-CN': {
                title: '参巴虾仁鱿鱼臭豆',
                description: '这道参巴菜，承载着我对外婆厨房的记忆。她教我如何耐心捣制参巴酱，从干辣椒和虾酱中“逼出”灵魂，直到油色红亮分离。新鲜的虾仁、鱿鱼和臭豆是点睛之笔，让这道菜香辣浓郁，口感丰富。它不仅仅是食物，更是一份家的味道，一份用心烹制的爱。',
                ingredients: [{ item: '干红辣椒', amount: '15-20根, 用热水浸泡20分钟, 可去籽(减少辣度)' }, { item: '小葱头', amount: '8-10个中等大小, 去皮' }, { item: '大蒜', amount: '3-4瓣, 去皮' }, { item: '马来盏 (虾酱)', amount: '1英寸方块, 烤香' }, { item: '石栗', amount: '3-4颗, 略烤香' }, { item: '南姜', amount: '1英寸块, 去皮' }, { item: '香茅', amount: '1根, 只取白色部分, 切薄片' }, { item: '罗望子酱', amount: '1汤匙, 加2汤匙温水混合, 过滤取汁 (罗望子汁)' }, { item: '食用油', amount: '4-5汤匙' }, { item: '虾仁', amount: '300克, 去壳去虾线, 留虾尾' }, { item: '鱿鱼', amount: '200克, 洗净, 划花刀, 切圈' }, { item: '臭豆', amount: '100克, 去壳 (或秋葵, 150克, 切片)' }, { item: '洋葱', amount: '1个大号, 切片' }, { item: '糖', amount: '1-2茶匙 (依口味调整)' }, { item: '盐', amount: '1茶匙 (依口味调整)' }, { item: '青柠汁', amount: '1汤匙 (鲜榨)' }],
                instructions: ['先把干辣椒泡软。趁着泡辣椒的工夫，用干锅小火烘烤马来盏，直到它散发出诱人的海鲜香气，千万别烤焦了！辣椒泡软后沥干水分。接着，把泡好的辣椒、小葱头、大蒜、烤香的马来盏、石栗、南姜和香茅一起放入料理机或石臼中，耐心捣成或搅打成细腻均匀的红色酱料。', '炒锅或大平底锅中倒入4-5汤匙食用油，中火烧热。油面微动时，小心地舀入刚做好的参巴酱，听那美妙的滋啦声！不停翻炒，这是“逼油”的关键步骤。你会看到酱料颜色变深，油会慢慢从酱中分离出来，边缘泛着诱人的亮红色。这个过程大约需要15-20分钟，此时厨房里应该弥漫着香辣浓郁的诱人气息。如果闻到焦味，说明火候过了。', '待油完全逼出后，加入罗望子汁、糖和盐，充分拌匀。小火慢煮2-3分钟，让各种味道充分融合，酱汁略微变稠。尝尝味道，根据喜好调整糖和盐的用量，要达到辣、酸、甜的完美平衡。', '接着放入洋葱片，翻炒约2分钟，直到洋葱变软变透明。然后加入臭豆（或秋葵），继续炒2-3分钟。最后，倒入虾仁和鱿鱼，快速翻炒，直到虾仁变粉红不透明，鱿鱼卷曲变白即可。这个过程只需2-3分钟，切记不要炒过头，否则海鲜会变得又老又硬。', '立即关火。挤入新鲜青柠汁，轻轻翻拌均匀。青柠汁能瞬间提亮整道菜的风味，增添一丝清新的活力。将这道热腾腾的参巴虾仁鱿鱼臭豆搭配松软的白米饭享用吧！它香辣浓郁，是道适合分享的美味佳肴。']
            },
            ms: {
                title: 'Sambal Udang Petai',
                description: 'Sambal ini bukan sekadar lauk, tapi memori manis di dapur arwah nenek, Mak Cik Fatimah. Tangan kecilnya cekap menumbuk sambal hingga lumat, mengajar saya erti kesabaran dan \'pecah minyak\' yang sempurna. Rahsia sambal terletak pada cili kering yang direndam elok dan belacan bakar yang wangi, bukan pes segera. Bila minyak dah pecah, barulah sambal jadi merah menyala, harum semerbak. Tambahan udang, sotong, dan petai yang segar, menjadikan hidangan ini padat dengan rasa pedas, masam, manis, dan aroma unik yang memang menggamit selera. Memang tak cukup sepinggan!',
                ingredients: [{ item: 'Cili kering', amount: '15-20 biji, direndam air panas 20 minit, buang biji (pilihan, untuk kurang pedas)' }, { item: 'Bawang merah kecil', amount: '8-10 ulas sederhana, dikupas' }, { item: 'Bawang putih', amount: '3-4 ulas, dikupas' }, { item: 'Belacan', amount: '1 inci kiub, dibakar' }, { item: 'Buah keras', amount: '3-4 biji, dibakar sedikit' }, { item: 'Lengkuas', amount: '1 inci, dikupas' }, { item: 'Serai', amount: '1 batang, bahagian putih sahaja, dihiris nipis' }, { item: 'Asam jawa', amount: '1 sudu besar, dicampur 2 sudu besar air suam, ditapis (air asam jawa)' }, { item: 'Minyak masak', amount: '4-5 sudu besar' }, { item: 'Udang', amount: '300g, dikupas, dibuang urat, ekor dibiarkan' }, { item: 'Sotong', amount: '200g, dibersihkan, dilorek, dipotong cincin' }, { item: 'Petai', amount: '100g, dikupas (atau bendi, 150g, dihiris)' }, { item: 'Bawang besar', amount: '1 biji, dihiris' }, { item: 'Gula', amount: '1-2 sudu kecil (ikut rasa)' }, { item: 'Garam', amount: '1 sudu kecil (ikut rasa)' }, { item: 'Jus limau nipis', amount: '1 sudu besar (baru diperah)' }],
                instructions: ['Mula-mula, rendam cili kering. Sementara itu, bakar belacan dalam kuali kering hingga wangi dan sedikit berasap – jangan sampai hangit! Baunya patut macam laut, bukan api. Bila cili dah lembut, toskan. Sekarang, masukkan cili yang dah direndam, bawang merah, bawang putih, belacan bakar, buah keras, lengkuas, dan serai ke dalam pengisar atau lesung batu. Tumbuk atau kisar hingga jadi pes yang halus dan licin. Ini perlukan kesabaran; jangan gopoh. Kita nak pes merah pekat yang sekata.', 'Panaskan 4-5 sudu besar minyak masak dalam kuali atau periuk besar atas api sederhana. Bila minyak dah panas, masukkan pes sambal yang baru dikisar tadi. Dengarkan bunyi \'shhh\'! Kacau sentiasa. Ini bahagian paling penting, peringkat \'pecah minyak\'. Nanti nampak pes akan gelap sikit, dan minyak akan mula terpisah serta berkumpul di tepi, jadi merah berkilat. Biasanya ambil masa 15-20 minit. Dapur anda patut bau wangi sangat sekarang – pedas, harum, dan dalam. Kalau bau hangit, maknanya dah terlebih masak.', 'Bila minyak dah pecah, masukkan air asam jawa, gula, dan garam. Kacau sebati. Biarkan mereneh lagi 2-3 minit, biar semua rasa sebati dan kuah pekat sikit. Rasa dulu. Kalau perlu, tambah gula dan garam. Rasanya patut seimbang antara pedas, masam, dan sedikit manis.', 'Sekarang, masukkan bawang besar yang dihiris. Tumis kira-kira 2 minit hingga bawang layu dan jernih. Kemudian, masukkan petai (atau bendi). Masak lagi 2-3 minit. Akhir sekali, masukkan udang dan sotong. Kacau cepat-cepat, cukup sekadar udang jadi merah jambu dan pejal, dan sotong menggulung serta putih. Ini cuma ambil masa 2-3 minit; jangan terlebih masak nanti jadi liat dan tak sedap.', 'Angkat kuali dari api serta-merta. Perah jus limau nipis dan gaul perlahan-lahan. Limau ni akan segarkan rasa, bagi \'kick\' yang sedap. Hidangkan \'Sambal Udang Petai\' panas-panas dengan nasi putih gebu. Ini hidangan yang meriah, sedap, dan sesuai sangat untuk dikongsi.']
            }
        }
    }
,
    {
        id: '2026-05-22',
        publishedAt: '2026-05-22T08:54:00.000Z',
        title: 'Lion City',
        description: 'This \'Lion City\' dish, for me, isn\'t just a recipe; it\'s a memory, a feeling, a whole afternoon spent sweating in my Auntie Mei\'s tiny kitchen in Tiong Bahru. I first learned to make this when I was barely tall enough to see over her counter, watching her hands move with a speed and precision I still can\'t quite replicate. She\'d always say, \'You want to taste Singapore? You taste this. It\'s got the fire, the sweetness, the sea, all in one pot.\' It\'s a dish that truly captures the spirit of the island – bold, complex, and utterly unforgettable. Every time I make it, the aroma of the rempah frying takes me right back to that humid kitchen, the clatter of her wok, and her gentle scolding when I\'d try to rush the process. The biggest mistake folks make with this? Rushing the rempah. Seriously, don\'t you dare. That spice paste, that\'s the heart of the dish. You need to fry it low and slow until the oil separates and it turns a deep, burnished red. If you rush it, it\'ll taste raw, like a slap in the face instead of a warm hug. And the belacan – oh, the belacan! Some people skip it because of the smell, but you absolutely cannot. It\'s like trying to make a cake without sugar. It adds that crucial umami depth, that funky, savory punch that makes the whole thing sing. Just make sure to toast it properly before adding it to the paste; a quick dry-fry in a pan until it\'s fragrant, then crumble it in. Trust me on this. Another thing: don\'t be shy with the tamarind. It\'s the sour counterpoint to the richness of the coconut milk and the heat of the chilies. Too little, and the dish feels heavy; too much, and it\'s puckering. It\'s a balancing act, a dance of flavors. I usually start with a smaller amount, then taste and adjust. And the chicken? Thighs, always thighs. They stay juicy and absorb all that incredible flavor. Breast meat just dries out and disappoints. This dish is about indulgence, about savoring every single bite, and that means using the right cuts and giving the rempah the respect it deserves.',
        image: '/recipe-images/2026-05-22.jpg',
        prepTime: '30 min',
        cookTime: '45 min',
        difficulty: 'Medium',
        servings: 4,
        ingredients: [

            { item: 'Shallots', amount: '10-12 medium (about 200g), peeled and roughly chopped' },
            { item: 'Garlic', amount: '8-10 cloves, peeled' },
            { item: 'Fresh Red Chilies', amount: '8-10 (adjust to heat preference), deseeded if less heat desired' },
            { item: 'Dried Red Chilies', amount: '10-12, soaked in hot water for 15 mins, then drained' },
            { item: 'Galangal', amount: '2-inch piece, peeled and sliced' },
            { item: 'Ginger', amount: '1-inch piece, peeled and sliced' },
            { item: 'Lemongrass', amount: '2 stalks, white part only, thinly sliced' },
            { item: 'Candlenuts', amount: '4-5, lightly toasted (or macadamia nuts as substitute)' },
            { item: 'Turmeric Powder', amount: '1 tsp (or 1-inch fresh turmeric, peeled and sliced)' },
            { item: 'Belacan (Shrimp Paste)', amount: '1 tsp, toasted' },
            { item: 'Vegetable Oil (for blending rempah)', amount: '3-4 tbsp' },
            { item: 'Chicken Thighs', amount: '800g, boneless, skin-on or off, cut into 2-inch pieces' },
            { item: 'Large Prawns', amount: '300g, peeled and deveined, tails on' },
            { item: 'Thick Coconut Milk', amount: '400ml can' },
            { item: 'Tamarind Paste', amount: '2 tbsp, mixed with 1/4 cup warm water, strained' },
            { item: 'Palm Sugar', amount: '1-2 tbsp, grated or chopped (or brown sugar)' },
            { item: 'Salt', amount: 'To taste' },
            { item: 'Vegetable Oil (for frying rempah)', amount: '3-4 tbsp' },
            { item: 'Water', amount: '1/2 cup (if needed)' },
            { item: 'Fresh Coriander', amount: 'A handful, chopped (for garnish)' },
            { item: 'Red Chilies', amount: '1-2, thinly sliced (optional, for garnish)' }
        ],
        instructions: [
            'First, get that belacan toasted. Heat a dry pan over medium heat, toss in the belacan, and let it toast for a minute or two until it\'s fragrant and a bit crumbly. Don\'t burn it! Now, into a food processor or blender go all your rempah ingredients: the toasted belacan, shallots, garlic, fresh and soaked dried chilies, galangal, ginger, lemongrass, candlenuts, and turmeric powder. Add 3-4 tablespoons of vegetable oil. Blend it all into a smooth, vibrant paste. You might need to scrape down the sides a few times. It should look like a thick, reddish-orange mud.',
            'This is the crucial step, folks. Heat 3-4 tablespoons of fresh vegetable oil in a large wok or heavy-bottomed pot over medium-low heat. Spoon in your beautiful rempah. Now, stir. And stir. And stir some more. You\'re looking for a transformation here. The paste will darken, the oil will start to separate and shimmer on the surface, and your kitchen will fill with the most incredible, complex aroma – spicy, earthy, a little sweet. This takes a good 15-20 minutes, maybe even longer. Don\'t rush it, or it\'ll taste raw. When it\'s done, it\'ll be a deep, burnished red-brown, and the oil will be clearly visible.',
            'Once your rempah is perfectly fried, crank the heat up to medium. Add the chicken pieces to the pot. Stir them well, coating every piece with that glorious spice paste. Let the chicken sear for about 5-7 minutes, stirring occasionally, until the outside is lightly browned and sealed. You\'ll see the chicken start to take on the color of the rempah, a rich, inviting hue.',
            'Pour in the thick coconut milk. Add the strained tamarind liquid and the palm sugar. Give it a good stir to combine everything. Bring the mixture to a gentle simmer, then reduce the heat to low, cover the pot, and let it cook for about 20-25 minutes. The sauce will thicken, and the chicken will become incredibly tender. Check it occasionally, giving it a stir to prevent sticking. If it looks too thick, add a splash of water, but usually, the chicken releases enough liquid.',
            'After the chicken has simmered, uncover the pot. Taste the sauce and adjust for salt and sweetness. This is your chance to make it perfect. Now, add the peeled and deveined prawns. Stir them in gently. Cook for just 3-5 minutes, or until the prawns turn opaque and pink. Don\'t overcook them, or they\'ll get rubbery – nobody wants that! The moment they curl up and change color, they\'re done.',
            'Ladle this magnificent \'Lion City\' dish into serving bowls. Garnish generously with fresh chopped coriander and a few slices of red chili if you like an extra kick. Serve immediately with steaming hot jasmine rice. The flavors will be deep, rich, and utterly satisfying.'
        ],
        tags: ['Singaporean', 'Dinner', 'Authentic', 'Spicy'],
        translations: {
            hi: {
                title: 'सिंगापुर चिकन करी',
                description: 'यह \'सिंगापुर चिकन करी\' सिर्फ एक रेसिपी नहीं, बल्कि मेरी आंटी मेई की त्योंग बारू की छोटी रसोई में बिताई गई एक यादगार दोपहर है। जब मैं छोटी थी, तभी से उनके हाथों की फुर्ती और सटीकता देखती आ रही हूँ। आंटी कहती थीं, \'सिंगापुर का स्वाद चखना है तो इसे चखो। इसमें आग है, मिठास है, समंदर है, सब एक ही बर्तन में।\' यह डिश सचमुच सिंगापुर की आत्मा को दर्शाती है – दमदार, जटिल और अविस्मरणीय। इसकी जान है रेम्पा (मसाला पेस्ट), जिसे धीमी आंच पर भूनना बेहद ज़रूरी है, ताकि तेल अलग हो जाए और रंग गहरा लाल हो जाए। बेलाचन और इमली का सही संतुलन इसे लाजवाब बनाता है।',
                ingredients: [{ item: 'प्याज की छोटी गांठें', amount: '10-12 मध्यम (लगभग 200 ग्राम), छीलकर मोटे टुकड़ों में कटी हुई' }, { item: 'लहसुन', amount: '8-10 कलियाँ, छिली हुई' }, { item: 'ताज़ी लाल मिर्च', amount: '8-10 (तीखेपन के अनुसार समायोजित करें), कम तीखापन चाहिए तो बीज निकाल दें' }, { item: 'सूखी लाल मिर्च', amount: '10-12, 15 मिनट के लिए गर्म पानी में भिगोकर, फिर पानी निकालकर' }, { item: 'गलांगाल', amount: '2 इंच का टुकड़ा, छीलकर कटा हुआ' }, { item: 'अदरक', amount: '1 इंच का टुकड़ा, छीलकर कटा हुआ' }, { item: 'लेमनग्रास', amount: '2 डंठल, केवल सफेद भाग, पतला कटा हुआ' }, { item: 'कैंडल नट्स', amount: '4-5, हल्का भुना हुआ (या मैकाडेमिया नट्स विकल्प के रूप में)' }, { item: 'हल्दी पाउडर', amount: '1 छोटा चम्मच (या 1 इंच ताज़ी हल्दी, छीलकर कटी हुई)' }, { item: 'बेलाचन (झींगा पेस्ट)', amount: '1 छोटा चम्मच, भुना हुआ' }, { item: 'वनस्पति तेल (रेम्पा पीसने के लिए)', amount: '3-4 बड़े चम्मच' }, { item: 'चिकन थाई', amount: '800 ग्राम, हड्डी रहित, त्वचा सहित या रहित, 2 इंच के टुकड़ों में कटा हुआ' }, { item: 'बड़ी झींगा', amount: '300 ग्राम, छिली हुई और नसें निकाली हुई, पूंछ सहित' }, { item: 'गाढ़ा नारियल का दूध', amount: '400 मिलीलीटर का डिब्बा' }, { item: 'इमली का पेस्ट', amount: '2 बड़े चम्मच, 1/4 कप गर्म पानी में मिलाकर, छान लिया गया' }, { item: 'पाम शुगर', amount: '1-2 बड़े चम्मच, कद्दूकस किया हुआ या कटा हुआ (या ब्राउन शुगर)' }, { item: 'नमक', amount: 'स्वादानुसार' }, { item: 'वनस्पति तेल (रेम्पा भूनने के लिए)', amount: '3-4 बड़े चम्मच' }, { item: 'पानी', amount: '1/2 कप (यदि आवश्यक हो)' }, { item: 'ताज़ा हरा धनिया', amount: 'एक मुट्ठी, कटा हुआ (सजाने के लिए)' }, { item: 'लाल मिर्च', amount: '1-2, पतली कटी हुई (वैकल्पिक, सजाने के लिए)' }],
                instructions: ['सबसे पहले, बेलाचन को भून लें। एक सूखे पैन को मध्यम आंच पर गरम करें, उसमें बेलाचन डालकर एक-दो मिनट तक भूनें जब तक कि वह सुगंधित और थोड़ा भुरभुरा न हो जाए। इसे जलने न दें! अब, सभी रेम्पा सामग्री को फूड प्रोसेसर या ब्लेंडर में डालें: भुना हुआ बेलाचन, प्याज की छोटी गांठें, लहसुन, ताज़ी और भिगोई हुई सूखी मिर्च, गलांगाल, अदरक, लेमनग्रास, कैंडल नट्स और हल्दी पाउडर। 3-4 बड़े चम्मच वनस्पति तेल डालें। इन सबको एक चिकना, चमकीला पेस्ट बनने तक पीस लें। आपको किनारों को कुछ बार खुरचना पड़ सकता है। यह एक गाढ़े, लाल-नारंगी मिट्टी जैसा दिखना चाहिए।', 'यह सबसे महत्वपूर्ण कदम है, दोस्तों। एक बड़ी कड़ाही या भारी तले वाले बर्तन में मध्यम-धीमी आंच पर 3-4 बड़े चम्मच ताज़ा वनस्पति तेल गरम करें। इसमें अपना शानदार रेम्पा डालें। अब, इसे लगातार चलाते रहें। आप यहाँ एक बदलाव देखेंगे। पेस्ट गहरा हो जाएगा, तेल सतह पर अलग होकर चमकने लगेगा, और आपकी रसोई एक अविश्वसनीय, जटिल सुगंध से भर जाएगी – मसालेदार, मिट्टी जैसा, थोड़ा मीठा। इसमें अच्छे 15-20 मिनट, शायद इससे भी ज़्यादा लग सकते हैं। इसे जल्दबाज़ी न करें, वरना इसका स्वाद कच्चा लगेगा। जब यह तैयार हो जाएगा, तो यह गहरा, चमकदार लाल-भूरा होगा, और तेल साफ दिखाई देगा।', 'एक बार जब आपका रेम्पा पूरी तरह से भुन जाए, तो आंच को मध्यम कर दें। चिकन के टुकड़े बर्तन में डालें। उन्हें अच्छी तरह से चलाएं, हर टुकड़े को उस शानदार मसाला पेस्ट से ढक दें। चिकन को लगभग 5-7 मिनट तक भूनें, बीच-बीच में चलाते रहें, जब तक कि बाहर से हल्का भूरा और सील न हो जाए। आप देखेंगे कि चिकन रेम्पा का रंग लेने लगेगा, एक गहरा, आकर्षक रंग।', 'गाढ़ा नारियल का दूध डालें। छाना हुआ इमली का पानी और पाम शुगर डालें। सब कुछ मिलाने के लिए अच्छी तरह चलाएं। मिश्रण को धीमी आंच पर उबाल आने दें, फिर आंच कम करके, बर्तन को ढक दें और इसे लगभग 20-25 मिनट तक पकने दें। सॉस गाढ़ा हो जाएगा, और चिकन अविश्वसनीय रूप से नरम हो जाएगा। इसे बीच-बीच में देखते रहें, चिपकने से रोकने के लिए चलाते रहें। यदि यह बहुत गाढ़ा लगे, तो थोड़ा पानी डालें, लेकिन आमतौर पर चिकन पर्याप्त तरल छोड़ता है।', 'चिकन के पकने के बाद, बर्तन का ढक्कन हटा दें। सॉस का स्वाद चखें और नमक और मिठास के लिए समायोजित करें। यह इसे सही बनाने का आपका मौका है। अब, छिली हुई और नसें निकाली हुई झींगा डालें। उन्हें धीरे से मिलाएं। बस 3-5 मिनट तक पकाएं, या जब तक झींगा अपारदर्शी और गुलाबी न हो जाए। उन्हें ज़्यादा न पकाएं, वरना वे रबर जैसी हो जाएंगी – कोई नहीं चाहता! जैसे ही वे मुड़ें और रंग बदलें, वे तैयार हैं।', 'इस शानदार \'सिंगापुर चिकन करी\' को सर्विंग बाउल में निकालें। ताज़े कटे हरे धनिये और यदि आपको अतिरिक्त तीखापन पसंद है तो लाल मिर्च के कुछ टुकड़ों से उदारतापूर्वक सजाएं। गरमागरम जैस्मीन चावल के साथ तुरंत परोसें। स्वाद गहरा, समृद्ध और पूरी तरह से संतोषजनक होगा।']
            },
            bn: {
                title: 'সিংহনগর',
                description: 'এই \'সিংহনগর\' পদটি আমার কাছে শুধু একটি রেসিপি নয়, এটি এক স্মৃতি, এক অনুভূতি। টিওং বাহরুর আমার মাসি মেই-এর ছোট্ট রান্নাঘরে ঘাম ঝরানো একটি পুরো দুপুর। মাসি বলতেন, \'সিঙ্গাপুরের স্বাদ পেতে চাও? তবে এটা চেখে দেখো। এতে আগুন, মিষ্টি আর সমুদ্রের স্বাদ সব এক পাত্রে।\' এই পদটি দ্বীপের আত্মাকে ধারণ করে – সাহসী, জটিল এবং অবিস্মরণীয়। বেলাচান আর রেম্পা মশলার সঠিক ব্যবহার এই পদের প্রাণ। তাড়াহুড়ো না করে ধীরে ধীরে মশলা কষানোই এর আসল রহস্য।',
                ingredients: [{ item: 'ছোট পেঁয়াজ', amount: '১০-১২টি মাঝারি (প্রায় ২০০ গ্রাম), খোসা ছাড়ানো ও মোটা করে কাটা' }, { item: 'রসুন', amount: '৮-১০ কোয়া, খোসা ছাড়ানো' }, { item: 'কাঁচা লাল লঙ্কা', amount: '৮-১০টি (ঝাল অনুযায়ী), কম ঝাল চাইলে বীজ ফেলে দিন' }, { item: 'শুকনো লাল লঙ্কা', amount: '১০-১২টি, গরম জলে ১৫ মিনিট ভিজিয়ে জল ঝরানো' }, { item: 'কুলঞ্জন', amount: '২ ইঞ্চি টুকরো, খোসা ছাড়ানো ও স্লাইস করা' }, { item: 'আদা', amount: '১ ইঞ্চি টুকরো, খোসা ছাড়ানো ও স্লাইস করা' }, { item: 'লেমনগ্রাস', amount: '২ ডাঁটা, শুধু সাদা অংশ, পাতলা করে স্লাইস করা' }, { item: 'ক্যান্ডেলনাট', amount: '৪-৫টি, হালকা ভাজা (বিকল্পে ম্যাকাডামিয়া বাদাম)' }, { item: 'হলুদ গুঁড়ো', amount: '১ চা চামচ (বিকল্পে ১ ইঞ্চি তাজা হলুদ, খোসা ছাড়ানো ও স্লাইস করা)' }, { item: 'বেলাচান (চিংড়ি পেস্ট)', amount: '১ চা চামচ, ভাজা' }, { item: 'ভেজিটেবল অয়েল (রেম্পা ব্লেন্ড করার জন্য)', amount: '৩-৪ টেবিল চামচ' }, { item: 'মুরগির থাই', amount: '৮০০ গ্রাম, হাড়বিহীন, চামড়া সহ বা ছাড়া, ২ ইঞ্চি টুকরো করে কাটা' }, { item: 'বড় চিংড়ি', amount: '৩০০ গ্রাম, খোসা ছাড়ানো ও শিরা পরিষ্কার করা, লেজ সহ' }, { item: 'ঘন নারকেলের দুধ', amount: '৪০০ মিলি ক্যান' }, { item: 'তেঁতুলের ক্বাথ', amount: '২ টেবিল চামচ, ১/৪ কাপ গরম জলে মিশিয়ে ছাঁকা' }, { item: 'পাম সুগার', amount: '১-২ টেবিল চামচ, গ্রেট করা বা কুচি করা (বিকল্পে ব্রাউন সুগার)' }, { item: 'নুন', amount: 'স্বাদমতো' }, { item: 'ভেজিটেবল অয়েল (রেম্পা ভাজার জন্য)', amount: '৩-৪ টেবিল চামচ' }, { item: 'জল', amount: '১/২ কাপ (প্রয়োজন হলে)' }, { item: 'তাজা ধনে পাতা', amount: 'এক মুঠো, কুচি করা (সাজানোর জন্য)' }, { item: 'লাল লঙ্কা', amount: '১-২টি, পাতলা করে স্লাইস করা (ঐচ্ছিক, সাজানোর জন্য)' }],
                instructions: ['প্রথমে বেলাচান ভেজে নিন। একটি শুকনো প্যান মাঝারি আঁচে গরম করে বেলাচান দিয়ে ১-২ মিনিট ভাজুন যতক্ষণ না সুগন্ধ বের হয় এবং এটি কিছুটা গুঁড়ো গুঁড়ো হয়ে যায়। পুড়িয়ে ফেলবেন না! এবার একটি ফুড প্রসেসর বা ব্লেন্ডারে রেম্পার সব উপকরণ – ভাজা বেলাচান, ছোট পেঁয়াজ, রসুন, কাঁচা ও ভেজানো শুকনো লঙ্কা, কুলঞ্জন, আদা, লেমনগ্রাস, ক্যান্ডেলনাট এবং হলুদ গুঁড়ো দিন। ৩-৪ টেবিল চামচ ভেজিটেবল অয়েল যোগ করুন। সবকিছু মসৃণ পেস্ট হওয়া পর্যন্ত ব্লেন্ড করুন। কয়েকবার পাশ থেকে চেঁছে দিতে হতে পারে। এটি ঘন, লালচে-কমলা কাদার মতো দেখতে হবে।', 'এটিই সবচেয়ে গুরুত্বপূর্ণ ধাপ। একটি বড় কড়াই বা ভারী তলার পাত্রে মাঝারি-কম আঁচে ৩-৪ টেবিল চামচ ভেজিটেবল অয়েল গরম করুন। আপনার তৈরি করা সুন্দর রেম্পা পেস্টটি দিন। এবার নাড়ুন। আরও নাড়ুন। আপনি এখানে একটি রূপান্তর খুঁজছেন। পেস্টটি গাঢ় হবে, তেল আলাদা হয়ে উপরে ভেসে উঠবে এবং আপনার রান্নাঘর এক অবিশ্বাস্য, জটিল সুগন্ধে ভরে যাবে – মশলাদার, মাটির গন্ধযুক্ত, কিছুটা মিষ্টি। এতে ১৫-২০ মিনিট, এমনকি আরও বেশি সময় লাগতে পারে। তাড়াহুড়ো করবেন না, নইলে কাঁচা স্বাদ লাগবে। যখন হয়ে যাবে, এটি গাঢ়, পোড়া লাল-বাদামী রঙের হবে এবং তেল স্পষ্টভাবে দেখা যাবে।', 'আপনার রেম্পা পুরোপুরি ভাজা হয়ে গেলে, আঁচ মাঝারি করে দিন। পাত্রে মুরগির টুকরোগুলি যোগ করুন। ভালো করে নাড়ুন, প্রতিটি টুকরোকে সেই চমৎকার মশলার পেস্ট দিয়ে মাখিয়ে নিন। মুরগি ৫-৭ মিনিট ধরে ভাজুন, মাঝে মাঝে নাড়ুন, যতক্ষণ না বাইরের দিকটা হালকা বাদামী হয়ে যায়। মুরগি রেম্পার রঙ ধারণ করতে শুরু করবে, একটি সমৃদ্ধ, লোভনীয় আভা আসবে।', 'ঘন নারকেলের দুধ ঢেলে দিন। ছাঁকা তেঁতুলের ক্বাথ এবং পাম সুগার যোগ করুন। সবকিছু ভালোভাবে মেশানোর জন্য একবার নাড়ুন। মিশ্রণটি হালকা ফুটতে শুরু করলে, আঁচ কমিয়ে পাত্রটি ঢেকে প্রায় ২০-২৫ মিনিট রান্না হতে দিন। সস ঘন হবে এবং মুরগি অবিশ্বাস্যভাবে নরম হয়ে যাবে। মাঝে মাঝে দেখে নিন, লেগে যাওয়া আটকাতে নাড়ুন। যদি খুব ঘন মনে হয়, সামান্য জল যোগ করুন, তবে সাধারণত মুরগি থেকে যথেষ্ট জল বের হয়।', 'মুরগি সেদ্ধ হয়ে গেলে, পাত্রের ঢাকনা সরান। সসের স্বাদ নিন এবং নুন ও মিষ্টির পরিমাণ ঠিক করুন। এটি আপনার নিখুঁত করার সুযোগ। এবার খোসা ছাড়ানো ও শিরা পরিষ্কার করা চিংড়ি যোগ করুন। আলতো করে মিশিয়ে দিন। মাত্র ৩-৫ মিনিট রান্না করুন, অথবা চিংড়ি অস্বচ্ছ ও গোলাপী না হওয়া পর্যন্ত। অতিরিক্ত রান্না করবেন না, নইলে রাবারের মতো হয়ে যাবে – কেউ তা চায় না! যেই মুহূর্তে তারা কুঁকড়ে রঙ পরিবর্তন করবে, তখনই তারা তৈরি।', 'এই চমৎকার \'সিংহনগর\' পদটি পরিবেশন পাত্রে ঢেলে নিন। তাজা কুচি করা ধনে পাতা এবং অতিরিক্ত ঝাল চাইলে কয়েক টুকরো লাল লঙ্কা দিয়ে উদারভাবে সাজিয়ে দিন। গরম ভাতের সাথে সাথে সাথে পরিবেশন করুন। স্বাদ হবে গভীর, সমৃদ্ধ এবং সম্পূর্ণ তৃপ্তিদায়ক।']
            },
            mr: {
                title: 'लायन सिटी',
                description: 'हा \'लायन सिटी\' पदार्थ म्हणजे माझ्यासाठी फक्त एक रेसिपी नाही, तर माझ्या मावशी मेईच्या टियोंग बाहरू येथील छोट्याशा स्वयंपाकघरातील आठवण आहे. तिच्या हातांची ती वेगवान आणि अचूक हालचाल मी अजूनही विसरू शकत नाही. ती नेहमी म्हणायची, \'सिंगापूरची खरी चव घ्यायची असेल, तर हे खा. यात आग आहे, गोडवा आहे, समुद्राची चव आहे, सगळं एकाच भांड्यात.\' हा पदार्थ खरंच सिंगापूरच्या आत्म्याला पकडतो – तो बोल्ड, गुंतागुंतीचा आणि अविस्मरणीय आहे. रेम्पा (मसाला पेस्ट) हळू आणि मंद आचेवर भाजणे हेच या पदार्थाचे हृदय आहे. बेलाचन (कोळंबी पेस्ट) आणि चिंच यांचा योग्य वापर याला खरी चव देतो. चिकनच्या मांडीचे तुकडे वापरल्याने ते रसाळ राहतात.',
                ingredients: [{ item: 'कांदे (छोटे)', amount: '१०-१२ मध्यम (सुमारे २०० ग्रॅम), सोलून अंदाजे चिरलेले' }, { item: 'लसूण', amount: '८-१० पाकळ्या, सोललेल्या' }, { item: 'ताज्या लाल मिरच्या', amount: '८-१० (तिखटपणा आवडीनुसार समायोजित करा), कमी तिखट हवे असल्यास बिया काढून टाका' }, { item: 'सुक्या लाल मिरच्या', amount: '१०-१२, १५ मिनिटे गरम पाण्यात भिजवून नंतर पाणी काढून टाका' }, { item: 'गळंगळ', amount: '२ इंचाचा तुकडा, सोलून कापलेला' }, { item: 'आलं', amount: '१ इंचाचा तुकडा, सोलून कापलेला' }, { item: 'लेमनग्रास', amount: '२ देठ, फक्त पांढरा भाग, पातळ कापलेला' }, { item: 'कँडलनट्स', amount: '४-५, हलके भाजलेले (किंवा मॅकाडेमिया नट्स पर्याय म्हणून)' }, { item: 'हळद पावडर', amount: '१ छोटा चमचा (किंवा १ इंचाची ताजी हळद, सोलून कापलेली)' }, { item: 'बेलाचन (कोळंबी पेस्ट)', amount: '१ छोटा चमचा, भाजलेले' }, { item: 'वनस्पती तेल (रेम्पा वाटण्यासाठी)', amount: '३-४ मोठे चमचे' }, { item: 'चिकनच्या मांडीचे तुकडे', amount: '८०० ग्रॅम, हाड नसलेले, त्वचा असलेले किंवा नसलेले, २ इंचाच्या तुकड्यांमध्ये कापलेले' }, { item: 'मोठ्या कोळंबी', amount: '३०० ग्रॅम, सोललेल्या आणि साफ केलेल्या, शेपटीसह' }, { item: 'घट्ट नारळाचे दूध', amount: '४०० मिली कॅन' }, { item: 'चिंचेचा कोळ', amount: '२ मोठे चमचे, १/४ कप कोमट पाण्यात मिसळून गाळलेले' }, { item: 'पाम शुगर', amount: '१-२ मोठे चमचे, किसलेली किंवा चिरलेली (किंवा ब्राऊन शुगर)' }, { item: 'मीठ', amount: 'चवीनुसार' }, { item: 'वनस्पती तेल (रेम्पा परतण्यासाठी)', amount: '३-४ मोठे चमचे' }, { item: 'पाणी', amount: '१/२ कप (गरज असल्यास)' }, { item: 'ताजी कोथिंबीर', amount: 'एक मूठभर, चिरलेली (सजावटीसाठी)' }, { item: 'लाल मिरच्या', amount: '१-२, पातळ कापलेल्या (ऐच्छिक, सजावटीसाठी)' }],
                instructions: ['सगळ्यात आधी बेलाचन भाजून घ्या. एका कोरड्या पॅनमध्ये मध्यम आचेवर बेलाचन एक-दोन मिनिटे भाजून घ्या, ते सुगंधित आणि थोडे कुरकुरीत होईपर्यंत. ते जळू नये याची काळजी घ्या! आता, भाजलेले बेलाचन, कांदे, लसूण, ताज्या आणि भिजवलेल्या सुक्या मिरच्या, गळंगळ, आलं, लेमनग्रास, कँडलनट्स आणि हळद पावडर हे सर्व रेम्पाचे साहित्य फूड प्रोसेसर किंवा ब्लेंडरमध्ये घाला. त्यात ३-४ चमचे वनस्पती तेल घालून गुळगुळीत पेस्ट होईपर्यंत वाटून घ्या. हे मिश्रण घट्ट, लालसर-केशरी रंगाच्या चिखलासारखे दिसेल.', 'हा महत्त्वाचा टप्पा आहे. एका मोठ्या कढईत किंवा जाड बुडाच्या भांड्यात मध्यम-मंद आचेवर ३-४ चमचे वनस्पती तेल गरम करा. त्यात तयार केलेली रेम्पा पेस्ट घाला. आता, सतत ढवळत रहा. पेस्टचा रंग गडद होईल, तेल वेगळे होऊन वर तरंगू लागेल आणि तुमच्या स्वयंपाकघरात एक अद्भुत, जटिल सुगंध पसरेल – मसालेदार, मातीचा, थोडा गोड. याला १५-२० मिनिटे लागतील, कदाचित त्याहून जास्तही. घाई करू नका, नाहीतर चव कच्ची लागेल. पूर्ण झाल्यावर, ते गडद लाल-तपकिरी रंगाचे होईल आणि तेल स्पष्टपणे दिसेल.', 'रेम्पा व्यवस्थित परतल्यावर, आच मध्यम करा. चिकनचे तुकडे भांड्यात घाला. त्यांना मसाल्याच्या पेस्टमध्ये चांगले मिसळून घ्या. चिकन ५-७ मिनिटे परतून घ्या, अधूनमधून ढवळत रहा, जोपर्यंत ते हलके तपकिरी होऊन सील होत नाही. चिकनला रेम्पाचा सुंदर रंग येईल.', 'घट्ट नारळाचे दूध घाला. गाळलेले चिंचेचे पाणी आणि पाम शुगर घाला. सर्वकाही चांगले मिसळून घ्या. मिश्रण हलके उकळी येऊ द्या, नंतर आच मंद करून भांडे झाका आणि सुमारे २०-२५ मिनिटे शिजवा. ग्रेव्ही घट्ट होईल आणि चिकन खूप मऊ होईल. चिकटू नये म्हणून अधूनमधून ढवळत रहा. जर खूप घट्ट वाटले तर थोडे पाणी घाला, पण सहसा चिकनमधून पुरेसे पाणी सुटते.', 'चिकन शिजल्यावर, झाकण काढा. ग्रेव्हीची चव घेऊन मीठ आणि गोडवा गरजेनुसार समायोजित करा. आता सोललेल्या आणि साफ केलेल्या कोळंबी घाला. हळूवारपणे ढवळून घ्या. फक्त ३-५ मिनिटे शिजवा, किंवा कोळंबी अपारदर्शक आणि गुलाबी होईपर्यंत. जास्त शिजवू नका, नाहीतर त्या रबरासारख्या होतील. त्या वळल्या आणि रंग बदलला की लगेच गॅस बंद करा.', 'हा अप्रतिम \'लायन सिटी\' पदार्थ सर्व्हिंग बाऊलमध्ये काढा. ताज्या चिरलेल्या कोथिंबीरने आणि तुम्हाला जास्त तिखट आवडत असल्यास लाल मिरचीच्या काही पातळ कापलेल्या तुकड्यांनी सजवा. गरमागरम जास्मिन भातासोबत लगेच सर्व्ह करा. चव खूप खोल, समृद्ध आणि पूर्णपणे समाधानकारक असेल.']
            },
            te: {
                title: 'లయన్ సిటీ',
                description: 'ఈ \'లయన్ సిటీ\' వంటకం కేవలం ఒక రెసిపీ కాదు, ఇది నాకు మా అత్తయ్య మేయ్ టియోంగ్ బహ్రులోని చిన్న వంటగదిలో గడిపిన మధురమైన జ్ఞాపకం. సింగపూర్ ఆత్మను ప్రతిబింబించే ఈ వంటకం, కారంగా, తీయగా, సముద్రపు రుచులతో నిండి ఉంటుంది. దీనికి ప్రాణం రంపా పేస్ట్. దాన్ని నెమ్మదిగా, ఓపికగా వేయించాలి, అప్పుడే నూనె విడిపోయి, మంచి రంగు వస్తుంది. బెలకన్ (రొయ్యల పేస్ట్) వాడటం మర్చిపోవద్దు, అది లేకపోతే రుచి అసంపూర్ణం. చింతపండు పులుపు, కొబ్బరి పాలు, కోడి తొడల మాంసం అన్నీ కలిసి అద్భుతమైన రుచినిస్తాయి.',
                ingredients: [{ item: 'చిన్న ఉల్లిపాయలు', amount: '10-12 మధ్యస్థ పరిమాణం (సుమారు 200 గ్రా), తొక్క తీసి ముక్కలుగా కోసినవి' }, { item: 'వెల్లుల్లి రెబ్బలు', amount: '8-10, తొక్క తీసినవి' }, { item: 'పచ్చి ఎర్ర మిరపకాయలు', amount: '8-10 (కారానికి తగ్గట్టు సర్దుబాటు చేయండి), కారం తక్కువ కావాలంటే గింజలు తీసేయండి' }, { item: 'ఎండు మిరపకాయలు', amount: '10-12, 15 నిమిషాలు వేడి నీటిలో నానబెట్టి, నీరు తీసేసినవి' }, { item: 'గలంగల్', amount: '2 అంగుళాల ముక్క, తొక్క తీసి ముక్కలుగా కోసినది' }, { item: 'అల్లం', amount: '1 అంగుళం ముక్క, తొక్క తీసి ముక్కలుగా కోసినది' }, { item: 'నిమ్మగడ్డి', amount: '2 కాడలు, తెల్లటి భాగం మాత్రమే, సన్నగా తరిగినవి' }, { item: 'క్యాండిల్‌నట్స్', amount: '4-5, కొద్దిగా వేయించినవి (లేదా మకాడమియా నట్స్ ప్రత్యామ్నాయంగా)' }, { item: 'పసుపు పొడి', amount: '1 టీస్పూన్ (లేదా 1 అంగుళం తాజా పసుపు, తొక్క తీసి ముక్కలుగా కోసినది)' }, { item: 'బెలకన్ (రొయ్యల పేస్ట్)', amount: '1 టీస్పూన్, వేయించినది' }, { item: 'వంట నూనె (రంపా పేస్ట్ కలపడానికి)', amount: '3-4 టేబుల్‌స్పూన్లు' }, { item: 'చికెన్ తొడ భాగాలు', amount: '800 గ్రా, ఎముకలు లేనివి, చర్మంతో లేదా లేకుండా, 2 అంగుళాల ముక్కలుగా కోసినవి' }, { item: 'పెద్ద రొయ్యలు', amount: '300 గ్రా, తొక్క తీసి, నరం తీసినవి, తోకలు ఉంచినవి' }, { item: 'చిక్కటి కొబ్బరి పాలు', amount: '400 మి.లీ డబ్బా' }, { item: 'చింతపండు గుజ్జు', amount: '2 టేబుల్‌స్పూన్లు, 1/4 కప్పు గోరువెచ్చని నీటిలో కలిపి, వడకట్టినది' }, { item: 'తాటి బెల్లం', amount: '1-2 టేబుల్‌స్పూన్లు, తురిమినది లేదా ముక్కలుగా చేసినది (లేదా బ్రౌన్ షుగర్)' }, { item: 'ఉప్పు', amount: 'రుచికి సరిపడా' }, { item: 'వంట నూనె (రంపా వేయించడానికి)', amount: '3-4 టేబుల్‌స్పూన్లు' }, { item: 'నీరు', amount: '1/2 కప్పు (అవసరమైతే)' }, { item: 'తాజా కొత్తిమీర', amount: 'ఒక గుప్పెడు, తరిగినది (అలంకరణకు)' }, { item: 'ఎర్ర మిరపకాయలు', amount: '1-2, సన్నగా తరిగినవి (ఐచ్ఛికం, అలంకరణకు)' }],
                instructions: ['ముందుగా, బెలకన్‌ను వేయించుకోవాలి. పొడి పాన్‌ను మధ్యస్థ మంటపై వేడి చేసి, బెలకన్‌ను వేసి, సువాసన వచ్చే వరకు ఒకటి రెండు నిమిషాలు వేయించండి. మాడిపోకుండా చూసుకోండి! ఇప్పుడు, వేయించిన బెలకన్, చిన్న ఉల్లిపాయలు, వెల్లుల్లి, పచ్చి మరియు నానబెట్టిన ఎండు మిరపకాయలు, గలంగల్, అల్లం, నిమ్మగడ్డి, క్యాండిల్‌నట్స్, పసుపు పొడి – ఈ రంపా పదార్థాలన్నింటినీ ఫుడ్ ప్రాసెసర్ లేదా బ్లెండర్‌లో వేయండి. 3-4 టేబుల్‌స్పూన్ల వంట నూనె కలిపి, మెత్తని, ప్రకాశవంతమైన పేస్ట్‌లా రుబ్బుకోండి. ఇది చిక్కటి, ఎరుపు-నారింజ రంగు బురదలా ఉండాలి.', 'ఇది చాలా ముఖ్యమైన దశ. ఒక పెద్ద కడాయిలో లేదా మందపాటి అడుగున్న పాత్రలో 3-4 టేబుల్‌స్పూన్ల వంట నూనెను మధ్యస్థ-తక్కువ మంటపై వేడి చేయండి. మీరు తయారు చేసుకున్న రంపా పేస్ట్‌ను వేయండి. ఇప్పుడు, కలుపుతూ ఉండండి. పేస్ట్ రంగు ముదురుతుంది, నూనె విడిపోయి పైకి తేలుతుంది, మీ వంటగది అద్భుతమైన, సంక్లిష్టమైన సువాసనతో నిండిపోతుంది – కారంగా, మట్టి వాసనతో, కొద్దిగా తీయగా. దీనికి 15-20 నిమిషాలు, కొన్నిసార్లు ఇంకా ఎక్కువ సమయం పడుతుంది. తొందరపడకండి, లేకపోతే పచ్చి వాసన వస్తుంది. ఇది ముదురు, ఎరుపు-గోధుమ రంగులోకి మారి, నూనె స్పష్టంగా కనిపించినప్పుడు పూర్తయినట్లు.', 'రంపా పేస్ట్ చక్కగా వేగిన తర్వాత, మంటను మధ్యస్థ స్థాయికి పెంచండి. చికెన్ ముక్కలను పాత్రలో వేయండి. వాటిని బాగా కలిపి, ప్రతి ముక్కకు ఆ అద్భుతమైన మసాలా పేస్ట్ పట్టేలా చూడండి. చికెన్‌ను 5-7 నిమిషాలు వేయించండి, అప్పుడప్పుడు కలుపుతూ ఉండండి, బయట భాగం కొద్దిగా గోధుమ రంగులోకి మారి, సీల్ అయ్యే వరకు. చికెన్ రంపా రంగును సంతరించుకోవడం మీరు గమనిస్తారు.', 'చిక్కటి కొబ్బరి పాలు పోయండి. వడకట్టిన చింతపండు రసం మరియు తాటి బెల్లం కలపండి. అన్నీ బాగా కలిసేలా ఒకసారి కలపండి. మిశ్రమాన్ని నెమ్మదిగా మరిగించి, ఆపై మంటను తగ్గించి, పాత్రను మూతపెట్టి, సుమారు 20-25 నిమిషాలు ఉడికించండి. సాస్ చిక్కబడుతుంది, చికెన్ చాలా మృదువుగా మారుతుంది. అప్పుడప్పుడు తనిఖీ చేస్తూ, అడుగంటకుండా కలపండి. చాలా చిక్కగా అనిపిస్తే, కొద్దిగా నీరు కలపండి, కానీ సాధారణంగా చికెన్ నుండి తగినంత ద్రవం విడుదల అవుతుంది.', 'చికెన్ ఉడికిన తర్వాత, మూత తీయండి. సాస్ రుచి చూసి, ఉప్పు మరియు తీపిని సర్దుబాటు చేయండి. ఇది రుచిని పరిపూర్ణం చేయడానికి మీకు అవకాశం. ఇప్పుడు, తొక్క తీసి, నరం తీసిన రొయ్యలను కలపండి. నెమ్మదిగా కలపండి. రొయ్యలు అపారదర్శకంగా, గులాబీ రంగులోకి మారే వరకు కేవలం 3-5 నిమిషాలు ఉడికించండి. వాటిని ఎక్కువగా ఉడికించవద్దు, లేకపోతే రబ్బరులా అవుతాయి – అది ఎవరికీ ఇష్టం ఉండదు! అవి ముడుచుకుని రంగు మారిన వెంటనే, అవి పూర్తయినట్లు.', 'ఈ అద్భుతమైన \'లయన్ సిటీ\' వంటకాన్ని సర్వింగ్ గిన్నెల్లోకి తీసుకోండి. తాజా తరిగిన కొత్తిమీర మరియు మీకు అదనపు కారం కావాలంటే కొన్ని సన్నగా తరిగిన ఎర్ర మిరపకాయలతో ఉదారంగా అలంకరించండి. వేడి వేడి జాస్మిన్ అన్నంతో వెంటనే వడ్డించండి. రుచులు లోతుగా, గొప్పగా మరియు పూర్తిగా సంతృప్తికరంగా ఉంటాయి.']
            },
            ta: {
                title: 'சிங்கப்பூர் கறி',
                description: 'இந்த \'சிங்கப்பூர் கறி\' வெறும் சமையல் குறிப்பு அல்ல, அது என் அத்தை மேயின் சமையலறையில் நான் கற்றுக்கொண்ட ஒரு அழகான நினைப்பு. சிங்கப்பூரின் சுவைகளை, அதன் காரம், இனிப்பு, கடல் சுவை என அனைத்தையும் ஒரே பாத்திரத்தில் கொண்டுவரும் ஒரு அற்புதமான உணவு இது. ரெம்பா மசாலாவை நிதானமாக வதக்குவதும், பெலாக்கன் சேர்ப்பதும் இதன் உயிர். ஒவ்வொரு முறையும் இதை சமைக்கும்போது, அந்த மணம் என்னை பழைய நினைவுகளுக்கு அழைத்துச் செல்லும். இந்த உணவின் சுவை, சிங்கப்பூரின் துடிப்பான ஆன்மாவை பிரதிபலிக்கும், மறக்க முடியாத அனுபவத்தைத் தரும்.',
                ingredients: [{ item: 'சின்ன வெங்காயம்', amount: '10-12 நடுத்தர அளவு (சுமார் 200 கிராம்), தோல் உரித்து தோராயமாக நறுக்கியது' }, { item: 'பூண்டு', amount: '8-10 பற்கள், தோல் உரித்தது' }, { item: 'புதிய சிவப்பு மிளகாய்', amount: '8-10 (காரத்திற்கு ஏற்ப சரிசெய்யவும்), காரம் குறைவாக வேண்டுமானால் விதைகளை நீக்கவும்' }, { item: 'காய்ந்த சிவப்பு மிளகாய்', amount: '10-12, 15 நிமிடங்கள் வெந்நீரில் ஊறவைத்து, பின்னர் வடிகட்டியது' }, { item: 'கலங்கல்', amount: '2 அங்குல துண்டு, தோல் உரித்து நறுக்கியது' }, { item: 'இஞ்சி', amount: '1 அங்குல துண்டு, தோல் உரித்து நறுக்கியது' }, { item: 'எலுமிச்சை புல்', amount: '2 தண்டுகள், வெள்ளை பகுதி மட்டும், மெல்லியதாக நறுக்கியது' }, { item: 'கேண்டில்நட்ஸ்', amount: '4-5, லேசாக வறுத்தது (அல்லது மக்காடமியா நட்ஸ் மாற்றாக)' }, { item: 'மஞ்சள் தூள்', amount: '1 தேக்கரண்டி (அல்லது 1 அங்குல புதிய மஞ்சள், தோல் உரித்து நறுக்கியது)' }, { item: 'பெலாக்கன் (இறால் பேஸ்ட்)', amount: '1 தேக்கரண்டி, வறுத்தது' }, { item: 'சமையல் எண்ணெய் (ரெம்பா அரைக்க)', amount: '3-4 தேக்கரண்டி' }, { item: 'கோழி தொடைக்கறி', amount: '800 கிராம், எலும்பில்லாதது, தோலுடன் அல்லது தோல் இல்லாமல், 2 அங்குல துண்டுகளாக வெட்டியது' }, { item: 'பெரிய இறால்', amount: '300 கிராம், தோல் உரித்து, நரம்பு நீக்கி, வால் வைத்தது' }, { item: 'கெட்டியான தேங்காய் பால்', amount: '400 மில்லி டின்' }, { item: 'புளி பேஸ்ட்', amount: '2 தேக்கரண்டி, 1/4 கப் வெந்நீரில் கலந்து, வடிகட்டியது' }, { item: 'பனை வெல்லம்', amount: '1-2 தேக்கரண்டி, துருவியது அல்லது நறுக்கியது (அல்லது பழுப்பு சர்க்கரை)' }, { item: 'உப்பு', amount: 'தேவையான அளவு' }, { item: 'சமையல் எண்ணெய் (ரெம்பா வதக்க)', amount: '3-4 தேக்கரண்டி' }, { item: 'தண்ணீர்', amount: '1/2 கப் (தேவைப்பட்டால்)' }, { item: 'புதிய கொத்தமல்லி', amount: 'ஒரு கைப்பிடி, நறுக்கியது (அலங்கரிக்க)' }, { item: 'சிவப்பு மிளகாய்', amount: '1-2, மெல்லியதாக நறுக்கியது (விருப்பமானது, அலங்கரிக்க)' }],
                instructions: ['ஒரு வெறும் கடாயில் பெலாக்கனை மிதமான சூட்டில் வாசனை வரும் வரை ஒன்றிரண்டு நிமிடங்கள் வறுத்துக்கொள்ளுங்கள், கருக விடாதீர்கள். இப்போது, வறுத்த பெலாக்கன், சின்ன வெங்காயம், பூண்டு, புதிய மற்றும் ஊறவைத்த காய்ந்த மிளகாய், கலங்கல், இஞ்சி, எலுமிச்சை புல், கேண்டில்நட்ஸ், மஞ்சள் தூள் ஆகிய அனைத்து ரெம்பா பொருட்களையும் 3-4 தேக்கரண்டி சமையல் எண்ணெயுடன் சேர்த்து, மென்மையான, பளபளப்பான பேஸ்ட்டாக அரைக்கவும். இது அடர்த்தியான, சிவப்பு-ஆரஞ்சு நிறத்தில் இருக்க வேண்டும்.', 'இது மிக முக்கியமான படி. ஒரு பெரிய கடாய் அல்லது கனமான பாத்திரத்தில் 3-4 தேக்கரண்டி சமையல் எண்ணெயை மிதமான-குறைந்த சூட்டில் சூடாக்கி, அரைத்த ரெம்பா பேஸ்ட்டை சேர்க்கவும். பேஸ்ட் கருமையாகும் வரை, எண்ணெய் பிரிந்து மேற்பரப்பில் பளபளக்கும் வரை, 15-20 நிமிடங்கள் நிதானமாக வதக்கவும். அவசரப்பட வேண்டாம், இல்லையெனில் பச்சை வாசனை வரும். இது அடர் சிவப்பு-பழுப்பு நிறமாக மாறி, எண்ணெய் தெளிவாகத் தெரிய வேண்டும்.', 'ரெம்பா வதங்கியதும், சூட்டை மிதமாக்கி, கோழி துண்டுகளை சேர்க்கவும். மசாலா பேஸ்ட் கோழியில் நன்றாக ஒட்டும் படி கிளறி, 5-7 நிமிடங்கள் வதக்கவும். கோழியின் வெளிப்பகுதி லேசாக பழுப்பு நிறமாகி, ரெம்பாவின் நிறத்தை உறிஞ்சும் வரை வதக்க வேண்டும்.', 'கெட்டியான தேங்காய் பால், வடிகட்டிய புளி கரைசல் மற்றும் பனை வெல்லம் சேர்த்து நன்றாக கிளறவும். கலவையை மெதுவாக கொதிக்க வைத்து, சூட்டை குறைத்து, மூடி போட்டு 20-25 நிமிடங்கள் சமைக்கவும். சாஸ் கெட்டியாகி, கோழி மென்மையாக மாறும். அவ்வப்போது கிளறி, தேவைப்பட்டால் சிறிது தண்ணீர் சேர்க்கவும்.', 'கோழி வெந்ததும், சாஸின் உப்பு மற்றும் இனிப்பை சரிபார்த்து, தோல் உரித்து, நரம்பு நீக்கிய இறால்களை சேர்க்கவும். இறால்கள் ஒளிபுகாத மற்றும் இளஞ்சிவப்பு நிறமாக மாறும் வரை, 3-5 நிமிடங்கள் மட்டும் மெதுவாக சமைக்கவும். அதிகமாக சமைத்தால் ரப்பர் போல ஆகிவிடும்.', 'இந்த அற்புதமான \'சிங்கப்பூர் கறி\'யை பரிமாறும் கிண்ணங்களில் ஊற்றி, நறுக்கிய கொத்தமல்லி மற்றும் விருப்பப்பட்டால் மெல்லிய சிவப்பு மிளகாய் துண்டுகளுடன் அலங்கரிக்கவும். சூடான மல்லிகை சாதத்துடன் உடனடியாக பரிமாறவும். இதன் சுவை ஆழமானதாகவும், செழுமையானதாகவும், திருப்தியளிப்பதாகவும் இருக்கும்.']
            },
            kn: {
                title: 'ಲಯನ್ ಸಿಟಿ',
                description: 'ಈ \'ಲಯನ್ ಸಿಟಿ\' ಖಾದ್ಯ ನನಗೆ ಕೇವಲ ಒಂದು ಪಾಕವಿಧಾನವಲ್ಲ, ಇದು ಟಿಯೊಂಗ್ ಬಹ್ರುವಿನಲ್ಲಿರುವ ನನ್ನ ಆಂಟಿ ಮೇ ಅವರ ಪುಟ್ಟ ಅಡುಗೆಮನೆಯಲ್ಲಿ ಕಳೆದ ಮಧ್ಯಾಹ್ನದ ನೆನಪು. \'ಸಿಂಗಾಪುರದ ರುಚಿ ಬೇಕಾ? ಇದನ್ನು ಸವಿಯಿರಿ. ಇದರಲ್ಲಿ ಖಾರ, ಸಿಹಿ, ಸಮುದ್ರದ ರುಚಿ ಎಲ್ಲವೂ ಒಂದೇ ಪಾತ್ರೆಯಲ್ಲಿ ಸಿಗುತ್ತದೆ\' ಎಂದು ಅವರು ಹೇಳುತ್ತಿದ್ದರು. ಇದು ದ್ವೀಪದ ಆತ್ಮವನ್ನು ಸೆರೆಹಿಡಿಯುವ ಅದ್ಭುತ ಖಾದ್ಯ. ರೆಂಪಾವನ್ನು ನಿಧಾನವಾಗಿ ಹುರಿಯುವುದು, ಬೆಲಾಕನ್ ಅನ್ನು ಸೇರಿಸುವುದು ಮತ್ತು ಹುಣಸೆಹಣ್ಣಿನ ಸಮತೋಲನ ಬಹಳ ಮುಖ್ಯ. ಕೋಳಿ ತೊಡೆಯ ಮಾಂಸವನ್ನು ಬಳಸಿ ಈ ರುಚಿಕರ ಖಾದ್ಯವನ್ನು ಸವಿಯಿರಿ.',
                ingredients: [{ item: 'ಸಣ್ಣ ಈರುಳ್ಳಿ', amount: '10-12 ಮಧ್ಯಮ ಗಾತ್ರದ (ಸುಮಾರು 200 ಗ್ರಾಂ), ಸಿಪ್ಪೆ ಸುಲಿದು ಒರಟಾಗಿ ಕತ್ತರಿಸಿದ್ದು' }, { item: 'ಬೆಳ್ಳುಳ್ಳಿ', amount: '8-10 ಎಸಳು, ಸಿಪ್ಪೆ ಸುಲಿದಿದ್ದು' }, { item: 'ತಾಜಾ ಕೆಂಪು ಮೆಣಸಿನಕಾಯಿಗಳು', amount: '8-10 (ಖಾರಕ್ಕೆ ತಕ್ಕಂತೆ ಹೊಂದಿಸಿ), ಕಡಿಮೆ ಖಾರ ಬೇಕಿದ್ದರೆ ಬೀಜ ತೆಗೆಯಿರಿ' }, { item: 'ಒಣ ಕೆಂಪು ಮೆಣಸಿನಕಾಯಿಗಳು', amount: '10-12, ಬಿಸಿ ನೀರಿನಲ್ಲಿ 15 ನಿಮಿಷ ನೆನೆಸಿ, ನಂತರ ನೀರು ಬಸಿದಿದ್ದು' }, { item: 'ಗಲಂಗಲ್', amount: '2 ಇಂಚು ತುಂಡು, ಸಿಪ್ಪೆ ಸುಲಿದು ಹೋಳು ಮಾಡಿದ್ದು' }, { item: 'ಶುಂಠಿ', amount: '1 ಇಂಚು ತುಂಡು, ಸಿಪ್ಪೆ ಸುಲಿದು ಹೋಳು ಮಾಡಿದ್ದು' }, { item: 'ನಿಂಬೆ ಹುಲ್ಲು', amount: '2 ಕಾಂಡ, ಬಿಳಿ ಭಾಗ ಮಾತ್ರ, ತೆಳುವಾಗಿ ಹೋಳು ಮಾಡಿದ್ದು' }, { item: 'ಕ್ಯಾಂಡಲ್ ನಟ್ಸ್', amount: '4-5, ಲಘುವಾಗಿ ಹುರಿದಿದ್ದು (ಅಥವಾ ಮಕಾಡಾಮಿಯಾ ನಟ್ಸ್ ಬದಲಾಗಿ)' }, { item: 'ಅರಿಶಿನ ಪುಡಿ', amount: '1 ಟೀಸ್ಪೂನ್ (ಅಥವಾ 1 ಇಂಚು ತಾಜಾ ಅರಿಶಿನ, ಸಿಪ್ಪೆ ಸುಲಿದು ಹೋಳು ಮಾಡಿದ್ದು)' }, { item: 'ಬೆಲಾಕನ್ (ಸೀಗಡಿ ಪೇಸ್ಟ್)', amount: '1 ಟೀಸ್ಪೂನ್, ಹುರಿದಿದ್ದು' }, { item: 'ಸಸ್ಯಜನ್ಯ ಎಣ್ಣೆ (ರೆಂಪಾ ಮಿಶ್ರಣ ಮಾಡಲು)', amount: '3-4 ಟೇಬಲ್ಸ್ಪೂನ್' }, { item: 'ಕೋಳಿ ತೊಡೆಯ ಮಾಂಸ', amount: '800 ಗ್ರಾಂ, ಮೂಳೆರಹಿತ, ಚರ್ಮ ಸಹಿತ ಅಥವಾ ರಹಿತ, 2 ಇಂಚು ತುಂಡುಗಳಾಗಿ ಕತ್ತರಿಸಿದ್ದು' }, { item: 'ದೊಡ್ಡ ಸೀಗಡಿಗಳು', amount: '300 ಗ್ರಾಂ, ಸಿಪ್ಪೆ ಸುಲಿದು, ನರ ತೆಗೆದಿದ್ದು, ಬಾಲ ಸಹಿತ' }, { item: 'ದಪ್ಪ ತೆಂಗಿನ ಹಾಲು', amount: '400 ಮಿಲಿ ಕ್ಯಾನ್' }, { item: 'ಹುಣಸೆಹಣ್ಣಿನ ಪೇಸ್ಟ್', amount: '2 ಟೇಬಲ್ಸ್ಪೂನ್, 1/4 ಕಪ್ ಬೆಚ್ಚಗಿನ ನೀರಿನಲ್ಲಿ ಮಿಶ್ರಣ ಮಾಡಿ, ಸೋಸಿದ್ದು' }, { item: 'ಪಾಮ್ ಸಕ್ಕರೆ', amount: '1-2 ಟೇಬಲ್ಸ್ಪೂನ್, ತುರಿದ ಅಥವಾ ಕತ್ತರಿಸಿದ್ದು (ಅಥವಾ ಕಂದು ಸಕ್ಕರೆ)' }, { item: 'ಉಪ್ಪು', amount: 'ರುಚಿಗೆ ತಕ್ಕಷ್ಟು' }, { item: 'ಸಸ್ಯಜನ್ಯ ಎಣ್ಣೆ (ರೆಂಪಾ ಹುರಿಯಲು)', amount: '3-4 ಟೇಬಲ್ಸ್ಪೂನ್' }, { item: 'ನೀರು', amount: '1/2 ಕಪ್ (ಅಗತ್ಯವಿದ್ದರೆ)' }, { item: 'ತಾಜಾ ಕೊತ್ತಂಬರಿ ಸೊಪ್ಪು', amount: 'ಒಂದು ಹಿಡಿ, ಕತ್ತರಿಸಿದ್ದು (ಅಲಂಕಾರಕ್ಕೆ)' }, { item: 'ಕೆಂಪು ಮೆಣಸಿನಕಾಯಿಗಳು', amount: '1-2, ತೆಳುವಾಗಿ ಹೋಳು ಮಾಡಿದ್ದು (ಐಚ್ಛಿಕ, ಅಲಂಕಾರಕ್ಕೆ)' }],
                instructions: ['ಮೊದಲು, ಬೆಲಾಕನ್ ಅನ್ನು ಹುರಿಯಿರಿ. ಒಣ ಬಾಣಲೆಯನ್ನು ಮಧ್ಯಮ ಉರಿಯಲ್ಲಿ ಬಿಸಿ ಮಾಡಿ, ಬೆಲಾಕನ್ ಹಾಕಿ, ಪರಿಮಳ ಬರುವವರೆಗೆ ಮತ್ತು ಸ್ವಲ್ಪ ಪುಡಿಪುಡಿಯಾಗುವವರೆಗೆ ಒಂದೆರಡು ನಿಮಿಷ ಹುರಿಯಿರಿ. ಸುಡಬೇಡಿ! ಈಗ, ಹುರಿದ ಬೆಲಾಕನ್, ಸಣ್ಣ ಈರುಳ್ಳಿ, ಬೆಳ್ಳುಳ್ಳಿ, ತಾಜಾ ಮತ್ತು ನೆನೆಸಿದ ಒಣ ಮೆಣಸಿನಕಾಯಿಗಳು, ಗಲಂಗಲ್, ಶುಂಠಿ, ನಿಂಬೆ ಹುಲ್ಲು, ಕ್ಯಾಂಡಲ್ ನಟ್ಸ್ ಮತ್ತು ಅರಿಶಿನ ಪುಡಿ - ಇವೆಲ್ಲವನ್ನೂ ಫುಡ್ ಪ್ರೊಸೆಸರ್ ಅಥವಾ ಬ್ಲೆಂಡರ್‌ಗೆ ಹಾಕಿ. 3-4 ಟೇಬಲ್ಸ್ಪೂನ್ ಸಸ್ಯಜನ್ಯ ಎಣ್ಣೆ ಸೇರಿಸಿ. ಎಲ್ಲವನ್ನೂ ನುಣ್ಣಗೆ, ಹೊಳೆಯುವ ಪೇಸ್ಟ್ ಆಗಿ ರುಬ್ಬಿಕೊಳ್ಳಿ. ಇದು ದಪ್ಪ, ಕೆಂಪು-ಕಿತ್ತಳೆ ಬಣ್ಣದ ಮಣ್ಣಿನಂತೆ ಕಾಣಬೇಕು.', 'ಇದು ಬಹಳ ಮುಖ್ಯವಾದ ಹಂತ. ದೊಡ್ಡ ಬಾಣಲೆ ಅಥವಾ ದಪ್ಪ ತಳದ ಪಾತ್ರೆಯಲ್ಲಿ 3-4 ಟೇಬಲ್ಸ್ಪೂನ್ ಸಸ್ಯಜನ್ಯ ಎಣ್ಣೆಯನ್ನು ಮಧ್ಯಮ-ಕಡಿಮೆ ಉರಿಯಲ್ಲಿ ಬಿಸಿ ಮಾಡಿ. ನಿಮ್ಮ ಸುಂದರವಾದ ರೆಂಪಾವನ್ನು ಹಾಕಿ. ಈಗ, ತಿರುಗಿಸುತ್ತಲೇ ಇರಿ, ಚೆನ್ನಾಗಿ ತಿರುಗಿಸಿ. ಪೇಸ್ಟ್ ಗಾಢವಾಗುತ್ತದೆ, ಎಣ್ಣೆ ಬೇರ್ಪಟ್ಟು ಮೇಲ್ಮೈಯಲ್ಲಿ ಹೊಳೆಯಲು ಪ್ರಾರಂಭಿಸುತ್ತದೆ ಮತ್ತು ನಿಮ್ಮ ಅಡುಗೆಮನೆ ಅದ್ಭುತ, ಸಂಕೀರ್ಣ ಪರಿಮಳದಿಂದ ತುಂಬುತ್ತದೆ – ಖಾರ, ಮಣ್ಣಿನಂತಹ, ಸ್ವಲ್ಪ ಸಿಹಿ. ಇದಕ್ಕೆ 15-20 ನಿಮಿಷಗಳು, ಕೆಲವೊಮ್ಮೆ ಅದಕ್ಕಿಂತ ಹೆಚ್ಚು ಸಮಯ ಬೇಕಾಗಬಹುದು. ಇದನ್ನು ಬೇಗನೆ ಮಾಡಬೇಡಿ, ಇಲ್ಲದಿದ್ದರೆ ಹಸಿ ರುಚಿ ಬರುತ್ತದೆ. ಇದು ಆಳವಾದ, ಹೊಳೆಯುವ ಕೆಂಪು-ಕಂದು ಬಣ್ಣಕ್ಕೆ ತಿರುಗಿದಾಗ ಮತ್ತು ಎಣ್ಣೆ ಸ್ಪಷ್ಟವಾಗಿ ಕಾಣಿಸಿದಾಗ ಸಿದ್ಧವಾಗಿದೆ.', 'ನಿಮ್ಮ ರೆಂಪಾ ಸಂಪೂರ್ಣವಾಗಿ ಹುರಿದ ನಂತರ, ಉರಿಯನ್ನು ಮಧ್ಯಮಕ್ಕೆ ಹೆಚ್ಚಿಸಿ. ಕೋಳಿ ತುಂಡುಗಳನ್ನು ಪಾತ್ರೆಗೆ ಸೇರಿಸಿ. ಪ್ರತಿ ತುಂಡಿಗೂ ಆ ಅದ್ಭುತ ಮಸಾಲೆ ಪೇಸ್ಟ್ ಲೇಪಿಸುವಂತೆ ಚೆನ್ನಾಗಿ ತಿರುಗಿಸಿ. ಕೋಳಿ ಮಾಂಸವನ್ನು ಸುಮಾರು 5-7 ನಿಮಿಷಗಳ ಕಾಲ ಹುರಿಯಲು ಬಿಡಿ, ಆಗಾಗ್ಗೆ ತಿರುಗಿಸುತ್ತಾ, ಹೊರಭಾಗವು ಲಘುವಾಗಿ ಕಂದು ಬಣ್ಣಕ್ಕೆ ತಿರುಗಿ ಸೀಲ್ ಆಗುವವರೆಗೆ ಬೇಯಿಸಿ. ಕೋಳಿ ಮಾಂಸವು ರೆಂಪಾದ ಬಣ್ಣವನ್ನು ಪಡೆದುಕೊಳ್ಳುವುದನ್ನು ನೀವು ನೋಡುತ್ತೀರಿ, ಇದು ಶ್ರೀಮಂತ, ಆಹ್ವಾನಿಸುವ ಬಣ್ಣ.', 'ದಪ್ಪ ತೆಂಗಿನ ಹಾಲನ್ನು ಸುರಿಯಿರಿ. ಸೋಸಿದ ಹುಣಸೆಹಣ್ಣಿನ ರಸ ಮತ್ತು ಪಾಮ್ ಸಕ್ಕರೆ ಸೇರಿಸಿ. ಎಲ್ಲವನ್ನೂ ಚೆನ್ನಾಗಿ ಮಿಶ್ರಣ ಮಾಡಲು ತಿರುಗಿಸಿ. ಮಿಶ್ರಣವನ್ನು ನಿಧಾನವಾಗಿ ಕುದಿಯಲು ಬಿಡಿ, ನಂತರ ಉರಿಯನ್ನು ಕಡಿಮೆ ಮಾಡಿ, ಪಾತ್ರೆಯನ್ನು ಮುಚ್ಚಿ, ಸುಮಾರು 20-25 ನಿಮಿಷಗಳ ಕಾಲ ಬೇಯಲು ಬಿಡಿ. ಸಾಸ್ ದಪ್ಪವಾಗುತ್ತದೆ ಮತ್ತು ಕೋಳಿ ಮಾಂಸವು ನಂಬಲಾಗದಷ್ಟು ಮೃದುವಾಗುತ್ತದೆ. ಆಗಾಗ್ಗೆ ಪರಿಶೀಲಿಸಿ, ಅಂಟಿಕೊಳ್ಳುವುದನ್ನು ತಡೆಯಲು ತಿರುಗಿಸಿ. ತುಂಬಾ ದಪ್ಪವೆಂದು ಅನಿಸಿದರೆ, ಸ್ವಲ್ಪ ನೀರು ಸೇರಿಸಿ, ಆದರೆ ಸಾಮಾನ್ಯವಾಗಿ ಕೋಳಿ ಸಾಕಷ್ಟು ದ್ರವವನ್ನು ಬಿಡುಗಡೆ ಮಾಡುತ್ತದೆ.', 'ಕೋಳಿ ಮಾಂಸ ಕುದಿದ ನಂತರ, ಪಾತ್ರೆಯ ಮುಚ್ಚಳ ತೆಗೆಯಿರಿ. ಸಾಸ್ ಅನ್ನು ರುಚಿ ನೋಡಿ ಮತ್ತು ಉಪ್ಪು ಮತ್ತು ಸಿಹಿಯನ್ನು ಹೊಂದಿಸಿ. ಇದನ್ನು ಪರಿಪೂರ್ಣಗೊಳಿಸಲು ಇದು ನಿಮ್ಮ ಅವಕಾಶ. ಈಗ, ಸಿಪ್ಪೆ ಸುಲಿದ ಮತ್ತು ನರ ತೆಗೆದ ಸೀಗಡಿಗಳನ್ನು ಸೇರಿಸಿ. ನಿಧಾನವಾಗಿ ತಿರುಗಿಸಿ. ಕೇವಲ 3-5 ನಿಮಿಷಗಳ ಕಾಲ ಬೇಯಿಸಿ, ಅಥವಾ ಸೀಗಡಿಗಳು ಅಪಾರದರ್ಶಕ ಮತ್ತು ಗುಲಾಬಿ ಬಣ್ಣಕ್ಕೆ ತಿರುಗುವವರೆಗೆ. ಅವುಗಳನ್ನು ಅತಿಯಾಗಿ ಬೇಯಿಸಬೇಡಿ, ಇಲ್ಲದಿದ್ದರೆ ರಬ್ಬರ್‌ನಂತೆ ಆಗುತ್ತವೆ – ಯಾರೂ ಅದನ್ನು ಬಯಸುವುದಿಲ್ಲ! ಅವು ಸುರುಳಿಯಾಗಿ ಬಣ್ಣ ಬದಲಾಯಿಸಿದ ತಕ್ಷಣ, ಅವು ಸಿದ್ಧವಾಗಿವೆ.', 'ಈ ಅದ್ಭುತ \'ಲಯನ್ ಸಿಟಿ\' ಖಾದ್ಯವನ್ನು ಬಟ್ಟಲುಗಳಿಗೆ ಹಾಕಿ. ತಾಜಾ ಕತ್ತರಿಸಿದ ಕೊತ್ತಂಬರಿ ಸೊಪ್ಪು ಮತ್ತು ಹೆಚ್ಚುವರಿ ಖಾರ ಬೇಕಿದ್ದರೆ ಕೆಲವು ತೆಳುವಾಗಿ ಹೋಳು ಮಾಡಿದ ಕೆಂಪು ಮೆಣಸಿನಕಾಯಿಗಳಿಂದ ಉದಾರವಾಗಿ ಅಲಂಕರಿಸಿ. ಬಿಸಿ ಬಿಸಿ ಜಾಸ್ಮಿನ್ ಅನ್ನದೊಂದಿಗೆ ತಕ್ಷಣವೇ ಬಡಿಸಿ. ರುಚಿಗಳು ಆಳವಾದ, ಶ್ರೀಮಂತ ಮತ್ತು ಸಂಪೂರ್ಣವಾಗಿ ತೃಪ್ತಿಕರವಾಗಿರುತ್ತವೆ.']
            },
            'zh-CN': {
                title: '狮城咖喱鸡虾',
                description: '这道“狮城咖喱鸡虾”承载着我童年时在直落布兰雅阿姨家厨房的美好回忆。阿姨常说，想尝尝新加坡的味道，就得尝尝这道菜，它把火辣、香甜和大海的鲜味都融进了一锅。这道菜的灵魂在于香料酱（rempah），一定要小火慢炒，直到油分分离，色泽红亮。别忘了马来盏（belacan）和罗望子，它们是鲜味和酸甜平衡的关键。用鸡腿肉，才能吸饱汤汁，口感嫩滑。每一口都是对狮城风味的深情回味。',
                ingredients: [{ item: '小葱头', amount: '10-12个中等大小（约200克），去皮粗切' }, { item: '大蒜', amount: '8-10瓣，去皮' }, { item: '新鲜红辣椒', amount: '8-10个（根据喜辣程度调整），若不喜太辣可去籽' }, { item: '干红辣椒', amount: '10-12个，用热水浸泡15分钟后沥干' }, { item: '南姜', amount: '2英寸（约5厘米）长，去皮切片' }, { item: '生姜', amount: '1英寸（约2.5厘米）长，去皮切片' }, { item: '香茅', amount: '2根，只取白色部分，切薄片' }, { item: '石栗', amount: '4-5颗，稍微烤香（可用夏威夷果代替）' }, { item: '黄姜粉', amount: '1茶匙（或1英寸新鲜黄姜，去皮切片）' }, { item: '马来盏（虾酱）', amount: '1茶匙，烤香' }, { item: '植物油（用于制作香料酱）', amount: '3-4汤匙' }, { item: '鸡腿肉', amount: '800克，去骨，带皮或去皮均可，切成2英寸（约5厘米）块' }, { item: '大虾', amount: '300克，去壳去虾线，保留虾尾' }, { item: '浓椰浆', amount: '400毫升罐装' }, { item: '罗望子酱', amount: '2汤匙，与1/4杯温水混合后过滤' }, { item: '椰糖', amount: '1-2汤匙，磨碎或切碎（可用红糖代替）' }, { item: '盐', amount: '适量' }, { item: '植物油（用于炒香料酱）', amount: '3-4汤匙' }, { item: '水', amount: '1/2杯（如果需要）' }, { item: '新鲜香菜', amount: '一小把，切碎（用于装饰）' }, { item: '红辣椒', amount: '1-2个，切薄片（可选，用于装饰）' }],
                instructions: ['先将马来盏烤香。用中火加热一个干锅，放入马来盏，烤一两分钟直到它散发香味并变得有些酥脆，注意别烤焦了！现在，将所有香料酱（rempah）的食材，包括烤香的马来盏、小葱头、大蒜、新鲜和泡软的干辣椒、南姜、生姜、香茅、石栗和黄姜粉，以及3-4汤匙植物油，一同放入食物料理机或搅拌机中。搅打成顺滑、色泽鲜亮的酱状。可能需要刮几次碗边。它应该看起来像浓稠的红橙色泥状。', '这是关键一步。在一个大炒锅或厚底锅中，用中低火加热3-4汤匙植物油。舀入你做好的香料酱。不停地翻炒，再翻炒。你会看到酱料颜色变深，油开始分离并泛着光泽，厨房里会弥漫着美妙而复杂的香气——辛辣、泥土芬芳，带点甜味。这需要15-20分钟，甚至更久。千万别心急，否则会有生味。当它炒好时，会呈现深红褐色，油也会清晰可见。', '香料酱炒好后，将火调至中高。加入鸡肉块。充分翻炒，让每一块鸡肉都裹上这美味的香料酱。煎炒约5-7分钟，偶尔翻动，直到鸡肉外表微黄并锁住汁水。你会看到鸡肉开始染上香料酱的颜色，变得诱人。', '倒入浓椰浆。加入过滤后的罗望子汁和椰糖。搅拌均匀。煮沸后转小火，盖上锅盖，炖煮约20-25分钟。酱汁会变得浓稠，鸡肉也会变得非常软嫩。偶尔检查并搅拌，防止粘锅。如果看起来太稠，可以加一点水，但通常鸡肉会释放足够的水分。', '鸡肉炖煮后，揭开锅盖。尝尝酱汁，调整盐和甜度，这是你让它变得完美的时机。现在，加入去壳去虾线的大虾。轻轻搅拌。煮3-5分钟，直到虾肉变色、变粉。千万不要煮过头，否则虾会变老变韧——没人喜欢那样！一旦它们卷曲变色，就说明好了。', '将这道美味的“狮城咖喱鸡虾”盛入碗中。撒上切碎的新鲜香菜，如果喜欢更辣，可以放几片红辣椒。立即搭配热腾腾的茉莉香米饭享用。味道浓郁，回味无穷。']
            },
            ms: {
                title: 'Hidangan Kota Singa',
                description: 'Hidangan \'Kota Singa\' ini menggamit kenangan manis di dapur Mak Cik Mei di Tiong Bahru, merangkum rasa Singapura yang berapi, manis, dan beraroma laut. Rahsianya terletak pada rempah yang digoreng perlahan hingga pecah minyak, barulah rasanya mendalam dan memukau. Jangan sesekali tergesa-gesa! Belacan yang dibakar sempurna dan asam jawa pula memberi keseimbangan umami dan masam yang penting. Gunakan peha ayam agar juicynya kekal, menyerap setiap kebaikan rempah. Ini memang hidangan yang berani, kompleks, dan takkan dilupakan.',
                ingredients: [{ item: 'Bawang Merah Kecil', amount: '10-12 biji sederhana (anggaran 200g), dikupas dan dicincang kasar' }, { item: 'Bawang Putih', amount: '8-10 ulas, dikupas' }, { item: 'Cili Merah Segar', amount: '8-10 biji (laraskan mengikut tahap kepedasan), buang biji jika kurang pedas' }, { item: 'Cili Kering', amount: '10-12 biji, direndam dalam air panas selama 15 minit, kemudian ditoskan' }, { item: 'Lengkuas', amount: 'Sekeping 2 inci, dikupas dan dihiris' }, { item: 'Halia', amount: 'Sekeping 1 inci, dikupas dan dihiris' }, { item: 'Serai', amount: '2 batang, bahagian putih sahaja, dihiris nipis' }, { item: 'Buah Keras', amount: '4-5 biji, dibakar sedikit (atau kacang macadamia sebagai ganti)' }, { item: 'Serbuk Kunyit', amount: '1 sudu kecil (atau sekeping kunyit hidup 1 inci, dikupas dan dihiris)' }, { item: 'Belacan (Pes Udang)', amount: '1 sudu kecil, dibakar' }, { item: 'Minyak Sayuran (untuk kisar rempah)', amount: '3-4 sudu besar' }, { item: 'Peha Ayam', amount: '800g, tanpa tulang, dengan atau tanpa kulit, dipotong 2 inci' }, { item: 'Udang Besar', amount: '300g, dikupas dan dibuang urat, ekor dibiarkan' }, { item: 'Santan Pekat', amount: '1 tin 400ml' }, { item: 'Pes Asam Jawa', amount: '2 sudu besar, dicampur dengan 1/4 cawan air suam, ditapis' }, { item: 'Gula Melaka', amount: '1-2 sudu besar, disagat atau dicincang (atau gula perang)' }, { item: 'Garam', amount: 'Secukup rasa' }, { item: 'Minyak Sayuran (untuk menumis rempah)', amount: '3-4 sudu besar' }, { item: 'Air', amount: '1/2 cawan (jika perlu)' }, { item: 'Daun Ketumbar Segar', amount: 'Segenggam, dicincang (untuk hiasan)' }, { item: 'Cili Merah', amount: '1-2 biji, dihiris nipis (pilihan, untuk hiasan)' }],
                instructions: ['Mula-mula, bakar belacan. Panaskan kuali kering atas api sederhana, masukkan belacan dan bakar selama seminit dua hingga wangi dan sedikit rapuh. Jangan sampai hangit! Kemudian, masukkan semua bahan rempah ke dalam pengisar: belacan yang dibakar, bawang merah kecil, bawang putih, cili merah segar dan cili kering yang direndam, lengkuas, halia, serai, buah keras, dan serbuk kunyit. Tambah 3-4 sudu besar minyak sayuran. Kisar semua hingga menjadi pes yang halus dan pekat, berwarna merah jingga.', 'Ini langkah paling penting. Panaskan 3-4 sudu besar minyak sayuran baru dalam kuali besar atau periuk bertapak tebal atas api sederhana kecil. Masukkan rempah yang cantik tadi. Kacau. Dan kacau lagi. Anda mahu melihat perubahan di sini. Pes akan menjadi gelap, minyak akan mula terpisah dan berkilat di permukaan, dan dapur anda akan dipenuhi aroma yang luar biasa – pedas, beraroma tanah, sedikit manis. Ini mengambil masa 15-20 minit, mungkin lebih lama. Jangan tergesa-gesa, nanti rasanya mentah. Bila siap, ia akan berwarna merah-perang gelap, dan minyak akan jelas kelihatan.', 'Setelah rempah anda digoreng sempurna, naikkan api ke sederhana. Masukkan ketulan ayam ke dalam periuk. Kacau rata, pastikan setiap ketulan disaluti pes rempah yang lazat itu. Biarkan ayam masak selama kira-kira 5-7 minit, kacau sekali-sekala, sehingga bahagian luar sedikit perang dan masak. Anda akan lihat ayam mula mengambil warna rempah, rona yang kaya dan menarik.', 'Tuangkan santan pekat. Masukkan air asam jawa yang ditapis dan gula melaka. Kacau sebati. Biarkan campuran mendidih perlahan, kemudian kecilkan api, tutup periuk, dan biarkan masak selama kira-kira 20-25 minit. Kuah akan memekat, dan ayam akan menjadi sangat lembut. Periksa sekali-sekala, kacau untuk mengelakkan melekat. Jika terlalu pekat, tambah sedikit air, tetapi biasanya ayam akan mengeluarkan cukup cecair.', 'Setelah ayam mendidih, buka penutup periuk. Rasa kuah dan laraskan garam serta kemanisan. Ini peluang anda untuk menjadikannya sempurna. Sekarang, masukkan udang yang telah dikupas dan dibuang urat. Kacau perlahan. Masak hanya 3-5 minit, atau sehingga udang menjadi legap dan merah jambu. Jangan masak terlalu lama, nanti udang jadi liat – tiada siapa yang mahu itu! Sebaik sahaja ia melengkung dan berubah warna, ia sudah siap.', 'Cedok hidangan \'Kota Singa\' yang hebat ini ke dalam mangkuk hidangan. Hias dengan daun ketumbar cincang segar dan beberapa hirisan cili merah jika anda suka lebih pedas. Hidangkan segera dengan nasi jasmine panas-panas. Rasanya akan mendalam, kaya, dan sangat memuaskan.']
            }
        }
    },
    {
        id: '2026-05-23',
        publishedAt: '2026-05-23T03:37:00.000Z',
        title: 'Chiles',
        description: 'Oh, Chiles Rellenos. This dish, it\'s more than just food; it\'s a memory, a challenge, a triumph. I first learned to make these from my Abuela Elena, back in her tiny kitchen in Oaxaca. The air was always thick with the smell of roasting chiles and simmering tomatoes. She\'d stand over the comal, turning the poblanos with such practiced ease, their skins blistering and blackening. My first attempts? A disaster. The peppers tore, the cheese oozed out, and the egg batter, well, it just slid right off like water on a duck\'s back. I wanted to give up, but Abuela, she just chuckled, handed me another pepper, and said, \'Paciencia, mija. Patience is the first ingredient.\'  She taught me the little tricks, the ones you won\'t find in most cookbooks. Like how important it is to let those roasted chiles \'sweat\' in a plastic bag; it makes peeling them a breeze, truly. And the batter! That\'s where most people go wrong. You can\'t just whip it up; it needs to be light, airy, almost cloud-like, but sturdy enough to cling to the pepper. The secret, she\'d whisper, was in the egg whites – whipped to stiff peaks, then gently, ever so gently, folding in the yolks and just a touch of flour. It\'s a delicate dance, not a wrestling match. If your batter is too thin, it\'ll run. Too thick, and it\'s heavy, not that beautiful golden puff you want.  And the ingredients, they matter. Don\'t skimp on the poblanos; pick ones that are firm, glossy, and have a nice, even shape. For the cheese, Oaxaca cheese is traditional, it melts like a dream and gives that perfect stringy pull. If you can\'t find it, a good Monterey Jack or even a mild mozzarella will do, but it won\'t be quite the same. Fresh eggs are non-negotiable for that perfect batter. This isn\'t a quick weeknight meal, no. This is a labor of love, a weekend project, a dish that says, \'Come, sit, eat, and stay a while.\' And when you bite into that soft, cheesy, chile-wrapped goodness, you\'ll understand why it\'s worth every single minute.',
        image: '/recipe-images/2026-05-23.jpg',
        prepTime: '25 min',
        cookTime: '45 min',
        difficulty: 'Medium',
        servings: 4,
        ingredients: [
            { item: 'Poblano peppers', amount: '4 large' },
            { item: 'Oaxaca cheese (or Monterey Jack)', amount: '8 oz, cut into 1/2-inch strips' },
            { item: 'All-purpose flour', amount: '1/2 cup, plus extra for dusting' },
            { item: 'Large eggs', amount: '4, separated' },
            { item: 'Salt', amount: '1/2 teaspoon, plus more to taste' },
            { item: 'Vegetable oil', amount: '3-4 cups, for frying' },
            { item: 'Tomato sauce (homemade or good quality store-bought)', amount: '2 cups, warmed for serving' }
        ],
        instructions: [
            'First, roast those beautiful poblano peppers. You can do this over an open flame on your gas stove, under a broiler, or on a hot comal. Turn them frequently until their skins are completely charred and blistered all over. You want them black, really black. This takes about 8-10 minutes. The smell will be amazing, a little smoky.',
            'Immediately transfer the hot, charred peppers to a plastic bag or a bowl covered tightly with plastic wrap. Let them \'sweat\' for about 15-20 minutes. This steaming helps loosen the skin. Don\'t skip this step; it\'s a lifesaver for peeling.',
            'Once cooled enough to handle, carefully peel the skin off the peppers. It should come off easily. Make a small, lengthwise slit on one side of each pepper, being careful not to cut all the way through. Gently remove the seeds and veins. Some people rinse them, but I prefer to just scrape them out to keep the flavor intact. Be gentle; you don\'t want to tear the pepper.',
            'Stuff each pepper with the cheese strips. Don\'t overstuff them, or they\'ll burst during frying. Just enough so they\'re plump and happy. If the slit is too wide, you can use a toothpick to hold it closed, but usually, the batter will seal it.',
            'Now for the batter! Separate your eggs. In a clean, dry bowl, whip the egg whites with 1/2 teaspoon of salt until they form stiff peaks. This means when you lift the whisk, the peaks stand up straight. In another bowl, lightly beat the egg yolks. Gently fold the egg yolks into the stiff egg whites. Then, carefully fold in the 1/2 cup of flour until just combined. Don\'t overmix, or you\'ll deflate the whites. This batter should be light and airy, like a cloud.',
            'Heat the vegetable oil in a deep skillet or Dutch oven over medium-high heat until it reaches about 350-375°F (175-190°C). You\'ll see little ripples on the surface. While the oil heats, lightly dust each stuffed pepper with a little extra flour. This helps the egg batter stick.',
            'Carefully dip each floured pepper into the egg batter, making sure it\'s completely coated. Gently place the battered pepper into the hot oil. Fry one or two at a time, depending on your pan size, for about 3-4 minutes per side, until they\'re beautifully golden brown and puffed up. The kitchen will smell incredible.',
            'Using tongs or a slotted spoon, remove the fried chiles and place them on a wire rack set over paper towels to drain any excess oil. Serve immediately with warm tomato sauce spooned generously over the top. A little sprinkle of fresh cilantro never hurts either. Enjoy the fruits of your labor!',
            'Serve immediately with warm tomato sauce spooned generously over the top. A little sprinkle of fresh cilantro never hurts either. Enjoy the fruits of your labor!'
        ],
        tags: ['Mexican', 'Dinner', 'Traditional'],
        seoTitle: 'Authentic Chiles Rellenos Recipe: My Abuela\'s Secret',
        seoDescription: 'Discover the true taste of Mexico with this authentic chiles rellenos recipe. Learn my abuela\'s secrets for perfect, cheesy stuffed poblanos every time.',
        seoKeywords: 'authentic chiles rellenos recipe, traditional Mexican food, poblano peppers, cheese stuffed peppers, Mexican dinner',
        translations: {
            hi: {
                title: 'चिली रेलेनोस',
                description: 'चिली रेलेनोस सिर्फ एक डिश नहीं, यह यादों, चुनौतियों और जीत का स्वाद है। ओक्साका में अपनी अबुएला एलेना की छोटी सी रसोई में मैंने इसे बनाना सीखा था। वहाँ हमेशा भुनी हुई मिर्च और उबलते टमाटरों की खुशबू फैली रहती थी। अबुएला कहती थीं, \'धैर्य, मेरी बच्ची, धैर्य ही पहली सामग्री है।\' उन्होंने मुझे वो छोटे-छोटे नुस्खे सिखाए जो किसी किताब में नहीं मिलते – जैसे मिर्च को \'पसीना\' दिलाना और अंडे का हल्का, हवादार घोल बनाना। यह मेहनत का काम है, पर जब आप उस नरम, चीज़ से भरी, मिर्च के स्वाद का पहला निवाला लेते हैं, तो हर पल की मेहनत सफल लगती है।',
                ingredients: [{ item: 'पोब्लानो मिर्च', amount: '4 बड़ी' }, { item: 'ओक्साका चीज़ (या मोंटेरे जैक)', amount: '225 ग्राम, आधे इंच की पट्टियों में कटा हुआ' }, { item: 'मैदा', amount: 'आधा कप, और डस्टिंग के लिए अतिरिक्त' }, { item: 'बड़े अंडे', amount: '4, अलग किए हुए' }, { item: 'नमक', amount: 'आधा छोटा चम्मच, और स्वादानुसार' }, { item: 'वनस्पति तेल', amount: '3-4 कप, तलने के लिए' }, { item: 'टमाटर सॉस (घर का बना या अच्छी गुणवत्ता वाला स्टोर से खरीदा हुआ)', amount: '2 कप, परोसने के लिए गरम किया हुआ' }],
                instructions: ['सबसे पहले, उन खूबसूरत पोब्लानो मिर्चों को भून लें। आप इन्हें गैस स्टोव की खुली आंच पर, ब्रॉयलर के नीचे या गरम कोमल पर भून सकते हैं।', 'इन्हें बार-बार पलटते रहें जब तक इनकी खाल पूरी तरह से जलकर काली और फफोलेदार न हो जाए। आपको इन्हें बिल्कुल काला करना है। इसमें लगभग 8-10 मिनट लगेंगे। खुशबू लाजवाब, थोड़ी धुएँ वाली होगी।', 'गरम, भुनी हुई मिर्चों को तुरंत एक प्लास्टिक बैग में या प्लास्टिक रैप से कसकर ढके हुए कटोरे में डाल दें। इन्हें लगभग 15-20 मिनट के लिए \'पसीना\' आने दें। यह भाप खाल को ढीला करने में मदद करती है। इस कदम को न छोड़ें; यह छीलने के लिए बहुत मददगार है।', 'जब वे संभालने लायक ठंडी हो जाएँ, तो सावधानी से मिर्चों की खाल छील लें। यह आसानी से निकल जानी चाहिए। हर मिर्च के एक तरफ एक छोटा, लंबा चीरा लगाएँ, ध्यान रहे कि पूरा न कटे। धीरे से बीज और नसें निकाल दें। कुछ लोग इन्हें धोते हैं, लेकिन मैं स्वाद बरकरार रखने के लिए सिर्फ खुरच कर निकालना पसंद करती हूँ। कोमलता से करें; आप मिर्च को फाड़ना नहीं चाहेंगे।', 'हर मिर्च में चीज़ की पट्टियाँ भर दें। ज़्यादा न भरें, वरना वे तलते समय फट जाएँगी। बस इतना भरें कि वे भरी हुई और अच्छी लगें। यदि चीरा बहुत चौड़ा है, तो आप इसे बंद रखने के लिए टूथपिक का उपयोग कर सकते हैं, लेकिन आमतौर पर घोल इसे सील कर देगा।', 'अब घोल की बारी! अंडे अलग कर लें। एक साफ, सूखे कटोरे में अंडे की सफेदी को आधा छोटा चम्मच नमक के साथ तब तक फेंटें जब तक कि वे सख्त चोटियाँ न बना लें। इसका मतलब है कि जब आप व्हिस्क उठाएँ, तो चोटियाँ सीधी खड़ी रहें। दूसरे कटोरे में अंडे की जर्दी को हल्का फेंट लें। अंडे की जर्दी को धीरे से सख्त अंडे की सफेदी में मिलाएँ। फिर, सावधानी से आधा कप मैदा तब तक मिलाएँ जब तक कि सब कुछ मिल न जाए। ज़्यादा न मिलाएँ, वरना सफेदी बैठ जाएगी। यह घोल हल्का और हवादार होना चाहिए, जैसे बादल।', 'एक गहरे कड़ाही या डच ओवन में वनस्पति तेल को मध्यम-तेज आंच पर लगभग 350-375°F (175-190°C) तक गरम करें। आपको सतह पर छोटी-छोटी लहरें दिखेंगी। जब तेल गरम हो रहा हो, तो हर भरी हुई मिर्च को थोड़े अतिरिक्त मैदा से हल्का सा डस्ट करें। इससे अंडे का घोल चिपकने में मदद मिलती है।', 'हर मैदा लगी मिर्च को अंडे के घोल में सावधानी से डुबोएँ, सुनिश्चित करें कि वह पूरी तरह से ढक जाए। घोल लगी मिर्च को गरम तेल में धीरे से रखें। अपनी कड़ाही के आकार के अनुसार एक या दो एक बार में तलें, हर तरफ से लगभग 3-4 मिनट के लिए, जब तक वे सुंदर सुनहरे भूरे और फूले हुए न हो जाएँ। रसोई में अविश्वसनीय खुशबू फैल जाएगी।', 'चिमटे या झारे का उपयोग करके, तली हुई मिर्चों को निकालें और अतिरिक्त तेल निकालने के लिए कागज़ के तौलिये पर रखी तार की जाली पर रखें। तुरंत गरम टमाटर सॉस के साथ परोसें, ऊपर से उदारतापूर्वक सॉस डालें। थोड़ा ताज़ा हरा धनिया भी कभी नुकसान नहीं करता। अपनी मेहनत का फल का आनंद लें!'],
                seoTitle: 'परफेक्ट चिली रेलेनोस रेसिपी हिंदी में | स्वाद का जादू',
                seoDescription: 'ओक्साका की पारंपरिक चिली रेलेनोस रेसिपी हिंदी में सीखें। अबुएला के खास नुस्खों से बनी यह भरवां मिर्च आपके दिल को छू लेगी। आसान विधि और लाजवाब स्वाद!',
                seoKeywords: 'चिली रेलेनोस रेसिपी हिंदी में, भरवां मिर्च, मैक्सिकन खाना, पोब्लानो मिर्च, चीज़ भरवां मिर्च, घर पर चिली रेलेनोस'
            },
            bn: {
                title: 'চিলিস রিলেনোস',
                description: 'আহ, চিলিস রিলেনোস! এটা শুধু একটা খাবার নয়, এটা যেন স্মৃতির এক টুকরো, একটা চ্যালেঞ্জ আর জয়ের গল্প। ওক্সাকার ছোট্ট রান্নাঘরে ঠাকুমা এলেনার কাছে প্রথম শিখেছিলাম এটা। বাতাসে সবসময় পোড়া মরিচ আর টমেটো সসের সুগন্ধ ভাসত। আমার প্রথম চেষ্টাগুলো ছিল এক্কেবারে ব্যর্থ! মরিচ ছিঁড়ে যেত, চিজ গলে বেরিয়ে আসত। হাল ছেড়ে দিতে চেয়েছিলাম, কিন্তু ঠাকুমা হেসে বলতেন, \'ধৈর্য ধরো, মায়া। ধৈর্যই প্রথম উপকরণ।\' তিনি আমাকে এমন কিছু কৌশল শিখিয়েছিলেন যা কোনো রান্নার বইয়ে পাবে না। যেমন, পোড়ানো মরিচগুলো প্লাস্টিকের ব্যাগে \'ঘামতে\' দেওয়া কতটা জরুরি, এতে খোসা ছাড়ানোটা কত সহজ হয়ে যায়। আর ব্যাটার! এটা হালকা, বাতাসভরা, মেঘের মতো হতে হবে, কিন্তু মরিচের গায়ে লেগে থাকার মতো মজবুতও হতে হবে। আসল রহস্যটা ডিমের সাদা অংশে – শক্ত ফোম হওয়া পর্যন্ত ফেটিয়ে, তারপর খুব আলতো করে ডিমের কুসুম আর সামান্য ময়দা মেশানো। এটা একটা সূক্ষ্ম নাচ। এই খাবারটা ভালোবাসার শ্রম, একটা ছুটির দিনের প্রকল্প, যা বলে, \'এসো, বসো, খাও, আর কিছুক্ষণ থাকো।\'',
                ingredients: [{ item: 'পোবলানো মরিচ', amount: '৪টি বড়' }, { item: 'ওয়াক্সাকা চিজ (অথবা মন্টেরি জ্যাক)', amount: '৮ আউন্স, ১/২ ইঞ্চি ফালি করে কাটা' }, { item: 'ময়দা', amount: '১/২ কাপ, এবং ধুলো দেওয়ার জন্য অতিরিক্ত' }, { item: 'বড় ডিম', amount: '৪টি, সাদা ও কুসুম আলাদা করা' }, { item: 'লবণ', amount: '১/২ চা চামচ, এবং স্বাদমতো আরও' }, { item: 'সয়াবিন তেল', amount: '৩-৪ কাপ, ভাজার জন্য' }, { item: 'টমেটো সস (ঘরে তৈরি বা ভালো মানের কেনা)', amount: '২ কাপ, পরিবেশনের জন্য গরম করা' }],
                instructions: ['প্রথমে সুন্দর পোবলানো মরিচগুলো ঝলসে নিন। গ্যাস স্টোভের খোলা আগুনে, ব্রয়লারের নিচে বা গরম কমালে এটা করতে পারেন। ঘন ঘন উল্টে দিন যতক্ষণ না চামড়াগুলো পুরোপুরি ঝলসে কালো হয়ে যায়। একদম কালো করতে হবে। এতে প্রায় ৮-১০ মিনিট লাগবে। একটা দারুণ ধোঁয়াটে গন্ধ বেরোবে।', 'গরম, ঝলসে যাওয়া মরিচগুলো সঙ্গে সঙ্গে একটি প্লাস্টিকের ব্যাগে বা প্লাস্টিক র‍্যাপ দিয়ে শক্ত করে ঢাকা একটি বাটিতে রাখুন। ১৫-২০ মিনিট \'ঘামতে\' দিন। এই বাষ্পে চামড়া আলগা হয়ে যায়। এই ধাপটি বাদ দেবেন না; খোসা ছাড়ানোর জন্য এটা খুব দরকারি।', 'ঠান্ডা হলে সাবধানে মরিচের খোসা ছাড়িয়ে নিন। এটা সহজেই উঠে আসবে। প্রতিটি মরিচের একপাশে লম্বালম্বিভাবে একটি ছোট চেরা দিন, খেয়াল রাখবেন যেন পুরোপুরি কেটে না যায়। আলতো করে বীজ ও শিরাগুলো বের করে নিন। কেউ কেউ ধুয়ে নেয়, কিন্তু আমি স্বাদ অক্ষুণ্ণ রাখতে শুধু চেঁছে বের করে নিতে পছন্দ করি। সাবধানে করবেন, মরিচ যেন ছিঁড়ে না যায়।', 'প্রতিটি মরিচের মধ্যে চিজের ফালি ভরে দিন। বেশি ভরবেন না, তাহলে ভাজার সময় ফেটে যেতে পারে। শুধু এমনভাবে ভরুন যাতে দেখতে ফোলা লাগে। যদি চেরাটা বেশি চওড়া হয়, তাহলে টুথপিক দিয়ে আটকে দিতে পারেন, তবে সাধারণত ব্যাটারেই এটা আটকে যায়।', 'এবার ব্যাটার তৈরির পালা! ডিমের সাদা ও কুসুম আলাদা করুন। একটি পরিষ্কার, শুকনো বাটিতে ডিমের সাদা অংশ ১/২ চা চামচ লবণ দিয়ে শক্ত ফোম হওয়া পর্যন্ত ফেটিয়ে নিন। এর মানে হলো, যখন হুইস্ক তুলবেন, তখন ফোমগুলো সোজা হয়ে দাঁড়িয়ে থাকবে। অন্য একটি বাটিতে ডিমের কুসুম হালকা করে ফেটিয়ে নিন। আলতো করে ডিমের কুসুম শক্ত ফোম হওয়া ডিমের সাদার সাথে মিশিয়ে দিন। তারপর, সাবধানে ১/২ কাপ ময়দা মিশিয়ে নিন যতক্ষণ না ভালোভাবে মিশে যায়। বেশি মেশাবেন না, তাহলে ডিমের সাদা অংশের ফোম নষ্ট হয়ে যাবে। এই ব্যাটারটি হালকা এবং বাতাসভরা, মেঘের মতো হওয়া উচিত।', 'একটি গভীর কড়াই বা ডাচ ওভেনে মাঝারি-উচ্চ আঁচে সয়াবিন তেল গরম করুন যতক্ষণ না তাপমাত্রা ৩৫০-৩৭৫°F (১৭৫-১৯০°C) হয়। তেলের উপরিভাগে ছোট ছোট ঢেউ দেখতে পাবেন। তেল গরম হওয়ার সময়, প্রতিটি ভরা মরিচে সামান্য অতিরিক্ত ময়দা হালকা করে ছড়িয়ে দিন। এতে ডিমের ব্যাটার ভালোভাবে লেগে থাকবে।', 'সাবধানে প্রতিটি ময়দা মাখানো মরিচ ডিমের ব্যাটারে ডুবিয়ে নিন, নিশ্চিত করুন যেন পুরোপুরি ঢাকা পড়ে। আলতো করে ব্যাটার মাখানো মরিচ গরম তেলে দিন। আপনার কড়াইয়ের আকার অনুযায়ী একবারে একটি বা দুটি ভাজুন, প্রতি পাশে প্রায় ৩-৪ মিনিট ধরে, যতক্ষণ না সুন্দর সোনালি বাদামী এবং ফুলে ওঠে। রান্নাঘরটা দারুণ সুগন্ধে ভরে যাবে।', 'চিমটা বা ছিদ্রযুক্ত চামচ দিয়ে ভাজা চিলিসগুলো তুলে কাগজের তোয়ালের উপর রাখা তারের র‍্যাকে রাখুন যাতে অতিরিক্ত তেল ঝরে যায়। গরম টমেটো সস উদারভাবে উপরে ঢেলে সঙ্গে সঙ্গে পরিবেশন করুন। সামান্য তাজা ধনে পাতা ছড়িয়ে দিলে আরও ভালো লাগে। আপনার পরিশ্রমের ফল উপভোগ করুন!'],
                seoTitle: 'আসল মেক্সিকান চিলিস রিলেনোস রেসিপি: ধাপে ধাপে তৈরি করুন',
                seoDescription: 'ঠাকুমার হাতের জাদু! এই চিলিস রিলেনোস রেসিপি দিয়ে ঘরেই তৈরি করুন মেক্সিকান স্বাদের সেরা চিলিস রিলেনোস। ধাপে ধাপে সহজ নির্দেশিকা।',
                seoKeywords: 'চিলিস রিলেনোস রেসিপি, মেক্সিকান খাবার, পোবলানো মরিচ, চিজ রেসিপি, ডিমের ব্যাটার'
            },
            mr: {
                title: 'चिली रेलेनोस',
                description: 'माझ्या आजी एलनाच्या ओक्साका येथील छोट्याशा स्वयंपाकघरात मी पहिल्यांदा चिली रेलेनोस बनवायला शिकले. भाजलेल्या मिरच्या आणि टोमॅटोच्या सुगंधाने घर नेहमी भरलेले असायचे. सुरुवातीला मिरच्या फाटायच्या, चीज बाहेर यायचे, पण आजीने \'संयम ठेव, मुली\' असे म्हणत मला धीर दिला. तिने मला मिरच्या सोलण्याच्या आणि हलके, फुगलेले पीठ बनवण्याच्या खास युक्त्या शिकवल्या. हे फक्त एक जेवण नाही, तर प्रेमाचे प्रतीक आहे, जे प्रत्येक क्षणासाठी योग्य आहे.',
                ingredients: [{ item: 'पोब्लानो मिरच्या', amount: '४ मोठ्या' }, { item: 'ओक्साका चीज (किंवा मॉन्टेरे जॅक)', amount: '८ औंस, १/२ इंच पट्ट्यांमध्ये कापलेले' }, { item: 'मैदा', amount: '१/२ कप, आणि धूळण्यासाठी थोडे जास्त' }, { item: 'मोठी अंडी', amount: '४, पांढरा आणि पिवळा भाग वेगळा केलेला' }, { item: 'मीठ', amount: '१/२ चमचा, आणि चवीनुसार जास्त' }, { item: 'वनस्पती तेल', amount: 'तळण्यासाठी ३-४ कप' }, { item: 'टोमॅटो सॉस (घरी बनवलेला किंवा चांगल्या प्रतीचा विकतचा)', amount: '२ कप, वाढण्यासाठी गरम केलेला' }],
                instructions: ['सुरुवातीला, पोब्लानो मिरच्या भाजून घ्या. तुम्ही गॅसच्या आचेवर, ओव्हनमध्ये किंवा गरम तव्यावर भाजू शकता. मिरच्या पूर्णपणे काळ्या आणि साल फुगेपर्यंत फिरवत रहा. याला सुमारे ८-१० मिनिटे लागतील.', 'भाजलेल्या गरम मिरच्या लगेच प्लास्टिकच्या पिशवीत किंवा प्लास्टिक रॅप लावलेल्या भांड्यात ठेवा. त्यांना १५-२० मिनिटे \'घाम\' येऊ द्या. यामुळे साल सहज निघते.', 'मिरच्या थंड झाल्यावर, त्यांची साल काळजीपूर्वक काढून घ्या. प्रत्येक मिरचीच्या एका बाजूला लांबीनुसार एक लहान चीर द्या, पण पूर्णपणे कापू नका. बिया आणि शिरा हळूवारपणे काढून टाका. मिरची फाटणार नाही याची काळजी घ्या.', 'प्रत्येक मिरचीमध्ये चीजच्या पट्ट्या भरा. जास्त भरू नका, नाहीतर तळताना फुटू शकतात. चीर मोठी असल्यास, टूथपिक वापरू शकता.', 'आता पिठाची तयारी करूया! अंड्याचा पांढरा आणि पिवळा भाग वेगळा करा. एका स्वच्छ, कोरड्या भांड्यात अंड्याच्या पांढऱ्या भागाला १/२ चमचा मीठ घालून कडक होईपर्यंत फेटा. दुसऱ्या भांड्यात अंड्याचा पिवळा भाग हलके फेटा. नंतर, पिवळा भाग हळूवारपणे पांढऱ्या भागात मिसळा. शेवटी, १/२ कप मैदा हलक्या हाताने मिसळा. जास्त फेटू नका.', 'एका खोल कढईत किंवा डच ओव्हनमध्ये मध्यम-उच्च आचेवर वनस्पती तेल ३५०-३७५°F (१७५-१९०°C) पर्यंत गरम करा. तेल गरम झाल्यावर, प्रत्येक भरलेल्या मिरचीला थोड्या मैद्याने हलके धूळ लावा.', 'मैद्याने धूळ लावलेली मिरची पिठात पूर्णपणे बुडवा. पिठात घोळवलेली मिरची गरम तेलात हळूवारपणे सोडा. तुमच्या कढईच्या आकारानुसार एका वेळी एक किंवा दोन मिरच्या तळा. प्रत्येक बाजूने ३-४ मिनिटे सोनेरी तपकिरी आणि फुगेपर्यंत तळा.', 'चिमट्याने किंवा झारीने तळलेल्या मिरच्या बाहेर काढून, जास्तीचे तेल निघून जाण्यासाठी कागदी टॉवेलवर ठेवलेल्या जाळीवर ठेवा. गरम टोमॅटो सॉससोबत लगेच सर्व्ह करा. वरून थोडी ताजी कोथिंबीर घातल्यास चव अजून वाढते. तुमच्या मेहनतीचा आनंद घ्या!'],
                seoTitle: 'परफेक्ट चिली रेलेनोस रेसिपी मराठीत - घरगुती चव!',
                seoDescription: 'ओक्साकाची खास चिली रेलेनोस रेसिपी मराठीत शिका! कुरकुरीत बाहेरील आवरण आणि आतून रसाळ चीज भरलेली मिरची, ही डिश नक्कीच तुमच्या कुटुंबाला आवडेल.',
                seoKeywords: 'चिली रेलेनोस रेसिपी मराठी, भरलेली मिरची, मेक्सिकन डिश, चीज चिली, घरगुती चिली रेलेनोस'
            },
            te: {
                title: 'చిల్లీస్ రెల్లెనోస్',
                description: 'చిల్లీస్ రెల్లెనోస్ అంటే కేవలం ఒక వంటకం కాదు, అది జ్ఞాపకం, ఒక సవాలు, ఒక విజయం. మా నాయనమ్మ ఎలెనా దగ్గర ఒయాక్సాలోని ఆమె చిన్న వంటగదిలో దీన్ని నేర్చుకున్నాను. మిరపకాయలను కాల్చి, వాటిని జాగ్రత్తగా సిద్ధం చేసేది. నా మొదటి ప్రయత్నాలు విఫలమైనా, ఆమె \'ఓపికే మొదటి పదార్థం\' అని చెప్పేది. ఈ వంటకం ప్రేమతో చేసేది, ప్రతి నిమిషం విలువైనది. ఆ మెత్తని, చీజ్ నిండిన మిరపకాయ రుచి చూస్తే, దాని వెనుక ఉన్న శ్రమ అర్థమవుతుంది.',
                ingredients: [{ item: 'పోబ్లానో మిరపకాయలు', amount: '4 పెద్దవి' }, { item: 'ఓక్సాకా చీజ్ (లేదా మాంటెరీ జాక్)', amount: '8 ఔన్సులు, 1/2-అంగుళం ముక్కలుగా కట్ చేయాలి' }, { item: 'మైదా పిండి', amount: '1/2 కప్పు, అదనంగా చల్లడానికి' }, { item: 'పెద్ద గుడ్లు', amount: '4, సొనలు వేరు చేయాలి' }, { item: 'ఉప్పు', amount: '1/2 టీస్పూన్, రుచికి సరిపడా' }, { item: 'వంట నూనె', amount: '3-4 కప్పులు, వేయించడానికి' }, { item: 'టొమాటో సాస్ (ఇంట్లో తయారుచేసినది లేదా మంచి నాణ్యత గలది)', amount: '2 కప్పులు, వడ్డించడానికి వేడి చేయాలి' }],
                instructions: ['ముందుగా, ఆ అందమైన పోబ్లానో మిరపకాయలను కాల్చండి. గ్యాస్ స్టవ్ మీద, బ్రాయిలర్ కింద లేదా వేడి కొమల్ మీద కాల్చవచ్చు. వాటి తొక్క పూర్తిగా నల్లగా, పొక్కులు వచ్చే వరకు తరచుగా తిప్పుతూ కాల్చండి. ఇది సుమారు 8-10 నిమిషాలు పడుతుంది.', 'కాల్చిన వేడి మిరపకాయలను వెంటనే ప్లాస్టిక్ సంచిలోకి లేదా ప్లాస్టిక్ ర్యాప్‌తో గట్టిగా కప్పిన గిన్నెలోకి మార్చండి. వాటిని 15-20 నిమిషాలు \'చెమట పట్టనివ్వండి\'. ఈ ఆవిరి తొక్కను వదులు చేయడానికి సహాయపడుతుంది.', 'చల్లబడిన తర్వాత, మిరపకాయల తొక్కను జాగ్రత్తగా తీయండి. తొక్క సులభంగా ఊడిపోతుంది. ప్రతి మిరపకాయకు ఒక వైపు చిన్న నిలువు చీలిక చేయండి, పూర్తిగా కట్ చేయకుండా జాగ్రత్త వహించండి. గింజలు, నరాలను సున్నితంగా తొలగించండి.', 'ప్రతి మిరపకాయలో చీజ్ ముక్కలను నింపండి. ఎక్కువగా నింపవద్దు, లేకపోతే వేయించేటప్పుడు పగిలిపోతాయి. చీలిక చాలా వెడల్పుగా ఉంటే, టూత్‌పిక్‌తో మూసివేయవచ్చు.', 'ఇప్పుడు పిండి కోసం! గుడ్ల సొనలను వేరు చేయండి. శుభ్రమైన, పొడి గిన్నెలో, గుడ్డు తెల్లసొనలను 1/2 టీస్పూన్ ఉప్పుతో గట్టిగా నురుగు వచ్చే వరకు కొట్టండి. మరొక గిన్నెలో, గుడ్డు సొనలను తేలికగా కొట్టండి. గుడ్డు సొనలను గట్టిగా కొట్టిన తెల్లసొనలలోకి సున్నితంగా కలపండి. ఆపై, 1/2 కప్పు మైదా పిండిని జాగ్రత్తగా కలపండి.', 'లోతైన పాన్ లేదా డచ్ ఓవెన్‌లో వంట నూనెను మధ్యస్థ-అధిక వేడి మీద 350-375°F (175-190°C) వరకు వేడి చేయండి. నూనె వేడెక్కుతున్నప్పుడు, ప్రతి నింపిన మిరపకాయను కొద్దిగా మైదా పిండితో తేలికగా చల్లండి.', 'ప్రతి పిండి పూసిన మిరపకాయను గుడ్డు పిండిలో జాగ్రత్తగా ముంచి, పూర్తిగా పూత పడేలా చూసుకోండి. పిండి పూసిన మిరపకాయను వేడి నూనెలో సున్నితంగా ఉంచండి. మీ పాన్ పరిమాణాన్ని బట్టి, ఒకేసారి ఒకటి లేదా రెండు వేయించండి.', 'ప్రతి వైపు 3-4 నిమిషాలు, అవి అందంగా బంగారు గోధుమ రంగులోకి మారి, ఉబ్బే వరకు వేయించండి. వేయించిన చిల్లీస్‌ను తీసి, అదనపు నూనెను తీసివేయడానికి పేపర్ టవల్స్ మీద ఉంచిన వైర్ ర్యాక్‌పై ఉంచండి.', 'వెంటనే వేడి టొమాటో సాస్‌తో ఉదారంగా వడ్డించండి. కొద్దిగా తాజా కొత్తిమీర చల్లుకుంటే మరింత రుచిగా ఉంటుంది. మీ శ్రమ ఫలితాలను ఆస్వాదించండి!'],
                seoTitle: 'రుచికరమైన చిల్లీస్ రెల్లెనోస్ రెసిపీ తెలుగులో | సులభంగా చేయండి',
                seoDescription: 'మా నాయనమ్మ రహస్య చిట్కాలతో ఇంట్లోనే రుచికరమైన చిల్లీస్ రెల్లెనోస్ రెసిపీ తెలుగులో నేర్చుకోండి. ఈ మెక్సికన్ వంటకం మీ భోజనానికి ప్రత్యేక రుచినిస్తుంది. సులభమైన పద్ధతి.',
                seoKeywords: 'చిల్లీస్ రెల్లెనోస్ రెసిపీ తెలుగులో, మెక్సికన్ వంటకాలు, పోబ్లానో మిరపకాయ రెసిపీ, చీజ్ స్టఫ్డ్ మిరపకాయలు, ఇంట్లో చిల్లీస్ రెల్లెనోస్'
            },
            ta: {
                title: 'சில்லிஸ் ரெல்லெனோஸ்',
                description: 'சில்லிஸ் ரெல்லெனோஸ் என்பது வெறும் உணவு மட்டுமல்ல, அது ஒரு அழகான நினைவும், சவாலும், வெற்றியும் கலந்தது. என் பாட்டி எலெனாவிடம் ஓக்ஸாகாவில் உள்ள அவரது சிறிய சமையலறையில் இதைக் கற்றுக்கொண்டேன். மிளகாயை வறுக்கும் வாசனையும், தக்காளி சாஸ் கொதிக்கும் மணமும் எப்போதும் நிறைந்திருக்கும். மிளகாயை வறுத்து, தோலை உரித்து, சீஸ் நிரப்பி, மென்மையான மாவில் தோய்த்து பொரிக்கும் கலை, பொறுமையின் அடையாளம். ஒவ்வொரு கடியிலும் கிடைக்கும் அந்த சீஸ் நிறைந்த, காரமான சுவை, நீங்கள் செலவழித்த ஒவ்வொரு நிமிடத்திற்கும் மதிப்புள்ளது.',
                ingredients: [{ item: 'போப்லானோ மிளகாய்', amount: '4 பெரிய' }, { item: 'ஓக்ஸாகா சீஸ் (அல்லது மான்டேரி ஜாக்)', amount: '8 அவுன்ஸ், 1/2 அங்குல துண்டுகளாக வெட்டப்பட்டது' }, { item: 'அனைத்துப் பயன்பாட்டு மாவு', amount: '1/2 கப், தூவுவதற்கு மேலும் தேவைப்படும்' }, { item: 'பெரிய முட்டைகள்', amount: '4, பிரித்தது' }, { item: 'உப்பு', amount: '1/2 டீஸ்பூன், சுவைக்கு ஏற்ப மேலும்' }, { item: 'சமையல் எண்ணெய்', amount: '3-4 கப், பொரிப்பதற்கு' }, { item: 'தக்காளி சாஸ் (வீட்டில் செய்தது அல்லது நல்ல தரமான கடையில் வாங்கியது)', amount: '2 கப், பரிமாற சூடுபடுத்தப்பட்டது' }],
                instructions: ['முதலில், அந்த அழகான போப்லானோ மிளகாய்களை வறுக்க வேண்டும். இதை அடுப்பின் திறந்த தீயில், ப்ரோயிலரின் கீழ் அல்லது சூடான தோசைக்கல்லில் செய்யலாம். தோல்கள் முழுவதும் கருகி, கொப்புளங்கள் வரும் வரை அடிக்கடி திருப்பி வறுக்கவும். அவை கருப்பாக, நன்றாக கருப்பாக இருக்க வேண்டும். இதற்கு சுமார் 8-10 நிமிடங்கள் ஆகும். புகை வாசனையுடன் அருமையாக இருக்கும்.', 'உடனடியாக, சூடான, கருகிய மிளகாய்களை ஒரு பிளாஸ்டிக் பைக்குள் அல்லது பிளாஸ்டிக் ரேப்பால் இறுக்கமாக மூடிய ஒரு கிண்ணத்திற்கு மாற்றவும். சுமார் 15-20 நிமிடங்கள் \'வியர்க்க\' விடவும். இந்த ஆவி தோலை தளர்த்த உதவும். இந்த படிநிலையை தவிர்க்க வேண்டாம்; இது தோலுரிப்பதற்கு மிகவும் உதவும்.', 'கையாளும் அளவுக்கு குளிர்ந்ததும், மிளகாயின் தோலை கவனமாக உரிக்கவும். இது எளிதாக வர வேண்டும். ஒவ்வொரு மிளகாயின் ஒரு பக்கத்தில் ஒரு சிறிய, நீளமான கீறலை ஏற்படுத்தவும், முழுவதுமாக வெட்டாமல் கவனமாக இருக்கவும். விதைகளையும் நரம்புகளையும் மெதுவாக அகற்றவும். சிலர் கழுவுவார்கள், ஆனால் நான் சுவையை அப்படியே வைத்திருக்க அவற்றை சுரண்டி எடுப்பதே நல்லது என்று நினைக்கிறேன். மிளகாய் கிழியாமல் மெதுவாக செய்யவும்.', 'ஒவ்வொரு மிளகாயிலும் சீஸ் துண்டுகளை நிரப்பவும். அதிகமாக நிரப்ப வேண்டாம், இல்லையெனில் பொரிக்கும் போது வெடித்துவிடும். அவை புஷ்டியாகவும் மகிழ்ச்சியாகவும் இருக்கும் அளவுக்கு நிரப்பவும். கீறல் மிகவும் அகலமாக இருந்தால், அதை மூடுவதற்கு ஒரு டூத்பிக்கைப் பயன்படுத்தலாம், ஆனால் பொதுவாக, மாவு அதை மூடிவிடும்.', 'இப்போது மாவு தயாரிக்க! முட்டைகளை பிரித்துக்கொள்ளவும். ஒரு சுத்தமான, உலர்ந்த கிண்ணத்தில், முட்டை வெள்ளைக் கருவை 1/2 டீஸ்பூன் உப்புடன் சேர்த்து, கெட்டியான நுரை வரும் வரை அடிக்கவும். அதாவது, விஸ்கை உயர்த்தும் போது நுரை நேராக நிற்க வேண்டும். மற்றொரு கிண்ணத்தில், முட்டை மஞ்சள் கருவை லேசாக அடிக்கவும். முட்டை மஞ்சள் கருவை கெட்டியான முட்டை வெள்ளைக் கருவுடன் மெதுவாக கலக்கவும். பின்னர், 1/2 கப் மாவை மெதுவாக சேர்த்து, கலக்கும் வரை மட்டும் கலக்கவும். அதிகமாக கலக்க வேண்டாம், இல்லையெனில் வெள்ளைக் கருவின் நுரை குறைந்துவிடும். இந்த மாவு லேசாகவும், காற்றோட்டமாகவும், மேகம் போலவும் இருக்க வேண்டும்.', 'ஒரு ஆழமான வாணலி அல்லது டச்சு ஓவனில் சமையல் எண்ணெயை மிதமான-அதிக தீயில் சுமார் 350-375°F (175-190°C) வரை சூடாக்கவும். மேற்பரப்பில் சிறிய அலைகளைக் காண்பீர்கள். எண்ணெய் சூடாகும் போது, ஒவ்வொரு நிரப்பப்பட்ட மிளகாயையும் சிறிது மாவுடன் லேசாக தூவவும். இது முட்டை மாவு ஒட்டிக்கொள்ள உதவும்.', 'மாவு பூசப்பட்ட ஒவ்வொரு மிளகாயையும் முட்டை மாவில் கவனமாக தோய்த்து, முழுவதுமாக பூசப்பட்டுள்ளதா என்பதை உறுதிப்படுத்தவும். மாவு பூசப்பட்ட மிளகாயை சூடான எண்ணெயில் மெதுவாக வைக்கவும். உங்கள் பாத்திரத்தின் அளவைப் பொறுத்து, ஒரு நேரத்தில் ஒன்று அல்லது இரண்டை, ஒவ்வொரு பக்கமும் சுமார் 3-4 நிமிடங்கள், அழகாக பொன்னிறமாகி, உப்பி வரும் வரை பொரிக்கவும். சமையலறை நம்பமுடியாத வாசனையுடன் இருக்கும்.', 'பொரித்த சில்லிஸ்களை இடுக்கி அல்லது துளையுள்ள கரண்டியால் எடுத்து, காகித துண்டுகள் மீது வைக்கப்பட்ட கம்பி ரேக்கில் வைத்து அதிக எண்ணெயை வடிகட்டவும். சூடான தக்காளி சாஸை தாராளமாக மேலே ஊற்றி உடனடியாக பரிமாறவும். சிறிது புதிய கொத்தமல்லி தூவுவதும் நல்லது. உங்கள் உழைப்பின் பலனை அனுபவிக்கவும்!'],
                seoTitle: 'சில்லிஸ் ரெல்லெனோஸ் செய்முறை: மெக்ஸிகன் சுவை வீட்டில்!',
                seoDescription: 'மெக்ஸிகன் சில்லிஸ் ரெல்லெனோஸ் செய்முறை கற்றுக்கொள்ளுங்கள்! சீஸ் நிரப்பப்பட்ட போப்லானோ மிளகாய்களை, மிருதுவான மாவில் பொரித்து, தக்காளி சாஸுடன் சுவையுங்கள். சுலபமான சில்லிஸ் ரெல்லெனோஸ் செய்முறை.',
                seoKeywords: 'சில்லிஸ் ரெல்லெனோஸ் செய்முறை, மெக்ஸிகன் உணவு, போப்லானோ மிளகாய், சீஸ் பஜ்ஜி, காரமான உணவு, வீட்டில் சமைக்க'
            },
            kn: {
                title: 'ಚಿಲೀಸ್ ರೆಲೆನೋಸ್',
                description: 'ಓಹ್, ಚಿಲೀಸ್ ರೆಲೆನೋಸ್! ಇದು ಕೇವಲ ಒಂದು ಖಾದ್ಯವಲ್ಲ, ಇದು ನೆನಪು, ಸವಾಲು ಮತ್ತು ವಿಜಯದ ಕಥೆ. ನನ್ನ ಅಜ್ಜಿ ಎಲೆನಾ ಅವರ ಓಕ್ಸಾಕಾದ ಪುಟ್ಟ ಅಡುಗೆಮನೆಯಲ್ಲಿ ಇದನ್ನು ಮೊದಲು ಕಲಿತೆ. ಅಲ್ಲಿ ಯಾವಾಗಲೂ ಸುಟ್ಟ ಮೆಣಸಿನಕಾಯಿಗಳು ಮತ್ತು ಕುದಿಯುವ ಟೊಮೆಟೊಗಳ ಪರಿಮಳ ತುಂಬಿರುತ್ತಿತ್ತು. ಅಜ್ಜಿ ತಾಳ್ಮೆಯಿಂದ, ಸುಟ್ಟ ಮೆಣಸಿನಕಾಯಿಗಳನ್ನು ಪ್ಲಾಸ್ಟಿಕ್ ಚೀಲದಲ್ಲಿ \'ಬೆವರು\' ಹಾಕಲು ಬಿಡುತ್ತಿದ್ದರು, ಇದರಿಂದ ಸಿಪ್ಪೆ ಸುಲಿಯುವುದು ಸುಲಭವಾಗುತ್ತಿತ್ತು. ಹಿಟ್ಟು ತಯಾರಿಸುವುದು ಒಂದು ಕಲೆ; ಅದು ಹಗುರವಾಗಿ, ಗಾಳಿಯಾಡಿಸುವಂತೆ ಇರಬೇಕು. ತಾಳ್ಮೆ ಮತ್ತು ಸರಿಯಾದ ತಂತ್ರದಿಂದ, ಈ ಚೀಸ್ ತುಂಬಿದ ಮೆಣಸಿನಕಾಯಿಗಳು ನಿಮ್ಮ ಮನಸ್ಸನ್ನು ಗೆಲ್ಲುತ್ತವೆ.',
                ingredients: [{ item: 'ಪೊಬ್ಲಾನೋ ಮೆಣಸಿನಕಾಯಿಗಳು', amount: '4 ದೊಡ್ಡದು' }, { item: 'ಓಕ್ಸಾಕಾ ಚೀಸ್ (ಅಥವಾ ಮಾಂಟೆರಿ ಜಾಕ್)', amount: '8 oz, 1/2-ಇಂಚು ಪಟ್ಟಿಗಳಾಗಿ ಕತ್ತರಿಸಿದ್ದು' }, { item: 'ಮೈದಾ ಹಿಟ್ಟು', amount: '1/2 ಕಪ್, ಧೂಳೀಕರಿಸಲು ಹೆಚ್ಚುವರಿ' }, { item: 'ದೊಡ್ಡ ಮೊಟ್ಟೆಗಳು', amount: '4, ಬೇರ್ಪಡಿಸಿದ್ದು' }, { item: 'ಉಪ್ಪು', amount: '1/2 ಟೀಚಮಚ, ರುಚಿಗೆ ತಕ್ಕಷ್ಟು ಹೆಚ್ಚು' }, { item: 'ತರಕಾರಿ ಎಣ್ಣೆ', amount: '3-4 ಕಪ್, ಕರಿಯಲು' }, { item: 'ಟೊಮೆಟೊ ಸಾಸ್ (ಮನೆಯಲ್ಲಿ ತಯಾರಿಸಿದ್ದು ಅಥವಾ ಉತ್ತಮ ಗುಣಮಟ್ಟದ ಅಂಗಡಿಯಿಂದ ಖರೀದಿಸಿದ್ದು)', amount: '2 ಕಪ್, ಬಡಿಸಲು ಬಿಸಿ ಮಾಡಿದ್ದು' }],
                instructions: ['ಮೊದಲು, ಆ ಸುಂದರ ಪೊಬ್ಲಾನೋ ಮೆಣಸಿನಕಾಯಿಗಳನ್ನು ಸುಟ್ಟುಕೊಳ್ಳಿ. ಇದನ್ನು ನಿಮ್ಮ ಗ್ಯಾಸ್ ಸ್ಟವ್ ಮೇಲೆ ನೇರ ಜ್ವಾಲೆಯ ಮೇಲೆ, ಬ್ರಾಯ್ಲರ್ ಅಡಿಯಲ್ಲಿ ಅಥವಾ ಬಿಸಿ ಕಮಾಲ್ ಮೇಲೆ ಮಾಡಬಹುದು. ಅವುಗಳ ಸಿಪ್ಪೆ ಸಂಪೂರ್ಣವಾಗಿ ಸುಟ್ಟು ಕಪ್ಪಾಗುವವರೆಗೆ ಆಗಾಗ್ಗೆ ತಿರುಗಿಸಿ. ಇದು ಸುಮಾರು 8-10 ನಿಮಿಷಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳುತ್ತದೆ. ಪರಿಮಳ ಅದ್ಭುತವಾಗಿರುತ್ತದೆ, ಸ್ವಲ್ಪ ಹೊಗೆಯಾಡಿದಂತೆ.', 'ಸುಟ್ಟ ಬಿಸಿ ಮೆಣಸಿನಕಾಯಿಗಳನ್ನು ತಕ್ಷಣವೇ ಪ್ಲಾಸ್ಟಿಕ್ ಚೀಲಕ್ಕೆ ಅಥವಾ ಪ್ಲಾಸ್ಟಿಕ್ ಸುತ್ತು ಹಾಕಿ ಬಿಗಿಯಾಗಿ ಮುಚ್ಚಿದ ಬಟ್ಟಲಿಗೆ ವರ್ಗಾಯಿಸಿ. ಅವುಗಳನ್ನು ಸುಮಾರು 15-20 ನಿಮಿಷಗಳ ಕಾಲ \'ಬೆವರು\' ಹಾಕಲು ಬಿಡಿ. ಈ ಹಬೆಯು ಸಿಪ್ಪೆಯನ್ನು ಸಡಿಲಗೊಳಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ. ಈ ಹಂತವನ್ನು ಬಿಡಬೇಡಿ; ಇದು ಸಿಪ್ಪೆ ಸುಲಿಯಲು ಬಹಳ ಮುಖ್ಯ.', 'ಹಿಡಿಯಲು ಸಾಕಷ್ಟು ತಣ್ಣಗಾದ ನಂತರ, ಮೆಣಸಿನಕಾಯಿಗಳ ಸಿಪ್ಪೆಯನ್ನು ಎಚ್ಚರಿಕೆಯಿಂದ ಸುಲಿಯಿರಿ. ಇದು ಸುಲಭವಾಗಿ ಬರಬೇಕು. ಪ್ರತಿ ಮೆಣಸಿನಕಾಯಿಯ ಒಂದು ಬದಿಯಲ್ಲಿ ಉದ್ದವಾಗಿ ಸಣ್ಣ ಸೀಳು ಮಾಡಿ, ಸಂಪೂರ್ಣವಾಗಿ ಕತ್ತರಿಸದಂತೆ ಎಚ್ಚರವಹಿಸಿ. ಬೀಜಗಳು ಮತ್ತು ನಾರುಗಳನ್ನು ನಿಧಾನವಾಗಿ ತೆಗೆದುಹಾಕಿ. ಕೆಲವು ಜನರು ಅವುಗಳನ್ನು ತೊಳೆಯುತ್ತಾರೆ, ಆದರೆ ನಾನು ರುಚಿಯನ್ನು ಹಾಗೆಯೇ ಇಡಲು ಅವುಗಳನ್ನು ಕೆರೆದು ತೆಗೆಯಲು ಬಯಸುತ್ತೇನೆ. ಮೆಣಸಿನಕಾಯಿ ಹರಿಯದಂತೆ ನಿಧಾನವಾಗಿ ಮಾಡಿ.', 'ಪ್ರತಿ ಮೆಣಸಿನಕಾಯಿಯನ್ನು ಚೀಸ್ ಪಟ್ಟಿಗಳಿಂದ ತುಂಬಿಸಿ. ಹೆಚ್ಚು ತುಂಬಿಸಬೇಡಿ, ಇಲ್ಲದಿದ್ದರೆ ಕರಿಯುವಾಗ ಅವು ಒಡೆಯಬಹುದು. ಅವು ದಪ್ಪ ಮತ್ತು ಚೆನ್ನಾಗಿ ಕಾಣುವಷ್ಟು ತುಂಬಿಸಿ. ಸೀಳು ತುಂಬಾ ಅಗಲವಾಗಿದ್ದರೆ, ಅದನ್ನು ಮುಚ್ಚಲು ಟೂತ್‌ಪಿಕ್ ಬಳಸಬಹುದು, ಆದರೆ ಸಾಮಾನ್ಯವಾಗಿ ಹಿಟ್ಟು ಅದನ್ನು ಮುಚ್ಚುತ್ತದೆ.', 'ಈಗ ಹಿಟ್ಟಿಗೆ! ನಿಮ್ಮ ಮೊಟ್ಟೆಗಳನ್ನು ಬೇರ್ಪಡಿಸಿ. ಸ್ವಚ್ಛ, ಒಣ ಬಟ್ಟಲಿನಲ್ಲಿ, ಮೊಟ್ಟೆಯ ಬಿಳಿಭಾಗವನ್ನು 1/2 ಟೀಚಮಚ ಉಪ್ಪಿನೊಂದಿಗೆ ಗಟ್ಟಿಯಾದ ನೊರೆ ಬರುವವರೆಗೆ ಕಡೆಯಿರಿ. ಇದರರ್ಥ ನೀವು ವಿಸ್ಕ್ ಅನ್ನು ಎತ್ತಿದಾಗ, ನೊರೆ ನೇರವಾಗಿ ನಿಲ್ಲುತ್ತದೆ. ಇನ್ನೊಂದು ಬಟ್ಟಲಿನಲ್ಲಿ, ಮೊಟ್ಟೆಯ ಹಳದಿ ಭಾಗವನ್ನು ಲಘುವಾಗಿ ಕಡೆಯಿರಿ. ಮೊಟ್ಟೆಯ ಹಳದಿ ಭಾಗವನ್ನು ಗಟ್ಟಿಯಾದ ಮೊಟ್ಟೆಯ ಬಿಳಿಭಾಗಕ್ಕೆ ನಿಧಾನವಾಗಿ ಸೇರಿಸಿ. ನಂತರ, 1/2 ಕಪ್ ಮೈದಾ ಹಿಟ್ಟನ್ನು ನಿಧಾನವಾಗಿ ಸೇರಿಸಿ, ಚೆನ್ನಾಗಿ ಮಿಶ್ರಣವಾಗುವವರೆಗೆ. ಹೆಚ್ಚು ಮಿಶ್ರಣ ಮಾಡಬೇಡಿ, ಇಲ್ಲದಿದ್ದರೆ ಬಿಳಿಭಾಗದ ನೊರೆ ಕಡಿಮೆಯಾಗುತ್ತದೆ. ಈ ಹಿಟ್ಟು ಹಗುರವಾಗಿ ಮತ್ತು ಗಾಳಿಯಾಡಿಸುವಂತೆ ಇರಬೇಕು, ಮೋಡದಂತೆ.', 'ಒಂದು ಆಳವಾದ ಬಾಣಲೆ ಅಥವಾ ಡಚ್ ಓವನ್‌ನಲ್ಲಿ ತರಕಾರಿ ಎಣ್ಣೆಯನ್ನು ಮಧ್ಯಮ-ಹೆಚ್ಚಿನ ಉರಿಯಲ್ಲಿ ಸುಮಾರು 350-375°F (175-190°C) ತಾಪಮಾನಕ್ಕೆ ಬಿಸಿ ಮಾಡಿ. ಮೇಲ್ಮೈಯಲ್ಲಿ ಸಣ್ಣ ಅಲೆಗಳು ಕಾಣಿಸುತ್ತವೆ. ಎಣ್ಣೆ ಬಿಸಿಯಾಗುತ್ತಿರುವಾಗ, ಪ್ರತಿ ತುಂಬಿದ ಮೆಣಸಿನಕಾಯಿಗೆ ಸ್ವಲ್ಪ ಹೆಚ್ಚುವರಿ ಮೈದಾ ಹಿಟ್ಟನ್ನು ಲಘುವಾಗಿ ಲೇಪಿಸಿ. ಇದು ಮೊಟ್ಟೆಯ ಹಿಟ್ಟು ಅಂಟಿಕೊಳ್ಳಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.', 'ಪ್ರತಿ ಹಿಟ್ಟು ಲೇಪಿತ ಮೆಣಸಿನಕಾಯಿಯನ್ನು ಮೊಟ್ಟೆಯ ಹಿಟ್ಟಿನಲ್ಲಿ ಎಚ್ಚರಿಕೆಯಿಂದ ಅದ್ದಿ, ಅದು ಸಂಪೂರ್ಣವಾಗಿ ಲೇಪಿತವಾಗಿದೆ ಎಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ. ಹಿಟ್ಟು ಲೇಪಿತ ಮೆಣಸಿನಕಾಯಿಯನ್ನು ಬಿಸಿ ಎಣ್ಣೆಗೆ ನಿಧಾನವಾಗಿ ಹಾಕಿ. ನಿಮ್ಮ ಬಾಣಲೆಯ ಗಾತ್ರಕ್ಕೆ ಅನುಗುಣವಾಗಿ ಒಂದರಿಂದ ಎರಡು ಮೆಣಸಿನಕಾಯಿಗಳನ್ನು ಒಂದೇ ಬಾರಿಗೆ ಕರಿಯಿರಿ, ಪ್ರತಿ ಬದಿಗೆ ಸುಮಾರು 3-4 ನಿಮಿಷಗಳ ಕಾಲ, ಅವು ಸುಂದರವಾದ ಚಿನ್ನದ ಕಂದು ಬಣ್ಣಕ್ಕೆ ತಿರುಗಿ ಉಬ್ಬುವವರೆಗೆ. ಅಡುಗೆಮನೆಯಲ್ಲಿ ಅದ್ಭುತ ಪರಿಮಳ ತುಂಬಿರುತ್ತದೆ.', 'ಚಿಲೀಸ್ ರೆಲೆನೋಸ್ ಅನ್ನು ತಟ್ಟೆಗೆ ತೆಗೆದು, ಹೆಚ್ಚುವರಿ ಎಣ್ಣೆಯನ್ನು ಬಸಿದು, ಬಿಸಿ ಟೊಮೆಟೊ ಸಾಸ್‌ನೊಂದಿಗೆ ತಕ್ಷಣವೇ ಬಡಿಸಿ. ಸ್ವಲ್ಪ ತಾಜಾ ಕೊತ್ತಂಬರಿ ಸೊಪ್ಪು ಸೇರಿಸಿದರೆ ಇನ್ನಷ್ಟು ರುಚಿ. ನಿಮ್ಮ ಶ್ರಮದ ಫಲವನ್ನು ಆನಂದಿಸಿ!'],
                seoTitle: 'ರುಚಿಕರ ಚಿಲೀಸ್ ರೆಲೆನೋಸ್ ರೆಸಿಪಿ: ಅಜ್ಜಿ ಪಾಕವಿಧಾನ ಕನ್ನಡದಲ್ಲಿ',
                seoDescription: 'ಮೆಕ್ಸಿಕನ್ ಅಜ್ಜಿ ಪಾಕವಿಧಾನದಂತೆ ಮನೆಯಲ್ಲೇ ರುಚಿಕರ ಚಿಲೀಸ್ ರೆಲೆನೋಸ್ ತಯಾರಿಸಿ. ಈ ಸುಲಭ ಚಿಲೀಸ್ ರೆಲೆನೋಸ್ ರೆಸಿಪಿ ಕನ್ನಡದಲ್ಲಿ ಹಂತ ಹಂತವಾಗಿ ಮಾರ್ಗದರ್ಶನ ನೀಡುತ್ತದೆ.',
                seoKeywords: 'ಚಿಲೀಸ್ ರೆಲೆನೋಸ್ ರೆಸಿಪಿ ಕನ್ನಡದಲ್ಲಿ, ಮೆಕ್ಸಿಕನ್ ಚಿಲೀಸ್ ರೆಲೆನೋಸ್, ಸ್ಟಫ್ಡ್ ಮೆಣಸಿನಕಾಯಿ, ಚೀಸ್ ಸ್ಟಫ್ಡ್ ಚಿಲ್ಲಿ, ಸುಲಭ ಚಿಲೀಸ್ ರೆಲೆನೋಸ್'
            },
            'zh-CN': {
                title: '墨西哥酿辣椒',
                description: '墨西哥酿辣椒，这道菜承载着满满的回忆、挑战与胜利。我是在瓦哈卡奶奶的小厨房里学会做的，空气中总是弥漫着烤辣椒和炖番茄的香气。奶奶教我耐心是第一要素，还有那些书上找不到的小秘诀，比如烤好的辣椒要\'发汗\'才好剥皮，以及如何做出轻盈如云的鸡蛋面糊。这道菜是爱的劳动，每一口都值得细细品味。',
                ingredients: [{ item: '帕布拉诺辣椒', amount: '4个大号' }, { item: '瓦哈卡奶酪（或蒙特雷杰克奶酪）', amount: '8盎司，切成1/2英寸宽的条状' }, { item: '中筋面粉', amount: '1/2杯，另备少许用于撒粉' }, { item: '大鸡蛋', amount: '4个，蛋清蛋黄分离' }, { item: '盐', amount: '1/2茶匙，另备少许调味' }, { item: '植物油', amount: '3-4杯，用于油炸' }, { item: '番茄酱（自制或优质市售）', amount: '2杯，加热备用' }],
                instructions: ['首先，烤制这些漂亮的帕布拉诺辣椒。你可以在燃气灶明火上、烤箱肉鸡下或热煎饼炉上操作。频繁翻动，直到辣椒皮完全烤焦起泡，要烤得越黑越好。这大约需要8-10分钟，空气中会弥漫着美妙的烟熏香气。', '立即将烤好的热辣椒放入塑料袋中，或用保鲜膜紧紧盖住碗。让它们\'发汗\'约15-20分钟。蒸汽有助于使表皮松弛，这一步千万不能省略，它能让剥皮变得轻而易举。', '待辣椒冷却到可以处理时，小心地剥去辣椒皮，应该很容易剥落。在每个辣椒的一侧纵向切开一个小口，注意不要完全切断。轻轻去除籽和筋。有些人会冲洗，但我更喜欢刮掉，以保持风味。动作要轻柔，避免撕破辣椒。', '将奶酪条塞入每个辣椒中。不要塞得太满，否则油炸时可能会爆裂。塞到辣椒饱满即可。如果切口太宽，可以用牙签固定，但通常面糊会将其密封。', '现在来做面糊！将鸡蛋的蛋清和蛋黄分离。在一个干净干燥的碗中，将蛋清和1/2茶匙盐打发至硬性发泡，即提起打蛋器时，尖峰能直立不倒。在另一个碗中，轻轻打散蛋黄。将蛋黄轻轻拌入打发好的蛋清中。然后，小心地拌入1/2杯面粉，直到刚好混合。不要过度搅拌，否则会使蛋清消泡。这种面糊应该轻盈蓬松，像云朵一样。', '在深平底锅或荷兰锅中用中高火加热植物油，直至达到约350-375°F (175-190°C)。你会看到油面出现细微的波纹。在油加热的同时，在每个酿好的辣椒上轻轻撒一层薄薄的面粉，这有助于鸡蛋面糊附着。', '小心地将每个撒粉的辣椒浸入鸡蛋面糊中，确保完全裹匀。轻轻地将裹好面糊的辣椒放入热油中。根据锅的大小，一次炸一到两个，每面炸约3-4分钟，直到它们炸至金黄酥脆，蓬松饱满。厨房里会弥漫着诱人的香气。', '用夹子或漏勺取出炸好的辣椒，放在铺有厨房纸巾的冷却架上沥干多余的油。立即搭配温热的番茄酱享用，将酱汁慷慨地淋在上面。撒上少许新鲜香菜也很好。尽情享受你的劳动成果吧！'],
                seoTitle: '墨西哥酿辣椒做法：奶奶的秘诀，在家也能做出地道风味',
                seoDescription: '跟着奶奶的独家秘诀，学习正宗墨西哥酿辣椒做法。从烤辣椒到蓬松面糊，每一步都详细讲解，让你在家也能品尝到瓦哈卡风味。',
                seoKeywords: '墨西哥酿辣椒做法, 酿辣椒食谱, 帕布拉诺辣椒, 瓦哈卡美食, 墨西哥菜谱, 自制酿辣椒'
            },
            ms: {
                title: 'Cili Rellenos',
                description: 'Oh, Cili Rellenos. Hidangan ini lebih dari sekadar makanan; ia adalah kenangan, cabaran, dan kejayaan. Saya mula belajar membuatnya dari Abuela Elena di dapur kecilnya di Oaxaca. Udara sentiasa pekat dengan bau cili panggang dan tomato yang direneh. Abuela mengajar saya rahsia adunan telur yang gebu dan cara mengupas cili dengan mudah. Ia bukan hidangan segera, tetapi hasil kerja keras yang penuh kasih sayang, menjanjikan setiap gigitan keju lembut yang disalut cili akan berbaloi.',
                ingredients: [{ item: 'Cili Poblano', amount: '4 biji besar' }, { item: 'Keju Oaxaca (atau Monterey Jack)', amount: '8 oz, dipotong jalur 1/2 inci' }, { item: 'Tepung serbaguna', amount: '1/2 cawan, tambah sedikit untuk menyalut' }, { item: 'Telur besar', amount: '4 biji, diasingkan kuning dan putihnya' }, { item: 'Garam', amount: '1/2 sudu teh, tambah secukup rasa' }, { item: 'Minyak sayuran', amount: '3-4 cawan, untuk menggoreng' }, { item: 'Sos tomato (buatan sendiri atau beli yang berkualiti)', amount: '2 cawan, dipanaskan untuk dihidang' }],
                instructions: ['Mula-mula, panggang cili poblano sehingga kulitnya hangus dan melepuh sepenuhnya. Anda boleh lakukan ini di atas api dapur gas, bawah broiler, atau di atas kuali panas. Pastikan ia hitam sepenuhnya, ambil masa kira-kira 8-10 minit. Baunya pasti harum dan sedikit berasap.', 'Segera pindahkan cili yang panas dan hangus ke dalam beg plastik atau mangkuk yang ditutup rapat dengan pembalut plastik. Biarkan ia \'berpeluh\' selama 15-20 minit. Wap ini membantu melonggarkan kulit. Jangan langkau langkah ini, ia sangat membantu untuk mengupas.', 'Setelah cukup sejuk untuk dipegang, kupas kulit cili dengan berhati-hati. Ia sepatutnya mudah tertanggal. Buat hirisan kecil memanjang di satu sisi setiap cili, berhati-hati agar tidak terpotong sepenuhnya. Buang biji dan uratnya dengan lembut. Jangan bilas, cukup kikis untuk mengekalkan rasa. Berhati-hati agar cili tidak koyak.', 'Sumbat setiap cili dengan jalur keju. Jangan sumbat terlalu banyak, nanti pecah semasa menggoreng. Cukup sekadar ia kelihatan gebu. Jika hirisan terlalu lebar, boleh guna pencungkil gigi untuk menahannya, tetapi biasanya adunan akan menutupnya.', 'Sekarang untuk adunan! Asingkan telur. Dalam mangkuk bersih dan kering, pukul putih telur dengan 1/2 sudu teh garam sehingga kental dan membentuk puncak teguh. Dalam mangkuk lain, pukul kuning telur sedikit. Lipat kuning telur perlahan-lahan ke dalam putih telur yang kental. Kemudian, masukkan 1/2 cawan tepung dengan berhati-hati sehingga sebati. Jangan terlebih gaul, nanti putih telur mengempis. Adunan ini sepatutnya ringan dan gebu seperti awan.', 'Panaskan minyak sayuran dalam kuali dalam atau periuk Belanda di atas api sederhana tinggi sehingga mencapai suhu kira-kira 350-375°F (175-190°C). Anda akan nampak riak kecil di permukaan minyak. Semasa minyak panas, salutkan setiap cili yang telah disumbat dengan sedikit tepung tambahan. Ini membantu adunan telur melekat.', 'Celupkan setiap cili yang telah disalut tepung ke dalam adunan telur, pastikan ia disalut sepenuhnya. Masukkan cili yang telah disalut ke dalam minyak panas dengan perlahan. Goreng satu atau dua biji pada satu masa, bergantung pada saiz kuali anda, selama kira-kira 3-4 minit setiap sisi, sehingga ia berwarna perang keemasan yang cantik dan mengembang. Dapur anda akan berbau sangat harum.', 'Menggunakan penyepit atau senduk berlubang, angkat cili yang telah digoreng dan letakkan di atas rak dawai yang diletakkan di atas tuala kertas untuk menapis lebihan minyak. Hidangkan segera dengan sos tomato suam yang disenduk banyak di atasnya. Sedikit taburan daun ketumbar segar juga sangat sesuai. Nikmati hasil titik peluh anda!'],
                seoTitle: 'Resepi Cili Rellenos Asli: Rahsia Abuela Elena',
                seoDescription: 'Pelajari resepi Cili Rellenos asli dari Abuela Elena. Cili poblano bakar disumbat keju, disalut adunan telur gebu, digoreng sempurna. Nikmati hidangan istimewa ini!',
                seoKeywords: 'Resepi Cili Rellenos, Cili Poblano, Keju Oaxaca, Masakan Mexico, Resepi tradisional, Hidangan istimewa'

            }
        }
    }
,
    {
        id: '2026-05-24',
        publishedAt: '2026-05-24T03:37:00.000Z',
        title: 'Mee Hokkien Phuket (Phuket Stir-Fried Noodles)',
        description: 'Oh, Mee Hokkien Phuket. This dish, it\'s not just food; it\'s a memory, a feeling, a whole trip back to the bustling streets of Phuket Town. I first stumbled upon it years ago, sweating through a humid afternoon, drawn in by the incredible aroma wafting from a tiny, unassuming stall. The old woman running it, her hands a blur of motion, barely glanced up as I ordered. What arrived was a revelation: thick, chewy yellow noodles, glistening with a dark, savory sauce, studded with seafood and pork. I was hooked. I spent the next few days trying to replicate it, failing miserably, until I finally swallowed my pride and asked the stall owner for her \'secrets\'. She just laughed, pointed to a few key ingredients, and shooed me away with a smile. That\'s how it always starts, isn\'t it? A simple taste, then an obsession.  My early attempts were, frankly, a disaster. The noodles would clump into a sticky mess, the sauce was either too sweet or too salty, and the seafood always ended up rubbery. The biggest mistake? Not understanding the *wok hei*, that \'breath of the wok\' that gives stir-fries their magic. You can\'t just gently sauté; you need high heat, quick movements, and a fearless attitude. Another common pitfall is using the wrong noodles. You absolutely need fresh, thick yellow Hokkien noodles, not the thin, dried kind. And don\'t even think about skimping on the pork belly or the crispy pork crackling – they\'re non-negotiable for that authentic richness. Fresh prawns are a must; frozen just won\'t cut it here. This dish demands respect for its ingredients.  Over the years, I\'ve refined my technique, learned to \'listen\' to the sizzle, and trust my nose. My personal shortcut? Always have your mise en place ready. Seriously, everything chopped, measured, and within arm\'s reach. This isn\'t a dish where you can leisurely chop an onion mid-cook. It moves fast! And don\'t be afraid to let the noodles get a little char on them in the wok; that\'s where the flavor really develops. It\'s a hearty, satisfying meal, perfect for a cool evening or when you\'re just craving something deeply comforting and utterly delicious. Trust me, once you nail this, you\'ll feel like a true Phuket culinary master.',
        image: '/recipe-images/2026-05-24.jpg',
        prepTime: '25 min',
        cookTime: '45 min',
        difficulty: 'Medium',
        servings: 4,
        ingredients: [
            { item: 'Fresh Hokkien noodles', amount: '500g' },
            { item: 'Pork belly, thinly sliced', amount: '150g' },
            { item: 'Large prawns, peeled and deveined', amount: '200g' },
            { item: 'Fish cakes, sliced', amount: '100g' },
            { item: 'Squid, cleaned and sliced', amount: '100g' },
            { item: 'Chinese kale (gai lan), chopped', amount: '1 cup' },
            { item: 'Bean sprouts', amount: '1 cup' },
            { item: 'Garlic, minced', amount: '4 cloves' },
            { item: 'Shallots, thinly sliced', amount: '2' },
            { item: 'Eggs', amount: '2' },
            { item: 'Dark soy sauce', amount: '2 tbsp' },
            { item: 'Light soy sauce', amount: '1 tbsp' },
            { item: 'Oyster sauce', amount: '2 tbsp' },
            { item: 'Fish sauce', amount: '1 tsp' },
            { item: 'Sugar', amount: '1 tsp' },
            { item: 'White pepper', amount: '1/2 tsp' },
            { item: 'Chicken stock or water', amount: '1/2 cup' },
            { item: 'Vegetable oil', amount: '3 tbsp' },
            { item: 'Crispy pork crackling (optional, for garnish)', amount: '1/4 cup' },
            { item: 'Fried shallots (for garnish)', amount: '1 tbsp' },
            { item: 'Lime wedges (for serving)', amount: '2' }
        ],
        instructions: [
            'First things first, get your sauce ready. In a small bowl, whisk together the dark soy sauce, light soy sauce, oyster sauce, fish sauce, sugar, and white pepper. Give it a good stir until the sugar dissolves. This is your flavor base, so make sure it\'s well combined. Set it aside; you\'ll need it fast later.',
            'Now, prep your noodles. If they\'re a bit stiff, give them a quick rinse under hot water to loosen them up, then drain them really well. You don\'t want soggy noodles. Pat them dry with a clean towel. This helps them fry better and prevents sticking. Trust me on this, it makes a difference.',
            'Heat your wok or a large, heavy-bottomed pan over high heat until it\'s smoking. Add 2 tablespoons of vegetable oil. When you see a shimmer and a wisp of smoke, toss in the minced garlic and sliced shallots. Stir-fry them quickly, about 30 seconds, until they\'re fragrant and just starting to turn golden. Don\'t let them burn; burnt garlic is a sad, bitter thing.',
            'Push the aromatics to one side of the wok. Add the sliced pork belly to the empty side and stir-fry until it\'s browned and rendered some of its fat, about 2-3 minutes. You want those edges to get a little crispy. Then, add the prawns, squid, and fish cakes. Stir-fry for another 1-2 minutes until the seafood is just cooked through and turns opaque. Don\'t overcook it, or it\'ll be tough.',
            'Make a space in the center of the wok again. Crack in the two eggs. Let them set for about 30 seconds, then scramble them roughly with your spatula. Once they\'re mostly cooked, mix them into the rest of the ingredients in the wok. Everything should be smelling absolutely incredible by now.',
            'Add the prepared Hokkien noodles to the wok. Pour in your pre-mixed sauce and the chicken stock. Toss everything vigorously, using tongs or two spatulas, to coat the noodles evenly. Keep the heat high! You want to hear that satisfying sizzle and see the noodles absorbing all that beautiful dark sauce. Let them fry for 3-4 minutes, stirring constantly, allowing some strands to get a nice char.',
            'Finally, toss in the Chinese kale and bean sprouts. Continue to stir-fry for another 1-2 minutes, just until the vegetables are tender-crisp and bright green. You don\'t want them limp and sad. Give it a final taste; adjust with a tiny splash more fish sauce or a pinch of sugar if needed. It should be savory, a little sweet, and deeply umami.',
            'Serve immediately, piled high on plates. Garnish generously with crispy pork crackling and fried shallots. A squeeze of fresh lime juice over the top is essential; it brightens everything up beautifully. Enjoy your taste of Phuket!',
            'Clean up your wok quickly while it\'s still warm. A little hot water and a scrub brush usually do the trick. Don\'t let it sit and get crusty!'
        ],
        tags: ['Thai', 'Noodles', 'Stir-fry', 'Phuket', 'Seafood', 'Pork'],
        seoTitle: 'Authentic Phuket Hokkien Noodles Recipe: Taste Thailand!',
        seoDescription: 'Craving real Thai flavors? Our authentic Phuket Hokkien noodles recipe brings the island\'s best to your kitchen. Rich, savory, and utterly satisfying.',
        seoKeywords: 'authentic Phuket Hokkien noodles recipe, Mee Hokkien, Thai stir-fry, Phuket food, noodle dish',
        translations: {
            hi: {
                title: 'मी होक्कियन फुकेत',
                description: 'फुकेत की हलचल भरी गलियों से निकला यह \'मी होक्कियन फुकेत\' सिर्फ एक डिश नहीं, बल्कि एक यादगार अनुभव है। मोटी, चबाने वाली पीली नूडल्स, गहरे, स्वादिष्ट सॉस में लिपटी, सीफूड और पोर्क के टुकड़ों से सजी, यह स्वाद का एक ऐसा जादू है जो आपको थाईलैंड ले जाता है। \'वोक हेई\' की कला और ताज़ी सामग्री का सही चुनाव इसे खास बनाता है। हर बार जब मैं इसे बनाती हूँ, तो मुझे फुकेत की वो पुरानी दुकान और वहाँ की खुशबू याद आ जाती है। यह दिल को सुकून देने वाला और बेहद स्वादिष्ट व्यंजन है।',
                ingredients: [{ item: 'ताज़े होक्कियन नूडल्स', amount: '500 ग्राम' }, { item: 'पोर्क बेली, पतले कटे हुए', amount: '150 ग्राम' }, { item: 'बड़ी झींगे, छिले और डी-वेन किए हुए', amount: '200 ग्राम' }, { item: 'फिश केक, कटे हुए', amount: '100 ग्राम' }, { item: 'स्क्विड, साफ और कटे हुए', amount: '100 ग्राम' }, { item: 'चाइनीज़ केल (गाई लैन), कटे हुए', amount: '1 कप' }, { item: 'बीन स्प्राउट्स', amount: '1 कप' }, { item: 'लहसुन, बारीक कटा हुआ', amount: '4 कलियाँ' }, { item: 'शैलट्स, पतले कटे हुए', amount: '2' }, { item: 'अंडे', amount: '2' }, { item: 'डार्क सोया सॉस', amount: '2 बड़े चम्मच' }, { item: 'लाइट सोया सॉस', amount: '1 बड़ा चम्मच' }, { item: 'ऑयस्टर सॉस', amount: '2 बड़े चम्मच' }, { item: 'फिश सॉस', amount: '1 छोटा चम्मच' }, { item: 'चीनी', amount: '1 छोटा चम्मच' }, { item: 'सफेद मिर्च पाउडर', amount: '1/2 छोटा चम्मच' }, { item: 'चिकन स्टॉक या पानी', amount: '1/2 कप' }, { item: 'वनस्पति तेल', amount: '3 बड़े चम्मच' }, { item: 'क्रिस्पी पोर्क क्रैकलिंग (वैकल्पिक, गार्निश के लिए)', amount: '1/4 कप' }, { item: 'तले हुए शैलट्स (गार्निश के लिए)', amount: '1 बड़ा चम्मच' }, { item: 'नींबू के टुकड़े (परोसने के लिए)', amount: '2' }],
                instructions: ['सबसे पहले, अपनी सॉस तैयार कर लें। एक छोटे कटोरे में डार्क सोया सॉस, लाइट सोया सॉस, ऑयस्टर सॉस, फिश सॉस, चीनी और सफेद मिर्च पाउडर को एक साथ फेंट लें। चीनी घुलने तक अच्छी तरह मिलाएँ। यह आपका स्वाद का आधार है, इसलिए सुनिश्चित करें कि यह अच्छी तरह से मिल गया हो। इसे एक तरफ रख दें; बाद में इसकी जल्दी ज़रूरत पड़ेगी।', 'अब, अपने नूडल्स तैयार करें। यदि वे थोड़े सख्त हैं, तो उन्हें ढीला करने के लिए गर्म पानी से जल्दी से धो लें, फिर उन्हें अच्छी तरह से छान लें। आप गीले नूडल्स नहीं चाहेंगे। उन्हें एक साफ कपड़े से पोंछकर सुखा लें। यह उन्हें बेहतर ढंग से भूनने में मदद करता है और चिपकने से बचाता है। मुझ पर विश्वास करें, इससे फर्क पड़ता है।', 'अपनी कड़ाही या एक बड़े, भारी तले वाले पैन को तेज़ आंच पर तब तक गरम करें जब तक उसमें से धुआँ न निकलने लगे। 2 बड़े चम्मच वनस्पति तेल डालें। जब आपको चमक और धुएँ का हल्का निशान दिखे, तो बारीक कटा लहसुन और कटे हुए शैलट्स डालें। उन्हें जल्दी से, लगभग 30 सेकंड तक भूनें, जब तक वे सुगंधित न हो जाएं और हल्के सुनहरे होने लगें। उन्हें जलने न दें; जला हुआ लहसुन कड़वा होता है।', 'खुशबूदार सामग्री को कड़ाही के एक तरफ कर दें। खाली जगह में कटे हुए पोर्क बेली डालें और तब तक भूनें जब तक वह भूरा न हो जाए और उसका कुछ फैट निकल न जाए, लगभग 2-3 मिनट। आप चाहते हैं कि किनारे थोड़े कुरकुरे हो जाएं। फिर, झींगे, स्क्विड और फिश केक डालें। 1-2 मिनट और भूनें जब तक सीफूड पक न जाए और अपारदर्शी न हो जाए। इसे ज़्यादा न पकाएं, वरना यह सख्त हो जाएगा।', 'कड़ाही के बीच में फिर से जगह बनाएं। दो अंडे फोड़ें। उन्हें लगभग 30 सेकंड तक जमने दें, फिर स्पैचुला से उन्हें मोटा-मोटा स्क्रैम्बल करें। एक बार जब वे ज़्यादातर पक जाएं, तो उन्हें कड़ाही में बाकी सामग्री के साथ मिला दें। अब तक सब कुछ अविश्वसनीय रूप से सुगंधित हो जाना चाहिए।', 'तैयार होक्कियन नूडल्स कड़ाही में डालें। अपनी पहले से मिली हुई सॉस और चिकन स्टॉक डालें। सब कुछ ज़ोरदार तरीके से, चिमटे या दो स्पैचुला का उपयोग करके, नूडल्स को समान रूप से कोट करने के लिए उछालें। आंच तेज़ रखें! आप उस संतोषजनक सिज़ल को सुनना चाहेंगे और नूडल्स को उस खूबसूरत डार्क सॉस को सोखते हुए देखना चाहेंगे। उन्हें 3-4 मिनट तक भूनें, लगातार हिलाते रहें, जिससे कुछ तार हल्के से जल जाएं।', 'अंत में, चाइनीज़ केल और बीन स्प्राउट्स डालें। 1-2 मिनट और भूनते रहें, जब तक सब्जियां नरम-कुरकुरी और चमकीले हरे रंग की न हो जाएं। आप उन्हें मुरझाया हुआ और बेजान नहीं चाहेंगे। आखिरी बार चखें; यदि आवश्यक हो तो थोड़ा और फिश सॉस या एक चुटकी चीनी डालकर स्वाद समायोजित करें। यह नमकीन, थोड़ा मीठा और गहरा उमामी होना चाहिए।', 'तुरंत परोसें, प्लेटों पर ढेर करके। क्रिस्पी पोर्क क्रैकलिंग और तले हुए शैलट्स से उदारतापूर्वक गार्निश करें। ऊपर से ताज़े नींबू का रस निचोड़ना ज़रूरी है; यह सब कुछ खूबसूरती से ताज़ा कर देता है। फुकेत के अपने स्वाद का आनंद लें!', 'अपनी कड़ाही को गरम रहते ही जल्दी से साफ कर लें। थोड़ा गर्म पानी और एक स्क्रब ब्रश आमतौर पर काम कर जाते हैं। इसे सूखने और पपड़ी जमने न दें!'],
                seoTitle: 'स्वादिष्ट मी होक्कियन फुकेत रेसिपी: थाई नूडल्स का जादू',
                seoDescription: 'फुकेत की गलियों से सीधे आपकी रसोई में! इस प्रामाणिक मी होक्कियन फुकेत रेसिपी से घर पर ही थाईलैंड के स्वाद का अनुभव करें। झटपट और स्वादिष्ट नूडल्स बनाने की विधि।',
                seoKeywords: 'मी होक्कियन फुकेत रेसिपी, फुकेत नूडल्स, थाई स्टिर-फ्राइड नूडल्स, सीफूड नूडल्स, होक्कियन नूडल्स, थाई खाना'
            },
            bn: {
                title: 'মি হকিয়েন ফুকেট',
                description: 'ফুকেট শহরের ব্যস্ত রাস্তায় প্রথমবার এই মি হকিয়েন নুডুলসের স্বাদ পেয়েছিলাম। সেই ঘর্মাক্ত দুপুরে এক ছোট্ট দোকানের অবিশ্বাস্য গন্ধে আমি যেন হারিয়ে গিয়েছিলাম। মোটা, চিবানো হলুদ নুডুলস, গাঢ় সস আর সি-ফুড ও পর্কের মিশেল – এক কথায় অসাধারণ! সেই স্বাদ আজও মুখে লেগে আছে। বহু চেষ্টা আর ভুল করার পর অবশেষে সেই দোকানের মালিকের কাছ থেকে কিছু গোপন টিপস জেনেছিলাম। এই রেসিপিটা শুধু খাবার নয়, এটা ফুকেটের এক টুকরো স্মৃতি, যা আপনার রান্নাঘরেও নিয়ে আসবে সেই জাদু।',
                ingredients: [{ item: 'তাজা হকিয়েন নুডুলস', amount: '৫০০ গ্রাম' }, { item: 'পাতলা করে কাটা পর্ক বেলি', amount: '১৫০ গ্রাম' }, { item: 'খোসা ছাড়ানো ও শিরা পরিষ্কার করা বড় চিংড়ি', amount: '২০০ গ্রাম' }, { item: 'স্লাইস করা ফিশ কেক', amount: '১০০ গ্রাম' }, { item: 'পরিষ্কার করে স্লাইস করা স্কুইড', amount: '১০০ গ্রাম' }, { item: 'কুচি করা চাইনিজ কেল (গাই ল্যান)', amount: '১ কাপ' }, { item: 'বিন স্প্রাউটস', amount: '১ কাপ' }, { item: 'মিহি করে কুচি করা রসুন', amount: '৪ কোয়া' }, { item: 'পাতলা করে স্লাইস করা শ্যালট', amount: '২ টি' }, { item: 'ডিম', amount: '২ টি' }, { item: 'ডার্ক সয়া সস', amount: '২ টেবিল চামচ' }, { item: 'লাইট সয়া সস', amount: '১ টেবিল চামচ' }, { item: 'ওয়েস্টার সস', amount: '২ টেবিল চামচ' }, { item: 'ফিশ সস', amount: '১ চা চামচ' }, { item: 'চিনি', amount: '১ চা চামচ' }, { item: 'সাদা গোলমরিচ', amount: '১/২ চা চামচ' }, { item: 'চিকেন স্টক বা জল', amount: '১/২ কাপ' }, { item: 'ভেজিটেবল অয়েল', amount: '৩ টেবিল চামচ' }, { item: 'মুচমুচে পর্ক ক্র্যাকলিং (ঐচ্ছিক, সাজানোর জন্য)', amount: '১/৪ কাপ' }, { item: 'ভাজা শ্যালট (সাজানোর জন্য)', amount: '১ টেবিল চামচ' }, { item: 'লেবুর ফালি (পরিবেশনের জন্য)', amount: '২ টি' }],
                instructions: ['প্রথমে সসটা তৈরি করে নিন। একটি ছোট বাটিতে ডার্ক সয়া সস, লাইট সয়া সস, ওয়েস্টার সস, ফিশ সস, চিনি আর সাদা গোলমরিচ একসাথে মিশিয়ে নিন। চিনি গলে যাওয়া পর্যন্ত ভালো করে নাড়ুন। এটা আপনার খাবারের মূল স্বাদ, তাই ভালোভাবে মেশানো জরুরি। একপাশে রেখে দিন, পরে দ্রুত কাজে লাগবে।', 'এবার নুডুলসগুলো প্রস্তুত করুন। যদি নুডুলসগুলো একটু শক্ত থাকে, তাহলে গরম জলে হালকা ধুয়ে নরম করে নিন, তারপর খুব ভালো করে জল ঝরিয়ে নিন। ভেজা নুডুলস চাই না। একটি পরিষ্কার কাপড় দিয়ে শুকিয়ে নিন। এতে নুডুলস ভাজতে সুবিধা হবে এবং লেগে যাবে না। বিশ্বাস করুন, এটা খুব গুরুত্বপূর্ণ।', 'একটি কড়াই বা বড় ভারী তলার প্যান বেশি আঁচে গরম করুন যতক্ষণ না ধোঁয়া উঠছে। ২ টেবিল চামচ ভেজিটেবল অয়েল দিন। তেল গরম হয়ে ধোঁয়া উঠলে কুচি করা রসুন আর স্লাইস করা শ্যালট দিয়ে দিন। ৩০ সেকেন্ডের মতো দ্রুত ভেজে নিন, যতক্ষণ না সুগন্ধ বের হয় আর হালকা সোনালি রঙ ধরে। পুড়ে যেতে দেবেন না, পোড়া রসুনের স্বাদ তেতো হয়।', 'অ্যারোমেটিক্সগুলো কড়াইয়ের একপাশে সরিয়ে দিন। খালি জায়গায় পাতলা করে কাটা পর্ক বেলি দিয়ে ২-৩ মিনিট ভেজে নিন, যতক্ষণ না বাদামী হয়ে চর্বি বের হয়। কিনারাগুলো যেন একটু মুচমুচে হয়। এরপর চিংড়ি, স্কুইড আর ফিশ কেক দিয়ে দিন। আরও ১-২ মিনিট ভেজে নিন, যতক্ষণ না সি-ফুডগুলো সেদ্ধ হয়ে অস্বচ্ছ হয়ে যায়। বেশি ভাজবেন না, তাহলে শক্ত হয়ে যাবে।', 'কড়াইয়ের মাঝখানে আবার জায়গা করে নিন। দুটো ডিম ভেঙে দিন। ৩০ সেকেন্ডের মতো সেট হতে দিন, তারপর স্প্যাটুলা দিয়ে হালকা করে ঝুরি করে নিন। ডিমগুলো প্রায় সেদ্ধ হয়ে গেলে কড়াইয়ের বাকি উপকরণের সাথে মিশিয়ে নিন। এই মুহূর্তে সবকিছু থেকে দারুণ সুগন্ধ বের হওয়া উচিত।', 'প্রস্তুত করা হকিয়েন নুডুলস কড়াইয়ে দিন। আগে থেকে তৈরি করে রাখা সস আর চিকেন স্টক ঢেলে দিন। চিমটা বা দুটো স্প্যাটুলা ব্যবহার করে সবকিছু দ্রুত মিশিয়ে নিন, যাতে নুডুলসগুলো সসে ভালোভাবে মাখানো হয়। আঁচ বেশি রাখবেন! নুডুলসগুলো সুন্দর গাঢ় সস শুষে নেবে আর সুস্বাদু ছ্যাঁক ছ্যাঁক শব্দ হবে। ৩-৪ মিনিট ধরে নাড়াচাড়া করে ভাজুন, কিছু নুডুলসে হালকা পোড়া দাগ লাগতে দিন, এতে স্বাদ আরও বাড়বে।', 'সবশেষে চাইনিজ কেল আর বিন স্প্রাউটস দিয়ে দিন। আরও ১-২ মিনিট ভেজে নিন, যতক্ষণ না সবজিগুলো নরম-মুচমুচে আর উজ্জ্বল সবুজ থাকে। নরম হয়ে নেতিয়ে যেতে দেবেন না। একবার চেখে দেখুন; প্রয়োজন হলে সামান্য ফিশ সস বা এক চিমটি চিনি যোগ করতে পারেন। স্বাদটা নোনতা, একটু মিষ্টি আর গভীর উমামি হওয়া উচিত।', 'তৎক্ষণাৎ গরম গরম প্লেটে পরিবেশন করুন। উপরে মুচমুচে পর্ক ক্র্যাকলিং আর ভাজা শ্যালট ছড়িয়ে দিন। পরিবেশনের সময় এক ফালি লেবুর রস চিপে দেওয়াটা জরুরি; এতে খাবারের স্বাদ আরও উজ্জ্বল হবে। ফুকেটের এই স্বাদ উপভোগ করুন!', 'কড়াই গরম থাকা অবস্থাতেই দ্রুত পরিষ্কার করে নিন। সামান্য গরম জল আর একটি স্ক্রাব ব্রাশ দিয়ে সাধারণত কাজ হয়ে যায়। কড়াই যেন বসে গিয়ে শক্ত না হয়ে যায়!'],
                seoTitle: 'মি হকিয়েন ফুকেট রেসিপি: থাই স্টাইলের নুডুলস তৈরির সহজ পদ্ধতি',
                seoDescription: 'থাইল্যান্ডের ফুকেট শহরের বিখ্যাত মি হকিয়েন ফুকেট রেসিপি এখন আপনার রান্নাঘরে। তাজা নুডুলস, সি-ফুড ও পর্কের এই সুস্বাদু পদটি তৈরি করুন আর উপভোগ করুন থাই খাবারের আসল স্বাদ।',
                seoKeywords: 'মি হকিয়েন ফুকেট রেসিপি, ফুকেট নুডুলস, থাই স্টাইলের নুডুলস, সি-ফুড নুডুলস, পর্ক নুডুলস, থাই খাবার'
            },
            mr: {
                title: 'मी होक्कियन फुकेत',
                description: 'फुकेतच्या गजबजलेल्या रस्त्यांवरून आलेली ही \'मी होक्कियन फुकेत\' डिश म्हणजे फक्त एक पदार्थ नाही, तर ती एक आठवण आहे, एक अनुभव आहे. तिथल्या एका छोट्या स्टॉलवर पहिल्यांदा चाखल्यावर मी या चवीच्या प्रेमातच पडलो. जाडसर, चिवट नूडल्स, सीफूड आणि पोर्कसोबत गडद, चवदार सॉसमध्ये घोळलेले... काय अप्रतिम चव! \'वोक हेई\' आणि योग्य नूडल्सचं महत्त्व समजून घेतल्यावर, मी ही रेसिपी घरच्या घरी बनवण्यात यशस्वी झालो. ही डिश म्हणजे एक आरामदायक आणि स्वादिष्ट जेवण आहे, जे तुम्हाला फुकेतची खरी चव देईल.',
                ingredients: [{ item: 'ताजे होक्कियन नूडल्स', amount: '500g' }, { item: 'पोर्क बेली, पातळ कापलेले', amount: '150g' }, { item: 'मोठे कोळंबी, सोललेले आणि साफ केलेले', amount: '200g' }, { item: 'फिश केक, कापलेले', amount: '100g' }, { item: 'स्क्विड, साफ केलेले आणि कापलेले', amount: '100g' }, { item: 'चायनीज केल (गाई लॅन), चिरलेले', amount: '1 कप' }, { item: 'कडधान्याचे मोड', amount: '1 कप' }, { item: 'लसूण, बारीक चिरलेला', amount: '4 पाकळ्या' }, { item: 'शॅलॉट्स, पातळ कापलेले', amount: '2' }, { item: 'अंडी', amount: '2' }, { item: 'डार्क सोया सॉस', amount: '2 टेबलस्पून' }, { item: 'लाईट सोया सॉस', amount: '1 टेबलस्पून' }, { item: 'ऑयस्टर सॉस', amount: '2 टेबलस्पून' }, { item: 'फिश सॉस', amount: '1 चमचा' }, { item: 'साखर', amount: '1 चमचा' }, { item: 'पांढरी मिरी', amount: '1/2 चमचा' }, { item: 'चिकन स्टॉक किंवा पाणी', amount: '1/2 कप' }, { item: 'वनस्पती तेल', amount: '3 टेबलस्पून' }, { item: 'कुरकुरीत पोर्क क्रॅकलींग (ऐच्छिक, सजावटीसाठी)', amount: '1/4 कप' }, { item: 'तळलेले शॅलॉट्स (सजावटीसाठी)', amount: '1 टेबलस्पून' }, { item: 'लिंबाचे काप (सर्व्ह करण्यासाठी)', amount: '2' }],
                instructions: ['सगळ्यात आधी सॉस तयार करून घ्या. एका लहान वाटीत डार्क सोया सॉस, लाईट सोया सॉस, ऑयस्टर सॉस, फिश सॉस, साखर आणि पांढरी मिरी एकत्र फेटून घ्या. साखर विरघळेपर्यंत चांगले ढवळून घ्या. हा तुमचा चवीचा आधार आहे, त्यामुळे तो व्यवस्थित मिसळलेला असावा. बाजूला ठेवा; नंतर तुम्हाला त्याची लवकर गरज पडेल.', 'आता नूडल्स तयार करा. जर ते थोडे कडक असतील, तर गरम पाण्याखाली पटकन धुवून त्यांना मोकळे करा आणि नंतर खूप चांगले निथळून घ्या. तुम्हाला ओलसर नूडल्स नको आहेत. स्वच्छ टॉवेलने त्यांना कोरडे करा. यामुळे ते चांगले तळले जातात आणि चिकटत नाहीत. माझ्यावर विश्वास ठेवा, यामुळे फरक पडतो.', 'तुमचा कढई किंवा जाड बुडाचे मोठे पॅन जास्त आचेवर गरम करा, जोपर्यंत त्यातून धूर येत नाही. 2 टेबलस्पून वनस्पती तेल घाला. जेव्हा तुम्हाला चमक आणि धुराचा हलकासा थर दिसेल, तेव्हा बारीक चिरलेला लसूण आणि कापलेले शॅलॉट्स घाला. त्यांना 30 सेकंदात पटकन परतून घ्या, जोपर्यंत ते सुगंधित होत नाहीत आणि हलके सोनेरी होऊ लागत नाहीत. त्यांना जळू देऊ नका; जळलेला लसूण कडू लागतो.', 'सुगंधित पदार्थ कढईच्या एका बाजूला सरकवा. रिकाम्या बाजूला कापलेले पोर्क बेली घाला आणि ते तपकिरी होईपर्यंत आणि थोडे चरबी सुटेपर्यंत 2-3 मिनिटे परतून घ्या. कडा थोड्या कुरकुरीत व्हायला हव्यात. नंतर कोळंबी, स्क्विड आणि फिश केक घाला. सीफूड शिजून अपारदर्शक होईपर्यंत आणखी 1-2 मिनिटे परतून घ्या. जास्त शिजवू नका, नाहीतर ते कडक होतील.', 'कढईच्या मध्यभागी पुन्हा जागा करा. दोन अंडी फोडून घाला. त्यांना सुमारे 30 सेकंद सेट होऊ द्या, नंतर तुमच्या स्पॅटुल्याने त्यांना अंदाजे स्क्रॅम्बल करा. एकदा ते बहुतेक शिजले की, त्यांना कढईतील इतर घटकांमध्ये मिसळा. आतापर्यंत सगळ्याचा वास खूपच अप्रतिम यायला हवा.', 'तयार होक्कियन नूडल्स कढईत घाला. तुमचा आधीच मिसळलेला सॉस आणि चिकन स्टॉक ओता. नूडल्सना समान रीतीने कोट करण्यासाठी चिमट्याने किंवा दोन स्पॅटुल्याने सर्वकाही जोरदारपणे मिसळा. उष्णता जास्त ठेवा! तुम्हाला तो समाधानकारक आवाज ऐकायचा आहे आणि नूडल्स तो सुंदर गडद सॉस शोषून घेताना दिसायला हवेत. त्यांना 3-4 मिनिटे सतत ढवळत परतून घ्या, ज्यामुळे काही नूडल्सना छान भाजलेला रंग येईल.', 'शेवटी, चायनीज केल आणि कडधान्याचे मोड घाला. भाज्या कुरकुरीत आणि चमकदार हिरव्या होईपर्यंत आणखी 1-2 मिनिटे परतून घ्या. त्या मऊ आणि निस्तेज नको आहेत. एकदा चव घेऊन पहा; आवश्यक असल्यास थोडा फिश सॉस किंवा चिमूटभर साखर घालून चव समायोजित करा. ते चवदार, थोडे गोड आणि खोल उमामी असावे.', 'प्लेट्समध्ये लगेच गरम गरम वाढा. कुरकुरीत पोर्क क्रॅकलींग आणि तळलेल्या शॅलॉट्सने उदारपणे सजवा. वरून ताज्या लिंबाचा रस पिळणे आवश्यक आहे; ते सर्वकाही सुंदरपणे ताजेतवाने करते. तुमच्या फुकेतच्या चवीचा आनंद घ्या!', 'तुमची कढई गरम असतानाच पटकन स्वच्छ करा. थोडे गरम पाणी आणि स्क्रब ब्रश सहसा काम करतात. तिला बसू देऊ नका आणि कडक होऊ देऊ नका!'],
                seoTitle: 'मी होक्कियन फुकेत रेसिपी: अस्सल फुकेत नूडल्स मराठीत',
                seoDescription: 'फुकेतच्या गजबजलेल्या रस्त्यांवरील चवदार मी होक्कियन फुकेत नूडल्सची रेसिपी मराठीत शिका. घरच्या घरी अस्सल थाई स्टिर-फ्राईड नूडल्सचा आनंद घ्या.',
                seoKeywords: 'मी होक्कियन फुकेत रेसिपी मराठीत, फुकेत नूडल्स, थाई स्टिर-फ्राईड नूडल्स, सीफूड नूडल्स, अस्सल थाई पाककृती'
            },
            te: {
                title: 'మీ హాకియన్ ఫుకెట్ నూడుల్స్',
                description: 'ఫుకెట్ హాకియన్ నూడుల్స్ కేవలం ఒక వంటకం కాదు, అది ఫుకెట్ పట్టణం సందడిగా ఉండే వీధుల్లోని మధురమైన జ్ఞాపకం. ఒక చిన్న స్టాల్ నుండి వచ్చే అద్భుతమైన సువాసన నన్ను ఆకర్షించింది. అక్కడ దొరికిన మందపాటి, నమలడానికి వీలైన పసుపు నూడుల్స్, రుచికరమైన సాస్‌తో మెరుస్తూ, సీఫుడ్, పంది మాంసంతో నిండి ఉన్నాయి. ఆ రుచి నన్ను మంత్రముగ్ధులను చేసింది. \'వోక్ హీ\' రహస్యం, సరైన తాజా పదార్థాలు, అధిక వేడితో త్వరగా వండటం ఈ వంటకానికి ప్రాణం. ఈ రుచిని ఇంట్లో ప్రయత్నించండి, మీరు ఫుకెట్ వంటల మాస్టర్ అయినట్లు అనిపిస్తుంది.',
                ingredients: [{ item: 'తాజా హాకియన్ నూడుల్స్', amount: '500గ్రా' }, { item: 'పంది మాంసం పొట్ట, సన్నగా తరిగినది', amount: '150గ్రా' }, { item: 'పెద్ద రొయ్యలు, తొక్క తీసి, నరం తీసినవి', amount: '200గ్రా' }, { item: 'చేప కేకులు, ముక్కలుగా చేసినవి', amount: '100గ్రా' }, { item: 'స్క్విడ్, శుభ్రం చేసి, ముక్కలుగా చేసినవి', amount: '100గ్రా' }, { item: 'చైనీస్ కాలే (గై లాన్), తరిగినది', amount: '1 కప్పు' }, { item: 'పెసలు మొలకలు', amount: '1 కప్పు' }, { item: 'వెల్లుల్లి, సన్నగా తరిగినది', amount: '4 రెబ్బలు' }, { item: 'చిన్న ఉల్లిపాయలు, సన్నగా తరిగినవి', amount: '2' }, { item: 'గుడ్లు', amount: '2' }, { item: 'డార్క్ సోయా సాస్', amount: '2 టేబుల్ స్పూన్లు' }, { item: 'లైట్ సోయా సాస్', amount: '1 టేబుల్ స్పూన్' }, { item: 'ఆయిస్టర్ సాస్', amount: '2 టేబుల్ స్పూన్లు' }, { item: 'ఫిష్ సాస్', amount: '1 టీస్పూన్' }, { item: 'చక్కెర', amount: '1 టీస్పూన్' }, { item: 'తెల్ల మిరియాల పొడి', amount: '1/2 టీస్పూన్' }, { item: 'చికెన్ స్టాక్ లేదా నీరు', amount: '1/2 కప్పు' }, { item: 'కూరగాయల నూనె', amount: '3 టేబుల్ స్పూన్లు' }, { item: 'క్రిస్పీ పంది మాంసం క్ర్యాక్లింగ్ (అలంకరణకు ఐచ్ఛికం)', amount: '1/4 కప్పు' }, { item: 'వేయించిన చిన్న ఉల్లిపాయలు (అలంకరణకు)', amount: '1 టేబుల్ స్పూన్' }, { item: 'నిమ్మకాయ ముక్కలు (వడ్డించడానికి)', amount: '2' }],
                instructions: ['ముందుగా, సాస్ సిద్ధం చేసుకోండి. ఒక చిన్న గిన్నెలో, డార్క్ సోయా సాస్, లైట్ సోయా సాస్, ఆయిస్టర్ సాస్, ఫిష్ సాస్, చక్కెర మరియు తెల్ల మిరియాల పొడిని కలిపి గిలకొట్టండి. చక్కెర కరిగే వరకు బాగా కలపండి. ఇది మీ రుచికి ఆధారం, కాబట్టి బాగా కలిపి పక్కన పెట్టండి; తర్వాత త్వరగా అవసరం అవుతుంది.', 'ఇప్పుడు, నూడుల్స్ సిద్ధం చేయండి. అవి కొద్దిగా గట్టిగా ఉంటే, వేడి నీటితో త్వరగా కడిగి, బాగా వడకట్టండి. నూడుల్స్ తడిగా ఉండకూడదు. శుభ్రమైన గుడ్డతో వాటిని పొడిగా తుడవండి. ఇది అవి బాగా వేగడానికి మరియు అంటుకోకుండా ఉండటానికి సహాయపడుతుంది.', 'మీ వోక్ లేదా పెద్ద, మందపాటి అడుగున్న పాన్‌ను పొగ వచ్చే వరకు అధిక వేడి మీద వేడి చేయండి. 2 టేబుల్ స్పూన్ల కూరగాయల నూనె వేయండి. పొగ మరియు మెరుపు కనిపించినప్పుడు, తరిగిన వెల్లుల్లి మరియు సన్నగా తరిగిన చిన్న ఉల్లిపాయలను వేయండి. అవి సువాసన వచ్చి, బంగారు రంగులోకి మారడం ప్రారంభించే వరకు సుమారు 30 సెకన్లు త్వరగా వేయించండి. అవి మాడిపోకుండా చూసుకోండి.', 'సుగంధ ద్రవ్యాలను వోక్ ఒక వైపుకు నెట్టండి. ఖాళీ వైపున సన్నగా తరిగిన పంది మాంసం పొట్టను వేసి, అది గోధుమ రంగులోకి మారి, కొంత కొవ్వు కరిగే వరకు సుమారు 2-3 నిమిషాలు వేయించండి. అంచులు కొద్దిగా క్రిస్పీగా మారాలి. తర్వాత, రొయ్యలు, స్క్విడ్ మరియు చేప కేకులను వేయండి. సీఫుడ్ ఉడికి, అపారదర్శకంగా మారే వరకు మరో 1-2 నిమిషాలు వేయించండి. ఎక్కువగా ఉడికించవద్దు, లేకపోతే గట్టిగా మారుతుంది.', 'వోక్ మధ్యలో మళ్ళీ స్థలం చేయండి. రెండు గుడ్లు పగలగొట్టి వేయండి. అవి సుమారు 30 సెకన్లు గట్టిపడనివ్వండి, తర్వాత గరిటెతో సుమారుగా కలపండి. అవి ఎక్కువగా ఉడికిన తర్వాత, వోక్‌లోని మిగిలిన పదార్థాలతో కలపండి. అప్పటికి అంతా అద్భుతంగా వాసన వస్తూ ఉండాలి.', 'సిద్ధం చేసిన హాకియన్ నూడుల్స్‌ను వోక్‌లో వేయండి. ముందుగా కలిపిన సాస్ మరియు చికెన్ స్టాక్‌ను పోయండి. నూడుల్స్‌కు సాస్ సమానంగా పట్టేలా చిమ్మెటలు లేదా రెండు గరిటెలతో అన్నింటినీ బలంగా కలపండి. వేడిని అధికంగా ఉంచండి! సంతృప్తికరమైన చిటపట శబ్దం వినిపించాలి మరియు నూడుల్స్ ఆ అందమైన డార్క్ సాస్‌ను పీల్చుకోవాలి. నిరంతరం కలుపుతూ, కొన్ని నూడుల్స్ చక్కగా కాలిపోయేలా 3-4 నిమిషాలు వేయించండి.', 'చివరగా, చైనీస్ కాలే మరియు పెసలు మొలకలను వేయండి. కూరగాయలు మెత్తగా-క్రిస్పీగా మరియు ప్రకాశవంతమైన ఆకుపచ్చ రంగులో మారే వరకు మరో 1-2 నిమిషాలు వేయించడం కొనసాగించండి. అవి మెత్తగా, నిస్సారంగా ఉండకూడదు. చివరిసారి రుచి చూడండి; అవసరమైతే కొద్దిగా ఫిష్ సాస్ లేదా చిటికెడు చక్కెరతో రుచిని సర్దుబాటు చేయండి. ఇది రుచికరంగా, కొద్దిగా తీపిగా మరియు లోతైన ఉమామి రుచిని కలిగి ఉండాలి.', 'వెంటనే, ప్లేట్లలో నిండుగా వడ్డించండి. క్రిస్పీ పంది మాంసం క్ర్యాక్లింగ్ మరియు వేయించిన చిన్న ఉల్లిపాయలతో ఉదారంగా అలంకరించండి. పైన తాజా నిమ్మరసం పిండటం చాలా అవసరం; ఇది అన్నింటినీ అందంగా ప్రకాశవంతం చేస్తుంది. మీ ఫుకెట్ రుచిని ఆస్వాదించండి!', 'వోక్ ఇంకా వెచ్చగా ఉన్నప్పుడే త్వరగా శుభ్రం చేయండి. కొద్దిగా వేడి నీరు మరియు స్క్రబ్ బ్రష్ సాధారణంగా సరిపోతాయి. అది అలాగే ఉండి గట్టిపడకుండా చూసుకోండి!'],
                seoTitle: 'అసలైన ఫుకెట్ హాకియన్ నూడుల్స్ రెసిపీ: ఇంట్లోనే రుచి చూడండి',
                seoDescription: 'ఫుకెట్ హాకియన్ నూడుల్స్ రెసిపీతో థాయ్‌లాండ్ రుచిని మీ ఇంటికి తీసుకురండి. ఈ రుచికరమైన సీఫుడ్, పంది మాంసం నూడుల్స్ వంటకం ఎలా చేయాలో తెలుసుకోండి.',
                seoKeywords: 'ఫుకెట్ హాకియన్ నూడుల్స్ రెసిపీ, మీ హాకియన్ నూడుల్స్, థాయ్ నూడుల్స్, సీఫుడ్ నూడుల్స్, పంది మాంసం నూడుల్స్, ఫుకెట్ వంటకాలు'
            },
            ta: {
                title: 'மீ ஹோக்கியன் பூகெட்',
                description: 'பூகெட் நகரத்தின் பரபரப்பான தெருக்களில் நான் முதன்முதலில் மீ ஹோக்கியன் பூகெட்டை சுவைத்தபோது, அதன் சுவை என்னை வியப்பில் ஆழ்த்தியது. அடர்த்தியான, மெல்லக்கூடிய மஞ்சள் நூடுல்ஸ், கடல் உணவுகள் மற்றும் பன்றி இறைச்சியுடன் கூடிய காரமான சாஸ், ஒரு மறக்க முடியாத அனுபவத்தை அளித்தது. சரியான \'வொக் ஹெய்\' (wok hei) எனப்படும் வோக்கின் சூடான சுவாசம் மற்றும் புதிய பொருட்களைப் பயன்படுத்துவது இந்த உணவின் ரகசியம். இந்த சுவையான உணவை வீட்டிலேயே சமைத்து, பூகெட்டின் சுவையை அனுபவிக்கலாம்.',
                ingredients: [{ item: 'புதிய ஹோக்கியன் நூடுல்ஸ்', amount: '500 கிராம்' }, { item: 'பன்றி இறைச்சி (போர்க் பெல்லி), மெல்லியதாக நறுக்கியது', amount: '150 கிராம்' }, { item: 'பெரிய இறால்கள், தோல் உரித்து, சுத்தம் செய்தது', amount: '200 கிராம்' }, { item: 'மீன் கேக்குகள், துண்டுகளாக்கப்பட்டது', amount: '100 கிராம்' }, { item: 'கணவாய் மீன், சுத்தம் செய்து, துண்டுகளாக்கப்பட்டது', amount: '100 கிராம்' }, { item: 'சீன காலே (காய் லான்), நறுக்கியது', amount: '1 கப்' }, { item: 'பீன்ஸ் முளைகள்', amount: '1 கப்' }, { item: 'பூண்டு, பொடியாக நறுக்கியது', amount: '4 பற்கள்' }, { item: 'சின்ன வெங்காயம், மெல்லியதாக நறுக்கியது', amount: '2' }, { item: 'முட்டைகள்', amount: '2' }, { item: 'டார்க் சோயா சாஸ்', amount: '2 டேபிள்ஸ்பூன்' }, { item: 'லைட் சோயா சாஸ்', amount: '1 டேபிள்ஸ்பூன்' }, { item: 'சிப்பி சாஸ் (ஆயிஸ்டர் சாஸ்)', amount: '2 டேபிள்ஸ்பூன்' }, { item: 'மீன் சாஸ்', amount: '1 டீஸ்பூன்' }, { item: 'சர்க்கரை', amount: '1 டீஸ்பூன்' }, { item: 'வெள்ளை மிளகுத்தூள்', amount: '1/2 டீஸ்பூன்' }, { item: 'சிக்கன் ஸ்டாக் அல்லது தண்ணீர்', amount: '1/2 கப்' }, { item: 'சமையல் எண்ணெய்', amount: '3 டேபிள்ஸ்பூன்' }, { item: 'மொறுமொறுப்பான பன்றி இறைச்சி வறுவல் (விருப்பமானது, அலங்கரிக்க)', amount: '1/4 கப்' }, { item: 'வறுத்த சின்ன வெங்காயம் (அலங்கரிக்க)', amount: '1 டேபிள்ஸ்பூன்' }, { item: 'எலுமிச்சை துண்டுகள் (பரிமாற)', amount: '2' }],
                instructions: ['முதலில், சாஸ் தயார் செய்யுங்கள். ஒரு சிறிய கிண்ணத்தில், டார்க் சோயா சாஸ், லைட் சோயா சாஸ், சிப்பி சாஸ், மீன் சாஸ், சர்க்கரை மற்றும் வெள்ளை மிளகுத்தூள் சேர்த்து நன்கு கலக்கவும். சர்க்கரை கரையும் வரை நன்றாக கிளறவும். இதுதான் உங்கள் சுவையின் அடிப்படை, எனவே நன்றாக கலந்திருப்பதை உறுதிப்படுத்தவும். இதை தனியாக வைக்கவும்; பிறகு வேகமாக தேவைப்படும்.', 'இப்போது, நூடுல்ஸை தயார் செய்யுங்கள். அவை சற்று கெட்டியாக இருந்தால், சூடான நீரில் ஒரு முறை அலசி, பின்னர் தண்ணீரை நன்றாக வடித்து விடுங்கள். நூடுல்ஸ் ஈரமாக இருக்கக்கூடாது. ஒரு சுத்தமான துணியால் துடைத்து உலர வைக்கவும். இது நூடுல்ஸ் நன்றாக வறுபடவும், ஒட்டாமல் இருக்கவும் உதவும். இதை நம்புங்கள், இது ஒரு பெரிய மாற்றத்தை ஏற்படுத்தும்.', 'உங்கள் வோக் அல்லது ஒரு பெரிய, கனமான அடிப்பகுதியுள்ள பாத்திரத்தை அதிக சூட்டில் புகை வரும் வரை சூடாக்கவும். 2 டேபிள்ஸ்பூன் சமையல் எண்ணெய் சேர்க்கவும். எண்ணெய் பளபளத்து, லேசாக புகை வரும்போது, பொடியாக நறுக்கிய பூண்டு மற்றும் நறுக்கிய சின்ன வெங்காயத்தைச் சேர்க்கவும். சுமார் 30 வினாடிகள், மணம் வரும் வரை மற்றும் பொன்னிறமாக மாறத் தொடங்கும் வரை விரைவாக வதக்கவும். கருக விடாதீர்கள்; கருகிய பூண்டு கசப்பாக இருக்கும்.', 'அரோமாடிக்ஸை வோக்கின் ஒரு பக்கமாக தள்ளவும். மறுபுறம், மெல்லியதாக நறுக்கிய பன்றி இறைச்சியைச் சேர்த்து, பொன்னிறமாகி, அதன் கொழுப்பு உருகும் வரை சுமார் 2-3 நிமிடங்கள் வதக்கவும். ஓரங்கள் சற்று மொறுமொறுப்பாக மாற வேண்டும். பின்னர், இறால்கள், கணவாய் மீன் மற்றும் மீன் கேக்குகளைச் சேர்க்கவும். கடல் உணவுகள் சமைத்து, நிறம் மாறும் வரை மேலும் 1-2 நிமிடங்கள் வதக்கவும். அதிகமாக சமைக்க வேண்டாம், இல்லையெனில் அவை ரப்பராகிவிடும்.', 'மீண்டும் வோக்கின் நடுவில் ஒரு இடத்தை உருவாக்கவும். இரண்டு முட்டைகளை உடைத்து ஊற்றவும். சுமார் 30 வினாடிகள் வேக விடவும், பின்னர் உங்கள் கரண்டியால் தோராயமாக கிளறி விடவும். அவை பெரும்பாலும் வெந்ததும், வோக்கில் உள்ள மற்ற பொருட்களுடன் கலக்கவும். இப்போது எல்லாம் நம்பமுடியாத அளவிற்கு மணம் வீச வேண்டும்.', 'தயார் செய்த ஹோக்கியன் நூடுல்ஸை வோக்கில் சேர்க்கவும். நீங்கள் கலந்து வைத்த சாஸ் மற்றும் சிக்கன் ஸ்டாக்கை ஊற்றவும். நூடுல்ஸ் முழுவதும் சாஸ் படியும் வரை, இடுக்கி அல்லது இரண்டு கரண்டிகளைப் பயன்படுத்தி எல்லாவற்றையும் தீவிரமாக கிளறவும். சூட்டை அதிகமாகவே வைத்திருக்கவும்! நூடுல்ஸ் அந்த அழகான டார்க் சாஸை உறிஞ்சி, சத்தம் கேட்க வேண்டும். 3-4 நிமிடங்கள் கிளறிக்கொண்டே வறுக்கவும், சில நூடுல்ஸ் கருகிய சுவையைப் பெறட்டும்.', 'கடைசியாக, சீன காலே மற்றும் பீன்ஸ் முளைகளைச் சேர்க்கவும். காய்கறிகள் மிருதுவாகவும், பச்சையாகவும் மாறும் வரை மேலும் 1-2 நிமிடங்கள் வதக்கவும். அவை வாடிவிடக்கூடாது. ஒரு இறுதி சுவை பார்த்து, தேவைப்பட்டால் ஒரு சிறிய மீன் சாஸ் அல்லது ஒரு சிட்டிகை சர்க்கரை சேர்க்கவும். இது காரமாகவும், லேசான இனிப்புடனும், ஆழமான உமாமி சுவையுடனும் இருக்க வேண்டும்.', 'உடனடியாக தட்டுகளில் அடுக்கி பரிமாறவும். மொறுமொறுப்பான பன்றி இறைச்சி வறுவல் மற்றும் வறுத்த சின்ன வெங்காயத்துடன் தாராளமாக அலங்கரிக்கவும். மேலே ஒரு பிழிந்த எலுமிச்சை சாறு அவசியம்; இது எல்லாவற்றையும் அழகாக பிரகாசமாக்கும். உங்கள் பூகெட் சுவையை அனுபவிக்கவும்!', 'வோக் சூடாக இருக்கும்போதே விரைவாக சுத்தம் செய்யுங்கள். சிறிது சூடான நீர் மற்றும் ஒரு ஸ்க்ரப் பிரஷ் பொதுவாக வேலை செய்யும். அதை அப்படியே விட்டு காய்ந்து போக விடாதீர்கள்!'],
                seoTitle: 'சுவையான மீ ஹோக்கியன் பூகெட் செய்முறை - வீட்டிலேயே சமைக்கலாம்!',
                seoDescription: 'பூகெட்டின் பிரபலமான மீ ஹோக்கியன் பூகெட் செய்முறையை வீட்டிலேயே எளிதாக சமைக்க கற்றுக்கொள்ளுங்கள். கடல் உணவுகள், பன்றி இறைச்சி மற்றும் சுவையான சாஸுடன் கூடிய இந்த நூடுல்ஸ், உங்கள் சுவை மொட்டுகளை தூண்டும். மீ ஹோக்கியன் பூகெட் செய்முறைக்கான முழுமையான வழிகாட்டி.',
                seoKeywords: 'மீ ஹோக்கியன் பூகெட் செய்முறை, பூகெட் நூடுல்ஸ், தாய்லாந்து உணவு, கடல் உணவு நூடுல்ஸ், பன்றி இறைச்சி நூடுல்ஸ், வோக் ஹெய்'
            },
            kn: {
                title: 'ಮೀ ಹಾಕ್ಕೀನ್ ಫುಕೆಟ್',
                description: 'ಫುಕೆಟ್‌ನ ಗದ್ದಲದ ಬೀದಿಗಳಲ್ಲಿ ಸಿಗುವ ಮೀ ಹಾಕ್ಕೀನ್, ಕೇವಲ ಒಂದು ಖಾದ್ಯವಲ್ಲ, ಅದು ಒಂದು ಮರೆಯಲಾಗದ ಅನುಭವ. ದಪ್ಪ, ಮೆತ್ತಗಿನ ಹಳದಿ ನೂಡಲ್ಸ್, ಸಮುದ್ರಾಹಾರ ಮತ್ತು ಹಂದಿ ಮಾಂಸದೊಂದಿಗೆ ಕಡು, ರುಚಿಕರ ಸಾಸ್‌ನಲ್ಲಿ ಬೆರೆತು ಬಾಯಲ್ಲಿ ನೀರೂರಿಸುತ್ತದೆ. \'ವಾಕ್ ಹೀ\' ಎಂಬ ವಿಶೇಷ ತಂತ್ರದಿಂದ ತಯಾರಿಸುವ ಈ ಖಾದ್ಯ, ಪ್ರತಿ ಕಚ್ಚುವಿಕೆಯಲ್ಲೂ ಫುಕೆಟ್‌ನ ಸ್ವಾದವನ್ನು ನೀಡುತ್ತದೆ. ಇದನ್ನು ಒಮ್ಮೆ ಸವಿದರೆ, ಅದರ ರುಚಿಗೆ ನೀವು ಖಂಡಿತ ಮಾರುಹೋಗುತ್ತೀರಿ.',
                ingredients: [{ item: 'ತಾಜಾ ಹಾಕ್ಕೀನ್ ನೂಡಲ್ಸ್', amount: '500g' }, { item: 'ಹಂದಿ ಮಾಂಸದ ಹೊಟ್ಟೆ, ತೆಳುವಾಗಿ ಕತ್ತರಿಸಿದ್ದು', amount: '150g' }, { item: 'ದೊಡ್ಡ ಸೀಗಡಿ, ಸಿಪ್ಪೆ ಸುಲಿದು ಮತ್ತು ನರ ತೆಗೆದಿದ್ದು', amount: '200g' }, { item: 'ಮೀನಿನ ಕೇಕ್, ಹೋಳು ಮಾಡಿದ್ದು', amount: '100g' }, { item: 'ಸ್ಕ್ವಿಡ್, ಸ್ವಚ್ಛಗೊಳಿಸಿ ಹೋಳು ಮಾಡಿದ್ದು', amount: '100g' }, { item: 'ಚೈನೀಸ್ ಕೇಲ್ (ಗೈ ಲಾನ್), ಕತ್ತರಿಸಿದ್ದು', amount: '1 cup' }, { item: 'ಮೊಳಕೆ ಕಾಳು', amount: '1 cup' }, { item: 'ಬೆಳ್ಳುಳ್ಳಿ, ಸಣ್ಣಗೆ ಹೆಚ್ಚಿದ್ದು', amount: '4 ಎಸಳು' }, { item: 'ಸಣ್ಣ ಈರುಳ್ಳಿ, ತೆಳುವಾಗಿ ಹೆಚ್ಚಿದ್ದು', amount: '2' }, { item: 'ಮೊಟ್ಟೆಗಳು', amount: '2' }, { item: 'ಡಾರ್ಕ್ ಸೋಯಾ ಸಾಸ್', amount: '2 tbsp' }, { item: 'ಲೈಟ್ ಸೋಯಾ ಸಾಸ್', amount: '1 tbsp' }, { item: 'ಆಯಿಸ್ಟರ್ ಸಾಸ್', amount: '2 tbsp' }, { item: 'ಫಿಶ್ ಸಾಸ್', amount: '1 tsp' }, { item: 'ಸಕ್ಕರೆ', amount: '1 tsp' }, { item: 'ಬಿಳಿ ಮೆಣಸು', amount: '1/2 tsp' }, { item: 'ಚಿಕನ್ ಸ್ಟಾಕ್ ಅಥವಾ ನೀರು', amount: '1/2 cup' }, { item: 'ಸಸ್ಯಜನ್ಯ ಎಣ್ಣೆ', amount: '3 tbsp' }, { item: 'ಗರಿಗರಿಯಾದ ಹಂದಿ ಮಾಂಸದ ಸಿಪ್ಪೆ (ಐಚ್ಛಿಕ, ಅಲಂಕಾರಕ್ಕಾಗಿ)', amount: '1/4 cup' }, { item: 'ಹುರಿದ ಸಣ್ಣ ಈರುಳ್ಳಿ (ಅಲಂಕಾರಕ್ಕಾಗಿ)', amount: '1 tbsp' }, { item: 'ನಿಂಬೆ ಹೋಳುಗಳು (ಬಡಿಸಲು)', amount: '2' }],
                instructions: ['ಮೊದಲು, ಸಾಸ್ ತಯಾರಿಸಿಕೊಳ್ಳಿ. ಒಂದು ಸಣ್ಣ ಬಟ್ಟಲಿನಲ್ಲಿ ಡಾರ್ಕ್ ಸೋಯಾ ಸಾಸ್, ಲೈಟ್ ಸೋಯಾ ಸಾಸ್, ಆಯಿಸ್ಟರ್ ಸಾಸ್, ಫಿಶ್ ಸಾಸ್, ಸಕ್ಕರೆ ಮತ್ತು ಬಿಳಿ ಮೆಣಸನ್ನು ಹಾಕಿ ಚೆನ್ನಾಗಿ ಮಿಶ್ರಣ ಮಾಡಿ. ಸಕ್ಕರೆ ಕರಗುವವರೆಗೆ ಚೆನ್ನಾಗಿ ಕಲಸಿ. ಇದು ನಿಮ್ಮ ಖಾದ್ಯದ ಮುಖ್ಯ ರುಚಿ, ಆದ್ದರಿಂದ ಇದನ್ನು ಚೆನ್ನಾಗಿ ಮಿಶ್ರಣ ಮಾಡಿ ಪಕ್ಕಕ್ಕಿಡಿ.', 'ಈಗ, ನೂಡಲ್ಸ್ ಸಿದ್ಧಪಡಿಸಿ. ನೂಡಲ್ಸ್ ಸ್ವಲ್ಪ ಗಟ್ಟಿಯಾಗಿದ್ದರೆ, ಬಿಸಿ ನೀರಿನಲ್ಲಿ ಒಂದು ಕ್ಷಣ ತೊಳೆದು, ನಂತರ ಚೆನ್ನಾಗಿ ನೀರು ಬಸಿದು ಒಣಗಿಸಿ. ನೂಡಲ್ಸ್ ಒದ್ದೆಯಾಗಿರಬಾರದು. ಸ್ವಚ್ಛ ಬಟ್ಟೆಯಿಂದ ಒಣಗಿಸಿ. ಇದು ನೂಡಲ್ಸ್ ಚೆನ್ನಾಗಿ ಹುರಿಯಲು ಮತ್ತು ಅಂಟಿಕೊಳ್ಳುವುದನ್ನು ತಡೆಯಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.', 'ನಿಮ್ಮ ವೋಕ್ ಅಥವಾ ದೊಡ್ಡ, ದಪ್ಪ ತಳದ ಬಾಣಲೆಯನ್ನು ಹೆಚ್ಚು ಉರಿಯಲ್ಲಿ ಬಿಸಿ ಮಾಡಿ, ಹೊಗೆ ಬರುವವರೆಗೆ ಕಾಯಿಸಿ. 2 ಚಮಚ ಸಸ್ಯಜನ್ಯ ಎಣ್ಣೆಯನ್ನು ಸೇರಿಸಿ. ಎಣ್ಣೆ ಬಿಸಿಯಾಗಿ ಹೊಗೆ ಬರಲು ಪ್ರಾರಂಭಿಸಿದಾಗ, ಸಣ್ಣಗೆ ಹೆಚ್ಚಿದ ಬೆಳ್ಳುಳ್ಳಿ ಮತ್ತು ಸಣ್ಣ ಈರುಳ್ಳಿಯನ್ನು ಹಾಕಿ. 30 ಸೆಕೆಂಡುಗಳ ಕಾಲ ಬೇಗನೆ ಹುರಿಯಿರಿ, ಅವು ಪರಿಮಳಯುಕ್ತವಾಗಿ ಮತ್ತು ಚಿನ್ನದ ಬಣ್ಣಕ್ಕೆ ತಿರುಗಲು ಪ್ರಾರಂಭಿಸಬೇಕು. ಅವು ಸುಡದಂತೆ ನೋಡಿಕೊಳ್ಳಿ.', 'ಹುರಿದ ಪದಾರ್ಥಗಳನ್ನು ವೋಕ್‌ನ ಒಂದು ಬದಿಗೆ ಸರಿಸಿ. ಖಾಲಿ ಜಾಗದಲ್ಲಿ ತೆಳುವಾಗಿ ಹೆಚ್ಚಿದ ಹಂದಿ ಮಾಂಸದ ಹೊಟ್ಟೆಯನ್ನು ಹಾಕಿ, 2-3 ನಿಮಿಷಗಳ ಕಾಲ ಕಂದು ಬಣ್ಣಕ್ಕೆ ಬರುವವರೆಗೆ ಮತ್ತು ಕೊಬ್ಬು ಬಿಡುವವರೆಗೆ ಹುರಿಯಿರಿ. ಅಂಚುಗಳು ಸ್ವಲ್ಪ ಗರಿಗರಿಯಾಗಬೇಕು. ನಂತರ, ಸೀಗಡಿ, ಸ್ಕ್ವಿಡ್ ಮತ್ತು ಮೀನಿನ ಕೇಕ್‌ಗಳನ್ನು ಸೇರಿಸಿ. ಸಮುದ್ರಾಹಾರವು ಬೇಯುವವರೆಗೆ ಮತ್ತು ಅಪಾರದರ್ಶಕವಾಗುವವರೆಗೆ 1-2 ನಿಮಿಷಗಳ ಕಾಲ ಹುರಿಯಿರಿ. ಹೆಚ್ಚು ಬೇಯಿಸಬೇಡಿ, ಇಲ್ಲದಿದ್ದರೆ ಅದು ಗಟ್ಟಿಯಾಗುತ್ತದೆ.', 'ವೋಕ್‌ನ ಮಧ್ಯದಲ್ಲಿ ಮತ್ತೆ ಜಾಗ ಮಾಡಿ. ಎರಡು ಮೊಟ್ಟೆಗಳನ್ನು ಒಡೆದು ಹಾಕಿ. 30 ಸೆಕೆಂಡುಗಳ ಕಾಲ ಹಾಗೆಯೇ ಬಿಡಿ, ನಂತರ ನಿಮ್ಮ ಸ್ಪಾಟುಲಾದಿಂದ ಅವುಗಳನ್ನು ಒರಟಾಗಿ ಸ್ಕ್ರ್ಯಾಂಬಲ್ ಮಾಡಿ. ಅವು ಹೆಚ್ಚಾಗಿ ಬೆಂದ ನಂತರ, ವೋಕ್‌ನಲ್ಲಿರುವ ಉಳಿದ ಪದಾರ್ಥಗಳೊಂದಿಗೆ ಮಿಶ್ರಣ ಮಾಡಿ. ಈಗ ಎಲ್ಲವೂ ಅದ್ಭುತವಾಗಿ ಪರಿಮಳಯುಕ್ತವಾಗಿರಬೇಕು.', 'ಸಿದ್ಧಪಡಿಸಿದ ಹಾಕ್ಕೀನ್ ನೂಡಲ್ಸ್ ಅನ್ನು ವೋಕ್‌ಗೆ ಸೇರಿಸಿ. ನಿಮ್ಮ ಮೊದಲೇ ಮಿಶ್ರಣ ಮಾಡಿದ ಸಾಸ್ ಮತ್ತು ಚಿಕನ್ ಸ್ಟಾಕ್ ಅನ್ನು ಸುರಿಯಿರಿ. ನೂಡಲ್ಸ್‌ಗೆ ಸಾಸ್ ಸಮವಾಗಿ ಲೇಪಿಸುವಂತೆ ಇಕ್ಕಳ ಅಥವಾ ಎರಡು ಸ್ಪಾಟುಲಾಗಳನ್ನು ಬಳಸಿ ಎಲ್ಲವನ್ನೂ ಹುರಿಯಿರಿ. ಉರಿ ಹೆಚ್ಚಾಗಿರಲಿ! ನೂಡಲ್ಸ್ ಆ ಸುಂದರವಾದ ಕಡು ಸಾಸ್ ಅನ್ನು ಹೀರಿಕೊಳ್ಳುವುದನ್ನು ಮತ್ತು ಸೀಳು ಧ್ವನಿಯನ್ನು ಕೇಳಬೇಕು. 3-4 ನಿಮಿಷಗಳ ಕಾಲ ನಿರಂತರವಾಗಿ ಕಲಕುತ್ತಾ ಹುರಿಯಿರಿ, ಕೆಲವು ನೂಡಲ್ಸ್ ತುಂಡುಗಳು ಸ್ವಲ್ಪ ಕಂದು ಬಣ್ಣಕ್ಕೆ ತಿರುಗಲು ಬಿಡಿ.', 'ಕೊನೆಯದಾಗಿ, ಚೈನೀಸ್ ಕೇಲ್ ಮತ್ತು ಮೊಳಕೆ ಕಾಳುಗಳನ್ನು ಸೇರಿಸಿ. ತರಕಾರಿಗಳು ಮೃದು-ಗರಿಗರಿಯಾಗಿ ಮತ್ತು ಪ್ರಕಾಶಮಾನವಾದ ಹಸಿರು ಬಣ್ಣಕ್ಕೆ ತಿರುಗುವವರೆಗೆ 1-2 ನಿಮಿಷಗಳ ಕಾಲ ಹುರಿಯುವುದನ್ನು ಮುಂದುವರಿಸಿ. ಅವು ಮೃದುವಾಗಿ ಮತ್ತು ಸಪ್ಪೆಯಾಗಬಾರದು. ಅಂತಿಮವಾಗಿ ರುಚಿ ನೋಡಿ; ಅಗತ್ಯವಿದ್ದರೆ ಸ್ವಲ್ಪ ಫಿಶ್ ಸಾಸ್ ಅಥವಾ ಸಕ್ಕರೆ ಸೇರಿಸಿ. ಇದು ರುಚಿಕರ, ಸ್ವಲ್ಪ ಸಿಹಿ ಮತ್ತು ಆಳವಾದ ಉಮಾಮಿ ರುಚಿಯನ್ನು ಹೊಂದಿರಬೇಕು.', 'ತಕ್ಷಣವೇ ಬಿಸಿಬಿಸಿಯಾಗಿ ತಟ್ಟೆಗಳಲ್ಲಿ ಬಡಿಸಿ. ಗರಿಗರಿಯಾದ ಹಂದಿ ಮಾಂಸದ ಸಿಪ್ಪೆ ಮತ್ತು ಹುರಿದ ಸಣ್ಣ ಈರುಳ್ಳಿಯಿಂದ ಅಲಂಕರಿಸಿ. ಮೇಲೆ ತಾಜಾ ನಿಂಬೆ ರಸವನ್ನು ಹಿಂಡುವುದು ಅತ್ಯಗತ್ಯ; ಇದು ಎಲ್ಲವನ್ನೂ ಸುಂದರವಾಗಿ ಪ್ರಕಾಶಮಾನಗೊಳಿಸುತ್ತದೆ. ನಿಮ್ಮ ಫುಕೆಟ್‌ನ ರುಚಿಯನ್ನು ಆನಂದಿಸಿ!', 'ವೋಕ್ ಬಿಸಿಯಾಗಿರುವಾಗಲೇ ಬೇಗನೆ ಸ್ವಚ್ಛಗೊಳಿಸಿ. ಸ್ವಲ್ಪ ಬಿಸಿ ನೀರು ಮತ್ತು ಸ್ಕ್ರಬ್ ಬ್ರಷ್ ಸಾಮಾನ್ಯವಾಗಿ ಕೆಲಸ ಮಾಡುತ್ತದೆ. ಅದನ್ನು ಹಾಗೆಯೇ ಬಿಟ್ಟು ಗಟ್ಟಿಯಾಗಲು ಬಿಡಬೇಡಿ!'],
                seoTitle: 'ರುಚಿಕರ ಮೀ ಹಾಕ್ಕೀನ್ ಫುಕೆಟ್ ರೆಸಿಪಿ: ಥಾಯ್ ನೂಡಲ್ಸ್ ಮಾಡಿ',
                seoDescription: 'ಫುಕೆಟ್‌ನ ಬೀದಿಗಳ ಸ್ವಾದವನ್ನು ನಿಮ್ಮ ಮನೆಗೆ ತನ್ನಿ! ಈ ಮೀ ಹಾಕ್ಕೀನ್ ಫುಕೆಟ್ ರೆಸಿಪಿ ಮೂಲಕ ದಪ್ಪ ನೂಡಲ್ಸ್, ಸೀಫುಡ್ ಮತ್ತು ಹಂದಿ ಮಾಂಸದ ಅದ್ಭುತ ರುಚಿಯನ್ನು ಅನುಭವಿಸಿ. ಸುಲಭವಾಗಿ ತಯಾರಿಸಿ.',
                seoKeywords: 'ಮೀ ಹಾಕ್ಕೀನ್ ಫುಕೆಟ್ ರೆಸಿಪಿ, ಫುಕೆಟ್ ನೂಡಲ್ಸ್, ಥಾಯ್ ಸ್ಟಿರ್-ಫ್ರೈಡ್ ನೂಡಲ್ಸ್, ಸೀಫುಡ್ ನೂಡಲ್ಸ್, ಹಂದಿ ಮಾಂಸದ ನೂಡಲ್ಸ್, ಸುಲಭ ನೂಡಲ್ಸ್ ರೆಸಿಪಿ'
            },
            'zh-CN': {
                title: '普吉福建炒面',
                description: '普吉福建炒面，对我来说不只是一道菜，更是一段美好的回忆，仿佛瞬间回到了普吉镇熙熙攘攘的街头。那年午后，我被小摊飘出的诱人香气吸引，尝到了这碗面。Q弹的黄面条裹着浓郁酱汁，配上鲜美的海鲜和猪肉，简直是味蕾的盛宴。从那以后，我便着迷于复刻它的味道，经过无数次尝试和改进，终于掌握了其中的精髓。',
                ingredients: [{ item: '新鲜福建面', amount: '500克' }, { item: '五花肉, 切薄片', amount: '150克' }, { item: '大虾, 去皮去虾线', amount: '200克' }, { item: '鱼饼, 切片', amount: '100克' }, { item: '鱿鱼, 洗净切片', amount: '100克' }, { item: '芥兰, 切段', amount: '1杯' }, { item: '豆芽', amount: '1杯' }, { item: '蒜蓉', amount: '4瓣' }, { item: '红葱头, 切薄片', amount: '2个' }, { item: '鸡蛋', amount: '2个' }, { item: '老抽', amount: '2汤匙' }, { item: '生抽', amount: '1汤匙' }, { item: '蚝油', amount: '2汤匙' }, { item: '鱼露', amount: '1茶匙' }, { item: '糖', amount: '1茶匙' }, { item: '白胡椒粉', amount: '1/2茶匙' }, { item: '鸡高汤或水', amount: '1/2杯' }, { item: '植物油', amount: '3汤匙' }, { item: '脆皮猪油渣 (可选, 作点缀)', amount: '1/4杯' }, { item: '炸红葱酥 (作点缀)', amount: '1汤匙' }, { item: '青柠角 (佐餐用)', amount: '2个' }],
                instructions: ['首先调好酱汁。在一个小碗里，将老抽、生抽、蚝油、鱼露、糖和白胡椒粉混合搅拌均匀，直到糖完全溶解。这是炒面的灵魂，务必调匀备用。', '处理面条。如果面条有些硬，可以用热水快速冲洗一下使其松散，然后彻底沥干水分。用干净的毛巾拍干面条，这样炒出来才不会粘连，口感也更好。', '将炒锅或厚底锅烧至冒烟，加入2汤匙植物油。油热后，放入蒜蓉和红葱头片，快速翻炒约30秒，炒出香味，略微变金黄即可，切勿炒焦。', '将香料推到锅边，放入五花肉片，翻炒2-3分钟，直到肉片变色并煸出部分油脂，边缘略带焦脆。接着加入大虾、鱿鱼和鱼饼，继续翻炒1-2分钟，直到海鲜刚熟透变色，避免过度烹饪导致口感变老。', '再次在锅中间腾出空间，打入两个鸡蛋。让鸡蛋凝固约30秒，然后用锅铲将其大致炒散，待鸡蛋大部分凝固后，与锅中其他食材混合均匀。此时锅中香气四溢，令人垂涎。', '加入准备好的福建面，倒入之前调好的酱汁和鸡高汤。用筷子或两把铲子快速翻炒，使面条均匀裹上酱汁。保持大火，让面条在锅中发出滋滋声，充分吸收酱汁，并炒出焦香气，持续翻炒3-4分钟。', '最后加入芥兰和豆芽，继续翻炒1-2分钟，直到蔬菜变得脆嫩碧绿即可。尝一下味道，如果需要，可以再加一点鱼露或糖调味，确保味道咸鲜回甜，充满鲜味。', '立即盛盘享用，撒上脆皮猪油渣和炸红葱酥。挤上新鲜的青柠汁是点睛之笔，能让整道菜的味道更加清新明亮。尽情享受这普吉风味吧！', '趁锅还热，尽快清洗干净。通常用热水和刷子就能轻松搞定，别让它结垢变硬！'],
                seoTitle: '普吉福建炒面食谱：在家也能做出地道南洋风味',
                seoDescription: '想念普吉岛街头那碗香气四溢的福建炒面吗？这份正宗普吉福建炒面食谱，教你如何在家轻松复刻，浓郁酱汁裹着Q弹面条，海鲜猪肉料足味美，一口入魂！',
                seoKeywords: '普吉福建炒面食谱,福建炒面,普吉美食,南洋炒面,海鲜炒面,家常菜谱'
            },
            ms: {
                title: 'Mee Hokkien Phuket',
                description: 'Mee Hokkien Phuket ini bukan sekadar hidangan, ia adalah kenangan manis dari jalanan sibuk Phuket Town. Aroma yang memikat dari gerai kecil bertahun lalu masih terbayang. Mi kuning tebal kenyal, bersalut sos gelap berperisa, dengan hidangan laut dan daging babi, memang memukau. Rahsia utamanya? Panas kuali yang tinggi dan bahan segar seperti mi Hokkien, udang, dan perut babi. Hidangan ini menuntut penghormatan pada bahan-bahannya, menjanjikan rasa umami yang mendalam dan memuaskan jiwa.',
                ingredients: [{ item: 'Mi Hokkien segar', amount: '500g' }, { item: 'Perut babi, dihiris nipis', amount: '150g' }, { item: 'Udang besar, dibuang kulit dan urat', amount: '200g' }, { item: 'Kek ikan, dihiris', amount: '100g' }, { item: 'Sotong, dibersihkan dan dihiris', amount: '100g' }, { item: 'Sawi Cina (gai lan), dicincang', amount: '1 cawan' }, { item: 'Taugeh', amount: '1 cawan' }, { item: 'Bawang putih, dicincang halus', amount: '4 ulas' }, { item: 'Bawang merah, dihiris nipis', amount: '2' }, { item: 'Telur', amount: '2' }, { item: 'Kicap pekat', amount: '2 sudu besar' }, { item: 'Kicap cair', amount: '1 sudu besar' }, { item: 'Sos tiram', amount: '2 sudu besar' }, { item: 'Sos ikan', amount: '1 sudu kecil' }, { item: 'Gula', amount: '1 sudu kecil' }, { item: 'Lada sulah', amount: '1/2 sudu kecil' }, { item: 'Stok ayam atau air', amount: '1/2 cawan' }, { item: 'Minyak masak', amount: '3 sudu besar' }, { item: 'Keropok kulit babi rangup (pilihan, untuk hiasan)', amount: '1/4 cawan' }, { item: 'Bawang goreng (untuk hiasan)', amount: '1 sudu besar' }, { item: 'Hirisan limau nipis (untuk hidangan)', amount: '2' }],
                instructions: ['Mula-mula, sediakan sosnya. Dalam mangkuk kecil, satukan kicap pekat, kicap cair, sos tiram, sos ikan, gula, dan lada sulah. Kacau rata hingga gula larut. Ini asas rasa hidangan, jadi pastikan sebati. Ketepikan, anda akan memerlukannya nanti.', 'Seterusnya, sediakan mi. Jika mi agak keras, bilas sebentar di bawah air panas untuk melonggarkannya, kemudian toskan betul-betul. Mi yang lembik tidak sedap. Keringkan dengan tuala bersih; ini membantu mi digoreng lebih baik dan tidak melekat.', 'Panaskan kuali atau kuali dasar tebal dengan api besar hingga berasap. Masukkan 2 sudu besar minyak masak. Apabila minyak berkilat dan berasap nipis, masukkan bawang putih cincang dan bawang merah hiris. Tumis cepat, kira-kira 30 saat, hingga wangi dan mula keemasan. Jangan sampai hangit, nanti pahit.', 'Tolak bahan aromatik ke tepi kuali. Masukkan perut babi hiris ke bahagian kosong dan goreng hingga perang serta mengeluarkan sedikit lemak, kira-kira 2-3 minit. Biar tepinya sedikit garing. Kemudian, masukkan udang, sotong, dan kek ikan. Goreng lagi 1-2 minit hingga hidangan laut masak dan tidak lagi lutsinar. Jangan terlebih masak, nanti liat.', 'Buat ruang di tengah kuali lagi. Pecahkan dua biji telur. Biarkan masak sebentar kira-kira 30 saat, kemudian hancurkan kasar dengan spatula. Setelah hampir masak, gaulkan dengan bahan lain dalam kuali. Sekarang, baunya pasti sangat menyelerakan.', 'Masukkan mi Hokkien yang telah disediakan ke dalam kuali. Tuang sos campuran dan stok ayam. Gaulkan semua dengan kuat, guna penyepit atau dua spatula, untuk menyalut mi secara rata. Kekalkan api besar! Anda mahu dengar bunyi mendesis dan lihat mi menyerap sos gelap yang cantik itu. Goreng selama 3-4 minit, kacau sentiasa, biar ada sedikit kesan hangus pada mi.', 'Akhir sekali, masukkan sawi Cina dan taugeh. Terus goreng lagi 1-2 minit, sekadar hingga sayur lembut rangup dan hijau terang. Jangan sampai layu. Rasa hidangan; sesuaikan dengan sedikit sos ikan atau secubit gula jika perlu. Rasanya haruslah masin, sedikit manis, dan umami yang mendalam.', 'Hidangkan segera, timbun tinggi di atas pinggan. Hias dengan keropok kulit babi rangup dan bawang goreng. Perahan jus limau nipis segar di atasnya sangat penting; ia menyerlahkan rasa dengan indah. Nikmati rasa Phuket anda!', 'Bersihkan kuali anda segera semasa masih suam. Sedikit air panas dan berus sental biasanya cukup. Jangan biarkan ia kering dan berkerak!'],
                seoTitle: 'Resipi Mee Hokkien Phuket Asli: Rasa Jalanan Phuket di Rumah!',
                seoDescription: 'Terokai resipi Mee Hokkien Phuket yang asli dan penuh rasa umami! Nikmati mi kuning kenyal dengan hidangan laut, perut babi, dan \'wok hei\' yang memukau. Cuba sekarang!',
                seoKeywords: 'resipi Mee Hokkien Phuket, cara masak Mee Hokkien Phuket, mi goreng Phuket, Mee Hokkien, resipi mi goreng, masakan Thai, hidangan laut'
            }
        }
    }
,
    {
        id: '2026-05-25',
        publishedAt: '2026-05-25T13:02:00.000Z',
        title: 'Hainanese',
        description: 'Oh, Hainanese chicken rice. This dish, it\'s not just food; it\'s a memory, a comfort, a challenge. I first learned to make it years ago, watching my Auntie Mei in her tiny kitchen in Tiong Bahru. She\'d move with such purpose, her hands a blur, but always with a patient smile when I\'d inevitably ask \'Why this, Auntie?\' The biggest lesson she taught me wasn\'t about a specific measurement, but about *feel*. You can\'t rush the chicken, she\'d say, or the rice will taste like nothing. It\'s about coaxing out the flavors, letting them develop slowly. I\'ve messed it up countless times, believe me. Overcooked chicken, rubbery and dry. Rice that was either too greasy or just plain bland. It\'s frustrating when you think you\'ve got it, only to find it\'s just not quite right. The secret, I found, is in the details, the little things that make all the difference. Don\'t skimp on fresh ginger, for starters. And the chicken fat? Absolutely essential for that truly fragrant rice. Auntie Mei would always say, \'Good food takes time, lah.\' And she was right. The chicken needs to be fresh, a good quality bird, not some sad, frozen thing. The ginger and garlic? They need to be pounded, not just chopped, to release their full aromatic punch. And the sauces, oh, the sauces! They\'re not an afterthought; they\'re half the dish. A good chili sauce, a vibrant ginger dip, and a rich dark soy are non-negotiable. Without them, you\'re just eating plain chicken and rice, and that\'s a crying shame. This recipe, it\'s my tribute to Auntie Mei, to all those hours spent learning, failing, and finally, getting it right. It\'s a labor of love, but every single bite is worth it.',
        image: '/recipe-images/2026-05-25.jpg',
        prepTime: '30 min',
        cookTime: '50 min',
        difficulty: 'Medium',
        servings: 4,
        ingredients: [
            { item: 'Whole chicken', amount: '1.5 kg, preferably a kampung chicken' },
            { item: 'Ginger', amount: '1 large knob (about 100g), sliced for poaching, 50g minced for rice, 50g minced for ginger sauce' },
            { item: 'Garlic', amount: '1 whole head, cloves smashed for poaching, 4 cloves minced for rice, 2 cloves minced for chili sauce' },
            { item: 'Spring onions', amount: '4 stalks, 2 for poaching, 2 for garnish' },
            { item: 'Cucumber', amount: '1, sliced for garnish' },
            { item: 'White rice', amount: '3 cups, jasmine' },
            { item: 'Chicken fat', amount: 'from the chicken, rendered' },
            { item: 'Salt', amount: '2 tbsp, plus more to taste' },
            { item: 'Sesame oil', amount: '1 tbsp' },
            { item: 'White pepper', amount: '1 tsp' },
            { item: 'Red chilies', amount: '6-8, deseeded if you prefer less heat' },
            { item: 'Lime juice', amount: '2 tbsp' },
            { item: 'Sugar', amount: '1 tsp' },
            { item: 'Chicken broth (from poaching)', amount: 'as needed for rice and serving' },
            { item: 'Dark soy sauce', amount: 'for serving' }
        ],
        instructions: [
            'First, let\'s get that chicken ready. Give your whole chicken a good rinse, inside and out. Pat it super dry with paper towels. Now, rub it all over with 2 tablespoons of salt, really get it into every crevice. Stuff the cavity with half of your sliced ginger and two stalks of spring onion. This is where the flavor starts, folks.',
            'Grab your biggest pot, one that can comfortably fit the whole chicken. Fill it with enough water to cover the chicken completely. Add the remaining sliced ginger and smashed garlic cloves. Bring it to a rolling boil, then carefully lower the chicken in. Once it\'s back to a boil, immediately reduce the heat to the lowest possible setting. You want the water to just barely shiver, not bubble. Cover the pot and let it poach for about 30-35 minutes. Don\'t peek too much! After this time, turn off the heat, but leave the chicken in the hot water, covered, for another 15-20 minutes. This gentle residual heat is key to that silky, tender texture. When you pull it out, the skin should look plump and glossy, and a skewer inserted into the thickest part of the thigh should yield clear juices.',
            'While the chicken is resting, carefully lift it out of the pot and immediately plunge it into an ice bath for 10 minutes. This stops the cooking, tightens the skin, and gives it that lovely, smooth finish. Don\'t skip this step; it\'s crucial! Once chilled, remove the chicken, pat it dry, and brush it lightly with sesame oil. Let it rest on a cutting board while you tackle the rice and sauces.',
            'Now for the rice, the soul of the dish! Skim off some of the chicken fat from your poaching liquid – you\'ll need about 2-3 tablespoons. Heat this fat in a medium pot over medium heat. Add your minced ginger and minced garlic. Sauté until they\'re fragrant and slightly golden, about 2-3 minutes; you\'ll smell that amazing aroma filling your kitchen. Add the washed and drained jasmine rice, stirring it around in the fat for a minute or two until every grain is glistening. This coats the rice and infuses it with flavor.',
            'Pour in 4.5 cups of the hot chicken poaching broth (the same liquid you cooked the chicken in!), add a teaspoon of salt and a dash of white pepper. Bring it to a boil, then reduce the heat to low, cover tightly, and cook for 15-18 minutes. Once done, turn off the heat and let it sit, covered, for another 10 minutes. Fluff it gently with a fork. The rice should be separate, fragrant, and slightly sticky.',
            'Time for the sauces! For the chili sauce: blend or finely mince the red chilies, 2 cloves of minced garlic, 1 tablespoon of lime juice, and 1 teaspoon of sugar. Add a pinch of salt and a tablespoon or two of chicken broth to get the right consistency. It should be vibrant and punchy. For the ginger sauce: finely mince the 50g of ginger, then mix it with 2 tablespoons of hot chicken fat (skimmed from the broth), a pinch of salt, and a splash of chicken broth. It should be a bright, zesty paste. And finally, a small bowl of good quality dark soy sauce is essential.',
            'Carve your chicken into serving pieces. Arrange the chicken on a platter, alongside slices of fresh cucumber and a sprinkle of chopped spring onions. Serve generous portions of the fragrant rice, a small bowl of the hot chicken broth on the side, and all three sauces. Each bite should be a mix of the tender chicken, aromatic rice, and a dab of each sauce. Enjoy the fruits of your labor!',
            'Don\'t forget to taste and adjust seasonings at every step. The broth, the rice, the sauces – they all need to sing on their own before they come together in harmony.'
        ],
        tags: ['Singaporean', 'Chicken', 'Rice', 'Asian', 'Dinner', 'Authentic'],
        seoTitle: 'Master Authentic Singapore Hainanese Chicken Rice Recipe',
        seoDescription: 'Craving the real deal? Learn my secrets to the perfect, authentic Singapore Hainanese chicken rice recipe. Juicy chicken, fragrant rice, and essential sauces await!',
        seoKeywords: 'authentic Singapore Hainanese chicken rice recipe, chicken rice, Singaporean food, Asian chicken recipe, poached chicken',
        translations: {
            hi: {
                title: 'हेनानी चिकन राइस',
                description: 'हेनानी चिकन राइस मेरे लिए सिर्फ एक व्यंजन नहीं, बल्कि आंटी मेई की यादें और उनके सिखाए प्यार का प्रतीक है। उन्होंने मुझे बताया था कि इस डिश में जल्दबाजी नहीं चलती, असली स्वाद तो धैर्य और \'महसूस\' करने से आता है। ताज़ा अदरक, चिकन फैट और सही सॉस ही इसकी जान हैं। कई बार गलतियाँ हुईं, पर हर बार मैंने सीखा कि छोटी-छोटी बातें ही इसे लाजवाब बनाती हैं। यह रेसिपी आंटी मेई को मेरी श्रद्धांजलि है, जिन्होंने मुझे सिखाया कि अच्छा खाना बनाने में समय और दिल दोनों लगते हैं।',
                ingredients: [{ item: 'साबुत चिकन', amount: '1.5 किलो, हो सके तो देसी चिकन' }, { item: 'अदरक', amount: '1 बड़ा टुकड़ा (लगभग 100 ग्राम), उबालने के लिए कटा हुआ, 50 ग्राम चावल के लिए बारीक कटा, 50 ग्राम अदरक की चटनी के लिए बारीक कटा' }, { item: 'लहसुन', amount: '1 पूरा गांठ, उबालने के लिए कुचली हुई कलियाँ, 4 कलियाँ चावल के लिए बारीक कटी, 2 कलियाँ चिली सॉस के लिए बारीक कटी' }, { item: 'हरी प्याज', amount: '4 डंठल, 2 उबालने के लिए, 2 सजाने के लिए' }, { item: 'खीरा', amount: '1, सजाने के लिए कटा हुआ' }, { item: 'सफेद चावल', amount: '3 कप, जैस्मीन' }, { item: 'चिकन की चर्बी', amount: 'चिकन से निकली हुई, पिघली हुई' }, { item: 'नमक', amount: '2 बड़े चम्मच, और स्वादानुसार' }, { item: 'तिल का तेल', amount: '1 बड़ा चम्मच' }, { item: 'सफेद मिर्च पाउडर', amount: '1 छोटा चम्मच' }, { item: 'लाल मिर्च', amount: '6-8, अगर कम तीखा पसंद हो तो बीज निकाल दें' }, { item: 'नींबू का रस', amount: '2 बड़े चम्मच' }, { item: 'चीनी', amount: '1 छोटा चम्मच' }, { item: 'चिकन शोरबा (उबालने से निकला हुआ)', amount: 'चावल और परोसने के लिए आवश्यकतानुसार' }, { item: 'डार्क सोया सॉस', amount: 'परोसने के लिए' }],
                instructions: ['सबसे पहले चिकन तैयार करें। साबुत चिकन को अंदर और बाहर से अच्छी तरह धोकर कागज़ के तौलिये से एकदम सूखा पोंछ लें। अब इस पर 2 बड़े चम्मच नमक अच्छी तरह मलें, हर कोने में नमक लगना चाहिए। चिकन के अंदर आधे कटे हुए अदरक और हरी प्याज के दो डंठल भर दें। यहीं से स्वाद की शुरुआत होती है।', 'अपना सबसे बड़ा बर्तन लें, जिसमें पूरा चिकन आराम से आ जाए। इसमें इतना पानी भरें कि चिकन पूरी तरह डूब जाए। बचा हुआ कटा अदरक और कुचली हुई लहसुन की कलियाँ डालें। पानी में उबाल आने दें, फिर सावधानी से चिकन को इसमें डालें। दोबारा उबाल आने पर, आंच को एकदम धीमा कर दें। पानी बस हल्का-सा हिलना चाहिए, बुलबुले नहीं आने चाहिए। बर्तन को ढककर 30-35 मिनट तक धीमी आंच पर पकाएं। बार-बार ढक्कन न खोलें! इस समय के बाद, आंच बंद कर दें, लेकिन चिकन को ढका हुआ गरम पानी में 15-20 मिनट और रहने दें। यह धीमी गर्मी ही चिकन को रेशमी और नरम बनाती है। जब आप इसे निकालेंगे, तो त्वचा भरी हुई और चमकदार दिखेगी, और जांघ के सबसे मोटे हिस्से में सीख डालने पर साफ रस निकलना चाहिए।', 'जब चिकन आराम कर रहा हो, तो इसे सावधानी से बर्तन से निकालकर तुरंत 10 मिनट के लिए बर्फ के पानी में डाल दें। इससे पकने की प्रक्रिया रुक जाती है, त्वचा कस जाती है और उसे एक सुंदर, चिकनी बनावट मिलती है। इस कदम को छोड़ें नहीं, यह बहुत ज़रूरी है! ठंडा होने पर, चिकन को निकालें, सूखा पोंछें और हल्के से तिल का तेल लगाएं। इसे एक कटिंग बोर्ड पर आराम करने दें, जब तक आप चावल और सॉस तैयार करते हैं।', 'अब चावल की बारी, जो इस डिश की जान है! उबालने वाले पानी से थोड़ी चिकन की चर्बी निकाल लें – आपको लगभग 2-3 बड़े चम्मच चाहिए होगी। इस चर्बी को मध्यम आंच पर एक मध्यम बर्तन में गरम करें। बारीक कटा अदरक और बारीक कटा लहसुन डालें। खुशबू आने और हल्का सुनहरा होने तक, लगभग 2-3 मिनट तक भूनें; आपकी रसोई में अद्भुत खुशबू भर जाएगी। धुले और निथारे हुए जैस्मीन चावल डालें, और चर्बी में एक-दो मिनट तक तब तक चलाएं जब तक हर दाना चमकने न लगे। यह चावल को कोट करता है और उसमें स्वाद भर देता है।', 'गरम चिकन शोरबा (जिस पानी में चिकन उबाला था!) के 4.5 कप डालें, एक छोटा चम्मच नमक और थोड़ी सफेद मिर्च पाउडर डालें। इसे उबाल आने दें, फिर आंच धीमी करके, कसकर ढककर 15-18 मिनट तक पकाएं। पकने के बाद, आंच बंद कर दें और इसे ढका हुआ 10 मिनट और रहने दें। कांटे से धीरे से फुलाएं। चावल अलग-अलग, खुशबूदार और हल्का चिपचिपा होना चाहिए।', 'अब सॉस की बारी! चिली सॉस के लिए: लाल मिर्च, 2 बारीक कटी लहसुन की कलियाँ, 1 बड़ा चम्मच नींबू का रस और 1 छोटा चम्मच चीनी को ब्लेंड करें या बारीक काट लें। सही गाढ़ापन पाने के लिए एक चुटकी नमक और एक या दो बड़े चम्मच चिकन शोरबा डालें। यह चटपटा और तीखा होना चाहिए। अदरक की चटनी के लिए: 50 ग्राम अदरक को बारीक काट लें, फिर इसे 2 बड़े चम्मच गरम चिकन चर्बी (शोरबे से निकाली हुई), एक चुटकी नमक और थोड़े चिकन शोरबे के साथ मिलाएं। यह एक चमकदार, तीखी पेस्ट होनी चाहिए। और अंत में, अच्छी गुणवत्ता वाले डार्क सोया सॉस की एक छोटी कटोरी ज़रूरी है।', 'चिकन को परोसने वाले टुकड़ों में काट लें। चिकन को एक थाली में ताज़े खीरे के स्लाइस और कटी हुई हरी प्याज के साथ सजाएं। खुशबूदार चावल की भरपूर मात्रा, गरमागरम चिकन शोरबे की एक छोटी कटोरी और तीनों सॉस के साथ परोसें। हर निवाला नरम चिकन, खुशबूदार चावल और हर सॉस का मिश्रण होना चाहिए। अपनी मेहनत का फल चखें!', 'हर कदम पर स्वाद चखना और मसालों को समायोजित करना न भूलें। शोरबा, चावल, सॉस – सभी को एक साथ मिलकर एक मधुर स्वाद देने से पहले अपने आप में स्वादिष्ट होना चाहिए।'],
                seoTitle: 'हेनानी चिकन राइस रेसिपी हिंदी में: घर पर बनाएं प्रामाणिक स्वाद',
                seoDescription: 'आंटी मेई की खास हेनानी चिकन राइस रेसिपी हिंदी में सीखें! नरम चिकन, खुशबूदार चावल और लाजवाब सॉस के साथ घर पर बनाएं यह क्लासिक डिश। हेनानी चिकन राइस रेसिपी हिंदी में।',
                seoKeywords: 'हेनानी चिकन राइस रेसिपी हिंदी में, हेनानी चिकन राइस बनाने की विधि, चिकन राइस, सिंगापुरियन चिकन राइस, एशियन चिकन राइस'
            },
            bn: {
                title: 'হাইনানিজ চিকেন রাইস',
                description: 'হাইনানিজ চিকেন রাইস শুধু একটা খাবার নয়, এটা যেন এক টুকরো স্মৃতি, একরাশ ভালোবাসা। মাসি মেইয়ের ছোট্ট রান্নাঘরে এই পদটি তৈরি করা শিখেছিলাম, যেখানে তিনি শুধু মাপজোক নয়, বরং \'অনুভূতি\' দিয়ে রান্না করতেন। তিনি বলতেন, মুরগিকে তাড়াহুড়ো করলে হবে না, চালের স্বাদও আসবে না। আসল জাদুটা লুকিয়ে আছে ছোট ছোট খুঁটিনাটিতে – টাটকা আদা, মুরগির চর্বি আর তিন ধরনের সস। এই রেসিপিটা মাসি মেইয়ের প্রতি আমার শ্রদ্ধাঞ্জলি, প্রতিটি কামড়েই সেই পরিশ্রম আর ভালোবাসার স্বাদ পাওয়া যায়।',
                ingredients: [{ item: 'আস্ত মুরগি', amount: '১.৫ কেজি, দেশি মুরগি হলে ভালো হয়' }, { item: 'আদা', amount: '১টি বড় টুকরো (প্রায় ১০০ গ্রাম), সেদ্ধ করার জন্য স্লাইস করা, ভাতের জন্য ৫০ গ্রাম কুচি, আদার সসের জন্য ৫০ গ্রাম কুচি' }, { item: 'রসুন', amount: '১টি আস্ত, সেদ্ধ করার জন্য থেঁতো করা, ভাতের জন্য ৪ কোয়া কুচি, চিলি সসের জন্য ২ কোয়া কুচি' }, { item: 'স্প্রিং অনিয়ন (পেঁয়াজ কলি)', amount: '৪টি ডাঁটা, ২টি সেদ্ধ করার জন্য, ২টি সাজানোর জন্য' }, { item: 'শসা', amount: '১টি, সাজানোর জন্য স্লাইস করা' }, { item: 'সাদা চাল', amount: '৩ কাপ, জেসমিন চাল' }, { item: 'মুরগির চর্বি', amount: 'মুরগি থেকে বের করা, গলানো' }, { item: 'লবণ', amount: '২ টেবিল চামচ, এবং স্বাদমতো আরও' }, { item: 'তিলের তেল', amount: '১ টেবিল চামচ' }, { item: 'সাদা গোলমরিচ', amount: '১ চা চামচ' }, { item: 'লাল কাঁচা লঙ্কা', amount: '৬-৮টি, ঝাল কম চাইলে বীজ ফেলে দিন' }, { item: 'লেবুর রস', amount: '২ টেবিল চামচ' }, { item: 'চিনি', amount: '১ চা চামচ' }, { item: 'মুরগির স্টক (সেদ্ধ করার জল)', amount: 'ভাত ও পরিবেশনের জন্য প্রয়োজনমতো' }, { item: 'ডার্ক সয়া সস', amount: 'পরিবেশনের জন্য' }],
                instructions: ['প্রথমে মুরগিটা তৈরি করে নিন। আস্ত মুরগিটা ভেতর-বাইরে ভালো করে ধুয়ে নিন। কিচেন টাওয়েল দিয়ে একদম শুকনো করে মুছে নিন। এবার ২ টেবিল চামচ লবণ দিয়ে মুরগির গায়ে ভালো করে মেখে নিন, প্রতিটি খাঁজে যেন লবণ পৌঁছায়। মুরগির পেটের ভেতর অর্ধেক স্লাইস করা আদা আর দুটো স্প্রিং অনিয়ন ভরে দিন। এখান থেকেই আসল স্বাদ আসা শুরু হবে।', 'আপনার সবচেয়ে বড় হাঁড়িটা নিন, যাতে আস্ত মুরগিটা অনায়াসে ধরে যায়। হাঁড়িতে এত জল দিন যাতে মুরগিটা পুরোপুরি ডুবে যায়। বাকি স্লাইস করা আদা আর থেঁতো করা রসুনের কোয়াগুলো জলে দিয়ে দিন। জল ফুটে উঠলে সাবধানে মুরগিটা নামিয়ে দিন। আবার ফুটে উঠলে সঙ্গে সঙ্গে আঁচ একদম কমিয়ে দিন। জল যেন শুধু কাঁপে, বুদবুদ না ওঠে। হাঁড়ি ঢেকে ৩০-৩৫ মিনিট সেদ্ধ করুন। খুব বেশি ঢাকনা খুলবেন না! এই সময় পর আঁচ বন্ধ করে দিন, কিন্তু মুরগিটা গরম জলেই ঢাকা অবস্থায় আরও ১৫-২০ মিনিট রেখে দিন। এই মৃদু তাপেই মুরগিটা নরম আর রেশমি হবে। যখন মুরগিটা তুলবেন, চামড়াটা ফোলা আর চকচকে দেখাবে, আর উরুর সবচেয়ে মোটা অংশে কাঠি ঢোকালে পরিষ্কার রস বেরোবে।', 'মুরগিটা বিশ্রাম নেওয়ার সময়, সাবধানে হাঁড়ি থেকে তুলে সঙ্গে সঙ্গে বরফ জলে ১০ মিনিটের জন্য ডুবিয়ে দিন। এতে রান্না বন্ধ হয়ে যাবে, চামড়া টানটান হবে এবং সুন্দর মসৃণ দেখাবে। এই ধাপটা বাদ দেবেন না, এটা খুবই জরুরি! ঠান্ডা হয়ে গেলে মুরগিটা তুলে শুকনো করে মুছে তিলের তেল হালকা করে ব্রাশ করে নিন। ভাত আর সস তৈরির সময় এটা একটা কাটিং বোর্ডে রেখে দিন।', 'এবার ভাতের পালা, এটাই তো এই পদের প্রাণ! মুরগি সেদ্ধ করার জল থেকে ২-৩ টেবিল চামচ মুরগির চর্বি তুলে নিন। মাঝারি আঁচে একটা মাঝারি হাঁড়িতে এই চর্বি গরম করুন। কুচি করা আদা আর রসুন দিয়ে দিন। সুগন্ধ বেরোনো পর্যন্ত এবং হালকা সোনালি হওয়া পর্যন্ত ২-৩ মিনিট ভাজুন; আপনার রান্নাঘর অসাধারণ গন্ধে ভরে যাবে। ধুয়ে জল ঝরানো জেসমিন চাল দিয়ে চর্বির সাথে ১-২ মিনিট নাড়াচাড়া করুন যতক্ষণ না প্রতিটি চাল চকচকে হয়ে ওঠে। এতে চালের গায়ে চর্বি লেগে যায় আর স্বাদ ঢুকে যায়।', 'গরম মুরগির স্টক (যে জলে মুরগি সেদ্ধ করেছেন!) ৪.৫ কাপ ঢেলে দিন, ১ চা চামচ লবণ আর সামান্য সাদা গোলমরিচ দিন। ফুটে উঠলে আঁচ কমিয়ে ঢাকনা দিয়ে ১৫-১৮ মিনিট রান্না করুন। হয়ে গেলে আঁচ বন্ধ করে ঢাকা অবস্থায় আরও ১০ মিনিট রেখে দিন। কাঁটাচামচ দিয়ে আলতো করে ঝরঝরে করে নিন। ভাত ঝরঝরে, সুগন্ধি আর সামান্য আঠালো হবে।', 'এবার সস তৈরির পালা! চিলি সসের জন্য: লাল কাঁচা লঙ্কা, ২ কোয়া কুচি রসুন, ১ টেবিল চামচ লেবুর রস আর ১ চা চামচ চিনি ব্লেন্ড করে বা মিহি করে কুচি করে নিন। সঠিক ঘনত্ব আনার জন্য এক চিমটি লবণ আর এক-দুই টেবিল চামচ মুরগির স্টক যোগ করুন। এটা যেন উজ্জ্বল আর ঝাঁঝালো হয়। আদার সসের জন্য: ৫০ গ্রাম আদা মিহি করে কুচি করে নিন, তারপর ২ টেবিল চামচ গরম মুরগির চর্বি (স্টক থেকে তোলা), এক চিমটি লবণ আর সামান্য মুরগির স্টক দিয়ে মিশিয়ে নিন। এটা যেন উজ্জ্বল, সতেজ পেস্ট হয়। আর সবশেষে, এক বাটি ভালো মানের ডার্ক সয়া সস অপরিহার্য।', 'মুরগিটা পরিবেশনের জন্য টুকরো করে কেটে নিন। একটা প্লেটে মুরগির টুকরোগুলো সাজিয়ে নিন, সাথে টাটকা শসার স্লাইস আর কুচি করা স্প্রিং অনিয়ন ছড়িয়ে দিন। সুগন্ধি ভাতের উদার অংশ, পাশে এক বাটি গরম মুরগির স্টক এবং তিনটি সস পরিবেশন করুন। প্রতিটি কামড়ে নরম মুরগি, সুগন্ধি ভাত আর প্রতিটি সসের ছোঁয়া যেন থাকে। আপনার পরিশ্রমের ফল উপভোগ করুন!', 'প্রতিটি ধাপে স্বাদ চেখে লবণ বা মশলা প্রয়োজনমতো যোগ করতে ভুলবেন না। স্টক, ভাত, সস – সবকিছুরই নিজস্ব স্বাদ থাকা চাই, তবেই তারা একসাথে মিলেমিশে এক অসাধারণ পদ তৈরি করবে।'],
                seoTitle: 'হাইনানিজ চিকেন রাইস রেসিপি: মাসি মেইয়ের গোপন কৌশল',
                seoDescription: 'মাসি মেইয়ের হাতে গড়া আসল হাইনানিজ চিকেন রাইস রেসিপি শিখুন। নরম মুরগি, সুগন্ধি ভাত আর তিন ধরনের সসের জাদুতে আপনার রান্নাঘর ভরে উঠুক। ধাপে ধাপে তৈরি করুন এই ক্লাসিক পদ।',
                seoKeywords: 'হাইনানিজ চিকেন রাইস রেসিপি, হাইনানিজ চিকেন রাইস তৈরির পদ্ধতি, চাইনিজ চিকেন রেসিপি, সুগন্ধি ভাত, মুরগির সস'
            },
            mr: {
                title: 'हैनानी चिकन राईस',
                description: 'हैनानी चिकन राईस म्हणजे फक्त एक पदार्थ नाही, तर ती एक आठवण आहे, एक समाधान आहे. माझ्या मावशीकडून शिकलेली ही पाककृती, जिथे प्रत्येक गोष्ट \'अनुभवाने\' करायची असते. कोंबडीला घाई न करता शिजवणे, तांदळाला चिकनच्या चरबीचा सुगंध देणे, आणि आले-लसूण ठेचून वापरणे हेच या पदार्थाचे खरे रहस्य आहे. चटण्या तर या डिशचा आत्मा आहेत! प्रत्येक घास म्हणजे मावशीच्या शिकवणीची आठवण, एक प्रेमाची मेजवानी.',
                ingredients: [{ item: 'अख्खी कोंबडी', amount: '१.५ किलो, शक्यतो गावठी कोंबडी' }, { item: 'आले', amount: '१ मोठा तुकडा (सुमारे १०० ग्रॅम), उकळण्यासाठी कापलेले, भातासाठी ५० ग्रॅम किसलेले, आल्याच्या चटणीसाठी ५० ग्रॅम किसलेले' }, { item: 'लसूण', amount: '१ अख्खा गड्डा, उकळण्यासाठी ठेचलेल्या पाकळ्या, भातासाठी ४ पाकळ्या किसलेल्या, मिरचीच्या चटणीसाठी २ पाकळ्या किसलेल्या' }, { item: 'कांद्याची पात', amount: '४ देठ, २ उकळण्यासाठी, २ सजावटीसाठी' }, { item: 'काकडी', amount: '१, सजावटीसाठी कापलेली' }, { item: 'पांढरा तांदूळ', amount: '३ कप, जास्मिन' }, { item: 'कोंबडीची चरबी', amount: 'कोंबडीतून काढलेली, वितळवलेली' }, { item: 'मीठ', amount: '२ मोठे चमचे, आणि चवीनुसार अधिक' }, { item: 'तीळाचे तेल', amount: '१ मोठा चमचा' }, { item: 'पांढरी मिरी पूड', amount: '१ लहान चमचा' }, { item: 'लाल मिरच्या', amount: '६-८, कमी तिखट हवे असल्यास बिया काढलेल्या' }, { item: 'लिंबाचा रस', amount: '२ मोठे चमचे' }, { item: 'साखर', amount: '१ लहान चमचा' }, { item: 'चिकन सूप (उकळलेल्या कोंबडीचे)', amount: 'भातासाठी आणि वाढण्यासाठी आवश्यकतेनुसार' }, { item: 'डार्क सोया सॉस', amount: 'वाढण्यासाठी' }],
                instructions: ['सगळ्यात आधी कोंबडी तयार करून घेऊया. कोंबडी आतून-बाहेरून स्वच्छ धुऊन, कागदी टॉवेलने पूर्णपणे कोरडी करा. आता २ मोठे चमचे मीठ कोंबडीला सर्व बाजूंनी, प्रत्येक कोपऱ्यात व्यवस्थित चोळा. कोंबडीच्या पोटात अर्धे कापलेले आले आणि दोन कांद्याच्या पातीचे देठ भरा. इथूनच खरी चव यायला सुरुवात होते.', 'सर्वात मोठे भांडे घ्या, ज्यात कोंबडी आरामात बसेल. त्यात कोंबडी पूर्णपणे बुडेल इतके पाणी भरा. उरलेले कापलेले आले आणि ठेचलेल्या लसणाच्या पाकळ्या घाला. पाण्याला उकळी आल्यावर, कोंबडी हळूच पाण्यात सोडा. पुन्हा उकळी आल्यावर, लगेच गॅस अगदी मंद आचेवर करा. पाणी फक्त हलके हलले पाहिजे, बुडबुडे नकोत. भांडे झाकून ३०-३५ मिनिटे कोंबडी शिजवा. जास्त वेळा झाकण उघडू नका! यानंतर गॅस बंद करा, पण कोंबडी गरम पाण्यात झाकून आणखी १५-२० मिनिटे तशीच राहू द्या. या मंद उष्णतेमुळे कोंबडी मऊ आणि रेशमी होते. कोंबडी बाहेर काढल्यावर तिची त्वचा टपोरी आणि चमकदार दिसेल, आणि मांडीच्या जाडसर भागात सुरी घातल्यास स्वच्छ रस बाहेर येईल.', 'कोंबडी गरम पाण्यात असतानाच, तिला काळजीपूर्वक बाहेर काढून लगेच बर्फाच्या पाण्यात १० मिनिटे ठेवा. यामुळे शिजण्याची प्रक्रिया थांबते, त्वचा घट्ट होते आणि तिला सुंदर, गुळगुळीत चमक येते. ही पायरी अजिबात वगळू नका, ती खूप महत्त्वाची आहे! थंड झाल्यावर कोंबडी बाहेर काढून कोरडी करा आणि तीळाचे तेल हलकेच लावा. भात आणि चटण्या तयार करेपर्यंत तिला कटिंग बोर्डवर ठेवा.', 'आता भाताची तयारी करूया, जो या डिशचा आत्मा आहे! कोंबडीच्या सूपमधून २-३ मोठे चमचे चिकनची चरबी काढून घ्या. ही चरबी मध्यम आचेवर एका मध्यम भांड्यात गरम करा. त्यात किसलेले आले आणि किसलेला लसूण घालून २-३ मिनिटे परता, जोपर्यंत ते सुगंधित आणि हलके सोनेरी होत नाहीत; तुमच्या स्वयंपाकघरात तो अप्रतिम सुगंध दरवळेल. धुतलेला आणि निथळलेला जास्मिन तांदूळ घालून, प्रत्येक दाणा चमकदार होईपर्यंत १-२ मिनिटे चरबीत परतून घ्या. यामुळे तांदळाला चव येते आणि तो सुगंधित होतो.', '४.५ कप गरम चिकन सूप (ज्यात कोंबडी शिजवली होती तेच पाणी!) घाला, १ लहान चमचा मीठ आणि चिमूटभर पांढरी मिरी पूड घाला. उकळी आल्यावर गॅस मंद करा, भांडे घट्ट झाकून १५-१८ मिनिटे शिजवा. शिजल्यावर गॅस बंद करा आणि झाकून आणखी १० मिनिटे तसेच राहू द्या. काट्याने हलकेच मोकळा करा. भात मोकळा, सुगंधित आणि थोडा चिकट असावा.', 'आता चटण्यांची वेळ! मिरचीच्या चटणीसाठी: लाल मिरच्या, २ किसलेल्या लसणाच्या पाकळ्या, १ मोठा चमचा लिंबाचा रस आणि १ लहान चमचा साखर एकत्र वाटून घ्या किंवा बारीक चिरून घ्या. चवीनुसार मीठ आणि १-२ मोठे चमचे चिकन सूप घालून योग्य सुसंगतता आणा. ती चटणी चमकदार आणि तिखट असावी. आल्याच्या चटणीसाठी: ५० ग्रॅम आले बारीक किसून घ्या, नंतर त्यात २ मोठे चमचे गरम चिकन चरबी (सूपमधून काढलेली), चिमूटभर मीठ आणि थोडे चिकन सूप घालून मिसळा. ती एक चमकदार, तिखट पेस्ट असावी. आणि शेवटी, चांगल्या प्रतीचा डार्क सोया सॉसची एक छोटी वाटी आवश्यक आहे.', 'कोंबडीचे वाढण्यासाठी योग्य तुकडे करा. एका ताटात कोंबडी, ताज्या काकडीचे काप आणि चिरलेली कांद्याची पात घालून सजवा. सुगंधित भाताचे मोठे भाग, बाजूला गरम चिकन सूपची छोटी वाटी आणि तिन्ही चटण्यांसह वाढा. प्रत्येक घासात मऊ कोंबडी, सुगंधित भात आणि प्रत्येक चटणीचा स्पर्श असावा. तुमच्या मेहनतीचा आनंद घ्या!', 'प्रत्येक टप्प्यावर चव घेऊन मीठ-मसाले आवश्यकतेनुसार समायोजित करायला विसरू नका. सूप, भात, चटण्या – हे सर्व एकत्र येण्यापूर्वी स्वतःच चविष्ट असले पाहिजेत.'],
                seoTitle: 'हैनानी चिकन राईस रेसिपी मराठी: अस्सल चवीचा अनुभव घ्या!',
                seoDescription: 'मावशीच्या हातची चव असलेला अस्सल हैनानी चिकन राईस रेसिपी मराठीत शिका. मऊ कोंबडी, सुगंधित भात आणि खास चटण्यांसह ही डिश घरीच बनवा. सोपी आणि स्वादिष्ट!',
                seoKeywords: 'हैनानी चिकन राईस रेसिपी मराठी, हैनानी चिकन राईस कसा बनवायचा, चिकन राईस रेसिपी, चायनीज चिकन रेसिपी, घरगुती चिकन राईस'
            },
            te: {
                title: 'హైనానీస్ చికెన్ రైస్',
                description: 'హైనానీస్ చికెన్ రైస్ అంటే కేవలం వంటకం కాదు, అది ఒక మధురమైన జ్ఞాపకం. మా అత్తయ్య మేయి దగ్గర నేర్చుకున్న ఈ వంటకంలో, కొలతల కంటే \'అనుభూతి\'కే ప్రాధాన్యత ఎక్కువ. చికెన్‌ను తొందరపెట్టకుండా, నెమ్మదిగా వండాలి. అప్పుడే దాని రుచి పూర్తిగా బయటపడుతుంది. మంచి అల్లం, చికెన్ కొవ్వు వాడటం చాలా ముఖ్యం. ముఖ్యంగా, చిల్లీ సాస్, అల్లం డిప్, డార్క్ సోయా సాస్ లేకుండా ఈ వంటకం అసంపూర్ణం. ప్రతి ముద్దలో అత్తయ్య ప్రేమ, శ్రమ కనిపిస్తాయి. ఇది నిజంగా రుచికి ఒక అద్భుతం.',
                ingredients: [{ item: 'మొత్తం కోడి', amount: '1.5 కిలోలు, వీలైతే నాటు కోడి' }, { item: 'అల్లం', amount: '1 పెద్ద ముక్క (సుమారు 100 గ్రా), ఉడకబెట్టడానికి ముక్కలుగా, అన్నం కోసం 50 గ్రా తరిగినది, అల్లం సాస్ కోసం 50 గ్రా తరిగినది' }, { item: 'వెల్లుల్లి', amount: '1 మొత్తం గడ్డ, ఉడకబెట్టడానికి దంచిన రెబ్బలు, అన్నం కోసం 4 రెబ్బలు తరిగినవి, చిల్లీ సాస్ కోసం 2 రెబ్బలు తరిగినవి' }, { item: 'స్ప్రింగ్ ఆనియన్స్', amount: '4 కాడలు, 2 ఉడకబెట్టడానికి, 2 అలంకరణకు' }, { item: 'దోసకాయ', amount: '1, అలంకరణకు ముక్కలుగా' }, { item: 'తెల్ల బియ్యం', amount: '3 కప్పులు, జాస్మిన్' }, { item: 'కోడి కొవ్వు', amount: 'కోడి నుండి తీసినది, కరిగించినది' }, { item: 'ఉప్పు', amount: '2 టేబుల్ స్పూన్లు, రుచికి సరిపడా' }, { item: 'నువ్వుల నూనె', amount: '1 టేబుల్ స్పూన్' }, { item: 'తెల్ల మిరియాల పొడి', amount: '1 టీస్పూన్' }, { item: 'ఎర్ర మిరపకాయలు', amount: '6-8, కారం తక్కువ కావాలంటే గింజలు తీసేయండి' }, { item: 'నిమ్మరసం', amount: '2 టేబుల్ స్పూన్లు' }, { item: 'చక్కెర', amount: '1 టీస్పూన్' }, { item: 'చికెన్ రసం (ఉడకబెట్టినది)', amount: 'అన్నం మరియు వడ్డించడానికి అవసరమైనంత' }, { item: 'డార్క్ సోయా సాస్', amount: 'వడ్డించడానికి' }],
                instructions: ['ముందుగా, కోడిని సిద్ధం చేసుకుందాం. కోడిని లోపల, బయట శుభ్రంగా కడిగి, పేపర్ టవల్స్‌తో పూర్తిగా ఆరబెట్టండి. ఇప్పుడు, 2 టేబుల్ స్పూన్ల ఉప్పుతో కోడి అంతటా బాగా రుద్దండి, ప్రతి సందులోనూ ఉప్పు పట్టేలా చూడండి. కోడి లోపల సగం అల్లం ముక్కలు మరియు రెండు స్ప్రింగ్ ఆనియన్ కాడలు పెట్టండి. ఇక్కడి నుంచే రుచి మొదలవుతుంది.', 'మీ దగ్గర ఉన్న పెద్ద గిన్నెను తీసుకోండి, అందులో కోడి పూర్తిగా పట్టాలి. కోడి మునిగేంత నీటిని నింపండి. మిగిలిన అల్లం ముక్కలు, దంచిన వెల్లుల్లి రెబ్బలు వేయండి. నీటిని బాగా మరిగించి, ఆపై కోడిని జాగ్రత్తగా అందులో దించండి. మళ్ళీ నీరు మరగడం మొదలుపెట్టగానే, మంటను పూర్తిగా తగ్గించండి. నీరు కేవలం కదులుతున్నట్లు ఉండాలి, మరగకూడదు. గిన్నెను మూతపెట్టి, 30-35 నిమిషాలు ఉడకనివ్వండి. మధ్యలో ఎక్కువగా చూడకండి! ఈ సమయం తర్వాత, మంట ఆపి, కోడిని వేడి నీటిలోనే, మూతపెట్టి మరో 15-20 నిమిషాలు ఉంచండి. ఈ నెమ్మదిగా ఉడికే వేడి, కోడికి మృదువైన ఆకృతిని ఇస్తుంది. బయటకు తీసినప్పుడు, చర్మం నిగనిగలాడుతూ ఉండాలి, తొడ భాగంలో గుచ్చితే స్పష్టమైన రసం రావాలి.', 'కోడి విశ్రాంతి తీసుకుంటున్నప్పుడు, దానిని జాగ్రత్తగా గిన్నె నుండి తీసి, వెంటనే 10 నిమిషాలు ఐస్ నీటిలో వేయండి. ఇది వంటను ఆపి, చర్మాన్ని బిగుతుగా చేసి, మృదువైన రూపాన్ని ఇస్తుంది. ఈ దశను వదిలివేయకండి, ఇది చాలా ముఖ్యం! చల్లబడిన తర్వాత, కోడిని తీసి, ఆరబెట్టి, నువ్వుల నూనెతో తేలికగా రాయండి. అన్నం, సాస్‌లు సిద్ధం చేసేటప్పుడు దానిని కటింగ్ బోర్డుపై విశ్రాంతి తీసుకోనివ్వండి.', 'ఇప్పుడు అన్నం కోసం, వంటకానికి ప్రాణం! ఉడకబెట్టిన రసం నుండి కొద్దిగా కోడి కొవ్వును తీయండి – మీకు సుమారు 2-3 టేబుల్ స్పూన్లు అవసరం. ఈ కొవ్వును మధ్యస్థ మంటపై ఒక మధ్యస్థ గిన్నెలో వేడి చేయండి. తరిగిన అల్లం, తరిగిన వెల్లుల్లి వేయండి. అవి సువాసన వచ్చి, కొద్దిగా బంగారు రంగులోకి మారే వరకు 2-3 నిమిషాలు వేయించండి; మీ వంటగదిలో అద్భుతమైన సువాసన నిండిపోతుంది. కడిగి, నీరు తీసిన జాస్మిన్ బియ్యాన్ని వేసి, ప్రతి గింజ మెరిసే వరకు ఒకటి రెండు నిమిషాలు కొవ్వులో కలపండి. ఇది బియ్యానికి పూత పూసి, రుచిని నింపుతుంది.', '4.5 కప్పుల వేడి చికెన్ రసం (కోడిని ఉడకబెట్టిన అదే ద్రవం!) పోయండి, ఒక టీస్పూన్ ఉప్పు, కొద్దిగా తెల్ల మిరియాల పొడి వేయండి. మరగబెట్టి, ఆపై మంటను తగ్గించి, గట్టిగా మూతపెట్టి, 15-18 నిమిషాలు ఉడికించండి. పూర్తయిన తర్వాత, మంట ఆపి, మూతపెట్టి మరో 10 నిమిషాలు అలాగే ఉంచండి. ఫోర్క్‌తో మెల్లగా కలపండి. అన్నం విడివిడిగా, సువాసనగా, కొద్దిగా జిగురుగా ఉండాలి.', 'ఇప్పుడు సాస్‌ల సమయం! చిల్లీ సాస్ కోసం: ఎర్ర మిరపకాయలు, 2 రెబ్బల తరిగిన వెల్లుల్లి, 1 టేబుల్ స్పూన్ నిమ్మరసం, 1 టీస్పూన్ చక్కెరను బ్లెండ్ చేయండి లేదా సన్నగా తరగండి. సరైన చిక్కదనం కోసం చిటికెడు ఉప్పు, ఒకటి రెండు టేబుల్ స్పూన్ల చికెన్ రసం కలపండి. ఇది ప్రకాశవంతంగా, ఘాటుగా ఉండాలి. అల్లం సాస్ కోసం: 50 గ్రా అల్లాన్ని సన్నగా తరిగి, 2 టేబుల్ స్పూన్ల వేడి చికెన్ కొవ్వు (రసం నుండి తీసినది), చిటికెడు ఉప్పు, కొద్దిగా చికెన్ రసంతో కలపండి. ఇది ప్రకాశవంతమైన, పుల్లని పేస్ట్‌లా ఉండాలి. చివరగా, ఒక చిన్న గిన్నెలో మంచి నాణ్యత గల డార్క్ సోయా సాస్ తప్పనిసరి.', 'కోడిని వడ్డించే ముక్కలుగా కోయండి. కోడిని ఒక పళ్ళెంలో, తాజా దోసకాయ ముక్కలు, తరిగిన స్ప్రింగ్ ఆనియన్స్ పైన చల్లి అమర్చండి. సువాసనగల అన్నాన్ని, పక్కన ఒక చిన్న గిన్నెలో వేడి చికెన్ రసాన్ని, మరియు మూడు సాస్‌లను ఉదారంగా వడ్డించండి. ప్రతి ముద్దలో మృదువైన కోడి, సువాసనగల అన్నం, మరియు ప్రతి సాస్ కొద్దిగా ఉండాలి. మీ శ్రమ ఫలితాన్ని ఆస్వాదించండి!', 'ప్రతి దశలోనూ రుచి చూసి, మసాలాలను సర్దుబాటు చేయడం మర్చిపోవద్దు. రసం, అన్నం, సాస్‌లు – అన్నీ కలిసి సామరస్యంగా మారడానికి ముందు వాటికవే రుచిగా ఉండాలి.'],
                seoTitle: 'అసలైన హైనానీస్ చికెన్ రైస్ రెసిపీ తెలుగులో',
                seoDescription: 'మా అత్తయ్య మేయి రహస్యాలతో అసలైన హైనానీస్ చికెన్ రైస్ రెసిపీ తెలుగులో నేర్చుకోండి. మృదువైన చికెన్, సువాసనగల అన్నం, ఘాటైన సాస్‌లతో ఈ అద్భుతమైన వంటకాన్ని ఇంట్లోనే తయారుచేయండి.',
                seoKeywords: 'హైనానీస్ చికెన్ రైస్ రెసిపీ తెలుగులో, హైనానీస్ చికెన్ రైస్ ఎలా చేయాలి, సింగపూర్ చికెన్ రైస్, చికెన్ రైస్ వంటకం, సులభమైన చికెన్ రెసిపీ'
            },
            ta: {
                title: 'ஹைனானீஸ் சிக்கன் ரைஸ்',
                description: 'ஹைனானீஸ் சிக்கன் ரைஸ் என்பது வெறும் உணவு அல்ல, அது ஒரு நினைவூட்டும் அனுபவம். என் அத்தை மேய், தியோங் பாருவில் உள்ள அவரது சிறிய சமையலறையில் இதை எப்படி செய்வது என்று எனக்குக் கற்றுக்கொடுத்தார். அளவுகளை விட, உணர்வைத்தான் அவர் முக்கியமாகச் சொன்னார். கோழியை அவசரப்படுத்தக் கூடாது, அரிசிக்கு சுவை வராது என்பார். புதிய இஞ்சி, பூண்டு, கோழி கொழுப்பு மற்றும் சாஸ்கள் தான் இந்த உணவின் உயிர். ஒவ்வொரு கடியும் அத்தையின் அன்பையும், சமையல் கலையையும் நினைவுபடுத்துகிறது.',
                ingredients: [{ item: 'முழு கோழி', amount: '1.5 கிலோ, நாட்டுக்கோழி சிறந்தது' }, { item: 'இஞ்சி', amount: '1 பெரிய துண்டு (சுமார் 100 கிராம்), வேகவைக்க நறுக்கியது, 50 கிராம் அரிசிக்கு பொடியாக நறுக்கியது, 50 கிராம் இஞ்சி சாஸ்ஸிற்கு பொடியாக நறுக்கியது' }, { item: 'பூண்டு', amount: '1 முழு தலை, வேகவைக்க நசுக்கிய பற்கள், 4 பற்கள் அரிசிக்கு பொடியாக நறுக்கியது, 2 பற்கள் மிளகாய் சாஸ்ஸிற்கு பொடியாக நறுக்கியது' }, { item: 'வெங்காயத்தாள்', amount: '4 தண்டுகள், 2 வேகவைக்க, 2 அலங்கரிக்க' }, { item: 'வெள்ளரிக்காய்', amount: '1, அலங்கரிக்க நறுக்கியது' }, { item: 'வெள்ளை அரிசி', amount: '3 கப், மல்லிகை அரிசி' }, { item: 'கோழி கொழுப்பு', amount: 'கோழியிலிருந்து எடுத்தது, உருக்கியது' }, { item: 'உப்பு', amount: '2 தேக்கரண்டி, தேவைக்கேற்ப மேலும்' }, { item: 'நல்லெண்ணெய்', amount: '1 தேக்கரண்டி' }, { item: 'வெள்ளை மிளகுத்தூள்', amount: '1 தேக்கரண்டி' }, { item: 'சிவப்பு மிளகாய்', amount: '6-8, காரம் குறைவாக வேண்டுமானால் விதைகளை நீக்கவும்' }, { item: 'எலுமிச்சை சாறு', amount: '2 தேக்கரண்டி' }, { item: 'சர்க்கரை', amount: '1 தேக்கரண்டி' }, { item: 'கோழி குழம்பு (வேகவைத்ததிலிருந்து)', amount: 'அரிசி மற்றும் பரிமாற தேவைக்கேற்ப' }, { item: 'டார்க் சோயா சாஸ்', amount: 'பரிமாற' }],
                instructions: ['முதலில், கோழியை நன்றாகக் கழுவி, உள்ளேயும் வெளியேயும் துடைத்து உலர்த்தவும். 2 தேக்கரண்டி உப்புடன் கோழியின் அனைத்துப் பகுதிகளிலும் நன்றாகத் தேய்க்கவும். கோழியின் வயிற்றுப் பகுதியில் பாதி நறுக்கிய இஞ்சி மற்றும் இரண்டு வெங்காயத்தாள்களை அடைக்கவும். இதுதான் சுவையின் ஆரம்பம்.', 'ஒரு பெரிய பாத்திரத்தில் கோழி மூழ்கும் அளவுக்கு தண்ணீர் ஊற்றி, மீதமுள்ள நறுக்கிய இஞ்சி மற்றும் நசுக்கிய பூண்டு பற்களைச் சேர்க்கவும். தண்ணீர் கொதித்ததும், கோழியை மெதுவாக உள்ளே விடவும். மீண்டும் கொதித்ததும், அடுப்பை மிகக் குறைந்த தீயில் வைத்து, பாத்திரத்தை மூடி 30-35 நிமிடங்கள் வேகவிடவும். பிறகு அடுப்பை அணைத்து, கோழியை அதே சூடான நீரில் மூடியே 15-20 நிமிடங்கள் வைத்திருக்கவும். இது கோழியை மென்மையாக்கும்.', 'கோழியை கவனமாக வெளியே எடுத்து, உடனடியாக 10 நிமிடங்கள் ஐஸ் தண்ணீரில் போடவும். இது சமையலை நிறுத்தி, தோலை இறுக்கி, பளபளப்பான தோற்றத்தைக் கொடுக்கும். பிறகு கோழியை எடுத்து உலர்த்தி, நல்லெண்ணெய் தடவி, அரிசி மற்றும் சாஸ்கள் தயாரிக்கும் வரை ஒரு கட்டிங் போர்டில் வைக்கவும்.', 'இப்போது அரிசிக்கு! கோழி வேகவைத்த நீரிலிருந்து 2-3 தேக்கரண்டி கோழி கொழுப்பை எடுத்து, ஒரு நடுத்தர பாத்திரத்தில் சூடாக்கவும். பொடியாக நறுக்கிய இஞ்சி மற்றும் பூண்டு சேர்த்து, 2-3 நிமிடங்கள் வாசனை வரும் வரை வதக்கவும். கழுவி வடிகட்டிய மல்லிகை அரிசியைச் சேர்த்து, ஒவ்வொரு தானியமும் பளபளக்கும் வரை ஒரு நிமிடம் வதக்கவும்.', '4.5 கப் சூடான கோழி குழம்பை (கோழி வேகவைத்த அதே நீர்!) ஊற்றி, ஒரு தேக்கரண்டி உப்பு மற்றும் ஒரு சிட்டிகை வெள்ளை மிளகுத்தூள் சேர்க்கவும். கொதித்ததும், தீயைக் குறைத்து, மூடி 15-18 நிமிடங்கள் சமைக்கவும். அடுப்பை அணைத்து, மூடியே மேலும் 10 நிமிடங்கள் வைக்கவும். பிறகு ஒரு ஃபோர்க் கொண்டு மெதுவாக கிளறவும். அரிசி தனித்தனியாகவும், வாசனையாகவும் இருக்க வேண்டும்.', 'சாஸ்கள் தயார்! மிளகாய் சாஸ்ஸிற்கு: சிவப்பு மிளகாய், 2 பூண்டு பற்கள், 1 தேக்கரண்டி எலுமிச்சை சாறு, 1 தேக்கரண்டி சர்க்கரை ஆகியவற்றை ஒன்றாக அரைக்கவும் அல்லது பொடியாக நறுக்கவும். ஒரு சிட்டிகை உப்பு மற்றும் 1-2 தேக்கரண்டி கோழி குழம்பு சேர்த்து சரியான பதத்திற்கு கொண்டு வரவும். இஞ்சி சாஸ்ஸிற்கு: 50 கிராம் இஞ்சியை பொடியாக நறுக்கி, 2 தேக்கரண்டி சூடான கோழி கொழுப்பு (குழம்பிலிருந்து எடுத்தது), ஒரு சிட்டிகை உப்பு மற்றும் ஒரு சிறிய அளவு கோழி குழம்பு சேர்த்து கலக்கவும். இறுதியாக, ஒரு சிறிய கிண்ணத்தில் நல்ல தரமான டார்க் சோயா சாஸ்.', 'கோழியை துண்டுகளாக நறுக்கி, ஒரு தட்டில் வெள்ளரிக்காய் துண்டுகள் மற்றும் நறுக்கிய வெங்காயத்தாள் சேர்த்து பரிமாறவும். வாசனையான அரிசி, ஒரு சிறிய கிண்ணத்தில் சூடான கோழி குழம்பு மற்றும் மூன்று சாஸ்களுடன் பரிமாறவும். ஒவ்வொரு கடியும் மென்மையான கோழி, வாசனையான அரிசி மற்றும் சாஸ்களின் கலவையாக இருக்க வேண்டும். உங்கள் உழைப்பின் பலனை அனுபவிக்கவும்!', 'ஒவ்வொரு கட்டத்திலும் சுவை பார்த்து, தேவைக்கேற்ப உப்பு மற்றும் மசாலாப் பொருட்களை சரிசெய்ய மறக்காதீர்கள். குழம்பு, அரிசி, சாஸ்கள் - இவை அனைத்தும் ஒன்றாக இணையும் முன் தனித்தனியாக சுவையாக இருக்க வேண்டும்.'],
                seoTitle: 'அசல் ஹைனானீஸ் சிக்கன் ரைஸ் செய்முறை - சுவையான சமையல்',
                seoDescription: 'அத்தை மேய் கற்றுக்கொடுத்த அசல் ஹைனானீஸ் சிக்கன் ரைஸ் செய்முறை! மென்மையான கோழி, வாசனையான அரிசி, மற்றும் சுவையான சாஸ்களுடன் இந்த பாரம்பரிய உணவை வீட்டிலேயே சமைத்து மகிழுங்கள். ஹைனானீஸ் சிக்கன் ரைஸ் செய்வது எப்படி என்று தெரிந்து கொள்ளுங்கள்.',
                seoKeywords: 'ஹைனானீஸ் சிக்கன் ரைஸ் செய்முறை, ஹைனானீஸ் சிக்கன் ரைஸ், கோழி சாதம், சிங்கப்பூர் உணவு, மலேசிய உணவு, பாரம்பரிய சமையல், சுவையான கோழி சாதம்'
            },
            kn: {
                title: 'ಹೈನಾನೀಸ್ ಚಿಕನ್ ರೈಸ್',
                description: 'ಹೈನಾನೀಸ್ ಚಿಕನ್ ರೈಸ್ ಕೇವಲ ಒಂದು ಖಾದ್ಯವಲ್ಲ, ಅದು ನೆನಪುಗಳ ಸಾರ. ಚಿಕ್ಕವಳಿದ್ದಾಗ ಅತ್ತೆ ಮೇ ಅವರ ಅಡುಗೆಮನೆಯಲ್ಲಿ ಇದನ್ನು ಕಲಿಯುವಾಗ, ಅಳತೆಗಿಂತ \'ಅನುಭವ\'ವೇ ಮುಖ್ಯ ಎಂದು ಅವರು ಹೇಳುತ್ತಿದ್ದರು. ತಾಳ್ಮೆಯಿಂದ ಕೋಳಿ ಮತ್ತು ಅನ್ನವನ್ನು ಬೇಯಿಸಿದರೆ ಮಾತ್ರ ಅದರ ನಿಜವಾದ ರುಚಿ ಹೊರಬರುತ್ತದೆ. ತಾಜಾ ಶುಂಠಿ, ಬೆಳ್ಳುಳ್ಳಿ ಮತ್ತು ಕೋಳಿ ಕೊಬ್ಬು ಇದರ ಪ್ರಮುಖ ಅಂಶಗಳು. ಜೊತೆಗೆ, ಖಾರ, ಶುಂಠಿ ಮತ್ತು ಡಾರ್ಕ್ ಸೋಯಾ ಸಾಸ್‌ಗಳು ಈ ಖಾದ್ಯಕ್ಕೆ ಜೀವ ತುಂಬುತ್ತವೆ. ಇದು ಪ್ರೀತಿಯಿಂದ ಮಾಡುವ ಅಡುಗೆ, ಪ್ರತಿ ತುತ್ತೂ ಅಮೂಲ್ಯ.',
                ingredients: [{ item: 'ಪೂರ್ಣ ಕೋಳಿ', amount: '1.5 ಕೆಜಿ, ಆದ್ಯತೆ ಕಾಂಪಂಗ್ ಕೋಳಿ' }, { item: 'ಶುಂಠಿ', amount: '1 ದೊಡ್ಡ ಗಡ್ಡೆ (ಸುಮಾರು 100 ಗ್ರಾಂ), ಬೇಯಿಸಲು ಹೋಳು ಮಾಡಿದ, ಅನ್ನಕ್ಕೆ 50 ಗ್ರಾಂ ಸಣ್ಣಗೆ ಹೆಚ್ಚಿದ, ಶುಂಠಿ ಸಾಸ್‌ಗೆ 50 ಗ್ರಾಂ ಸಣ್ಣಗೆ ಹೆಚ್ಚಿದ' }, { item: 'ಬೆಳ್ಳುಳ್ಳಿ', amount: '1 ಪೂರ್ಣ ಗಡ್ಡೆ, ಬೇಯಿಸಲು ಜಜ್ಜಿದ ಎಸಳುಗಳು, ಅನ್ನಕ್ಕೆ 4 ಎಸಳು ಸಣ್ಣಗೆ ಹೆಚ್ಚಿದ, ಖಾರ ಸಾಸ್‌ಗೆ 2 ಎಸಳು ಸಣ್ಣಗೆ ಹೆಚ್ಚಿದ' }, { item: 'ವಸಂತ ಈರುಳ್ಳಿ', amount: '4 ಕಾಂಡಗಳು, 2 ಬೇಯಿಸಲು, 2 ಅಲಂಕರಿಸಲು' }, { item: 'ಸೌತೆಕಾಯಿ', amount: '1, ಅಲಂಕರಿಸಲು ಹೋಳು ಮಾಡಿದ' }, { item: 'ಬಿಳಿ ಅಕ್ಕಿ', amount: '3 ಕಪ್, ಜಾಸ್ಮಿನ್' }, { item: 'ಕೋಳಿ ಕೊಬ್ಬು', amount: 'ಕೋಳಿಯಿಂದ ತೆಗೆದ, ಕರಗಿಸಿದ' }, { item: 'ಉಪ್ಪು', amount: '2 ಟೇಬಲ್ ಚಮಚ, ರುಚಿಗೆ ತಕ್ಕಷ್ಟು ಹೆಚ್ಚು' }, { item: 'ಎಳ್ಳೆಣ್ಣೆ', amount: '1 ಟೇಬಲ್ ಚಮಚ' }, { item: 'ಬಿಳಿ ಮೆಣಸು', amount: '1 ಟೀ ಚಮಚ' }, { item: 'ಕೆಂಪು ಮೆಣಸಿನಕಾಯಿ', amount: '6-8, ಕಡಿಮೆ ಖಾರ ಬೇಕಿದ್ದರೆ ಬೀಜ ತೆಗೆಯಿರಿ' }, { item: 'ನಿಂಬೆ ರಸ', amount: '2 ಟೇಬಲ್ ಚಮಚ' }, { item: 'ಸಕ್ಕರೆ', amount: '1 ಟೀ ಚಮಚ' }, { item: 'ಕೋಳಿ ಸಾರು (ಬೇಯಿಸಿದ ನೀರು)', amount: 'ಅನ್ನ ಮತ್ತು ಬಡಿಸಲು ಬೇಕಾದಷ್ಟು' }, { item: 'ಡಾರ್ಕ್ ಸೋಯಾ ಸಾಸ್', amount: 'ಬಡಿಸಲು' }],
                instructions: ['ಮೊದಲು, ಕೋಳಿಯನ್ನು ಸಿದ್ಧಪಡಿಸಿಕೊಳ್ಳಿ. ಪೂರ್ಣ ಕೋಳಿಯನ್ನು ಒಳಗೆ ಮತ್ತು ಹೊರಗೆ ಚೆನ್ನಾಗಿ ತೊಳೆದು, ಪೇಪರ್ ಟವೆಲ್‌ನಿಂದ ಸಂಪೂರ್ಣವಾಗಿ ಒಣಗಿಸಿ. ಈಗ, 2 ಟೇಬಲ್ ಚಮಚ ಉಪ್ಪನ್ನು ಕೋಳಿಯ ಎಲ್ಲಾ ಭಾಗಗಳಿಗೆ ಚೆನ್ನಾಗಿ ಉಜ್ಜಿ. ಕೋಳಿಯ ಒಳಭಾಗಕ್ಕೆ ಅರ್ಧದಷ್ಟು ಹೋಳು ಮಾಡಿದ ಶುಂಠಿ ಮತ್ತು ಎರಡು ವಸಂತ ಈರುಳ್ಳಿ ಕಾಂಡಗಳನ್ನು ತುಂಬಿಸಿ. ಇಲ್ಲಿಂದಲೇ ರುಚಿ ಶುರುವಾಗುತ್ತದೆ.', 'ನಿಮ್ಮ ದೊಡ್ಡ ಪಾತ್ರೆಯನ್ನು ತೆಗೆದುಕೊಂಡು, ಕೋಳಿ ಸಂಪೂರ್ಣವಾಗಿ ಮುಳುಗುವಷ್ಟು ನೀರು ತುಂಬಿಸಿ. ಉಳಿದ ಹೋಳು ಮಾಡಿದ ಶುಂಠಿ ಮತ್ತು ಜಜ್ಜಿದ ಬೆಳ್ಳುಳ್ಳಿ ಎಸಳುಗಳನ್ನು ಸೇರಿಸಿ. ನೀರನ್ನು ಚೆನ್ನಾಗಿ ಕುದಿಸಿ, ನಂತರ ಕೋಳಿಯನ್ನು ನಿಧಾನವಾಗಿ ಇಳಿಸಿ. ನೀರು ಮತ್ತೆ ಕುದಿಯಲು ಪ್ರಾರಂಭಿಸಿದ ತಕ್ಷಣ, ಉರಿಯನ್ನು ಅತಿ ಕಡಿಮೆ ಮಾಡಿ. ನೀರು ಸಣ್ಣಗೆ ನಡುಗುವಂತಿರಬೇಕು, ಕುದಿಯಬಾರದು. ಪಾತ್ರೆಯನ್ನು ಮುಚ್ಚಿ ಸುಮಾರು 30-35 ನಿಮಿಷ ಬೇಯಿಸಿ. ಹೆಚ್ಚು ಇಣುಕಿ ನೋಡಬೇಡಿ! ಈ ಸಮಯದ ನಂತರ, ಉರಿಯನ್ನು ಆಫ್ ಮಾಡಿ, ಆದರೆ ಕೋಳಿಯನ್ನು ಬಿಸಿ ನೀರಿನಲ್ಲಿ, ಮುಚ್ಚಿ, ಇನ್ನೊಂದು 15-20 ನಿಮಿಷ ಹಾಗೆಯೇ ಬಿಡಿ. ಈ ಸೌಮ್ಯವಾದ ಶಾಖವು ಕೋಳಿಗೆ ಮೃದುವಾದ ಮತ್ತು ನಯವಾದ ವಿನ್ಯಾಸವನ್ನು ನೀಡುತ್ತದೆ. ಹೊರತೆಗೆದಾಗ, ಚರ್ಮವು ದಪ್ಪ ಮತ್ತು ಹೊಳೆಯುವಂತಿರಬೇಕು, ಮತ್ತು ತೊಡೆಯ ದಪ್ಪ ಭಾಗಕ್ಕೆ ಚೂಪಾದ ಕಡ್ಡಿ ಚುಚ್ಚಿದಾಗ ಸ್ಪಷ್ಟ ರಸ ಹೊರಬರಬೇಕು.', 'ಕೋಳಿ ವಿಶ್ರಾಂತಿ ಪಡೆಯುತ್ತಿರುವಾಗ, ಅದನ್ನು ಪಾತ್ರೆಯಿಂದ ಎಚ್ಚರಿಕೆಯಿಂದ ಹೊರತೆಗೆದು, ತಕ್ಷಣವೇ 10 ನಿಮಿಷಗಳ ಕಾಲ ಐಸ್ ನೀರಿನಲ್ಲಿ ಹಾಕಿ. ಇದು ಅಡುಗೆಯನ್ನು ನಿಲ್ಲಿಸುತ್ತದೆ, ಚರ್ಮವನ್ನು ಬಿಗಿಗೊಳಿಸುತ್ತದೆ ಮತ್ತು ಅದಕ್ಕೆ ಸುಂದರವಾದ, ನಯವಾದ ನೋಟವನ್ನು ನೀಡುತ್ತದೆ. ಈ ಹಂತವನ್ನು ಬಿಡಬೇಡಿ; ಇದು ಬಹಳ ಮುಖ್ಯ! ತಣ್ಣಗಾದ ನಂತರ, ಕೋಳಿಯನ್ನು ಹೊರತೆಗೆದು, ಒಣಗಿಸಿ, ಮತ್ತು ಎಳ್ಳೆಣ್ಣೆಯಿಂದ ಲಘುವಾಗಿ ಬ್ರಷ್ ಮಾಡಿ. ನೀವು ಅನ್ನ ಮತ್ತು ಸಾಸ್‌ಗಳನ್ನು ತಯಾರಿಸುವಾಗ ಅದನ್ನು ಕಟಿಂಗ್ ಬೋರ್ಡ್ ಮೇಲೆ ವಿಶ್ರಾಂತಿ ಪಡೆಯಲು ಬಿಡಿ.', 'ಈಗ ಅನ್ನಕ್ಕೆ, ಇದು ಖಾದ್ಯದ ಆತ್ಮ! ನಿಮ್ಮ ಬೇಯಿಸಿದ ನೀರಿನಿಂದ ಸ್ವಲ್ಪ ಕೋಳಿ ಕೊಬ್ಬನ್ನು ತೆಗೆಯಿರಿ – ನಿಮಗೆ ಸುಮಾರು 2-3 ಟೇಬಲ್ ಚಮಚ ಬೇಕಾಗುತ್ತದೆ. ಈ ಕೊಬ್ಬನ್ನು ಮಧ್ಯಮ ಉರಿಯಲ್ಲಿ ಒಂದು ಮಧ್ಯಮ ಪಾತ್ರೆಯಲ್ಲಿ ಬಿಸಿ ಮಾಡಿ. ಸಣ್ಣಗೆ ಹೆಚ್ಚಿದ ಶುಂಠಿ ಮತ್ತು ಸಣ್ಣಗೆ ಹೆಚ್ಚಿದ ಬೆಳ್ಳುಳ್ಳಿಯನ್ನು ಸೇರಿಸಿ. ಅವು ಪರಿಮಳಯುಕ್ತವಾಗಿ ಮತ್ತು ಸ್ವಲ್ಪ ಚಿನ್ನದ ಬಣ್ಣ ಬರುವವರೆಗೆ ಸುಮಾರು 2-3 ನಿಮಿಷ ಹುರಿಯಿರಿ; ನಿಮ್ಮ ಅಡುಗೆಮನೆಯಲ್ಲಿ ಅದ್ಭುತ ಪರಿಮಳ ತುಂಬುತ್ತದೆ. ತೊಳೆದು ನೀರು ಬಸಿದ ಜಾಸ್ಮಿನ್ ಅಕ್ಕಿಯನ್ನು ಸೇರಿಸಿ, ಕೊಬ್ಬಿನಲ್ಲಿ ಒಂದು ಅಥವಾ ಎರಡು ನಿಮಿಷ ಚೆನ್ನಾಗಿ ಕಲಸಿ, ಪ್ರತಿ ಅಕ್ಕಿ ಕಾಳು ಹೊಳೆಯುವಂತಾಗಬೇಕು. ಇದು ಅಕ್ಕಿಗೆ ಲೇಪನ ನೀಡಿ ರುಚಿಯನ್ನು ತುಂಬುತ್ತದೆ.', '4.5 ಕಪ್ ಬಿಸಿ ಕೋಳಿ ಸಾರನ್ನು (ಕೋಳಿ ಬೇಯಿಸಿದ ಅದೇ ನೀರು!) ಸುರಿಯಿರಿ, ಒಂದು ಟೀ ಚಮಚ ಉಪ್ಪು ಮತ್ತು ಸ್ವಲ್ಪ ಬಿಳಿ ಮೆಣಸು ಸೇರಿಸಿ. ಕುದಿಯಲು ತಂದು, ನಂತರ ಉರಿಯನ್ನು ಕಡಿಮೆ ಮಾಡಿ, ಬಿಗಿಯಾಗಿ ಮುಚ್ಚಿ, 15-18 ನಿಮಿಷ ಬೇಯಿಸಿ. ಬೆಂದ ನಂತರ, ಉರಿಯನ್ನು ಆಫ್ ಮಾಡಿ ಮತ್ತು ಮುಚ್ಚಿ ಇನ್ನೊಂದು 10 ನಿಮಿಷ ಹಾಗೆಯೇ ಬಿಡಿ. ಫೋರ್ಕ್‌ನಿಂದ ನಿಧಾನವಾಗಿ ಸಡಿಲಗೊಳಿಸಿ. ಅನ್ನವು ಪ್ರತ್ಯೇಕವಾಗಿ, ಪರಿಮಳಯುಕ್ತವಾಗಿ ಮತ್ತು ಸ್ವಲ್ಪ ಅಂಟಂಟಾಗಿರಬೇಕು.', 'ಸಾಸ್‌ಗಳಿಗೆ ಸಮಯ! ಖಾರ ಸಾಸ್‌ಗಾಗಿ: ಕೆಂಪು ಮೆಣಸಿನಕಾಯಿಗಳು, 2 ಎಸಳು ಸಣ್ಣಗೆ ಹೆಚ್ಚಿದ ಬೆಳ್ಳುಳ್ಳಿ, 1 ಟೇಬಲ್ ಚಮಚ ನಿಂಬೆ ರಸ, ಮತ್ತು 1 ಟೀ ಚಮಚ ಸಕ್ಕರೆಯನ್ನು ಬ್ಲೆಂಡ್ ಮಾಡಿ ಅಥವಾ ಸಣ್ಣಗೆ ಹೆಚ್ಚಿ. ಸರಿಯಾದ ಸ್ಥಿರತೆಗಾಗಿ ಒಂದು ಚಿಟಿಕೆ ಉಪ್ಪು ಮತ್ತು ಒಂದು ಅಥವಾ ಎರಡು ಟೇಬಲ್ ಚಮಚ ಕೋಳಿ ಸಾರು ಸೇರಿಸಿ. ಇದು ರೋಮಾಂಚಕ ಮತ್ತು ಖಾರವಾಗಿರಬೇಕು. ಶುಂಠಿ ಸಾಸ್‌ಗಾಗಿ: 50 ಗ್ರಾಂ ಶುಂಠಿಯನ್ನು ಸಣ್ಣಗೆ ಹೆಚ್ಚಿ, ನಂತರ 2 ಟೇಬಲ್ ಚಮಚ ಬಿಸಿ ಕೋಳಿ ಕೊಬ್ಬು (ಸಾರಿನಿಂದ ತೆಗೆದ), ಒಂದು ಚಿಟಿಕೆ ಉಪ್ಪು, ಮತ್ತು ಸ್ವಲ್ಪ ಕೋಳಿ ಸಾರಿನೊಂದಿಗೆ ಮಿಶ್ರಣ ಮಾಡಿ. ಇದು ಪ್ರಕಾಶಮಾನವಾದ, ಹುಳಿ ಪೇಸ್ಟ್ ಆಗಿರಬೇಕು. ಮತ್ತು ಕೊನೆಯದಾಗಿ, ಉತ್ತಮ ಗುಣಮಟ್ಟದ ಡಾರ್ಕ್ ಸೋಯಾ ಸಾಸ್‌ನ ಸಣ್ಣ ಬಟ್ಟಲು ಅತ್ಯಗತ್ಯ.', 'ಕೋಳಿಯನ್ನು ಬಡಿಸುವ ತುಂಡುಗಳಾಗಿ ಕತ್ತರಿಸಿ. ಕೋಳಿಯನ್ನು ಒಂದು ತಟ್ಟೆಯಲ್ಲಿ, ತಾಜಾ ಸೌತೆಕಾಯಿ ಹೋಳುಗಳು ಮತ್ತು ಹೆಚ್ಚಿದ ವಸಂತ ಈರುಳ್ಳಿ ಸಿಂಪಡಿಸಿ ಜೋಡಿಸಿ. ಪರಿಮಳಯುಕ್ತ ಅನ್ನದ ಉದಾರ ಭಾಗಗಳನ್ನು, ಬಿಸಿ ಕೋಳಿ ಸಾರಿನ ಸಣ್ಣ ಬಟ್ಟಲನ್ನು ಪಕ್ಕದಲ್ಲಿ, ಮತ್ತು ಎಲ್ಲಾ ಮೂರು ಸಾಸ್‌ಗಳೊಂದಿಗೆ ಬಡಿಸಿ. ಪ್ರತಿ ತುತ್ತು ಮೃದುವಾದ ಕೋಳಿ, ಪರಿಮಳಯುಕ್ತ ಅನ್ನ ಮತ್ತು ಪ್ರತಿ ಸಾಸ್‌ನ ಮಿಶ್ರಣವಾಗಿರಬೇಕು. ನಿಮ್ಮ ಶ್ರಮದ ಫಲವನ್ನು ಆನಂದಿಸಿ!', 'ಪ್ರತಿ ಹಂತದಲ್ಲೂ ರುಚಿ ನೋಡಿ ಮತ್ತು ಮಸಾಲೆಗಳನ್ನು ಹೊಂದಿಸಲು ಮರೆಯಬೇಡಿ. ಸಾರು, ಅನ್ನ, ಸಾಸ್‌ಗಳು – ಅವು ಸಾಮರಸ್ಯದಿಂದ ಒಟ್ಟಾಗಿ ಬರುವ ಮೊದಲು ಪ್ರತ್ಯೇಕವಾಗಿ ಚೆನ್ನಾಗಿರಬೇಕು.'],
                seoTitle: 'ಹೈನಾನೀಸ್ ಚಿಕನ್ ರೈಸ್ ರೆಸಿಪಿ: ಮನೆಯಲ್ಲೇ ಮಾಡಿ ಪರಿಪೂರ್ಣ ರುಚಿ',
                seoDescription: 'ಅತ್ತೆ ಮೇ ಅವರ ವಿಶೇಷ ಹೈನಾನೀಸ್ ಚಿಕನ್ ರೈಸ್ ರೆಸಿಪಿ ಕನ್ನಡದಲ್ಲಿ. ಮೃದುವಾದ ಕೋಳಿ, ಪರಿಮಳಯುಕ್ತ ಅನ್ನ ಮತ್ತು ರುಚಿಕರ ಸಾಸ್‌ಗಳೊಂದಿಗೆ ಈ ಕ್ಲಾಸಿಕ್ ಖಾದ್ಯವನ್ನು ಸವಿಯಿರಿ.',
                seoKeywords: 'ಹೈನಾನೀಸ್ ಚಿಕನ್ ರೈಸ್ ರೆಸಿಪಿ, ಹೈನಾನೀಸ್ ಚಿಕನ್, ಚಿಕನ್ ರೈಸ್, ಸಿಂಗಾಪುರ್ ಚಿಕನ್ ರೈಸ್, ಏಷ್ಯನ್ ಚಿಕನ್ ರೆಸಿಪಿ, ಸುಲಭ ಚಿಕನ್ ರೈಸ್'
            },
            'zh-CN': {
                title: '海南鸡饭',
                description: '海南鸡饭，滑嫩的鸡肉、香气扑鼻的米饭，配上三款画龙点睛的酱汁，是记忆中最温暖的味道。这道菜的秘诀，在于耐心和对细节的把握：从挑选新鲜的鸡，到用鸡油炒香米饭，再到精心调配的姜蓉、辣椒和黑酱油。每一步都不能马虎，才能做出那一口令人魂牵梦萦的家乡味道。这不仅是食谱，更是对传统美味的致敬。',
                ingredients: [{ item: '整鸡', amount: '1.5公斤, 最好是走地鸡' }, { item: '姜', amount: '1大块 (约100克), 部分切片用于煮鸡, 50克切末用于鸡饭, 50克切末用于姜蓉酱' }, { item: '蒜', amount: '1整头, 蒜瓣拍碎用于煮鸡, 4瓣切末用于鸡饭, 2瓣切末用于辣椒酱' }, { item: '香葱', amount: '4根, 2根用于煮鸡, 2根用于点缀' }, { item: '黄瓜', amount: '1根, 切片用于点缀' }, { item: '白米饭', amount: '3杯, 茉莉香米' }, { item: '鸡油', amount: '取自鸡身, 熬制' }, { item: '盐', amount: '2汤匙, 另备适量调味' }, { item: '香油', amount: '1汤匙' }, { item: '白胡椒粉', amount: '1茶匙' }, { item: '红辣椒', amount: '6-8个, 若不喜太辣可去籽' }, { item: '青柠汁', amount: '2汤匙' }, { item: '糖', amount: '1茶匙' }, { item: '鸡汤 (煮鸡所得)', amount: '适量用于煮饭和佐餐' }, { item: '老抽', amount: '适量用于佐餐' }],
                instructions: ['首先，处理整鸡。将鸡里外冲洗干净，用厨房纸彻底擦干。然后用2汤匙盐给鸡全身做个\'按摩\'，确保每个角落都抹到。将一半切片姜和两根香葱塞入鸡腹中。这可是美味的起点哦！', '找一个能轻松放入整鸡的大锅，加水没过鸡身。放入剩下的切片姜和拍碎的蒜瓣。大火烧开后，小心地将鸡放入。水再次沸腾后，立即转最小火，让水面保持微颤，不要大滚。盖上锅盖，小火浸煮约30-35分钟。别老是掀盖子！时间到后关火，让鸡继续在热水中焖15-20分钟。这温柔的余温是鸡肉滑嫩的关键。取出时，鸡皮应该饱满有光泽，用竹签插入鸡腿最厚处，流出的汁水是清澈的。', '鸡肉焖好后，立即将其从锅中取出，迅速放入冰水中浸泡10分钟。这一步能迅速停止烹饪，收紧鸡皮，让它变得光滑Q弹，千万别省略！冷却后取出鸡肉，擦干，表面轻轻刷一层香油。让它在砧板上休息，我们来准备米饭和酱汁。', '现在轮到鸡饭了，这可是这道菜的灵魂！从煮鸡的汤汁中撇出2-3汤匙鸡油。中火加热锅中的鸡油，加入姜末和蒜末。炒香至微金黄色，大约2-3分钟；厨房里会弥漫着诱人的香气。倒入洗净沥干的茉莉香米，在鸡油中翻炒一两分钟，直到每粒米都晶莹剔透。这样能让米饭裹上油，更入味。', '倒入4.5杯热鸡汤（就是煮鸡的汤！），加入1茶匙盐和少许白胡椒粉。大火烧开后转小火，盖紧锅盖，煮15-18分钟。煮好后关火，继续焖10分钟。最后用叉子轻轻拨松米饭。米饭应该粒粒分明，香气扑鼻，略带黏性。', '准备酱汁！辣椒酱：将红辣椒、2瓣蒜末、1汤匙青柠汁和1茶匙糖混合，用搅拌机打碎或切成极细的末。加一小撮盐和1-2汤匙鸡汤调整浓稠度，要味道鲜明有冲劲。姜蓉酱：将50克姜切成极细的末，与2汤匙热鸡油（从鸡汤中撇出）、一小撮盐和少许鸡汤混合。要呈现明亮、清新的姜味。最后，一小碟优质老抽也是必不可少的。', '将鸡肉斩成适合入口的块状。将鸡肉摆盘，旁边放上新鲜黄瓜片和撒上切碎的香葱。盛上足量的香喷喷的鸡饭，旁边配一小碗热鸡汤，以及三款酱汁。每一口都应该融合嫩滑的鸡肉、芳香的米饭和各种酱汁的美味。尽情享受你的劳动成果吧！', '别忘了在每一步都尝尝味道，随时调整调料。鸡汤、米饭、酱汁，它们各自都要美味，才能最终和谐地融为一体。'],
                seoTitle: '正宗海南鸡饭做法：在家也能做出滑嫩香浓的美味！',
                seoDescription: '想在家做出地道正宗海南鸡饭？跟着阿姨的秘诀，从选鸡到调酱，每一步都细致入微。鸡肉滑嫩，米饭香浓，配上三种灵魂酱汁，一口入魂！',
                seoKeywords: '正宗海南鸡饭做法,海南鸡饭食谱,鸡饭酱汁,嫩滑鸡肉,东南亚美食'
            },
            ms: {
                title: 'Nasi Ayam Hainan',
                description: 'Nasi Ayam Hainan ini bukan sekadar hidangan, ia adalah memori manis dan keselesaan. Saya belajar resipi ini dari Mak Cik Mei di dapur kecilnya di Tiong Bahru. Beliau mengajar saya tentang \'rasa\' dalam masakan, bukan sekadar sukatan. Ayam perlu dimasak perlahan, dan nasi perlu wangi dengan lemak ayam. Rahsianya terletak pada perincian kecil seperti halia segar dan sos-sos yang padu. Setiap gigitan adalah hasil kasih sayang dan kesabaran, memang berbaloi!',
                ingredients: [{ item: 'Ayam bulat', amount: '1.5 kg, sebaiknya ayam kampung' }, { item: 'Halia', amount: '1 buku besar (kira-kira 100g), dihiris untuk rebusan, 50g dicincang halus untuk nasi, 50g dicincang halus untuk sos halia' }, { item: 'Bawang putih', amount: '1 labu penuh, ulas diketuk untuk rebusan, 4 ulas dicincang halus untuk nasi, 2 ulas dicincang halus untuk sos cili' }, { item: 'Daun bawang', amount: '4 tangkai, 2 untuk rebusan, 2 untuk hiasan' }, { item: 'Timun', amount: '1 biji, dihiris untuk hiasan' }, { item: 'Beras putih', amount: '3 cawan, jenis jasmine' }, { item: 'Lemak ayam', amount: 'dari ayam, dicairkan' }, { item: 'Garam', amount: '2 sudu besar, dan secukup rasa' }, { item: 'Minyak bijan', amount: '1 sudu besar' }, { item: 'Lada putih', amount: '1 sudu kecil' }, { item: 'Cili merah', amount: '6-8 biji, buang biji jika mahu kurang pedas' }, { item: 'Jus limau nipis', amount: '2 sudu besar' }, { item: 'Gula', amount: '1 sudu kecil' }, { item: 'Stok ayam (dari rebusan)', amount: 'secukupnya untuk nasi dan hidangan' }, { item: 'Kicap pekat', amount: 'untuk hidangan' }],
                instructions: ['Mula-mula, bersihkan ayam bulat anda, luar dan dalam. Keringkan betul-betul dengan tuala kertas. Kemudian, lumurkan seluruh ayam dengan 2 sudu besar garam, pastikan rata ke setiap celah. Sumbat rongga ayam dengan separuh halia hiris dan dua tangkai daun bawang. Di sinilah rasa mula terbentuk!', 'Ambil periuk paling besar yang muat ayam. Isi air secukupnya untuk menutupi ayam. Masukkan baki halia hiris dan bawang putih ketuk. Didihkan air, kemudian masukkan ayam perlahan-lahan. Setelah mendidih semula, kecilkan api ke tahap paling rendah, biarkan air hanya bergegar perlahan. Tutup periuk dan renehkan selama 30-35 minit. Jangan kerap mengintai! Selepas itu, tutup api tetapi biarkan ayam dalam air panas, bertutup, selama 15-20 minit lagi. Haba sisa ini penting untuk tekstur ayam yang lembut dan licin. Apabila dikeluarkan, kulit ayam sepatutnya kelihatan gebu dan berkilat, dan cucuk lidi pada bahagian peha paling tebal akan mengeluarkan jus jernih.', 'Semasa ayam berehat, angkat ayam dari periuk dan segera masukkan ke dalam mandian air ais selama 10 minit. Ini menghentikan proses memasak, menegangkan kulit, dan memberikan kemasan licin yang cantik. Jangan langkau langkah ini, ia sangat penting! Setelah sejuk, keluarkan ayam, keringkan, dan sapu sedikit minyak bijan. Biarkan ia berehat di atas papan pemotong sementara anda sediakan nasi dan sos.', 'Sekarang untuk nasi, jiwa hidangan ini! Cedok sedikit lemak ayam dari air rebusan – anda perlukan kira-kira 2-3 sudu besar. Panaskan lemak ini dalam periuk sederhana di atas api sederhana. Masukkan halia dan bawang putih cincang. Tumis sehingga wangi dan sedikit keemasan, kira-kira 2-3 minit; anda akan terhidu aroma menakjubkan memenuhi dapur anda. Masukkan beras jasmine yang telah dicuci dan ditoskan, gaul rata dalam lemak selama seminit dua sehingga setiap butir beras berkilat. Ini menyalut beras dan menyerapkan rasa.', 'Tuangkan 4.5 cawan stok rebusan ayam panas (cecair yang sama anda masak ayam tadi!), masukkan satu sudu kecil garam dan sedikit lada putih. Didihkan, kemudian kecilkan api ke tahap rendah, tutup rapat, dan masak selama 15-18 minit. Setelah masak, tutup api dan biarkan bertutup selama 10 minit lagi. Gemburkan perlahan-lahan dengan garpu. Nasi sepatutnya berderai, wangi, dan sedikit melekit.', 'Masa untuk sos! Untuk sos cili: kisar atau cincang halus cili merah, 2 ulas bawang putih cincang, 1 sudu besar jus limau nipis, dan 1 sudu kecil gula. Tambah secubit garam dan satu atau dua sudu besar stok ayam untuk mendapatkan konsistensi yang betul. Ia sepatutnya bersemangat dan pedas. Untuk sos halia: cincang halus 50g halia, kemudian campurkan dengan 2 sudu besar lemak ayam panas (cedok dari stok), secubit garam, dan sedikit stok ayam. Ia sepatutnya menjadi pes yang cerah dan beraroma. Dan akhirnya, semangkuk kecil kicap pekat berkualiti baik adalah penting.', 'Potong ayam anda kepada bahagian hidangan. Susun ayam di atas pinggan, bersama hirisan timun segar dan taburan daun bawang cincang. Hidangkan nasi wangi dengan murah hati, semangkuk kecil stok ayam panas di sisi, dan ketiga-tiga sos. Setiap gigitan sepatutnya gabungan ayam lembut, nasi beraroma, dan sedikit setiap sos. Nikmati hasil titik peluh anda!', 'Jangan lupa rasa dan sesuaikan perasa pada setiap langkah. Stok, nasi, sos – semuanya perlu \'menyanyi\' sendiri sebelum bersatu dalam harmoni.'],
                seoTitle: 'Resepi Nasi Ayam Hainan Asli: Rahsia Ayam Lembut & Nasi Wangi',
                seoDescription: 'Temui rahsia Resepi Nasi Ayam Hainan asli yang diwarisi! Belajar cara masak ayam lembut, nasi wangi berlemak, dan sos padu. Hidangan klasik yang pasti memukau selera.',
                seoKeywords: 'Resepi Nasi Ayam Hainan, cara buat nasi ayam hainan, nasi ayam hainan asli, ayam rebus, sos nasi ayam, resepi ayam kampung'
            }
        }
    }
,
    {
        id: '2026-05-26',
        publishedAt: '2026-05-26T06:32:00.000Z',
        title: 'Mal',
        description: 'Oh, Mal. This dish, it\'s not something you find on every restaurant menu, and that\'s a shame. It\'s a quiet, soulful dish, a true home cook\'s secret. I first learned to make it from my Auntie Shanti, who lived in a tiny village outside Nashik. Her kitchen was always filled with the scent of roasting spices and simmering pots. I remember being a clumsy teenager, trying to mimic her effortless movements, often burning the garlic or overcooking the lentils into a mush. She\'d just chuckle, tell me, \'Patience, beta. Food tastes best when it\'s waited for.\' It took me years, honestly, to get that balance right, that perfect creamy texture without it being gluey, that deep, earthy flavor that just warms you from the inside out.My biggest frustration, and a common pitfall for many, was always the lentils. Either they\'d be too firm, stubbornly refusing to break down, or I\'d overdo it and end up with something resembling baby food. The trick, Auntie Shanti insisted, was the soak. Not too long, not too short. And then, the slow simmer. You can\'t rush Mal. It\'s not a weeknight dash-and-cook kind of meal. It demands your attention, a gentle stir now and then, letting the flavors meld. Another mistake? Skimping on the tempering. That final flourish of hot oil, sputtering spices, and fresh aromatics? It\'s not just for show; it wakes up the whole dish, adds that crucial layer of brightness and crunch.The key ingredients for a truly exceptional Mal are simple, but their quality matters immensely. Use good quality split pigeon peas (toor dal) and red lentils (masoor dal); they cook differently, and that blend gives Mal its characteristic texture. Fresh ginger and garlic are non-negotiable; don\'t even think about using pastes from a jar for this one. And the spices? Toast them yourself, whole, then grind them. The aroma alone is half the experience. A good, ripe tomato, not too watery, and a handful of fresh cilantro at the end – these are the small details that make Mal sing. Trust me on this; shortcuts here just lead to disappointment.',
        image: '/recipe-images/2026-05-26.jpg',
        prepTime: '25 min',
        cookTime: '45 min',
        difficulty: 'Medium',
        servings: 4,
        ingredients: [
            { item: 'Toor Dal (Split Pigeon Peas)', amount: '1/2 cup' },
            { item: 'Masoor Dal (Red Lentils)', amount: '1/4 cup' },
            { item: 'Water', amount: '4 cups, plus more as needed' },
            { item: 'Ghee or Vegetable Oil', amount: '3 tbsp' },
            { item: 'Cumin Seeds', amount: '1 tsp' },
            { item: 'Mustard Seeds', amount: '1/2 tsp' },
            { item: 'Asafoetida (Hing)', amount: '1/4 tsp' },
            { item: 'Onion', amount: '1 medium, finely chopped' },
            { item: 'Ginger-Garlic Paste', amount: '1 tbsp (freshly made)' },
            { item: 'Green Chillies', amount: '2, slit lengthwise (adjust to taste)' },
            { item: 'Tomato', amount: '1 large, finely chopped' },
            { item: 'Turmeric Powder', amount: '1/2 tsp' },
            { item: 'Coriander Powder', amount: '1 tsp' },
            { item: 'Red Chilli Powder', amount: '1/2 tsp (adjust to taste)' },
            { item: 'Garam Masala', amount: '1/2 tsp' },
            { item: 'Salt', amount: 'to taste' },
            { item: 'Fresh Cilantro', amount: '1/4 cup, chopped (for garnish)' },
            { item: 'Lemon Juice', amount: '1 tbsp (optional, for serving)' }
        ],
        instructions: [
            'First things first, rinse your dals. Combine the toor dal and masoor dal in a bowl, then rinse them under cold running water several times until the water runs clear. This gets rid of any dust or impurities. After rinsing, soak them in 2 cups of fresh water for at least 20 minutes. You\'ll see them plump up a bit, looking a little fuller and softer.',
            'Drain the soaked dals and transfer them to a heavy-bottomed pot or a pressure cooker. Add 4 cups of fresh water, turmeric powder, and a pinch of salt. If using a pot, bring it to a boil, then reduce the heat to low, cover, and simmer for about 30-40 minutes, or until the dals are tender and easily mashable. Keep an eye on the water level; add a little more hot water if it gets too thick. In a pressure cooker, cook for 3-4 whistles on medium heat, then let the pressure release naturally. The lentils should look creamy and soft, almost falling apart.',
            'While the dals are cooking, let\'s get the tempering (tadka) ready. Heat the ghee or oil in a separate small pan over medium heat. When it shimmers, toss in the cumin seeds and mustard seeds. Stand back a bit; you\'ll hear them crackle and pop, and the mustard seeds will jump around like tiny dancers. This usually takes about 15-20 seconds. Don\'t let them burn!',
            'Immediately add the asafoetida, then the chopped onion. Stir well. Cook the onion until it turns translucent and starts to get a lovely golden-brown edge, about 5-7 minutes. You\'ll smell that sweet, savory aroma filling your kitchen. Next, add the fresh ginger-garlic paste and green chillies. Sauté for another minute until the raw smell of ginger and garlic disappears, and it smells fragrant and spicy.',
            'Now, stir in the chopped tomato. Cook it down, mashing it gently with the back of your spoon, until it softens and the oil starts to separate from the mixture – this is a visual cue that the tomatoes are properly cooked, usually 5-8 minutes. It\'ll look like a thick, glossy paste. Then, add the coriander powder and red chilli powder. Sauté for just 30 seconds, stirring constantly, to toast the spices and deepen their flavor. Be careful not to burn them; they can turn bitter quickly.',
            'Pour this aromatic tempering mixture directly into the cooked dals. Stir everything together thoroughly. The dal will instantly take on a richer color and a more complex aroma. Add the garam masala and adjust salt to your taste. If the Mal is too thick, add a splash of hot water to reach your desired consistency; it should be thick but pourable, like a hearty stew. Let it simmer gently for another 5 minutes, allowing all those beautiful flavors to marry.',
            'Finally, stir in most of the fresh cilantro. Ladle the hot Mal into serving bowls. Garnish with the remaining fresh cilantro and a squeeze of lemon juice, if you like that bright, tangy finish. Serve it piping hot with steamed basmati rice, warm rotis, or crusty bread. It\'s truly comforting, a hug in a bowl.'
        ],
        tags: ['Indian', 'Lentil Stew', 'Comfort Food', 'Vegetarian'],
        seoTitle: 'Authentic Indian Mal Recipe: A Soulful Lentil Stew',
        seoDescription: 'Discover the true taste of India with this authentic Mal recipe. Learn to make a rich, comforting lentil and vegetable stew, just like Auntie Shanti taught me.',
        seoKeywords: 'authentic Indian Mal recipe, Indian lentil stew, traditional Indian food, homemade Indian curry, vegetarian Indian',
        translations: {
            hi: {
                title: 'माल दाल',
                description: 'माल, यह सिर्फ एक व्यंजन नहीं, बल्कि आत्मा को छूने वाला एक अनुभव है। मेरी बुआ शांति ने मुझे यह बनाना सिखाया था, उनके छोटे से गाँव की रसोई हमेशा मसालों की खुशबू से महकती रहती थी। उन्होंने सिखाया कि दाल को सही से भिगोना और धीमी आंच पर पकाना कितना ज़रूरी है, ताकि वह न तो कच्ची रहे और न ही हलवा बन जाए। सबसे बड़ी बात, अंत में लगने वाला तड़का, जो इस दाल में जान डाल देता है। यह जल्दबाजी का काम नहीं, बल्कि प्यार और धैर्य से बनने वाली एक ऐसी दाल है जो आपको अंदर तक सुकून देती है। अच्छी तोर और मसूर दाल, ताज़ा अदरक-लहसुन और घर के पिसे मसाले ही इसकी असली पहचान हैं।',
                ingredients: [{ item: 'तोर दाल (अरहर दाल)', amount: '1/2 कप' }, { item: 'मसूर दाल', amount: '1/4 कप' }, { item: 'पानी', amount: '4 कप, और ज़रूरत के अनुसार' }, { item: 'घी या वनस्पति तेल', amount: '3 बड़े चम्मच' }, { item: 'जीरा', amount: '1 छोटा चम्मच' }, { item: 'राई', amount: '1/2 छोटा चम्मच' }, { item: 'हींग', amount: '1/4 छोटा चम्मच' }, { item: 'प्याज', amount: '1 मध्यम, बारीक कटा हुआ' }, { item: 'अदरक-लहसुन का पेस्ट', amount: '1 बड़ा चम्मच (ताज़ा बना हुआ)' }, { item: 'हरी मिर्च', amount: '2, लंबाई में चीरी हुई (स्वाद अनुसार)' }, { item: 'टमाटर', amount: '1 बड़ा, बारीक कटा हुआ' }, { item: 'हल्दी पाउडर', amount: '1/2 छोटा चम्मच' }, { item: 'धनिया पाउडर', amount: '1 छोटा चम्मच' }, { item: 'लाल मिर्च पाउडर', amount: '1/2 छोटा चम्मच (स्वाद अनुसार)' }, { item: 'गरम मसाला', amount: '1/2 छोटा चम्मच' }, { item: 'नमक', amount: 'स्वादानुसार' }, { item: 'ताज़ा हरा धनिया', amount: '1/4 कप, कटा हुआ (सजाने के लिए)' }, { item: 'नींबू का रस', amount: '1 बड़ा चम्मच (वैकल्पिक, परोसने के लिए)' }],
                instructions: ['सबसे पहले, दालों को धो लें। तोर दाल और मसूर दाल को एक कटोरे में मिलाकर ठंडे पानी से कई बार धोएं जब तक पानी साफ न दिखने लगे। इससे सारी धूल और अशुद्धियाँ निकल जाएंगी। धोने के बाद, उन्हें 2 कप ताज़े पानी में कम से कम 20 मिनट के लिए भिगो दें। आप देखेंगे कि वे थोड़ी फूलकर नरम हो जाएंगी।', 'भिगोई हुई दालों का पानी निकालकर उन्हें एक भारी तले के बर्तन या प्रेशर कुकर में डालें। इसमें 4 कप ताज़ा पानी, हल्दी पाउडर और एक चुटकी नमक मिलाएं। यदि बर्तन में पका रहे हैं, तो उबाल आने दें, फिर आंच धीमी करके ढककर लगभग 30-40 मिनट तक या जब तक दालें नरम और आसानी से मैश होने लायक न हो जाएं, तब तक पकाएं। पानी का स्तर देखते रहें; अगर ज़्यादा गाढ़ा लगे तो थोड़ा और गर्म पानी डालें। प्रेशर कुकर में, मध्यम आंच पर 3-4 सीटी आने तक पकाएं, फिर भाप को अपने आप निकलने दें। दालें मलाईदार और नरम दिखनी चाहिए, लगभग घुलने वाली।', 'जब दालें पक रही हों, तब तड़के की तैयारी करें। एक अलग छोटे पैन में मध्यम आंच पर घी या तेल गरम करें। जब यह चमकने लगे, तो इसमें जीरा और राई डालें। थोड़ा पीछे हट जाएं; आपको उनके चटकने और राई के छोटे नर्तकों की तरह उछलने की आवाज़ सुनाई देगी। इसमें आमतौर पर लगभग 15-20 सेकंड लगते हैं। इन्हें जलने न दें!', 'तुरंत हींग डालें, फिर कटा हुआ प्याज डालें। अच्छी तरह मिलाएं। प्याज को तब तक भूनें जब तक वह पारदर्शी न हो जाए और उसके किनारों पर हल्का सुनहरा रंग न आने लगे, इसमें लगभग 5-7 मिनट लगेंगे। आपकी रसोई में वह मीठी, नमकीन खुशबू भर जाएगी। इसके बाद, ताज़ा अदरक-लहसुन का पेस्ट और हरी मिर्च डालें। एक और मिनट के लिए भूनें जब तक अदरक-लहसुन की कच्ची गंध गायब न हो जाए और यह सुगंधित और मसालेदार न लगने लगे।', 'अब, कटा हुआ टमाटर डालें। इसे चम्मच के पिछले हिस्से से धीरे-धीरे मैश करते हुए तब तक पकाएं जब तक यह नरम न हो जाए और मिश्रण से तेल अलग न होने लगे – यह एक संकेत है कि टमाटर ठीक से पक गए हैं, इसमें आमतौर पर 5-8 मिनट लगते हैं। यह एक गाढ़े, चमकदार पेस्ट जैसा दिखेगा। फिर, धनिया पाउडर और लाल मिर्च पाउडर डालें। मसालों को भूनने और उनके स्वाद को गहरा करने के लिए बस 30 सेकंड के लिए लगातार चलाते हुए भूनें। इन्हें जलने न दें; वे जल्दी कड़वे हो सकते हैं।', 'इस सुगंधित तड़के के मिश्रण को सीधे पकी हुई दालों में डालें। सब कुछ अच्छी तरह मिलाएं। दाल तुरंत एक गहरा रंग और अधिक जटिल सुगंध ले लेगी। गरम मसाला डालें और नमक अपने स्वाद के अनुसार समायोजित करें। यदि माल बहुत गाढ़ा है, तो अपनी इच्छित गाढ़ापन पाने के लिए थोड़ा गर्म पानी डालें; यह गाढ़ा लेकिन डालने लायक होना चाहिए, जैसे एक गाढ़ा स्टू। इसे और 5 मिनट के लिए धीमी आंच पर पकने दें, ताकि सभी सुंदर स्वाद आपस में मिल जाएं।', 'अंत में, ज़्यादातर ताज़ा हरा धनिया मिलाएं। गर्म माल को परोसने वाले कटोरे में निकालें। बचे हुए ताज़े हरे धनिये और नींबू के रस की एक बूंद के साथ गार्निश करें, यदि आपको वह ताज़ा, खट्टा स्वाद पसंद है। इसे गरमागरम उबले हुए बासमती चावल, गर्म रोटी या कुरकुरी ब्रेड के साथ परोसें। यह सचमुच आरामदायक है, एक कटोरे में प्यार भरा आलिंगन।'],
                seoTitle: 'माल दाल रेसिपी हिंदी में: बुआ शांति की खास दाल का स्वाद',
                seoDescription: 'बुआ शांति की सीक्रेट माल दाल रेसिपी हिंदी में सीखें! यह दाल धैर्य और प्यार से बनती है, जो आपको अंदर तक सुकून देगी। घर पर बनाएं यह स्वादिष्ट और पौष्टिक माल दाल।',
                seoKeywords: 'माल दाल रेसिपी हिंदी में, माल दाल बनाने की विधि, घर पर माल दाल, पारंपरिक दाल रेसिपी, बुआ शांति की दाल, दाल फ्राई, भारतीय दाल व्यंजन'
            },
            bn: {
                title: 'মাল',
                description: 'আহ, মাল! এই ডালটা সব রেস্তোরাঁর মেনুতে সহজে খুঁজে পাওয়া যায় না, আর এটাই এর বিশেষত্ব। এটা যেন এক শান্ত, আত্মিক পদ, যা শুধু বাড়ির হেঁশেলের গোপন রেসিপি। আমি প্রথম এই ডাল বানানো শিখেছিলাম আমার পিসিমা শান্তির কাছ থেকে, যিনি নাসিকের কাছে এক ছোট্ট গ্রামে থাকতেন। তার রান্নাঘর সবসময় ভাজা মশলা আর ডালের গন্ধে ম ম করত। পিসিমা বলতেন, \'ধৈর্য ধরো, বেটা। খাবার তখনই সবচেয়ে ভালো লাগে যখন তার জন্য অপেক্ষা করা হয়।\' ডালটা ঠিকঠাক বানাতে আমার অনেক বছর লেগেছিল, সেই নিখুঁত ক্রিমি টেক্সচার আর মাটির মতো গভীর স্বাদ আনতে। পিসিমার শেখানো সেই ডাল আজও আমার মন ছুঁয়ে যায়।',
                ingredients: [{ item: 'অড়হর ডাল', amount: '১/২ কাপ' }, { item: 'মসুর ডাল', amount: '১/৪ কাপ' }, { item: 'জল', amount: '৪ কাপ, প্রয়োজন অনুযায়ী আরও' }, { item: 'ঘি বা সাদা তেল', amount: '৩ টেবিল চামচ' }, { item: 'জিরে', amount: '১ চা চামচ' }, { item: 'সর্ষে', amount: '১/২ চা চামচ' }, { item: 'হিং', amount: '১/৪ চা চামচ' }, { item: 'পেঁয়াজ', amount: '১টি মাঝারি, মিহি করে কুচি' }, { item: 'আদা-রসুন বাটা', amount: '১ টেবিল চামচ (টাটকা বাটা)' }, { item: 'কাঁচা লঙ্কা', amount: '২টি, লম্বালম্বি চেরা (স্বাদমতো)' }, { item: 'টমেটো', amount: '১টি বড়, মিহি করে কুচি' }, { item: 'হলুদ গুঁড়ো', amount: '১/২ চা চামচ' }, { item: 'ধনে গুঁড়ো', amount: '১ চা চামচ' }, { item: 'লঙ্কা গুঁড়ো', amount: '১/২ চা চামচ (স্বাদমতো)' }, { item: 'গরম মশলা', amount: '১/২ চা চামচ' }, { item: 'নুন', amount: 'স্বাদমতো' }, { item: 'ধনে পাতা', amount: '১/৪ কাপ, কুচি (সাজানোর জন্য)' }, { item: 'লেবুর রস', amount: '১ টেবিল চামচ (ঐচ্ছিক, পরিবেশনের জন্য)' }],
                instructions: ['প্রথমে ডালগুলো ভালো করে ধুয়ে নিন। অড়হর ডাল আর মসুর ডাল একসাথে একটি বাটিতে নিয়ে ঠান্ডা জলে কয়েকবার ধুয়ে নিন যতক্ষণ না জল পরিষ্কার হয়। এতে ধুলো বা ময়লা দূর হয়ে যাবে। ধোয়ার পর ২ কাপ পরিষ্কার জলে অন্তত ২০ মিনিট ভিজিয়ে রাখুন; দেখবেন ডালগুলো একটু ফুলে নরম হয়ে গেছে।', 'ভিজিয়ে রাখা ডালগুলো জল ঝরিয়ে একটি ভারী তলার পাত্রে বা প্রেসার কুকারে দিন। ৪ কাপ পরিষ্কার জল, হলুদ গুঁড়ো আর সামান্য নুন যোগ করুন। যদি পাত্রে রান্না করেন, তাহলে প্রথমে ফুটিয়ে আঁচ কমিয়ে ঢাকনা দিয়ে ৩০-৪০ মিনিট সেদ্ধ করুন, যতক্ষণ না ডাল নরম ও সহজে ম্যাশ করার মতো হয়। জলের দিকে খেয়াল রাখবেন; বেশি ঘন হয়ে গেলে সামান্য গরম জল যোগ করতে পারেন। প্রেসার কুকারে মাঝারি আঁচে ৩-৪টি সিটি দিয়ে প্রেশার নিজে থেকে বের হতে দিন। ডালগুলো ক্রিমি ও নরম হওয়া চাই।', 'ডাল সেদ্ধ হওয়ার সময় ফোড়ন (তড়কা) তৈরি করে নিন। একটি ছোট প্যানে মাঝারি আঁচে ঘি বা তেল গরম করুন। তেল গরম হলে জিরে আর সর্ষে দিন। একটু দূরে থাকুন; দেখবেন সর্ষে ফাটতে শুরু করেছে আর জিরে ছিটকে উঠছে। এতে প্রায় ১৫-২০ সেকেন্ড লাগবে, খেয়াল রাখবেন যেন পুড়ে না যায়।', 'সাথে সাথেই হিং এবং কুচি করা পেঁয়াজ যোগ করুন। ভালো করে নেড়েচেড়ে পেঁয়াজ সোনালি হওয়া পর্যন্ত, প্রায় ৫-৭ মিনিট ভেজে নিন। আপনার রান্নাঘর মিষ্টি ও সুস্বাদু গন্ধে ভরে উঠবে। এরপর টাটকা আদা-রসুন বাটা আর কাঁচা লঙ্কা দিন। আরও এক মিনিট ভেজে নিন যতক্ষণ না আদা-রসুনের কাঁচা গন্ধ চলে যায় এবং সুগন্ধ বের হয়।', 'এবার কুচি করা টমেটো মিশিয়ে দিন। চামচের পিছন দিয়ে হালকা করে ম্যাশ করতে করতে রান্না করুন যতক্ষণ না টমেটো নরম হয়ে তেল ছাড়তে শুরু করে – এটি টমেটো ঠিকমতো সেদ্ধ হওয়ার লক্ষণ, সাধারণত ৫-৮ মিনিট লাগে। এটি একটি ঘন, চকচকে পেস্টের মতো দেখাবে। এরপর ধনে গুঁড়ো আর লঙ্কা গুঁড়ো যোগ করুন। ৩০ সেকেন্ডের জন্য ক্রমাগত নেড়েচেড়ে মশলাগুলো ভেজে নিন যাতে তাদের স্বাদ আরও গভীর হয়। খেয়াল রাখবেন যেন মশলা পুড়ে তেতো না হয়ে যায়।', 'এই সুগন্ধি ফোড়ন সেদ্ধ ডালের মধ্যে ঢেলে দিন। সবকিছু ভালো করে মিশিয়ে নিন। ডাল সাথে সাথেই আরও গাঢ় রঙ আর জটিল সুগন্ধ পাবে। গরম মশলা যোগ করুন এবং স্বাদমতো নুন দিন। যদি মাল ডাল বেশি ঘন মনে হয়, তাহলে সামান্য গরম জল মিশিয়ে আপনার পছন্দসই ঘনত্বে আনুন; এটি ঘন কিন্তু ঢালার মতো হওয়া উচিত, যেন একটি সুস্বাদু স্ট্যু। আরও ৫ মিনিট হালকা আঁচে ফুটতে দিন যাতে সব স্বাদ ভালোভাবে মিশে যায়।', 'সবশেষে, বেশিরভাগ ধনে পাতা মিশিয়ে দিন। গরম মাল ডাল পরিবেশনের বাটিতে ঢেলে নিন। বাকি ধনে পাতা আর সামান্য লেবুর রস দিয়ে সাজিয়ে গরম গরম ভাত, রুটি বা পাউরুটির সাথে পরিবেশন করুন। এটি সত্যিই আরামদায়ক, যেন এক বাটি ভালোবাসা।'],
                seoTitle: 'আন্টি শান্তির মাল ডাল রেসিপি: ঘরে তৈরি সুস্বাদু ডাল',
                seoDescription: 'আন্টি শান্তির হাতে তৈরি মাল ডাল রেসিপি দিয়ে আপনার রান্নাঘর ভরিয়ে তুলুন। ধাপে ধাপে শিখুন এই ঐতিহ্যবাহী মাল ডাল তৈরির সহজ পদ্ধতি আর উপভোগ করুন এর অতুলনীয় স্বাদ।',
                seoKeywords: 'মাল ডাল রেসিপি, মাল ডাল তৈরির পদ্ধতি, বাঙালি ডাল রেসিপি, অড়হর মসুর ডাল, সহজ ডাল রান্না, ঘরে তৈরি ডাল'
            },
            mr: {
                title: 'माल',
                description: 'माल, ही अशी एक डाळ आहे जी तुम्हाला प्रत्येक रेस्टॉरंटमध्ये सहसा मिळणार नाही, कारण ही एक घरगुती, आत्म्याला तृप्त करणारी पाककृती आहे. नाशिकजवळील एका छोट्या गावात राहणाऱ्या माझ्या आत्या शांतीकडून मी हे बनवायला शिकले. तिच्या स्वयंपाकघरात नेहमी भाजलेल्या मसाल्यांचा आणि शिजणाऱ्या पदार्थांचा सुगंध दरवळत असे. डाळी योग्य प्रकारे भिजवणे आणि मंद आचेवर शिजवणे हेच या डाळीचे रहस्य आहे, असे ती नेहमी म्हणायची. फोडणीची योग्य तयारी आणि मसाल्यांचा सुगंध याने ही डाळ खऱ्या अर्थाने खुलते. ही डाळ म्हणजे केवळ एक पदार्थ नाही, तर ती एक आठवण आहे, एक प्रेमळ अनुभव आहे.',
                ingredients: [{ item: 'तूर डाळ', amount: '१/२ कप' }, { item: 'मसूर डाळ', amount: '१/४ कप' }, { item: 'पाणी', amount: '४ कप, आणि आवश्यकतेनुसार अधिक' }, { item: 'तूप किंवा तेल', amount: '३ टेबलस्पून' }, { item: 'जिरे', amount: '१ चमचा' }, { item: 'मोहरी', amount: '१/२ चमचा' }, { item: 'हिंग', amount: '१/४ चमचा' }, { item: 'कांदा', amount: '१ मध्यम, बारीक चिरलेला' }, { item: 'आलं-लसूण पेस्ट', amount: '१ टेबलस्पून (ताजी बनवलेली)' }, { item: 'हिरवी मिरची', amount: '२, लांब चिरलेल्या (चवीनुसार समायोजित करा)' }, { item: 'टोमॅटो', amount: '१ मोठा, बारीक चिरलेला' }, { item: 'हळद पावडर', amount: '१/२ चमचा' }, { item: 'धणे पावडर', amount: '१ चमचा' }, { item: 'लाल मिरची पावडर', amount: '१/२ चमचा (चवीनुसार समायोजित करा)' }, { item: 'गरम मसाला', amount: '१/२ चमचा' }, { item: 'मीठ', amount: 'चवीनुसार' }, { item: 'ताजी कोथिंबीर', amount: '१/४ कप, चिरलेली (सजावटीसाठी)' }, { item: 'लिंबाचा रस', amount: '१ टेबलस्पून (ऐच्छिक, वाढण्यासाठी)' }],
                instructions: ['सुरुवातीला डाळी स्वच्छ धुवून घ्या. तूर डाळ आणि मसूर डाळ एका भांड्यात एकत्र करून थंड पाण्याने स्वच्छ धुवा, जोपर्यंत पाणी स्वच्छ दिसत नाही. यामुळे धूळ आणि अशुद्धी निघून जाते. धुवून झाल्यावर, त्यांना किमान २० मिनिटे २ कप ताज्या पाण्यात भिजत ठेवा. त्या थोड्या फुगलेल्या आणि मऊ झालेल्या दिसतील.', 'भिजवलेल्या डाळींमधील पाणी काढून त्यांना जाड बुडाच्या भांड्यात किंवा प्रेशर कुकरमध्ये घाला. ४ कप ताजे पाणी, हळद पावडर आणि चिमूटभर मीठ घाला. भांड्यात शिजवत असाल तर, उकळी आल्यावर गॅस मंद करून झाकण ठेवून ३०-४० मिनिटे शिजवा, किंवा डाळी मऊ आणि सहज कुस्करता येण्यासारख्या होईपर्यंत शिजवा. पाण्याच्या पातळीकडे लक्ष ठेवा; जर डाळ खूप घट्ट झाली तर थोडे गरम पाणी घाला. प्रेशर कुकरमध्ये मध्यम आचेवर ३-४ शिट्ट्या होईपर्यंत शिजवा, नंतर कुकरची वाफ आपोआप जाऊ द्या. डाळी मऊ आणि मलईदार दिसल्या पाहिजेत, जवळजवळ विरघळलेल्या.', 'डाळी शिजत असताना, आपण फोडणीची तयारी करूया. एका वेगळ्या लहान कढईत मध्यम आचेवर तूप किंवा तेल गरम करा. तेल गरम झाल्यावर त्यात जिरे आणि मोहरी घाला. थोडे मागे उभे रहा; तुम्हाला त्यांचा तडतडण्याचा आवाज ऐकू येईल आणि मोहरीचे दाणे उड्या मारताना दिसतील. याला साधारणपणे १५-२० सेकंद लागतात. त्यांना जळू देऊ नका!', 'लगेच हिंग आणि नंतर चिरलेला कांदा घाला. चांगले परतून घ्या. कांदा पारदर्शक होईपर्यंत आणि त्याला हलका सोनेरी रंग येईपर्यंत, साधारणपणे ५-७ मिनिटे परतून घ्या. तुमच्या स्वयंपाकघरात तो गोड, चविष्ट सुगंध दरवळेल. आता ताजी आलं-लसूण पेस्ट आणि हिरवी मिरची घाला. आलं-लसणाचा कच्चा वास जाईपर्यंत आणि सुगंधित व मसालेदार वास येईपर्यंत आणखी एक मिनिट परतून घ्या.', 'आता चिरलेला टोमॅटो घालून ढवळून घ्या. टोमॅटो मऊ होईपर्यंत आणि मिश्रणातून तेल सुटेपर्यंत चमच्याने हलकेच दाबून शिजवा – हे टोमॅटो योग्यरित्या शिजल्याचे लक्षण आहे, साधारणपणे ५-८ मिनिटे लागतात. ते एक घट्ट, चमकदार पेस्टसारखे दिसेल. नंतर धणे पावडर आणि लाल मिरची पावडर घाला. मसाले भाजण्यासाठी आणि त्यांची चव वाढवण्यासाठी, सतत ढवळत फक्त ३० सेकंद परतून घ्या. ते जळू नयेत याची काळजी घ्या; ते लवकर कडू होऊ शकतात.', 'ही सुगंधित फोडणी थेट शिजवलेल्या डाळींमध्ये घाला. सर्व काही चांगले मिसळून घ्या. डाळीला लगेचच अधिक गडद रंग आणि अधिक जटिल सुगंध येईल. गरम मसाला घाला आणि चवीनुसार मीठ समायोजित करा. जर माल खूप घट्ट वाटत असेल, तर गरम पाणी घालून तुम्हाला हवी असलेली सुसंगतता आणा; तो घट्ट पण ओतण्यासारखा असावा, एका पौष्टिक आमटीसारखा. सर्व चवी एकत्र येण्यासाठी आणखी ५ मिनिटे मंद आचेवर उकळू द्या.', 'शेवटी, बहुतेक ताजी कोथिंबीर घालून ढवळून घ्या. गरम माल वाढण्याच्या भांड्यात काढा. उरलेल्या ताज्या कोथिंबीरीने आणि तुम्हाला आवडत असल्यास लिंबाच्या रसाने सजवा. गरम गरम बासमती भात, गरमागरम पोळ्या किंवा कुरकुरीत ब्रेडसोबत वाढा. हे खरोखरच आरामदायक आहे, वाटीतील एक मिठीच जणू.'],
                seoTitle: 'पारंपरिक माल डाळ रेसिपी: घरगुती चवीचा आनंद',
                seoDescription: 'नाशिकच्या आत्याच्या हातची अस्सल माल डाळ रेसिपी! सोप्या पद्धतीने घरच्या घरी बनवा ही पौष्टिक आणि चविष्ट डाळ. माल डाळ रेसिपी मराठीत शिका.',
                seoKeywords: 'माल डाळ रेसिपी मराठी, माल डाळ, पारंपरिक डाळ, घरगुती डाळ, पौष्टिक डाळ, डाळ रेसिपी'
            },
            te: {
                title: 'మాల్',
                description: 'మాల్, ఇది కేవలం ఒక వంటకం కాదు, ఇది ఆత్మను నింపే రుచి. నా అత్తయ్య శాంతి దగ్గర నేర్చుకున్న ఈ వంటకం, నాసిక్ పక్కన ఒక చిన్న పల్లెటూరిలో ఆమె వంటగదిలో సుగంధభరితమైన మసాలాల వాసనతో నిండి ఉండేది. పప్పును సరైన పద్ధతిలో నానబెట్టి, నెమ్మదిగా ఉడికించడం, చివరిగా ఘుమఘుమలాడే తాలింపు వేయడం దీని ప్రత్యేకత. తొందరపడకుండా, ప్రేమగా చేస్తేనే ఈ మాల్ రుచి అద్భుతంగా ఉంటుంది. ఇది నిజంగా ఒక ఇంటి వంట రహస్యం, ప్రతి ముద్దలోనూ ఆప్యాయత ఉంటుంది.',
                ingredients: [{ item: 'కందిపప్పు', amount: '1/2 కప్పు' }, { item: 'మసూర్ పప్పు', amount: '1/4 కప్పు' }, { item: 'నీళ్లు', amount: '4 కప్పులు, అవసరమైతే మరికొన్ని' }, { item: 'నెయ్యి లేదా నూనె', amount: '3 టేబుల్ స్పూన్లు' }, { item: 'జీలకర్ర', amount: '1 టీస్పూన్' }, { item: 'ఆవాలు', amount: '1/2 టీస్పూన్' }, { item: 'ఇంగువ', amount: '1/4 టీస్పూన్' }, { item: 'ఉల్లిపాయ', amount: '1 మధ్యస్థం, సన్నగా తరిగినది' }, { item: 'అల్లం వెల్లుల్లి పేస్ట్', amount: '1 టేబుల్ స్పూన్ (తాజాగా చేసినది)' }, { item: 'పచ్చిమిర్చి', amount: '2, నిలువుగా చీల్చినవి (రుచికి తగ్గట్టు)' }, { item: 'టమాటో', amount: '1 పెద్దది, సన్నగా తరిగినది' }, { item: 'పసుపు', amount: '1/2 టీస్పూన్' }, { item: 'ధనియాల పొడి', amount: '1 టీస్పూన్' }, { item: 'కారం', amount: '1/2 టీస్పూన్ (రుచికి తగ్గట్టు)' }, { item: 'గరం మసాలా', amount: '1/2 టీస్పూన్' }, { item: 'ఉప్పు', amount: 'రుచికి సరిపడా' }, { item: 'కొత్తిమీర', amount: '1/4 కప్పు, తరిగినది (అలంకరణకు)' }, { item: 'నిమ్మరసం', amount: '1 టేబుల్ స్పూన్ (ఐచ్ఛికం, వడ్డించేటప్పుడు)' }],
                instructions: ['ముందుగా, పప్పులను శుభ్రం చేసుకోండి. కందిపప్పు, మసూర్ పప్పును ఒక గిన్నెలో కలిపి, చల్లటి నీటితో అనేకసార్లు కడిగి, నీళ్లు స్పష్టంగా వచ్చే వరకు శుభ్రం చేయండి. ఇది దుమ్ము, మలినాలను తొలగిస్తుంది. కడిగిన తర్వాత, వాటిని 2 కప్పుల మంచి నీటిలో కనీసం 20 నిమిషాలు నానబెట్టండి. అవి కొద్దిగా ఉబ్బి, మృదువుగా మారతాయి.', 'నానబెట్టిన పప్పులను నీళ్లు తీసివేసి, మందపాటి అడుగున్న పాత్రలో లేదా ప్రెషర్ కుక్కర్‌లో వేయండి. 4 కప్పుల మంచి నీళ్లు, పసుపు, చిటికెడు ఉప్పు వేయండి. పాత్రలో అయితే, మరిగించి, మంట తగ్గించి, మూత పెట్టి 30-40 నిమిషాలు లేదా పప్పులు మెత్తగా అయ్యే వరకు ఉడికించండి. నీటి స్థాయిని గమనించండి; చిక్కగా అనిపిస్తే మరికొద్దిగా వేడి నీళ్లు కలపండి. ప్రెషర్ కుక్కర్‌లో అయితే, మధ్యస్థ మంటపై 3-4 విజిల్స్ వచ్చే వరకు ఉడికించి, ఆవిరిని సహజంగా పోనివ్వండి. పప్పులు క్రీమీగా, మెత్తగా, దాదాపు విడిపోయేలా ఉండాలి.', 'పప్పులు ఉడుకుతున్నప్పుడు, తాలింపు సిద్ధం చేసుకోండి. ఒక చిన్న పాన్‌లో నెయ్యి లేదా నూనెను మధ్యస్థ మంటపై వేడి చేయండి. అది వేడెక్కగానే, జీలకర్ర, ఆవాలు వేయండి. అవి చిటపటలాడి, ఆవాలు గంతులు వేయడం ప్రారంభిస్తాయి, ఇది సుమారు 15-20 సెకన్లు పడుతుంది. అవి మాడిపోకుండా చూసుకోండి!', 'వెంటనే ఇంగువ, ఆపై తరిగిన ఉల్లిపాయ వేయండి. బాగా కలపండి. ఉల్లిపాయ పారదర్శకంగా మారి, బంగారు గోధుమ రంగులోకి మారడం ప్రారంభించే వరకు, సుమారు 5-7 నిమిషాలు ఉడికించండి. మీ వంటగదిలో తీపి, రుచికరమైన వాసన నిండుతుంది. తరువాత, తాజాగా చేసిన అల్లం వెల్లుల్లి పేస్ట్, పచ్చిమిర్చి వేయండి. అల్లం, వెల్లుల్లి పచ్చి వాసన పోయి, సువాసన వచ్చే వరకు మరో నిమిషం వేయించండి.', 'ఇప్పుడు, తరిగిన టమాటో వేసి కలపండి. టమాటో మెత్తబడి, మిశ్రమం నుండి నూనె విడిపోవడం ప్రారంభించే వరకు, స్పూన్ వెనుక భాగంతో మెత్తగా నొక్కుతూ ఉడికించండి – ఇది టమాటోలు సరిగ్గా ఉడికాయని సూచిస్తుంది, సాధారణంగా 5-8 నిమిషాలు పడుతుంది. ఇది చిక్కటి, మెరిసే పేస్ట్ లా కనిపిస్తుంది. తరువాత, ధనియాల పొడి, కారం వేయండి. మసాలాలు వేగి, వాటి రుచి పెరిగేలా 30 సెకన్లు మాత్రమే నిరంతరం కలుపుతూ వేయించండి. అవి త్వరగా చేదుగా మారవచ్చు కాబట్టి మాడిపోకుండా జాగ్రత్త వహించండి.', 'ఈ సుగంధభరితమైన తాలింపు మిశ్రమాన్ని నేరుగా ఉడికించిన పప్పులలో పోయండి. అన్నింటినీ బాగా కలపండి. పప్పు వెంటనే మరింత గొప్ప రంగును, సంక్లిష్టమైన సువాసనను పొందుతుంది. గరం మసాలా వేసి, మీ రుచికి తగ్గట్టు ఉప్పు సర్దుబాటు చేయండి. మాల్ చాలా చిక్కగా ఉంటే, మీకు కావలసిన చిక్కదనం వచ్చే వరకు కొద్దిగా వేడి నీళ్లు కలపండి; ఇది చిక్కగా, కానీ పోయడానికి వీలుగా ఉండాలి. అన్ని రుచులు బాగా కలిసేలా మరో 5 నిమిషాలు నెమ్మదిగా ఉడకనివ్వండి.', 'చివరగా, ఎక్కువ భాగం కొత్తిమీరను కలపండి. వేడి మాల్‌ను వడ్డించే గిన్నెల్లోకి తీసుకోండి. మిగిలిన కొత్తిమీరతో, మీకు పుల్లని రుచి నచ్చితే కొద్దిగా నిమ్మరసంతో అలంకరించండి. వేడి వేడి మాల్‌ను ఉడికించిన బాస్మతి అన్నం, వేడి రోటీలు లేదా క్రిస్పీ బ్రెడ్‌తో వడ్డించండి. ఇది నిజంగా ఓదార్పునిచ్చే వంటకం, ఒక గిన్నెలో ఆప్యాయత.'],
                seoTitle: 'మాల్ రెసిపీ తెలుగులో: అత్తయ్య శాంతి రుచికరమైన పప్పు',
                seoDescription: 'మా అత్తయ్య శాంతి రహస్య మాల్ రెసిపీ తెలుగులో నేర్చుకోండి. ఈ ఆత్మను నింపే పప్పు వంటకం, సరైన పద్ధతిలో నానబెట్టి, నెమ్మదిగా ఉడికించి, ఘుమఘుమలాడే తాలింపుతో అద్భుతంగా ఉంటుంది. సులభమైన మాల్ తయారీ విధానం.',
                seoKeywords: 'మాల్ రెసిపీ తెలుగులో, సులభమైన మాల్, పప్పు వంటకాలు, ఆరోగ్యకరమైన పప్పు, ఇంటి వంటకాలు, మాల్ తయారీ విధానం, కందిపప్పు మసూర్ పప్పు'
            },
            ta: {
                title: 'மால் பருப்பு',
                description: 'மால் பருப்பு, இது எல்லா உணவகங்களிலும் எளிதில் கிடைக்காத ஒரு தனித்துவமான உணவாகும். நாசிக் அருகே ஒரு சிறிய கிராமத்தில் வசித்த என் அத்தை சாந்தியிடமிருந்து நான் இதை முதலில் கற்றுக்கொண்டேன். அவரது சமையலறை எப்போதும் வறுத்த மசாலாப் பொருட்களின் நறுமணத்தால் நிறைந்திருக்கும். பொறுமையுடன், சரியான பருப்பு பதத்துடன், ஆழமான சுவையுடன் இந்த மால் பருப்பு செய்வது எப்படி என்று அவர் எனக்குக் கற்றுக்கொடுத்தார். சரியான முறையில் பருப்பை ஊறவைத்து, மெதுவாக சமைத்து, கடைசியில் தாளிப்பு சேர்ப்பதுதான் இதன் ரகசியம். இந்த சுவையான மால் பருப்பு உங்கள் மனதை நிச்சயம் கவரும்.',
                ingredients: [{ item: 'துவரம் பருப்பு', amount: '1/2 கப்' }, { item: 'மசூர் பருப்பு', amount: '1/4 கப்' }, { item: 'தண்ணீர்', amount: '4 கப், தேவைப்பட்டால் மேலும்' }, { item: 'நெய் அல்லது சமையல் எண்ணெய்', amount: '3 டேபிள்ஸ்பூன்' }, { item: 'சீரகம்', amount: '1 டீஸ்பூன்' }, { item: 'கடுகு', amount: '1/2 டீஸ்பூன்' }, { item: 'பெருங்காயம்', amount: '1/4 டீஸ்பூன்' }, { item: 'வெங்காயம்', amount: '1 நடுத்தர அளவு, பொடியாக நறுக்கியது' }, { item: 'இஞ்சி-பூண்டு விழுது', amount: '1 டேபிள்ஸ்பூன் (புதிதாக அரைத்தது)' }, { item: 'பச்சை மிளகாய்', amount: '2, நீளவாக்கில் கீறியது (சுவைக்கு ஏற்ப)' }, { item: 'தக்காளி', amount: '1 பெரியது, பொடியாக நறுக்கியது' }, { item: 'மஞ்சள் தூள்', amount: '1/2 டீஸ்பூன்' }, { item: 'தனியா தூள்', amount: '1 டீஸ்பூன்' }, { item: 'மிளகாய் தூள்', amount: '1/2 டீஸ்பூன் (சுவைக்கு ஏற்ப)' }, { item: 'கரம் மசாலா', amount: '1/2 டீஸ்பூன்' }, { item: 'உப்பு', amount: 'சுவைக்கு ஏற்ப' }, { item: 'கொத்தமல்லி இலை', amount: '1/4 கப், நறுக்கியது (அலங்கரிக்க)' }, { item: 'எலுமிச்சை சாறு', amount: '1 டேபிள்ஸ்பூன் (விருப்பமானது, பரிமாற)' }],
                instructions: ['முதலில், துவரம் பருப்பு மற்றும் மசூர் பருப்பை ஒரு பாத்திரத்தில் சேர்த்து, குளிர்ந்த நீரில் பலமுறை கழுவி, தண்ணீர் தெளிவாகும் வரை சுத்தம் செய்யவும். பின்னர், 2 கப் தண்ணீரில் குறைந்தது 20 நிமிடங்கள் ஊறவைக்கவும். பருப்புகள் சற்று உப்பி, மென்மையாக இருப்பதை நீங்கள் காணலாம்.', 'ஊறவைத்த பருப்பை வடிகட்டி, ஒரு கனமான அடிப்பகுதியுள்ள பாத்திரம் அல்லது பிரஷர் குக்கருக்கு மாற்றவும். 4 கப் புதிய தண்ணீர், மஞ்சள் தூள் மற்றும் ஒரு சிட்டிகை உப்பு சேர்க்கவும். பாத்திரத்தில் சமைத்தால், கொதிக்க வைத்து, பின்னர் தீயைக் குறைத்து, மூடி போட்டு 30-40 நிமிடங்கள் அல்லது பருப்பு மென்மையாகும் வரை சமைக்கவும். தண்ணீர் குறையாமல் பார்த்துக்கொள்ளவும்; தேவைப்பட்டால் சூடான நீரை சேர்க்கவும். பிரஷர் குக்கரில், நடுத்தர தீயில் 3-4 விசில் வரும் வரை சமைத்து, பின்னர் தானாகவே ஆவி வெளியேற விடவும். பருப்பு கிரீமியாகவும், மென்மையாகவும் இருக்க வேண்டும்.', 'பருப்பு சமைக்கும் போது, தாளிப்பு தயார் செய்யலாம். ஒரு தனி சிறிய கடாயில் நெய் அல்லது எண்ணெயை நடுத்தர தீயில் சூடாக்கவும். எண்ணெய் சூடானதும், சீரகம் மற்றும் கடுகு சேர்க்கவும். கடுகு வெடித்து சிதறும் வரை 15-20 வினாடிகள் வறுக்கவும். கருக விட வேண்டாம்!', 'உடனே பெருங்காயம், பின்னர் நறுக்கிய வெங்காயம் சேர்க்கவும். நன்கு கிளறவும். வெங்காயம் பொன்னிறமாக மாறி, ஓரங்கள் சற்று பழுப்பு நிறமாக மாறும் வரை சுமார் 5-7 நிமிடங்கள் வதக்கவும். பின்னர், புதிதாக அரைத்த இஞ்சி-பூண்டு விழுது மற்றும் பச்சை மிளகாய் சேர்க்கவும். இஞ்சி-பூண்டின் பச்சை வாசனை போகும் வரை மேலும் ஒரு நிமிடம் வதக்கவும்.', 'இப்போது, நறுக்கிய தக்காளியை சேர்த்து கிளறவும். கரண்டியின் பின்புறத்தால் மெதுவாக மசித்து, தக்காளி மென்மையாகும் வரை மற்றும் எண்ணெய் பிரிந்து வரும் வரை சுமார் 5-8 நிமிடங்கள் சமைக்கவும். இது ஒரு கெட்டியான, பளபளப்பான விழுது போல இருக்கும். பின்னர், தனியா தூள் மற்றும் மிளகாய் தூள் சேர்க்கவும். மசாலாப் பொருட்கள் கருகாமல் இருக்க, தொடர்ந்து கிளறி 30 வினாடிகள் வதக்கவும்.', 'இந்த நறுமணமிக்க தாளிப்பை சமைத்த பருப்புடன் சேர்க்கவும். அனைத்தையும் நன்கு கிளறவும். பருப்பு உடனடியாக ஒரு செழுமையான நிறத்தையும், சிக்கலான நறுமணத்தையும் பெறும். கரம் மசாலா சேர்த்து, சுவைக்கு ஏற்ப உப்பு சரிபார்க்கவும். மால் மிகவும் கெட்டியாக இருந்தால், விரும்பிய பதத்திற்கு வர சிறிது சூடான நீரை சேர்க்கவும்; இது கெட்டியாக ஆனால் ஊற்றக்கூடியதாக இருக்க வேண்டும். அனைத்து சுவைகளும் ஒன்றிணையும் வரை மேலும் 5 நிமிடங்கள் மெதுவாக கொதிக்க விடவும்.', 'கடைசியாக, பெரும்பாலான நறுக்கிய கொத்தமல்லி இலைகளை சேர்க்கவும். சூடான மாலையை பரிமாறும் கிண்ணங்களுக்கு மாற்றவும். மீதமுள்ள கொத்தமல்லி இலைகள் மற்றும் ஒரு பிழிந்த எலுமிச்சை சாறுடன் (விரும்பினால்) அலங்கரித்து பரிமாறவும். இதை சூடான பாஸ்மதி அரிசி, சூடான ரொட்டி அல்லது மிருதுவான ரொட்டியுடன் பரிமாறவும். இது உண்மையிலேயே ஆறுதலான ஒரு உணவாகும்.'],
                seoTitle: 'சுவையான மால் பருப்பு செய்முறை: வீட்டிலேயே எளிதாக செய்யலாம்!',
                seoDescription: 'அத்தை சாந்தியின் ரகசிய மால் பருப்பு செய்முறையை கற்றுக்கொள்ளுங்கள்! சரியான பதம், ஆழமான சுவையுடன் இந்த மால் பருப்பு செய்முறை உங்கள் மனதை கவரும்.',
                seoKeywords: 'மால் பருப்பு செய்முறை, மால் பருப்பு செய்வது எப்படி, பருப்பு ரெசிபி, இந்தியன் டால் ரெசிபி, சுவையான பருப்பு'
            },
            kn: {
                title: 'ಮಾಲ್',
                description: 'ಮಾಲ್, ಇದು ಕೇವಲ ಒಂದು ಬೇಳೆ ಸಾರಲ್ಲ, ಇದು ಆತ್ಮಕ್ಕೆ ತೃಪ್ತಿ ನೀಡುವ ಮನೆಯ ಅಡುಗೆ. ನಾಶಿಕ್ ಹೊರಗಿನ ಒಂದು ಸಣ್ಣ ಹಳ್ಳಿಯಲ್ಲಿ ವಾಸಿಸುತ್ತಿದ್ದ ನನ್ನ ಶಾಂತಿ ಅತ್ತೆಯಿಂದ ನಾನು ಇದನ್ನು ಕಲಿತೆ. ಅವರ ಅಡುಗೆಮನೆ ಯಾವಾಗಲೂ ಮಸಾಲೆಗಳ ಸುಗಂಧದಿಂದ ತುಂಬಿರುತ್ತಿತ್ತು. ಬೇಳೆಗಳನ್ನು ಸರಿಯಾಗಿ ನೆನೆಸಿ, ನಿಧಾನವಾಗಿ ಬೇಯಿಸಿ, ಕೊನೆಯಲ್ಲಿ ಪರಿಪೂರ್ಣ ಒಗ್ಗರಣೆ ಹಾಕುವುದು ಇದರ ರಹಸ್ಯ. ಈ ಮಾಲ್‌ನ ಪ್ರತಿಯೊಂದು ತುತ್ತು ನಿಮ್ಮನ್ನು ಒಳಗಿನಿಂದ ಬೆಚ್ಚಗಾಗಿಸುತ್ತದೆ, ನಿಜವಾದ ಪ್ರೀತಿಯ ಸ್ಪರ್ಶದೊಂದಿಗೆ.',
                ingredients: [{ item: 'ತೊಗರಿ ಬೇಳೆ', amount: '1/2 ಕಪ್' }, { item: 'ಮಸೂರ್ ಬೇಳೆ', amount: '1/4 ಕಪ್' }, { item: 'ನೀರು', amount: '4 ಕಪ್, ಅಗತ್ಯವಿದ್ದರೆ ಹೆಚ್ಚು' }, { item: 'ತುಪ್ಪ ಅಥವಾ ಸಸ್ಯಜನ್ಯ ಎಣ್ಣೆ', amount: '3 ಟೀಸ್ಪೂನ್' }, { item: 'ಜೀರಿಗೆ', amount: '1 ಟೀಸ್ಪೂನ್' }, { item: 'ಸಾಸಿವೆ', amount: '1/2 ಟೀಸ್ಪೂನ್' }, { item: 'ಇಂಗು', amount: '1/4 ಟೀಸ್ಪೂನ್' }, { item: 'ಈರುಳ್ಳಿ', amount: '1 ಮಧ್ಯಮ ಗಾತ್ರದ, ನುಣ್ಣಗೆ ಹೆಚ್ಚಿದ' }, { item: 'ಶುಂಠಿ-ಬೆಳ್ಳುಳ್ಳಿ ಪೇಸ್ಟ್', amount: '1 ಟೀಸ್ಪೂನ್ (ತಾಜಾ ತಯಾರಿಸಿದ್ದು)' }, { item: 'ಹಸಿ ಮೆಣಸಿನಕಾಯಿ', amount: '2, ಉದ್ದಕ್ಕೆ ಸೀಳಿದ (ರುಚಿಗೆ ತಕ್ಕಂತೆ ಹೊಂದಿಸಿ)' }, { item: 'ಟೊಮೆಟೊ', amount: '1 ದೊಡ್ಡದು, ನುಣ್ಣಗೆ ಹೆಚ್ಚಿದ' }, { item: 'ಅರಿಶಿನ ಪುಡಿ', amount: '1/2 ಟೀಸ್ಪೂನ್' }, { item: 'ಕೊತ್ತಂಬರಿ ಪುಡಿ', amount: '1 ಟೀಸ್ಪೂನ್' }, { item: 'ಕೆಂಪು ಮೆಣಸಿನಕಾಯಿ ಪುಡಿ', amount: '1/2 ಟೀಸ್ಪೂನ್ (ರುಚಿಗೆ ತಕ್ಕಂತೆ ಹೊಂದಿಸಿ)' }, { item: 'ಗರಂ ಮಸಾಲಾ', amount: '1/2 ಟೀಸ್ಪೂನ್' }, { item: 'ಉಪ್ಪು', amount: 'ರುಚಿಗೆ ತಕ್ಕಷ್ಟು' }, { item: 'ತಾಜಾ ಕೊತ್ತಂಬರಿ ಸೊಪ್ಪು', amount: '1/4 ಕಪ್, ಹೆಚ್ಚಿದ (ಅಲಂಕಾರಕ್ಕೆ)' }, { item: 'ನಿಂಬೆ ರಸ', amount: '1 ಟೀಸ್ಪೂನ್ (ಐಚ್ಛಿಕ, ಬಡಿಸಲು)' }],
                instructions: ['ಮೊದಲಿಗೆ, ಬೇಳೆಗಳನ್ನು ಚೆನ್ನಾಗಿ ತೊಳೆಯಿರಿ. ತೊಗರಿ ಬೇಳೆ ಮತ್ತು ಮಸೂರ್ ಬೇಳೆಯನ್ನು ಒಂದು ಬಟ್ಟಲಿನಲ್ಲಿ ಸೇರಿಸಿ, ತಣ್ಣೀರಿನಲ್ಲಿ ಹಲವು ಬಾರಿ ತೊಳೆಯಿರಿ, ನೀರು ಸ್ಪಷ್ಟವಾಗುವವರೆಗೆ. ಇದು ಧೂಳು ಮತ್ತು ಕಲ್ಮಶಗಳನ್ನು ತೆಗೆದುಹಾಕುತ್ತದೆ. ತೊಳೆದ ನಂತರ, ಅವುಗಳನ್ನು 2 ಕಪ್ ತಾಜಾ ನೀರಿನಲ್ಲಿ ಕನಿಷ್ಠ 20 ನಿಮಿಷಗಳ ಕಾಲ ನೆನೆಸಿಡಿ. ಅವು ಸ್ವಲ್ಪ ಉಬ್ಬಿ, ಮೃದುವಾಗುವುದನ್ನು ನೀವು ನೋಡುತ್ತೀರಿ.', 'ನೆನೆಸಿದ ಬೇಳೆಗಳನ್ನು ನೀರು ಬಸಿದು, ದಪ್ಪ ತಳದ ಪಾತ್ರೆಗೆ ಅಥವಾ ಪ್ರೆಶರ್ ಕುಕ್ಕರ್‌ಗೆ ವರ್ಗಾಯಿಸಿ. 4 ಕಪ್ ತಾಜಾ ನೀರು, ಅರಿಶಿನ ಪುಡಿ ಮತ್ತು ಒಂದು ಚಿಟಿಕೆ ಉಪ್ಪು ಸೇರಿಸಿ. ಪಾತ್ರೆ ಬಳಸುತ್ತಿದ್ದರೆ, ಕುದಿಸಿ, ನಂತರ ಉರಿಯನ್ನು ಕಡಿಮೆ ಮಾಡಿ, ಮುಚ್ಚಿ 30-40 ನಿಮಿಷಗಳ ಕಾಲ ಅಥವಾ ಬೇಳೆಗಳು ಮೃದುವಾಗಿ ಸುಲಭವಾಗಿ ಮ್ಯಾಶ್ ಆಗುವವರೆಗೆ ಬೇಯಿಸಿ. ನೀರಿನ ಮಟ್ಟವನ್ನು ಗಮನಿಸಿ; ತುಂಬಾ ದಪ್ಪವಾದರೆ ಸ್ವಲ್ಪ ಬಿಸಿ ನೀರು ಸೇರಿಸಿ. ಪ್ರೆಶರ್ ಕುಕ್ಕರ್‌ನಲ್ಲಿ, ಮಧ್ಯಮ ಉರಿಯಲ್ಲಿ 3-4 ಸೀಟಿಗಳಿಗೆ ಬೇಯಿಸಿ, ನಂತರ ಒತ್ತಡವನ್ನು ನೈಸರ್ಗಿಕವಾಗಿ ಬಿಡುಗಡೆ ಮಾಡಲು ಬಿಡಿ. ಬೇಳೆಗಳು ಕೆನೆ ಮತ್ತು ಮೃದುವಾಗಿ, ಬಹುತೇಕ ಕರಗಿದಂತೆ ಕಾಣಬೇಕು.', 'ಬೇಳೆಗಳು ಬೇಯುತ್ತಿರುವಾಗ, ಒಗ್ಗರಣೆ ಸಿದ್ಧಪಡಿಸೋಣ. ಒಂದು ಸಣ್ಣ ಬಾಣಲೆಯಲ್ಲಿ ತುಪ್ಪ ಅಥವಾ ಎಣ್ಣೆಯನ್ನು ಮಧ್ಯಮ ಉರಿಯಲ್ಲಿ ಬಿಸಿ ಮಾಡಿ. ಅದು ಬಿಸಿಯಾದಾಗ, ಜೀರಿಗೆ ಮತ್ತು ಸಾಸಿವೆ ಹಾಕಿ. ಅವು ಸಿಡಿಯಲು ಮತ್ತು ಪುಟಿಯಲು ಪ್ರಾರಂಭಿಸುತ್ತವೆ, ಸಾಸಿವೆ ಕಾಳುಗಳು ಸಣ್ಣ ನೃತ್ಯಗಾರರಂತೆ ಜಿಗಿಯುತ್ತವೆ. ಇದಕ್ಕೆ ಸುಮಾರು 15-20 ಸೆಕೆಂಡುಗಳು ಬೇಕಾಗುತ್ತದೆ. ಅವು ಸುಡದಂತೆ ನೋಡಿಕೊಳ್ಳಿ!', 'ತಕ್ಷಣ ಇಂಗು, ನಂತರ ಹೆಚ್ಚಿದ ಈರುಳ್ಳಿ ಸೇರಿಸಿ. ಚೆನ್ನಾಗಿ ಕಲಸಿ. ಈರುಳ್ಳಿ ಪಾರದರ್ಶಕವಾಗಿ ಮತ್ತು ಸುಂದರವಾದ ಚಿನ್ನದ ಕಂದು ಬಣ್ಣಕ್ಕೆ ತಿರುಗುವವರೆಗೆ, ಸುಮಾರು 5-7 ನಿಮಿಷಗಳ ಕಾಲ ಬೇಯಿಸಿ. ನಿಮ್ಮ ಅಡುಗೆಮನೆಯಲ್ಲಿ ಆ ಸಿಹಿ, ಸುವಾಸನೆಯು ತುಂಬುತ್ತದೆ. ನಂತರ, ತಾಜಾ ಶುಂಠಿ-ಬೆಳ್ಳುಳ್ಳಿ ಪೇಸ್ಟ್ ಮತ್ತು ಹಸಿ ಮೆಣಸಿನಕಾಯಿ ಸೇರಿಸಿ. ಶುಂಠಿ ಮತ್ತು ಬೆಳ್ಳುಳ್ಳಿಯ ಹಸಿ ವಾಸನೆ ಮಾಯವಾಗುವವರೆಗೆ, ಮತ್ತು ಅದು ಸುವಾಸನೆ ಮತ್ತು ಮಸಾಲೆಯುಕ್ತವಾಗಿ ವಾಸನೆ ಬರುವವರೆಗೆ ಇನ್ನೊಂದು ನಿಮಿಷ ಹುರಿಯಿರಿ.', 'ಈಗ, ಹೆಚ್ಚಿದ ಟೊಮೆಟೊ ಸೇರಿಸಿ. ಅದನ್ನು ಮೃದುವಾಗುವವರೆಗೆ, ನಿಮ್ಮ ಚಮಚದ ಹಿಂಭಾಗದಿಂದ ನಿಧಾನವಾಗಿ ಮ್ಯಾಶ್ ಮಾಡುತ್ತಾ ಬೇಯಿಸಿ, ಎಣ್ಣೆ ಮಿಶ್ರಣದಿಂದ ಬೇರ್ಪಡಲು ಪ್ರಾರಂಭಿಸುವವರೆಗೆ – ಇದು ಟೊಮೆಟೊಗಳು ಸರಿಯಾಗಿ ಬೇಯಿಸಿವೆ ಎಂಬುದಕ್ಕೆ ದೃಶ್ಯ ಸೂಚನೆ, ಸಾಮಾನ್ಯವಾಗಿ 5-8 ನಿಮಿಷಗಳು. ಇದು ದಪ್ಪ, ಹೊಳೆಯುವ ಪೇಸ್ಟ್‌ನಂತೆ ಕಾಣುತ್ತದೆ. ನಂತರ, ಕೊತ್ತಂಬರಿ ಪುಡಿ ಮತ್ತು ಕೆಂಪು ಮೆಣಸಿನಕಾಯಿ ಪುಡಿ ಸೇರಿಸಿ. ಮಸಾಲೆಗಳನ್ನು ಹುರಿಯಲು ಮತ್ತು ಅವುಗಳ ರುಚಿಯನ್ನು ಹೆಚ್ಚಿಸಲು ಕೇವಲ 30 ಸೆಕೆಂಡುಗಳ ಕಾಲ ನಿರಂತರವಾಗಿ ಕಲಸುತ್ತಾ ಹುರಿಯಿರಿ. ಅವು ಸುಡದಂತೆ ಎಚ್ಚರವಹಿಸಿ; ಅವು ಬೇಗನೆ ಕಹಿಯಾಗಬಹುದು.', 'ಈ ಸುವಾಸನೆಯ ಒಗ್ಗರಣೆ ಮಿಶ್ರಣವನ್ನು ನೇರವಾಗಿ ಬೇಯಿಸಿದ ಬೇಳೆಗಳಿಗೆ ಸುರಿಯಿರಿ. ಎಲ್ಲವನ್ನೂ ಚೆನ್ನಾಗಿ ಕಲಸಿ. ಬೇಳೆ ತಕ್ಷಣವೇ ಶ್ರೀಮಂತ ಬಣ್ಣ ಮತ್ತು ಹೆಚ್ಚು ಸಂಕೀರ್ಣ ಸುವಾಸನೆಯನ್ನು ಪಡೆಯುತ್ತದೆ. ಗರಂ ಮಸಾಲಾ ಸೇರಿಸಿ ಮತ್ತು ನಿಮ್ಮ ರುಚಿಗೆ ತಕ್ಕಂತೆ ಉಪ್ಪನ್ನು ಹೊಂದಿಸಿ. ಮಾಲ್ ತುಂಬಾ ದಪ್ಪವಾಗಿದ್ದರೆ, ನಿಮ್ಮ ಅಪೇಕ್ಷಿತ ಸ್ಥಿರತೆಯನ್ನು ತಲುಪಲು ಸ್ವಲ್ಪ ಬಿಸಿ ನೀರು ಸೇರಿಸಿ; ಇದು ದಪ್ಪವಾಗಿರಬೇಕು ಆದರೆ ಸುರಿಯುವಂತಿರಬೇಕು, ಒಂದು ಹೃತ್ಪೂರ್ವಕ ಸ್ಟ್ಯೂನಂತೆ. ಎಲ್ಲಾ ಸುಂದರ ರುಚಿಗಳು ಬೆರೆಯಲು ಇನ್ನೊಂದು 5 ನಿಮಿಷಗಳ ಕಾಲ ನಿಧಾನವಾಗಿ ಕುದಿಯಲು ಬಿಡಿ.', 'ಕೊನೆಯದಾಗಿ, ಹೆಚ್ಚಿನ ತಾಜಾ ಕೊತ್ತಂಬರಿ ಸೊಪ್ಪನ್ನು ಸೇರಿಸಿ. ಬಿಸಿ ಮಾಲ್ ಅನ್ನು ಬಡಿಸುವ ಬಟ್ಟಲುಗಳಿಗೆ ಹಾಕಿ. ಉಳಿದ ತಾಜಾ ಕೊತ್ತಂಬರಿ ಸೊಪ್ಪು ಮತ್ತು ಒಂದು ಚಿಟಿಕೆ ನಿಂಬೆ ರಸದೊಂದಿಗೆ ಅಲಂಕರಿಸಿ, ನಿಮಗೆ ಆ ಪ್ರಕಾಶಮಾನವಾದ, ಹುಳಿ ಮುಕ್ತಾಯ ಇಷ್ಟವಾದರೆ. ಇದನ್ನು ಬಿಸಿ ಬಿಸಿ ಬಾಸಮತಿ ಅನ್ನ, ಬಿಸಿ ರೊಟ್ಟಿಗಳು ಅಥವಾ ಗರಿಗರಿಯಾದ ಬ್ರೆಡ್‌ನೊಂದಿಗೆ ಬಡಿಸಿ. ಇದು ನಿಜವಾಗಿಯೂ ಆರಾಮದಾಯಕ, ಒಂದು ಬಟ್ಟಲಿನಲ್ಲಿ ಅಪ್ಪುಗೆಯಂತೆ.'],
                seoTitle: 'ರುಚಿಕರ ಮಾಲ್ ರೆಸಿಪಿ ಕನ್ನಡದಲ್ಲಿ: ಮನೆಯಲ್ಲೇ ಮಾಡಿ ಈ ಆತ್ಮೀಯ ಬೇಳೆ',
                seoDescription: 'ಶಾಂತಿ ಅತ್ತೆಯ ವಿಶೇಷ ಮಾಲ್ ರೆಸಿಪಿ ಕನ್ನಡದಲ್ಲಿ ಕಲಿಯಿರಿ. ಬೇಳೆ ನೆನೆಸುವುದರಿಂದ ಹಿಡಿದು ಪರಿಪೂರ್ಣ ಒಗ್ಗರಣೆಯವರೆಗೆ, ಈ ಆತ್ಮೀಯ ಮಾಲ್ ದಾಲ್ ಮಾಡುವ ವಿಧಾನ ಇಲ್ಲಿದೆ. ಸುಲಭವಾಗಿ ಮಾಡಿ!',
                seoKeywords: 'ಮಾಲ್ ರೆಸಿಪಿ ಕನ್ನಡದಲ್ಲಿ, ಮಾಲ್ ದಾಲ್ ಮಾಡುವ ವಿಧಾನ, ಬೇಳೆ ಸಾರು, ಉತ್ತರ ಕರ್ನಾಟಕ ಶೈಲಿಯ ದಾಲ್, ಸುಲಭ ದಾಲ್ ರೆಸಿಪಿ, ಮನೆಯ ಅಡುಗೆ'
            },
            'zh-CN': {
                title: '玛尔扁豆',
                description: '玛尔扁豆是一道不常在餐馆菜单上出现的家常秘制菜肴，它充满灵魂，是真正的家庭烹饪瑰宝。我从住在纳西克郊区小村庄的香提阿姨那里学会了这道菜。她的厨房总是弥漫着烤香料和慢炖锅的香气。这道菜需要耐心，不能急于求成，才能达到那种完美的奶油般质地和深沉的泥土芬芳，温暖人心。',
                ingredients: [{ item: '印度木豆 (去皮)', amount: '1/2 杯' }, { item: '红扁豆', amount: '1/4 杯' }, { item: '水', amount: '4 杯，另备适量' }, { item: '酥油或植物油', amount: '3 汤匙' }, { item: '孜然籽', amount: '1 茶匙' }, { item: '芥菜籽', amount: '1/2 茶匙' }, { item: '阿魏粉', amount: '1/4 茶匙' }, { item: '洋葱', amount: '1 个中等大小，切末' }, { item: '姜蒜泥', amount: '1 汤匙 (现磨)' }, { item: '青辣椒', amount: '2 根，纵向切开 (依口味调整)' }, { item: '番茄', amount: '1 个大号，切末' }, { item: '姜黄粉', amount: '1/2 茶匙' }, { item: '香菜粉', amount: '1 茶匙' }, { item: '红辣椒粉', amount: '1/2 茶匙 (依口味调整)' }, { item: '玛萨拉香料粉', amount: '1/2 茶匙' }, { item: '盐', amount: '适量' }, { item: '新鲜香菜', amount: '1/4 杯，切碎 (用于装饰)' }, { item: '柠檬汁', amount: '1 汤匙 (可选，用于食用)' }],
                instructions: ['首先，清洗扁豆。将印度木豆和红扁豆放入碗中，用冷水反复冲洗几次，直到水变清。这能去除灰尘和杂质。冲洗后，用2杯清水浸泡至少20分钟，你会看到它们变得饱满柔软。', '沥干浸泡好的扁豆，放入厚底锅或高压锅中。加入4杯清水、姜黄粉和一小撮盐。如果用普通锅，煮沸后转小火，盖盖慢炖约30-40分钟，直到扁豆变软，易于捣碎。注意水量，如果太稠可加入少量热水。如果用高压锅，中火煮3-4声哨响，然后自然放气。扁豆应呈奶油状，非常柔软。', '在扁豆烹煮时，准备调味油（tadka）。在另一个小锅中用中火加热酥油或植物油。油热后，放入孜然籽和芥菜籽。稍微退后一点，你会听到它们噼啪作响，芥菜籽会像小舞者一样跳动。这大约需要15-20秒，注意不要烧焦。', '立即加入阿魏粉，然后加入切碎的洋葱。搅拌均匀。将洋葱炒至半透明并边缘呈金黄色，大约需要5-7分钟。你会闻到厨房里弥漫着甜美咸香的气味。接着，加入新鲜姜蒜泥和青辣椒。再炒一分钟，直到姜蒜的生味消失，散发出浓郁的香气。', '现在，加入切碎的番茄。用勺背轻轻按压，将其煮软，直到油开始从混合物中分离出来——这是番茄煮好的视觉信号，通常需要5-8分钟。它会变成浓稠有光泽的糊状。然后，加入香菜粉和红辣椒粉。快速翻炒30秒，不断搅拌，以烤香香料，加深风味。小心不要烧焦，否则会很快变苦。', '将这香气四溢的调味油直接倒入煮好的扁豆中。充分搅拌均匀。扁豆会立刻呈现出更丰富的颜色和更复杂的香气。加入玛萨拉香料粉，并根据口味调整盐量。如果玛尔扁豆太稠，可以加入少量热水，达到你喜欢的浓稠度；它应该像浓汤一样，浓稠但可倾倒。再小火慢炖5分钟，让所有美妙的味道充分融合。', '最后，拌入大部分新鲜香菜。将热腾腾的玛尔扁豆盛入碗中。用剩余的新鲜香菜和少许柠檬汁（如果喜欢那种明亮、清爽的口感）装饰。趁热搭配蒸好的印度香米饭、热乎乎的薄饼或脆皮面包享用。这真是一碗温暖人心的美味。'],
                seoTitle: '玛尔扁豆食谱：在家品尝正宗印度家常美味',
                seoDescription: '探索玛尔扁豆食谱的秘密，这道充满灵魂的印度家常菜，口感醇厚，香气浓郁，带你领略地道的印度风味。跟着阿姨的秘诀，耐心烹制，享受这份温暖人心的美味。',
                seoKeywords: '玛尔扁豆食谱,印度扁豆炖菜,印度菜做法,家常印度菜,扁豆食谱,香料烹饪'
            },
            ms: {
                title: 'Mal',
                description: 'Mal ini bukan sekadar hidangan biasa, ia adalah rahsia dapur yang penuh jiwa. Saya belajar dari Mak Cik Shanti di sebuah kampung kecil dekat Nashik. Dapur beliau sentiasa harum dengan rempah ratus yang dibakar dan periuk yang mendidih. Memasak Mal memerlukan kesabaran, terutamanya dalam mendapatkan tekstur dal yang sempurna – lembut, berkrim, dan tidak melekit. Rahsianya terletak pada rendaman yang tepat dan didihan perlahan. Jangan tergesa-gesa. Sentuhan akhir \'tadka\' dengan minyak panas dan rempah ratus yang meletup-letup pula membangkitkan seluruh hidangan, menjadikannya lebih ceria dan rangup.',
                ingredients: [{ item: 'Dal Toor (Kacang Dhal Belah)', amount: '1/2 cawan' }, { item: 'Dal Masoor (Kacang Dal Merah)', amount: '1/4 cawan' }, { item: 'Air', amount: '4 cawan, dan lebih jika perlu' }, { item: 'Minyak Sapi atau Minyak Sayuran', amount: '3 sudu besar' }, { item: 'Biji Jintan Putih', amount: '1 sudu kecil' }, { item: 'Biji Sawi', amount: '1/2 sudu kecil' }, { item: 'Asafoetida (Hing)', amount: '1/4 sudu kecil' }, { item: 'Bawang Besar', amount: '1 biji sederhana, dicincang halus' }, { item: 'Pes Halia-Bawang Putih', amount: '1 sudu besar (baru dibuat)' }, { item: 'Cili Hijau', amount: '2 biji, dibelah memanjang (laraskan mengikut rasa)' }, { item: 'Tomato', amount: '1 biji besar, dicincang halus' }, { item: 'Serbuk Kunyit', amount: '1/2 sudu kecil' }, { item: 'Serbuk Ketumbar', amount: '1 sudu kecil' }, { item: 'Serbuk Cili Merah', amount: '1/2 sudu kecil (laraskan mengikut rasa)' }, { item: 'Garam Masala', amount: '1/2 sudu kecil' }, { item: 'Garam', amount: 'secukup rasa' }, { item: 'Daun Ketumbar Segar', amount: '1/4 cawan, dicincang (untuk hiasan)' }, { item: 'Jus Lemon', amount: '1 sudu besar (pilihan, untuk hidangan)' }],
                instructions: ['Mula-mula, bilas dal anda. Satukan dal toor dan dal masoor dalam mangkuk, kemudian bilas di bawah air sejuk beberapa kali sehingga air jernih. Ini menghilangkan habuk atau kotoran. Selepas dibilas, rendam dalam 2 cawan air bersih selama sekurang-kurangnya 20 minit. Anda akan melihat ia mengembang sedikit, kelihatan lebih berisi dan lembut.', 'Toskan dal yang telah direndam dan pindahkan ke dalam periuk bertapak tebal atau periuk tekanan. Tambah 4 cawan air bersih, serbuk kunyit, dan secubit garam. Jika menggunakan periuk biasa, didihkan, kemudian kecilkan api, tutup, dan reneh selama kira-kira 30-40 minit, atau sehingga dal lembut dan mudah dilenyek. Perhatikan paras air; tambah sedikit air panas jika terlalu pekat. Dalam periuk tekanan, masak selama 3-4 wisel dengan api sederhana, kemudian biarkan tekanan dilepaskan secara semula jadi. Dal sepatutnya kelihatan berkrim dan lembut, hampir hancur.', 'Semasa dal sedang dimasak, mari kita sediakan \'tadka\' (tumisan rempah). Panaskan minyak sapi atau minyak dalam kuali kecil berasingan di atas api sederhana. Apabila minyak berkilat, masukkan biji jintan putih dan biji sawi. Berundur sedikit; anda akan mendengar ia meletup-letup, dan biji sawi akan melompat-lompat seperti penari kecil. Ini biasanya mengambil masa kira-kira 15-20 saat. Jangan biarkan ia hangus!', 'Segera masukkan asafoetida, kemudian bawang besar yang dicincang. Kacau rata. Masak bawang sehingga menjadi lutsinar dan mula keperangan keemasan yang cantik, kira-kira 5-7 minit. Anda akan menghidu aroma manis dan savuri memenuhi dapur anda. Seterusnya, masukkan pes halia-bawang putih segar dan cili hijau. Tumis selama seminit lagi sehingga bau mentah halia dan bawang putih hilang, dan ia berbau harum dan pedas.', 'Sekarang, masukkan tomato yang dicincang. Masak sehingga lembut, lenyekkan perlahan-lahan dengan belakang sudu anda, sehingga minyak mula terpisah dari campuran – ini adalah petunjuk visual bahawa tomato telah masak dengan sempurna, biasanya 5-8 minit. Ia akan kelihatan seperti pes pekat dan berkilat. Kemudian, masukkan serbuk ketumbar dan serbuk cili merah. Tumis selama 30 saat sahaja, kacau sentiasa, untuk membakar rempah dan mendalamkan rasanya. Berhati-hati agar tidak hangus; ia boleh menjadi pahit dengan cepat.', 'Tuangkan campuran tumisan rempah yang harum ini terus ke dalam dal yang telah dimasak. Kacau semuanya sehingga sebati. Dal akan serta-merta mengambil warna yang lebih kaya dan aroma yang lebih kompleks. Tambah garam masala dan laraskan garam mengikut rasa anda. Jika Mal terlalu pekat, tambah sedikit air panas untuk mencapai kepekatan yang anda inginkan; ia sepatutnya pekat tetapi boleh dituang, seperti sup pekat. Biarkan ia mereneh perlahan-lahan selama 5 minit lagi, membiarkan semua rasa yang indah itu sebati.', 'Akhir sekali, masukkan sebahagian besar daun ketumbar segar. Cedok Mal yang panas ke dalam mangkuk hidangan. Hias dengan baki daun ketumbar segar dan perahan jus lemon, jika anda suka sentuhan masam yang cerah itu. Hidangkan panas-panas dengan nasi basmati kukus, roti panas, atau roti kerak. Ia benar-benar menenangkan, seperti pelukan dalam mangkuk.'],
                seoTitle: 'Resepi Dal Mal Auntie Shanti: Rahsia Rasa Asli India',
                seoDescription: 'Selami kehangatan Dal Mal Auntie Shanti, resepi turun-temurun dari Nashik. Nikmati kelembutan dal dengan rempah ratus asli. Cuba resepi Dal Mal ini hari ini!',
                seoKeywords: 'Resepi Dal Mal, cara masak Dal Mal, Dal Mal asli, resepi dal India, dal toor masoor, hidangan dal tradisional, resipi dal mudah'
            }
        }
    }
];
