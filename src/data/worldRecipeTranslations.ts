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
      description: '这道黄油鸡，香浓入味，是家里人都爱吃的印度风味。',
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
        '鸡肉用酸奶香料腌30分钟。',
        '黄油煎鸡肉到金黄。',
        '番茄蒜姜打成酱，黄油煮10分钟。',
        '鸡肉回锅，加奶油，小火炖15分钟。',
        '撒上综合香料，开饭咯！'
      ]
    },
    'ms': {
      title: 'Ayam Mentega',
      description: 'Ayam Mentega ni resipi asli dari Delhi, India. Sedap sangat, cuba lah!',
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
        'Perap ayam dengan yogurt dan rempah, 30 minit. Goreng sampai keemasan.',
        'Kisar tomato, bawang putih, halia jadi sos. Masak sos tu dalam mentega 10 minit.',
        'Masukkan balik ayam, tuang krim, reneh 15 minit. Akhir sekali, tabur garam masala. Siap!'
      ]
    }
  },
  'in-02': {
    'zh-CN': {
      title: '玛卡尼扁豆',
      description: '这道玛卡尼扁豆，香浓软糯，配米饭或烤饼都好吃。',
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
        '黑扁豆和红腰豆泡一夜。',
        '高压锅小火煮6-8小时。',
        '扁豆稍微捣碎。',
        '番茄香料黄油分开炒。',
        '扁豆和番茄混匀，加奶油，小火炖30分钟。',
        '炖到浓稠奶油状就好啦！'
      ]
    },
    'ms': {
      title: 'Dal Makhani',
      description: 'Dal Makhani ni resipi asli dari Delhi, India. Memang sedap dan creamy!',
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
        'Rendam dal urad dan rajma semalaman. Masak dalam periuk tekanan 6-8 jam, api perlahan.',
        'Lenyekkan dal sikit. Masak tomato dan rempah dalam mentega, asingkan.',
        'Campurkan dal dengan tomato, tambah krim. Reneh 30 minit sampai pekat dan berkrim.'
      ]
    }
  },
  'in-03': {
    'zh-CN': {
      title: '印度香饭 (海得拉巴风味)',
      description: '海得拉巴风味的印度香饭，羊肉嫩滑，米饭香喷喷，一锅出美味！',
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
        '羊肉用凝乳、木瓜酱、香料腌4小时。',
        '米饭煮到半熟。',
        '锅里铺一层羊肉，一层米饭。',
        '加炸洋葱、薄荷、藏红花牛奶。',
        '面团封锅盖，小火焖45分钟。',
        '开盖，轻轻盛出，香气扑鼻！'
      ]
    },
    'ms': {
      title: 'Biryani (Hyderabadi)',
      description: 'Biryani Hyderabadi ni resipi asli dari Hyderabad, India. Wangi dan penuh rasa!',
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
        'Perap daging kambing dengan dadih, pes betik mentah, rempah, 4 jam. Masak nasi separuh masak.',
        'Susun daging kambing dan nasi dalam periuk. Letak bawang goreng, pudina, susu saffron.',
        'Tutup periuk dengan doh, masak cara dum 45 minit. Buka perlahan-lahan dan hidangkan.'
      ]
    }
  },
  'in-04': {
    'zh-CN': {
      title: '马萨拉薄饼',
      description: '香脆的马萨拉薄饼，配上土豆馅，是早餐或下午茶的好选择。',
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
        '塔瓦锅烧热，约200°C。',
        '舀半杯面糊，摊成薄饼。',
        '边缘淋油，煎至边缘卷起。',
        '另起锅，油热下芥末籽爆香。',
        '加咖喱叶，再放洋葱炒软。',
        '放土豆丁、姜黄粉，炒匀。',
        '薄饼熟后，放土豆馅，卷成锥形。',
        '趁热配桑巴尔和椰子酱吃。'
      ]
    },
    'ms': {
      title: 'Masala Dosa',
      description: 'Masala Dosa ni resipi asli dari Bengaluru, India. Rangup di luar, lembut di dalam!',
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
        'Panaskan tawa atau kuali tak melekat atas api sederhana. Biar dia berkilat sikit.',
        'Cedok 1/2 cawan adunan dosa, tuang tengah tawa. Ratakan perlahan-lahan jadi bulat nipis.',
        'Bila dosa mula masak, titiskan minyak keliling tepi. Biar tepi melengkung, permukaan kering.',
        'Untuk inti, panaskan 2 sudu minyak. Masukkan biji sawi sampai meletup, lepas tu daun kari.',
        'Masukkan bawang cincang, tumis sampai lutsinar dan keperangan. Wangi sangat!',
        'Masukkan kentang rebus dadu, serbuk kunyit. Gaul rata, masak 2 minit lagi.',
        'Bila dosa masak, letak 1/2 cawan inti kentang di tengah. Lipat dosa jadi kon.',
        'Hidangkan Masala Dosa panas-panas dengan sambar dan chutney kelapa. Sedapnya!'
      ]
    }
  },
  'in-05': {
    'zh-CN': {
      title: '菠菜奶豆腐',
      description: '这道菠菜奶豆腐，营养又美味，是家里常做的素菜。',
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
        '菠菜焯水，沥干打成泥。',
        '奶豆腐煎到金黄。',
        '洋葱姜蒜酱炒香。',
        '加番茄，炒到油水分离。',
        '放菠菜泥煮5分钟。',
        '加奶豆腐和奶油，调味出锅。'
      ]
    },
    'ms': {
      title: 'Palak Paneer',
      description: 'Palak Paneer ni resipi asli dari Punjab, India. Sayur bayam dengan keju, memang padu!',
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
        'Celur bayam dalam air mendidih, toskan, kisar halus. Goreng paneer sampai keemasan.',
        'Tumis bawang dan pes halia-bawang putih. Masukkan tomato, masak sampai minyak terpisah.',
        'Masukkan puri bayam, masak 5 minit. Masukkan paneer dan krim. Perasakan, hidangkan.'
      ]
    }
  },
  'in-06': {
    'zh-CN': {
      title: '鹰嘴豆咖喱配炸面包 (Chole Bhature)',
      description: '香辣的鹰嘴豆咖喱配上松软的炸面包，是德里的经典小吃。',
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
        '鹰嘴豆加茶包煮，颜色更深。',
        '做香辣洋葱番茄肉汁。',
        '加鹰嘴豆，香料炖20分钟。',
        '面粉酸奶和面。',
        '擀开炸面包，炸到金黄膨胀。',
        '配浓郁鹰嘴豆咖喱，开吃！'
      ]
    },
    'ms': {
      title: 'Chole Bhature',
      description: 'Chole Bhature ni resipi asli dari Delhi, India. Kari kacang kuda dengan roti kembung, yum!',
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
        'Masak kacang kuda dengan uncang teh untuk warna cantik. Buat kuah bawang-tomato pedas.',
        'Masukkan kacang kuda, reneh 20 minit dengan rempah. Buat doh tepung dan yogurt.',
        'Canaikan bhature, goreng jeluk sampai kembung keemasan. Hidangkan dengan kari kacang kuda masam.'
      ]
    }
  },
  'in-07': {
    'zh-CN': {
      title: '帕夫巴吉 (Pav Bhaji)',
      description: '孟买街头小吃帕夫巴吉，蔬菜泥配烤面包，香浓可口。',
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
        '土豆煮软捣成泥。',
        '豌豆煮软，撒点盐。',
        '甜椒番茄切丁，黄油炒软。',
        '大煎锅融黄油，加帕夫巴吉香料炒香。',
        '所有蔬菜入锅，大火炒浓稠。',
        '挤点柠檬汁，提味。',
        '帕夫面包切半，黄油烤金黄。',
        '巴吉盛盘，加黄油、柠檬汁、洋葱。',
        '配烤面包，撒香菜，加酸奶更美味。'
      ]
    },
    'ms': {
      title: 'Pav Bhaji',
      description: 'Pav Bhaji ni resipi asli dari Mumbai, India. Roti dengan kari sayur, memang mengenyangkan!',
      ingredients: [
        { item: 'Ubi kentang', amount: '4 biji' },
        { item: 'Kacang pis', amount: '1 cawan' },
        { item: 'Lada benggala', amount: '1 biji' },
        { item: 'Mentega', amount: '3 sudu besar' },
        { item: 'Pav bhaji masala', amount: 'Secukupnya' },
        { item: 'Roti pav', amount: '4 biji' }
      ],
      instructions: [
        'Basuh kentang, rebus sampai lembut. Toskan dan lenyekkan sampai licin.',
        'Panaskan 1 sudu mentega, masak kacang pis sampai lembut dan hijau terang.',
        'Dadu lada benggala dan tomato. Tumis dalam kuali sama dengan mentega sampai lembut.',
        'Cairkan baki mentega dalam kuali besar. Bakar Pav Bhaji masala sampai wangi.',
        'Masukkan kentang lenyek, kacang pis, lada benggala, tomato. Gaul rata, masak sampai pekat.',
        'Bakar roti pav yang dah dibelah dua dalam mentega sampai keemasan.',
        'Cedok bhaji atas pinggan. Letak mentega, jus lemon, bawang cincang. Hidang dengan roti pav.',
        'Hias dengan daun ketumbar dan yogurt atau raita kalau suka. Selamat menjamu selera!'
      ]
    }
  },
  'in-08': {
    'zh-CN': {
      title: '红腰豆咖喱饭 (Rajma Chawal)',
      description: '红腰豆咖喱饭，香浓的咖喱配上蓬松的米饭，暖心又暖胃。',
      ingredients: [
        { item: '红腰豆', amount: '300克' },
        { item: '洋葱', amount: '2个' },
        { item: '西红柿', amount: '3个' },
        { item: '孜然', amount: '1茶匙' },
        { item: '综合香料 (garam masala)', amount: '1茶匙' },
        { item: '印度香米', amount: '适量' }
      ],
      instructions: [
        '红腰豆泡一夜，高压锅煮软。',
        '大平底锅热酥油，炒洋葱到金黄。',
        '加番茄丁，炒成浓郁肉汁。',
        '放孜然粉和综合香料炒香。',
        '红腰豆入锅，小火炖20分钟，加盐。',
        '香米加水煮熟，焖5分钟。',
        '米饭盛盘，舀上红腰豆咖喱。',
        '配酸奶、香菜和泡菜，开饭！'
      ]
    },
    'ms': {
      title: 'Rajma Chawal',
      description: 'Rajma Chawal ni resipi asli dari Punjab, India. Kacang merah dengan nasi, sedap sangat!',
      ingredients: [
        { item: 'Kacang merah', amount: '300g' },
        { item: 'Bawang', amount: '2 biji' },
        { item: 'Tomato', amount: '3 biji' },
        { item: 'Jintan putih', amount: '1 sudu kecil' },
        { item: 'Garam masala', amount: '1 sudu kecil' },
        { item: 'Beras Basmati', amount: 'Secukupnya' }
      ],
      instructions: [
        'Rendam kacang merah semalaman. Toskan, bilas, masak dalam periuk tekanan sampai lembut.',
        'Panaskan minyak sapi/minyak dalam periuk. Tumis bawang cincang sampai perang keemasan.',
        'Masukkan tomato dadu, masak 10-12 minit sampai hancur. Masukkan jintan putih dan garam masala.',
        'Masukkan kacang merah ke dalam kuah bawang-tomato. Reneh 20 minit, perasakan garam.',
        'Masak nasi Basmati: 1 cawan beras, 2 cawan air. Didihkan, reneh 15-20 minit sampai masak.',
        'Hidangkan nasi Basmati dengan kari kacang merah. Letak raita, daun ketumbar, acar.',
        'Tengoklah Rajma Chawal ni, memang menyelerakan! Gabungan rasa yang padu.'
      ]
    }
  },
  'in-09': {
    'zh-CN': {
      title: '萨莫萨三角饺 (Samosa)',
      description: '香脆的萨莫萨三角饺，里面是土豆豌豆馅，是印度人爱吃的小吃。',
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
        '面粉、盐、泡打粉加温水和成硬面团。',
        '土豆煮软捣碎，加豌豆、香料、辣椒、香菜拌匀。',
        '面团擀薄，切圆形。',
        '半圆形面团折成锥形。',
        '锥形里填土豆馅，边缘沾水封口。',
        '用叉子压实边缘，做成三角饺。',
        '油烧到175°C，炸三角饺到金黄酥脆。',
        '沥油，配薄荷和罗望子酱，趁热吃！'
      ]
    },
    'ms': {
      title: 'Samosa',
      description: 'Samosa ni resipi asli dari Delhi, India. Rangup di luar, inti pedas di dalam!',
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
        'Campurkan tepung maida, garam, serbuk penaik. Masukkan air suam sikit-sikit, uli jadi doh kaku.',
        'Rebus kentang sampai lembut, lenyekkan. Campurkan dengan kacang pis, jintan, garam masala, cili, ketumbar.',
        'Canaikan doh maida nipis-nipis. Potong bulat-bulat.',
        'Gelek setiap bulatan jadi separuh bulatan. Lipat jadi kon.',
        'Isi kon dengan inti kentang. Jangan penuh sangat. Sapu air di tepi untuk lekatkan.',
        'Tekan tepi kon dengan garpu untuk tutup. Ulang sampai habis.',
        'Panaskan minyak dalam kuali. Goreng Samosa sampai keemasan dan rangup, 3-4 minit setiap sisi.',
        'Angkat Samosa, toskan minyak. Hidangkan panas-panas dengan sos pudina dan asam jawa. Sedap!'
      ]
    }
  },
  'in-10': {
    'zh-CN': {
      title: '玫瑰甜球 (Gulab Jamun)',
      description: '玫瑰甜球，香甜软糯，浸泡在玫瑰糖浆里，是印度甜点的经典。',
      ingredients: [
        { item: '奶酪块 (mawa/khoya)', amount: '200克' },
        { item: '中筋面粉', amount: '2汤匙' },
        { item: '牛奶', amount: '适量' },
        { item: '食用油 (用于油炸)', amount: '适量' },
        { item: '糖浆 (含小豆蔻、玫瑰水)', amount: '适量' }
      ],
      instructions: [
        '奶酪块揉碎，去除硬块。',
        '面粉加少量牛奶，搅成光滑糊。',
        '面粉糊慢慢揉进奶酪块，成软面团。',
        '面团盖好，静置30分钟。',
        '面团分成小份，搓成光滑小球。',
        '油烧到160-180°C，小火炸甜球。',
        '炸到深金黄色，捞出沥油。',
        '甜球放入温热糖浆，泡2小时。',
        '热吃冷吃都美味！'
      ]
    },
    'ms': {
      title: 'Gulab Jamun',
      description: 'Gulab Jamun ni resipi asli dari Kolkata, India. Manisan lembut yang cair di mulut!',
      ingredients: [
        { item: 'Mawa (khoya)', amount: '200g' },
        { item: 'Maida', amount: '2 sudu besar' },
        { item: 'Susu', amount: 'Secukupnya' },
        { item: 'Minyak untuk menggoreng', amount: 'Secukupnya' },
        { item: 'Sirap gula (dengan buah pelaga, air mawar)', amount: 'Secukupnya' }
      ],
      instructions: [
        'Ramaskan mawa dalam pinggan besar. Buang ketulan.',
        'Pukul maida dengan sedikit susu dalam mangkuk kecil sampai licin.',
        'Masukkan campuran maida ke dalam mawa. Uli perlahan-lahan sampai jadi doh lembut.',
        'Tutup doh dengan plastik atau kain lembap. Biarkan rehat 30 minit.',
        'Bahagikan doh kecil-kecil. Gelek jadi bola licin tanpa kedut.',
        'Panaskan minyak dalam kuali atas api perlahan. Minyak kena berkilat, jangan berasap.',
        'Masukkan bola doh ke dalam minyak panas. Goreng sampai perang keemasan gelap. Pusing-pusingkan.',
        'Angkat bola yang dah goreng, toskan minyak. Masukkan dalam sirap gula suam. Biar meresap 2 jam. Siap!'
      ]
    }
  },
  'in-11': {
    'zh-CN': {
      title: '阿鲁帕拉塔饼',
      description: '这道印度阿鲁帕拉塔饼，香喷喷的，咬一口就停不下来！',
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
        '温水、酥油、盐和面粉，揉成软面团。',
        '土豆煮软，捣成泥，别太碎哦。',
        '锅里热酥油，放香料，炒香。',
        '香料土豆泥，加香菜粉、盐，拌匀。',
        '面团分小份，擀成圆片。',
        '包入土豆馅，对折，封好边。',
        '平底锅烧热，放饼，两面煎金黄。',
        '趁热吃，配点黄油、香菜，或者酸奶酱。'
      ]
    },
    'ms': {
      title: 'Aloo Paratha',
      description: 'Resipi asli dari Amritsar, India. Paratha kentang yang gebu dan penuh rasa, memang sedap sangat!',
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
        'Mula-mula, campur air suam, minyak sapi, garam. Masukkan tepung gandum sikit-sikit. Uli 10 minit sampai doh lembut dan elastik.',
        'Rebus kentang sampai empuk. Lenyekkan dalam mangkuk, jangan sampai terlalu hancur nanti melekit.',
        'Panaskan minyak sapi dalam kuali. Masukkan ajwain dan jintan putih. Bila wangi, masukkan cili hijau cincang, masak 30 saat.',
        'Campurkan rempah tadi dengan kentang lenyek, serbuk ketumbar, dan garam. Gaul rata sampai sebati.',
        'Bahagikan doh kepada 6-8 bahagian. Bulatkan dan leperkan sikit jadi cakera.',
        'Letak 1-2 sudu inti kentang di tengah doh. Lipat doh jadi separuh bulan, tekan tepi supaya inti tak terkeluar.',
        'Panaskan tawa atau kuali. Masak paratha 1-2 minit setiap sisi. Sapu mentega, balikkan sampai keemasan.',
        'Ulang sampai habis. Hidangkan aloo paratha panas dengan mentega, daun ketumbar, dan raita atau chutney.'
      ]
    }
  },
  'in-12': {
    'zh-CN': {
      title: '罗根乔什',
      description: '克什米尔的罗根乔什，羊肉炖得酥烂入味，香气扑鼻！',
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
        '厚锅热酥油，要冒点烟。',
        '放整粒香料，炒香1-2分钟。',
        '羊肉块下锅，煎到金黄。',
        '加克什米尔红辣椒酱，炒2-3分钟。',
        '再加茴香粉，炒香，油会出来。',
        '放青葱酱，小火煮5-7分钟。',
        '加水煮开，盖盖小火炖45分钟。',
        '关火焖10分钟，配饭或馕饼吃。'
      ]
    },
    'ms': {
      title: 'Rogan Josh',
      description: 'Rogan Josh asli dari Kashmir, India. Kuah pekat, daging kambing lembut, memang menyelerakan!',
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
        'Panaskan minyak sapi dalam periuk besar sampai berkilat.',
        'Masukkan rempah biji seperti kayu manis, pelaga, cengkih. Kacau 1-2 minit sampai wangi.',
        'Masukkan 500g daging kambing. Bakar semua sisi sampai perang keemasan, kira-kira 5-7 minit.',
        'Bila daging dah perang, masukkan pes cili merah Kashmir. Kacau rata, masak 2-3 minit sampai pes gelap.',
        'Masukkan serbuk jintan manis. Kacau lagi 2-3 minit sampai wangi dan minyak terpisah.',
        'Masukkan pes bawang merah. Kacau atas api perlahan 5-7 minit sampai bawang lembut dan jernih.',
        'Tuang 1 cawan air. Biar mendidih, tutup periuk. Masak atas api perlahan 45 minit sampai daging lembut.',
        'Angkat dari api, biar rehat 10-15 minit. Hidangkan Rogan Josh panas dengan daun ketumbar, nasi atau naan.'
      ]
    }
  },
  'it-01': {
    'zh-CN': {
      title: '玛格丽特披萨',
      description: '那不勒斯的玛格丽特披萨，简单又美味，吃一口就爱上！',
      ingredients: [
        { item: '披萨面团', amount: '' },
        { item: '圣马力诺番茄', amount: '' },
        { item: '新鲜马苏里拉奶酪', amount: '' },
        { item: '罗勒', amount: '' },
        { item: '橄榄油', amount: '' },
        { item: '盐', amount: '' }
      ],
      instructions: [
        '披萨面团，室温放一小时。',
        '面团擀成12寸圆，边厚点。',
        '铺番茄酱，边上留点空。',
        '撒上马苏里拉奶酪。',
        '淋点橄榄油，撒海盐。',
        '烤箱250度，烤10分钟。',
        '出炉撒新鲜罗勒叶。',
        '放凉一两分钟再切片。'
      ]
    },
    'ms': {
      title: 'Pizza Margherita',
      description: 'Pizza Margherita asli dari Naples, Itali. Ringkas tapi penuh rasa, memang sedap sangat!',
      ingredients: [
        { item: 'Doh pizza', amount: '' },
        { item: 'Tomato San Marzano', amount: '' },
        { item: 'Mozzarella segar', amount: '' },
        { item: 'Selasih', amount: '' },
        { item: 'Minyak zaitun', amount: '' },
        { item: 'Garam', amount: '' }
      ],
      instructions: [
        'Sediakan doh pizza, biar rehat 1 jam pada suhu bilik.',
        'Bentukkan doh jadi bulatan 12 inci, pastikan nipis dan rata.',
        'Sapu sos tomato San Marzano, tinggalkan sedikit tepi untuk kerak.',
        'Taburkan kepingan mozzarella segar. Biar sikit keju sentuh tepi kerak.',
        'Titiskan minyak zaitun dan tabur garam laut kepingan.',
        'Bakar dalam oven 250°C selama 10 minit, sampai kerak keemasan dan keju cair.',
        'Keluarkan pizza, letak daun selasih segar di atasnya.',
        'Biarkan sejuk seminit dua sebelum potong dan hidang.'
      ]
    }
  },
  'it-02': {
    'zh-CN': {
      title: '意式培根蛋面',
      description: '罗马的意式培根蛋面，香浓顺滑，吃一口就暖到心里！',
      ingredients: [
        { item: '意大利面', amount: '200克' },
        { item: '猪颊肉 (或意式培根)', amount: '100克' },
        { item: '蛋黄', amount: '3个' },
        { item: '佩科里诺罗马诺奶酪', amount: '50克' },
        { item: '黑胡椒', amount: '' }
      ],
      instructions: [
        '大锅盐水烧开，煮意面到弹牙。',
        '猪颊肉切条，平底锅煎脆。',
        '猪颊肉沥油，锅里油留着。',
        '蛋黄、奶酪、黑胡椒，碗里拌匀。',
        '意面沥干，放回猪油锅里拌匀。',
        '离火，倒蛋黄酱，快速拌匀。',
        '继续拌2-3分钟，酱汁浓稠。',
        '加脆猪颊肉，拌匀，撒奶酪和胡椒。'
      ]
    },
    'ms': {
      title: 'Spaghetti Carbonara',
      description: 'Spaghetti Carbonara asli dari Rome, Itali. Sos berkrim, guanciale rangup, memang tak cukup sepinggan!',
      ingredients: [
        { item: 'spageti', amount: '200g' },
        { item: 'guanciale (atau pancetta)', amount: '100g' },
        { item: 'kuning telur', amount: '3 biji' },
        { item: 'Pecorino Romano', amount: '50g' },
        { item: 'Lada hitam', amount: '' }
      ],
      instructions: [
        'Didihkan air masin, masak spageti al dente, kira-kira 7-9 minit.',
        'Potong guanciale nipis, goreng dalam kuali sampai rangup dan perang keemasan.',
        'Angkat guanciale, ketepikan. Jangan buang lemak dalam kuali.',
        'Dalam mangkuk, pukul kuning telur, keju Pecorino Romano, dan lada hitam sampai sebati.',
        'Bila spageti dah masak, toskan. Masukkan terus ke dalam kuali dengan lemak guanciale. Gaul rata.',
        'Angkat kuali dari api. Tuang campuran kuning telur atas spageti. Gaul kuat-kuat sampai jadi sos berkrim.',
        'Terus gaul 2-3 minit sampai sos pekat dan licin, menyaluti spageti.',
        'Masukkan guanciale rangup, gaul lagi. Hidangkan segera dengan keju dan lada hitam.'
      ]
    }
  },
  'it-03': {
    'zh-CN': {
      title: '米兰式烩饭',
      description: '米兰的烩饭，金黄香浓，每一口都是家的味道！',
      ingredients: [
        { item: '阿博里奥米', amount: '300克' },
        { item: '藏红花', amount: '一小撮' },
        { item: '洋葱', amount: '1个' },
        { item: '温热高汤', amount: '1.5升' },
        { item: '黄油', amount: '80克' },
        { item: '帕尔马干酪', amount: '' }
      ],
      instructions: [
        '洋葱切碎，黄油炒软，8分钟。',
        '加米饭，炒2分钟，裹上黄油。',
        '倒白葡萄酒，炒到吸收。',
        '高汤一勺勺加，边加边搅18分钟。',
        '最后2分钟，加藏红花丝。',
        '离火，加冷黄油，拌匀。',
        '拌入帕尔马干酪，盖盖焖2分钟。'
      ]
    },
    'ms': {
      title: 'Risotto alla Milanese',
      description: 'Risotto alla Milanese asli dari Milan, Itali. Nasi berkrim dengan saffron, memang mewah rasanya!',
      ingredients: [
        { item: 'beras Arborio', amount: '300g' },
        { item: 'Saffron', amount: 'secubit' },
        { item: 'bawang besar', amount: '1 biji' },
        { item: 'stok suam', amount: '1.5L' },
        { item: 'mentega', amount: '80g' },
        { item: 'Keju Parmesan', amount: '' }
      ],
      instructions: [
        'Cincang bawang besar halus. Lembutkan dalam mentega atas api perlahan sampai jernih, kira-kira 8 minit.',
        'Masukkan beras Arborio, kacau 2 minit sampai beras bersalut mentega dan bawang.',
        'Tuang wain putih kering, kacau sampai wain hampir kering dan beras bersalut ringan, 2-3 minit.',
        'Mula masukkan stok suam, satu senduk pada satu masa. Kacau sentiasa, biar setiap senduk serap sebelum tambah lagi. Masak 18 minit.',
        'Dua minit terakhir, masukkan saffron yang direndam air panas. Kacau perlahan sampai warna kuning cantik.',
        'Angkat dari api. Masukkan mentega sejuk, potong kecil. Kacau sampai sebati dan risotto berkrim.',
        'Masukkan keju Parmesan parut. Kacau rata. Tutup periuk, biar rehat 2 minit. Sedia untuk dihidang!'
      ]
    }
  },
  'it-04': {
    'zh-CN': {
      title: '提拉米苏',
      description: '提拉米苏，香甜软滑，咖啡和奶酪的完美结合，让人回味无穷！',
      ingredients: [
        { item: '马斯卡彭芝士', amount: '250克' },
        { item: '鸡蛋', amount: '3个' },
        { item: '糖', amount: '80克' },
        { item: '浓缩咖啡', amount: '150毫升' },
        { item: '手指饼干', amount: '200克' },
        { item: '可可粉', amount: '' }
      ],
      instructions: [
        '蛋清蛋黄分开，蛋清放一边。',
        '蛋黄加糖，打发到发白。',
        '马斯卡彭芝士加蛋黄里，拌匀。',
        '蛋清打发到硬性发泡。',
        '蛋清轻轻拌入芝士糊。',
        '手指饼干蘸咖啡，铺一层。',
        '铺一半芝士糊，再铺饼干和芝士糊。',
        '冰箱冷藏4小时，撒可可粉。'
      ]
    },
    'ms': {
      title: 'Tiramisu',
      description: 'Tiramisu asli dari Treviso, Itali. Pencuci mulut klasik yang lembut dan penuh rasa kopi, memang sedap!',
      ingredients: [
        { item: 'mascarpone', amount: '250g' },
        { item: 'telur', amount: '3 biji' },
        { item: 'gula', amount: '80g' },
        { item: 'espresso', amount: '150ml' },
        { item: 'savoiardi (ladyfingers)', amount: '200g' },
        { item: 'Serbuk koko', amount: '' }
      ],
      instructions: [
        'Asingkan telur. Kuning telur dalam satu mangkuk, putih telur dalam mangkuk lain.',
        'Pukul kuning telur dan gula sampai pucat, gebu, dan gula larut.',
        'Masukkan keju mascarpone ke dalam campuran kuning telur. Pukul sampai licin dan berkrim. Jangan terlebih pukul.',
        'Pukul putih telur sampai berbuih dan jadi puncak lembut. Terus pukul sampai kaku dan pekat. Jangan terlebih pukul.',
        'Lipat perlahan-lahan putih telur ke dalam campuran mascarpone. Pastikan gebu dan sebati.',
        'Celup ladyfingers dalam espresso. Susun satu lapisan di dasar hidangan.',
        'Sapu separuh campuran mascarpone atas ladyfingers. Ulang lapisan ladyfingers dan mascarpone.',
        'Sejukkan tiramisu 4 jam atau semalaman. Sebelum hidang, tabur serbuk koko gelap.'
      ]
    }
  },
  'it-05': {
    'zh-CN': {
      title: '千层面',
      description: '博洛尼亚的千层面，层层叠叠的美味，吃一口就停不下来！',
      ingredients: [
        { item: '千层面皮', amount: '' },
        { item: '牛肉馅', amount: '500克' },
        { item: '白酱', amount: '' },
        { item: '番茄酱', amount: '' },
        { item: '帕尔马干酪', amount: '' },
        { item: '马苏里拉芝士', amount: '' }
      ],
      instructions: [
        '煎锅热油，炒牛肉馅，5-7分钟。',
        '加洋葱、大蒜、白葡萄酒，炒干。',
        '加番茄、罗勒、牛至，小火炖1小时。',
        '黄油融化，加面粉，炒香，倒牛奶，煮稠。',
        '烤盘底铺酱，放面皮，铺肉酱、白酱、芝士。',
        '重复铺层，最后铺芝士。',
        '盖锡纸烤40分钟，揭开再烤10-15分钟。',
        '出炉静置10-15分钟，切片吃。'
      ]
    },
    'ms': {
      title: 'Lasagne',
      description: 'Lasagne asli dari Bologna, Itali. Lapisan pasta, daging, dan keju, memang hidangan keluarga yang sempurna!',
      ingredients: [
        { item: 'Kepingan lasagne', amount: '' },
        { item: 'daging cincang', amount: '500g' },
        { item: 'Sos béchamel', amount: '' },
        { item: 'Sos tomato', amount: '' },
        { item: 'Parmesan', amount: '' },
        { item: 'Mozzarella', amount: '' }
      ],
      instructions: [
        'Panaskan minyak zaitun dalam kuali. Masukkan daging cincang, hancurkan, masak sampai tak merah jambu, 5-7 minit.',
        'Masukkan bawang, bawang putih, dan wain putih. Masak sampai cecair kering dan sedikit karamel, 10 minit.',
        'Buat sos Bolognese: tambah tomato, basil, oregano. Kacau, reneh 1 jam sampai pekat dan sebati.',
        'Buat sos béchamel: cairkan mentega, pukul tepung jadi roux. Masak 1-2 minit. Tuang susu perlahan-lahan, pukul sampai pekat, 5-7 minit.',
        'Panaskan oven 180°C. Sapu sos tomato di dasar loyang. Susun 4 keping lasagne. Sudukan separuh Bolognese, separuh béchamel, separuh mozzarella dan parmesan.',
        'Ulang lapisan: sos tomato, pasta, Bolognese, béchamel, mozzarella dan parmesan yang tinggal. Akhiri dengan keju.',
        'Tutup dengan kerajang, bakar 40 minit. Buka kerajang, bakar lagi 10-15 minit sampai perang keemasan.',
        'Keluarkan lasagne, biar rehat 10-15 minit. Potong dan hidang dengan basil dan parmesan.'
      ]
    }
  },
  'it-06': {
    'zh-CN': {
      title: '热那亚青酱',
      description: '热那亚的青酱，新鲜罗勒的香气，简单又美味，拌面最好吃！',
      ingredients: [
        { item: '新鲜罗勒叶', amount: '2杯' },
        { item: '松子', amount: '50克' },
        { item: '帕尔马干酪', amount: '50克' },
        { item: '大蒜', amount: '2瓣' },
        { item: '橄榄油', amount: '100毫升' },
        { item: '盐', amount: '' }
      ],
      instructions: [
        '罗勒叶洗净拍干，要新鲜的哦。',
        '松子干锅烘烤，金黄出香。',
        '料理机放松子、大蒜、帕尔马干酪，打碎。',
        '加罗勒叶，打匀。',
        '边打边慢倒橄榄油，打成酱。',
        '打到酱汁顺滑，还有点颗粒感。',
        '加盐调味，尝尝咸淡。',
        '拌温热意面，趁热吃。'
      ]
    },
    'ms': {
      title: 'Pesto Genovese',
      description: 'Pesto Genovese asli dari Genoa, Itali. Sos basil segar yang wangi, memang sedap dengan pasta!',
      ingredients: [
        { item: 'basil segar', amount: '2 cawan' },
        { item: 'kacang pain', amount: '50g' },
        { item: 'Parmesan', amount: '50g' },
        { item: 'bawang putih', amount: '2 ulas' },
        { item: 'minyak zaitun', amount: '100ml' },
        { item: 'Garam', amount: '' }
      ],
      instructions: [
        'Pilih daun basil segar. Bilas perlahan, keringkan dengan tuala kertas.',
        'Panggang kacang pain dalam kuali kering sampai perang keemasan dan wangi.',
        'Dalam pemproses makanan, campur kacang pain, bawang putih, dan keju Parmesan. Kisar kasar.',
        'Masukkan daun basil segar. Kisar sampai basil hancur dan campuran sebati.',
        'Dengan pemproses makanan berjalan, tuang minyak zaitun perlahan-lahan sampai pesto pekat dan berkrim.',
        'Terus kisar sampai pesto licin tapi masih ada tekstur. Warna hijau terang dan wangi.',
        'Perasakan pesto dengan garam secukup rasa. Ingat, Parmesan dah masin.',
        'Gaulkan Pesto Genovese dengan pasta panas. Pastikan pasta bersalut rata.'
      ]
    }
  },
  'it-07': {
    'zh-CN': {
      title: '意式炸饭团',
      description: '巴勒莫的意式炸饭团，外酥里嫩，芝士流心，太好吃了！',
      ingredients: [
        { item: '煮熟的烩饭', amount: '' },
        { item: '马苏里拉芝士', amount: '100克' },
        { item: '面包屑', amount: '' },
        { item: '鸡蛋', amount: '' },
        { item: '番茄酱', amount: '' },
        { item: '食用油', amount: '用于油炸' }
      ],
      instructions: [
        '煮好的烩饭，彻底放凉。',
        '手沾凉水，取饭团，捏成球。',
        '饭团中间挖个洞，放马苏里拉芝士。',
        '封口，捏紧成球。',
        '先裹面粉，再蘸蛋液，最后滚面包屑。',
        '油锅烧到180度，小心下饭团。',
        '炸到金黄酥脆，3-4分钟。',
        '沥油，趁热配番茄酱吃。'
      ]
    },
    'ms': {
      title: 'Arancini',
      description: 'Arancini asli dari Palermo, Itali. Bola nasi rangup dengan inti keju cair, memang tak boleh berhenti makan!',
      ingredients: [
        { item: 'Nasi risotto yang dimasak', amount: '' },
        { item: 'mozzarella', amount: '100g' },
        { item: 'Serbuk roti', amount: '' },
        { item: 'Telur', amount: '' },
        { item: 'Sos tomato', amount: '' },
        { item: 'Minyak untuk menggoreng', amount: '' }
      ],
      instructions: [
        'Sejukkan nasi risotto yang dah masak sampai suhu bilik.',
        'Basahkan tangan. Ambil segenggam nasi, bentukkan jadi bola longgar.',
        'Buat lubang di tengah bola nasi. Letak keju mozzarella di dalamnya.',
        'Tutup lubang, bentukkan nasi jadi bola ketat. Pastikan keju tertutup rapat.',
        'Salut arancini dengan tepung, celup telur, kemudian gulung dalam serbuk roti.',
        'Panaskan minyak dalam kuali sampai 180°C. Masukkan arancini perlahan-lahan.',
        'Goreng arancini sampai perang keemasan dan rangup, kira-kira 3-4 minit. Angkat, toskan minyak.',
        'Hidangkan arancini segera dengan sos tomato. Luar rangup, dalam lembut dan berkeju!'
      ]
    }
  },
  'it-08': {
    'zh-CN': {
      title: '烩牛膝',
      description: '米兰的烩牛膝，肉炖得酥烂，配上柠檬香草酱，解腻又美味！',
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
        '烤箱160度预热，牛膝撒盐、胡椒、糖。',
        '牛膝裹面粉，再撒帕尔马干酪。',
        '荷兰烤箱热油，煎牛膝到金黄。',
        '牛膝取出，放洋葱、胡萝卜、西芹，炒软。',
        '倒白葡萄酒，刮锅底，收汁。加番茄、百里香、月桂叶。',
        '牛膝回锅，盖盖，烤箱炖2小时。',
        '柠檬皮、大蒜、欧芹切碎，加柠檬汁、橄榄油，做酱。',
        '牛膝出锅，淋上酱汁，撒欧芹、柠檬片。'
      ]
    },
    'ms': {
      title: 'Osso Buco',
      description: 'Osso Buco asli dari Milan, Itali. Betis anak lembu yang lembut, dimasak perlahan dengan rasa yang kaya, memang istimewa!',
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
        'Panaskan oven 160°C. Perasakan betis anak lembu dengan garam, lada hitam, dan gula.',
        'Salut betis anak lembu dengan tepung serbaguna dan sedikit keju Parmesan parut.',
        'Panaskan minyak zaitun dalam periuk Belanda. Perangkan betis anak lembu di semua sisi sampai keemasan, 2-3 minit setiap sisi.',
        'Angkat betis anak lembu. Masukkan bawang, lobak merah, saderi ke dalam periuk. Masak sampai lembut dan jernih.',
        'Tuang wain putih, kikis sisa perang di dasar. Biar mendidih sampai wain hampir kering. Masukkan tomato, thyme, dan daun bay.',
        'Kembalikan betis anak lembu ke dalam periuk. Tutup, braise dalam oven 2 jam sampai daging lembut.',
        'Sementara itu, sediakan gremolata: cincang kulit lemon, bawang putih, pasli. Campur jus lemon dan minyak zaitun.',
        'Hidangkan betis anak lembu di atas pinggan. Sudukan cecair braising dan sayur-sayuran. Akhiri dengan sesudu gremolata.'
      ]
    }
  },
  'it-09': {
    'zh-CN': {
      title: '佛卡夏',
      description: '佛卡夏，这可是意大利利古里亚的家常味道，香喷喷的，你一定会喜欢！',
      ingredients: [
        { item: '面粉', amount: '500克' },
        { item: '酵母', amount: '7克' },
        { item: '水', amount: '300毫升' },
        { item: '橄榄油', amount: '' },
        { item: '迷迭香', amount: '' },
        { item: '海盐片', amount: '' }
      ],
      instructions: [
        '面粉酵母先拌匀。',
        '慢慢加温水，搅成粗面团。',
        '倒橄榄油，继续搅到光滑。',
        '揉面十分钟，揉到面团亮亮的。',
        '发酵一小时，面团变两倍大。',
        '面团按进烤盘，手指戳洞洞。',
        '再淋橄榄油，撒迷迭香和海盐。',
        '烤箱220度，烤二十分钟，金黄就好啦！'
      ]
    },
    'ms': {
      title: 'Focaccia',
      description: 'Focaccia ni resipi asli dari Liguria, Itali. Sedap sangat, lembut di dalam, rangup di luar. Cubalah!',
      ingredients: [
        { item: 'Tepung', amount: '500g' },
        { item: 'Yis', amount: '7g' },
        { item: 'Air', amount: '300ml' },
        { item: 'Minyak zaitun', amount: '' },
        { item: 'Rosemari', amount: '' },
        { item: 'Serpihan garam laut', amount: '' }
      ],
      instructions: [
        'Mula-mula, campurkan tepung protein tinggi (macam tepung \'00\' atau tepung roti) dengan yis kering dalam mangkuk besar. Gaul rata ya.',
        'Lepas tu, masukkan air suam sikit-sikit. Gaul doh sampai jadi kasar. Boleh guna sudu kayu atau pengadun.',
        'Kemudian, masukkan minyak zaitun extra-virgin. Uli lagi sampai minyak sebati dan doh jadi licin, elastik.',
        'Uli doh atas permukaan bertabur tepung selama 10 minit. Guna teknik tekan-lipat sampai doh licin dan berkilat.',
        'Biarkan doh naik dalam tempat suam, tak berangin, selama sejam. Sampai saiznya jadi dua kali ganda.',
        'Tekan perlahan-lahan doh yang dah naik tu ke dalam loyang berminyak. Buat lekukan dengan jari untuk perangkap minyak dan rosemari.',
        'Tuang minyak zaitun extra-virgin banyak-banyak atas doh. Tabur daun rosemari wangi dan sikit garam laut.',
        'Akhir sekali, bakar focaccia dalam ketuhar panas 220°C selama 20 minit. Sampai perang keemasan dan wangi semerbak.'
      ]
    }
  },
  'it-10': {
    'zh-CN': {
      title: '卡诺里',
      description: '西西里岛的卡诺里，甜甜脆脆的，吃一口就停不下来！',
      ingredients: [
        { item: '卡诺里外壳 (炸)', amount: '' },
        { item: '意大利乳清干酪', amount: '500克' },
        { item: '糖粉', amount: '200克' },
        { item: '巧克力碎', amount: '' },
        { item: '橙皮屑', amount: '' },
        { item: '开心果', amount: '' }
      ],
      instructions: [
        '油锅烧到190度，炸卡诺里壳。',
        '炸到金黄起泡，厨房纸吸油。',
        '乳清干酪沥水，放冰箱过夜。',
        '第二天，干酪加糖粉打匀。',
        '拌入黑巧克力碎。',
        '装裱花袋，填满卡诺里壳。',
        '两头沾开心果碎。',
        '撒点糖粉，一小时内吃完最棒！'
      ]
    },
    'ms': {
      title: 'Cannoli',
      description: 'Cannoli ni pencuci mulut klasik dari Sicily, Itali. Rangup di luar, lembut berkrim di dalam. Memang sedap!',
      ingredients: [
        { item: 'Kulit cannoli (digoreng)', amount: '' },
        { item: 'Keju ricotta', amount: '500g' },
        { item: 'Gula aising', amount: '200g' },
        { item: 'Cip coklat', amount: '' },
        { item: 'Kulit oren parut', amount: '' },
        { item: 'Pistachio', amount: '' }
      ],
      instructions: [
        'Mula-mula, sediakan kulit cannoli. Panaskan minyak 190°C. Goreng kulit sampai perang keemasan, 2-3 minit setiap sisi. Toskan.',
        'Untuk inti ricotta, toskan keju ricotta semalaman dalam penapis beralas kain. Biar airnya keluar, nanti jadi licin berkrim.',
        'Esoknya, pukul ricotta yang dah ditos dengan 200g gula aising sampai licin, berkrim dan berkilat.',
        'Lipat 50g cip coklat gelap ke dalam campuran ricotta. Gaul rata sampai nampak macam marmar.',
        'Masukkan inti ricotta dalam beg paip. Isi kulit cannoli yang dah sejuk tu, paip sampai 3/4 penuh.',
        'Untuk hiasan, celup hujung cannoli yang dah berisi tu dalam pistachio cincang. Tekan sikit bagi melekat.',
        'Akhir sekali, tabur gula aising nipis-nipis atas cannoli. Hidangkan dalam masa sejam, masa kulit masih rangup.'
      ]
    }
  },
  'jp-01': {
    'zh-CN': {
      title: '拉面',
      description: '札幌拉面，热腾腾的，吃一口暖到心里，特别舒服！',
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
        '骨头小火炖三小时。',
        '酱油味噌芝麻调味。',
        '叉烧切片，鸡蛋对半。',
        '面条煮好，放进汤里。',
        '摆好配料，趁热吃！'
      ]
    },
    'ms': {
      title: 'Ramen',
      description: 'Ramen Sapporo ni memang padu! Kuah pekat, mi kenyal, topping melimpah. Cuba rasa, mesti nak lagi!',
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
      description: '东京的握寿司，新鲜又美味，一口一个，太满足了！',
      ingredients: [
        { item: '寿司米饭', amount: '' },
        { item: '新鲜三文鱼/金枪鱼', amount: '' },
        { item: '芥末', amount: '' },
        { item: '酱油', amount: '' },
        { item: '海苔条', amount: '' },
        { item: '米醋', amount: '' }
      ],
      instructions: [
        '米饭和水1:1，煮熟放凉。',
        '米醋糖盐拌匀，做寿司醋。',
        '寿司醋拌入米饭，别捣碎。',
        '手沾湿，米饭捏成椭圆形。',
        '米饭上抹一点芥末。',
        '鱼片切薄，轻轻放米饭上。',
        '配酱油，加萝卜或姜片，开吃！'
      ]
    },
    'ms': {
      title: 'Sushi (Nigiri)',
      description: 'Nigiri Sushi ni resipi asli dari Tokyo. Nasi lembut, ikan segar, memang padu! Senang je nak buat.',
      ingredients: [
        { item: 'Nasi sushi', amount: '' },
        { item: 'Ikan salmon / tuna segar', amount: '' },
        { item: 'Wasabi', amount: '' },
        { item: 'Kicap', amount: '' },
        { item: 'Jalur nori', amount: '' },
        { item: 'Cuka beras', amount: '' }
      ],
      instructions: [
        'Mula-mula, masak nasi Jepun bijirin pendek dengan air (nisbah 1:1). Didihkan, kecilkan api, reneh 15-20 minit sampai air serap.',
        'Sementara nasi masak, campur cuka beras, gula, garam sampai larut. Bila nasi sejuk, gaul perlahan dengan campuran ni.',
        'Bila nasi dah sejuk dan berperisa, basahkan tangan. Bentuk nasi jadi blok bujur, tekan lembut-lembut.',
        'Sapu sikit pes wasabi atas setiap blok nasi. Cukup sebesar kacang pea di tengah.',
        'Hiris ikan salmon atau tuna segar nipis-nipis (1/8 inci). Guna pisau tajam, potong lawan urat.',
        'Letak hirisan ikan atas blok nasi, tekan perlahan atas wasabi. Kalau perlu, guna rumpai laut nori kecil untuk pegang.',
        'Akhir sekali, hidangkan nigiri dengan kicap. Boleh hias dengan lobak daikon atau halia jeruk kalau suka.'
      ]
    }
  },
  'jp-03': {
    'zh-CN': {
      title: '天妇罗',
      description: '东京天妇罗，炸得酥酥脆脆的，蘸上酱汁，味道好极了！',
      ingredients: [
        { item: '虾', amount: '' },
        { item: '蔬菜 (红薯, 西葫芦)', amount: '' },
        { item: '天妇罗面糊', amount: '' },
        { item: '冷水', amount: '' },
        { item: '炸油', amount: '' },
        { item: '蘸酱', amount: '' }
      ],
      instructions: [
        '天妇罗粉加冰水，轻轻拌匀。',
        '红薯西葫芦切片，虾去壳留尾。',
        '食材裹上面糊，沥掉多余的。',
        '油锅烧到180度。',
        '虾和菜下锅炸，别放太多。',
        '炸两分钟，淡金色就好。',
        '捞出沥油，蘸酱油清酒味醂。',
        '加萝卜泥和紫苏叶，更香！'
      ]
    },
    'ms': {
      title: 'Tempura',
      description: 'Tempura Tokyo ni memang rangup dan ringan! Sayur dan udang bersalut adunan nipis, digoreng sempurna. Sedap sangat!',
      ingredients: [
        { item: 'Udang', amount: '' },
        { item: 'Sayur-sayuran (keledek, zukini)', amount: '' },
        { item: 'Adunan tempura', amount: '' },
        { item: 'Air sejuk', amount: '' },
        { item: 'Minyak untuk menggoreng', amount: '' },
        { item: 'Sos pencicah', amount: '' }
      ],
      instructions: [
        'Mula-mula, ayak tepung tempura dalam mangkuk sejuk. Masukkan air sejuk berais sikit-sikit, kacau perlahan dengan garpu. Jangan kacau banyak sangat, biar berketul sikit.',
        'Potong keledek dan zukini nipis-nipis. Udang pula, buang kulit dan urat, biar ekornya ada.',
        'Celup setiap sayur dan udang dalam adunan tempura. Salut nipis-nipis, biar lebihan adunan menitis.',
        'Panaskan minyak dalam periuk dalam sampai 180°C. Minyak kena dalam 5-7 cm ya.',
        'Masukkan udang dan sayur yang dah bersalut adunan perlahan-lahan dalam minyak panas. Jangan penuhkan periuk sangat, nanti minyak sejuk.',
        'Goreng tempura kira-kira 2 minit setiap sisi. Sampai warna emas pucat. Jangan goreng lama sangat, nanti liat.',
        'Angkat tempura dari minyak, letak atas pinggan beralas tisu dapur. Hidangkan segera dengan sos pencicah kicap, sake, mirin.',
        'Boleh hias tempura dengan lobak daikon parut dan daun shiso untuk rasa lebih segar.'
      ]
    }
  },
  'jp-04': {
    'zh-CN': {
      title: '炸猪排',
      description: '东京炸猪排，外酥里嫩，配上米饭和酱汁，真是人间美味！',
      ingredients: [
        { item: '猪里脊肉', amount: '2 块' },
        { item: '日式面包糠', amount: '' },
        { item: '鸡蛋', amount: '' },
        { item: '面粉', amount: '' },
        { item: '炸猪排酱', amount: '' },
        { item: '卷心菜', amount: '' }
      ],
      instructions: [
        '选两块瘦猪里脊，修掉肥肉。',
        '肉锤敲薄，约0.6厘米。',
        '撒盐和黑胡椒，裹薄薄面粉。',
        '蘸蛋液，再裹面包糠。',
        '油锅烧到170度，放猪排。',
        '两面各炸四分钟，金黄酥脆。',
        '捞出沥油，切片。',
        '配卷心菜米饭，淋炸猪排酱。'
      ]
    },
    'ms': {
      title: 'Tonkatsu',
      description: 'Tonkatsu Tokyo ni memang kegemaran ramai! Daging babi rangup di luar, lembut berjus di dalam. Makan dengan sos Tonkatsu, memang terangkat!',
      ingredients: [
        { item: 'Daging babi loin', amount: '2 keping' },
        { item: 'Serbuk roti Panko', amount: '' },
        { item: 'Telur', amount: '' },
        { item: 'Tepung', amount: '' },
        { item: 'Sos Tonkatsu', amount: '' },
        { item: 'Kubis', amount: '' }
      ],
      instructions: [
        'Mula-mula, pilih dua keping daging babi loin tanpa lemak. Buang lemak berlebihan untuk masak sekata.',
        'Guna penukul daging, pukul perlahan daging babi sampai tebal 1/4 inci. Jangan sampai koyak ya.',
        'Perasakan daging babi dengan garam laut dan lada hitam. Salut nipis-nipis dengan tepung serbaguna, buang lebihan.',
        'Celup daging babi dalam telur yang dipukul, pastikan bersalut penuh. Kemudian, golekkan atas serbuk roti Panko, tekan perlahan.',
        'Panaskan 1/2 inci minyak dalam kuali besar sampai 170°C. Letak daging babi yang dah bersalut perlahan-lahan dalam minyak panas.',
        'Goreng daging babi 4 minit setiap sisi. Sampai perang keemasan dan rangup. Angkat, letak atas tisu dapur.',
        'Bila dah sejuk sikit, hiris daging babi jadi jalur nipis (1/2 inci). Hidangkan atas kubis hiris, dengan nasi kukus dan sos Tonkatsu.',
        'Hias dengan hirisan daun bawang, lobak daikon parut, atau halia jeruk kalau suka.'
      ]
    }
  },
  'jp-05': {
    'zh-CN': {
      title: '味噌汤',
      description: '京都味噌汤，暖暖的，清淡又鲜美，喝一口心都静下来了。',
      ingredients: [
        { item: '高汤', amount: '4 杯' },
        { item: '白味噌', amount: '3 汤匙' },
        { item: '绢豆腐', amount: '100克' },
        { item: '海带芽', amount: '' },
        { item: '青葱', amount: '' }
      ],
      instructions: [
        '高汤加热，别烧开。',
        '味噌酱加点高汤，搅匀。',
        '味噌倒回锅里，拌匀。',
        '绢豆腐切小方块。',
        '海带芽泡软，沥水。',
        '豆腐海带入锅，小火煮两三分钟。',
        '盛碗，撒青葱，趁热喝！'
      ]
    },
    'ms': {
      title: 'Sup Miso',
      description: 'Sup Miso Kyoto ni memang menenangkan jiwa. Rasa umami yang kaya, dengan tauhu lembut dan wakame. Sesuai sangat untuk sarapan atau makan malam.',
      ingredients: [
        { item: 'Stok dashi', amount: '4 cawan' },
        { item: 'Miso putih', amount: '3 sudu besar' },
        { item: 'Tauhu sutera', amount: '100g' },
        { item: 'Rumpai laut Wakame', amount: '' },
        { item: 'Daun bawang', amount: '' }
      ],
      instructions: [
        'Mula-mula, panaskan stok dashi dalam periuk sederhana sampai suam-suam kuku (82°C-88°C). Jangan sampai mendidih ya.',
        'Sementara dashi panas, ambil 3 sudu besar pes miso dalam mangkuk kecil. Masukkan satu senduk dashi panas, kacau sampai pes miso larut licin.',
        'Tuang balik campuran miso ke dalam periuk dashi yang tinggal. Kacau perlahan bagi miso sebati.',
        'Potong 100g tauhu sutera jadi kiub kecil (1/2 inci). Hati-hati, tauhu lembut.',
        'Rendam rumpai laut wakame dalam air panas 5 minit sampai lembut dan kembang. Toskan, potong kecil kalau perlu.',
        'Masukkan kiub tauhu dan wakame yang dah direndam ke dalam periuk sup. Kacau perlahan, kecilkan api, reneh 2-3 minit.',
        'Akhir sekali, senduk sup miso ke dalam mangkuk. Hias dengan taburan daun bawang hiris nipis. Hidangkan segera, panas-panas.'
      ]
    }
  },
  'jp-06': {
    'zh-CN': {
      title: '章鱼小丸子',
      description: '大阪章鱼小丸子，外酥里嫩，一口咬下去，鲜香四溢！',
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
        '面粉高汤鸡蛋拌匀，静置半小时。',
        '熟章鱼切小块。',
        '模具刷油烧热，倒面糊。',
        '每个洞放章鱼，再倒面糊。',
        '用竹签翻转，转成圆球。',
        '炸三四分钟，金黄酥脆。',
        '淋章鱼小丸子酱和蛋黄酱。',
        '撒木鱼花和青海苔粉，配腌姜，趁热吃！'
      ]
    },
    'ms': {
      title: 'Takoyaki',
      description: 'Takoyaki Osaka ni bebola sotong yang rangup di luar, lembut di dalam. Dengan sos manis, mayonis, dan taburan bonito. Memang sedap!',
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
        'Mula-mula, pukul tepung, kuah dashi, dan telur dalam mangkuk besar sampai licin. Biarkan rehat 30 minit.',
        'Potong sotong kurita yang dah masak jadi kepingan kecil (1/4 inci). Ketepikan.',
        'Panaskan acuan takoyaki atas api sederhana-tinggi. Sapu minyak sikit dalam lubang. Tuang adunan sikit je.',
        'Cepat-cepat letak sekeping sotong kurita di tengah setiap lubang. Tuang adunan lagi sampai 3/4 penuh.',
        'Bila adunan mula keras, guna lidi atau pencungkil takoyaki. Pusing-pusingkan bebola tu sampai jadi bulat dan perang keemasan.',
        'Teruskan masak dan pusing takoyaki 3-4 minit. Sampai rangup di luar, lembut di dalam.',
        'Untuk hidang, letak takoyaki panas atas pinggan. Titik sos takoyaki, mayonis, tabur serpihan bonito dan aonori. Letak halia jeruk di sisi.',
        'Akhir sekali, hidangkan takoyaki segera, masa masih panas dan berasap. Boleh tambah bonito dan aonori lagi kalau suka.'
      ]
    }
  },
  'jp-07': {
    'zh-CN': {
      title: '煎饺',
      description: '东京煎饺，底部金黄酥脆，馅料鲜美多汁，太好吃了！',
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
        '大白菜切碎，香油炒软。',
        '猪肉馅、白菜、蒜姜拌匀。',
        '加酱油，拌到肉馅粘合。',
        '饺子皮放肉馅，留边。',
        '边上抹水，对折捏紧。',
        '平底锅热油，饺子底部煎金黄。',
        '加水盖盖，蒸三分钟。',
        '检查熟了没，蘸酱吃！'
      ]
    },
    'ms': {
      title: 'Gyoza',
      description: 'Gyoza Tokyo ni memang sedap! Inti daging babi dan kubis yang berjus, dibalut kulit rangup. Sesuai sangat untuk snek atau lauk.',
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
        'Mula-mula, cincang halus 100g kubis napa. Tumis dalam kuali dengan 1 sudu besar minyak bijan sampai lutsinar dan karamel.',
        'Dalam mangkuk besar, campur 200g daging babi cincang, kubis yang dah masak, 2 ulas bawang putih cincang, dan 1 sudu besar halia parut. Gaul sebati.',
        'Tambah 1 sudu besar kicap ke dalam campuran daging babi. Gaul sampai daging terikat elok.',
        'Letak kulit gyoza atas permukaan bersih. Letak satu sudu besar inti daging babi di tengah, tinggalkan tepi 1/2 inci.',
        'Celup jari dalam air, sapu tepi kulit. Lipat kulit jadi segi tiga, tekan tepi bagi rapat.',
        'Panaskan 1 sudu besar minyak sayuran dalam kuali tak melekat sampai panas. Letak gyoza dalam kuali, bahagian rata ke bawah. Goreng 2-3 minit sampai perang keemasan.',
        'Bila gyoza dah perang, percikkan sikit air (1 sudu besar) dalam kuali. Cepat-cepat tutup kuali, kukus gyoza 3 minit.',
        'Lepas 3 minit, angkat penutup. Pastikan gyoza dah masak sepenuhnya. Hidangkan segera dengan sos pencicah pilihan awak.'
      ]
    }
  },
  'jp-08': {
    'zh-CN': {
      title: '照烧鸡',
      description: '东京照烧鸡，甜甜咸咸的，鸡肉嫩滑入味，配米饭绝了！',
      ingredients: [
        { item: '鸡腿肉', amount: '2 块' },
        { item: '酱油', amount: '3 汤匙' },
        { item: '味醂', amount: '2 汤匙' },
        { item: '清酒', amount: '1 汤匙' },
        { item: '糖', amount: '1 汤匙' }
      ],
      instructions: [
        '酱油味醂清酒糖，搅匀做酱汁。',
        '鸡腿肉放袋子，倒酱汁腌半小时。',
        '鸡肉取出，放室温十五分钟。',
        '煎锅烧热，放油。',
        '鸡皮朝下煎五七分钟，翻面再煎五分钟。',
        '转小火，倒剩余酱汁，煮稠。',
        '鸡肉裹上酱汁，再煮两三分钟。',
        '鸡肉切片，放米饭上。',
        '撒青葱芝麻，淋酱汁，趁热吃！'
      ]
    },
    'ms': {
      title: 'Ayam Teriyaki',
      description: 'Ayam Teriyaki Tokyo ni memang kegemaran ramai! Ayam lembut berjus dengan sos teriyaki manis dan savuri. Makan dengan nasi panas, memang tak cukup sepinggan!',
      ingredients: [
        { item: 'Peha ayam', amount: '2 keping' },
        { item: 'Kicap', amount: '3 sudu besar' },
        { item: 'Mirin', amount: '2 sudu besar' },
        { item: 'Sake', amount: '1 sudu besar' },
        { item: 'Gula', amount: '1 sudu besar' }
      ],
      instructions: [
        'Mula-mula, buat sos teriyaki. Pukul kicap, mirin, sake, dan gula dalam periuk kecil sampai gula larut.',
        'Masukkan 2 keping peha ayam dalam beg ziplock atau bekas. Tuang sos teriyaki atas ayam, pusingkan bagi rata. Sejukkan 30 minit hingga 2 jam.',
        'Lepas ayam diperap, keluarkan dari peti sejuk. Biarkan pada suhu bilik 15 minit.',
        'Panaskan kuali besar sampai panas sangat (450°F/232°C). Masukkan sikit minyak, pusingkan bagi rata.',
        'Letak peha ayam yang dah diperap dalam kuali, bahagian kulit ke bawah. Bakar 5-7 minit sampai kulit perang keemasan dan rangup. Terbalikkan, masak lagi 5 minit.',
        'Bila ayam dah masak, kecilkan api. Tuang sos teriyaki yang tinggal dalam kuali. Biar mendidih dan pekat jadi glaze.',
        'Guna penyepit, angkat dan pusingkan peha ayam dalam kuali. Salut rata dengan glaze sampai melekat. Terus glaze dan pusing 2-3 minit lagi.',
        'Untuk hidang, hiris peha ayam yang dah diglaze jadi jalur nipis (1/4 inci). Susun atas nasi panas, hias dengan daun bawang hiris dan biji bijan panggang. Tuang sos teriyaki yang tinggal, hidangkan segera.'
      ]
    }
  },
  'jp-09': {
    'zh-CN': {
      title: '抹茶芝士蛋糕',
      description: '奶奶教你做日式抹茶芝士蛋糕，香甜软糯，抹茶味浓郁，快来试试吧！',
      ingredients: [
        { item: '奶油芝士', amount: '500克' },
        { item: '鸡蛋', amount: '3个' },
        { item: '糖', amount: '100克' },
        { item: '抹茶粉', amount: '2汤匙' },
        { item: '鲜奶油', amount: '200毫升' },
        { item: '饼干底', amount: '' }
      ],
      instructions: [
        '饼干压碎，加黄油拌匀。',
        '压入模具底，冷藏30分钟。',
        '奶油芝士打顺滑。',
        '分次加糖，打匀。',
        '加抹茶粉，打成漂亮绿色。',
        '鸡蛋一个一个加，打匀。',
        '鲜奶油打发。',
        '轻柔拌入芝士糊。',
        '倒入模具，抹平。',
        '模具放烤盘，加热水。',
        '160°C烤50分钟。',
        '取出放凉，冷藏过夜。',
        '冰凉享用，味道更浓郁。'
      ]
    },
    'ms': {
      title: 'Kek Keju Matcha',
      description: 'Kek keju matcha ni, resipi asli dari Tokyo, Jepun. Rasa dia memang lembut dan wangi matcha, sedap sangat!',
      ingredients: [
        { item: 'krim keju', amount: '500g' },
        { item: 'telur', amount: '3 biji' },
        { item: 'gula', amount: '100g' },
        { item: 'serbuk matcha', amount: '2 sudu besar' },
        { item: 'krim putar', amount: '200ml' },
        { item: 'tapak biskut', amount: '' }
      ],
      instructions: [
        'Mula-mula, hancurkan biskut sampai halus, campur dengan mentega cair. Tekan dalam loyang, sejukkan 30 minit.',
        'Pukul krim keju sampai licin, masukkan gula sikit-sikit. Pukul lagi sampai sebati.',
        'Masukkan serbuk matcha, pukul sampai warna hijau cantik dan wangi.',
        'Masukkan telur sebiji demi sebiji, pukul sampai adunan licin dan berkilat.',
        'Dalam mangkuk lain, putar krim putar sampai kental. Kaup balikkan perlahan-lahan ke dalam adunan keju.',
        'Tuang adunan kek keju atas tapak biskut dalam loyang, ratakan.',
        'Bakar dalam ketuhar 160°C selama 50 minit, guna kaedah \'water bath\'.',
        'Dah masak, sejukkan dalam rendaman air. Kemudian, sejukkan semalaman dalam peti ais. Barulah sedap!'
      ]
    }
  },
  'jp-10': {
    'zh-CN': {
      title: '大阪烧',
      description: '大阪烧，香喷喷的日式小吃，在家也能轻松做，快来尝尝吧！',
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
        '面粉加水、盐，拌匀静置。',
        '卷心菜切丝，天妇罗碎烤脆。',
        '面糊加菜、天妇罗碎、鸡蛋，拌匀。',
        '锅烧热，倒入面糊摊圆。',
        '煎2-3分钟，边缘凝固。',
        '铺上五花肉片。',
        '煎5分钟，翻面再煎5分钟。',
        '刷大阪烧酱，挤沙拉酱。',
        '撒鲣鱼片、青海苔。',
        '切块，趁热吃！'
      ]
    },
    'ms': {
      title: 'Okonomiyaki',
      description: 'Okonomiyaki ni memang kegemaran ramai, resipi asli dari Osaka, Jepun. Senang je nak buat, rasa dia pun padu!',
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
        'Pukul tepung, air, dan garam sampai licin. Biarkan adunan rehat 30 minit.',
        'Hiris kubis halus-halus. Bakar tenkasu sekejap sampai rangup.',
        'Campurkan adunan tadi dengan kubis, tenkasu, dan telur. Gaul perlahan-lahan.',
        'Panaskan kuali, tuang adunan jadi bulatan. Masak 2-3 minit sampai tepi keras.',
        'Letak hirisan perut babi atas okonomiyaki. Masak 5 minit, kemudian terbalikkan. Masak lagi 5 minit.',
        'Sapu sos okonomiyaki, mayonis, tabur katsuobushi dan aonori.',
        'Angkat, potong, dan hidangkan segera. Boleh tambah sos lagi kalau suka!'
      ]
    }
  },
  'cn-01': {
    'zh-CN': {
      title: '宫保鸡丁',
      description: '宫保鸡丁，麻辣鲜香，下饭神器，快来学学这道家常菜吧！',
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
        '鸡丁酱油淀粉腌好。',
        '花生干锅烤香。',
        '辣椒花椒油里炸。',
        '下鸡肉，炒到金黄。',
        '加蒜姜酱汁（酱油醋糖）。',
        '放花生，撒葱花，出锅！'
      ]
    },
    'ms': {
      title: 'Ayam Kung Pao',
      description: 'Ayam Kung Pao ni memang pedas-pedas manja, resipi asli dari Sichuan, China. Gerenti bertambah nasi!',
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
        'Perap ayam dengan kicap dan tepung jagung. Bakar kacang tanah dalam kuali kering.',
        'Goreng cili kering dan lada Sichuan. Masukkan ayam, masak sampai keemasan.',
        'Masukkan bawang putih, halia, sos (kicap, cuka, gula). Akhir sekali, masukkan kacang tanah dan daun bawang.'
      ]
    }
  },
  'cn-02': {
    'zh-CN': {
      title: '点心 (虾饺)',
      description: '晶莹剔透的虾饺，一口咬下去，满满的虾肉，鲜美无比！',
      ingredients: [
        { item: '虾饺馅', amount: '' },
        { item: '澄面面团', amount: '' },
        { item: '竹笋', amount: '' },
        { item: '香油', amount: '' },
        { item: '酱油', amount: '' }
      ],
      instructions: [
        '虾仁切小块，加香油、酱油、葱花拌匀。',
        '澄面加开水，搅成团，揉光滑。',
        '面团盖保鲜膜，静置15分钟。',
        '擀成薄片，切出饺子皮。',
        '放虾馅，捏成月牙形。',
        '蒸笼铺纸，放虾饺。',
        '水开蒸7分钟。',
        '蘸酱油香油，撒葱花芝麻，趁热吃！'
      ]
    },
    'ms': {
      title: 'Dim Sum (Har Gow)',
      description: 'Har Gow ni dim sum udang yang gebu, resipi asli dari Guangzhou, China. Memang puas hati makan!',
      ingredients: [
        { item: 'inti ladu udang', amount: '' },
        { item: 'doh kanji gandum', amount: '' },
        { item: 'rebung', amount: '' },
        { item: 'minyak bijan', amount: '' },
        { item: 'kicap', amount: '' }
      ],
      instructions: [
        'Cincang udang, campur minyak bijan, kicap, dan daun bawang. Gaul sebati.',
        'Campur tepung gandum dengan air mendidih. Uli doh sampai licin.',
        'Biarkan doh rehat 15 minit. Kemudian, gelek nipis-nipis.',
        'Potong doh jadi bulatan, saiz 3 inci.',
        'Letak inti udang di tengah, lipat dan kelim jadi bentuk bulan sabit.',
        'Susun har gow dalam pengukus buluh yang dialas kertas. Kukus atas air mendidih.',
        'Kukus 7 minit sampai lutsinar. Hidangkan segera dengan sos cicah.'
      ]
    }
  },
  'cn-03': {
    'zh-CN': {
      title: '麻婆豆腐',
      description: '麻婆豆腐，麻辣鲜香，豆腐滑嫩，配米饭绝了！',
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
        '猪肉末豆瓣酱炒香。',
        '加蒜姜豆豉。',
        '加高汤豆腐，小火炖5分钟。',
        '淀粉勾芡，淋花椒油。',
        '撒花椒，配米饭吃！'
      ]
    },
    'ms': {
      title: 'Mapo Tofu',
      description: 'Mapo Tofu ni pedas berempah, resipi asli dari Chengdu, China. Sedap sangat makan dengan nasi panas!',
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
        'Goreng daging babi cincang dengan doubanjiang sampai wangi. Masukkan bawang putih, halia, kacang hitam.',
        'Masukkan stok dan tauhu. Reneh perlahan 5 minit.',
        'Pekatkan dengan tepung jagung. Akhir sekali, masukkan minyak dan lada Sichuan. Hidangkan dengan nasi.'
      ]
    }
  },
  'cn-04': {
    'zh-CN': {
      title: '北京烤鸭',
      description: '北京烤鸭，皮脆肉嫩，香气扑鼻，在家也能做出地道美味！',
      ingredients: [
        { item: '整鸭', amount: '1 只' },
        { item: '海鲜酱', amount: '' },
        { item: '大葱', amount: '' },
        { item: '黄瓜', amount: '' },
        { item: '荷叶饼', amount: '' },
        { item: '五香粉', amount: '' }
      ],
      instructions: [
        '鸭子洗净擦干，风干24小时。',
        '刷麦芽糖浆，再风干2小时。',
        '200°C烤60-80分钟。',
        '每20分钟刷鸭油。',
        '烤到皮脆肉嫩。',
        '取出静置10-15分钟。',
        '片鸭，皮肉分离。',
        '荷叶饼铺好，放鸭肉、葱、黄瓜。',
        '淋海鲜酱，卷起来吃。',
        '再加葱、黄瓜、海鲜酱，更美味！'
      ]
    },
    'ms': {
      title: 'Itik Peking',
      description: 'Itik Peking ni memang istimewa, resipi asli dari Beijing, China. Kulit rangup, isi lembut, memang terbaik!',
      ingredients: [
        { item: 'Itik utuh', amount: '1 ekor' },
        { item: 'Sos hoisin', amount: '' },
        { item: 'Daun bawang', amount: '' },
        { item: 'Timun', amount: '' },
        { item: 'Lempeng Mandarin', amount: '' },
        { item: 'Lima rempah', amount: '' }
      ],
      instructions: [
        'Bersihkan itik, keringkan betul-betul. Gantung itik 24 jam supaya kulit tegang.',
        'Sapu itik dengan glis maltosa. Gantung lagi 2 jam untuk keringkan glis.',
        'Bakar itik dalam ketuhar 200°C selama 60-80 minit. Sapu lemak itik setiap 20 minit.',
        'Pastikan kulit itik perang gelap dan rangup.',
        'Dah masak, rehatkan itik 10-15 minit. Potong kulit rangup dan isi itik.',
        'Letak lempeng, itik, daun bawang, timun, dan sos hoisin.',
        'Gulung lempeng kemas-kemas. Makan panas-panas.',
        'Hiaskan dengan daun bawang, timun, dan sos hoisin tambahan. Selamat menjamu selera!'
      ]
    }
  },
  'cn-05': {
    'zh-CN': {
      title: '火锅',
      description: '热气腾腾的火锅，麻辣鲜香，全家围坐，暖心又暖胃！',
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
        '花椒干锅炒香，磨成粉。',
        '油锅炒蒜姜，加豆瓣酱。',
        '加鸡汤、水、酱油、花椒粉、辣椒。',
        '煮开转小火，炖30分钟。',
        '牛肉切片，豆腐切块。',
        '蘑菇切片，藕切片。',
        '食材摆盘，蘸酱备好。',
        '汤底煮开，下食材。',
        '煮熟捞出，蘸酱吃。',
        '随时加汤，调味。',
        '自己搭配，享受美味！'
      ]
    },
    'ms': {
      title: 'Steamboat (Hot Pot)',
      description: 'Steamboat ni memang seronok makan ramai-ramai, resipi asli dari Chongqing, China. Pedas-pedas menyelerakan!',
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
        'Bakar lada Sichuan sampai wangi, kemudian kisar halus.',
        'Tumis bawang putih dan halia. Masukkan doubanjiang, tumis lagi.',
        'Masukkan stok ayam, air, kicap, serbuk lada Sichuan, dan cili kering. Reneh 30 minit.',
        'Hiris daging lembu nipis-nipis. Potong tauhu, cendawan, dan akar teratai.',
        'Susun semua bahan mentah di sekeliling periuk. Sediakan sos celup bijan.',
        'Didihkan sup, kemudian masukkan bahan-bahan. Masak 30 saat hingga 2 minit. Celup dalam sos.',
        'Sentiasa pantau sup, tambah stok atau air jika perlu. Sesuaikan rasa.',
        'Hidangkan steamboat dengan hiasan daun bawang, halia, dan bijan. Nikmati!'
      ]
    }
  },
  'cn-06': {
    'zh-CN': {
      title: '小笼包',
      description: '小笼包，皮薄馅大汤汁足，一口咬下去，鲜美无比！',
      ingredients: [
        { item: '猪肉馅', amount: '' },
        { item: '皮冻（蒸后成汤）', amount: '' },
        { item: '薄面皮', amount: '' },
        { item: '姜', amount: '' },
        { item: '酱油', amount: '' },
        { item: '米醋', amount: '' }
      ],
      instructions: [
        '猪骨汤加吉利丁粉，小火熬煮。',
        '熬成清澈汤冻。',
        '冷藏凝固，切小方块。',
        '猪肉馅加皮冻、姜蓉、酱油、米醋，拌匀。',
        '面皮擀薄，放馅。',
        '捏18个褶子，包紧。',
        '蒸笼铺纸，放小笼包。',
        '水开蒸8分钟。',
        '小心取出，趁热吃。',
        '咬小口，吸汤汁，再吃肉！'
      ]
    },
    'ms': {
      title: 'Xiaolongbao',
      description: 'Xiaolongbao ni ladu sup yang unik, resipi asli dari Shanghai, China. Setiap gigitan penuh kejutan!',
      ingredients: [
        { item: 'Daging babi cincang', amount: '' },
        { item: 'Stok gelatin (menjadi sup apabila dikukus)', amount: '' },
        { item: 'Kulit doh nipis', amount: '' },
        { item: 'Halia', amount: '' },
        { item: 'Kicap', amount: '' },
        { item: 'Cuka beras', amount: '' }
      ],
      instructions: [
        'Masak stok babi dengan gelatin sampai pekat. Ini untuk aspic.',
        'Sejukkan aspic dalam peti ais sampai jadi jeli pejal.',
        'Potong aspic jadi kiub kecil-kecil.',
        'Campurkan daging babi cincang, aspic, halia, kicap, dan cuka beras. Gaul sebati.',
        'Letak inti babi di tengah kulit doh yang nipis.',
        'Buat 18 lipatan di sekeliling tepi doh, tutup kemas-kemas.',
        'Susun Xiaolongbao dalam pengukus buluh. Kukus 8 minit.',
        'Hidangkan segera. Gigit sikit, hirup sup, baru makan ladu. Sedapnya!'
      ]
    }
  },
  'cn-07': {
    'zh-CN': {
      title: '扬州炒饭',
      description: '扬州炒饭，粒粒分明，香气扑鼻，色香味俱全的家常美味！',
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
        '炒锅烧热冒烟。',
        '鸡蛋炒散，推到一边。',
        '加冷米饭，打散压平。',
        '米饭滋滋响，加虾仁、胡萝卜、豌豆。',
        '不停翻炒，直到虾仁变粉。',
        '撒葱花，炒30秒。',
        '淋酱油、香油，翻炒均匀。',
        '继续炒2-3分钟，入味。',
        '炒饭堆成小山，装盘。',
        '撒葱花芝麻，趁热吃！'
      ]
    },
    'ms': {
      title: 'Nasi Goreng (Yangzhou)',
      description: 'Nasi Goreng Yangzhou ni memang klasik, resipi asli dari Yangzhou, China. Rasa dia seimbang dan sedap sangat!',
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
        'Panaskan kuali sampai berasap.',
        'Pecahkan telur, kacau jadi kepingan kecil. Tolak ke tepi kuali.',
        'Masukkan nasi sejuk, pecahkan gumpalan. Tekan nasi ke kuali panas.',
        'Bila nasi mula berdesir, masukkan udang, lobak merah, dan kacang pea. Kacau sampai masak.',
        'Masukkan hirisan daun bawang, kacau 30 saat.',
        'Renjis kicap dan minyak bijan. Gaul semua bahan di atas api tinggi.',
        'Teruskan masak 2-3 minit sampai nasi panas dan rasa sebati.',
        'Bentukkan nasi goreng atas pinggan. Hiaskan dengan daun bawang dan bijan. Hidangkan segera!'
      ]
    }
  },
  'cn-08': {
    'zh-CN': {
      title: '春卷',
      description: '香脆可口的春卷，金黄酥脆，馅料丰富，大人小孩都爱吃！',
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
        '油锅炒蘑菇，炒到金黄。',
        '加卷心菜、胡萝卜，炒软。',
        '倒酱油，炒匀。',
        '加粉丝，炒1分钟。',
        '馅料放凉。',
        '春卷皮放馅，卷紧。',
        '油烧到180°C。',
        '春卷下锅，炸到金黄酥脆。',
        '捞出沥油，蘸甜辣酱吃！'
      ]
    },
    'ms': {
      title: 'Popia (Spring Rolls)',
      description: 'Popia ni memang rangup di luar, lembut di dalam, resipi asli dari Shanghai, China. Sesuai sangat buat minum petang!',
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
        'Panaskan minyak bijan. Tumis cendawan sampai perang keemasan.',
        'Masukkan kubis dan lobak merah. Tumis 2 minit sampai lembut tapi masih rangup.',
        'Tuang kicap, kacau rata. Masak 1 minit.',
        'Masukkan mi suun yang dah masak. Gaul sebati.',
        'Angkat kuali, biarkan inti sejuk.',
        'Letak inti atas kulit popia, sapu tepi dengan pes tepung. Gulung kemas-kemas.',
        'Panaskan minyak 180°C. Goreng popia sampai rangup keemasan, 3-4 minit setiap sisi.',
        'Angkat popia, toskan minyak. Hidangkan segera dengan sos cili manis.'
      ]
    }
  },
  'cn-09': {
    'zh-CN': {
      title: '饺子 (水饺)',
      description: '我家常做的饺子，皮薄馅大，一口咬下去汁水四溢，可香啦！',
      ingredients: [
        { item: '猪肉馅', amount: '200克' },
        { item: '卷心菜', amount: '' },
        { item: '韭菜', amount: '' },
        { item: '姜', amount: '' },
        { item: '酱油', amount: '' },
        { item: '圆形饺子皮', amount: '' }
      ],
      instructions: [
        '白菜韭菜切碎，香气扑鼻。',
        '姜去皮磨碎，提味增鲜。',
        '猪肉馅、菜、姜、酱油、香油拌匀。',
        '饺子皮放馅，中间鼓鼓的。',
        '沾水捏紧，像小元宝。',
        '水开下锅，煮七分钟。',
        '辣椒油、醋、蒜末调蘸料。',
        '捞出饺子，蘸着吃，美滋滋！'
      ]
    },
    'ms': {
      title: 'Jiaozi (Dumpling Rebus)',
      description: 'Jom cuba resipi Jiaozi asli dari Beijing ni. Sedap sangat, cucu-cucu pun suka!',
      ingredients: [
        { item: 'daging babi cincang', amount: '200g' },
        { item: 'kubis', amount: '' },
        { item: 'kucai', amount: '' },
        { item: 'halia', amount: '' },
        { item: 'kicap', amount: '' },
        { item: 'kulit dumpling bulat', amount: '' }
      ],
      instructions: [
        'Mula-mula, cincang halus 100g kubis dan 50g kucai. Cincang masa nak guna, baru wangi.',
        'Lepas tu, kupas dan parut 20g halia segar. Hati-hati jangan sampai ada serat.',
        'Dalam mangkuk besar, campur 200g daging babi cincang, kubis, kucai, halia parut, 1 sudu besar kicap, dan 1 sudu teh minyak bijan. Gaul sebati.',
        'Ambil sekeping kulit dumpling, letak sesudu kecil inti di tengah. Tinggalkan sikit tepi.',
        'Basahkan jari dengan air, sapu tepi kulit. Lipat jadi bentuk separuh bulan, tekan kuat-kuat supaya inti tak keluar.',
        'Didihkan air masin dalam periuk besar. Masukkan dumpling perlahan-lahan, jangan banyak sangat. Masak 7 minit sampai timbul dan masak.',
        'Sementara dumpling masak, campur 2 sudu besar minyak cili, 1 sudu besar cuka hitam, dan 1 ulas bawang putih cincang untuk sos cicah.',
        'Angkat dumpling yang dah masak, hidang terus dengan sos cicah. Boleh tabur daun bawang dan bijan kalau suka.'
      ]
    }
  },
  'cn-10': {
    'zh-CN': {
      title: '蛋挞',
      description: '香酥的挞皮，滑嫩的蛋奶，一口咬下，满是幸福的滋味。',
      ingredients: [
        { item: '酥皮挞壳', amount: '' },
        { item: '鸡蛋', amount: '3个' },
        { item: '牛奶', amount: '150毫升' },
        { item: '糖', amount: '60克' },
        { item: '香草精', amount: '' }
      ],
      instructions: [
        '黄油面粉糖盐，搓成酥粒。',
        '加冰水，轻柔成团，别揉过头。',
        '面团擀薄，铺进挞模，修整齐。',
        '鸡蛋砂糖搅匀，放一边。',
        '牛奶小火加热，温温的就好。',
        '温牛奶慢慢倒入蛋液，加香草精。',
        '蛋奶糊过筛，更顺滑。',
        '倒入挞模，烤箱200度，15分钟。'
      ]
    },
    'ms': {
      title: 'Tart Telur',
      description: 'Tart Telur Hong Kong ni memang kegemaran ramai. Kulitnya rangup, kastardnya lembut, cair di mulut!',
      ingredients: [
        { item: 'kulit pastri rapuh', amount: '' },
        { item: 'telur', amount: '3 biji' },
        { item: 'susu', amount: '150ml' },
        { item: 'gula', amount: '60g' },
        { item: 'ekstrak vanila', amount: '' }
      ],
      instructions: [
        'Mula-mula, buat kulit pastri. Campur mentega sejuk dadu dengan tepung, gula aising, dan secubit garam. Gaul guna hujung jari sampai jadi serbuk kasar.',
        'Masukkan air sejuk sikit-sikit, gaul perlahan sampai jadi doh. Jangan uli banyak sangat ya.',
        'Canai doh pastri setebal 3mm. Lapik dalam acuan tart, potong lebihan tepi.',
        'Dalam mangkuk lain, pukul 3 biji telur dan 60g gula pasir sampai licin dan pucat.',
        'Panaskan 150ml susu penuh krim atas api perlahan sampai suam-suam kuku. Angkat dan sejukkan sikit.',
        'Tuang susu suam perlahan-lahan ke dalam campuran telur, kacau sentiasa. Masukkan beberapa titis esen vanila.',
        'Tapis campuran kastard guna penapis halus untuk buang ketulan atau buih.',
        'Tuang kastard ke dalam acuan tart, isi ¾ penuh. Bakar dalam oven 200°C selama 15 minit, atau sampai tepi perang keemasan dan tengah masih goyang sikit.'
      ]
    }
  },
  'mx-01': {
    'zh-CN': {
      title: '牧师玉米饼 (Tacos al Pastor)',
      description: '墨西哥城街头小吃，香辣猪肉配菠萝，味道特别棒！',
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
        '猪肉辣椒酱腌一晚，串起来烤。',
        '薄片猪肉切下，铁锅煎脆。',
        '热玉米饼夹肉，加菠萝洋葱香菜。'
      ]
    },
    'ms': {
      title: 'Tacos al Pastor',
      description: 'Tacos al Pastor ni memang sedap, rasa macam kat Mexico City! Dagingnya diperap semalaman, memang padu.',
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
        'Perap daging babi dengan pes cili-achiote semalaman. Susun atas pemanggang menegak.',
        'Hiris nipis daging babi yang dah diperap, masak dalam kuali besi tuang sampai garing.',
        'Hidangkan dalam tortilla hangat dengan nanas panggang, bawang dadu, dan daun ketumbar.'
      ]
    }
  },
  'mx-02': {
    'zh-CN': {
      title: '鳄梨酱 (Guacamole)',
      description: '新鲜牛油果做的酱，配玉米片，好吃到停不下来！',
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
        '选熟牛油果，对半切开。',
        '果肉挖出，放碗里。',
        '用叉子捣碎，别太烂。',
        '番茄洋葱切小丁。',
        '香菜辣椒切碎。',
        '所有材料拌匀，让味道融合。',
        '挤青柠汁，撒点盐，提味。',
        '尝尝味道，不够再加，快吃吧！'
      ]
    },
    'ms': {
      title: 'Guacamole',
      description: 'Guacamole ni memang tak pernah tak sedap! Resipi asli dari Oaxaca, Mexico. Buat sendiri lagi puas hati.',
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
        'Pilih tiga biji avokado masak, belah dua dan buang biji. Cedok isinya ke dalam mangkuk besar.',
        'Guna garpu, lenyek avokado kasar-kasar. Jangan lenyek sangat, biar ada tekstur sikit.',
        'Dadu halus sebiji tomato masak dan sebiji bawang kecil.',
        'Cincang segenggam daun ketumbar segar dan sebiji cili jalapeño.',
        'Campurkan tomato, bawang, ketumbar, dan jalapeño ke dalam avokado lenyek. Gaul perlahan.',
        'Perah jus sebiji limau nipis dan tabur secubit garam. Gaul rata.',
        'Rasa dan sesuaikan perasa. Hidangkan terus dengan daun ketumbar dan hirisan limau nipis kalau suka.'
      ]
    }
  },
  'mx-03': {
    'zh-CN': {
      title: '墨西哥卷饼 (Enchiladas)',
      description: '香浓的辣椒酱裹着鸡肉卷饼，再撒上芝士，烤出来热乎乎的，真好吃！',
      ingredients: [
        { item: '玉米饼', amount: '8张' },
        { item: '鸡丝', amount: '300克' },
        { item: '红辣椒酱', amount: '' },
        { item: '酸奶油', amount: '200克' },
        { item: '奶酪', amount: '150克' },
        { item: '洋葱', amount: '' }
      ],
      instructions: [
        '干辣椒泡软，去蒂去籽。',
        '辣椒、辣椒水、蒜、番茄打成酱。',
        '酱汁过筛，小火熬浓。',
        '鸡丝、洋葱、蒜末、盐拌匀做馅。',
        '玉米饼蘸酱，包鸡肉，卷起来。',
        '淋上酱汁，撒芝士，加酸奶油。',
        '烤箱180度，烤20分钟，出炉！'
      ]
    },
    'ms': {
      title: 'Enchiladas',
      description: 'Enchiladas ni memang hidangan keluarga yang mengenyangkan. Sos cili merahnya buat kita teringat-ingat!',
      ingredients: [
        { item: 'tortilla jagung', amount: '8 keping' },
        { item: 'ayam carik', amount: '300g' },
        { item: 'sos cili merah', amount: '' },
        { item: 'krim masam', amount: '200g' },
        { item: 'keju', amount: '150g' },
        { item: 'bawang', amount: '' }
      ],
      instructions: [
        'Rendam 20-25 biji cili merah kering dalam air mendidih 20-25 minit sampai lembut. Buang tangkai dan biji, simpan air cili.',
        'Kisar cili yang dah direndam dengan 2 cawan air cili, 3 ulas bawang putih panggang, dan 1 cawan tomato panggang sampai licin.',
        'Tapis sos cili ke dalam periuk bersih. Didihkan atas api sederhana rendah sampai pekat dan menyaluti sudu.',
        'Campur 300g ayam carik dengan ¼ cawan bawang dadu, 1 ulas bawang putih cincang, dan secubit garam. Gaul rata.',
        'Celup setiap 8 keping tortilla jagung dalam sos cili suam. Isi dengan ¼ cawan campuran ayam, gulung ketat-ketat. Susun dalam loyang.',
        'Tuang sos cili yang tinggal atas tortilla. Tabur 150g keju parut dan letak 200g krim masam.',
        'Bakar dalam oven 180°C selama 20 minit, sampai keju cair dan perang keemasan. Biar sejuk sikit sebelum hidang dengan ketumbar, bawang, dan krim masam.'
      ]
    }
  },
  'mx-04': {
    'zh-CN': {
      title: 'Chiles en Nogada (核桃酱酿辣椒)',
      description: '这道菜颜色漂亮，味道丰富，甜咸辣都有，是墨西哥的特色菜。',
      ingredients: [
        { item: '帕布拉诺辣椒', amount: '' },
        { item: '猪肉馅', amount: '' },
        { item: '水果香料馅 (picadillo)', amount: '' },
        { item: '核桃奶油酱', amount: '' },
        { item: '石榴籽', amount: '' },
        { item: '欧芹', amount: '' }
      ],
      instructions: [
        '猪肉馅炒熟，炒香。',
        '加洋葱、蒜、葡萄干、核桃，炒香。',
        '再加苹果、梨、桃子，撒香料，炒软。',
        '帕布拉诺辣椒烤焦，去皮去籽，切开。',
        '辣椒里塞满炒好的馅料。',
        '奶油、黄油、核桃煮成浓酱。',
        '酱汁淋在辣椒上，撒石榴籽和欧芹。',
        '趁热吃，味道最好！'
      ]
    },
    'ms': {
      title: 'Chiles en Nogada',
      description: 'Chiles en Nogada ni hidangan istimewa, warna-warni macam bendera Mexico! Rasa manis, masin, pedas semua ada.',
      ingredients: [
        { item: 'Cili Poblano', amount: '' },
        { item: 'Daging babi cincang', amount: '' },
        { item: 'Buah-buahan & rempah (picadillo)', amount: '' },
        { item: 'Sos krim walnut', amount: '' },
        { item: 'Biji delima', amount: '' },
        { item: 'Parsli', amount: '' }
      ],
      instructions: [
        'Panaskan kuali, masukkan 2 sudu besar lemak babi atau minyak. Tumis daging babi cincang sampai masak dan keperangan.',
        'Masukkan bawang cincang, bawang putih, kismis, dan pecan ke dalam kuali. Masak sampai bawang lutsinar dan wangi. Perasakan dengan garam dan lada hitam.',
        'Masukkan epal, pir, dan pic cincang, bersama serbuk kayu manis, jintan manis, dan allspice. Masak sampai buah lembut.',
        'Panggang 4 biji cili poblano besar sampai kulit hangus dan melepuh. Sejukkan, kupas kulit, buang biji, dan belah untuk inti.',
        'Isi setiap cili poblano dengan campuran picadillo. Susun atas pinggan.',
        'Dalam periuk kecil, campur 1 cawan krim pekat, 2 sudu besar mentega, dan ¼ cawan walnut cincang. Masak atas api perlahan sampai sos licin dan berkrim.',
        'Sudukan sos krim walnut atas cili poblano. Hias dengan biji delima dan parsli segar.',
        'Hidangkan Chiles en Nogada segera, masa sos masih panas dan cili masih lembut.'
      ]
    }
  },
  'mx-05': {
    'zh-CN': {
      title: '墨西哥玉米粽 (Tamales)',
      description: '玉米面团包着香喷喷的猪肉馅，用玉米皮蒸出来，软糯可口。',
      ingredients: [
        { item: '玉米面团', amount: '(玉米粉 + 猪油)' },
        { item: '红辣椒酱猪肉', amount: '' },
        { item: '浸泡过的玉米皮', amount: '' }
      ],
      instructions: [
        '玉米粉、猪油、鸡汤，揉成软面团。',
        '猪肩肉煎香，加辣椒酱、洋葱、蒜，煮入味。',
        '玉米皮泡软，擦干。',
        '玉米皮铺平，面团擀圆，放中间。',
        '面团上放猪肉馅，玉米皮包紧，系好。',
        '重复以上步骤，放入蒸锅，蒸1.5小时。',
        '蒸好后，让它静置15分钟，解开开吃！'
      ]
    },
    'ms': {
      title: 'Tamales',
      description: 'Tamales ni memang sedap, inti daging babi yang lembut dibalut doh jagung. Resipi asli dari Oaxaca, Mexico.',
      ingredients: [
        { item: 'Doh masa', amount: '(masa jagung + lemak babi)' },
        { item: 'Daging babi dalam sos cili merah', amount: '' },
        { item: 'Kulit jagung', amount: '(direndam)' }
      ],
      instructions: [
        'Campur 2 cawan masa jagung harina dengan ½ cawan lemak babi cair. Gaul sampai jadi serbuk kasar. Masukkan 1 cawan sup ayam sikit-sikit, uli 5 minit sampai doh licin.',
        'Goreng 1 paun bahu babi dalam periuk besar sampai tak merah jambu. Masukkan ¼ cawan sos cili merah, ¼ cawan bawang cincang, dan 1 ulas bawang putih cincang. Masak 5 minit lagi. Perasakan.',
        'Rendam 2 dozen kulit jagung dalam air suam 30 minit sampai lembut. Angkat dan keringkan.',
        'Letak kulit jagung rata. Ambil doh masa sebesar bola golf, ratakan nipis. Letak di tengah kulit jagung, tinggalkan tepi 1 inci.',
        'Letak sesudu inti daging babi di tengah doh. Lipat sisi kulit jagung atas inti, lipat bahagian bawah ke atas. Ikat dengan jalur kulit jagung.',
        'Susun tamales dalam bakul pengukus, berdiri tegak. Tutup dengan tuala bersih, kukus atas air mendidih 1.5 jam sampai masak.',
        'Angkat tamales, biar rehat 15 minit sebelum buka balutan dan hidang. Hias dengan ketumbar, limau nipis, dan salsa.'
      ]
    }
  },
  'mx-06': {
    'zh-CN': {
      title: '墨西哥芝士玉米饼 (Quesadillas)',
      description: '热乎乎的玉米饼夹着融化的芝士，再配上莎莎酱，简单又美味！',
      ingredients: [
        { item: '大面粉玉米饼', amount: '2张' },
        { item: '瓦哈卡芝士', amount: '150克' },
        { item: '可选：蘑菇、南瓜花', amount: '' },
        { item: '莎莎酱', amount: '' },
        { item: '酸奶油', amount: '' }
      ],
      instructions: [
        '平底锅烧热。',
        '玉米饼放锅里。',
        '一半撒上芝士。',
        '喜欢的话，加点蘑菇或南瓜花。',
        '玉米饼对折，轻轻压实。',
        '两面煎金黄，芝士融化。',
        '取出切三角形。',
        '趁热配莎莎酱、酸奶油、牛油果酱吃。'
      ]
    },
    'ms': {
      title: 'Quesadillas',
      description: 'Quesadillas ni memang cepat dan mudah nak buat. Sesuai untuk sarapan atau minum petang!',
      ingredients: [
        { item: 'Tortilla tepung besar', amount: '2 keping' },
        { item: 'Keju Oaxaca', amount: '150g' },
        { item: 'Pilihan: cendawan, bunga labu', amount: '' },
        { item: 'Salsa', amount: '' },
        { item: 'Krim masam', amount: '' }
      ],
      instructions: [
        'Panaskan kuali kering atau comal atas api sederhana tinggi sampai panas betul.',
        'Letak sekeping tortilla tepung besar dalam kuali panas. Pusing sikit supaya masak sekata.',
        'Tabur 75g keju Oaxaca parut atas separuh tortilla. Tinggalkan sikit tepi.',
        'Kalau suka, boleh tambah inti macam cendawan tumis atau bunga labu atas keju.',
        'Guna spatula, lipat tortilla separuh untuk tutup keju dan inti. Tekan perlahan.',
        'Masak quesadilla 2 minit setiap sebelah sampai perang keemasan dan rangup. Keju pun dah cair.',
        'Angkat quesadilla dari kuali, potong jadi segitiga. Wangi sangat!',
        'Hidangkan quesadillas panas dengan salsa, krim masam, dan guacamole. Memang padu!'
      ]
    }
  },
  'mx-07': {
    'zh-CN': {
      title: '墨西哥玉米炖肉汤 (Pozole)',
      description: '这碗玉米炖肉汤，香浓暖胃，配上各种小菜，吃起来特别满足。',
      ingredients: [
        { item: '大玉米粒', amount: '300克' },
        { item: '猪肩肉', amount: '500克' },
        { item: '干瓜希略辣椒', amount: '' },
        { item: '大蒜', amount: '' },
        { item: '牛至', amount: '' }
      ],
      instructions: [
        '大玉米粒泡水，泡软。',
        '猪肩肉煎香，煎到金黄。',
        '加蒜和牛至，炒香。',
        '加水煮开，小火炖两小时，肉烂汤浓。',
        '干辣椒烤香，和猪肉汤打成酱。',
        '猪肉取出撕碎，汤汁过滤，加辣椒酱。',
        '泡好的玉米粒加进去，再炖30分钟。',
        '盛碗，加卷心菜、萝卜、青柠汁，开吃！'
      ]
    },
    'ms': {
      title: 'Pozole',
      description: 'Pozole ni sup jagung hominy dengan daging babi, memang sedap dan mengenyangkan. Resipi asli dari Guadalajara, Mexico.',
      ingredients: [
        { item: 'Jagung hominy', amount: '300g' },
        { item: 'Bahu babi', amount: '500g' },
        { item: 'Cili guajillo kering', amount: '' },
        { item: 'Bawang putih', amount: '' },
        { item: 'Oregano', amount: '' }
      ],
      instructions: [
        'Bilas 300g jagung hominy, rendam dalam air 4 jam atau semalaman sampai lembut.',
        'Dalam periuk besar, panaskan 2 sudu besar minyak. Bakar 500g bahu babi sampai perang keemasan di semua sisi.',
        'Masukkan 4-5 ulas bawang putih cincang dan 2 tangkai oregano segar. Masak 1-2 minit sampai wangi.',
        'Tuang air secukupnya untuk tutup daging babi. Didihkan, kemudian reneh 2 jam sampai daging lembut dan mudah dicarik.',
        'Panggang 4-5 biji cili guajillo kering dalam kuali kering sampai wangi. Kisar dengan ¼ cawan sup daging babi sampai jadi sos licin.',
        'Angkat daging babi, carikkan. Tapis kuah ke dalam periuk bersih, buang pepejal. Masukkan sos cili panggang.',
        'Masukkan jagung hominy yang dah direndam dan ditoskan. Reneh 30 minit lagi sampai jagung panas dan rasa sebati.',
        'Hidangkan pozole dalam mangkuk. Tabur kubis dadu, lobak hiris, dan perahan jus limau nipis. Boleh tambah ketumbar dan krim masam. Makan dengan tortilla panas.'
      ]
    }
  },
  'mx-08': {
    'zh-CN': {
      title: '吉事果配热巧克力 (Churros con Chocolate)',
      description: '香脆的吉事果蘸着浓郁的热巧克力，是下午茶的最佳选择！',
      ingredients: [
        { item: '泡芙面团', amount: '(水、黄油、面粉、鸡蛋)' },
        { item: '肉桂糖', amount: '' },
        { item: '浓稠热巧克力酱', amount: '' },
        { item: '食用油', amount: '(用于油炸)' }
      ],
      instructions: [
        '水、黄油、面粉煮成面团，放凉。',
        '鸡蛋分次加入面团，搅匀。',
        '砂糖和肉桂粉拌匀。',
        '油烧到180度，准备好沥油盘。',
        '面糊挤入热油，炸3分钟，翻面再炸3分钟。',
        '炸好的吉事果立刻裹上肉桂糖。',
        '黑巧克力和奶油加热，搅成浓酱。',
        '吉事果蘸热巧克力，趁热吃！'
      ]
    },
    'ms': {
      title: 'Churros con Chocolate',
      description: 'Churros con Chocolate ni memang pencuci mulut yang tak boleh tolak! Rangup di luar, lembut di dalam, cicah pula dengan coklat pekat.',
      ingredients: [
        { item: 'Doh pastri choux', amount: '(air, mentega, tepung, telur)' },
        { item: 'Gula kayu manis', amount: '' },
        { item: 'Sos coklat panas pekat', amount: '' },
        { item: 'Minyak', amount: '(untuk menggoreng)' }
      ],
      instructions: [
        'Mula-mula, buat doh choux. Campur air, mentega, dan tepung dalam periuk. Kacau atas api sederhana sampai jadi bola licin. Angkat dan sejukkan sikit.',
        'Bila doh dah sejuk, masukkan telur satu per satu. Pastikan setiap telur sebati sebelum tambah yang lain.',
        'Sediakan gula kayu manis: campur gula pasir dan serbuk kayu manis dalam mangkuk kecil. Gaul rata.',
        'Panaskan minyak untuk menggoreng dalam kuali dalam sampai 180°C. Lapik pinggan dengan tuala kertas.',
        'Paipkan doh choux guna muncung bintang ke dalam minyak panas. Potong jalur 10-12 cm. Goreng 3 minit setiap sebelah sampai perang keemasan dan rangup.',
        'Lepas goreng, golekkan churros dalam campuran gula kayu manis. Letak atas pinggan untuk tos minyak.',
        'Untuk sos coklat, panaskan coklat gelap dan krim pekat dalam dandang dua. Kacau sentiasa sampai coklat cair dan sos licin berkilat.',
        'Hidangkan churros panas dengan sos coklat pekat untuk dicicah. Memang sedap sangat!'
      ]
    }
  },
  'mx-09': {
    'zh-CN': {
      title: '尤卡坦烤猪肉 (Cochinita Pibil)',
      description: '这道尤卡坦烤猪肉，香蕉叶一包，慢烤出来，肉香四溢，软烂入味，是家里宴客的拿手菜！',
      ingredients: [
        { item: '猪肩肉', amount: '1公斤' },
        { item: '阿奇奥特酱', amount: '' },
        { item: '苦橙汁', amount: '' },
        { item: '香蕉叶', amount: '' },
        { item: '哈瓦那辣椒腌洋葱', amount: '' }
      ],
      instructions: [
        '先做腌料：阿奇奥特酱和苦橙汁打匀。',
        '猪肩肉放袋子里，倒腌料，抓匀，冰箱放一晚。',
        '烤箱150°C预热。肉沥干，用香蕉叶包紧。',
        '包好的肉放铸铁锅，烤4小时，直到肉烂。',
        '做腌洋葱：红洋葱切片，加青柠汁、醋、水、蜂蜜、哈瓦那辣椒，煮10-15分钟。',
        '肉烤好取出，静置10-15分钟，撕成丝。',
        '玉米饼加热，放猪肉丝，加腌洋葱、香菜、青柠汁、盐。',
        '再加点腌洋葱、香菜、青柠角，马上吃！'
      ]
    },
    'ms': {
      title: 'Cochinita Pibil',
      description: 'Resipi asli dari Yucatan, Mexico. Rasa dia memang padu, takkan jumpa kat tempat lain!',
      ingredients: [
        { item: 'bahu babi', amount: '1kg' },
        { item: 'Pes Achiote', amount: '' },
        { item: 'Jus oren pahit', amount: '' },
        { item: 'Daun pisang', amount: '' },
        { item: 'Bawang jeruk Habanero', amount: '' }
      ],
      instructions: [
        'Mula-mula, kisar pes achiote dengan jus oren pahit sampai sebati. Nanti jadi warna kemerahan cantik.',
        'Kemudian, masukkan daging babi ke dalam beg ziplock. Tuang perapan tadi, gaul rata. Simpan dalam peti semalaman ya, biar rasa meresap.',
        'Dah siap perap, panaskan oven 150°C. Balut daging babi dengan daun pisang ketat-ketat. Ikat kalau perlu.',
        'Letak daging yang dah berbalut dalam periuk besar. Bakar dalam oven 4 jam, sampai daging lembut dan senang dicarik.',
        'Sementara tunggu daging masak, kita buat bawang jeruk habanero. Hiris bawang merah nipis-nipis.',
        'Campurkan bawang hiris dengan jus limau, cuka epal, air, madu, dan cili habanero. Masak sampai bawang lembut.',
        'Dah masak, keluarkan daging dari oven. Biar rehat sekejap, baru carik-carikkan daging guna garpu.',
        'Untuk hidang, panaskan tortilla. Letak daging carik atas tortilla, bubuh bawang jeruk habanero. Tabur daun ketumbar dan perah limau nipis sikit. Sedapnya!',
        'Akhir sekali, hias dengan bawang jeruk, daun ketumbar, dan hirisan limau nipis. Hidang panas-panas ya.'
      ]
    }
  },
  'mx-10': {
    'zh-CN': {
      title: '三奶蛋糕',
      description: '这款三奶蛋糕，湿润香甜，奶味十足，是家里大小朋友都爱吃的甜点！',
      ingredients: [
        { item: '海绵蛋糕', amount: '' },
        { item: '淡奶', amount: '' },
        { item: '炼乳', amount: '' },
        { item: '浓奶油 (浸泡用)', amount: '' },
        { item: '鲜奶油 (装饰用)', amount: '' },
        { item: '肉桂粉', amount: '' }
      ],
      instructions: [
        '烤箱180°C预热，烤盘抹油撒粉。',
        '做海绵蛋糕：面粉、糖、泡打粉、盐拌匀，加蛋清、牛奶，倒烤盘，烤25-30分钟。',
        '蛋糕烤好，放凉。',
        '蛋糕戳小孔。',
        '淡奶、炼乳、浓奶油拌匀，慢慢倒在蛋糕上，让它吸饱。',
        '蛋糕盖好，冰箱冷藏至少4小时或过夜。',
        '吃之前，打发浓奶油，抹在蛋糕上。',
        '撒点肉桂粉，切块，开吃！'
      ]
    },
    'ms': {
      title: 'Kek Tres Leches',
      description: 'Kek Tres Leches ni memang istimewa dari Monterrey, Mexico. Lembut dan lembap, cair di mulut!',
      ingredients: [
        { item: 'Kek span', amount: '' },
        { item: 'Susu sejat', amount: '' },
        { item: 'Susu pekat manis', amount: '' },
        { item: 'Krim putar (untuk rendaman)', amount: '' },
        { item: 'Krim putar (untuk hiasan)', amount: '' },
        { item: 'Kayu manis', amount: '' }
      ],
      instructions: [
        'Panaskan oven 180°C. Gris loyang 9x13 inci dengan mentega dan tabur tepung sikit.',
        'Pukul tepung kek, gula, serbuk penaik, dan garam. Masukkan putih telur dan susu, gaul rata.',
        'Tuang adunan dalam loyang, ratakan. Bakar 25-30 minit sampai kek keemasan dan masak.',
        'Dah masak, keluarkan kek dari oven. Biar sejuk dalam loyang, baru alih ke rak dawai.',
        'Bila kek dah sejuk, cucuk-cucuk lubang atas kek guna lidi atau garpu. Jangan sampai rosak kek tu ya.',
        'Dalam mangkuk besar, campur susu sejat, susu pekat manis, dan krim putar. Pukul sampai sebati.',
        'Tuang perlahan-lahan campuran susu ni atas kek yang dah sejuk. Biar dia meresap elok-elok.',
        'Balut kek dengan plastik, simpan dalam peti sejuk sekurang-kurangnya 4 jam atau semalaman. Biar rasa sebati.',
        'Sebelum hidang, pukul krim putar sampai kental. Sapu atau paip atas kek.',
        'Akhir sekali, tabur serbuk kayu manis sikit. Potong dan hidang. Memang sedap sangat!'
      ]
    }
  },
  'fr-01': {
    'zh-CN': {
      title: '牛角面包',
      description: '香喷喷的牛角面包，层层酥脆，黄油味浓郁，配杯咖啡，就是完美的早餐！',
      ingredients: [
        { item: '面粉', amount: '500克' },
        { item: '黄油 (用于叠层)', amount: '250克' },
        { item: '酵母', amount: '7克' },
        { item: '牛奶', amount: '280毫升' },
        { item: '糖', amount: '80克' },
        { item: '盐', amount: '' }
      ],
      instructions: [
        '面粉、酵母、牛奶、糖、盐，搅拌机和成面团。',
        '面团放碗里，盖好，冰箱冷藏至少8小时。',
        '面团擀成长方形，放软化黄油。',
        '面团包住黄油，擀成长方形，转90°。',
        '重复叠层两次，每次中间冰箱放30分钟。',
        '面团擀薄，切三角形，卷成月牙形，放烤盘。',
        '牛角面包发酵2小时，刷蛋液。',
        '烤箱200°C，烤18分钟，直到金黄酥脆。'
      ]
    },
    'ms': {
      title: 'Croissant',
      description: 'Croissant ni memang kegemaran ramai dari Paris, Perancis. Rangup di luar, lembut di dalam!',
      ingredients: [
        { item: 'tepung', amount: '500g' },
        { item: 'mentega (untuk laminasi)', amount: '250g' },
        { item: 'yis', amount: '7g' },
        { item: 'susu', amount: '280ml' },
        { item: 'gula', amount: '80g' },
        { item: 'Garam', amount: '' }
      ],
      instructions: [
        'Campurkan tepung, yis, susu, gula, dan garam dalam pengadun. Gaul sampai jadi doh kasar, kemudian adun lagi 2 minit.',
        'Pindahkan doh ke mangkuk berminyak, tutup. Simpan dalam peti sejuk semalaman, biar doh rehat.',
        'Atas permukaan bertabur tepung, gelek doh jadi segi empat tepat. Letak mentega lembut di tengah.',
        'Lipat doh tutup mentega, tekan tepi biar kemas. Pusing doh 90 darjah, gelek lagi jadi segi empat tepat.',
        'Ulang proses melipat dan menggelek dua kali lagi. Rehatkan doh 30 minit dalam peti sejuk setiap kali.',
        'Lepas tu, gelek doh nipis-nipis. Potong jadi segi tiga panjang. Gulung setiap segi tiga jadi bentuk bulan sabit.',
        'Susun croissant atas loyang beralas kertas. Biar mengembang pada suhu bilik 2 jam.',
        'Sebelum bakar, sapu atas croissant dengan bancuhan telur. Nanti warna dia cantik.',
        'Bakar dalam oven 200°C selama 18 minit, sampai keemasan. Nanti bau dia wangi sangat!'
      ]
    }
  },
  'fr-02': {
    'zh-CN': {
      title: '红酒炖鸡',
      description: '这道红酒炖鸡，鸡肉软烂入味，酱汁浓郁，配米饭或面包都好吃！',
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
        '厚底锅烧热，放黄油，融化后加培根丁，炒脆。',
        '鸡块放锅里，煎到金黄，取出备用。',
        '锅里放珍珠洋葱，炒软，再加蘑菇，炒到出水。',
        '鸡块回锅，加百里香、月桂叶，倒红酒，刮锅底。',
        '红酒煮开，盖盖，小火炖45分钟。',
        '鸡肉取出，酱汁大火收浓。',
        '鸡块摆盘，淋上酱汁，用百里香装饰，趁热吃！'
      ]
    },
    'ms': {
      title: 'Coq au Vin',
      description: 'Coq au Vin ni hidangan ayam istimewa dari Burgundy, Perancis. Kuah dia pekat, rasa dia mewah!',
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
        'Panaskan kuali, cairkan mentega. Masukkan lardons bacon, masak sampai garing dan keemasan.',
        'Masukkan ayam, goreng sampai perang di semua sisi. Angkat ayam, ketepikan.',
        'Dalam kuali sama, tumis bawang mutiara sampai lembut. Masukkan cendawan, masak sampai perang.',
        'Masukkan semula ayam ke dalam kuali. Letak thyme dan daun salam. Tuang wain merah.',
        'Didihkan wain, kemudian tutup kuali. Reneh 45 minit sampai ayam masak dan lembut.',
        'Angkat ayam, ketepikan. Kuatkan api, didihkan sos sampai pekat dan jadi sirap.',
        'Untuk hidang, susun ayam atas pinggan. Sudukan sos pekat atas ayam. Hias dengan thyme segar. Hidang panas-panas.'
      ]
    }
  },
  'fr-03': {
    'zh-CN': {
      title: '普罗旺斯炖菜',
      description: '普罗旺斯炖菜，五颜六色的蔬菜，健康又美味，看着就让人心情好！',
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
        '厚底锅烧热，倒橄榄油。',
        '洋葱切薄片，大蒜切碎，炒到透明发黄。',
        '西葫芦、茄子、甜椒、番茄切薄片。',
        '炒好的洋葱大蒜盛出备用。',
        '烤盘底部铺一层洋葱大蒜。',
        '蔬菜交替排好，撒百里香叶。',
        '淋橄榄油，撒盐和胡椒。',
        '盖锡纸，烤箱160°C烤30分钟，再揭盖烤30分钟。',
        '取出静置10-15分钟，就可以吃了！'
      ]
    },
    'ms': {
      title: 'Ratatouille',
      description: 'Ratatouille ni hidangan sayur-sayuran dari Provence, Perancis. Warna dia cantik, rasa dia segar!',
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
        'Panaskan kuali, tuang minyak zaitun banyak sikit.',
        'Hiris bawang nipis-nipis, cincang bawang putih. Tumis sampai bawang lutsinar dan keemasan.',
        'Hiris zukini, terung, lada benggala, dan tomato nipis-nipis. Pastikan sama saiz ya.',
        'Bila bawang dah masak, angkat dan ketepikan. Susun lapisan nipis bawang tumis di dasar loyang pembakar.',
        'Susun hirisan sayur-sayuran tadi berselang-seli dalam loyang. Tabur daun thyme sikit.',
        'Tuang minyak zaitun lagi atas sayur-sayuran. Perasakan dengan garam dan lada sulah.',
        'Tutup loyang dengan aluminium foil. Bakar dalam oven 160°C selama 30 minit. Kemudian buka foil, bakar lagi 30 minit.',
        'Dah masak, keluarkan dari oven. Biar rehat 10-15 minit sebelum hidang. Sedapnya!'
      ]
    }
  },
  'fr-04': {
    'zh-CN': {
      title: '法式焦糖布丁',
      description: '法式焦糖布丁，香草味浓郁，焦糖脆脆的，挖一勺，幸福感满满！',
      ingredients: [
        { item: '浓奶油', amount: '500毫升' },
        { item: '蛋黄', amount: '6个' },
        { item: '糖', amount: '100克' },
        { item: '香草豆荚', amount: '1根' }
      ],
      instructions: [
        '香草荚剖开，奶油和香草荚小火加热，离火泡30分钟。',
        '蛋黄和细砂糖打发到发白浓稠。',
        '温奶油慢慢倒入蛋黄，边倒边搅，过筛。',
        '布丁液倒入烤盅，放烤盘，加热水，水浴法。',
        '烤箱160°C，烤40分钟，取出放凉，冷藏。',
        '吃之前，布丁撒细砂糖，用喷枪烤焦糖。',
        '马上吃，可以撒点海盐或浆果装饰。'
      ]
    },
    'ms': {
      title: 'Crème Brûlée',
      description: 'Crème Brûlée ni pencuci mulut klasik dari Paris, Perancis. Atas dia rangup, dalam dia lembut berkrim!',
      ingredients: [
        { item: 'krim putar pekat', amount: '500ml' },
        { item: 'kuning telur', amount: '6 biji' },
        { item: 'gula', amount: '100g' },
        { item: 'batang vanila', amount: '1 batang' }
      ],
      instructions: [
        'Belah batang vanila, masukkan dalam periuk dengan krim putar. Panaskan api perlahan sampai mendidih sikit. Angkat, biar meresap 30 minit.',
        'Dalam mangkuk lain, pukul kuning telur dan gula sampai pucat dan pekat.',
        'Tuang krim vanila suam perlahan-lahan ke dalam campuran kuning telur, kacau sentiasa. Tapis adunan.',
        'Tuang adunan ke dalam ramekin. Letak ramekin dalam loyang besar, tuang air panas separuh tinggi ramekin.',
        'Bakar dalam oven 160°C selama 40 minit, sampai tepi keras dan tengah goyang sikit. Sejukkan dalam peti sejuk 2 jam atau semalaman.',
        'Sebelum hidang, tabur gula pasir nipis atas setiap crème brûlée. Bakar gula guna obor dapur sampai perang keemasan dan rangup.',
        'Hidang crème brûlée segera. Boleh hias dengan garam laut atau beri segar. Nikmati!'
      ]
    }
  },
  'fr-05': {
    'zh-CN': {
      title: '法式洋葱汤',
      description: '法式洋葱汤，浓郁香甜，配上烤面包和芝士，暖心又暖胃，冬天喝最舒服了！',
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
        '洋葱去皮切薄片。',
        '大锅融化黄油，加洋葱，炒60分钟，炒到深金黄。',
        '加白葡萄酒，刮锅底，煮到收干。',
        '加牛肉高汤、百里香，煮开转小火，盖盖煮20分钟。',
        '烤肉炉预热，法棍切片，烤到金黄。',
        '汤盛入烤碗，放法棍，撒格鲁耶尔奶酪。',
        '放烤肉炉下，烤到奶酪融化冒泡，取出马上吃！'
      ]
    },
    'ms': {
      title: 'Sup Bawang Perancis',
      description: 'Sup Bawang Perancis ni memang sedap dan menghangatkan dari Paris, Perancis. Rasa dia manis-manis bawang karamel!',
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
        'Kupas dan hiris nipis 6 biji bawang besar. Guna mandolin kalau ada, senang sikit.',
        'Cairkan mentega dalam periuk besar. Masukkan bawang hiris, gaul rata. Masak 60 minit sampai bawang perang keemasan dan manis.',
        'Tuang wain putih sikit dalam periuk, kacau. Didihkan sampai wain kering, tinggal lapisan gula sirap pada bawang.',
        'Masukkan stok daging lembu ke dalam periuk. Letak tangkai thyme segar.',
        'Didihkan sup, kemudian kecilkan api. Masak bertutup 20 minit sampai rasa sebati.',
        'Panaskan broiler. Hiris baguette nipis-nipis, bakar sampai rangup dan keemasan.',
        'Cedok sup panas ke dalam mangkuk tahan oven. Letak baguette bakar atas sup, tabur keju Gruyère parut.',
        'Letak mangkuk bawah broiler, bakar sampai keju cair dan berbuih. Angkat dan hidang segera.'
      ]
    }
  },
  'fr-06': {
    'zh-CN': {
      title: '马赛鱼汤',
      description: '马赛鱼汤，海鲜的鲜味和藏红花的香气完美融合，仿佛置身法国海边！',
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
        '厚底锅烧热，倒橄榄油，炒茴香、番茄，炒软。',
        '加蒜末，炒香1-2分钟。',
        '加藏红花丝，炒匀，再炒一分钟。',
        '倒鱼高汤，煮开，煮5-7分钟。',
        '按顺序加鱼、青口、大虾，煮15分钟。',
        '做鲁伊酱：烤红椒、大蒜、藏红花、橄榄油打匀，加盐、胡椒、柠檬汁。',
        '汤盛碗，放烤法棍，加鲁伊酱，撒欧芹。鱼肉单独盛，装饰欧芹、柠檬角。',
        '客人自己把鱼肉青口放汤里，鲁伊酱抹面包蘸汤吃。'
      ]
    },
    'ms': {
      title: 'Bouillabaisse',
      description: 'Bouillabaisse ni sup ikan istimewa dari Marseille, Perancis. Penuh dengan rasa laut dan rempah ratus!',
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
        'Panaskan kuali, tuang minyak zaitun. Tumis adas hiris dan tomato dadu sampai lembut.',
        'Masukkan bawang putih cincang, masak 1-2 minit sampai wangi. Jangan sampai hangit ya.',
        'Masukkan benang saffron, kacau. Masak seminit lagi biar saffron meresap.',
        'Tuang stok ikan, didihkan. Masak 5-7 minit sampai kuah pekat sikit.',
        'Masukkan ikan ikut kekerasan: monkfish, rascasse, kupang, udang. Masak 15 minit sampai semua masak.',
        'Sementara ikan masak, buat sos rouille. Kisar lada merah panggang, bawang putih, saffron, dan minyak zaitun sampai licin. Perasakan.',
        'Untuk hidang, cedok kuah panas ke dalam mangkuk. Letak baguette bakar dengan sos rouille dan tabur pasli.',
        'Hidang ikan berasingan. Jemput tetamu cedok ikan dan kupang ke dalam kuah. Sedapnya!'
      ]
    }
  },
  'fr-07': {
    'zh-CN': {
      title: '马卡龙',
      description: '马卡龙，小巧精致，外酥内软，甜而不腻，是下午茶的最佳伴侣！',
      ingredients: [
        { item: '杏仁粉', amount: '150克' },
        { item: '糖粉', amount: '150克' },
        { item: '蛋白（陈化）', amount: '3个' },
        { item: '细砂糖', amount: '150克' },
        { item: '馅料（甘纳许、奶油霜）', amount: '' }
      ],
      instructions: [
        '杏仁粉和糖粉过筛。',
        '蛋白打发，分次加细砂糖，打到坚挺有光泽。',
        '杏仁粉和糖粉分次拌入蛋白霜，轻柔翻拌。',
        '面糊装裱花袋，挤出4厘米圆形，放烤盘。',
        '烤盘轻敲，震出气泡。静置30分钟，表面结皮。',
        '烤箱150°C，烤13分钟。',
        '马卡龙凉透后，夹上甘纳许或奶油霜，就可以吃了！'
      ]
    },
    'ms': {
      title: 'Macarons',
      description: 'Macarons ni kuih Perancis yang comel dari Paris. Rangup di luar, lembut di dalam, memang sedap!',
      ingredients: [
        { item: 'tepung badam', amount: '150g' },
        { item: 'gula aising', amount: '150g' },
        { item: 'putih telur (lama)', amount: '3 biji' },
        { item: 'gula kastor', amount: '150g' },
        { item: 'Inti (ganache, krim mentega)', amount: '' }
      ],
      instructions: [
        'Ayak tepung badam dan gula aising bersama. Pastikan licin dan tak berketul.',
        'Dalam mangkuk bersih, pukul putih telur lama sampai berbuih. Masukkan gula kastor sikit-sikit, pukul sampai kental dan berkilat.',
        'Lipat perlahan-lahan campuran tepung badam ke dalam meringue. Guna spatula getah, jangan terlebih gaul ya.',
        'Masukkan adunan ke dalam beg paip. Paip bulatan kecil atas loyang beralas kertas parchment.',
        'Ketuk loyang perlahan-lahan untuk buang gelembung udara. Biar macaron rehat 30 minit pada suhu bilik.',
        'Panaskan oven 150°C. Bakar macaron 13 minit, sampai atas dia kukuh dan tepi keemasan.',
        'Dah masak, biar macaron sejuk sepenuhnya atas loyang. Kemudian boleh padankan dengan inti kegemaran, macam ganache coklat atau krim mentega.'
      ]
    }
  },
  'fr-08': {
    'zh-CN': {
      title: '勃艮第红酒炖牛肉',
      description: '勃艮第红酒炖牛肉，牛肉炖得软烂入味，红酒的香气渗透其中，是道经典的法式大菜！',
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
        '牛腩切块，用盐和胡椒调味。',
        '牛肉块和红酒拌匀，盖好，冰箱冷藏过夜。',
        '第二天，牛肉沥干，腌料留着。铸铁锅烧热，倒橄榄油，分批煎牛肉到金黄。',
        '牛肉取出。培根丁放锅里，炒脆，取出备用。',
        '洋葱、珍珠洋葱、蘑菇放锅里，炒软，加百里香、月桂叶。',
        '倒回红酒腌料，刮锅底。牛肉、培根回锅，盖盖，烤箱160°C烤2.5小时。',
        '取出牛肉培根。酱汁过筛，倒干净锅里，中火收浓。',
        '牛肉培根回锅，裹上酱汁，趁热吃，配土豆泥！'
      ]
    },
    'ms': {
      title: 'Boeuf Bourguignon',
      description: 'Boeuf Bourguignon ni stew daging lembu klasik dari Burgundy, Perancis. Daging dia lembut sangat, kuah dia pekat beraroma!',
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
        'Potong daging lembu kiub 2 inci. Perasakan dengan garam dan lada hitam.',
        'Campurkan daging lembu dengan wain Burgundy dalam mangkuk. Tutup, simpan dalam peti semalaman.',
        'Esoknya, angkat daging dari perapan, simpan perapan wain. Panaskan minyak zaitun dalam periuk besar.',
        'Goreng daging lembu sikit-sikit sampai perang di semua sisi. Angkat, ketepikan.',
        'Masukkan lardons bacon dalam periuk, masak sampai garing. Angkat, ketepikan dengan daging.',
        'Masukkan bawang besar, bawang mutiara, dan cendawan dalam periuk. Masak sampai lembut dan perang sikit. Masukkan thyme dan daun salam.',
        'Tuang perapan wain yang disimpan tadi. Masukkan semula daging lembu dan bacon. Tutup, bakar dalam oven 160°C selama 2.5 jam.',
        'Keluarkan periuk dari oven. Angkat daging dan bacon, ketepikan. Tapis sos ke dalam periuk bersih.',
        'Pekatkan sos atas api sederhana sampai jadi sirap. Kacau selalu ya.',
        'Akhir sekali, masukkan semula daging lembu dan bacon ke dalam sos. Gaul rata. Hidang panas-panas dengan kentang lenyek. Sedapnya!'
      ]
    }
  },
  'fr-09': {
    'zh-CN': {
      title: '洛林乳蛋饼',
      description: '这个法式咸派，香浓酥脆，是洛林那边的传统味道，奶奶我最爱做了！',
      ingredients: [
        { item: '酥皮面团', amount: '' },
        { item: '培根丁', amount: '200克' },
        { item: '鸡蛋', amount: '4个' },
        { item: '奶油', amount: '200毫升' },
        { item: '格鲁耶尔奶酪', amount: '' },
        { item: '肉豆蔻', amount: '' }
      ],
      instructions: [
        '烤箱预热180°C。',
        '酥皮擀薄，铺进24厘米派模。',
        '铺烘焙纸，放烘焙豆盲烤15分钟。',
        '取出烘焙纸和豆子。',
        '培根丁煎脆，沥油备用。',
        '鸡蛋、奶油、肉豆蔻搅匀。',
        '加盐、胡椒、格鲁耶尔奶酪拌匀。',
        '培根、奶酪撒派底。',
        '倒入蛋液，填满派壳。',
        '烤30-35分钟，直到金黄微颤。'
      ]
    },
    'ms': {
      title: 'Quiche Lorraine',
      description: 'Quiche Lorraine ni memang resipi asli dari Perancis, sedap sangat untuk minum petang!',
      ingredients: [
        { item: 'Pastri rapuh', amount: '' },
        { item: 'Lardon bacon', amount: '200g' },
        { item: 'Telur', amount: '4 biji' },
        { item: 'Krim', amount: '200ml' },
        { item: 'Keju Gruyère', amount: '' },
        { item: 'Buah pala', amount: '' }
      ],
      instructions: [
        'Mula-mula, panaskan oven 180°C. Canaikan pastri nipis-nipis, dalam 3mm, dan masukkan dalam acuan tart 24cm. Kemaskan tepinya ya.',
        'Kemudian, bakar pastri kosong tu. Letak kertas parchment dan kacang bakar atasnya. Bakar 15 minit sampai perang keemasan. Buang kertas dan kacang.',
        'Sementara pastri dibakar, goreng 200g lardon bacon dalam kuali panas sampai rangup dan perang keemasan. Toskan atas tisu dapur.',
        'Dalam mangkuk besar, pukul 4 biji telur, 200ml krim pekat, dan secubit buah pala parut sampai sebati.',
        'Perasakan adunan telur dengan garam dan lada hitam. Masukkan 100g keju Gruyère parut, gaul rata.',
        'Taburkan bacon dan keju Gruyère atas pastri yang dah dibakar. Tuang adunan telur sampai penuh acuan.',
        'Akhir sekali, bakar quiche dalam oven panas selama 30-35 minit. Sampai tepinya perang keemasan dan tengahnya goyang sikit-sikit.'
      ]
    }
  },
  'fr-10': {
    'zh-CN': {
      title: '橙味薄饼',
      description: '巴黎的橙味薄饼，香甜软糯，带着橙子的清香，吃一口就停不下来！',
      ingredients: [
        { item: '薄饼面糊', amount: '' },
        { item: '橙汁', amount: '' },
        { item: '橙皮屑', amount: '' },
        { item: '君度力娇酒', amount: '' },
        { item: '黄油', amount: '' },
        { item: '糖', amount: '' }
      ],
      instructions: [
        '面粉、糖、盐拌匀。',
        '加鸡蛋、牛奶、黄油，搅成面糊。',
        '不粘锅刷油，中火加热。',
        '倒面糊，摊成薄饼。',
        '煎至金黄，翻面再煎。',
        '煎好所有薄饼。',
        '黄油、砂糖、橙汁、橙皮屑入锅。',
        '小火煮成焦糖酱。',
        '薄饼叠好，放入酱汁锅。',
        '两面沾匀酱汁。',
        '倒入君度酒，点火。',
        '火焰熄灭即可。',
        '趁热上桌，撒糖粉，放橙片。'
      ]
    },
    'ms': {
      title: 'Crepes Suzette',
      description: 'Crepes Suzette ni pencuci mulut klasik dari Paris, memang sedap dan mudah dibuat!',
      ingredients: [
        { item: 'Adunan krep nipis', amount: '' },
        { item: 'Jus oren', amount: '' },
        { item: 'Zest oren', amount: '' },
        { item: 'Grand Marnier', amount: '' },
        { item: 'Mentega', amount: '' },
        { item: 'Gula', amount: '' }
      ],
      instructions: [
        'Dalam mangkuk, campurkan 1 1/2 cawan tepung, 2 1/2 sudu teh gula, dan secubit garam. Masukkan 2 telur, 1 1/2 cawan susu, dan 2 sudu besar mentega cair. Pukul sampai licin.',
        'Panaskan kuali non-stick, sapu mentega nipis. Tuang 2 sudu besar adunan, goyangkan kuali biar rata. Masak 1-2 minit sampai bawah perang keemasan dan atas kering.',
        'Longgarkan krep, terbalikkan. Masak lagi 30 saat ke 1 minit sampai perang muda. Ulang sampai adunan habis, dapat 8-10 keping.',
        'Untuk sos, campurkan 2 sudu besar mentega dan 1 sudu besar gula dalam kuali besar. Kacau sampai gula larut. Masukkan 2 sudu besar jus oren dan zest oren. Masak sampai sos pekat sikit.',
        'Lipat setiap krep empat segi, masukkan dalam kuali sos. Balik-balikkan krep biar bersalut sos.',
        'Tuang 2 sudu besar Grand Marnier atas krep. Nyalakan api dengan berhati-hati, biar api masak minuman keras dan karamelkan gula, dalam 30 saat ke 1 minit.',
        'Hidangkan Crepes Suzette panas-panas. Boleh tabur gula aising dan hias dengan hirisan oren kalau suka.'
      ]
    }
  },
  'us-01': {
    'zh-CN': {
      title: '牛肉汉堡',
      description: '纽约的牛肉汉堡，简单又美味，一口咬下去汁水四溢，香得不得了！',
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
        '牛肉松松做成肉饼，压个小凹痕。',
        '铸铁锅烧热，每面煎3分钟。',
        '加奶酪，盖盖子焖融化。',
        '烤面包。',
        '按喜好组装：酱、生菜、番茄、洋葱、肉饼、腌黄瓜。',
        '马上吃！'
      ]
    },
    'ms': {
      title: 'Burger Daging Lembu',
      description: 'Burger daging lembu ni memang resipi asli dari New York, sedap sangat!',
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
        'Bentukkan daging lembu 140g jadi patty, perasakan secukupnya. Buat lekukan kecil di tengah.',
        'Masak atas kuali besi tuang yang sangat panas, 3 minit setiap sisi. Letak keju, tutup kuali biar cair.',
        'Bakar roti burger. Susun: sos, salad, tomato, bawang, patty, acar timun. Hidangkan cepat-cepat!'
      ]
    }
  },
  'us-02': {
    'zh-CN': {
      title: '烧烤排骨',
      description: '堪萨斯城的烧烤排骨，香气扑鼻，肉质软烂入味，是全家都爱的大硬菜！',
      ingredients: [
        { item: '猪排骨', amount: '' },
        { item: '烧烤干腌料 (红椒粉、红糖、孜然、大蒜)', amount: '' },
        { item: '烧烤酱', amount: '' },
        { item: '苹果醋', amount: '' },
        { item: '木屑', amount: '' }
      ],
      instructions: [
        '选好排骨，撕掉背面薄膜。',
        '干腌料拌匀，抹排骨。',
        '室温放1小时入味。',
        '烟熏炉预热120°C。',
        '排骨骨头朝下入炉。',
        '熏4小时，每30分钟刷苹果醋。',
        '2小时后用锡纸包排骨。',
        '取出排骨，准备烧烤酱。',
        '酱汁小火熬浓稠。',
        '排骨刷酱，上烤架。',
        '每面烤10分钟，酱汁焦糖化。',
        '取出排骨，静置10分钟。',
        '切块上桌，撒香草，配菜。'
      ]
    },
    'ms': {
      title: 'Rusuk BBQ',
      description: 'Rusuk BBQ ni memang resipi asli dari Kansas City, sedapnya tak terkata!',
      ingredients: [
        { item: 'Rak rusuk babi', amount: '' },
        { item: 'Perapan kering BBQ (paprika, gula perang, jintan manis, bawang putih)', amount: '' },
        { item: 'Sos BBQ', amount: '' },
        { item: 'Cuka epal', amount: '' },
        { item: 'Cip kayu', amount: '' }
      ],
      instructions: [
        'Pilih rusuk babi yang elok, buang membran di belakang rusuk. Guna tisu dapur untuk tarik.',
        'Campurkan paprika salai, gula perang, jintan manis, dan serbuk bawang putih. Sapu rata pada rusuk. Biar 1 jam pada suhu bilik.',
        'Panaskan perokok ke 120°C, guna cip kayu hickory atau epal. Letak rusuk dalam perokok, tulang di bawah. Tutup.',
        'Masak rusuk 4 jam atau sampai suhu dalaman 90°C. Sapu cuka epal setiap 30 minit. Balut rusuk dengan kerajang selepas 2 jam.',
        'Lepas 4 jam, keluarkan rusuk. Panaskan sos BBQ dalam periuk kecil sampai pekat dan bersirap.',
        'Sapu sos BBQ rata pada rusuk. Bakar atas gril panas 10 minit setiap sisi, sampai sos berkaramel dan melekit.',
        'Keluarkan rusuk dari gril, biar rehat 10 minit. Potong dan hidangkan segera. Boleh hias dengan pasli atau ketumbar, makan dengan coleslaw.'
      ]
    }
  },
  'us-03': {
    'zh-CN': {
      title: '蛤蜊浓汤',
      description: '波士顿的蛤蜊浓汤，奶香浓郁，蛤蜊鲜甜，暖心又暖胃，冬天喝最舒服了！',
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
        '厚底锅中火，培根煎脆。',
        '取出培根，沥油。',
        '锅里留两勺培根油。',
        '洋葱入锅，炒软变透明。',
        '土豆丁入锅，拌匀。',
        '倒鱼汤没过土豆，煮沸。',
        '小火煮到土豆变软。',
        '蛤蜊洗净备用。',
        '土豆软后，加蛤蜊。',
        '放入脆培根碎。',
        '拌入浓奶油。',
        '加百里香、黑胡椒调味。',
        '趁热上桌，撒百里香，配饼干。'
      ]
    },
    'ms': {
      title: 'Sup Krim Kerang',
      description: 'Sup Krim Kerang ni memang resipi asli dari Boston, sedapnya tak terkata!',
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
        'Panaskan kuali tebal atas api sederhana. Goreng 3 jalur bacon sampai rangup dan perang keemasan, dalam 5-7 minit.',
        'Angkat bacon, toskan atas tisu. Tinggalkan 2 sudu besar lemak bacon dalam kuali.',
        'Masukkan 1 biji bawang hiris nipis dalam kuali. Kacau sampai lembut dan lutsinar, dalam 8-10 minit.',
        'Masukkan 3 biji kentang dadu. Tuang stok ikan sampai kentang tenggelam. Didihkan perlahan sampai kentang lembut, dalam 15-20 minit.',
        'Sementara kentang masak, bilas 400g kerang segar bawah air sejuk. Ketepikan, jangan masak dulu.',
        'Bila kentang dah lembut, masukkan kerang dan bacon rangup yang dah dihancurkan. Gaul perlahan.',
        'Akhir sekali, masukkan 200ml krim pekat. Perasakan dengan thyme cincang dan lada hitam. Hidangkan sup krim kerang panas dengan keropok tiram.'
      ]
    }
  },
  'us-04': {
    'zh-CN': {
      title: '煎饼',
      description: '纽约的煎饼，松软香甜，配上枫糖浆和黄油，是早餐最好的选择！',
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
        '面粉、糖、泡打粉拌匀。',
        '白脱牛奶、鸡蛋搅匀。',
        '湿料倒入干料，轻轻拌匀。',
        '不粘锅中火，黄油融化起泡。',
        '舀面糊入锅，煎2-3分钟。',
        '表面起泡，边缘变干。',
        '翻面，再煎1-2分钟。',
        '叠高上桌，加黄油、枫糖浆。'
      ]
    },
    'ms': {
      title: 'Panekuk',
      description: 'Panekuk ni memang resipi asli dari New York, sedapnya tak terkata!',
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
        'Dalam mangkuk besar, pukul 2 cawan tepung, 2 sudu besar gula, dan 2 sudu teh serbuk penaik. Pastikan sebati.',
        'Dalam mangkuk lain, pukul 2 cawan susu mentega sejuk dan 2 biji telur besar sampai licin.',
        'Tuang bahan basah perlahan-lahan ke dalam bahan kering. Gaul perlahan dengan spatula getah, jangan terlebih gaul. Biar ada ketulan sikit.',
        'Panaskan kuali non-stick atas api sederhana. Masukkan sedikit mentega masin, biar cair dan berbuih sampai kuali bersalut rata.',
        'Guna cawan penyukat 1/4 cawan, cedok adunan panekuk ke atas kuali. Masak 2-3 minit sampai buih muncul dan bawah perang keemasan.',
        'Longgarkan panekuk, terbalikkan. Masak lagi 1-2 minit sampai bahagian lain keemasan dan masak sepenuhnya.',
        'Susun panekuk tinggi-tinggi atas pinggan panas. Hidangkan segera dengan mentega dan sirap mapel tulen. Sedapnya!'
      ]
    }
  },
  'us-05': {
    'zh-CN': {
      title: '奶酪通心粉',
      description: '芝加哥的奶酪通心粉，香浓芝士裹着Q弹意面，烤得金黄酥脆，孩子最爱吃了！',
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
        '大锅水烧开，加盐。',
        '放通心粉，煮到有嚼劲。',
        '平底锅融化黄油。',
        '加面粉，炒1-2分钟。',
        '慢慢倒入牛奶，搅匀。',
        '煮沸，小火熬浓稠。',
        '离火，加车达奶酪搅融。',
        '加盐、红椒粉调味。',
        '意面沥干，倒入奶酪酱。',
        '拌匀，尝味，调整。',
        '倒入烤盘，铺面包屑。',
        '烤箱190°C，烤20-25分钟。',
        '取出，放凉几分钟再吃。'
      ]
    },
    'ms': {
      title: 'Makaroni dan Keju',
      description: 'Makaroni dan Keju ni memang resipi asli dari Chicago, sedapnya tak terkata!',
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
        'Didihkan air garam dalam periuk besar. Masukkan 300g makaroni siku, kacau perlahan. Masak sampai al dente, dalam 8-10 minit.',
        'Sementara pasta masak, cairkan 50g mentega dalam periuk sederhana. Masukkan 3 sudu besar tepung, pukul berterusan 1-2 minit sampai perang keemasan.',
        'Tuang 500ml susu penuh secara beransur-ansur, pukul sentiasa. Didihkan perlahan 5-7 minit sampai sos pekat.',
        'Angkat sos dari api. Masukkan 200g keju cheddar parut sampai cair dan sos licin. Perasakan dengan garam dan paprika.',
        'Toskan pasta, masukkan dalam sos keju. Kacau rata. Rasa dan sesuaikan perasa.',
        'Pindahkan makaroni dan keju ke dalam hidangan pembakar yang dah disapu mentega. Tabur serbuk roti rangup. Bakar dalam oven 190°C selama 20-25 minit sampai atas perang keemasan.',
        'Keluarkan dari oven, biar sejuk beberapa minit sebelum hidang. Barulah sedap!'
      ]
    }
  },
  'us-06': {
    'zh-CN': {
      title: '纽约芝士蛋糕',
      description: '纽约的芝士蛋糕，口感绵密，奶香浓郁，冷藏一夜更美味，是下午茶的好搭档！',
      ingredients: [
        { item: '奶油奶酪', amount: '750克' },
        { item: '鸡蛋', amount: '3 个' },
        { item: '糖', amount: '200克' },
        { item: '酸奶油', amount: '200毫升' },
        { item: '香草精', amount: '' },
        { item: '全麦饼干底', amount: '' }
      ],
      instructions: [
        '饼干碎、糖、盐拌匀。',
        '加融化黄油，拌匀。',
        '压入23厘米模具底部和侧面。',
        '冷冻10分钟。',
        '烤箱预热160°C。',
        '奶油奶酪、糖搅打顺滑。',
        '分次加入鸡蛋，搅匀。',
        '加酸奶油、香草精，低速拌匀。',
        '面糊倒入饼干底上，抹平。',
        '模具放烤盘，加热水到一半。',
        '烤1小时，边缘凝固，中心微颤。',
        '关烤箱，门半开，冷却1小时。',
        '取出，室温冷却，冷藏过夜。'
      ]
    },
    'ms': {
      title: 'Kek Keju New York',
      description: 'Kek Keju New York ni memang resipi asli dari New York, sedapnya tak terkata!',
      ingredients: [
        { item: 'Keju krim', amount: '750g' },
        { item: 'Telur', amount: '3 biji' },
        { item: 'Gula', amount: '200g' },
        { item: 'Krim masam', amount: '200ml' },
        { item: 'Vanila', amount: '' },
        { item: 'Kerak biskut Graham', amount: '' }
      ],
      instructions: [
        'Untuk kerak, campurkan 250g serbuk biskut Graham, 100g gula, dan 6g garam. Kacau sebati. Masukkan 120g mentega cair, gaul sampai lembap.',
        'Tekan campuran kerak ke dasar dan sisi loyang springform 23cm. Sejukkan dalam peti sejuk beku 10 minit.',
        'Panaskan oven 160°C. Untuk adunan kek keju, pukul 750g keju krim lembut dengan 200g gula sampai licin dan berkrim.',
        'Dengan pengadun kelajuan sederhana, masukkan 3 biji telur satu per satu. Pukul sebati setiap kali.',
        'Masukkan 200ml krim masam dan 1 sudu teh ekstrak vanila tulen. Pukul perlahan sampai sebati, jangan terlebih gaul.',
        'Tuang adunan kek keju atas kerak yang dah siap. Ratakan bahagian atas dengan spatula.',
        'Letak loyang springform dalam loyang pembakar besar. Tuang air panas separuh ketinggian loyang springform. Bakar 1 jam. Matikan oven, biar kek keju sejuk dalam oven dengan pintu terbuka sikit selama 1 jam.',
        'Keluarkan kek keju dari rendaman air. Biar sejuk pada suhu bilik. Tutup dan sejukkan semalaman, atau sekurang-kurangnya 8 jam.'
      ]
    }
  },
  'us-07': {
    'zh-CN': {
      title: '布法罗鸡翅',
      description: '布法罗鸡翅，香辣酥脆，配上蓝纹奶酪酱和西芹，是看球赛的最佳零食！',
      ingredients: [
        { item: '鸡翅', amount: '1公斤' },
        { item: '黄油', amount: '60克' },
        { item: '辣酱 (法兰克辣酱)', amount: '' },
        { item: '蒜粉', amount: '' },
        { item: '蓝纹奶酪蘸酱', amount: '' }
      ],
      instructions: [
        '烤箱预热220°C。',
        '鸡翅洗净拍干，撒盐。',
        '烤盘铺锡纸，抹油。',
        '鸡翅单层排好。',
        '翻动鸡翅，均匀裹油。',
        '烤20分钟，翻面。',
        '再烤20-25分钟，至金黄酥脆。',
        '平底锅融化黄油。',
        '倒入辣酱，搅匀。',
        '鸡翅入酱汁，拌匀。',
        '撒蒜粉。',
        '摆盘，配西芹条、蓝纹奶酪酱。',
        '撒香草，趁热吃！'
      ]
    },
    'ms': {
      title: 'Kepak Ayam Buffalo',
      description: 'Kepak Ayam Buffalo ni memang resipi asli dari Buffalo, sedapnya tak terkata!',
      ingredients: [
        { item: 'Kepak ayam', amount: '1kg' },
        { item: 'Mentega', amount: '60g' },
        { item: 'Sos pedas (Franks)', amount: '' },
        { item: 'Serbuk bawang putih', amount: '' },
        { item: 'Sos pencicah keju biru', amount: '' }
      ],
      instructions: [
        'Panaskan oven 220°C. Bilas 1kg kepak ayam, keringkan dengan tisu. Perasakan dengan garam.',
        'Lapik loyang pembakar dengan kerajang aluminium, titiskan minyak. Susun kepak ayam satu lapisan, biar ada ruang.',
        'Gaulkan kepak ayam dengan minyak. Bakar 20 minit sampai perang keemasan dan mula rangup. Balikkan.',
        'Teruskan bakar 20-25 minit lagi sampai perang keemasan dan rangup. Angkat dari oven.',
        'Sementara ayam dibakar, cairkan 60g mentega dalam periuk atas api perlahan. Tuang sos pedas perlahan-lahan, pukul berterusan sampai sos pekat.',
        'Bila kepak ayam dah siap, gaulkan segera dalam campuran mentega dan sos pedas. Tabur secubit serbuk bawang putih.',
        'Susun kepak ayam buffalo atas pinggan. Hias dengan batang saderi rangup dan sos pencicah keju biru di sisi.',
        'Hias pinggan dengan herba segar, macam pasli atau kucai. Hidangkan segera. Selamat menjamu selera!'
      ]
    }
  },
  'us-08': {
    'zh-CN': {
      title: '苹果派',
      description: '新英格兰的苹果派，酥皮金黄，苹果馅香甜软糯，是奶奶我最拿手的甜点！',
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
        '烤箱预热190°C。',
        '第一份派皮擀薄，铺入派盘。',
        '青苹果、糖、肉桂、肉豆蔻拌匀。',
        '苹果馅填入派皮，中间堆高。',
        '顶部点缀黄油块。',
        '第二份派皮擀薄，盖在派上。',
        '边缘按紧，卷边。',
        '顶部划几刀排气。',
        '刷上蛋液。',
        '派放烤盘，烤50分钟。',
        '中途转动派盘。',
        '取出，冷却至少30分钟。',
        '趁热吃，可撒糖粉或配奶油。'
      ]
    },
    'ms': {
      title: 'Pai Epal',
      description: 'Pai Epal ni memang resipi asli dari New England, sedapnya tak terkata!',
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
        'Panaskan oven 190°C. Penting untuk kerak pai yang cantik.',
        'Canaikan kulit pai pertama nipis-nipis, dalam 3mm. Lapikkan pinggan pai, tekan kemas ke sudut.',
        'Dalam mangkuk besar, campurkan epal Granny Smith hiris, 150g gula, 1 sudu teh kayu manis, dan ¼ sudu teh buah pala. Gaul rata.',
        'Isi kerak pai dengan campuran epal, timbunkan sikit di tengah. Taburkan 2 sudu besar mentega potong kecil atas epal.',
        'Canaikan kulit pai kedua nipis-nipis, dalam 3mm. Letak atas pai yang dah diisi. Tekan tepi kerak atas untuk tutup pai dan kelimkan.',
        'Guna pisau tajam, buat beberapa lubang di kerak atas. Sapu sapuan telur atas kerak untuk kilauan perang keemasan.',
        'Letak pai atas loyang pembakar beralas kertas parchment. Bakar 50 minit sampai kerak perang keemasan, epal lembut, dan inti berbuih. Pusingkan pai separuh masa bakar.',
        'Keluarkan pai dari oven, biar sejuk atas rak dawai sekurang-kurangnya 30 minit. Hidangkan panas-panas, boleh tabur gula aising atau letak krim putar.'
      ]
    }
  },
  'th-01': {
    'zh-CN': {
      title: '泰式炒河粉',
      description: '这道泰式炒河粉，味道正宗，香气扑鼻，就像在曼谷街头吃到的一样！',
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
        '米粉泡热水，软了就行，别太烂。',
        '热锅下油，虾或豆腐煎金黄，推一边。',
        '同锅打俩鸡蛋，炒散，和虾豆腐拌匀。',
        '泡好的米粉沥干，下锅和食材炒匀。',
        '小碗调好罗望子酱、鱼露、棕榈糖，倒进锅里炒匀。',
        '豆芽下锅，再炒一分钟，保持脆感。',
        '装盘，撒花生碎、挤青柠汁、撒辣椒片。',
        '葱花、青柠片点缀，趁热吃最香！'
      ]
    },
    'ms': {
      title: 'Pad Thai',
      description: 'Pad Thai ni memang resipi asli dari Bangkok, Thailand. Rasa dia memang kaw!',
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
        'Mula-mula, rendam mi beras dalam air panas sampai lembut, tapi jangan sampai lembik sangat ya, dalam 5-7 minit.',
        'Panaskan kuali sampai berasap, masukkan minyak kacang. Goreng udang atau tauhu sampai keperangan, tolak tepi.',
        'Dalam kuali yang sama, pecahkan telur, kacau hancur. Campurkan dengan udang/tauhu tadi.',
        'Masukkan mi yang dah ditos, gaul rata dengan campuran telur dan udang. Biar mi lembut sikit lagi.',
        'Campurkan pes asam jawa, sos ikan, dan gula melaka. Tuang dalam kuali, gaul sebati dengan mi. Biar sos pekat.',
        'Masukkan taugeh, gaul sekejap. Masak seminit dua je, biar taugeh masih rangup.',
        'Angkat Pad Thai ke pinggan. Tabur kacang tanah, perah limau, dan tabur cili sikit. Sedapnya!',
        'Hias dengan daun bawang dan hirisan limau. Hidang panas-panas, baru syok makan.'
      ]
    }
  },
  'th-02': {
    'zh-CN': {
      title: '冬阴功汤',
      description: '曼谷的冬阴功汤，酸辣开胃，暖心暖胃，喝一口就停不下来！',
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
        '大锅高汤烧开，咕嘟咕嘟冒泡。',
        '拍扁的柠檬草、南姜片下锅，煮两三分钟。',
        '青柠叶放进去，再煮一两分钟。',
        '蘑菇切片，虾去皮去线，一起下锅。',
        '鱼露调味，煮到虾变粉，蘑菇变软。',
        '挤青柠汁，放辣椒片，拌匀。',
        '尝尝味道，酸辣咸甜调好，盛碗趁热喝！'
      ]
    },
    'ms': {
      title: 'Tom Yum Goong',
      description: 'Ini Tom Yum Goong asli dari Bangkok, Thailand. Rasa masam pedas dia memang membangkitkan selera!',
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
        'Didihkan stok ikan dalam periuk besar sampai menggelegak kuat.',
        'Masukkan serai yang dah dititik dan lengkuas hiris. Biar mendidih 2-3 minit sampai wangi.',
        'Kemudian, masukkan daun limau purut. Didihkan lagi 1-2 minit sampai bau harum semerbak.',
        'Sementara tu, hiris cendawan dan buang urat udang. Masukkan dalam periuk, kacau perlahan.',
        'Bila udang dah masak, perasakan dengan sos ikan. Didihkan lagi 1-2 minit.',
        'Sebelum hidang, masukkan jus limau nipis dan cili Thai hiris. Rasa dia memang padu!',
        'Akhir sekali, rasa dan sesuaikan perasa. Cedok sup panas-panas, hidang dengan hiasan limau dan cili.'
      ]
    }
  },
  'th-03': {
    'zh-CN': {
      title: '泰式绿咖喱',
      description: '清迈的绿咖喱，香浓美味，配米饭绝了，吃一口就忘不了！',
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
        '热锅放椰浆，炒到出油。',
        '绿咖喱酱下锅，炒香。',
        '鸡腿肉切块，下锅炒到金黄。',
        '倒椰奶，放泰国茄子、竹笋，煮开。',
        '小火炖15分钟，酱汁变稠。',
        '鱼露调味，尝尝味道。',
        '拌入罗勒叶，配茉莉香米饭，趁热吃！'
      ]
    },
    'ms': {
      title: 'Kari Hijau',
      description: 'Kari Hijau ni resipi asli dari Chiang Mai, Thailand. Memang sedap dan beraroma!',
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
        'Panaskan kuali, masukkan krim kelapa. Kacau sampai cair dan berminyak.',
        'Masukkan pes kari hijau, kacau rata 1-2 minit sampai naik bau harum.',
        'Masukkan ayam potong dadu, gaul dengan pes kari. Masak 5 minit sampai ayam masak.',
        'Tuang santan, masukkan terung Thai dan rebung hiris. Kacau perlahan.',
        'Reneh tanpa tutup selama 15 minit sampai sos pekat dan rasa sebati.',
        'Perasakan kari dengan sos ikan. Rasa dan sesuaikan ikut selera.',
        'Akhir sekali, masukkan daun selasih segar. Hidang kari panas-panas dengan nasi melati.'
      ]
    }
  },
  'th-04': {
    'zh-CN': {
      title: '芒果糯米饭',
      description: '曼谷的芒果糯米饭，香甜软糯，冰冰凉凉，夏天吃最舒服了！',
      ingredients: [
        { item: '糯米', amount: '' },
        { item: '椰奶', amount: '400ml' },
        { item: '熟芒果', amount: '3' },
        { item: '糖', amount: '' },
        { item: '盐', amount: '' },
        { item: '芝麻', amount: '' }
      ],
      instructions: [
        '糯米淘净，泡水至少四小时。',
        '沥干糯米，蒸15-20分钟，蒸熟。',
        '椰奶、糖、盐小火加热，糖化开就行。',
        '蒸好的米饭倒大碗，淋甜椰奶，拌匀。',
        '盖好，静置20分钟，让米饭吸饱椰奶。',
        '芒果切片，摆盘。',
        '糯米饭放芒果旁，淋点椰奶，撒芝麻。',
        '室温或微温吃，味道最好！'
      ]
    },
    'ms': {
      title: 'Pulut Mangga',
      description: 'Pulut Mangga ni pencuci mulut asli dari Bangkok, Thailand. Manis, lemak, memang sedap!',
      ingredients: [
        { item: 'Beras pulut', amount: '' },
        { item: 'Santan', amount: '400ml' },
        { item: 'Mangga masak', amount: '3' },
        { item: 'Gula', amount: '' },
        { item: 'Garam', amount: '' },
        { item: 'Biji bijan', amount: '' }
      ],
      instructions: [
        'Basuh bersih beras pulut, rendam dalam air sekurang-kurangnya 4 jam atau semalaman.',
        'Toskan beras, kukus atas kain keju selama 15-20 minit sampai masak dan gebu.',
        'Dalam periuk lain, campur santan, gula, dan secubit garam. Panaskan sampai gula larut, jangan sampai mendidih.',
        'Bila nasi dah masak, masukkan dalam mangkuk besar. Tuang santan manis atas nasi, gaul perlahan.',
        'Tutup nasi, biarkan rehat 20 minit. Biar nasi serap santan sepenuhnya.',
        'Sementara tu, hiris mangga masak nipis-nipis. Susun cantik atas pinggan.',
        'Hidang pulut dengan mangga hiris. Tuang santan manis sikit lagi, tabur bijan panggang.',
        'Nikmati Pulut Mangga pada suhu bilik atau suam-suam. Memang padu!'
      ]
    }
  },
  'th-05': {
    'zh-CN': {
      title: '马萨曼咖喱',
      description: '这道泰南马萨曼咖喱，香料味浓郁，牛肉软烂，配米饭吃超满足！',
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
        '热锅放椰浆、植物油，炒到油亮。',
        '马萨曼咖喱酱下锅，炒香。',
        '牛肉或鸡肉下锅，煎到金黄。',
        '倒椰奶，放土豆、肉桂棒、八角，煮开。',
        '小火炖45分钟，炖到肉烂，酱汁浓稠。',
        '快好时拌入花生，再炖一会儿。',
        '鱼露、棕榈糖调味，尝尝味道。',
        '取出香料，撒香菜，配米饭或面条吃。'
      ]
    },
    'ms': {
      title: 'Kari Massaman',
      description: 'Kari Massaman ni resipi asli dari Selatan Thailand. Rasa dia memang kaya dan berempah!',
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
        'Panaskan kuali, masukkan krim kelapa dan minyak sayuran. Biar minyak berkilau.',
        'Masukkan pes kari Massaman, kacau 2-3 minit sampai wangi dan minyak terpisah.',
        'Masukkan daging lembu atau ayam, masak sampai keperangan di semua sisi, kira-kira 5 minit.',
        'Tuang santan, masukkan ubi kentang dadu, kayu manis, dan bunga lawang. Kacau perlahan, biar mendidih.',
        'Kecilkan api, reneh bertutup 45 minit. Kacau sekali-sekala sampai daging lembut dan sos pekat.',
        '10 minit sebelum masak, masukkan kacang tanah panggang. Teruskan reneh tanpa tutup sampai sos pekat.',
        'Perasakan kari dengan sos ikan dan gula melaka. Kacau, rasa, dan sesuaikan ikut selera.',
        'Buang kayu manis dan bunga lawang. Hias dengan daun ketumbar, hidang dengan nasi atau mi. Sedapnya!'
      ]
    }
  },
  'th-06': {
    'zh-CN': {
      title: '青木瓜沙拉 (Som Tam)',
      description: '伊桑的青木瓜沙拉，酸辣爽口，开胃解腻，夏天吃最棒了！',
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
        '青木瓜去皮，切细丝。',
        '辣椒、大蒜烤香，捣碎。',
        '木瓜丝、长豆角、圣女果放研钵，和辣椒蒜拌匀。',
        '小碗调好青柠汁、鱼露、棕榈糖，倒进研钵。',
        '轻轻捣拌，让蔬菜裹上酱汁，别捣烂。',
        '尝尝味道，酸辣咸甜调好。',
        '装盘，撒花生、辣椒，趁新鲜吃！'
      ]
    },
    'ms': {
      title: 'Som Tam (Kerabu Betik)',
      description: 'Som Tam atau Kerabu Betik ni resipi asli dari Isan, Thailand. Rasa dia memang segar dan menyelerakan!',
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
        'Pilih betik hijau yang pejal. Kupas dan hiris nipis-nipis memanjang.',
        'Bakar cili padi dan bawang putih sekejap sampai wangi. Tumbuk kasar dalam lesung batu.',
        'Masukkan betik hiris, kacang panjang, dan tomato ceri dalam lesung. Gaul perlahan.',
        'Campurkan jus limau nipis, sos ikan, dan gula nisan sampai gula larut. Tuang atas betik.',
        'Tumbuk dan gaul perlahan semua bahan dalam lesung. Jangan tumbuk kuat sangat ya.',
        'Rasa dan sesuaikan perasa. Tambah apa yang kurang ikut selera masing-masing.',
        'Pindahkan Som Tam ke pinggan. Tabur kacang tanah panggang dan cili kalau suka. Siap!'
      ]
    }
  },
  'th-07': {
    'zh-CN': {
      title: '泰式罗勒鸡肉',
      description: '曼谷的泰式罗勒鸡肉，香辣下饭，配个煎蛋，简直是人间美味！',
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
        '大蒜、辣椒切碎。',
        '热锅下油，烧热。',
        '大蒜、辣椒下锅，炒香。',
        '鸡肉碎下锅，炒散，炒熟。',
        '小碗调好蚝油、鱼露、酱油，倒进锅里炒匀。',
        '拌入罗勒叶，炒到叶子变软。',
        '另起锅煎个鸡蛋，蛋黄流心。',
        '鸡肉盛饭上，放煎蛋，撒罗勒叶、辣椒片，开吃！'
      ]
    },
    'ms': {
      title: 'Ayam Selasih Thai',
      description: 'Ayam Selasih Thai ni resipi asli dari Bangkok, Thailand. Pedas-pedas wangi, memang sedap makan dengan nasi panas!',
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
        'Cincang halus bawang putih dan cili padi Thai. Biar wangi dia keluar.',
        'Panaskan kuali sampai berasap, masukkan minyak masak.',
        'Masukkan bawang putih dan cili cincang. Kacau sampai keemasan dan wangi.',
        'Masukkan ayam cincang, pecahkan dengan spatula. Masak sampai ayam masak dan keperangan.',
        'Campurkan sos tiram, sos ikan, dan kicap soya. Tuang dalam kuali, gaul rata dengan ayam. Masak 30 saat sampai sos pekat.',
        'Gaulkan daun selasih segar. Masak sampai daun layu dan semua sebati.',
        'Sementara tu, goreng telur mata kerbau dalam kuali lain. Kuning telur biar cair sikit.',
        'Cedok ayam selasih atas nasi, letak telur goreng atasnya. Hias dengan daun selasih. Siap!'
      ]
    }
  },
  'kr-01': {
    'zh-CN': {
      title: '韩式拌饭',
      description: '首尔的韩式拌饭，五颜六色，营养丰富，拌一拌，香喷喷！',
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
        '蔬菜分别用香油蒜炒熟，牛肉也炒熟。',
        '石锅米饭上铺蔬菜、牛肉，放个鸡蛋。',
        '吃前拌上辣酱，锅底还有香脆锅巴呢！'
      ]
    },
    'ms': {
      title: 'Bibimbap',
      description: 'Bibimbap ni resipi asli dari Seoul, Korea. Nasi campur yang sihat dan sedap!',
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
        'Tumis setiap sayur berasingan dengan minyak bijan dan bawang putih. Masak daging lembu.',
        'Susun sayur dan daging atas nasi dalam mangkuk batu. Letak telur atas sekali.',
        'Gaul semua dengan gochujang sebelum makan. Kaut dari bawah untuk nasi rangup.'
      ]
    }
  },
  'kr-02': {
    'zh-CN': {
      title: '韩式泡菜汤',
      description: '首尔的泡菜汤，酸辣开胃，暖呼呼的，冬天来一碗最舒服了！',
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
        '热锅放香油。',
        '五花肉切片，下锅煎金黄。',
        '泡菜切小块。',
        '泡菜、辣酱下锅，和猪肉炒香。',
        '凤尾鱼高汤烧开，倒进锅里，放豆腐。',
        '小火炖15分钟，让味道融合。',
        '撒葱花、炒蘑菇，配米饭，趁热吃！'
      ]
    },
    'ms': {
      title: 'Kimchi Jjigae',
      description: 'Kimchi Jjigae ni resipi asli dari Seoul, Korea. Sup kimchi yang pedas dan menyelerakan!',
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
        'Panaskan kuali, masukkan minyak bijan. Biar minyak berkilau sikit.',
        'Hiris perut babi nipis-nipis. Masukkan dalam kuali, goreng sampai keemasan, 5-7 minit.',
        'Potong kimchi lama jadi kepingan kecil. Bau dia memang sedap!',
        'Bila perut babi dah masak, masukkan kimchi potong dan gochujang. Masak 5 minit lagi, kacau selalu.',
        'Didihkan stok ikan bilis. Tuang dalam kuali, masukkan tauhu dadu. Kacau perlahan.',
        'Kecilkan api, reneh bertutup 15 minit. Biar rasa sebati dan kuah pekat sikit.',
        'Hias dengan daun bawang hiris dan cendawan tumis kalau suka. Hidang panas-panas dengan nasi. Sedapnya!'
      ]
    }
  },
  'kr-03': {
    'zh-CN': {
      title: '韩式烤肉',
      description: '首尔的韩式烤肉，甜咸入味，肉质鲜嫩，包着生菜吃，一口接一口！',
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
        '酱油、梨、糖、蒜、姜打成腌料。',
        '牛肉放腌料里，腌至少一小时。',
        '烤架或烤盘预热高温。',
        '牛肉沥干，放烤架上，每面烤1-2分钟。',
        '准备葱花、米饭、辣椒酱。',
        '生菜包牛肉、米饭、葱花、辣椒酱，开吃！',
        '撒葱花、芝麻点缀。',
        '趁热吃，享受这美味的烤肉吧！'
      ]
    },
    'ms': {
      title: 'Bulgogi',
      description: 'Bulgogi ni resipi asli dari Seoul, Korea. Daging panggang yang manis-manis, memang sedap!',
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
        'Buat perapan: Kisar kicap soya, pir Asia, gula, bawang putih cincang, dan halia parut sampai licin.',
        'Letak daging lembu hiris nipis dalam pinggan. Tuang perapan, gaul rata. Perap sekurang-kurangnya 1 jam atau semalaman dalam peti sejuk.',
        'Panaskan gril atau kuali gril sampai panas sangat, dalam 400°F hingga 450°F. Sapu minyak bijan sikit.',
        'Keluarkan daging dari perapan. Panggang daging 1-2 minit setiap sisi sampai masak dan ada kesan hangus cantik.',
        'Sediakan hidangan sampingan: Hiris daun bawang nipis, sediakan nasi putih kukus, dan pes cili gochujang.',
        'Bungkus daging dalam daun salad, letak nasi, daun bawang, dan pes cili sikit. Memang padu rasa dia!',
        'Hias hidangan dengan daun bawang dan bijan panggang. Cantik dan wangi!',
        'Nikmati Bulgogi yang kompleks dan seimbang. Manis, masin, pedas, umami, semua ada. Memang terbaik!'
      ]
    }
  },
  'kr-04': {
    'zh-CN': {
      title: '杂菜',
      description: '这道韩式杂菜，粉丝Q弹，蔬菜爽脆，牛肉鲜美，拌一拌就是一碗香喷喷的家常菜！',
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
        '粉丝煮熟，过凉水沥干。',
        '热锅，香油炒牛肉至熟，盛出。',
        '原锅加香油，炒蘑菇至金黄。',
        '加胡萝卜丝，炒2分钟。',
        '放菠菜，炒软，撒点盐。',
        '大碗里，粉丝加酱油、香油、糖拌匀。',
        '加入牛肉、蘑菇、胡萝卜、菠菜拌匀。',
        '撒芝麻、辣椒丝，趁热或冷吃都好。'
      ]
    },
    'ms': {
      title: 'Japchae',
      description: 'Jom cuba Japchae ni, resipi asli dari Seoul, Korea. Sedap sangat!',
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
        'Mula-mula, masak mi suun (dangmyeon) ikut arahan bungkusan. Selalunya rendam air panas 5 minit, bilas air sejuk, lepas tu toskan.',
        'Panaskan 1 sudu minyak bijan dalam kuali. Masukkan daging lembu hiris, masak sampai perang. Angkat dan ketepikan.',
        'Guna kuali sama, tambah minyak bijan sikit kalau perlu. Masukkan cendawan hiris, masak sampai layu dan perang. Kacau selalu ya.',
        'Lepas tu, masukkan lobak merah hiris halus. Masak lagi 2 minit, kacau selalu sampai lembut sikit.',
        'Masukkan bayam segar, masak sampai layu, dalam 1 minit. Kacau dan tabur secubit garam.',
        'Dalam mangkuk besar, campurkan mi suun, kicap, dan minyak bijan. Gaul rata. Masukkan gula dan gaul lagi.',
        'Campurkan daging lembu, cendawan, lobak merah, dan bayam yang dah masak dengan mi. Gaul sebati.',
        'Hidangkan Japchae panas atau sejuk. Tabur bijan panggang dan cili hiris nipis. Sedap!'
      ]
    }
  },
  'kr-05': {
    'zh-CN': {
      title: '炒年糕',
      description: '香辣Q弹的炒年糕，甜甜辣辣，一口接一口，停不下来！',
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
        '大锅小火炖凤尾鱼高汤。',
        '加辣酱、酱油、糖，搅匀煮开。',
        '转小火，慢炖酱汁变浓稠。',
        '年糕、鱼糕洗净，鱼糕切片。',
        '年糕、鱼糕入锅，煮10分钟。',
        '看好酱汁，别糊锅，调味。',
        '撒葱花、芝麻，趁热吃。'
      ]
    },
    'ms': {
      title: 'Tteokbokki',
      description: 'Tteokbokki ni memang kegemaran ramai! Resipi asli dari Seoul, Korea, pedas-pedas manja.',
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
        'Mula-mula, renehkan stok ikan bilis dalam periuk besar. Buang buih-buih yang timbul. Biar pekat sikit, dalam 10-12 minit.',
        'Masukkan gochujang, hancurkan dengan sudu. Lepas tu masukkan kicap dan gula. Kacau sebati dan biar mendidih perlahan.',
        'Kecilkan api, biar sos mereneh. Kacau sekali-sekala sampai sos pekat dan jadi separuh, dalam 15-18 minit.',
        'Sementara sos mereneh, bilas kek beras dan kek ikan dengan air sejuk. Toskan. Kek ikan hiris nipis-nipis.',
        'Masukkan kek beras dan kek ikan dalam sos. Kacau perlahan dan masak 10 minit tanpa penutup. Kek beras akan masak dan sos pekat.',
        'Perhatikan sos, laraskan api kalau perlu. Biar rasa manis, umami, dan pedas seimbang elok.',
        'Hias dengan daun bawang hiris dan bijan panggang. Hidangkan panas-panas. Memang terangkat!'
      ]
    }
  },
  'kr-06': {
    'zh-CN': {
      title: '韩式炸鸡',
      description: '香脆可口的韩式炸鸡，外酥里嫩，配啤酒最棒了！',
      ingredients: [
        { item: '1公斤鸡块', amount: '' },
        { item: '马铃薯淀粉', amount: '' },
        { item: '酱油蒜蓉酱或韩式辣酱', amount: '' },
        { item: '啤酒面糊', amount: '' }
      ],
      instructions: [
        '鸡块切好，稍微晾干。',
        '鸡块均匀裹上土豆淀粉。',
        '油烧到165°C，炸鸡块10分钟。',
        '鸡肉捞出，沥油，静置5分钟。',
        '油温升到185°C，二次炸鸡5分钟。',
        '炸好的鸡块淋上酱汁，拌匀。',
        '装盘，配腌萝卜，来杯冰啤酒。',
        '撒芝麻、葱花，更香更好看。'
      ]
    },
    'ms': {
      title: 'Ayam Goreng Korea',
      description: 'Ayam Goreng Korea ni rangup di luar, lembut di dalam. Resipi asli dari Seoul, Korea, memang padu!',
      ingredients: [
        { item: '1kg ketulan ayam', amount: '' },
        { item: 'Tepung kentang', amount: '' },
        { item: 'Sos bawang putih kicap atau sos gochujang', amount: '' },
        { item: 'Adunan bir', amount: '' }
      ],
      instructions: [
        'Mula-mula, potong ayam 1kg kepada bahagian sama rata. Biar kering sikit.',
        'Salutkan ayam dengan tepung kentang. Tepuk sikit buang lebihan tepung.',
        'Panaskan minyak dalam kuali sampai 165°C. Goreng ayam 10 minit sampai perang keemasan muda. Jangan sumbat banyak sangat.',
        'Angkat ayam, letak atas rak dawai. Biar minyak menitis. Rehatkan ayam 5 minit.',
        'Naikkan suhu minyak ke 185°C. Goreng ayam kali kedua selama 5 minit lagi sampai rangup gila dan perang gelap.',
        'Angkat ayam, masukkan dalam mangkuk. Tuang sos bawang putih kicap atau sos gochujang. Gaul rata.',
        'Hidangkan ayam goreng Korea atas pinggan. Hias dengan lobak jeruk nipis. Sedap makan dengan bir sejuk.',
        'Akhir sekali, tabur bijan panggang dan daun bawang hiris. Cantik dan menyelerakan!'
      ]
    }
  },
  'vn-01': {
    'zh-CN': {
      title: '越南牛肉河粉',
      description: '一碗热腾腾的越南牛肉河粉，汤头浓郁，牛肉鲜嫩，暖心又暖胃！',
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
        '洋葱姜烤焦。牛骨香料慢炖6小时，撇油。',
        '高汤过滤，鱼露糖调味。煮河粉。',
        '碗里放河粉、生牛肉片。浇滚烫高汤。加配料，开吃！'
      ]
    },
    'ms': {
      title: 'Pho Bo',
      description: 'Pho Bo ni memang sedap, resipi asli dari Hanoi, Vietnam. Cuba lah rasa!',
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
        'Dalam mangkuk: letak mi, daging lembu mentah (sup panas akan masak). Tuang sup mendidih. Hidangkan dengan topping.'
      ]
    }
  },
  'vn-02': {
    'zh-CN': {
      title: '越南法式面包',
      description: '香脆的法棍，夹着烤肉、腌菜，再配上香浓的酱料，一口咬下去，满足！',
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
        '烤架预热，叉烧肉或鸡肉用鱼露、酱油、红糖调味，煎香。',
        '胡萝卜、白萝卜切丝，用米醋、糖、盐腌30分钟。',
        '法棍对半切开，烤至微黄酥脆。',
        '法棍下半部分抹肉酱、挤蛋黄酱。',
        '铺上烤肉、腌菜、黄瓜片、墨西哥辣椒。',
        '撒上新鲜香菜叶。',
        '盖上法棍上半部分，轻轻压实，趁热吃。',
        '酥脆面包，香浓酱料，酸甜腌菜，完美融合。'
      ]
    },
    'ms': {
      title: 'Banh Mi',
      description: 'Banh Mi ni memang padu, resipi asli dari Bandar Ho Chi Minh, Vietnam. Rasa dia memang tak boleh lupa!',
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
        'Panaskan gril. Perasakan daging babi Char Siu atau ayam panggang dengan sos ikan, kicap, dan gula perang. Bakar sampai karamel.',
        'Sediakan lobak merah dan daikon jeruk. Hiris julienne, rendam dalam air cuka beras, gula, garam 30 minit.',
        'Hiris baguette Perancis separuh. Bakar sampai perang sikit dan rangup.',
        'Sapu pâté dan mayonis di bahagian bawah baguette.',
        'Susun daging babi atau ayam panggang, lobak merah dan daikon jeruk, timun, dan jalapeño hiris nipis.',
        'Tabur daun ketumbar segar di atasnya.',
        'Letak bahagian atas baguette, tekan perlahan. Hidangkan segera.',
        'Nikmati gabungan rasa rangup, berkrim, masam manis, dan pedas dalam setiap gigitan!'
      ]
    }
  },
  'vn-03': {
    'zh-CN': {
      title: '越南烤肉米粉 (Bun Cha)',
      description: '越南烤肉米粉，烤肉香喷喷，米粉清爽，蘸上酸甜鱼露汁，太美味了！',
      ingredients: [
        { item: '米粉', amount: '' },
        { item: '猪肉饼', amount: '' },
        { item: '五花肉', amount: '' },
        { item: '鱼露蘸汁', amount: '' },
        { item: '新鲜香草', amount: '' },
        { item: '豆芽', amount: '' }
      ],
      instructions: [
        '米粉泡热水，沥干备用。',
        '猪肉馅加葱蒜鱼露，做成小肉饼。',
        '五花肉切薄片，盐、胡椒、糖调味。',
        '肉饼、五花肉炭火烤熟，翻面。',
        '鱼露、醋、糖、水煮成蘸汁。',
        '碗里放烤肉，浇热鱼露汁，加薄荷、罗勒、香菜、豆芽。',
        '配米粉，蘸着吃，味道好极了！'
      ]
    },
    'ms': {
      title: 'Bun Cha (Miang Daging Bakar Vietnam)',
      description: 'Bun Cha ni memang istimewa, resipi asli dari Hanoi, Vietnam. Bau daging bakar dia tu, pergh!',
      ingredients: [
        { item: 'Bihun', amount: '' },
        { item: 'Pati daging babi', amount: '' },
        { item: 'Perut babi', amount: '' },
        { item: 'Kuah celup sos ikan', amount: '' },
        { item: 'Herba hijau', amount: '' },
        { item: 'Taugeh', amount: '' }
      ],
      instructions: [
        'Mula-mula, masak bihun ikut arahan bungkusan. Rendam air panas sampai lembut, lepas tu toskan.',
        'Sediakan pati daging babi. Kisar bahu babi, campur bawang merah, bawang putih, sos ikan. Bentuk jadi pati kecil.',
        'Hiris perut babi nipis-nipis. Perasakan dengan garam, lada hitam, dan gula.',
        'Panggang pati daging babi dan perut babi atas arang sampai perang cantik dan masak. Balik-balikkan selalu.',
        'Sediakan kuah celup sos ikan. Campur sos ikan, cuka, gula, dan air dalam periuk. Didihkan, lepas tu renehkan sampai gula larut dan kuah pekat.',
        'Susun perut babi panggang dan pati daging babi dalam mangkuk. Tuang kuah celup sos ikan panas. Hias dengan herba hijau dan taugeh.',
        'Hidangkan Bun Cha segera dengan bihun di sisi. Celup mi dan herba segar dalam kuah masa makan. Sedap!'
      ]
    }
  },
  'vn-04': {
    'zh-CN': {
      title: '越南鲜虾卷 (Goi Cuon)',
      description: '清爽可口的越南鲜虾卷，包裹着新鲜蔬菜和Q弹鲜虾，蘸上花生酱，好吃不腻！',
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
        '温水泡米纸，变软即可。',
        '米纸铺平，放米粉在中间。',
        '米粉上放生菜、薄荷、罗勒、黄瓜。',
        '放2-3只熟虾，排成一排。',
        '米纸下半部分折叠，两边向内折，卷紧。',
        '重复做卷，配花生海鲜酱吃。'
      ]
    },
    'ms': {
      title: 'Goi Cuon (Popia Segar)',
      description: 'Goi Cuon ni memang segar, resipi asli dari Ho Chi Minh City, Vietnam. Sesuai sangat untuk cuaca panas!',
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
        'Sediakan kulit popia beras: rendam dalam air suam 5-10 saat setiap sisi sampai lembut.',
        'Letak kulit popia atas permukaan lembap. Letak bihun masak di tengah, tinggalkan tepi 1 inci.',
        'Susun daun salad, pudina, selasih, dan timun hiris atas bihun.',
        'Letak 2-3 ekor udang masak yang dah dikupas atas salad dan herba.',
        'Lipat bahagian bawah kulit popia ke atas inti, selitkan. Lipat sisi dan gulung jadi silinder padat.',
        'Ulang proses untuk gulungan lain. Hidangkan segera dengan sos hoisin kacang berkrim. Sedap!'
      ]
    }
  },
  'vn-05': {
    'zh-CN': {
      title: '会安高楼面 (Cao Lau)',
      description: '会安高楼面，面条劲道，叉烧入味，配上酥脆炸面包丁，口感丰富，回味无穷！',
      ingredients: [
        { item: '高楼面', amount: '' },
        { item: '叉烧肉', amount: '' },
        { item: '豆芽', amount: '' },
        { item: '炸面包丁', amount: '' },
        { item: '蔬菜', amount: '' },
        { item: '酱油汤', amount: '' }
      ],
      instructions: [
        '高楼面煮熟，过冰水。',
        '叉烧肉切薄片，备用。',
        '豆芽加盐、青柠汁拌匀。',
        '法棍切丁，炸至金黄，沥油。',
        '碗底放面条，铺上生菜、罗勒、薄荷。',
        '放叉烧肉，再放豆芽。',
        '放炸面包丁，淋热酱油汤，拌匀吃。',
        '汤汁浸润，香气四溢，美味！'
      ]
    },
    'ms': {
      title: 'Cao Lau',
      description: 'Cao Lau ni memang unik, resipi asli dari Hoi An, Vietnam. Rasa dia memang lain dari yang lain!',
      ingredients: [
        { item: 'Mi Cao Lau', amount: '' },
        { item: 'Daging babi Char Siu', amount: '' },
        { item: 'Taugeh', amount: '' },
        { item: 'Kruton', amount: '' },
        { item: 'Sayuran hijau', amount: '' },
        { item: 'Kuah kicap', amount: '' }
      ],
      instructions: [
        'Mula-mula, masak mi Cao Lau dalam air mendidih masin sampai kenyal. Terus masukkan dalam air ais.',
        'Hiris daging babi Char Siu nipis-nipis. Ketepikan.',
        'Dalam mangkuk kecil, gaulkan taugeh dengan secubit garam dan perahan jus limau nipis. Ketepikan.',
        'Seterusnya, sediakan kruton. Potong baguette kiub, goreng dalam minyak panas sampai perang keemasan. Toskan.',
        'Susun mi masak di dasar mangkuk. Letak segenggam sayuran campuran macam salad, selasih, dan pudina.',
        'Susun daging babi Char Siu hiris atas sayuran. Lepas tu letak sesudu taugeh gaul.',
        'Akhir sekali, letak kruton rangup atas hidangan. Tuang kuah kicap panas. Gaul rata sebelum hidang.',
        'Bila kuah dituang, kruton akan lembut, dan semua rasa akan sebati. Memang sedap!'
      ]
    }
  },
  'tr-01': {
    'zh-CN': {
      title: '土耳其旋转烤肉 (Doner Kebab)',
      description: '香喷喷的土耳其旋转烤肉，羊肉鲜嫩多汁，配上酸奶酱和蔬菜，卷在大饼里，太好吃了！',
      ingredients: [
        { item: '羊肩肉 (切片)', amount: '1公斤' },
        { item: '酸奶腌料', amount: '' },
        { item: '番茄', amount: '' },
        { item: '大饼', amount: '' },
        { item: '红洋葱', amount: '' },
        { item: '漆树粉', amount: '' }
      ],
      instructions: [
        '酸奶、橄榄油、孜然、辣椒粉、盐、黑胡椒拌匀做腌料。',
        '羊肉片加腌料，拌匀，冷藏过夜。',
        '烤肉架预热，羊肉片叠成圆柱形。',
        '烤羊肉，每10分钟转一次，烤30-40分钟。',
        '边烤边切薄片，收集在盘子里。',
        '番茄、红洋葱切片，芝麻酱加柠檬汁拌匀。',
        '大饼加热，放羊肉、番茄、漆树粉、芝麻酱、红洋葱，卷起来。',
        '撒漆树粉、欧芹或薄荷，趁热吃。'
      ]
    },
    'ms': {
      title: 'Doner Kebab',
      description: 'Doner Kebab ni memang kegemaran ramai, resipi asli dari Istanbul, Turki. Bau dia tu, pergh!',
      ingredients: [
        { item: 'Bahu kambing (dihiris)', amount: '1kg' },
        { item: 'Perapan yogurt', amount: '' },
        { item: 'Tomato', amount: '' },
        { item: 'Roti leper', amount: '' },
        { item: 'Bawang merah', amount: '' },
        { item: 'Sumac', amount: '' }
      ],
      instructions: [
        'Mula-mula, sediakan perapan yogurt. Campur yogurt, minyak zaitun, jintan, paprika salai, garam, lada hitam. Pukul sampai licin.',
        'Masukkan 1kg bahu kambing hiris nipis dalam perapan. Gaul rata. Tutup dan sejukkan semalaman.',
        'Keesokan harinya, panaskan pemanggang menegak. Susun hirisan kambing dalam bentuk silinder padat.',
        'Panggang kambing, putar setiap 10 minit. Panggang sampai lapisan luar perang keemasan dan rangup, dalam 30-40 minit.',
        'Masa kambing masak, hiris nipis dari lapisan luar guna pisau tajam. Kumpul atas pinggan suam.',
        'Sediakan hidangan sampingan. Hiris tomato dan bawang merah nipis. Campur tahini dengan jus lemon sampai licin.',
        'Panaskan roti leper. Isi dengan hirisan kambing, tomato, sumac, sos tahini, dan bawang merah. Hidangkan segera.',
        'Hias dengan sumac, pasli, atau pudina. Hidangkan doner kebab panas. Memang sedap!'
      ]
    }
  },
  'tr-02': {
    'zh-CN': {
      title: '果仁蜜饼 (Baklava)',
      description: '香甜酥脆的果仁蜜饼，层层酥皮，夹着开心果，淋上柠檬糖浆，每一口都是享受！',
      ingredients: [
        { item: '酥皮面团', amount: '' },
        { item: '开心果 (磨碎)', amount: '250克' },
        { item: '黄油', amount: '200克' },
        { item: '糖浆 (加柠檬)', amount: '400毫升' }
      ],
      instructions: [
        '烤箱预热180°C。',
        '酥皮面团解冻，小心展开，湿布盖好。',
        '酥皮铺烤盘，每层刷黄油。',
        '每铺5层撒开心果碎，边缘留空。',
        '继续铺酥皮，每层刷黄油，最后刷黄油。',
        '用刀切成菱形，切到底。',
        '烤45分钟至金黄酥脆，取出冷却5分钟。',
        '冷糖浆慢慢浇在热果仁蜜饼上，静置4小时再吃。'
      ]
    },
    'ms': {
      title: 'Baklava',
      description: 'Baklava ni manis-manis rangup, resipi asli dari Istanbul, Turki. Memang tak cukup sepotong!',
      ingredients: [
        { item: 'Pastri phyllo', amount: '' },
        { item: 'Pistachio (dikisar)', amount: '250g' },
        { item: 'Mentega', amount: '200g' },
        { item: 'Sirap gula (dengan lemon)', amount: '400ml' }
      ],
      instructions: [
        'Mula-mula, panaskan ketuhar hingga 180°C. Penting untuk baklava perang keemasan yang sempurna.',
        'Sediakan pastri phyllo. Cairkan ikut arahan, buka helaian perlahan-lahan. Tutup dengan kain lembap.',
        'Susun helaian phyllo dalam hidangan pembakar. Sapu setiap helaian dengan mentega cair yang banyak.',
        'Selepas setiap 5 lapisan phyllo, tabur lapisan nipis pistachio kisar. Tinggalkan tepi 1 inci tanpa kacang.',
        'Tutup dengan helaian phyllo tambahan, sapu mentega macam tadi. Akhiri dengan lapisan phyllo atas, sapu mentega.',
        'Guna pisau tajam, potong baklava jadi bentuk berlian sampai ke dasar. Cantik dan masak sekata.',
        'Bakar baklava dalam ketuhar panas 45 minit, atau sampai atas perang keemasan dan rangup. Keluarkan, sejukkan 5 minit.',
        'Akhir sekali, tuang sirap gula sejuk berperisa lemon perlahan-lahan atas baklava panas. Biar meresap. Rehatkan 4 jam sebelum hidang.'
      ]
    }
  },
  'tr-03': {
    'zh-CN': {
      title: '曼提 (Manti)',
      description: '曼提，土耳其开塞利的传统美食，皮薄馅大，一口一个香！',
      ingredients: [
        { item: '薄面团', amount: '' },
        { item: '调味羊肉馅', amount: '' },
        { item: '蒜味酸奶', amount: '' },
        { item: '黄油红椒酱', amount: '' },
        { item: '薄荷', amount: '' }
      ],
      instructions: [
        '面粉鸡蛋盐，揉成光滑面团，盖湿布醒30分钟。',
        '洋葱切碎，油锅炒香，放凉。',
        '拌入羊肉馅、孜然、辣椒粉，做成馅料。',
        '面团擀成薄片，越薄越好。',
        '切成小方块，中间放点馅。',
        '捏成金字塔形，边边压紧。',
        '开水下锅煮5分钟，浮起来就好。',
        '酸奶加蒜末、盐，拌匀冷藏。',
        '黄油融化，炒红椒丁，加薄荷碎，做成酱。'
      ]
    },
    'ms': {
      title: 'Manti',
      description: 'Resipi asli dari Kayseri, Turki ini memang sedap, cucu-cucu saya suka sangat!',
      ingredients: [
        { item: 'Doh nipis', amount: '' },
        { item: 'Daging kambing cincang berperisa', amount: '' },
        { item: 'Yogurt bawang putih', amount: '' },
        { item: 'Mentega & sos lada merah', amount: '' },
        { item: 'Pudina', amount: '' }
      ],
      instructions: [
        'Mula-mula, campurkan tepung, telur, dan garam dalam pengadun. Uli 10 minit sampai doh licin. Rehatkan 30 minit bawah kain lembap.',
        'Untuk inti, cincang sebiji bawang, tumis dengan 2 sudu minyak sampai layu. Sejukkan. Campur dengan 500g daging kambing cincang, jintan, dan paprika.',
        'Canaikan doh nipis-nipis, macam kertas, guna mesin pasta atau penggelek.',
        'Potong doh jadi segi empat kecil, 2 inci setiap satu. Letak sedikit inti kambing di tengah, jangan banyak sangat nanti pecah.',
        'Lipat segi empat jadi bentuk piramid, cantumkan semua bucu. Tekan tepi-tepi biar rapat, tak nak inti terkeluar masa masak.',
        'Masukkan manti dalam air mendidih yang dah digaramkan. Masak 5 minit sampai timbul. Angkat dan toskan.',
        'Sementara tu, campur 1 cawan yogurt kosong dengan 1 ulas bawang putih cincang dan secubit garam. Sejukkan.',
        'Untuk sos mentega, cairkan 2 sudu mentega. Masukkan lada benggala merah dadu, masak sampai lembut dan mentega keperangan. Akhir sekali, masukkan pudina cincang.'
      ]
    }
  },
  'tr-04': {
    'zh-CN': {
      title: '土耳其披萨 (Lahmacun)',
      description: '土耳其披萨，加济安泰普的家常味，薄脆饼底，肉香四溢。',
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
        '温水酵母糖，静置5分钟，等发泡。',
        '加面粉、盐、橄榄油，揉成光滑面团。',
        '羊肉馅、番茄、洋葱、甜椒、孜然、辣椒片，打成肉酱。',
        '面团醒1小时，排气后分4份。',
        '擀成薄薄的圆片，像蕾丝一样。',
        '铺上肉酱，留边，烤箱260度烤8分钟。',
        '出炉撒欧芹，挤柠檬汁，放番茄片，卷起来。',
        '趁热吃，配欧芹、柠檬、番茄，味道更棒！'
      ]
    },
    'ms': {
      title: 'Lahmacun',
      description: 'Lahmacun ni macam pizza nipis, sedap sangat! Resipi asli dari Gaziantep, Turki.',
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
        'Mula-mula, campurkan air suam, yis, dan gula dalam mangkuk besar. Biar 5 minit sampai berbuih.',
        'Masukkan tepung, garam, dan minyak zaitun. Uli 10 minit sampai doh licin dan elastik.',
        'Untuk topping, kisar daging kambing cincang, tomato, bawang, lada benggala, jintan, dan serpihan lada merah sampai jadi pes.',
        'Bila doh dah naik dua kali ganda, tumbuk dan bahagi 4. Canaikan setiap bahagian nipis-nipis, macam kertas.',
        'Sapu pes kambing rata-rata atas doh, tinggalkan sedikit tepi. Bakar dalam oven 500°F (260°C) selama 8 minit sampai garing.',
        'Keluarkan lahmacun, biar sejuk seminit. Tabur pasli, perah jus lemon, dan letak hirisan tomato. Gulung kemas-kemas.',
        'Hidangkan lahmacun panas-panas. Boleh tambah pasli, lemon, dan tomato lagi di tepi. Memang sedap!'
      ]
    }
  },
  'tr-05': {
    'zh-CN': {
      title: '伊斯坎德尔烤肉 (Iskender Kebab)',
      description: '伊斯坎德尔烤肉，布尔萨的招牌菜，肉香四溢，酱汁浓郁。',
      ingredients: [
        { item: '旋转烤肉 (羊肉)', amount: '' },
        { item: '大饼块', amount: '' },
        { item: '酸奶', amount: '' },
        { item: '番茄酱', amount: '' },
        { item: '焦化黄油', amount: '' },
        { item: '漆树粉', amount: '' }
      ],
      instructions: [
        '羊肩肉切薄片，越薄越好。',
        '热锅少油，煎羊肉片，两面金黄。',
        '大饼切块，烤箱175度烤脆。',
        '洋葱蒜末炒香，加番茄碎、橄榄油、漆树粉，炖20分钟。',
        '盘底铺大饼，放酸奶，再铺羊肉片，淋上番茄酱。',
        '黄油融化，炒成焦糖色，趁热淋在菜上。',
        '撒点漆树粉、欧芹叶，马上吃。',
        '脆饼、酸奶、羊肉、番茄酱、焦黄油，味道好极了！'
      ]
    },
    'ms': {
      title: 'Iskender Kebab',
      description: 'Iskender Kebab ni memang hidangan istimewa dari Bursa, Turki. Rasa dia memang tak boleh lupa!',
      ingredients: [
        { item: 'Daging doner (kambing)', amount: '' },
        { item: 'Kepingan roti leper', amount: '' },
        { item: 'Yogurt', amount: '' },
        { item: 'Sos tomato', amount: '' },
        { item: 'Mentega perang', amount: '' },
        { item: 'Sumac', amount: '' }
      ],
      instructions: [
        'Mula-mula, sediakan daging doner. Hiris nipis-nipis bahu kambing tu, biar lembut dan berperisa.',
        'Panaskan kuali besar, letak sikit minyak. Bakar jalur kambing sampai garing keperangan, 3-4 minit setiap sisi. Biar dalamnya masih berjus.',
        'Sementara tu, bakar roti leper dadu dalam oven 350°F sampai perang keemasan dan rangup.',
        'Untuk sos tomato, tumis bawang dadu, bawang putih, dan garam sampai layu. Masukkan tomato hancur, minyak zaitun, dan sumac. Reneh 20 minit sampai pekat.',
        'Susun roti bakar di dasar pinggan, letak sesudu yogurt. Kemudian susun daging doner, dan akhir sekali sos tomato yang kaya.',
        'Sebelum hidang, cairkan mentega tanpa garam dalam periuk kecil. Masak sampai perang keemasan dan berbuih. Tuang atas hidangan berlapis tadi.',
        'Hias dengan taburan sumac dan daun pasli segar. Hidangkan segera. Memang padu rasa dia!',
        'Gabungan roti rangup, yogurt berkrim, daging lembut, sos tomato, dan mentega perang tu memang buat kita terliur. Cubalah!'
      ]
    }
  },
  'tr-06': {
    'zh-CN': {
      title: '土耳其炒蛋 (Menemen)',
      description: '土耳其炒蛋，伊斯坦布尔的早餐最爱，简单又美味。',
      ingredients: [
        { item: '鸡蛋', amount: '3' },
        { item: '番茄', amount: '2' },
        { item: '青椒', amount: '1' },
        { item: '橄榄油', amount: '' },
        { item: '红辣椒', amount: '' },
        { item: '盐', amount: '' }
      ],
      instructions: [
        '厚底锅倒橄榄油，烧热。',
        '青椒切丝，入锅炒软。',
        '加番茄丁，炒到软烂，融合。',
        '鸡蛋打散，不要过度。',
        '菜里挖3个坑，倒入鸡蛋，别动。',
        '蛋白凝固后，轻轻搅散鸡蛋，再炒1-2分钟。',
        '撒粗盐、烟熏红辣椒粉。',
        '直接从锅里盛出，配面包蘸汁吃，香！'
      ]
    },
    'ms': {
      title: 'Menemen',
      description: 'Menemen ni sarapan kegemaran saya dari Istanbul, Turki. Senang je nak buat, tapi sedapnya lain macam!',
      ingredients: [
        { item: 'Telur', amount: '3 biji' },
        { item: 'Tomato', amount: '2 biji' },
        { item: 'Lada hijau', amount: '1 biji' },
        { item: 'Minyak zaitun', amount: '' },
        { item: 'Cili merah', amount: '' },
        { item: 'Garam', amount: '' }
      ],
      instructions: [
        'Mula-mula, panaskan kuali berat. Letak minyak zaitun banyak sikit sampai berkilau.',
        'Hiris lada hijau nipis-nipis, buang biji. Masukkan dalam kuali, tumis sampai lembut dan lutsinar.',
        'Masukkan tomato segar dadu. Masak sampai tomato hancur dan campuran jadi lembut, manis dan savuri.',
        'Sementara tu, pecahkan 3 biji telur dalam mangkuk kecil. Pukul perlahan dengan garpu, jangan terlalu kuat.',
        'Bila campuran lada dan tomato dah masak, buat 3 lubang kecil. Tuang telur perlahan-lahan. Biar telur masak sekejap sampai putih telur mengeras.',
        'Guna spatula, kacau telur perlahan-lahan ke dalam campuran lada dan tomato. Masak 1-2 minit lagi sampai telur masak ikut suka.',
        'Tabur secubit garam kasar dan sedikit cili merah kering berasap. Rasa dia memang meletup!',
        'Hidangkan Menemen terus dari kuali. Boleh hias dengan herba segar dan roti rangup di tepi. Sedap cicah!'
      ]
    }
  },
  'es-01': {
    'zh-CN': {
      title: '瓦伦西亚海鲜饭 (Paella Valenciana)',
      description: '瓦伦西亚海鲜饭，西班牙的阳光味道，鲜美可口。',
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
        '大锅热油，铺满锅底。',
        '鸡肉加盐煎金黄。',
        '虾和贻贝入锅，炒香后捞出。',
        '锅里加番茄丁、红椒粉、藏红花，炒香。',
        '加入米饭，炒2分钟，再加高汤。',
        '放回鸡肉海鲜，煮沸转小火，不搅动煮20分钟。',
        '关火，盖盖焖5分钟。',
        '撒香草，挤柠檬汁，趁热吃，太香了！'
      ]
    },
    'ms': {
      title: 'Paella Valenciana',
      description: 'Paella Valenciana ni memang hidangan istimewa dari Valencia, Sepanyol. Bau dia saja dah buat perut berkeroncong!',
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
        'Mula-mula, panaskan kuali paella besar. Letak minyak zaitun extra virgin 2-3 sudu besar.',
        'Masukkan ayam, perasakan dengan garam dan herba. Bakar sampai perang keemasan di semua sisi, 5-7 minit.',
        'Masukkan udang dan kupang, kacau perlahan. Masak 2-3 minit sampai makanan laut perang. Angkat ayam dan makanan laut, ketepikan.',
        'Dalam kuali yang sama, masukkan tomato dadu, paprika salai, dan benang saffron. Kacau dan masak 2-3 minit sampai wangi.',
        'Masukkan nasi paella, kacau rata. Bakar nasi 2 minit sampai keemasan. Tuang stok ayam atau sayur yang dah dipanaskan.',
        'Kembalikan ayam dan makanan laut ke dalam kuali. Susun cantik-cantik. Biar mendidih, kemudian kecilkan api. Masak 20 minit tanpa kacau.',
        'Angkat kuali dari api. Biar berehat 5 minit, biar rasa sebati dan nasi mengukus.',
        'Hidangkan paella panas-panas. Hias dengan herba segar dan perah jus lemon jika suka. Memang sedap sangat!'
      ]
    }
  },
  'es-02': {
    'zh-CN': {
      title: 'Tortilla Española (西班牙土豆鸡蛋饼)',
      description: '西班牙土豆鸡蛋饼，马德里的家常菜，简单美味。',
      ingredients: [
        { item: '鸡蛋', amount: '5个' },
        { item: '土豆', amount: '3个' },
        { item: '洋葱（可选）', amount: '1个' },
        { item: '橄榄油', amount: '' },
        { item: '盐', amount: '' }
      ],
      instructions: [
        '土豆去皮，切薄片。',
        '大锅小火热橄榄油，油温别太高。',
        '土豆片放入油中，小火慢煮20分钟，直到变软。',
        '洋葱切碎备用。',
        '鸡蛋打散，加盐。',
        '土豆沥油放凉，拌入鸡蛋，再加盐调味。',
        '不粘锅热油，倒入混合物，中火煎4-5分钟。',
        '翻面再煎3分钟，直到两面金黄，切片享用。'
      ]
    },
    'ms': {
      title: 'Tortilla Española (Omelet Kentang Sepanyol)',
      description: 'Tortilla Española ni macam omelet kentang, tapi versi Sepanyol. Resipi asli dari Madrid, memang sedap buat sarapan!',
      ingredients: [
        { item: 'telur', amount: '5 biji' },
        { item: 'kentang', amount: '3 biji' },
        { item: 'bawang besar (pilihan)', amount: '1 biji' },
        { item: 'Minyak zaitun', amount: '' },
        { item: 'Garam', amount: '' }
      ],
      instructions: [
        'Mula-mula, pilih 3 biji kentang elok-elok, kupas kulitnya bersih-bersih.',
        'Hiris kentang nipis-nipis, bulat-bulat. Guna mandolin lagi senang biar sama rata.',
        'Panaskan minyak zaitun banyak sikit dalam kuali besar atas api perlahan. Biar minyak berkilau.',
        'Masukkan hirisan kentang perlahan-lahan, biar tenggelam. Masak perlahan-lahan (confit) 20 minit sampai lembut dan berkrim.',
        'Sementara kentang masak, cincang sebiji bawang besar (kalau guna). Pukul 5 biji telur dalam mangkuk besar dengan secubit garam sampai rata.',
        'Bila kentang dah masak, toskan minyak lebihan. Biar sejuk sikit. Masukkan kentang perlahan-lahan ke dalam telur yang dah dipukul. Perasakan lagi kalau perlu.',
        'Panaskan kuali non-stick kecil atas api sederhana, letak sikit minyak zaitun. Tuang campuran telur dan kentang. Masak tanpa kacau sampai tepi mengeras dan bawah perang keemasan, 4-5 minit.',
        'Guna spatula, longgarkan tepi. Letak pinggan besar atas kuali, terbalikkan tortilla. Kemudian luncurkan balik ke dalam kuali. Masak 3 minit lagi sampai masak sepenuhnya. Sedia untuk dihiris dan dihidangkan!'
      ]
    }
  },
  'es-03': {
    'zh-CN': {
      title: 'Gazpacho (西班牙冷汤)',
      description: '西班牙冷汤，塞维利亚的清凉滋味，夏天喝最舒服。',
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
        '熟透番茄洗净，拍干。',
        '黄瓜、红椒去籽，切大块。',
        '大蒜切碎，别切太细。',
        '硬面包泡水软化，撕小块。',
        '所有材料加橄榄油、雪利醋，打成浓汤。',
        '尝味道，调整咸淡，冷藏至少2小时。',
        '上桌前搅匀，淋橄榄油，撒蔬菜丁，开吃！'
      ]
    },
    'ms': {
      title: 'Gazpacho (Sup Sejuk Sepanyol)',
      description: 'Gazpacho ni sup sejuk dari Seville, Sepanyol. Memang menyegarkan, sesuai untuk cuaca panas!',
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
        'Mula-mula, pilih empat biji tomato masak ranum. Basuh bersih-bersih, kemudian keringkan.',
        'Sediakan timun dan lada benggala merah. Belah dua, buang biji dan isi putih. Cincang kasar-kasar.',
        'Cincang dua ulas bawang putih halus-halus. Jangan terlalu hancur nanti pahit.',
        'Rendam roti berkerak dalam air sejuk 30 saat setiap sisi. Koyakkan kecil-kecil, campur dengan sayur-sayuran cincang.',
        'Dalam pengisar, campurkan tomato, timun, lada benggala merah, bawang putih, dan roti. Kisar sambil masukkan minyak zaitun dan cuka Sherry sampai licin dan berkrim.',
        'Rasa gazpacho, sesuaikan perasa. Tutup dan sejukkan sekurang-kurangnya 2 jam biar rasa sebati.',
        'Sebelum hidang, kacau gazpacho dan rasa lagi. Cedok ke dalam mangkuk, letak sikit minyak zaitun dan tabur sayur-sayuran dadu. Sedapnya!'
      ]
    }
  },
  'es-04': {
    'zh-CN': {
      title: 'Pulpo a la Gallega (加利西亚章鱼)',
      description: '加利西亚章鱼，西班牙的海洋风味，鲜嫩弹牙。',
      ingredients: [
        { item: '章鱼', amount: '1只' },
        { item: '土豆', amount: '' },
        { item: '辣椒粉（甜味和辣味）', amount: '' },
        { item: '海盐片', amount: '' },
        { item: '橄榄油', amount: '' }
      ],
      instructions: [
        '章鱼开水烫10秒，冰水泡，重复两次。',
        '第三次入沸水煮45分钟，直到软烂。',
        '土豆去皮，切薄片。',
        '章鱼捞出放凉，土豆片入锅煮软。',
        '土豆沥水，章鱼切块。',
        '木板上铺土豆片，放章鱼块。',
        '淋橄榄油，撒海盐、辣椒粉，放香草。',
        '马上吃，章鱼、土豆、辣椒粉，味道真好！'
      ]
    },
    'ms': {
      title: 'Pulpo a la Gallega (Sotong Kurita Gaya Galicia)',
      description: 'Pulpo a la Gallega ni sotong kurita gaya Galicia, Sepanyol. Lembut dan berperisa, memang sedap!',
      ingredients: [
        { item: 'sotong kurita', amount: '1 ekor' },
        { item: 'Kentang', amount: '' },
        { item: 'Paprika (manis & pedas)', amount: '' },
        { item: 'Garam laut kepingan', amount: '' },
        { item: 'Minyak zaitun', amount: '' }
      ],
      instructions: [
        'Mula-mula, celur sotong kurita dalam air mendidih bergaram 10-15 saat, kemudian terus masukkan dalam air ais. Ulang 2 kali lagi.',
        'Lepas celuran ketiga, rendam sotong kurita dalam air mendidih. Masak 45 minit sampai lembut. Angkat dan sejukkan.',
        'Sementara sotong kurita masak, kupas dan hiris 3-4 biji kentang besar bulat-bulat, setebal 1/4 inci.',
        'Bila sotong kurita dah diangkat, masukkan hirisan kentang dalam air mendidih yang sama. Masak 10-12 minit sampai lembut.',
        'Angkat kentang dari air, toskan. Hiris sotong kurita yang dah sejuk jadi kepingan 1/2 inci.',
        'Susun hirisan kentang di atas papan kayu. Letak sotong kurita yang dah dihiris di atas kentang.',
        'Taburkan minyak zaitun extra-virgin, garam laut kepingan, dan campuran paprika manis dan pedas. Hias dengan herba segar.',
        'Hidangkan Pulpo a la Gallega segera. Sotong kurita lembut, kentang berkrim, dengan rasa paprika dan garam laut. Memang padu!'
      ]
    }
  },
  'es-05': {
    'zh-CN': {
      title: 'Churros (西班牙油条)',
      description: '西班牙油条，马德里的甜蜜小吃，配热巧克力，绝配！',
      ingredients: [
        { item: '泡芙面团', amount: '' },
        { item: '肉桂糖', amount: '' },
        { item: '浓稠热巧克力（吉事果巧克力）', amount: '' },
        { item: '食用油', amount: '' }
      ],
      instructions: [
        '牛奶、黄油、海盐，煮沸，黄油融化。',
        '加面粉，快速搅拌成光滑面团，离锅壁。',
        '面团入搅拌机，分次加鸡蛋，搅匀。',
        '面团装裱花袋，挤10-12厘米长条。',
        '油锅烧到180度，挤入油条，炸金黄。',
        '捞出油条，滚上糖和肉桂粉。',
        '配浓稠热巧克力，蘸着吃，香甜酥脆！'
      ]
    },
    'ms': {
      title: 'Churros',
      description: 'Churros ni memang kegemaran ramai, dari Madrid, Sepanyol. Sedap cicah dengan coklat panas!',
      ingredients: [
        { item: 'Doh gaya choux', amount: '' },
        { item: 'Gula kayu manis', amount: '' },
        { item: 'Coklat panas pekat (coklat churro)', amount: '' },
        { item: 'Minyak masak', amount: '' }
      ],
      instructions: [
        'Mula-mula, campurkan susu penuh krim, mentega tanpa garam, dan garam laut dalam periuk. Didihkan atas api sederhana sampai mentega cair.',
        'Masukkan tepung \'00\' ke dalam periuk. Masak sambil kacau kuat 2-3 minit sampai jadi bebola licin dan berkilat.',
        'Pindahkan doh ke pengadun. Pukul masuk 4 biji telur besar, satu per satu, sampai doh licin dan boleh dipaip.',
        'Pindahkan doh yang masih suam ke beg paip dengan hujung bintang besar. Paip jalur doh 10-12cm atas kertas parchment.',
        'Panaskan minyak dalam kuali goreng dalam sampai 180°C. Paip doh ke dalam minyak panas. Goreng 3-4 churros pada satu masa sampai perang keemasan dan mengembang, 2-3 minit setiap sisi.',
        'Angkat churros yang dah digoreng. Segera gulingkan dalam campuran gula pasir dan serbuk kayu manis sampai rata.',
        'Hidangkan 2-3 churros atas pinggan. Cicah dengan coklat panas Sepanyol yang pekat dan kaya. Buat dengan panaskan susu, serbuk koko gelap, dan gula sampai licin dan panas.'
      ]
    }
  },
  'es-06': {
    'zh-CN': {
      title: 'Jamon Iberico with Pan con Tomate (伊比利亚火腿配番茄面包)',
      description: '伊比利亚火腿配番茄面包，加泰罗尼亚的经典小吃，简单又美味。',
      ingredients: [
        { item: '伊比利亚火腿片', amount: '' },
        { item: '酵母面包', amount: '' },
        { item: '熟透的番茄', amount: '' },
        { item: '大蒜', amount: '' },
        { item: '橄榄油', amount: '' }
      ],
      instructions: [
        '酵母面包切厚片。',
        '烤箱175度烤5-7分钟，直到金黄。',
        '熟番茄对半切开，挤掉多余汁水。',
        '面包出炉放凉，用蒜瓣擦表面。',
        '番茄半个擦面包，让面包吸收番茄汁。',
        '淋上橄榄油。',
        '铺上薄薄的伊比利亚火腿片，撒海盐，开吃！'
      ]
    },
    'ms': {
      title: 'Jamon Iberico dengan Pan con Tomate (Ham Iberico dengan Roti Tomato)',
      description: 'Jamon Iberico dengan Pan con Tomate ni hidangan ringkas tapi mewah dari Catalonia, Sepanyol. Memang sedap sangat!',
      ingredients: [
        { item: 'Hirisan ham Iberico', amount: '' },
        { item: 'Roti sourdough', amount: '' },
        { item: 'Tomato masak', amount: '' },
        { item: 'Bawang putih', amount: '' },
        { item: 'Minyak zaitun', amount: '' }
      ],
      instructions: [
        'Mula-mula, pilih roti sourdough yang sedap, sebaiknya roti semalam. Hiris bulat-bulat setebal 1/2 inci.',
        'Bakar hirisan roti dalam oven 350°F (175°C) selama 5-7 minit sampai perang keemasan dan lembut di dalam.',
        'Sementara roti dibakar, belah dua tomato masak. Perah perlahan-lahan biji dan jus lebihan.',
        'Bila roti dah bakar, keluarkan. Biar sejuk seminit dua. Gosok ulas bawang putih yang dah dipotong atas permukaan setiap hirisan.',
        'Lepas bawang putih, ambil separuh tomato. Gosok perlahan-lahan ke dalam roti sampai roti serap pulpa dan jus tomato.',
        'Taburkan minyak zaitun extra-virgin berkualiti tinggi atas roti. Biar rasa kaya dan pedas sebati dengan tomato dan bawang putih.',
        'Akhir sekali, letak hirisan nipis Jamón Ibérico atas roti. Tabur secubit garam laut kepingan untuk naikkan rasa. Memang sedap!'
      ]
    }
  },
  'gr-01': {
    'zh-CN': {
      title: '希腊肉酱茄子千层派 (Moussaka)',
      description: '这道希腊肉酱茄子千层派，香浓又满足，保证让你吃得心满意足！',
      ingredients: [
        { item: '茄子', amount: '' },
        { item: '羊肉馅', amount: '' },
        { item: '番茄酱', amount: '' },
        { item: '肉桂', amount: '' },
        { item: '白酱 (Béchamel sauce)', amount: '' },
        { item: '奶酪', amount: '' }
      ],
      instructions: [
        '茄子切片，撒盐腌30分钟。',
        '橄榄油煎茄子片，两面金黄。',
        '炒羊肉馅，加洋葱、蒜、肉桂。',
        '加番茄、红酒、高汤，小火炖20分钟。',
        '烤盘铺茄子，铺肉酱，再铺茄子。',
        '融化黄油，加面粉，慢慢加牛奶煮稠。',
        '白酱铺在茄子上，撒帕尔马干酪。',
        '烤箱180°C烤45分钟，取出静置30分钟。'
      ]
    },
    'ms': {
      title: 'Moussaka',
      description: 'Moussaka ni, resipi asli dari Athens, Greece. Memang sedap sangat!',
      ingredients: [
        { item: 'Terung', amount: '' },
        { item: 'Daging kambing cincang', amount: '' },
        { item: 'Sos tomato', amount: '' },
        { item: 'Kayu manis', amount: '' },
        { item: 'Sos Béchamel', amount: '' },
        { item: 'Keju', amount: '' }
      ],
      instructions: [
        'Mula-mula, hiris terung tebal sikit, tabur garam banyak-banyak. Biar dia berpeluh 30 minit.',
        'Panaskan minyak zaitun dalam kuali. Goreng terung sampai perang keemasan, 3-4 minit setiap sisi.',
        'Dalam periuk lain, masak daging kambing cincang sampai tak merah lagi. Masukkan bawang, masak sampai layu. Lepas tu, bawang putih dan kayu manis, masak seminit.',
        'Masukkan tomato hancur, wain merah, dan stok kambing. Kacau sebati. Didihkan, lepas tu reneh 20 minit biar pekat.',
        'Susun terung goreng kat dasar loyang. Lapisan sos kambing, lepas tu terung lagi. Ulang sampai habis.',
        'Cairkan mentega dalam periuk. Masukkan tepung, kacau jadi roux. Tuang susu sikit-sikit, kacau sampai pekat. Angkat, masukkan keju Parmesan.',
        'Tuang sos béchamel atas terung, ratakan. Tabur lagi keju Parmesan.',
        'Bakar dalam oven 180°C selama 45 minit sampai perang. Biar sejuk 30 minit sebelum potong dan hidang.'
      ]
    }
  },
  'gr-02': {
    'zh-CN': {
      title: '希腊菠菜派 (Spanakopita)',
      description: '香脆的希腊菠菜派，酥皮包裹着浓郁的菠菜羊奶酪馅，一口咬下去，满是幸福！',
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
        '菠菜洗净，洋葱炒香。',
        '加入菠菜炒软，加盐调味。',
        '菠菜挤干水分，越干越好。',
        '菠菜、羊奶酪、鸡蛋、莳萝拌匀。',
        '烤盘铺酥皮，刷橄榄油。',
        '铺一半酥皮，加菠菜馅，再铺酥皮。',
        '酥皮划菱形，刷蛋液。',
        '烤箱180°C烤45分钟，金黄酥脆。'
      ]
    },
    'ms': {
      title: 'Spanakopita',
      description: 'Spanakopita ni, resipi asli dari Athens, Greece. Sedap sangat, kena cuba!',
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
        'Basuh bayam bersih-bersih. Tumis bawang dalam minyak zaitun sampai wangi.',
        'Masukkan bayam, masak sampai layu. Perasakan garam, biar sejuk sikit.',
        'Perah bayam tu sampai kering, buang air lebihan.',
        'Dalam mangkuk besar, campur bayam, keju feta, telur, dan dill. Gaul sebati.',
        'Susun lapisan phyllo yang dah disapu minyak zaitun dalam loyang. Pusing loyang setiap beberapa lapisan.',
        'Bila dah separuh phyllo, letak inti bayam. Tutup dengan phyllo lagi, sapu minyak zaitun.',
        'Guna pisau tajam, toreh atas phyllo bentuk berlian. Sapu telur atasnya.',
        'Bakar dalam oven 180°C selama 45 minit sampai perang keemasan dan rangup.'
      ]
    }
  },
  'gr-03': {
    'zh-CN': {
      title: '希腊酸奶黄瓜酱 (Tzatziki)',
      description: '清爽的希腊酸奶黄瓜酱，配上皮塔饼，是夏日里最棒的开胃小吃！',
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
        '黄瓜擦丝。',
        '黄瓜丝挤干水分。',
        '蒜瓣捣成泥。',
        '酸奶、黄瓜、蒜泥、莳萝拌匀。',
        '淋橄榄油、柠檬汁，轻轻拌匀。',
        '加海盐调味，再拌匀。',
        '盖保鲜膜，冷藏30分钟。',
        '配皮塔饼，撒莳萝，淋橄榄油。'
      ]
    },
    'ms': {
      title: 'Tzatziki',
      description: 'Tzatziki ni, resipi asli dari Athens, Greece. Memang menyegarkan!',
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
        'Parut timun guna parutan besar.',
        'Perah timun parut sampai kering, buang air lebihan.',
        'Cincang bawang putih, lepas tu lenyekkan jadi pes.',
        'Dalam mangkuk sejuk, campur yogurt, timun, pes bawang putih, dan dill cincang.',
        'Titiskan minyak zaitun dan jus lemon. Gaul perlahan-lahan.',
        'Perasakan dengan garam laut. Gaul lagi.',
        'Tutup mangkuk, sejukkan 30 minit biar rasa sebati.',
        'Sebelum hidang, kacau lagi. Hias dengan minyak zaitun dan dill. Makan dengan roti pita panas.'
      ]
    }
  },
  'gr-04': {
    'zh-CN': {
      title: '希腊烤肉串 (Souvlaki)',
      description: '香喷喷的希腊烤肉串，配上清爽的酸奶黄瓜酱，好吃到停不下来！',
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
        '柠檬汁、牛至、橄榄油调腌料。',
        '猪肉块腌1-2小时。',
        '烤架预热，猪肉串起来。',
        '烤串翻面，烤至金黄熟透。',
        '皮塔饼加热，准备配料。',
        '猪肉取出静置，组装烤肉串。',
        '挤柠檬汁，撒盐，趁热享用。',
        '欣赏摆盘，美味又好看！'
      ]
    },
    'ms': {
      title: 'Souvlaki',
      description: 'Souvlaki ni, resipi asli dari Thessaloniki, Greece. Memang sedap sangat!',
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
        'Sediakan perapan: campur jus lemon, oregano kering, dan minyak zaitun dalam mangkuk besar.',
        'Masukkan kiub daging babi, gaul rata. Perap 1-2 jam dalam peti sejuk.',
        'Panaskan gril atau kuali gril. Cucuk daging babi ke lidi, jangan rapat sangat.',
        'Panggang lidi atas api, pusing selalu. Masak sampai daging perang dan masak sepenuhnya, 8-10 minit setiap sisi.',
        'Panaskan roti pita dalam oven. Sediakan sos tzatziki, hirisan tomato, dan bawang merah.',
        'Bila daging dah masak, angkat dan biar rehat sekejap. Letak daging dalam pita hangat.',
        'Masukkan tzatziki, tomato, dan bawang. Perah jus lemon dan tabur garam. Hidang segera dengan kentang goreng.',
        'Nikmati souvlaki yang cantik dan sedap ni!'
      ]
    }
  },
  'gr-05': {
    'zh-CN': {
      title: '希腊果仁蜜饼 (Baklava)',
      description: '香甜酥脆的希腊果仁蜜饼，层层叠叠的酥皮和坚果，每一口都是甜蜜的享受！',
      ingredients: [
        { item: '酥皮面团 (Phyllo)', amount: '' },
        { item: '核桃', amount: '' },
        { item: '蜂蜜糖浆', amount: '' },
        { item: '黄油', amount: '' },
        { item: '肉桂', amount: '' },
        { item: '丁香', amount: '' }
      ],
      instructions: [
        '烤箱预热180°C。',
        '酥皮铺烤盘，每层刷黄油。',
        '核桃、肉桂、丁香拌匀，铺在酥皮上。',
        '继续铺酥皮和坚果，最后铺酥皮。',
        '切菱形块，烤45分钟至金黄。',
        '蜂蜜、水、肉桂、丁香煮糖浆。',
        '果仁蜜饼冷却，淋上温热糖浆，浸泡4小时。',
        '恢复室温，撒肉桂粉，配丁香装饰。'
      ]
    },
    'ms': {
      title: 'Baklava (Greek)',
      description: 'Baklava ni, resipi asli dari Athens, Greece. Manis dan rangup, memang sedap!',
      ingredients: [
        { item: 'Phyllo', amount: '' },
        { item: 'Kacang walnut', amount: '' },
        { item: 'Sirap madu', amount: '' },
        { item: 'Mentega', amount: '' },
        { item: 'Kayu manis', amount: '' },
        { item: 'Cengkih', amount: '' }
      ],
      instructions: [
        'Panaskan oven 180°C.',
        'Buka phyllo, tutup dengan kain lembap. Susun phyllo dalam loyang, sapu mentega cair setiap lapisan.',
        'Campur walnut cincang dengan kayu manis dan cengkih. Tabur atas phyllo yang dah disapu mentega.',
        'Terus susun phyllo dan kacang, habiskan dengan lapisan phyllo. Potong baklava bentuk berlian sampai dasar loyang.',
        'Bakar dalam oven 45 minit sampai atas perang keemasan. Angkat, biar sejuk sikit.',
        'Buat sirap madu: campur madu, air, kayu manis, dan cengkih dalam periuk. Didihkan, lepas tu reneh 10-15 minit sampai pekat.',
        'Bila baklava dah sejuk 10-15 minit, tuang sirap madu hangat rata-rata. Biar meresap 4 jam atau semalaman.',
        'Hidang baklava pada suhu bilik. Hias dengan kayu manis dan cengkih jika suka.'
      ]
    }
  }
};
