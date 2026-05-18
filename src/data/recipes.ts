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
    ,
        translations: {
            'zh-CN': {
                        title: '奶油野菌烩饭',
                        description: '一道奢华的意大利经典菜肴，采用我们的干牛肝菌和白松露油。口感浓郁、泥土芬芳，令人心满意足。',
                        ingredients: [
                            {
                                item: '意大利烩饭米',
                                amount: '2 杯'
                            },
                            {
                                item: '干牛肝菌',
                                amount: '30克'
                            },
                            {
                                item: '蔬菜高汤',
                                amount: '1.5 升'
                            },
                            {
                                item: '白葡萄酒',
                                amount: '1/2 杯'
                            },
                            {
                                item: '小洋葱',
                                amount: '2 个，切碎'
                            },
                            {
                                item: '黄油',
                                amount: '50克'
                            },
                            {
                                item: '帕尔马干酪',
                                amount: '1/2 杯'
                            },
                            {
                                item: '松露酥油',
                                amount: '1 汤匙'
                            }
                        ],
                        instructions: [
                            '将干牛肝菌用温水浸泡20分钟使其软化。沥干并切碎，保留浸泡液。',
                            '在一个大平底锅中，用一半黄油炒香小洋葱，直至变软。',
                            '加入米饭，翻炒2分钟，直至边缘变透明。',
                            '倒入白葡萄酒，搅拌直至蒸发。',
                            '逐渐加入温热的高汤（和蘑菇浸泡液），每次一勺，持续搅拌。',
                            '烹饪至一半时，加入切碎的蘑菇。',
                            '米饭煮至弹牙后，离火。拌入剩余的黄油、帕尔马干酪和松露酥油。',
                            '立即与新鲜欧芹一起享用。'
                        ]
                    },
            ms: {
                        title: 'Risotto Cendawan Liar Berkrim',
                        description: 'Hidangan klasik Itali yang mewah menggunakan Cendawan Porcini Kering dan Minyak Truffle Putih kami. Kaya, berperisa tanah, dan menenangkan.',
                        ingredients: [
                            {
                                item: 'Beras Arborio',
                                amount: '2 cawan'
                            },
                            {
                                item: 'Cendawan Porcini Kering',
                                amount: '30g'
                            },
                            {
                                item: 'Stok Sayuran',
                                amount: '1.5 liter'
                            },
                            {
                                item: 'Wain Putih',
                                amount: '1/2 cawan'
                            },
                            {
                                item: 'Bawang Merah Kecil',
                                amount: '2 biji, dicincang halus'
                            },
                            {
                                item: 'Mentega',
                                amount: '50g'
                            },
                            {
                                item: 'Keju Parmesan',
                                amount: '1/2 cawan'
                            },
                            {
                                item: 'Ghee Desi Infusi Truffle',
                                amount: '1 sudu besar'
                            }
                        ],
                        instructions: [
                            'Rendam cendawan porcini kering dalam air suam selama 20 minit. Toskan dan cincang, simpan air rendaman.',
                            'Dalam kuali besar, tumis bawang merah kecil dengan separuh mentega sehingga lembut.',
                            'Masukkan beras dan tumis selama 2 minit sehingga lutsinar di bahagian tepi.',
                            'Tuangkan wain dan kacau sehingga kering.',
                            'Masukkan stok suam (dan air cendawan) secara beransur-ansur, satu senduk pada satu masa, kacau sentiasa.',
                            'Masukkan cendawan cincang separuh jalan memasak.',
                            'Apabila nasi al dente, angkat dari api. Kacau masuk baki mentega, parmesan, dan Ghee Truffle.',
                            'Hidangkan segera dengan pasli segar.'
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
            'Shred the Lion\'s Mane mushrooms into small, crab-like pieces.',
            'Sauté the mushrooms in a dry pan to remove excess moisture.',
            'In a bowl, mix mayonnaise, mustard, egg, seasoning, and green onions.',
            'Fold in the mushrooms and breadcrumbs.',
            'Form into patties and refrigerate for 20 minutes to set.',
            'Pan-fry in oil until golden brown on both sides.',
            'Serve with lemon wedges and tartar sauce.'
        ],
        tags: ['Lunch', 'Vegan Option', 'Seafood Alternative']
    ,
        translations: {
            'zh-CN': {
                        title: '猴头菇“蟹肉”饼',
                        description: '海鲜经典菜肴的植物基版本。猴头菇的质地与蟹肉惊人地相似。',
                        ingredients: [
                            {
                                item: '新鲜猴头菇（来自套件）',
                                amount: '500克'
                            },
                            {
                                item: '日式面包糠',
                                amount: '1 杯'
                            },
                            {
                                item: '蛋黄酱',
                                amount: '1/4 杯'
                            },
                            {
                                item: '第戎芥末酱',
                                amount: '1 茶匙'
                            },
                            {
                                item: '老湾调味料',
                                amount: '1 茶匙'
                            },
                            {
                                item: '鸡蛋',
                                amount: '1 个'
                            },
                            {
                                item: '香葱',
                                amount: '2 根，切碎'
                            }
                        ],
                        instructions: [
                            '将猴头菇撕成蟹肉状的小块。',
                            '在干锅中炒香蘑菇，以去除多余水分。',
                            '在一个碗中，混合蛋黄酱、芥末酱、鸡蛋、调味料和香葱。',
                            '拌入蘑菇和面包糠。',
                            '塑形为饼状，冷藏20分钟使其定型。',
                            '用油煎至两面金黄。',
                            '搭配柠檬角和塔塔酱享用。'
                        ]
                    },
            ms: {
                        title: 'Kek "Ketam" Cendawan Lion\'s Mane',
                        description: 'Sentuhan berasaskan tumbuhan pada hidangan laut kegemaran. Cendawan Lion\'s Mane mempunyai tekstur yang sangat serupa dengan isi ketam.',
                        ingredients: [
                            {
                                item: 'Cendawan Lion\'s Mane Segar (dari Kit)',
                                amount: '500g'
                            },
                            {
                                item: 'Serbuk Roti Panko',
                                amount: '1 cawan'
                            },
                            {
                                item: 'Mayonis',
                                amount: '1/4 cawan'
                            },
                            {
                                item: 'Mustard Dijon',
                                amount: '1 sudu kecil'
                            },
                            {
                                item: 'Perasa Old Bay',
                                amount: '1 sudu kecil'
                            },
                            {
                                item: 'Telur',
                                amount: '1 biji'
                            },
                            {
                                item: 'Daun Bawang',
                                amount: '2 batang, dicincang'
                            }
                        ],
                        instructions: [
                            'Carik-carikkan cendawan Lion\'s Mane menjadi kepingan kecil seperti isi ketam.',
                            'Tumis cendawan dalam kuali kering untuk menghilangkan kelembapan berlebihan.',
                            'Dalam mangkuk, campurkan mayonis, mustard, telur, perasa, dan daun bawang.',
                            'Gaulkan cendawan dan serbuk roti.',
                            'Bentukkan menjadi bebola leper dan sejukkan selama 20 minit untuk mengeras.',
                            'Goreng dalam minyak sehingga perang keemasan di kedua-dua belah.',
                            'Hidangkan dengan hirisan lemon dan sos tartar.'
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
            'Sauté onions in oil until golden brown. Add ginger-garlic paste and cook for 1 minute.',
            'Add tomato puree and cook until oil separates.',
            'Stir in the Magic Mushroom Masala and salt.',
            'Add mushrooms and toss to coat. Cook for 5 minutes.',
            'Pour in coconut milk and simmer for 10-15 minutes until sauce thickens.',
            'Garnish with fresh cilantro and serve hot.'
        ],
        tags: ['Dinner', 'Indian', 'Spicy']
    ,
        translations: {
            'zh-CN': {
                        title: '辛辣蘑菇马萨拉咖喱',
                        description: '一道浓郁的印度咖喱，特色是我们的魔力蘑菇马萨拉混合香料。搭配烤饼或米饭食用完美。',
                        ingredients: [
                            {
                                item: '混合新鲜蘑菇',
                                amount: '500克'
                            },
                            {
                                item: '洋葱',
                                amount: '2个，切碎'
                            },
                            {
                                item: '番茄',
                                amount: '2个，打成泥'
                            },
                            {
                                item: '姜蒜酱',
                                amount: '1汤匙'
                            },
                            {
                                item: '魔力蘑菇马萨拉',
                                amount: '2汤匙'
                            },
                            {
                                item: '椰奶',
                                amount: '1杯'
                            },
                            {
                                item: '香菜',
                                amount: '用于装饰'
                            }
                        ],
                        instructions: [
                            '用油炒洋葱至金黄色。加入姜蒜酱，煮1分钟。',
                            '加入番茄泥，煮至油水分离。',
                            '拌入魔力蘑菇马萨拉和盐。',
                            '加入蘑菇并翻炒均匀。煮5分钟。',
                            '倒入椰奶，小火炖煮10-15分钟，直到酱汁变稠。',
                            '用新鲜香菜装饰，趁热食用。'
                        ]
                    },
            ms: {
                        title: 'Kari Masala Cendawan Pedas',
                        description: 'Kari India yang kaya rasa, menampilkan campuran rempah Magic Mushroom Masala kami. Sesuai dihidangkan dengan naan atau nasi.',
                        ingredients: [
                            {
                                item: 'Cendawan Campuran Segar',
                                amount: '500g'
                            },
                            {
                                item: 'Bawang Besar',
                                amount: '2 biji, dicincang'
                            },
                            {
                                item: 'Tomato',
                                amount: '2 biji, dilumatkan'
                            },
                            {
                                item: 'Pes Halia-Bawang Putih',
                                amount: '1 sudu besar'
                            },
                            {
                                item: 'Magic Mushroom Masala',
                                amount: '2 sudu besar'
                            },
                            {
                                item: 'Santan',
                                amount: '1 cawan'
                            },
                            {
                                item: 'Daun Ketumbar',
                                amount: 'Untuk hiasan'
                            }
                        ],
                        instructions: [
                            'Tumis bawang besar dalam minyak sehingga keperangan. Masukkan pes halia-bawang putih dan masak selama 1 minit.',
                            'Masukkan puri tomato dan masak sehingga minyak terpisah.',
                            'Masukkan Magic Mushroom Masala dan garam, kacau rata.',
                            'Masukkan cendawan dan gaul rata. Masak selama 5 minit.',
                            'Tuang santan dan reneh selama 10-15 minit sehingga kuah pekat.',
                            'Hias dengan daun ketumbar segar dan hidangkan panas-panas.'
                        ]
                    }
        }
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
    ,
        translations: {
            'zh-CN': {
                        title: '塔布勒沙拉',
                        description: '塔布勒沙拉是黎巴嫩美食中充满活力、香草芬芳的灵魂，一道清爽的沙拉，颂扬了新鲜欧芹和薄荷的丰盛。这道标志性菜肴完美平衡了柠檬的酸味和细粒布格麦的微妙嚼劲，每一口都带来地中海阳光的爆发。',
                        ingredients: [
                            {
                                item: '细粒布格麦 (burghul na\'am)',
                                amount: '90克'
                            },
                            {
                                item: '新鲜平叶欧芹',
                                amount: '2大束 (约250克)'
                            },
                            {
                                item: '新鲜薄荷叶',
                                amount: '1/2杯压实 (约30克)'
                            },
                            {
                                item: '熟番茄',
                                amount: '2个中等大小 (约300克)'
                            },
                            {
                                item: '小葱',
                                amount: '4-5根'
                            },
                            {
                                item: '新鲜柠檬汁',
                                amount: '1/4杯 (约60毫升)'
                            },
                            {
                                item: '特级初榨橄榄油',
                                amount: '1/4杯 (约60毫升)'
                            },
                            {
                                item: '盐',
                                amount: '1茶匙'
                            },
                            {
                                item: '现磨黑胡椒',
                                amount: '1/2茶匙 (可选)'
                            }
                        ],
                        instructions: [
                            '将细粒布格麦放入中碗中。用冷水快速冲洗，然后用细网筛彻底沥干，挤出多余水分。让其在残留水分中浸泡20-30分钟，直至饱满变软，然后用叉子拨松。',
                            '在布格麦浸泡的同时，仔细清洗并彻底擦干欧芹和薄荷。将欧芹切碎，确保其几乎像粗粉末一样，并切碎薄荷叶。将它们放入一个大搅拌碗中。',
                            '将熟番茄切成小丁，确保沥干所有多余液体。将小葱切薄片，使用白色和浅绿色部分。将切好的番茄和小葱加入装有香草的碗中。',
                            '将拨松的布格麦加入装有香草和蔬菜的碗中。',
                            '将新鲜柠檬汁和特级初榨橄榄油倒在混合物上。用盐和现磨黑胡椒（如果使用）调味。',
                            '轻轻地将所有食材混合均匀。品尝并根据需要调整调味料。为获得最佳效果，盖上碗，让塔布勒沙拉在冰箱中静置至少30分钟，以使风味融合。',
                            '冰镇后作为清爽的配菜、开胃菜或中东拼盘的一部分食用，通常搭配脆生菜叶用于舀取。'
                        ]
                    },
            ms: {
                        title: 'Tabbouleh',
                        description: 'Tabbouleh adalah jiwa masakan Lubnan yang bersemangat dan beraroma herba, salad yang menyegarkan yang meraikan limpahan pasli dan pudina segar. Hidangan ikonik ini mengimbangi dengan sempurna rasa masam lemon dengan tekstur kenyal bulgur halus, menawarkan letupan cahaya matahari Mediterranean dalam setiap suapan.',
                        ingredients: [
                            {
                                item: 'Bulgur Halus (burghul na\'am)',
                                amount: '90g'
                            },
                            {
                                item: 'Daun Pasli Segar',
                                amount: '2 ikat besar (anggaran 250g)'
                            },
                            {
                                item: 'Daun Pudina Segar',
                                amount: '1/2 cawan padat (anggaran 30g)'
                            },
                            {
                                item: 'Tomato Masak',
                                amount: '2 biji sederhana (anggaran 300g)'
                            },
                            {
                                item: 'Daun Bawang',
                                amount: '4-5 batang'
                            },
                            {
                                item: 'Jus Lemon Segar',
                                amount: '1/4 cawan (anggaran 60ml)'
                            },
                            {
                                item: 'Minyak Zaitun Extra Virgin',
                                amount: '1/4 cawan (anggaran 60ml)'
                            },
                            {
                                item: 'Garam',
                                amount: '1 sudu teh'
                            },
                            {
                                item: 'Lada Hitam Baru Dikisar',
                                amount: '1/2 sudu teh (pilihan)'
                            }
                        ],
                        instructions: [
                            'Letakkan bulgur halus dalam mangkuk sederhana. Bilas dengan cepat di bawah air sejuk, kemudian toskan dengan teliti menggunakan penapis jaring halus, tekan keluar air berlebihan. Biarkan ia meresap dalam kelembapan sisa selama 20-30 minit sehingga mengembang dan lembut, kemudian gemburkan dengan garpu.',
                            'Semasa bulgur meresap, basuh dengan teliti dan keringkan pasli dan pudina. Cincang halus pasli, pastikan ia hampir seperti serbuk kasar, dan cincang halus daun pudina. Letakkan dalam mangkuk adunan besar.',
                            'Potong dadu halus tomato masak, pastikan semua cecair berlebihan ditoskan. Hiris nipis daun bawang, gunakan kedua-dua bahagian putih dan hijau muda. Masukkan tomato dan daun bawang yang dicincang ke dalam mangkuk bersama herba.',
                            'Masukkan bulgur yang telah digemburkan ke dalam mangkuk yang mengandungi herba dan sayur-sayuran.',
                            'Tuangkan jus lemon segar dan minyak zaitun extra virgin ke atas campuran. Perasakan dengan garam dan lada hitam baru dikisar (jika digunakan).',
                            'Gaulkan semua bahan dengan perlahan sehingga sebati. Rasa dan sesuaikan perasa mengikut keperluan. Untuk hasil terbaik, tutup mangkuk dan biarkan tabbouleh berehat di dalam peti sejuk selama sekurang-kurangnya 30 minit untuk membolehkan rasa sebati.',
                            'Hidangkan sejuk sebagai hidangan sampingan yang menyegarkan, pembuka selera, atau sebahagian daripada hidangan mezze, selalunya dengan daun salad rangup untuk mencedok.'
                        ]
                    }
        }
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
    ,
        translations: {
            'zh-CN': {
                        title: '加利西亚章鱼 (Pulpo a la Gallega)',
                        description: '这道经典的加利西亚菜肴以鲜嫩、烹制完美的章鱼为特色，简单地淋上特级初榨橄榄油、烟熏辣椒粉和粗海盐。它是一道典型的西班牙小吃，体现了西班牙沿海美食的质朴优雅。',
                        ingredients: [
                            {
                                item: '章鱼',
                                amount: '1公斤 (已清理，新鲜或冷冻)'
                            },
                            {
                                item: '土豆',
                                amount: '500克 (蜡质品种，去皮)'
                            },
                            {
                                item: '特级初榨橄榄油',
                                amount: '100毫升'
                            },
                            {
                                item: '烟熏辣椒粉 (Pimentón de la Vera)',
                                amount: '2茶匙 (甜味或半甜味)'
                            },
                            {
                                item: '粗海盐',
                                amount: '1茶匙 (另加少许用于调味)'
                            },
                            {
                                item: '月桂叶',
                                amount: '2大片'
                            },
                            {
                                item: '洋葱',
                                amount: '1个中等大小 (去皮，对半切开)'
                            },
                            {
                                item: '大蒜',
                                amount: '3瓣 (去皮，拍扁)'
                            }
                        ],
                        instructions: [
                            '步骤 1: 准备章鱼。如果使用新鲜章鱼，请将其冷冻至少24小时，然后完全解冻；这有助于使肉质变嫩。在冷水下彻底清洗章鱼，如果尚未处理，请去除眼睛和喙。',
                            '步骤 2: 烧一大锅水至沸腾。将对半切开的洋葱、月桂叶和拍扁的大蒜瓣加入水中。“吓唬”章鱼，将其浸入沸水中10秒钟，然后取出。重复此过程三次；这有助于使触手卷曲并使肉质变嫩。',
                            '步骤 3: 第三次浸泡后，将章鱼完全浸入沸水中。将火调至小火慢炖，盖上锅盖，煮30-40分钟，或直到用刀刺入触手最厚的部分时非常嫩。烹饪时间因章鱼大小而异。',
                            '步骤 4: 在章鱼烹饪时，将土豆去皮切成1/2英寸厚的片。在章鱼快煮好前约15分钟，将土豆片加入同一锅慢炖的水中（或单独用盐水煮），直到变软但不要煮烂。',
                            '步骤 5: 煮熟后，小心地将章鱼从水中取出，放在砧板上静置几分钟。沥干土豆。使用厨房剪刀或锋利的刀，将章鱼触手切成1/2英寸厚的圆片。',
                            '步骤 6: 将煮熟的土豆片摆放在传统的木制餐盘或单独的盘子上。将切好的章鱼整齐地放在土豆上方。',
                            '步骤 7: 大量淋上特级初榨橄榄油。均匀撒上烟熏辣椒粉和一小撮粗海盐。立即上菜，传统上搭配清爽的阿尔巴利诺葡萄酒。'
                        ]
                    },
            ms: {
                        title: 'Sotong Kurita Gaya Galicia (Pulpo a la Gallega)',
                        description: 'Hidangan klasik Galicia ini menampilkan sotong kurita yang lembut dan dimasak sempurna, hanya diperasakan dengan minyak zaitun extra virgin, paprika salai, dan garam laut kasar. Ia adalah tapa penting yang melambangkan keanggunan desa masakan pantai Sepanyol.',
                        ingredients: [
                            {
                                item: 'Sotong Kurita',
                                amount: '1 kg (dibersihkan, segar atau beku)'
                            },
                            {
                                item: 'Kentang',
                                amount: '500g (jenis berlilin, dikupas)'
                            },
                            {
                                item: 'Minyak Zaitun Extra Virgin',
                                amount: '100 ml'
                            },
                            {
                                item: 'Paprika Salai (Pimentón de la Vera)',
                                amount: '2 sudu teh (manis atau separa manis)'
                            },
                            {
                                item: 'Garam Laut Kasar',
                                amount: '1 sudu teh (dan lebih untuk perasa)'
                            },
                            {
                                item: 'Daun Salam',
                                amount: '2 helai besar'
                            },
                            {
                                item: 'Bawang Besar',
                                amount: '1 biji sederhana (dikupas, dibelah dua)'
                            },
                            {
                                item: 'Bawang Putih',
                                amount: '3 ulas (dikupas, dihancurkan)'
                            }
                        ],
                        instructions: [
                            'Langkah 1: Sediakan sotong kurita. Jika menggunakan sotong kurita segar, bekukan selama sekurang-kurangnya 24 jam dan kemudian nyahbeku sepenuhnya; ini melembutkan daging. Bersihkan sotong kurita dengan teliti di bawah air sejuk, buang mata dan paruh jika belum dilakukan.',
                            'Langkah 2: Didihkan air dalam periuk besar. Masukkan bawang besar yang dibelah dua, daun salam, dan ulas bawang putih yang dihancurkan ke dalam air. "Takutkan" sotong kurita dengan mencelupkannya ke dalam air mendidih selama 10 saat, kemudian angkat. Ulangi proses ini tiga kali; ini membantu menggulung sesungut dan melembutkan daging.',
                            'Langkah 3: Selepas celupan ketiga, rendam sotong kurita sepenuhnya dalam air mendidih. Kurangkan api kepada reneh perlahan, tutup, dan masak selama 30-40 minit, atau sehingga sangat lembut apabila dicucuk dengan pisau di bahagian sesungut yang paling tebal. Masa memasak berbeza mengikut saiz sotong kurita.',
                            'Langkah 4: Semasa sotong kurita dimasak, kupas kentang dan potong menjadi kepingan setebal 1/2 inci. Kira-kira 15 minit sebelum sotong kurita siap, masukkan hirisan kentang ke dalam periuk air reneh yang sama (atau masak secara berasingan dalam air masin) sehingga lembut tetapi tidak lembik.',
                            'Langkah 5: Setelah masak, keluarkan sotong kurita dengan berhati-hati dari air dan biarkan ia berehat di atas papan pemotong selama beberapa minit. Toskan kentang. Menggunakan gunting dapur atau pisau tajam, potong sesungut sotong kurita menjadi kepingan bulat setebal 1/2 inci.',
                            'Langkah 6: Susun hirisan kentang yang telah dimasak di atas pinggan hidangan kayu tradisional atau pinggan individu. Letakkan hirisan sotong kurita dengan kemas di atas kentang.',
                            'Langkah 7: Renjiskan dengan banyak minyak zaitun extra virgin. Taburkan secara rata dengan paprika salai dan secubit garam laut kasar. Hidangkan segera, secara tradisional diiringi dengan wain Albariño yang segar.'
                        ]
                    }
        }
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
    ,
        translations: {
            'zh-CN': {
                        title: '希腊千层面 (Pastitsio)',
                        description: 'Pastitsio，常被称为“希腊千层面”，是一道深受喜爱的烤意面菜肴，特色是分层的调味肉末、管状意面和浓郁奶油白酱。它是希腊的经典舒适美食，非常适合家庭聚会和特殊场合。',
                        ingredients: [
                            {
                                item: '瘦牛肉末或羊肉末',
                                amount: '500克'
                            },
                            {
                                item: '粗管面或粗通心粉',
                                amount: '300克'
                            },
                            {
                                item: '大洋葱，切碎',
                                amount: '1个'
                            },
                            {
                                item: '大蒜瓣，切末',
                                amount: '3瓣'
                            },
                            {
                                item: '碎番茄',
                                amount: '400克罐装'
                            },
                            {
                                item: '干红葡萄酒 (可选，或牛肉高汤)',
                                amount: '120毫升'
                            },
                            {
                                item: '肉桂棒',
                                amount: '1根'
                            },
                            {
                                item: '无盐黄油',
                                amount: '100克'
                            },
                            {
                                item: '中筋面粉',
                                amount: '100克'
                            },
                            {
                                item: '全脂牛奶',
                                amount: '1升'
                            },
                            {
                                item: '大鸡蛋',
                                amount: '2个'
                            },
                            {
                                item: '帕尔马干酪，新鲜磨碎',
                                amount: '100克'
                            }
                        ],
                        instructions: [
                            '步骤 1: 准备肉酱 (Ragu)。在一个大平底锅中用中高火加热2汤匙橄榄油。炒切碎的洋葱，直到变软，大约5分钟。加入切碎的大蒜，再煮一分钟直到香气散发。加入牛肉末或羊肉末，用勺子将其捣散，彻底煎至褐色。沥干多余的脂肪。',
                            '步骤 2: 完成肉酱。拌入碎番茄、红酒（如果使用）、肉桂棒、1片月桂叶、1茶匙盐和1/2茶匙现磨黑胡椒。煮沸，然后将火调至小火，盖上锅盖，煮至少20分钟，或最多45分钟，让味道充分融合。组装前取出肉桂棒和月桂叶。',
                            '步骤 3: 煮意面。在肉酱慢炖的同时，在一个大锅中用足量的盐水煮粗管面或通心粉，按照包装说明煮至有嚼劲。沥干水分。在一个大碗中，将热意面与1个打散的鸡蛋和2汤匙磨碎的帕尔马干酪拌匀。这有助于粘合意面层。',
                            '步骤 4: 准备白酱。在另一个平底锅中，用中火融化无盐黄油。加入中筋面粉并搅拌1-2分钟，不断搅拌，制成面糊。逐渐少量地加入全脂牛奶，确保没有结块。继续搅拌，直到酱汁变浓稠呈奶油状，大约5-7分钟。',
                            '步骤 5: 完成白酱。将白酱从火上移开。拌入剩余的打散的鸡蛋、50克磨碎的帕尔马干酪、1/2茶匙新鲜磨碎的肉豆蔻、1/2茶匙盐和1/4茶匙黑胡椒。搅拌至光滑并充分混合。',
                            '步骤 6: 组装Pastitsio。将烤箱预热至180°C (350°F)。轻轻涂油一个9x13英寸 (23x33厘米) 的烤盘。将准备好的意面均匀地铺在烤盘底部。铺上肉酱，均匀地铺在意面层上方。',
                            '步骤 7: 铺顶并烘烤。将奶油白酱均匀地倒在肉层上方，确保覆盖整个表面。在白酱上撒上剩余的48克磨碎的帕尔马干酪。烘烤35-45分钟，或直到顶部呈金黄色并冒泡。',
                            '步骤 8: 静置并上菜。将Pastitsio从烤箱中取出，静置至少15-20分钟，然后切片上菜。这有助于各层凝固，使切片更整齐，口感更佳。'
                        ]
                    },
            ms: {
                        title: 'Lasagna Yunani (Pastitsio)',
                        description: 'Pastitsio, sering disebut \'lasagna Yunani\', adalah hidangan pasta bakar yang digemari yang menampilkan lapisan daging cincang berperisa, pasta tiub, dan sos béchamel yang kaya dan berkrim. Ia adalah hidangan klasik yang menenangkan dari Greece, sesuai untuk perhimpunan keluarga dan majlis istimewa.',
                        ingredients: [
                            {
                                item: 'Daging lembu atau kambing cincang tanpa lemak',
                                amount: '500g'
                            },
                            {
                                item: 'Bucatini atau makaroni tebal',
                                amount: '300g'
                            },
                            {
                                item: 'Bawang besar, dicincang halus',
                                amount: '1 biji'
                            },
                            {
                                item: 'Ulas bawang putih, dicincang',
                                amount: '3 ulas'
                            },
                            {
                                item: 'Tomato hancur',
                                amount: '400g tin'
                            },
                            {
                                item: 'Wain merah kering (pilihan, atau stok daging lembu)',
                                amount: '120ml'
                            },
                            {
                                item: 'Batang kayu manis',
                                amount: '1 batang'
                            },
                            {
                                item: 'Mentega tanpa garam',
                                amount: '100g'
                            },
                            {
                                item: 'Tepung serbaguna',
                                amount: '100g'
                            },
                            {
                                item: 'Susu penuh krim',
                                amount: '1 liter'
                            },
                            {
                                item: 'Telur besar',
                                amount: '2 biji'
                            },
                            {
                                item: 'Keju Parmesan, diparut segar',
                                amount: '100g'
                            }
                        ],
                        instructions: [
                            'Langkah 1: Sediakan Sos Daging (Ragu). Panaskan 2 sudu besar minyak zaitun dalam kuali besar di atas api sederhana tinggi. Tumis bawang yang dicincang sehingga lembut, kira-kira 5 minit. Masukkan bawang putih cincang dan masak selama satu minit lagi sehingga wangi. Masukkan daging lembu atau kambing cincang, hancurkan dengan sudu, dan goreng sehingga perang sepenuhnya. Toskan sebarang lemak berlebihan.',
                            'Langkah 2: Selesaikan Ragu. Masukkan tomato hancur, wain merah (jika digunakan), batang kayu manis, 1 helai daun salam, 1 sudu teh garam, dan 1/2 sudu teh lada hitam yang baru dikisar. Didihkan, kemudian kurangkan api kepada perlahan, tutup, dan masak selama sekurang-kurangnya 20 minit, atau sehingga 45 minit, membiarkan rasa sebati. Buang batang kayu manis dan daun salam sebelum pemasangan.',
                            'Langkah 3: Masak Pasta. Semasa ragu mereneh, masak bucatini atau makaroni dalam periuk besar berisi air mendidih yang banyak garam mengikut arahan pakej sehingga al dente. Toskan dengan baik. Dalam mangkuk besar, gaulkan pasta panas dengan 1 biji telur yang dipukul dan 2 sudu besar keju Parmesan yang diparut. Ini membantu mengikat lapisan pasta.',
                            'Langkah 4: Sediakan Sos Béchamel. Dalam periuk berasingan, cairkan mentega tanpa garam di atas api sederhana. Pukul masuk tepung serbaguna dan masak selama 1-2 minit, kacau sentiasa, untuk membuat roux. Masukkan susu penuh krim secara beransur-ansur, sedikit demi sedikit, memastikan tiada ketulan terbentuk. Terus pukul sehingga sos memekat menjadi konsistensi berkrim, kira-kira 5-7 minit.',
                            'Langkah 5: Selesaikan Béchamel. Angkat béchamel dari api. Pukul masuk telur yang dipukul yang tinggal, 50g keju Parmesan yang diparut, 1/2 sudu teh buah pala yang baru diparut, 1/2 sudu teh garam, dan 1/4 sudu teh lada hitam. Kacau sehingga licin dan sebati.',
                            'Langkah 6: Pasang Pastitsio. Panaskan oven anda hingga 180°C (350°F). Griskan sedikit loyang pembakar 9x13 inci (23x33 cm). Sebarkan pasta yang telah disediakan secara rata di bahagian bawah loyang. Lapisi dengan sos daging, sebarkannya secara rata di atas lapisan pasta.',
                            'Langkah 7: Lapisi dan Bakar. Tuangkan sos béchamel berkrim secara rata di atas lapisan daging, memastikan ia menutupi seluruh permukaan. Taburkan baki 48g keju Parmesan yang diparut di atas béchamel. Bakar selama 35-45 minit, atau sehingga bahagian atas berwarna perang keemasan dan berbuih.',
                            'Langkah 8: Rehatkan dan Hidangkan. Keluarkan Pastitsio dari oven dan biarkan ia berehat selama sekurang-kurangnya 15-20 minit sebelum dihiris dan dihidangkan. Ini membolehkan lapisan-lapisan mengeras, menghasilkan potongan yang lebih bersih dan tekstur yang lebih menyeronokkan.'
                        ]
                    }
        }
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
    ,
        translations: {
            'zh-CN': {
                        title: 'Merguez 香肠',
                        description: '这种充满活力、辛辣的羊肉香肠是摩洛哥美食的基石，散发着芳香的香料和火辣的味道。传统上烤制或煎炸，每一口多汁的香肠都带来北非烹饪传统的风味。',
                        ingredients: [
                            {
                                item: '去骨羊肩肉',
                                amount: '500克（精细绞碎）'
                            },
                            {
                                item: '羊油（或牛油）',
                                amount: '100克（精细绞碎）'
                            },
                            {
                                item: '大蒜瓣',
                                amount: '4瓣（大，切末）'
                            },
                            {
                                item: '克什米尔红辣椒粉',
                                amount: '2汤匙'
                            },
                            {
                                item: '孜然粉',
                                amount: '1.5茶匙'
                            },
                            {
                                item: '香菜粉',
                                amount: '1茶匙'
                            },
                            {
                                item: '辣红辣椒粉（或卡宴辣椒粉）',
                                amount: '1茶匙（根据口味调整）'
                            },
                            {
                                item: '盐',
                                amount: '1.5茶匙（或根据口味）'
                            },
                            {
                                item: '黑胡椒粉',
                                amount: '0.5茶匙（现磨）'
                            },
                            {
                                item: '冷水',
                                amount: '2-3汤匙'
                            },
                            {
                                item: '天然羊肠衣',
                                amount: '2米（浸泡并冲洗，可选）'
                            }
                        ],
                        instructions: [
                            '步骤 1: 准备肉类：如果尚未绞碎，将去骨羊肩肉和羊油一起绞碎。为了获得最佳口感，请使用中号绞肉机，或手工切碎。',
                            '步骤 2: 混合香料：在一个大碗中，将绞碎的羊肉和羊油与蒜末、克什米尔红辣椒粉、孜然粉、香菜粉、辣红辣椒粉、盐和黑胡椒粉混合。',
                            '步骤 3: 充分混合：加入冷水，用手用力搅拌5-7分钟，直到混合物变得粘稠并充分乳化。这有助于蛋白质的形成，并确保良好的质地。',
                            '步骤 4: 静置混合物：盖上碗，将混合物冷藏至少2小时，最好是过夜。这能让风味充分融合，并使肉质变硬。',
                            '步骤 5: 灌肠（可选）：如果使用肠衣，请彻底冲洗并将其套在灌肠机上。小心地将羊肉混合物灌入肠衣中，确保没有气泡。扭转或系成10-12厘米长的香肠。如果不使用肠衣，将混合物制成小而厚的肉饼。',
                            '步骤 6: 烹饪香肠：用中火加热烤盘或厚底煎锅。在锅中轻轻涂油。烹饪Merguez香肠（或肉饼）8-12分钟，偶尔翻动，直到两面都呈漂亮的棕色并完全煮熟。',
                            '步骤 7: 上菜：立即将热腾腾的Merguez香肠与硬皮面包、新鲜沙拉或一小勺哈里萨辣酱一起食用。'
                        ]
                    },
            ms: {
                        title: 'Sosej Merguez',
                        description: 'Sosej kambing yang bersemangat dan pedas ini adalah tunjang masakan Maghribi, penuh dengan rempah-ratus aromatik dan rasa pedas yang membakar. Secara tradisional dipanggang atau digoreng, ia menawarkan rasa warisan masakan Afrika Utara dalam setiap gigitan yang lazat.',
                        ingredients: [
                            {
                                item: 'Bahu Kambing Tanpa Tulang',
                                amount: '500g (dicincang halus atau dikisar)'
                            },
                            {
                                item: 'Lemak Kambing (atau Lemak Daging Lembu)',
                                amount: '100g (dicincang halus atau dikisar)'
                            },
                            {
                                item: 'Ulas Bawang Putih',
                                amount: '4 (besar, dicincang)'
                            },
                            {
                                item: 'Serbuk Cili Merah Kashmiri',
                                amount: '2 sudu besar'
                            },
                            {
                                item: 'Serbuk Jintan Manis',
                                amount: '1.5 sudu kecil'
                            },
                            {
                                item: 'Serbuk Ketumbar',
                                amount: '1 sudu kecil'
                            },
                            {
                                item: 'Serbuk Cili Merah Pedas (atau Cayenne)',
                                amount: '1 sudu kecil (sesuaikan rasa)'
                            },
                            {
                                item: 'Garam',
                                amount: '1.5 sudu kecil (atau secukup rasa)'
                            },
                            {
                                item: 'Lada Hitam',
                                amount: '0.5 sudu kecil (baru dikisar)'
                            },
                            {
                                item: 'Air Sejuk',
                                amount: '2-3 sudu besar'
                            },
                            {
                                item: 'Sarung Usus Kambing Asli',
                                amount: '2 meter (direndam dan dibilas, pilihan)'
                            }
                        ],
                        instructions: [
                            'Langkah 1: Sediakan Daging: Jika belum dicincang, cincang halus bahu kambing tanpa tulang dan lemak kambing bersama-sama. Untuk tekstur terbaik, gunakan penggiling daging dengan mata sederhana, atau cincang halus dengan tangan.',
                            'Langkah 2: Gabungkan Rempah: Dalam mangkuk besar, gabungkan daging kambing cincang dan lemak dengan bawang putih cincang, serbuk cili merah Kashmiri, serbuk jintan manis, serbuk ketumbar, serbuk cili merah pedas, garam, dan lada hitam.',
                            'Langkah 3: Gaul Rata: Tambahkan air sejuk dan gaul kuat dengan tangan selama 5-7 minit sehingga campuran menjadi melekit dan teremulsi dengan baik. Ini mengembangkan protein dan memastikan tekstur yang baik.',
                            'Langkah 4: Rehatkan Campuran: Tutup mangkuk dan sejukkan campuran selama sekurang-kurangnya 2 jam, atau lebih baik semalaman. Ini membolehkan rasa sebati dan daging menjadi pejal.',
                            'Langkah 5: Sumbat Sarung Usus (Pilihan): Jika menggunakan sarung usus, bilas dengan teliti dan masukkan ke dalam alat penyumbat sosej. Sumbat campuran kambing ke dalam sarung usus dengan berhati-hati, pastikan tiada poket udara. Pusing atau ikat menjadi pautan 10-12 cm. Jika tidak menggunakan sarung usus, bentuk campuran menjadi bebola daging kecil dan tebal.',
                            'Langkah 6: Masak Sosej: Panaskan kuali panggang atau kuali dasar tebal di atas api sederhana. Sapu sedikit minyak pada kuali. Masak sosej Merguez (atau bebola daging) selama 8-12 minit, balikkan sekali-sekala, sehingga perang keemasan yang cantik di semua sisi dan masak sepenuhnya.',
                            'Langkah 7: Hidangkan: Hidangkan sosej Merguez panas segera dengan roti kerak, salad segar, atau sesudu harissa di sisi.'
                        ]
                    }
        }
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
    ,
        translations: {
            'zh-CN': {
                        title: '韩式烤肉',
                        description: '韩式烤肉（Bulgogi），意为“火肉”，是一道典型的韩国菜肴，以薄片腌制牛肉烤制或煎炸至鲜嫩完美。其甜咸口味，常带有一丝果香，使其成为韩国料理中备受喜爱的经典菜肴。',
                        ingredients: [
                            {
                                item: '牛里脊或牛眼肉，逆纹切薄片',
                                amount: '500克'
                            },
                            {
                                item: '酱油',
                                amount: '1/2杯'
                            },
                            {
                                item: '红糖',
                                amount: '2汤匙'
                            },
                            {
                                item: '香油',
                                amount: '2汤匙'
                            },
                            {
                                item: '蒜末',
                                amount: '5瓣'
                            },
                            {
                                item: '姜末',
                                amount: '1汤匙'
                            },
                            {
                                item: '梨（博斯克或安茹品种），磨碎',
                                amount: '1/2个中等大小'
                            },
                            {
                                item: '黄洋葱，切薄片',
                                amount: '1/2个中等大小'
                            },
                            {
                                item: '小葱，切段',
                                amount: '3根'
                            },
                            {
                                item: '现磨黑胡椒粉',
                                amount: '1/2茶匙'
                            },
                            {
                                item: '烤芝麻',
                                amount: '1茶匙'
                            }
                        ],
                        instructions: [
                            '步骤 1: 准备牛肉：将牛肉逆纹切成非常薄的片。为了更容易切片，可以在切片前将牛肉部分冷冻约30分钟。',
                            '步骤 2: 制作腌料：在一个大碗中，混合酱油、红糖、香油、蒜末、姜末、磨碎的梨和现磨黑胡椒粉。充分搅拌直至糖溶解。',
                            '步骤 3: 腌制牛肉：将切好的薄片牛肉、切片黄洋葱和一半切好的小葱加入腌料中。用手充分混合，确保每一片牛肉都均匀裹上腌料。盖上碗，冷藏至少1小时，最好是4小时至过夜，以获得更浓郁的风味。',
                            '步骤 4: 烹饪准备：用中高火加热一个大煎锅、铸铁锅或烤盘。如果您的锅不是不粘锅，可以加入少量油，尽管牛肉本身的脂肪通常就足够了。',
                            '步骤 5: 煎烤牛肉：将腌制好的牛肉分批放入热锅中，平铺成一层，避免过度拥挤。过度拥挤会导致肉被蒸熟而不是煎烤。',
                            '步骤 6: 烹饪：每面煎烤2-3分钟，直到韩式烤肉呈现漂亮的焦糖色，鲜嫩并完全煮熟。注意不要过度烹饪，否则牛肉会变韧。',
                            '步骤 7: 上菜：将煮好的韩式烤肉转移到盘中。撒上剩余的切碎小葱和烤芝麻作为装饰。立即与热腾腾的米饭和您喜欢的韩式小菜一起食用。'
                        ]
                    },
            ms: {
                        title: 'Bulgogi',
                        description: 'Hidangan Korea yang penting, Bulgogi, bermaksud "daging api," menampilkan daging lembu yang dihiris nipis dan diperap, dipanggang atau digoreng hingga lembut sempurna. Rasa manis dan savuri, seringkali dengan sedikit buah, menjadikannya hidangan kegemaran masakan Korea.',
                        ingredients: [
                            {
                                item: 'Daging Sirloin atau Ribeye, dihiris nipis melawan urat',
                                amount: '500g'
                            },
                            {
                                item: 'Kicap Cair',
                                amount: '1/2 cawan'
                            },
                            {
                                item: 'Gula Perang',
                                amount: '2 sudu besar'
                            },
                            {
                                item: 'Minyak Bijan',
                                amount: '2 sudu besar'
                            },
                            {
                                item: 'Bawang Putih, dicincang',
                                amount: '5 ulas'
                            },
                            {
                                item: 'Halia, diparut',
                                amount: '1 sudu besar'
                            },
                            {
                                item: 'Buah Pir (Bosc atau Anjou), diparut',
                                amount: '1/2 biji sederhana'
                            },
                            {
                                item: 'Bawang Holland, dihiris nipis',
                                amount: '1/2 biji sederhana'
                            },
                            {
                                item: 'Daun Bawang, dicincang',
                                amount: '3 batang'
                            },
                            {
                                item: 'Lada Hitam, baru dikisar',
                                amount: '1/2 sudu kecil'
                            },
                            {
                                item: 'Biji Bijan Bakar',
                                amount: '1 sudu kecil'
                            }
                        ],
                        instructions: [
                            'Langkah 1: Sediakan daging lembu dengan menghirisnya sangat nipis melawan urat. Untuk hirisan yang lebih mudah, anda boleh membekukan daging lembu separa selama kira-kira 30 minit sebelum memotong.',
                            'Langkah 2: Dalam mangkuk adunan besar, gabungkan kicap cair, gula perang, minyak bijan, bawang putih cincang, halia parut, pir parut, dan lada hitam yang baru dikisar. Pukul rata sehingga gula larut.',
                            'Langkah 3: Tambahkan daging lembu yang dihiris nipis, bawang holland yang dihiris, dan separuh daripada daun bawang yang dicincang ke dalam perapan. Gaul rata dengan tangan anda untuk memastikan setiap keping daging lembu disalut. Tutup mangkuk dan sejukkan selama sekurang-kurangnya 1 jam, atau lebih baik 4 jam hingga semalaman untuk rasa yang lebih mendalam.',
                            'Langkah 4: Panaskan kuali besar, kuali besi tuang, atau kuali panggang di atas api sederhana-tinggi. Sedikit minyak boleh ditambah jika kuali anda tidak melekat, walaupun lemak dari daging lembu biasanya mencukupi.',
                            'Langkah 5: Tambahkan daging lembu yang diperap ke dalam kuali panas dalam satu lapisan, lakukan secara berperingkat jika perlu untuk mengelakkan kesesakan. Kesesakan akan mengukus daging dan bukannya membakar.',
                            'Langkah 6: Masak bulgogi selama 2-3 minit setiap sisi, sehingga ia menjadi karamel yang cantik, lembut, dan masak sepenuhnya. Berhati-hati agar tidak terlalu masak, kerana ini boleh menjadikan daging lembu liat.',
                            'Langkah 7: Pindahkan bulgogi yang telah dimasak ke pinggan hidangan. Hias dengan banyak daun bawang cincang yang tinggal dan biji bijan bakar. Hidangkan segera dengan nasi kukus panas dan banchan Korea kegemaran anda.'
                        ]
                    }
        }
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
    ,
        translations: {
            'zh-CN': {
                        title: '越南碎米饭 (Com Tam)',
                        description: '越南碎米饭（Com Tam）是一道深受喜爱的越南街头美食，以精致的碎米为中心，呈现出质地和风味的活力交响曲。这道标志性菜肴通常包括烤猪肉、美味的鸡蛋肉饼和煎蛋，所有这些都通过酸甜的鱼露（nuoc cham）蘸酱完美融合。',
                        ingredients: [
                            {
                                item: '碎米（或短粒米）',
                                amount: '500g'
                            },
                            {
                                item: '猪肩肉或五花肉，切薄片',
                                amount: '500g'
                            },
                            {
                                item: '鱼露',
                                amount: '100ml'
                            },
                            {
                                item: '砂糖',
                                amount: '50g'
                            },
                            {
                                item: '大蒜，切末',
                                amount: '6瓣'
                            },
                            {
                                item: '青葱，切末',
                                amount: '2个中等大小'
                            },
                            {
                                item: '香茅，切碎',
                                amount: '2根'
                            },
                            {
                                item: '大鸡蛋',
                                amount: '6个'
                            },
                            {
                                item: '猪绞肉',
                                amount: '200g'
                            },
                            {
                                item: '干木耳',
                                amount: '10g'
                            },
                            {
                                item: '粉丝',
                                amount: '20g'
                            },
                            {
                                item: '白醋',
                                amount: '50ml'
                            }
                        ],
                        instructions: [
                            '步骤 1: 准备烤猪肉（Suon Nuong）。将猪肉切薄片。用2汤匙鱼露、1汤匙糖、3瓣蒜末、1个青葱末和1汤匙切碎的香茅腌制。混合均匀，冷藏至少30分钟，最好是2-3小时。',
                            '步骤 2: 制作鱼露蘸酱（Nuoc Cham）。在一个碗中，混合4汤匙鱼露、3汤匙糖、50毫升白醋、1个青柠汁和100毫升温水。加入3瓣蒜末和切碎的鸟眼辣椒（如果需要）。搅拌直到糖完全溶解。',
                            '步骤 3: 准备蒸鸡蛋肉饼（Cha Trung）。将木耳和粉丝用温水浸泡至软。沥干并切碎。在一个碗中，混合猪绞肉、切碎的木耳、切碎的粉丝、2个鸡蛋、1汤匙鱼露、1茶匙糖和少许黑胡椒。充分混合。放入涂油的耐热盘中蒸20-25分钟，直到变硬并完全煮熟。稍微冷却，然后切成块状。',
                            '步骤 4: 煮碎米饭。用冷水彻底冲洗碎米，直到水变清。在电饭煲或锅中以1:1的水米比例（例如，500克米对500毫升水）煮饭。煮熟后，再蒸10-15分钟，以确保米饭松软。',
                            '步骤 5: 烤猪肉。将烤架或烤盘预热至中高火。将腌制好的猪肉片每面烤3-4分钟，直到呈现美丽的焦糖色，变嫩并完全煮熟。',
                            '步骤 6: 煎鸡蛋。在不粘锅中用中火加热少量植物油。煎4个太阳蛋，确保蛋黄保持流淌，以呈现经典的碎米饭。',
                            '步骤 7: 组装菜肴。在每个盘子上盛上足量的碎米饭。摆放烤猪肉片、一块蒸鸡蛋肉饼和一个煎蛋。用新鲜的黄瓜片和番茄片装饰。',
                            '步骤 8: 上菜。在整道菜上淋上一勺准备好的鱼露蘸酱，或者将其放在旁边供单独蘸食。立即享用这道正宗的越南经典美食。'
                        ]
                    },
            ms: {
                        title: 'Com Tam (Nasi Hancur Vietnam)',
                        description: 'Com Tam adalah makanan jalanan Vietnam yang digemari, simfoni tekstur dan rasa yang meriah berpusat pada nasi hancur yang halus. Hidangan ikonik ini biasanya menampilkan daging babi panggang, bebola daging telur yang lazat, dan telur goreng, semuanya disatukan oleh sos pencicah nuoc cham yang masam manis.',
                        ingredients: [
                            {
                                item: 'Nasi hancur (atau beras biji pendek)',
                                amount: '500g'
                            },
                            {
                                item: 'Bahu atau perut babi, dihiris nipis',
                                amount: '500g'
                            },
                            {
                                item: 'Sos ikan (nuoc mam)',
                                amount: '100ml'
                            },
                            {
                                item: 'Gula pasir',
                                amount: '50g'
                            },
                            {
                                item: 'Bawang putih, dicincang',
                                amount: '6 ulas'
                            },
                            {
                                item: 'Bawang merah, dicincang',
                                amount: '2 biji sederhana'
                            },
                            {
                                item: 'Serai, dicincang halus',
                                amount: '2 batang'
                            },
                            {
                                item: 'Telur besar',
                                amount: '6 biji'
                            },
                            {
                                item: 'Daging babi cincang',
                                amount: '200g'
                            },
                            {
                                item: 'Cendawan telinga kayu kering',
                                amount: '10g'
                            },
                            {
                                item: 'Mi suhun (vermicelli)',
                                amount: '20g'
                            },
                            {
                                item: 'Cuka putih',
                                amount: '50ml'
                            }
                        ],
                        instructions: [
                            'Langkah 1: Sediakan Daging Babi Panggang (Suon Nuong). Hiris daging babi nipis. Perap dengan 2 sudu besar sos ikan, 1 sudu besar gula, 3 ulas bawang putih cincang, 1 bawang merah cincang, dan 1 sudu besar serai cincang halus. Gaul rata dan sejukkan selama sekurang-kurangnya 30 minit, atau lebih baik 2-3 jam.',
                            'Langkah 2: Buat Nuoc Cham (Sos Pencicah). Dalam mangkuk, campurkan 4 sudu besar sos ikan, 3 sudu besar gula, 50ml cuka putih, jus 1 limau nipis, dan 100ml air suam. Tambah 3 ulas bawang putih cincang dan cili padi cincang halus (jika suka). Kacau sehingga gula larut sepenuhnya.',
                            'Langkah 3: Sediakan Cha Trung (Bebola Daging Telur Kukus). Rendam cendawan telinga kayu dan mi suhun dalam air suam sehingga lembut. Toskan dan cincang halus. Dalam mangkuk, campurkan daging babi cincang, cendawan cincang, mi cincang, 2 biji telur, 1 sudu besar sos ikan, 1 sudu kecil gula, dan secubit lada hitam. Gaul rata. Kukus dalam pinggan tahan panas yang telah digris selama 20-25 minit sehingga pejal dan masak sepenuhnya. Biarkan sejuk sedikit, kemudian hiris menjadi kepingan hidangan.',
                            'Langkah 4: Masak Nasi Hancur. Bilas nasi hancur dengan teliti di bawah air sejuk sehingga air jernih. Masak dalam periuk nasi atau periuk dengan nisbah air-ke-nasi 1:1 (contohnya, 500g nasi kepada 500ml air). Setelah masak, biarkan ia mengukus selama 10-15 minit lagi untuk memastikan tekstur yang gebu.',
                            'Langkah 5: Panggang Daging Babi. Panaskan gril atau kuali gril ke api sederhana tinggi. Panggang hirisan daging babi yang telah diperap selama 3-4 minit setiap sisi, atau sehingga berwarna keemasan yang cantik, lembut, dan masak sepenuhnya.',
                            'Langkah 6: Goreng Telur. Panaskan sedikit minyak sayuran dalam kuali tidak melekat di atas api sederhana. Goreng 4 biji telur mata kerbau, pastikan kuning telur kekal cair untuk persembahan Com Tam klasik.',
                            'Langkah 7: Susun Hidangan. Di setiap pinggan, hidangkan sebahagian besar nasi hancur. Susun hirisan daging babi panggang, sekeping bebola daging telur kukus, dan telur goreng di atasnya. Hias dengan hirisan timun dan tomato segar.',
                            'Langkah 8: Hidang. Tuangkan sesudu Nuoc Cham yang telah disediakan ke atas seluruh hidangan atau hidangkan di sisi untuk pencicahan individu. Nikmati klasik Vietnam yang asli ini dengan segera.'
                        ]
                    }
        }
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
    ,
        translations: {
            'zh-CN': {
                        title: '新英格兰龙虾卷',
                        description: '新英格兰龙虾卷是美国夏季的经典美食，以鲜嫩的龙虾肉为主，佐以清淡的调味，然后放入涂有黄油并烤至金黄的面包中。这道标志性菜肴颂扬了大西洋纯净的风味，每一口都带来沿海的奢华体验。',
                        ingredients: [
                            {
                                item: '熟龙虾肉',
                                amount: '450g (来自2只500-600g龙虾)'
                            },
                            {
                                item: '蛋黄酱',
                                amount: '1/2杯 (120ml)'
                            },
                            {
                                item: '芹菜，切小丁',
                                amount: '2根'
                            },
                            {
                                item: '新鲜柠檬汁',
                                amount: '1汤匙 (15ml)'
                            },
                            {
                                item: '新鲜细香葱，切碎（或新鲜欧芹）',
                                amount: '2汤匙'
                            },
                            {
                                item: '无盐黄油，融化',
                                amount: '4汤匙 (60g)'
                            },
                            {
                                item: '热狗面包（最好是顶部开口的）',
                                amount: '4个'
                            },
                            {
                                item: '盐',
                                amount: '1/2茶匙 (或根据口味)'
                            },
                            {
                                item: '黑胡椒（现磨，或根据口味）',
                                amount: '1/4茶匙'
                            },
                            {
                                item: '红椒粉（用于装饰，可选）',
                                amount: '少许'
                            }
                        ],
                        instructions: [
                            '步骤 1: 如果使用活龙虾，将一大锅加盐的水烧开。小心地将龙虾头朝下放入，煮10-12分钟（对于500-600克的龙虾），直到变成鲜红色。取出并放入冰水中停止烹饪。',
                            '步骤 2: 龙虾冷却后，拧下钳子和尾巴。敲开钳子和关节以取出肉。将尾巴纵向切开，去除黑色的肠线，然后取出尾肉。将龙虾肉粗略切成一口大小的块。',
                            '步骤 3: 在一个中等大小的碗中，混合蛋黄酱、切碎的芹菜丁、新鲜柠檬汁、切碎的细香葱（或欧芹）、盐和黑胡椒。充分搅拌均匀。',
                            '步骤 4: 将切好的龙虾肉轻轻拌入蛋黄酱混合物中。注意不要过度搅拌，以保持龙虾肉的细腻质地。品尝并根据需要调整调味料。',
                            '步骤 5: 在中火上加热一个大煎锅或烤盘。在热狗面包的外侧均匀涂抹融化的黄油。将涂有黄油的一面朝下放在煎锅上，每面烤2-3分钟，直到金黄色酥脆。',
                            '步骤 6: 小心地打开每个烤好的面包，然后慷慨地填入准备好的龙虾沙拉。',
                            '步骤 7: 立即上菜，可以撒上少许红椒粉或额外的细香葱枝作装饰，搭配薯片或简单的绿色沙拉，以获得完整的新英格兰体验。'
                        ]
                    },
            ms: {
                        title: 'Roti Gulung Udang Kara New England',
                        description: 'Roti Gulung Udang Kara New England adalah hidangan musim panas Amerika yang penting, menampilkan daging udang kara yang lazat yang diperasakan ringan dan diletakkan di dalam roti bakar mentega. Hidangan ikonik ini meraikan rasa asli Atlantik, menawarkan rasa kemewahan pantai dalam setiap gigitan.',
                        ingredients: [
                            {
                                item: 'Isi udang kara yang telah dimasak',
                                amount: '450g (dari 2 ekor udang kara 500-600g)'
                            },
                            {
                                item: 'Mayonis',
                                amount: '1/2 cawan (120ml)'
                            },
                            {
                                item: 'Saderi, dipotong dadu halus',
                                amount: '2 batang'
                            },
                            {
                                item: 'Jus lemon segar',
                                amount: '1 sudu besar (15ml)'
                            },
                            {
                                item: 'Daun kucai segar, dicincang halus (atau pasli segar)',
                                amount: '2 sudu besar'
                            },
                            {
                                item: 'Mentega tanpa garam, dicairkan',
                                amount: '4 sudu besar (60g)'
                            },
                            {
                                item: 'Roti hot dog (lebih disukai yang belah atas)',
                                amount: '4 biji'
                            },
                            {
                                item: 'Garam',
                                amount: '1/2 sudu kecil (atau secukup rasa)'
                            },
                            {
                                item: 'Lada hitam (baru dikisar, atau secukup rasa)',
                                amount: '1/4 sudu kecil'
                            },
                            {
                                item: 'Paprika (untuk hiasan, pilihan)',
                                amount: 'Secubit'
                            }
                        ],
                        instructions: [
                            'Langkah 1: Jika menggunakan udang kara hidup, didihkan periuk besar air yang banyak garam. Masukkan udang kara dengan berhati-hati, kepala dahulu, dan rebus selama 10-12 minit untuk udang kara 500-600g, atau sehingga merah terang. Angkat dan masukkan ke dalam mandian ais untuk menghentikan proses memasak.',
                            'Langkah 2: Setelah udang kara sejuk, putar tangkai dan ekornya. Pecahkan tangkai dan buku jari untuk mengeluarkan isinya. Belah ekor memanjang dan buang urat gelap, kemudian keluarkan isi ekor. Cincang kasar isi udang kara menjadi kepingan bersaiz gigitan.',
                            'Langkah 3: Dalam mangkuk sederhana, campurkan mayonis, saderi yang dipotong dadu halus, jus lemon segar, daun kucai cincang (atau pasli), garam, dan lada hitam. Gaul rata sehingga sebati.',
                            'Langkah 4: Lipat perlahan-lahan isi udang kara cincang ke dalam campuran mayonis. Berhati-hati agar tidak terlalu banyak menggaul, kerana anda ingin mengekalkan tekstur udang kara yang halus. Rasa dan sesuaikan perasa jika perlu.',
                            'Langkah 5: Panaskan kuali besar atau griddle di atas api sederhana. Sapu bahagian luar roti hot dog dengan mentega cair. Letakkan bahagian yang disapu mentega ke bawah di atas kuali dan bakar selama 2-3 minit setiap sisi, atau sehingga perang keemasan dan rangup.',
                            'Langkah 6: Buka setiap roti bakar dengan berhati-hati dan isi dengan salad udang kara yang telah disediakan.',
                            'Langkah 7: Hidangkan segera, mungkin dengan taburan paprika atau tangkai kucai tambahan untuk hiasan, bersama kerepek kentang atau salad hijau ringkas untuk pengalaman New England yang lengkap.'
                        ]
                    }
        }
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
    ,
        translations: {
            'zh-CN': {
                        title: 'Arroz con Leche (西班牙牛奶米布丁)',
                        description: '这款奶油般香甜、令人舒心的米布丁是秘鲁家庭中备受喜爱的经典甜点，肉桂和柑橘的甜美融合唤起珍贵的回忆。它是一款简单而优雅的甜点，深深植根于秘鲁的烹饪灵魂，适合任何场合。',
                        ingredients: [
                            {
                                item: '短粒白米（例如：阿博里奥米或戈宾多博格米）',
                                amount: '1 杯 (200克)'
                            },
                            {
                                item: '水',
                                amount: '2 杯 (480毫升)'
                            },
                            {
                                item: '全脂牛奶',
                                amount: '4 杯 (960毫升)'
                            },
                            {
                                item: '炼乳',
                                amount: '1 罐 (397克)'
                            },
                            {
                                item: '砂糖',
                                amount: '1/2 杯 (100克)'
                            },
                            {
                                item: '肉桂棒',
                                amount: '2 根 (3英寸)'
                            },
                            {
                                item: '丁香',
                                amount: '4-5 颗'
                            },
                            {
                                item: '柠檬皮条',
                                amount: '1 条 (来自1/2个柠檬)'
                            },
                            {
                                item: '香草精',
                                amount: '1 茶匙'
                            },
                            {
                                item: '盐',
                                amount: '1/4 茶匙'
                            },
                            {
                                item: '金色葡萄干',
                                amount: '1/2 杯 (75克)'
                            },
                            {
                                item: '肉桂粉',
                                amount: '用于装饰'
                            }
                        ],
                        instructions: [
                            '用冷水彻底冲洗大米，直到水变清。在一个厚底锅中，将洗净的大米与2杯水、肉桂棒、丁香和柠檬皮条混合。用中高火煮沸，然后转小火，盖上盖子，炖煮10-12分钟，或直到大部分水被吸收。',
                            '水大部分被吸收后，倒入全脂牛奶，加入砂糖和盐。轻轻搅拌混合。将火调至中低，将混合物煮至微沸，偶尔搅拌以防粘锅。',
                            '继续炖煮，频繁搅拌（特别是锅底），持续20-25分钟，或直到米饭变软，混合物变得浓稠呈奶油状。米饭应完全煮熟但仍保持形状。',
                            '小心地从锅中取出并丢弃肉桂棒、丁香和柠檬皮条。拌入炼乳、香草精和金色葡萄干。',
                            '再煮5-7分钟，不断搅拌，让味道融合，布丁进一步变稠。稠度应浓郁且呈奶油状，但冷却后会变得更稠。',
                            '将锅从火上移开。盖上盖子，让Arroz con Leche静置至少10-15分钟。这能让米饭吸收更多液体，味道更浓郁。',
                            '温热或冷藏后盛入单独的碗中。食用前撒上大量的肉桂粉作为装饰。如果想增加风味，也可以撒上一些烤椰丝。'
                        ]
                    },
            ms: {
                        title: 'Arroz con Leche (Puding Nasi Susu Sepanyol)',
                        description: 'Puding nasi berkrim dan menyelerakan ini adalah hidangan kegemaran di rumah-rumah Peru, pelukan manis kayu manis dan sitrus yang membangkitkan kenangan indah. Ia adalah pencuci mulut yang ringkas namun elegan, berakar umbi dalam jiwa kulinari negara itu, sesuai untuk sebarang majlis.',
                        ingredients: [
                            {
                                item: 'Beras putih biji pendek (cth: Arborio atau Gobindobhog)',
                                amount: '1 cawan (200g)'
                            },
                            {
                                item: 'Air',
                                amount: '2 cawan (480ml)'
                            },
                            {
                                item: 'Susu penuh krim',
                                amount: '4 cawan (960ml)'
                            },
                            {
                                item: 'Susu pekat manis',
                                amount: '1 tin (397g)'
                            },
                            {
                                item: 'Gula pasir',
                                amount: '1/2 cawan (100g)'
                            },
                            {
                                item: 'Batang kayu manis',
                                amount: '2 batang (3 inci)'
                            },
                            {
                                item: 'Bunga cengkih',
                                amount: '4-5 biji'
                            },
                            {
                                item: 'Jalur kulit lemon',
                                amount: '1 jalur (dari 1/2 lemon)'
                            },
                            {
                                item: 'Ekstrak vanila',
                                amount: '1 sudu teh'
                            },
                            {
                                item: 'Garam',
                                amount: '1/4 sudu teh'
                            },
                            {
                                item: 'Kismis emas',
                                amount: '1/2 cawan (75g)'
                            },
                            {
                                item: 'Serbuk kayu manis',
                                amount: 'Untuk hiasan'
                            }
                        ],
                        instructions: [
                            'Bilas beras dengan bersih di bawah air sejuk sehingga air jernih. Dalam periuk bertutup tebal, gabungkan beras yang telah dibilas dengan 2 cawan air, batang kayu manis, bunga cengkih, dan jalur kulit lemon. Didihkan di atas api sederhana tinggi, kemudian kecilkan api, tutup, dan reneh selama 10-12 minit, atau sehingga kebanyakan air telah diserap.',
                            'Setelah air hampir diserap sepenuhnya, tuangkan susu penuh krim, masukkan gula pasir dan garam. Kacau perlahan untuk sebati. Tingkatkan api ke sederhana rendah dan biarkan campuran mendidih perlahan, kacau sekali-sekala untuk mengelakkan melekat.',
                            'Teruskan mereneh, kacau dengan kerap (terutama di bahagian bawah periuk), selama 20-25 minit, atau sehingga nasi lembut dan campuran telah pekat menjadi konsistensi berkrim. Nasi harus dimasak sepenuhnya tetapi masih mengekalkan bentuknya.',
                            'Keluarkan dan buang batang kayu manis, bunga cengkih, dan jalur kulit lemon dari periuk dengan berhati-hati. Kacau masuk susu pekat manis, ekstrak vanila, dan kismis emas.',
                            'Masak lagi selama 5-7 minit, kacau sentiasa, biarkan rasa sebati dan puding menjadi lebih pekat. Konsistensinya harus kaya dan berkrim, tetapi ia akan menjadi lebih pekat apabila sejuk.',
                            'Angkat periuk dari api. Tutup dan biarkan Arroz con Leche berehat selama sekurang-kurangnya 10-15 minit. Ini membolehkan nasi menyerap lebih banyak cecair dan rasa menjadi lebih mendalam.',
                            'Hidangkan panas atau sejuk dalam mangkuk individu. Hias dengan taburan serbuk kayu manis sebelum dihidangkan. Untuk sentuhan tambahan, taburan kelapa parut panggang juga boleh ditambah.'
                        ]
                    }
        }
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
            'zh-CN': {
                        title: 'Zilzil Tibs (埃塞俄比亚香辣牛肉条)',
                        description: '一道备受喜爱的埃塞俄比亚炒菜，特色是嫩牛肉条与芳香香料、Niter Kibbeh（香料澄清黄油）和充满活力的Berbere香料混合物一起炒制，通常与英杰拉（Injera）一起食用。',
                        ingredients: [
                            {
                                item: '牛里脊或牛柳，切成薄条',
                                amount: '500克'
                            },
                            {
                                item: '香料澄清黄油 (Niter Kibbeh)',
                                amount: '4 汤匙'
                            },
                            {
                                item: 'Berbere香料混合物',
                                amount: '2 汤匙'
                            },
                            {
                                item: '红洋葱，切薄片',
                                amount: '1 个大'
                            },
                            {
                                item: '大蒜，切末',
                                amount: '4 瓣'
                            },
                            {
                                item: '新鲜姜，磨碎',
                                amount: '1 汤匙'
                            },
                            {
                                item: '青辣椒，切碎（根据口味调整）',
                                amount: '1-2 个'
                            }
                        ],
                        instructions: [
                            '在一个大煎锅或锅中，用中高火加热2汤匙Niter Kibbeh。',
                            '加入牛肉条，快速煎至四面金黄，然后从锅中取出备用。',
                            '在同一个锅中，加入剩余的Niter Kibbeh，然后炒红洋葱至变软，接着加入大蒜、姜和青辣椒炒2分钟。',
                            '拌入Berbere香料混合物，再煮一分钟直到散发香味，然后将煎好的牛肉放回锅中。',
                            '将所有食材搅拌均匀，确保牛肉充分裹上香料，煮5-7分钟直到牛肉变软，味道融合。',
                            '根据口味用盐调味，立即上桌，传统上与英杰拉（Injera）一起食用。'
                        ]
                    },
            ms: {
                        title: 'Zilzil Tibs (Daging Lembu Goreng Pedas Ethiopia)',
                        description: 'Hidangan tumis Ethiopia yang digemari, menampilkan hirisan daging lembu lembut yang ditumis dengan rempah-rempah aromatik, Niter Kibbeh, dan campuran Berbere yang bersemangat, sering dihidangkan dengan injera.',
                        ingredients: [
                            {
                                item: 'Daging batang pinang atau tenderloin, dihiris nipis menjadi jalur',
                                amount: '500g'
                            },
                            {
                                item: 'Mentega jernih berempah (Niter Kibbeh)',
                                amount: '4 sudu besar'
                            },
                            {
                                item: 'Campuran Rempah Berbere',
                                amount: '2 sudu besar'
                            },
                            {
                                item: 'Bawang merah, dihiris nipis',
                                amount: '1 biji besar'
                            },
                            {
                                item: 'Bawang putih, dicincang',
                                amount: '4 ulas'
                            },
                            {
                                item: 'Halia segar, diparut',
                                amount: '1 sudu besar'
                            },
                            {
                                item: 'Cili hijau, dicincang halus (sesuaikan mengikut rasa)',
                                amount: '1-2 biji'
                            }
                        ],
                        instructions: [
                            'Panaskan 2 sudu besar Niter Kibbeh dalam kuali besar atau periuk di atas api sederhana tinggi.',
                            'Masukkan hirisan daging lembu dan goreng cepat sehingga perang di semua sisi, kemudian angkat dari kuali dan ketepikan.',
                            'Dalam kuali yang sama, masukkan baki Niter Kibbeh, kemudian tumis bawang merah sehingga lembut, diikuti dengan bawang putih, halia, dan cili hijau selama 2 minit.',
                            'Kacau masuk campuran rempah Berbere dan masak selama satu minit lagi sehingga wangi, kemudian masukkan semula daging lembu yang telah digoreng ke dalam kuali.',
                            'Gaulkan semua bahan bersama, pastikan daging lembu disalut rata dengan rempah, dan masak selama 5-7 minit sehingga daging lembu lembut dan rasa sebati.',
                            'Perasakan dengan garam secukup rasa dan hidangkan segera, secara tradisional dengan injera.'
                        ]
                    },
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
            'zh-CN': {
                        title: '查普利烤肉串',
                        description: '一种典型的巴基斯坦浅炸烤肉串，以其质朴的质地和大胆辛辣的风味而闻名，常与馕或酸辣酱一起享用。',
                        ingredients: [
                            {
                                item: '牛肉末或羊肉末 (Keema)',
                                amount: '500克'
                            },
                            {
                                item: '洋葱，切碎并挤干水分',
                                amount: '1个大'
                            },
                            {
                                item: '番茄，去籽并切碎',
                                amount: '1个中等大小'
                            },
                            {
                                item: '新鲜香草和香料 (青辣椒、香菜叶、姜蒜酱)',
                                amount: '2-3个青辣椒，1/4杯香菜，1汤匙酱'
                            },
                            {
                                item: '查普利烤肉串香料混合物 (碎香菜籽、石榴籽、孜然、红辣椒片、盐)',
                                amount: '2汤匙'
                            },
                            {
                                item: '粘合剂 (鸡蛋、玉米淀粉)',
                                amount: '1个鸡蛋，2汤匙玉米淀粉'
                            },
                            {
                                item: '油',
                                amount: '用于浅炸'
                            }
                        ],
                        instructions: [
                            '步骤 1：在一个大碗中，将肉末与切碎的洋葱、番茄、新鲜香草和香料以及查普利烤肉串香料混合物混合。',
                            '步骤 2：将打散的鸡蛋和玉米淀粉加入混合物中，然后彻底揉搓5-7分钟，直到充分混合并略带粘性。',
                            '步骤 3：将混合物分成等份，将每份压成薄而大的肉饼（查普利形状），可选地在中心压入一小片番茄。',
                            '步骤 4：在一个大煎锅中用中火加热油，然后将烤肉串每面浅炸5-7分钟，直到金黄色并完全煮熟。',
                            '步骤 5：立即将热腾腾的查普利烤肉串与温热的馕、雷塔或您喜欢的酸辣酱一起享用。'
                        ]
                    },
            ms: {
                        title: 'Chapli Kebab',
                        description: 'Kebab goreng cetek Pakistan yang penting, terkenal dengan teksturnya yang kasar dan rasa pedas yang kuat, sering dinikmati bersama naan atau chutney.',
                        ingredients: [
                            {
                                item: 'Daging Cincang Lembu atau Kambing (Keema)',
                                amount: '500g'
                            },
                            {
                                item: 'Bawang, dicincang halus dan diperah kering',
                                amount: '1 biji besar'
                            },
                            {
                                item: 'Tomato, dibuang biji dan dicincang halus',
                                amount: '1 biji sederhana'
                            },
                            {
                                item: 'Herba Segar & Aromatik (Cili Hijau, Daun Ketumbar, Pes Halia-Bawang Putih)',
                                amount: '2-3 biji cili hijau, 1/4 cawan daun ketumbar, 1 sudu besar pes'
                            },
                            {
                                item: 'Campuran Rempah Chapli Kebab (Ketumbar Hancur, Anardana, Jintan Manis, Serpihan Cili Merah, Garam)',
                                amount: '2 sudu besar'
                            },
                            {
                                item: 'Agen Pengikat (Telur, Tepung Jagung)',
                                amount: '1 biji telur, 2 sudu besar tepung jagung'
                            },
                            {
                                item: 'Minyak',
                                amount: 'Untuk menggoreng cetek'
                            }
                        ],
                        instructions: [
                            'Langkah 1: Dalam mangkuk besar, campurkan daging cincang dengan bawang yang dicincang, tomato, herba segar & aromatik, dan campuran rempah chapli kebab.',
                            'Langkah 2: Masukkan telur yang dipukul dan tepung jagung ke dalam campuran, kemudian uli dengan teliti selama 5-7 minit sehingga sebati dan sedikit melekit.',
                            'Langkah 3: Bahagikan campuran kepada bahagian yang sama dan leperkan setiap satu menjadi patty nipis dan besar (bentuk chapli), secara pilihan tekan hirisan tomato kecil ke tengah.',
                            'Langkah 4: Panaskan minyak dalam kuali besar di atas api sederhana, kemudian goreng cetek kebab selama 5-7 minit setiap sisi sehingga perang keemasan dan masak sepenuhnya.',
                            'Langkah 5: Hidangkan Chapli Kebab panas serta-merta dengan naan hangat, raita, atau chutney kegemaran anda.'
                        ]
                    },
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
            'zh-CN': {
                        title: '瓦塔帕',
                        description: '一道奶油状、美味的非洲-巴西炖菜，含有虾、面包、椰奶和登德油。',
                        ingredients: [
                            {
                                item: '虾米',
                                amount: '1杯，泡软并切碎'
                            },
                            {
                                item: '陈白面包',
                                amount: '4片，去皮，泡软'
                            },
                            {
                                item: '椰奶',
                                amount: '1罐 (400毫升)'
                            },
                            {
                                item: '登德油 (棕榈油)',
                                amount: '1/4杯'
                            },
                            {
                                item: '洋葱',
                                amount: '1个中等大小，切碎'
                            },
                            {
                                item: '大蒜',
                                amount: '3瓣，切末'
                            },
                            {
                                item: '腰果',
                                amount: '1/2杯，烤香并磨碎'
                            }
                        ],
                        instructions: [
                            '用登德油炒香洋葱和大蒜。',
                            '加入切碎的虾米和磨碎的腰果，煮几分钟。',
                            '将泡软的面包与椰奶混合搅拌至顺滑。',
                            '将面包椰奶混合物倒入锅中，煮至浓稠。',
                            '用盐调味，不断搅拌，煮至奶油状。',
                            '趁热上桌，传统上搭配阿卡拉热或白米饭。'
                        ]
                    },
            ms: {
                        title: 'Vatapá',
                        description: 'Rebusan Afro-Brazil yang berkrim dan berperisa dengan udang, roti, santan, dan minyak dendê.',
                        ingredients: [
                            {
                                item: 'Udang kering',
                                amount: '1 cawan, direndam dan dicincang'
                            },
                            {
                                item: 'Roti putih basi',
                                amount: '4 keping, dibuang kerak, direndam'
                            },
                            {
                                item: 'Santan',
                                amount: '1 tin (400ml)'
                            },
                            {
                                item: 'Minyak dendê (minyak sawit)',
                                amount: '1/4 cawan'
                            },
                            {
                                item: 'Bawang',
                                amount: '1 biji sederhana, dicincang'
                            },
                            {
                                item: 'Bawang putih',
                                amount: '3 ulas, dicincang'
                            },
                            {
                                item: 'Gajus',
                                amount: '1/2 cawan, dipanggang dan dikisar'
                            }
                        ],
                        instructions: [
                            'Tumis bawang dan bawang putih dalam minyak dendê sehingga wangi.',
                            'Masukkan udang kering cincang dan gajus kisar, masak selama beberapa minit.',
                            'Kisar roti yang direndam dengan santan sehingga licin.',
                            'Kacau campuran roti-santan ke dalam kuali, masak sehingga pekat.',
                            'Perasakan dengan garam dan masak, kacau sentiasa, sehingga berkrim.',
                            'Hidangkan panas, secara tradisional dengan acarajé atau nasi putih.'
                        ]
                    },
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
            'zh-CN': {
                        title: '炒面',
                        description: '一道充满活力的印尼炒面，咸香、辛辣，令人无比满足。',
                        ingredients: [
                            {
                                item: '新鲜黄鸡蛋面',
                                amount: '400克'
                            },
                            {
                                item: '鸡胸肉（切片）',
                                amount: '200克'
                            },
                            {
                                item: '虾（去皮去虾线）',
                                amount: '150克'
                            },
                            {
                                item: '混合蔬菜（卷心菜丝、胡萝卜丝）',
                                amount: '2杯'
                            },
                            {
                                item: '甜酱油（Kecap Manis）',
                                amount: '4汤匙'
                            },
                            {
                                item: '香料（蒜蓉、葱头片、可选辣椒）',
                                amount: '1汤匙酱'
                            },
                            {
                                item: '鸡蛋',
                                amount: '2个'
                            }
                        ],
                        instructions: [
                            '按照包装说明煮面条，沥干备用。',
                            '在炒锅中加热油，翻炒鸡肉和虾仁至熟，然后取出。',
                            '爆香香料，然后加入蔬菜翻炒至脆嫩。',
                            '将鸡肉和虾仁倒回锅中，加入面条和甜酱油，充分翻炒均匀。',
                            '拌入炒鸡蛋或蛋皮丝，轻轻混合，趁热食用。'
                        ]
                    },
            ms: {
                        title: 'Mi Goreng',
                        description: 'Hidangan mi goreng Indonesia yang bersemangat, berperisa, pedas, dan sangat memuaskan.',
                        ingredients: [
                            {
                                item: 'Mi telur kuning segar',
                                amount: '400g'
                            },
                            {
                                item: 'Isi ayam (dihiris)',
                                amount: '200g'
                            },
                            {
                                item: 'Udang (dikupas & dibuang urat)',
                                amount: '150g'
                            },
                            {
                                item: 'Sayur-sayuran campuran (kubis dihiris, lobak merah dihiris julienne)',
                                amount: '2 cawan'
                            },
                            {
                                item: 'Kicap Manis',
                                amount: '4 sudu besar'
                            },
                            {
                                item: 'Bahan aromatik (bawang putih cincang, bawang merah dihiris, cili pilihan)',
                                amount: '1 sudu besar pes'
                            },
                            {
                                item: 'Telur',
                                amount: '2 biji'
                            }
                        ],
                        instructions: [
                            'Rebus mi mengikut arahan pada bungkusan, toskan, dan ketepikan.',
                            'Panaskan minyak dalam kuali, tumis ayam dan udang sehingga masak, kemudian angkat.',
                            'Tumis bahan aromatik sehingga wangi, kemudian masukkan sayur-sayuran dan tumis sehingga lembut rangup.',
                            'Masukkan semula ayam dan udang, tambah mi dan kicap manis, gaul rata.',
                            'Masukkan telur hancur atau hirisan telur dadar, gaul perlahan, dan hidangkan panas.'
                        ]
                    },
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
            'zh-CN': {
                        title: '奶酪胡椒意面',
                        description: '一道经典的罗马菜肴，简单却又极致美味，由意面、奶酪和胡椒组成。',
                        ingredients: [
                            {
                                item: '意大利面或Tonnarelli面',
                                amount: '400克'
                            },
                            {
                                item: '佩科里诺罗马羊奶酪，磨碎',
                                amount: '200克'
                            },
                            {
                                item: '黑胡椒粒，现磨',
                                amount: '15克'
                            },
                            {
                                item: '盐',
                                amount: '适量'
                            },
                            {
                                item: '煮意面的水',
                                amount: '适量'
                            }
                        ],
                        instructions: [
                            '在意面水中加入少量盐，将意面煮至弹牙，保留大量淀粉质的煮面水。',
                            '在一个大平底锅中用中火烘烤现磨黑胡椒至香，然后加入一勺煮面水。',
                            '将锅从火上移开，加入磨碎的佩科里诺罗马羊奶酪和少量煮面水，剧烈搅拌以形成奶油状乳液。',
                            '沥干意面，立即将其加入盛有奶酪酱的平底锅中，不断翻拌使其均匀裹上酱汁。',
                            '如果需要，可加入更多煮面水或奶酪，以获得顺滑有光泽的酱汁。',
                            '立即上桌，撒上额外的现磨胡椒和佩科里诺奶酪作装饰。'
                        ]
                    },
            ms: {
                        title: 'Cacio e Pepe',
                        description: 'Klasik Rom, ringkas namun hebat, dengan pasta, keju, dan lada hitam.',
                        ingredients: [
                            {
                                item: 'Spaghetti atau Tonnarelli',
                                amount: '400g'
                            },
                            {
                                item: 'Keju Pecorino Romano, disagar halus',
                                amount: '200g'
                            },
                            {
                                item: 'Lada hitam biji, baru dihancurkan',
                                amount: '15g'
                            },
                            {
                                item: 'Garam',
                                amount: 'secukup rasa'
                            },
                            {
                                item: 'Air rebusan pasta',
                                amount: 'secukupnya'
                            }
                        ],
                        instructions: [
                            'Rebus pasta dalam air yang sedikit masin sehingga al dente, simpan banyak air rebusan pasta yang berkanji.',
                            'Panggang lada hitam yang dihancurkan dalam kuali besar di atas api sederhana sehingga wangi, kemudian masukkan satu senduk air rebusan pasta.',
                            'Angkat kuali dari api, masukkan keju Pecorino Romano yang disagar dan sedikit lagi air rebusan pasta, kacau dengan kuat untuk menghasilkan emulsi berkrim.',
                            'Toskan pasta dan segera masukkan ke dalam kuali bersama sos keju, gaul berterusan untuk menyalut.',
                            'Tambah lebih banyak air rebusan pasta atau keju jika perlu untuk mendapatkan sos yang licin dan berkilat.',
                            'Hidangkan segera, dihiasi dengan lada hitam yang dihancurkan dan Pecorino tambahan.'
                        ]
                    },
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
            'zh-CN': {
                        title: '日式烤鸡肉串',
                        description: '美味的日式烤鸡肉串，淋上甜咸的照烧酱汁。',
                        ingredients: [
                            {
                                item: '鸡腿肉（去骨带皮）',
                                amount: '500克'
                            },
                            {
                                item: '酱油',
                                amount: '1/2 杯'
                            },
                            {
                                item: '味醂',
                                amount: '1/2 杯'
                            },
                            {
                                item: '清酒',
                                amount: '1/4 杯'
                            },
                            {
                                item: '糖',
                                amount: '2 汤匙'
                            },
                            {
                                item: '青葱（装饰用）',
                                amount: '2 根'
                            },
                            {
                                item: '竹签',
                                amount: '12-15 根'
                            }
                        ],
                        instructions: [
                            '将鸡肉切成一口大小的块，然后串到竹签上。',
                            '将酱油、味醂、清酒和糖放入平底锅中混合；小火慢炖至稍微浓稠，制成照烧酱。',
                            '用中高火烤鸡肉串，频繁翻动并刷上照烧酱。',
                            '继续烧烤和刷酱，直到鸡肉完全煮熟并焦糖化。',
                            '用切碎的青葱装饰，立即上桌。'
                        ]
                    },
            ms: {
                        title: 'Yakitori',
                        description: 'Sate ayam Jepun yang lazat, disalut dengan sos tare manis dan masin.',
                        ingredients: [
                            {
                                item: 'Paha Ayam (tanpa tulang, dengan kulit)',
                                amount: '500g'
                            },
                            {
                                item: 'Kicap Soya',
                                amount: '1/2 cawan'
                            },
                            {
                                item: 'Mirin',
                                amount: '1/2 cawan'
                            },
                            {
                                item: 'Sake',
                                amount: '1/4 cawan'
                            },
                            {
                                item: 'Gula',
                                amount: '2 sudu besar'
                            },
                            {
                                item: 'Daun Bawang (untuk hiasan)',
                                amount: '2 tangkai'
                            },
                            {
                                item: 'Pencucuk Buluh',
                                amount: '12-15 batang'
                            }
                        ],
                        instructions: [
                            'Potong ayam kepada kepingan bersaiz gigitan dan cucuk pada pencucuk buluh.',
                            'Gabungkan kicap soya, mirin, sake, dan gula dalam periuk; reneh sehingga sedikit pekat untuk membuat sos tare.',
                            'Panggang pencucuk di atas api sederhana tinggi, pusingkan dengan kerap dan sapukan dengan sos tare.',
                            'Teruskan memanggang dan menyapu sehingga ayam masak sepenuhnya dan berkaramel.',
                            'Hias dengan daun bawang cincang dan hidangkan segera.'
                        ]
                    },
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
            'zh-CN': {
                        title: '马赛鱼汤',
                        description: '一道浓郁芳香的普罗旺斯鱼汤，充满地中海风味。',
                        ingredients: [
                            {
                                item: '什锦海鲜（结实白鱼、虾、贻贝）',
                                amount: '共 2.5 磅'
                            },
                            {
                                item: '橄榄油',
                                amount: '3 汤匙'
                            },
                            {
                                item: '芳香蔬菜（洋葱、大蒜、茴香）',
                                amount: '1 个大洋葱，4 瓣大蒜，1 个小茴香头'
                            },
                            {
                                item: '罐装碎番茄',
                                amount: '1 罐（28 盎司）'
                            },
                            {
                                item: '藏红花丝',
                                amount: '1/2 茶匙'
                            },
                            {
                                item: '鱼汤',
                                amount: '4 杯'
                            },
                            {
                                item: '干白葡萄酒',
                                amount: '1 杯'
                            }
                        ],
                        instructions: [
                            '在一个大锅中，用橄榄油炒洋葱、大蒜和茴香，直到变软。',
                            '加入番茄、藏红花、鱼汤和白葡萄酒；煮沸后小火慢炖 15 分钟。',
                            '轻轻加入结实的鱼块，煮 5-7 分钟直到快熟。',
                            '拌入虾和贻贝，煮至贝类开口，虾变粉红色，大约 3-5 分钟。',
                            '用盐和胡椒调味，然后立即与硬皮面包一起上桌。'
                        ]
                    },
            ms: {
                        title: 'Bouillabaisse',
                        description: 'Rebusan ikan Provençal yang kaya, beraroma, penuh dengan rasa Mediterranean.',
                        ingredients: [
                            {
                                item: 'Makanan Laut Campuran (ikan putih pejal, udang, kupang)',
                                amount: '2.5 paun jumlah'
                            },
                            {
                                item: 'Minyak Zaitun',
                                amount: '3 sudu besar'
                            },
                            {
                                item: 'Sayuran Beraroma (bawang, bawang putih, adas)',
                                amount: '1 biji bawang besar, 4 ulas bawang putih, 1 ulas adas kecil'
                            },
                            {
                                item: 'Tomato Hancur dalam Tin',
                                amount: '1 tin (28 oz)'
                            },
                            {
                                item: 'Benang Saffron',
                                amount: '1/2 sudu teh'
                            },
                            {
                                item: 'Stok Ikan',
                                amount: '4 cawan'
                            },
                            {
                                item: 'Wain Putih Kering',
                                amount: '1 cawan'
                            }
                        ],
                        instructions: [
                            'Tumis bawang, bawang putih, dan adas dalam minyak zaitun sehingga lembut dalam periuk besar.',
                            'Masukkan tomato, saffron, stok ikan, dan wain putih; didihkan dan masak selama 15 minit.',
                            'Masukkan kepingan ikan pejal dengan perlahan dan masak selama 5-7 minit sehingga hampir masak.',
                            'Kacau udang dan kupang, masak sehingga kerang terbuka dan udang berwarna merah jambu, kira-kira 3-5 minit.',
                            'Perasakan dengan garam dan lada sulah, kemudian hidangkan segera dengan roti kerak.'
                        ]
                    },
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
            'zh-CN': {
                        title: '莫雷酱鸡肉 (Mole Poblano)',
                        description: '一种浓郁、复杂且标志性的墨西哥酱汁，由辣椒、香料和巧克力制成。',
                        ingredients: [
                            {
                                item: '鸡肉块（鸡腿/鸡翅）',
                                amount: '1.5 公斤'
                            },
                            {
                                item: '干安乔辣椒',
                                amount: '4'
                            },
                            {
                                item: '干穆拉托辣椒',
                                amount: '2'
                            },
                            {
                                item: '干帕西利亚辣椒',
                                amount: '2'
                            },
                            {
                                item: '墨西哥酸浆',
                                amount: '250克'
                            },
                            {
                                item: '墨西哥巧克力（块状）',
                                amount: '50克'
                            },
                            {
                                item: '杏仁、芝麻、香料（孜然、丁香、肉桂）',
                                amount: '1/4 杯混合'
                            }
                        ],
                        instructions: [
                            '将鸡肉煮至软烂；保留鸡汤并撕碎鸡肉。',
                            '烤香辣椒，然后用热水泡软；与墨西哥酸浆和香料一起搅拌成泥。',
                            '用油炒制搅拌好的酱汁，不断搅拌直至变稠。',
                            '加入巧克力搅拌至融化，然后加入预留的鸡汤。',
                            '小火慢炖莫雷酱，直至浓郁入味，然后加入撕碎的鸡肉。',
                            '趁热与米饭一起食用，撒上芝麻点缀。'
                        ]
                    },
            ms: {
                        title: 'Mole Poblano',
                        description: 'Sos Mexico yang kaya, kompleks, dan ikonik dengan cili, rempah-ratus, dan coklat.',
                        ingredients: [
                            {
                                item: 'Potongan ayam (peha/kepak)',
                                amount: '1.5 kg'
                            },
                            {
                                item: 'Cili Ancho kering',
                                amount: '4'
                            },
                            {
                                item: 'Cili Mulato kering',
                                amount: '2'
                            },
                            {
                                item: 'Cili Pasilla kering',
                                amount: '2'
                            },
                            {
                                item: 'Tomatillo',
                                amount: '250g'
                            },
                            {
                                item: 'Coklat Mexico (tablet)',
                                amount: '50g'
                            },
                            {
                                item: 'Badam, bijan, rempah-ratus (jintan manis, cengkih, kayu manis)',
                                amount: '1/4 cawan campuran'
                            }
                        ],
                        instructions: [
                            'Rebus ayam sehingga empuk; simpan stok ayam dan carikkan ayam.',
                            'Bakar cili, kemudian rendam dalam air panas; kisar bersama tomatillo dan rempah-ratus.',
                            'Tumis sos yang telah dikisar dalam minyak sehingga pekat, kacau sentiasa.',
                            'Kacau coklat sehingga cair, kemudian masukkan stok ayam yang disimpan.',
                            'Reneh mole sehingga kaya dan berperisa, kemudian masukkan ayam carik.',
                            'Hidangkan panas bersama nasi, dihiasi dengan bijan.'
                        ]
                    },
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
            'zh-CN': {
                        title: '泰式炒饭 (Khao Pad)',
                        description: '在这道经典的泰式炒饭中体验充满活力的风味交响曲！完美锅炒的米饭，注入了美味的酱汁、鲜嫩的蛋白质和爽脆的蔬菜，创造出甜、咸和鲜味的不可抗拒的和谐。每一勺都是通往曼谷繁华街道的旅程，承诺带来真正地道的味觉体验。不要只是梦想——今晚就把泰国的魔力带到你的厨房！',
                        ingredients: [
                            {
                                item: '煮熟的茉莉香米（隔夜，冷藏）',
                                amount: '4 杯'
                            },
                            {
                                item: '鸡胸肉（或虾），切薄片',
                                amount: '1 磅 (约 450克)'
                            },
                            {
                                item: '大鸡蛋',
                                amount: '2'
                            },
                            {
                                item: '蒜末',
                                amount: '4 瓣'
                            },
                            {
                                item: '葱头，切薄片',
                                amount: '2 中等'
                            },
                            {
                                item: '鱼露',
                                amount: '3 汤匙'
                            },
                            {
                                item: '蚝油',
                                amount: '2 汤匙'
                            },
                            {
                                item: '生抽',
                                amount: '1 汤匙'
                            },
                            {
                                item: '糖（棕榈糖或砂糖）',
                                amount: '1 茶匙'
                            },
                            {
                                item: '白胡椒粉',
                                amount: '1/2 茶匙'
                            },
                            {
                                item: '植物油',
                                amount: '3 汤匙'
                            },
                            {
                                item: '洋葱，切丁',
                                amount: '1/2 中等'
                            },
                            {
                                item: '番茄，切块',
                                amount: '1 中等'
                            },
                            {
                                item: '香葱，切碎',
                                amount: '1/4 杯'
                            },
                            {
                                item: '黄瓜片、青柠角、新鲜香菜（用于装饰）',
                                amount: '适量'
                            }
                        ],
                        instructions: [
                            '准备酱汁：在一个小碗中，将鱼露、蚝油、生抽、糖和白胡椒粉搅拌均匀。备用。确保您的隔夜茉莉香米已经打散，没有结块，这可以防止粘锅并确保均匀炒制。',
                            '烹饪蛋白质和鸡蛋：在一个大炒锅或平底锅中用中高火加热1汤匙植物油。加入鸡肉（或虾）翻炒，直到煮熟并略微 browned，大约3-4分钟。将蛋白质推到一边，加入剩余的2汤匙油，打入鸡蛋。将鸡蛋炒至刚凝固，然后将其分成小块并与蛋白质混合。',
                            '香料和蔬菜：将蒜末和切片葱头加入炒锅中，翻炒约1分钟直至出香。接着，加入切丁洋葱，再翻炒2-3分钟直至变软。此时的香气应该非常诱人。',
                            '混合并炒制：将冷藏的茉莉香米加入炒锅。将准备好的酱汁均匀地倒在米饭上。用锅铲不断搅拌和翻炒米饭，打散任何结块，确保每一粒米饭都裹上酱汁并与其他食材混合。继续炒制3-5分钟，直到米饭热透并略带焦香。',
                            '最后润色：轻轻拌入番茄块和切碎的香葱，搅拌至刚热透即可，但仍保留一些新鲜度和口感。避免过度烹饪以保持其鲜艳的颜色和质地。',
                            '上菜：将泰式炒饭盛入盘中。用新鲜黄瓜片、青柠角和少许新鲜香菜慷慨地装饰。立即上菜，享受泰国地道的风味！'
                        ]
                    },
            ms: {
                        title: 'Khao Pad (Nasi Goreng Thai)',
                        description: 'Alami simfoni rasa yang meriah dalam Khao Pad Thai klasik ini! Nasi yang digoreng sempurna dalam kuali, diselitkan dengan sos yang lazat, protein lembut, dan sayur-sayuran rangup, mencipta harmoni manis, masin, dan umami yang tidak dapat ditolak. Setiap suapan adalah perjalanan ke jalan-jalan sibuk Bangkok, menjanjikan sensasi rasa yang benar-benar asli. Jangan hanya bermimpi mengenainya – bawa keajaiban Thailand ke dapur anda malam ini!',
                        ingredients: [
                            {
                                item: 'Nasi Jasmine yang dimasak (semalaman, disejukkan)',
                                amount: '4 cawan'
                            },
                            {
                                item: 'Isi ayam (atau udang), dihiris nipis',
                                amount: '1 paun (kira-kira 450g)'
                            },
                            {
                                item: 'Telur besar',
                                amount: '2'
                            },
                            {
                                item: 'Bawang putih, dicincang',
                                amount: '4 ulas'
                            },
                            {
                                item: 'Bawang merah, dihiris nipis',
                                amount: '2 sederhana'
                            },
                            {
                                item: 'Sos ikan',
                                amount: '3 sudu besar'
                            },
                            {
                                item: 'Sos tiram',
                                amount: '2 sudu besar'
                            },
                            {
                                item: 'Kicap cair',
                                amount: '1 sudu besar'
                            },
                            {
                                item: 'Gula (gula melaka atau gula pasir)',
                                amount: '1 sudu kecil'
                            },
                            {
                                item: 'Lada putih',
                                amount: '1/2 sudu kecil'
                            },
                            {
                                item: 'Minyak sayuran',
                                amount: '3 sudu besar'
                            },
                            {
                                item: 'Bawang besar, didadu',
                                amount: '1/2 sederhana'
                            },
                            {
                                item: 'Tomato, dipotong baji',
                                amount: '1 sederhana'
                            },
                            {
                                item: 'Daun bawang, dicincang',
                                amount: '1/4 cawan'
                            },
                            {
                                item: 'Hirisan timun, hirisan limau nipis, daun ketumbar segar (untuk hiasan)',
                                amount: 'Secukupnya'
                            }
                        ],
                        instructions: [
                            'Sediakan Sos: Dalam mangkuk kecil, pukul sos ikan, sos tiram, kicap cair, gula, dan lada putih bersama. Ketepikan. Pastikan nasi jasmine semalaman anda telah dileraikan dan bebas daripada ketulan, kerana ini menghalang kelengketan dan memastikan penggorengan sekata.',
                            'Masak Protein dan Telur: Panaskan 1 sudu besar minyak sayuran dalam kuali besar atau kuali leper di atas api sederhana tinggi. Masukkan ayam (atau udang) dan goreng kilas sehingga masak dan sedikit keperangan, kira-kira 3-4 minit. Tolak protein ke satu sisi, masukkan baki 2 sudu besar minyak, dan pecahkan telur. Hancurkan telur sehingga baru masak, kemudian pecahkan kepada kepingan kecil dan campurkan dengan protein.',
                            'Aromatik dan Sayur-sayuran: Masukkan bawang putih cincang dan bawang merah hiris ke dalam kuali dan goreng kilas selama kira-kira 1 minit sehingga wangi. Seterusnya, masukkan bawang besar dadu dan goreng kilas selama 2-3 minit lagi sehingga lembut. Aroma pada peringkat ini sepatutnya sangat menarik.',
                            'Gabungkan dan Goreng: Masukkan nasi jasmine yang telah disejukkan ke dalam kuali. Tuangkan campuran sos yang telah disediakan secara sekata ke atas nasi. Menggunakan spatula, kacau dan gaul nasi secara berterusan, memecahkan sebarang ketulan dan memastikan setiap butir nasi disalut dengan sos dan bercampur dengan bahan-bahan lain. Teruskan menggoreng selama 3-5 minit sehingga nasi panas sepenuhnya dan sedikit garing.',
                            'Sentuhan Akhir: Masukkan hirisan tomato dan daun bawang cincang perlahan-lahan, kacau sekadar sehingga panas tetapi masih mengekalkan kesegaran dan kerangupan. Elakkan memasak terlalu lama untuk mengekalkan warna dan tekstur yang cerah.',
                            'Hidangkan: Pindahkan Khao Pad ke pinggan hidangan. Hias dengan hirisan timun segar, hirisan limau nipis, dan taburan daun ketumbar segar. Hidangkan segera dan nikmati rasa asli Thailand!'
                        ]
                    },
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
            'zh-CN': {
                        title: '蒙古牛肉',
                        description: '尽情享受极致的舒适美食：鲜嫩的薄切牛肉浸润在浓郁香甜的酱汁中，散发着芳香的姜蒜味。这道标志性菜肴承诺带来风味的交响乐，完美焦糖化，令人无比满足。今晚就用这道餐厅品质的美味提升您的晚餐吧！',
                        ingredients: [
                            {
                                item: '牛腩',
                                amount: '1.5 磅 (薄切)'
                            },
                            {
                                item: '玉米淀粉',
                                amount: '2 汤匙'
                            },
                            {
                                item: '酱油',
                                amount: '1/2 杯'
                            },
                            {
                                item: '水',
                                amount: '1/4 杯'
                            },
                            {
                                item: '红糖',
                                amount: '1/2 杯'
                            },
                            {
                                item: '新鲜姜',
                                amount: '1 汤匙 (磨碎)'
                            },
                            {
                                item: '大蒜',
                                amount: '3 瓣 (切碎)'
                            },
                            {
                                item: '植物油',
                                amount: '3 汤匙'
                            },
                            {
                                item: '青葱',
                                amount: '1 束 (切段)'
                            }
                        ],
                        instructions: [
                            '将切好的牛肉裹上玉米淀粉。',
                            '将酱油、水、红糖、姜和蒜搅匀制成酱汁。',
                            '在炒锅中加热油；分批炒牛肉至变色，然后取出。',
                            '将酱汁加入炒锅，小火煮至浓稠。放回牛肉，翻炒均匀，煮1-2分钟。',
                            '用青葱装饰，趁热与米饭一起食用。'
                        ]
                    },
            ms: {
                        title: 'Daging Mongolia',
                        description: 'Nikmati hidangan selesa terbaik: daging lembu yang lembut, dihiris nipis, disalut dalam sos kaya, masin-manis dengan aroma halia dan bawang putih. Hidangan ikonik ini menjanjikan simfoni rasa, dikaramelkan dengan sempurna dan sangat memuaskan. Tingkatkan makan malam anda malam ini dengan hidangan berkualiti restoran ini!',
                        ingredients: [
                            {
                                item: 'Daging lembu rusuk',
                                amount: '1.5 paun (dihiris nipis)'
                            },
                            {
                                item: 'Tepung jagung',
                                amount: '2 sudu besar'
                            },
                            {
                                item: 'Kicap',
                                amount: '1/2 cawan'
                            },
                            {
                                item: 'Air',
                                amount: '1/4 cawan'
                            },
                            {
                                item: 'Gula perang',
                                amount: '1/2 cawan'
                            },
                            {
                                item: 'Halia segar',
                                amount: '1 sudu besar (diparut)'
                            },
                            {
                                item: 'Bawang putih',
                                amount: '3 ulas (dicincang)'
                            },
                            {
                                item: 'Minyak sayuran',
                                amount: '3 sudu besar'
                            },
                            {
                                item: 'Daun bawang',
                                amount: '1 ikat (dicincang)'
                            }
                        ],
                        instructions: [
                            'Salutkan hirisan daging lembu dengan tepung jagung.',
                            'Pukul kicap, air, gula perang, halia, dan bawang putih untuk sos.',
                            'Panaskan minyak dalam kuali; goreng daging lembu secara berperingkat sehingga perang, kemudian angkat.',
                            'Masukkan sos ke dalam kuali, reneh sehingga pekat. Masukkan semula daging lembu, gaul rata, dan masak 1-2 minit.',
                            'Hias dengan daun bawang dan hidangkan panas bersama nasi.'
                        ]
                    },
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
            'zh-CN': {
                        title: '海南鸡饭',
                        description: '通过这道经典的海南鸡饭，体验新加坡的标志性风味。多汁的白斩鸡、用鸡汤煮成的香米饭，以及三款充满活力的蘸酱，共同创造了一场难忘的烹饪之旅。准备好在每一口精致的美味中，仿佛置身于熙熙攘攘的小贩中心！',
                        ingredients: [
                            {
                                item: '整鸡',
                                amount: '1.2-1.5 公斤'
                            },
                            {
                                item: '姜',
                                amount: '1 大块 (切片)'
                            },
                            {
                                item: '大蒜',
                                amount: '8 瓣 (拍碎)'
                            },
                            {
                                item: '香葱',
                                amount: '3 根 (切段)'
                            },
                            {
                                item: '茉莉香米',
                                amount: '2 杯'
                            },
                            {
                                item: '黄瓜',
                                amount: '1 根 (切片)'
                            },
                            {
                                item: '新鲜香菜',
                                amount: '用于装饰'
                            },
                            {
                                item: '生抽',
                                amount: '用于蘸食'
                            },
                            {
                                item: '辣椒酱',
                                amount: '用于蘸食'
                            },
                            {
                                item: '姜葱酱',
                                amount: '用于蘸食'
                            }
                        ],
                        instructions: [
                            '将整鸡与姜、蒜和香葱一起放入大锅中煮熟。保留鸡汤。',
                            '将煮熟的鸡肉立即放入冰水中浸泡10分钟，然后拍干并切成块。',
                            '炒香姜蒜，然后加入茉莉香米，用保留的鸡汤煮至蓬松香糯。',
                            '将切好的鸡肉放在香米饭上，用黄瓜和香菜装饰，并搭配三款蘸酱一起享用。'
                        ]
                    },
            ms: {
                        title: 'Nasi Ayam Hainan',
                        description: 'Alami rasa ikonik Singapura dengan Nasi Ayam Hainan klasik ini. Ayam rebus yang lembut, nasi wangi yang dimasak dalam sup ayam, dan tiga jenis sos pencicah yang bersemangat mencipta perjalanan kulinari yang tidak dapat dilupakan. Bersedia untuk dibawa ke pusat penjaja yang sibuk dengan setiap suapan yang lazat!',
                        ingredients: [
                            {
                                item: 'Ayam bulat',
                                amount: '1.2-1.5 kg'
                            },
                            {
                                item: 'Halia',
                                amount: '1 buku besar, dihiris'
                            },
                            {
                                item: 'Bawang putih',
                                amount: '8 ulas, ditumbuk'
                            },
                            {
                                item: 'Daun bawang',
                                amount: '3 batang, dicincang'
                            },
                            {
                                item: 'Beras melati',
                                amount: '2 cawan'
                            },
                            {
                                item: 'Timun',
                                amount: '1 biji, dihiris'
                            },
                            {
                                item: 'Daun ketumbar segar',
                                amount: 'untuk hiasan'
                            },
                            {
                                item: 'Kicap cair',
                                amount: 'untuk pencicah'
                            },
                            {
                                item: 'Sos cili',
                                amount: 'untuk pencicah'
                            },
                            {
                                item: 'Sos halia-daun bawang',
                                amount: 'untuk pencicah'
                            }
                        ],
                        instructions: [
                            'Rebus ayam bulat dalam periuk besar bersama halia, bawang putih, dan daun bawang sehingga masak. Simpan stok ayam.',
                            'Segera masukkan ayam yang telah dimasak ke dalam air ais selama 10 minit, kemudian keringkan dan potong menjadi kepingan hidangan.',
                            'Tumis sedikit halia dan bawang putih, kemudian masukkan beras melati dan masak dengan stok ayam yang disimpan sehingga gebu dan wangi.',
                            'Hidangkan ayam yang dipotong di atas nasi wangi, dihiasi dengan timun dan daun ketumbar, bersama tiga sos pencicah.'
                        ]
                    },
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
            'zh-CN': {
                        title: '土耳其曼提饺子',
                        description: '体验土耳其曼提饺子的精致风味，这些小巧精致的饺子内馅是香料碎肉。淋上奶油蒜味酸奶酱，再撒上滋滋作响、香气扑鼻的红辣椒和薄荷黄油，每一口都是质地和风味的交响乐。准备好被这道烹饪杰作所吸引吧——您的土耳其美食之旅从今天开始！',
                        ingredients: [
                            {
                                item: '中筋面粉',
                                amount: '3 杯'
                            },
                            {
                                item: '鸡蛋',
                                amount: '1 个 (大)'
                            },
                            {
                                item: '水',
                                amount: '1/2 杯'
                            },
                            {
                                item: '牛肉/羊肉馅',
                                amount: '300克'
                            },
                            {
                                item: '洋葱',
                                amount: '1 个 (小，磨碎)'
                            },
                            {
                                item: '原味酸奶',
                                amount: '2 杯'
                            },
                            {
                                item: '大蒜',
                                amount: '3 瓣 (切碎)'
                            },
                            {
                                item: '无盐黄油',
                                amount: '4 汤匙'
                            },
                            {
                                item: '红辣椒片 (Pul Biber)',
                                amount: '1 茶匙'
                            },
                            {
                                item: '干薄荷',
                                amount: '1 茶匙'
                            }
                        ],
                        instructions: [
                            '准备面团和馅料：将面粉、鸡蛋、水和一小撮盐混合，揉成一个结实的面团。揉好后静置。将肉馅、磨碎的洋葱、盐和胡椒混合制成馅料。',
                            '制作曼提饺子：将面团擀薄，切成小方块（约1.5厘米）。在每个方块的中心放一小撮馅料，然后将四个角捏合在一起，形成一个小包裹。',
                            '煮曼提饺子：烧一大锅盐水至沸腾。将曼提饺子轻轻放入沸水中，煮8-10分钟，直到它们浮起并变软。',
                            '准备酱汁并上菜：将酸奶与切碎的大蒜和一小撮盐搅匀。融化黄油，加入红辣椒片和干薄荷；加热至香气四溢。沥干曼提饺子，摆盘，淋上蒜味酸奶，再慷慨地淋上热辣黄油。'
                        ]
                    },
            ms: {
                        title: 'Ladle Manti Turki',
                        description: 'Alami keenakan Ladle Manti Turki, ladu kecil yang halus diisi dengan daging cincang berperisa. Disiram dengan sos yogurt bawang putih berkrim dan dipercikkan dengan mentega panas yang harum diresapi dengan serbuk cili merah dan pudina, setiap gigitan adalah simfoni tekstur dan rasa. Bersedia untuk terpikat dengan mahakarya kulinari ini – perjalanan anda ke keenakan Turki bermula hari ini!',
                        ingredients: [
                            {
                                item: 'Tepung Gandum Serbaguna',
                                amount: '3 cawan'
                            },
                            {
                                item: 'Telur',
                                amount: '1 biji (besar)'
                            },
                            {
                                item: 'Air',
                                amount: '1/2 cawan'
                            },
                            {
                                item: 'Daging Cincang Lembu/Kambing',
                                amount: '300g'
                            },
                            {
                                item: 'Bawang Merah',
                                amount: '1 biji (kecil, disagat halus)'
                            },
                            {
                                item: 'Yogurt Asli',
                                amount: '2 cawan'
                            },
                            {
                                item: 'Bawang Putih',
                                amount: '3 ulas (dicincang)'
                            },
                            {
                                item: 'Mentega Tanpa Garam',
                                amount: '4 sudu besar'
                            },
                            {
                                item: 'Serbuk Cili Merah (Pul Biber)',
                                amount: '1 sudu kecil'
                            },
                            {
                                item: 'Pudina Kering',
                                amount: '1 sudu kecil'
                            }
                        ],
                        instructions: [
                            'Sediakan Doh & Inti: Campurkan tepung, telur, air, dan secubit garam untuk membentuk doh yang pejal. Uli, kemudian rehatkan. Campurkan daging cincang, bawang merah disagat, garam, dan lada hitam untuk inti.',
                            'Bentuk Manti: Canaikan doh nipis, potong menjadi segi empat kecil (kira-kira 1.5 cm). Letakkan sedikit inti di tengah setiap segi empat dan cubit keempat-empat bucu bersama untuk membentuk bungkusan kecil.',
                            'Masak Manti: Didihkan periuk besar berisi air masin. Masukkan manti perlahan-lahan ke dalam air mendidih dan masak selama 8-10 minit sehingga ia terapung dan lembut.',
                            'Sediakan Sos & Hidang: Pukul yogurt dengan bawang putih cincang dan secubit garam. Cairkan mentega, masukkan serbuk cili merah dan pudina kering; panaskan sehingga wangi. Toskan manti, susun di atas pinggan, tuangkan yogurt bawang putih, dan siram dengan mentega berperisa panas.'
                        ]
                    },
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
            'zh-CN': {
                        title: '炒粿条',
                        description: '体验炒粿条烟熏咸香的交响曲，这是新加坡备受喜爱的炒面食。扁平的河粉与鲜美的虾、腊肠和血蚶一起在锅中翻炒，全部裹上浓郁的黑酱油。浓郁的“锅气”风味将把您的味蕾直接带到小贩摊位。今天就准备好在自己的厨房里掌握这道标志性的街头美食了吗？',
                        ingredients: [
                            {
                                item: '新鲜扁河粉 (粿条)',
                                amount: '500克'
                            },
                            {
                                item: '虾 (去壳，去肠线)',
                                amount: '200克'
                            },
                            {
                                item: '腊肠 (切片)',
                                amount: '2 根'
                            },
                            {
                                item: '血蚶 (去壳，可选)',
                                amount: '100克'
                            },
                            {
                                item: '豆芽',
                                amount: '100克'
                            },
                            {
                                item: '韭菜 (切段)',
                                amount: '50克'
                            },
                            {
                                item: '鸡蛋',
                                amount: '2 个'
                            },
                            {
                                item: '大蒜 (切碎)',
                                amount: '3 瓣'
                            },
                            {
                                item: '酱汁混合物 (老抽、生抽、糖、鱼露、白胡椒粉)',
                                amount: '4 汤匙'
                            },
                            {
                                item: '猪油 (或植物油)',
                                amount: '2 汤匙'
                            }
                        ],
                        instructions: [
                            '在大炒锅中加热猪油至冒烟。爆香大蒜，然后加入虾和腊肠，翻炒至香。',
                            '将食材推到一边，打入鸡蛋并快速炒散。加入河粉和血蚶，充分翻炒。',
                            '倒入酱汁混合物和辣椒酱（如果使用）。大力翻炒，使所有食材均匀裹上酱汁。',
                            '加入豆芽和韭菜，继续翻炒一分钟，直到蔬菜刚熟，河粉带有烟熏“锅气”。',
                            '立即上菜，如果喜欢，可以撒上新鲜辣椒片做装饰。'
                        ]
                    },
            ms: {
                        title: 'Char Kway Teow',
                        description: 'Alami simfoni berasap dan berperisa Char Kway Teow, hidangan mi goreng kegemaran Singapura. Mi beras leper digoreng kilas dalam kuali dengan udang yang lazat, sosej Cina, dan kerang, semuanya disalut dengan kicap pekat yang kaya. Rasa \'wok hei\' yang kuat akan membawa selera anda terus ke gerai-gerai penjaja. Bersedia untuk menguasai makanan jalanan ikonik ini di dapur anda sendiri hari ini?',
                        ingredients: [
                            {
                                item: 'Mi Beras Leper Segar (Kway Teow)',
                                amount: '500g'
                            },
                            {
                                item: 'Udang (dibuang kulit, dibuang urat)',
                                amount: '200g'
                            },
                            {
                                item: 'Sosej Cina (lap cheong), dihiris',
                                amount: '2 batang'
                            },
                            {
                                item: 'Kerang (hum), dibuang kulit (pilihan)',
                                amount: '100g'
                            },
                            {
                                item: 'Taugeh',
                                amount: '100g'
                            },
                            {
                                item: 'Kucai (dipotong)',
                                amount: '50g'
                            },
                            {
                                item: 'Telur',
                                amount: '2 biji'
                            },
                            {
                                item: 'Bawang Putih, dicincang',
                                amount: '3 ulas'
                            },
                            {
                                item: 'Campuran Sos (Kicap Pekat, Kicap Cair, Gula, Sos Ikan, Lada Putih)',
                                amount: '4 sudu besar'
                            },
                            {
                                item: 'Minyak Babi (atau minyak sayuran)',
                                amount: '2 sudu besar'
                            }
                        ],
                        instructions: [
                            'Panaskan minyak babi dalam kuali sehingga berasap. Tumis bawang putih, kemudian masukkan udang dan sosej Cina, goreng kilas sehingga wangi.',
                            'Tolak bahan-bahan ke satu sisi, pecahkan telur dan kacau sebentar. Masukkan mi dan kerang, gaul rata.',
                            'Tuangkan campuran sos dan pes cili (jika guna). Goreng kilas dengan kuat untuk menyalut semua bahan.',
                            'Masukkan taugeh dan kucai, teruskan menggoreng kilas selama seminit lagi sehingga sayur-sayuran baru masak dan mi mempunyai \'wok hei\' berasap.',
                            'Hidangkan segera, hias dengan hirisan cili segar jika suka.'
                        ]
                    },
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
            'zh-CN': {
                        title: '西班牙炸丸子 (Croquetas)',
                        description: '体验极致的西班牙舒适美食！这些金黄酥脆的炸丸子，内馅是奶油般香浓的白酱，每一口都是无法抗拒的纯粹美食享受。准备好爱上每一颗入口即化的美味吧——你今天一定要做它们！',
                        ingredients: [
                            {
                                item: '无盐黄油',
                                amount: '50克'
                            },
                            {
                                item: '中筋面粉',
                                amount: '50克'
                            },
                            {
                                item: '全脂牛奶（温热）',
                                amount: '500毫升'
                            },
                            {
                                item: '塞拉诺火腿（或熟火腿），切丁',
                                amount: '100克'
                            },
                            {
                                item: '肉豆蔻粉',
                                amount: '一小撮'
                            },
                            {
                                item: '盐',
                                amount: '适量'
                            },
                            {
                                item: '黑胡椒粉',
                                amount: '适量'
                            },
                            {
                                item: '鸡蛋（打散）',
                                amount: '2个'
                            },
                            {
                                item: '面包屑',
                                amount: '150克'
                            },
                            {
                                item: '植物油',
                                amount: '用于油炸'
                            }
                        ],
                        instructions: [
                            '融化黄油，加入面粉制成面糊（roux）。逐渐搅入温牛奶，直至形成浓稠的白酱（béchamel）。',
                            '拌入切丁的火腿、肉豆蔻粉、盐和黑胡椒粉。煮5分钟，然后铺开使其完全冷却。',
                            '将冷却后的混合物塑形为小圆柱或椭圆形。将每个炸丸子蘸上打散的鸡蛋，然后裹上面包屑。',
                            '将油加热至170°C (340°F)。分批炸丸子，直至金黄酥脆。',
                            '沥干油份，用厨房纸吸油，趁热食用。'
                        ]
                    },
            ms: {
                        title: 'Kroket Sepanyol (Croquetas)',
                        description: 'Alami hidangan selesa Sepanyol yang terbaik! Kroket keemasan dan rangup ini, dengan inti béchamel berkrim dan berperisa, adalah hidangan yang tidak dapat ditolak dan penuh kenikmatan masakan. Bersedia untuk jatuh cinta dengan setiap suapan yang cair di mulut – anda mesti membuatnya hari ini!',
                        ingredients: [
                            {
                                item: 'Mentega tanpa garam',
                                amount: '50g'
                            },
                            {
                                item: 'Tepung serbaguna',
                                amount: '50g'
                            },
                            {
                                item: 'Susu penuh krim, suam',
                                amount: '500ml'
                            },
                            {
                                item: 'Jamón Serrano (atau ham masak), dipotong dadu halus',
                                amount: '100g'
                            },
                            {
                                item: 'Buah pala',
                                amount: 'Secubit'
                            },
                            {
                                item: 'Garam',
                                amount: 'Secukup rasa'
                            },
                            {
                                item: 'Lada hitam',
                                amount: 'Secukup rasa'
                            },
                            {
                                item: 'Telur, dipukul',
                                amount: '2 biji'
                            },
                            {
                                item: 'Serbuk roti',
                                amount: '150g'
                            },
                            {
                                item: 'Minyak sayuran',
                                amount: 'Untuk menggoreng jeluk'
                            }
                        ],
                        instructions: [
                            'Cairkan mentega, masukkan tepung untuk membuat roux. Pukul secara beransur-ansur susu suam sehingga béchamel pekat terbentuk.',
                            'Masukkan jamón yang dipotong dadu, buah pala, garam, dan lada. Masak selama 5 minit, kemudian ratakan untuk menyejukkan sepenuhnya.',
                            'Bentuk campuran yang telah sejuk menjadi silinder kecil atau bujur. Celupkan setiap kroket ke dalam telur yang dipukul, kemudian golekkan dalam serbuk roti.',
                            'Panaskan minyak hingga 170°C (340°F). Goreng kroket secara berperingkat sehingga perang keemasan dan rangup.',
                            'Tapiskan di atas tuala kertas dan hidangkan panas.'
                        ]
                    },
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
            'zh-CN': {
                        title: '希腊柠檬蛋花鸡汤 (Avgolemono Soup)',
                        description: '用希腊柠檬蛋花鸡汤体验希腊的温暖怀抱！这款丝滑、柠檬味的鸡肉米饭汤是明亮、浓郁风味和奶油般质地的交响乐，保证温暖你的心灵。准备好每一勺都带你穿越到地中海——你今天一定要尝尝这款经典！',
                        ingredients: [
                            {
                                item: '鸡高汤',
                                amount: '6杯'
                            },
                            {
                                item: '意大利米（Arborio rice）',
                                amount: '1/2杯'
                            },
                            {
                                item: '煮熟的鸡丝',
                                amount: '1杯'
                            },
                            {
                                item: '大鸡蛋',
                                amount: '3个'
                            },
                            {
                                item: '新鲜柠檬汁',
                                amount: '1/4杯'
                            },
                            {
                                item: '盐',
                                amount: '适量'
                            },
                            {
                                item: '现磨黑胡椒',
                                amount: '适量'
                            },
                            {
                                item: '新鲜莳萝（切碎）',
                                amount: '2汤匙'
                            }
                        ],
                        instructions: [
                            '在一个大锅中将鸡高汤煮沸。加入米饭，转小火，炖煮约15-20分钟，直至米饭变软。',
                            '拌入煮熟的鸡丝并加热。用盐和胡椒调味。',
                            '在一个单独的碗中，将鸡蛋打发至起泡。逐渐搅入柠檬汁。',
                            '慢慢地将蛋柠檬混合物回温：舀入约1杯热高汤到鸡蛋混合物中，同时不断搅拌。',
                            '将回温后的鸡蛋混合物倒回锅中，轻轻搅拌。加热至稍微变稠，但不要煮沸。用新鲜莳萝装饰。'
                        ]
                    },
            ms: {
                        title: 'Sup Avgolemono',
                        description: 'Alami kehangatan Greece dengan Sup Avgolemono! Sup ayam dan nasi berperisa lemon yang lembut ini adalah simfoni rasa cerah, masam dan tekstur berkrim, dijamin akan menghangatkan jiwa anda. Bersedia untuk dibawa ke Mediterranean dengan setiap suapan – anda mesti mencuba klasik ini hari ini!',
                        ingredients: [
                            {
                                item: 'Stok ayam',
                                amount: '6 cawan'
                            },
                            {
                                item: 'Beras Arborio',
                                amount: '1/2 cawan'
                            },
                            {
                                item: 'Ayam carik masak',
                                amount: '1 cawan'
                            },
                            {
                                item: 'Telur besar',
                                amount: '3 biji'
                            },
                            {
                                item: 'Jus lemon segar',
                                amount: '1/4 cawan'
                            },
                            {
                                item: 'Garam',
                                amount: 'Secukup rasa'
                            },
                            {
                                item: 'Lada hitam kisar segar',
                                amount: 'Secukup rasa'
                            },
                            {
                                item: 'Dill segar (dicincang)',
                                amount: '2 sudu besar'
                            }
                        ],
                        instructions: [
                            'Didihkan stok ayam dalam periuk besar. Masukkan beras, kecilkan api, dan reneh sehingga lembut, kira-kira 15-20 minit.',
                            'Masukkan ayam carik masak dan panaskan. Perasakan dengan garam dan lada.',
                            'Dalam mangkuk berasingan, pukul telur sehingga berbuih. Masukkan jus lemon secara beransur-ansur sambil memukul.',
                            'Perlahan-lahan sesuaikan suhu campuran telur-lemon: Cedok kira-kira 1 cawan stok panas ke dalam campuran telur, sambil memukul sentiasa.',
                            'Tuangkan campuran telur yang telah disesuaikan suhu kembali ke dalam periuk, kacau perlahan-lahan. Panaskan tanpa mendidih sehingga sedikit pekat. Hiaskan dengan dill segar.'
                        ]
                    },
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
,
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
            'Sauté Mee Rebus Spice Paste and Taucheo until fragrant. Add mashed sweet potatoes, tamarind paste, Gula Melaka, and water. Simmer until gravy thickens.',
            'Blanch yellow noodles and bean sprouts briefly in hot water. Drain well.',
            'Divide blanched noodles and sprouts among serving bowls.',
            'Ladle generous amounts of hot, thick gravy over the noodles.',
            'Top each bowl with halved hard-boiled eggs, fried tofu puffs, and desired garnishes. Serve immediately.'
        ],
        tags: ['Singaporean', 'Dinner', 'Non-Vegetarian'],
        translations: {
            'zh-CN': {
                        title: '爪哇面 (Mee Rebus)',
                        description: '沉浸在一碗爪哇面（Mee Rebus）的美味中吧！这道新加坡小贩经典美食以Q弹的黄面条搭配浓郁、香甜、咸香的土豆酱汁。每一勺都是风味的交响乐，上面还点缀着水煮蛋、炸豆腐和新鲜青辣椒。今天就准备好在自己的厨房里重现这道标志性的街头美食吧！',
                        ingredients: [
                            {
                                item: '福建黄面',
                                amount: '500克'
                            },
                            {
                                item: '红薯',
                                amount: '2个中等大小 (煮熟，捣成泥)'
                            },
                            {
                                item: '爪哇面香料酱（小葱头、大蒜、红辣椒、虾米混合研磨）',
                                amount: '4汤匙'
                            },
                            {
                                item: '豆酱 (Taucheo)',
                                amount: '1汤匙'
                            },
                            {
                                item: '罗望子酱',
                                amount: '1汤匙'
                            },
                            {
                                item: '马六甲椰糖 (Gula Melaka)',
                                amount: '1汤匙'
                            },
                            {
                                item: '水',
                                amount: '4杯'
                            },
                            {
                                item: '水煮蛋',
                                amount: '4个 (对半切)'
                            },
                            {
                                item: '炸豆腐泡 (Tau Pok)',
                                amount: '8个'
                            },
                            {
                                item: '配料（豆芽、青柠角、青辣椒片、花生碎）',
                                amount: '适量'
                            }
                        ],
                        instructions: [
                            '爆香爪哇面香料酱和豆酱。加入捣碎的红薯、罗望子酱、马六甲椰糖和水。小火慢炖至酱汁浓稠。',
                            '将黄面和豆芽在热水中焯烫片刻。沥干水分。',
                            '将焯烫好的面条和豆芽分装到碗中。',
                            '将大量热腾腾的浓稠酱汁浇在面条上。',
                            '每碗放上半个水煮蛋、炸豆腐泡和所需的配料。立即享用。'
                        ]
                    },
            ms: {
                        title: 'Mee Rebus',
                        description: 'Selami semangkuk Mee Rebus, hidangan klasik penjaja Singapura yang menampilkan mi kuning kenyal yang disiram kuah pekat, manis, dan savuri berasaskan ubi keledek. Setiap suapan adalah simfoni rasa, dihiasi dengan telur rebus, tauhu goreng, dan cili hijau segar. Bersedia untuk mencipta semula sensasi makanan jalanan ikonik ini di dapur anda sendiri hari ini?',
                        ingredients: [
                            {
                                item: 'Mi Hokkien Kuning',
                                amount: '500g'
                            },
                            {
                                item: 'Ubi Keledek',
                                amount: '2 sederhana (direbus, dilenyek)'
                            },
                            {
                                item: 'Pes Rempah Mee Rebus (campuran bawang merah, bawang putih, cili merah, udang kering)',
                                amount: '4 sudu besar'
                            },
                            {
                                item: 'Taucu (Pes Kacang Fermentasi)',
                                amount: '1 sudu besar'
                            },
                            {
                                item: 'Pes Asam Jawa',
                                amount: '1 sudu besar'
                            },
                            {
                                item: 'Gula Melaka (Gula Aren)',
                                amount: '1 sudu besar'
                            },
                            {
                                item: 'Air',
                                amount: '4 cawan'
                            },
                            {
                                item: 'Telur Rebus',
                                amount: '4 biji (dibelah dua)'
                            },
                            {
                                item: 'Tauhu Pok Goreng',
                                amount: '8 biji'
                            },
                            {
                                item: 'Hiasan (Taugeh, Hirisan Limau Nipis, Hirisan Cili Hijau, Kacang Tanah Panggang Hancur)',
                                amount: 'Secukupnya'
                            }
                        ],
                        instructions: [
                            'Tumis Pes Rempah Mee Rebus dan Taucu hingga wangi. Masukkan ubi keledek lenyek, pes asam jawa, Gula Melaka, dan air. Reneh sehingga kuah pekat.',
                            'Celur mi kuning dan taugeh sebentar dalam air panas. Toskan dengan baik.',
                            'Bahagikan mi dan taugeh yang telah dicelur ke dalam mangkuk hidangan.',
                            'Sendukkan kuah panas dan pekat dengan banyak ke atas mi.',
                            'Letakkan telur rebus yang dibelah dua, tauhu pok goreng, dan hiasan yang diingini di atas setiap mangkuk. Hidangkan segera.'
                        ]
                    },
            hi: {
                title: 'मी रीबस',
                description: 'मी रीबस के एक कटोरे में गोता लगाएँ, सिंगापुर का एक क्लासिक हॉकर व्यंजन जिसमें समृद्ध, मीठी और नमकीन आलू-आधारित ग्रेवी में डूबे हुए लोचदार पीले नूडल्स होते हैं। प्रत्येक निवाला स्वादों का एक सिम्फनी है, जिसके ऊपर उबले अंडे, तले हुए टोफू और ताज़ी हरी मिर्च होती है। आज ही अपनी रसोई में इस प्रतिष्ठित स्ट्रीट फूड सनसनी को फिर से बनाने के लिए तैयार हैं?',
                ingredients: [{ item: 'पीले होक्कियन नूडल्स', amount: '500 ग्राम' }, { item: 'शकरकंद', amount: '2 मध्यम (उबले, मसले हुए)' }, { item: 'मी रीबस मसाला पेस्ट (शैलट्स, लहसुन, लाल मिर्च, सूखे झींगा का मिश्रण)', amount: '4 बड़े चम्मच' }, { item: 'किण्वित बीन पेस्ट (टौचेओ)', amount: '1 बड़ा चम्मच' }, { item: 'इमली का पेस्ट', amount: '1 बड़ा चम्मच' }, { item: 'गुला मेलाका (ताड़ का गुड़)', amount: '1 बड़ा चम्मच' }, { item: 'पानी', amount: '4 कप' }, { item: 'उबले अंडे', amount: '4 (आधे कटे हुए)' }, { item: 'तले हुए टोफू पफ्स (ताऊ पोक)', amount: '8' }, { item: 'गार्निश (बीन स्प्राउट्स, नींबू के टुकड़े, कटी हुई हरी मिर्च, कुचले हुए भुने हुए मूंगफली)', amount: 'आवश्यकतानुसार' }],
                instructions: ['मी रीबस मसाला पेस्ट और टौचेओ को सुगंधित होने तक भूनें। मसले हुए शकरकंद, इमली का पेस्ट, गुला मेलाका और पानी डालें। ग्रेवी गाढ़ी होने तक उबालें।', 'पीले नूडल्स और बीन स्प्राउट्स को गर्म पानी में संक्षेप में उबालें। अच्छी तरह से छान लें।', 'उबले हुए नूडल्स और स्प्राउट्स को सर्विंग बाउल में बाँट लें।', 'नूडल्स के ऊपर गर्म, गाढ़ी ग्रेवी की उदार मात्रा डालें।', 'प्रत्येक कटोरे को आधे उबले अंडे, तले हुए टोफू पफ्स और वांछित गार्निश के साथ ऊपर से सजाएँ। तुरंत परोसें।']
            },
            bn: {
                title: 'মি রিভাস',
                description: 'মি রিভাস-এর একটি বাটিতে ডুব দিন, সিঙ্গাপুরের একটি ক্লাসিক হকার খাবার যা সমৃদ্ধ, মিষ্টি এবং সুস্বাদু আলু-ভিত্তিক গ্রেভিতে ভেজানো স্প্রিংগি হলুদ নুডুলস দিয়ে তৈরি। প্রতিটি চামচ স্বাদের একটি সিম্ফনি, উপরে সেদ্ধ ডিম, ভাজা টোফু এবং তাজা সবুজ লঙ্কা দিয়ে সাজানো। আজই আপনার নিজের রান্নাঘরে এই আইকনিক স্ট্রিট ফুড সেনসেশনটি তৈরি করতে প্রস্তুত?',
                ingredients: [{ item: 'হলুদ হক্কিয়ান নুডুলস', amount: '500 গ্রাম' }, { item: 'মিষ্টি আলু', amount: '2 মাঝারি (সেদ্ধ, ম্যাশ করা)' }, { item: 'মি রিভাস স্পাইস পেস্ট (পেঁয়াজ, রসুন, লাল লঙ্কা, শুকনো চিংড়ির মিশ্রণ)', amount: '4 টেবিল চামচ' }, { item: 'ফার্মেন্টেড বিন পেস্ট (তাউচেও)', amount: '1 টেবিল চামচ' }, { item: 'তেঁতুলের পেস্ট', amount: '1 টেবিল চামচ' }, { item: 'গুলা মেলাকা (পাম সুগার)', amount: '1 টেবিল চামচ' }, { item: 'জল', amount: '4 কাপ' }, { item: 'সেদ্ধ ডিম', amount: '4 (অর্ধেক করা)' }, { item: 'ভাজা টোফু পাফস (তাউ পোক)', amount: '8' }, { item: 'গার্নিশ (বিন স্প্রাউটস, লেবুর ফালি, কাটা সবুজ লঙ্কা, গুঁড়ো ভাজা চিনাবাদাম)', amount: 'প্রয়োজন অনুযায়ী' }],
                instructions: ['মি রিভাস স্পাইস পেস্ট এবং তাউচেও সুগন্ধি না হওয়া পর্যন্ত ভাজুন। ম্যাশ করা মিষ্টি আলু, তেঁতুলের পেস্ট, গুলা মেলাকা এবং জল যোগ করুন। গ্রেভি ঘন না হওয়া পর্যন্ত সিদ্ধ করুন।', 'হলুদ নুডুলস এবং বিন স্প্রাউটস গরম জলে সংক্ষেপে ব্লাঞ্চ করুন। ভালো করে জল ঝরিয়ে নিন।', 'ব্লাঞ্চ করা নুডুলস এবং স্প্রাউটস পরিবেশনের বাটিগুলিতে ভাগ করে নিন।', 'নুডুলসের উপর গরম, ঘন গ্রেভি উদার পরিমাণে ঢেলে দিন।', 'প্রতিটি বাটি অর্ধেক সেদ্ধ ডিম, ভাজা টোফু পাফস এবং পছন্দসই গার্নিশ দিয়ে সাজিয়ে নিন। অবিলম্বে পরিবেশন করুন।']
            },
            mr: {
                title: 'मी रीबस',
                description: 'मी रीबसच्या वाटीत डुबकी मारा, सिंगापूरमधील एक क्लासिक हॉकर डिश ज्यात समृद्ध, गोड आणि चवदार बटाट्याच्या ग्रेव्हीमध्ये बुडवलेले लवचिक पिवळे नूडल्स असतात. प्रत्येक घास चवींची एक सिम्फनी आहे, ज्यावर उकडलेले अंडे, तळलेले टोफू आणि ताज्या हिरव्या मिरच्या असतात. आजच आपल्या स्वयंपाकघरात ही प्रतिष्ठित स्ट्रीट फूड सनसनाटी पुन्हा तयार करण्यास तयार आहात?',
                ingredients: [{ item: 'पिवळे होक्कियन नूडल्स', amount: '500 ग्रॅम' }, { item: 'रताळे', amount: '2 मध्यम (उकडलेले, मॅश केलेले)' }, { item: 'मी रीबस मसाला पेस्ट (शॅलॉट्स, लसूण, लाल मिरच्या, सुक्या कोळंबीचे मिश्रण)', amount: '4 चमचे' }, { item: 'आंबवलेले बीन पेस्ट (टौचेओ)', amount: '1 चमचा' }, { item: 'चिंचेचा लगदा', amount: '1 चमचा' }, { item: 'गुला मेलाका (पाम शुगर)', amount: '1 चमचा' }, { item: 'पाणी', amount: '4 कप' }, { item: 'उकडलेले अंडे', amount: '4 (अर्धे केलेले)' }, { item: 'तळलेले टोफू पफ्स (ताऊ पोक)', amount: '8' }, { item: 'गार्निश (बीन स्प्राउट्स, लिंबाचे तुकडे, चिरलेल्या हिरव्या मिरच्या, कुटलेले भाजलेले शेंगदाणे)', amount: 'आवश्यकतेनुसार' }],
                instructions: ['मी रीबस मसाला पेस्ट आणि टौचेओ सुगंधित होईपर्यंत परतून घ्या. मॅश केलेले रताळे, चिंचेचा लगदा, गुला मेलाका आणि पाणी घाला. ग्रेव्ही घट्ट होईपर्यंत उकळा.', 'पिवळे नूडल्स आणि बीन स्प्राउट्स गरम पाण्यात थोडक्यात ब्लँच करा. चांगले निथळून घ्या.', 'ब्लँच केलेले नूडल्स आणि स्प्राउट्स सर्व्हिंग बाऊल्समध्ये वाटून घ्या.', 'नूडल्सवर गरम, घट्ट ग्रेव्ही उदारपणे ओता.', 'प्रत्येक वाटीवर अर्धे उकडलेले अंडे, तळलेले टोफू पफ्स आणि इच्छित गार्निश घालून सजवा. लगेच सर्व्ह करा.']
            },
            te: {
                title: 'మీ రీబస్',
                description: 'మీ రీబస్ గిన్నెలో మునిగిపోండి, ఇది సింగపూర్ యొక్క క్లాసిక్ హాకర్ వంటకం, ఇందులో గొప్ప, తీపి మరియు రుచికరమైన బంగాళాదుంప ఆధారిత గ్రేవీలో ముంచిన స్ప్రింగ్గి పసుపు నూడుల్స్ ఉంటాయి. ప్రతి స్పూన్‌ఫుల్ రుచుల సింఫనీ, ఉడికించిన గుడ్లు, వేయించిన టోఫు మరియు తాజా పచ్చిమిర్చితో అగ్రస్థానంలో ఉంటుంది. ఈ ఐకానిక్ స్ట్రీట్ ఫుడ్ సంచలనాన్ని ఈరోజే మీ స్వంత వంటగదిలో తిరిగి సృష్టించడానికి సిద్ధంగా ఉన్నారా?',
                ingredients: [{ item: 'పసుపు హోక్కియన్ నూడుల్స్', amount: '500 గ్రా' }, { item: 'చిలగడదుంపలు', amount: '2 మధ్యస్థ (ఉడికించినవి, మెత్తగా చేసినవి)' }, { item: 'మీ రీబస్ స్పైస్ పేస్ట్ (షాలట్స్, వెల్లుల్లి, ఎర్ర మిరపకాయలు, ఎండిన రొయ్యల మిశ్రమం)', amount: '4 టేబుల్ స్పూన్లు' }, { item: 'పులియబెట్టిన బీన్ పేస్ట్ (టౌచెయో)', amount: '1 టేబుల్ స్పూన్' }, { item: 'చింతపండు పేస్ట్', amount: '1 టేబుల్ స్పూన్' }, { item: 'గులా మెలాకా (పామ్ షుగర్)', amount: '1 టేబుల్ స్పూన్' }, { item: 'నీరు', amount: '4 కప్పులు' }, { item: 'ఉడికించిన గుడ్లు', amount: '4 (సగానికి కోసినవి)' }, { item: 'వేయించిన టోఫు పఫ్స్ (టౌ పోక్)', amount: '8' }, { item: 'గార్నిష్ (బీన్ మొలకలు, నిమ్మకాయ ముక్కలు, తరిగిన పచ్చిమిరపకాయలు, నలిపిన వేయించిన వేరుశెనగ)', amount: 'అవసరమైనంత' }],
                instructions: ['మీ రీబస్ స్పైస్ పేస్ట్ మరియు టౌచెయో సువాసన వచ్చే వరకు వేయించాలి. మెత్తగా చేసిన చిలగడదుంపలు, చింతపండు పేస్ట్, గులా మెలాకా మరియు నీరు వేయాలి. గ్రేవీ చిక్కబడే వరకు ఉడికించాలి.', 'పసుపు నూడుల్స్ మరియు బీన్ మొలకలను వేడి నీటిలో కొద్దిసేపు బ్లంచ్ చేయాలి. బాగా వడకట్టాలి.', 'బ్లంచ్ చేసిన నూడుల్స్ మరియు మొలకలను సర్వింగ్ గిన్నెల్లో పంచుకోవాలి.', 'నూడుల్స్ పైన వేడి, చిక్కటి గ్రేవీని ఉదారంగా వేయాలి.', 'ప్రతి గిన్నెను సగానికి కోసిన ఉడికించిన గుడ్లు, వేయించిన టోఫు పఫ్స్ మరియు కావలసిన గార్నిష్‌లతో అలంకరించాలి. వెంటనే సర్వ్ చేయాలి.']
            },
            ta: {
                title: 'மீ ரீபஸ்',
                description: 'மீ ரீபஸ் கிண்ணத்தில் மூழ்கிவிடுங்கள், இது சிங்கப்பூரின் ஒரு கிளாசிக் ஹாக்கர் உணவாகும், இதில் செழுமையான, இனிப்பு மற்றும் சுவையான உருளைக்கிழங்கு அடிப்படையிலான கிரேவியில் தோய்க்கப்பட்ட மீள் மஞ்சள் நூடுல்ஸ் இடம்பெறுகிறது. ஒவ்வொரு கரண்டியும் சுவைகளின் சிம்பொனி, வேகவைத்த முட்டைகள், வறுத்த டோஃபு மற்றும் புதிய பச்சை மிளகாய்களுடன் மேலே உள்ளது. இன்று உங்கள் சொந்த சமையலறையில் இந்த சின்னமான தெரு உணவு உணர்வை மீண்டும் உருவாக்க தயாரா?',
                ingredients: [{ item: 'மஞ்சள் ஹொக்கியன் நூடுல்ஸ்', amount: '500 கிராம்' }, { item: 'சர்க்கரைவள்ளி கிழங்கு', amount: '2 நடுத்தர (வேகவைத்து, மசித்த)' }, { item: 'மீ ரீபஸ் மசாலா பேஸ்ட் (சின்ன வெங்காயம், பூண்டு, சிவப்பு மிளகாய், உலர்ந்த இறால் கலவை)', amount: '4 தேக்கரண்டி' }, { item: 'புளித்த பீன் பேஸ்ட் (டௌச்சியோ)', amount: '1 தேக்கரண்டி' }, { item: 'புளி பேஸ்ட்', amount: '1 தேக்கரண்டி' }, { item: 'குலா மெலாக்கா (பனை சர்க்கரை)', amount: '1 தேக்கரண்டி' }, { item: 'தண்ணீர்', amount: '4 கப்' }, { item: 'வேகவைத்த முட்டைகள்', amount: '4 (பாதியாக வெட்டப்பட்ட)' }, { item: 'வறுத்த டோஃபு பஃப்ஸ் (டௌ போக்)', amount: '8' }, { item: 'அலங்காரங்கள் (பீன்ஸ் முளைகள், எலுமிச்சை துண்டுகள், நறுக்கிய பச்சை மிளகாய், நொறுக்கப்பட்ட வறுத்த வேர்க்கடலை)', amount: 'தேவைக்கேற்ப' }],
                instructions: ['மீ ரீபஸ் மசாலா பேஸ்ட் மற்றும் டௌச்சியோவை மணம் வரும் வரை வதக்கவும். மசித்த சர்க்கரைவள்ளி கிழங்கு, புளி பேஸ்ட், குலா மெலாக்கா மற்றும் தண்ணீர் சேர்க்கவும். கிரேவி கெட்டியாகும் வரை கொதிக்க விடவும்.', 'மஞ்சள் நூடுல்ஸ் மற்றும் பீன்ஸ் முளைகளை சூடான நீரில் சுருக்கமாக பிளான்ச் செய்யவும். நன்கு வடிகட்டவும்.', 'பிளான்ச் செய்யப்பட்ட நூடுல்ஸ் மற்றும் முளைகளை பரிமாறும் கிண்ணங்களில் பிரிக்கவும்.', 'நூடுல்ஸ் மீது சூடான, கெட்டியான கிரேவியை தாராளமாக ஊற்றவும்.', 'ஒவ்வொரு கிண்ணத்தையும் பாதியாக வெட்டப்பட்ட வேகவைத்த முட்டைகள், வறுத்த டோஃபு பஃப்ஸ் மற்றும் விரும்பிய அலங்காரங்களுடன் மேலே வைக்கவும். உடனடியாக பரிமாறவும்.']
            }
        }
    }
,
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
            'Soak rice cakes if hard. Prepare broth with dashima/anchovies, then remove solids.',
            'In the broth, add gochujang, gochugaru, sugar, soy sauce, and minced garlic. Bring to a boil.',
            'Add rice cakes and fish cakes. Simmer, stirring occasionally, until rice cakes are soft and sauce thickens.',
            'Stir in boiled eggs and chopped green onions. Serve immediately.'
        ],
        tags: ['Korean', 'Dinner', 'Non-Vegetarian', 'Spicy'],
        translations: {
            'zh-CN': {
                        title: '辣炒年糕 (Tteokbokki)',
                        description: '体验辣炒年糕（Tteokbokki）的火辣Q弹美味，这是一种深受喜爱的韩国街头美食！软糯的年糕浸泡在浓郁辛辣的韩式辣酱中，通常还配有鱼饼和水煮蛋。这道标志性菜肴融合了甜、咸、辣的爆炸性风味，将刺激您的味蕾。准备好今天就用这道令人无法抗拒的韩国经典点燃您的厨房了吗？',
                        ingredients: [
                            {
                                item: '韩式年糕 (Garaetteok)',
                                amount: '500克'
                            },
                            {
                                item: '韩式辣酱 (Gochujang)',
                                amount: '3汤匙'
                            },
                            {
                                item: '韩式辣椒粉 (Gochugaru)',
                                amount: '1汤匙'
                            },
                            {
                                item: '海带 (Dashima) / 鳀鱼高汤',
                                amount: '4杯'
                            },
                            {
                                item: '鱼饼 (eomuk)',
                                amount: '200克'
                            },
                            {
                                item: '水煮蛋',
                                amount: '2-4个'
                            },
                            {
                                item: '青葱',
                                amount: '2根'
                            },
                            {
                                item: '糖',
                                amount: '1汤匙'
                            },
                            {
                                item: '酱油',
                                amount: '1汤匙'
                            },
                            {
                                item: '蒜蓉',
                                amount: '1茶匙'
                            }
                        ],
                        instructions: [
                            '如果年糕较硬，请先浸泡。用海带/鳀鱼准备高汤，然后取出固体。',
                            '在高汤中加入韩式辣酱、韩式辣椒粉、糖、酱油和蒜蓉。煮沸。',
                            '加入年糕和鱼饼。小火慢炖，偶尔搅拌，直到年糕变软，酱汁变浓稠。',
                            '拌入水煮蛋和切碎的青葱。立即享用。'
                        ]
                    },
            ms: {
                        title: 'Tteokbokki',
                        description: 'Alami keenakan Tteokbokki yang pedas dan kenyal, sensasi makanan jalanan Korea yang digemari! Kek beras lembut yang disalut sos gochujang pedas yang kaya, sering dihidangkan bersama kek ikan dan telur rebus. Hidangan ikonik ini menawarkan letupan rasa manis, savuri, dan pedas yang akan memukau selera anda. Bersedia untuk menyemarakkan dapur anda dengan klasik Korea yang tidak dapat ditolak ini hari ini?',
                        ingredients: [
                            {
                                item: 'Garaetteok (Kek Beras Korea)',
                                amount: '500g'
                            },
                            {
                                item: 'Gochujang (Pes Cili Korea)',
                                amount: '3 sudu besar'
                            },
                            {
                                item: 'Gochugaru (Serbuk Cili Korea)',
                                amount: '1 sudu besar'
                            },
                            {
                                item: 'Dashima (rumpai laut kering) / Stok Ikan Bilis',
                                amount: '4 cawan'
                            },
                            {
                                item: 'Kek ikan (eomuk)',
                                amount: '200g'
                            },
                            {
                                item: 'Telur rebus',
                                amount: '2-4 biji'
                            },
                            {
                                item: 'Daun bawang',
                                amount: '2 tangkai'
                            },
                            {
                                item: 'Gula',
                                amount: '1 sudu besar'
                            },
                            {
                                item: 'Kicap',
                                amount: '1 sudu besar'
                            },
                            {
                                item: 'Bawang putih (dicincang)',
                                amount: '1 sudu kecil'
                            }
                        ],
                        instructions: [
                            'Rendam kek beras jika keras. Sediakan stok dengan dashima/ikan bilis, kemudian buang bahan pepejal.',
                            'Dalam stok, masukkan gochujang, gochugaru, gula, kicap, dan bawang putih cincang. Didihkan.',
                            'Masukkan kek beras dan kek ikan. Reneh, kacau sekali-sekala, sehingga kek beras lembut dan sos pekat.',
                            'Masukkan telur rebus dan daun bawang yang dicincang. Hidangkan segera.'
                        ]
                    },
            hi: {
                title: 'टॉकबोक्की',
                description: 'टॉकबोक्की के तीखे, चबाने वाले आनंद का अनुभव करें, जो एक प्रिय कोरियाई स्ट्रीट फूड सनसनी है! नरम चावल के केक एक समृद्ध, मसालेदार गोचुजांग सॉस में डूबे हुए, अक्सर मछली के केक और उबले अंडे के साथ परोसे जाते हैं। यह प्रतिष्ठित व्यंजन मीठे, नमकीन और मसालेदार स्वादों का एक विस्फोट प्रदान करता है जो आपकी स्वाद कलिकाओं को उत्तेजित करेगा। इस अनूठे कोरियाई क्लासिक के साथ अपनी रसोई को प्रज्वलित करने के लिए तैयार हैं?',
                ingredients: [{ item: 'गारेट्टोक (कोरियाई चावल के केक)', amount: '500 ग्राम' }, { item: 'गोचुजांग (कोरियाई मिर्च का पेस्ट)', amount: '3 बड़े चम्मच' }, { item: 'गोचुगारू (कोरियाई मिर्च के गुच्छे)', amount: '1 बड़ा चम्मच' }, { item: 'दशिमा (सूखे केल्प) / एंकोवी शोरबा', amount: '4 कप' }, { item: 'मछली के केक (ओमुक)', amount: '200 ग्राम' }, { item: 'उबले अंडे', amount: '2-4' }, { item: 'हरी प्याज', amount: '2 डंठल' }, { item: 'चीनी', amount: '1 बड़ा चम्मच' }, { item: 'सोया सॉस', amount: '1 बड़ा चम्मच' }, { item: 'लहसुन (बारीक कटा हुआ)', amount: '1 छोटा चम्मच' }],
                instructions: ['यदि चावल के केक सख्त हों तो उन्हें भिगो दें। दशिमा/एंकोवी से शोरबा तैयार करें, फिर ठोस पदार्थ हटा दें।', 'शोरबा में गोचुजांग, गोचुगारू, चीनी, सोया सॉस और बारीक कटा हुआ लहसुन डालें। उबाल लें।', 'चावल के केक और मछली के केक डालें। धीमी आंच पर पकाएं, कभी-कभी हिलाते रहें, जब तक चावल के केक नरम न हो जाएं और सॉस गाढ़ा न हो जाए।', 'उबले अंडे और कटी हुई हरी प्याज डालकर मिलाएं। तुरंत परोसें।']
            },
            bn: {
                title: 'টোকবোক্কি',
                description: 'টোকবোক্কির জ্বলন্ত, চিবানো আনন্দের অভিজ্ঞতা নিন, একটি প্রিয় কোরিয়ান স্ট্রিট ফুড সেনসেশন! নরম চালের কেক একটি সমৃদ্ধ, মশলাদার গোচুজাং সসে ডুবানো, প্রায়শই মাছের কেক এবং সেদ্ধ ডিমের সাথে পরিবেশন করা হয়। এই আইকনিক খাবারটি মিষ্টি, সুস্বাদু এবং মশলাদার স্বাদের একটি বিস্ফোরণ সরবরাহ করে যা আপনার স্বাদকোরককে মুগ্ধ করবে। এই অপ্রতিরোধ্য কোরিয়ান ক্লাসিক দিয়ে আপনার রান্নাঘরকে আলোকিত করতে প্রস্তুত?',
                ingredients: [{ item: 'গ্যারেত্তেওক (কোরিয়ান চালের কেক)', amount: '500 গ্রাম' }, { item: 'গোচুজাং (কোরিয়ান লঙ্কার পেস্ট)', amount: '3 টেবিল চামচ' }, { item: 'গোচুগারু (কোরিয়ান লঙ্কার ফ্লেক্স)', amount: '1 টেবিল চামচ' }, { item: 'দাশিমা (শুকনো কেল্প) / অ্যাঙ্কোভি ব্রোথ', amount: '4 কাপ' }, { item: 'ফিশ কেক (ওমুক)', amount: '200 গ্রাম' }, { item: 'সেদ্ধ ডিম', amount: '2-4টি' }, { item: 'সবুজ পেঁয়াজ', amount: '2টি ডাঁটা' }, { item: 'চিনি', amount: '1 টেবিল চামচ' }, { item: 'সয়া সস', amount: '1 টেবিল চামচ' }, { item: 'রসুন (কুচি)', amount: '1 চা চামচ' }],
                instructions: ['যদি চালের কেক শক্ত হয় তবে ভিজিয়ে রাখুন। দাশিমা/অ্যাঙ্কোভি দিয়ে ব্রোথ তৈরি করুন, তারপর কঠিন অংশগুলি সরিয়ে ফেলুন।', 'ব্রোথে গোচুজাং, গোচুগারু, চিনি, সয়া সস এবং কুচি করা রসুন যোগ করুন। ফুটিয়ে নিন।', 'চালের কেক এবং ফিশ কেক যোগ করুন। মাঝে মাঝে নাড়তে নাড়তে সিদ্ধ করুন, যতক্ষণ না চালের কেক নরম হয় এবং সস ঘন হয়।', 'সেদ্ধ ডিম এবং কাটা সবুজ পেঁয়াজ মিশিয়ে নিন। অবিলম্বে পরিবেশন করুন।']
            },
            mr: {
                title: 'टॉकबोक्की',
                description: 'टॉकबोक्कीच्या ज्वलंत, चिवट आनंदाचा अनुभव घ्या, एक प्रिय कोरियन स्ट्रीट फूड सेन्सेशन! मऊ तांदळाचे केक एका समृद्ध, मसालेदार गोचुजांग सॉसमध्ये बुडवलेले, अनेकदा फिश केक आणि उकडलेल्या अंड्यांसह. हा प्रतिष्ठित पदार्थ गोड, चवदार आणि मसालेदार चवींचा स्फोट देतो जो तुमच्या चवीच्या कळ्यांना उत्तेजित करेल. या अप्रतिम कोरियन क्लासिकने तुमचे स्वयंपाकघर प्रज्वलित करण्यास तयार आहात?',
                ingredients: [{ item: 'गारेट्टोक (कोरियन तांदळाचे केक)', amount: '500 ग्रॅम' }, { item: 'गोचुजांग (कोरियन मिरची पेस्ट)', amount: '3 चमचे' }, { item: 'गोचुगारू (कोरियन मिरचीचे फ्लेक्स)', amount: '1 चमचा' }, { item: 'दाशिमा (सुके केल्प) / अँकोवी सूप', amount: '4 कप' }, { item: 'फिश केक (ओमुक)', amount: '200 ग्रॅम' }, { item: 'उकडलेली अंडी', amount: '2-4' }, { item: 'हिरवी कांदा', amount: '2 देठ' }, { item: 'साखर', amount: '1 चमचा' }, { item: 'सोया सॉस', amount: '1 चमचा' }, { item: 'लसूण (बारीक चिरलेला)', amount: '1 छोटा चमचा' }],
                instructions: ['तांदळाचे केक कडक असल्यास भिजवा. दाशिमा/अँकोवी वापरून सूप तयार करा, नंतर घन पदार्थ काढून टाका.', 'सूपमध्ये गोचुजांग, गोचुगारू, साखर, सोया सॉस आणि बारीक चिरलेला लसूण घाला. उकळी आणा.', 'तांदळाचे केक आणि फिश केक घाला. तांदळाचे केक मऊ होईपर्यंत आणि सॉस घट्ट होईपर्यंत अधूनमधून ढवळत शिजवा.', 'उकडलेली अंडी आणि चिरलेली हिरवी कांदा घालून मिसळा. लगेच सर्व्ह करा.']
            },
            te: {
                title: 'టెయోక్‌బొక్కీ',
                description: 'కొరియన్ స్ట్రీట్ ఫుడ్ సంచలనం, టెయోక్‌బొక్కీ యొక్క మండుతున్న, నమలగల ఆనందాన్ని అనుభవించండి! మృదువైన బియ్యం కేకులు గొప్ప, కారంగా ఉండే గోచుజాంగ్ సాస్‌లో మునిగి, తరచుగా చేపల కేకులు మరియు ఉడికించిన గుడ్లతో వడ్డిస్తారు. ఈ ఐకానిక్ వంటకం తీపి, రుచికరమైన మరియు కారంగా ఉండే రుచుల పేలుడును అందిస్తుంది, ఇది మీ రుచి మొగ్గలను ఉత్తేజపరుస్తుంది. ఈ తిరుగులేని కొరియన్ క్లాసిక్‌తో మీ వంటగదిని వెలిగించడానికి సిద్ధంగా ఉన్నారా?',
                ingredients: [{ item: 'గారేటియోక్ (కొరియన్ బియ్యం కేకులు)', amount: '500 గ్రా' }, { item: 'గోచుజాంగ్ (కొరియన్ మిరప పేస్ట్)', amount: '3 టేబుల్ స్పూన్లు' }, { item: 'గోచుగారు (కొరియన్ మిరప రేకులు)', amount: '1 టేబుల్ స్పూన్' }, { item: 'దాషిమా (ఎండిన కెల్ప్) / ఆంకోవీ రసం', amount: '4 కప్పులు' }, { item: 'చేపల కేకులు (ఓముక్)', amount: '200 గ్రా' }, { item: 'ఉడికించిన గుడ్లు', amount: '2-4' }, { item: 'పచ్చి ఉల్లిపాయలు', amount: '2 కాడలు' }, { item: 'చక్కెర', amount: '1 టేబుల్ స్పూన్' }, { item: 'సోయా సాస్', amount: '1 టేబుల్ స్పూన్' }, { item: 'వెల్లుల్లి (ముక్కలు)', amount: '1 టీ స్పూన్' }],
                instructions: ['బియ్యం కేకులు గట్టిగా ఉంటే నానబెట్టండి. దాషిమా/ఆంకోవీలతో రసం తయారు చేసి, ఆపై ఘనపదార్థాలను తొలగించండి.', 'రసంలో గోచుజాంగ్, గోచుగారు, చక్కెర, సోయా సాస్ మరియు ముక్కలు చేసిన వెల్లుల్లిని కలపండి. మరిగించండి.', 'బియ్యం కేకులు మరియు చేపల కేకులు వేయండి. బియ్యం కేకులు మృదువుగా అయ్యే వరకు మరియు సాస్ చిక్కబడే వరకు అప్పుడప్పుడు కలుపుతూ ఉడికించండి.', 'ఉడికించిన గుడ్లు మరియు తరిగిన పచ్చి ఉల్లిపాయలు వేసి కలపండి. వెంటనే వడ్డించండి.']
            },
            ta: {
                title: 'டியோக்போக்கி',
                description: 'கொரியன் தெரு உணவின் விருப்பமான உணர்வான டியோக்போக்கியின் காரமான, மெல்லக்கூடிய இன்பத்தை அனுபவிக்கவும்! மென்மையான அரிசி கேக்குகள் ஒரு செழுமையான, காரமான கோச்சுஜாங் சாஸில் மூழ்கி, பெரும்பாலும் மீன் கேக்குகள் மற்றும் வேகவைத்த முட்டைகளுடன் பரிமாறப்படுகின்றன. இந்த சின்னமான உணவு இனிப்பு, சுவையான மற்றும் காரமான சுவைகளின் வெடிப்பை வழங்குகிறது, இது உங்கள் சுவை மொட்டுகளைத் தூண்டும். இந்த தவிர்க்க முடியாத கொரியன் கிளாசிக் மூலம் உங்கள் சமையலறையை ஒளிரச் செய்யத் தயாரா?',
                ingredients: [{ item: 'கரேட்டியோக் (கொரியன் அரிசி கேக்குகள்)', amount: '500 கிராம்' }, { item: 'கோச்சுஜாங் (கொரியன் மிளகாய் விழுது)', amount: '3 தேக்கரண்டி' }, { item: 'கோச்சுகாரு (கொரியன் மிளகாய் செதில்கள்)', amount: '1 தேக்கரண்டி' }, { item: 'தாஷிமா (உலர்ந்த கெல்ப்) / அஞ்சோவி குழம்பு', amount: '4 கப்' }, { item: 'மீன் கேக்குகள் (ஓமுக்)', amount: '200 கிராம்' }, { item: 'வேகவைத்த முட்டைகள்', amount: '2-4' }, { item: 'பச்சை வெங்காயம்', amount: '2 தண்டுகள்' }, { item: 'சர்க்கரை', amount: '1 தேக்கரண்டி' }, { item: 'சோயா சாஸ்', amount: '1 தேக்கரண்டி' }, { item: 'பூண்டு (நறுக்கியது)', amount: '1 தேக்கரண்டி' }],
                instructions: ['அரிசி கேக்குகள் கடினமாக இருந்தால் ஊறவைக்கவும். தாஷிமா/அஞ்சோவிகளுடன் குழம்பு தயாரித்து, பின்னர் திடப்பொருட்களை அகற்றவும்.', 'குழம்பில் கோச்சுஜாங், கோச்சுகாரு, சர்க்கரை, சோயா சாஸ் மற்றும் நறுக்கிய பூண்டு சேர்க்கவும். கொதிக்க விடவும்.', 'அரிசி கேக்குகள் மற்றும் மீன் கேக்குகளை சேர்க்கவும். அரிசி கேக்குகள் மென்மையாகும் வரை மற்றும் சாஸ் கெட்டியாகும் வரை அவ்வப்போது கிளறி, மெதுவாக கொதிக்க விடவும்.', 'வேகவைத்த முட்டைகள் மற்றும் நறுக்கிய பச்சை வெங்காயத்தை சேர்த்து கிளறவும். உடனடியாக பரிமாறவும்.']
            }
        }
    }
