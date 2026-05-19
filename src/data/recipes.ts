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
];
