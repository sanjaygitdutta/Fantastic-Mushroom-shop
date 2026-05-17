export interface RecipeTranslation {
  title: string;
  description: string;
  ingredients: { item: string; amount: string }[];
  instructions: string[];
}

export const WORLD_RECIPE_TRANSLATIONS: Record<string, Record<string, RecipeTranslation>> = {
  'in-01': {
    'zh-CN': {
      title: '黄油鸡',
      description: '源自印度德里的正宗食谱',
      ingredients: [
        { item: '鸡肉', amount: '500克' },
        { item: '黄油', amount: '3 汤匙' },
        { item: '奶油', amount: '1 杯' },
        { item: '西红柿', amount: '2 个' },
        { item: '综合香料 (Garam Masala)', amount: '1 茶匙' },
        { item: '孜然', amount: '1 茶匙' },
        { item: '姜黄', amount: '1 茶匙' },
        { item: '大蒜', amount: '2 瓣' },
        { item: '姜', amount: '1 英寸' }
      ],
      instructions: [
        '将鸡肉用酸奶和香料腌制30分钟。用黄油将鸡肉煎至金黄色。',
        '将西红柿、大蒜、姜打成顺滑的酱汁。用黄油将酱汁煮10分钟。',
        '重新加入鸡肉，倒入奶油，小火慢炖15分钟。最后加入综合香料即可上桌。'
      ]
    },
    ms: {
      title: 'Ayam Mentega',
      description: 'Resipi asli dari Delhi, India',
      ingredients: [
        { item: 'ayam', amount: '500g' },
        { item: 'mentega', amount: '3 sudu besar' },
        { item: 'krim', amount: '1 cawan' },
        { item: 'tomato', amount: '2 biji' },
        { item: 'garam masala', amount: '1 sudu kecil' },
        { item: 'jintan putih', amount: '1 sudu kecil' },
        { item: 'kunyit', amount: '1 sudu kecil' },
        { item: 'bawang putih', amount: '2 ulas' },
        { item: 'halia', amount: '1 inci' }
      ],
      instructions: [
        'Perap ayam dalam yogurt dan rempah selama 30 minit. Masak ayam dalam mentega sehingga keemasan.',
        'Kisar tomato, bawang putih, halia menjadi sos licin. Masak sos dalam mentega selama 10 minit.',
        'Masukkan semula ayam, tuang krim, reneh 15 minit. Akhiri dengan garam masala dan hidangkan.'
      ]
    }
  },
  'in-02': {
    'zh-CN': {
      title: '玛卡尼扁豆',
      description: '源自印度德里的正宗食谱',
      ingredients: [
        { item: '乌拉德黑扁豆', amount: '250克' },
        { item: '拉吉马豆', amount: '100克' },
        { item: '黄油', amount: '3 汤匙' },
        { item: '奶油', amount: '1 杯' },
        { item: '西红柿', amount: '2 个' },
        { item: '孜然', amount: '1 茶匙' },
        { item: '综合香料 (Garam Masala)', amount: '1 茶匙' },
        { item: '辣椒', amount: '2 根' }
      ],
      instructions: [
        '将乌拉德黑扁豆和拉吉马豆浸泡过夜。用压力锅小火煮6-8小时。',
        '将扁豆稍微捣碎。将西红柿和香料分开用黄油烹煮。',
        '将扁豆与西红柿混合物混合，加入奶油，小火慢炖30分钟，直至浓稠奶油状。'
      ]
    },
    ms: {
      title: 'Dal Makhani',
      description: 'Resipi asli dari Delhi, India',
      ingredients: [
        { item: 'dal urad hitam', amount: '250g' },
        { item: 'rajma', amount: '100g' },
        { item: 'mentega', amount: '3 sudu besar' },
        { item: 'krim', amount: '1 cawan' },
        { item: 'tomato', amount: '2 biji' },
        { item: 'jintan putih', amount: '1 sudu kecil' },
        { item: 'garam masala', amount: '1 sudu kecil' },
        { item: 'cili', amount: '2 biji' }
      ],
      instructions: [
        'Rendam dal urad dan rajma semalaman. Masak dalam periuk tekanan selama 6-8 jam dengan api perlahan.',
        'Lenyekkan dal sedikit. Masak tomato dan rempah dalam mentega secara berasingan.',
        'Gabungkan dal dengan campuran tomato, tambah krim, reneh 30 minit sehingga pekat dan berkrim.'
      ]
    }
  },
  'in-03': {
    'zh-CN': {
      title: '印度香饭 (海得拉巴风味)',
      description: '源自印度海得拉巴的正宗食谱',
      ingredients: [
        { item: '印度香米', amount: '500克' },
        { item: '羊肉', amount: '500克' },
        { item: '凝乳', amount: '200毫升' },
        { item: '洋葱 (炸)', amount: '2 个' },
        { item: '藏红花', amount: '' },
        { item: '薄荷', amount: '' },
        { item: '玫瑰水', amount: '' },
        { item: '整粒香料', amount: '' },
        { item: '酥油', amount: '' }
      ],
      instructions: [
        '将羊肉用凝乳、生木瓜酱和香料腌制4小时。将米饭煮至半熟。',
        '在锅中分层放入羊肉和米饭，加入炸洋葱、薄荷、藏红花牛奶。',
        '用面团密封锅盖，用“dum”（小火慢炖）方式烹煮45分钟。打开并轻轻盛出。'
      ]
    },
    ms: {
      title: 'Biryani (Hyderabadi)',
      description: 'Resipi asli dari Hyderabad, India',
      ingredients: [
        { item: 'beras basmati', amount: '500g' },
        { item: 'daging kambing', amount: '500g' },
        { item: 'dadih', amount: '200ml' },
        { item: 'bawang (digoreng)', amount: '2 biji' },
        { item: 'Saffron', amount: '' },
        { item: 'Pudina', amount: '' },
        { item: 'Air mawar', amount: '' },
        { item: 'Rempah ratus biji', amount: '' },
        { item: 'Ghee', amount: '' }
      ],
      instructions: [
        'Perap daging kambing dalam dadih, pes betik mentah, dan rempah selama 4 jam. Masak nasi separuh masak.',
        'Lapisan daging kambing dan nasi dalam periuk dengan bawang goreng, pudina, susu saffron.',
        'Tutup periuk dengan doh dan masak secara dum (api perlahan) selama 45 minit. Buka dan hidangkan perlahan-lahan.'
      ]
    }
  },
  'in-04': {
    'zh-CN': {
      title: '马萨拉薄饼',
      description: '源自印度班加罗尔的正宗食谱',
      ingredients: [
        { item: '薄饼面糊', amount: '2 杯' },
        { item: '土豆', amount: '2 个' },
        { item: '洋葱', amount: '1 个' },
        { item: '芥末籽', amount: '' },
        { item: '咖喱叶', amount: '' },
        { item: '姜黄', amount: '' },
        { item: '青辣椒', amount: '' },
        { item: '食用油', amount: '' }
      ],
      instructions: [
        '制作马萨拉薄饼时，首先将一个经过良好养护的厚底塔瓦锅或不粘锅在中火上加热，直至温度达到约400°F (200°C)，此时锅面应发出微弱的光泽，表明已准备好倒入面糊。',
        '用勺子舀约1/2杯薄饼面糊到塔瓦锅中央，然后以轻柔、扫动的动作将面糊均匀地摊开成圆形，形成一张薄而精致的薄饼，注意不要施加过大压力，否则可能导致薄饼过厚。',
        '当薄饼开始烹饪时，在边缘淋上少量食用油，让油渗入底部，以便薄饼煮熟后更容易从塔瓦锅中取出；这应在边缘开始卷曲且表面干燥时进行，通常烹饪约1分钟后。',
        '在薄饼烹饪的同时，准备土豆馅料：在另一个锅中用中火加热2汤匙食用油，然后加入1茶匙芥末籽，让其爆裂约5秒钟，释放出特有的坚果香气，然后加入1枝咖喱叶，使其立即发出滋滋声并变脆。',
        '接下来，将1个切碎的小洋葱加入锅中，翻炒至半透明并开始焦糖化，形成浓郁的甜味和金棕色；这大约需要3-4分钟，期间需偶尔搅拌以防烧焦。',
        '现在，将2个煮熟并切丁的中等大小土豆加入锅中，同时加入1/2茶匙姜黄粉，搅拌均匀，再煮2分钟，直到土豆完全裹上香料混合物并加热透彻，味道既有泥土的芬芳，又带有姜黄的微苦。',
        '薄饼煮熟且土豆馅料准备好后，用抹刀小心地将薄饼从塔瓦锅中取出，然后将约1/2杯土豆混合物舀到薄饼中央，边缘留出1英寸的边距，然后将薄饼折叠成锥形，轻轻按压以密封边缘。',
        '最后，将马萨拉薄饼趁热上桌，搭配一份桑巴尔（一种辛辣的扁豆蔬菜炖菜）和一小勺椰子酸辣酱，椰子酸辣酱清凉、奶油般的味道与酥脆、咸香的薄饼及其辛辣馅料形成清爽的对比。'
      ]
    },
    ms: {
      title: 'Masala Dosa',
      description: 'Resipi asli dari Bengaluru, India',
      ingredients: [
        { item: 'adunan dosa', amount: '2 cawan' },
        { item: 'kentang', amount: '2 biji' },
        { item: 'bawang', amount: '1 biji' },
        { item: 'Biji sawi', amount: '' },
        { item: 'Daun kari', amount: '' },
        { item: 'Kunyit', amount: '' },
        { item: 'Cili hijau', amount: '' },
        { item: 'Minyak', amount: '' }
      ],
      instructions: [
        'Untuk memulakan penyediaan Masala Dosa, panaskan tawa atau kuali tidak melekat yang telah diperap dengan baik di atas api sederhana sehingga mencapai suhu kira-kira 400°F (200°C), di mana ia sepatutnya mengeluarkan kilauan samar, menunjukkan kesediaannya untuk adunan.',
        'Menggunakan senduk, tuangkan kira-kira 1/2 cawan adunan dosa ke tengah tawa dan, dengan gerakan menyapu yang lembut, sebarkan adunan secara rata dalam corak bulat untuk membentuk dosa yang nipis dan halus, berhati-hati agar tidak menekan terlalu kuat, yang boleh menyebabkan dosa menjadi tebal dan padat.',
        'Apabila dosa mula masak, titiskan sedikit minyak di sekeliling tepinya, membiarkan minyak meresap ke bawah dan memudahkan dosa terlepas dari tawa setelah masak; ini perlu dilakukan apabila tepi mula melengkung dan permukaan kering, biasanya selepas kira-kira 1 minit memasak.',
        'Semasa dosa sedang dimasak, sediakan inti kentang dengan memanaskan 2 sudu besar minyak dalam kuali berasingan di atas api sederhana, kemudian masukkan 1 sudu kecil biji sawi, yang perlu dibiarkan meletup dan berderai selama kira-kira 5 saat, mengeluarkan aroma kekacang ciri-cirinya, sebelum menambah 1 tangkai daun kari, yang sepatutnya mendesis dan menjadi rangup serta-merta.',
        'Seterusnya, masukkan 1 biji bawang kecil yang dicincang halus ke dalam kuali dan tumis sehingga menjadi lutsinar dan mula karamel, menghasilkan rasa manis yang mendalam dan warna perang keemasan; ini sepatutnya mengambil masa kira-kira 3-4 minit, di mana bawang perlu dikacau sekali-sekala untuk mengelakkan hangus.',
        'Sekarang, masukkan 2 biji kentang bersaiz sederhana yang telah direbus dan dipotong dadu ke dalam kuali, bersama dengan 1/2 sudu kecil serbuk kunyit, dan kacau rata untuk menggabungkan, masak selama 2 minit tambahan, sehingga kentang disalut sepenuhnya dengan campuran rempah dan dipanaskan sepenuhnya, dengan rasa yang bersahaja dan sedikit pahit dari kunyit.',
        'Setelah dosa masak dan inti kentang siap, gunakan spatula untuk melonggarkan dosa dari tawa dengan berhati-hati, kemudian sudukan kira-kira 1/2 cawan campuran kentang ke tengah dosa, meninggalkan sempadan 1 inci di sekeliling tepi, sebelum melipat dosa menjadi bentuk kon, menekan perlahan untuk menutup tepi.',
        'Akhir sekali, hidangkan Masala Dosa panas, diiringi dengan sambar, rebusan sayur berasaskan dal pedas, dan sesudu kecil chutney kelapa, yang rasa sejuk dan berkrimnya memberikan kontras yang menyegarkan kepada dosa yang rangup dan berperisa serta intinya yang pedas.'
      ]
    }
  },
  'in-05': {
    'zh-CN': {
      title: '菠菜奶豆腐',
      description: '源自印度旁遮普邦的正宗食谱',
      ingredients: [
        { item: '菠菜', amount: '300克' },
        { item: '奶豆腐', amount: '200克' },
        { item: '洋葱', amount: '1 个' },
        { item: '西红柿', amount: '2 个' },
        { item: '孜然', amount: '1 茶匙' },
        { item: '综合香料 (Garam Masala)', amount: '1 茶匙' },
        { item: '奶油', amount: '2 汤匙' },
        { item: '姜蒜酱', amount: '' }
      ],
      instructions: [
        '将菠菜在沸水中焯水，沥干并打成泥。将奶豆腐块煎至金黄色。',
        '炒香洋葱和姜蒜酱。加入西红柿，煮至油水分离。',
        '加入菠菜泥，煮5分钟，然后加入奶豆腐和奶油。调味后即可上桌。'
      ]
    },
    ms: {
      title: 'Palak Paneer',
      description: 'Resipi asli dari Punjab, India',
      ingredients: [
        { item: 'bayam', amount: '300g' },
        { item: 'paneer', amount: '200g' },
        { item: 'bawang', amount: '1 biji' },
        { item: 'tomato', amount: '2 biji' },
        { item: 'jintan putih', amount: '1 sudu kecil' },
        { item: 'garam masala', amount: '1 sudu kecil' },
        { item: 'krim', amount: '2 sudu besar' },
        { item: 'Pes halia-bawang putih', amount: '' }
      ],
      instructions: [
        'Celur bayam dalam air mendidih, toskan dan kisar halus. Goreng kiub paneer sehingga keemasan.',
        'Tumis bawang dan pes halia-bawang putih. Masukkan tomato dan masak sehingga minyak terpisah.',
        'Masukkan puri bayam, masak 5 minit, masukkan paneer dan krim. Perasakan dan hidangkan.'
      ]
    }
  },
  'in-06': {
    'zh-CN': {
      title: '鹰嘴豆咖喱配炸面包 (Chole Bhature)',
      description: '源自印度德里的正宗食谱',
      ingredients: [
        { item: '熟鹰嘴豆', amount: '400克' },
        { item: '洋葱', amount: '2个' },
        { item: '西红柿', amount: '3个' },
        { item: '综合香料 (garam masala)', amount: '1茶匙' },
        { item: '鹰嘴豆香料 (chana masala)', amount: '1茶匙' },
        { item: '中筋面粉 (用于制作炸面包)', amount: '适量' },
        { item: '酸奶', amount: '适量' }
      ],
      instructions: [
        '将鹰嘴豆与茶包一起煮，以获得深色。制作辛辣的洋葱番茄肉汁。',
        '加入鹰嘴豆，用香料炖煮20分钟。用面粉和酸奶制作面团。',
        '擀开炸面包面团，油炸至金黄膨胀。与浓郁的鹰嘴豆咖喱一起食用。'
      ]
    },
    ms: {
      title: 'Chole Bhature',
      description: 'Resipi asli dari Delhi, India',
      ingredients: [
        { item: 'Kacang kuda yang dimasak', amount: '400g' },
        { item: 'Bawang', amount: '2 biji' },
        { item: 'Tomato', amount: '3 biji' },
        { item: 'Garam masala', amount: '1 sudu kecil' },
        { item: 'Chana masala', amount: '1 sudu kecil' },
        { item: 'Tepung serbaguna (untuk bhature)', amount: 'Secukupnya' },
        { item: 'Yogurt', amount: 'Secukupnya' }
      ],
      instructions: [
        'Masak kacang kuda dengan uncang teh untuk warna yang pekat. Buat kuah bawang-tomato pedas.',
        'Masukkan kacang kuda, reneh 20 minit dengan rempah. Buat doh dengan tepung dan yogurt.',
        'Gelek bhature dan goreng jeluk sehingga mengembang keemasan. Hidangkan dengan kari kacang kuda yang masam.'
      ]
    }
  },
  'in-07': {
    'zh-CN': {
      title: '帕夫巴吉 (Pav Bhaji)',
      description: '源自印度孟买的正宗食谱',
      ingredients: [
        { item: '土豆', amount: '4个' },
        { item: '豌豆', amount: '1杯' },
        { item: '甜椒', amount: '1个' },
        { item: '西红柿', amount: '2个' },
        { item: '黄油', amount: '3汤匙' },
        { item: '帕夫巴吉香料', amount: '适量' },
        { item: '帕夫面包', amount: '4个' }
      ],
      instructions: [
        '首先，仔细挑选并清洗4个高淀粉土豆，然后用盐水煮沸，直到用叉子刺穿时变软，大约15-20分钟。沥干水分后，用土豆捣碎器或叉子在碗中捣成光滑无块的泥状。',
        '在另一个锅中，用中火加热1汤匙黄油，然后加入1杯新鲜或冷冻豌豆，偶尔搅拌，煮约5分钟，直到它们变软并呈鲜绿色，撒上少许盐以带出其天然甜味。',
        '接下来，将1个甜椒和2个西红柿切丁，在煮豌豆的同一个锅中，再加入1汤匙黄油，然后用中高火炒切丁的甜椒和西红柿，偶尔搅拌，直到它们开始变软，西红柿开始分解，大约5分钟，拌入一小撮盐以平衡风味。',
        '在一个大的厚底煎锅中，用中火融化剩余的1汤匙黄油，然后加入少量油以防止烧焦，接着撒上帕夫巴吉香料，不断搅拌烘烤，直到香料散发出香味并略微变深，大约1-2分钟，空气中弥漫着烤香料和香草的香气。',
        '将煮熟并捣碎的土豆、豌豆、甜椒和西红柿加入到带有烤香料的煎锅中，搅拌混合，然后用大火烹煮，不断搅拌并用抹刀按压混合物，以分解蔬菜并均匀分布香料，直到混合物变得浓稠干燥，呈深红棕色，大约10-15分钟，挤入新鲜柠檬汁以增加菜肴的亮度和平衡。',
        '在巴吉烹煮的同时，将4个帕夫面包切半，用黄油在中火上烤至金黄色，每面大约2-3分钟，使其外皮酥脆，内部柔软。',
        '上菜时，将一大份巴吉放在盘子或碗中，然后放上一小块黄油，挤上新鲜柠檬汁，撒上切碎的洋葱，旁边配上2个烤好的帕夫面包，非常适合蘸取巴吉浓郁美味的酱汁。',
        '最后，如果需要，撒上新鲜香菜叶和一小勺酸奶或雷塔（raita）作为装饰，为帕夫巴吉辛辣咸香的风味增添清爽和奶油般的对比。'
      ]
    },
    ms: {
      title: 'Pav Bhaji',
      description: 'Resipi asli dari Mumbai, India',
      ingredients: [
        { item: 'Ubi kentang', amount: '4 biji' },
        { item: 'Kacang pis', amount: '1 cawan' },
        { item: 'Lada benggala', amount: '1 biji' },
        { item: 'Mentega', amount: '3 sudu besar' },
        { item: 'Pav bhaji masala', amount: 'Secukupnya' },
        { item: 'Roti pav', amount: '4 biji' }
      ],
      instructions: [
        'Mula-mula, pilih dan basuh 4 biji ubi kentang berkanji tinggi dengan teliti, kemudian rebus dalam air masin sehingga lembut apabila dicucuk dengan garpu, kira-kira 15-20 minit. Selepas itu, toskan dan lenyekkan dalam mangkuk dengan pelenyek kentang atau garpu sehingga licin dan bebas ketulan.',
        'Dalam kuali berasingan, panaskan 1 sudu besar mentega di atas api sederhana, kemudian masukkan 1 cawan kacang pis segar atau beku dan masak, kacau sekali-sekala, sehingga lembut dan hijau terang, kira-kira 5 minit, dengan sedikit garam untuk menyerlahkan kemanisan semula jadi.',
        'Seterusnya, dadu 1 biji lada benggala dan 2 biji tomato, dan dalam kuali yang sama digunakan untuk kacang pis, masukkan lagi satu sudu besar mentega, kemudian tumis lada benggala dan tomato yang didadu di atas api sederhana tinggi, kacau sekali-sekala, sehingga ia mula lembut dan tomato mula hancur, kira-kira 5 minit, kacau sedikit garam untuk mengimbangi rasa.',
        'Dalam kuali besar bertapak tebal, cairkan baki 1 sudu besar mentega di atas api sederhana, kemudian masukkan sedikit minyak untuk mengelakkan hangus, diikuti dengan taburan Pav Bhaji masala, yang perlu dibakar, kacau sentiasa, sehingga rempah wangi dan sedikit gelap, kira-kira 1-2 minit, memenuhi udara dengan aroma rempah dan herba yang dibakar.',
        'Masukkan ubi kentang yang telah dimasak dan dilenyek, kacang pis, lada benggala, dan tomato ke dalam kuali dengan rempah yang dibakar, kacau untuk menggabungkan, kemudian masak di atas api tinggi, kacau dan tekan campuran sentiasa dengan spatula untuk menghancurkan sayur-sayuran dan menyebarkan rempah secara sekata, sehingga campuran pekat dan kering, dengan warna merah-coklat gelap, kira-kira 10-15 minit, kacau perahan jus lemon segar untuk menambah kecerahan dan keseimbangan pada hidangan.',
        'Semasa bhaji sedang dimasak, bakar 4 biji roti pav dengan membelahnya dua dan memanggangnya dalam mentega di atas api sederhana, sehingga ia keemasan, kira-kira 2-3 minit setiap sisi, dengan kerak rangup dan bahagian dalam yang lembut.',
        'Untuk menghidang, letakkan sebahagian besar bhaji ke atas pinggan atau ke dalam mangkuk, kemudian letakkan seketul mentega, perahan jus lemon segar, dan taburan bawang cincang, dengan 2 biji roti pav bakar di sisi, sesuai untuk menyerap sos bhaji yang kaya dan berperisa.',
        'Akhir sekali, hias hidangan dengan taburan daun ketumbar segar dan sesudu yogurt atau raita, jika dikehendaki, untuk menambah kontras yang sejuk dan berkrim kepada rasa pedas dan savuri pav bhaji.'
      ]
    }
  },
  'in-08': {
    'zh-CN': {
      title: '红腰豆咖喱饭 (Rajma Chawal)',
      description: '源自印度旁遮普邦的正宗食谱',
      ingredients: [
        { item: '红腰豆', amount: '300克' },
        { item: '洋葱', amount: '2个' },
        { item: '西红柿', amount: '3个' },
        { item: '孜然', amount: '1茶匙' },
        { item: '综合香料 (garam masala)', amount: '1茶匙' },
        { item: '印度香米', amount: '适量' }
      ],
      instructions: [
        '首先，将300克红腰豆浸泡在水中过夜，使其重新水合变软，然后沥干并在冷水下冲洗，接着转移到高压锅中，加入足够的水覆盖豆子，煮沸后转小火，煮约20-25分钟，直到豆子变软，或者用两根手指可以轻松压碎。',
        '在红腰豆烹煮的同时，准备洋葱番茄肉汁：在一个大平底锅中用中火加热2汤匙酥油或植物油，然后加入2个切碎的洋葱，偶尔搅拌烹煮，直到它们变成深金棕色，焦糖化并散发香气，大约8-10分钟。',
        '将3个切丁的西红柿加入到装有洋葱的平底锅中，继续烹煮，偶尔搅拌，再煮10-12分钟，或者直到西红柿分解，混合物变浓稠成浓郁的肉汁，拌入1茶匙孜然粉和1茶匙综合香料，让香料散发香气，大约1分钟。',
        '红腰豆煮好后，将其加入洋葱番茄肉汁中，搅拌混合，然后转小火，不加盖炖煮20分钟，让风味融合，豆子吸收肉汁浓郁辛辣的味道，用盐调味。',
        '在另一个平底锅中，将1杯印度香米与2杯水混合，煮沸后转小火，盖上盖子，不搅拌地炖煮15-20分钟，直到米饭煮熟，蓬松，水分被吸收，关火，盖上盖子让米饭蒸5分钟。',
        '上菜时，将蓬松的蒸印度香米分装到单独的盘子或大盘中，然后将红腰豆咖喱舀在上面，用一小勺凉爽奶油般的雷塔（raita）、撒上切碎的新鲜香菜和一份浓郁辛辣的泡菜作为装饰，为菜肴增添一丝清新和口感。',
        '最后，退后一步，欣赏完成的红腰豆咖喱饭，这是一道充满活力、芳香四溢、令人深感满足的素食菜肴，其风味深度和质地复杂性将让最挑剔的食客也意犹未尽，嫩滑的红腰豆、浓郁的洋葱番茄肉汁和蓬松的印度香米的结合，是印度美食的真正杰作。'
      ]
    },
    ms: {
      title: 'Rajma Chawal',
      description: 'Resipi asli dari Punjab, India',
      ingredients: [
        { item: 'Kacang merah', amount: '300g' },
        { item: 'Bawang', amount: '2 biji' },
        { item: 'Tomato', amount: '3 biji' },
        { item: 'Jintan putih', amount: '1 sudu kecil' },
        { item: 'Garam masala', amount: '1 sudu kecil' },
        { item: 'Beras Basmati', amount: 'Secukupnya' }
      ],
      instructions: [
        'Untuk bermula, rendam 300g kacang merah dalam air semalaman, biarkan ia menyerap air dan melembut, kemudian toskan dan bilas di bawah air sejuk sebelum dipindahkan ke periuk tekanan dengan air yang cukup untuk menutupi kacang, didihkan, kurangkan api kepada rendah, dan masak sehingga kacang lembut, kira-kira 20-25 minit, atau sehingga ia boleh dilenyek dengan mudah di antara dua jari.',
        'Semasa kacang merah dimasak, sediakan kuah bawang-tomato dengan memanaskan 2 sudu besar minyak sapi atau minyak sayuran dalam periuk besar di atas api sederhana, kemudian masukkan 2 biji bawang yang dicincang halus, masak, kacau sekali-sekala, sehingga ia bertukar menjadi perang keemasan gelap, berkaramel, dan wangi, kira-kira 8-10 minit.',
        'Masukkan 3 biji tomato yang didadu ke dalam periuk bersama bawang, teruskan memasak, kacau sekali-sekala, selama 10-12 minit lagi, atau sehingga tomato hancur, dan campuran telah pekat menjadi kuah yang kaya dan pekat, kacau 1 sudu kecil jintan putih kisar dan 1 sudu kecil garam masala, biarkan rempah mengeluarkan aroma, kira-kira 1 minit.',
        'Setelah kacang merah selesai dimasak, masukkan ke dalam kuah bawang-tomato, kacau untuk menggabungkan, kemudian kurangkan api kepada rendah, dan reneh, tanpa penutup, selama 20 minit, biarkan rasa sebati, dan kacang menyerap rasa kuah yang kaya dan pedas, perasakan dengan garam secukup rasa.',
        'Dalam periuk berasingan, gabungkan 1 cawan beras Basmati dengan 2 cawan air, didihkan, kemudian kurangkan api kepada rendah, tutup, dan reneh, tanpa gangguan, selama 15-20 minit, atau sehingga nasi masak, gebu, dan air telah diserap, matikan api, dan biarkan nasi mengukus, bertutup, selama 5 minit.',
        'Untuk menghidang, bahagikan nasi Basmati kukus yang gebu ke atas pinggan individu atau dulang hidangan besar, kemudian sudukan kari kacang merah di atasnya, hias dengan sesudu raita yang sejuk dan berkrim, taburan daun ketumbar segar yang dicincang, dan hidangan sampingan acar yang masam dan pedas, menambah kesegaran, dan sedikit kerangupan pada hidangan.',
        'Akhir sekali, undur selangkah, dan kagumi Rajma Chawal yang telah siap, hidangan vegetarian yang bersemangat, aromatik, dan sangat memuaskan, dengan kedalaman rasa, dan kerumitan tekstur, yang akan membuatkan walaupun pengunjung yang paling arif menginginkan lebih, gabungan kacang merah yang lembut, kuah bawang-tomato yang kaya, dan nasi Basmati yang gebu, sebuah karya agung masakan India yang sebenar.'
      ]
    }
  },
  'in-09': {
    'zh-CN': {
      title: '萨莫萨三角饺 (Samosa)',
      description: '源自印度德里的正宗食谱',
      ingredients: [
        { item: '中筋面团', amount: '适量' },
        { item: '土豆', amount: '3个' },
        { item: '豌豆', amount: '1杯' },
        { item: '孜然', amount: '适量' },
        { item: '综合香料 (garam masala)', amount: '适量' },
        { item: '青辣椒', amount: '适量' },
        { item: '香菜', amount: '适量' }
      ],
      instructions: [
        '首先，在一个大搅拌碗中混合2杯中筋面粉、1茶匙盐和1/4茶匙泡打粉，然后逐渐加入1/2杯温水，同时揉捏混合物，形成一个坚硬但有弹性的面团，这将是萨莫萨酥脆外皮的基础。',
        '接着，将3个大土豆煮沸，直到用叉子刺穿时变软，然后沥干水分，在一个碗中与1杯青豌豆、1茶匙孜然粉、1/2茶匙综合香料、1个切碎的青辣椒和1汤匙切碎的新鲜香菜一起捣碎，确保所有食材充分混合，土豆泥光滑细腻。',
        '将醒发好的中筋面团擀成大约1/8英寸厚，使用擀面杖使其厚度均匀，然后用饼干切割器或碗边切出圆形，这些圆形最终将变成萨莫萨独特的三角形。',
        '将每个圆形面团擀成薄薄的半圆形，然后将其折叠成锥形，确保边缘对齐且锥形比例均匀，这将作为美味土豆豌豆馅料的容器。',
        '小心地将大约1汤匙土豆豌豆混合物填入锥形面团中，注意不要过量填充，因为这可能导致萨莫萨在油炸过程中爆裂，然后将少量水涂抹在边缘以方便密封。',
        '用叉子将锥形的边缘压合密封，形成装饰性边缘，同时确保馅料牢固地封闭在内，然后对剩余的面团和馅料重复此过程，制作出一批形状均匀的萨莫萨，准备油炸。',
        '在一个深炸锅中加热大约2-3英寸的植物油，用中高火加热至350°F（约175°C），然后小心地将几个萨莫萨放入热油中，注意不要挤满锅，油炸至金黄色酥脆，每面大约需要3-4分钟。',
        '用漏勺将炸好的萨莫萨从油中取出，放在铺有厨房纸的盘子上以沥干多余的油，然后立即与新鲜薄荷和罗望子酸辣酱一起食用，其清凉酸甜的味道将与酥脆辛辣的萨莫萨形成美妙的对比。'
      ]
    },
    ms: {
      title: 'Samosa',
      description: 'Resipi asli dari Delhi, India',
      ingredients: [
        { item: 'Doh maida', amount: 'Secukupnya' },
        { item: 'Ubi kentang', amount: '3 biji' },
        { item: 'Kacang pis', amount: '1 cawan' },
        { item: 'Jintan putih', amount: 'Secukupnya' },
        { item: 'Garam masala', amount: 'Secukupnya' },
        { item: 'Cili hijau', amount: 'Secukupnya' },
        { item: 'Daun ketumbar', amount: 'Secukupnya' }
      ],
      instructions: [
        'Untuk memulakan penyediaan Samosa, gabungkan 2 cawan tepung maida, 1 sudu kecil garam, dan 1/4 sudu kecil serbuk penaik dalam mangkuk adunan besar, kemudian secara beransur-ansur masukkan 1/2 cawan air suam sambil menguli campuran untuk membentuk doh yang kaku tetapi mudah dibentuk, yang akan menjadi asas luaran Samosa yang rangup.',
        'Seterusnya, rebus 3 biji ubi kentang besar sehingga lembut apabila dicucuk dengan garpu, kemudian toskan dan lenyekkan dalam mangkuk bersama 1 cawan kacang pis hijau, 1 sudu kecil jintan putih kisar, 1/2 sudu kecil garam masala, 1 biji cili hijau cincang, dan 1 sudu besar daun ketumbar segar yang dicincang, memastikan semua bahan sebati dan kentang licin serta berkrim.',
        'Gelek doh maida yang telah direhatkan hingga ketebalan kira-kira 1/8 inci, menggunakan penggelek untuk mencapai keseragaman, kemudian gunakan pemotong biskut atau tepi mangkuk untuk memotong bentuk bulat, yang akhirnya akan diubah menjadi bentuk segi tiga Samosa yang tersendiri.',
        'Gelek setiap kepingan doh bulat menjadi separuh bulatan nipis, kemudian lipat menjadi bentuk kon, memastikan tepinya sejajar dan kon berkadar sama, yang akan berfungsi sebagai bekas untuk inti kentang dan kacang pis yang berperisa.',
        'Isi doh berbentuk kon dengan kira-kira 1 sudu besar campuran kentang dan kacang pis dengan berhati-hati, berwaspada agar tidak terlalu penuh, kerana ini boleh menyebabkan Samosa pecah semasa proses menggoreng, kemudian sapukan sedikit air pada tepi untuk memudahkan pengedapan.',
        'Tutup tepi kon dengan menekannya bersama garpu, mencipta sempadan hiasan sambil memastikan inti tertutup rapat, kemudian ulangi proses untuk doh dan inti yang tinggal, menghasilkan sekumpulan Samosa seragam yang sedia untuk digoreng.',
        'Panaskan kira-kira 2-3 inci minyak sayuran dalam kuali goreng jeluk di atas api sederhana tinggi sehingga mencapai suhu 350°F (kira-kira 175°C), kemudian masukkan beberapa Samosa ke dalam minyak panas dengan berhati-hati, berwaspada agar tidak memenuhi kuali, dan goreng sehingga ia keemasan dan rangup, yang sepatutnya mengambil masa kira-kira 3-4 minit setiap sisi.',
        'Menggunakan senduk berlubang, keluarkan Samosa yang telah digoreng dari minyak dan letakkan di atas pinggan yang dialas dengan tuala kertas untuk menapis minyak berlebihan, kemudian hidangkan segera dengan sos pudina segar dan asam jawa, yang rasa sejuk dan masamnya akan memberikan kontras yang menarik kepada Samosa yang rangup dan pedas.'
      ]
    }
  },
  'in-10': {
    'zh-CN': {
      title: '玫瑰甜球 (Gulab Jamun)',
      description: '源自印度加尔各答的正宗食谱',
      ingredients: [
        { item: '奶酪块 (mawa/khoya)', amount: '200克' },
        { item: '中筋面粉', amount: '2汤匙' },
        { item: '牛奶', amount: '适量' },
        { item: '食用油 (用于油炸)', amount: '适量' },
        { item: '糖浆 (含小豆蔻、玫瑰水)', amount: '适量' }
      ],
      instructions: [
        '为了开始制作玫瑰甜球，首先将200克奶酪块（mawa/khoya）揉碎放入一个大而浅的盘中，注意去除任何可能影响面团均匀性的块状物或大颗粒。',
        '在一个单独的小碗中，将2汤匙中筋面粉和少量牛奶搅拌均匀，只需足够形成一个光滑、有弹性的混合物，稍后将与奶酪块混合。',
        '逐渐将面粉混合物加入揉碎的奶酪块中，用手掌根部或木勺揉捏混合物，直到形成一个柔软、有弹性的面团，注意不要过度揉捏，这可能导致最终产品变得致密坚韧。',
        '一旦面团达到所需的稠度，用保鲜膜或湿布盖住，让其静置30分钟，让面筋放松，食材无缝融合。',
        '面团醒发后，将其分成小而均匀的部分，大约小鸡蛋大小，然后用手掌将每个部分搓成光滑无瑕的球状，施加轻柔的压力以消除可能形成的任何皱纹或折痕。',
        '在一个深炸锅或油炸锅中，加入足量的油，用小火加热，使温度达到160-180°C，此时油会闪烁并轻微颤动，但不会冒烟，然后小心地将面团球放入热油中，注意不要挤满锅。',
        '将玫瑰甜球炸至深金棕色，定期翻动以确保均匀烹饪，一旦达到所需的颜色，用漏勺将其从油中取出，放在铺有厨房纸的盘子上以沥干多余的油。',
        '最后，将炸好的球转移到温热的糖浆中，糖浆中注入了小豆蔻和玫瑰水的精华，让它们浸泡至少2小时，在此期间它们将吸收芬芳甜美的液体，并转化为柔软、入口即化的甜点，可根据喜好热食或冷食。'
      ]
    },
    ms: {
      title: 'Gulab Jamun',
      description: 'Resipi asli dari Kolkata, India',
      ingredients: [
        { item: 'Mawa (khoya)', amount: '200g' },
        { item: 'Maida', amount: '2 sudu besar' },
        { item: 'Susu', amount: 'Secukupnya' },
        { item: 'Minyak untuk menggoreng', amount: 'Secukupnya' },
        { item: 'Sirap gula (dengan buah pelaga, air mawar)', amount: 'Secukupnya' }
      ],
      instructions: [
        'Untuk memulakan penyediaan Gulab Jamun, mulakan dengan meramas 200g mawa (khoya) ke dalam pinggan besar yang cetek, berhati-hati untuk membuang sebarang ketulan atau zarah besar yang mungkin mengganggu keseragaman doh.',
        'Dalam mangkuk berasingan yang lebih kecil, pukul bersama 2 sudu besar maida dan sedikit susu, cukup untuk menghasilkan campuran yang licin dan mudah dibentuk yang kemudiannya akan digabungkan ke dalam khoya.',
        'Secara beransur-ansur masukkan campuran maida ke dalam khoya yang telah diramas, uli gabungan itu dengan tumit tangan anda atau sudu kayu sehingga doh yang lembut dan mudah dibentuk terbentuk, berhati-hati agar tidak menguli terlalu banyak, yang boleh menyebabkan produk akhir menjadi padat dan liat.',
        'Setelah doh mencapai konsistensi yang dikehendaki, tutup dengan pembalut plastik atau kain lembap dan biarkan ia berehat selama 30 minit, membenarkan gluten untuk berehat dan bahan-bahan untuk sebati dengan lancar.',
        'Dengan doh yang kini telah direhatkan, bahagikannya kepada bahagian kecil yang seragam, kira-kira saiz telur kecil, dan gelek setiap segmen di antara tapak tangan anda menjadi bola yang licin dan tanpa cela, menggunakan tekanan lembut untuk menghilangkan sebarang kedutan atau lipatan yang mungkin terbentuk.',
        'Panaskan kuali goreng jeluk atau penggoreng jeluk yang diisi dengan jumlah minyak yang mencukupi di atas api perlahan, bawa suhu ke julat 160-180°C, pada ketika itu minyak akan berkilau dan sedikit bergetar, tetapi tidak berasap, dan kemudian masukkan bola doh ke dalam minyak panas dengan berhati-hati, berwaspada agar tidak memenuhi kuali.',
        'Goreng jeluk bola Gulab Jamun sehingga ia mencapai warna perang keemasan gelap, putarkannya secara berkala untuk memastikan masakan yang sekata, dan setelah ia mencapai warna yang dikehendaki, keluarkannya dari minyak dengan senduk berlubang dan letakkan di atas pinggan yang dialas dengan tuala kertas untuk menapis minyak berlebihan.',
        'Akhir sekali, pindahkan bola yang telah digoreng ke dalam sirap gula suam, yang diresapi dengan pati buah pelaga dan air mawar, dan biarkan ia meresap selama sekurang-kurangnya 2 jam, di mana ia akan menyerap cecair wangi dan manis serta berubah menjadi hidangan yang lembut dan cair di mulut yang boleh dihidangkan panas atau sejuk, mengikut kehendak.'
      ]
    }
  },
  'in-11': {
    'zh-CN': {
      title: '阿鲁帕拉塔饼',
      description: '源自印度阿姆利则的 authentic 食谱。',
      ingredients: [
        { item: '小麦面团', amount: '' },
        { item: '土豆（煮熟，捣成泥）', amount: '3个' },
        { item: '青辣椒', amount: '' },
        { item: '印度香芹籽', amount: '' },
        { item: '孜然', amount: '' },
        { item: '香菜', amount: '' },
        { item: '黄油', amount: '' }
      ],
      instructions: [
        '首先，在一个大碗中混合2杯温水、3汤匙酥油和1茶匙盐，然后逐渐加入4杯全麦面粉，揉搓面团约10分钟，直至其变得光滑柔软，最终形成一个柔软有弹性的面团。',
        '接下来，准备馅料。将3个大土豆煮至用叉子轻易刺穿变软，然后用叉子或土豆捣泥器在碗中捣碎，注意不要过度捣碎，否则土豆会变得黏糊。',
        '在另一个平底锅中，用中火加热1汤匙酥油，然后加入1茶匙印度香芹籽和1茶匙孜然粒，让它们滋滋作响并散发香气约30秒，或直到香气四溢，然后加入1个切碎的青辣椒，再煮30秒。',
        '将煮好的香料混合物与捣碎的土豆、1茶匙香菜粉和适量盐混合，充分搅拌，制成一个味道均衡、辛辣、泥土味和微甜的均匀馅料。',
        '将小麦面团分成6-8等份，具体取决于所需的帕拉塔饼大小，然后将每份揉成球状，用擀面杖轻轻擀成圆盘状，注意不要施加太大压力，以免面团破裂。',
        '将1-2汤匙土豆馅放在每个面团圆盘的中心，然后将面团对折盖住馅料，形成半月形，将边缘按压密封帕拉塔饼，确保馅料完全包裹在内，以防烹饪时溢出。',
        '用中火加热不粘锅或煎锅，然后将帕拉塔饼放在锅中，第一面煎1-2分钟，或直到边缘开始卷曲且表面干燥，然后涂抹大量黄油在帕拉塔饼顶部，翻面再煎1-2分钟，或直到两面出现金黄色斑点。',
        '重复烹饪剩余的帕拉塔饼，根据需要调整火力以防烧焦，然后趁热将阿鲁帕拉塔饼与一小块黄油、少许切碎的香菜以及一份雷塔或酸辣酱一起食用，以平衡菜肴的浓郁口感。'
      ]
    },
    ms: {
      title: 'Aloo Paratha',
      description: 'Resipi asli dari Amritsar, India.',
      ingredients: [
        { item: 'Doh gandum', amount: '' },
        { item: 'kentang (direbus, dilenyek)', amount: '3 biji' },
        { item: 'Cili hijau', amount: '' },
        { item: 'Ajwain', amount: '' },
        { item: 'Jintan putih', amount: '' },
        { item: 'Ketumbar', amount: '' },
        { item: 'Mentega', amount: '' }
      ],
      instructions: [
        'Untuk bermula, buat doh gandum dengan menggabungkan 2 cawan air suam dengan 3 sudu besar minyak sapi dan 1 sudu teh garam dalam mangkuk adunan besar, kemudian masukkan 4 cawan tepung gandum secara beransur-ansur, uli campuran selama kira-kira 10 minit sehingga menjadi licin dan mudah dibentuk, akhirnya membentuk bola yang lembut dan elastik.',
        'Seterusnya, sediakan inti dengan merebus 3 biji kentang besar sehingga lembut apabila dicucuk dengan garpu, kemudian lenyekkan dalam mangkuk menggunakan garpu atau pelenyek kentang, berhati-hati agar tidak terlalu lenyek, yang boleh menjadikan kentang melekit.',
        'Dalam kuali berasingan, panaskan 1 sudu besar minyak sapi di atas api sederhana, kemudian masukkan 1 sudu teh ajwain dan 1 sudu teh biji jintan putih, biarkan ia mendesis dan mengeluarkan aroma selama kira-kira 30 saat, atau sehingga wangi, sebelum menambah 1 biji cili hijau cincang dan masak selama 30 saat lagi.',
        'Gabungkan campuran rempah yang telah dimasak dengan kentang lenyek, 1 sudu teh serbuk ketumbar, dan garam secukup rasa, gaul rata untuk menghasilkan inti yang homogen dengan keseimbangan rasa pedas, tanah, dan sedikit manis.',
        'Bahagikan doh gandum kepada 6-8 bahagian yang sama, bergantung pada saiz paratha yang dikehendaki, kemudian gulung setiap bahagian menjadi bola dan leperkan sedikit menjadi bentuk cakera menggunakan penggelek, berhati-hati agar tidak menekan terlalu kuat, yang boleh menyebabkan doh koyak.',
        'Letakkan 1-2 sudu besar inti kentang di tengah setiap cakera doh, kemudian lipat doh di atas inti untuk membentuk bentuk separuh bulan, tekan tepi bersama untuk menutup paratha, memastikan inti tertutup sepenuhnya untuk mengelakkannya daripada keluar semasa memasak.',
        'Panaskan tawa atau kuali tidak melekat di atas api sederhana, kemudian letakkan paratha di atas tawa dan masak selama 1-2 minit di sebelah pertama, atau sehingga tepi mula melengkung dan permukaan kering, sebelum menyapu mentega yang banyak di atas paratha dan membalikkannya untuk memasak selama 1-2 minit lagi, atau sehingga bintik-bintik perang keemasan muncul di kedua-dua belah.',
        'Ulangi proses memasak dengan paratha yang tinggal, laraskan api mengikut keperluan untuk mengelakkan hangus, dan hidangkan aloo paratha panas dengan sedikit mentega, taburan daun ketumbar cincang, dan hidangan sampingan raita atau chutney untuk mengimbangi kekayaan hidangan.'
      ]
    }
  },
  'in-12': {
    'zh-CN': {
      title: '罗根乔什',
      description: '源自印度克什米尔的 authentic 食谱。',
      ingredients: [
        { item: '羊肉', amount: '500克' },
        { item: '克什米尔红辣椒酱', amount: '' },
        { item: '茴香', amount: '' },
        { item: '干姜', amount: '' },
        { item: '青葱酱', amount: '' },
        { item: '酥油', amount: '' },
        { item: '整粒香料', amount: '' }
      ],
      instructions: [
        '首先，在一个厚底荷兰烤箱或大而深的平底锅中用大火加热2-3汤匙酥油，让酥油闪烁并略微冒烟，这表明它已达到完美的煎烤温度。',
        '接下来，将整粒香料，包括肉桂棒、豆蔻荚和丁香，加入热酥油中，不断搅拌以防烧焦，煮1-2分钟，直到香料散发香气并开始展开其芬芳。',
        '将500克羊肉块加入锅中，用大火将所有侧面煎至金黄，用铲子打散任何结块并确保均匀烹饪，直到羊肉呈漂亮的棕色，形成一层浓郁的焦糖化外皮，大约5-7分钟。',
        '羊肉煎好后，加入2-3汤匙克什米尔红辣椒酱到锅中，搅拌均匀地裹住羊肉，煮2-3分钟，让辣椒酱颜色变深，味道更浓郁，不断搅拌以防烧焦。',
        '加入1茶匙茴香粉到锅中，搅拌与辣椒酱和羊肉混合，继续煮2-3分钟，直到混合物散发香气，油开始分离，形成浓郁、油润的酱汁。',
        '接下来，加入2汤匙青葱酱到锅中，搅拌与羊肉和香料混合物混合，用小火煮，偶尔搅拌，5-7分钟，直到青葱变软变透明，为菜肴增添甜味深度。',
        '最后，加入1杯水到锅中，将混合物煮沸，然后盖上紧密的锅盖，转移到小火上，不打扰地煮45分钟，或直到羊肉变软，轻易散开，酱汁变浓稠，羊肉裹上一层浓郁美味的釉汁。',
        '将锅从火上移开，盖上盖子静置10-15分钟，让味道成熟并融合在一起，然后趁热将罗根乔什上桌，用新鲜香菜叶装饰，并搭配印度香米饭或馕饼。'
      ]
    },
    ms: {
      title: 'Rogan Josh',
      description: 'Resipi asli dari Kashmir, India.',
      ingredients: [
        { item: 'daging kambing', amount: '500g' },
        { item: 'Pes cili merah Kashmir', amount: '' },
        { item: 'Jintan manis', amount: '' },
        { item: 'Halia kering', amount: '' },
        { item: 'Pes bawang merah', amount: '' },
        { item: 'Minyak sapi', amount: '' },
        { item: 'Rempah ratus biji', amount: '' }
      ],
      instructions: [
        'Pertama, panaskan 2-3 sudu besar minyak sapi dalam periuk Belanda bertutup tebal atau periuk besar dan dalam di atas api yang tinggi, biarkan minyak sapi berkilau dan sedikit berasap, menunjukkan ia telah mencapai suhu yang sempurna untuk membakar.',
        'Seterusnya, masukkan rempah ratus biji, termasuk batang kayu manis, buah pelaga, dan cengkih, ke dalam minyak sapi panas, kacau sentiasa untuk mengelakkan hangus, dan masak selama 1-2 minit sehingga rempah wangi dan mula mengeluarkan aromanya.',
        'Masukkan 500g kepingan daging kambing ke dalam periuk, bakar semua sisi di atas api yang tinggi, gunakan spatula untuk memecahkan sebarang gumpalan dan memastikan masakan sekata, sehingga daging kambing berwarna perang cantik, membentuk kerak karamel yang kaya, kira-kira 5-7 minit.',
        'Setelah daging kambing berwarna perang, masukkan 2-3 sudu besar pes cili merah Kashmir ke dalam periuk, kacau untuk menyalut daging kambing secara sekata, dan masak selama 2-3 minit, biarkan pes cili menjadi gelap dan rasa semakin pekat, kacau sentiasa untuk mengelakkan hangus.',
        'Masukkan 1 sudu teh serbuk jintan manis ke dalam periuk, kacau untuk digabungkan dengan pes cili dan daging kambing, dan teruskan memasak selama 2-3 minit lagi, sehingga campuran wangi dan minyak mula terpisah, menghasilkan sos yang kaya dan berminyak.',
        'Seterusnya, masukkan 2 sudu besar pes bawang merah ke dalam periuk, kacau untuk digabungkan dengan daging kambing dan campuran rempah, dan masak di atas api perlahan, kacau sekali-sekala, selama 5-7 minit, sehingga bawang merah lembut dan lutsinar, menambah kedalaman kemanisan pada hidangan.',
        'Akhir sekali, masukkan 1 cawan air ke dalam periuk, biarkan campuran mendidih perlahan, kemudian tutup periuk dengan penutup yang ketat, dan pindahkan ke api perlahan, di mana ia akan masak, tanpa gangguan, selama 45 minit, atau sehingga daging kambing lembut dan mudah hancur, dan sos telah pekat, menyalut daging kambing dengan lapisan berkilat yang kaya dan berperisa.',
        'Angkat periuk dari api, dan biarkan ia berehat, bertutup, selama 10-15 minit, membiarkan rasa matang dan sebati, sebelum menghidangkan Rogan Josh panas, dihiasi dengan daun ketumbar segar dan nasi basmati atau roti naan di sisi.'
      ]
    }
  },
  'it-01': {
    'zh-CN': {
      title: '玛格丽特披萨',
      description: '源自意大利那不勒斯的 authentic 食谱。',
      ingredients: [
        { item: '披萨面团', amount: '' },
        { item: '圣马力诺番茄', amount: '' },
        { item: '新鲜马苏里拉奶酪', amount: '' },
        { item: '罗勒', amount: '' },
        { item: '橄榄油', amount: '' },
        { item: '盐', amount: '' }
      ],
      instructions: [
        '首先准备披萨面团，让它在室温下静置至少1小时，以放松面筋，使其更柔软，更容易擀成薄而均匀的圆形。',
        '通过轻柔的拉伸和抛掷动作，将面团塑形成一个12英寸的圆形，保持大约1/4英寸的均匀厚度，边缘略厚，以防止过度烤焦。',
        '在面团上铺一层压碎的圣马力诺番茄，边缘留出1/2英寸的边框，以形成清晰的饼皮，注意不要放太多馅料，这会导致饼皮湿软和味道不平衡。',
        '接下来，将撕碎的新鲜马苏里拉奶酪均匀地撒在番茄酱上，让一些奶酪接触到饼皮边缘，这样在烘烤时会融化并形成金黄色、奶油状的冠冕。',
        '在披萨上淋上少量优质橄榄油，用轻柔的扫动动作使奶酪和番茄均匀地涂上一层薄薄的油，然后撒一小撮片状海盐，以增强食材的风味和质地。',
        '将披萨放入预热至250°C的烤箱中，烘烤10分钟，或直到饼皮呈金黄色、起泡并略带焦痕，外脆内软，奶酪融化呈奶油状，表面泛着微妙的光泽。',
        '将披萨从烤箱中取出，撒上一把新鲜罗勒叶，其明亮、草本的风味和香气与奶酪和番茄浓郁的咸香味道形成美妙的对比，并为成品菜肴增添一抹鲜艳的色彩。',
        '最后，让披萨冷却一两分钟后再切片享用，注意使用锋利的刀或披萨刀干净均匀地切片，以保持饼皮和配料的细腻质地。'
      ]
    },
    ms: {
      title: 'Pizza Margherita',
      description: 'Resipi asli dari Naples, Itali.',
      ingredients: [
        { item: 'Doh pizza', amount: '' },
        { item: 'Tomato San Marzano', amount: '' },
        { item: 'Mozzarella segar', amount: '' },
        { item: 'Selasih', amount: '' },
        { item: 'Minyak zaitun', amount: '' },
        { item: 'Garam', amount: '' }
      ],
      instructions: [
        'Mulakan dengan menyediakan doh pizza anda, biarkan ia berehat pada suhu bilik selama sekurang-kurangnya 1 jam untuk merehatkan gluten, menjadikannya lebih mudah dibentuk menjadi bulatan yang nipis dan sekata.',
        'Menggunakan gabungan regangan lembut dan gerakan melambung, bentuk doh menjadi bulatan 12 inci, mengekalkan ketebalan seragam kira-kira 1/4 inci, dengan kerak yang sedikit lebih tebal di tepi untuk mengelakkan keperangan berlebihan.',
        'Sapu lapisan tomato San Marzano yang dihancurkan di atas doh, tinggalkan sempadan 1/2 inci di sekeliling tepi untuk mencipta kerak yang jelas, dan berhati-hati agar tidak membebankan pizza, kerana ini boleh menyebabkan kerak lembap dan rasa yang tidak seimbang.',
        'Seterusnya, tambahkan kepingan keju mozzarella segar yang dicarik, sebarkannya secara sekata di atas sos tomato, dan biarkan sebahagian keju menyentuh tepi kerak, di mana ia akan cair dan membentuk mahkota keemasan, berkrim semasa membakar.',
        'Titiskan sedikit minyak zaitun berkualiti tinggi di atas pizza, menggunakan gerakan menyapu lembut untuk menyalut keju dan tomato dalam lapisan nipis dan sekata, dan kemudian taburkan secubit garam laut kepingan di atas untuk meningkatkan rasa dan tekstur bahan-bahan.',
        'Letakkan pizza dalam ketuhar yang telah dipanaskan pada suhu 250°C, bakar selama 10 minit, atau sehingga kerak berwarna perang keemasan, berbuih, dan sedikit hangus, dengan kerangupan halus yang menghasilkan bahagian dalam yang lembut dan lapang, dan keju cair dan berkrim, dengan kilauan halus di permukaannya.',
        'Keluarkan pizza dari ketuhar dan letakkan segenggam daun selasih segar di atasnya, rasa dan aroma herba yang cerah memberikan kontras yang indah kepada rasa keju dan tomato yang kaya dan gurih, serta menambah warna yang terang pada hidangan yang telah siap.',
        'Akhir sekali, biarkan pizza sejuk selama satu atau dua minit sebelum dihiris dan dihidangkan, berhati-hati untuk menghiris dengan bersih dan sekata, menggunakan pisau tajam atau pemotong pizza untuk mengekalkan tekstur halus kerak dan topping.'
      ]
    }
  },
  'it-02': {
    'zh-CN': {
      title: '意式培根蛋面',
      description: '源自意大利罗马的 authentic 食谱。',
      ingredients: [
        { item: '意大利面', amount: '200克' },
        { item: '猪颊肉 (或意式培根)', amount: '100克' },
        { item: '蛋黄', amount: '3个' },
        { item: '佩科里诺罗马诺奶酪', amount: '50克' },
        { item: '黑胡椒', amount: '' }
      ],
      instructions: [
        '首先，将一大锅盐水烧开，煮200克意大利面至弹牙（al dente），大约需要7-9分钟，或直到面条中心仍略带嚼劲，避免煮过头，否则会变得糊状。',
        '在意大利面烹煮的同时，将100克猪颊肉（或意式培根）切成约1/4英寸厚的薄条，放入平底锅中用中火煎炸，利用其自身的脂肪作为烹饪介质，直到它们变得酥脆金黄，偶尔搅拌以防烧焦。',
        '猪颊肉酥脆后，将其从火上移开，放在铺有厨房纸巾的盘子上沥干多余的脂肪，注意不要倒掉留在平底锅中的美味油滴，这些油滴稍后将用于增加菜肴的深度。',
        '在一个中等大小的碗中，将3个蛋黄、50克磨碎的佩科里诺罗马诺奶酪和大量现磨黑胡椒搅拌均匀，直到混合物光滑且充分混合，呈现出浓郁的奶油质地和奶酪与胡椒的辛辣香气。',
        '意大利面煮好后，用滤锅沥干，立即将其加入留有猪颊肉油滴的平底锅中，用夹子或叉子搅拌意面，使其均匀裹上美味的脂肪，这将有助于形成奶油状酱汁。',
        '接下来，将平底锅从热源上移开，以防加入蛋黄时炒熟，然后将蛋黄混合物倒在意大利面上，用夹子或叉子用力搅拌意面，使食材混合，形成一种奶油状、充分乳化的酱汁，紧紧附着在意大利面上。',
        '继续搅拌意大利面约2-3分钟，直到酱汁达到所需的稠度，应是奶油状且光滑，均匀地裹住意面，带有奶酪、鸡蛋和猪颊肉的浓郁咸香风味，以及令人满足的质地，既舒适又精致。',
        '最后，将酥脆的猪颊肉加入意大利面中，再搅拌一次，然后立即上桌，如果喜欢，可以再撒上一些磨碎的佩科里诺罗马诺奶酪和几下黑胡椒。'
      ]
    },
    ms: {
      title: 'Spaghetti Carbonara',
      description: 'Resipi asli dari Rome, Itali.',
      ingredients: [
        { item: 'spageti', amount: '200g' },
        { item: 'guanciale (atau pancetta)', amount: '100g' },
        { item: 'kuning telur', amount: '3 biji' },
        { item: 'Pecorino Romano', amount: '50g' },
        { item: 'Lada hitam', amount: '' }
      ],
      instructions: [
        'Pertama, didihkan sepanci besar air masin dan masak 200g spageti al dente, yang sepatutnya mengambil masa sekitar 7-9 minit, atau sehingga ia masih mengekalkan sedikit kekenyalan di tengah, sambil mengelakkan masak berlebihan, yang boleh menyebabkan tekstur lembik.',
        'Semasa spageti sedang dimasak, potong 100g guanciale (atau pancetta) menjadi jalur nipis, kira-kira 1/4 inci tebal, dan goreng dalam kuali di atas api sederhana, menggunakan lemaknya sendiri sebagai medium memasak, sehingga ia menjadi rangup dan perang keemasan, kacau sekali-sekala untuk mengelakkan hangus.',
        'Setelah guanciale rangup, angkat dari api dan ketepikan di atas pinggan yang dialas kertas penyerap untuk mengeringkan sebarang lemak berlebihan, berhati-hati agar tidak membuang titisan lemak berperisa yang tertinggal dalam kuali, yang akan digunakan untuk menambah kedalaman pada hidangan kemudian.',
        'Dalam mangkuk bersaiz sederhana, pukul bersama 3 biji kuning telur, 50g keju Pecorino Romano parut, dan sejumlah besar lada hitam yang baru dikisar, sehingga campuran licin dan sebati, dengan tekstur berkrim yang kaya dan aroma keju dan lada yang kuat.',
        'Apabila spageti telah masak, toskan dalam penapis dan segera masukkan ke dalam kuali dengan titisan lemak guanciale yang telah disimpan, gaul pasta untuk menyalutnya secara sekata dengan lemak berperisa, yang akan membantu mencipta sos berkrim.',
        'Seterusnya, angkat kuali dari sumber haba untuk mengelakkan kuning telur daripada berketul apabila ia ditambah, dan tuangkan campuran kuning telur ke atas spageti, gaul pasta dengan kuat menggunakan penyepit atau garpu untuk menggabungkan bahan-bahan dan mencipta sos berkrim, teremulsi dengan baik yang melekat pada spageti.',
        'Teruskan menggaul spageti selama kira-kira 2-3 minit, sehingga sos mencapai konsistensi yang dikehendaki, yang sepatutnya berkrim dan licin, menyalut pasta secara sekata, dengan rasa keju, telur, dan guanciale yang kaya dan gurih, serta tekstur yang memuaskan yang selesa dan halus.',
        'Akhir sekali, masukkan guanciale rangup ke dalam spageti dan gaul semuanya sekali lagi, sebelum menghidangkan hidangan serta-merta, dihiasi dengan keju Pecorino Romano parut tambahan dan beberapa kisaran lada hitam, jika dikehendaki.'
      ]
    }
  },
  'it-03': {
    'zh-CN': {
      title: '米兰式烩饭',
      description: '源自意大利米兰的 authentic 食谱。',
      ingredients: [
        { item: '阿博里奥米', amount: '300克' },
        { item: '藏红花', amount: '一小撮' },
        { item: '洋葱', amount: '1个' },
        { item: '温热高汤', amount: '1.5升' },
        { item: '黄油', amount: '80克' },
        { item: '帕尔马干酪', amount: '' }
      ],
      instructions: [
        '首先，将1个洋葱切碎，注意切成均匀的小块以便均匀烹饪，然后用20克无盐黄油以小火将其炒软，偶尔搅拌，直到它变得半透明并略微焦糖化，带有甜味和深层风味，大约8分钟。',
        '接下来，将300克阿博里奥米加入平底锅中，搅拌使米粒裹上黄油并与洋葱混合，将米饭烤2分钟，使其吸收洋葱和黄油的风味和香气，同时散发出坚果味和轻微的烤香。',
        '向平底锅中加入适量的干白葡萄酒，不断搅拌以去除锅底的美味化合物，直到液体几乎完全被吸收，米饭被轻轻包裹，大约2-3分钟，葡萄酒减少，混合物散发出芬芳、略带甜味的香气。',
        '现在，开始一次一勺地加入1.5升温热高汤，不断搅拌，让每一份高汤都被吸收后再加入下一份，在18分钟内保持一致的奶油质地，随着米粒的烹煮和膨胀，同时释放淀粉，形成浓郁、柔滑的酱汁，液体逐渐减少，混合物转化为奶油状、嫩滑的烩饭。',
        '在烹饪的最后2分钟，加入一小撮藏红花丝（之前用2汤匙热水浸泡过），轻轻搅拌使其均匀分布，并为烩饭注入藏红花鲜艳的黄色、微妙的泥土风味和诱人的香气。',
        '米饭煮熟且液体被吸收后，将平底锅从火上移开，然后加入60克冷的无盐黄油，将其切成小块以方便融化和均匀分布，直到完全混合，烩饭呈现光滑、奶油状的稠度，带有奢华的黄油风味。',
        '最后，拌入80克磨碎的帕尔马干酪，注意保持光滑、均匀的质地，让奶酪融化并将其咸香、坚果风味分布到整个烩饭中，然后盖上锅盖静置2分钟，让风味融合，质地凝固，最终制成一份奶油状、嫩滑、风味浓郁的米兰式烩饭，即可上桌。'
      ]
    },
    ms: {
      title: 'Risotto alla Milanese',
      description: 'Resipi asli dari Milan, Itali.',
      ingredients: [
        { item: 'beras Arborio', amount: '300g' },
        { item: 'Saffron', amount: 'secubit' },
        { item: 'bawang besar', amount: '1 biji' },
        { item: 'stok suam', amount: '1.5L' },
        { item: 'mentega', amount: '80g' },
        { item: 'Keju Parmesan', amount: '' }
      ],
      instructions: [
        'Pertama, cincang halus 1 biji bawang besar, berhati-hati untuk menghasilkan kepingan seragam yang akan masak sekata, kemudian lembutkannya dalam 20g mentega tanpa garam di atas api perlahan, kacau sekali-sekala, sehingga ia mencapai keadaan lutsinar dan sedikit karamel, dengan rasa manis dan mendalam, kira-kira 8 minit.',
        'Seterusnya, masukkan 300g beras Arborio ke dalam kuali, kacau untuk menyalut beras dengan mentega dan gabungkan dengan bawang, bakar beras selama 2 minit, biarkan ia menyerap rasa dan aroma bawang dan mentega, sambil mengembangkan rasa kekacang dan aroma panggang ringan.',
        'Masukkan jumlah wain putih kering yang sesuai ke dalam kuali, kacau sentiasa untuk deglaze dan melepaskan sebatian berperisa dari dasar kuali, sehingga cecair hampir sepenuhnya diserap dan beras disalut ringan, kira-kira 2-3 minit, dengan wain berkurangan dan campuran mengeluarkan aroma wangi, sedikit manis.',
        'Sekarang, mula masukkan 1.5L stok suam, satu senduk pada satu masa, kacau sentiasa dan biarkan setiap bahagian menyerap sebelum menambah yang seterusnya, mengekalkan tekstur berkrim yang konsisten, selama 18 minit, apabila biji beras masak dan mengembang, sambil melepaskan kanjinya, mencipta sos yang kaya dan baldu, dengan cecair secara beransur-ansur berkurangan dan campuran berubah menjadi risotto berkrim dan lembut.',
        'Semasa 2 minit terakhir memasak, masukkan secubit benang saffron, yang sebelum ini direndam dalam 2 sudu besar air panas, kacau perlahan untuk mengedarkan secara sekata dan menyemai risotto dengan warna kuning terang, rasa tanah yang halus, dan aroma saffron yang memikat.',
        'Setelah beras masak dan cecair telah diserap, angkat kuali dari api, kemudian masukkan 60g mentega tanpa garam sejuk, potong menjadi kepingan kecil untuk memudahkan pencairan dan pengedaran sekata, sehingga sebati sepenuhnya dan risotto mempunyai konsistensi licin, berkrim, dengan rasa mentega yang mewah.',
        'Akhir sekali, masukkan 80g keju Parmesan parut, berhati-hati untuk mengekalkan tekstur yang licin dan sekata, biarkan keju cair dan mengedarkan rasa masin, kekacang ke seluruh risotto, sebelum menutup kuali dengan penutup dan membiarkannya berehat selama 2 minit, untuk membiarkan rasa sebati dan tekstur mengeras, menghasilkan Risotto alla Milanese yang berkrim, lembut, dan sangat berperisa, sedia untuk dihidangkan.'
      ]
    }
  },
  'it-04': {
    'zh-CN': {
      title: '提拉米苏',
      description: '源自意大利特雷维索的正宗食谱',
      ingredients: [
        { item: '马斯卡彭芝士', amount: '250克' },
        { item: '鸡蛋', amount: '3个' },
        { item: '糖', amount: '80克' },
        { item: '浓缩咖啡', amount: '150毫升' },
        { item: '手指饼干', amount: '200克' },
        { item: '可可粉', amount: '' }
      ],
      instructions: [
        '首先，将3个大鸡蛋的蛋清和蛋黄分离，注意不要让蛋黄污染蛋清，否则会影响蛋清打发至硬性发泡。将蛋清放入一个干净、干燥的碗中备用。',
        '在另一个大碗中，将蛋黄和80克细砂糖搅拌均匀，直到混合物呈淡黄色，体积几乎翻倍，质地光滑轻盈，表明糖已完全溶解，蛋黄充分充气。',
        '接着，将250克马斯卡彭芝士加入蛋黄混合物中，搅拌至芝士完全融合，混合物变得光滑、奶油状，并带有微妙的光泽。注意不要过度搅拌，否则可能导致马斯卡彭芝士分离，混合物变得过硬。',
        '在装有蛋清的碗中，使用电动打蛋器或手动打蛋器开始搅打，直到蛋清开始起泡并形成软性发泡。逐渐提高速度，继续搅打，直到蛋清体积翻倍，变得浓稠且坚挺，提起打蛋器时能保持形状，注意不要过度搅打，否则可能导致蛋清变干分离。',
        '用橡皮刮刀将打发好的蛋清轻轻拌入马斯卡彭芝士混合物中，注意保持蛋清的蓬松质地。以轻柔、刮拌的方式混合，小心不要使混合物消泡，直到没有白色条纹，混合物光滑均匀。',
        '组装提拉米苏时，首先将200克手指饼干浸入150毫升浓郁的浓缩咖啡中，使其两面均匀沾湿。手指饼干应变得柔软易弯曲，但不要太湿，否则容易散开。将一层浸泡过咖啡的手指饼干铺在大盘底部，根据需要修剪以适应盘子。',
        '将一半马斯卡彭芝士混合物铺在手指饼干上，用抹刀抹平，形成光滑均匀的一层。重复铺层，先是手指饼干，然后是马斯卡彭芝士混合物，最后再铺一层手指饼干在顶部。',
        '将提拉米苏放入冰箱冷藏至少4小时或过夜，让风味充分融合，手指饼干吸收浓缩咖啡和奶油。上菜前，用细网筛在提拉米苏顶部均匀撒上一层薄薄的浓郁黑可可粉，以形成光滑、天鹅绒般的质地。'
      ]
    },
    ms: {
      title: 'Tiramisu',
      description: 'Resipi asli dari Treviso, Itali',
      ingredients: [
        { item: 'mascarpone', amount: '250g' },
        { item: 'telur', amount: '3 biji' },
        { item: 'gula', amount: '80g' },
        { item: 'espresso', amount: '150ml' },
        { item: 'savoiardi (ladyfingers)', amount: '200g' },
        { item: 'Serbuk koko', amount: '' }
      ],
      instructions: [
        'Mulakan dengan mengasingkan 3 biji telur besar, berhati-hati agar tiada kuning telur mencemari putih telur, kerana ini akan menghalang putih telur daripada dipukul hingga kaku. Ketepikan putih telur dalam mangkuk yang bersih dan kering.',
        'Dalam mangkuk adunan besar yang berasingan, pukul kuning telur dan 80g gula pasir sehingga campuran berwarna kuning pucat, hampir dua kali ganda isipadu, dan mempunyai tekstur yang licin, gebu, menunjukkan gula telah larut sepenuhnya dan kuning telur telah diangin dengan baik.',
        'Seterusnya, masukkan 250g keju mascarpone ke dalam campuran kuning telur, pukul sehingga keju sebati sepenuhnya dan campuran menjadi licin dan berkrim, dengan kilauan halus. Berhati-hati agar tidak terlebih pukul, kerana ini boleh menyebabkan mascarpone pecah dan campuran menjadi terlalu kaku.',
        'Dalam mangkuk yang mengandungi putih telur, mulakan memukulnya menggunakan pengadun elektrik atau pemukul sehingga ia mula berbuih dan membentuk puncak lembut. Tingkatkan kelajuan secara beransur-ansur dan teruskan memukul sehingga putih telur telah dua kali ganda isipadu, pekat dan kaku, serta mengekalkan bentuknya apabila pemukul diangkat, berhati-hati agar tidak terlebih pukul, yang boleh menyebabkan ia menjadi kering dan terpisah.',
        'Lipat perlahan-lahan putih telur yang telah dipukul ke dalam campuran mascarpone menggunakan spatula getah, berhati-hati untuk mengekalkan tekstur gebu putih telur. Lipat campuran dengan gerakan lembut dan menyapu, berhati-hati agar tidak mengempiskan campuran, sehingga tiada jalur putih yang tinggal dan campuran menjadi licin dan seragam.',
        'Untuk menyusun tiramisu, mulakan dengan mencelupkan 200g savoiardi (ladyfingers) ke dalam 150ml espresso yang kuat dan kaya, menyalutnya secara rata di kedua-dua belah. Ladyfingers harus lembut dan mudah dibengkokkan tetapi tidak terlalu basah, kerana ini boleh menyebabkan ia hancur. Susun lapisan ladyfingers yang direndam espresso di bahagian bawah hidangan saji yang besar, potong mengikut saiz hidangan jika perlu.',
        'Sapukan separuh daripada campuran mascarpone di atas ladyfingers, menggunakan spatula offset untuk menghasilkan lapisan yang licin dan rata. Ulangi lapisan, bermula dengan ladyfingers, kemudian campuran mascarpone, dan akhirnya satu lagi lapisan ladyfingers di atas.',
        'Sejukkan tiramisu selama sekurang-kurangnya 4 jam atau semalaman untuk membolehkan rasa sebati dan ladyfingers menyerap espresso dan krim. Sebelum dihidangkan, taburkan bahagian atas tiramisu dengan lapisan serbuk koko gelap yang kaya dan nipis, menggunakan penapis jejaring halus untuk menghasilkan tekstur yang licin dan baldu.'
      ]
    }
  },
  'it-05': {
    'zh-CN': {
      title: '千层面',
      description: '源自意大利博洛尼亚的正宗食谱',
      ingredients: [
        { item: '千层面皮', amount: '' },
        { item: '牛肉馅', amount: '500克' },
        { item: '白酱', amount: '' },
        { item: '番茄酱', amount: '' },
        { item: '帕尔马干酪', amount: '' },
        { item: '马苏里拉芝士', amount: '' }
      ],
      instructions: [
        '首先，用中高火加热一个厚底煎锅，然后加入2汤匙特级初榨橄榄油，转动锅子使油均匀覆盖底部，接着加入500克牛肉馅，边煮边用勺子将其捣散，直到牛肉不再呈粉红色，大约需要5-7分钟。',
        '接下来，将1个切碎的中等大小洋葱、2瓣切碎的大蒜和1杯干白葡萄酒加入煎锅中，煮至液体几乎完全蒸发，混合物略微焦糖化，偶尔搅拌，大约需要10分钟。',
        '制作博洛尼亚肉酱：将2杯切碎的新鲜番茄（或1罐圣马力诺番茄）、1茶匙干罗勒和1茶匙干牛至加入煎锅中，搅拌均匀，然后转小火慢炖，偶尔搅拌，炖1小时，直到酱汁变稠，风味融合，达到浓郁、丝滑的质地，味道深沉而醇厚。',
        '同时，制作白酱：在一个中等大小的平底锅中用中火融化2汤匙无盐黄油，然后搅入2汤匙通用面粉制成面糊，煮1-2分钟，直到呈浅金黄色并散发坚果香气，然后慢慢倒入1杯全脂牛奶，不断搅拌以防止结块，将混合物煮沸，直到变稠并能挂在勺子背面，大约需要5-7分钟。',
        '组装千层面：预热烤箱至180°C，然后在一个20x30厘米的烤盘底部铺一层薄薄的番茄酱，接着铺上4张千层面皮，如果需要，修剪以适应烤盘，然后将一半的博洛尼亚肉酱铺在面皮上，接着是一半的白酱，最后是一半的马苏里拉碎芝士和帕尔马干酪碎。',
        '重复铺层，从番茄酱开始，然后是面皮，剩余的博洛尼亚肉酱，剩余的白酱，最后是剩余的马苏里拉芝士和帕尔马干酪，顶部以一层芝士结束，以形成金黄酥脆的表皮。',
        '用铝箔纸盖住烤盘，烘烤40分钟，然后取下铝箔纸，继续烘烤10-15分钟，直到顶部呈金黄色，千层面热气腾腾，冒着泡泡，厨房里弥漫着浓郁诱人的香气。',
        '最后，将千层面从烤箱中取出，静置10-15分钟，然后切片上桌，如果喜欢，可以撒上新鲜罗勒叶和少许帕尔马干酪。'
      ]
    },
    ms: {
      title: 'Lasagne',
      description: 'Resipi asli dari Bologna, Itali',
      ingredients: [
        { item: 'Kepingan lasagne', amount: '' },
        { item: 'daging cincang', amount: '500g' },
        { item: 'Sos béchamel', amount: '' },
        { item: 'Sos tomato', amount: '' },
        { item: 'Parmesan', amount: '' },
        { item: 'Mozzarella', amount: '' }
      ],
      instructions: [
        'Pertama, panaskan kuali dasar berat di atas api sederhana tinggi, kemudian masukkan 2 sudu besar minyak zaitun extra virgin, pusingkan untuk menyalut dasar kuali, sebelum memasukkan 500g daging cincang, hancurkan dengan sudu semasa memasak, sehingga tidak lagi berwarna merah jambu, kira-kira 5-7 minit.',
        'Seterusnya, masukkan 1 biji bawang sederhana, dicincang halus, 2 ulas bawang putih, dicincang, dan 1 cawan wain putih kering ke dalam kuali, masak sehingga cecair hampir kering sepenuhnya dan campuran sedikit karamel, kacau sekali-sekala, kira-kira 10 minit.',
        'Buat sos Bolognese dengan menambahkan 2 cawan tomato segar yang dicincang, atau 1 tin tomato San Marzano, 1 sudu teh basil kering, dan 1 sudu teh oregano kering ke dalam kuali, kacau sebati, kemudian kecilkan api dan reneh, kacau sekali-sekala, selama 1 jam, sehingga sos pekat dan rasa sebati, sehingga sos mencapai konsistensi yang kaya, baldu dan rasa yang mendalam dan berkembang.',
        'Sementara itu, buat sos béchamel dengan mencairkan 2 sudu besar mentega tanpa garam dalam periuk sederhana di atas api sederhana, kemudian pukul 2 sudu besar tepung serbaguna untuk membuat roux, masak selama 1-2 minit, sehingga sedikit keemasan dan berbau kekacang, sebelum perlahan-lahan menuangkan 1 cawan susu penuh krim, pukul sentiasa untuk mengelakkan ketulan, dan biarkan campuran mendidih, sehingga ia pekat dan menyalut belakang sudu, kira-kira 5-7 minit.',
        'Untuk menyusun lasagne, panaskan oven hingga 180°C, kemudian sapukan lapisan nipis sos tomato di bahagian bawah hidangan pembakar 20x30cm, sebelum menyusun 4 kepingan lasagne di atas, potong mengikut saiz hidangan, jika perlu, dan sudukan separuh sos Bolognese di atas pasta, diikuti dengan separuh sos béchamel, dan akhirnya separuh keju mozzarella parut dan parmesan parut.',
        'Ulangi lapisan, bermula dengan sos tomato, kemudian pasta, sos Bolognese yang tinggal, sos béchamel yang tinggal, dan akhirnya keju mozzarella dan parmesan yang tinggal, berakhir dengan lapisan keju di atas, untuk kerak keemasan yang berbuih.',
        'Tutup hidangan pembakar dengan kerajang aluminium dan bakar selama 40 minit, sebelum mengeluarkan kerajang dan terus membakar selama 10-15 minit lagi, sehingga bahagian atas berwarna perang keemasan dan lasagne panas dan berbuih, dengan aroma yang kaya dan memuaskan yang memenuhi dapur.',
        'Akhir sekali, keluarkan lasagne dari oven dan biarkan ia berehat selama 10-15 minit, sebelum dihiris dan dihidangkan, dihiasi dengan daun basil segar dan taburan keju parmesan, jika dikehendaki.'
      ]
    }
  },
  'it-06': {
    'zh-CN': {
      title: '热那亚青酱',
      description: '源自意大利热那亚的正宗食谱',
      ingredients: [
        { item: '新鲜罗勒叶', amount: '2杯' },
        { item: '松子', amount: '50克' },
        { item: '帕尔马干酪', amount: '50克' },
        { item: '大蒜', amount: '2瓣' },
        { item: '橄榄油', amount: '100毫升' },
        { item: '盐', amount: '' }
      ],
      instructions: [
        '首先，选择尽可能新鲜的罗勒叶，因为它们是这款经典热那亚青酱的基石；用冷水轻轻冲洗以去除杂质，然后用厨房纸巾拍干，以防止多余的水分影响搅拌过程。',
        '接下来，将松子放入干锅中，用中火轻轻烘烤，频繁搅拌以防烧焦，直到它们变成金黄色并散发出坚果香气；这一步至关重要，因为它能增强松子的风味和质地，为青酱增添深度。',
        '使用装有钢刀片的食物料理机，将烤好的松子、2瓣去皮并轻微压碎以释放油分的大蒜，以及50克新鲜磨碎的帕尔马干酪混合在一起；搅打至混合物粗略切碎并充分混合。',
        '将2杯新鲜罗勒叶加入食物料理机中，搅打至罗勒叶充分切碎，混合物均匀，根据需要停下来刮下碗壁，确保所有食材都混合均匀。',
        '在食物料理机运行的同时，通过顶部缓慢倒入100毫升特级初榨橄榄油；这应该以细而稳定的水流进行，让青酱乳化变稠，变成光滑、奶油状的酱汁。',
        '继续搅打青酱，直到达到所需的稠度；它应该光滑且易于涂抹，但仍保留一些罗勒和松子的质地，颜色鲜绿，香气平衡了罗勒的清新、帕尔马干酪的浓郁和松子的泥土气息。',
        '根据口味用盐调味，请注意帕尔马干酪本身有咸味，所以可能只需要一小撮；盐应该能提升风味而不至于盖过它们，使酱汁和谐。',
        '最后，将新鲜制作的热那亚青酱与温热的意大利面（如扁面条或意大利细面条）拌匀，确保面条充分裹上酱汁；意大利面的热度将有助于青酱的风味融合并附着在面条上，创造一道概念简单但风味复杂的菜肴。'
      ]
    },
    ms: {
      title: 'Pesto Genovese',
      description: 'Resipi asli dari Genoa, Itali',
      ingredients: [
        { item: 'basil segar', amount: '2 cawan' },
        { item: 'kacang pain', amount: '50g' },
        { item: 'Parmesan', amount: '50g' },
        { item: 'bawang putih', amount: '2 ulas' },
        { item: 'minyak zaitun', amount: '100ml' },
        { item: 'Garam', amount: '' }
      ],
      instructions: [
        'Mulakan dengan memilih daun basil segar yang mungkin, kerana ia akan menjadi tulang belakang Pesto Genovese klasik ini; bilas perlahan-lahan di bawah air sejuk yang mengalir untuk menghilangkan sebarang kekotoran, kemudian keringkan dengan tuala kertas untuk mengelakkan kelembapan berlebihan daripada mengganggu proses pengadunan.',
        'Seterusnya, panggang kacang pain secara ringan dalam kuali kering di atas api sederhana, kacau kerap untuk mengelakkan hangus, sehingga ia berwarna perang keemasan dan mengeluarkan aroma kekacang; langkah ini penting kerana ia meningkatkan rasa dan tekstur kacang pain, yang akan menambah kedalaman kepada pesto.',
        'Menggunakan pemproses makanan yang dilengkapi dengan bilah keluli, gabungkan kacang pain yang telah dipanggang, 2 ulas bawang putih yang telah dikupas dan dihancurkan sedikit untuk mengeluarkan minyaknya, dan 50g keju Parmesan yang baru diparut; proses sehingga campuran dicincang kasar dan sebati.',
        'Masukkan 2 cawan daun basil segar ke dalam pemproses makanan, dan proses sehingga basil dicincang dengan baik dan campuran seragam, berhenti untuk mengikis sisi mangkuk mengikut keperluan untuk memastikan semua bahan sebati.',
        'Dengan pemproses makanan berjalan, tuangkan perlahan-lahan 100ml minyak zaitun extra virgin melalui bahagian atas; ini harus dilakukan dalam aliran nipis dan stabil, membolehkan pesto mengemulsi dan pekat, berubah menjadi sos yang licin dan berkrim.',
        'Teruskan mengadun pesto sehingga mencapai konsistensi yang dikehendaki; ia harus licin dan mudah disapu tetapi masih mengekalkan sedikit tekstur dari basil dan kacang pain, dengan warna hijau yang terang dan aroma yang mengimbangi kecerahan basil dengan kekayaan Parmesan dan keaslian kacang pain.',
        'Perasakan pesto dengan garam secukup rasa, ingat bahawa Parmesan adalah masin, jadi hanya sedikit mungkin diperlukan; garam harus meningkatkan rasa tanpa mengatasinya, membawa keharmonian kepada sos.',
        'Akhir sekali, gaulkan Pesto Genovese yang baru dibuat dengan pasta panas, seperti linguine atau spaghetti, pastikan pasta disalut dengan baik; kepanasan pasta akan membantu rasa pesto sebati dan melekat pada pasta, mencipta hidangan yang ringkas dalam konsep dan kompleks dalam rasa.'
      ]
    }
  },
  'it-07': {
    'zh-CN': {
      title: '意式炸饭团',
      description: '源自意大利巴勒莫的正宗食谱',
      ingredients: [
        { item: '煮熟的烩饭', amount: '' },
        { item: '马苏里拉芝士', amount: '100克' },
        { item: '面包屑', amount: '' },
        { item: '鸡蛋', amount: '' },
        { item: '番茄酱', amount: '' },
        { item: '食用油', amount: '用于油炸' }
      ],
      instructions: [
        '首先，将煮熟的烩饭完全冷却，可以将其铺在托盘上或放入冰浴中，直到达到室温，这对于处理和塑形炸饭团至关重要。',
        '烩饭冷却后，用冷水润湿双手，以防米饭粘手，然后取一小把米饭，大约一个小橙子大小，将其塑成一个松散的球状。',
        '在饭团中心挖一个洞，然后轻轻地将100克马苏里拉芝士放入洞中，确保芝士周围留有小边，以确保其完全被包裹。',
        '封住洞口，将米饭塑成一个紧实的球状，施加轻柔的压力，确保米饭保持形状，芝士被牢固地包裹，形成光滑均匀的表面。',
        '给炸饭团裹粉：首先将其轻轻滚上一层薄薄的面粉，抖掉多余的面粉，然后浸入打散的鸡蛋中，确保完全裹上蛋液，最后滚上面包屑，轻轻按压面包屑使其附着在表面。',
        '加热一个深炸锅或油炸锅，倒入至少5-7厘米深的油，加热至180°C，当油达到正确温度时，小心地将炸饭团放入热油中，注意不要一次放入过多。',
        '将炸饭团炸至金黄色酥脆，大约3-4分钟，或者直到它们浮到油面，然后用漏勺将其从油中取出，放在铺有厨房纸巾的盘子上沥干多余的油。',
        '立即上桌，搭配浓郁酸甜的番茄酱，酥脆的外皮下是奶油般的芝士内馅，米饭、芝士和酱汁的风味完美融合。'
      ]
    },
    ms: {
      title: 'Arancini',
      description: 'Resipi asli dari Palermo, Itali',
      ingredients: [
        { item: 'Nasi risotto yang dimasak', amount: '' },
        { item: 'mozzarella', amount: '100g' },
        { item: 'Serbuk roti', amount: '' },
        { item: 'Telur', amount: '' },
        { item: 'Sos tomato', amount: '' },
        { item: 'Minyak untuk menggoreng', amount: '' }
      ],
      instructions: [
        'Untuk bermula, sejukkan nasi risotto yang telah dimasak sepenuhnya, sama ada dengan menyebarkannya di atas dulang atau meletakkannya dalam mandian ais, sehingga mencapai suhu bilik, yang penting untuk mengendalikan dan membentuk arancini.',
        'Setelah risotto sejuk, basahkan tangan anda dengan air sejuk untuk mengelakkan nasi melekat, kemudian ambil segenggam nasi, kira-kira saiz oren kecil, dan bentukkannya menjadi bola yang longgar.',
        'Buat lubang di tengah bola nasi, dan letakkan perlahan-lahan 100g keju mozzarella di dalam lubang, pastikan untuk meninggalkan sedikit sempadan di sekeliling keju untuk memastikan ia tertutup sepenuhnya.',
        'Tutup lubang, dan bentukkan nasi menjadi bola yang ketat, berikan tekanan lembut untuk memastikan nasi mengekalkan bentuknya dan keju tertutup dengan selamat, menghasilkan permukaan yang licin dan rata.',
        'Untuk menyalut arancini, mula-mula gulungkan dalam sedikit tepung, goncangkan sebarang lebihan, kemudian celupkan dalam telur yang dipukul, pastikan ia disalut sepenuhnya, dan akhirnya gulungkan dalam serbuk roti, tekan serbuk roti perlahan-lahan ke permukaan untuk memastikan ia melekat.',
        'Panaskan kuali goreng dalam atau penggoreng dalam dengan sekurang-kurangnya 5-7 cm minyak hingga 180°C, dan apabila minyak mencapai suhu yang betul, letakkan arancini dengan berhati-hati ke dalam minyak panas, berhati-hati agar tidak terlalu padat.',
        'Goreng arancini sehingga berwarna perang keemasan dan rangup, kira-kira 3-4 minit, atau sehingga ia terapung ke permukaan, kemudian angkat dari minyak dengan sudu berlubang dan letakkan di atas pinggan yang dialas tuala kertas untuk mengeringkan sebarang lebihan minyak.',
        'Hidangkan arancini segera, diiringi dengan sos tomato yang kaya dan masam, dengan bahagian luar yang rangup menyerah kepada bahagian tengah yang berkrim dan keju, dan rasa nasi, keju, dan sos sebati dalam harmoni yang sempurna.'
      ]
    }
  },
  'it-08': {
    'zh-CN': {
      title: '烩牛膝',
      description: '源自意大利米兰的正宗食谱',
      ingredients: [
        { item: '小牛膝', amount: '4块' },
        { item: '洋葱', amount: '1个' },
        { item: '胡萝卜', amount: '1根' },
        { item: '西芹', amount: '1根' },
        { item: '白葡萄酒', amount: '1杯' },
        { item: '番茄', amount: '' },
        { item: '格雷莫拉塔酱', amount: '' },
        { item: '骨髓', amount: '' }
      ],
      instructions: [
        '首先，将烤箱预热至160°C，用犹太盐、现磨黑胡椒和一小撮糖的混合物调味4块小牛膝，确保均匀涂抹在所有侧面。',
        '接下来，将调味好的小牛膝裹上通用面粉，抖掉多余的面粉，然后轻轻撒上一层磨碎的帕尔马干酪，以增强褐变并增加风味深度。',
        '用中高火加热一个大的厚底荷兰烤箱，加入足量的特级初榨橄榄油，然后小心地将裹粉的小牛膝放入油中，每面煎2-3分钟，直到呈金黄色，形成浓郁的焦糖化外皮。',
        '将煎好的小牛膝从锅中取出，放在盘中备用，然后将切丁的洋葱、胡萝卜和西芹混合物加入同一个锅中，用中火烹煮芳香蔬菜，偶尔搅拌，直到它们变软变透明，将天然的甜味和香气释放到油中。',
        '将白葡萄酒加入锅中，刮掉锅底的任何焦化物，煮沸液体，直到葡萄酒几乎完全收干，留下浓缩的糖浆状釉汁，然后加入番茄（新鲜或罐装均可），以及一小枝新鲜百里香和一片月桂叶，搅拌均匀。',
        '将煎好的小牛膝放回锅中，确保它们大部分浸没在炖煮液中，然后盖上紧密的盖子，将其放入预热好的烤箱中炖煮2小时，或者直到肉变得非常嫩，用叉子轻轻一拨即可散开，厨房里弥漫着慢炖小牛膝和浓郁香料的香气。',
        '在小牛膝炖煮的同时，准备格雷莫拉塔酱：将柠檬皮屑、大蒜和欧芹切碎混合在一起，挤入少许新鲜柠檬汁和淋上少许特级初榨橄榄油，制成一种明亮、柑橘味的调味品，以平衡菜肴的浓郁。',
        '上菜时，将锅从烤箱中取出，小心地将每块小牛膝放在预热好的盘子上，舀上炖煮液和蔬菜，最后放上一小勺格雷莫拉塔酱，如果喜欢，可以撒上欧芹碎和一片柠檬，让格雷莫拉塔酱的鲜活草本风味中和掉肥美、骨肉分离的小牛膝的浓郁。'
      ]
    },
    ms: {
      title: 'Osso Buco',
      description: 'Resipi asli dari Milan, Itali',
      ingredients: [
        { item: 'betis anak lembu', amount: '4' },
        { item: 'bawang', amount: '1 biji' },
        { item: 'lobak merah', amount: '1 batang' },
        { item: 'saderi', amount: '1 batang' },
        { item: 'wain putih', amount: '1 cawan' },
        { item: 'Tomato', amount: '' },
        { item: 'Gremolata', amount: '' },
        { item: 'Sumsum tulang', amount: '' }
      ],
      instructions: [
        'Pertama, panaskan oven hingga 160°C dan perasakan 4 betis anak lembu dengan campuran garam kosher, lada hitam yang baru dikisar, dan secubit gula, pastikan untuk menyalutnya secara rata di semua sisi.',
        'Seterusnya, salutkan betis anak lembu yang telah diperasakan dengan tepung serbaguna, goncangkan sebarang lebihan, dan kemudian salutkan dengan sedikit keju Parmesan yang baru diparut halus untuk meningkatkan pemerangan dan menambah kedalaman rasa.',
        'Panaskan periuk Belanda yang besar dan dasar berat di atas api sederhana tinggi, masukkan sejumlah besar minyak zaitun extra-virgin ke dalam periuk, dan kemudian letakkan betis anak lembu yang telah disalut tepung dengan berhati-hati ke dalam minyak, perangkan di semua sisi sehingga berwarna perang keemasan, kira-kira 2-3 minit setiap sisi, membentuk kerak yang kaya dan karamel.',
        'Angkat betis anak lembu yang telah diperangkan dari periuk dan ketepikan di atas pinggan, kemudian masukkan gabungan bawang, lobak merah, dan saderi yang didadu ke dalam periuk yang sama, masak aromatik di atas api sederhana, kacau sekali-sekala, sehingga ia lembut dan lutsinar, mengeluarkan kemanisan dan wangian semula jadi mereka ke dalam minyak.',
        'Masukkan wain putih ke dalam periuk, kikis sebarang sisa perang dari dasar, dan biarkan cecair mendidih, masak sehingga wain hampir kering sepenuhnya, meninggalkan lapisan pekat seperti sirap, kemudian masukkan tomato, sama ada segar atau dalam tin, bersama dengan tangkai thyme segar dan daun bay, kacau sebati.',
        'Kembalikan betis anak lembu yang telah diperangkan ke dalam periuk, pastikan ia kebanyakannya terendam dalam cecair braising, dan kemudian tutup periuk dengan penutup yang ketat, pindahkan ke oven yang telah dipanaskan untuk dibraise selama 2 jam, atau sehingga daging lembut dan mudah hancur dengan garpu, memenuhi dapur dengan aroma betis anak lembu yang dimasak perlahan dan rempah-rempah yang kaya dan gurih.',
        'Semasa betis anak lembu dibraise, sediakan gremolata dengan mencincang halus kulit lemon, bawang putih, dan pasli, campurkan perahan jus lemon segar dan sedikit minyak zaitun extra-virgin untuk mencipta perasa yang cerah dan sitrus yang akan mengimbangi kekayaan hidangan.',
        'Untuk menghidang, keluarkan periuk dari oven dan letakkan setiap betis anak lembu dengan berhati-hati di atas pinggan yang telah dipanaskan, sudukan cecair braising dan sayur-sayuran di atasnya, kemudian akhiri dengan sesudu gremolata, hias dengan taburan pasli dan hirisan lemon, jika dikehendaki, membiarkan rasa herba gremolata yang cerah memotong rasa betis anak lembu yang lembut dan mudah tanggal dari tulang.'
      ]
    }
  },
  'it-09': {
    'zh-CN': {
      title: '佛卡夏',
      description: '来自意大利利古里亚的正宗食谱',
      ingredients: [
        { item: '面粉', amount: '500克' },
        { item: '酵母', amount: '7克' },
        { item: '水', amount: '300毫升' },
        { item: '橄榄油', amount: '' },
        { item: '迷迭香', amount: '' },
        { item: '海盐片', amount: '' }
      ],
      instructions: [
        '首先，在一个大搅拌碗中，将500克高筋面粉（如\'00\'面粉或面包粉）与7克活性干酵母混合，注意将酵母均匀地分散在面粉中，以确保发酵均匀。',
        '接下来，逐渐加入300毫升温水到面粉混合物中，用木勺或带面团钩的立式搅拌机搅拌面团，直到所有食材混合成粗糙的面团。',
        '然后，向面团中加入大量特级初榨橄榄油，继续搅拌直到油完全融入，面团开始变得光滑有弹性。',
        '在撒有少量面粉的台面上揉面团10分钟，采用按压和折叠的技术来发展面团中的面筋，直到面团变得光滑有光泽，预示着其柔软的内部结构。',
        '让面团在温暖、无风的环境中发酵1小时，或直到其体积增大一倍，出现可见的气泡，并具有良好发酵酵母面团特有的细腻、轻盈质地。',
        '将发酵好的面团轻轻按入涂有大量油的烤盘中，注意不要过度揉搓面团，并用手指在表面制造一系列深凹痕，这将有助于在烘烤时锁住橄榄油和迷迭香。',
        '在面团上大量淋上特级初榨橄榄油，让油积聚在凹痕中，形成浓郁的咸香风味，然后撒上芬芳的迷迭香叶和一小撮片状海盐。',
        '最后，将佛卡夏放入预热至220°C的烤箱中烘烤20分钟，或直到其呈金黄色，外皮酥脆焦糖化，内部柔软轻盈，散发出迷迭香、橄榄油和新鲜出炉面包的芬芳香气。'
      ]
    },
    ms: {
      title: 'Focaccia',
      description: 'Resipi asli dari Liguria, Itali',
      ingredients: [
        { item: 'Tepung', amount: '500g' },
        { item: 'Yis', amount: '7g' },
        { item: 'Air', amount: '300ml' },
        { item: 'Minyak zaitun', amount: '' },
        { item: 'Rosemari', amount: '' },
        { item: 'Serpihan garam laut', amount: '' }
      ],
      instructions: [
        'Mula-mula, dalam mangkuk adunan besar, gabungkan 500g tepung protein tinggi, seperti tepung \'00\' atau tepung roti, dengan 7g yis kering aktif, pastikan yis tersebar rata di seluruh tepung untuk memastikan penapaian yang seragam.',
        'Seterusnya, masukkan 300ml air suam secara beransur-ansur ke dalam campuran tepung, gaul doh menggunakan sudu kayu atau pengadun berdiri yang dilengkapi dengan cangkuk doh, sehingga bahan-bahan bercantum menjadi adunan yang kasar.',
        'Kemudian, tambahkan sedikit minyak zaitun extra-virgin ke dalam doh, teruskan mengadun sehingga minyak sebati sepenuhnya dan doh mula mempunyai tekstur yang licin dan elastik.',
        'Uli doh di permukaan yang ditabur sedikit tepung selama 10 minit, menggunakan teknik menekan-dan-melipat untuk mengembangkan gluten dalam doh, sehingga ia menjadi licin dan berkilat, dengan kilauan halus yang menunjukkan potensi untuk tekstur yang lembut.',
        'Biarkan doh naik di persekitaran yang hangat dan bebas angin selama 1 jam, atau sehingga saiznya berganda, dengan kantung udara yang kelihatan dan tekstur yang halus dan lapang yang menjadi ciri doh yis yang telah naik dengan baik.',
        'Tekan perlahan-lahan doh yang telah naik ke dalam loyang yang telah disapu minyak dengan banyak, berhati-hati agar tidak menguli doh secara berlebihan, dan gunakan jari anda untuk membuat beberapa lekukan dalam di permukaan, yang akan membantu memerangkap minyak zaitun dan rosemari semasa membakar.',
        'Tuangkan minyak zaitun extra-virgin dengan banyak ke atas doh, biarkan minyak berkumpul di lekukan dan mencipta profil rasa yang kaya dan savuri, kemudian taburkan permukaan dengan daun rosemari yang wangi dan sedikit garam laut serpihan.',
        'Akhir sekali, bakar focaccia dalam ketuhar yang telah dipanaskan pada suhu 220°C selama 20 minit, atau sehingga ia berwarna perang keemasan, dengan kerak yang rangup dan karamel yang menghasilkan bahagian dalam yang lembut dan lapang, serta aroma wangi yang mengingatkan rosemari, minyak zaitun, dan roti yang baru dibakar.'
      ]
    }
  },
  'it-10': {
    'zh-CN': {
      title: '卡诺里',
      description: '来自意大利西西里的正宗食谱',
      ingredients: [
        { item: '卡诺里外壳 (炸)', amount: '' },
        { item: '意大利乳清干酪', amount: '500克' },
        { item: '糖粉', amount: '200克' },
        { item: '巧克力碎', amount: '' },
        { item: '橙皮屑', amount: '' },
        { item: '开心果', amount: '' }
      ],
      instructions: [
        '首先准备卡诺里外壳：将炸油在深平底锅中加热至190°C，然后小心地将卡诺里外壳面团挤入热油中，炸至金黄色并起泡，每面约2-3分钟，然后沥干在厨房纸上。',
        '为了准备乳清干酪馅料，将乳清干酪用铺有芝士布的滤网沥干过夜，让多余的液体滴落，从而获得光滑细腻的质地。',
        '第二天，将沥干的乳清干酪与200克糖粉在带桨状附件的立式搅拌机中搅打，直到混合物光滑、奶油状并带有微妙的光泽，糖完全融入，乳清干酪被打散。',
        '用橡皮刮刀将50克黑巧克力碎拌入乳清干酪混合物中，直到它们均匀分布，混合物呈现大理石纹理，巧克力的浓郁与乳清干酪的清新达到平衡。',
        '将乳清干酪混合物转移到装有大圆形裱花嘴的裱花袋中，然后填充冷却的卡诺里外壳，以平滑、连续的动作挤入混合物，直到外壳填充约3/4满，馅料和外壳之间达到微妙的平衡。',
        '为了装饰，将卡诺里外壳的填充端浸入盛有切碎开心果的浅盘中，轻轻按压坚果使其粘附在乳清干酪上，在松脆的坚果和光滑的馅料之间形成令人满足的口感对比。',
        '最后，用小筛子或筛网在填充好的卡诺里外壳上轻轻撒上一层糖粉，然后在1小时内食用，此时外壳仍然酥脆，馅料处于最奶油状的状态，乳清干酪、巧克力和开心果的风味完美融合。'
      ]
    },
    ms: {
      title: 'Cannoli',
      description: 'Resipi asli dari Sicily, Itali',
      ingredients: [
        { item: 'Kulit cannoli (digoreng)', amount: '' },
        { item: 'Keju ricotta', amount: '500g' },
        { item: 'Gula aising', amount: '200g' },
        { item: 'Cip coklat', amount: '' },
        { item: 'Kulit oren parut', amount: '' },
        { item: 'Pistachio', amount: '' }
      ],
      instructions: [
        'Mulakan dengan menyediakan kulit cannoli: panaskan minyak menggoreng dalam periuk dalam hingga 190°C, kemudian paipkan doh kulit cannoli dengan berhati-hati ke dalam minyak panas, goreng sehingga perang keemasan dan melepuh, kira-kira 2-3 minit setiap sisi, sebelum ditoskan di atas tuala kertas.',
        'Untuk menyediakan inti ricotta, toskan keju ricotta semalaman dalam penapis yang dilapisi kain keju, biarkan cecair berlebihan menitis keluar, menghasilkan tekstur yang licin dan berkrim.',
        'Keesokan harinya, pukul keju ricotta yang telah ditoskan dengan 200g gula aising dalam pengadun berdiri yang dilengkapi dengan lampiran dayung, sehingga campuran licin, berkrim, dan mempunyai kilauan halus, dengan gula sebati sepenuhnya dan ricotta hancur.',
        'Lipat 50g cip coklat gelap ke dalam campuran ricotta, menggunakan spatula getah, sehingga ia tersebar rata dan campuran mempunyai penampilan marmar, dengan kekayaan coklat diimbangi oleh kecerahan ricotta.',
        'Pindahkan campuran ricotta ke dalam beg paip yang dilengkapi dengan hujung bulat besar, kemudian isi kulit cannoli yang telah disejukkan, paipkan campuran dalam gerakan yang licin dan berterusan, sehingga kulit terisi kira-kira 3/4 penuh, dengan keseimbangan inti dan kulit yang halus.',
        'Untuk hiasan, celupkan hujung kulit cannoli yang telah diisi ke dalam pinggan cetek berisi pistachio cincang, tekan perlahan-lahan kacang ke atas ricotta untuk melekat, mencipta kontras tekstur yang memuaskan antara kacang rangup dan inti yang licin.',
        'Akhir sekali, taburkan kulit cannoli yang telah diisi dengan lapisan gula aising yang nipis, menggunakan penapis kecil atau ayak, sebelum dihidangkan dalam masa 1 jam, apabila kulit masih rangup dan inti berada pada tahap paling berkrim, dengan rasa ricotta, coklat, dan pistachio sebati dalam harmoni yang sempurna.'
      ]
    }
  },
  'jp-01': {
    'zh-CN': {
      title: '拉面',
      description: '来自日本札幌的正宗食谱',
      ingredients: [
        { item: '拉面', amount: '' },
        { item: '五花肉 (叉烧)', amount: '' },
        { item: '溏心蛋', amount: '' },
        { item: '猪肉或鸡肉高汤', amount: '1.5升' },
        { item: '味噌酱', amount: '' },
        { item: '海苔', amount: '' },
        { item: '竹笋', amount: '' },
        { item: '葱花', amount: '' }
      ],
      instructions: [
        '制作高汤：骨头小火慢炖3小时。用酱油、味噌、芝麻调味。',
        '准备配料：切片叉烧，对半切开溏心蛋，准备竹笋。',
        '煮面条，放入热高汤中，精美摆放配料。立即上桌。'
      ]
    },
    ms: {
      title: 'Ramen',
      description: 'Resipi asli dari Sapporo, Jepun',
      ingredients: [
        { item: 'Mi ramen', amount: '' },
        { item: 'Perut babi (chashu)', amount: '' },
        { item: 'Telur rebus separuh masak', amount: '' },
        { item: 'Stok babi atau ayam', amount: '1.5L' },
        { item: 'Pes miso', amount: '' },
        { item: 'Nori', amount: '' },
        { item: 'Rebung', amount: '' },
        { item: 'Daun bawang', amount: '' }
      ],
      instructions: [
        'Buat stok: reneh tulang 3 jam. Perasakan dengan kicap, miso, bijan.',
        'Sediakan topping: hirisan chashu, belah dua telur rebus separuh masak, sediakan rebung.',
        'Masak mi, letakkan dalam stok panas, susun topping dengan cantik. Hidangkan segera.'
      ]
    }
  },
  'jp-02': {
    'zh-CN': {
      title: '寿司 (握寿司)',
      description: '来自日本东京的正宗食谱',
      ingredients: [
        { item: '寿司米饭', amount: '' },
        { item: '新鲜三文鱼/金枪鱼', amount: '' },
        { item: '芥末', amount: '' },
        { item: '酱油', amount: '' },
        { item: '海苔条', amount: '' },
        { item: '米醋', amount: '' }
      ],
      instructions: [
        '准备寿司米饭时，将日本短粒米和水以1:1的比例放入中型平底锅中，用大火煮沸。煮沸后，转小火，盖紧锅盖，小火慢炖15-20分钟，或直到水被吸收，米饭煮熟。',
        '米饭煮熟时，在一个小碗中将米醋、糖和盐搅拌均匀，直到糖和盐溶解，制成调味汁。米饭煮熟后，让其冷却至室温，然后用木勺轻轻拌入调味汁，注意不要捣碎米粒。',
        '米饭达到室温并调味后，将手沾湿，将米饭塑造成椭圆形块状，施加轻柔的压力形成紧实的形状。理想的形状应该是中心比边缘稍硬。',
        '为了给握寿司增添风味和辣度，在每个米饭块的顶部涂抹一小点芥末酱，每块约1/8茶匙。芥末应涂抹成豌豆大小，并放置在米饭块的中心。',
        '接下来，用锋利的刀和轻柔的锯切动作，将新鲜三文鱼或金枪鱼切成约1/8英寸厚的薄片。切片应逆纹路切割，并轻柔处理以防止损坏娇嫩的鱼肉。',
        '组装握寿司时，将一片薄鱼肉铺在米饭块上，轻轻按压在芥末酱上以固定。如有必要，可以使用一小条海苔将鱼肉固定，轻轻按压海苔使其粘附在米饭上。',
        '最后，将握寿司与酱油一起上桌，如果需要，可以用切成薄片的白萝卜或腌姜装饰。酱油应单独盛放，让每位食客根据口味调味握寿司，白萝卜或腌姜则用于在两口之间清洁味蕾。'
      ]
    },
    ms: {
      title: 'Sushi (Nigiri)',
      description: 'Resipi asli dari Tokyo, Jepun',
      ingredients: [
        { item: 'Nasi sushi', amount: '' },
        { item: 'Ikan salmon / tuna segar', amount: '' },
        { item: 'Wasabi', amount: '' },
        { item: 'Kicap', amount: '' },
        { item: 'Jalur nori', amount: '' },
        { item: 'Cuka beras', amount: '' }
      ],
      instructions: [
        'Untuk menyediakan nasi sushi, gabungkan beras Jepun bijirin pendek dan air dalam periuk sederhana, menggunakan nisbah 1:1, dan didihkan di atas api besar. Setelah mendidih, kecilkan api, tutup dengan penutup yang ketat, dan reneh selama 15-20 minit, atau sehingga air diserap dan nasi masak.',
        'Semasa nasi sedang dimasak, sediakan campuran perasa dengan memukul cuka beras, gula, dan garam dalam mangkuk kecil sehingga gula dan garam larut. Setelah nasi masak, biarkan ia sejuk pada suhu bilik, kemudian gaulkan campuran perasa dengan perlahan menggunakan sudu kayu, berhati-hati agar tidak menghancurkan butiran nasi.',
        'Setelah nasi mencapai suhu bilik dan telah diperasakan, basahkan tangan anda dengan air dan bentuk nasi menjadi blok bujur, berikan tekanan lembut untuk membentuk bentuk yang padat. Bentuk yang ideal harus sedikit lebih pejal di tengah daripada di tepi.',
        'Untuk menambah rasa dan kepedasan pada nigiri, sapukan sedikit pes wasabi di atas setiap blok nasi, menggunakan kira-kira 1/8 sudu teh setiap keping. Wasabi harus disapu dalam jumlah kecil, sebesar kacang pea, dan harus diletakkan di tengah blok nasi.',
        'Seterusnya, hirisan ikan salmon atau tuna segar menjadi kepingan nipis, kira-kira 1/8 inci tebal, menggunakan pisau tajam dan gerakan menggergaji yang lembut. Hirisan harus dipotong melawan urat, dan harus dikendalikan dengan lembut untuk mengelakkan kerosakan pada ikan yang halus.',
        'Untuk memasang nigiri, letakkan hirisan ikan nipis di atas blok nasi, tekan perlahan-lahan ke atas pes wasabi untuk mengikatnya. Jika perlu, gunakan jalur kecil rumpai laut nori untuk menahan ikan di tempatnya, berikan tekanan lembut untuk melekatkan rumpai laut pada nasi.',
        'Akhir sekali, hidangkan nigiri dengan kicap, dihiasi dengan lobak daikon yang dihiris nipis atau halia jeruk jika dikehendaki. Kicap harus dihidangkan di sisi, membolehkan setiap pengunjung merasai nigiri mereka mengikut selera, dan lobak daikon atau halia jeruk harus digunakan untuk membersihkan lelangit antara gigitan.'
      ]
    }
  },
  'jp-03': {
    'zh-CN': {
      title: '天妇罗',
      description: '来自日本东京的正宗食谱',
      ingredients: [
        { item: '虾', amount: '' },
        { item: '蔬菜 (红薯, 西葫芦)', amount: '' },
        { item: '天妇罗面糊', amount: '' },
        { item: '冷水', amount: '' },
        { item: '炸油', amount: '' },
        { item: '蘸酱', amount: '' }
      ],
      instructions: [
        '首先，准备天妇罗面糊，将天妇罗粉筛入一个大的冰镇碗中，然后逐渐加入冰冷的水，同时用叉子轻轻搅拌混合物，注意不要过度搅拌，因为这会使面粉中的面筋发展，导致面糊变得浓稠沉重；理想的稠度应该仍然略带块状。',
        '接下来，将红薯和西葫芦切成薄而均匀的条状或片状，以确保均匀烹饪，并剥去虾的壳和虾线，保留虾尾以呈现美观。',
        '将每块蔬菜和虾浸入天妇罗面糊中，轻轻均匀地裹上一层，让多余的面糊滴落，这有助于防止面糊在油炸过程中吸收过多油。',
        '将炸油在深而重的锅或炸锅中加热至精确的180°C，这将有助于达到酥脆和嫩度的完美平衡；油的深度应至少为5-7厘米，以便食材在油炸时不会接触锅底。',
        '小心地将裹好面糊的虾和蔬菜滑入热油中，注意不要一次放入过多，因为这会降低油温，导致天妇罗油腻或未熟；如果需要，分批油炸。',
        '将天妇罗炸约2分钟，或直到它们达到精致的淡金色，注意不要炸过头，因为这会导致面糊变褐色，食材变得坚韧干燥。',
        '用漏勺将天妇罗从油中取出，放在铺有厨房纸的盘子上沥干多余的油，然后立即与蘸酱一起食用，蘸酱应由酱油、清酒和味醂混合制成，以创造丰富、咸香、略带甜味的口感。',
        '为了增加额外的风味和质地，用磨碎的白萝卜和紫苏叶装饰天妇罗，这将为酥脆咸香的天妇罗和咸味蘸酱提供清爽的对比。'
      ]
    },
    ms: {
      title: 'Tempura',
      description: 'Resipi asli dari Tokyo, Jepun',
      ingredients: [
        { item: 'Udang', amount: '' },
        { item: 'Sayur-sayuran (keledek, zukini)', amount: '' },
        { item: 'Adunan tempura', amount: '' },
        { item: 'Air sejuk', amount: '' },
        { item: 'Minyak untuk menggoreng', amount: '' },
        { item: 'Sos pencicah', amount: '' }
      ],
      instructions: [
        'Untuk bermula, sediakan adunan tempura dengan mengayak tepung tempura ke dalam mangkuk besar yang telah disejukkan, kemudian masukkan air sejuk berais secara beransur-ansur sambil mengacau perlahan campuran dengan garpu, berhati-hati agar tidak mengacau berlebihan, kerana ini akan mengembangkan gluten dalam tepung, menghasilkan adunan yang padat dan berat; konsistensi yang ideal harus masih sedikit berketul.',
        'Seterusnya, potong keledek dan zukini menjadi jalur atau hirisan nipis yang seragam untuk memastikan masakan yang sekata, dan kupas serta buang urat udang, biarkan ekornya utuh untuk persembahan yang menarik secara visual.',
        'Celupkan setiap keping sayur dan udang ke dalam adunan tempura, salutkan dengan ringan dan sekata, biarkan adunan berlebihan menitis, yang membantu mengelakkan adunan daripada menyerap terlalu banyak minyak semasa menggoreng.',
        'Panaskan minyak untuk menggoreng dalam periuk dalam yang berat atau penggoreng dalam pada suhu tepat 180°C, kerana ini akan membantu mencapai keseimbangan sempurna antara kerangupan dan kelembutan; minyak harus sekurang-kurangnya 5-7 cm dalam untuk membolehkan bahan-bahan digoreng tanpa menyentuh dasar periuk.',
        'Masukkan udang dan sayur-sayuran yang telah disalut adunan dengan berhati-hati ke dalam minyak panas, berhati-hati agar tidak memenuhi periuk secara berlebihan, kerana ini boleh menurunkan suhu minyak dan menyebabkan tempura berminyak atau tidak masak; sebaliknya, goreng secara berperingkat jika perlu.',
        'Goreng tempura selama kira-kira 2 minit setiap sisi, atau sehingga ia mencapai warna emas pucat yang halus, berhati-hati agar tidak menggoreng berlebihan, kerana ini akan menyebabkan adunan menjadi perang dan bahan-bahan menjadi liat dan kering.',
        'Menggunakan senduk berlubang, keluarkan tempura dari minyak dan letakkan di atas pinggan yang dilapisi tuala kertas untuk menapis minyak berlebihan, kemudian hidangkan segera dengan sos pencicah, yang harus dibuat dengan gabungan kicap, sake, dan mirin untuk mencipta profil rasa yang kaya, savuri, dan sedikit manis.',
        'Untuk menambah lapisan rasa dan tekstur tambahan, hias tempura dengan lobak daikon parut dan daun shiso, yang akan memberikan kontras yang menyegarkan kepada tempura yang rangup dan savuri serta sos pencicah yang savuri.'
      ]
    }
  },
  'jp-04': {
    'zh-CN': {
      title: '炸猪排',
      description: '源自日本东京的正宗食谱',
      ingredients: [
        { item: '猪里脊肉', amount: '2 块' },
        { item: '日式面包糠', amount: '' },
        { item: '鸡蛋', amount: '' },
        { item: '面粉', amount: '' },
        { item: '炸猪排酱', amount: '' },
        { item: '卷心菜', amount: '' }
      ],
      instructions: [
        '首先，选择两块瘦猪里脊肉，最好是来自里脊或猪柳部位，修剪掉多余的脂肪，以确保烹饪均匀并防止猪肉变得油腻。',
        '使用肉锤或重刀背，轻轻将猪里脊肉敲打至约0.6厘米的均匀厚度，注意不要撕裂肉，以获得均匀的质地，并防止猪肉过厚难以煮熟。',
        '用少许片状海盐和几下黑胡椒调味敲打好的猪里脊肉，以增强猪肉的天然风味，然后将每块里脊肉均匀地裹上一层薄薄的通用面粉，抖掉多余的面粉，以防止涂层过厚。',
        '将裹好面粉的猪里脊肉浸入打散的鸡蛋中，确保完全覆盖，然后将其在日式面包糠中滚动，轻轻按压面包糠使其粘附在肉上，并将裹好面包糠的猪里脊肉放在盘子或托盘上。',
        '在一个大而厚底的煎锅或荷兰烤箱中加热约1.2厘米的无味油（如植物油或菜籽油）至170°C，然后小心地将裹好面包糠的猪里脊肉放入热油中，注意不要溅油或使煎锅过满。',
        '每面炸猪里脊肉4分钟，或直到它们呈金黄色酥脆，外皮酥脆焦糖化，内部鲜嫩多汁，然后用漏勺将其从油中取出，放在铺有厨房纸的盘子上沥干多余的油。',
        '猪里脊肉稍微冷却后，切成约1.2厘米厚的薄片，放在切碎的卷心菜上，配上日式蒸米饭，并淋上甜酸的炸猪排酱，这会为菜肴增添浓郁的美味。',
        '如果需要，可以用切成薄片的青葱、磨碎的白萝卜或腌姜装饰菜肴，以增加菜肴的色彩和清新的风味。'
      ]
    },
    ms: {
      title: 'Tonkatsu',
      description: 'Resipi asli dari Tokyo, Jepun',
      ingredients: [
        { item: 'Daging babi loin', amount: '2 keping' },
        { item: 'Serbuk roti Panko', amount: '' },
        { item: 'Telur', amount: '' },
        { item: 'Tepung', amount: '' },
        { item: 'Sos Tonkatsu', amount: '' },
        { item: 'Kubis', amount: '' }
      ],
      instructions: [
        'Mulakan dengan memilih dua keping daging babi loin tanpa lemak, sebaik-baiknya dari bahagian loin atau tenderloin, dan buang lemak berlebihan untuk memastikan masakan sekata dan mengelakkan daging babi menjadi berminyak.',
        'Menggunakan penukul daging atau belakang pisau berat, pukul perlahan daging babi loin hingga ketebalan sekata kira-kira 1/4 inci, berhati-hati agar tidak merobek daging, untuk mencapai tekstur yang seragam dan mengelakkan daging babi menjadi terlalu tebal dan sukar dimasak sepenuhnya.',
        'Perasakan daging babi loin yang telah dipukul dengan secubit garam laut kepingan dan beberapa kisaran lada hitam untuk meningkatkan rasa semula jadi daging babi, kemudian salut setiap kepingan dengan lapisan nipis dan sekata tepung serbaguna, goncangkan sebarang lebihan untuk mengelakkan salutan yang tebal dan berat.',
        'Celupkan daging babi loin yang telah disalut tepung ke dalam telur yang dipukul, pastikan untuk menyalutnya sepenuhnya, kemudian gulungkannya di atas pinggan serbuk roti Panko, tekan serbuk roti perlahan-lahan ke atas daging untuk memastikan ia melekat, dan letakkan daging babi loin yang telah disalut serbuk roti di atas pinggan atau dulang.',
        'Panaskan kira-kira 1/2 inci minyak tanpa rasa, seperti minyak sayuran atau kanola, dalam kuali besar bertapak tebal atau periuk Belanda hingga suhu 170°C, kemudian letakkan daging babi loin yang telah disalut serbuk roti dengan berhati-hati ke dalam minyak panas, berhati-hati agar tidak memercikkan minyak atau memenuhi kuali terlalu padat.',
        'Goreng daging babi loin selama 4 minit setiap sisi, atau sehingga ia berwarna perang keemasan dan rangup, dengan kerak yang rangup dan berkaramel serta bahagian dalam yang lembut dan berjus, kemudian angkat dari minyak dengan sudu berlubang dan letakkan di atas pinggan yang dialas kertas penyerap minyak untuk mengeringkan lebihan minyak.',
        'Setelah daging babi loin sedikit sejuk, hiriskannya menjadi jalur nipis, kira-kira 1/2 inci tebal, dan hidangkan di atas hamparan kubis yang dihiris, dengan nasi Jepun kukus di sisi dan sedikit sos Tonkatsu yang manis dan masam, yang menambah rasa yang kaya dan savuri pada hidangan.',
        'Hias hidangan dengan hirisan daun bawang nipis, lobak daikon parut, atau halia jeruk, jika dikehendaki, untuk menambah warna dan rasa segar pada hidangan.'
      ]
    }
  },
  'jp-05': {
    'zh-CN': {
      title: '味噌汤',
      description: '源自日本京都的正宗食谱',
      ingredients: [
        { item: '高汤', amount: '4 杯' },
        { item: '白味噌', amount: '3 汤匙' },
        { item: '绢豆腐', amount: '100克' },
        { item: '海带芽', amount: '' },
        { item: '青葱', amount: '' }
      ],
      instructions: [
        '首先，小心地准备高汤，在中型平底锅中用中火加热，直到温度达到约82°C至88°C，或略低于沸点，注意不要让它沸腾，因为这可能导致精致风味的流失和质地不佳。',
        '在高汤加热的同时，准备味噌酱：将3汤匙味噌酱舀入一个小碗中，然后逐渐加入一勺热高汤到碗中，不断搅拌以将味噌酱溶解成光滑奶油状的混合物，避免结块。',
        '一旦味噌酱完全融入热高汤中，将混合物倒回平底锅中，与剩余的高汤混合，轻轻搅拌以使味噌均匀分布在汤中，此时汤应具有浓郁、柔滑的质地和鲜美的香气。',
        '接下来，将100克绢豆腐切成小巧精致的方块，大约1.2厘米大小，小心处理豆腐以避免其碎裂，然后将豆腐块放在盘子或托盘上，准备加入汤中。',
        '将海带芽浸泡在一小碗热水中约5分钟，或直到它变软并膨胀，然后沥干水分，如果需要，将海带芽切成小块，以便均匀分布在汤中。',
        '组装味噌汤时，将豆腐块和泡发的海带芽加入装有高汤和味噌混合物的平底锅中，轻轻搅拌混合，然后将火调至小火，炖煮约2至3分钟，或直到豆腐加热透彻，风味融合，海带芽增添了精致的海味，豆腐提供了丝滑奶油般的质地。',
        '最后，将味噌汤盛入碗中，注意均匀分配豆腐和海带芽，然后每碗撒上少许切成薄片的青葱，这会为菜肴增添明亮清新的风味和鲜艳的色彩，然后立即上桌，享受成品味噌汤中复杂而和谐的风味和质地平衡。'
      ]
    },
    ms: {
      title: 'Sup Miso',
      description: 'Resipi asli dari Kyoto, Jepun',
      ingredients: [
        { item: 'Stok dashi', amount: '4 cawan' },
        { item: 'Miso putih', amount: '3 sudu besar' },
        { item: 'Tauhu sutera', amount: '100g' },
        { item: 'Rumpai laut Wakame', amount: '' },
        { item: 'Daun bawang', amount: '' }
      ],
      instructions: [
        'Mulakan dengan menyediakan stok dashi dengan teliti, panaskannya dalam periuk sederhana di atas api sederhana sehingga mencapai suhu kira-kira 180°F hingga 190°F (82°C hingga 88°C), atau sedikit di bawah takat didih, berhati-hati agar tidak membiarkannya mendidih kerana ini boleh mengakibatkan kehilangan rasa halus dan tekstur yang kurang halus.',
        'Semasa stok dashi sedang dipanaskan, sediakan pes miso dengan menyenduk 3 sudu besar ke dalam mangkuk kecil, kemudian secara beransur-ansur masukkan satu senduk stok dashi panas ke dalam mangkuk, kacau sentiasa untuk melarutkan pes miso menjadi campuran yang licin dan berkrim, mengelakkan sebarang ketulan.',
        'Setelah pes miso telah sepenuhnya dimasukkan ke dalam stok dashi panas, tuangkan campuran itu kembali ke dalam periuk dengan stok dashi yang tinggal, kacau perlahan untuk mengagihkan miso secara sekata ke seluruh stok, yang kini sepatutnya mempunyai tekstur yang kaya, baldu dan aroma umami yang savuri.',
        'Seterusnya, potong 100g tauhu sutera menjadi kiub kecil yang halus, kira-kira 1/2 inci saiznya, berhati-hati untuk mengendalikan tauhu dengan lembut untuk mengelakkan ia pecah, kemudian ketepikan kiub tauhu di atas pinggan atau dulang, sedia untuk ditambah ke dalam sup.',
        'Hidratkan semula rumpai laut wakame dengan merendamnya dalam mangkuk kecil air panas selama kira-kira 5 minit, atau sehingga ia lembut dan mengembang, kemudian toskan air dan potong wakame menjadi kepingan yang lebih kecil, jika dikehendaki, untuk mengagihkan secara sekata ke seluruh sup.',
        'Untuk memasang sup miso, masukkan kiub tauhu dan rumpai laut wakame yang telah dihidratkan ke dalam periuk dengan campuran dashi dan miso, kacau perlahan untuk menggabungkan, kemudian kurangkan api ke rendah dan renehkan sup selama kira-kira 2 hingga 3 minit, atau sehingga tauhu panas sepenuhnya dan rasa telah sebati, dengan wakame menambah rasa lautan yang halus dan tauhu memberikan tekstur yang licin dan berkrim.',
        'Akhir sekali, senduk sup miso ke dalam mangkuk, berhati-hati untuk mengagihkan tauhu dan wakame secara sekata, kemudian hias setiap mangkuk dengan taburan daun bawang yang dihiris nipis, yang sepatutnya menambah rasa cerah dan segar serta sentuhan warna yang ceria pada hidangan, sebelum dihidangkan segera dan menikmati keseimbangan rasa dan tekstur yang kompleks dan harmoni dalam sup miso yang telah siap.'
      ]
    }
  },
  'jp-06': {
    'zh-CN': {
      title: '章鱼小丸子',
      description: '源自日本大阪的正宗食谱',
      ingredients: [
        { item: '章鱼小丸子面糊', amount: '' },
        { item: '煮熟的章鱼块', amount: '' },
        { item: '章鱼小丸子酱', amount: '' },
        { item: '蛋黄酱', amount: '' },
        { item: '木鱼花', amount: '' },
        { item: '青海苔粉', amount: '' },
        { item: '腌姜', amount: '' }
      ],
      instructions: [
        '首先，将面粉、高汤和鸡蛋在一个大碗中搅拌均匀，直到光滑无块，然后静置至少30分钟，让淀粉充分水合，面筋放松。',
        '接下来，将煮熟的章鱼切成小块，大小均匀，约0.6厘米，然后放在一边，小心处理精致的肉质，防止撕裂。',
        '将章鱼小丸子模具用中高火加热，在每个孔中刷上少量油，以防止面糊粘连，然后将少量面糊倒入每个孔中，刚好覆盖底部即可。',
        '立即将一块章鱼放入每个孔的中心，然后倒入额外的面糊，将孔填充至约四分之三满，注意不要溢出。',
        '当面糊开始凝固时，使用竹签或章鱼小丸子挑子持续轻轻翻转和旋转丸子，用轻柔的撬动动作将其从模具中取出，使其形成圆形，并在外部形成酥脆的金黄色外壳。',
        '继续烹饪和翻转章鱼小丸子约3-4分钟，直到它们外部呈金黄色酥脆，内部煮熟至奶油般柔软，酥脆与柔软之间达到微妙的平衡。',
        '装盘时，将热腾腾的章鱼小丸子放在盘中，然后淋上甜酸的章鱼小丸子酱，接着挤上一大勺浓郁奶油状的蛋黄酱，撒上鲜美烟熏的木鱼花，再撒上少许芬芳翠绿的青海苔粉，最后在旁边放一片腌姜，以增加明亮柑橘风味和一丝酸度来中和浓郁感。',
        '最后，立即趁热上桌，如果需要，可以额外撒上木鱼花和青海苔粉作为装饰，享受酥脆外皮与柔软奶油内馅，以及酱汁、蛋黄酱和调味料的甜、咸、酸风味组合。'
      ]
    },
    ms: {
      title: 'Takoyaki',
      description: 'Resipi asli dari Osaka, Jepun',
      ingredients: [
        { item: 'Adunan Takoyaki', amount: '' },
        { item: 'Potongan sotong kurita yang dimasak', amount: '' },
        { item: 'Sos Takoyaki', amount: '' },
        { item: 'Mayonis', amount: '' },
        { item: 'Katsuobushi', amount: '' },
        { item: 'Aonori', amount: '' },
        { item: 'Halia jeruk', amount: '' }
      ],
      instructions: [
        'Untuk bermula, sediakan adunan takoyaki dengan memukul tepung, kuah dashi, dan telur dalam mangkuk besar sehingga licin dan bebas ketulan, kemudian biarkan ia berehat selama sekurang-kurangnya 30 minit untuk membolehkan kanji terhidrat dan gluten mengendur.',
        'Seterusnya, potong sotong kurita yang telah dimasak menjadi kepingan kecil yang seragam, kira-kira 1/4 inci saiznya, dan ketepikan, berhati-hati untuk mengendalikan isi yang lembut dengan perlahan untuk mengelakkan koyakan.',
        'Panaskan acuan takoyaki di atas api sederhana-tinggi, sapu lubang-lubang dengan sedikit minyak untuk mengelakkan adunan melekat, kemudian tuangkan sedikit adunan ke dalam setiap lubang, cukup untuk menutupi bahagian bawah.',
        'Segera letakkan sekeping sotong kurita di tengah setiap lubang, kemudian tuangkan adunan tambahan untuk mengisi lubang kira-kira 3/4 penuh, berhati-hati agar tidak melimpah.',
        'Apabila adunan mula mengeras, gunakan lidi atau pencungkil takoyaki untuk memusing dan memutar bebola secara berterusan, menggunakan gerakan mencungkil yang lembut untuk melepaskannya dari acuan semasa ia masak, membentuk bentuk bulat dan menghasilkan kerak perang keemasan yang rangup di luar.',
        'Teruskan memasak dan memusing takoyaki selama kira-kira 3-4 minit, sehingga ia berwarna perang keemasan dan rangup di luar, dan masak sepenuhnya hingga bahagian dalam yang berkrim dan lembut, dengan keseimbangan rangup dan kelembutan yang halus.',
        'Untuk menghidang, letakkan takoyaki panas di atas pinggan hidangan, kemudian titiskan dengan sos takoyaki yang manis dan masam, diikuti dengan sedikit mayonis yang kaya dan berkrim, taburan serpihan bonito katsuobushi yang savuri dan berasap, dan secubit rumpai laut aonori hijau zamrud yang harum, diakhiri dengan hirisan halia jeruk di sisi untuk menambah rasa cerah, sitrus dan sentuhan keasidan untuk mengimbangi kekayaan rasa.',
        'Akhir sekali, hidangkan takoyaki segera, semasa masih panas dan berasap, dihiasi dengan serpihan bonito dan aonori tambahan jika dikehendaki, dan nikmati gabungan tekstur dan rasa, dari bahagian luar yang rangup hingga bahagian dalam yang lembut dan berkrim, serta rasa manis, savuri, dan masam dari sos, mayonis, dan perasa.'
      ]
    }
  },
  'jp-07': {
    'zh-CN': {
      title: '煎饺',
      description: '源自日本东京的正宗食谱',
      ingredients: [
        { item: '饺子皮', amount: '' },
        { item: '猪肉馅', amount: '200克' },
        { item: '卷心菜', amount: '' },
        { item: '大蒜', amount: '' },
        { item: '姜', amount: '' },
        { item: '香油', amount: '' },
        { item: '酱油', amount: '' }
      ],
      instructions: [
        '首先，将100克大白菜切碎，放入平底锅中，加入1汤匙香油，用中火炒至半透明并略带焦糖色，偶尔搅拌，这将有助于产生浓郁的甜味。',
        '在一个大搅拌碗中，将200克猪肉馅、炒好的卷心菜、2瓣切碎的大蒜和1汤匙磨碎的新鲜姜混合在一起，用手或木勺搅拌均匀，注意不要过度搅拌。',
        '向猪肉混合物中加入1汤匙酱油，搅拌至肉馅刚刚粘合，注意风味的微妙平衡。',
        '将一张饺子皮放在干净的表面上，在饺子皮中心放一汤匙猪肉馅，馅料周围留出1.2厘米的边距。',
        '用手指蘸少量水，沿着饺子皮的边缘涂抹，然后将饺子皮对折成三角形，将两个相对的角合拢形成一个尖角，然后按压边缘以密封饺子，确保褶皱紧密均匀。',
        '在一个大的不粘锅中，用中高火加热1汤匙植物油，直到油几乎冒烟，然后小心地将饺子平底朝下放入锅中，煎至底部金黄色，大约需要2-3分钟。',
        '一旦饺子底部呈金黄色，向锅中加入少量水，约1汤匙，并立即盖上锅盖，让饺子蒸3分钟，这将有助于将馅料煮熟，并产生鲜嫩多汁的口感。',
        '3分钟后，取下锅盖，检查饺子是否煮熟，馅料内部温度是否达到74°C，然后立即与您选择的蘸酱一起食用，例如酱油、醋和辣椒油的混合物。'
      ]
    },
    ms: {
      title: 'Gyoza',
      description: 'Resipi asli dari Tokyo, Jepun',
      ingredients: [
        { item: 'Kulit gyoza', amount: '' },
        { item: 'Daging babi cincang', amount: '200g' },
        { item: 'Kubis', amount: '' },
        { item: 'Bawang putih', amount: '' },
        { item: 'Halia', amount: '' },
        { item: 'Minyak bijan', amount: '' },
        { item: 'Kicap', amount: '' }
      ],
      instructions: [
        'Untuk bermula, cincang halus 100g kubis napa dan tumis dalam kuali dengan 1 sudu besar minyak bijan di atas api sederhana sehingga ia lutsinar dan sedikit karamel, kacau sekali-sekala, yang akan membantu mengembangkan rasa manis yang mendalam.',
        'Dalam mangkuk adunan besar, gabungkan 200g daging babi cincang, kubis yang telah dimasak, 2 ulas bawang putih cincang, dan 1 sudu besar halia segar parut, campurkan semuanya dengan tangan anda atau sudu kayu sehingga sebati, berhati-hati agar tidak terlalu banyak mengadun.',
        'Tambah 1 sudu besar kicap ke dalam campuran daging babi dan gaul sehingga daging baru sahaja terikat bersama, dengan mengambil kira keseimbangan rasa yang halus.',
        'Letakkan kulit gyoza di atas permukaan yang bersih dan letakkan satu sudu besar inti daging babi di tengah kulit, tinggalkan sempadan 1/2 inci di sekeliling inti.',
        'Celupkan jari anda ke dalam sedikit air dan sapukan di sepanjang tepi kulit, kemudian lipat kulit menjadi segi tiga dengan menyatukan dua sudut bertentangan untuk membentuk satu titik, dan tekan tepi bersama untuk menutup gyoza, pastikan lipatan ketat dan sekata.',
        'Panaskan 1 sudu besar minyak sayuran dalam kuali tidak melekat yang besar di atas api sederhana-tinggi sehingga ia hampir berasap, kemudian letakkan gyoza dengan berhati-hati ke dalam kuali, bahagian rata ke bawah, dan goreng sehingga bahagian bawah berwarna perang keemasan, yang sepatutnya mengambil masa kira-kira 2-3 minit.',
        'Setelah gyoza berwarna perang keemasan, tambahkan sedikit percikan air ke dalam kuali, kira-kira 1 sudu besar, dan segera tutup kuali dengan penutup, biarkan gyoza mengukus selama 3 minit, yang akan membantu memasak inti sepenuhnya dan menghasilkan tekstur yang lembut dan berjus.',
        'Selepas 3 minit, angkat penutup dan periksa bahawa gyoza telah masak sepenuhnya dan inti telah dipanaskan hingga suhu dalaman 165°F (74°C), kemudian hidangkan segera dengan sos pencicah pilihan anda, seperti campuran kicap, cuka, dan minyak cili.'
      ]
    }
  },
  'jp-08': {
    'zh-CN': {
      title: '照烧鸡',
      description: '源自日本东京的正宗食谱',
      ingredients: [
        { item: '鸡腿肉', amount: '2 块' },
        { item: '酱油', amount: '3 汤匙' },
        { item: '味醂', amount: '2 汤匙' },
        { item: '清酒', amount: '1 汤匙' },
        { item: '糖', amount: '1 汤匙' }
      ],
      instructions: [
        '首先，在一个小平底锅中，将3汤匙优质酱油、2汤匙味醂（一种甜日本料理酒）和1汤匙清酒（一种干日本米酒）搅拌均匀，然后加入1汤匙砂糖并搅拌至溶解，制成光滑浓稠的酱汁。',
        '接下来，将2块饱满新鲜的鸡腿肉放入一个大密封袋或带盖的非反应性容器中，将准备好的照烧酱倒在鸡肉上，翻动使其均匀裹上酱汁，然后密封袋子或盖上容器，冷藏至少30分钟或最多2小时，让鸡肉腌制并吸收酱汁浓郁的美味。',
        '鸡肉腌制好后，从冰箱中取出，在室温下放置15分钟，让肉放松，汁液重新分布，然后将一个大而厚底的煎锅或铸铁锅用中高火加热，直到达到极高的温度，大约232°C，并在预热的锅中加入少量油，旋转使其均匀涂抹锅底。',
        '锅热油亮时，小心地将腌制好的鸡腿肉放入锅中，皮朝下，煎5-7分钟，或直到鸡皮呈金黄色酥脆，发出令人满足的嘎吱声，然后翻面再煮5分钟，或直到内部温度达到74°C。',
        '鸡肉煮熟后，将火调至中低，将剩余的照烧酱倒入锅中，煮沸使其变稠并浓缩，增强风味，形成一种甜咸兼备、带有深焦糖风味的釉汁。',
        '用夹子或铲子小心地提起并翻动锅中的鸡腿肉，使其均匀裹上釉汁，并让其焦糖化并粘附在肉上，形成一层粘稠、甜咸的酥脆外皮，既酥脆又鲜嫩，然后继续上釉并翻动鸡肉2-3分钟，或直到完全裹上酱汁并达到所需的稠度。',
        '上菜时，将裹好釉汁的鸡腿肉切成约0.6厘米厚的薄片，摆放在热腾腾的日式米饭上，用切成薄片的青葱和少许烤芝麻装饰，然后淋上剩余的照烧酱，立即上桌，让甜、咸、鲜的多种风味和质地和谐融合。'
      ]
    },
    ms: {
      title: 'Ayam Teriyaki',
      description: 'Resipi asli dari Tokyo, Jepun',
      ingredients: [
        { item: 'Peha ayam', amount: '2 keping' },
        { item: 'Kicap', amount: '3 sudu besar' },
        { item: 'Mirin', amount: '2 sudu besar' },
        { item: 'Sake', amount: '1 sudu besar' },
        { item: 'Gula', amount: '1 sudu besar' }
      ],
      instructions: [
        'Untuk bermula, sediakan sos teriyaki dengan memukul bersama 3 sudu besar kicap berkualiti tinggi, 2 sudu besar mirin, wain masak Jepun yang manis, dan 1 sudu besar sake, wain beras Jepun kering, dalam periuk kecil, kemudian masukkan 1 sudu besar gula pasir dan pukul sehingga larut, menghasilkan sos yang licin dan bersirap.',
        'Seterusnya, masukkan 2 keping peha ayam yang gebu dan segar ke dalam beg ziplock besar atau bekas tidak reaktif dengan penutup, dan tuangkan sos teriyaki yang telah disediakan ke atas ayam, pusingkan untuk menyalut secara sekata, kemudian tutup beg atau bekas, dan sejukkan selama sekurang-kurangnya 30 minit atau sehingga 2 jam untuk membolehkan ayam diperap dan menyerap rasa sos yang kaya dan savuri.',
        'Selepas ayam diperap, keluarkannya dari peti sejuk dan biarkan pada suhu bilik selama 15 minit untuk membolehkan daging mengendur dan jus diedarkan semula, kemudian panaskan kuali besar bertapak tebal atau kuali besi tuang di atas api sederhana-tinggi sehingga mencapai suhu yang sangat panas, kira-kira 450°F (232°C), dan masukkan sedikit minyak ke dalam kuali yang telah dipanaskan, pusingkan untuk menyalut bahagian bawah secara sekata.',
        'Dengan kuali panas dan minyak berkilauan, letakkan peha ayam yang telah diperap dengan berhati-hati ke dalam kuali, bahagian kulit ke bawah, dan bakar selama 5-7 minit, atau sehingga kulit berwarna perang keemasan dan rangup, dengan kerangupan yang memuaskan yang menghasilkan daging yang lembut dan berjus, kemudian terbalikkan ayam dan masak selama 5 minit lagi, atau sehingga mencapai suhu dalaman 165°F (74°C).',
        'Setelah ayam masak sepenuhnya, kurangkan api ke sederhana-rendah dan tuangkan sos teriyaki yang tinggal ke dalam kuali, biarkan ia mendidih dan memekat serta mengurangkan, mengintensifkan rasa dan menghasilkan glaze yang manis dan savuri, dengan rasa karamel yang mendalam.',
        'Menggunakan penyepit atau spatula, angkat dan pusingkan peha ayam dengan berhati-hati di dalam kuali, menyalutnya secara sekata dengan glaze dan membiarkannya berkaramel dan melekat pada daging, menghasilkan kerak yang melekit, manis, dan savuri yang rangup dan lembut, kemudian teruskan mengglaze dan memusing ayam selama 2-3 minit lagi, atau sehingga ia disalut sepenuhnya dan sos telah mencapai konsistensi yang dikehendaki.',
        'Untuk menghidang, hiriskankan peha ayam yang telah diglaze menjadi jalur nipis, kira-kira 1/4 inci tebal, dan susunkannya di atas nasi Jepun panas yang berasap, dihiasi dengan hirisan daun bawang nipis dan taburan biji bijan panggang, kemudian titiskan sebarang sos teriyaki yang tinggal di atasnya dan hidangkan segera, membiarkan gabungan rasa dan tekstur sebati dalam keseimbangan manis, savuri, dan umami yang harmoni.'
      ]
    }
  },
  'jp-09': {
    'zh-CN': {
      title: '抹茶芝士蛋糕',
      description: '源自日本东京的正宗食谱',
      ingredients: [
        { item: '奶油芝士', amount: '500克' },
        { item: '鸡蛋', amount: '3个' },
        { item: '糖', amount: '100克' },
        { item: '抹茶粉', amount: '2汤匙' },
        { item: '鲜奶油', amount: '200毫升' },
        { item: '饼干底', amount: '' }
      ],
      instructions: [
        '首先准备饼干底：将200克高质量饼干（如消化饼或焦糖饼干）压碎成细屑，与100克融化的无盐黄油混合，直至混合物呈湿沙状。将混合物均匀地压入一个20厘米的弹簧扣模具底部，冷藏至少30分钟使其凝固。',
        '在带有桨状搅拌器的立式搅拌机中，搅打500克奶油芝士，直至其顺滑呈奶油状，必要时刮下碗壁。逐渐加入100克砂糖，持续搅打直至混合均匀且糖溶解。',
        '将2汤匙高质量抹茶粉加入奶油芝士混合物中，搅打直至混合物呈现鲜艳的绿色，抹茶均匀分布。混合物应带有细腻、略带涩味的香气。',
        '每次加入一个大鸡蛋，搅打至每个鸡蛋完全融入后再加入下一个。混合物应顺滑呈奶油状，并带有光泽。',
        '在另一个碗中，搅打200毫升重鲜奶油，直至形成硬性发泡，注意不要过度搅打。用橡皮刮刀将打发好的鲜奶油轻轻拌入奶油芝士混合物中，从混合物中心切入并向上翻拌，直至没有白色条纹。',
        '将芝士蛋糕混合物倒入弹簧扣模具中准备好的饼干底上，用抹刀抹平表面，使其平整。混合物应略高于模具的一半。',
        '将弹簧扣模具放入一个大烤盘中，加入足够的热水，使其达到弹簧扣模具侧面的一半高度。放入预热至160°C的烤箱中烘烤50分钟，或直至边缘凝固，中心略微晃动。芝士蛋糕应略微膨胀，边缘带有细腻的金黄色外皮。',
        '将芝士蛋糕从烤箱中取出，让其在水浴中完全冷却。冷却后，将芝士蛋糕冷藏过夜，或至少8小时，以使风味成熟，质地凝固。芝士蛋糕应冰凉且触感坚实，带有细腻、略带苦味的抹茶风味和顺滑、奶油般的质地。'
      ]
    },
    ms: {
      title: 'Kek Keju Matcha',
      description: 'Resipi asli dari Tokyo, Jepun',
      ingredients: [
        { item: 'krim keju', amount: '500g' },
        { item: 'telur', amount: '3 biji' },
        { item: 'gula', amount: '100g' },
        { item: 'serbuk matcha', amount: '2 sudu besar' },
        { item: 'krim putar', amount: '200ml' },
        { item: 'tapak biskut', amount: '' }
      ],
      instructions: [
        'Mulakan dengan menyediakan tapak biskut: hancurkan 200g biskut berkualiti tinggi, seperti Digestives atau speculoos, menjadi serbuk halus dan campurkan dengan 100g mentega tanpa garam yang dicairkan sehingga campuran menyerupai pasir basah. Tekan campuran ke dasar loyang springform 20cm, pastikan lapisan rata, dan sejukkan selama sekurang-kurangnya 30 minit untuk mengeras.',
        'Dalam pengadun berdiri yang dilengkapi dengan lampiran dayung, pukul 500g krim keju sehingga licin dan berkrim, berhenti untuk mengikis sisi mangkuk jika perlu. Masukkan 100g gula pasir secara beransur-ansur, pukul secara berterusan sehingga campuran sebati dan gula larut.',
        'Masukkan 2 sudu besar serbuk matcha berkualiti tinggi ke dalam campuran krim keju, pukul sehingga campuran berwarna hijau terang dan matcha tersebar rata. Campuran sepatutnya mempunyai aroma yang halus, sedikit kelat.',
        'Pukul 3 biji telur besar satu per satu, biarkan setiap telur sebati sepenuhnya sebelum menambah yang seterusnya. Campuran sepatutnya licin dan berkrim, dengan penampilan berkilat.',
        'Dalam mangkuk berasingan, putar 200ml krim putar berat sehingga membentuk puncak kaku, berhati-hati agar tidak terlebih putar. Lipat krim putar ke dalam campuran krim keju menggunakan spatula getah, potong perlahan-lahan melalui tengah campuran dan angkat ke atas krim putar sehingga tiada jalur putih yang tinggal.',
        'Tuangkan campuran kek keju ke atas tapak biskut yang telah disediakan dalam loyang springform, ratakan bahagian atas dengan spatula offset untuk menghasilkan permukaan yang rata. Campuran sepatutnya berada sedikit di atas paras separuh loyang.',
        'Letakkan loyang springform dalam loyang pembakar besar dan masukkan air panas yang cukup sehingga separuh ketinggian sisi loyang springform. Bakar dalam ketuhar yang telah dipanaskan pada suhu 160°C selama 50 minit, atau sehingga tepinya mengeras dan bahagian tengahnya sedikit bergoyang. Kek keju sepatutnya sedikit mengembang dan mempunyai kerak perang keemasan yang halus di sekeliling tepi.',
        'Keluarkan kek keju dari ketuhar dan biarkan ia sejuk sepenuhnya dalam rendaman air. Setelah sejuk, sejukkan kek keju semalaman, atau sekurang-kurangnya 8 jam, untuk membolehkan rasa matang dan tekstur mengeras. Kek keju sepatutnya sejuk dan pejal apabila disentuh, dengan rasa matcha yang halus, sedikit pahit dan tekstur yang licin, berkrim.'
      ]
    }
  },
  'jp-10': {
    'zh-CN': {
      title: '大阪烧',
      description: '源自日本大阪的正宗食谱',
      ingredients: [
        { item: '大阪烧面糊', amount: '' },
        { item: '卷心菜丝', amount: '' },
        { item: '五花肉', amount: '' },
        { item: '鸡蛋', amount: '' },
        { item: '天妇罗碎', amount: '' },
        { item: '大阪烧酱', amount: '' },
        { item: '蛋黄酱', amount: '' },
        { item: '鲣鱼片', amount: '' }
      ],
      instructions: [
        '首先，在一个大碗中将面粉、水和一小撮盐搅拌均匀，直至顺滑无块，然后静置30分钟，让面筋松弛。',
        '接下来，将卷心菜切成细丝备用，然后将天妇罗碎切成小块，放入350°F（约175°C）的烤箱中轻轻烘烤2-3分钟，或直至酥脆金黄，以增强其口感和风味。',
        '在一个大碗中，将大阪烧面糊与卷心菜丝、烤过的天妇罗碎和打散的鸡蛋轻轻混合，注意不要过度搅拌，直至卷心菜均匀裹上面糊，面糊刚好混合。',
        '用中火加热一个大的、养护良好的铸铁锅或大阪烧烤盘，然后倒入面糊混合物，均匀铺开形成一个约1/2英寸（约1.25厘米）厚的圆形，烹饪2-3分钟，或直至边缘开始凝固且表面干燥。',
        '将薄片五花肉铺在大阪烧顶部，边缘留出1英寸（约2.5厘米）的边距，再烹饪5分钟，或直至猪肉焦糖化且大阪烧底部呈金黄色，然后小心地将大阪烧翻面，再烹饪5分钟，或直至另一面也呈金黄色。',
        '最后，在大阪烧上刷上甜咸的大阪烧酱，然后挤上一团奶油蛋黄酱，撒上鲣鱼片以增添鲜味，再撒上青海苔以增加深度和海洋风味。',
        '最后，将大阪烧从锅中取出，转移到砧板上，然后切成楔形，立即上桌，如果需要，可额外用青海苔、鲣鱼片和大阪烧酱装饰，尽情享受这道标志性日本菜肴中风味和口感的和谐平衡。'
      ]
    },
    ms: {
      title: 'Okonomiyaki',
      description: 'Resipi asli dari Osaka, Jepun',
      ingredients: [
        { item: 'adunan Okonomiyaki', amount: '' },
        { item: 'kubis hiris', amount: '' },
        { item: 'perut babi', amount: '' },
        { item: 'telur', amount: '' },
        { item: 'tenkasu', amount: '' },
        { item: 'sos Okonomiyaki', amount: '' },
        { item: 'mayonis', amount: '' },
        { item: 'katsuobushi', amount: '' }
      ],
      instructions: [
        'Untuk bermula, sediakan adunan okonomiyaki dengan memukul tepung, air, dan secubit garam dalam mangkuk besar sehingga licin dan bebas ketulan, kemudian biarkan ia berehat selama 30 minit untuk membiarkan gluten mengendur.',
        'Seterusnya, hiris kubis halus dan ketepikan, kemudian potong tenkasu menjadi kepingan kecil dan bakar ringan dalam ketuhar 350°F selama 2-3 minit, atau sehingga rangup dan perang keemasan, untuk meningkatkan tekstur dan rasanya.',
        'Dalam mangkuk besar, campurkan perlahan-lahan adunan okonomiyaki dengan kubis hiris, tenkasu yang dibakar, dan telur yang dipukul ringan, berhati-hati agar tidak terlebih campur, sehingga kubis disalut rata dan adunan baru sebati.',
        'Panaskan kuali besi tuang besar yang telah diperap dengan baik atau gril okonomiyaki di atas api sederhana, kemudian tuangkan campuran adunan, ratakan untuk membentuk bulatan, kira-kira 1/2 inci tebal, dan masak selama 2-3 minit, atau sehingga tepinya mula mengeras dan permukaannya kering.',
        'Letakkan hirisan nipis perut babi di atas okonomiyaki, tinggalkan sempadan 1 inci di sekeliling tepi, dan masak selama 5 minit lagi, atau sehingga daging babi berkaramel dan okonomiyaki berwarna perang keemasan di bahagian bawah, kemudian balikkan okonomiyaki dengan berhati-hati dan masak selama 5 minit lagi, atau sehingga bahagian lain juga berwarna perang keemasan.',
        'Untuk menghabiskan, sapukan okonomiyaki dengan sos okonomiyaki yang manis dan savuri, diikuti dengan sesudu mayonis berkrim, taburan katsuobushi untuk letupan rasa umami, dan taburan rumpai laut aonori untuk kedalaman tambahan dan sentuhan lautan.',
        'Akhir sekali, keluarkan okonomiyaki dari kuali dan pindahkan ke papan pemotong, kemudian potong menjadi baji dan hidangkan segera, dihiasi dengan aonori, katsuobushi, dan sos okonomiyaki tambahan, jika dikehendaki, dan nikmati keseimbangan rasa dan tekstur yang harmoni dalam hidangan Jepun ikonik ini.'
      ]
    }
  },
  'cn-01': {
    'zh-CN': {
      title: '宫保鸡丁',
      description: '源自中国四川的正宗食谱',
      ingredients: [
        { item: '鸡胸肉', amount: '500克' },
        { item: '干红辣椒', amount: '' },
        { item: '花椒', amount: '' },
        { item: '花生', amount: '' },
        { item: '酱油', amount: '' },
        { item: '醋', amount: '' },
        { item: '糖', amount: '' },
        { item: '大蒜', amount: '' },
        { item: '姜', amount: '' }
      ],
      instructions: [
        '将鸡丁用酱油和玉米淀粉腌制。在干锅中烤花生。',
        '用油炸干辣椒和花椒。加入鸡肉，煮至金黄。',
        '加入大蒜、姜、酱汁（酱油、醋、糖）。加入花生，最后撒上葱花。'
      ]
    },
    ms: {
      title: 'Ayam Kung Pao',
      description: 'Resipi asli dari Sichuan, China',
      ingredients: [
        { item: 'dada ayam', amount: '500g' },
        { item: 'cili merah kering', amount: '' },
        { item: 'lada Sichuan', amount: '' },
        { item: 'kacang tanah', amount: '' },
        { item: 'kicap', amount: '' },
        { item: 'cuka', amount: '' },
        { item: 'gula', amount: '' },
        { item: 'bawang putih', amount: '' },
        { item: 'halia', amount: '' }
      ],
      instructions: [
        'Perap ayam dadu dalam kicap dan tepung jagung. Bakar kacang tanah dalam kuali kering.',
        'Goreng cili kering dan lada Sichuan dalam minyak. Masukkan ayam, masak sehingga keemasan.',
        'Masukkan bawang putih, halia, sos (kicap, cuka, gula). Masukkan kacang tanah, akhiri dengan daun bawang.'
      ]
    }
  },
  'cn-02': {
    'zh-CN': {
      title: '点心 (虾饺)',
      description: '源自中国广州的正宗食谱',
      ingredients: [
        { item: '虾饺馅', amount: '' },
        { item: '澄面面团', amount: '' },
        { item: '竹笋', amount: '' },
        { item: '香油', amount: '' },
        { item: '酱油', amount: '' }
      ],
      instructions: [
        '首先，准备虾饺馅：将1磅大虾去皮去虾线，然后切成均匀的小块，与1汤匙香油、1茶匙酱油和1汤匙切碎的葱花混合，轻轻拌匀，注意不要过度搅拌。',
        '接下来，制作澄面面团：在一个大碗中，将1/2杯开水逐渐加入2杯澄面中，用木勺搅拌直至面团聚集成团，然后揉搓5分钟直至光滑柔软。',
        '让澄面面团盖上保鲜膜静置15分钟，以松弛面筋，使其更容易擀成纸一样薄的程度，大约1/16英寸（约0.16厘米）厚，可以使用擀面杖或面条机。',
        '使用圆形饼干模具或玻璃杯边缘，切出直径约3英寸（约7.6厘米）的面团圆片，作为虾饺皮，确保切割干净，避免撕裂脆弱的面团。',
        '在每个面团圆片的中心放一小勺虾馅，然后将面团折叠并捏成月牙形，将边缘按压在一起以密封饺子，确保它们紧密闭合，以防止馅料在蒸煮过程中溢出。',
        '在竹蒸笼内铺上烘焙纸或干净的棉布，将虾饺单层排列，每个饺子之间留出约1英寸（约2.5厘米）的空间，以便均匀蒸煮，然后将蒸笼放在一锅沸水上，盖上紧密的盖子。',
        '蒸虾饺7分钟，或直至它们变得半透明且面团煮熟，但仍保持细腻的口感，然后从蒸笼中取出，立即与由等量酱油和香油制成的蘸酱一起食用，用切成薄片的葱花和少许芝麻装饰。'
      ]
    },
    ms: {
      title: 'Dim Sum (Har Gow)',
      description: 'Resipi asli dari Guangzhou, China',
      ingredients: [
        { item: 'inti ladu udang', amount: '' },
        { item: 'doh kanji gandum', amount: '' },
        { item: 'rebung', amount: '' },
        { item: 'minyak bijan', amount: '' },
        { item: 'kicap', amount: '' }
      ],
      instructions: [
        'Untuk bermula, sediakan inti ladu udang dengan mengupas dan membuang urat 1 paun udang besar, kemudian cincang menjadi kepingan kecil yang seragam dan campurkan dengan 1 sudu besar minyak bijan, 1 sudu teh kicap, dan 1 sudu besar daun bawang yang dicincang halus sehingga sebati, berhati-hati agar tidak terlebih campur.',
        'Seterusnya, buat doh kanji gandum dengan secara beransur-ansur menambah 1/2 cawan air mendidih ke 2 cawan kanji gandum dalam mangkuk adunan besar, kacau dengan sudu kayu sehingga doh bersatu menjadi jisim yang padu, kemudian uli selama 5 minit sehingga licin dan mudah dibentuk.',
        'Biarkan doh kanji gandum berehat, ditutup dengan pembalut plastik, selama 15 minit untuk merehatkan gluten, menjadikannya lebih mudah untuk digulung nipis seperti kertas, kira-kira 1/16 inci tebal, menggunakan penggelek atau mesin pasta.',
        'Menggunakan pemotong biskut bulat atau tepi gelas, potong bulatan doh, kira-kira 3 inci diameter, untuk membentuk kulit har gow, pastikan untuk memotong dengan bersih dan mengelakkan doh yang halus terkoyak.',
        'Letakkan sesudu kecil inti udang di tengah setiap bulatan doh, kemudian lipat dan kelim doh menjadi bentuk bulan sabit, tekan tepi bersama untuk menutup ladu, pastikan ia tertutup rapat untuk mengelakkan inti keluar semasa mengukus.',
        'Lapik pengukus buluh dengan kertas parchment atau kain kapas bersih, dan susun har gow dalam satu lapisan, tinggalkan kira-kira 1 inci ruang antara setiap ladu untuk membolehkan pengukusan sekata, kemudian letakkan pengukus di atas periuk air mendidih, tutup dengan penutup yang ketat.',
        'Kukus har gow selama 7 minit, atau sehingga ia lutsinar dan doh masak sepenuhnya, namun masih mengekalkan tekstur yang halus, kemudian keluarkan dari pengukus dan hidangkan segera dengan sos pencicah yang dibuat daripada bahagian kicap dan minyak bijan yang sama, dihiasi dengan daun bawang yang dihiris nipis dan taburan bijan.'
      ]
    }
  },
  'cn-03': {
    'zh-CN': {
      title: '麻婆豆腐',
      description: '源自中国成都的正宗食谱',
      ingredients: [
        { item: '嫩豆腐', amount: '400克' },
        { item: '猪肉末', amount: '150克' },
        { item: '豆瓣酱', amount: '' },
        { item: '花椒', amount: '' },
        { item: '豆豉', amount: '1汤匙' },
        { item: '大蒜', amount: '' },
        { item: '姜', amount: '' },
        { item: '辣椒油', amount: '' }
      ],
      instructions: [
        '将猪肉末与豆瓣酱炒香。加入大蒜、姜、豆豉。',
        '加入高汤和切片豆腐。小火炖5分钟，不要弄碎豆腐。',
        '用玉米淀粉勾芡，最后淋上花椒油和撒上花椒。与米饭一起食用。'
      ]
    },
    ms: {
      title: 'Mapo Tofu',
      description: 'Resipi asli dari Chengdu, China',
      ingredients: [
        { item: 'tauhu sutera', amount: '400g' },
        { item: 'daging babi cincang', amount: '150g' },
        { item: 'Doubanjiang', amount: '' },
        { item: 'lada Sichuan', amount: '' },
        { item: 'kacang hitam fermentasi', amount: '1 sudu besar' },
        { item: 'bawang putih', amount: '' },
        { item: 'halia', amount: '' },
        { item: 'minyak cili', amount: '' }
      ],
      instructions: [
        'Goreng daging babi cincang dengan doubanjiang sehingga wangi. Masukkan bawang putih, halia, kacang hitam.',
        'Masukkan stok dan tauhu yang dihiris. Rebus perlahan 5 minit tanpa memecahkan tauhu.',
        'Pekatkan dengan tepung jagung, akhiri dengan minyak Sichuan dan lada Sichuan. Hidangkan dengan nasi.'
      ]
    }
  },
  'cn-04': {
    'zh-CN': {
      title: '北京烤鸭',
      description: '源自中国北京的地道食谱',
      ingredients: [
        { item: '整鸭', amount: '1 只' },
        { item: '海鲜酱', amount: '' },
        { item: '大葱', amount: '' },
        { item: '黄瓜', amount: '' },
        { item: '荷叶饼', amount: '' },
        { item: '五香粉', amount: '' }
      ],
      instructions: [
        '首先准备鸭子，确保彻底清洗干净并用厨房纸拍干，然后将鸭子在阴凉通风处风干24小时，以去除多余水分并使鸭皮收紧，这对于制作出北京烤鸭标志性的酥脆鸭皮至关重要。',
        '风干后，用麦芽糖、水和少许醋制成的麦芽糖浆刷遍鸭皮，使其均匀上色和焦糖化，然后再次将鸭子挂起来风干至少2小时，以固定糖浆。',
        '将烤箱预热至200°C，然后将鸭子胸朝上放入烤盘中，烤60-80分钟，或直到鸭皮呈深红褐色且酥脆，每20分钟用烤出的鸭油涂抹鸭身，以保持水分并促进均匀上色。',
        '在烘烤过程中，密切观察鸭皮的颜色和酥脆度，寻找金褐色、焦糖化且酥脆的表皮，咬下去有令人满足的嘎吱声，内里则是鲜嫩多汁的鸭肉。',
        '鸭子烤好后，从烤箱中取出，静置10-15分钟，让汁水重新分布，然后当场片鸭，小心地将酥脆的鸭皮与鸭肉分离，鸭肉应鲜嫩、美味，并充满五香粉的芳香。',
        '组装菜肴时，将荷叶饼平铺在盘子或蒸笼上，然后放一片烤鸭、几根大葱和一片黄瓜，最后在饼上淋上海鲜酱，海鲜酱能增添甜、咸、鲜的复合风味，与鸭肉及其他食材相得益彰。',
        '食用时，将荷叶饼包裹住鸭肉和其他馅料，形成一个整洁紧凑的小包，方便拿起食用，注意保持馅料和薄饼的完整性，薄饼应柔软、有弹性且略带嚼劲，并带有微妙的甜味，提升整体风味体验。',
        '最后，用额外的大葱、黄瓜片和一小碟海鲜酱点缀菜肴，让每位客人都能根据自己的喜好调整风味，为这道经典的中国菜增添一份优雅和精致。'
      ]
    },
    ms: {
      title: 'Itik Peking',
      description: 'Resipi asli dari Beijing, China',
      ingredients: [
        { item: 'Itik utuh', amount: '1 ekor' },
        { item: 'Sos hoisin', amount: '' },
        { item: 'Daun bawang', amount: '' },
        { item: 'Timun', amount: '' },
        { item: 'Lempeng Mandarin', amount: '' },
        { item: 'Lima rempah', amount: '' }
      ],
      instructions: [
        'Mulakan dengan menyediakan itik, pastikan ia dibersihkan dengan teliti dan dikeringkan dengan tuala kertas, kemudian keringkan itik di kawasan yang sejuk dan berventilasi baik selama 24 jam untuk menghilangkan kelembapan berlebihan dan membiarkan kulitnya menegang, yang penting untuk mencapai kulit rangup itik Peking yang menjadi ciri khasnya.',
        'Selepas dikeringkan, sapu itik dengan glis maltosa yang diperbuat daripada gula maltosa, air, dan sedikit cuka, sapukan secara rata pada kulit untuk menggalakkan pemerangan dan karamelisasi, kemudian gantung itik untuk dikeringkan lagi selama sekurang-kurangnya 2 jam untuk menetapkan glis.',
        'Panaskan ketuhar hingga 200°C, kemudian letakkan itik dalam loyang pembakar, bahagian dada ke atas, dan panggang selama 60-80 minit, atau sehingga kulitnya berwarna mahogani gelap dan rangup, sapu itik dengan lemak yang cair setiap 20 minit untuk mengekalkan kelembapan dan menggalakkan pemerangan yang sekata.',
        'Semasa proses memanggang, pantau kulit itik untuk warna dan kerangupan yang diingini, cari warna perang keemasan yang karamel dan berderak, dengan kerangupan yang memuaskan yang menghasilkan daging yang lembut dan berair.',
        'Setelah itik masak, keluarkan dari ketuhar dan biarkan ia berehat selama 10-15 minit untuk membolehkan jus diedarkan semula, kemudian potong itik di meja, berhati-hati untuk memisahkan kulit rangup dari daging, yang sepatutnya lembut, berperisa, dan diserap dengan rempah aromatik campuran lima rempah.',
        'Untuk menyusun hidangan, letakkan lempeng Mandarin rata di atas pinggan atau bakul pengukus, kemudian tambah sehiris itik panggang, beberapa daun bawang, dan sehiris timun, akhirnya sapu lempeng dengan sedikit sos hoisin, yang menambah profil rasa manis, masin, dan umami yang melengkapi itik dan bahan-bahan lain.',
        'Untuk menghidang, balut lempeng di sekeliling itik dan inti lain, mencipta bungkusan yang kemas dan padat yang mudah diambil dan dimakan, berhati-hati untuk mengekalkan integriti inti dan lempeng yang halus, yang sepatutnya lembut, mudah lentur, dan sedikit kenyal, dengan kemanisan halus yang meningkatkan pengalaman rasa keseluruhan.',
        'Akhir sekali, hias hidangan dengan daun bawang tambahan, hirisan timun, dan sos hoisin di sisi, yang membolehkan setiap tetamu menyesuaikan pengalaman rasa mereka sendiri, menambah sentuhan keanggunan dan kecanggihan kepada hidangan klasik Cina ini.'
      ]
    }
  },
  'cn-05': {
    'zh-CN': {
      title: '火锅',
      description: '源自中国重庆的地道食谱',
      ingredients: [
        { item: '麻辣锅底', amount: '' },
        { item: '牛肉片', amount: '' },
        { item: '豆腐', amount: '' },
        { item: '蘑菇', amount: '' },
        { item: '藕片', amount: '' },
        { item: '面条', amount: '' },
        { item: '芝麻蘸酱', amount: '' }
      ],
      instructions: [
        '要制作麻辣锅底，首先将2汤匙花椒放入干锅中，用中火烘烤，频繁搅拌，直到香气四溢并略微变色，然后用研磨机磨成细粉。',
        '在一个大锅中，用中火加热2汤匙油，炒香2瓣蒜末和1汤匙姜蓉，直到变软透明，大约2分钟，然后加入2汤匙豆瓣酱，翻炒1分钟，直到酱料香气扑鼻并略微变深。',
        '向锅中加入4杯鸡汤、2杯水和1汤匙酱油，然后加入烘烤过的花椒粉和2个干红辣椒（压碎）或1-2茶匙红辣椒片，将混合物煮沸，然后转小火慢炖至少30分钟，或直到汤汁略微浓缩，风味充分融合。',
        '在汤底烹煮的同时，将1磅牛肉切成薄片并用盐调味，然后将1块老豆腐切成一口大小的方块，将1杯蘑菇切成薄片，并将1根藕切成1/4英寸厚的圆片。',
        '将生食材，包括牛肉、豆腐、蘑菇、藕片和面条，摆放在一个大盘子或单独的盘子上，围绕着沸腾的锅，并为每位客人提供一小碗芝麻蘸酱，蘸酱由2汤匙酱油、1汤匙米醋、1汤匙香油和1茶匙姜蓉搅拌而成。',
        '要烹煮食材，将汤底煮沸，然后转小火慢炖，让每位客人将自己喜欢的食材加入锅中，煮30秒到2分钟，或直到食材煮熟至他们喜欢的程度，然后用漏勺从锅中取出，蘸上芝麻酱。',
        '在食材烹煮过程中，监测汤底，并根据需要添加更多的鸡汤或水以保持稳定的慢炖，并用盐、酱油或额外的豆瓣酱调味，直到汤底达到所需的辣度和风味。',
        '食用时，让每位客人制作自己的火锅碗，选择煮熟的食材、面条和配料，如葱花、姜蓉和烤芝麻，享受这道菜的麻辣、咸香和鲜味，浓郁的芝麻酱为每一口增添了奢华和奶油般的口感。'
      ]
    },
    ms: {
      title: 'Steamboat (Hot Pot)',
      description: 'Resipi asli dari Chongqing, China',
      ingredients: [
        { item: 'Asas sup pedas', amount: '' },
        { item: 'Hirisan daging lembu', amount: '' },
        { item: 'Tofu', amount: '' },
        { item: 'Cendawan', amount: '' },
        { item: 'Akar teratai', amount: '' },
        { item: 'Mi', amount: '' },
        { item: 'Sos celup bijan', amount: '' }
      ],
      instructions: [
        'Untuk mencipta asas sup pedas, mulakan dengan memanggang 2 sudu besar lada Sichuan dalam kuali kering di atas api sederhana, kacau selalu, sehingga wangi dan sedikit keperangan, kemudian kisar menjadi serbuk halus menggunakan pengisar rempah.',
        'Dalam periuk besar, panaskan 2 sudu besar minyak di atas api sederhana dan tumis 2 ulas bawang putih cincang dan 1 sudu besar halia parut sehingga lembut dan lutsinar, kira-kira 2 minit, kemudian masukkan 2 sudu besar doubanjiang dan tumis selama 1 minit, sehingga pes wangi dan sedikit gelap.',
        'Tambah 4 cawan stok ayam, 2 cawan air, dan 1 sudu besar kicap ke dalam periuk, kemudian masukkan serbuk lada Sichuan yang telah dipanggang dan 2 cili merah kering, dihancurkan atau 1-2 sudu teh serpihan cili merah, dan didihkan campuran, sebelum mengurangkan api kepada reneh dan masak selama sekurang-kurangnya 30 minit, atau sehingga sup telah berkurangan sedikit dan rasa telah sebati.',
        'Semasa sup sedang dimasak, hiris 1 paun daging lembu menjadi jalur nipis dan perasakan dengan garam, kemudian potong 1 blok tofu keras menjadi kiub bersaiz gigitan dan 1 cawan cendawan menjadi hirisan nipis, dan hiris 1 akar teratai menjadi kepingan setebal 1/4 inci.',
        'Susun bahan-bahan mentah, termasuk daging lembu, tofu, cendawan, akar teratai, dan mi, di atas pinggan besar atau pinggan individu di sekeliling periuk yang mendidih, dan sediakan setiap tetamu dengan mangkuk kecil sos celup bijan, yang dibuat dengan memukul bersama 2 sudu besar kicap, 1 sudu besar cuka beras, 1 sudu besar minyak bijan, dan 1 sudu teh halia parut.',
        'Untuk memasak bahan-bahan, didihkan sup sehingga mendidih, kemudian kurangkan api kepada reneh, dan minta setiap orang menambah bahan-bahan yang mereka inginkan ke dalam periuk, masak selama 30 saat hingga 2 minit, atau sehingga bahan-bahan masak mengikut citarasa mereka, sebelum mengeluarkannya dari periuk dengan sudu berlubang dan mencelupkannya ke dalam sos bijan.',
        'Semasa bahan-bahan masak, pantau sup dan tambah lebih banyak stok ayam atau air mengikut keperluan untuk mengekalkan reneh yang stabil, dan sesuaikan perasa dengan garam, kicap, atau doubanjiang tambahan mengikut citarasa, sehingga sup mencapai tahap kepedasan dan rasa yang diingini.',
        'Untuk menghidang, minta setiap tetamu mencipta mangkuk steamboat mereka sendiri, dengan pilihan bahan-bahan yang dimasak, mi, dan hiasan, seperti hirisan daun bawang, halia parut, dan bijan panggang, dan nikmati rasa pedas, masin, dan umami hidangan, dengan sos bijan yang kaya dan berlemak menambah elemen mewah dan berkrim pada setiap gigitan.'
      ]
    }
  },
  'cn-06': {
    'zh-CN': {
      title: '小笼包',
      description: '源自中国上海的地道食谱',
      ingredients: [
        { item: '猪肉馅', amount: '' },
        { item: '皮冻（蒸后成汤）', amount: '' },
        { item: '薄面皮', amount: '' },
        { item: '姜', amount: '' },
        { item: '酱油', amount: '' },
        { item: '米醋', amount: '' }
      ],
      instructions: [
        '首先，制作皮冻：将2杯浓猪骨汤与1汤匙无味吉利丁粉在小火上熬煮，偶尔搅拌，直到液体减少一半且吉利丁完全溶解，得到清澈且风味浓郁的汤冻。',
        '将皮冻放入冰箱冷藏，直到凝固并达到坚实的果冻状，这大约需要2-3小时，具体取决于温度和汤的浓度。',
        '皮冻凝固后，小心地将其切成小而均匀的方块，约1/4英寸大小，以便均匀分布在馅料中，并在每一口中提供浓郁的鲜味。',
        '在一个大碗中，将1磅新鲜猪肉馅与切丁的皮冻、1汤匙姜蓉、1茶匙酱油和1茶匙米醋混合，用手或木勺轻轻搅拌均匀，注意不要过度搅拌，以免馅料变得紧实。',
        '组装小笼包时，将一张约1/16英寸厚的薄面皮平铺在撒有少许面粉的台面上，将一小团猪肉馅放在面皮中央，边缘留出1/2英寸的空隙。',
        '用拇指和食指在面皮边缘捏出18个精确的褶子，沿着圆形捏合，确保将饺子包紧，以防止汤汁在蒸煮过程中溢出，同时也要创造出美观精致的图案。',
        '将小笼包放入铺有烘焙纸的竹蒸笼中，每个小笼包之间留出约1英寸的间距，以便均匀受热，然后用沸水蒸8分钟，或直到面皮煮熟，质地柔软蓬松，馅料热透且香气扑鼻。',
        '食用时，小心地将小笼包从蒸笼中取出，立即食用，在小笼包侧面咬一个小孔，释放出里面的鲜美汤汁，然后吸食热汤，最后一口吃掉鲜嫩多汁的小笼包，品味风味和口感的和谐平衡。'
      ]
    },
    ms: {
      title: 'Xiaolongbao',
      description: 'Resipi asli dari Shanghai, China',
      ingredients: [
        { item: 'Daging babi cincang', amount: '' },
        { item: 'Stok gelatin (menjadi sup apabila dikukus)', amount: '' },
        { item: 'Kulit doh nipis', amount: '' },
        { item: 'Halia', amount: '' },
        { item: 'Kicap', amount: '' },
        { item: 'Cuka beras', amount: '' }
      ],
      instructions: [
        'Untuk bermula, cipta aspic dengan mengurangkan 2 cawan stok babi kaya dengan 1 sudu besar gelatin tanpa rasa di atas api perlahan, kacau sekali-sekala, sehingga cecair berkurangan separuh dan gelatin telah larut sepenuhnya, menghasilkan stok yang jernih dan berperisa intens.',
        'Sejukkan aspic dalam peti sejuk sehingga ia mengeras dan mencapai konsistensi seperti jeli yang pejal, yang sepatutnya mengambil masa kira-kira 2-3 jam, bergantung pada suhu dan kepekatan stok.',
        'Setelah aspic mengeras, potong dadu dengan teliti menjadi kiub kecil yang seragam, kira-kira 1/4 inci saiznya, untuk diedarkan secara sekata ke seluruh inti dan memberikan letupan rasa umami yang lazat dalam setiap gigitan.',
        'Dalam mangkuk adunan besar, gabungkan 1 paun daging babi cincang segar dengan aspic yang dipotong dadu, 1 sudu besar halia segar parut, 1 sudu teh kicap, dan 1 sudu teh cuka beras, campurkan semuanya dengan tangan anda atau sudu kayu sehingga sebati, berhati-hati agar tidak terlalu mengadun dan memadatkan inti.',
        'Untuk memasang Xiaolongbao, letakkan kulit doh nipis, kira-kira 1/16 inci tebal, di atas permukaan yang ditabur sedikit tepung dan letakkan bola kecil inti babi di tengah kulit, meninggalkan sempadan 1/2 inci di sekeliling tepi.',
        'Menggunakan ibu jari dan jari telunjuk anda, cipta 18 lipatan tepat di sekeliling tepi kulit, bergerak mengelilingi bulatan dan pastikan untuk menutup ladu dengan ketat untuk mengelakkan sup daripada keluar semasa mengukus, sambil juga mencipta corak yang menarik secara visual dan rumit.',
        'Letakkan Xiaolongbao dalam pengukus buluh yang dialas dengan kertas parchment, meninggalkan kira-kira 1 inci ruang antara setiap ladu untuk membolehkan masakan sekata, dan kukus di atas air mendidih selama 8 minit, atau sehingga doh masak sepenuhnya dan mempunyai tekstur lembut, gebu, dan inti panas serta wangi.',
        'Untuk menghidang, keluarkan Xiaolongbao dengan berhati-hati dari pengukus dan makan segera, gigit lubang kecil di sisi ladu untuk melepaskan sup lazat di dalamnya, kemudian hirup sup panas dan akhirnya makan ladu yang lembut dan berair dalam satu gigitan, menikmati keseimbangan rasa dan tekstur yang harmoni.'
      ]
    }
  },
  'cn-07': {
    'zh-CN': {
      title: '扬州炒饭',
      description: '源自中国扬州的地道食谱',
      ingredients: [
        { item: '煮熟的冷米饭', amount: '3 杯' },
        { item: '鸡蛋', amount: '2 个' },
        { item: '虾仁', amount: '100克' },
        { item: '豌豆', amount: '' },
        { item: '胡萝卜', amount: '' },
        { item: '酱油', amount: '' },
        { item: '香油', amount: '' },
        { item: '葱', amount: '' }
      ],
      instructions: [
        '首先，将一个养护良好的炒锅用大火加热，直到冒烟，几乎呈蓝色薄雾，这表明已达到最佳的煎炒温度。',
        '小心地将2个鸡蛋打入锅中，用耐热锅铲快速炒散成小块蓬松的蛋花，然后将其推到锅的一侧，以便继续烹饪。',
        '将3杯冷藏的隔夜米饭加入锅中央，用锅铲打散任何结块，以确保均匀受热和分布，然后用轻柔而坚定的动作将米饭压在热锅表面，以促进底部形成酥脆的金黄色锅巴。',
        '当米饭开始发出滋滋声和噼啪声时，加入100克去皮去虾线的虾仁，以及一把切片胡萝卜和豌豆，不断搅拌以防止烧焦并促进均匀烹饪，直到蔬菜变软但仍保持脆嫩，虾仁变成鲜亮的粉红色。',
        '在锅中撒入少量切碎的葱花，搅拌均匀，再煮30秒，让风味和香气充分融合。',
        '在米饭混合物上淋上少量酱油和香油，用轻柔的圆周运动均匀分布酱汁，然后用大火快速翻炒，结合铲起和翻动的动作，确保所有食材都充分裹上酱汁并加热透彻。',
        '继续烹饪2-3分钟，不断搅拌，直到米饭完全加热，风味和谐融合，整道菜弥漫着酱油的咸香微甜和香油的坚果微苦香气。',
        '最后，用锅铲小心地将炒饭塑造成一个整洁的圆形小山状，放在餐盘上，如果需要，可以用额外的葱花和少量芝麻点缀，然后立即上桌，此时米饭仍然酥脆，风味最为鲜明和浓郁。'
      ]
    },
    ms: {
      title: 'Nasi Goreng (Yangzhou)',
      description: 'Resipi asli dari Yangzhou, China',
      ingredients: [
        { item: 'Nasi sejuk yang dimasak', amount: '3 cawan' },
        { item: 'Telur', amount: '2 biji' },
        { item: 'Udang', amount: '100g' },
        { item: 'Kacang pea', amount: '' },
        { item: 'Lobak merah', amount: '' },
        { item: 'Kicap', amount: '' },
        { item: 'Minyak bijan', amount: '' },
        { item: 'Daun bawang', amount: '' }
      ],
      instructions: [
        'Pertama, panaskan kuali yang telah diperap dengan baik di atas api yang tinggi sehingga berasap, hampir kebiruan, menunjukkan suhu optimum untuk menggoreng telah dicapai.',
        'Pecahkan 2 biji telur dengan berhati-hati ke dalam kuali, kacau sebentar dengan spatula tahan panas untuk memecahkannya menjadi kepingan kecil yang gebu, kemudian tolak ke satu sisi kuali untuk membolehkan masakan selanjutnya.',
        'Tambah 3 cawan nasi sejuk yang dimasak semalam ke tengah kuali, pecahkan sebarang gumpalan dengan spatula untuk memastikan masakan dan pengagihan haba yang sekata, kemudian tekan nasi ke permukaan kuali panas menggunakan gerakan lembut tetapi tegas untuk menggalakkan pembentukan kerak nasi rangup berwarna keemasan di bahagian bawah.',
        'Apabila nasi mula berdesir dan berderak, masukkan 100g udang yang telah dikupas dan dibuang urat, bersama dengan segenggam hirisan lobak merah dan kacang pea, kacau sentiasa untuk mengelakkan hangus dan menggalakkan masakan yang sekata, sehingga sayur-sayuran lembut tetapi masih rangup dan udang telah bertukar menjadi merah jambu yang terang dan menarik.',
        'Tambah sedikit hirisan daun bawang yang halus ke dalam kuali, kacau untuk menggabungkan, dan masak selama 30 saat lagi untuk membolehkan rasa dan aroma sebati.',
        'Renjiskan sedikit kicap dan minyak bijan ke atas campuran nasi, menggunakan gerakan bulat yang lembut untuk mengagihkan sos secara sekata, kemudian gaulkan semuanya di atas api yang tinggi, menggunakan gabungan gerakan menyenduk dan membalik untuk memastikan semua bahan disalut dengan baik dan dipanaskan sepenuhnya.',
        'Teruskan memasak selama 2-3 minit lagi, kacau sentiasa, sehingga nasi dipanaskan sepenuhnya, rasa telah sebati dalam harmoni, dan seluruh hidangan diserap dengan aroma kicap yang masin, sedikit manis dan rasa minyak bijan yang berlemak, sedikit pahit.',
        'Akhir sekali, gunakan spatula untuk membentuk Nasi Goreng dengan berhati-hati menjadi gundukan bulat yang kemas di atas pinggan hidangan, dihiasi dengan daun bawang tambahan dan sedikit bijan jika dikehendaki, dan hidangkan segera, semasa nasi masih rangup dan rasa berada pada tahap yang paling terang dan intens.'
      ]
    }
  },
  'cn-08': {
    'zh-CN': {
      title: '春卷',
      description: '源自中国上海的地道食谱',
      ingredients: [
        { item: '春卷皮', amount: '' },
        { item: '卷心菜', amount: '' },
        { item: '胡萝卜', amount: '' },
        { item: '粉丝', amount: '' },
        { item: '蘑菇', amount: '' },
        { item: '酱油', amount: '' },
        { item: '香油', amount: '' }
      ],
      instructions: [
        '首先，准备馅料：在一个大煎锅或炒锅中用中高火加热2汤匙香油，然后加入1杯切片蘑菇，翻炒3-4分钟，直到它们释放水分并开始呈现金黄色。',
        '接下来，将1杯切丝卷心菜和1/2杯擦丝胡萝卜加入锅中，再翻炒2分钟，或直到蔬菜略微变软但仍保持脆嫩的质地，颜色鲜亮，并带有一丝焦糖的甜味。',
        '现在，倒入2汤匙酱油，搅拌均匀以裹住蔬菜，煮1分钟，让风味充分融合，酱汁略微收浓，散发出浓郁的咸香。',
        '将1/2杯煮熟的粉丝加入锅中，翻炒1分钟，使其与蔬菜和酱油混合，确保粉丝充分裹上美味的酱汁。',
        '将锅从火上移开，让馅料冷却至室温，这对于防止春卷皮在包制过程中变湿或破裂至关重要。',
        '组装春卷时，将一张春卷皮对角线平铺在干净的台面上，将约1汤匙冷却的馅料放在春卷皮中央，然后用少量面粉糊刷边缘，紧密而轻柔地卷起春卷皮，施加均匀的压力，形成一个紧凑的圆柱形，并确保密封牢固，以防止馅料在油炸过程中溢出。',
        '在一个深煎锅中加热约5-7厘米的植物油至180°C，或直到油冒烟，然后小心地将几个春卷放入热油中，注意不要挤满锅，炸至金黄酥脆并膨胀，每面约3-4分钟。',
        '用漏勺将炸好的春卷从油中取出，在厨房纸上沥干多余的油，然后立即与甜辣酱一起上桌，如果需要，可以用烤芝麻和新鲜香菜点缀，为菜肴增添一丝清新和芳香。'
      ]
    },
    ms: {
      title: 'Popia (Spring Rolls)',
      description: 'Resipi asli dari Shanghai, China',
      ingredients: [
        { item: 'Kulit popia', amount: '' },
        { item: 'Kubis', amount: '' },
        { item: 'Lobak merah', amount: '' },
        { item: 'Mi suun', amount: '' },
        { item: 'Cendawan', amount: '' },
        { item: 'Kicap', amount: '' },
        { item: 'Minyak bijan', amount: '' }
      ],
      instructions: [
        'Untuk bermula, sediakan inti dengan memanaskan 2 sudu besar minyak bijan dalam kuali besar atau wok di atas api sederhana-tinggi, kemudian masukkan 1 cawan hirisan cendawan dan tumis sehingga ia mengeluarkan kelembapan dan mula bertukar warna perang keemasan, kira-kira 3-4 minit.',
        'Seterusnya, masukkan 1 cawan kubis yang dihiris dan 1/2 cawan lobak merah parut ke dalam kuali, tumis selama 2 minit lagi, atau sehingga sayur-sayuran sedikit lembut tetapi mengekalkan tekstur rangup, dengan warna yang terang dan sedikit kemanisan karamel.',
        'Sekarang, tuangkan 2 sudu besar kicap, kacau untuk menyalut sayur-sayuran secara sekata, dan masak selama 1 minit, membiarkan rasa sebati dan sos sedikit pekat, menghasilkan aroma yang kaya dan masin.',
        'Tambah 1/2 cawan mi suun yang telah dimasak ke dalam kuali, tumis selama 1 minit untuk menggabungkan dengan sayur-sayuran dan kicap, memastikan mi disalut dengan baik dengan sos yang berperisa.',
        'Angkat kuali dari api, biarkan inti menyejuk ke suhu bilik, yang penting untuk mengelakkan kulit popia menjadi lembap atau koyak semasa proses pemasangan.',
        'Untuk memasang popia, letakkan kulit popia secara menyerong di atas permukaan yang bersih, letakkan kira-kira 1 sudu besar inti yang telah disejukkan di tengah kulit, kemudian sapu tepi dengan sedikit pes tepung, dan gulung kulit dengan ketat tetapi perlahan-lahan, menggunakan tekanan yang sekata untuk membentuk bentuk silinder yang padat, dengan penutup yang selamat untuk mengelakkan inti daripada keluar semasa menggoreng.',
        'Panaskan kira-kira 5-7 cm minyak sayuran dalam kuali goreng dalam hingga 180°C, atau sehingga ia mencapai titik berasap, kemudian masukkan beberapa popia dengan berhati-hati ke dalam minyak panas, berhati-hati agar tidak terlalu padat kuali, dan goreng sehingga ia rangup keemasan dan mengembang, kira-kira 3-4 minit setiap sisi.',
        'Menggunakan sudu berlubang, keluarkan popia goreng dari minyak, toskan minyak berlebihan di atas tuala kertas, dan hidangkan segera dengan sos cili manis di sisi, dihiasi dengan bijan panggang dan daun ketumbar segar, jika dikehendaki, untuk menambah kesegaran dan aroma pada hidangan.'
      ]
    }
  },
  'cn-09': {
    'zh-CN': {
      title: '饺子 (水饺)',
      description: '源自中国北京的地道食谱',
      ingredients: [
        { item: '猪肉馅', amount: '200克' },
        { item: '卷心菜', amount: '' },
        { item: '韭菜', amount: '' },
        { item: '姜', amount: '' },
        { item: '酱油', amount: '' },
        { item: '圆形饺子皮', amount: '' }
      ],
      instructions: [
        '首先，将100克卷心菜和50克韭菜切碎，确保在使用前切碎它们，以释放其芳香油和风味。',
        '接下来，将20克新鲜姜去皮并磨碎，注意避免任何可能影响馅料质地的纤维状部分。',
        '在一个大碗中，将200克猪肉馅、切碎的卷心菜、韭菜、磨碎的姜、1汤匙酱油和1茶匙香油混合在一起，用手或木勺搅拌至刚混合均匀，注意不要过度搅拌。',
        '将一张圆形饺子皮放在干净的表面上，将一小汤匙猪肉馅放在饺子皮的中心，边缘留出1厘米的边距。',
        '手指蘸少量水，沿着饺子皮的边缘涂抹，然后将饺子皮折叠成半月形，捏紧边缘以密封饺子，确保它们紧密闭合，以防止烹饪时馅料溢出。',
        '煮饺子时，烧开一大锅盐水，然后轻轻地将饺子放入锅中，注意不要放得太满，煮7分钟，或者直到它们浮到水面并完全煮熟，质地柔软略带弹性。',
        '在饺子煮熟的同时，准备蘸酱：将2汤匙辣椒油、1汤匙黑醋和1瓣蒜末混合在一起，蘸酱应呈深红色，并带有辛辣、酸爽的香气。',
        '最后，用漏勺将煮熟的饺子从锅中捞出，立即与辣椒油、黑醋和蒜末蘸酱一起食用，如果需要，可撒上切成薄片的葱花和少许烤芝麻作为装饰。'
      ]
    },
    ms: {
      title: 'Jiaozi (Dumpling Rebus)',
      description: 'Resipi asli dari Beijing, China',
      ingredients: [
        { item: 'daging babi cincang', amount: '200g' },
        { item: 'kubis', amount: '' },
        { item: 'kucai', amount: '' },
        { item: 'halia', amount: '' },
        { item: 'kicap', amount: '' },
        { item: 'kulit dumpling bulat', amount: '' }
      ],
      instructions: [
        'Untuk bermula, cincang halus 100g kubis dan 50g kucai, pastikan untuk mencincangnya sejurus sebelum digunakan untuk melepaskan minyak aromatik dan rasanya.',
        'Seterusnya, kupas dan parut 20g halia segar, berhati-hati untuk mengelakkan sebarang serat yang mungkin menjejaskan tekstur inti.',
        'Dalam mangkuk adunan besar, gabungkan 200g daging babi cincang, kubis cincang, kucai, halia parut, 1 sudu besar kicap, dan 1 sudu teh minyak bijan, gaulkan semuanya dengan tangan atau sudu kayu sehingga sebati, berhati-hati agar tidak terlebih gaul.',
        'Letakkan sekeping kulit dumpling bulat di atas permukaan bersih dan letakkan satu sudu kecil inti daging babi di tengah kulit, tinggalkan sempadan 1cm di sekeliling tepi.',
        'Celupkan jari anda ke dalam sedikit air dan sapukan di sepanjang tepi kulit, kemudian lipat kulit menjadi bentuk separuh bulan berlipat, tekan tepi bersama untuk menutup dumpling, pastikan ia tertutup rapat untuk mengelakkan inti keluar semasa memasak.',
        'Untuk memasak dumpling, didihkan sepanci besar air masin, kemudian masukkan dumpling perlahan-lahan ke dalam periuk, pastikan tidak terlalu padat, dan masak selama 7 minit, atau sehingga ia terapung ke permukaan dan masak sepenuhnya, dengan tekstur yang lembut dan sedikit kenyal.',
        'Semasa dumpling sedang dimasak, sediakan sos pencicah dengan mencampurkan 2 sudu besar minyak cili, 1 sudu besar cuka hitam, dan 1 ulas bawang putih cincang, yang sepatutnya mempunyai warna merah pekat dan aroma pedas masam.',
        'Akhir sekali, keluarkan dumpling yang telah dimasak dari periuk dengan senduk berlubang dan hidangkan segera dengan minyak cili, cuka hitam, dan sos pencicah bawang putih, dihiasi dengan hirisan daun bawang nipis dan taburan bijan panggang, jika dikehendaki.'
      ]
    }
  },
  'cn-10': {
    'zh-CN': {
      title: '蛋挞',
      description: '源自中国香港的地道食谱',
      ingredients: [
        { item: '酥皮挞壳', amount: '' },
        { item: '鸡蛋', amount: '3个' },
        { item: '牛奶', amount: '150毫升' },
        { item: '糖', amount: '60克' },
        { item: '香草精', amount: '' }
      ],
      instructions: [
        '首先，制作酥皮挞壳：在一个凉爽、通风良好的环境中，将冷藏的切块黄油与通用面粉、糖粉和一小撮盐混合，用指尖轻轻搓揉，直至形成粗糙的碎屑状质地。',
        '接下来，逐渐加入冰水，用刮刀轻轻折叠面团，使其聚合成一个有凝聚力、柔韧的面团，注意不要过度揉搓面团。',
        '将静置好的面团擀成约3毫米厚的均匀薄片，然后仔细地铺在挞模中，确保精确贴合，并用锋利的小刀修剪掉多余的挞皮。',
        '在一个单独的、冰镇过的碗中，制作蛋奶糊混合物：将3个大鸡蛋和60克砂糖搅拌至光滑、颜色变浅并带有明显光泽，然后放在一旁备用。',
        '在一个小锅中，用小火轻轻加热150毫升全脂牛奶，偶尔搅拌，直至温度达到约50°C至60°C，然后离火，让其稍微冷却。',
        '将温牛奶逐渐倒入鸡蛋和糖的混合物中，持续搅拌以防止凝结，然后加入几滴优质香草精，搅拌均匀。',
        '将蛋奶糊混合物通过细网筛过滤到一个干净的碗中，以去除任何可能的蛋固体或气泡，得到一个丝滑、均匀的混合物。',
        '将过滤后的蛋奶糊混合物倒入准备好的铺有挞皮的挞模中，每个填充至约¾满，然后将挞模放在铺有烘焙纸的烤盘上，放入预热至200°C的烤箱中烘烤15分钟，或者直到边缘呈金黄色，中心仍有轻微颤动，这表明蛋奶糊已完美凝固。'
      ]
    },
    ms: {
      title: 'Tart Telur',
      description: 'Resipi asli dari Hong Kong, China',
      ingredients: [
        { item: 'kulit pastri rapuh', amount: '' },
        { item: 'telur', amount: '3 biji' },
        { item: 'susu', amount: '150ml' },
        { item: 'gula', amount: '60g' },
        { item: 'ekstrak vanila', amount: '' }
      ],
      instructions: [
        'Untuk memulakan penyediaan Tart Telur, mulakan dengan membuat kulit pastri rapuh: dalam persekitaran yang sejuk dan berventilasi baik, gabungkan mentega sejuk yang dipotong dadu dengan campuran tepung serbaguna, gula aising, dan secubit garam, menggunakan teknik menggosok lembut dengan hujung jari untuk mencapai tekstur seperti serbuk kasar.',
        'Seterusnya, masukkan air sejuk berais secara beransur-ansur ke dalam campuran, menggunakan gerakan melipat lembut dengan spatula untuk menyatukan doh menjadi jisim yang padu dan mudah dibentuk, berhati-hati agar tidak terlebih uli pastri.',
        'Teruskan menggulung doh pastri yang telah direhatkan kepada ketebalan seragam kira-kira 3mm, kemudian lapikkan acuan tart dengan teliti, memastikan ia sesuai dengan tepat dan memotong sebarang pastri berlebihan dari tepi dengan pisau kecil yang tajam.',
        'Dalam mangkuk berasingan yang telah disejukkan, buat campuran kastard dengan memukul 3 biji telur besar dan 60g gula pasir sehingga campuran licin berkilat dan pucat, dengan kilauan yang jelas, kemudian ketepikan.',
        'Dalam periuk kecil, panaskan perlahan 150ml susu penuh krim di atas api kecil, kacau sekali-sekala, sehingga mencapai suhu kira-kira 50°C hingga 60°C, pada ketika itu angkat dari api dan biarkan sejuk sedikit.',
        'Tuangkan susu suam secara beransur-ansur ke dalam campuran telur dan gula, pukul secara berterusan untuk mengelakkan penggumpalan, kemudian masukkan beberapa titis ekstrak vanila berkualiti tinggi, kacau untuk sebati.',
        'Tapis campuran kastard melalui penapis jejaring halus ke dalam mangkuk bersih untuk menghilangkan sebarang pepejal telur atau gelembung udara yang mungkin, menghasilkan campuran yang licin dan homogen.',
        'Tuangkan campuran kastard yang telah ditapis ke dalam acuan tart yang telah disediakan dan dilapik pastri, isi setiap satu hingga kira-kira ¾ penuh, kemudian letakkan acuan di atas loyang yang dilapik kertas parchment dan bakar dalam ketuhar yang telah dipanaskan pada suhu 200°C selama 15 minit, atau sehingga tepinya berwarna perang keemasan dan bahagian tengah masih menunjukkan sedikit goyangan, menunjukkan kastard yang telah masak dengan sempurna.'
      ]
    }
  },
  'mx-01': {
    'zh-CN': {
      title: '牧师玉米饼 (Tacos al Pastor)',
      description: '源自墨西哥墨西哥城的地道食谱',
      ingredients: [
        { item: '猪肩肉', amount: '500克' },
        { item: '干瓜希略辣椒和安乔辣椒', amount: '' },
        { item: '菠萝', amount: '' },
        { item: '洋葱', amount: '' },
        { item: '香菜', amount: '' },
        { item: '玉米饼', amount: '' },
        { item: '阿奇奥特酱', amount: '' }
      ],
      instructions: [
        '将猪肉用混合辣椒-阿奇奥特酱腌制过夜。堆叠在垂直烤肉架上。',
        '切下薄片腌制猪肉，在铸铁锅中烹饪至边缘酥脆。',
        '在温热的玉米饼中，搭配烤菠萝、切丁洋葱和香菜食用。'
      ]
    },
    ms: {
      title: 'Tacos al Pastor',
      description: 'Resipi asli dari Mexico City, Mexico',
      ingredients: [
        { item: 'bahu babi', amount: '500g' },
        { item: 'cili guajillo & ancho kering', amount: '' },
        { item: 'nanas', amount: '' },
        { item: 'bawang', amount: '' },
        { item: 'daun ketumbar', amount: '' },
        { item: 'tortilla jagung', amount: '' },
        { item: 'pes achiote', amount: '' }
      ],
      instructions: [
        'Perap daging babi dalam pes cili-achiote yang dikisar semalaman. Susun di atas pemanggang menegak.',
        'Hiris nipis daging babi yang diperap, masak dalam kuali besi tuang sehingga tepinya rangup.',
        'Hidangkan dalam tortilla hangat dengan nanas panggang, bawang dadu dan daun ketumbar.'
      ]
    }
  },
  'mx-02': {
    'zh-CN': {
      title: '鳄梨酱 (Guacamole)',
      description: '源自墨西哥瓦哈卡的地道食谱',
      ingredients: [
        { item: '熟鳄梨', amount: '3个' },
        { item: '青柠', amount: '1个' },
        { item: '番茄', amount: '1个' },
        { item: '小洋葱', amount: '1个' },
        { item: '墨西哥辣椒', amount: '' },
        { item: '新鲜香菜', amount: '' },
        { item: '盐', amount: '' }
      ],
      instructions: [
        '首先，仔细挑选三个熟透的鳄梨，它们应在轻压下略微变软，并呈现深绿色，然后沿着果核纵向切半，注意保持果肉的完整性。',
        '轻轻扭动两半鳄梨以取出果核，然后小心地将果肉舀入一个结实的大碗中，注意其奶油状的浅绿色和天鹅绒般的质地。',
        '用叉子粗略地捣碎鳄梨果肉，目标是获得粗糙、块状的质地，同时保留其天然的坚实感，注意不要过度搅拌或捣成泥状。',
        '接下来，将一个藤蔓成熟的番茄切成细丁，释放其鲜艳的深红色和多汁的甜味，并将一个小而半透明的洋葱切成细小的辛辣碎末，为菜肴增添深度和复杂性。',
        '切碎一把新鲜香菜叶，释放其芬芳的草本香气和精致的蕾丝状质地，以及一个墨西哥辣椒，小心地将其脆绿的果肉和种子切碎，以释放缓慢积累的辛辣热度。',
        '将切丁的番茄、洋葱、切碎的香菜和切碎的墨西哥辣椒拌入捣碎的鳄梨中，轻轻搅拌以混合，让风味和质地开始融合协调，创造出丰富、奶油状且带有微妙辛辣味的整体。',
        '将一个新鲜青柠的汁挤在鳄梨酱上，其明亮、柑橘般的风味和酸度能中和鳄梨的浓郁，同时一小撮片状结晶盐能增强和平衡各种风味，使整道菜肴呈现出鲜明、美味的焦点。',
        '最后，品尝并根据需要调整调味料，然后立即上桌，如果需要，可再用香菜叶和青柠角装饰，其鲜活、清新的风味和丝滑的质地邀请所有人品尝其奶油状、辛辣、令人无法抗拒的美味。'
      ]
    },
    ms: {
      title: 'Guacamole',
      description: 'Resipi asli dari Oaxaca, Mexico',
      ingredients: [
        { item: 'avokado masak', amount: '3 biji' },
        { item: 'limau nipis', amount: '1 biji' },
        { item: 'tomato', amount: '1 biji' },
        { item: 'bawang kecil', amount: '1 biji' },
        { item: 'jalapeño', amount: '' },
        { item: 'daun ketumbar segar', amount: '' },
        { item: 'garam', amount: '' }
      ],
      instructions: [
        'Mulakan dengan memilih tiga biji avokado masak dengan teliti, yang lembut apabila ditekan dan mempunyai warna hijau gelap yang kaya, kemudian belah dua memanjang mengelilingi biji, berhati-hati untuk mengekalkan integriti buah.',
        'Pusingkan perlahan kedua-dua belah avokado ke arah bertentangan untuk mengeluarkan biji, kemudian cedok isi ke dalam mangkuk besar yang kukuh, perhatikan warna hijau pucat berkrim dan tekstur baldu.',
        'Menggunakan garpu, lenyekkan isi avokado secara kasar, sasarkan tekstur kasar dan berketul yang masih mengekalkan sedikit kekenyalan semula jadinya, berhati-hati agar tidak terlebih gaul atau lenyekkan bahan-bahan.',
        'Seterusnya, dadu halus sebiji tomato masak ranum, melepaskan warna merah terang dan letusan kemanisan berairnya, dan sebiji bawang kecil yang lutsinar, cincang menjadi serpihan kecil yang tajam yang menambah kedalaman dan kerumitan pada hidangan.',
        'Cincang segenggam daun ketumbar segar, melepaskan aroma herba yang harum dan tekstur halus seperti renda, dan sebiji cili jalapeño, cincang dengan teliti isi dan bijinya yang hijau zamrud rangup untuk melepaskan kepedasan yang perlahan-lahan meningkat.',
        'Lipat tomato dadu, bawang, daun ketumbar cincang, dan jalapeño cincang ke dalam avokado yang dilenyek, kacau perlahan untuk sebati, sambil rasa dan tekstur mula bercampur dan harmoni, mencipta keseluruhan yang kaya, berkrim, dan sedikit pedas.',
        'Perah jus sebiji limau nipis segar di atas guacamole, rasa sitrusnya yang cerah dan keasidan memotong kekayaan avokado, manakala secubit garam berkerak dan berkristal meningkatkan dan mengimbangi pelbagai rasa, membawa keseluruhan hidangan menjadi fokus yang tajam dan lazat.',
        'Akhir sekali, rasa dan sesuaikan perasa mengikut keperluan, kemudian hidangkan guacamole segera, dihiasi dengan daun ketumbar tambahan dan hirisan limau nipis jika dikehendaki, rasa segar dan tekstur licinnya mengundang semua untuk menikmati kelazatan berkrim, pedas, dan sangat menarik.'
      ]
    }
  },
  'mx-03': {
    'zh-CN': {
      title: '墨西哥卷饼 (Enchiladas)',
      description: '源自墨西哥墨西哥城的地道食谱',
      ingredients: [
        { item: '玉米饼', amount: '8张' },
        { item: '鸡丝', amount: '300克' },
        { item: '红辣椒酱', amount: '' },
        { item: '酸奶油', amount: '200克' },
        { item: '奶酪', amount: '150克' },
        { item: '洋葱', amount: '' }
      ],
      instructions: [
        '首先，将20-25个干红辣椒在沸水中浸泡20-25分钟，直至它们变得柔软并失去脆性，然后去蒂去籽，注意保留带有香气和微烟熏味的辣椒水备用。',
        '接下来，在搅拌机或食物处理器中，将浸泡过的辣椒、2杯保留的辣椒水、3瓣烤蒜和1杯烤过的切丁番茄混合，高速搅拌直至混合物光滑均匀，期间根据需要刮下搅拌机壁上的混合物，以确保质地均匀。',
        '将辣椒酱通过细网筛过滤到一个干净的平底锅中，压榨固体以提取尽可能多的鲜红色液体，然后丢弃固体，用中低火将酱汁煮沸，将其浓缩一半，并增强其深沉、微甜的风味，直至其变稠并能挂在勺子背面，偶尔搅拌。',
        '在酱汁浓缩的同时，准备馅料：将300克鸡丝与1/4杯切细的洋葱丁、1瓣蒜末和一小撮盐混合，搅拌均匀以使食材分布均匀，然后品尝并根据需要调整调味料以平衡风味。',
        '组装墨西哥卷饼时，将8张玉米饼中的每一张浸入温热的辣椒酱中，两面均匀涂抹，然后填入约1/4杯鸡肉混合物，并紧密卷起玉米饼，将接缝朝下放入烤盘中，重复此过程直至用完所有玉米饼和鸡肉馅。',
        '将剩余的辣椒酱倒在卷好的玉米饼上，确保它们全部被覆盖，然后均匀撒上150克奶酪碎，注意覆盖整个表面，并舀入200克酸奶油，为菜肴的辛辣和浓郁风味增添一丝清凉和奶油感。',
        '最后，将墨西哥卷饼放入预热至180°C的烤箱中烘烤20分钟，或者直到奶酪融化并冒泡，玉米饼变软，顶部呈金黄色，从烤箱中取出，静置几分钟后即可上桌，如果需要，可撒上新鲜香菜、洋葱丁和一小勺酸奶油作为装饰。'
      ]
    },
    ms: {
      title: 'Enchiladas',
      description: 'Resipi asli dari Mexico City, Mexico',
      ingredients: [
        { item: 'tortilla jagung', amount: '8 keping' },
        { item: 'ayam carik', amount: '300g' },
        { item: 'sos cili merah', amount: '' },
        { item: 'krim masam', amount: '200g' },
        { item: 'keju', amount: '150g' },
        { item: 'bawang', amount: '' }
      ],
      instructions: [
        'Pertama, mulakan dengan menghidratkan 20-25 biji cili merah kering dalam air mendidih selama 20-25 minit, atau sehingga ia menjadi lembut dan hilang tekstur rapuhnya, kemudian buang tangkai dan bijinya, berhati-hati untuk menyimpan air cili yang harum dan sedikit berasap untuk kegunaan kemudian.',
        'Seterusnya, dalam pengisar atau pemproses makanan, gabungkan cili yang telah dihidrasi, 2 cawan air cili yang disimpan, 3 ulas bawang putih panggang, dan 1 cawan tomato panggang dan didadu, kisar campuran pada kelajuan tinggi sehingga licin dan sekata, berhenti untuk mengikis sisi pengisar mengikut keperluan untuk memastikan konsistensi yang seragam.',
        'Tapis sos cili melalui penapis jejaring halus ke dalam periuk bersih, tekan pepejal untuk mengeluarkan sebanyak mungkin cecair merah terang, kemudian buang pepejal dan didihkan sos di atas api sederhana rendah, kurangkan separuh dan intensifkan rasa yang dalam, sedikit manis sehingga ia pekat dan menyaluti belakang sudu, kacau sekali-sekala.',
        'Semasa sos sedang dikurangkan, sediakan inti dengan menggabungkan 300g ayam carik dengan 1/4 cawan bawang dadu halus, 1 ulas bawang putih cincang, dan secubit garam, gaul rata untuk mengagihkan bahan-bahan secara sekata, kemudian rasa dan sesuaikan perasa mengikut keperluan untuk mengimbangi rasa.',
        'Untuk memasang enchiladas, celupkan setiap 8 keping tortilla jagung ke dalam sos cili suam, salut kedua-dua belah secara sekata, kemudian isi dengan kira-kira 1/4 cawan campuran ayam, dan gulung tortilla dengan ketat, letakkan bahagian jahitan ke bawah dalam hidangan pembakar, ulangi proses dengan tortilla dan inti ayam yang tinggal.',
        'Tuangkan sos cili yang tinggal di atas tortilla yang digulung, pastikan semuanya disalut sepenuhnya, kemudian taburkan 150g keju parut secara sekata di atas, berhati-hati untuk menutup seluruh permukaan, dan letakkan 200g krim masam, menambah sentuhan kesejukan dan kekriman untuk mengimbangi rasa pedas dan kaya hidangan.',
        'Akhir sekali, bakar enchiladas dalam ketuhar yang telah dipanaskan pada suhu 180°C selama 20 minit, atau sehingga keju cair dan berbuih, tortilla lembut, dan bahagian atas berwarna perang keemasan, keluarkan dari ketuhar dan biarkan berehat selama beberapa minit sebelum dihidangkan, dihiasi dengan daun ketumbar segar, bawang dadu, dan sesudu krim masam, jika dikehendaki.'
      ]
    }
  },
  'mx-04': {
    'zh-CN': {
      title: 'Chiles en Nogada (核桃酱酿辣椒)',
      description: '墨西哥普埃布拉的正宗食谱',
      ingredients: [
        { item: '帕布拉诺辣椒', amount: '' },
        { item: '猪肉馅', amount: '' },
        { item: '水果香料馅 (picadillo)', amount: '' },
        { item: '核桃奶油酱', amount: '' },
        { item: '石榴籽', amount: '' },
        { item: '欧芹', amount: '' }
      ],
      instructions: [
        '首先，用中火加热一个大的厚底煎锅，然后加入2汤匙猪油或植物油，翻炒猪肉馅，直到完全煮熟并略呈棕色，在烹饪过程中将其分成小块，直至达到浓郁的焦糖风味。',
        '接下来，将切碎的洋葱、大蒜、葡萄干和山核桃的混合物加入煎锅中的猪肉中，烹饪至洋葱变透明，混合物散发香气，经常搅拌以防烧焦，并加入一小撮盐和几研磨的黑胡椒以提味。',
        '现在，将切碎的苹果、梨和桃子的组合加入煎锅，同时撒上少许肉桂粉、孜然粉和多香果粉，烹饪至水果变软，混合物完全加热，偶尔搅拌，直到picadillo馅料浓郁复杂，味道甜咸兼具，富有层次。',
        '在picadillo馅料烹饪的同时，将4个大帕布拉诺辣椒在明火上或烤箱中烤制，频繁翻动，直到表皮焦黑起泡，然后将辣椒从火上移开，让它们冷却，再剥去表皮，去除籽，并将辣椒切开，形成一个用于填充的口袋。',
        '组装菜肴时，将每个烤好的帕布拉诺辣椒填入picadillo馅料，均匀地分给每个辣椒，然后放在一个上菜盘或单独的盘子上。',
        '在一个小炖锅中，混合1杯浓奶油、2汤匙黄油和1/4杯切碎的核桃，用小火烹饪，不断搅拌，直到酱汁光滑浓稠，核桃完全融入，带有浓郁的坚果风味，与picadillo馅料和辣椒相得益彰。',
        '最后，将核桃奶油酱淋在填满的帕布拉诺辣椒上，然后撒上石榴籽和几片新鲜欧芹叶作为装饰，为菜肴增添一抹亮色和清新草本风味。',
        '最后，立即上菜Chiles en Nogada，趁酱汁仍温热，辣椒仍鲜嫩，风味最鲜活浓郁时享用。'
      ]
    },
    ms: {
      title: 'Chiles en Nogada',
      description: 'Resipi asli dari Puebla, Mexico',
      ingredients: [
        { item: 'Cili Poblano', amount: '' },
        { item: 'Daging babi cincang', amount: '' },
        { item: 'Buah-buahan & rempah (picadillo)', amount: '' },
        { item: 'Sos krim walnut', amount: '' },
        { item: 'Biji delima', amount: '' },
        { item: 'Parsli', amount: '' }
      ],
      instructions: [
        'Untuk bermula, panaskan kuali besar dengan dasar tebal di atas api sederhana, kemudian masukkan 2 sudu besar lemak babi atau minyak sayuran dan tumis daging babi cincang sehingga masak sepenuhnya dan sedikit keperangan, pecahkannya menjadi kepingan kecil semasa memasak, sehingga mencapai rasa karamel yang kaya.',
        'Seterusnya, masukkan campuran bawang cincang, bawang putih, kismis, dan pecan ke dalam kuali bersama daging babi, masak sehingga bawang menjadi lutsinar dan campuran berbau harum, kacau selalu untuk mengelakkan hangus, dan masukkan secubit garam serta beberapa kisaran lada hitam untuk menyerlahkan rasa.',
        'Sekarang, masukkan gabungan epal, pir, dan pic cincang ke dalam kuali, bersama dengan sedikit serbuk kayu manis, jintan manis, dan allspice, masak sehingga buah-buahan lembut dan campuran panas sepenuhnya, kacau sekali-sekala, sehingga picadillo kaya dan kompleks, dengan kedalaman rasa yang manis dan savuri.',
        'Semasa picadillo sedang dimasak, panggang 4 biji cili poblano besar di atas api terbuka atau dalam ketuhar, pusingkan selalu, sehingga kulitnya hangus dan melepuh, kemudian keluarkan cili dari api dan biarkan sejuk, sebelum mengupas kulitnya, membuang biji, dan membelah cili untuk membuat poket untuk inti.',
        'Untuk menyusun hidangan, isi setiap cili poblano panggang dengan campuran picadillo, bahagikannya secara rata di antara cili, dan letakkannya di atas pinggan hidangan atau pinggan individu.',
        'Dalam periuk kecil, gabungkan 1 cawan krim pekat, 2 sudu besar mentega, dan 1/4 cawan walnut cincang, masak di atas api perlahan, kacau sentiasa, sehingga sos licin dan berkrim, dan walnut sebati sepenuhnya, dengan rasa kekacang yang kaya yang melengkapi picadillo dan cili.',
        'Untuk melengkapkan hidangan, sudukan sos krim walnut di atas cili poblano yang telah diisi, kemudian hias dengan taburan biji delima dan beberapa helai parsli segar, menambah warna dan rasa herba segar pada hidangan.',
        'Akhir sekali, hidangkan Chiles en Nogada segera, semasa sos masih panas dan cili masih lembut, dan rasa berada pada tahap paling bersemangat dan intens.'
      ]
    }
  },
  'mx-05': {
    'zh-CN': {
      title: '墨西哥玉米粽 (Tamales)',
      description: '墨西哥瓦哈卡的正宗食谱',
      ingredients: [
        { item: '玉米面团', amount: '(玉米粉 + 猪油)' },
        { item: '红辣椒酱猪肉', amount: '' },
        { item: '浸泡过的玉米皮', amount: '' }
      ],
      instructions: [
        '首先，准备玉米面团，将2杯玉米粉和1/2杯融化的猪油放入一个大搅拌碗中，用叉子搅拌猪油，直到混合物呈粗碎屑状，质地均匀，然后逐渐加入1杯鸡汤，同时用木勺搅拌，直到形成柔软的面团，揉搓5分钟，直到面团光滑有弹性。',
        '同时，烹饪猪肉馅料，在一个大荷兰烤箱中用中高火将1磅猪肩肉煎至棕色，用勺子将其捣碎，直到不再呈粉红色，大约5-7分钟，然后加入1/4杯红辣椒酱、1/4杯切碎的洋葱和1瓣切碎的大蒜，再煮5分钟，偶尔搅拌，直到洋葱变透明，酱汁变稠，用盐和黑胡椒调味。',
        '接下来，将2打玉米皮浸泡在一个大碗的温水中至少30分钟，或直到它们变得柔软易于折叠，然后将它们从水中取出，用纸巾拍干以去除多余的水分。',
        '组装玉米粽时，将一张浸泡过的玉米皮平铺在工作台面上，宽端朝向自己，然后取一小块玉米面团，大约高尔夫球大小，用擀面杖或手将其擀成约1/4英寸厚的薄圆形，将面团放在玉米皮的中心，边缘留出1英寸的边框。',
        '将一勺猪肉馅料放在面团圆形的中心，注意不要过量填充，然后将玉米皮的两侧折叠在馅料上，并将底部向上折叠，形成一个紧密的包裹，用一条玉米皮将玉米粽系紧，确保馅料完全包裹在内。',
        '用剩余的食材重复组装过程，然后将玉米粽放入一个大蒸笼中，直立放置，折叠面朝下，用干净的毛巾或粗棉布盖住蒸笼，用沸水蒸1.5小时，或直到玉米粽完全煮熟，面团变软，通过将牙签插入面团来检查熟度，牙签应取出时干净。',
        '蒸好后，将玉米粽从火上移开，让它们在玉米皮中静置15分钟，然后解开并上菜，用新鲜香菜、青柠角和您选择的莎莎酱或辣酱装饰。'
      ]
    },
    ms: {
      title: 'Tamales',
      description: 'Resipi asli dari Oaxaca, Mexico',
      ingredients: [
        { item: 'Doh masa', amount: '(masa jagung + lemak babi)' },
        { item: 'Daging babi dalam sos cili merah', amount: '' },
        { item: 'Kulit jagung', amount: '(direndam)' }
      ],
      instructions: [
        'Untuk bermula, sediakan doh masa dengan menggabungkan 2 cawan masa jagung harina dengan 1/2 cawan lemak babi cair dalam mangkuk adunan besar, gunakan garpu untuk menggabungkan lemak babi sehingga campuran menyerupai serbuk kasar dengan tekstur seragam, kemudian secara beransur-ansur masukkan 1 cawan sup ayam sambil mengadun dengan sudu kayu sehingga doh yang mudah dibentuk terbentuk, uli selama 5 minit sehingga doh licin dan elastik.',
        'Sementara itu, masak inti daging babi dengan menggoreng 1 paun bahu babi dalam periuk Belanda besar di atas api sederhana tinggi, pecahkannya dengan sudu sehingga tidak lagi merah jambu, kira-kira 5-7 minit, kemudian masukkan 1/4 cawan sos cili merah, 1/4 cawan bawang cincang, dan 1 ulas bawang putih cincang, masak selama 5 minit lagi, kacau sekali-sekala, sehingga bawang menjadi lutsinar dan sos telah pekat, perasakan dengan garam dan lada hitam secukup rasa.',
        'Seterusnya, rendam 2 dozen kulit jagung dalam mangkuk besar berisi air suam selama sekurang-kurangnya 30 minit, atau sehingga ia menjadi lembut dan mudah dilipat, kemudian keluarkannya dari air dan keringkan dengan tuala kertas untuk menghilangkan kelembapan berlebihan.',
        'Untuk menyusun tamales, letakkan sekeping kulit jagung yang telah direndam rata di atas permukaan kerja, dengan hujung lebar menghadap anda, kemudian ambil sekeping kecil doh masa, kira-kira saiz bola golf, dan ratakannya menjadi bulatan nipis, kira-kira 1/4 inci tebal, menggunakan penggelek atau tangan anda, letakkan doh di tengah kulit jagung, tinggalkan sempadan 1 inci di sekeliling tepi.',
        'Letakkan sesudu inti daging babi di tengah bulatan doh, berhati-hati agar tidak terlalu penuh, kemudian lipat sisi kulit jagung di atas inti, dan lipat bahagian bawah ke atas, membentuk bungkusan yang ketat, gunakan jalur kulit jagung untuk mengikat tamale, pastikan inti tertutup sepenuhnya.',
        'Ulangi proses penyusunan dengan bahan-bahan yang tinggal, kemudian letakkan tamales dalam bakul pengukus besar, berdiri tegak, dengan bahagian yang dilipat ke bawah, tutup bakul dengan tuala bersih atau kain kasa, dan kukus di atas air mendidih selama 1.5 jam, atau sehingga tamales masak sepenuhnya dan doh lembut, periksa kematangan dengan memasukkan pencungkil gigi ke dalam doh, yang sepatutnya keluar bersih.',
        'Selepas mengukus, keluarkan tamales dari api dan biarkan ia berehat selama 15 minit, masih dibalut dalam kulit jagung, sebelum membuka balutan dan menghidangkan, dihiasi dengan daun ketumbar segar, hirisan limau nipis, dan pilihan salsa atau sos pedas anda.'
      ]
    }
  },
  'mx-06': {
    'zh-CN': {
      title: '墨西哥芝士玉米饼 (Quesadillas)',
      description: '墨西哥城正宗食谱',
      ingredients: [
        { item: '大面粉玉米饼', amount: '2张' },
        { item: '瓦哈卡芝士', amount: '150克' },
        { item: '可选：蘑菇、南瓜花', amount: '' },
        { item: '莎莎酱', amount: '' },
        { item: '酸奶油', amount: '' }
      ],
      instructions: [
        '首先，用中高火预热一个干燥的厚底煎锅或comal，使其达到极高的温度，以烤出金黄酥脆的玉米饼。',
        '接下来，小心地将一张大面粉玉米饼放入预热的煎锅中，稍微旋转以确保均匀烹饪并防止其变形。',
        '现在，将75克磨碎的瓦哈卡芝士撒在玉米饼的一半上，注意在边缘留出小边框，以防止芝士在折叠过程中溢出。',
        '如果需要，可以在芝士上添加可选的馅料，如炒蘑菇或南瓜花，它们的泥土风味和精致质地与瓦哈卡芝士的浓郁相得益彰。',
        '用抹刀小心地将玉米饼对折，将芝士和可选馅料包在里面，轻轻施压以确保玉米饼均匀烹饪，馅料牢固地包裹在内。',
        '将芝士玉米饼煎2分钟，直到呈现金黄色和酥脆的质地，然后小心地翻面，再煎2分钟，直到另一面同样金黄，芝士融化并呈奶油状。',
        '煮熟后，将芝士玉米饼从煎锅中取出，切成三角形，其酥脆的边缘和流淌的芝士中心散发出诱人的咸香。',
        '最后，趁热上菜芝士玉米饼，搭配鲜艳浓郁的莎莎酱、浓郁奶油状的酸奶油，以及一份柔滑的鳄梨酱，风味和质地的结合将创造出真正令人难忘的烹饪体验。'
      ]
    },
    ms: {
      title: 'Quesadillas',
      description: 'Resipi asli dari Mexico City, Mexico',
      ingredients: [
        { item: 'Tortilla tepung besar', amount: '2 keping' },
        { item: 'Keju Oaxaca', amount: '150g' },
        { item: 'Pilihan: cendawan, bunga labu', amount: '' },
        { item: 'Salsa', amount: '' },
        { item: 'Krim masam', amount: '' }
      ],
      instructions: [
        'Pertama, panaskan kuali kering dengan dasar tebal atau comal di atas api sederhana tinggi, biarkan ia mencapai suhu yang sangat panas untuk menghasilkan tortilla yang dipanggang dengan cantik.',
        'Seterusnya, letakkan sekeping tortilla tepung besar dengan berhati-hati ke dalam kuali yang telah dipanaskan, putarkannya sedikit untuk memastikan masakan sekata dan untuk mengelakkannya daripada menjadi tidak berbentuk.',
        'Sekarang, taburkan 75g keju Oaxaca parut di atas satu separuh tortilla, berhati-hati untuk meninggalkan sedikit sempadan di sekeliling tepi untuk mengelakkan keju daripada keluar semasa proses melipat.',
        'Jika dikehendaki, tambahkan inti pilihan seperti cendawan tumis atau bunga labu di atas keju, rasa tanah dan tekstur lembutnya melengkapi kekayaan keju Oaxaca.',
        'Menggunakan spatula, lipat tortilla dengan berhati-hati separuh untuk menutup keju dan inti pilihan, berikan tekanan lembut untuk memastikan tortilla dimasak sekata dan inti terkandung dengan selamat.',
        'Masak quesadilla selama 2 minit di sebelah pertama, sehingga ia menjadi warna perang keemasan dan tekstur rangup, kemudian balikkan dengan berhati-hati dan masak selama 2 minit lagi, sehingga sebelah yang lain sama keemasan dan keju cair dan berkrim.',
        'Setelah masak, keluarkan quesadilla dari kuali dan potong menjadi segitiga, tepi rangup dan pusat keju yang meleleh mengeluarkan aroma savuri yang menggoda deria.',
        'Akhir sekali, hidangkan quesadillas panas, diiringi dengan salsa yang cerah dan masam, krim masam yang kaya dan berkrim, dan hidangan sampingan guacamole yang lembut, gabungan rasa dan tekstur mencipta pengalaman kulinari yang benar-benar tidak dapat dilupakan.'
      ]
    }
  },
  'mx-07': {
    'zh-CN': {
      title: '墨西哥玉米炖肉汤 (Pozole)',
      description: '墨西哥瓜达拉哈拉的正宗食谱',
      ingredients: [
        { item: '大玉米粒', amount: '300克' },
        { item: '猪肩肉', amount: '500克' },
        { item: '干瓜希略辣椒', amount: '' },
        { item: '大蒜', amount: '' },
        { item: '牛至', amount: '' }
      ],
      instructions: [
        '首先冲洗300克大玉米粒，然后将其浸泡在水中至少4小时或过夜，让玉米重新水合并变软，中心略带坚实质地。',
        '在一个大荷兰烤箱中，用中火加热2汤匙油，然后将500克猪肩肉煎至所有面都形成浓郁的焦糖脆皮，呈深棕色，每面大约5分钟。',
        '加入4-5瓣切碎的大蒜和2小枝新鲜牛至到锅中，搅拌均匀，再煮1-2分钟，直到香料散发香气并略微变软，厨房里弥漫着咸香草本和香料的气味。',
        '倒入足够的水覆盖猪肉，将混合物煮沸，然后转小火，盖上盖子，炖煮2小时，或直到猪肉变软，用叉子可以轻松撕碎，汤汁浓郁醇厚，味道既舒适又复杂。',
        '在猪肉烹饪的同时，将4-5个干瓜希略辣椒在一个干煎锅中用中火烤，频繁搅拌，直到它们散发香气并略微膨胀，呈深红棕色，大约5分钟，然后将辣椒从火上移开，让它们稍微冷却，然后与1/4杯猪肉汤混合成光滑的酱汁。',
        '猪肉煮好后，将其从锅中取出，撕成小块，然后将汤汁通过细网筛过滤到一个干净的锅中，丢弃固体，加入烤好的辣椒酱，搅拌均匀，呈现鲜艳的红橙色和深沉略带烟熏的风味。',
        '将浸泡并沥干的大玉米粒加入锅中，搅拌均匀，再炖煮30分钟，或直到玉米完全加热，风味融合，质地浓郁，味道既辛辣又略带甜味。',
        '上菜时，将Pozole盛入碗中，并搭配各种配料，包括切丁的卷心菜、切薄片的萝卜和挤入新鲜青柠汁，如果需要，还可以撒上切碎的新鲜香菜和一小勺酸奶油，以及一份温热的玉米饼或酥脆的玉米片，以增加质地和风味。'
      ]
    },
    ms: {
      title: 'Pozole',
      description: 'Resipi asli dari Guadalajara, Mexico',
      ingredients: [
        { item: 'Jagung hominy', amount: '300g' },
        { item: 'Bahu babi', amount: '500g' },
        { item: 'Cili guajillo kering', amount: '' },
        { item: 'Bawang putih', amount: '' },
        { item: 'Oregano', amount: '' }
      ],
      instructions: [
        'Mulakan dengan membilas 300g jagung hominy, kemudian rendam dalam air selama sekurang-kurangnya 4 jam atau semalaman, biarkan jagung terhidrat semula dan menjadi lembut, dengan tekstur sedikit pejal di tengah.',
        'Dalam periuk Belanda besar, panaskan 2 sudu besar minyak di atas api sederhana, kemudian bakar 500g bahu babi sehingga ia membentuk kerak karamel yang kaya di semua sisi, dengan warna perang yang dalam dan memuaskan, kira-kira 5 minit setiap sisi.',
        'Masukkan 4-5 ulas bawang putih cincang dan 2 tangkai oregano segar ke dalam periuk, kacau untuk menggabungkan, dan masak selama 1-2 minit lagi, sehingga aromatik berbau harum dan sedikit lembut, memenuhi dapur dengan bau herba dan rempah savuri.',
        'Tuangkan air secukupnya untuk menutupi daging babi, didihkan campuran, kemudian kurangkan api ke tahap rendah dan reneh, bertutup, selama 2 jam, atau sehingga daging babi lembut dan mudah dicarik dengan garpu, dengan kuah yang kaya dan berminyak serta kedalaman rasa yang menenangkan dan kompleks.',
        'Semasa daging babi sedang dimasak, panggang 4-5 biji cili guajillo kering dalam kuali kering di atas api sederhana, kacau selalu, sehingga ia berbau harum dan sedikit mengembang, dengan warna merah-coklat yang dalam, kira-kira 5 minit, kemudian keluarkan cili dari api dan biarkan sejuk sedikit sebelum mengisar menjadi sos yang licin dan lembut dengan 1/4 cawan sup daging babi.',
        'Selepas daging babi selesai dimasak, keluarkannya dari periuk dan carikkan menjadi kepingan bersaiz gigitan, kemudian tapis kuah melalui penapis jaring halus ke dalam periuk bersih, buang pepejal, dan masukkan sos cili panggang, kacau untuk menggabungkan, dengan warna merah-oren yang cerah dan rasa yang dalam, sedikit berasap.',
        'Masukkan jagung hominy yang telah direndam dan ditoskan ke dalam periuk, kacau untuk menggabungkan, dan reneh selama 30 minit lagi, atau sehingga jagung panas sepenuhnya dan rasa telah sebati, dengan tekstur yang kaya dan memuaskan serta kedalaman rasa yang pedas dan sedikit manis.',
        'Untuk menghidangkan, cedok pozole ke dalam mangkuk dan taburkan dengan pelbagai hiasan, termasuk kubis dadu, lobak yang dihiris nipis, dan perahan jus limau nipis segar, dengan taburan daun ketumbar segar cincang dan sesudu krim masam, jika dikehendaki, dan hidangan sampingan tortilla panas atau kerepek tortilla rangup untuk tekstur dan rasa tambahan.'
      ]
    }
  },
  'mx-08': {
    'zh-CN': {
      title: '吉事果配热巧克力 (Churros con Chocolate)',
      description: '墨西哥城正宗食谱',
      ingredients: [
        { item: '泡芙面团', amount: '(水、黄油、面粉、鸡蛋)' },
        { item: '肉桂糖', amount: '' },
        { item: '浓稠热巧克力酱', amount: '' },
        { item: '食用油', amount: '(用于油炸)' }
      ],
      instructions: [
        '要开始制作吉事果配热巧克力，首先制作泡芙面团，将水、黄油和面粉放入一个中型炖锅中，用中火持续搅拌，直到混合物形成一个光滑、无结块的面团，然后离火稍微冷却。',
        '面团冷却后，一次加入一个鸡蛋，确保每个鸡蛋都完全融入后再加入下一个，最终形成光滑、有光泽且可挤出的面糊。',
        '在一个小碗中混合砂糖和肉桂粉，搅拌均匀，散发出温暖的肉桂香气，制成肉桂糖。',
        '在一个深煎锅中将油加热至180°C，用温度计检查温度以确保准确，并用纸巾铺好一个盘子，用于沥干炸好的吉事果多余的油。',
        '将泡芙面糊通过星形裱花嘴挤入热油中，将面条切成所需长度，大约10-12厘米，先炸3分钟，或直到边缘开始卷曲，表面呈淡金色，然后小心地翻转吉事果，再炸3分钟，或直到呈深金黄色且酥脆，咬下去有令人满足的嘎吱声，内部柔软蓬松。',
        '炸好后立即将吉事果在肉桂糖混合物中滚动，使其均匀裹上，吉事果的余温会散发出肉桂和糖的香气，然后放在准备好的盘子上沥干多余的油。',
        '要制作浓稠热巧克力酱，将优质黑巧克力和浓奶油放入双层蒸锅中加热，不断搅拌，直到巧克力融化，混合物光滑有光泽，质地浓郁柔滑，味道深沉。',
        '趁热上菜吉事果，搭配浓稠热巧克力酱蘸食，酥脆、甜美的吉事果与浓郁巧克力酱的结合，提供了一份奢华放纵的美味。'
      ]
    },
    ms: {
      title: 'Churros con Chocolate',
      description: 'Resipi asli dari Mexico City, Mexico',
      ingredients: [
        { item: 'Doh pastri choux', amount: '(air, mentega, tepung, telur)' },
        { item: 'Gula kayu manis', amount: '' },
        { item: 'Sos coklat panas pekat', amount: '' },
        { item: 'Minyak', amount: '(untuk menggoreng)' }
      ],
      instructions: [
        'Untuk memulakan penyediaan Churros con Chocolate, mulakan dengan membuat doh pastri choux, gabungkan air, mentega, dan tepung dalam periuk sederhana, pukul secara berterusan di atas api sederhana sehingga campuran membentuk bola yang licin dan tanpa ketulan, kemudian angkat dari api untuk menyejukkan sedikit.',
        'Setelah doh sejuk, masukkan telur satu per satu, pastikan setiap telur sebati sepenuhnya sebelum menambah yang seterusnya, menghasilkan pes yang licin, berkilat dengan konsistensi yang boleh dipaip.',
        'Sediakan gula kayu manis dengan mencampurkan gula pasir dan serbuk kayu manis dalam mangkuk kecil, kacau sehingga sebati, dengan aroma kayu manis hangat yang keluar dari campuran.',
        'Panaskan minyak untuk menggoreng dalam kuali dalam hingga 180°C, periksa suhu dengan termometer untuk memastikan ketepatan, dan lapik pinggan dengan tuala kertas untuk mengeringkan minyak berlebihan dari churros yang digoreng.',
        'Paipkan pes choux melalui muncung bintang ke dalam minyak panas, potong jalur mengikut panjang yang dikehendaki, kira-kira 10-12 cm, dan goreng selama 3 minit di sebelah pertama, atau sehingga tepi mula melengkung dan permukaan berwarna keemasan pucat, kemudian balikkan churros dengan berhati-hati untuk menggoreng selama 3 minit lagi, atau sehingga perang keemasan gelap dan rangup, dengan kerangupan yang memuaskan dan bahagian dalam yang lembut dan berangin.',
        'Sejurus selepas menggoreng, golekkan churros dalam campuran gula kayu manis untuk menyalut, kehangatan churros mengeluarkan wangian kayu manis dan gula, dan letakkan di atas pinggan yang telah disediakan untuk mengeringkan minyak berlebihan.',
        'Untuk menyediakan sos coklat panas pekat, panaskan coklat gelap berkualiti tinggi dan krim pekat dalam dandang dua, pukul sentiasa, sehingga coklat cair dan campuran licin serta berkilat, dengan tekstur yang kaya, baldu dan rasa yang dalam, gelap.',
        'Hidangkan churros panas, diiringi dengan sos coklat panas pekat untuk dicicah, gabungan churros yang rangup, manis dan sos coklat yang kaya, memberikan hidangan yang mewah dan memanjakan.'
      ]
    }
  },
  'mx-09': {
    'zh-CN': {
      title: '尤卡坦烤猪肉 (Cochinita Pibil)',
      description: '源自墨西哥尤卡坦的正宗食谱',
      ingredients: [
        { item: '猪肩肉', amount: '1公斤' },
        { item: '阿奇奥特酱', amount: '' },
        { item: '苦橙汁', amount: '' },
        { item: '香蕉叶', amount: '' },
        { item: '哈瓦那辣椒腌洋葱', amount: '' }
      ],
      instructions: [
        '首先，准备腌料。将2汤匙阿奇奥特酱与250毫升苦橙汁放入搅拌机或食物处理器中，搅拌至光滑且充分混合，呈现鲜艳的红棕色，散发着浓郁微甜的香气。',
        '接下来，将1公斤猪肩肉放入一个大号自封袋或带盖的非反应性容器中，倒入阿奇奥特苦橙汁腌料，翻动以均匀涂抹，确保肉完全浸没在腌料中，然后密封或盖好，冷藏过夜，或至少12小时，让风味充分渗透到肉中。',
        '腌制后，将烤箱预热至150°C。取出猪肉，沥干多余液体，用香蕉叶将猪肩肉紧紧包裹起来，如有必要可用厨房细绳固定，形成一个紧密、密封的包裹，这将有助于在长时间烹饪过程中保持水分和风味。',
        '将包裹好的猪肩肉放入一个带盖的大号荷兰烤箱或重型烤盘中，放入预热好的烤箱，烤制4小时，或直到肉质软嫩，用叉子可以轻松撕碎，香蕉叶散发出芬芳并略微焦化，盘底形成浓郁的酱汁。',
        '在猪肉烹饪的同时，准备哈瓦那辣椒腌洋葱。将1个大红洋葱切成薄片并分成圈，然后将洋葱圈与1/4杯青柠汁、1/4杯苹果醋、1/4杯水、1汤匙蜂蜜以及1-2个切丁的哈瓦那辣椒（根据所需辣度调整）放入平底锅中，用大火煮沸，然后转中低火炖煮10-15分钟，或直到洋葱变透明并略微焦糖化，带有浓郁的酸甜味和哈瓦那辣椒的辣味。',
        '猪肉煮熟后，从烤箱中取出，让其在香蕉叶中静置10-15分钟，然后打开并用两把叉子将肉撕成一口大小的嫩滑多汁的肉丝。',
        '上菜时，将一叠玉米饼用湿纸巾包裹后微波炉加热20-30秒，然后将撕碎的猪肉舀到玉米饼上，上面放一勺哈瓦那辣椒腌洋葱，最后撒上新鲜香菜，挤上少许青柠汁，撒一点盐，制作出一道既熟悉又异域风情，风味浓郁，色彩鲜艳的菜肴，让食客回味无穷。',
        '最后，如果需要，可以用额外的哈瓦那辣椒腌洋葱、香菜和青柠角装饰，并立即上菜，让每位客人都能定制自己完美的尤卡坦烤猪肉，品尝其浓郁的猪肉、酸甜的腌洋葱和鲜活的香草风味。'
      ]
    },
    ms: {
      title: 'Cochinita Pibil',
      description: 'Resipi asli dari Yucatan, Mexico',
      ingredients: [
        { item: 'bahu babi', amount: '1kg' },
        { item: 'Pes Achiote', amount: '' },
        { item: 'Jus oren pahit', amount: '' },
        { item: 'Daun pisang', amount: '' },
        { item: 'Bawang jeruk Habanero', amount: '' }
      ],
      instructions: [
        'Mula-mula, sediakan perapan dengan menggabungkan 2 sudu besar pes achiote dengan 250ml jus oren pahit dalam pengisar atau pemproses makanan, kisar sehingga licin dan sebati, dengan warna coklat kemerahan yang terang dan aroma yang tajam, sedikit manis.',
        'Seterusnya, letakkan 1kg bahu babi dalam beg ziplock besar atau bekas bukan reaktif dengan penutup, dan tuangkan perapan jus achiote-oren ke atas babi, balikkan untuk menyalut rata, pastikan daging terendam sepenuhnya dalam perapan, kemudian tutup dan sejukkan semalaman, atau sekurang-kurangnya 12 jam, untuk membolehkan rasa meresap jauh ke dalam daging.',
        'Selepas diperap, panaskan ketuhar hingga 150°C, kemudian keluarkan babi dari perapan, biarkan cecair berlebihan menitis, dan balut bahu babi dengan ketat dalam daun pisang, ikat dengan tali dapur jika perlu, untuk mencipta bungkusan yang kemas dan kedap udara yang akan membantu mengekalkan kelembapan dan rasa semasa proses memasak yang panjang.',
        'Letakkan bahu babi yang dibalut dalam periuk Belanda besar atau loyang panggang tugas berat dengan penutup, dan masukkan ke dalam ketuhar yang telah dipanaskan, masak selama 4 jam, atau sehingga daging lembut dan mudah dicarik dengan garpu, dan daun pisang wangi dan sedikit hangus, dengan sos yang kaya dan berminyak terbentuk di dasar loyang.',
        'Semasa babi sedang dimasak, sediakan bawang jeruk habanero dengan menghiris nipis 1 bawang merah besar dan memisahkannya menjadi cincin, kemudian gabungkan cincin bawang dengan 1/4 cawan jus limau nipis, 1/4 cawan cuka epal, 1/4 cawan air, 1 sudu besar madu, dan 1-2 biji cili habanero yang didadu, bergantung pada tahap kepedasan yang diingini, dalam periuk, didihkan di atas api besar, kemudian kurangkan api ke sederhana rendah dan reneh selama 10-15 minit, atau sehingga bawang lutsinar dan sedikit karamel, dengan rasa masam, sedikit manis dan kepedasan dari habanero.',
        'Setelah babi masak, keluarkan dari ketuhar dan biarkan ia berehat selama 10-15 minit, masih dibalut dalam daun pisang, sebelum membuka balutan dan mencarik daging menjadi kepingan bersaiz gigitan, menggunakan dua garpu untuk memisahkan daging menjadi serat yang lembut dan berair.',
        'Untuk menghidang, panaskan setumpuk tortilla dengan membalutnya dalam tuala kertas lembap dan memanaskan dalam ketuhar gelombang mikro selama 20-30 saat, kemudian sediakan Cochinita Pibil dengan menyenduk daging babi carik ke atas tortilla, dihiasi dengan sesudu bawang jeruk habanero, dan diakhiri dengan taburan daun ketumbar segar, perahan jus limau nipis, dan sedikit garam, untuk mencipta hidangan yang pada masa yang sama biasa dan eksotik, dengan kedalaman rasa dan warna yang akan membuatkan pengunjung ingin lagi.',
        'Akhir sekali, hias dengan bawang jeruk habanero tambahan, daun ketumbar, dan hirisan limau nipis, jika dikehendaki, dan hidangkan segera, membolehkan setiap tetamu menyesuaikan gigitan Cochinita Pibil mereka sendiri yang sempurna, dengan daging babi yang kaya dan berminyak, bawang jeruk yang masam, dan rasa herba yang terang dan bersemangat.'
      ]
    }
  },
  'mx-10': {
    'zh-CN': {
      title: '三奶蛋糕',
      description: '源自墨西哥蒙特雷的正宗食谱',
      ingredients: [
        { item: '海绵蛋糕', amount: '' },
        { item: '淡奶', amount: '' },
        { item: '炼乳', amount: '' },
        { item: '浓奶油 (浸泡用)', amount: '' },
        { item: '鲜奶油 (装饰用)', amount: '' },
        { item: '肉桂粉', amount: '' }
      ],
      instructions: [
        '首先，将烤箱预热至350°F (180°C)，准备一个9x13英寸的烤盘，轻轻涂油并撒上面粉，确保均匀覆盖以防止蛋糕粘连。',
        '接下来，制作一个简单的海绵蛋糕：将2杯蛋糕粉、1杯砂糖、2茶匙泡打粉和1/2茶匙盐混合搅拌，然后轻轻拌入3个大蛋清和1/2杯全脂牛奶，将面糊倒入准备好的烤盘中，抹平表面以形成均匀的平面，烘烤25-30分钟，或直到蛋糕呈金黄色，轻触回弹，插入中心的牙签取出时干净无残留。',
        '蛋糕烤好后，从烤箱中取出，让其在烤盘中完全冷却，使其收缩并定型，然后转移到冷却架上进一步冷却，确保达到室温。',
        '蛋糕冷却后，用竹签或叉子在表面戳满小孔，形成一系列均匀分布的小孔，这将使牛奶混合物能够渗透并浸泡到蛋糕中，注意不要撕裂蛋糕的脆弱结构。',
        '在一个大碗中，将1杯淡奶、1杯甜炼乳和1杯浓奶油混合在一起，搅拌至混合物光滑且充分混合，呈现浓郁的奶油质地和深沉、天鹅绒般的光泽，然后将混合物慢慢倒在冷却的蛋糕顶部，使其完全均匀地浸泡，直到蛋糕完全饱和并吸收所有混合物。',
        '蛋糕浸泡后，用保鲜膜覆盖并冷藏至少4小时，或过夜，让风味融合，蛋糕冷却，呈现湿润、奶油般的质地和浓郁的奶味。',
        '上菜前，将1杯浓奶油打发至变硬并保持形状，呈现轻盈、蓬松的质地和甜美、奶油般的风味，然后将打发好的鲜奶油涂抹或挤在蛋糕顶部，形成光滑均匀的一层，为菜肴增添一丝甜味和细腻的口感。',
        '最后，在蛋糕顶部撒上肉桂粉，为菜肴增添温暖、辛辣的风味和一丝芳香的深度，然后切片上菜，湿润、奶油般的蛋糕，甜美、奶味的口感，以及轻盈、蓬松的鲜奶油结合在一起，创造出真正令人难忘的甜点体验。'
      ]
    },
    ms: {
      title: 'Kek Tres Leches',
      description: 'Resipi asli dari Monterrey, Mexico',
      ingredients: [
        { item: 'Kek span', amount: '' },
        { item: 'Susu sejat', amount: '' },
        { item: 'Susu pekat manis', amount: '' },
        { item: 'Krim putar (untuk rendaman)', amount: '' },
        { item: 'Krim putar (untuk hiasan)', amount: '' },
        { item: 'Kayu manis', amount: '' }
      ],
      instructions: [
        'Untuk bermula, panaskan ketuhar hingga 350°F (180°C) dan sediakan loyang pembakar 9x13 inci dengan menyapu mentega ringan dan menabur tepung, memastikan salutan sekata untuk mengelakkan kek melekat.',
        'Seterusnya, bakar kek span ringkas dengan memukul bersama 2 cawan tepung kek, 1 cawan gula pasir, 2 sudu teh serbuk penaik, dan 1/2 sudu teh garam, kemudian masukkan perlahan-lahan 3 putih telur besar dan 1/2 cawan susu penuh krim, dan tuangkan adunan ke dalam loyang pembakar yang telah disediakan, ratakan bahagian atas untuk mencipta permukaan yang sekata, dan bakar selama 25-30 minit, atau sehingga kek berwarna perang keemasan, melantun apabila disentuh, dan pencungkil gigi yang dimasukkan ke tengah keluar bersih.',
        'Setelah kek masak, keluarkan dari ketuhar dan biarkan ia sejuk sepenuhnya dalam loyang pembakar, membiarkannya mengecut dan mengeras, sebelum memindahkannya ke rak dawai untuk menyejukkan lagi, memastikan ia mencapai suhu bilik.',
        'Setelah kek sejuk, gunakan lidi atau garpu untuk mencucuk lubang di seluruh permukaan, mencipta satu siri bukaan kecil yang jaraknya sekata yang akan membolehkan campuran susu menembusi dan meresap ke dalam kek, berhati-hati agar tidak merosakkan struktur kek yang halus.',
        'Dalam mangkuk besar, campurkan 1 cawan susu sejat, 1 cawan susu pekat manis, dan 1 cawan krim putar, pukul sehingga campuran licin dan sebati, dengan tekstur krim yang kaya dan kilauan baldu yang dalam, kemudian tuangkan campuran perlahan-lahan ke atas kek yang telah disejukkan, biarkan ia meresap sepenuhnya dan sekata, sehingga kek tepu sepenuhnya dan campuran telah diserap sepenuhnya.',
        'Selepas merendam kek, tutup dengan pembalut plastik dan sejukkan selama sekurang-kurangnya 4 jam, atau semalaman, untuk membolehkan rasa sebati dan kek menjadi sejuk, mengambil tekstur yang lembap, berkrim dan rasa susu yang dalam.',
        'Sebelum dihidangkan, pukul 1 cawan krim putar sehingga menjadi kaku dan mengekalkan bentuknya, dengan tekstur yang ringan, berangin dan rasa manis, berkrim, kemudian sapu atau paip krim putar ke atas kek, mencipta lapisan yang licin dan sekata yang menambah sentuhan kemanisan dan kerangupan halus pada hidangan.',
        'Akhir sekali, taburkan sedikit serbuk kayu manis di atas kek, menambah rasa hangat, pedas dan sentuhan kedalaman aromatik pada hidangan, sebelum dihiris dan dihidangkan, dengan kek yang lembap, berkrim, rasa manis, susu, dan krim putar yang ringan, berangin bergabung untuk mencipta pengalaman pencuci mulut yang benar-benar tidak dapat dilupakan.'
      ]
    }
  },
  'fr-01': {
    'zh-CN': {
      title: '牛角面包',
      description: '源自法国巴黎的正宗食谱',
      ingredients: [
        { item: '面粉', amount: '500克' },
        { item: '黄油 (用于叠层)', amount: '250克' },
        { item: '酵母', amount: '7克' },
        { item: '牛奶', amount: '280毫升' },
        { item: '糖', amount: '80克' },
        { item: '盐', amount: '' }
      ],
      instructions: [
        '首先制作牛角面包面团，将500克高筋面粉、7克活性干酵母、280毫升室温全脂牛奶、80克砂糖和一小撮片状海盐放入带有面团钩的立式搅拌机碗中。以低速混合所有材料，直到形成粗糙的面团，然后提高速度至中速，继续混合约2分钟，直到面团开始聚集成一个有凝聚力的团块。',
        '将面团转移到一个轻轻涂油的碗中，用保鲜膜或湿布盖好，放入4°C的冰箱中冷藏至少8小时或过夜，以使酵母发酵和面筋松弛，从而得到更具延展性且更易叠层的面团。',
        '在撒有少量面粉的表面上，将冷藏过的面团擀成约1厘米厚的长方形，注意保持尺寸均匀和边缘平直。接下来，将250克优质欧式黄油块（软化至可塑状态）放在面团长方形的中央，确保其与面团的纵轴对齐。',
        '将面团折叠在黄油上，完全包裹住，并按压边缘密封，形成一个紧密、均匀的包裹。将面团旋转90°，使折叠的边缘朝向自己，然后将其擀成约1厘米厚的长方形，使用长而轻柔的擀面动作来形成层次并保持黄油的完整性。',
        '再进行两次叠层操作，每次都包括旋转90°，然后将面团擀至相同尺寸，再将其折叠起来，每次叠层之间让面团在冰箱中静置30分钟，以松弛面筋并防止黄油变得过热难以操作。',
        '最后一次叠层后，将面团擀至约0.5厘米厚，然后使用牛角面包切割器或锋利的刀将面团切成长而薄的三角形，每个三角形底部约10厘米，高约20厘米。将每个三角形沿长度方向切成两半，然后将每一半卷成紧密的月牙形卷，将卷好的牛角面包放在铺有烘焙纸的烤盘上，每个糕点之间留出约2.5厘米的空间，以便均匀发酵和膨胀。',
        '让成形的牛角面包在室温（约21°C）下发酵2小时，或直到它们几乎膨胀一倍，并且面团和黄油的层次清晰可见。烘烤前，用蛋液（1个鸡蛋加1汤匙水打散）轻轻刷在牛角面包顶部，以增强成品糕点的金黄色泽和光亮。',
        '最后，将发酵好的牛角面包放入预热至200°C的烤箱中烘烤18分钟，或直到它们呈金黄色，表面带有精致的焦糖光泽，内部酥脆分层，掰开时会碎裂，散发出甜美的黄油香气和细腻微甜的味道。'
      ]
    },
    ms: {
      title: 'Croissant',
      description: 'Resipi asli dari Paris, Perancis',
      ingredients: [
        { item: 'tepung', amount: '500g' },
        { item: 'mentega (untuk laminasi)', amount: '250g' },
        { item: 'yis', amount: '7g' },
        { item: 'susu', amount: '280ml' },
        { item: 'gula', amount: '80g' },
        { item: 'Garam', amount: '' }
      ],
      instructions: [
        'Untuk memulakan doh croissant, gabungkan 500g tepung protein tinggi, 7g yis kering aktif, 280ml susu penuh krim pada suhu bilik, 80g gula pasir, dan secubit garam laut kepingan dalam mangkuk pengadun berdiri yang dilengkapi dengan cangkuk doh. Campurkan bahan-bahan pada kelajuan rendah sehingga membentuk doh yang kasar, kemudian tingkatkan kelajuan ke sederhana dan teruskan mengadun selama kira-kira 2 minit, sehingga doh mula bersatu menjadi satu jisim yang padu.',
        'Pindahkan doh ke dalam mangkuk yang disapu minyak ringan, tutup dengan pembalut plastik atau tuala lembap, dan sejukkan pada suhu 4°C selama sekurang-kurangnya 8 jam atau semalaman untuk membolehkan yis berfermentasi dan gluten berehat, menghasilkan doh yang lebih mudah diregangkan dan dilaminasi.',
        'Di atas permukaan yang ditabur tepung ringan, gulungkan doh yang telah disejukkan menjadi segi empat tepat kira-kira 1cm tebal, berhati-hati untuk mengekalkan dimensi yang sekata dan tepi yang lurus. Seterusnya, letakkan kepingan mentega berkualiti tinggi gaya Eropah seberat 250g, yang telah dilembutkan hingga keadaan mudah dibentuk, di tengah-tengah segi empat tepat doh, memastikan ia sejajar dengan paksi membujur doh.',
        'Lipat doh ke atas mentega, menutupinya sepenuhnya, dan tekan tepi untuk mengedap, mencipta bungkusan yang ketat dan sekata. Putar doh 90°, supaya tepi yang dilipat menghadap anda, dan gulungkannya menjadi segi empat tepat kira-kira 1cm tebal, menggunakan sapuan panjang dan lembut untuk mengembangkan lapisan dan mengekalkan integriti mentega.',
        'Lakukan dua pusingan laminasi tambahan, setiap satu terdiri daripada putaran 90°, diikuti dengan menggulung doh ke dimensi yang sama, dan kemudian melipatnya kembali ke atas dirinya sendiri, membiarkan doh berehat selama 30 minit dalam peti sejuk antara setiap pusingan untuk merehatkan gluten dan mengelakkan mentega menjadi terlalu panas dan sukar dikendalikan.',
        'Selepas laminasi terakhir, gulungkan doh hingga ketebalan kira-kira 0.5cm, dan gunakan pemotong croissant atau pisau tajam untuk memotong doh menjadi segi tiga panjang dan nipis, setiap satu dengan tapak kira-kira 10cm dan ketinggian kira-kira 20cm. Potong setiap segi tiga separuh mengikut panjangnya, dan kemudian gulungkan setiap separuh menjadi gulungan berbentuk bulan sabit yang ketat, letakkan croissant yang digulung di atas loyang pembakar yang dialas kertas parchment, meninggalkan kira-kira 2.5cm ruang antara setiap pastri untuk membolehkan pengembangan dan pembuktian yang sekata.',
        'Biarkan croissant yang telah dibentuk mengembang pada suhu bilik, kira-kira 21°C, selama 2 jam, atau sehingga saiznya hampir dua kali ganda, dan lapisan doh dan mentega kelihatan jelas. Sebelum membakar, sapu perlahan-lahan bahagian atas croissant dengan sapuan telur, yang terdiri daripada 1 telur yang dipukul dengan 1 sudu besar air, untuk meningkatkan warna perang keemasan dan kilauan pastri yang telah siap.',
        'Akhir sekali, bakar croissant yang telah mengembang dalam ketuhar yang telah dipanaskan pada suhu 200°C selama 18 minit, atau sehingga ia berwarna perang keemasan, dengan kilauan karamel yang halus di permukaan dan bahagian dalam yang berlapis-lapis dan rapuh yang pecah apabila dipatahkan, mengeluarkan aroma manis, mentega dan rasa yang halus, sedikit manis.'
      ]
    }
  },
  'fr-02': {
    'zh-CN': {
      title: '红酒炖鸡',
      description: '源自法国勃艮第的正宗食谱',
      ingredients: [
        { item: '整鸡切块', amount: '1只' },
        { item: '红酒', amount: '750毫升' },
        { item: '培根丁', amount: '200克' },
        { item: '蘑菇', amount: '' },
        { item: '珍珠洋葱', amount: '' },
        { item: '百里香', amount: '' },
        { item: '月桂叶', amount: '' },
        { item: '黄油', amount: '' }
      ],
      instructions: [
        '首先，用中高火加热一个厚底煎锅，然后加入2汤匙无盐黄油，使其融化并起泡，直到散发出坚果香气并变成金黄色，此时加入200克培根丁，偶尔搅拌，烹饪至酥脆焦糖化。',
        '接下来，将切好的鸡块加入煎锅中，用培根脂肪和黄油混合物将鸡块四面煎至金黄，使鸡肉形成一层浓郁的深色外皮，大约5-7分钟，然后将煎好的鸡肉从煎锅中取出，放在盘中备用。',
        '在同一个煎锅中，加入切片的珍珠洋葱，用中火烹饪，偶尔搅拌，直到它们变软变透明，大约8分钟，然后加入各种蘑菇，如纽扣菇、褐菇和香菇，烹饪直到它们释放水分并开始变色，偶尔搅拌。',
        '将煎好的鸡块放回煎锅中，与洋葱和蘑菇一起，然后加入一小枝新鲜百里香和一片月桂叶，倒入750毫升浓郁的红酒，如勃艮第或罗纳河谷红酒，刮起煎锅底部任何焦化的碎屑。',
        '将红酒煮沸，然后盖上煎锅盖，转小火，盖盖炖煮45分钟，或直到鸡肉完全煮熟，肉质软嫩脱骨，酱汁变稠并略微收缩。',
        '将鸡肉从煎锅中取出，放在盘中备用，然后将火调至大火，将酱汁快速煮沸，收缩一半，偶尔搅拌，直到酱汁变稠并形成浓郁的糖浆状，大约10-12分钟。',
        '上菜时，将煮好的鸡块放在盘子或大浅盘上，将浓缩的酱汁淋在鸡肉上，用新鲜百里香装饰并立即上菜，让菜肴的香气弥漫开来，风味在味蕾上融合。'
      ]
    },
    ms: {
      title: 'Coq au Vin',
      description: 'Resipi asli dari Burgundy, Perancis',
      ingredients: [
        { item: 'ayam dipotong', amount: '1 ekor' },
        { item: 'wain merah', amount: '750ml' },
        { item: 'lardons bacon', amount: '200g' },
        { item: 'Cendawan', amount: '' },
        { item: 'Bawang mutiara', amount: '' },
        { item: 'Thyme', amount: '' },
        { item: 'Daun salam', amount: '' },
        { item: 'Mentega', amount: '' }
      ],
      instructions: [
        'Mula-mula, panaskan kuali bertapak tebal di atas api sederhana tinggi, kemudian masukkan 2 sudu besar mentega tanpa garam, biarkan ia cair dan berbuih sehingga mengeluarkan aroma kekacang dan bertukar perang keemasan, pada ketika itu masukkan 200g lardons bacon, masak sehingga garing dan karamel, kacau sekali-sekala.',
        'Seterusnya, masukkan kepingan ayam yang telah dipotong ke dalam kuali, goreng sehingga perang di semua sisi dalam campuran lemak bacon dan mentega, membentuk kerak yang kaya dan gelap pada ayam, kira-kira 5-7 minit, kemudian keluarkan ayam yang telah digoreng dari kuali dan ketepikan di atas pinggan.',
        'Dalam kuali yang sama, masukkan bawang mutiara yang telah dihiris, masak di atas api sederhana, kacau sekali-sekala, sehingga ia lembut dan lutsinar, kira-kira 8 minit, kemudian masukkan pelbagai jenis cendawan, seperti cendawan butang, cremini, dan shiitake, masak sehingga ia mengeluarkan kelembapan dan mula perang, kacau sekali-sekala.',
        'Kembalikan kepingan ayam yang telah digoreng ke dalam kuali bersama bawang dan cendawan, kemudian masukkan sebatang thyme segar dan daun salam, tuangkan 750ml wain merah penuh rasa, seperti Burgundy atau Côtes du Rhône, kikis sebarang sisa perang dari dasar kuali.',
        'Didihkan wain, kemudian tutup kuali dengan penutup, kurangkan api ke rendah dan reneh, bertutup, selama 45 minit, atau sehingga ayam masak sepenuhnya dan daging lembut dan mudah tanggal dari tulang, dan sos telah pekat dan berkurangan sedikit.',
        'Keluarkan ayam dari kuali dan ketepikan di atas pinggan, kemudian tingkatkan api ke tinggi dan didihkan sos dengan cepat, kurangkan separuh, kacau sekali-sekala, sehingga ia pekat dan membentuk konsistensi sirap yang kaya, kira-kira 10-12 minit.',
        'Untuk menghidang, letakkan kepingan ayam yang telah dimasak di atas pinggan atau dulang, sudukan sos yang telah dikurangkan ke atas ayam, hias dengan thyme segar dan hidangkan segera, membiarkan aroma hidangan naik dan rasa sebati di lelangit.'
      ]
    }
  },
  'fr-03': {
    'zh-CN': {
      title: '普罗旺斯炖菜',
      description: '源自法国普罗旺斯的正宗食谱',
      ingredients: [
        { item: '西葫芦', amount: '1个' },
        { item: '茄子', amount: '1个' },
        { item: '番茄', amount: '3个' },
        { item: '甜椒', amount: '1个' },
        { item: '洋葱', amount: '' },
        { item: '大蒜', amount: '' },
        { item: '百里香', amount: '' },
        { item: '橄榄油', amount: '' }
      ],
      instructions: [
        '首先，用中火加热一个厚底煎锅，然后加入足量的橄榄油，大约2-3汤匙，以覆盖锅底，旋转以确保均匀覆盖。',
        '接下来，将洋葱小心地切成薄而均匀的圆环，厚度约为1/8英寸，并将大蒜切碎以释放其芳香特性，然后将两者在预热的油中炒至洋葱变透明并略微焦糖化，偶尔搅拌，大约8-10分钟。',
        '在洋葱和大蒜烹饪的同时，将西葫芦、茄子、甜椒和番茄切成同样薄的圆片，厚度约为1/8英寸，以确保烹饪均匀和视觉美观，注意去除蔬菜中的任何种子或多余水分。',
        '一旦洋葱混合物呈金黄色并散发香气，将其放入碗中备用，然后将一层薄薄的炒洋葱和大蒜铺在约9x13英寸大小的烤盘底部，为普罗旺斯炖菜打下风味基础。',
        '现在，开始制作普罗旺斯炖菜，将切好的蔬菜交替排列成重叠的图案，从烤盘外围向内排列，形成一个视觉上令人惊艳且紧密堆叠的层次，并在其中撒上百里香叶以增加风味深度。',
        '在整个菜肴上淋上足量的橄榄油，大约1/4杯，以覆盖蔬菜并促进均匀褐变，然后根据口味用盐和胡椒调味，注意不要过度调味。',
        '用铝箔纸盖住烤盘，放入预热至160°C的烤箱中烘烤30分钟，然后取下铝箔纸，继续烘烤30分钟，或直到蔬菜变软并略微褐变，顶层略微焦糖化，风味完全融合。',
        '最后，将普罗旺斯炖菜从烤箱中取出，静置10-15分钟后再上菜，让风味成熟，汁液重新分布，从而得到一道浓郁、柔滑、风味浓烈的配菜，展现普罗旺斯美食的魅力。'
      ]
    },
    ms: {
      title: 'Ratatouille',
      description: 'Resipi asli dari Provence, Perancis',
      ingredients: [
        { item: 'zukini', amount: '1 biji' },
        { item: 'terung', amount: '1 biji' },
        { item: 'tomato', amount: '3 biji' },
        { item: 'lada benggala', amount: '1 biji' },
        { item: 'Bawang', amount: '' },
        { item: 'Bawang putih', amount: '' },
        { item: 'Thyme', amount: '' },
        { item: 'Minyak zaitun', amount: '' }
      ],
      instructions: [
        'Mula-mula, panaskan kuali bertapak tebal di atas api sederhana, kemudian masukkan minyak zaitun yang banyak, kira-kira 2-3 sudu besar, untuk menyalut dasar kuali, pusingkan untuk memastikan liputan sekata.',
        'Seterusnya, hirisan bawang dengan teliti menjadi cincin nipis dan seragam, dengan ketebalan kira-kira 1/8 inci, dan cincang bawang putih untuk melepaskan sifat aromatiknya, kemudian tumis kedua-duanya dalam minyak yang telah dipanaskan sehingga bawang lutsinar dan sedikit karamel, kacau sekali-sekala, kira-kira 8-10 minit.',
        'Semasa bawang dan bawang putih sedang dimasak, hirisan zukini, terung, lada benggala, dan tomato menjadi kepingan bulat yang sama nipis, kira-kira 1/8 inci tebal, untuk memastikan masakan yang seragam dan daya tarikan visual, berhati-hati untuk membuang sebarang biji atau kelembapan berlebihan dari sayur-sayuran.',
        'Setelah campuran bawang berwarna perang keemasan dan wangi, ketepikan dalam mangkuk, kemudian susun lapisan nipis bawang dan bawang putih yang telah ditumis di dasar loyang pembakar, kira-kira saiz 9x13 inci, untuk mencipta asas berperisa untuk ratatouille.',
        'Sekarang, mulakan membina ratatouille dengan menyusun hirisan sayur-sayuran secara berselang-seli dalam corak bertindih, bermula dari luar hidangan dan bergerak ke dalam, mencipta lapisan yang menakjubkan secara visual dan padat, menaburkan daun thyme di seluruhnya untuk kedalaman rasa tambahan.',
        'Tuangkan minyak zaitun yang banyak ke atas seluruh hidangan, kira-kira 1/4 cawan, untuk menyalut sayur-sayuran dan menggalakkan pemerangan yang sekata, kemudian perasakan dengan garam dan lada sulah secukup rasa, berhati-hati agar tidak terlalu banyak perasa.',
        'Tutup loyang pembakar dengan kerajang aluminium dan bakar dalam ketuhar yang telah dipanaskan pada suhu 160°C selama 30 minit, kemudian keluarkan kerajang dan teruskan membakar selama 30 minit lagi, atau sehingga sayur-sayuran lembut dan sedikit perang, dengan lapisan atas sedikit karamel dan rasa yang sebati sepenuhnya.',
        'Akhir sekali, keluarkan ratatouille dari ketuhar dan biarkan ia berehat selama 10-15 minit sebelum dihidangkan, membiarkan rasa matang dan jus diedarkan semula, menghasilkan hidangan sampingan yang kaya, lembut, dan sangat berperisa yang mempamerkan keindahan masakan Provençal.'
      ]
    }
  },
  'fr-04': {
    'zh-CN': {
      title: '法式焦糖布丁',
      description: '源自法国巴黎的经典食谱',
      ingredients: [
        { item: '浓奶油', amount: '500毫升' },
        { item: '蛋黄', amount: '6个' },
        { item: '糖', amount: '100克' },
        { item: '香草豆荚', amount: '1根' }
      ],
      instructions: [
        '首先，小心地将一根新鲜的香草豆荚纵向剖开，然后将500毫升浓奶油和香草豆荚放入一个中型平底锅中，用小火加热，偶尔搅拌，直到奶油开始冒泡，香草的香气浓郁，然后离火，浸泡至少30分钟，让味道充分融合。',
        '在一个单独的搅拌碗中，将6个大蛋黄和100克细砂糖搅拌在一起，直到混合物变得苍白浓稠，体积几乎翻倍，提起打蛋器时能形成丝带状，这表明糖已完全溶解，蛋黄已充分充气。',
        '将温热的香草奶油逐渐倒入蛋黄混合物中，同时不断搅拌以防止鸡蛋凝固，直到混合物光滑且充分混合，然后将混合物通过细网筛过滤到一个干净的碗中，以去除任何可能的蛋固形物。',
        '将过滤后的奶油混合物倒入4-6个烤盅或小烤盘中，填充约3/4满，然后将烤盅放入一个大烤盘中，加入热水至烤盅侧面的一半高度，形成水浴，这将有助于布丁均匀烹饪。',
        '将法式焦糖布丁放入预热至160°C的烤箱中烘烤40分钟，或直到边缘凝固而中心仍略微晃动，然后将烤盅从水浴中取出，放凉至室温，盖好并冷藏至少2小时或过夜，让布丁冷却并凝固。',
        '上菜前，在每个冰镇的法式焦糖布丁顶部均匀撒上一层薄薄的细砂糖，然后用厨房喷枪将糖焦糖化，将火焰保持在离表面约2-3英寸处，缓慢来回移动，直到糖变成金棕色并焦糖化，形成酥脆、玻璃般的质地，为下方浓郁、奶油般的布丁增添令人满足的口感对比。',
        '立即上菜，如果需要，可以撒上少许海盐或几颗新鲜浆果作为装饰，享受顺滑、天鹅绒般的布丁基底、酥脆的焦糖顶层以及香草奶油的浓郁风味。'
      ]
    },
    ms: {
      title: 'Crème Brûlée',
      description: 'Resipi asli dari Paris, Perancis',
      ingredients: [
        { item: 'krim putar pekat', amount: '500ml' },
        { item: 'kuning telur', amount: '6 biji' },
        { item: 'gula', amount: '100g' },
        { item: 'batang vanila', amount: '1 batang' }
      ],
      instructions: [
        'Mulakan dengan membelah sebiji batang vanila segar secara memanjang dan masukkan 500ml krim putar pekat bersama pod vanila yang wangi ke dalam periuk sederhana. Panaskan dengan api perlahan, kacau sekali-sekala, sehingga krim mula mendidih perlahan dan aroma vanila menjadi kuat. Kemudian angkat dari api dan biarkan meresap sekurang-kurangnya 30 minit untuk membolehkan rasa sebati.',
        'Dalam mangkuk adunan yang berasingan, pukul 6 biji kuning telur besar dan 100g gula pasir sehingga campuran menjadi pucat dan pekat, hampir dua kali ganda isipadu, dan membentuk reben apabila pengocok diangkat, menunjukkan bahawa gula telah larut sepenuhnya dan kuning telur telah diangin dengan baik.',
        'Suamkan campuran kuning telur dengan menuang krim vanila yang hangat secara beransur-ansur ke dalam mangkuk, kacau sentiasa untuk mengelakkan telur daripada berketul, sehingga campuran menjadi licin dan sebati. Kemudian tapis campuran melalui penapis jejaring halus ke dalam mangkuk bersih untuk membuang sebarang pepejal telur yang mungkin ada.',
        'Tuangkan campuran krim yang telah ditapis ke dalam 4-6 ramekin atau pinggan pembakar kecil, isi kira-kira 3/4 penuh. Kemudian letakkan ramekin dalam pinggan pembakar besar dan tambahkan air panas sehingga separuh ketinggian sisi ramekin, mewujudkan mandian air yang akan membantu memasak asas kastard secara sekata.',
        'Bakar crème brûlée dalam ketuhar yang telah dipanaskan pada suhu 160°C selama 40 minit, atau sehingga tepinya mengeras dan bahagian tengah masih sedikit bergoyang. Kemudian keluarkan ramekin dari mandian air dan biarkan sejuk pada suhu bilik, tutup dan sejukkan dalam peti sejuk selama sekurang-kurangnya 2 jam atau semalaman untuk membiarkan kastard sejuk dan mengeras.',
        'Sebelum dihidangkan, taburkan lapisan gula pasir yang nipis dan rata di atas setiap crème brûlée yang telah disejukkan. Kemudian karamelkan gula dengan obor dapur, pegang api kira-kira 2-3 inci dari permukaan, gerakkan perlahan-lahan ke depan dan belakang, sehingga gula menjadi perang keemasan dan berkaramel, dengan tekstur rangup seperti kaca yang menambah kontras tekstur yang memuaskan kepada kastard yang kaya dan berkrim di bawahnya.',
        'Hidangkan crème brûlée dengan segera, hias dengan sedikit garam laut atau beberapa beri segar jika dikehendaki, dan nikmati gabungan asas kastard yang licin dan baldu, topping gula karamel yang rangup, dan rasa krim vanila yang kaya dan mendalam.'
      ]
    }
  },
  'fr-05': {
    'zh-CN': {
      title: '法式洋葱汤',
      description: '源自法国巴黎的经典食谱',
      ingredients: [
        { item: '大洋葱', amount: '6个' },
        { item: '黄油', amount: '50克' },
        { item: '牛肉高汤', amount: '1升' },
        { item: '法棍切片', amount: '' },
        { item: '格鲁耶尔奶酪', amount: '' },
        { item: '白葡萄酒', amount: '' },
        { item: '百里香', amount: '' }
      ],
      instructions: [
        '首先，将6个大洋葱去皮并切成薄片，使用切片器或锋利的刀切成均匀的1/8英寸厚圆环，这将有助于均匀焦糖化。',
        '在一个大而厚底的平底锅中，用中火融化50克黄油，然后加入切好的洋葱，搅拌使其均匀裹上黄油，然后烹煮，偶尔搅拌，持续60分钟，或直到它们变成深金棕色并散发出浓郁、甜美的焦糖风味。',
        '洋葱焦糖化后，向平底锅中加入少量白葡萄酒，搅拌以刮下锅底的美味焦糖碎屑，然后将葡萄酒煮沸至微沸，并煮至几乎完全收干，在洋葱上留下一层糖浆状的釉面。',
        '接下来，将1升牛肉高汤加入平底锅中，搅拌使其与焦糖洋葱和葡萄酒釉面混合，然后加入几枝新鲜百里香，这将为汤注入微妙的草本风味。',
        '将汤煮沸至微沸，然后将火调至小火，盖上盖子煮20分钟，或直到味道充分融合，汤变得浓郁、柔滑。',
        '预热烤肉炉，然后将法棍切成1/2英寸厚的圆片，烤至酥脆金黄，这将用作汤的顶部面包丁。',
        '组装法式洋葱汤时，将热汤盛入可用于烤箱的碗中，然后在每个碗上放一片烤好的法棍面包丁，撒上磨碎的格鲁耶尔奶酪，奶酪将在烤肉炉下融化并冒泡。',
        '最后，将碗放入预热的烤肉炉下，小心观察，烤至奶酪融化并冒泡，面包丁呈金黄色，然后从烤箱中取出并立即上菜。'
      ]
    },
    ms: {
      title: 'Sup Bawang Perancis',
      description: 'Resipi asli dari Paris, Perancis',
      ingredients: [
        { item: 'bawang besar', amount: '6 biji' },
        { item: 'mentega', amount: '50g' },
        { item: 'stok daging lembu', amount: '1L' },
        { item: 'Hirisan baguette', amount: '' },
        { item: 'Keju Gruyère', amount: '' },
        { item: 'Wain putih', amount: '' },
        { item: 'Thyme', amount: '' }
      ],
      instructions: [
        'Mula-mula, kupas dan hiris nipis 6 biji bawang besar, gunakan mandolin atau pisau tajam untuk mendapatkan cincin setebal 1/8 inci yang seragam, ini akan membantu karamelisasi secara sekata.',
        'Dalam periuk besar bertapak tebal, cairkan 50g mentega di atas api sederhana, kemudian masukkan hirisan bawang, kacau untuk menyalutnya dengan mentega secara sekata, dan masak, kacau sekali-sekala, selama 60 minit, atau sehingga ia mencapai warna perang keemasan yang pekat dan telah mengembangkan rasa karamel yang kaya dan manis.',
        'Selepas bawang telah berkaramel, masukkan sedikit wain putih ke dalam periuk, kacau untuk deglaze bahagian bawah dan melepaskan sisa-sisa perang yang berperisa, kemudian didihkan wain dan masak sehingga ia hampir sepenuhnya berkurangan, meninggalkan lapisan gula sirap pada bawang.',
        'Seterusnya, masukkan 1L stok daging lembu ke dalam periuk, kacau untuk menggabungkannya dengan bawang karamel dan lapisan wain, kemudian masukkan beberapa tangkai thyme segar, yang akan meresapkan sup dengan rasa herba yang halus.',
        'Didihkan sup, kemudian kecilkan api dan masak, bertutup, selama 20 minit, atau sehingga rasa telah sebati dan sup telah mengembangkan tekstur yang kaya dan baldu.',
        'Panaskan broiler, kemudian hiris baguette menjadi kepingan setebal 1/2 inci dan bakar sehingga rangup dan perang keemasan, yang akan digunakan sebagai kruton untuk topping sup.',
        'Untuk menyediakan Sup Bawang Perancis, sendukkan sup panas ke dalam mangkuk tahan ketuhar, kemudian letakkan kruton baguette yang telah dibakar di atas setiap mangkuk dan taburkan keju Gruyère parut, yang akan cair dan berbuih di bawah broiler.',
        'Akhir sekali, letakkan mangkuk di bawah broiler yang telah dipanaskan dan masak, perhatikan dengan teliti, sehingga keju cair dan berbuih, dan kruton berwarna perang keemasan, kemudian keluarkan dari ketuhar dan hidangkan segera.'
      ]
    }
  },
  'fr-06': {
    'zh-CN': {
      title: '马赛鱼汤',
      description: '源自法国马赛的经典食谱',
      ingredients: [
        { item: '各种鱼类（蝎子鱼、鮟鱇鱼）', amount: '' },
        { item: '青口', amount: '' },
        { item: '大虾', amount: '' },
        { item: '藏红花', amount: '' },
        { item: '番茄', amount: '' },
        { item: '茴香', amount: '' },
        { item: '鲁伊酱', amount: '' },
        { item: '法棍', amount: '' }
      ],
      instructions: [
        '首先，用中火加热一个厚底煎锅，然后加入大量的橄榄油，炒香切片的茴香和切丁的番茄，直到它们变软变透明，茴香略带焦糖化，番茄释放出天然汁液，偶尔搅拌以防烧焦。',
        '接下来，将蒜末加入煎锅中，搅拌烹煮1-2分钟，直到香气四溢并呈浅金黄色，注意不要烧焦大蒜，因为它很快会变苦。',
        '向煎锅中加入一小撮优质藏红花丝，搅拌使其与茴香、番茄和大蒜混合，再烹煮一分钟，让藏红花将其独特的泥土和芳香风味注入混合物中。',
        '倒入鱼高汤，将混合物煮沸至微沸，烹煮5-7分钟，或直到液体略微减少，味道充分融合，藏红花将其标志性的黄橙色赋予汤汁。',
        '按照鱼肉的紧实度依次将鱼加入锅中，先是鮟鱇鱼和蝎子鱼，然后是青口，最后是大虾，烹煮15分钟，或直到鱼肉煮熟，青口打开，大虾变成鲜艳的粉红色，鮟鱇鱼和蝎子鱼用叉子轻轻一拨即可散开。',
        '在鱼肉烹煮的同时，准备鲁伊酱：将烤红椒、大蒜、藏红花和橄榄油放入搅拌机或食物处理器中，搅拌至光滑奶油状，然后用盐、胡椒和少许新鲜柠檬汁调味。',
        '上菜时，将热汤盛入碗中，然后放上一片烤法棍，上面放一勺鲁伊酱，撒上切碎的新鲜欧芹或细香葱，然后将鱼肉单独盛放，用额外的欧芹或细香葱和一片柠檬角装饰。',
        '最后，邀请您的客人自行组装他们的碗，将鱼肉和青口舀入汤中，然后将鲁伊酱涂抹在烤面包上，蘸入美味的汤汁中，每一口都能释放出芳香的藏红花和海鲜的咸鲜味。'
      ]
    },
    ms: {
      title: 'Bouillabaisse',
      description: 'Resipi asli dari Marseille, Perancis',
      ingredients: [
        { item: 'Pelbagai ikan (rascasse, monkfish)', amount: '' },
        { item: 'Kupang', amount: '' },
        { item: 'Udang', amount: '' },
        { item: 'Saffron', amount: '' },
        { item: 'Tomato', amount: '' },
        { item: 'Adas', amount: '' },
        { item: 'Sos Rouille', amount: '' },
        { item: 'Baguette', amount: '' }
      ],
      instructions: [
        'Mula-mula, panaskan kuali bertapak tebal di atas api sederhana, kemudian masukkan sejumlah besar minyak zaitun dan tumis hirisan adas dan dadu tomato sehingga ia lembut dan lutsinar, dengan adas mengembangkan sedikit karamelisasi dan tomato mengeluarkan jus semula jadi mereka, kacau sekali-sekala untuk mengelakkan hangus.',
        'Seterusnya, masukkan bawang putih cincang ke dalam kuali dan masak selama 1-2 minit, kacau sentiasa, sehingga wangi dan perang keemasan sedikit, berhati-hati agar tidak membakar bawang putih kerana ia boleh cepat menjadi pahit.',
        'Masukkan secubit benang saffron berkualiti tinggi ke dalam kuali, kacau untuk menggabungkannya dengan adas, tomato, dan bawang putih, dan masak selama satu minit lagi untuk membolehkan saffron meresapkan rasa tanah dan aromatiknya yang tersendiri ke dalam campuran.',
        'Tuangkan stok ikan, didihkan campuran, dan masak selama 5-7 minit atau sehingga cecair telah berkurangan sedikit dan rasa telah sebati, dengan saffron memberikan warna kuning-jingga khasnya kepada kuah.',
        'Masukkan ikan ke dalam periuk mengikut urutan kekerasan, bermula dengan monkfish dan rascasse, kemudian kupang, dan akhirnya udang, masak selama 15 minit atau sehingga ikan masak sepenuhnya dan kupang telah terbuka, dengan udang bertukar menjadi merah jambu terang dan monkfish serta rascasse mudah hancur dengan garpu.',
        'Semasa ikan sedang dimasak, sediakan sos rouille dengan menggabungkan lada merah panggang, bawang putih, saffron, dan minyak zaitun dalam pengisar atau pemproses makanan, kisar sehingga licin dan berkrim, kemudian perasakan dengan garam, lada, dan sedikit perahan jus lemon segar.',
        'Untuk menghidang, sendukkan kuah panas ke dalam mangkuk, diikuti dengan hirisan baguette bakar yang dihiasi dengan sesudu sos rouille dan taburan pasli segar cincang atau chives, kemudian hidangkan ikan secara berasingan, dihiasi dengan pasli atau chives tambahan dan hirisan lemon di sisi.',
        'Akhir sekali, jemput tetamu anda untuk menyediakan mangkuk mereka sendiri, menyendukkan ikan dan kupang ke dalam kuah, kemudian menyapu sos rouille ke atas roti bakar dan mencelupkannya ke dalam kuah yang berperisa, melepaskan saffron aromatik dan kemasinan makanan laut dengan setiap suapan.'
      ]
    }
  },
  'fr-07': {
    'zh-CN': {
      title: '马卡龙',
      description: '源自法国巴黎的经典食谱',
      ingredients: [
        { item: '杏仁粉', amount: '150克' },
        { item: '糖粉', amount: '150克' },
        { item: '蛋白（陈化）', amount: '3个' },
        { item: '细砂糖', amount: '150克' },
        { item: '馅料（甘纳许、奶油霜）', amount: '' }
      ],
      instructions: [
        '首先，将150克杏仁粉和150克糖粉一起过筛到一个中等大小的碗中，使用细网筛以确保质地光滑均匀，并向混合物中引入空气，从而增强最终马卡龙精致的蛋白酥基底结构。',
        '在一个单独的、一尘不染的碗中，搅打3个陈化蛋白，直到它们变得起泡，然后逐渐加入150克细砂糖，同时持续搅打，目标是达到坚挺、有光泽的蛋白酥，其pH值更接近中性，这对于马卡龙的稳定性和风味至关重要。',
        '一旦蛋白酥达到所需的稠度，就到了进行马卡龙面糊混合（macaronage）的时候：用橡皮刮刀以轻柔的圆周运动，小心地将过筛的杏仁粉和糖粉混合物折叠到蛋白酥中，注意不要过度混合，这会导致马卡龙变得致密有嚼劲，而不是所需的精致酥脆外壳。',
        '将面糊转移到装有圆形裱花嘴的裱花袋中，在铺有烘焙纸的烤盘上挤出直径约4厘米的小圆形，对裱花袋施加轻柔、持续的压力，让面糊流畅地流出，形成整齐、圆润且边缘略微凸起的形状。',
        '挤好后，将烤盘举到离平面约30厘米高处，轻轻而有力地敲击，以去除可能形成的任何气泡，然后让挤好的马卡龙在室温下静置30分钟，在此期间它们的表面会形成一层薄膜，这表明它们已准备好烘烤，并且蛋白酥基底的面糊已开始凝固。',
        '将烤箱预热至150°C，烤架置于中央，然后将装有马卡龙的烤盘放在烤架上，烘烤13分钟，或直到顶部触感坚实，边缘呈浅金黄色，而中心仍保持柔软且略有弹性，从而达到酥脆与嚼劲的微妙平衡。',
        '马卡龙烘烤完毕并在烤盘上完全冷却后，即可搭配浓郁、柔滑的馅料，例如黑巧克力甘纳许或微甜的奶油霜，这将为成品马卡龙增添风味、质地和视觉吸引力，并与饼干酥脆、精致的外壳形成愉悦的对比。'
      ]
    },
    ms: {
      title: 'Macarons',
      description: 'Resipi asli dari Paris, Perancis',
      ingredients: [
        { item: 'tepung badam', amount: '150g' },
        { item: 'gula aising', amount: '150g' },
        { item: 'putih telur (lama)', amount: '3 biji' },
        { item: 'gula kastor', amount: '150g' },
        { item: 'Inti (ganache, krim mentega)', amount: '' }
      ],
      instructions: [
        'Mulakan dengan mengayak 150g tepung badam dan 150g gula aising bersama-sama dalam mangkuk bersaiz sederhana, menggunakan penapis jejaring halus untuk memastikan tekstur yang licin dan sekata, serta untuk memasukkan udara ke dalam campuran, dengan itu meningkatkan struktur berasaskan meringue yang halus pada macaron akhir.',
        'Dalam mangkuk berasingan yang bersih tanpa cela, pukul 3 biji putih telur lama sehingga berbuih, kemudian masukkan 150g gula kastor secara beransur-ansur sambil terus memukul, bertujuan untuk mencapai meringue yang kaku dan berkilat dengan tahap pH yang lebih hampir kepada neutral, yang penting untuk kestabilan dan rasa macaron.',
        'Setelah meringue mencapai konsistensi yang dikehendaki, tiba masanya untuk melakukan macaronage: lipat campuran tepung badam dan gula aising yang telah diayak dengan lembut ke dalam meringue, menggunakan spatula getah dan gerakan membulat yang lembut, berhati-hati agar tidak terlebih adun, yang boleh menyebabkan macaron menjadi padat dan kenyal, bukannya cengkerang yang halus dan rangup yang diingini.',
        'Pindahkan adunan yang terhasil ke dalam beg paip yang dipasang dengan hujung bulat, dan paip bulatan kecil, kira-kira 4cm diameter, ke atas loyang yang dialas dengan kertas parchment, berikan tekanan yang lembut dan konsisten pada beg paip, dan biarkan adunan mengalir dengan lancar, mencipta bentuk bulat yang kemas dengan tepi yang sedikit terangkat.',
        'Selepas proses paip, pegang loyang kira-kira 30cm di atas permukaan rata dan ketuk perlahan-lahan, namun tegas, untuk mengeluarkan sebarang gelembung udara yang mungkin terbentuk, kemudian biarkan macaron yang telah dipaip berehat pada suhu bilik selama 30 minit, di mana lapisan kulit akan terbentuk di permukaannya, menunjukkan bahawa ia sedia untuk dibakar, dan adunan berasaskan meringue telah mula mengeras.',
        'Panaskan ketuhar hingga 150°C, dengan rak diletakkan di tengah, kemudian letakkan loyang dengan macaron di atas rak, dan bakar selama 13 minit, atau sehingga bahagian atasnya kukuh apabila disentuh, dan tepinya berwarna perang keemasan sedikit, manakala bahagian tengahnya kekal lembut dan sedikit kenyal apabila ditekan, menghasilkan keseimbangan rangup dan kenyal yang halus.',
        'Setelah macaron telah dibakar dan dibiarkan sejuk sepenuhnya di atas loyang, ia sedia untuk dipadankan dengan inti yang kaya dan baldu, seperti ganache coklat gelap, atau krim mentega yang sedikit manis, yang akan menambah rasa, tekstur, dan daya tarikan visual kepada macaron yang telah siap, dan memberikan kontras yang menarik kepada bahagian luar biskut yang rangup dan halus.'
      ]
    }
  },
  'fr-08': {
    'zh-CN': {
      title: '勃艮第红酒炖牛肉',
      description: '源自法国勃艮第的经典食谱',
      ingredients: [
        { item: '牛腩', amount: '1公斤' },
        { item: '勃艮第红酒', amount: '' },
        { item: '培根丁', amount: '' },
        { item: '珍珠洋葱', amount: '' },
        { item: '蘑菇', amount: '' },
        { item: '百里香', amount: '' },
        { item: '月桂叶', amount: '' }
      ],
      instructions: [
        '首先将1公斤牛腩切成2英寸的方块，确保它们尽可能均匀以保证烹饪一致，然后用粗盐和现磨黑胡椒调味牛肉，以增强肉的天然风味。',
        '在一个大碗中，将牛肉块与250毫升勃艮第红酒混合，确保每块肉都裹上红酒，用保鲜膜盖好并冷藏过夜，让红酒的酸度分解牛肉中的结缔组织。',
        '第二天，将牛肉从红酒腌料中取出，沥干多余的液体，并将腌料保留备用，然后在一个大荷兰烤箱中用中高火加热2汤匙橄榄油，直到冒烟，然后分批加入牛肉块，煎至各面金黄，每面约2-3分钟。',
        '牛肉煎好后，将其从锅中取出并放在一边，然后加入6片培根丁到锅中，烹煮至酥脆金黄，偶尔搅拌，然后用漏勺将其从锅中取出，与煎好的牛肉一起放在一边。',
        '将1个大洋葱（去皮切碎）、250克珍珠洋葱（去皮）和250克蘑菇（切片）加入锅中，烹煮至变软并略呈金黄色，偶尔搅拌，然后加入2枝新鲜百里香和1片月桂叶到锅中，让香料为菜肴注入风味。',
        '将保留的红酒腌料加入锅中，刮下锅底的焦糖碎屑，然后将煎好的牛肉和培根丁放回锅中，盖上盖子，放入预热至160°C的烤箱中烘烤2.5小时，或直到牛肉变得软烂易散。',
        '将锅从烤箱中取出，然后将牛肉和培根从锅中取出，放在一边，然后将酱汁通过细网筛过滤到一个干净的平底锅中，丢弃固体，然后用中火将酱汁收浓至浓稠的糖浆状，偶尔搅拌。',
        '最后，将牛肉和培根放回平底锅中，搅拌使其裹上浓缩的酱汁，然后趁热上菜，用新鲜百里香装饰，并搭配奶油土豆泥，以吸收浓郁醇厚的酱汁。'
      ]
    },
    ms: {
      title: 'Boeuf Bourguignon',
      description: 'Resipi asli dari Burgundy, Perancis',
      ingredients: [
        { item: 'daging lembu chuck', amount: '1kg' },
        { item: 'Wain Burgundy', amount: '' },
        { item: 'Lardon bacon', amount: '' },
        { item: 'Bawang mutiara', amount: '' },
        { item: 'Cendawan', amount: '' },
        { item: 'Thyme', amount: '' },
        { item: 'Daun salam', amount: '' }
      ],
      instructions: [
        'Mulakan dengan memotong 1kg daging lembu chuck menjadi kiub 2 inci, pastikan ia seragam mungkin untuk menjamin masakan yang sekata, kemudian perasakan daging dengan garam kosher dan lada hitam yang baru dikisar untuk meningkatkan rasa semula jadi daging.',
        'Dalam mangkuk besar, gabungkan kiub daging lembu dengan 250ml wain Burgundy, pastikan setiap kepingan disalut dengan wain, tutup dengan pembalut plastik dan sejukkan semalaman, membiarkan keasidan wain memecahkan tisu penghubung dalam daging lembu.',
        'Keesokan harinya, keluarkan daging lembu dari perapan wain, biarkan cecair berlebihan menitis, dan simpan perapan untuk kegunaan kemudian, kemudian panaskan 2 sudu besar minyak zaitun dalam periuk Belanda besar di atas api sederhana tinggi sehingga mencapai titik asap, sebelum menambah kiub daging lembu secara berperingkat untuk mendapatkan kesan bakar yang baik, masak sehingga ia perang di semua sisi, kira-kira 2-3 minit setiap sisi.',
        'Setelah daging lembu perang, keluarkannya dari periuk dan ketepikan, kemudian masukkan 6 hirisan lardon bacon ke dalam periuk, masak sehingga ia rangup dan perang keemasan, kacau sekali-sekala, sebelum mengeluarkannya dari periuk dengan sudu berlubang dan ketepikan bersama daging lembu yang telah diperang.',
        'Masukkan 1 biji bawang besar yang telah dikupas dan dicincang, 250g bawang mutiara yang telah dikupas, dan 250g cendawan yang telah dihiris, ke dalam periuk, masak sehingga ia lembut dan sedikit perang, kacau sekali-sekala, sebelum menambah 2 tangkai thyme segar dan 1 daun salam ke dalam periuk, membiarkan aromatik meresapkan hidangan dengan rasa mereka.',
        'Masukkan perapan wain yang telah disimpan ke dalam periuk, kikis bahagian bawah untuk melepaskan sebarang sisa perang, kemudian kembalikan daging lembu dan lardon bacon yang telah diperang ke dalam periuk, tutup dengan penutup, dan pindahkan ke ketuhar yang telah dipanaskan pada suhu 160°C selama 2.5 jam, atau sehingga daging lembu lembut dan mudah hancur.',
        'Keluarkan periuk dari ketuhar, kemudian keluarkan daging lembu dan bacon dari periuk, ketepikan, sebelum menapis sos melalui penapis jejaring halus ke dalam periuk bersih, buang pepejal, dan pekatkan sos di atas api sederhana sehingga mencapai konsistensi sirap yang kaya, kacau sekali-sekala.',
        'Akhir sekali, kembalikan daging lembu dan bacon ke dalam periuk, gaul untuk menyalut dengan sos yang telah dipekatkan, kemudian hidangkan Boeuf Bourguignon panas, dihiasi dengan thyme segar dan diiringi dengan kentang lenyek berkrim untuk menyerap sos yang kaya dan berbadan penuh.'
      ]
    }
  },
  'fr-09': {
    'zh-CN': {
      title: '洛林乳蛋饼',
      description: '源自法国洛林的传统食谱',
      ingredients: [
        { item: '酥皮面团', amount: '' },
        { item: '培根丁', amount: '200克' },
        { item: '鸡蛋', amount: '4个' },
        { item: '奶油', amount: '200毫升' },
        { item: '格鲁耶尔奶酪', amount: '' },
        { item: '肉豆蔻', amount: '' }
      ],
      instructions: [
        '首先，将烤箱预热至180°C（350°F），然后将酥皮面团擀成约3毫米厚，小心地放入24厘米的挞模中，确保面团均匀铺开，边缘修剪整齐。',
        '接下来，在酥皮壳内铺上烘焙纸并填入烘焙豆进行盲烤，烤15分钟，或直到酥皮呈浅金黄色并定型，然后取出烘焙纸和烘焙豆。',
        '在酥皮烘烤的同时，将200克培根丁放入热煎锅中，中火烹饪，偶尔搅拌，直到培根酥脆呈金黄色，口感香脆，带有浓郁的烟熏味，然后取出放在厨房纸上沥油。',
        '在一个大碗中，将4个鸡蛋、200毫升浓奶油和一小撮新鲜磨碎的肉豆蔻搅拌均匀，直到混合物顺滑，奶油味浓郁，香料味微妙。',
        '用少许盐和几下黑胡椒调味蛋液，然后拌入100克磨碎的格鲁耶尔奶酪，直到奶酪完全融入，混合物顺滑浓稠，带有浓郁的坚果味。',
        '组装乳蛋饼时，将煮熟的培根丁和磨碎的格鲁耶尔奶酪均匀地撒在烤好的酥皮壳底部，然后将蛋液倒入，确保填满整个挞壳。',
        '最后，将乳蛋饼放入预热好的烤箱中烘烤30-35分钟，或直到边缘呈金黄色并定型，中心略微晃动，口感细腻，味道浓郁。'
      ]
    },
    ms: {
      title: 'Quiche Lorraine',
      description: 'Resipi asli dari Lorraine, Perancis',
      ingredients: [
        { item: 'Pastri rapuh', amount: '' },
        { item: 'Lardon bacon', amount: '200g' },
        { item: 'Telur', amount: '4 biji' },
        { item: 'Krim', amount: '200ml' },
        { item: 'Keju Gruyère', amount: '' },
        { item: 'Buah pala', amount: '' }
      ],
      instructions: [
        'Mula-mula, panaskan ketuhar hingga 180°C (350°F) dan sediakan pastri rapuh dengan menggulungnya hingga ketebalan kira-kira 3mm, kemudian letakkan dengan berhati-hati ke dalam acuan tart 24cm, pastikan pastri tersebar rata dan tepinya dipotong kemas.',
        'Seterusnya, bakar pastri kosong dengan melapiknya dengan kertas parchment dan mengisi dengan kacang bakar, kemudian bakar selama 15 minit, atau sehingga pastri berwarna perang keemasan muda dan set, sebelum mengeluarkan kertas parchment dan kacang bakar.',
        'Semasa pastri dibakar, masak 200g lardon bacon dalam kuali panas di atas api sederhana, kacau sekali-sekala, sehingga ia rangup dan perang keemasan, dengan kerangupan yang memuaskan dan rasa berasap yang mendalam, kemudian ketepikan untuk ditoskan di atas tuala kertas.',
        'Dalam mangkuk adunan besar, pukul 4 biji telur, 200ml krim pekat, dan secubit buah pala yang baru diparut, sehingga adunan licin dan sebati, dengan keseimbangan kepekatan krim yang halus dan rempah yang lembut.',
        'Perasakan adunan telur dengan sedikit garam dan beberapa kisaran lada hitam, kemudian masukkan 100g keju Gruyère yang diparut, sehingga keju sebati sepenuhnya dan adunan licin dan berkrim, dengan rasa kekacang yang mendalam.',
        'Untuk memasang quiche, taburkan lardon bacon yang telah dimasak dan keju Gruyère yang diparut secara rata di bahagian bawah pastri yang telah dibakar, kemudian tuangkan adunan telur di atasnya, pastikan untuk mengisi acuan hingga penuh.',
        'Akhir sekali, bakar quiche dalam ketuhar yang telah dipanaskan selama 30-35 minit, atau sehingga tepinya berwarna perang keemasan dan set, dan bahagian tengahnya sedikit bergoyang, dengan tekstur berkrim yang halus dan rasa savuri yang kaya.'
      ]
    }
  },
  'fr-10': {
    'zh-CN': {
      title: '橙味薄饼',
      description: '源自法国巴黎的传统食谱',
      ingredients: [
        { item: '薄饼面糊', amount: '' },
        { item: '橙汁', amount: '' },
        { item: '橙皮屑', amount: '' },
        { item: '君度力娇酒', amount: '' },
        { item: '黄油', amount: '' },
        { item: '糖', amount: '' }
      ],
      instructions: [
        '首先，在一个中等大小的碗中，将1 1/2杯通用面粉、2 1/2茶匙糖和一小撮盐搅拌均匀，制成薄饼面糊，然后逐渐加入2个大鸡蛋、1 1/2杯全脂牛奶和2汤匙融化的无盐黄油，搅拌至顺滑无块。',
        '接下来，用中火加热一个小型不粘锅或薄饼锅，刷上一层薄薄的融化黄油，然后倒入约2汤匙薄饼面糊，倾斜锅子使面糊均匀覆盖底部，煮至底部呈金黄色且顶部干燥，约1-2分钟。',
        '用抹刀松开薄饼并翻面，再煮30秒至1分钟，直到另一面也呈浅棕色，然后重复此过程，直到所有面糊用完，大约可制作8-10个薄饼。',
        '准备酱汁时，在一个大煎锅中用中火混合2汤匙无盐黄油和1汤匙砂糖，搅拌至糖溶解，黄油融化，然后加入2汤匙鲜榨橙汁和一个橙子的橙皮屑，偶尔搅拌，煮至酱汁略微焦糖化并散发香气。',
        '将每个薄饼折叠成四分之一，小心地放入装有酱汁的煎锅中，轻轻翻动薄饼，使其两面都沾上酱汁，注意不要撕破脆弱的薄饼。',
        '一旦所有薄饼都沾上酱汁，倒入2汤匙君度力娇酒，小心地用火柴或打火机点燃酱汁，让火焰烹煮力娇酒并使糖焦糖化，约30秒至1分钟。',
        '最后，立即趁热上桌，可根据喜好撒上糖粉和一片橙子作为装饰，注意安全操作热煎锅和薄饼。'
      ]
    },
    ms: {
      title: 'Crepes Suzette',
      description: 'Resipi asli dari Paris, Perancis',
      ingredients: [
        { item: 'Adunan krep nipis', amount: '' },
        { item: 'Jus oren', amount: '' },
        { item: 'Zest oren', amount: '' },
        { item: 'Grand Marnier', amount: '' },
        { item: 'Mentega', amount: '' },
        { item: 'Gula', amount: '' }
      ],
      instructions: [
        'Pertama, dalam mangkuk bersaiz sederhana, pukul 1 1/2 cawan tepung serbaguna, 2 1/2 sudu teh gula, dan secubit garam untuk membuat adunan krep, kemudian secara beransur-ansur masukkan 2 biji telur besar, 1 1/2 cawan susu penuh krim, dan 2 sudu besar mentega tanpa garam yang dicairkan, pukul sehingga licin dan bebas ketulan.',
        'Seterusnya, panaskan kuali tidak melekat kecil atau kuali krep di atas api sederhana, sapu dengan lapisan nipis mentega cair, dan tuangkan kira-kira 2 sudu besar adunan krep ke dalam kuali, condongkan kuali untuk menyalut bahagian bawah secara rata dengan lapisan nipis adunan, masak sehingga bahagian bawah berwarna perang keemasan dan bahagian atas kering, kira-kira 1-2 minit.',
        'Longgarkan krep dengan spatula dan terbalikkan, masak selama 30 saat hingga 1 minit tambahan, sehingga bahagian lain berwarna perang muda, kemudian ulangi proses sehingga semua adunan habis digunakan, menghasilkan kira-kira 8-10 krep nipis.',
        'Untuk menyediakan sos, gabungkan 2 sudu besar mentega tanpa garam dan 1 sudu besar gula pasir dalam kuali besar di atas api sederhana, kacau sehingga gula larut dan mentega cair, kemudian masukkan 2 sudu besar jus oren yang baru diperah dan zest dari sebiji oren, masak sehingga sos sedikit berkaramel dan wangi, kacau sekali-sekala.',
        'Lipat setiap krep menjadi empat dan letakkan dengan berhati-hati ke dalam kuali dengan sos, salut kedua-dua belah krep dengan sos dengan membalikkannya perlahan-lahan, berhati-hati agar tidak merobek krep yang halus.',
        'Setelah semua krep disalut sos, tuangkan 2 sudu besar minuman keras Grand Marnier ke atas krep, nyalakan sos dengan berhati-hati menggunakan mancis atau pemetik api, biarkan api memasak minuman keras dan mengkaramelkan gula, kira-kira 30 saat hingga 1 minit.',
        'Akhir sekali, hidangkan Crepes Suzette dengan segera, semasa masih panas dan dibakar, dihiasi dengan taburan gula aising dan hirisan oren, jika dikehendaki, berhati-hati mengendalikan kuali panas dan krep dengan selamat.'
      ]
    }
  },
  'us-01': {
    'zh-CN': {
      title: '牛肉汉堡',
      description: '源自美国纽约的传统食谱',
      ingredients: [
        { item: '牛肉馅 (80/20)', amount: '500克' },
        { item: '布里欧修面包', amount: '' },
        { item: '切达奶酪', amount: '' },
        { item: '生菜', amount: '' },
        { item: '番茄', amount: '' },
        { item: '洋葱', amount: '' },
        { item: '腌黄瓜', amount: '' },
        { item: '特制酱汁', amount: '' }
      ],
      instructions: [
        '将牛肉松散地制成140克肉饼，慷慨调味。在中心稍微按压一个凹痕。',
        '在非常热的铸铁锅中每面煎3分钟。加入奶酪，盖上盖子使其融化。',
        '烤面包。组装：酱汁、生菜、番茄、洋葱、肉饼、腌黄瓜。立即上桌。'
      ]
    },
    ms: {
      title: 'Burger Daging Lembu',
      description: 'Resipi asli dari New York, Amerika Syarikat',
      ingredients: [
        { item: 'Daging lembu cincang (80/20)', amount: '500g' },
        { item: 'Roti brioche', amount: '' },
        { item: 'Keju Cheddar', amount: '' },
        { item: 'Salad', amount: '' },
        { item: 'Tomato', amount: '' },
        { item: 'Bawang', amount: '' },
        { item: 'Acar timun', amount: '' },
        { item: 'Sos istimewa', amount: '' }
      ],
      instructions: [
        'Bentukkan daging lembu menjadi patty longgar seberat 140g, perasakan dengan banyak. Buat lekukan kecil di tengah.',
        'Masak di atas kuali besi tuang yang sangat panas selama 3 minit setiap sisi. Tambah keju, cairkan di bawah penutup.',
        'Bakar roti. Susun: sos, salad, tomato, bawang, patty, acar timun. Hidangkan segera.'
      ]
    }
  },
  'us-02': {
    'zh-CN': {
      title: '烧烤排骨',
      description: '源自美国堪萨斯城的传统食谱',
      ingredients: [
        { item: '猪排骨', amount: '' },
        { item: '烧烤干腌料 (红椒粉、红糖、孜然、大蒜)', amount: '' },
        { item: '烧烤酱', amount: '' },
        { item: '苹果醋', amount: '' },
        { item: '木屑', amount: '' }
      ],
      instructions: [
        '首先，选择优质猪排骨，最好是圣路易斯式猪排或小排骨，小心地从排骨背面去除薄膜，以确保烹饪时肉质鲜嫩均匀，可使用厨房纸巾抓住薄膜以便轻松撕下。',
        '在一个小碗中，混合烧烤干腌料的成分，包括烟熏红椒粉、红糖、孜然粉和大蒜粉，搅拌均匀，然后将干腌料慷慨地涂抹在排骨的两面，确保均匀覆盖，让排骨在室温下静置1小时，让调味料渗透到肉中。',
        '将烟熏炉预热至120°C的低温，使用山核桃木或苹果木屑产生浓郁复杂的烟熏风味，一旦烟熏炉准备就绪，将排骨骨头朝下放入烟熏炉中，盖上盖子，开始低温慢煮过程。',
        '烹饪排骨4小时，或直到内部温度达到90°C，每30分钟用苹果醋刷一次，以保持肉质湿润并增加浓郁风味，为了增强嫩化过程，在烹饪2小时后用锡纸包裹排骨，以锁住热量和蒸汽。',
        '烹饪4小时后，将排骨从烟熏炉中取出，准备烧烤酱釉，将酱汁放入平底锅中，用小火加热，偶尔搅拌，直到达到浓稠的糖浆状，颜色深沉，香甜浓郁。',
        '使用刷子将烧烤酱釉均匀地涂抹在排骨的两面，确保彻底覆盖，然后将排骨放在预热好的高温烤架上，每面烤10分钟，或直到酱汁焦糖化并变得粘稠，带有漂亮的焦痕和深红棕色。',
        '排骨上釉并烤焦后，将其从烤架上取下，静置10分钟，让汁液重新分布，然后切成单独的份量，立即上桌，用新鲜香草（如欧芹或香菜）装饰，并搭配凉拌卷心菜或烤蔬菜。'
      ]
    },
    ms: {
      title: 'Rusuk BBQ',
      description: 'Resipi asli dari Kansas City, Amerika Syarikat',
      ingredients: [
        { item: 'Rak rusuk babi', amount: '' },
        { item: 'Perapan kering BBQ (paprika, gula perang, jintan manis, bawang putih)', amount: '' },
        { item: 'Sos BBQ', amount: '' },
        { item: 'Cuka epal', amount: '' },
        { item: 'Cip kayu', amount: '' }
      ],
      instructions: [
        'Mulakan dengan memilih rak rusuk babi premium, sebaik-baiknya dari rusuk babi gaya St. Louis atau rusuk belakang bayi, dan buang membran dari belakang rusuk dengan berhati-hati untuk memastikan masakan yang lembut dan sekata, menggunakan tuala kertas untuk memegang membran agar mudah ditarik.',
        'Dalam mangkuk kecil, gabungkan bahan-bahan perapan kering BBQ, termasuk paprika salai, gula perang, serbuk jintan manis, dan serbuk bawang putih, dan gaul sehingga sebati, kemudian sapukan perapan kering dengan banyak ke kedua-dua belah rusuk, pastikan untuk menyalutnya secara rata, dan biarkan rusuk berehat pada suhu bilik selama 1 jam untuk membolehkan perasa meresap ke dalam daging.',
        'Panaskan perokok ke suhu rendah 120°C, menggunakan cip kayu seperti hickory atau epal untuk menghasilkan rasa asap yang kaya dan kompleks, dan setelah perokok siap, letakkan rusuk di dalam perokok, tulang di bawah, dan tutup penutup untuk memulakan proses memasak perlahan dan lama.',
        'Masak rusuk selama 4 jam, atau sehingga mencapai suhu dalaman 90°C, sapu dengan cuka epal setiap 30 minit untuk memastikan daging lembap dan menambah rasa masam, dan untuk meningkatkan proses pelembutan, balut rusuk dalam kerajang selepas 2 jam memasak untuk memerangkap haba dan wap.',
        'Selepas 4 jam memasak, keluarkan rusuk dari perokok dan sediakan sos BBQ dengan memanaskan sos dalam periuk di atas api kecil, kacau sekali-sekala, sehingga mencapai konsistensi pekat dan bersirap, dengan warna yang dalam dan kaya serta aroma manis dan masam.',
        'Menggunakan berus, sapukan sos BBQ secara rata ke kedua-dua belah rusuk, pastikan untuk menyalutnya dengan teliti, kemudian letakkan rusuk di atas gril yang telah dipanaskan pada api tinggi, dan bakar selama 10 minit setiap sisi, atau sehingga sos berkaramel dan melekit, dengan sedikit hangus dan warna perang kemerahan yang dalam.',
        'Setelah rusuk disalut dan dibakar, keluarkannya dari gril dan biarkan ia berehat selama 10 minit untuk membolehkan jus diedarkan semula, kemudian potong menjadi bahagian individu dan hidangkan segera, dihiasi dengan herba segar, seperti pasli atau ketumbar, dan diiringi dengan coleslaw atau sayur-sayuran panggang.'
      ]
    }
  },
  'us-03': {
    'zh-CN': {
      title: '蛤蜊浓汤',
      description: '源自美国波士顿的传统食谱',
      ingredients: [
        { item: '蛤蜊', amount: '400克' },
        { item: '土豆', amount: '3个' },
        { item: '洋葱', amount: '1个' },
        { item: '培根条', amount: '3条' },
        { item: '奶油', amount: '200毫升' },
        { item: '鱼汤', amount: '' },
        { item: '百里香', amount: '' }
      ],
      instructions: [
        '首先，用中火加热一个厚底煎锅，加入3条培根，培根会发出滋滋声并散发出咸香，烹饪至金黄色酥脆，大约5-7分钟。',
        '接下来，将煮熟的培根从煎锅中取出，放在铺有厨房纸巾的盘子上沥干多余的油脂，然后小心地倒掉除了2汤匙以外的所有培根油，留下浓郁的油渣，这将作为炒洋葱的基础。',
        '将1个切成薄片的洋葱加入煎锅中，偶尔搅拌，使其变软并呈半透明状，辛辣味减弱，转变为甜美的焦糖风味，大约8-10分钟，呈现深金棕色并略带脆感。',
        '现在，将3个去皮切丁的土豆加入煎锅中，搅拌与洋葱和培根油混合，然后倒入足够的鱼汤覆盖土豆，将混合物煮至微沸，让其在不搅动的情况下烹煮，直到土豆用叉子刺穿时变软，大约15-20分钟。',
        '在土豆烹饪的同时，准备蛤蜊，用冷水冲洗400克新鲜去壳的蛤蜊，检查是否有破损的壳或沙子，然后将其放在一边，稍后加入浓汤中，注意不要煮沸蛤蜊，这会使它们变韧。',
        '一旦土豆变软，将煮熟的蛤蜊加入煎锅中，轻轻搅拌混合，然后加入预留的酥脆培根，掰成小块，这将为菜肴增添令人满意的口感。',
        '最后，拌入200毫升浓奶油，这将使浓汤呈现奢华、柔滑的质地，然后用新鲜切碎的百里香和几下黑胡椒调味，品尝并根据需要调整，最后趁热上桌，用少许百里香和一小份牡蛎饼干装饰。'
      ]
    },
    ms: {
      title: 'Sup Krim Kerang',
      description: 'Resipi asli dari Boston, Amerika Syarikat',
      ingredients: [
        { item: 'Kerang', amount: '400g' },
        { item: 'Kentang', amount: '3 biji' },
        { item: 'Bawang', amount: '1 biji' },
        { item: 'Jalur bacon', amount: '3 jalur' },
        { item: 'Krim', amount: '200ml' },
        { item: 'Stok ikan', amount: '' },
        { item: 'Thyme', amount: '' }
      ],
      instructions: [
        'Pertama, panaskan kuali dasar tebal di atas api sederhana, masukkan 3 jalur bacon, yang akan berdesir dan mengeluarkan aroma savuri, masak sehingga mencapai kerangupan perang keemasan, kira-kira 5-7 minit.',
        'Seterusnya, keluarkan bacon yang telah dimasak dari kuali, ketepikan di atas pinggan yang dilapisi tuala kertas untuk menapis lebihan minyak, kemudian tuangkan dengan berhati-hati semua kecuali 2 sudu besar lemak bacon yang telah cair, meninggalkan sisa yang kaya dan lembut yang akan menjadi asas untuk bawang tumis.',
        'Masukkan 1 biji bawang yang dihiris nipis ke dalam kuali, kacau sekali-sekala, sehingga ia lembut dan menjadi lutsinar, rasa pedasnya melembut menjadi rasa manis dan berkaramel, kira-kira 8-10 minit, dengan warna perang keemasan yang dalam dan sedikit kerangupan.',
        'Sekarang, masukkan 3 biji kentang yang telah dikupas dan dipotong dadu ke dalam kuali, kacau untuk digabungkan dengan bawang dan lemak bacon, kemudian tuangkan stok ikan secukupnya untuk menutupi kentang, didihkan perlahan, di mana ia harus dimasak, tanpa diganggu, sehingga kentang lembut apabila dicucuk dengan garpu, kira-kira 15-20 minit.',
        'Semasa kentang dimasak, sediakan kerang dengan membilas 400g kerang yang baru dikupas di bawah air sejuk yang mengalir, periksa sebarang cengkerang yang pecah atau pasir, kemudian ketepikan, menunggu untuk menambahkannya ke dalam sup nanti, berhati-hati agar tidak merebus kerang, yang akan menjadikannya liat.',
        'Setelah kentang lembut, masukkan kerang yang telah dimasak ke dalam kuali, kacau perlahan untuk digabungkan, diikuti dengan bacon rangup yang telah diketepikan, dihancurkan menjadi kepingan kecil, yang akan menambah elemen tekstur yang memuaskan kepada hidangan.',
        'Akhir sekali, masukkan 200ml krim pekat, yang akan memperkaya sup dengan tekstur mewah dan lembut, kemudian perasakan dengan thyme yang baru dicincang dan beberapa kisaran lada hitam, rasa dan sesuaikan mengikut keperluan, sebelum menghidangkan sup krim kerang panas, dihiasi dengan taburan thyme dan hidangan sampingan keropok tiram.'
      ]
    }
  },
  'us-04': {
    'zh-CN': {
      title: '煎饼',
      description: '源自美国纽约的正宗食谱',
      ingredients: [
        { item: '面粉', amount: '2 杯' },
        { item: '白脱牛奶', amount: '2 杯' },
        { item: '鸡蛋', amount: '2 个' },
        { item: '糖', amount: '2 汤匙' },
        { item: '泡打粉', amount: '' },
        { item: '黄油', amount: '' },
        { item: '枫糖浆', amount: '' }
      ],
      instructions: [
        '首先，在一个大的不锈钢碗中，将2杯高蛋白未漂白通用面粉、2汤匙砂糖和2茶匙泡打粉搅拌均匀，注意混入空气并确保膨松剂均匀分布。',
        '在一个单独的、冰镇过的碗中，将2杯冰冷的白脱牛奶和2个农场新鲜的大鸡蛋搅拌均匀，直到混合物光滑、呈奶油状，没有可见的蛋液条纹。',
        '将湿性食材轻轻倒入干性食材中，用柔软的橡胶刮刀将混合物折叠搅拌，注意不要过度搅拌，当面糊仍保留一些理想的块状时停止。',
        '接下来，用中火加热一个中等大小的不粘锅或煎盘，加入一小块优质咸黄油，使其融化、起泡并略微变棕，直到煎锅均匀涂上一层金黄色的坚果光泽。',
        '用1/4杯量杯将煎饼面糊舀到预热的煎锅上，煮2-3分钟，直到表面出现气泡，边缘开始变干，底部呈金黄色，带有精致的焦糖脆皮。',
        '用耐热的抹刀松开煎饼，翻面，再煮1-2分钟，直到另一面也呈金黄色，煎饼完全煮熟，但内部仍保持柔软蓬松。',
        '将煮好的煎饼高高叠放在一个温暖的装饰盘上，立即上桌，配上大量奶油状的咸黄油和一小勺纯A级枫糖浆，让温暖粘稠的液体渗入煎饼，散发出甜美诱人的香气。'
      ]
    },
    ms: {
      title: 'Panekuk',
      description: 'Resipi asli dari New York, Amerika Syarikat',
      ingredients: [
        { item: 'Tepung', amount: '2 cawan' },
        { item: 'Susu mentega', amount: '2 cawan' },
        { item: 'Telur', amount: '2 biji' },
        { item: 'Gula', amount: '2 sudu besar' },
        { item: 'Serbuk penaik', amount: '' },
        { item: 'Mentega', amount: '' },
        { item: 'Sirap mapel', amount: '' }
      ],
      instructions: [
        'Pertama, dalam mangkuk keluli tahan karat yang besar, pukul bersama 2 cawan tepung serbaguna tinggi protein tanpa peluntur, 2 sudu besar gula pasir, dan 2 sudu teh serbuk penaik, berhati-hati untuk memasukkan udara dan memastikan agen penaik tersebar rata.',
        'Dalam mangkuk berasingan yang sejuk, pukul bersama 2 cawan susu mentega sejuk beku, dan 2 biji telur segar ladang yang besar, sehingga campuran licin, berkrim, dan bebas daripada sebarang jalur telur yang kelihatan.',
        'Tuangkan bahan basah perlahan-lahan ke dalam bahan kering, dan menggunakan spatula getah lembut, lipat campuran bersama, berhati-hati agar tidak terlebih gaul, dan berhenti apabila adunan masih mengekalkan beberapa ketulan yang diingini.',
        'Seterusnya, panaskan kuali atau griddle sederhana, tidak melekat di atas api sederhana, dan masukkan sedikit mentega masin berkualiti tinggi, biarkan ia cair, berbuih, dan sedikit keperangan, sehingga kuali disalut rata dengan kilauan keemasan, kekacang.',
        'Menggunakan cawan penyukat 1/4 cawan, cedok adunan panekuk ke atas kuali yang telah dipanaskan, dan masak selama 2-3 minit, sehingga buih muncul di permukaan, tepi mula kering, dan bahagian bawah berwarna perang keemasan, dengan kerak karamel yang halus.',
        'Longgarkan panekuk dengan spatula offset tahan panas, dan terbalikkan, masak selama 1-2 minit lagi, sehingga bahagian lain juga berwarna keemasan, dan panekuk masak sepenuhnya, namun masih mengekalkan bahagian dalam yang lembut dan gebu.',
        'Susun panekuk yang telah dimasak tinggi di atas pinggan hiasan yang hangat, dan hidangkan segera, dengan sedikit mentega masin berkrim, dan titisan sirap mapel tulen Gred-A, membiarkan cecair hangat dan melekit meresap ke dalam panekuk, dan mengeluarkan aroma manis yang memanjakan.'
      ]
    }
  },
  'us-05': {
    'zh-CN': {
      title: '奶酪通心粉',
      description: '源自美国芝加哥的正宗食谱',
      ingredients: [
        { item: '通心粉', amount: '300克' },
        { item: '黄油', amount: '50克' },
        { item: '面粉', amount: '3 汤匙' },
        { item: '牛奶', amount: '500毫升' },
        { item: '车达奶酪', amount: '200克' },
        { item: '盐', amount: '' },
        { item: '红椒粉', amount: '' }
      ],
      instructions: [
        '首先，将一大锅加了大量盐的水烧开，然后小心地加入300克通心粉，轻轻搅拌以防止意面粘连，煮至有嚼劲（al dente），大约需要8-10分钟，或者直到意面中心仍保留轻微的硬度。',
        '在意面煮熟的同时，准备面糊：在中等大小的平底锅中用中火融化50克无盐黄油，偶尔搅拌，直到黄油完全融化并开始起泡，然后加入3汤匙通用面粉，持续搅拌以防止结块，煮1-2分钟，或者直到混合物变成浅金黄色并散发出坚果香气。',
        '逐渐倒入500毫升全脂牛奶，不断搅拌以防止酱汁结块，将混合物煮至微沸，煮5-7分钟，或者直到酱汁变稠并能挂在勺子背面，偶尔搅拌以防止酱汁粘锅底。',
        '将酱汁从火上移开，加入200克磨碎的车达奶酪搅拌，直到完全融化，酱汁变得光滑奶油状，然后撒一小撮盐和少许红椒粉调味，为菜肴增添深度和微妙的烟熏味。',
        '将煮好的意面沥干，加入奶酪酱中，搅拌直到意面均匀裹上酱汁，然后品尝并根据需要调整调味料，根据口味添加更多的盐、红椒粉或奶酪。',
        '将奶酪通心粉转移到涂有黄油的烤盘中，上面铺一层酥脆的面包屑，放入预热至190°C的烤箱中烘烤20-25分钟，或者直到顶部呈金黄色，酱汁冒泡，顶部形成酥脆的焦糖外壳。',
        '将菜肴从烤箱中取出，冷却几分钟后再食用，让奶酪凝固，味道融合，最终得到一份奶油状、奶酪味浓郁、令人无比满足的奶酪通心粉，并带有面包屑带来的令人愉悦的酥脆感。'
      ]
    },
    ms: {
      title: 'Makaroni dan Keju',
      description: 'Resipi asli dari Chicago, Amerika Syarikat',
      ingredients: [
        { item: 'Makaroni siku', amount: '300g' },
        { item: 'Mentega', amount: '50g' },
        { item: 'Tepung', amount: '3 sudu besar' },
        { item: 'Susu', amount: '500ml' },
        { item: 'Keju cheddar', amount: '200g' },
        { item: 'Garam', amount: '' },
        { item: 'Paprika', amount: '' }
      ],
      instructions: [
        'Mulakan dengan mendidihkan sepanci besar air yang banyak garam, kemudian masukkan 300g makaroni siku dengan berhati-hati, kacau perlahan-lahan untuk mengelakkan pasta melekat, dan masak sehingga al dente, yang sepatutnya mengambil masa kira-kira 8-10 minit, atau sehingga pasta masih mengekalkan sedikit kekerasan di tengah.',
        'Semasa pasta dimasak, sediakan roux dengan mencairkan 50g mentega tanpa garam dalam periuk sederhana di atas api sederhana, kacau sekali-sekala, sehingga mentega cair sepenuhnya dan mula berbuih, kemudian masukkan 3 sudu besar tepung serbaguna, pukul berterusan untuk mengelakkan ketulan terbentuk, dan masak selama 1-2 minit, atau sehingga campuran bertukar menjadi perang keemasan muda dan mempunyai aroma kekacang.',
        'Tuangkan 500ml susu penuh secara beransur-ansur, pukul sentiasa untuk mengelakkan sos daripada berketul, dan didihkan campuran, masak selama 5-7 minit, atau sehingga sos pekat dan menyaluti belakang sudu, kacau sekali-sekala untuk mengelakkan sos melekat pada dasar periuk.',
        'Angkat sos dari api dan masukkan 200g keju cheddar parut sehingga cair sepenuhnya dan sos licin serta berkrim, kemudian perasakan dengan secubit garam dan sedikit paprika, menambah kedalaman dan rasa berasap yang halus pada hidangan.',
        'Toskan pasta yang telah dimasak dan masukkan ke dalam sos keju, kacau sehingga pasta disalut rata, kemudian rasa dan sesuaikan perasa mengikut keperluan, tambah lebih banyak garam, paprika, atau keju mengikut rasa.',
        'Pindahkan makaroni dan keju ke dalam hidangan pembakar yang telah disapu mentega, lapiskan dengan serbuk roti rangup, dan bakar dalam ketuhar yang telah dipanaskan pada suhu 190°C selama 20-25 minit, atau sehingga bahagian atas berwarna perang keemasan dan sos berbuih, dengan kerak karamel rangup terbentuk di atas.',
        'Angkat hidangan dari ketuhar dan biarkan sejuk selama beberapa minit sebelum dihidangkan, membiarkan keju mengeras dan rasa sebati, menghasilkan hidangan makaroni dan keju yang berkrim, berkeju, dan sangat menyelerakan dengan kerangupan yang memuaskan dari serbuk roti.'
      ]
    }
  },
  'us-06': {
    'zh-CN': {
      title: '纽约芝士蛋糕',
      description: '源自美国纽约的正宗食谱',
      ingredients: [
        { item: '奶油奶酪', amount: '750克' },
        { item: '鸡蛋', amount: '3 个' },
        { item: '糖', amount: '200克' },
        { item: '酸奶油', amount: '200毫升' },
        { item: '香草精', amount: '' },
        { item: '全麦饼干底', amount: '' }
      ],
      instructions: [
        '首先准备全麦饼干底：在一个中等大小的碗中，将250克磨碎的全麦饼干碎、100克砂糖和6克犹太盐混合。搅拌均匀，然后加入120克融化的无盐黄油，搅拌直到饼干碎均匀湿润，混合物看起来像湿沙。',
        '接下来，将饼干底混合物压入一个23厘米弹簧扣模的底部和侧面，使用量杯的平底或手指确保厚度均匀，约6毫米。将饼干底放入冰箱冷冻至少10分钟以使其凝固。',
        '现在，将烤箱预热至160°C并准备芝士蛋糕面糊：在装有桨状搅拌器的立式搅拌机碗中，将750克软化的奶油奶酪和200克砂糖搅打至光滑奶油状，根据需要刮下碗壁，大约3分钟。',
        '在中速搅拌下，一次加入3个大鸡蛋，每次加入后充分搅打，并根据需要刮下碗壁，直到混合物光滑无块。',
        '将200毫升酸奶油和1茶匙纯香草精加入芝士蛋糕面糊中，低速搅打至刚刚混合均匀，注意不要过度搅拌。',
        '将芝士蛋糕面糊倒入准备好的饼干底上，用刮刀抹平顶部以形成均匀的层。',
        '将弹簧扣模放入一个大的烤盘中，加入足够的热水，使其达到弹簧扣模侧面的一半高度。烘烤1小时，或者直到边缘凝固，中心略微晃动，然后关掉烤箱，让芝士蛋糕在烤箱中门半开冷却1小时。',
        '最后，将芝士蛋糕从水浴中取出，放在冷却架上冷却至室温，然后盖好冷藏过夜，或至少8小时，让芝士蛋糕凝固，风味成熟。'
      ]
    },
    ms: {
      title: 'Kek Keju New York',
      description: 'Resipi asli dari New York, Amerika Syarikat',
      ingredients: [
        { item: 'Keju krim', amount: '750g' },
        { item: 'Telur', amount: '3 biji' },
        { item: 'Gula', amount: '200g' },
        { item: 'Krim masam', amount: '200ml' },
        { item: 'Vanila', amount: '' },
        { item: 'Kerak biskut Graham', amount: '' }
      ],
      instructions: [
        'Mulakan dengan menyediakan kerak biskut Graham: dalam mangkuk sederhana, gabungkan 250g serbuk biskut Graham yang dikisar halus dengan 100g gula pasir dan 6g garam kosher. Kacau sehingga sebati, kemudian masukkan 120g mentega tanpa garam yang telah dicairkan, dan gaul sehingga serbuk biskut lembap sekata dan campuran menyerupai pasir basah.',
        'Seterusnya, tekan campuran kerak biskut ke dasar dan sisi loyang springform 23cm, menggunakan dasar rata cawan penyukat atau jari anda untuk memastikan lapisan yang sekata, kira-kira 6mm tebal. Sejukkan kerak dalam peti sejuk beku selama sekurang-kurangnya 10 minit untuk mengeras.',
        'Sekarang, panaskan ketuhar hingga 160°C dan sediakan adunan kek keju: dalam mangkuk pengadun berdiri yang dilengkapi dengan lampiran dayung, pukul 750g keju krim yang telah dilembutkan dengan 200g gula pasir sehingga licin dan berkrim, kikis sisi mangkuk mengikut keperluan, kira-kira 3 minit.',
        'Dengan pengadun pada kelajuan sederhana, masukkan 3 biji telur besar, satu demi satu, pukul dengan baik selepas setiap penambahan dan kikis sisi mangkuk mengikut keperluan, sehingga campuran licin dan bebas ketulan.',
        'Masukkan 200ml krim masam dan 1 sudu teh ekstrak vanila tulen ke dalam adunan kek keju, pukul pada kelajuan rendah sehingga sebati, berhati-hati agar tidak terlebih gaul.',
        'Tuangkan adunan kek keju ke atas kerak yang telah disediakan, ratakan bahagian atas dengan spatula untuk menghasilkan lapisan yang sekata.',
        'Letakkan loyang springform dalam loyang pembakar besar dan masukkan air panas yang cukup sehingga separuh ketinggian sisi loyang springform. Bakar selama 1 jam, atau sehingga tepi mengeras dan bahagian tengah hanya sedikit bergoyang, kemudian matikan ketuhar dan biarkan kek keju sejuk dalam ketuhar dengan pintu sedikit terbuka selama 1 jam.',
        'Akhir sekali, keluarkan kek keju dari rendaman air dan biarkan sejuk pada suhu bilik di atas rak dawai, kemudian tutup dan sejukkan semalaman, atau sekurang-kurangnya 8 jam, untuk membiarkan kek keju mengeras dan rasa matang.'
      ]
    }
  },
  'us-07': {
    'zh-CN': {
      title: '布法罗鸡翅',
      description: '源自美国布法罗的正宗食谱',
      ingredients: [
        { item: '鸡翅', amount: '1公斤' },
        { item: '黄油', amount: '60克' },
        { item: '辣酱 (法兰克辣酱)', amount: '' },
        { item: '蒜粉', amount: '' },
        { item: '蓝纹奶酪蘸酱', amount: '' }
      ],
      instructions: [
        '首先，将烤箱预热至220°C，然后仔细用冷水冲洗1公斤鸡翅，用厨房纸巾拍干以去除多余水分，并撒一小撮盐以增强禽肉的天然风味。',
        '接下来，在烤盘上铺一层铝箔纸，淋上薄薄一层油，然后将鸡翅单层排列，每个鸡翅之间留有小间隙，以利于均匀烹饪和上色。',
        '轻轻翻动鸡翅，使其均匀裹上油，然后烘烤20分钟，或者直到它们呈现浅金黄色并开始变脆，然后翻面以实现均匀烹饪和上色。',
        '继续烘烤鸡翅20-25分钟，或者直到它们呈金黄色且酥脆，外皮酥脆，内部多汁，然后从烤箱中取出。',
        '在鸡翅烘烤的同时，在一个平底锅中用小火融化60克无盐黄油，偶尔搅拌，直到它达到光滑奶油状的稠度，然后慢慢倒入辣酱，如Frank\'s RedHot，持续搅拌以乳化酱汁，形成浓郁柔滑的质地。',
        '鸡翅烤好后，立即将其放入黄油和辣酱混合物中搅拌，确保每个鸡翅都完全裹上辛辣浓郁的酱汁，并撒一小撮蒜粉以增加微妙的深度风味。',
        '上菜时，将布法罗鸡翅小心地摆放在盘子或单独的碟子上，用脆嫩的新鲜西芹条和一份奶油状的蓝纹奶酪蘸酱装饰，蓝纹奶酪蘸酱为鸡翅的辛辣咸香风味提供了清爽的对比。',
        '最后，用新鲜香草（如欧芹或细香葱）装饰盘子，并立即上桌，让每位客人尽情享受布法罗鸡翅多汁、辛辣、咸香的风味，搭配西芹的清爽脆感和蓝纹奶酪酱的浓郁。'
      ]
    },
    ms: {
      title: 'Kepak Ayam Buffalo',
      description: 'Resipi asli dari Buffalo, Amerika Syarikat',
      ingredients: [
        { item: 'Kepak ayam', amount: '1kg' },
        { item: 'Mentega', amount: '60g' },
        { item: 'Sos pedas (Franks)', amount: '' },
        { item: 'Serbuk bawang putih', amount: '' },
        { item: 'Sos pencicah keju biru', amount: '' }
      ],
      instructions: [
        'Pertama, panaskan ketuhar hingga 220°C, kemudian bilas 1kg kepak ayam dengan teliti di bawah air sejuk yang mengalir, keringkan dengan tuala kertas untuk menghilangkan kelembapan berlebihan, dan perasakan dengan secubit garam untuk meningkatkan rasa asli ayam.',
        'Seterusnya, lapik loyang pembakar dengan kerajang aluminium, titiskan dengan lapisan minyak yang nipis dan sekata, dan susun kepak ayam dalam satu lapisan, meninggalkan sedikit ruang antara setiap kepak untuk memudahkan masakan dan pemerangan yang sekata.',
        'Gaulkan kepak ayam perlahan-lahan untuk menyalut minyak secara sekata, kemudian bakar selama 20 minit, atau sehingga ia menjadi perang keemasan muda dan mula rangup, sebelum membalikkannya untuk mencapai masakan dan pemerangan yang seragam.',
        'Teruskan membakar kepak ayam selama 20-25 minit lagi, atau sehingga ia berwarna perang keemasan dan rangup, dengan kerangupan yang memuaskan di luar dan bahagian dalam yang berjus, kemudian keluarkan dari ketuhar.',
        'Semasa kepak ayam dibakar, cairkan 60g mentega tanpa garam dalam periuk di atas api perlahan, pukul sekali-sekala, sehingga ia mencapai konsistensi yang licin dan berkrim, kemudian tuangkan sos pedas perlahan-lahan, seperti Frank\'s RedHot, pukul berterusan untuk mengemulsi sos dan mencipta tekstur yang kaya dan baldu.',
        'Setelah kepak ayam siap, segera gaulkan dalam campuran mentega dan sos pedas, memastikan setiap kepak disalut sepenuhnya dengan sos pedas dan masam, dan taburkan dengan secubit serbuk bawang putih untuk menambah kedalaman rasa yang halus.',
        'Untuk menghidang, susun kepak ayam buffalo dengan berhati-hati di atas pinggan atau pinggan individu, hias dengan batang saderi segar yang rangup dan sos pencicah keju biru berkrim di sisi, yang memberikan kontras yang menyejukkan kepada rasa pedas dan savuri kepak ayam.',
        'Akhir sekali, hias pinggan dengan herba segar, seperti pasli atau kucai, dan hidangkan segera, membiarkan setiap tetamu menikmati rasa kepak ayam buffalo yang berjus, pedas, dan savuri, dipadankan dengan kerangupan saderi yang menyegarkan dan kekayaan sos keju biru.'
      ]
    }
  },
  'us-08': {
    'zh-CN': {
      title: '苹果派',
      description: '源自美国新英格兰的正宗食谱',
      ingredients: [
        { item: '派皮', amount: '2 份' },
        { item: '青苹果', amount: '6 个' },
        { item: '糖', amount: '150克' },
        { item: '肉桂粉', amount: '1 茶匙' },
        { item: '肉豆蔻粉', amount: '¼ 茶匙' },
        { item: '黄油', amount: '2 汤匙' },
        { item: '蛋液', amount: '' }
      ],
      instructions: [
        '首先，将烤箱预热至190°C，确保热量分布均匀一致，这对于制作出完美的金黄色苹果派皮至关重要。',
        '接下来，小心地将第一份派皮擀至约3毫米厚，手法要轻柔以防止面团变韧，然后将派皮铺入派盘中，用力按压至角落以消除任何气泡。',
        '在一个大碗中，将切片的青苹果、150克糖、1茶匙肉桂粉和¼茶匙肉豆蔻粉混合，轻轻而彻底地搅拌，确保苹果均匀裹上干性食材，释放其天然汁液并融合风味。',
        '将苹果混合物填入派皮中，在中心稍微堆高，并在苹果顶部点缀2汤匙切成小块的无盐黄油，以利于黄油均匀融化和分布其浓郁风味。',
        '将第二份派皮擀至约3毫米厚，然后将其铺在已填充的派上，按压顶部派皮的边缘以密封派，并将其卷边形成装饰性边缘，确保密封严密以防止烘烤时馅料溢出。',
        '用锋利的刀或糕点刮刀在顶部派皮上制作几个排气孔，让蒸汽逸出并促进均匀烘烤，然后将蛋液刷在派皮上，均匀涂抹以获得光泽的金黄色表面。',
        '将派放在铺有烘焙纸的烤盘上，烘烤50分钟，或者直到派皮呈金黄色，苹果变软，馅料冒泡，在烘烤过程中将派旋转一半时间以确保均匀上色和烹饪。',
        '烘烤完成后，将派从烤箱中取出，放在冷却架上冷却至少30分钟，让馅料凝固，风味成熟，然后趁热食用，如果需要，可撒上糖粉或一小勺生奶油装饰。'
      ]
    },
    ms: {
      title: 'Pai Epal',
      description: 'Resipi asli dari New England, Amerika Syarikat',
      ingredients: [
        { item: 'Kulit pai', amount: '2 keping' },
        { item: 'Epal Granny Smith', amount: '6 biji' },
        { item: 'Gula', amount: '150g' },
        { item: 'Serbuk kayu manis', amount: '1 sudu teh' },
        { item: 'Serbuk buah pala', amount: '¼ sudu teh' },
        { item: 'Mentega', amount: '2 sudu besar' },
        { item: 'Sapuan telur', amount: '' }
      ],
      instructions: [
        'Untuk bermula, panaskan ketuhar hingga 190°C, memastikan pengagihan haba yang konsisten dan sekata, penting untuk mencapai kerak perang keemasan yang sempurna pada pai epal.',
        'Seterusnya, gulungkan kulit pai pertama dengan berhati-hati hingga ketebalan kira-kira 3mm, menggunakan sentuhan lembut untuk mengelakkan doh menjadi liat, dan lapikkan pinggan pai dengan kerak, tekan dengan kuat ke sudut untuk menghilangkan sebarang poket udara.',
        'Dalam mangkuk besar, gabungkan epal Granny Smith yang telah dihiris, 150g gula, 1 sudu teh kayu manis, dan ¼ sudu teh buah pala, gaulkan campuran perlahan-lahan tetapi menyeluruh untuk memastikan epal disalut rata dengan bahan kering, melepaskan jus semula jadi mereka dan menyatukan rasa.',
        'Isi kerak pai dengan campuran epal, timbunkan sedikit di tengah, dan taburkan 2 sudu besar mentega tanpa garam yang dipotong kecil di atas epal untuk memudahkan pencairan dan pengagihan kekayaan mentega secara sekata.',
        'Gulungkan kulit pai kedua hingga ketebalan kira-kira 3mm, dan letakkan di atas pai yang telah diisi, tekan tepi kerak atas untuk menutup pai dan kelimkannya untuk membentuk sempadan hiasan, memastikan penutup yang ketat untuk mengelakkan kebocoran inti semasa membakar.',
        'Menggunakan pisau tajam atau pengikis pastri, buat beberapa lubang di kerak atas, membenarkan wap keluar dan menggalakkan pembakaran yang sekata, kemudian sapukan sapuan telur ke atas kerak, menyalutnya secara sekata untuk mencapai kemasan perang keemasan yang berkilat.',
        'Letakkan pai di atas loyang pembakar yang dialas dengan kertas parchment dan bakar selama 50 minit, atau sehingga kerak berwarna perang keemasan, epal lembut, dan inti berbuih, putar pai separuh masa pembakaran untuk memastikan pemerangan dan masakan yang sekata.',
        'Setelah dibakar, keluarkan pai dari ketuhar dan biarkan sejuk di atas rak dawai selama sekurang-kurangnya 30 minit, membiarkan inti mengeras dan rasa matang, sebelum dihidangkan panas, dihiasi dengan taburan gula aising atau sesudu krim putar, jika dikehendaki.'
      ]
    }
  },
  'th-01': {
    'zh-CN': {
      title: '泰式炒河粉',
      description: '来自泰国曼谷的正宗食谱',
      ingredients: [
        { item: '米粉', amount: '' },
        { item: '虾或豆腐', amount: '' },
        { item: '豆芽', amount: '' },
        { item: '鸡蛋', amount: '' },
        { item: '鱼露', amount: '' },
        { item: '罗望子酱', amount: '' },
        { item: '棕榈糖', amount: '' },
        { item: '青葱', amount: '' },
        { item: '花生', amount: '' }
      ],
      instructions: [
        '首先，将1杯米粉放入一个大碗热水中浸泡，确保其完全浸没，直到变软且略微变软，但中心仍保留一丝韧性，大约5-7分钟。',
        '在一个烧得冒烟的炽热炒锅中，加入2汤匙花生油并转动以涂满整个表面，然后小心地加入1杯虾或切块豆腐，煎至金黄色并略微焦糖化，大约2-3分钟，然后将其推到炒锅的一侧。',
        '在同一个炒锅中，打入2个鸡蛋并剧烈炒散，将其打成小块，直到刚刚凝固并仍保留奶油般的湿润感，然后将其与煎好的蛋白质混合。',
        '将浸泡并沥干的米粉加入炒锅中，搅拌使其与蛋白质和鸡蛋混合物充分结合，确保其均匀裹覆并开始因余热进一步变软。',
        '在一个小碗中，将2汤匙罗望子酱、1汤匙鱼露和1汤匙棕榈糖搅拌均匀，制成光滑、柔滑的泰式炒河粉酱，然后倒入炒锅中，剧烈翻炒米粉使其均匀裹覆，让酱汁浓缩变稠，附着在米粉上，大约2分钟。',
        '将1杯脆豆芽加入炒锅中，搅拌使其与米粉混合，再煮一分钟，直到豆芽略微变软但仍保留令人满意的脆感。',
        '装盘时，将泰式炒河粉混合物转移到餐盘或单独的盘子中，撒上碎花生，挤上新鲜青柠汁，并撒上少许辣椒片，为菜肴增添柑橘和辛辣风味。',
        '用切成薄片的青葱和一片青柠装饰，为摆盘增添色彩和新鲜感，然后立即上菜，让香气和风味和谐融合。'
      ]
    },
    ms: {
      title: 'Pad Thai',
      description: 'Resipi asli dari Bangkok, Thailand',
      ingredients: [
        { item: 'Mi beras', amount: '' },
        { item: 'Udang atau tauhu', amount: '' },
        { item: 'Taugeh', amount: '' },
        { item: 'Telur', amount: '' },
        { item: 'Sos ikan', amount: '' },
        { item: 'Pes asam jawa', amount: '' },
        { item: 'Gula melaka', amount: '' },
        { item: 'Daun bawang', amount: '' },
        { item: 'Kacang tanah', amount: '' }
      ],
      instructions: [
        'Mulakan dengan merendam 1 cawan mi beras dalam mangkuk besar berisi air panas, pastikan ia terendam sepenuhnya, sehingga ia lembut dan sedikit lembik, namun masih mengekalkan sedikit kekenyalan di tengah, kira-kira 5-7 minit.',
        'Dalam kuali yang sangat panas, dipanaskan sehingga berasap, masukkan 2 sudu besar minyak kacang dan putar untuk menyaluti seluruh permukaan, kemudian masukkan 1 cawan udang atau tauhu dadu, goreng sehingga keperangan dan sedikit karamel, kira-kira 2-3 minit, sebelum menolaknya ke satu sisi kuali.',
        'Dalam kuali yang sama, pecahkan 2 biji telur dan kacau dengan kuat, pecahkannya menjadi kepingan kecil, sehingga ia baru sahaja mengeras dan masih mengekalkan kelembapan berkrim, kemudian campurkan dengan protein yang telah digoreng.',
        'Masukkan mi yang telah direndam dan ditoskan ke dalam kuali, kacau untuk menggabungkannya dengan campuran protein dan telur, pastikan ia disaluti dengan baik dan mula melembut lagi dari haba sisa.',
        'Dalam mangkuk kecil, pukul bersama 2 sudu besar pes asam jawa, 1 sudu besar sos ikan, dan 1 sudu besar gula melaka, menghasilkan sos Pad Thai yang licin dan lembut, kemudian tuangkan ke dalam kuali, gaul mi dengan kuat untuk menyalutinya secara rata, biarkan sos mengurang dan memekat, melekat pada mi, kira-kira 2 minit.',
        'Masukkan 1 cawan taugeh rangup ke dalam kuali, kacau untuk menggabungkannya dengan mi, masak selama satu minit lagi, sehingga ia sedikit lembut tetapi masih mengekalkan kerangupan yang memuaskan.',
        'Untuk menghidang, pindahkan campuran Pad Thai ke pinggan hidangan atau pinggan individu, taburkan dengan kacang tanah yang dihancurkan, perah jus limau segar, dan sedikit serpihan cili, menambah letupan rasa sitrus dan pedas pada hidangan.',
        'Hias dengan daun bawang yang dihiris nipis dan hirisan limau, menambah warna dan kesegaran pada persembahan, sebelum dihidangkan segera, membiarkan aroma dan rasa bercampur harmoni.'
      ]
    }
  },
  'th-02': {
    'zh-CN': {
      title: '冬阴功汤',
      description: '来自泰国曼谷的正宗食谱',
      ingredients: [
        { item: '虾', amount: '' },
        { item: '柠檬草', amount: '' },
        { item: '南姜', amount: '' },
        { item: '青柠叶', amount: '' },
        { item: '鱼露', amount: '' },
        { item: '青柠汁', amount: '' },
        { item: '泰国辣椒', amount: '' },
        { item: '蘑菇', amount: '' }
      ],
      instructions: [
        '首先，在一个大而厚底的锅中用大火加热浓郁芳香的高汤，最好是用鱼骨和香料混合制成，将其煮沸至剧烈翻滚，产生强劲的气泡流和深沉的共鸣声。',
        '一旦高汤煮沸，小心地将2-3根拍扁的柠檬草和1-2英寸切片的南姜加入锅中，让它们的芳香油和精华在高汤继续煮沸2-3分钟的过程中充分融入，直到柑橘和香料的香气浓郁，柠檬草略微变软。',
        '接下来，将2-3片青柠叶加入锅中，它们蜡质的质地和鲜艳的绿色在接触热高汤时释放出清新的柑橘香气，继续煮沸1-2分钟，直到叶子失去一些鲜亮，高汤充满青柠和柠檬草的芬芳。',
        '在高汤煮沸的同时，将蘑菇切成薄而精致的片状，虾去皮去虾线，注意保留其多汁的质地和鲜艳的颜色，然后将它们加入锅中，轻轻搅拌使其均匀分布，并防止虾变得坚韧或橡皮状。',
        '当虾煮熟时，用适量的鱼露调味高汤，其咸鲜的鲜味增强了菜肴的整体深度和浓郁度，继续煮沸1-2分钟，直到虾变粉并刚刚煮熟，蘑菇变软但仍保留一些韧性。',
        '上菜前，拌入新鲜挤压的青柠汁，其明亮、柑橘般的风味能中和高汤的浓郁，为菜肴增添一抹受欢迎的酸度，并加入1-2片切片的泰国辣椒，其辛辣和酥脆的质地与柔软、Q弹的虾和蘑菇形成令人兴奋的对比。',
        '最后，品尝冬阴功汤的平衡和调味，根据需要调整酸、辣、咸、甜的程度，以达到和谐清爽的风味，然后将热气腾腾的汤盛入碗中，立即上菜，如果需要，可再用青柠角、辣椒片和芳香香草装饰。'
      ]
    },
    ms: {
      title: 'Tom Yum Goong',
      description: 'Resipi asli dari Bangkok, Thailand',
      ingredients: [
        { item: 'Udang', amount: '' },
        { item: 'Serai', amount: '' },
        { item: 'Lengkuas', amount: '' },
        { item: 'Daun limau purut', amount: '' },
        { item: 'Sos ikan', amount: '' },
        { item: 'Jus limau nipis', amount: '' },
        { item: 'Cili Thai', amount: '' },
        { item: 'Cendawan', amount: '' }
      ],
      instructions: [
        'Mulakan dengan memanaskan stok yang kaya dan beraroma, sebaik-baiknya dibuat dengan gabungan tulang ikan dan rempah wangi, dalam periuk besar berdasar tebal di atas api yang tinggi, sehingga mendidih dengan kuat yang menghasilkan aliran buih yang deras dan bunyi yang dalam.',
        'Setelah stok mendidih, masukkan 2-3 batang serai yang telah dititik dan 1-2 inci lengkuas yang dihiris ke dalam periuk, biarkan minyak wangi dan intipatinya meresap ke dalam stok sambil terus mendidih selama 2-3 minit, atau sehingga aroma sitrus dan rempah jelas terasa dan serai sedikit lembut.',
        'Seterusnya, masukkan 2-3 helai daun limau purut ke dalam periuk, tekstur berlilin dan warna hijau terang mereka melepaskan letupan kesegaran sitrus apabila terkena stok panas, dan teruskan mendidih selama 1-2 minit lagi, atau sehingga daun telah kehilangan sedikit kecerahannya dan stok berbau harum limau dan serai.',
        'Semasa stok mendidih, sediakan cendawan dengan menghirisnya menjadi kepingan nipis dan udang dengan mengupas dan membuang uratnya, berhati-hati untuk mengekalkan tekstur berair dan warna cerah mereka, kemudian masukkan ke dalam periuk, kacau perlahan untuk mengagihkannya secara rata dan mengelakkan udang menjadi liat atau kenyal.',
        'Apabila udang masak, perasakan stok dengan jumlah sos ikan yang sesuai, rasa masin dan umami-nya meningkatkan kedalaman dan kekayaan keseluruhan hidangan, dan teruskan mendidih selama 1-2 minit lagi, atau sehingga udang berwarna merah jambu dan baru masak, dan cendawan lembut tetapi masih mengekalkan sedikit kekenyalannya.',
        'Tepat sebelum dihidangkan, masukkan jus limau nipis yang baru diperah, rasa sitrusnya yang cerah memotong kekayaan stok dan menambah sentuhan keasidan yang dialu-alukan pada hidangan, dan masukkan 1-2 biji cili Thai yang dihiris, kepedasan dan tekstur rangupnya memberikan kontras yang mendebarkan kepada udang dan cendawan yang lembut.',
        'Akhir sekali, rasa Tom Yum Goong untuk keseimbangan dan perasa, sesuaikan tahap masam, pedas, masin, dan manis untuk mencapai profil rasa yang harmoni dan menyegarkan, kemudian cedok sup panas mengepul ke dalam mangkuk dan hidangkan segera, dihiasi dengan hirisan limau tambahan, hirisan cili, dan herba wangi, jika dikehendaki.'
      ]
    }
  },
  'th-03': {
    'zh-CN': {
      title: '泰式绿咖喱',
      description: '来自泰国清迈的正宗食谱',
      ingredients: [
        { item: '绿咖喱酱', amount: '' },
        { item: '鸡肉', amount: '' },
        { item: '椰奶', amount: '400ml' },
        { item: '泰国茄子', amount: '' },
        { item: '竹笋', amount: '' },
        { item: '青柠叶', amount: '' },
        { item: '鱼露', amount: '' },
        { item: '罗勒', amount: '' }
      ],
      instructions: [
        '首先，用中火加热一个厚底煎锅，然后加入2汤匙椰浆，不断搅拌直到它融化并分离出浓郁的奶油状油，散发出微妙的椰子香气。',
        '接下来，将2-3汤匙绿咖喱酱加入煎锅中，不断搅拌以均匀分布热量并防止烧焦，煮约1-2分钟，直到咖喱酱散发出浓郁、略带辛辣和甜味的香气。',
        '将400克去骨去皮的鸡腿肉切成一口大小的块状，加入煎锅中，搅拌使鸡肉均匀裹上绿咖喱酱，煮约5分钟，或直到鸡肉四面金黄并煮熟，内部温度达到165°F (74°C)。',
        '倒入剩余的400毫升椰奶，将混合物煮沸，然后加入1-2个切成一口大小的泰国茄子和1/2杯切片竹笋，轻轻搅拌混合。',
        '将火调至小火，不加盖炖煮15分钟，或直到酱汁略微变稠，表面泛着油光，味道融合，茄子和竹笋变软但仍保持脆感。',
        '用1-2汤匙鱼露调味咖喱，轻轻搅拌混合，然后品尝并根据需要调整调味，鱼露的咸鲜味平衡了椰奶的甜味和咖喱酱的辣味。',
        '最后，拌入1/4杯切碎的新鲜罗勒叶，其明亮、草本的风味和香气，然后将绿咖喱趁热上桌，如果需要，可再用罗勒叶装饰，搭配蓬松、略带粘性和精致风味的茉莉香米饭。'
      ]
    },
    ms: {
      title: 'Kari Hijau',
      description: 'Resipi asli dari Chiang Mai, Thailand',
      ingredients: [
        { item: 'Pes kari hijau', amount: '' },
        { item: 'Ayam', amount: '' },
        { item: 'Santan', amount: '400ml' },
        { item: 'Terung Thai', amount: '' },
        { item: 'Rebung', amount: '' },
        { item: 'Daun limau purut', amount: '' },
        { item: 'Sos ikan', amount: '' },
        { item: 'Selasi', amount: '' }
      ],
      instructions: [
        'Pertama, panaskan kuali berdasar tebal di atas api sederhana, kemudian masukkan 2 sudu besar krim kelapa, kacau sentiasa sehingga ia cair dan terpisah menjadi minyak yang kaya dan berkrim, mengeluarkan aroma kelapa yang halus.',
        'Seterusnya, masukkan 2-3 sudu besar pes kari hijau ke dalam kuali, kacau sentiasa untuk mengagihkan haba secara rata dan mengelakkan hangus, masak selama kira-kira 1-2 minit sehingga pes berbau harum, dengan aroma yang dalam, sedikit pedas dan sedikit manis.',
        'Masukkan 400g paha ayam tanpa tulang dan kulit, dipotong dadu, ke dalam kuali, kacau untuk menyaluti ayam secara rata dengan pes kari hijau, masak selama kira-kira 5 minit, atau sehingga ayam keperangan di semua sisi dan masak sepenuhnya, dengan suhu dalaman 165°F (74°C).',
        'Tuangkan baki 400ml santan, biarkan campuran mendidih perlahan, kemudian masukkan 1-2 biji terung Thai, dipotong dadu, dan 1/2 cawan rebung yang dihiris, kacau perlahan untuk menggabungkan.',
        'Kecilkan api dan reneh, tanpa penutup, selama 15 minit, atau sehingga sos sedikit pekat, dengan kilauan berminyak di permukaan, dan rasa telah sebati, dengan terung dan rebung lembut tetapi masih rangup.',
        'Perasakan kari dengan 1-2 sudu besar sos ikan, kacau perlahan untuk menggabungkan, kemudian rasa dan sesuaikan perasa mengikut keperluan, dengan sos ikan menambah rasa masin dan umami untuk mengimbangi kemanisan santan dan kepedasan pes kari.',
        'Akhir sekali, masukkan 1/4 cawan daun selasi segar yang dicincang, dengan rasa dan aroma herba yang cerah, kemudian hidangkan kari hijau panas, dihiasi dengan daun selasi tambahan jika dikehendaki, di atas nasi melati kukus, dengan tekstur gebu, sedikit melekit dan rasa yang halus.'
      ]
    }
  },
  'th-04': {
    'zh-CN': {
      title: '芒果糯米饭',
      description: '来自泰国曼谷的正宗食谱',
      ingredients: [
        { item: '糯米', amount: '' },
        { item: '椰奶', amount: '400ml' },
        { item: '熟芒果', amount: '3' },
        { item: '糖', amount: '' },
        { item: '盐', amount: '' },
        { item: '芝麻', amount: '' }
      ],
      instructions: [
        '首先，将1杯糯米彻底淘洗干净，然后用清水浸泡至少4小时或过夜，让米粒充分吸水变得饱满。',
        '接下来，沥干浸泡好的糯米，将其放入铺有芝士布或干净薄厨房毛巾的蒸锅中，用沸水蒸15-20分钟，或直到米饭煮熟蓬松，米粒带有微妙的光泽。',
        '在米饭蒸煮的同时，将400毫升椰奶、2汤匙砂糖和一小撮盐放入一个中型平底锅中，用中火加热，偶尔搅拌，直到糖溶解，椰奶变热但未沸腾，散发出浓郁的奶油香气。',
        '米饭煮熟后，将其转移到一个大碗中，将甜椰奶倒在上面，用橡皮刮刀轻轻地将椰奶拌入米饭中，注意不要捣碎或弄断米粒，直到米饭均匀裹上并开始吸收液体。',
        '让米饭盖上保鲜膜或湿毛巾静置20分钟，使其充分吸收椰奶，形成奶油般略带粘性的质地，甜咸风味达到微妙的平衡。',
        '同时，将3个熟芒果切成薄而均匀的片状，注意保留水果的自然弧度，并将其摆放在餐盘或单独的盘子中，展示其鲜艳的橙黄色和细腻的质地。',
        '上菜时，将一份椰奶糯米饭放在切好的芒果旁边，如果需要，可淋上少许额外的甜椰奶，并撒上烤芝麻，这将为菜肴增添令人满意的酥脆和坚果风味，平衡芒果的甜味和椰奶的浓郁。',
        '最后，将芒果糯米饭在室温或微温下享用，让风味和质地和谐融合，奶油椰奶、甜芒果和坚果芝麻的结合将创造出真正令人难忘的烹饪体验。'
      ]
    },
    ms: {
      title: 'Pulut Mangga',
      description: 'Resipi asli dari Bangkok, Thailand',
      ingredients: [
        { item: 'Beras pulut', amount: '' },
        { item: 'Santan', amount: '400ml' },
        { item: 'Mangga masak', amount: '3' },
        { item: 'Gula', amount: '' },
        { item: 'Garam', amount: '' },
        { item: 'Biji bijan', amount: '' }
      ],
      instructions: [
        'Mulakan dengan membilas 1 cawan beras pulut dengan bersih, kemudian rendam dalam air selama sekurang-kurangnya 4 jam atau semalaman, membiarkan biji-bijian menyerap air dan menjadi gebu.',
        'Seterusnya, toskan beras yang telah direndam dan letakkan di dalam pengukus yang dialas dengan kain keju atau tuala dapur bersih dan nipis, dan kukus di atas air mendidih selama 15-20 minit, atau sehingga nasi masak dan gebu, dengan kilauan halus pada biji-bijian.',
        'Semasa nasi sedang dimasak, gabungkan 400ml santan, 2 sudu besar gula pasir, dan secubit garam dalam periuk sederhana, dan panaskan di atas api sederhana, kacau sekali-sekala, sehingga gula larut dan santan panas tetapi tidak mendidih, mengeluarkan aroma berkrim yang kaya.',
        'Setelah nasi masak, pindahkan ke dalam mangkuk besar, dan tuangkan santan manis di atasnya, lipat perlahan santan ke dalam nasi dengan spatula getah, berhati-hati agar tidak melenyek atau memecahkan biji-bijian, sehingga nasi disaluti dengan baik dan mula menyerap cecair.',
        'Biarkan nasi berehat, ditutup dengan pembalut plastik atau tuala lembap, selama 20 minit, membolehkannya menyerap santan sepenuhnya dan mengembangkan tekstur berkrim, sedikit melekit, dengan keseimbangan rasa manis dan masin yang halus.',
        'Sementara itu, hirisan 3 biji mangga masak menjadi kepingan nipis dan seragam, berhati-hati untuk mengekalkan lengkungan semula jadi buah, dan susun di atas pinggan hidangan atau pinggan individu, mempamerkan warna oren-kuning yang cerah dan tekstur yang halus.',
        'Untuk menghidang, letakkan sebahagian pulut yang disiram santan di sebelah mangga yang dihiris, tuangkan sedikit santan manis tambahan, jika dikehendaki, dan hias dengan taburan biji bijan panggang, yang akan menambah kerangupan yang memuaskan dan rasa kekacang pada hidangan, mengimbangi kemanisan mangga dan kekayaan santan.',
        'Akhir sekali, hidangkan Pulut Mangga pada suhu bilik, atau sedikit suam, membiarkan rasa dan tekstur bercampur harmoni, dengan santan berkrim, mangga manis, dan biji bijan kekacang bergabung untuk mencipta pengalaman kulinari yang benar-benar tidak dapat dilupakan.'
      ]
    }
  },
  'th-05': {
    'zh-CN': {
      title: '马萨曼咖喱',
      description: '来自泰国南部，泰国的正宗食谱',
      ingredients: [
        { item: '马萨曼咖喱酱', amount: '' },
        { item: '牛肉或鸡肉', amount: '' },
        { item: '土豆', amount: '' },
        { item: '花生', amount: '' },
        { item: '椰奶', amount: '' },
        { item: '肉桂', amount: '' },
        { item: '八角', amount: '' },
        { item: '鱼露', amount: '' }
      ],
      instructions: [
        '首先，用中火加热一个厚底煎锅，然后加入2汤匙椰浆和1汤匙植物油，偶尔搅拌直到油闪烁，椰浆开始冒泡。',
        '接下来，将2-3汤匙马萨曼咖喱酱加入煎锅中，不断搅拌以防止烧焦，煮2-3分钟，直到咖喱酱散发出浓郁、略带甜味的香气，油开始分离。',
        '将1磅牛肉或鸡肉（如果需要，切成一口大小的块状）加入煎锅中，煮约5分钟，直到肉四面煎熟，外部形成漂亮的棕色外壳，内部保持多汁。',
        '现在，倒入1罐全脂椰奶，加入1个大块切丁的土豆和1根肉桂棒，以及2个整八角，轻轻搅拌使食材均匀分布，然后将混合物煮沸。',
        '将火调至小火，盖上盖子慢炖咖喱45分钟，让味道融合，土豆变软，偶尔搅拌以防止烧焦，直到肉变得酥烂，酱汁变稠，均匀裹覆食材。',
        '在咖喱煮好前约10分钟，拌入1/4杯烤花生，为菜肴增添令人满意的酥脆和坚果风味，然后继续不加盖炖煮，直到花生热透，酱汁达到所需的稠度。',
        '为了完成咖喱，根据口味加入1-2汤匙鱼露和1汤匙棕榈糖，搅拌混合，然后品尝并根据需要调整调味，平衡甜、酸、咸和鲜味，这些是美味马萨曼咖喱的标志。',
        '最后，从煎锅中取出肉桂棒和八角，然后用新鲜香菜或泰国罗勒装饰咖喱，搭配蒸米饭或面条享用，品尝这道深受喜爱的泰国菜肴复杂而芳香的风味。'
      ]
    },
    ms: {
      title: 'Kari Massaman',
      description: 'Resipi asli dari Selatan Thailand, Thailand',
      ingredients: [
        { item: 'Pes kari Massaman', amount: '' },
        { item: 'Daging lembu atau ayam', amount: '' },
        { item: 'Ubi kentang', amount: '' },
        { item: 'Kacang tanah', amount: '' },
        { item: 'Santan', amount: '' },
        { item: 'Kayu manis', amount: '' },
        { item: 'Bunga lawang', amount: '' },
        { item: 'Sos ikan', amount: '' }
      ],
      instructions: [
        'Pertama, panaskan kuali berdasar tebal di atas api sederhana, kemudian masukkan 2 sudu besar krim kelapa dan 1 sudu besar minyak sayuran, kacau sekali-sekala sehingga minyak berkilau dan krim mula mendidih perlahan.',
        'Seterusnya, masukkan 2-3 sudu besar pes kari Massaman ke dalam kuali, kacau sentiasa untuk mengelakkan hangus, dan masak selama 2-3 minit sehingga pes berbau harum dan minyak mula terpisah, mengeluarkan aroma yang kaya, sedikit manis.',
        'Masukkan 1 paun daging lembu atau ayam ke dalam kuali, potong menjadi kepingan bersaiz gigitan jika perlu, dan masak sehingga daging keperangan di semua sisi, kira-kira 5 minit, membentuk kerak perang yang cantik di luar sambil kekal berair di dalam.',
        'Sekarang, tuangkan 1 tin santan penuh lemak, masukkan 1 biji ubi kentang besar yang didadu dan 1 batang kayu manis ke dalam kuali, bersama 2 biji bunga lawang, kacau perlahan untuk mengagihkan bahan-bahan secara rata, kemudian biarkan campuran mendidih perlahan.',
        'Kecilkan api dan biarkan kari masak perlahan, bertutup, selama 45 minit, membiarkan rasa sebati dan ubi kentang menjadi lembut, kacau sekali-sekala untuk mengelakkan hangus, sehingga daging lembut dan sos telah pekat, menyaluti bahan-bahan secara rata.',
        'Kira-kira 10 minit sebelum kari selesai dimasak, masukkan 1/4 cawan kacang tanah panggang, menambah kerangupan yang memuaskan dan rasa kekacang pada hidangan, kemudian teruskan mendidih perlahan, tanpa penutup, sehingga kacang tanah panas sepenuhnya dan sos telah mencapai konsistensi yang dikehendaki.',
        'Untuk melengkapkan kari, perasakan dengan 1-2 sudu besar sos ikan, bergantung pada rasa, dan 1 sudu besar gula melaka, kacau untuk menggabungkan, kemudian rasa dan sesuaikan perasa mengikut keperluan, mengimbangi rasa manis, masam, masin, dan umami yang mentakrifkan kari Massaman yang hebat.',
        'Akhir sekali, keluarkan batang kayu manis dan bunga lawang dari kuali, kemudian hias kari dengan daun ketumbar segar atau selasi Thai, hidangkan di atas nasi kukus atau mi, dan nikmati rasa kompleks dan beraroma hidangan Thai yang digemari ini.'
      ]
    }
  },
  'th-06': {
    'zh-CN': {
      title: '青木瓜沙拉 (Som Tam)',
      description: '来自泰国伊桑地区的正宗食谱',
      ingredients: [
        { item: '青木瓜', amount: '1 个' },
        { item: '圣女果', amount: '' },
        { item: '长豆角', amount: '' },
        { item: '虾米', amount: '' },
        { item: '青柠汁', amount: '' },
        { item: '鱼露', amount: '' },
        { item: '棕榈糖', amount: '' },
        { item: '鸟眼辣椒', amount: '' },
        { item: '花生', amount: '' }
      ],
      instructions: [
        '首先，选择一个结实、绿色的木瓜，小心地去皮，露出其苍白、几乎半透明的果肉。接着，将木瓜切成细长的丝，注意保持切口均匀，以确保最终菜肴的质地一致。',
        '接下来，准备香料：用小火轻轻烤2-3个鸟眼辣椒和2瓣大蒜，频繁翻动，直到它们散发香味并略微变黑，大约需要2-3分钟。然后，在研钵中短暂捣碎烤好的辣椒和大蒜，以释放它们的油分并激活风味，捣至粗碎即可。',
        '将切好的青木瓜丝、1/2杯切好的长豆角和1/2杯对半切开的圣女果加入研钵中，与辣椒大蒜混合物轻轻混合，避免弄伤娇嫩的蔬菜。',
        '在一个小碗中，将2汤匙鲜榨青柠汁、1汤匙鱼露和1汤匙棕榈糖搅拌均匀，直到糖完全溶解，制成顺滑、均衡的酱汁。将酱汁倒在研钵中的木瓜混合物上。',
        '用研杵轻轻捣拌食材，从中心向外操作，直到蔬菜均匀裹上酱汁并开始略微变软，大约需要2-3分钟。注意不要过度捣碎，否则沙拉会变得糊状。',
        '品尝沙拉，根据需要调整调味料，以达到辣、酸、咸、甜的和谐平衡。如有必要，可少量多次地添加青柠汁以增加清爽度，鱼露以增加深度，棕榈糖以增加甜度，或辣椒以增加辣度，并频繁品尝。',
        '最后，将青木瓜沙拉盛入盘中或单独的碗中，撒上烤花生和少许额外的辣椒（如果喜欢），以增加口感和视觉吸引力。花生应带来令人满足的酥脆感，而辣椒则为沙拉的柔和色调增添一抹鲜艳的色彩。'
      ]
    },
    ms: {
      title: 'Som Tam (Kerabu Betik)',
      description: 'Resipi asli dari Isan, Thailand',
      ingredients: [
        { item: 'Betik hijau', amount: '1 biji' },
        { item: 'Tomato ceri', amount: '' },
        { item: 'Kacang panjang', amount: '' },
        { item: 'Udang kering', amount: '' },
        { item: 'Jus limau nipis', amount: '' },
        { item: 'Sos ikan', amount: '' },
        { item: 'Gula nisan/gula melaka', amount: '' },
        { item: 'Cili padi', amount: '' },
        { item: 'Kacang tanah', amount: '' }
      ],
      instructions: [
        'Mulakan dengan memilih betik hijau yang pejal, kemudian kupas dengan teliti, mendedahkan isi yang pucat dan hampir lutsinar di bawahnya. Hiris betik menjadi jalur panjang dan nipis, pastikan potongan seragam untuk memastikan tekstur yang sekata dalam hidangan akhir.',
        'Seterusnya, sediakan bahan aromatik dengan memanggang ringan 2-3 biji cili padi dan 2 ulas bawang putih di atas api perlahan, balik-balikkan selalu, sehingga wangi dan sedikit gelap, yang akan mengambil masa kira-kira 2-3 minit. Kemudian, tumbuk cili dan bawang putih yang telah dipanggang dalam lesung batu sebentar untuk mengeluarkan minyaknya dan mengaktifkan rasanya, berhenti apabila ia hancur kasar.',
        'Masukkan betik hijau yang telah dihiris, 1/2 cawan kacang panjang yang dipotong, dan 1/2 cawan tomato ceri yang dibelah dua ke dalam lesung batu, gaulkan perlahan-lahan dengan campuran cili-bawang putih untuk mengelakkan sayur-sayuran yang lembut daripada lebam.',
        'Dalam mangkuk kecil, pukul bersama 2 sudu besar jus limau nipis segar, 1 sudu besar sos ikan, dan 1 sudu besar gula nisan sehingga gula larut sepenuhnya, menghasilkan sos yang licin dan seimbang. Tuangkan sos ini ke atas campuran betik dalam lesung batu.',
        'Menggunakan alu, tumbuk dan gaul bahan-bahan bersama-sama secara perlahan, bekerja dari tengah ke luar, sehingga sayur-sayuran disalut dengan baik dengan sos dan mula melembut sedikit, yang akan mengambil masa kira-kira 2-3 minit. Berhati-hati agar tidak menumbuk terlalu kuat, kerana ini boleh menjadikan salad lembik.',
        'Rasa salad dan sesuaikan perasa mengikut keperluan untuk mencapai keseimbangan rasa pedas, masam, masin, dan manis yang harmoni. Jika perlu, tambah lagi jus limau nipis untuk kesegaran, sos ikan untuk kedalaman, gula nisan untuk kemanisan, atau cili untuk kepedasan, buat penyesuaian ini secara beransur-ansur dan rasa dengan kerap.',
        'Akhir sekali, pindahkan Som Tam ke pinggan hidangan atau pinggan individu, hias dengan taburan kacang tanah panggang dan beberapa biji cili tambahan, jika dikehendaki, untuk tekstur tambahan dan daya tarikan visual. Kacang tanah akan menambah kerangupan yang memuaskan, manakala cili memberikan warna yang terang berbanding warna lembut salad.'
      ]
    }
  },
  'th-07': {
    'zh-CN': {
      title: '泰式罗勒鸡肉',
      description: '来自泰国曼谷的正宗食谱',
      ingredients: [
        { item: '鸡肉碎', amount: '300克' },
        { item: '圣罗勒', amount: '' },
        { item: '蚝油', amount: '' },
        { item: '鱼露', amount: '' },
        { item: '酱油', amount: '' },
        { item: '大蒜', amount: '' },
        { item: '辣椒', amount: '' },
        { item: '煎蛋', amount: '' }
      ],
      instructions: [
        '首先，准备香料：将3-4瓣大蒜和2-3个泰式鸟眼辣椒切碎，注意释放它们浓郁的油分和香气。',
        '接下来，将一个养护良好的炒锅用大火加热，直到达到极高的温度，表面可见一层薄薄的油光，然后加入1-2汤匙高烟点的中性油，如花生油或牛油果油。',
        '将切碎的大蒜和辣椒加入炒锅中，不断搅拌以防烧焦，煮至金黄色并散发出浓郁的香气，厨房里弥漫着烤大蒜和辣椒的辛辣气味。',
        '将300克鸡肉碎加入炒锅中，用锅铲或炒勺将其打散以防结块，用大火烹煮，频繁搅拌，直到鸡肉完全煮熟，不再呈粉红色，锅底形成一层微焦的脆皮。',
        '在一个小碗中，将2汤匙蚝油、1汤匙鱼露和1汤匙酱油搅拌均匀，然后将酱汁混合物倒入炒锅中，搅拌使鸡肉均匀裹上酱汁，再煮30秒至1分钟，直到酱汁变稠，风味融合。',
        '拌入一把新鲜的圣罗勒叶，它们具有独特的茴香般风味和香气，煮至叶子变软，混合物充分混合，罗勒的清新草本风味平衡了酱汁的浓郁。',
        '同时，在另一个平底锅中用少量油煎一个鸡蛋，直到蛋白凝固，蛋黄仍然流淌，底部形成一层酥脆的金黄色外壳，然后将鸡蛋放在一碗蒸好的茉莉香米上。',
        '上菜时，将泰式罗勒鸡肉混合物盛在米饭上，再放上酥脆的煎蛋，如果喜欢，可以再用额外的罗勒叶和少许烤辣椒片装饰。'
      ]
    },
    ms: {
      title: 'Ayam Selasih Thai',
      description: 'Resipi asli dari Bangkok, Thailand',
      ingredients: [
        { item: 'Ayam cincang', amount: '300g' },
        { item: 'Daun selasih (holy basil)', amount: '' },
        { item: 'Sos tiram', amount: '' },
        { item: 'Sos ikan', amount: '' },
        { item: 'Kicap soya', amount: '' },
        { item: 'Bawang putih', amount: '' },
        { item: 'Cili', amount: '' },
        { item: 'Telur goreng', amount: '' }
      ],
      instructions: [
        'Pertama, sediakan bahan aromatik dengan mencincang halus 3-4 ulas bawang putih dan 2-3 biji cili padi Thai, pastikan untuk mengeluarkan minyak dan wangiannya yang kuat.',
        'Seterusnya, panaskan kuali yang telah diperap dengan baik di atas api yang tinggi sehingga mencapai suhu yang sangat panas, dengan kilauan minyak yang samar kelihatan di permukaannya, kemudian masukkan 1-2 sudu besar minyak neutral dengan takat asap yang tinggi, seperti minyak kacang atau minyak avokado.',
        'Masukkan bawang putih dan cili cincang ke dalam kuali, kacau sentiasa untuk mengelakkan hangus, dan masak sehingga ia berwarna keemasan dan sangat wangi, memenuhi dapur dengan bau bawang putih dan cili panggang yang tajam.',
        'Masukkan 300g ayam cincang ke dalam kuali, pecahkan dengan spatula atau senduk kuali untuk mengelakkan bergumpal, dan masak di atas api yang tinggi, kacau kerap, sehingga ayam masak sepenuhnya dan tidak lagi merah jambu, dengan sedikit kerak karamel terbentuk di dasar kuali.',
        'Dalam mangkuk kecil, pukul bersama 2 sudu besar sos tiram, 1 sudu besar sos ikan, dan 1 sudu besar kicap soya, kemudian tuangkan campuran sos ke dalam kuali, kacau untuk menyalut ayam secara sekata, dan masak selama 30 saat hingga 1 minit lagi, sehingga sos telah pekat dan rasa telah sebati.',
        'Gaulkan segenggam daun selasih segar, dengan rasa dan wangian anise-nya yang tersendiri, dan masak sehingga daun layu dan campuran sebati, dengan rasa herba selasih yang cerah menyeimbangkan kekayaan sos.',
        'Sementara itu, goreng telur dalam kuali berasingan dengan sedikit minyak sehingga putih telur mengeras dan kuning telur masih cair, dengan kerak rangup berwarna keemasan terbentuk di dasar telur, kemudian letakkan telur di atas nasi melati kukus.',
        'Untuk menghidang, sudukan campuran ayam selasih Thai di atas nasi dan letakkan telur goreng rangup di atasnya, hias dengan daun selasih tambahan dan taburan serpihan cili panggang, jika dikehendaki.'
      ]
    }
  },
  'kr-01': {
    'zh-CN': {
      title: '韩式拌饭',
      description: '来自韩国首尔的正宗食谱',
      ingredients: [
        { item: '米饭', amount: '' },
        { item: '菠菜', amount: '' },
        { item: '胡萝卜', amount: '' },
        { item: '香菇', amount: '' },
        { item: '西葫芦', amount: '' },
        { item: '豆芽', amount: '' },
        { item: '牛肉碎', amount: '' },
        { item: '韩式辣酱 (Gochujang)', amount: '' },
        { item: '煎蛋', amount: '' },
        { item: '香油', amount: '' }
      ],
      instructions: [
        '将每种蔬菜分别用香油和大蒜炒熟。烹煮牛肉。',
        '将蔬菜和牛肉铺在石锅（dolsot）的米饭上。将鸡蛋放在顶部。',
        '食用前将所有食材与韩式辣酱拌匀。从底部取食可获得锅巴。'
      ]
    },
    ms: {
      title: 'Bibimbap',
      description: 'Resipi asli dari Seoul, Korea',
      ingredients: [
        { item: 'Nasi masak', amount: '' },
        { item: 'Bayam', amount: '' },
        { item: 'Lobak merah', amount: '' },
        { item: 'Cendawan shiitake', amount: '' },
        { item: 'Zucchini', amount: '' },
        { item: 'Taugeh', amount: '' },
        { item: 'Daging lembu cincang', amount: '' },
        { item: 'Gochujang (pes cili merah)', amount: '' },
        { item: 'Telur goreng', amount: '' },
        { item: 'Minyak bijan', amount: '' }
      ],
      instructions: [
        'Tumis setiap sayur secara berasingan dengan minyak bijan dan bawang putih. Masak daging lembu.',
        'Susun sayur-sayuran dan daging lembu di atas nasi dalam mangkuk batu (dolsot). Letakkan telur di atas.',
        'Gaulkan semua bahan dengan gochujang sebelum makan. Ambil dari bawah untuk mendapatkan nasi yang rangup.'
      ]
    }
  },
  'kr-02': {
    'zh-CN': {
      title: '韩式泡菜汤',
      description: '来自韩国首尔的正宗食谱',
      ingredients: [
        { item: '陈年泡菜', amount: '300克' },
        { item: '五花肉', amount: '200克' },
        { item: '豆腐', amount: '300克' },
        { item: '韩式辣酱', amount: '1 汤匙' },
        { item: '香油', amount: '1 汤匙' },
        { item: '大葱', amount: '' },
        { item: '凤尾鱼高汤', amount: '' }
      ],
      instructions: [
        '首先，用中高火加热一个厚底煎锅或炒锅，然后加入1汤匙香油，待其闪烁并略微冒烟。',
        '接下来，小心地将200克五花肉切成薄而均匀的条状，厚度约为1/4英寸，然后将其加入预热的煎锅中，煎至两面金黄，大约需要5-7分钟。',
        '在五花肉煎制的同时，将300克陈年泡菜切成小块，释放其浓郁的香气，使其更容易融入菜肴中。',
        '一旦五花肉达到所需的颜色，将切好的泡菜加入煎锅中，与猪肉混合，然后加入1汤匙韩式辣酱，再煮5分钟，频繁搅拌，直到泡菜开始焦糖化，风味融合。',
        '在一个单独的锅中，将凤尾鱼高汤煮沸，然后小心地将其倒入装有猪肉和泡菜混合物的煎锅中，注意其鲜艳的红色和香料的香气，然后加入300克切块的豆腐，轻轻搅拌使其均匀分布在炖菜中。',
        '将火调小至文火，盖上盖子，让泡菜汤炖煮15分钟，让风味成熟，豆腐吸收汤中辛辣、酸爽和鲜美的味道，此时汤汁应已略微变稠。',
        '最后，用切成薄片的大葱和少许炒蘑菇（如果喜欢）装饰菜肴，然后将热气腾腾的泡菜汤盛在米饭上，细细品味这道传统韩式炖菜中风味和质地的和谐。'
      ]
    },
    ms: {
      title: 'Kimchi Jjigae',
      description: 'Resipi asli dari Seoul, Korea',
      ingredients: [
        { item: 'Kimchi lama', amount: '300g' },
        { item: 'Perut babi', amount: '200g' },
        { item: 'Tauhu', amount: '300g' },
        { item: 'Gochujang', amount: '1 sudu besar' },
        { item: 'Minyak bijan', amount: '1 sudu besar' },
        { item: 'Daun bawang', amount: '' },
        { item: 'Stok ikan bilis', amount: '' }
      ],
      instructions: [
        'Pertama, panaskan kuali atau wok bertapak tebal di atas api sederhana tinggi, kemudian masukkan 1 sudu besar minyak bijan, biarkan ia berkilau dan sedikit berasap sebelum meneruskan.',
        'Seterusnya, hirisan 200g perut babi dengan teliti menjadi jalur nipis dan seragam, dengan ketebalan kira-kira 1/4 inci, dan masukkan ke dalam kuali yang telah dipanaskan, goreng sehingga berwarna keemasan di semua sisi, yang akan mengambil masa kira-kira 5-7 minit.',
        'Semasa perut babi sedang digoreng, sediakan 300g kimchi lama dengan memotongnya menjadi kepingan yang lebih kecil, bersaiz gigitan, mengeluarkan aroma tajamnya dan menjadikannya lebih mudah untuk dimasukkan ke dalam hidangan.',
        'Setelah perut babi mencapai warna yang dikehendaki, masukkan kimchi yang telah dipotong ke dalam kuali, kacau untuk digabungkan dengan daging babi, kemudian masukkan 1 sudu besar gochujang, pes cili Korea, dan masak selama 5 minit lagi, kacau kerap, sehingga kimchi mula berkaramel dan rasa telah sebati.',
        'Dalam periuk berasingan, didihkan stok ikan bilis, kemudian tuangkan dengan teliti ke dalam kuali dengan campuran daging babi dan kimchi, perhatikan warna merah terang dan aroma rempah, sebelum menambah 300g tauhu dadu, kacau perlahan-lahan untuk mengagihkannya secara sekata ke seluruh stew.',
        'Kurangkan api kepada reneh dan biarkan Kimchi Jjigae masak, bertutup, selama 15 minit, membiarkan rasa matang dan tauhu menyerap rasa pedas, masam, dan umami dari kuah, yang sepatutnya telah pekat sedikit pada ketika ini.',
        'Untuk menghabiskan hidangan, hias dengan daun bawang yang dihiris nipis dan beberapa cendawan tumis, jika dikehendaki, kemudian hidangkan Kimchi Jjigae yang mendidih panas di atas nasi kukus, berhati-hati untuk menghargai keharmonian rasa dan tekstur dalam stew tradisional Korea ini.'
      ]
    }
  },
  'kr-03': {
    'zh-CN': {
      title: '韩式烤肉',
      description: '来自韩国首尔的正宗食谱',
      ingredients: [
        { item: '薄切牛肉', amount: '500克' },
        { item: '酱油', amount: '' },
        { item: '香油', amount: '' },
        { item: '亚洲梨 (磨碎)', amount: '' },
        { item: '糖', amount: '' },
        { item: '大蒜', amount: '' },
        { item: '姜', amount: '' },
        { item: '大葱', amount: '' }
      ],
      instructions: [
        '首先准备腌料：在搅拌机或食物处理器中，混合1/2杯酱油、1/4杯磨碎的亚洲梨、2汤匙糖、2瓣切碎的大蒜和1汤匙磨碎的姜。搅拌混合物直到光滑乳化，散发出浓郁的香气。',
        '将500克薄切牛肉放入一个大而浅的盘中，倒入腌料，翻动牛肉使其均匀裹上。用保鲜膜盖住盘子，冷藏至少1小时或过夜，让牛肉吸收腌料中复杂、甜咸的风味。',
        '将烤架或烤盘预热至高温，直到温度达到约200°C至230°C。如果使用烤盘，刷上少量香油以防止牛肉粘连并增加微妙的坚果风味。',
        '从腌料中取出牛肉，让多余的腌料滴落。如果需要，分批在预热的烤架或烤盘上烹饪牛肉，以防过度拥挤。每面烹饪1到2分钟，或直到牛肉达到所需的熟度，外部有漂亮的焦糖化脆皮，内部鲜嫩多汁。',
        '在牛肉烹饪的同时，准备配菜：将一把大葱切成薄片，并准备一碗蒸好的白米饭。此外，准备一碟辣椒酱，如韩式辣酱，以增加辣度和风味深度。',
        '牛肉煮熟后，用生菜叶包裹，搭配一勺米饭、几片大葱和少量辣椒酱。风味和质地的组合应均衡和谐，甜咸的牛肉和辛辣刺激的辣椒酱与清凉脆口的生菜和坚果香的香油相得益彰。',
        '上菜时，如果喜欢，可以用额外的大葱和少许烤芝麻装饰菜肴。成品菜肴应具有视觉吸引力，色彩和质地多样，香气诱人，烤牛肉和香油的香味从盘中飘散而出。',
        '最后，花点时间品味韩式烤肉复杂而细致的风味，它完美平衡了甜、咸、辣和鲜味元素。这道菜肴既熟悉又异域，既舒适又令人兴奋，每一口都证明了韩国料理取悦和激发感官的力量。'
      ]
    },
    ms: {
      title: 'Bulgogi',
      description: 'Resipi asli dari Seoul, Korea',
      ingredients: [
        { item: 'Daging lembu hiris nipis', amount: '500g' },
        { item: 'Kicap soya', amount: '' },
        { item: 'Minyak bijan', amount: '' },
        { item: 'Pir Asia (diparut)', amount: '' },
        { item: 'Gula', amount: '' },
        { item: 'Bawang putih', amount: '' },
        { item: 'Halia', amount: '' },
        { item: 'Daun bawang', amount: '' }
      ],
      instructions: [
        'Mulakan dengan menyediakan perapan: dalam pengisar atau pemproses makanan, gabungkan 1/2 cawan kicap soya, 1/4 cawan pir Asia yang diparut, 2 sudu besar gula, 2 ulas bawang putih cincang, dan 1 sudu besar halia parut. Kisar campuran sehingga licin dan teremulsi, dengan aroma yang dalam dan kaya.',
        'Letakkan 500g daging lembu yang dihiris nipis dalam pinggan besar dan cetek dan tuangkan perapan ke atasnya, balikkan daging untuk menyalutnya secara sekata. Tutup pinggan dengan pembalut plastik dan sejukkan selama sekurang-kurangnya 1 jam atau semalaman, membiarkan daging menyerap rasa manis-masin yang kompleks dari perapan.',
        'Panaskan gril atau kuali gril ke api tinggi, sehingga mencapai suhu kira-kira 400°F hingga 450°F. Jika menggunakan kuali gril, sapukan dengan sedikit minyak bijan untuk mengelakkan daging daripada melekat dan untuk menambah rasa kacang yang halus.',
        'Keluarkan daging dari perapan, biarkan lebihan menitis. Masak daging di atas gril atau kuali gril yang telah dipanaskan secara berperingkat, jika perlu, untuk mengelakkan kesesakan. Masak selama 1 hingga 2 minit setiap sisi, atau sehingga daging dimasak mengikut tahap kematangan yang dikehendaki, dengan kerak yang hangus dan berkaramel di luar dan bahagian dalam yang lembut dan berjus.',
        'Semasa daging dimasak, sediakan hidangan sampingan: hirisan segenggam daun bawang nipis dan sediakan semangkuk nasi putih kukus. Juga, sediakan hidangan pes cili, seperti gochujang, untuk menambah kepedasan dan kedalaman rasa.',
        'Setelah daging dimasak, balutkan dalam daun salad, bersama dengan sesudu nasi, beberapa hirisan daun bawang, dan sedikit pes cili. Gabungan rasa dan tekstur harus seimbang dan harmoni, dengan daging lembu manis-masin dan pes cili pedas-tajam dilengkapi oleh salad yang sejuk dan rangup serta minyak bijan yang beraroma kacang.',
        'Untuk menghidang, hias hidangan dengan daun bawang tambahan dan taburan bijan panggang, jika dikehendaki. Hidangan yang telah siap harus menarik secara visual, dengan pelbagai warna dan tekstur, dan aromanya harus memikat, dengan bau daging panggang dan minyak bijan yang harum dari pinggan.',
        'Akhir sekali, luangkan masa untuk menghargai rasa bulgogi yang kompleks dan bernuansa, dengan keseimbangan sempurna antara elemen manis, masin, pedas, dan umami. Hidangan ini haruslah akrab dan eksotik, menenangkan dan mengujakan, dengan setiap gigitan menjadi bukti kekuatan masakan Korea untuk menggembirakan dan menginspirasi deria.'
      ]
    }
  },
  'kr-04': {
    'zh-CN': {
      title: '杂菜',
      description: '源自韩国首尔的正宗食谱',
      ingredients: [
        { item: '粉丝 (冬粉)', amount: '' },
        { item: '菠菜', amount: '' },
        { item: '胡萝卜', amount: '' },
        { item: '蘑菇', amount: '' },
        { item: '牛肉条', amount: '' },
        { item: '酱油', amount: '' },
        { item: '香油', amount: '' },
        { item: '糖', amount: '' }
      ],
      instructions: [
        '首先，按照包装说明烹煮粉丝（又称冬粉），通常是将其浸泡在沸水中约5分钟，然后用冷水冲洗以停止烹饪过程，最后彻底沥干以去除多余水分。',
        '在一个大煎锅或炒锅中，用中高火加热1汤匙香油，然后加入牛肉条，煮至变褐色并熟透，约3-4分钟，然后将其取出放在盘中备用。',
        '在同一个煎锅中，如果需要，再加入1汤匙香油，然后加入切片的蘑菇，煮至它们释放水分并开始变褐色，约2-3分钟，偶尔搅拌以防止烧焦，直到它们变成金黄色并散发香气。',
        '接下来，将切成细丝的胡萝卜加入煎锅中，再煮2分钟，频繁搅拌，直到它开始变软并略带焦糖化，中心仍保留一丝脆感。',
        '将一把新鲜菠菜叶加入煎锅中，煮至其变软，约1分钟，不断搅拌以防止烧焦，并撒上少许盐以带出蔬菜的天然风味。',
        '在一个大碗中，将煮熟的粉丝、酱油和少许香油混合，搅拌均匀，直到粉丝完全裹上美味的酱汁，然后加入糖并再次搅拌以平衡风味。',
        '组装杂菜时，将煮熟的牛肉、蘑菇、胡萝卜和菠菜加入装有粉丝的碗中，搅拌均匀，直到所有食材充分混合，蔬菜和牛肉均匀分布在菜肴中。',
        '最后，将杂菜趁热或冷食，撒上烤芝麻和切成薄片的辣椒丝作为装饰，这为菜肴增添了令人满意的脆感和一丝辛辣，粉丝闪耀着美味的酱汁，蔬菜则为盘子增添了鲜艳的色彩和新鲜感。'
      ]
    },
    ms: {
      title: 'Japchae',
      description: 'Resipi asli dari Seoul, Korea',
      ingredients: [
        { item: 'Mi suun (dangmyeon)', amount: '' },
        { item: 'Bayam', amount: '' },
        { item: 'Lobak merah', amount: '' },
        { item: 'Cendawan', amount: '' },
        { item: 'Jalur daging lembu', amount: '' },
        { item: 'Kicap', amount: '' },
        { item: 'Minyak bijan', amount: '' },
        { item: 'Gula', amount: '' }
      ],
      instructions: [
        'Mulakan dengan memasak mi suun, yang dikenali sebagai dangmyeon, mengikut arahan pada bungkusan, biasanya dengan merendamnya dalam air mendidih selama kira-kira 5 minit, kemudian bilas dengan air sejuk untuk menghentikan proses memasak, dan akhirnya toskan dengan teliti untuk membuang lebihan air.',
        'Dalam kuali besar atau wok, panaskan 1 sudu besar minyak bijan di atas api sederhana tinggi, kemudian masukkan jalur daging lembu, masak sehingga perang dan masak sepenuhnya, kira-kira 3-4 minit, sebelum ketepikan di atas pinggan.',
        'Dalam kuali yang sama, tambah satu lagi sudu besar minyak bijan jika perlu, kemudian masukkan cendawan yang dihiris, masak sehingga ia mengeluarkan cecair dan mula perang, kira-kira 2-3 minit, kacau sekali-sekala untuk mengelakkan hangus, sehingga ia keperangan keemasan dan wangi.',
        'Seterusnya, masukkan lobak merah yang dihiris halus ke dalam kuali, masak selama 2 minit lagi, kacau dengan kerap, sehingga ia mula lembut dan sedikit karamel, dengan sedikit kerangupan yang tinggal di tengah.',
        'Masukkan segenggam daun bayam segar ke dalam kuali, masak sehingga layu, kira-kira 1 minit, kacau sentiasa untuk mengelakkan hangus, dan perasakan dengan secubit garam untuk menyerlahkan rasa asli sayur-sayuran.',
        'Dalam mangkuk besar, gabungkan mi suun yang telah dimasak, kicap, dan sedikit minyak bijan, gaulkan semuanya sehingga mi disalut rata dengan sos yang berperisa, kemudian masukkan gula dan gaul lagi untuk menyeimbangkan rasa.',
        'Untuk menyusun Japchae, masukkan daging lembu, cendawan, lobak merah, dan bayam yang telah dimasak ke dalam mangkuk bersama mi, gaulkan semuanya sehingga bahan-bahan sebati, dengan sayur-sayuran dan daging lembu tersebar rata di seluruh hidangan.',
        'Akhir sekali, hidangkan Japchae panas atau sejuk, dihiasi dengan taburan bijan panggang dan hirisan cili nipis, yang menambah kerangupan yang memuaskan dan sedikit rasa pedas pada hidangan, dengan mi berkilat dengan sos berperisa dan sayur-sayuran menambah warna dan kesegaran pada pinggan.'
      ]
    }
  },
  'kr-05': {
    'zh-CN': {
      title: '炒年糕',
      description: '源自韩国首尔的正宗食谱',
      ingredients: [
        { item: '年糕 (tteok)', amount: '' },
        { item: '鱼糕', amount: '' },
        { item: '韩式辣酱', amount: '' },
        { item: '酱油', amount: '' },
        { item: '糖', amount: '' },
        { item: '凤尾鱼高汤', amount: '' },
        { item: '青葱', amount: '' }
      ],
      instructions: [
        '首先，在一个大而厚底的炖锅中，用中火慢炖凤尾鱼高汤，撇去任何浮到表面的杂质，直到液体略微浓缩，风味集中，约10-12分钟。',
        '接下来，搅入韩式辣酱，用勺子背面将其捣碎以确保均匀溶解，然后加入酱油和糖，搅拌均匀，并将混合物煮至轻微沸腾。',
        '将火调至小火，让酱汁慢炖，让风味融合，酱汁略微变稠，偶尔搅拌，直到它达到浓郁、柔滑的稠度并减少约一半，约15-18分钟。',
        '在酱汁慢炖的同时，准备年糕和鱼糕，用冷水冲洗，然后沥干水分，并将鱼糕切成薄片，大小适口。',
        '将年糕和鱼糕加入慢炖的酱汁中，轻轻搅拌均匀，不加盖煮10分钟，或者直到年糕煮熟，酱汁变稠至粘稠的糖浆状，偶尔搅拌以防止年糕粘在锅底。',
        '当菜肴接近完成时，密切监测酱汁，根据需要调整火力以防止烧焦，直到它达到所需的稠度，并且风味平衡，糖的甜味和凤尾鱼高汤的鲜味平衡了韩式辣酱的辛辣发酵风味。',
        '最后，用切成薄片的青葱和少许烤芝麻装饰菜肴，这增加了令人满意的脆感和坚果风味，与辛辣甜美的酱汁相得益彰，并立即趁热上桌，让每位客人都能体验到炒年糕的浓郁美味。'
      ]
    },
    ms: {
      title: 'Tteokbokki',
      description: 'Resipi asli dari Seoul, Korea',
      ingredients: [
        { item: 'Kek beras (tteok)', amount: '' },
        { item: 'Kek ikan', amount: '' },
        { item: 'Gochujang', amount: '' },
        { item: 'Kicap', amount: '' },
        { item: 'Gula', amount: '' },
        { item: 'Stok ikan bilis', amount: '' },
        { item: 'Daun bawang', amount: '' }
      ],
      instructions: [
        'Pertama, dalam periuk besar bertapak tebal, renehkan stok ikan bilis di atas api sederhana, buang sebarang kekotoran yang timbul ke permukaan, sehingga cecair sedikit berkurangan dan rasa telah pekat, kira-kira 10-12 minit.',
        'Seterusnya, masukkan gochujang, hancurkan pes cili Korea yang ditapai dengan belakang sudu untuk memastikan ia larut sekata, kemudian masukkan kicap dan gula, kacau sebati, dan biarkan campuran mendidih perlahan.',
        'Kecilkan api dan biarkan sos mereneh, membiarkan rasa sebati dan sos sedikit pekat, kacau sekali-sekala, sehingga ia mencapai konsistensi yang kaya dan baldu serta telah berkurangan kira-kira separuh, kira-kira 15-18 minit.',
        'Semasa sos mereneh, sediakan kek beras dan kek ikan dengan membilasnya dalam air sejuk, kemudian toskan dengan baik untuk membuang lebihan air, dan hirisan kek ikan menjadi kepingan nipis bersaiz gigitan.',
        'Masukkan kek beras dan kek ikan ke dalam sos yang mereneh, kacau perlahan untuk sebati, dan masak, tanpa penutup, selama 10 minit, atau sehingga kek beras masak sepenuhnya dan sos telah pekat menjadi konsistensi melekit dan bersirap, kacau sekali-sekala untuk mengelakkan kek beras melekat pada dasar periuk.',
        'Apabila hidangan hampir siap, pantau sos dengan teliti, laraskan api mengikut keperluan untuk mengelakkan hangus, sehingga ia mencapai konsistensi yang diingini dan rasa telah seimbang, dengan kemanisan gula dan umami berperisa stok ikan bilis menyeimbangkan rasa pedas dan ditapai gochujang.',
        'Untuk menghabiskan hidangan, hias dengan hirisan daun bawang nipis dan taburan bijan panggang, yang menambah kerangupan yang memuaskan dan rasa kekacang yang melengkapi sos pedas manis, dan hidangkan segera, panas dan berasap, membolehkan setiap tetamu mengalami kemuliaan Tteokbokki yang penuh dan lazat.'
      ]
    }
  },
  'kr-06': {
    'zh-CN': {
      title: '韩式炸鸡',
      description: '源自韩国首尔的正宗食谱',
      ingredients: [
        { item: '1公斤鸡块', amount: '' },
        { item: '马铃薯淀粉', amount: '' },
        { item: '酱油蒜蓉酱或韩式辣酱', amount: '' },
        { item: '啤酒面糊', amount: '' }
      ],
      instructions: [
        '首先，准备鸡肉，将1公斤鸡块切成均匀大小，确保烹饪均匀，然后放置稍微晾干，让淀粉更有效地附着。',
        '在一个大碗中，将鸡块裹上马铃薯淀粉，均匀涂抹并轻轻拍掉多余的淀粉，以防止形成过厚的脆皮。',
        '在一个深炸锅中加热约5-7厘米的花生油或植物油至165°C，然后小心地放入裹有淀粉的鸡块，注意不要一次放太多，炸10分钟或直到它们变成浅金黄色，这表示开始上色。',
        '用漏勺将鸡肉从油中取出，放在架子上，架子下方放置托盘或烤盘，让多余的油滴下，然后让鸡肉静置5分钟，以重新分布汁液并放松肉质，使其更容易进行最后的油炸。',
        '将油温提高到185°C，然后将静置的鸡块重新放入热油中，进行二次油炸5分钟，或直到它们变得极其酥脆，呈深金黄色，并且滋滋声显著减少，这表明鸡肉已熟。',
        '一旦鸡肉炸至所需的酥脆度，用漏勺将其从油中取出，放入碗中，然后淋上酱油蒜蓉酱或韩式辣酱，轻轻搅拌鸡块，使其均匀裹上甜、辣、咸的酱汁。',
        '上菜时，将韩式炸鸡放在盘子或单独的碟子上，然后用切成薄片的腌萝卜装饰，这提供了良好的口感对比和清爽的酸味，并搭配冰镇啤酒，以衬托菜肴浓郁辛辣的风味。',
        '最后，作为点睛之笔，在鸡肉顶部撒上烤芝麻和切碎的青葱，增加坚果风味和鲜艳的色彩，使菜肴在视觉上吸引人，并诱人味蕾。'
      ]
    },
    ms: {
      title: 'Ayam Goreng Korea',
      description: 'Resipi asli dari Seoul, Korea',
      ingredients: [
        { item: '1kg ketulan ayam', amount: '' },
        { item: 'Tepung kentang', amount: '' },
        { item: 'Sos bawang putih kicap atau sos gochujang', amount: '' },
        { item: 'Adunan bir', amount: '' }
      ],
      instructions: [
        'Pertama, sediakan ayam dengan memotong 1kg ketulan kepada bahagian yang seragam, memastikan masakan sekata, kemudian ketepikan untuk kering sedikit, membolehkan kanji melekat dengan lebih berkesan.',
        'Dalam mangkuk besar, salutkan ketulan ayam dengan tepung kentang, salutkan secara sekata dan tepuk perlahan untuk membuang lebihan bagi mengelakkan kerak yang padat terbentuk.',
        'Panaskan kira-kira 5-7cm minyak, seperti minyak kacang atau minyak sayuran, dalam kuali goreng dalam hingga 165°C, kemudian masukkan ketulan ayam yang disalut kanji dengan berhati-hati, berhati-hati agar tidak terlalu padat, dan goreng selama 10 minit atau sehingga ia mencapai warna perang keemasan muda, menunjukkan permulaan proses pemerangan.',
        'Menggunakan senduk berlubang, keluarkan ayam dari minyak dan letakkan di atas rak dawai yang diletakkan di atas dulang atau loyang, biarkan lebihan minyak menitis, kemudian biarkan ayam berehat selama 5 minit untuk mengagihkan semula jus dan merehatkan daging, menjadikannya lebih mudah menerima peringkat penggorengan terakhir.',
        'Tingkatkan suhu minyak kepada 185°C, kemudian masukkan semula ketulan ayam yang telah direhatkan ke dalam minyak panas, goreng dua kali selama 5 minit tambahan, atau sehingga ia mencapai kerangupan yang melampau, perang keemasan gelap, dan bunyi mendesis berkurangan dengan ketara, menandakan ayam telah masak.',
        'Setelah ayam digoreng hingga kerangupan yang diingini, keluarkan dari minyak dengan senduk berlubang dan masukkan ke dalam mangkuk, kemudian titiskan sama ada sos bawang putih kicap atau sos gochujang, gaulkan ketulan ayam perlahan-lahan untuk menyalutnya secara sekata dengan sos manis, pedas, dan berperisa.',
        'Untuk menghidang, letakkan ayam goreng Korea di atas pinggan besar atau pinggan individu, kemudian hias dengan hirisan lobak jeruk nipis, yang memberikan kontras tekstur yang baik dan letupan rasa masam yang menyegarkan, dan hidangkan bersama bir sejuk untuk melengkapi rasa hidangan yang kaya dan pedas.',
        'Akhir sekali, sebagai sentuhan terakhir, taburkan bijan panggang dan hirisan daun bawang di atas ayam, menambah rasa kekacang dan warna yang cerah pada persembahan, menjadikan hidangan menarik secara visual dan menggoda selera.'
      ]
    }
  },
  'vn-01': {
    'zh-CN': {
      title: '越南牛肉河粉',
      description: '源自越南河内的正宗食谱',
      ingredients: [
        { item: '牛骨', amount: '' },
        { item: '牛尾', amount: '' },
        { item: '河粉', amount: '' },
        { item: '洋葱 (烤焦)', amount: '' },
        { item: '姜 (烤焦)', amount: '' },
        { item: '八角', amount: '' },
        { item: '肉桂', amount: '' },
        { item: '鱼露', amount: '' },
        { item: '牛肉片', amount: '' },
        { item: '豆芽', amount: '' },
        { item: '青柠', amount: '' },
        { item: '罗勒', amount: '' },
        { item: '海鲜酱', amount: '' }
      ],
      instructions: [
        '将洋葱和姜烤焦。将牛骨与香料一起慢炖6小时。撇去浮油。',
        '过滤高汤，用鱼露和糖调味。煮河粉。',
        '碗中：河粉 + 生牛肉片 (高汤会将其烫熟)。倒入滚烫的高汤。加入配料即可享用。'
      ]
    },
    ms: {
      title: 'Pho Bo',
      description: 'Resipi asli dari Hanoi, Vietnam',
      ingredients: [
        { item: 'Tulang lembu', amount: '' },
        { item: 'Ekor lembu', amount: '' },
        { item: 'Mi beras', amount: '' },
        { item: 'Bawang besar (dibakar)', amount: '' },
        { item: 'Halia (dibakar)', amount: '' },
        { item: 'Bunga lawang', amount: '' },
        { item: 'Kayu manis', amount: '' },
        { item: 'Sos ikan', amount: '' },
        { item: 'Hirisan daging lembu', amount: '' },
        { item: 'Taugeh', amount: '' },
        { item: 'Limau nipis', amount: '' },
        { item: 'Selasih', amount: '' },
        { item: 'Hoisin', amount: '' }
      ],
      instructions: [
        'Bakar bawang dan halia. Rebus tulang lembu 6 jam dengan rempah. Buang lemak.',
        'Tapis sup, perasakan dengan sos ikan dan gula. Masak mi beras.',
        'Mangkuk: mi + daging lembu mentah (sup akan memasaknya). Tuang sup mendidih. Hidangkan topping.'
      ]
    }
  },
  'vn-02': {
    'zh-CN': {
      title: '越南法式面包',
      description: '源自越南胡志明市的正宗食谱',
      ingredients: [
        { item: '法式长棍面包', amount: '' },
        { item: '肉酱', amount: '' },
        { item: '叉烧肉或烤鸡肉', amount: '' },
        { item: '腌胡萝卜和白萝卜', amount: '' },
        { item: '黄瓜', amount: '' },
        { item: '墨西哥辣椒', amount: '' },
        { item: '香菜', amount: '' },
        { item: '蛋黄酱', amount: '' }
      ],
      instructions: [
        '首先，预热烤架或烤盘至中高火，然后用鱼露、酱油和红糖的混合物调味叉烧肉或烤鸡肉，煎至焦糖化并略带焦痕，散发出浓郁的咸香。',
        '同时，准备腌胡萝卜和白萝卜，将蔬菜切成细丝，并将其浸泡在米醋、糖和盐的卤水中至少30分钟，直到它们达到酸甜可口、口感脆爽。',
        '接下来，将酥脆的法式长棍面包纵向切半，注意不要压扁面包，然后烤至微黄并散发香气，外皮酥脆，内部柔软。',
        '在法式长棍面包的下半部分涂上一层奶油肉酱，然后挤上一小团蛋黄酱，使用抹刀制作光滑均匀的涂层，并注意不要过度填充面包。',
        '在肉酱和蛋黄酱上铺上烤猪肉或鸡肉，然后放一勺腌胡萝卜和白萝卜，几片清爽的黄瓜，再撒上少量切成薄片的墨西哥辣椒，小心地平衡风味和质地，以达到和谐、均衡的口感。',
        '最后，在越南法式面包上撒上一把芬芳的新鲜香菜叶，其明亮、柑橘般的风味和细腻的质地为菜肴增添了一抹亮色和一丝清新。',
        '最后，将法式长棍面包的上半部分盖在三明治上，轻轻按压以形成紧凑、完整的整体，并立即上桌，趁面包仍然酥脆，风味最鲜明浓郁时享用。',
        '当越南法式面包上桌时，酥脆的面包、奶油肉酱、酸甜的腌制蔬菜、咸香的肉类和新鲜香草的组合应和谐地融合在一起，风味和质地达到完美平衡，每一口都完美展现了这道菜的越南和法国风味影响。'
      ]
    },
    ms: {
      title: 'Banh Mi',
      description: 'Resipi asli dari Bandar Ho Chi Minh, Vietnam',
      ingredients: [
        { item: 'Baguette Perancis', amount: '' },
        { item: 'Pâté', amount: '' },
        { item: 'Daging babi Char Siu atau ayam panggang', amount: '' },
        { item: 'Lobak merah & daikon jeruk', amount: '' },
        { item: 'Timun', amount: '' },
        { item: 'Jalapeño', amount: '' },
        { item: 'Daun ketumbar', amount: '' },
        { item: 'Mayonis', amount: '' }
      ],
      instructions: [
        'Mulakan dengan memanaskan gril atau kuali gril ke api sederhana tinggi, kemudian perasakan daging babi Char Siu atau ayam panggang dengan campuran sos ikan, kicap, dan gula perang, dan bakar sehingga karamel dan sedikit hangus, dengan aroma yang kaya dan berperisa.',
        'Sementara itu, sediakan lobak merah dan daikon jeruk dengan menghiris sayur-sayuran secara julienne dan merendamnya dalam air garam cuka beras, gula, dan garam selama sekurang-kurangnya 30 minit, atau sehingga ia mencapai rasa masam manis yang tajam dan tekstur rangup.',
        'Seterusnya, hirisan baguette Perancis yang rangup separuh memanjang, berhati-hati agar tidak memampatkan roti, dan bakar sehingga sedikit perang dan wangi, dengan kerangupan halus di luar yang menyerah kepada bahagian dalam yang lembut.',
        'Sapu lapisan pâté berkrim di bahagian bawah baguette, diikuti dengan sedikit mayonis, menggunakan spatula offset untuk mencipta lapisan yang licin dan sekata, dan berhati-hati agar tidak terlalu mengisi roti.',
        'Lapisan daging babi atau ayam panggang di atas pâté dan mayonis, diikuti dengan sesudu lobak merah dan daikon jeruk, beberapa hirisan timun yang menyegarkan, dan taburan hirisan jalapeño nipis, mengimbangi rasa dan tekstur dengan teliti untuk mencapai gigitan yang harmoni dan seimbang.',
        'Akhiri Banh Mi dengan menaburkan segenggam daun ketumbar segar yang wangi di atasnya, rasa cerah dan sitrus serta tekstur halusnya menambah warna dan sentuhan kesegaran pada hidangan.',
        'Akhir sekali, letakkan bahagian atas baguette di atas sandwic, tekan perlahan untuk mencipta unit yang padat dan padu, dan hidangkan segera, sementara roti masih rangup dan rasa berada pada tahap yang paling cerah dan sengit.',
        'Apabila Banh Mi dihidangkan, gabungan roti rangup, pâté berkrim, sayur-sayuran jeruk manis dan masam, daging berperisa, dan herba segar harus sebati dalam keseimbangan rasa dan tekstur yang harmoni, dengan setiap gigitan merupakan representasi sempurna pengaruh Vietnam dan Perancis hidangan tersebut.'
      ]
    }
  },
  'vn-03': {
    'zh-CN': {
      title: '越南烤肉米粉 (Bun Cha)',
      description: '源自越南河内的正宗食谱',
      ingredients: [
        { item: '米粉', amount: '' },
        { item: '猪肉饼', amount: '' },
        { item: '五花肉', amount: '' },
        { item: '鱼露蘸汁', amount: '' },
        { item: '新鲜香草', amount: '' },
        { item: '豆芽', amount: '' }
      ],
      instructions: [
        '首先，按照包装说明准备米粉，通常是将其浸泡在热水中，直到它们变得半透明并略微变软，然后沥干并放在一边，以防煮过头。',
        '接下来，准备猪肉饼，将猪肩肉用绞肉机或食物处理器绞碎，直到达到所需的稠度，然后拌入切碎的青葱、大蒜和鱼露等香料，并塑形为直径约1.5英寸、厚度约0.5英寸的小肉饼。',
        '在另一个过程中，将五花肉切成约0.25英寸厚的薄片，并用盐、黑胡椒和糖的混合物调味，以平衡肉的丰富口感。',
        '将猪肉饼和五花肉片放在中高火的炭火上烤，直到外面形成漂亮的焦痕，肉饼内部温度达到145°F，五花肉内部温度达到160°F，偶尔翻动以确保均匀烹饪，直到肉饼完全煮熟，五花肉变得酥脆金黄。',
        '在烤肉的同时，准备鱼露蘸汁，将鱼露、醋、糖和水放入平底锅中混合，煮沸后转小火慢炖，直到糖溶解，汤汁略微变稠，形成浓郁、咸香、略带甜味的口感。',
        '组装菜肴时，将几片烤五花肉和几个猪肉饼放入一个温热的碗中，然后将热鱼露蘸汁浇在上面，确保猪肉大部分浸没在汤汁中，并用薄荷、罗勒和香菜等各种新鲜香草以及少许豆芽装饰，以增加口感和新鲜度。',
        '最后，立即上菜，搭配煮熟的米粉，并指导食客在食用时将面条和新鲜香草蘸入汤碗中，让菜肴的各种风味在每一口中融合，质地相互对比和补充。'
      ]
    },
    ms: {
      title: 'Bun Cha (Miang Daging Bakar Vietnam)',
      description: 'Resipi asli dari Hanoi, Vietnam',
      ingredients: [
        { item: 'Bihun', amount: '' },
        { item: 'Pati daging babi', amount: '' },
        { item: 'Perut babi', amount: '' },
        { item: 'Kuah celup sos ikan', amount: '' },
        { item: 'Herba hijau', amount: '' },
        { item: 'Taugeh', amount: '' }
      ],
      instructions: [
        'Mulakan dengan menyediakan bihun mengikut arahan pada bungkusan, biasanya dengan merendamnya dalam air panas sehingga menjadi lutsinar dan sedikit lembut, kemudian toskan dan ketepikan untuk mengelakkan terlebih masak.',
        'Seterusnya, sediakan pati daging babi dengan mengisar bahu babi dalam pengisar daging atau pemproses makanan sehingga mencapai konsistensi yang diingini, kemudian campurkan dengan aromatik seperti bawang merah cincang, bawang putih, dan sos ikan, dan bentuk menjadi pati kecil, kira-kira 1 1/2 inci diameter dan 1/2 inci tebal.',
        'Dalam proses yang berasingan, hirisan perut babi menjadi jalur nipis, kira-kira 1/4 inci tebal, dan perasakan dengan campuran garam, lada hitam, dan gula untuk mengimbangi kekayaan daging.',
        'Panggang pati daging babi dan jalur perut di atas arang, menggunakan api sederhana tinggi, sehingga ia membentuk lapisan hangus yang cantik di luar dan mencapai suhu dalaman 145°F untuk pati dan 160°F untuk perut, balikkan sekali-sekala untuk mencapai masakan yang sekata, sehingga pati masak sepenuhnya dan perut menjadi rangup dan perang keemasan.',
        'Semasa daging babi dipanggang, sediakan kuah celup sos ikan dengan menggabungkan sos ikan, cuka, gula, dan air dalam periuk, didihkan campuran, kemudian kurangkan api menjadi reneh dan masak sehingga gula larut dan kuah sedikit pekat, menghasilkan profil rasa yang kaya, savuri, dan sedikit manis.',
        'Untuk menyusun hidangan, letakkan beberapa hirisan perut babi panggang dan beberapa pati daging babi ke dalam mangkuk suam, kemudian sendukkan kuah celup sos ikan panas di atasnya, pastikan daging babi sebahagian besarnya terendam dalam kuah, dan hias dengan pelbagai herba hijau, seperti pudina, selasih, dan ketumbar, serta taburan taugeh untuk tekstur dan kesegaran tambahan.',
        'Akhir sekali, hidangkan Bun Cha segera, dengan bihun yang telah dimasak di sisi, dan arahkan pengunjung untuk mencelup mi dan herba segar ke dalam mangkuk kuah semasa mereka makan, membolehkan rasa hidangan bercampur dengan setiap suapan, dan tekstur untuk kontras dan melengkapi satu sama lain.'
      ]
    }
  },
  'vn-04': {
    'zh-CN': {
      title: '越南鲜虾卷 (Goi Cuon)',
      description: '源自越南胡志明市的正宗食谱',
      ingredients: [
        { item: '米纸', amount: '' },
        { item: '熟虾', amount: '' },
        { item: '米粉', amount: '' },
        { item: '生菜', amount: '' },
        { item: '薄荷', amount: '' },
        { item: '黄瓜', amount: '' },
        { item: '花生海鲜酱', amount: '' }
      ],
      instructions: [
        '首先准备米纸：在一个大碗中装满约100°F至110°F的温水，将米纸两面各浸泡约5到10秒，直到它们变软且有弹性，但仍保持一定的韧度。',
        '将一张变软的米纸平铺在潮湿、干净的表面上，例如铺有保鲜膜的砧板或微湿的茶巾，以防止米纸粘连并方便卷制。',
        '将一小撮煮熟的米粉，约1/4杯，放在米纸的中心，边缘留出1英寸的空白，轻轻按压米粉，使其形成平坦均匀的一层。',
        '在米粉上面，放上几片脆生菜叶，撒上少许芳香的薄荷和罗勒，以及几片清爽的黄瓜薄片，所有这些都应切成薄而均匀的块状，以确保风味和质地的均匀分布。',
        '接下来，放上2到3只多汁的熟虾，去皮去肠，放在生菜和香草的上面，排成一条直线，以便卷制并创造出美观的摆盘。',
        '要卷制春卷，将米纸的下半部分折叠到馅料上，紧紧地塞入，然后将两侧向内折叠，向上卷起米纸，形成一个紧凑的圆柱形，施加轻柔的压力以压实食材并形成紧密的密封。',
        '用剩余的食材重复此过程，制作多个春卷，并立即与一份奶油花生海鲜酱一起食用，该酱汁通过将海鲜酱、花生酱、青柠汁和辣椒片混合搅拌，直到光滑如丝，具有浓郁的坚果风味和微妙的辣味。'
      ]
    },
    ms: {
      title: 'Goi Cuon (Popia Segar)',
      description: 'Resipi asli dari Ho Chi Minh City, Vietnam',
      ingredients: [
        { item: 'Kulit popia beras', amount: '' },
        { item: 'Udang masak', amount: '' },
        { item: 'Bihun', amount: '' },
        { item: 'Salad', amount: '' },
        { item: 'Pudina', amount: '' },
        { item: 'Timun', amount: '' },
        { item: 'Sos hoisin kacang', amount: '' }
      ],
      instructions: [
        'Mulakan dengan menyediakan kulit popia beras: isi mangkuk besar dengan air suam, kira-kira 100°F hingga 110°F, dan rendam kulit popia sebentar selama kira-kira 5 hingga 10 saat setiap sisi, sehingga ia menjadi lembut dan mudah lentur, tetapi masih mengekalkan sedikit kekenyalan.',
        'Letakkan kulit popia beras yang telah dilembutkan rata di atas permukaan yang lembap dan bersih, seperti papan pemotong yang ditutup dengan pembalut plastik atau tuala teh yang sedikit dilembapkan, untuk mengelakkan kulit popia melekat dan memudahkan proses menggulung.',
        'Tambahkan segenggam kecil bihun yang telah dimasak, kira-kira 1/4 cawan, ke tengah kulit popia, tinggalkan sempadan 1 inci di sekeliling tepi, dan tekan bihun perlahan-lahan untuk membentuk lapisan yang rata dan sekata.',
        'Di atas bihun, tambahkan beberapa helai daun salad rangup, taburan pudina dan selasih yang wangi, dan beberapa hirisan timun yang menyegarkan, semuanya perlu dicincang atau dihiris menjadi kepingan nipis dan seragam untuk memastikan pengagihan rasa dan tekstur yang sekata.',
        'Seterusnya, tambahkan 2 hingga 3 ekor udang masak yang lazat, telah dikupas dan dibuang urat, di atas salad dan herba, susun dalam satu barisan lurus untuk memudahkan menggulung dan untuk mencipta persembahan yang menarik secara visual.',
        'Untuk menyusun gulungan, lipat bahagian bawah kulit popia beras ke atas inti, selitkan dengan ketat, kemudian lipat sisi dan gulung kulit popia untuk membentuk bentuk silinder yang padat, berikan tekanan lembut untuk memampatkan bahan-bahan dan mencipta penutup yang ketat.',
        'Ulangi proses dengan bahan-bahan yang tinggal untuk mencipta beberapa gulungan, dan hidangkan segera dengan sos hoisin kacang berkrim di sisi, dibuat dengan mengisar sos hoisin, mentega kacang, jus limau nipis, dan serpihan cili, sehingga licin dan baldu, dengan rasa kacang yang mendalam dan sedikit kepedasan.'
      ]
    }
  },
  'vn-05': {
    'zh-CN': {
      title: '会安高楼面 (Cao Lau)',
      description: '源自越南会安的正宗食谱',
      ingredients: [
        { item: '高楼面', amount: '' },
        { item: '叉烧肉', amount: '' },
        { item: '豆芽', amount: '' },
        { item: '炸面包丁', amount: '' },
        { item: '蔬菜', amount: '' },
        { item: '酱油汤', amount: '' }
      ],
      instructions: [
        '首先，将高楼面放入一大锅沸腾的盐水中煮，直到它们略带嚼劲，表明已达到弹牙状态，然后立即将其浸入冰水中以停止烹饪过程并保持其质地。',
        '在面条烹饪的同时，将叉烧肉切成约1/8英寸厚的薄片，然后放在一边，注意逆着纹理切片以确保肉质鲜嫩。',
        '在一个小碗中，将豆芽与一小撮盐和少许新鲜青柠汁拌匀，以增强其天然的甜味和脆度，然后放在一边。',
        '接下来，准备炸面包丁，将法棍切成1/2英寸的方块，放入约350°F的热油中炸至金黄色，频繁搅拌以防烧焦，然后沥干在厨房纸上。',
        '组装菜肴时，将一部分煮熟的面条放入碗底，然后放上一把混合蔬菜，如生菜、罗勒和薄荷，这将为菜肴增添新鲜感和深度。',
        '将切好的叉烧肉铺在蔬菜上，然后放上一勺拌好的豆芽，注意平衡各成分以达到视觉美观。',
        '最后，在菜肴上放上酥脆的炸面包丁，并淋上热酱油汤，酱油汤是通过将酱油、猪肉或鸡肉高汤以及姜蒜等香料一起炖煮，直到液体略微浓缩，风味融合在一起，然后在上菜前将所有食材拌匀，以融合风味和质地。',
        '当汤汁浇下时，炸面包丁会开始变软，各种风味会融合在一起，散发出叉烧肉的香气、蔬菜的新鲜感以及酱油汤的鲜美。'
      ]
    },
    ms: {
      title: 'Cao Lau',
      description: 'Resipi asli dari Hoi An, Vietnam',
      ingredients: [
        { item: 'Mi Cao Lau', amount: '' },
        { item: 'Daging babi Char Siu', amount: '' },
        { item: 'Taugeh', amount: '' },
        { item: 'Kruton', amount: '' },
        { item: 'Sayuran hijau', amount: '' },
        { item: 'Kuah kicap', amount: '' }
      ],
      instructions: [
        'Untuk bermula, masak mi Cao Lau dalam periuk besar berisi air mendidih yang masin sehingga ia sedikit kenyal, menunjukkan ia al dente, kemudian segera masukkan ke dalam mandian ais untuk menghentikan proses memasak dan mengekalkan teksturnya.',
        'Semasa mi sedang dimasak, hirisan daging babi Char Siu menjadi jalur nipis, kira-kira 1/8 inci tebal, dan ketepikan, berhati-hati untuk menghiris melawan urat untuk memastikan kelembutan.',
        'Dalam mangkuk kecil, gaulkan taugeh dengan secubit garam dan perahan jus limau nipis segar untuk meningkatkan kemanisan dan kerangupan semula jadinya, kemudian ketepikan.',
        'Seterusnya, sediakan kruton dengan memotong baguette menjadi kiub 1/2 inci dan menggorengnya dalam minyak panas, kira-kira 350°F, sehingga perang keemasan, kacau dengan kerap untuk mengelakkan hangus, kemudian toskan di atas tuala kertas.',
        'Untuk menyusun hidangan, letakkan sebahagian mi yang telah dimasak di dasar mangkuk, diikuti dengan segenggam sayuran campuran, seperti salad, selasih, dan pudina, yang akan menambah kesegaran dan kedalaman pada hidangan.',
        'Susun daging babi Char Siu yang telah dihiris di atas sayuran, diikuti dengan sesudu taugeh yang telah digaul, berhati-hati untuk mengimbangi komponen untuk daya tarikan visual.',
        'Akhir sekali, letakkan kruton rangup di atas hidangan dan tuangkan kuah kicap panas, dibuat dengan mereneh sos kicap, stok daging babi atau ayam, dan aromatik seperti halia dan bawang putih, sehingga cecair sedikit berkurangan dan rasa telah sebati, kemudian gaulkan bahan-bahan bersama sebelum dihidangkan untuk menggabungkan rasa dan tekstur.',
        'Apabila kuah dituang, kruton akan mula melembut, dan rasa akan sebati, melepaskan aroma daging babi Char Siu, kesegaran sayuran, dan umami savuri kuah kicap.'
      ]
    }
  },
  'tr-01': {
    'zh-CN': {
      title: '土耳其旋转烤肉 (Doner Kebab)',
      description: '源自土耳其伊斯坦布尔的正宗食谱',
      ingredients: [
        { item: '羊肩肉 (切片)', amount: '1公斤' },
        { item: '酸奶腌料', amount: '' },
        { item: '番茄', amount: '' },
        { item: '大饼', amount: '' },
        { item: '红洋葱', amount: '' },
        { item: '漆树粉', amount: '' }
      ],
      instructions: [
        '首先准备酸奶腌料，在一个大碗中混合200克原味酸奶、2汤匙橄榄油、1茶匙孜然粉、1茶匙烟熏辣椒粉、1茶匙盐和1/2茶匙黑胡椒，搅拌至光滑奶油状。',
        '将1公斤切薄片的羊肩肉加入腌料中，搅拌均匀，确保每块肉都完全浸没在酸奶混合物中，然后盖好冷藏过夜，让风味充分渗透肉中。',
        '第二天，预热垂直烤肉架或旋转烤肉机至中高火，然后将腌制好的羊肉片以同心圆模式堆叠，略微重叠，形成一个紧凑的圆柱形。',
        '在垂直烤肉架上烤羊肉，每10分钟旋转一次，直到外层呈金黄色，形成酥脆焦糖化的外皮，而内部肉质保持多汁鲜嫩，大约30-40分钟。',
        '在羊肉烹饪过程中，定期用锋利的长柄刀从外层切下薄片，收集在温热的盘子里，重复此过程直到所有羊肉都烤熟，最终得到一堆鲜嫩美味的肉片。',
        '同时，准备配料，将2个大番茄切成薄片，将1/2个红洋葱切薄片，并将2汤匙芝麻酱与1汤匙新鲜柠檬汁混合，搅拌至光滑奶油状。',
        '组装土耳其烤肉时，将4-6个大饼用锡纸包裹，放入350°F的烤箱中加热5分钟，然后每个大饼中放入几片切好的羊肉、一些番茄片、少许漆树粉、一勺芝麻酱和几片红洋葱，立即上菜。',
        '最后，如果需要，用额外的漆树粉、欧芹或薄荷装饰，趁热享用土耳其烤肉，让羊肉、芝麻酱和漆树粉的芳香风味融合在一起，形成美味、令人满足的和谐。'
      ]
    },
    ms: {
      title: 'Doner Kebab',
      description: 'Resipi asli dari Istanbul, Turki',
      ingredients: [
        { item: 'Bahu kambing (dihiris)', amount: '1kg' },
        { item: 'Perapan yogurt', amount: '' },
        { item: 'Tomato', amount: '' },
        { item: 'Roti leper', amount: '' },
        { item: 'Bawang merah', amount: '' },
        { item: 'Sumac', amount: '' }
      ],
      instructions: [
        'Mulakan dengan menyediakan perapan yogurt, gabungkan 200g yogurt asli dengan 2 sudu besar minyak zaitun, 1 sudu teh jintan tanah, 1 sudu teh paprika salai, 1 sudu teh garam, dan 1/2 sudu teh lada hitam dalam mangkuk besar, pukul sehingga licin dan berkrim.',
        'Tambahkan 1kg bahu kambing yang dihiris nipis ke dalam perapan, gaulkan untuk menyalut secara sekata, memastikan setiap kepingan terendam sepenuhnya dalam campuran yogurt, kemudian tutup dan sejukkan semalaman, membiarkan rasa meresap ke dalam daging.',
        'Keesokan harinya, panaskan pemanggang menegak atau rotisserie ke api sederhana tinggi, kemudian susun hirisan kambing yang telah diperap dalam corak sepusat, bertindih sedikit untuk membentuk bentuk silinder yang padat.',
        'Panggang kambing pada pemanggang menegak, putarkannya setiap 10 minit, sehingga lapisan luar mencapai warna perang keemasan, dengan kerak karamel yang rangup terbentuk, manakala daging dalaman kekal berair dan lembut, kira-kira 30-40 minit.',
        'Semasa kambing dimasak, secara berkala hirisan nipis dari lapisan luar, menggunakan pisau tajam berhulu panjang, dan kumpulkan di atas pinggan suam, ulangi proses ini sehingga seluruh kambing masak, menghasilkan timbunan hirisan yang lembut dan berperisa.',
        'Sementara itu, sediakan hidangan sampingan, hirisan 2 biji tomato besar menjadi baji nipis, hirisan nipis 1/2 biji bawang merah, dan campurkan 2 sudu besar tahini dengan 1 sudu besar jus lemon yang baru diperah, sehingga licin dan berkrim.',
        'Untuk menyusun doner kebab, panaskan 4-6 roti leper dengan membalutnya dalam kerajang dan memanaskannya dalam ketuhar pada suhu 350°F selama 5 minit, kemudian isi setiap roti leper dengan beberapa hirisan kambing yang telah dihiris, beberapa baji tomato, taburan sumac, sesudu sos tahini, dan beberapa hirisan bawang merah, hidangkan segera.',
        'Akhir sekali, hias dengan sumac tambahan, pasli, atau pudina, jika dikehendaki, dan hidangkan doner kebab panas, dengan rasa aromatik kambing, tahini, dan sumac bercampur dalam harmoni yang lazat dan memuaskan.'
      ]
    }
  },
  'tr-02': {
    'zh-CN': {
      title: '果仁蜜饼 (Baklava)',
      description: '源自土耳其伊斯坦布尔的正宗食谱',
      ingredients: [
        { item: '酥皮面团', amount: '' },
        { item: '开心果 (磨碎)', amount: '250克' },
        { item: '黄油', amount: '200克' },
        { item: '糖浆 (加柠檬)', amount: '400毫升' }
      ],
      instructions: [
        '首先，将烤箱预热至180°C，确保热量分布均匀一致，这对于制作出完美金黄的果仁蜜饼至关重要。',
        '接下来，按照包装说明解冻酥皮面团，然后小心地展开面皮，以防开裂或撕裂，并用湿布覆盖以保持其柔韧性。',
        '将酥皮面皮分层铺在一个大烤盘中，每层都刷上足量的融化黄油，每层约50克，以打造一个丰富、酥脆、芳香的糕点基础。',
        '每铺5层面皮后，撒上一层薄而均匀的磨碎开心果，约60克，以形成与光滑糕点形成精致、坚果味和松脆的对比，确保边缘留出1英寸的空白，不撒坚果。',
        '一旦坚果层铺好，再盖上额外的酥皮面皮，每层像之前一样刷上黄油，直到所有食材用完，最后以一层酥皮面皮收尾，刷上剩余的黄油。',
        '用锋利的刀或糕点刀，小心地将果仁蜜饼切成菱形，一直切到底部，以创造出视觉上令人惊艳的呈现并促进均匀烘烤。',
        '将果仁蜜饼放入预热好的烤箱中烘烤45分钟，或者直到顶层呈金黄色，糕点酥脆芳香，带有精致的焦糖光泽，然后从烤箱中取出，冷却5分钟。',
        '最后，将注入柠檬清香的冷糖浆，缓慢均匀地浇在热果仁蜜饼上，让糖浆渗入各层，空气中弥漫着蜂蜜和柑橘的甜美花香，然后让其静置至少4小时，以使风味成熟并融合，方可食用。'
      ]
    },
    ms: {
      title: 'Baklava',
      description: 'Resipi asli dari Istanbul, Turki',
      ingredients: [
        { item: 'Pastri phyllo', amount: '' },
        { item: 'Pistachio (dikisar)', amount: '250g' },
        { item: 'Mentega', amount: '200g' },
        { item: 'Sirap gula (dengan lemon)', amount: '400ml' }
      ],
      instructions: [
        'Untuk bermula, panaskan ketuhar hingga 180°C, memastikan pengagihan haba yang konsisten dan sekata, penting untuk mencapai baklava perang keemasan yang sempurna.',
        'Seterusnya, sediakan pastri phyllo dengan mencairkannya mengikut arahan pada bungkusan, kemudian buka helaian dengan berhati-hati untuk mengelakkan retak atau koyak, dan tutup dengan kain lembap untuk mengekalkan keanjalan.',
        'Susun helaian phyllo dalam hidangan pembakar besar, sapukan setiap helaian dengan mentega cair yang banyak, kira-kira 50g setiap lapisan, untuk mencipta asas pastri yang kaya, rapuh, dan aromatik.',
        'Selepas setiap 5 lapisan phyllo, taburkan lapisan nipis dan sekata pistachio kisar, kira-kira 60g, untuk mencipta kontras yang halus, berbau kacang, dan rangup kepada pastri yang licin, pastikan untuk meninggalkan sempadan 1 inci di sekeliling tepi tanpa kacang.',
        'Setelah lapisan kacang diletakkan, tutup dengan helaian phyllo tambahan, sapukan setiap lapisan dengan mentega seperti sebelumnya, sehingga semua bahan digunakan, akhiri dengan lapisan phyllo di atas, disapu dengan mentega yang tinggal.',
        'Menggunakan pisau tajam atau pemotong pastri, potong baklava dengan berhati-hati menjadi bentuk berlian, potong sehingga ke dasar hidangan, untuk mencipta persembahan yang menakjubkan secara visual dan memudahkan pembakaran yang sekata.',
        'Bakar baklava dalam ketuhar yang telah dipanaskan selama 45 minit, atau sehingga lapisan atas berwarna perang keemasan, dan pastri rangup dan wangi, dengan kilauan karamel yang halus, kemudian keluarkan dari ketuhar dan biarkan sejuk selama 5 minit.',
        'Akhir sekali, tuangkan sirap gula sejuk, yang diselitkan dengan kecerahan lemon, perlahan-lahan dan sekata ke atas baklava panas, membiarkan sirap meresap ke dalam lapisan dan memenuhi udara dengan aroma manis, bunga madu dan sitrus, kemudian biarkan ia berehat selama sekurang-kurangnya 4 jam untuk membiarkan rasa matang dan sebati sebelum dihidangkan.'
      ]
    }
  },
  'tr-03': {
    'zh-CN': {
      title: '曼提 (Manti)',
      description: '来自土耳其开塞利的传统食谱',
      ingredients: [
        { item: '薄面团', amount: '' },
        { item: '调味羊肉馅', amount: '' },
        { item: '蒜味酸奶', amount: '' },
        { item: '黄油红椒酱', amount: '' },
        { item: '薄荷', amount: '' }
      ],
      instructions: [
        '首先，准备薄面团：将面粉、鸡蛋和盐放入立式搅拌机中混合，揉搓10分钟，直到面团变得光滑有弹性，然后用湿布盖住静置30分钟。',
        '接下来，制作馅料：将1个中等大小的洋葱切碎，用2汤匙油在中火平底锅中煮至半透明，然后放凉，再与500克调味羊肉馅、1茶匙孜然和1茶匙辣椒粉混合。',
        '将静置好的面团擀成薄片，厚度约1/16英寸，使用意面机或擀面杖，直到面团几乎半透明且质地均匀。',
        '将擀好的面团切成约2英寸见方的小块，在每块面团中心放入少量羊肉馅，注意不要过量。',
        '将面团四角捏合形成金字塔状，然后按压边缘密封曼提，确保它们紧密闭合，以防烹饪时馅料溢出。',
        '小心地将曼提放入一大锅沸腾的盐水中煮5分钟，或直到它们浮到水面，然后用漏勺捞出并沥干多余的水分。',
        '同时，准备蒜味酸奶：将1杯原味酸奶与1瓣切碎的大蒜和一小撮盐在一个碗中混合，然后冷藏备用。',
        '制作黄油红椒酱：在平底锅中用小火融化2汤匙无盐黄油，然后加入1个切丁的红甜椒，搅拌烹煮，直到甜椒变软，黄油呈金棕色并散发出坚果香气，最后拌入1汤匙切碎的新鲜薄荷。'
      ]
    },
    ms: {
      title: 'Manti',
      description: 'Resipi asli dari Kayseri, Turki',
      ingredients: [
        { item: 'Doh nipis', amount: '' },
        { item: 'Daging kambing cincang berperisa', amount: '' },
        { item: 'Yogurt bawang putih', amount: '' },
        { item: 'Mentega & sos lada merah', amount: '' },
        { item: 'Pudina', amount: '' }
      ],
      instructions: [
        'Untuk bermula, sediakan doh nipis dengan menggabungkan tepung, telur, dan garam dalam pengadun berdiri, kemudian uli selama 10 minit sehingga doh menjadi licin dan elastik, akhirnya biarkan ia berehat selama 30 minit di bawah kain lembap.',
        'Seterusnya, buat inti dengan memotong halus 1 bawang sederhana dan masak dalam kuali dengan 2 sudu besar minyak di atas api sederhana sehingga lutsinar, kemudian biarkan sejuk sebelum mencampurkannya dengan 500g daging kambing cincang berperisa, 1 sudu teh jintan manis, dan 1 sudu teh paprika.',
        'Canaikan doh yang telah direhatkan menjadi kepingan nipis, kira-kira 1/16 inci tebal, menggunakan mesin pasta atau penggelek, sehingga ia menjadi hampir lutsinar dan teksturnya sekata.',
        'Potong doh yang telah dicanai menjadi segi empat kecil, kira-kira 2 inci setiap sisi, dan letakkan sedikit inti kambing di tengah setiap segi empat, berhati-hati agar tidak terlalu banyak inti.',
        'Lipat segi empat menjadi bentuk piramid dengan menyatukan keempat-empat sudut untuk membentuk satu titik, dan tekan tepi-tepi untuk menutup manti, pastikan ia tertutup rapat untuk mengelakkan inti keluar semasa memasak.',
        'Masukkan manti dengan berhati-hati ke dalam periuk besar berisi air mendidih yang telah digaramkan dan masak selama 5 minit, atau sehingga ia terapung ke permukaan, kemudian angkat dengan senduk berlubang dan toskan air berlebihan.',
        'Sementara itu, sediakan yogurt bawang putih dengan mencampurkan 1 cawan yogurt kosong dengan 1 ulas bawang putih cincang dan secubit garam dalam mangkuk, kemudian sejukkan sehingga sedia untuk dihidangkan.',
        'Untuk membuat sos mentega dan lada merah, cairkan 2 sudu besar mentega tanpa garam dalam periuk kecil di atas api perlahan, kemudian masukkan 1 lada benggala merah yang dipotong dadu dan masak, kacau sekali-sekala, sehingga lada lembut dan mentega mempunyai warna perang keemasan serta aroma kekacang, akhirnya masukkan 1 sudu besar pudina segar yang dicincang.'
      ]
    }
  },
  'tr-04': {
    'zh-CN': {
      title: '土耳其披萨 (Lahmacun)',
      description: '来自土耳其加济安泰普的传统食谱',
      ingredients: [
        { item: '披萨薄面团', amount: '' },
        { item: '羊肉馅', amount: '' },
        { item: '番茄', amount: '' },
        { item: '洋葱', amount: '' },
        { item: '甜椒', amount: '' },
        { item: '孜然', amount: '' },
        { item: '红辣椒', amount: '' }
      ],
      instructions: [
        '首先，准备披萨薄面团：在一个大碗中混合1杯温水、2茶匙活性干酵母和1汤匙糖，静置5分钟，直到混合物起泡，表明酵母已活化。',
        '接下来，加入3杯通用面粉、1茶匙盐和2汤匙特级初榨橄榄油到碗中，搅拌面团直到形成粗糙的面团块，然后揉搓10分钟，直到面团变得光滑有弹性，表面呈现微妙的光泽。',
        '同时，准备馅料：将1磅羊肉馅、1/2杯切碎的番茄、1/4杯切碎的洋葱、1/4杯切碎的甜椒、1茶匙孜然粉和1/2茶匙红辣椒片放入食物料理机中搅拌，直到混合物形成光滑、略带块状的糊状，呈深红棕色，散发出浓郁的羊肉和香料香气。',
        '面团静置1小时并膨胀一倍后，将其按压排气并分成4等份，然后用擀面杖在撒有少量面粉的表面上将每份擀成约1/16英寸厚的薄圆形，直到面团变得半透明，几乎可以透视，质地细腻如蕾丝。',
        '将羊肉糊均匀地铺在面团上，边缘留出1/2英寸的边距，然后将土耳其披萨放入预热至500°F (260°C) 的烤箱中烘烤8分钟，或直到饼皮呈金棕色，边缘酥脆，馅料完全煮熟并略微焦糖化，散发出浓郁的肉香，弥漫整个厨房。',
        '将土耳其披萨从烤箱中取出，冷却1分钟，然后撒上切碎的欧芹，挤上少许柠檬汁，再放上几片多汁的番茄，然后紧紧卷成一个整齐紧凑的卷饼，轻轻按压以使馅料和面团紧密结合。',
        '立即享用土耳其披萨，此时饼皮仍然酥脆，馅料温暖芳香，旁边可搭配额外的欧芹、柠檬角和番茄片，让每位食客根据自己的喜好定制卷饼，体验这道标志性土耳其菜肴的鲜活、爆发性风味。'
      ]
    },
    ms: {
      title: 'Lahmacun',
      description: 'Resipi asli dari Gaziantep, Turki',
      ingredients: [
        { item: 'Doh nipis seperti pizza', amount: '' },
        { item: 'Daging kambing cincang', amount: '' },
        { item: 'Tomato', amount: '' },
        { item: 'Bawang', amount: '' },
        { item: 'Lada benggala', amount: '' },
        { item: 'Jintan manis', amount: '' },
        { item: 'Lada merah', amount: '' }
      ],
      instructions: [
        'Untuk bermula, sediakan doh nipis seperti pizza dengan menggabungkan 1 cawan air suam, 2 sudu teh yis kering aktif, dan 1 sudu besar gula dalam mangkuk adunan besar, kemudian biarkan ia berehat selama 5 minit sehingga campuran berbuih, menunjukkan yis telah diaktifkan.',
        'Seterusnya, masukkan 3 cawan tepung serbaguna, 1 sudu teh garam, dan 2 sudu besar minyak zaitun extra-virgin ke dalam mangkuk, adun doh sehingga ia bercantum menjadi gumpalan kasar, kemudian uli selama 10 minit sehingga doh menjadi licin dan elastik, membentuk kilauan halus di permukaannya.',
        'Sementara itu, sediakan topping dengan mengisar 1 paun daging kambing cincang, 1/2 cawan tomato cincang halus, 1/4 cawan bawang cincang halus, 1/4 cawan lada benggala cincang halus, 1 sudu teh jintan manis kisar, dan 1/2 sudu teh serpihan lada merah dalam pemproses makanan sehingga campuran membentuk pes yang licin, sedikit berketul dengan warna merah-coklat gelap dan aroma daging kambing dan rempah yang kuat.',
        'Setelah doh berehat selama 1 jam dan saiznya berganda, tumbuk doh dan bahagikannya kepada 4 bahagian yang sama, kemudian canaikan setiap bahagian menjadi bulatan nipis, kira-kira 1/16 inci tebal, menggunakan penggelek dan permukaan yang ditabur sedikit tepung, sehingga doh menjadi lutsinar dan hampir tembus pandang, dengan tekstur yang halus dan seperti renda.',
        'Sapu pes kambing secara rata di atas doh, tinggalkan sempadan 1/2 inci di sekeliling tepi, kemudian bakar lahmacun dalam ketuhar yang telah dipanaskan pada suhu 500°F (260°C) selama 8 minit, atau sehingga kerak berwarna perang keemasan, tepi-tepi rangup, dan topping masak sepenuhnya serta sedikit karamel, mengeluarkan aroma savuri, daging yang memenuhi dapur.',
        'Keluarkan lahmacun dari ketuhar dan biarkan sejuk selama 1 minit, kemudian taburkan dengan pasli cincang, perah sedikit jus lemon di atasnya, dan tambah beberapa hirisan tomato berair, sebelum menggulungnya dengan ketat menjadi gulungan yang kemas dan padat, dengan tekanan lembut untuk memampatkan inti dan doh bersama.',
        'Hidangkan lahmacun segera, semasa kerak masih rangup dan inti masih hangat dan wangi, dihiasi dengan pasli tambahan, hirisan lemon, dan hirisan tomato di sisi, membolehkan setiap pengunjung menyesuaikan gulungan mereka mengikut citarasa mereka, dan mengalami rasa yang bersemangat dan meletup dari hidangan Turki ikonik ini.'
      ]
    }
  },
  'tr-05': {
    'zh-CN': {
      title: '伊斯坎德尔烤肉 (Iskender Kebab)',
      description: '来自土耳其布尔萨的传统食谱',
      ingredients: [
        { item: '旋转烤肉 (羊肉)', amount: '' },
        { item: '大饼块', amount: '' },
        { item: '酸奶', amount: '' },
        { item: '番茄酱', amount: '' },
        { item: '焦化黄油', amount: '' },
        { item: '漆树粉', amount: '' }
      ],
      instructions: [
        '首先准备旋转烤肉，将鲜嫩美味的羊肩肉切成约1/8英寸厚的薄片，以达到最佳的口感和风味平衡。',
        '接下来，用中高火加热一个大而厚的平底锅，加入少量油以防粘锅，然后将羊肉片煎至形成浓郁的焦糖色外皮，每面约3-4分钟，同时保持内部多汁。',
        '同时，将切块的大饼放入350°F的烤箱中烘烤，偶尔翻动，直到金黄酥脆，发出令人满足的嘎吱声，与酸奶和旋转烤肉的柔软形成口感对比。',
        '准备番茄酱：将切丁的洋葱、大蒜和一小撮盐放入平底锅中，用小火烹煮，偶尔搅拌，直到洋葱变半透明且混合物散发香气，约8-10分钟，然后加入罐装碎番茄、少许特级初榨橄榄油和一小撮漆树粉，将酱汁再炖煮20分钟，定期搅拌，使其变稠，风味融合。',
        '将烤好的大饼块铺在盘底，然后放上一勺奶油酸奶，这有助于冷却和平衡菜肴的温度，接着放上切片的旋转烤肉，最后淋上一勺浓郁、微酸的番茄酱。',
        '上菜前，准备焦化黄油：在一个小平底锅中用中火融化无盐黄油，持续搅拌，直到它散发出坚果香气并变成深金棕色，带有微妙的泡沫质地，然后立即将滋滋作响的焦化黄油淋在分层菜肴上，让温暖、美味的黄油将其深沉的烤香味注入各种食材中。',
        '撒上少许漆树粉和几片新鲜欧芹叶作为装饰，为菜肴增添一丝清新和色彩，然后立即上菜，让每位客人体验伊斯坎德尔烤肉所特有的和谐风味和口感平衡。',
        '上菜时，酥脆的大饼、奶油酸奶和鲜嫩的旋转烤肉，再配上浓郁微甜的番茄酱和深沉坚果味的焦化黄油，将愉悦您的感官，提供一次真正难忘的烹饪体验。'
      ]
    },
    ms: {
      title: 'Iskender Kebab',
      description: 'Resipi asli dari Bursa, Turki',
      ingredients: [
        { item: 'Daging doner (kambing)', amount: '' },
        { item: 'Kepingan roti leper', amount: '' },
        { item: 'Yogurt', amount: '' },
        { item: 'Sos tomato', amount: '' },
        { item: 'Mentega perang', amount: '' },
        { item: 'Sumac', amount: '' }
      ],
      instructions: [
        'Mulakan dengan menyediakan daging doner, hirisan bahu kambing yang lembut dan berperisa menjadi jalur nipis, kira-kira 1/8 inci tebal, untuk mencapai keseimbangan tekstur dan rasa yang optimum.',
        'Seterusnya, panaskan kuali besar dan berat di atas api sederhana-tinggi, masukkan sedikit minyak untuk mengelakkan melekat, kemudian bakar jalur kambing sehingga ia membentuk kerak karamel yang kaya, kira-kira 3-4 minit setiap sisi, sambil mengekalkan bahagian dalam yang berjus.',
        'Sementara itu, bakar kepingan roti leper yang dipotong dadu dalam ketuhar 350°F, kacau sekali-sekala, sehingga perang keemasan dan rangup, dengan kerangupan yang memuaskan yang memberikan kontras tekstur kepada kelembutan yogurt dan daging doner.',
        'Untuk menyediakan sos tomato, gabungkan bawang yang dipotong dadu, bawang putih, dan secubit garam dalam periuk, masak di atas api perlahan, kacau sekali-sekala, sehingga bawang lutsinar dan campuran wangi, kira-kira 8-10 minit, kemudian masukkan tomato hancur dalam tin, sedikit minyak zaitun extra-virgin, dan taburan sumac, renehkan sos selama 20 minit lagi, kacau secara berkala, sehingga ia pekat dan rasa sebati.',
        'Susun kepingan roti leper yang telah dibakar di dasar pinggan hidangan, diikuti dengan sesudu yogurt berkrim, yang membantu menyejukkan dan mengimbangi kehangatan hidangan, kemudian masukkan hirisan daging doner, dan akhirnya sesudu sos tomato yang kaya dan masam.',
        'Sebelum dihidangkan, sediakan mentega perang dengan mencairkan mentega tanpa garam dalam periuk kecil di atas api sederhana, masak, sambil terus mengacau, sehingga ia membentuk aroma kekacang dan bertukar menjadi perang keemasan gelap, dengan tekstur berbuih halus, kemudian segera tuangkan mentega perang yang mendesis di atas hidangan berlapis, membiarkan mentega hangat dan savuri meresap ke dalam pelbagai komponen dengan rasa panggangnya yang mendalam.',
        'Hias dengan taburan sumac dan beberapa daun pasli segar, menambah kesegaran dan warna pada hidangan, kemudian hidangkan segera, membolehkan setiap tetamu mengalami keseimbangan rasa dan tekstur yang harmoni yang mendefinisikan Iskender Kebab.',
        'Apabila hidangan dihidangkan, gabungan roti leper rangup, yogurt berkrim, dan daging doner lembut, semuanya disatukan oleh sos tomato yang kaya, sedikit manis dan rasa kekacang yang mendalam dari mentega perang, akan menggembirakan deria, menawarkan pengalaman kulinari yang benar-benar tidak dapat dilupakan.'
      ]
    }
  },
  'tr-06': {
    'zh-CN': {
      title: '土耳其炒蛋 (Menemen)',
      description: '来自土耳其伊斯坦布尔的传统食谱',
      ingredients: [
        { item: '鸡蛋', amount: '3' },
        { item: '番茄', amount: '2' },
        { item: '青椒', amount: '1' },
        { item: '橄榄油', amount: '' },
        { item: '红辣椒', amount: '' },
        { item: '盐', amount: '' }
      ],
      instructions: [
        '首先，用中火加热一个厚底平底锅，倒入足量的优质橄榄油覆盖锅底，让其闪烁并略微冒烟，表明已达到最佳的炒菜温度。',
        '接下来，小心地将青椒切成薄而均匀的条状，去除籽和膜以确保酥脆而嫩滑的口感，然后将其加入平底锅中，翻炒至开始变软并呈现半透明光泽，偶尔搅拌以防烧焦。',
        '将切丁的新鲜番茄加入平底锅中，其鲜艳的红色增添了视觉吸引力，继续烹煮，频繁搅拌，直到番茄分解，混合物达到嫩滑、焦糖化的和谐状态，青椒和番茄融合在一起，形成甜咸的结合。',
        '在青椒和番茄混合物烹煮的同时，将3个大号农家鲜鸡蛋打入一个小碗中，用叉子轻轻搅打，打散蛋黄，创造出光滑、奶油般的质地，注意不要过度搅打，以免混入过多空气。',
        '一旦青椒和番茄混合物达到所需的熟度，在混合物中挖出3个小坑，然后轻轻倒入搅打好的鸡蛋，让鸡蛋短暂地不受干扰地烹煮，直到蛋白凝固，蛋黄仍保持其金黄、流动的浓郁状态。',
        '用耐热刮刀将鸡蛋轻轻搅拌入青椒和番茄混合物中，注意保持蛋黄的柔滑质地，再烹煮1-2分钟，直到鸡蛋达到所需的熟度，从流动的熔岩状到奶油状和完全凝固。',
        '最后，在菜肴顶部撒上一小撮片状粗盐，增添咸味和口感，接着撒上少许磨碎的烟熏红辣椒，其深沉、略带甜味的辣味与鸡蛋的浓郁和番茄的鲜亮交织在一起。',
        '最后，将土耳其炒蛋直接从平底锅中盛出，用少许新鲜香草装饰，搭配一块酥脆的手工面包，非常适合蘸取美味的酱汁混合物，享受这道传统土耳其菜肴中和谐的风味和口感平衡。'
      ]
    },
    ms: {
      title: 'Menemen',
      description: 'Resipi asli dari Istanbul, Turki',
      ingredients: [
        { item: 'Telur', amount: '3 biji' },
        { item: 'Tomato', amount: '2 biji' },
        { item: 'Lada hijau', amount: '1 biji' },
        { item: 'Minyak zaitun', amount: '' },
        { item: 'Cili merah', amount: '' },
        { item: 'Garam', amount: '' }
      ],
      instructions: [
        'Pertama, panaskan kuali berat di atas api sederhana, masukkan minyak zaitun berkualiti tinggi yang banyak untuk melapisi dasar, biarkan ia berkilau dan sedikit berasap, menandakan ia telah mencapai suhu optimum untuk menumis.',
        'Seterusnya, hirisan lada hijau dengan berhati-hati menjadi jalur nipis dan seragam, buang biji dan membran untuk memastikan tekstur rangup namun lembut, kemudian masukkan ke dalam kuali, tumis sehingga ia mula melembut dan membentuk kilauan lutsinar, kacau sekali-sekala untuk mengelakkan hangus.',
        'Masukkan tomato segar yang dipotong dadu ke dalam kuali, warna merahnya yang terang menambah daya tarikan visual, dan teruskan memasak, kacau dengan kerap, sehingga ia hancur dan campuran mencapai keadaan harmoni yang lembut dan karamel, dengan lada dan tomato sebati dalam gabungan manis dan savuri.',
        'Semasa campuran lada dan tomato sedang dimasak, pecahkan 3 biji telur segar dari ladang ke dalam mangkuk kecil, pukul perlahan dengan garpu untuk memecahkan kuning telur dan mencipta tekstur yang licin, berkrim, berhati-hati agar tidak terlalu pukul dan memasukkan terlalu banyak udara.',
        'Setelah campuran lada dan tomato mencapai tahap kematangan yang diingini, buat 3 lubang kecil dalam campuran, dan tuangkan telur yang telah dipukul dengan perlahan ke dalam lubang ini, biarkan telur masak tanpa gangguan seketika, sehingga putih telur mengeras dan kuning telur masih mengekalkan kekayaan keemasan dan cairnya.',
        'Menggunakan spatula tahan panas, kacau telur perlahan-lahan ke dalam campuran lada dan tomato, berhati-hati untuk mengekalkan tekstur kuning telur yang baldu, dan masak selama 1-2 minit lagi, sehingga telur mencapai tahap kematangan yang diingini, dari cair dan meleleh hingga berkrim dan mengeras sepenuhnya.',
        'Untuk melengkapkan hidangan, taburkan secubit garam kosher yang berkerak di atasnya, menambah letupan rasa savuri dan tekstur, diikuti dengan beberapa kisaran cili merah kering berasap, kepedasannya yang mendalam, sedikit manis bercampur dengan kekayaan telur dan kecerahan tomato.',
        'Akhir sekali, hidangkan Menemen terus dari kuali, dihiasi dengan taburan herba segar dan roti artisan yang rangup di sisi, sesuai untuk menyerap campuran berkuah yang berperisa, dan nikmati keseimbangan rasa dan tekstur yang harmoni dalam hidangan tradisional Turki ini.'
      ]
    }
  },
  'es-01': {
    'zh-CN': {
      title: '瓦伦西亚海鲜饭 (Paella Valenciana)',
      description: '来自西班牙瓦伦西亚的传统食谱',
      ingredients: [
        { item: '海鲜饭专用米', amount: '' },
        { item: '大虾', amount: '' },
        { item: '贻贝', amount: '' },
        { item: '鸡肉', amount: '' },
        { item: '藏红花', amount: '' },
        { item: '红椒粉', amount: '' },
        { item: '番茄', amount: '' },
        { item: '大蒜', amount: '' },
        { item: '橄榄油', amount: '' }
      ],
      instructions: [
        '首先，用中高火加热一个大型传统海鲜饭锅或类似的宽浅平底锅，然后加入足量的特级初榨橄榄油，约2-3汤匙，涂满锅底，旋转以确保均匀覆盖。',
        '接下来，小心地将鸡肉加入锅中，用盐和任何其他所需的香草或香料调味，煎至四面金黄，约5-7分钟，使鸡肉形成浓郁的焦糖色外皮。',
        '将大虾和贻贝加入锅中，轻轻搅拌与鸡肉和油混合，再煮2-3分钟，直到海鲜略微煎黄并散发香气，然后用漏勺将鸡肉和海鲜从锅中取出，备用。',
        '锅仍在中高火上，加入切丁的番茄、烟熏红椒粉和一小撮藏红花丝到油中，搅拌混合并煮约2-3分钟，直到番茄开始分解，混合物散发香气，带有藏红花独特的泥土香气和红椒粉的烟熏味。',
        '将海鲜饭专用米加入锅中，搅拌使米粒均匀裹上油，并分布番茄和香料混合物，将米饭烤约2分钟，直到其略呈金黄色并散发香气，然后将加热的鸡汤或蔬菜汤加入锅中，轻轻搅拌混合。',
        '将鸡肉和海鲜放回锅中，以美观的方式排列食材，然后将混合物煮沸，转小火，不加搅拌地煮20分钟，让米饭吸收美味的液体，食材融合在一起，米粒膨胀，菜肴散发出浓郁的咸香。',
        '烹饪时间结束后，将锅从火上移开，静置5分钟，不加搅拌，让风味成熟，米饭蒸熟，藏红花和红椒粉将独特的芳香风味注入菜肴中。',
        '最后，趁热上菜，用新鲜香草（如欧芹或迷迭香）装饰，如果需要，可挤上少许柠檬汁，多汁的海鲜、浓郁的鸡肉和美味的米饭的组合将创造一次真正难忘的烹饪体验。'
      ]
    },
    ms: {
      title: 'Paella Valenciana',
      description: 'Resipi asli dari Valencia, Sepanyol',
      ingredients: [
        { item: 'Nasi paella', amount: '' },
        { item: 'Udang', amount: '' },
        { item: 'Kupang', amount: '' },
        { item: 'Ayam', amount: '' },
        { item: 'Saffron', amount: '' },
        { item: 'Paprika', amount: '' },
        { item: 'Tomato', amount: '' },
        { item: 'Bawang putih', amount: '' },
        { item: 'Minyak zaitun', amount: '' }
      ],
      instructions: [
        'Pertama, panaskan kuali paella tradisional yang besar atau kuali cetek besar yang serupa di atas api sederhana-tinggi, kemudian masukkan minyak zaitun extra virgin yang banyak, kira-kira 2-3 sudu besar, untuk melapisi dasar kuali, pusingkan untuk memastikan liputan sekata.',
        'Seterusnya, masukkan ayam dengan berhati-hati ke dalam kuali, perasakan dengan garam dan herba atau rempah lain yang diingini, dan bakar sehingga perang keemasan di semua sisi, kira-kira 5-7 minit, membentuk kerak karamel yang kaya pada ayam.',
        'Masukkan udang dan kupang ke dalam kuali, kacau perlahan untuk menggabungkan dengan ayam dan minyak, dan masak selama 2-3 minit lagi, sehingga makanan laut sedikit perang dan wangi, kemudian keluarkan ayam dan makanan laut dari kuali dengan senduk berlubang dan ketepikan.',
        'Dengan kuali masih di atas api sederhana-tinggi, masukkan tomato yang dipotong dadu, paprika salai, dan secubit benang saffron ke dalam minyak, kacau untuk menggabungkan dan masak selama kira-kira 2-3 minit, sehingga tomato mula hancur dan campuran wangi, dengan aroma tanah saffron yang tersendiri dan rasa salai paprika.',
        'Masukkan nasi paella ke dalam kuali, kacau untuk melapisi nasi dengan minyak dan menyebarkan campuran tomato dan rempah secara rata, bakar nasi selama kira-kira 2 minit, sehingga ia sedikit keemasan dan wangi, kemudian masukkan stok ayam atau sayur yang telah dipanaskan ke dalam kuali, kacau perlahan untuk menggabungkan.',
        'Kembalikan ayam dan makanan laut ke dalam kuali, susun bahan-bahan dalam corak yang menarik secara visual, kemudian biarkan campuran mendidih, kurangkan api ke tahap rendah dan masak, tanpa gangguan, selama 20 minit, membiarkan nasi menyerap cecair berperisa dan bahan-bahan sebati, dengan butiran nasi membengkak dan hidangan membentuk aroma savuri yang kaya.',
        'Setelah masa memasak tamat, angkat kuali dari api dan biarkan ia berehat, tanpa gangguan, selama 5 minit, membiarkan rasa matang dan nasi mengukus, dengan saffron dan paprika meresap hidangan dengan rasa aromatiknya yang tersendiri.',
        'Akhir sekali, hidangkan paella panas, dihiasi dengan herba segar, seperti pasli atau rosemary, dan perahan jus lemon, jika diingini, dengan gabungan makanan laut yang lazat, ayam yang kaya, dan nasi yang berperisa mencipta pengalaman kulinari yang benar-benar tidak dapat dilupakan.'
      ]
    }
  },
  'es-02': {
    'zh-CN': {
      title: 'Tortilla Española (西班牙土豆鸡蛋饼)',
      description: '来自西班牙马德里的正宗食谱',
      ingredients: [
        { item: '鸡蛋', amount: '5个' },
        { item: '土豆', amount: '3个' },
        { item: '洋葱（可选）', amount: '1个' },
        { item: '橄榄油', amount: '' },
        { item: '盐', amount: '' }
      ],
      instructions: [
        '开始制作西班牙土豆鸡蛋饼，仔细挑选3个优质土豆并去皮，注意去除任何芽眼或瑕疵，以免影响菜肴的质地和外观。',
        '将去皮的土豆切成非常薄的圆片，最好使用切片器以确保厚度均匀，这对于土豆饼的均匀烹饪和整体外观至关重要。',
        '在一个大的厚底煎锅中，用小火加热足量的橄榄油，直到油温达到适合油封的程度，大约200°F至220°F（约93°C至104°C），此时油面应泛光但不出烟。',
        '将切好的土豆片轻轻放入温热的橄榄油中，确保它们完全浸没，然后用小火慢煮约20分钟，或直到用叉子刺入时变软并呈现出细腻、奶油般的质地，注意不要让煎锅过满。',
        '在土豆慢煮的同时，如果使用洋葱，将其切碎备用。然后在一个大碗中打入5个鸡蛋，加入一小撮盐，搅打至鸡蛋充分混合并略带气泡，这将改善土豆饼的质地和结构。',
        '土豆慢煮完成后，用厨房纸巾沥干多余的油，并让其稍微冷却。然后将土豆片轻轻拌入打好的鸡蛋中，注意不要弄碎土豆片，如果需要，可再加盐调味。',
        '接下来，用中火加热一个较小的平底不粘锅，加入少量橄榄油，转动锅子使其均匀涂抹。然后倒入鸡蛋土豆混合物，不搅动地烹饪，直到边缘开始凝固，底部呈金黄色，大约4到5分钟。',
        '为了完成土豆饼的烹饪，用铲子小心地松开边缘，然后将一个大盘子盖在煎锅上，将土豆饼翻转到盘子上，再将其滑回煎锅中，继续烹饪3分钟，或直到另一面也呈金黄色且土豆饼完全凝固，此时即可切片享用。'
      ]
    },
    ms: {
      title: 'Tortilla Española (Omelet Kentang Sepanyol)',
      description: 'Resipi asli dari Madrid, Sepanyol',
      ingredients: [
        { item: 'telur', amount: '5 biji' },
        { item: 'kentang', amount: '3 biji' },
        { item: 'bawang besar (pilihan)', amount: '1 biji' },
        { item: 'Minyak zaitun', amount: '' },
        { item: 'Garam', amount: '' }
      ],
      instructions: [
        'Untuk memulakan penyediaan Tortilla Española, pilih 3 biji kentang berkualiti tinggi dengan teliti dan kupas kulitnya, pastikan untuk membuang sebarang mata atau cela yang boleh menjejaskan tekstur dan penampilan hidangan.',
        'Hiris kentang yang telah dikupas menjadi kepingan bulat yang sangat nipis, sebaik-baiknya menggunakan mandolin untuk mencapai keseragaman, yang penting untuk masakan yang sekata dan persembahan keseluruhan tortilla.',
        'Dalam kuali besar yang berat, panaskan sejumlah besar minyak zaitun di atas api perlahan sehingga mencapai suhu yang sesuai untuk confit, kira-kira 200°F hingga 220°F (93°C hingga 104°C), di mana minyak sepatutnya berkilau tetapi tidak berasap.',
        'Masukkan hirisan kentang perlahan-lahan ke dalam minyak zaitun yang telah dipanaskan, pastikan ia terendam sepenuhnya, dan masak secara perlahan (confit) selama kira-kira 20 minit, atau sehingga ia lembut apabila dicucuk dengan garpu dan telah menghasilkan tekstur yang halus dan berkrim, berhati-hati agar tidak memenuhi kuali terlalu padat.',
        'Semasa kentang sedang dimasak secara confit, cincang halus 1 biji bawang besar, jika digunakan, dan ketepikan. Kemudian pukul 5 biji telur dalam mangkuk besar dengan secubit garam sehingga telur dipukul rata dan sedikit berudara, yang akan meningkatkan tekstur dan struktur tortilla.',
        'Setelah kentang selesai dimasak secara confit, toskan di atas tuala kertas untuk membuang minyak berlebihan dan biarkan ia sejuk sedikit. Kemudian masukkan kentang perlahan-lahan ke dalam telur yang telah dipukul, berhati-hati agar tidak memecahkan hirisan kentang, dan perasakan dengan garam tambahan jika perlu.',
        'Seterusnya, panaskan kuali non-stick yang lebih kecil di atas api sederhana dan masukkan sedikit minyak zaitun, putar untuk menyalut kuali secara sekata, sebelum menuangkan campuran telur dan kentang. Masak tanpa diganggu sehingga bahagian tepi mula mengeras dan bahagian bawah berwarna perang keemasan, kira-kira 4 hingga 5 minit.',
        'Untuk menyelesaikan masakan tortilla, gunakan spatula untuk melonggarkan bahagian tepi dengan berhati-hati, kemudian letakkan pinggan besar di atas kuali dan terbalikkan tortilla ke atas pinggan, sebelum meluncurkannya kembali ke dalam kuali untuk dimasak selama 3 minit lagi, atau sehingga bahagian lain juga berwarna perang keemasan dan tortilla telah masak sepenuhnya, pada ketika itu ia sedia untuk dihiris dan dihidangkan.'
      ]
    }
  },
  'es-03': {
    'zh-CN': {
      title: 'Gazpacho (西班牙冷汤)',
      description: '来自西班牙塞维利亚的正宗食谱',
      ingredients: [
        { item: '熟透的番茄', amount: '4个' },
        { item: '黄瓜', amount: '1根' },
        { item: '红甜椒', amount: '1个' },
        { item: '大蒜', amount: '2瓣' },
        { item: '雪利醋', amount: '' },
        { item: '橄榄油', amount: '' },
        { item: '面包（浸泡过）', amount: '' }
      ],
      instructions: [
        '首先选择四个熟透的番茄，挑选那些颜色深红、触感略软的，这表明它们成熟度和甜度最佳。用冷水轻轻清洗番茄以去除污垢或杂质，然后用干净的毛巾拍干以去除多余水分。',
        '接下来，准备黄瓜和红甜椒，将它们纵向切半，挖出种子和任何白色内膜，这些可能会给菜肴带来苦味。将黄瓜和红甜椒粗略切成大块，注意保持其鲜艳的颜色和爽脆的质地。',
        '将两瓣大蒜切碎，使用锋利的刀释放其浓郁的香气和风味化合物。注意不要过度处理大蒜，因为这可能导致成品冷汤产生苦味。',
        '将一块硬皮面包在冷水中浸泡每面约30秒，使其吸收足够的水分以软化质地，但不要变得过于湿软。将浸泡过的面包撕成小块，加入到其他切好的蔬菜中。',
        '在一个大功率搅拌机或食物处理器中，将切好的番茄、黄瓜、红甜椒、大蒜和面包混合。高速搅拌混合物，逐渐加入少许特级初榨橄榄油和雪利醋，直到冷汤达到光滑奶油般的稠度，根据需要停下来刮下搅拌机壁上的混合物。',
        '品尝冷汤并根据需要调整调味料，平衡番茄的甜味、醋的酸味和橄榄油的浓郁。用保鲜膜盖住搅拌机或大碗，将冷汤冷藏至少2小时，让其风味充分融合并冷却。',
        '上菜前，充分搅拌冷汤并再次品尝，进行任何最后的调味调整。将冰镇的冷汤盛入碗中，每份最后淋上少许橄榄油，并撒上切丁的蔬菜，如小番茄丁或切碎的黄瓜，为菜肴增添色彩和新鲜感。'
      ]
    },
    ms: {
      title: 'Gazpacho (Sup Sejuk Sepanyol)',
      description: 'Resipi asli dari Seville, Sepanyol',
      ingredients: [
        { item: 'tomato masak', amount: '4 biji' },
        { item: 'timun', amount: '1 biji' },
        { item: 'lada benggala merah', amount: '1 biji' },
        { item: 'bawang putih', amount: '2 ulas' },
        { item: 'Cuka Sherry', amount: '' },
        { item: 'Minyak zaitun', amount: '' },
        { item: 'Roti (direndam)', amount: '' }
      ],
      instructions: [
        'Mulakan dengan memilih empat biji tomato masak, pilih yang berwarna merah pekat dan sedikit lembut apabila disentuh, menunjukkan kematangan dan kemanisan yang optimum. Basuh tomato perlahan-lahan dalam air sejuk untuk membuang kotoran atau serpihan, kemudian keringkan dengan tuala bersih untuk membuang kelembapan berlebihan.',
        'Seterusnya, sediakan timun dan lada benggala merah dengan memotongnya separuh memanjang dan membuang biji serta isi putih, yang boleh menambah rasa pahit pada hidangan. Cincang kasar timun dan lada benggala merah menjadi kepingan besar, berhati-hati untuk mengekalkan warna cerah dan tekstur rangupnya.',
        'Cincang dua ulas bawang putih, menggunakan pisau tajam untuk melepaskan aroma dan sebatian rasa yang kuat. Berhati-hati agar tidak memproses bawang putih secara berlebihan, kerana ini boleh menyebabkan rasa pahit dalam gazpacho yang telah siap.',
        'Rendam roti berkerak dalam air sejuk selama kira-kira 30 saat setiap sisi, biarkan ia menyerap kelembapan yang cukup untuk melembutkan teksturnya tanpa menjadi terlalu lembik. Koyakkan roti yang telah direndam menjadi kepingan kecil dan masukkan ke dalam sayur-sayuran cincang yang lain.',
        'Dalam pengisar berkuasa tinggi atau pemproses makanan, gabungkan tomato cincang, timun, lada benggala merah, bawang putih, dan roti. Kisar campuran pada kelajuan tinggi, secara beransur-ansur menambah sedikit minyak zaitun extra-virgin dan sedikit cuka Sherry, sehingga gazpacho mencapai konsistensi yang licin dan berkrim, berhenti untuk mengikis dinding pengisar mengikut keperluan.',
        'Rasa gazpacho dan sesuaikan perasaannya mengikut keperluan, mengimbangi kemanisan tomato dengan keasidan cuka dan kekayaan minyak zaitun. Tutup pengisar atau mangkuk besar dengan pembalut plastik, sejukkan gazpacho selama sekurang-kurangnya 2 jam untuk membolehkan rasanya sebati dan sejuk.',
        'Sebelum dihidangkan, kacau gazpacho dengan baik dan rasa semula, membuat sebarang penyesuaian akhir pada perasaannya. Cedok gazpacho yang telah disejukkan ke dalam mangkuk, akhiri setiap hidangan dengan sedikit minyak zaitun dan taburan sayur-sayuran dadu, seperti kiub tomato kecil atau timun cincang halus, menambah warna dan kesegaran pada hidangan.'
      ]
    }
  },
  'es-04': {
    'zh-CN': {
      title: 'Pulpo a la Gallega (加利西亚章鱼)',
      description: '来自西班牙加利西亚的正宗食谱',
      ingredients: [
        { item: '章鱼', amount: '1只' },
        { item: '土豆', amount: '' },
        { item: '辣椒粉（甜味和辣味）', amount: '' },
        { item: '海盐片', amount: '' },
        { item: '橄榄油', amount: '' }
      ],
      instructions: [
        '首先选择一只新鲜优质的章鱼，将其放入一大锅加盐的沸水中浸煮10-15秒，然后立即放入冰浴中以停止烹饪过程；重复此过程两次，以达到最佳的质地和嫩度。',
        '第三次焯水后，将章鱼完全浸入沸水中煮45分钟，或直到它变得柔软、易于刺穿，然后用漏勺将其从水中取出，放在一边冷却。',
        '在章鱼烹饪的同时，将3-4个大土豆去皮并切成1/4英寸（约0.6厘米）厚的圆片，注意使切片尽可能均匀，以确保烹饪一致。',
        '章鱼从锅中取出后，将切好的土豆片加入同一锅沸水中煮10-12分钟，或直到用叉子刺入时变软，并且中心具有略微坚实、奶油般的质地。',
        '土豆煮好后，用漏勺将其从水中取出，放在一边沥干多余水分，然后将冷却的章鱼切成1/2英寸（约1.2厘米）厚的块状。',
        '组装菜肴时，将煮熟的土豆片以图案形式排列在质朴的木板上，略微重叠以创造视觉吸引力的底部，然后将切好的章鱼放在土豆上，注意在木板边缘留出小边框。',
        '在摆好的章鱼和土豆上淋上优质特级初榨橄榄油，撒上一小撮片状海盐和甜辣辣椒粉的混合物，并用新鲜、略带辛辣的香草（如欧芹或芝麻菜）装饰，以创造风味和质地的和谐平衡。',
        '最后，立即上菜加利西亚章鱼，让每位客人都能品尝到鲜嫩、略带焦香的章鱼，奶油般、泥土味的土豆，以及辣椒粉和海盐浓郁的烟熏风味，所有这些都完美平衡，呈现精美。'
      ]
    },
    ms: {
      title: 'Pulpo a la Gallega (Sotong Kurita Gaya Galicia)',
      description: 'Resipi asli dari Galicia, Sepanyol',
      ingredients: [
        { item: 'sotong kurita', amount: '1 ekor' },
        { item: 'Kentang', amount: '' },
        { item: 'Paprika (manis & pedas)', amount: '' },
        { item: 'Garam laut kepingan', amount: '' },
        { item: 'Minyak zaitun', amount: '' }
      ],
      instructions: [
        'Mulakan dengan memilih sotong kurita segar berkualiti tinggi dan rendamkannya dalam periuk besar berisi air mendidih yang telah digaramkan selama 10-15 saat, kemudian segera masukkan ke dalam mandian ais untuk menghentikan proses memasak; ulangi proses ini dua kali lagi untuk mencapai tekstur dan kelembutan yang optimum.',
        'Selepas celuran ketiga, rendam sepenuhnya sotong kurita dalam air mendidih dan masak selama 45 minit, atau sehingga ia mencapai konsistensi yang lembut dan mudah dicucuk, kemudian angkat dari air dengan senduk berlubang dan ketepikan untuk menyejuk.',
        'Semasa sotong kurita sedang dimasak, kupas dan hiris 3-4 biji kentang besar menjadi kepingan bulat setebal 1/4 inci (kira-kira 0.6 cm), berhati-hati untuk membuat hirisan seuniform mungkin bagi memastikan masakan yang sekata.',
        'Setelah sotong kurita dikeluarkan dari periuk, masukkan hirisan kentang ke dalam air mendidih yang sama dan masak selama 10-12 minit, atau sehingga ia lembut apabila dicucuk dengan garpu dan mempunyai tekstur yang sedikit pejal dan berkrim di bahagian tengah.',
        'Apabila kentang selesai dimasak, angkat dari air dengan senduk berlubang dan ketepikan untuk mengeringkan kelembapan berlebihan, kemudian hiris sotong kurita yang telah sejuk menjadi kepingan setebal 1/2 inci (kira-kira 1.2 cm) bersaiz gigitan.',
        'Untuk menyusun hidangan, susun hirisan kentang yang telah dimasak dalam corak di atas papan kayu desa, bertindih sedikit untuk mencipta dasar yang menarik secara visual, kemudian letakkan sotong kurita yang telah dihiris di atas kentang, berhati-hati untuk meninggalkan sedikit sempadan di sekeliling tepi papan.',
        'Taburkan sotong kurita dan kentang yang telah disusun dengan minyak zaitun extra-virgin berkualiti tinggi, taburkan secubit garam laut kepingan dan campuran paprika manis dan pedas, dan hias dengan herba segar yang pedas, seperti pasli atau arugula, untuk mencipta keseimbangan rasa dan tekstur yang harmoni.',
        'Akhir sekali, hidangkan Pulpo a la Gallega dengan segera, membolehkan setiap tetamu menghargai sotong kurita yang lembut dan sedikit hangus, kentang yang berkrim dan beraroma tanah, serta rasa paprika dan garam laut yang kuat dan berasap, semuanya seimbang sempurna dan dipersembahkan dengan indah.'
      ]
    }
  },
  'es-05': {
    'zh-CN': {
      title: 'Churros (西班牙油条)',
      description: '来自西班牙马德里的正宗食谱',
      ingredients: [
        { item: '泡芙面团', amount: '' },
        { item: '肉桂糖', amount: '' },
        { item: '浓稠热巧克力（吉事果巧克力）', amount: '' },
        { item: '食用油', amount: '' }
      ],
      instructions: [
        '首先，准备泡芙面团：在一个厚底平底锅中，混合250毫升全脂牛奶、120克无盐黄油和1/2茶匙片状海盐，然后用中火煮沸，偶尔搅拌，直到黄油融化，混合物开始沸腾。',
        '接下来，将150克\'00\'面粉加入平底锅中，用木勺剧烈搅拌烹煮约2-3分钟，直到混合物形成一个光滑、有光泽的面团球，并从锅壁上脱离，这表明淀粉已完全煮熟。',
        '现在，将面团转移到装有桨状搅拌器的立式搅拌机中，一次加入一个大鸡蛋，每次加入后都要充分搅拌均匀，直到面团光滑、有光泽，并达到可挤压的稠度。',
        '面团仍温热时，将其转移到装有大星形裱花嘴的裱花袋中，将10-12厘米长的面团条挤到烘焙纸或撒有少量面粉的表面上，轻轻拍打裱花袋以去除任何气泡。',
        '在一个深煎锅中加热约5-7厘米的中性食用油（如葡萄籽油或葵花籽油）至180°C，然后以连续、平稳的动作小心地将面团挤入热油中，每次炸3-4根吉事果，或根据锅子容量不拥挤地炸，直到它们呈金黄色并膨胀，每面约2-3分钟。',
        '用漏勺将炸好的吉事果从油中取出，立即将其滚入100克砂糖和2汤匙肉桂粉的混合物中，均匀裹上，以形成酥脆、香甜带辣的外皮。',
        '上菜时，将2-3根吉事果放在装饰盘或木板上，并配上一小碗浓郁、厚实的西班牙热巧克力供蘸食。热巧克力制作方法：用小火加热250毫升全脂牛奶，加入2汤匙优质黑可可粉和2汤匙砂糖，不断搅拌，直到混合物光滑、热透但不沸腾，呈现出深沉、丝滑的质地和浓郁、略带苦涩的风味。'
      ]
    },
    ms: {
      title: 'Churros',
      description: 'Resipi asli dari Madrid, Sepanyol',
      ingredients: [
        { item: 'Doh gaya choux', amount: '' },
        { item: 'Gula kayu manis', amount: '' },
        { item: 'Coklat panas pekat (coklat churro)', amount: '' },
        { item: 'Minyak masak', amount: '' }
      ],
      instructions: [
        'Untuk bermula, sediakan doh gaya choux dengan menggabungkan 250ml susu penuh krim, 120g mentega tanpa garam, dan 1/2 sudu teh garam laut kepingan dalam periuk bertapak tebal, kemudian didihkan di atas api sederhana, kacau sekali-sekala, sehingga mentega cair dan campuran mendidih perlahan.',
        'Seterusnya, masukkan 150g tepung \'00\' ke dalam periuk dan masak, kacau kuat dengan sudu kayu, selama kira-kira 2-3 minit, atau sehingga campuran membentuk bebola yang licin, berkilat dan terpisah dari sisi periuk, menunjukkan kanji telah masak sepenuhnya.',
        'Sekarang, pindahkan doh ke pengadun berdiri yang dilengkapi dengan lampiran dayung dan pukul masuk 4 biji telur besar, satu demi satu, biarkan setiap telur sebati sepenuhnya sebelum menambah yang seterusnya, sehingga doh licin, berkilat, dan mempunyai konsistensi yang boleh dipaip.',
        'Semasa doh masih suam, pindahkan ke beg paip yang dilengkapi dengan hujung bintang besar dan paip jalur doh sepanjang 10-12cm ke atas sekeping kertas parchment atau permukaan yang ditabur sedikit tepung, ketuk beg paip perlahan-lahan untuk membuang sebarang poket udara.',
        'Panaskan kira-kira 5-7cm minyak berperisa neutral, seperti minyak biji anggur atau minyak bunga matahari, dalam kuali goreng dalam hingga 180°C, kemudian paip doh dengan berhati-hati ke dalam minyak panas dalam gerakan berterusan dan licin, goreng 3-4 churros pada satu masa, atau sebanyak yang boleh dimuatkan kuali tanpa bersesak, sehingga ia berwarna perang keemasan dan mengembang, kira-kira 2-3 minit setiap sisi.',
        'Menggunakan senduk berlubang, keluarkan churros yang telah digoreng dari minyak dan segera gulingkan dalam campuran 100g gula pasir dan 2 sudu besar serbuk kayu manis, salutkan secara sekata, untuk mencipta bahagian luar yang rangup, manis, dan pedas.',
        'Untuk menghidang, letakkan 2-3 churros di atas pinggan hiasan atau papan kayu dan hidangkan bersama coklat panas Sepanyol yang kaya dan pekat untuk dicicah, dibuat dengan memanaskan 250ml susu penuh krim di atas api perlahan dengan 2 sudu besar serbuk koko gelap berkualiti tinggi dan 2 sudu besar gula pasir, kacau sentiasa, sehingga campuran licin dan panas, tetapi tidak mendidih, dengan tekstur yang pekat, baldu dan rasa yang kuat, sedikit pahit.'
      ]
    }
  },
  'es-06': {
    'zh-CN': {
      title: 'Jamon Iberico with Pan con Tomate (伊比利亚火腿配番茄面包)',
      description: '来自西班牙加泰罗尼亚的正宗食谱',
      ingredients: [
        { item: '伊比利亚火腿片', amount: '' },
        { item: '酵母面包', amount: '' },
        { item: '熟透的番茄', amount: '' },
        { item: '大蒜', amount: '' },
        { item: '橄榄油', amount: '' }
      ],
      instructions: [
        '首先选择优质酵母面包，最好是隔夜的，将其切成1/2英寸（约1.2厘米）厚的圆片，为菜肴提供坚实的基础。',
        '接下来，将面包片放入350°F（约175°C）的烤箱中烘烤5-7分钟，或直到它们形成金黄色外皮，内部柔软蓬松，触感有弹性。',
        '在面包烘烤的同时，小心地将熟透的番茄（最好是传家宝番茄或类似品种）对半切开，轻轻挤出多余的种子和汁液，以防止面包变湿。',
        '面包烤好后，从烤箱中取出，冷却一两分钟，然后用切开的大蒜瓣擦拭每片面包的表面，赋予其微妙的芳香风味。',
        '擦完大蒜后，立即取半个番茄，轻轻地将其擦入面包中，施加适度压力，直到面包吸收了番茄的果肉和汁液，留下鲜艳的深红色痕迹和浓郁的果味。',
        '在面包上淋上优质特级初榨橄榄油，让其浓郁、辛辣的风味与番茄的甜味和大蒜的辛辣味融合。',
        '最后，将薄薄的伊比利亚火腿片精致地放在准备好的面包上，其丝滑的质地和坚果般的鲜味与其他成分融合，最后撒上一小撮片状海盐，以提升和平衡菜肴的风味。'
      ]
    },
    ms: {
      title: 'Jamon Iberico dengan Pan con Tomate (Ham Iberico dengan Roti Tomato)',
      description: 'Resipi asli dari Catalonia, Sepanyol',
      ingredients: [
        { item: 'Hirisan ham Iberico', amount: '' },
        { item: 'Roti sourdough', amount: '' },
        { item: 'Tomato masak', amount: '' },
        { item: 'Bawang putih', amount: '' },
        { item: 'Minyak zaitun', amount: '' }
      ],
      instructions: [
        'Mulakan dengan memilih roti sourdough premium, sebaik-baiknya roti semalam, dan hiriskannya menjadi kepingan bulat setebal 1/2 inci (kira-kira 1.2 cm) untuk menyediakan dasar yang kukuh untuk hidangan.',
        'Seterusnya, bakar hirisan roti dalam ketuhar 350°F (kira-kira 175°C) selama 5-7 minit, atau sehingga ia membentuk kerak perang keemasan dan bahagian dalam yang lembut, berudara, dan kenyal apabila disentuh.',
        'Semasa roti sedang dibakar, belah dua tomato masak dengan berhati-hati, sebaik-baiknya jenis heirloom atau yang serupa, dan perah perlahan-lahan biji dan jus berlebihan untuk mengelakkan kelembapan.',
        'Setelah roti dibakar, keluarkan dari ketuhar dan biarkan sejuk selama satu atau dua minit sebelum menggosok ulas bawang putih yang telah dipotong di atas permukaan setiap hirisan, memberikan rasa aromatik yang halus.',
        'Sejurus selepas bawang putih, ambil separuh tomato dan gosok perlahan-lahan ke dalam roti, dengan tekanan sederhana, sehingga roti telah menyerap pulpa dan jus tomato, meninggalkan jejak warna merah terang dan rasa buah yang kuat.',
        'Taburkan minyak zaitun extra-virgin berkualiti tinggi di atas roti, membiarkan nota kaya dan pedasnya sebati dengan kemanisan tomato dan kepedasan bawang putih.',
        'Akhir sekali, letakkan hirisan nipis Jamón Ibérico dengan lembut di atas roti yang telah disediakan, teksturnya yang baldu dan rasa kekacang, umami bercampur dengan komponen lain, sebelum diakhiri dengan secubit garam laut kepingan untuk meningkatkan dan mengimbangi hidangan.'
      ]
    }
  },
  'gr-01': {
    'zh-CN': {
      title: '希腊肉酱茄子千层派 (Moussaka)',
      description: '源自希腊雅典的传统食谱',
      ingredients: [
        { item: '茄子', amount: '' },
        { item: '羊肉馅', amount: '' },
        { item: '番茄酱', amount: '' },
        { item: '肉桂', amount: '' },
        { item: '白酱 (Béchamel sauce)', amount: '' },
        { item: '奶酪', amount: '' }
      ],
      instructions: [
        '首先准备茄子：将两个大茄子切成1/2英寸厚的圆片，然后两面撒上足量的粗盐以去除多余水分。让茄子片静置至少30分钟，以便盐渍过程发挥作用。',
        '在一个大煎锅中，用中高火加热约1/2英寸的特级初榨橄榄油，直至冒烟。小心地将几片茄子放入热油中，注意不要放得太满，两面煎至金黄色，每面约3-4分钟。',
        '在另一个厚底平底锅中，用中火烹制羊肉馅，用勺子将其捣散，直至不再呈粉红色，约5-7分钟。加入一个切碎的小洋葱，煮至半透明。然后加入两瓣切碎的大蒜和一茶匙肉桂粉，再煮一分钟，让香气融合。',
        '将一罐碎番茄、一杯红酒和一杯羊肉高汤加入装有羊肉混合物的平底锅中，搅拌均匀。将混合物煮沸，然后转小火，偶尔搅拌，炖煮至少20分钟，让风味充分融合，酱汁变稠，形成浓郁深厚的风味。',
        '组装肉酱茄子千层派：在9x13英寸的烤盘底部铺一层炸好的茄子片。接着，将一半的羊肉番茄酱铺在茄子上，然后是另一层茄子片。重复此过程，最后以一层茄子片收尾。',
        '准备白酱：在一个中型平底锅中，用中火融化三汤匙无盐黄油。加入三汤匙通用面粉搅拌成面糊，煮一分钟。慢慢倒入一杯全脂牛奶，不断搅拌以避免结块，煮至酱汁变稠，约5-7分钟。离火，拌入一杯磨碎的帕尔马干酪，直至融化并变得顺滑。',
        '将浓稠的奶油白酱均匀地铺在最上层的茄子片上，确保覆盖整个表面。再撒上1/2杯磨碎的帕尔马干酪，以增加风味和口感。',
        '将肉酱茄子千层派放入预热至180°C的烤箱中，烘烤45分钟，或直至顶部呈金黄色且酱汁冒泡。从烤箱中取出，静置30分钟后再切片享用，让风味充分融合，肉酱茄子千层派定型。'
      ]
    },
    ms: {
      title: 'Moussaka',
      description: 'Resipi asli dari Athens, Greece',
      ingredients: [
        { item: 'Terung', amount: '' },
        { item: 'Daging kambing cincang', amount: '' },
        { item: 'Sos tomato', amount: '' },
        { item: 'Kayu manis', amount: '' },
        { item: 'Sos Béchamel', amount: '' },
        { item: 'Keju', amount: '' }
      ],
      instructions: [
        'Mulakan dengan menyediakan terung: hiris dua biji terung besar setebal 1/2 inci, kemudian taburkan garam kosher dengan banyak di kedua-dua belah untuk mengeluarkan kelembapan berlebihan. Biarkan hirisan terung selama sekurang-kurangnya 30 minit agar proses pengasinan berkesan.',
        'Panaskan kira-kira 1/2 inci minyak zaitun dara tambahan dalam kuali besar di atas api sederhana tinggi sehingga berasap. Masukkan beberapa hirisan terung ke dalam minyak panas dengan berhati-hati, pastikan tidak terlalu padat, dan goreng sehingga keperangan di kedua-dua belah, kira-kira 3-4 minit setiap sisi.',
        'Dalam periuk berdasar tebal yang berasingan, masak daging kambing cincang di atas api sederhana, pecah-pecahkan dengan sudu semasa memasak, sehingga tidak lagi merah jambu, kira-kira 5-7 minit. Masukkan satu bawang kecil yang dicincang halus, dan masak sehingga lutsinar. Kemudian masukkan dua ulas bawang putih cincang dan satu sudu teh serbuk kayu manis, masak selama satu minit lagi untuk membiarkan aroma sebati.',
        'Masukkan satu tin tomato hancur, satu cawan wain merah, dan satu cawan stok kambing ke dalam periuk dengan campuran kambing, kacau sebati. Didihkan campuran, kemudian kecilkan api dan reneh, kacau sekali-sekala, selama sekurang-kurangnya 20 minit, membiarkan rasa sebati dan sos memekat, menghasilkan profil rasa yang kaya dan mendalam.',
        'Untuk membina moussaka, buat lapisan hirisan terung goreng di bahagian bawah loyang pembakar 9x13 inci. Seterusnya, sapukan separuh daripada sos kambing dan tomato di atas terung, diikuti dengan satu lagi lapisan hirisan terung. Ulangi proses ini, berakhir dengan lapisan terung di atas.',
        'Sediakan sos béchamel dengan mencairkan tiga sudu besar mentega tanpa garam dalam periuk sederhana di atas api sederhana. Pukul tiga sudu besar tepung serbaguna untuk membuat roux, masak selama satu minit. Tuangkan perlahan-lahan satu cawan susu penuh krim, pukul sentiasa untuk mengelakkan ketulan, dan masak sehingga sos memekat, kira-kira 5-7 minit. Angkat dari api dan kacau satu cawan keju Parmesan parut, sehingga cair dan licin.',
        'Sapukan sos béchamel yang pekat dan berkrim secara rata di atas lapisan terung paling atas, pastikan untuk menutup seluruh permukaan. Taburkan tambahan 1/2 cawan keju Parmesan parut di atas sos béchamel untuk rasa dan tekstur tambahan.',
        'Pindahkan moussaka ke dalam ketuhar yang telah dipanaskan, ditetapkan pada 180°C, dan bakar selama 45 minit, atau sehingga bahagian atas berwarna keperangan dan sos berbuih. Angkat dari ketuhar dan biarkan ia berehat selama 30 minit sebelum dihiris dan dihidangkan, membiarkan rasa sebati dan moussaka mengeras.'
      ]
    }
  },
  'gr-02': {
    'zh-CN': {
      title: '希腊菠菜派 (Spanakopita)',
      description: '源自希腊雅典的传统食谱',
      ingredients: [
        { item: '酥皮面团 (Phyllo pastry)', amount: '' },
        { item: '菠菜', amount: '500g' },
        { item: '羊奶酪 (Feta)', amount: '200g' },
        { item: '鸡蛋', amount: '2个' },
        { item: '洋葱', amount: '' },
        { item: '莳萝', amount: '' },
        { item: '橄榄油', amount: '' }
      ],
      instructions: [
        '首先仔细挑选并冲洗500克新鲜菠菜叶，然后在一个大而厚底的煎锅中用中火加热几汤匙橄榄油，加入切丁的洋葱，炒至半透明并散发香气，约8分钟。',
        '将菠菜加入煎锅中，煮至完全萎蔫，大约需要5分钟，偶尔搅拌以防止烧焦，然后用盐调味并稍微冷却。',
        '菠菜混合物冷却后，用芝士布或细网筛尽可能挤出多余水分，这对于希腊菠菜派的质地至关重要。',
        '在一个大搅拌碗中，将沥干的菠菜、200克碎羊奶酪、2个鸡蛋和少许切碎的新鲜莳萝混合在一起，轻轻搅拌至刚混合均匀，注意不要过度搅拌，否则馅料会变得致密。',
        '组装希腊菠菜派：在大的烤盘中铺上刷有橄榄油的酥皮面团，确保表面平整光滑，每铺几层后，将烤盘旋转90度以获得对称、酥脆的外皮。',
        '铺好大约一半的酥皮面团后，加入菠菜和羊奶酪馅料，均匀铺开，然后盖上剩余的酥皮面团，每层都刷上橄榄油，并像之前一样旋转烤盘，以确保均匀的金黄色泽。',
        '用锋利的刀小心地在酥皮顶部划出菱形图案，注意不要切得太深而破坏馅料，然后用打散的鸡蛋刷在顶部，以获得丰富、金黄的釉面。',
        '最后，将希腊菠菜派放入预热至180°C的烤箱中烘烤45分钟，或直至酥皮呈金黄色且酥脆，具有精致、片状的质地，切开时会碎裂，厨房里弥漫着菠菜、羊奶酪和烤酥皮的咸香。'
      ]
    },
    ms: {
      title: 'Spanakopita',
      description: 'Resipi asli dari Athens, Greece',
      ingredients: [
        { item: 'Pastri Phyllo', amount: '' },
        { item: 'Bayam', amount: '500g' },
        { item: 'Keju feta', amount: '200g' },
        { item: 'Telur', amount: '2 biji' },
        { item: 'Bawang', amount: '' },
        { item: 'Dill', amount: '' },
        { item: 'Minyak zaitun', amount: '' }
      ],
      instructions: [
        'Mulakan dengan memilih dan membilas 500g daun bayam segar dengan teliti, kemudian panaskan beberapa sudu besar minyak zaitun dalam kuali besar berdasar tebal di atas api sederhana, masukkan bawang dadu dan tumis sehingga lutsinar dan wangi, kira-kira 8 minit.',
        'Masukkan bayam ke dalam kuali, masak sehingga layu sepenuhnya, yang sepatutnya mengambil masa kira-kira 5 minit, kacau sekali-sekala untuk mengelakkan hangus, kemudian perasakan dengan garam dan biarkan sejuk sedikit.',
        'Setelah campuran bayam sejuk, perah sebanyak mungkin cecair menggunakan kain keju atau penapis jaring halus untuk mengeluarkan kelembapan berlebihan, yang penting untuk tekstur spanakopita.',
        'Dalam mangkuk adunan besar, gabungkan bayam yang telah diperah, 200g keju feta yang dihancurkan, 2 biji telur, dan sedikit dill segar yang dicincang, campurkan semuanya sehingga sebati, berhati-hati agar tidak terlalu banyak mengadun, yang boleh menjadikan inti padat.',
        'Untuk memasang spanakopita, lapiskan kepingan pastri phyllo yang disapu minyak zaitun dalam loyang pembakar besar, pastikan untuk mengekalkan permukaan yang rata dan licin, dan selepas setiap beberapa lapisan, putar loyang 90 darjah untuk mendapatkan kerak yang simetri dan rangup.',
        'Setelah anda melapis kira-kira separuh daripada kepingan phyllo, masukkan inti bayam dan feta, ratakan, kemudian tutup dengan kepingan phyllo yang tinggal, sapu setiap lapisan dengan minyak zaitun dan putar loyang seperti sebelumnya untuk memastikan kemasan keperangan yang seragam.',
        'Menggunakan pisau tajam, toreh lapisan atas phyllo dengan berhati-hati menjadi corak berlian, berhati-hati agar tidak memotong terlalu dalam dan mengganggu inti, kemudian sapu bahagian atas dengan telur yang dipukul untuk mendapatkan kilauan keemasan yang kaya.',
        'Akhir sekali, bakar spanakopita dalam ketuhar yang telah dipanaskan pada suhu 180°C selama 45 minit, atau sehingga kerak phyllo berwarna keperangan dan rangup, dengan tekstur yang halus dan rapuh yang pecah apabila dipotong, memenuhi dapur dengan aroma gurih bayam, feta, dan pastri panggang.'
      ]
    }
  },
  'gr-03': {
    'zh-CN': {
      title: '希腊酸奶黄瓜酱 (Tzatziki)',
      description: '源自希腊雅典的传统食谱',
      ingredients: [
        { item: '希腊酸奶', amount: '400g' },
        { item: '黄瓜 (擦丝)', amount: '1根' },
        { item: '大蒜', amount: '2瓣' },
        { item: '新鲜莳萝', amount: '' },
        { item: '橄榄油', amount: '' },
        { item: '柠檬汁', amount: '' },
        { item: '盐', amount: '' }
      ],
      instructions: [
        '首先仔细挑选一根新鲜黄瓜，最好是英国黄瓜或温室黄瓜品种，然后用擦丝器的大孔将其擦成细丝，形成精致、蕾丝般的质地。',
        '接下来，用芝士布或干净的薄厨房毛巾尽可能挤出擦丝黄瓜中的水分，施加轻柔而坚定的压力，直到黄瓜摸起来干燥，不再滴出多余液体。',
        '用锋利的刀将蒜瓣切碎，注意释放酶，这将增强菜肴的整体风味，然后用刀背的平坦侧面将其捣成光滑、奶油状的糊状。',
        '在一个大的冰镇碗中，将沥干的酸奶、擦丝黄瓜、蒜泥和大量切碎的新鲜莳萝混合在一起，莳萝明亮、柑橘般的风味将为酱汁增添迷人的深度。',
        '在酸奶混合物上淋上少量特级初榨橄榄油，然后挤入新鲜柠檬汁，轻轻地将所有食材混合均匀，注意不要过度搅拌。',
        '用一小撮片状海盐调味希腊酸奶黄瓜酱，海盐精致的脆感和清爽的风味将提升其他食材的味道，再次搅拌以使调味料均匀分布。',
        '用保鲜膜覆盖碗，将保鲜膜直接压在酱汁表面，以防止形成表皮，然后冷藏至少30分钟，让风味充分融合，酱汁彻底冷却。',
        '上菜前，将希腊酸奶黄瓜酱最后搅拌一下，然后舀入一个碗中，可以淋上少许橄榄油，撒上切碎的新鲜莳萝，并搭配温暖酥脆的皮塔饼，以获得真正地道和清爽的烹饪体验。'
      ]
    },
    ms: {
      title: 'Tzatziki',
      description: 'Resipi asli dari Athens, Greece',
      ingredients: [
        { item: 'Yogurt Greek', amount: '400g' },
        { item: 'Timun (diparut)', amount: '1' },
        { item: 'Ulas bawang putih', amount: '2' },
        { item: 'Dill segar', amount: '' },
        { item: 'Minyak zaitun', amount: '' },
        { item: 'Jus lemon', amount: '' },
        { item: 'Garam', amount: '' }
      ],
      instructions: [
        'Mulakan dengan memilih timun segar dengan teliti, sebaik-baiknya jenis English atau hothouse, dan parut menggunakan lubang besar parutan kotak, menghasilkan tekstur yang halus dan seperti renda.',
        'Seterusnya, perah sebanyak mungkin kelembapan dari timun parut menggunakan kain keju atau tuala dapur nipis yang bersih, berikan tekanan lembut tetapi tegas, sehingga timun kering apabila disentuh dan tidak lagi menitiskan cecair berlebihan.',
        'Cincang ulas bawang putih menggunakan pisau tajam, berhati-hati untuk melepaskan enzim yang akan meningkatkan rasa keseluruhan hidangan, dan kemudian lenyekkan menjadi pes yang licin dan berkrim menggunakan sisi rata bilah pisau.',
        'Dalam mangkuk besar yang telah disejukkan, gabungkan yogurt yang telah diperah, timun parut, pes bawang putih, dan taburan dill segar yang dicincang halus, yang rasa cerah dan sitrusnya akan menambah kedalaman yang menawan pada sos.',
        'Titiskan sedikit minyak zaitun dara tambahan di atas campuran yogurt, diikuti dengan perahan jus lemon segar, dan gaulkan bahan-bahan dengan lembut sehingga sebati, berhati-hati agar tidak terlalu banyak mengadun.',
        'Perasakan sos tzatziki dengan secubit garam laut kepingan, yang kerangupan halus dan rasa bersihnya akan meningkatkan bahan-bahan lain, dan gaul sekali lagi untuk menyebarkan perasa secara rata.',
        'Tutup mangkuk dengan pembalut plastik, tekan pembalut terus ke permukaan sos untuk mengelakkan kulit terbentuk, dan sejukkan selama sekurang-kurangnya 30 minit untuk membiarkan rasa sebati dan sos sejuk sepenuhnya.',
        'Sebelum dihidangkan, kacau tzatziki sekali lagi dan sudukan ke dalam mangkuk hidangan, di mana ia boleh dihiasi dengan titisan minyak zaitun, taburan dill segar yang dicincang, dan roti pita hangat yang rangup sebagai hidangan kuliner yang benar-benar asli dan menyegarkan.'
      ]
    }
  },
  'gr-04': {
    'zh-CN': {
      title: '希腊烤肉串 (Souvlaki)',
      description: '源自希腊塞萨洛尼基的传统食谱',
      ingredients: [
        { item: '猪肩肉块', amount: '' },
        { item: '柠檬', amount: '' },
        { item: '牛至', amount: '' },
        { item: '橄榄油', amount: '' },
        { item: '皮塔饼', amount: '' },
        { item: '希腊酸奶黄瓜酱 (Tzatziki)', amount: '' },
        { item: '番茄', amount: '' },
        { item: '洋葱', amount: '' }
      ],
      instructions: [
        '首先准备猪肩肉块的腌料，在一个大碗中混合新鲜柠檬汁的明亮柑橘味、干牛至的浓郁香气和特级初榨橄榄油的丰富柔滑质地。',
        '将猪肩肉块加入腌料中，搅拌均匀，确保每块肉都充分浸透芳香的混合物，然后盖好冷藏至少1小时或最多2小时，让风味渗透到肉中。',
        '将烤架或烤盘预热至高温，直到炭火炽热，烤架冒烟，或烤盘几乎冒烟，然后将腌制好的猪肉块串在烤串上，每块之间留有小空隙以促进均匀烹饪。',
        '在热炭火上或烤盘中烤串，频繁翻动，直到猪肉烤焦并完全煮熟，外部形成漂亮的焦糖化外皮，内部达到鲜嫩多汁的半熟状态，每面约8-10分钟。',
        '在猪肉烹饪时，将皮塔饼用锡纸包裹，放入350°F（175°C）的烤箱中加热5分钟，或直到变软有弹性，然后将皮塔饼切半，准备配料，包括一勺清爽的希腊酸奶黄瓜酱、一片多汁的番茄和少许切薄的红洋葱。',
        '猪肉煮熟后，从火上取下，静置一两分钟再上菜，然后组装希腊烤肉串：将几块烤好的猪肉放入温暖的皮塔饼中，然后是一勺希腊酸奶黄瓜酱、一片番茄和少许洋葱。',
        '最后挤上新鲜柠檬汁，撒上少许盐，然后立即上菜，如果需要，可以搭配一份酥脆的薯条，享受风味和质地的和谐平衡，浓郁的希腊酸奶黄瓜酱和明亮的柠檬汁中和了猪肉和皮塔饼的丰富口感。',
        '最后，花点时间欣赏这道菜的摆盘，番茄和洋葱的鲜艳色彩，希腊酸奶黄瓜酱的奶油白色，以及烤猪肉的金黄色，所有这些结合在一起，创造出视觉上令人惊叹且美味可口的希腊烤肉串。'
      ]
    },
    ms: {
      title: 'Souvlaki',
      description: 'Resipi asli dari Thessaloniki, Greece',
      ingredients: [
        { item: 'Kiub bahu babi', amount: '' },
        { item: 'Lemon', amount: '' },
        { item: 'Oregano', amount: '' },
        { item: 'Minyak zaitun', amount: '' },
        { item: 'Roti pita', amount: '' },
        { item: 'Tzatziki', amount: '' },
        { item: 'Tomato', amount: '' },
        { item: 'Bawang', amount: '' }
      ],
      instructions: [
        'Mulakan dengan menyediakan perapan untuk kiub bahu babi, gabungkan rasa sitrus yang cerah dari jus lemon yang baru diperah, aroma oregano kering yang tajam, dan tekstur minyak zaitun dara tambahan yang kaya dan lembut dalam mangkuk besar.',
        'Masukkan kiub bahu babi ke dalam perapan, gaul rata, pastikan setiap kepingan tepu sepenuhnya dengan campuran wangi, kemudian tutup dan sejukkan selama sekurang-kurangnya 1 jam atau sehingga 2 jam untuk membiarkan rasa meresap ke dalam daging.',
        'Panaskan gril atau kuali gril ke api tinggi, sehingga arang membara dan jeriji berasap panas, atau sehingga kuali hampir berasap, kemudian cucuk kiub babi yang telah diperap ke lidi, tinggalkan sedikit ruang antara setiap kepingan untuk menggalakkan masakan yang sekata.',
        'Panggang lidi di atas arang panas atau dalam kuali, putar dengan kerap, sehingga babi hangus dan masak sepenuhnya, dengan kerak karamel yang cantik terbentuk di bahagian luar, dan bahagian dalam mencapai tahap sederhana yang lembut dan berair, kira-kira 8-10 minit setiap sisi.',
        'Semasa babi sedang dimasak, panaskan roti pita dengan membungkusnya dalam kerajang dan memanaskannya dalam ketuhar pada suhu 350°F (175°C) selama 5 minit, atau sehingga lembut dan mudah dibentuk, kemudian hiris pita separuh dan sediakan topping, termasuk sesudu sos tzatziki yang menyegarkan, hirisan tomato berair, dan taburan bawang merah yang dihiris nipis.',
        'Setelah babi masak, angkat dari api dan biarkan berehat selama satu atau dua minit sebelum dihidangkan, kemudian pasang souvlaki dengan meletakkan beberapa keping babi panggang ke dalam pita hangat, diikuti dengan sesudu tzatziki, hirisan tomato, dan taburan bawang.',
        'Selesaikan hidangan dengan perahan jus lemon segar dan taburan garam, kemudian hidangkan segera, dihiasi dengan kentang goreng rangup jika dikehendaki, dan nikmati keseimbangan rasa dan tekstur yang harmoni, dengan tzatziki yang masam dan jus lemon yang cerah memotong kekayaan babi dan pita.',
        'Akhir sekali, luangkan masa untuk menghargai persembahan hidangan, dengan warna-warna cerah tomato dan bawang, putih berkrim tzatziki, dan keperangan keemasan babi panggang, semuanya bergabung untuk mencipta souvlaki yang menakjubkan secara visual dan memuaskan dengan lazat.'
      ]
    }
  },
  'gr-05': {
    'zh-CN': {
      title: '希腊果仁蜜饼 (Baklava)',
      description: '源自希腊雅典的传统食谱',
      ingredients: [
        { item: '酥皮面团 (Phyllo)', amount: '' },
        { item: '核桃', amount: '' },
        { item: '蜂蜜糖浆', amount: '' },
        { item: '黄油', amount: '' },
        { item: '肉桂', amount: '' },
        { item: '丁香', amount: '' }
      ],
      instructions: [
        '首先将烤箱预热至350°F (180°C)，确保温度一致，以使您的果仁蜜饼达到完美的金黄色酥皮。',
        '准备酥皮面团：小心地展开面皮，并用湿布覆盖以防止变干，然后将酥皮面团分层铺在一个大烤盘中，每层都刷上足量的融化黄油，确保覆盖整个表面。',
        '接下来，制作坚果层：在一个碗中将切碎的核桃与一小撮肉桂粉和丁香混合，搅拌均匀以使香料分布均匀，然后将此混合物铺在刷有黄油的酥皮上，边缘留出小边。',
        '继续分层铺酥皮和坚果混合物，最后以一层酥皮收尾，然后用锋利的刀将果仁蜜饼切成菱形块，一直切到底部。',
        '将果仁蜜饼放入预热好的烤箱中，烘烤至酥皮顶部呈金黄色，大约45分钟，然后从烤箱中取出，稍微冷却。',
        '在果仁蜜饼烘烤时，准备蜂蜜糖浆：在一个平底锅中混合蜂蜜、水、肉桂棒和丁香，用中火煮沸，然后转小火，炖煮10-15分钟，或直到糖浆稍微变稠并减少约一半。',
        '果仁蜜饼冷却10-15分钟后，将温热的蜂蜜糖浆均匀地倒在顶部，确保每块都浸透，然后浸泡至少4小时或过夜，让风味充分融合，酥皮吸收糖浆。',
        '上菜时，让果仁蜜饼恢复室温，然后小心地将菱形块从盘中取出，放在餐盘上，如果需要，可以撒上少许肉桂粉和几颗整丁香作为装饰。'
      ]
    },
    ms: {
      title: 'Baklava (Greek)',
      description: 'Resipi asli dari Athens, Greece',
      ingredients: [
        { item: 'Phyllo', amount: '' },
        { item: 'Kacang walnut', amount: '' },
        { item: 'Sirap madu', amount: '' },
        { item: 'Mentega', amount: '' },
        { item: 'Kayu manis', amount: '' },
        { item: 'Cengkih', amount: '' }
      ],
      instructions: [
        'Mulakan dengan memanaskan ketuhar anda kepada 350°F (180°C), memastikan suhu yang konsisten untuk mencapai kerak keemasan yang sempurna pada baklava anda.',
        'Untuk menyediakan doh phyllo, buka gulungan kepingan dengan berhati-hati dan tutup dengan kain lembap untuk mengelakkan kekeringan, kemudian teruskan melapis phyllo dalam loyang pembakar besar, sapu setiap kepingan dengan mentega cair yang banyak, pastikan untuk menutup seluruh permukaan.',
        'Seterusnya, buat lapisan kacang dengan menggabungkan kacang walnut cincang dengan secubit serbuk kayu manis dan cengkih dalam mangkuk, gaul rata untuk menyebarkan rempah secara sekata, kemudian sebarkan campuran ini di atas phyllo yang telah disapu mentega, tinggalkan sedikit sempadan di sekeliling tepi.',
        'Teruskan melapis phyllo dan campuran kacang, berakhir dengan lapisan phyllo di atas, dan gunakan pisau tajam untuk memotong baklava menjadi kepingan berbentuk berlian, potong sehingga ke dasar loyang.',
        'Letakkan baklava dalam ketuhar yang telah dipanaskan dan bakar sehingga lapisan atas phyllo berwarna keemasan, kira-kira 45 minit, kemudian angkat dari ketuhar dan biarkan sejuk sedikit.',
        'Semasa baklava sedang dibakar, sediakan sirap madu dengan menggabungkan madu, air, batang kayu manis, dan cengkih dalam periuk, didihkan campuran di atas api sederhana, kemudian kecilkan api dan reneh selama 10-15 minit, atau sehingga sirap sedikit pekat dan berkurangan kira-kira separuh.',
        'Setelah baklava sejuk selama 10-15 minit, tuangkan sirap madu yang hangat secara rata di atas, pastikan setiap kepingan disalut, kemudian biarkan meresap selama sekurang-kurangnya 4 jam atau semalaman, membiarkan rasa sebati dan phyllo menyerap sirap.',
        'Untuk dihidangkan, biarkan baklava mencapai suhu bilik, kemudian angkat kepingan berbentuk berlian dari loyang dengan berhati-hati dan letakkan di atas pinggan hidangan, dihiasi dengan taburan kayu manis dan beberapa biji cengkih, jika dikehendaki.'
      ]
    }
  },
};