,
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
            'Heat lard/oil in a wok, fry pork belly until crispy. Add minced garlic (from aromatics), then stir-fry seafood until just cooked. Remove and set aside.',
            'Add mixed noodles to the wok. Pour in prawn broth and Hokkien Mee sauce. Simmer until noodles absorb most liquid.',
            'Return pork and seafood to the wok. Add remaining aromatics & greens (bean sprouts, chives). Stir-fry vigorously until well combined and slightly charred.',
            'Serve immediately with a dollop of sambal belacan and a squeeze of fresh lime.'
        ],
        tags: ['Singaporean', 'Dinner', 'Non-Vegetarian'],
        translations: {
            'zh-CN': {
                        title: '福建炒虾面',
                        description: '沉浸在锅气十足的面条、鲜嫩多汁的虾、软嫩的鱿鱼和香脆的五花肉的诱人交响曲中，所有食材都浸润在浓郁鲜美的虾汤里。这道标志性的新加坡炒面是一道口感丰富的杰作，每一口都充满鲜味。准备好唤醒您的味蕾，今晚就将新加坡的活力风味带入您的厨房吧！',
                        ingredients: [
                            {
                                item: '混合面条（黄福建面和米粉）',
                                amount: '共700克，干面需提前泡软'
                            },
                            {
                                item: '混合海鲜（新鲜虾和鱿鱼）',
                                amount: '共500克，洗净处理好'
                            },
                            {
                                item: '五花肉',
                                amount: '150克，切薄片'
                            },
                            {
                                item: '虾汤',
                                amount: '750毫升（浓郁鲜美）'
                            },
                            {
                                item: '福建炒面酱',
                                amount: '4汤匙（生抽、老抽、鱼露混合）'
                            },
                            {
                                item: '调味品和蔬菜（蒜蓉、豆芽、韭菜）',
                                amount: '共200克'
                            },
                            {
                                item: '猪油或植物油',
                                amount: '3汤匙'
                            },
                            {
                                item: '参巴峇拉煎和青柠',
                                amount: '供食用'
                            }
                        ],
                        instructions: [
                            '在炒锅中加热猪油/植物油，将五花肉炒至酥脆。加入蒜蓉（来自调味品），然后将海鲜炒至刚熟。取出备用。',
                            '将混合面条加入炒锅。倒入虾汤和福建炒面酱。小火慢炖，直到面条吸收大部分汤汁。',
                            '将五花肉和海鲜倒回炒锅。加入剩余的调味品和蔬菜（豆芽、韭菜）。大火快速翻炒，直到充分混合并略带焦香。',
                            '立即上桌，搭配一小勺参巴峇拉煎和挤上新鲜青柠汁。'
                        ]
                    },
            ms: {
                        title: 'Mee Hokkien',
                        description: 'Selami simfoni mi yang diserap \'wok-hei\' (aroma kuali) yang tidak dapat ditolak, udang yang juicy, sotong yang lembut, dan perut babi rangup, semuanya disiram dalam kuah udang yang kaya dan berperisa. Hidangan gorengan Singapura yang ikonik ini adalah karya agung tekstur, penuh dengan rasa umami dalam setiap suapan. Bersedia untuk membangkitkan selera anda dan membawa rasa Singapura yang bersemangat terus ke dapur anda malam ini!',
                        ingredients: [
                            {
                                item: 'Mi Campur (Mi Hokkien Kuning & Bihun)',
                                amount: 'Jumlah 700g, rendam jika kering'
                            },
                            {
                                item: 'Makanan Laut Campur (Udang Segar & Sotong)',
                                amount: 'Jumlah 500g, dibersihkan dan disediakan'
                            },
                            {
                                item: 'Perut Babi',
                                amount: '150g, dihiris nipis'
                            },
                            {
                                item: 'Kuah Udang',
                                amount: '750ml (kaya dan berperisa)'
                            },
                            {
                                item: 'Sos Mi Hokkien',
                                amount: '4 sudu besar (campuran kicap cair, kicap pekat, sos ikan)'
                            },
                            {
                                item: 'Bahan Aromatik & Sayuran (Bawang Putih Cincang, Taugeh, Kucai)',
                                amount: 'Jumlah 200g'
                            },
                            {
                                item: 'Minyak Babi atau Minyak Sayuran',
                                amount: '3 sudu besar'
                            },
                            {
                                item: 'Sambal Belacan & Limau Nipis',
                                amount: 'Untuk hidangan'
                            }
                        ],
                        instructions: [
                            'Panaskan minyak babi/minyak dalam kuali, goreng perut babi sehingga rangup. Masukkan bawang putih cincang (dari bahan aromatik), kemudian tumis makanan laut sehingga masak. Angkat dan ketepikan.',
                            'Masukkan mi campur ke dalam kuali. Tuangkan kuah udang dan sos Mi Hokkien. Reneh sehingga mi menyerap kebanyakan cecair.',
                            'Kembalikan babi dan makanan laut ke dalam kuali. Masukkan baki bahan aromatik & sayuran (taugeh, kucai). Tumis dengan kuat sehingga sebati dan sedikit hangus.',
                            'Hidangkan segera dengan sesudu sambal belacan dan perahan limau nipis segar.'
                        ]
                    },
            hi: {
                title: 'होक्कियन मी',
                description: 'वोक-हेई से भरपूर नूडल्स, रसीले झींगे, नरम स्क्वीड और कुरकुरी पोर्क बेली का एक अनूठा संगम, जो एक समृद्ध, स्वादिष्ट झींगा शोरबे में डूबा हुआ है। यह प्रतिष्ठित सिंगापुरियन स्टिर-फ्राई एक बनावट वाली उत्कृष्ट कृति है, जो हर निवाले में उमामी से भरपूर है। आज ही अपनी स्वाद कलिकाओं को जगाने और सिंगापुर के जीवंत स्वादों को अपनी रसोई में लाने के लिए तैयार हो जाइए!',
                ingredients: [{ item: 'मिश्रित नूडल्स (पीले होक्कियन और बी हून)', amount: 'कुल 700 ग्राम, सूखे होने पर भिगो' }],
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
        id: '2026-05-14',
        title: 'Texas Chili',
        description: 'Experience the legendary taste of authentic Texas Chili, a hearty, robust stew packed with tender beef and a symphony of bold spices. This isn\'t just chili; it\'s a culinary journey to the heart of the Lone Star State, promising warmth, flavor, and pure satisfaction. Get ready to ignite your taste buds and make this iconic dish tonight!',
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
            'Heat oil in a large pot over medium-high heat. Brown ground beef, breaking it apart, then drain excess fat.',
            'Stir in chili powder, cumin, garlic powder, onion powder, cayenne, and salt. Cook for 1 minute until fragrant.',
            'Add beef broth and tomato paste. Bring to a simmer, then reduce heat to low.',
            'Cover and simmer for 30-40 minutes, stirring occasionally, allowing flavors to meld.',
            'Serve hot with your favorite toppings like cheese, onions, or cornbread.'
        ],
        tags: ['American', 'Dinner', 'Non-Vegetarian'],
        translations: {
            'zh-CN': {
                        title: '德州辣肉酱',
                        description: '体验正宗德州辣肉酱的传奇风味，这道丰盛、浓郁的炖菜充满鲜嫩牛肉和大胆香料的交响曲。这不仅仅是辣肉酱；这是一次通往孤星州核心的烹饪之旅，带来温暖、风味和纯粹的满足感。准备好唤醒您的味蕾，今晚就制作这道标志性菜肴吧！',
                        ingredients: [
                            {
                                item: '牛肉末（80%瘦肉/20%肥肉）',
                                amount: '1.5磅'
                            },
                            {
                                item: '牛肉高汤',
                                amount: '2杯'
                            },
                            {
                                item: '番茄酱',
                                amount: '2汤匙'
                            },
                            {
                                item: '辣椒粉',
                                amount: '3汤匙'
                            },
                            {
                                item: '孜然粉',
                                amount: '1汤匙'
                            },
                            {
                                item: '蒜粉',
                                amount: '1茶匙'
                            },
                            {
                                item: '洋葱粉',
                                amount: '1茶匙'
                            },
                            {
                                item: '辣椒（卡宴辣椒）',
                                amount: '1/2茶匙（可选）'
                            },
                            {
                                item: '盐',
                                amount: '1茶匙'
                            },
                            {
                                item: '植物油',
                                amount: '1汤匙'
                            }
                        ],
                        instructions: [
                            '在一个大锅中用中高火加热油。将牛肉末炒至褐色，并将其捣散，然后沥干多余的脂肪。',
                            '拌入辣椒粉、孜然粉、蒜粉、洋葱粉、辣椒和盐。煮1分钟，直到散发香味。',
                            '加入牛肉高汤和番茄酱。煮沸后转小火。',
                            '盖上锅盖，小火慢炖30-40分钟，偶尔搅拌，让味道充分融合。',
                            '趁热食用，搭配您喜欢的配料，如奶酪、洋葱或玉米面包。'
                        ]
                    },
            ms: {
                        title: 'Cili Texas',
                        description: 'Alami rasa legenda Cili Texas asli, stew yang mengenyangkan dan beraroma kuat yang penuh dengan daging lembu yang lembut dan simfoni rempah-ratus yang berani. Ini bukan sekadar cili; ini adalah perjalanan kulinari ke tengah-tengah Negeri Bintang Tunggal, menjanjikan kehangatan, rasa, dan kepuasan murni. Bersedia untuk membangkitkan selera anda dan buat hidangan ikonik ini malam ini!',
                        ingredients: [
                            {
                                item: 'Daging Lembu Kisar (80/20)',
                                amount: '1.5 paun'
                            },
                            {
                                item: 'Stok Daging Lembu',
                                amount: '2 cawan'
                            },
                            {
                                item: 'Pes Tomato',
                                amount: '2 sudu besar'
                            },
                            {
                                item: 'Serbuk Cili',
                                amount: '3 sudu besar'
                            },
                            {
                                item: 'Jintan Manis',
                                amount: '1 sudu besar'
                            },
                            {
                                item: 'Serbuk Bawang Putih',
                                amount: '1 sudu teh'
                            },
                            {
                                item: 'Serbuk Bawang Merah',
                                amount: '1 sudu teh'
                            },
                            {
                                item: 'Cili Cayenne',
                                amount: '1/2 sudu teh (pilihan)'
                            },
                            {
                                item: 'Garam',
                                amount: '1 sudu teh'
                            },
                            {
                                item: 'Minyak Sayuran',
                                amount: '1 sudu besar'
                            }
                        ],
                        instructions: [
                            'Panaskan minyak dalam periuk besar di atas api sederhana tinggi. Goreng daging lembu kisar sehingga perang, pecah-pecahkan, kemudian toskan lemak berlebihan.',
                            'Gaulkan serbuk cili, jintan manis, serbuk bawang putih, serbuk bawang merah, cili cayenne, dan garam. Masak selama 1 minit sehingga wangi.',
                            'Masukkan stok daging lembu dan pes tomato. Didihkan, kemudian kecilkan api.',
                            'Tutup dan reneh selama 30-40 minit, kacau sekali-sekala, biarkan rasa sebati.',
                            'Hidangkan panas dengan topping kegemaran anda seperti keju, bawang, atau roti jagung.'
                        ]
                    },
            hi: {
                title: 'टेक्सास चिली',
                description: 'प्रामाणिक टेक्सास चिली का शानदार स्वाद अनुभव करें, एक हार्दिक, मजबूत स्टू जिसमें कोमल बीफ और बोल्ड मसालों का एक सिम्फनी है। यह सिर्फ चिली नहीं है; यह लोन स्टार राज्य के दिल की एक पाक यात्रा है, जो गर्माहट, स्वाद और शुद्ध संतुष्टि का वादा करती है।',
                ingredients: [{ item: 'कीमा बनाया हुआ बीफ (80/20)', amount: '1.5 पाउंड' }, { item: 'बीफ शोरबा', amount: '2 कप' }, { item: 'टमाटर का पेस्ट', amount: '2 बड़े चम्मच' }, { item: 'चिली पाउडर', amount: '3 बड़े चम्मच' }, { item: 'जीरा', amount: '1 बड़ा चम्मच' }, { item: 'लहसुन पाउडर', amount: '1 छोटा चम्मच' }, { item: 'प्याज पाउडर', amount: '1 छोटा चम्मच' }, { item: 'लाल मिर्च पाउडर', amount: '1/2 छोटा चम्मच (वैकल्पिक)' }, { item: 'नमक', amount: '1 छोटा चम्मच' }, { item: 'वनस्पति तेल', amount: '1 बड़ा चम्मच' }],
                instructions: ['एक बड़े बर्तन में मध्यम-तेज आंच पर तेल गरम करें। कीमा बनाया हुआ बीफ भूनें, इसे तोड़ते हुए, फिर अतिरिक्त वसा निकाल दें।', 'चिली पाउडर, जीरा, लहसुन पाउडर, प्याज पाउडर, लाल मिर्च और नमक मिलाएं। सुगंधित होने तक 1 मिनट तक पकाएं।', 'बीफ शोरबा और टमाटर का पेस्ट डालें। उबाल आने दें, फिर आंच धीमी कर दें।', 'ढककर 30-40 मिनट तक धीमी आंच पर पकाएं, कभी-कभी हिलाते रहें, ताकि स्वाद मिल जाएं।', 'पनीर, प्याज या कॉर्नब्रेड जैसे अपने पसंदीदा टॉपिंग के साथ गरमागरम परोसें।']
            },
            bn: {
                title: 'টেক্সাস চিলি',
                description: 'খাঁটি টেক্সাস চিলির কিংবদন্তি স্বাদ উপভোগ করুন, একটি হৃদয়গ্রাহী, শক্তিশালী স্টু যা নরম গরুর মাংস এবং সাহসী মশলার সিম্ফনিতে ভরা। এটি কেবল চিলি নয়; এটি লোন স্টার স্টেটের হৃদয়ে একটি রন্ধনসম্পর্কীয় যাত্রা, যা উষ্ণতা, স্বাদ এবং বিশুদ্ধ তৃপ্তির প্রতিশ্রুতি দেয়।',
                ingredients: [{ item: 'কিমা করা গরুর মাংস (80/20)', amount: '1.5 পাউন্ড' }, { item: 'গরুর মাংসের ঝোল', amount: '2 কাপ' }, { item: 'টমেটো পেস্ট', amount: '2 টেবিল চামচ' }, { item: 'চিলি পাউডার', amount: '3 টেবিল চামচ' }, { item: 'জিরা', amount: '1 টেবিল চামচ' }, { item: 'রসুন গুঁড়ো', amount: '1 চা চামচ' }, { item: 'পেঁয়াজ গুঁড়ো', amount: '1 চা চামচ' }, { item: 'কায়েন গোলমরিচ', amount: '1/2 চা চামচ (ঐচ্ছিক)' }, { item: 'লবণ', amount: '1 চা চামচ' }, { item: 'উদ্ভিজ্জ তেল', amount: '1 টেবিল চামচ' }],
                instructions: ['একটি বড় পাত্রে মাঝারি-উচ্চ আঁচে তেল গরম করুন। কিমা করা গরুর মাংস বাদামী করুন, ভেঙে দিন, তারপর অতিরিক্ত চর্বি ঝরিয়ে নিন।', 'চিলি পাউডার, জিরা, রসুন গুঁড়ো, পেঁয়াজ গুঁড়ো, কায়েন এবং লবণ মিশিয়ে দিন। সুগন্ধি না হওয়া পর্যন্ত 1 মিনিট রান্না করুন।', 'গরুর মাংসের ঝোল এবং টমেটো পেস্ট যোগ করুন। ফুটিয়ে নিন, তারপর আঁচ কমিয়ে দিন।', 'ঢেকে 30-40 মিনিট ধরে অল্প আঁচে রান্না করুন, মাঝে মাঝে নাড়ুন, যাতে স্বাদগুলি মিশে যায়।', 'পনির, পেঁয়াজ বা কর্নব্রেডের মতো আপনার পছন্দের টপিং সহ গরম গরম পরিবেশন করুন।']
            },
            mr: {
                title: 'टेक्सास चिली',
                description: 'अस्सल टेक्सास चिलीचा पौराणिक स्वाद अनुभवा, एक हार्दिक, मजबूत स्टू जो कोमल बीफ आणि मसालेदार चवींनी भरलेला आहे. हे फक्त चिली नाही; ही लोन स्टार राज्याच्या हृदयाची एक पाककृती यात्रा आहे, जी उबदारपणा, चव आणि शुद्ध समाधानाचे वचन देते.',
                ingredients: [{ item: 'ग्राउंड बीफ (80/20)', amount: '1.5 पाउंड' }, { item: 'बीफ ब्रोथ', amount: '2 कप' }, { item: 'टोमॅटो पेस्ट', amount: '2 चमचे' }, { item: 'चिली पावडर', amount: '3 चमचे' }, { item: 'जिरे', amount: '1 चमचा' }, { item: 'लसूण पावडर', amount: '1 छोटा चमचा' }, { item: 'कांदा पावडर', amount: '1 छोटा चमचा' }, { item: 'कॅयेन मिरची', amount: '1/2 छोटा चमचा (ऐच्छिक)' }, { item: 'मीठ', amount: '1 छोटा चमचा' }, { item: 'वनस्पती तेल', amount: '1 चमचा' }],
                instructions: ['एका मोठ्या भांड्यात मध्यम-उच्च आचेवर तेल गरम करा. ग्राउंड बीफ तपकिरी करा, ते तोडून घ्या, नंतर अतिरिक्त चरबी काढून टाका.', 'चिली पावडर, जिरे, लसूण पावडर, कांदा पावडर, कॅयेन आणि मीठ घालून ढवळा. सुगंध येईपर्यंत 1 मिनिट शिजवा.', 'बीफ ब्रोथ आणि टोमॅटो पेस्ट घाला. उकळी येऊ द्या, नंतर आंच कमी करा.', 'झाकून 30-40 मिनिटे मंद आचेवर शिजवा, अधूनमधून ढवळत रहा, जेणेकरून चव मिसळतील।', 'चीज, कांदे किंवा कॉर्नब्रेड सारख्या तुमच्या आवडत्या टॉपिंग्जसह गरम सर्व्ह करा।']
            },
            te: {
                title: 'టెక్సాస్ చిల్లి',
                description: 'ప్రామాణికమైన టెక్సాస్ చిల్లి యొక్క పురాణ రుచిని అనుభవించండి, ఇది మృదువైన గొడ్డు మాంసం మరియు బోల్డ్ మసాలాల సింఫనీతో నిండిన హృదయపూర్వక, బలమైన స్టూ. ఇది కేవలం చిల్లి కాదు; ఇది లోన్ స్టార్ రాష్ట్రం యొక్క హృదయానికి ఒక పాక ప్రయాణం, ఇది వెచ్చదనం, రుచి మరియు స్వచ్ఛమైన సంతృప్తిని వాగ్దానం చేస్తుంది.',
                ingredients: [{ item: 'గ్రౌండ్ బీఫ్ (80/20)', amount: '1.5 పౌండ్లు' }, { item: 'బీఫ్ బ్రోత్', amount: '2 కప్పులు' }, { item: 'టొమాటో పేస్ట్', amount: '2 టేబుల్ స్పూన్లు' }, { item: 'చిల్లి పౌడర్', amount: '3 టేబుల్ స్పూన్లు' }, { item: 'జీలకర్ర', amount: '1 టేబుల్ స్పూన్' }, { item: 'వెల్లుల్లి పౌడర్', amount: '1 టీస్పూన్' }, { item: 'ఉల్లిపాయ పౌడర్', amount: '1 టీస్పూన్' }, { item: 'కాయెన్ పెప్పర్', amount: '1/2 టీస్పూన్ (ఐచ్ఛికం)' }, { item: 'ఉప్పు', amount: '1 టీస్పూన్' }, { item: 'వనస్పతి నూనె', amount: '1 టేబుల్ స్పూన్' }],
                instructions: ['ఒక పెద్ద కుండలో మధ్యస్థ-అధిక వేడి మీద నూనె వేడి చేయండి. గ్రౌండ్ బీఫ్‌ను బ్రౌన్ చేయండి, దానిని విడదీయండి, ఆపై అదనపు కొవ్వును తీసివేయండి.', 'చిల్లి పౌడర్, జీలకర్ర, వెల్లుల్లి పౌడర్, ఉల్లిపాయ పౌడర్, కాయెన్ మరియు ఉప్పు కలపండి. సువాసన వచ్చేవరకు 1 నిమిషం ఉడికించాలి.', 'బీఫ్ బ్రోత్ మరియు టొమాటో పేస్ట్ వేయండి. మరిగించి, ఆపై మంటను తగ్గించండి.', 'మూతపెట్టి 30-40 నిమిషాలు తక్కువ మంటపై ఉడికించాలి, రుచులు కలపడానికి అప్పుడప్పుడు కదిలించండి.', 'చీజ్, ఉల్లిపాయలు లేదా కార్న్‌బ్రెడ్ వంటి మీకు ఇష్టమైన టాపింగ్స్‌తో వేడిగా వడ్డించండి.']
            },
            ta: {
                title: 'டெக்சாஸ் சில்லி',
                description: 'உண்மையான டெக்சாஸ் சில்லியின் புகழ்பெற்ற சுவையை அனுபவியுங்கள், இது மென்மையான மாட்டிறைச்சி மற்றும் தைரியமான மசாலாப் பொருட்களின் சிம்பொனியால் நிரப்பப்பட்ட ஒரு இதமான, வலுவான ஸ்டூ. இது வெறும் சில்லி அல்ல; இது லோன் ஸ்டார் மாநிலத்தின் இதயத்திற்கு ஒரு சமையல் பயணம், இது அரவணைப்பு, சுவை மற்றும் தூய திருப்தியை உறுதியளிக்கிறது.',
                ingredients: [{ item: 'அரைத்த மாட்டிறைச்சி (80/20)', amount: '1.5 பவுண்டுகள்' }, { item: 'மாட்டிறைச்சி குழம்பு', amount: '2 கப்' }, { item: 'தக்காளி பேஸ்ட்', amount: '2 தேக்கரண்டி' }, { item: 'மிளகாய் தூள்', amount: '3 தேக்கரண்டி' }, { item: 'சீரகம்', amount: '1 தேக்கரண்டி' }, { item: 'பூண்டு தூள்', amount: '1 தேக்கரண்டி' }, { item: 'வெங்காய தூள்', amount: '1 தேக்கரண்டி' }, { item: 'கயேன் மிளகு', amount: '1/2 தேக்கரண்டி (விரும்பினால்)' }, { item: 'உப்பு', amount: '1 தேக்கரண்டி' }, { item: 'காய்கறி எண்ணெய்', amount: '1 தேக்கரண்டி' }],
                instructions: ['ஒரு பெரிய பாத்திரத்தில் நடுத்தர-அதிக வெப்பத்தில் எண்ணெய் சூடாக்கவும். அரைத்த மாட்டிறைச்சியை பழுப்பு நிறமாக வறுக்கவும், அதை உடைத்து, பின்னர் அதிகப்படியான கொழுப்பை வடிகட்டவும்.', 'மிளகாய் தூள், சீரகம், பூண்டு தூள், வெங்காய தூள், கயேன் மற்றும் உப்பு சேர்த்து கிளறவும். மணம் வரும் வரை 1 நிமிடம் சமைக்கவும்.', 'மாட்டிறைச்சி குழம்பு மற்றும் தக்காளி பேஸ்ட் சேர்க்கவும். ஒரு கொதி நிலைக்கு கொண்டு வந்து, பின்னர் வெப்பத்தை குறைக்கவும்.', 'மூடி வைத்து 30-40 நிமிடங்கள் குறைந்த வெப்பத்தில் சமைக்கவும், சுவைகள் கலக்க அவ்வப்போது கிளறவும்.', 'சீஸ், வெங்காயம் அல்லது சோள ரொட்டி போன்ற உங்களுக்கு பிடித்த டாப்பிங்ஸுடன் சூடாக பரிமாறவும்.']
            }
        }
    }
,
    {
        id: '2026-05-15',
        title: 'Fish Head Curry',
        description: 'Dive into the heart of Singaporean cuisine with this legendary Fish Head Curry! A symphony of rich, spicy, and tangy flavors, this dish features a succulent fish head simmered in a vibrant coconut milk gravy with an array of fresh vegetables. It\'s a culinary masterpiece that promises an unforgettable experience. Ready to create this authentic taste sensation in your own home?',
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
            'Heat oil in a large pot, sauté curry paste and curry leaves until fragrant.',
            'Add tamarind paste, water, and coconut milk; bring to a gentle simmer.',
            'Carefully add fish head, okra, eggplant, and tomatoes. Cook for 15-20 minutes until fish is tender and vegetables are cooked through.',
            'Season with fish sauce to taste. Serve hot with steamed rice.'
        ],
        tags: ['Singaporean', 'Dinner', 'Non-Vegetarian'],
        translations: {
            'zh-CN': {
                        title: '鱼头咖喱',
                        description: '深入新加坡美食的核心，品尝这道传奇的鱼头咖喱！浓郁、辛辣、酸爽的风味交织成一曲交响乐，这道菜以鲜嫩的鱼头为主料，在浓郁的椰奶肉汁中与各种新鲜蔬菜一同慢炖。这是一道烹饪杰作，承诺带来一次难忘的体验。准备好在家中创造这种地道的味觉盛宴了吗？',
                        ingredients: [
                            {
                                item: '红鲷鱼头，对半切开',
                                amount: '1个 (约1.5公斤)'
                            },
                            {
                                item: '新加坡鱼头咖喱酱',
                                amount: '150克'
                            },
                            {
                                item: '浓椰浆',
                                amount: '400毫升'
                            },
                            {
                                item: '罗望子酱',
                                amount: '2汤匙'
                            },
                            {
                                item: '水',
                                amount: '500毫升'
                            },
                            {
                                item: '秋葵（羊角豆），修剪过',
                                amount: '8-10根'
                            },
                            {
                                item: '茄子，切块',
                                amount: '1个中等大小'
                            },
                            {
                                item: '番茄，切四瓣',
                                amount: '2个中等大小'
                            },
                            {
                                item: '鱼露',
                                amount: '1-2汤匙 (依口味)'
                            },
                            {
                                item: '咖喱叶',
                                amount: '1小枝'
                            }
                        ],
                        instructions: [
                            '在一个大锅中加热油，炒香咖喱酱和咖喱叶。',
                            '加入罗望子酱、水和椰奶；小火慢炖。',
                            '小心地加入鱼头、秋葵、茄子和番茄。煮15-20分钟，直到鱼肉变嫩，蔬菜煮熟。',
                            '用鱼露调味。搭配热腾腾的米饭享用。'
                        ]
                    },
            ms: {
                        title: 'Kari Kepala Ikan',
                        description: 'Selami inti masakan Singapura dengan Kari Kepala Ikan yang legenda ini! Simfoni rasa yang kaya, pedas, dan masam, hidangan ini menampilkan kepala ikan yang empuk direneh dalam kuah santan yang pekat dengan pelbagai sayur-sayuran segar. Ia adalah mahakarya kulinari yang menjanjikan pengalaman yang tidak dapat dilupakan. Bersedia untuk mencipta sensasi rasa asli ini di rumah anda sendiri?',
                        ingredients: [
                            {
                                item: 'Kepala Ikan Merah, dibelah dua',
                                amount: '1 (anggaran 1.5 kg)'
                            },
                            {
                                item: 'Pes Kari Kepala Ikan Singapura',
                                amount: '150g'
                            },
                            {
                                item: 'Santan pekat',
                                amount: '400ml'
                            },
                            {
                                item: 'Pes Asam Jawa',
                                amount: '2 sudu besar'
                            },
                            {
                                item: 'Air',
                                amount: '500ml'
                            },
                            {
                                item: 'Bendi (jari wanita), dipotong hujungnya',
                                amount: '8-10 biji'
                            },
                            {
                                item: 'Terung, dipotong baji',
                                amount: '1 biji sederhana'
                            },
                            {
                                item: 'Tomato, dipotong empat',
                                amount: '2 biji sederhana'
                            },
                            {
                                item: 'Sos Ikan',
                                amount: '1-2 sudu besar (secukup rasa)'
                            },
                            {
                                item: 'Daun Kari',
                                amount: '1 tangkai'
                            }
                        ],
                        instructions: [
                            'Panaskan minyak dalam periuk besar, tumis pes kari dan daun kari sehingga wangi.',
                            'Masukkan pes asam jawa, air, dan santan; biarkan mendidih perlahan.',
                            'Masukkan kepala ikan, bendi, terung, dan tomato dengan berhati-hati. Masak selama 15-20 minit sehingga ikan empuk dan sayur-sayuran masak.',
                            'Perasakan dengan sos ikan secukup rasa. Hidangkan panas dengan nasi kukus.'
                        ]
                    },
            hi: {
                title: 'फिश हेड करी',
                description: 'इस पौराणिक फिश हेड करी के साथ सिंगापुर के व्यंजनों के दिल में गोता लगाएँ! समृद्ध, मसालेदार और तीखे स्वादों का एक सामंजस्य, यह व्यंजन ताज़ी सब्जियों के साथ एक जीवंत नारियल के दूध की ग्रेवी में उबाले गए रसीले मछली के सिर को प्रस्तुत करता है। यह एक पाक कला का उत्कृष्ट नमूना है जो एक अविस्मरणीय अनुभव का वादा करता है। अपने घर में इस प्रामाणिक स्वाद को बनाने के लिए तैयार हैं?',
                ingredients: [{ item: 'रेड स्नैपर मछली का सिर, आधा', amount: '1 (लगभग 1.5 किग्रा)' }, { item: 'सिंगापुरियन फिश हेड करी पेस्ट', amount: '150 ग्राम' }, { item: 'नारियल का दूध (गाढ़ा)', amount: '400 मिली' }, { item: 'इमली का पेस्ट', amount: '2 बड़े चम्मच' }, { item: 'पानी', amount: '500 मिली' }, { item: 'भिंडी (लेडी फिंगर्स), कटी हुई', amount: '8-10 नग' }, { item: 'बैंगन, फांकों में कटा हुआ', amount: '1 मध्यम' }, { item: 'टमाटर, चौथाई कटे हुए', amount: '2 मध्यम' }, { item: 'फिश सॉस', amount: '1-2 बड़े चम्मच (स्वादानुसार)' }, { item: 'कड़ी पत्ता', amount: '1 टहनी' }],
                instructions: ['एक बड़े बर्तन में तेल गरम करें, करी पेस्ट और कड़ी पत्ते को सुगंधित होने तक भूनें।', 'इमली का पेस्ट, पानी और नारियल का दूध डालें; धीमी आंच पर उबाल आने दें।', 'ध्यान से मछली का सिर, भिंडी, बैंगन और टमाटर डालें। 15-20 मिनट तक पकाएं जब तक मछली नरम न हो जाए और सब्जियां पक न जाएं।', 'स्वादानुसार फिश सॉस डालें। उबले हुए चावल के साथ गरमागरम परोसें।']
            },
            bn: {
                title: 'ফিশ হেড কারি',
                description: 'এই কিংবদন্তী ফিশ হেড কারি দিয়ে সিঙ্গাপুরের রন্ধনপ্রণালীর হৃদয়ে ডুব দিন! সমৃদ্ধ, মশলাদার এবং টক স্বাদের এক সিম্ফনি, এই পদটি তাজা সবজির সাথে একটি প্রাণবন্ত নারকেলের দুধের গ্রেভিতে সিদ্ধ করা একটি রসালো মাছের মাথা দিয়ে তৈরি। এটি একটি রন্ধনশিল্পের মাস্টারপিস যা একটি অবিস্মরণীয় অভিজ্ঞতার প্রতিশ্রুতি দেয়। আপনার নিজের বাড়িতে এই খাঁটি স্বাদের অনুভূতি তৈরি করতে প্রস্তুত?',
                ingredients: [{ item: 'রেড স্ন্যাপার মাছের মাথা, অর্ধেক করা', amount: '1 (প্রায় 1.5 কেজি)' }, { item: 'সিঙ্গাপুরিয়ান ফিশ হেড কারি পেস্ট', amount: '150 গ্রাম' }, { item: 'নারকেলের দুধ (ঘন)', amount: '400 মিলি' }, { item: 'তেঁতুলের পেস্ট', amount: '2 টেবিল চামচ' }, { item: 'জল', amount: '500 মিলি' }, { item: 'ঢেঁড়স (লেডিজ ফিঙ্গার), ছাঁটা', amount: '8-10 পিস' }, { item: 'বেগুন, ফালি করে কাটা', amount: '1 মাঝারি' }, { item: 'টমেটো, চার ভাগ করা', amount: '2 মাঝারি' }, { item: 'ফিশ সস', amount: '1-2 টেবিল চামচ (স্বাদমতো)' }, { item: 'কারি পাতা', amount: '1 ডাল' }],
                instructions: ['একটি বড় পাত্রে তেল গরম করুন, কারি পেস্ট এবং কারি পাতা সুগন্ধি না হওয়া পর্যন্ত ভাজুন।', 'তেঁতুলের পেস্ট, জল এবং নারকেলের দুধ যোগ করুন; হালকা আঁচে ফুটিয়ে নিন।', 'সাবধানে মাছের মাথা, ঢেঁড়স, বেগুন এবং টমেটো যোগ করুন। 15-20 মিনিট রান্না করুন যতক্ষণ না মাছ নরম হয় এবং সবজি সেদ্ধ হয়।', 'স্বাদমতো ফিশ সস দিয়ে সিজন করুন। গরম ভাতের সাথে গরম গরম পরিবেশন করুন।']
            },
            mr: {
                title: 'फिश हेड करी',
                description: 'या पौराणिक फिश हेड करीने सिंगापूरच्या पाककृतीच्या हृदयात डुबकी मारा! समृद्ध, मसालेदार आणि आंबट चवींची एक सिम्फनी, हा पदार्थ ताजे भाज्यांसह एका दोलायमान नारळाच्या दुधाच्या ग्रेव्हीमध्ये शिजवलेले रसाळ माशाचे डोके वैशिष्ट्यीकृत करतो. ही एक पाककृतीची उत्कृष्ट कलाकृती आहे जी अविस्मरणीय अनुभवाचे वचन देते. आपल्या घरात ही अस्सल चवदार संवेदना तयार करण्यास तयार आहात?',
                ingredients: [{ item: 'रेड स्नॅपर माशाचे डोके, अर्धे केलेले', amount: '1 (सुमारे 1.5 किलो)' }, { item: 'सिंगापूरियन फिश हेड करी पेस्ट', amount: '150 ग्रॅम' }, { item: 'नारळाचे दूध (घट्ट)', amount: '400 मिली' }, { item: 'चिंचेचा लगदा', amount: '2 चमचे' }, { item: 'पाणी', amount: '500 मिली' }, { item: 'भेंडी, कापलेली', amount: '8-10 नग' }, { item: 'वांगे, फोडींमध्ये कापलेले', amount: '1 मध्यम' }, { item: 'टोमॅटो, चार तुकड्यांमध्ये कापलेले', amount: '2 मध्यम' }, { item: 'फिश सॉस', amount: '1-2 चमचे (चवीनुसार)' }, { item: 'कढीपत्ता', amount: '1 डहाळी' }],
                instructions: ['एका मोठ्या भांड्यात तेल गरम करा, करी पेस्ट आणि कढीपत्ता सुगंधित होईपर्यंत परतून घ्या.', 'चिंचेचा लगदा, पाणी आणि नारळाचे दूध घाला; हळूवारपणे उकळी येऊ द्या.', 'काळजीपूर्वक माशाचे डोके, भेंडी, वांगे आणि टोमॅटो घाला. मासे मऊ होईपर्यंत आणि भाज्या शिजेपर्यंत 15-20 मिनिटे शिजवा.', 'चवीनुसार फिश सॉसने सीझन करा. गरम भातासोबत गरमागरम सर्व्ह करा.']
            },
            te: {
                title: 'ఫిష్ హెడ్ కర్రీ',
                description: 'ఈ పురాణ ఫిష్ హెడ్ కర్రీతో సింగపూర్ వంటకాల హృదయంలోకి ప్రవేశించండి! గొప్ప, కారంగా మరియు పుల్లని రుచుల సింఫనీ, ఈ వంటకం తాజా కూరగాయలతో కూడిన శక్తివంతమైన కొబ్బరి పాలు గ్రేవీలో ఉడికించిన జ్యుసి చేపల తలను కలిగి ఉంటుంది. ఇది మరపురాని అనుభవాన్ని వాగ్దానం చేసే పాక కళాఖండం. మీ స్వంత ఇంట్లో ఈ ప్రామాణికమైన రుచి సంచలనాన్ని సృష్టించడానికి సిద్ధంగా ఉన్నారా?',
                ingredients: [{ item: 'రెడ్ స్నాపర్ చేప తల, సగానికి కట్ చేయబడింది', amount: '1 (సుమారు 1.5 కిలోలు)' }, { item: 'సింగపూర్ ఫిష్ హెడ్ కర్రీ పేస్ట్', amount: '150 గ్రా' }, { item: 'కొబ్బరి పాలు (చిక్కటి)', amount: '400 మి.లీ' }, { item: 'చింతపండు పేస్ట్', amount: '2 టేబుల్ స్పూన్లు' }, { item: 'నీరు', amount: '500 మి.లీ' }, { item: 'బెండకాయలు, కత్తిరించినవి', amount: '8-10 ముక్కలు' }, { item: 'వంకాయ, ముక్కలుగా కట్ చేయబడింది', amount: '1 మధ్యస్థం' }, { item: 'టొమాటోలు, పావు వంతు కట్ చేయబడినవి', amount: '2 మధ్యస్థం' }, { item: 'ఫిష్ సాస్', amount: '1-2 టేబుల్ స్పూన్లు (రుచికి)' }, { item: 'కరివేపాకు', amount: '1 రెమ్మ' }],
                instructions: ['ఒక పెద్ద కుండలో నూనె వేడి చేసి, కర్రీ పేస్ట్ మరియు కరివేపాకు సువాసన వచ్చేవరకు వేయించాలి.', 'చింతపండు పేస్ట్, నీరు మరియు కొబ్బరి పాలు వేసి; నెమ్మదిగా ఉడకనివ్వాలి.', 'జాగ్రత్తగా చేప తల, బెండకాయలు, వంకాయ మరియు టొమాటోలు వేయాలి. చేప మెత్తగా అయ్యే వరకు మరియు కూరగాయలు ఉడికే వరకు 15-20 నిమిషాలు ఉడికించాలి.', 'రుచికి సరిపడా ఫిష్ సాస్ వేసి సర్వ్ చేయాలి. ఉడికించిన అన్నంతో వేడిగా వడ్డించండి.']
            },
            ta: {
                title: 'மீன் தலை கறி',
                description: 'இந்த புகழ்பெற்ற மீன் தலை கறியுடன் சிங்கப்பூர் சமையலின் இதயத்தில் மூழ்குங்கள்! செழுமையான, காரமான மற்றும் புளிப்பு சுவைகளின் ஒரு சிம்பொனி, இந்த உணவு புதிய காய்கறிகளுடன் ஒரு துடிப்பான தேங்காய் பால் கிரேவியில் சமைக்கப்பட்ட ஒரு சுவையான மீன் தலையை கொண்டுள்ளது. இது ஒரு மறக்க முடியாத அனுபவத்தை உறுதியளிக்கும் ஒரு சமையல் தலைசிறந்த படைப்பு. உங்கள் சொந்த வீட்டில் இந்த உண்மையான சுவை உணர்வை உருவாக்க தயாரா?',
                ingredients: [{ item: 'சிவப்பு ஸ்னாப்பர் மீன் தலை, பாதியாக வெட்டப்பட்டது', amount: '1 (தோராயமாக 1.5 கிலோ)' }, { item: 'சிங்கப்பூர் மீன் தலை கறி பேஸ்ட்', amount: '150 கிராம்' }, { item: 'தேங்காய் பால் (தடித்தது)', amount: '400 மிலி' }, { item: 'புளி பேஸ்ட்', amount: '2 தேக்கரண்டி' }, { item: 'தண்ணீர்', amount: '500 மிலி' }, { item: 'வெண்டைக்காய், நறுக்கப்பட்டது', amount: '8-10 துண்டுகள்' }, { item: 'கத்தரிக்காய், துண்டுகளாக வெட்டப்பட்டது', amount: '1 நடுத்தர' }, { item: 'தக்காளி, கால் பாகமாக வெட்டப்பட்டது', amount: '2 நடுத்தர' }, { item: 'மீன் சாஸ்', amount: '1-2 தேக்கரண்டி (சுவைக்கு)' }, { item: 'கறிவேப்பிலை', amount: '1 கொத்து' }],
                instructions: ['ஒரு பெரிய பாத்திரத்தில் எண்ணெய் சூடாக்கி, கறி பேஸ்ட் மற்றும் கறிவேப்பிலையை மணம் வரும் வரை வதக்கவும்.', 'புளி பேஸ்ட், தண்ணீர் மற்றும் தேங்காய் பால் சேர்த்து; மெதுவாக கொதிக்க விடவும்.', 'மீன் தலை, வெண்டைக்காய், கத்தரிக்காய் மற்றும் தக்காளியை கவனமாக சேர்க்கவும். மீன் மென்மையாகும் வரை மற்றும் காய்கறிகள் சமைக்கும் வரை 15-20 நிமிடங்கள் சமைக்கவும்.', 'சுவைக்கு ஏற்ப மீன் சாஸ் சேர்க்கவும். சூடான சாதத்துடன் சூடாக பரிமாறவும்.']
            }
        }
    }
,
    {
        id: '2026-05-16',
        title: 'Ful Medames',
        description: 'Experience the soulful embrace of Ethiopian Ful Medames, a hearty and aromatic fava bean stew that awakens your senses. Simmered to perfection with vibrant spices, fresh herbs, and a zesty lemon kick, it\'s a truly satisfying dish. Prepare to be transported to the bustling markets of Addis Ababa with every delicious spoonful – why wait, let\'s cook it today!',
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
            'Heat olive oil in a pan, sauté red onion until softened, then add garlic, jalapeño, and tomatoes, cooking for 5 minutes.',
            'Stir in cumin, salt, and pepper, then add the drained fava beans and a splash of water.',
            'Gently mash about half of the beans with a fork or potato masher, then simmer for 15-20 minutes, allowing flavors to meld.',
            'Stir in fresh lemon juice. Serve hot, garnished with fresh parsley or cilantro, and optionally with hard-boiled eggs and a drizzle of olive oil.'
        ],
        tags: ['Ethiopian', 'Vegetarian', 'Breakfast', 'Brunch', 'Dinner'],
        translations: {
            'zh-CN': {
                        title: '埃塞俄比亚炖蚕豆 (Ful Medames)',
                        description: '体验埃塞俄比亚炖蚕豆（Ful Medames）的灵魂拥抱，这是一种丰盛而芳香的蚕豆炖菜，能唤醒您的感官。用鲜活的香料、新鲜的香草和清新的柠檬汁炖煮至完美，这是一道真正令人满足的菜肴。准备好在每一勺美味中被带到亚的斯亚贝巴熙熙攘攘的市场——何不今天就动手烹饪呢！',
                        ingredients: [
                            {
                                item: '蚕豆（罐装，沥干并冲洗）',
                                amount: '2罐 (每罐15盎司)'
                            },
                            {
                                item: '红洋葱（切碎）',
                                amount: '1个中等大小'
                            },
                            {
                                item: '番茄（切丁）',
                                amount: '2个中等大小'
                            },
                            {
                                item: '大蒜（切末）',
                                amount: '3瓣'
                            },
                            {
                                item: '墨西哥辣椒或青辣椒（切碎）',
                                amount: '1个 (可选，用于增加辣度)'
                            },
                            {
                                item: '柠檬汁（鲜榨）',
                                amount: '2汤匙'
                            },
                            {
                                item: '橄榄油',
                                amount: '3汤匙'
                            },
                            {
                                item: '孜然粉',
                                amount: '1茶匙'
                            },
                            {
                                item: '盐',
                                amount: '适量'
                            },
                            {
                                item: '黑胡椒',
                                amount: '适量'
                            }
                        ],
                        instructions: [
                            '在锅中加热橄榄油，炒红洋葱至软，然后加入大蒜、墨西哥辣椒和番茄，煮5分钟。',
                            '拌入孜然、盐和胡椒粉，然后加入沥干的蚕豆和少量水。',
                            '用叉子或压土豆器轻轻捣碎大约一半的蚕豆，然后小火慢炖15-20分钟，让味道充分融合。',
                            '拌入新鲜柠檬汁。趁热享用，用新鲜欧芹或香菜装饰，可选配煮鸡蛋和少许橄榄油。'
                        ]
                    },
            ms: {
                        title: 'Ful Medames (Rebusan Kacang Fava Ethiopia)',
                        description: 'Alami kehangatan Ful Medames Ethiopia, rebusan kacang fava yang mengenyangkan dan beraroma yang membangkitkan deria anda. Direneh sempurna dengan rempah-ratus yang bersemangat, herba segar, dan sentuhan lemon yang menyegarkan, ia adalah hidangan yang benar-benar memuaskan. Bersedia untuk dibawa ke pasar-pasar sibuk Addis Ababa dengan setiap suapan yang lazat – mengapa tunggu lagi, mari masak hari ini!',
                        ingredients: [
                            {
                                item: 'Kacang Fava (dalam tin, ditos dan dibilas)',
                                amount: '2 tin (setiap satu 15 oz)'
                            },
                            {
                                item: 'Bawang Merah (dicincang halus)',
                                amount: '1 biji sederhana'
                            },
                            {
                                item: 'Tomato (dipotong dadu)',
                                amount: '2 biji sederhana'
                            },
                            {
                                item: 'Bawang Putih (dicincang)',
                                amount: '3 ulas'
                            },
                            {
                                item: 'Cili Jalapeño atau Cili Hijau (dicincang halus)',
                                amount: '1 biji (pilihan, untuk kepedasan)'
                            },
                            {
                                item: 'Jus Lemon (baru diperah)',
                                amount: '2 sudu besar'
                            },
                            {
                                item: 'Minyak Zaitun',
                                amount: '3 sudu besar'
                            },
                            {
                                item: 'Serbuk Jintan Putih',
                                amount: '1 sudu kecil'
                            },
                            {
                                item: 'Garam',
                                amount: 'Secukup rasa'
                            },
                            {
                                item: 'Lada Hitam',
                                amount: 'Secukup rasa'
                            }
                        ],
                        instructions: [
                            'Panaskan minyak zaitun dalam kuali, tumis bawang merah sehingga lembut, kemudian masukkan bawang putih, cili jalapeño, dan tomato, masak selama 5 minit.',
                            'Masukkan jintan putih, garam, dan lada hitam, kemudian masukkan kacang fava yang telah ditos dan sedikit air.',
                            'Lenyekkan kira-kira separuh kacang dengan garpu atau pelenyek kentang, kemudian reneh selama 15-20 minit, biarkan rasa sebati.',
                            'Masukkan jus lemon segar. Hidangkan panas, dihiasi dengan pasli segar atau ketumbar, dan pilihan dengan telur rebus dan sedikit minyak zaitun.'
                        ]
                    },
            hi: {
                title: 'फुल मेदामेस',
                description: 'इथियोपियाई फुल मेदामेस के हार्दिक और सुगंधित फवा बीन स्टू का अनुभव करें जो आपकी इंद्रियों को जगाता है। जीवंत मसालों, ताजी जड़ी-बूटियों और एक तीखे नींबू के स्वाद के साथ पूर्णता तक उबाला गया, यह वास्तव में संतोषजनक व्यंजन है। हर स्वादिष्ट निवाले के साथ अदीस अबाबा के हलचल भरे बाजारों में ले जाने के लिए तैयार हो जाइए - इंतजार क्यों करें, आइए इसे आज ही पकाएं!',
                ingredients: [{ item: 'फवा बीन्स (डिब्बाबंद, सूखा और धोया हुआ)', amount: '2 डिब्बे (प्रत्येक 15 औंस)' }, { item: 'लाल प्याज (बारीक कटा हुआ)', amount: '1 मध्यम' }, { item: 'टमाटर (कटे हुए)', amount: '2 मध्यम' }, { item: 'लहसुन (बारीक कटा हुआ)', amount: '3 कलियाँ' }, { item: 'जलापेनो या हरी मिर्च (बारीक कटी हुई)', amount: '1 (वैकल्पिक, तीखेपन के लिए)' }, { item: 'नींबू का रस (ताजा निचोड़ा हुआ)', amount: '2 बड़े चम्मच' }, { item: 'जैतून का तेल', amount: '3 बड़े चम्मच' }, { item: 'जीरा पाउडर', amount: '1 छोटा चम्मच' }, { item: 'नमक', amount: 'स्वादानुसार' }, { item: 'काली मिर्च', amount: 'स्वादानुसार' }],
                instructions: ['एक पैन में जैतून का तेल गरम करें, लाल प्याज को नरम होने तक भूनें, फिर लहसुन, जलापेनो और टमाटर डालकर 5 मिनट तक पकाएं।', 'जीरा, नमक और काली मिर्च मिलाएं, फिर सूखे फवा बीन्स और थोड़ा पानी डालें।', 'लगभग आधे बीन्स को कांटे या आलू मैशर से धीरे से मैश करें, फिर 15-20 मिनट तक धीमी आंच पर पकाएं ताकि स्वाद मिल जाएं।', 'ताजा नींबू का रस मिलाएं। गरमागरम परोसें, ताजे अजमोद या धनिया से सजाएं, और वैकल्पिक रूप से उबले अंडे और जैतून के तेल की बूंदा बांदी के साथ।']
            },
            bn: {
                title: 'ফুল মেদেমস',
                description: 'ইথিওপিয়ান ফুল মেদেমসের হৃদয়গ্রাহী এবং সুগন্ধি ফাভা বিন স্টু-এর অভিজ্ঞতা নিন যা আপনার ইন্দ্রিয়গুলিকে জাগিয়ে তোলে। প্রাণবন্ত মশলা, তাজা ভেষজ এবং একটি সুস্বাদু লেবুর ছোঁয়ায় নিখুঁতভাবে সিদ্ধ করা, এটি সত্যিই একটি তৃপ্তিদায়ক খাবার। প্রতিটি সুস্বাদু চামচ দিয়ে আদ্দিস আবাবার ব্যস্ত বাজারে পৌঁছে যাওয়ার জন্য প্রস্তুত হন – কেন অপেক্ষা করবেন, আসুন আজই এটি রান্না করি!',
                ingredients: [{ item: 'ফাভা বিনস (ক্যানড, জল ঝরানো এবং ধোয়া)', amount: '2 ক্যান (প্রতিটি 15 আউন্স)' }, { item: 'লাল পেঁয়াজ (মিহি করে কাটা)', amount: '1 মাঝারি' }, { item: 'টমেটো (ডাইস করা)', amount: '2 মাঝারি' }, { item: 'রসুন (কুচি করা)', amount: '3 কোয়া' }, { item: 'জালপেনো বা কাঁচা লঙ্কা (মিহি করে কাটা)', amount: '1 (ঐচ্ছিক, ঝালের জন্য)' }, { item: 'লেবুর রস (তাজা নিংড়ানো)', amount: '2 টেবিল চামচ' }, { item: 'জলপাই তেল', amount: '3 টেবিল চামচ' }, { item: 'জিরা গুঁড়ো', amount: '1 চা চামচ' }, { item: 'লবণ', amount: 'স্বাদমতো' }, { item: 'কালো গোলমরিচ', amount: 'স্বাদমতো' }],
                instructions: ['একটি প্যানে জলপাই তেল গরম করুন, লাল পেঁয়াজ নরম হওয়া পর্যন্ত ভাজুন, তারপর রসুন, জালপেনো এবং টমেটো যোগ করে 5 মিনিট রান্না করুন।', 'জিরা, লবণ এবং গোলমরিচ মিশিয়ে নিন, তারপর জল ঝরানো ফাভা বিনস এবং সামান্য জল যোগ করুন।', 'একটি কাঁটাচামচ বা আলু ম্যাশার দিয়ে প্রায় অর্ধেক বিনস আলতো করে ম্যাশ করুন, তারপর 15-20 মিনিট ধরে সিদ্ধ করুন যাতে স্বাদগুলি মিশে যায়।', 'তাজা লেবুর রস মিশিয়ে নিন। গরম গরম পরিবেশন করুন, তাজা পার্সলে বা ধনে দিয়ে সাজিয়ে, এবং ঐচ্ছিকভাবে সেদ্ধ ডিম ও সামান্য জলপাই তেল ছড়িয়ে দিন।']
            },
            mr: {
                title: 'फुल मेदामेस',
                description: 'इथिओपियन फुल मेदामेसच्या हार्दिक आणि सुगंधी फवा बीन स्टूचा अनुभव घ्या जो तुमच्या इंद्रियांना जागृत करतो. चमकदार मसाले, ताजी औषधी वनस्पती आणि लिंबाच्या चवीने परिपूर्ण, हा खरोखरच समाधानकारक पदार्थ आहे. प्रत्येक स्वादिष्ट घासासोबत अदिस अबाबाच्या गजबजलेल्या बाजारात पोहोचण्यासाठी तयार व्हा – वाट कशाला पाहता, चला आजच शिजवूया!',
                ingredients: [{ item: 'फवा बीन्स (कॅन केलेला, पाणी काढून धुतलेला)', amount: '2 कॅन (प्रत्येकी 15 औंस)' }, { item: 'लाल कांदा (बारीक चिरलेला)', amount: '1 मध्यम' }, { item: 'टोमॅटो (चिरलेले)', amount: '2 मध्यम' }, { item: 'लसूण (बारीक चिरलेला)', amount: '3 पाकळ्या' }, { item: 'जलापेनो किंवा हिरवी मिरची (बारीक चिरलेली)', amount: '1 (ऐच्छिक, तिखटपणासाठी)' }, { item: 'लिंबाचा रस (ताजा पिळलेला)', amount: '2 मोठे चमचे' }, { item: 'ऑलिव्ह तेल', amount: '3 मोठे चमचे' }, { item: 'जिरे पूड', amount: '1 लहान चमचा' }, { item: 'मीठ', amount: 'चवीनुसार' }, { item: 'काळी मिरी', amount: 'चवीनुसार' }],
                instructions: ['एका पॅनमध्ये ऑलिव्ह तेल गरम करा, लाल कांदा मऊ होईपर्यंत परतून घ्या, नंतर लसूण, जलापेनो आणि टोमॅटो घालून 5 मिनिटे शिजवा.', 'जिरे, मीठ आणि मिरी मिसळा, नंतर पाणी काढलेले फवा बीन्स आणि थोडे पाणी घाला.', 'सुमारे अर्धे बीन्स काट्याने किंवा बटाटा मॅशरने हळूवारपणे मॅश करा, नंतर 15-20 मिनिटे मंद आचेवर शिजवा जेणेकरून चव मिसळतील.', 'ताजा लिंबाचा रस मिसळा. गरम सर्व्ह करा, ताजी पार्सली किंवा कोथिंबीरने सजवा, आणि ऐच्छिकपणे उकडलेली अंडी आणि ऑलिव्ह तेलाची धार घालून.']
            },
            te: {
                title: 'ఫుల్ మెడామెస్',
                description: 'ఇథియోపియన్ ఫుల్ మెడామెస్ యొక్క హృదయపూర్వక మరియు సుగంధ ఫావా బీన్ స్టూను అనుభవించండి, ఇది మీ ఇంద్రియాలను మేల్కొల్పుతుంది. శక్తివంతమైన మసాలాలు, తాజా మూలికలు మరియు నిమ్మ రుచితో పరిపూర్ణంగా ఉడికించిన ఇది నిజంగా సంతృప్తికరమైన వంటకం. ప్రతి రుచికరమైన స్పూన్‌తో అడిస్ అబాబాలోని సందడిగా ఉండే మార్కెట్‌లకు రవాణా చేయబడటానికి సిద్ధంగా ఉండండి – ఎందుకు వేచి ఉండాలి, ఈరోజే వండుదాం!',
                ingredients: [{ item: 'ఫావా బీన్స్ (డబ్బాలోవి, నీరు తీసి కడిగినవి)', amount: '2 డబ్బాలు (ప్రతి 15 ఔన్సులు)' }, { item: 'ఎర్ర ఉల్లిపాయ (సన్నగా తరిగినది)', amount: '1 మధ్యస్థం' }, { item: 'టొమాటోలు (ముక్కలుగా తరిగినవి)', amount: '2 మధ్యస్థం' }, { item: 'వెల్లుల్లి (ముక్కలుగా తరిగినది)', amount: '3 రెబ్బలు' }, { item: 'జలపెనో లేదా పచ్చిమిర్చి (సన్నగా తరిగినది)', amount: '1 (ఐచ్ఛికం, కారం కోసం)' }, { item: 'నిమ్మరసం (తాజాగా పిండినది)', amount: '2 టేబుల్ స్పూన్లు' }, { item: 'ఆలివ్ నూనె', amount: '3 టేబుల్ స్పూన్లు' }, { item: 'జీలకర్ర పొడి', amount: '1 టీస్పూన్' }, { item: 'ఉప్పు', amount: 'రుచికి సరిపడా' }, { item: 'నల్ల మిరియాల పొడి', amount: 'రుచికి సరిపడా' }],
                instructions: ['ఒక పాన్‌లో ఆలివ్ నూనె వేడి చేసి, ఎర్ర ఉల్లిపాయను మెత్తబడే వరకు వేయించి, ఆపై వెల్లుల్లి, జలపెనో మరియు టొమాటోలు వేసి 5 నిమిషాలు ఉడికించాలి.', 'జీలకర్ర, ఉప్పు మరియు మిరియాల పొడిని కలపండి, ఆపై నీరు తీసిన ఫావా బీన్స్ మరియు కొద్దిగా నీరు వేయండి.', 'సుమారు సగం బీన్స్‌ను ఫోర్క్ లేదా పొటాటో మాషర్‌తో మెత్తగా చేయండి, ఆపై రుచులు కలవడానికి 15-20 నిమిషాలు ఉడికించాలి.', 'తాజా నిమ్మరసం కలపండి. వేడిగా వడ్డించండి, తాజా పార్స్లీ లేదా కొత్తిమీరతో అలంకరించండి, మరియు ఐచ్ఛికంగా ఉడికించిన గుడ్లు మరియు కొద్దిగా ఆలివ్ నూనెతో.']
            },
            ta: {
                title: 'ஃபுல் மெடாமெஸ்',
                description: 'எத்தியோப்பியன் ஃபுல் மெடாமெஸின் இதமான மற்றும் நறுமணமிக்க ஃபாபா பீன் ஸ்டூவை அனுபவியுங்கள், இது உங்கள் உணர்வுகளைத் தூண்டும். துடிப்பான மசாலாப் பொருட்கள், புதிய மூலிகைகள் மற்றும் புளிப்பு எலுமிச்சை சுவையுடன் கச்சிதமாக சமைக்கப்பட்டது, இது உண்மையிலேயே திருப்திகரமான உணவாகும். ஒவ்வொரு சுவையான கரண்டியுடனும் அடிஸ் அபாபாவின் பரபரப்பான சந்தைகளுக்கு அழைத்துச் செல்லத் தயாராகுங்கள் – ஏன் காத்திருக்க வேண்டும், இன்றே சமைப்போம்!',
                ingredients: [{ item: 'ஃபாபா பீன்ஸ் (டின் செய்யப்பட்ட, வடிகட்டி கழுவியது)', amount: '2 டின் (ஒவ்வொன்றும் 15 அவுன்ஸ்)' }, { item: 'சிவப்பு வெங்காயம் (நறுக்கியது)', amount: '1 நடுத்தர' }, { item: 'தக்காளி (நறுக்கியது)', amount: '2 நடுத்தர' }, { item: 'பூண்டு (நறுக்கியது)', amount: '3 பற்கள்' }, { item: 'ஜலபெனோ அல்லது பச்சை மிளகாய் (நறுக்கியது)', amount: '1 (விரும்பினால், காரத்திற்கு)' }, { item: 'எலுமிச்சை சாறு (புதிதாகப் பிழிந்தது)', amount: '2 தேக்கரண்டி' }, { item: 'ஆலிவ் எண்ணெய்', amount: '3 தேக்கரண்டி' }, { item: 'சீரகப் பொடி', amount: '1 தேக்கரண்டி' }, { item: 'உப்பு', amount: 'சுவைக்கு ஏற்ப' }, { item: 'கருப்பு மிளகு', amount: 'சுவைக்கு ஏற்ப' }],
                instructions: ['ஒரு கடாயில் ஆலிவ் எண்ணெயை சூடாக்கி, சிவப்பு வெங்காயத்தை மென்மையாகும் வரை வதக்கவும், பின்னர் பூண்டு, ஜலபெனோ மற்றும் தக்காளியை சேர்த்து 5 நிமிடங்கள் சமைக்கவும்.', 'சீரகம், உப்பு மற்றும் மிளகு சேர்த்து, பின்னர் வடிகட்டிய ஃபாபா பீன்ஸ் மற்றும் சிறிது தண்ணீர் சேர்க்கவும்.', 'சுமார் பாதி பீன்ஸை ஒரு முட்கரண்டி அல்லது உருளைக்கிழங்கு மஷர் மூலம் மெதுவாக மசிக்கவும், பின்னர் சுவைகள் கலக்க 15-20 நிமிடங்கள் சிம்மரில் வைக்கவும்.', 'புதிய எலுமிச்சை சாறு சேர்க்கவும். சூடாக பரிமாறவும், புதிய பார்ஸ்லி அல்லது கொத்தமல்லியால் அலங்கரிக்கவும், மேலும் விரும்பினால் வேகவைத்த முட்டைகள் மற்றும் சிறிது ஆலிவ் எண்ணெய் தூவி பரிமாறவும்.']
            }
        }
    }
,
    {
        id: '2026-05-17',
        title: 'Daal Chawal',
        description: 'Experience the heartwarming embrace of Pakistan\'s beloved comfort food, Daal Chawal! This simple yet profoundly flavorful dish combines tender, spiced lentils with fluffy, aromatic rice, creating a symphony of textures and tastes. Ready to whip up this authentic delight today?',
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
            'Wash and soak daal for 20 mins, rice for 30 mins. Cook rice separately until fluffy.',
            'Heat oil/ghee, sauté cumin, then onions until golden. Add ginger-garlic paste and tomatoes; cook until soft.',
            'Stir in turmeric, red chilli powder, salt, and soaked daal with 3 cups water. Bring to a boil, then simmer until daal is tender.',
            'Serve the hot daal with the cooked Basmati rice.'
        ],
        tags: ['Pakistani', 'Dinner', 'Vegetarian'],
        translations: {
            'zh-CN': {
                        title: '达尔查瓦尔 (巴基斯坦扁豆饭)',
                        description: '体验巴基斯坦备受喜爱的舒适美食——达尔查瓦尔的温暖怀抱！这道简单却风味浓郁的菜肴将软嫩的香料扁豆与蓬松芳香的米饭完美结合，创造出质地和味道的交响乐。今天就准备好制作这道地道美味了吗？',
                        ingredients: [
                            {
                                item: '马苏尔扁豆 (红扁豆)',
                                amount: '1 杯'
                            },
                            {
                                item: '印度香米',
                                amount: '2 杯'
                            },
                            {
                                item: '洋葱',
                                amount: '1 个中等大小，切碎'
                            },
                            {
                                item: '番茄',
                                amount: '1 个中等大小，切碎'
                            },
                            {
                                item: '姜蒜蓉',
                                amount: '1 汤匙'
                            },
                            {
                                item: '孜然籽',
                                amount: '1 茶匙'
                            },
                            {
                                item: '姜黄粉',
                                amount: '1/2 茶匙'
                            },
                            {
                                item: '红辣椒粉',
                                amount: '1 茶匙'
                            },
                            {
                                item: '盐',
                                amount: '适量'
                            },
                            {
                                item: '食用油/酥油',
                                amount: '3 汤匙'
                            }
                        ],
                        instructions: [
                            '将扁豆洗净浸泡20分钟，米饭浸泡30分钟。将米饭单独煮熟至蓬松。',
                            '加热食用油/酥油，炒香孜然籽，然后加入洋葱炒至金黄。加入姜蒜蓉和番茄；煮至变软。',
                            '拌入姜黄粉、红辣椒粉、盐和浸泡过的扁豆，加入3杯水。煮沸后转小火慢炖，直至扁豆变软。',
                            '将热扁豆与煮好的印度香米一起食用。'
                        ]
                    },
            ms: {
                        title: 'Daal Chawal (Nasi Dal Pakistan)',
                        description: 'Alami kehangatan hidangan selesa kegemaran Pakistan, Daal Chawal! Hidangan ringkas namun penuh perisa ini menggabungkan lentil lembut berperisa dengan nasi yang gebu dan harum, mencipta simfoni tekstur dan rasa. Sedia untuk menyediakan hidangan asli yang lazat ini hari ini?',
                        ingredients: [
                            {
                                item: 'Dal Masoor (Lentil Merah)',
                                amount: '1 cawan'
                            },
                            {
                                item: 'Beras Basmati',
                                amount: '2 cawan'
                            },
                            {
                                item: 'Bawang Besar',
                                amount: '1 biji sederhana, dicincang halus'
                            },
                            {
                                item: 'Tomato',
                                amount: '1 biji sederhana, dicincang'
                            },
                            {
                                item: 'Pes Halia Bawang Putih',
                                amount: '1 sudu besar'
                            },
                            {
                                item: 'Biji Jintan Putih',
                                amount: '1 sudu kecil'
                            },
                            {
                                item: 'Serbuk Kunyit',
                                amount: '1/2 sudu kecil'
                            },
                            {
                                item: 'Serbuk Cili Merah',
                                amount: '1 sudu kecil'
                            },
                            {
                                item: 'Garam',
                                amount: 'Secukup rasa'
                            },
                            {
                                item: 'Minyak Masak/Ghee',
                                amount: '3 sudu besar'
                            }
                        ],
                        instructions: [
                            'Basuh dan rendam dal selama 20 minit, nasi selama 30 minit. Masak nasi secara berasingan sehingga gebu.',
                            'Panaskan minyak/ghee, tumis jintan putih, kemudian bawang besar sehingga keemasan. Masukkan pes halia bawang putih dan tomato; masak sehingga lembut.',
                            'Masukkan serbuk kunyit, serbuk cili merah, garam, dan dal yang telah direndam bersama 3 cawan air. Didihkan, kemudian reneh sehingga dal lembut.',
                            'Hidangkan dal panas bersama nasi Basmati yang telah dimasak.'
                        ]
                    },
            hi: {
                title: 'दाल चावल',
                description: 'पाकिस्तान के इस प्रिय आरामदायक भोजन, दाल चावल के हार्दिक आलिंगन का अनुभव करें! यह सरल लेकिन गहरा स्वादिष्ट व्यंजन कोमल, मसालेदार दाल को फूले हुए, सुगंधित चावल के साथ जोड़ता है, जिससे बनावट और स्वाद का एक अद्भुत संगम बनता है। क्या आप आज ही इस प्रामाणिक व्यंजन को बनाने के लिए तैयार हैं?',
                ingredients: [{ item: 'मसूर दाल (लाल दाल)', amount: '1 कप' }, { item: 'बासमती चावल', amount: '2 कप' }, { item: 'प्याज', amount: '1 मध्यम, बारीक कटा हुआ' }, { item: 'टमाटर', amount: '1 मध्यम, कटा हुआ' }, { item: 'अदरक-लहसुन का पेस्ट', amount: '1 बड़ा चम्मच' }, { item: 'जीरा', amount: '1 छोटा चम्मच' }, { item: 'हल्दी पाउडर', amount: '1/2 छोटा चम्मच' }, { item: 'लाल मिर्च पाउडर', amount: '1 छोटा चम्मच' }, { item: 'नमक', amount: 'स्वादानुसार' }, { item: 'खाना पकाने का तेल/घी', amount: '3 बड़े चम्मच' }],
                instructions: ['दाल को 20 मिनट और चावल को 30 मिनट के लिए धोकर भिगो दें। चावल को अलग से नरम होने तक पकाएं।', 'तेल/घी गरम करें, जीरा भूनें, फिर प्याज को सुनहरा होने तक भूनें। अदरक-लहसुन का पेस्ट और टमाटर डालकर नरम होने तक पकाएं।', 'हल्दी, लाल मिर्च पाउडर, नमक और भीगी हुई दाल को 3 कप पानी के साथ मिलाएं। उबाल आने दें, फिर दाल के नरम होने तक धीमी आंच पर पकाएं।', 'पके हुए बासमती चावल के साथ गरमागरम दाल परोसें।']
            },
            bn: {
                title: 'ডাল চাউল',
                description: 'পাকিস্তানের প্রিয় আরামদায়ক খাবার, ডাল চাউলের উষ্ণ আলিঙ্গন অনুভব করুন! এই সহজ কিন্তু গভীরভাবে সুস্বাদু খাবারটি নরম, মশলাদার ডালকে নরম, সুগন্ধি ভাতের সাথে একত্রিত করে, যা টেক্সচার এবং স্বাদের একটি সিম্ফনি তৈরি করে। আজই এই খাঁটি খাবারটি তৈরি করতে প্রস্তুত?',
                ingredients: [{ item: 'মসুর ডাল (লাল ডাল)', amount: '1 কাপ' }, { item: 'বাসমতী চাল', amount: '2 কাপ' }, { item: 'পেঁয়াজ', amount: '1টি মাঝারি, মিহি করে কাটা' }, { item: 'টমেটো', amount: '1টি মাঝারি' }],
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
        id: '2026-05-18',
        title: 'Chilli Crab and',
        description: 'Chilli Crab. Ah, the very name brings back the humid air of East Coast Lagoon Food Centre, the clatter of plates, and the joyous, messy slurping. This isn\'t just a dish; it\'s a Singaporean institution, a rite of passage. I remember my first real attempt at making it, back when I was just a young cook, all bravado and no technique. I’d watched my Auntie Mei whip it up countless times, her movements precise, almost ritualistic. But watching and doing are two different beasts. My first few tries? Disasters. The sauce was either too watery, refusing to cling to the crab, or so thick it became a gloopy mess. And the crab! Oh, the horror of overcooked, rubbery crab. Auntie Mei, bless her patient soul, would just shake her head, offer a small, knowing smile, and then gently guide my hand, showing me how to coax the sweetness from the shallots, how to judge the perfect moment the chili paste truly \'bloomed\' in the oil. It took years, honestly, to get that balance just right, to understand the soul of the dish.  The secret, if there is one, lies in the chili paste and the freshness of your crab. Forget those pre-made jars; they just don\'t cut it. You need that vibrant, complex heat from dried chilies, the pungent sweetness of fresh shallots, the sharp bite of garlic and ginger, and a tiny, crucial whisper of belacan. Some purists argue for a purely tomato-based sauce, but I\'ve found a judicious blend of good quality bottled chili sauce and ketchup, alongside fresh tomatoes, gives it that signature tangy-sweet-spicy depth that makes you want to lick the plate clean. And the egg! That delicate, silky egg swirl at the end isn\'t just for show; it adds a beautiful richness and texture, binding the sauce together. The trick is to drizzle it in slowly, gently stirring, letting it form those lovely, wispy ribbons. Don\'t just dump it in, or you\'ll end up with scrambled egg in your crab. Trust me, I\'ve been there.  This dish is meant to be shared, to be devoured with your hands, elbows deep in that glorious, fiery red sauce. It’s a communal experience, a celebration. You’ll need plenty of napkins, maybe even a bib, and definitely a stack of those fluffy, fried mantou buns. They’re not optional; they’re essential for mopping up every last drop of that incredible sauce. There’s nothing quite like tearing into a succulent piece of crab, coated in that rich, spicy, slightly sweet sauce, and then chasing it with a sauce-soaked mantou. It’s messy, it’s loud, and it’s absolutely perfect. Don\'t walk away from the stove once the crab goes in; it cooks fast. Keep an eye on it, and you\'ll be rewarded with a meal that truly sings.',
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
            'Prepare the Crab: First, the star! Get your crabs. Clean them thoroughly under running water. Use a sturdy cleaver or heavy knife to crack the shells and claws. Don\'t be shy; you want the sauce to get into every nook and cranny. Separate the body into halves or quarters, keeping the legs and claws attached. Set aside.',
            'Make the Chilli Paste: This is where the magic starts. In a food processor or with a mortar and pestle, combine the soaked dried red chilies, fresh red chilies, shallots, garlic, ginger, and the toasted belacan. Blend or pound until you have a relatively smooth, fragrant paste. It should smell vibrant, a little pungent, and promising.',
            'Sauté the Paste: Heat the cooking oil in a large wok or deep pan over medium-high heat. Add your freshly made chili paste. Stir constantly, letting it sizzle and pop. You\'re looking for the raw, sharp edges of the chilies and garlic to mellow, for the paste to darken slightly, and for the oil to begin to \'split\' and collect around the edges of the pan. This takes about 8-10 minutes. Don\'t rush it; this step builds the foundation of flavor.',
            'Build the Sauce Base: Pour in the tomato ketchup, bottled chili sauce, water or chicken stock, sugar, salt, and white vinegar. Stir everything together until it\'s well combined and starts to bubble gently. Let it simmer for about 5 minutes, allowing the flavors to meld and deepen. The aroma should be a beautiful mix of sweet, tangy, and spicy.',
            'Cook the Crab: Now for the main event. Add the prepared crab pieces to the simmering sauce. Stir gently to coat all the crab with that glorious red mixture. Cover the wok and let it cook for about 8-10 minutes, or until the crab shells turn a vibrant orange-red and the flesh is opaque. Do not overcook! Rubber crab is a culinary tragedy.',
            'Thicken the Sauce: Give the cornstarch slurry a quick stir (it settles!). Pour it slowly into the simmering sauce, stirring continuously. Watch as the sauce transforms, thickening to a glossy, luxurious consistency that will cling beautifully to the crab. Let it bubble for another minute to cook out the raw cornstarch taste.',
            'Add the Egg: Reduce the heat to low. Slowly, in a thin stream, drizzle the lightly beaten eggs into the sauce while gently stirring with a spoon or spatula. You want to create delicate, silky ribbons of egg, not scrambled bits. Stir just enough to incorporate, then turn off the heat. The residual heat will finish cooking the egg.',
            'Serve Immediately: Transfer the Chilli Crab to a large serving platter. Garnish generously with fresh coriander leaves and sliced spring onions. Serve piping hot with a generous pile of freshly fried Mantou buns. Get messy, dig in, and enjoy every single glorious bite!'
        ],
        tags: ['Singaporean', 'Dinner', 'Authentic'],
        translations: {
            hi: {
                title: 'चिली क्रैब और',
                description: 'चिली क्रैब। आह, यह नाम सुनते ही ईस्ट कोस्ट लैगून फूड सेंटर की उमस भरी हवा, बर्तनों की खड़खड़ाहट और खुशी से, गंदे तरीके से खाने की याद आ जाती है। यह सिर्फ एक व्यंजन नहीं है; यह सिंगापुर की एक संस्था है, एक परंपरा है। मुझे इसे बनाने का मेरा पहला वास्तविक प्रयास याद है, जब मैं सिर्फ एक युवा रसोइया था, पूरा जोश था पर तकनीक नहीं थी। मैंने अपनी चाची मेई को इसे अनगिनत बार बनाते देखा था, उनके हाव-भाव सटीक, लगभग अनुष्ठानिक थे। लेकिन देखना और करना दो अलग-अलग बातें हैं। मेरे पहले कुछ प्रयास? आपदाएँ। सॉस या तो बहुत पतला था, केकड़े से चिपकने से इनकार कर रहा था, या इतना गाढ़ा था कि वह एक चिपचिपा गड़बड़ बन गया। और केकड़ा! ओह, ज़्यादा पका हुआ, रबर जैसा केकड़ा कितना भयानक होता है। चाची मेई, उनकी धैर्यवान आत्मा को आशीर्वाद, बस अपना सिर हिलातीं, एक छोटी, समझदार मुस्कान देतीं, और फिर धीरे से मेरा हाथ पकड़कर मुझे दिखातीं कि कैसे प्याज़ से मिठास निकालनी है, कैसे उस सही क्षण का न्याय करना है जब मिर्च का पेस्ट तेल में वास्तव में \'खिलता\' है। ईमानदारी से कहूँ तो, इस संतुलन को सही करने में, इस व्यंजन की आत्मा को समझने में सालों लग गए।  इसका रहस्य, अगर कोई है, तो वह मिर्च के पेस्ट और आपके केकड़े की ताज़गी में निहित है। उन पहले से बने जारों को भूल जाइए; वे बस काम नहीं करते। आपको सूखी मिर्च से वह जीवंत, जटिल गर्मी चाहिए, ताज़े प्याज़ की तीखी मिठास, लहसुन और अदरक का तीखा स्वाद, और बेलाचन की एक छोटी, महत्वपूर्ण फुसफुसाहट। कुछ शुद्धतावादी पूरी तरह से टमाटर-आधारित सॉस के लिए तर्क देते हैं, लेकिन मैंने पाया है कि अच्छी गुणवत्ता वाले बोतल बंद चिली सॉस और केचप का एक विवेकपूर्ण मिश्रण, ताज़े टमाटरों के साथ, इसे वह विशिष्ट खट्टा-मीठा-मसालेदार गहराई देता है जो आपको प्लेट चाटने पर मजबूर कर देता है। और अंडा! अंत में वह नाजुक, रेशमी अंडे का घुमाव सिर्फ दिखाने के लिए नहीं है; यह एक सुंदर समृद्धि और बनावट जोड़ता है, सॉस को एक साथ बांधता है। चाल यह है कि इसे धीरे-धीरे, धीरे से हिलाते हुए डालें, जिससे यह सुंदर, पतली धारियाँ बना सके। इसे बस ऐसे ही मत डालिए, वरना आपके केकड़े में अंडे का भुर्जी बन जाएगी। मुझ पर विश्वास करें, मैं वहाँ रहा हूँ।  यह व्यंजन साझा करने के लिए है, अपने हाथों से खाने के लिए है, उस शानदार, उग्र लाल सॉस में कोहनी तक डूबकर। यह एक सामुदायिक अनुभव है, एक उत्सव है। आपको ढेर सारे नैपकिन, शायद एक बिब भी, और निश्चित रूप से उन फूले हुए, तले हुए मंटौ बन्स का एक ढेर चाहिए होगा। वे वैकल्पिक नहीं हैं; वे उस अविश्वसनीय सॉस की हर आखिरी बूंद को सोखने के लिए आवश्यक हैं। केकड़े के एक रसीले टुकड़े को फाड़कर, उस समृद्ध, मसालेदार, थोड़े मीठे सॉस में लपेटकर, और फिर उसे सॉस में डूबे मंटौ के साथ खाने जैसा कुछ भी नहीं है। यह गंदा है, यह शोरगुल वाला है, और यह बिल्कुल सही है। एक बार जब केकड़ा अंदर चला जाए तो स्टोव से दूर न हटें; यह जल्दी पकता है। इस पर नज़र रखें, और आपको एक ऐसा भोजन मिलेगा जो वास्तव में गाता है।',
                ingredients: [{ item: 'ताजे मड क्रैब', amount: '2 (लगभग 800 ग्राम - 1 किलो प्रत्येक), साफ और तोड़े हुए' }, { item: 'खाना पकाने का तेल', amount: '1/2 कप' }, { item: 'लहसुन', amount: '8 कलियाँ, बारीक कटी हुई' }, { item: 'अदरक', amount: '2 इंच का टुकड़ा, कद्दूकस किया हुआ' }, { item: 'प्याज़ (शैलट्स)', amount: '4, बारीक कटे हुए' }, { item: 'सूखी लाल मिर्च', amount: '15-20, गर्म पानी में भिगोकर, बीज निकाले हुए (मसाले के अनुसार समायोजित करें)' }, { item: 'ताजी लाल मिर्च', amount: '5-6, बीज निकाले हुए (रंग और ताजी गर्मी के लिए)' }, { item: 'बेलाचन (झींगा पेस्ट)', amount: '1 छोटा चम्मच, भुना हुआ' }, { item: 'टमाटर केचप', amount: '1/2 कप' }, { item: 'बोतल बंद चिली सॉस', amount: '1/4 कप (जैसे मैगी या इसी तरह का मीठा चिली सॉस)' }, { item: 'पानी या चिकन स्टॉक', amount: '1.5 कप' }, { item: 'चीनी', amount: '2-3 बड़े चम्मच (स्वाद के अनुसार समायोजित करें)' }, { item: 'नमक', amount: '1 छोटा चम्मच (या स्वाद के अनुसार)' }, { item: 'सफेद सिरका', amount: '1 बड़ा चम्मच' }, { item: 'कॉर्नस्टार्च', amount: '2 बड़े चम्मच, 4 बड़े चम्मच पानी के साथ मिलाया हुआ (घोल)' }, { item: 'अंडे', amount: '2 बड़े, हल्के फेंटे हुए' }, { item: 'धनिया पत्ती', amount: 'सजाने के लिए, कटी हुई' }, { item: 'हरी प्याज़', amount: 'सजाने के लिए, कटी हुई' }, { item: 'तले हुए मंटौ बन्स', amount: 'परोसने के लिए' }],
                instructions: ['केकड़ा तैयार करें: सबसे पहले, स्टार! अपने केकड़े लें। उन्हें बहते पानी के नीचे अच्छी तरह साफ करें। खोल और पंजों को तोड़ने के लिए एक मजबूत कुल्हाड़ी या भारी चाकू का उपयोग करें। शर्माएं नहीं; आप चाहते हैं कि सॉस हर कोने में जाए। शरीर को आधे या चौथाई हिस्सों में अलग करें, पैरों और पंजों को जुड़ा रहने दें। एक तरफ रख दें।', 'चिली पेस्ट बनाएं: यहीं से जादू शुरू होता है। एक फूड प्रोसेसर या मोर्टार और मूसल में, भिगोई हुई सूखी लाल मिर्च, ताजी लाल मिर्च, प्याज़, लहसुन, अदरक और भुना हुआ बेलाचन मिलाएं। तब तक ब्लेंड या पीसें जब तक आपको एक अपेक्षाकृत चिकना, सुगंधित पेस्ट न मिल जाए। इसकी महक जीवंत, थोड़ी तीखी और आशाजनक होनी चाहिए।', 'पेस्ट भूनें: एक बड़ी कड़ाही या गहरे पैन में मध्यम-तेज आंच पर खाना पकाने का तेल गरम करें। अपना ताज़ा बना हुआ चिली पेस्ट डालें। लगातार हिलाते रहें, इसे भुनने और चटकने दें। आप चाहते हैं कि मिर्च और लहसुन के कच्चे, तीखे किनारे नरम हो जाएं, पेस्ट थोड़ा गहरा हो जाए, और तेल \'अलग\' होकर पैन के किनारों पर जमा होने लगे। इसमें लगभग 8-10 मिनट लगते हैं। जल्दी न करें; यह कदम स्वाद की नींव बनाता है।', 'सॉस बेस बनाएं: टमाटर केचप, बोतल बंद चिली सॉस, पानी या चिकन स्टॉक, चीनी, नमक और सफेद सिरका डालें। सब कुछ एक साथ मिलाएं जब तक कि यह अच्छी तरह से मिल न जाए और धीरे-धीरे बुलबुले न उठने लगें। इसे लगभग 5 मिनट तक उबलने दें, जिससे स्वाद मिल जाएं और गहरा हो जाए। सुगंध मीठा, खट्टा और मसालेदार का एक सुंदर मिश्रण होना चाहिए।', 'केकड़ा पकाएं: अब मुख्य कार्यक्रम के लिए। तैयार केकड़े के टुकड़ों को उबलते सॉस में डालें। सभी केकड़ों को उस शानदार लाल मिश्रण से ढकने के लिए धीरे से हिलाएं। कड़ाही को ढक दें और इसे लगभग 8-10 मिनट तक पकने दें, या जब तक केकड़े के खोल चमकीले नारंगी-लाल न हो जाएं और मांस अपारदर्शी न हो जाए। ज़्यादा न पकाएं! रबर जैसा केकड़ा एक पाक त्रासदी है।', 'सॉस गाढ़ा करें: कॉर्नस्टार्च के घोल को एक बार फिर से हिलाएं (यह बैठ जाता है!)। इसे धीरे-धीरे उबलते सॉस में डालें, लगातार हिलाते रहें। देखें कि सॉस कैसे बदलता है, एक चमकदार, शानदार स्थिरता में गाढ़ा होता है जो केकड़े से खूबसूरती से चिपकेगा। कच्चे कॉर्नस्टार्च के स्वाद को पकाने के लिए इसे एक और मिनट के लिए उबलने दें।', 'अंडा डालें: आंच धीमी कर दें। धीरे-धीरे, एक पतली धार में, हल्के फेंटे हुए अंडे को सॉस में डालें जबकि एक चम्मच या स्पैटुला से धीरे-धीरे हिलाते रहें। आप अंडे की नाजुक, रेशमी धारियाँ बनाना चाहते हैं, न कि तले हुए टुकड़े। बस इतना हिलाएं कि वह मिल जाए, फिर आंच बंद कर दें। बची हुई गर्मी अंडे को पूरी तरह पका देगी।', 'तुरंत परोसें: चिली क्रैब को एक बड़ी सर्विंग प्लेट में निकालें। ताजी धनिया पत्ती और कटी हुई हरी प्याज़ से उदारतापूर्वक सजाएं। गरमागरम तले हुए मंटौ बन्स के ढेर के साथ परोसें। गंदे हो जाएं, खाना शुरू करें, और हर शानदार निवाले का आनंद लें!']
            },
            bn: {
                title: 'চিলি ক্র্যাব এবং',
                description: 'চিলি ক্র্যাব। আহা, এই নামটা শুনলেই ইস্ট কোস্ট ল্যাগুন ফুড সেন্টারের আর্দ্র বাতাস, থালা-বাসনের ঠোকাঠুকি আর আনন্দের, নোংরাভাবে খাবার খাওয়ার স্মৃতি মনে পড়ে যায়। এটা শুধু একটা পদ নয়; এটা সিঙ্গাপুরের একটা প্রতিষ্ঠান, একটা ঐতিহ্য। আমার মনে আছে, যখন আমি প্রথমবার এটা বানানোর চেষ্টা করেছিলাম, তখন আমি কেবল একজন তরুণ রাঁধুনি ছিলাম, আত্মবিশ্বাস ছিল কিন্তু কৌশল ছিল না। আমি আমার মাসি মেইকে এটা অসংখ্যবার বানাতে দেখেছি, তার নড়াচড়া ছিল নিখুঁত, প্রায় আনুষ্ঠানিক। কিন্তু দেখা আর করা দুটো ভিন্ন জিনিস। আমার প্রথম কয়েকটা চেষ্টা? বিপর্যয়। সস হয় খুব পাতলা হয়ে যেত, কাঁকড়ার গায়ে লেগে থাকত না, অথবা এত ঘন হয়ে যেত যে একটা আঠালো জগাখিচুড়ি হয়ে যেত। আর কাঁকড়া! ওহ, অতিরিক্ত সেদ্ধ, রাবারের মতো কাঁকড়ার ভয়াবহতা। মাসি মেই, তার ধৈর্যশীল আত্মাকে আশীর্বাদ, কেবল মাথা নাড়তেন, একটি ছোট, জ্ঞানী হাসি দিতেন, এবং তারপর আলতো করে আমার হাত ধরে দেখাতেন কিভাবে শ্যালট থেকে মিষ্টি বের করতে হয়, কিভাবে সেই নিখুঁত মুহূর্তটি বিচার করতে হয় যখন মরিচের পেস্ট তেলে সত্যিই \'ফুটে ওঠে\'। সত্যি বলতে, এই ভারসাম্যটা ঠিক করতে, এই পদের আত্মাকে বুঝতে কয়েক বছর লেগেছিল।  এর রহস্য, যদি কোনো থাকে, তাহলে তা মরিচের পেস্ট এবং আপনার কাঁকড়ার সতেজতায় নিহিত। সেই তৈরি করা জারগুলো ভুলে যান; সেগুলো ঠিক কাজ করে না। আপনার দরকার শুকনো মরিচ থেকে সেই প্রাণবন্ত, জটিল ঝাল, তাজা শ্যালটের তীব্র মিষ্টি, রসুন এবং আদার তীক্ষ্ণ কামড়, এবং বেলাচানের একটি ছোট, গুরুত্বপূর্ণ ফিসফিস। কিছু বিশুদ্ধতাবাদী সম্পূর্ণরূপে টমেটো-ভিত্তিক সসের জন্য তর্ক করেন, কিন্তু আমি দেখেছি যে ভালো মানের বোতলজাত চিলি সস এবং কেচাপের একটি বিচক্ষণ মিশ্রণ, তাজা টমেটোর সাথে, এটিকে সেই স্বাক্ষরযুক্ত টক-মিষ্টি-ঝাল গভীরতা দেয় যা আপনাকে প্লেট চেটে পরিষ্কার করতে বাধ্য করে। আর ডিম! শেষে সেই সূক্ষ্ম, রেশমি ডিমের ঘূর্ণন কেবল দেখানোর জন্য নয়; এটি একটি সুন্দর সমৃদ্ধি এবং টেক্সচার যোগ করে, সসকে একসাথে ধরে রাখে। কৌশলটি হল এটিকে ধীরে ধীরে, আলতো করে নাড়তে নাড়তে ঢালা, যাতে এটি সুন্দর, পাতলা ফিতা তৈরি করতে পারে। এটিকে শুধু ঢেলে দেবেন না, তাহলে আপনার কাঁকড়ার মধ্যে ডিমের ভুজিয়া হয়ে যাবে। বিশ্বাস করুন, আমি এটা করেছি।  এই পদটি ভাগ করে খাওয়ার জন্য, আপনার হাত দিয়ে গোগ্রাসে গিলে ফেলার জন্য, সেই মহিমান্বিত, জ্বলন্ত লাল সসে কনুই ডুবিয়ে। এটি একটি সাম্প্রদায়িক অভিজ্ঞতা, একটি উদযাপন। আপনার প্রচুর ন্যাপকিন লাগবে, হয়তো একটি বিবও, এবং অবশ্যই সেই নরম, ভাজা মান্টাউ বানের একটি স্তূপ। এগুলি ঐচ্ছিক নয়; সেই অবিশ্বাস্য সসের প্রতিটি শেষ ফোঁটা মুছে ফেলার জন্য এগুলি অপরিহার্য। কাঁকড়ার একটি রসালো টুকরো ছিঁড়ে, সেই সমৃদ্ধ, ঝাল, সামান্য মিষ্টি সসে ডুবিয়ে, এবং তারপর সসে ভেজানো মান্টাউ দিয়ে খাওয়ার মতো আর কিছুই নেই। এটা নোংরা, এটা কোলাহলপূর্ণ, এবং এটা একেবারে নিখুঁত। কাঁকড়া একবার কড়াইতে চলে গেলে চুলা থেকে দূরে সরে যাবেন না; এটা দ্রুত রান্না হয়। এর দিকে নজর রাখুন, এবং আপনি এমন একটি খাবার পাবেন যা সত্যিই গান গায়।',
                ingredients: [{ item: 'তাজা মাড ক্র্যাব', amount: '2টি (প্রায় 800 গ্রাম - 1 কেজি প্রতিটি), পরিষ্কার এবং ভাঙা' }, { item: 'রান্নার তেল', amount: '1/2 কাপ' }, { item: 'রসুন', amount: '8 কোয়া, কুচি করা' }, { item: 'আদা', amount: '2 ইঞ্চি টুকরা, গ্রেট করা' }, { item: 'শ্যালট', amount: '4টি' }],
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
            },
            kn: {
                title: '',
                description: '',
                ingredients: [],
                instructions: []
            },
            'zh-CN': {
                title: '',
                description: '',
                ingredients: [],
                instructions: []
            },
            ms: {
                title: '',
                description: '',
                ingredients: [],
                instructions: []
            }
        }
    }
];
