import { Product, Coupon } from '../types';

export const AVAILABLE_COUPONS: Coupon[] = [
  {
    code: 'FESTIVE20',
    discountPercentage: 20,
    minOrderValue: 2499,
    description: 'Get 20% OFF on orders above ₹2,499 (Max discount ₹1,000)'
  },
  {
    code: 'FIRST10',
    discountPercentage: 10,
    minOrderValue: 999,
    description: 'Flat 10% OFF on your first purchase'
  },
  {
    code: 'VYUGAM500',
    discountAmount: 500,
    minOrderValue: 2999,
    description: 'Flat ₹500 instant discount on orders above ₹2,999'
  }
];

export const PRODUCTS_DATA: Product[] = [
  // --- WOMEN'S ETHNIC & WESTERN ---
  {
    id: 'prod-w-1',
    name: 'Gulmohar Handblock Anarkali Kurta Set',
    subtitle: 'With Dupatta & Straight Pants in Pure Mulmul Cotton',
    gender: 'women',
    category: 'kurta-sets',
    categoryLabel: 'Kurta Sets',
    price: 2899,
    originalPrice: 4499,
    discountPercentage: 35,
    images: [
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Handcrafted by artisan weavers of Sanganer (Jaipur), this breathable mulmul cotton Anarkali set features delicate floral motifs, gota patti detailing on the neckline, and a lightweight kota doria dupatta.',
    fabric: 'Mulmul',
    occasion: 'Festive',
    color: 'Crimson Rose',
    colorHex: '#8E1616',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    inStock: true,
    stockCount: 14,
    rating: 4.8,
    reviewCount: 142,
    isBestseller: true,
    isFestiveSpecial: true,
    craftsmanship: 'Traditional Sanganeri Hand Block Printing & Gota Patti Lace Work',
    careInstructions: [
      'Hand wash separately in cold water with mild liquid detergent',
      'Do not soak for more than 5 minutes',
      'Dry in shade inside-out',
      'Warm iron on reverse side'
    ],
    styleTips: 'Pair with antique jhumkas, a sleek bindi, and embellished mojaris for a quintessential festive look.',
    reviews: [
      {
        id: 'rev-w1-1',
        userName: 'Priya Sharma',
        userCity: 'Jaipur',
        rating: 5,
        date: '24 Aug 2026',
        title: 'Breathtaking quality & breathable fabric!',
        comment: 'Wore this for Raksha Bandhan. The mulmul fabric is featherlight and so soft for humid weather. Got so many compliments!',
        verifiedPurchase: true
      },
      {
        id: 'rev-w1-2',
        userName: 'Ananya Deshmukh',
        userCity: 'Pune',
        rating: 5,
        date: '18 Aug 2026',
        title: 'Perfect Indian standard fit',
        comment: 'Size M fits like a dream according to the size chart. The dupatta has beautiful border work.',
        verifiedPurchase: true
      }
    ]
  },
  {
    id: 'prod-w-2',
    name: 'Varanasi Royal Katan Banarasi Silk Saree',
    subtitle: 'Woven with Antique Gold Zari & Floral Jaal',
    gender: 'women',
    category: 'sarees',
    categoryLabel: 'Sarees',
    price: 5999,
    originalPrice: 9999,
    discountPercentage: 40,
    images: [
      'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'An heirloom piece handwoven on traditional Banaras pit looms. Features intricate kadwa floral jaal in rich gold zari on luscious ruby red silk, finished with an ornate meenakari pallu.',
    fabric: 'Banarasi Silk',
    occasion: 'Wedding',
    color: 'Deep Ruby Red',
    colorHex: '#800020',
    sizes: ['Free Size (Includes Unstitched Blouse 0.8m)'],
    inStock: true,
    stockCount: 8,
    rating: 4.9,
    reviewCount: 98,
    isBestseller: true,
    isFestiveSpecial: true,
    craftsmanship: 'Authentic Handloom Banarasi Weave with Certified Silk Mark',
    careInstructions: [
      'Strictly Dry Clean Only',
      'Wrap in pure muslin cloth for long-term storage',
      'Avoid spraying perfume directly onto the zari'
    ],
    styleTips: 'Style with a temple jewelry choker, fresh gajra in hair, and a classic potli bag.',
    reviews: [
      {
        id: 'rev-w2-1',
        userName: 'Meera Nambiar',
        userCity: 'Bengaluru',
        rating: 5,
        date: '12 Aug 2026',
        title: 'Royal drape and rich zari luster',
        comment: 'Ordered this for my cousin’s wedding. The silk weight is substantial yet drapes gracefully without stiffness.',
        verifiedPurchase: true
      }
    ]
  },
  {
    id: 'prod-w-3',
    name: 'Noor-E-Chanderi Embroidered Lehenga Set',
    subtitle: 'Hand-Embroidered Zardozi & Resham with Organza Dupatta',
    gender: 'women',
    category: 'lehengas',
    categoryLabel: 'Lehengas',
    price: 8499,
    originalPrice: 13999,
    discountPercentage: 39,
    images: [
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Graceful festive lehenga crafted in Chanderi silk with delicate pastel resham embroidery, sequin dusting, and a cascading scallop-edged organza dupatta. Comes with a semi-stitched flared skirt with double can-can lining.',
    fabric: 'Chanderi Silk',
    occasion: 'Wedding',
    color: 'Pastel Sage & Gold',
    colorHex: '#9CAF88',
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true,
    stockCount: 6,
    rating: 4.9,
    reviewCount: 64,
    isNewArrival: true,
    isFestiveSpecial: true,
    craftsmanship: 'Zardozi Handwork with Micro-Sequin Embellishments',
    careInstructions: [
      'Professional Dry Clean Only',
      'Do not bleach or tumble dry',
      'Steam iron only'
    ],
    styleTips: 'Pair with uncut polki jewelry and soft dewy makeup for sangeet or reception nights.',
    reviews: [
      {
        id: 'rev-w3-1',
        userName: 'Kritika Sen',
        userCity: 'Kolkata',
        rating: 5,
        date: '28 Jul 2026',
        title: 'Unbelievable detail for this price!',
        comment: 'Designer lehengas in market cost ₹25k+. This quality, can-can volume, and embroidery finesse is spectacular.',
        verifiedPurchase: true
      }
    ]
  },
  {
    id: 'prod-w-4',
    name: 'Indira Linen Trench Midi Dress',
    subtitle: 'Modern Minimalist Tiered Dress with Waist Tie',
    gender: 'women',
    category: 'women-dresses',
    categoryLabel: 'Dresses',
    price: 1999,
    originalPrice: 3299,
    discountPercentage: 40,
    images: [
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Crafted from 100% breathable organic Indian flax linen. Features functional tortoiseshell buttons, deep side pockets, and an adjustable waist sash.',
    fabric: 'Pure Linen',
    occasion: 'Workwear',
    color: 'Warm Terracotta',
    colorHex: '#C86D51',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    inStock: true,
    stockCount: 22,
    rating: 4.7,
    reviewCount: 89,
    isBestseller: false,
    craftsmanship: 'Tailored Single-Needle Stitching with Reinforced Pocket Seams',
    careInstructions: [
      'Machine wash cold on gentle cycle',
      'Wash with similar colors',
      'Iron while slightly damp for crisp look'
    ],
    styleTips: 'Ideal for upscale work meetings or Sunday brunches with tan block heels.',
    reviews: [
      {
        id: 'rev-w4-1',
        userName: 'Rhea Kapoor',
        userCity: 'Mumbai',
        rating: 5,
        date: '05 Aug 2026',
        title: 'Pockets are huge and fabric is so breezy!',
        comment: 'Perfect for Mumbai humidity. Doesn’t shrink after washing.',
        verifiedPurchase: true
      }
    ]
  },
  {
    id: 'prod-w-5',
    name: 'Udaipur Floral Georgette Co-ord Set',
    subtitle: 'Peplum Top with Flared Palazzo Pants',
    gender: 'women',
    category: 'co-ords',
    categoryLabel: 'Co-ord Sets',
    price: 2299,
    originalPrice: 3499,
    discountPercentage: 34,
    images: [
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Effortless fusion elegance in feather-soft poly-georgette with a vintage floral print, flared sleeves, and elasticated high-waist palazzo trousers.',
    fabric: 'Georgette',
    occasion: 'Casual',
    color: 'Midnight Indigo',
    colorHex: '#1F2E54',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    inStock: true,
    stockCount: 18,
    rating: 4.6,
    reviewCount: 53,
    isNewArrival: true,
    careInstructions: [
      'Gentle machine wash inside laundry bag',
      'No bleach',
      'Low heat iron'
    ],
    styleTips: 'Style with silver oxidised earrings and Kolhapuri flats.',
    reviews: []
  },

  // --- MEN'S ETHNIC & CASUAL/FORMAL ---
  {
    id: 'prod-m-1',
    name: 'Maharaja Chanderi Silk Kurta & Churidar Set',
    subtitle: 'Tailored Mandarin Collar with Threadwork & Contrast Buttons',
    gender: 'men',
    category: 'men-kurtas',
    categoryLabel: 'Kurta Sets',
    price: 2799,
    originalPrice: 4299,
    discountPercentage: 35,
    images: [
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Exemplifying timeless Indian regal aesthetics, this knee-length Chanderi silk kurta features self-woven micro patterns, concealed placket, side slits, and comes paired with a breathable cotton-blend churidar.',
    fabric: 'Chanderi Silk',
    occasion: 'Festive',
    color: 'Royal Mustard Gold',
    colorHex: '#D4AF37',
    sizes: ['S (38)', 'M (40)', 'L (42)', 'XL (44)', 'XXL (46)'],
    inStock: true,
    stockCount: 19,
    rating: 4.8,
    reviewCount: 112,
    isBestseller: true,
    isFestiveSpecial: true,
    craftsmanship: 'Precision Tailored with Soft Cotton Inner Lining for zero itchiness',
    careInstructions: [
      'Dry Clean Recommended for first 2 washes',
      'Gentle hand wash subsequently',
      'Iron inside-out at moderate temperature'
    ],
    styleTips: 'Pair with leather Peshawari juttis and a metallic dial watch for puja ceremonies or wedding receptions.',
    reviews: [
      {
        id: 'rev-m1-1',
        userName: 'Vikramaditya Roy',
        userCity: 'New Delhi',
        rating: 5,
        date: '20 Aug 2026',
        title: 'Superb regal finish and comfortable lining',
        comment: 'Usually silk kurtas feel itchy inside, but this has an ultra soft cotton lining. The collar stays crisp. Highly recommended!',
        verifiedPurchase: true
      },
      {
        id: 'rev-m1-2',
        userName: 'Karthik Rao',
        userCity: 'Hyderabad',
        rating: 5,
        date: '10 Aug 2026',
        title: 'Spot on size 40 (M)',
        comment: 'Great shoulder fit, decent length for 5’10 height. Quality is on par with premium brands like Manyavar.',
        verifiedPurchase: true
      }
    ]
  },
  {
    id: 'prod-m-2',
    name: 'Jodhpur Bandhgala Nehru Jacket',
    subtitle: 'Woven Jacquard Sleeveless Waistcoat with Welt Pockets',
    gender: 'men',
    category: 'nehru-jackets',
    categoryLabel: 'Nehru Jackets',
    price: 2199,
    originalPrice: 3499,
    discountPercentage: 37,
    images: [
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'A stately Nehru jacket tailored in rich brocade jacquard with embossed metal buttons, breast pocket for a pocket square, and structured slim silhouette.',
    fabric: 'Raw Silk',
    occasion: 'Festive',
    color: 'Emerald & Gold Weave',
    colorHex: '#0B6623',
    sizes: ['S (38)', 'M (40)', 'L (42)', 'XL (44)', 'XXL (46)'],
    inStock: true,
    stockCount: 15,
    rating: 4.9,
    reviewCount: 76,
    isBestseller: true,
    isFestiveSpecial: true,
    craftsmanship: 'Structured Interlining with Brass Crest Buttons',
    careInstructions: [
      'Dry clean only',
      'Store on wide hanger with garment bag'
    ],
    styleTips: 'Layer over a solid black, white, or beige kurta or formal shirt.',
    reviews: [
      {
        id: 'rev-m2-1',
        userName: 'Aman Singhania',
        userCity: 'Chandigarh',
        rating: 5,
        date: '15 Aug 2026',
        title: 'Dapper and high-end feel',
        comment: 'The emerald color is deep and rich. Buttons feel heavy and premium.',
        verifiedPurchase: true
      }
    ]
  },
  {
    id: 'prod-m-3',
    name: 'Vedic Pure Linen Mandarin Shirt',
    subtitle: '100% Breathable Organic Khadi Linen Casual Shirt',
    gender: 'men',
    category: 'linen-shirts',
    categoryLabel: 'Linen Shirts',
    price: 1599,
    originalPrice: 2499,
    discountPercentage: 36,
    images: [
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Woven from handspun organic Indian flax, this breathable shirt keeps you cool all day. Features curved hem, roll-up sleeve tabs, and genuine mother-of-pearl buttons.',
    fabric: 'Pure Linen',
    occasion: 'Casual',
    color: 'Ivory Sand',
    colorHex: '#E5DCC5',
    sizes: ['S (38)', 'M (40)', 'L (42)', 'XL (44)', 'XXL (46)'],
    inStock: true,
    stockCount: 30,
    rating: 4.7,
    reviewCount: 138,
    isBestseller: true,
    craftsmanship: 'Handcrafted Khadi Flax Weave with Pre-washed Soft Handfeel',
    careInstructions: [
      'Normal machine wash in cold water',
      'Do not wring vigorously',
      'Medium hot steam iron'
    ],
    styleTips: 'Pair with tailored linen trousers or casual chinos with loafers for an effortless summer aesthetic.',
    reviews: [
      {
        id: 'rev-m3-1',
        userName: 'Siddharth Iyer',
        userCity: 'Chennai',
        rating: 5,
        date: '02 Aug 2026',
        title: 'Best linen shirt under ₹2000 in India',
        comment: 'So cool and lightweight for humid Chennai weather. Softens up even more after the first wash.',
        verifiedPurchase: true
      }
    ]
  },
  {
    id: 'prod-m-4',
    name: 'Imperial Velvet Embroidered Sherwani',
    subtitle: 'Hand-Embroidery with Dupatta & Churidar',
    gender: 'men',
    category: 'sherwanis',
    categoryLabel: 'Sherwanis',
    price: 9999,
    originalPrice: 16999,
    discountPercentage: 41,
    images: [
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Crafted for grooms and wedding celebrations, featuring micro-bead zardozi embroidery on plush midnight blue velvet with a royal stole and matching tapered churidar.',
    fabric: 'Raw Silk',
    occasion: 'Wedding',
    color: 'Midnight Navy & Gold',
    colorHex: '#1B263B',
    sizes: ['S (38)', 'M (40)', 'L (42)', 'XL (44)'],
    inStock: true,
    stockCount: 5,
    rating: 5.0,
    reviewCount: 42,
    isNewArrival: true,
    isFestiveSpecial: true,
    craftsmanship: 'Artisan Zari Threadwork with Hand-Set Crystal Accents',
    careInstructions: [
      'Specialist Dry Clean Only',
      'Keep in breathable non-woven garment cover'
    ],
    styleTips: 'Pair with a matching safa (turban), kalgi, and handcrafted velvet mojari shoes.',
    reviews: [
      {
        id: 'rev-m4-1',
        userName: 'Rohan Mehra',
        userCity: 'Lucknow',
        rating: 5,
        date: '01 Aug 2026',
        title: 'Grand and regal for my reception',
        comment: 'Fitting was spot-on. Looks like a bespoke ₹40,000 designer piece.',
        verifiedPurchase: true
      }
    ]
  },
  {
    id: 'prod-m-5',
    name: 'Gurugram Tailored Stretch Chino Trousers',
    subtitle: 'Smart Casual Trousers with Flex-Waistband',
    gender: 'men',
    category: 'trousers-chinos',
    categoryLabel: 'Trousers & Chinos',
    price: 1499,
    originalPrice: 2299,
    discountPercentage: 35,
    images: [
      'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Crafted from 98% compact cotton with 2% elastane for effortless comfort during desk-to-dinner transitions. Non-iron finish with reinforced crotch gusset.',
    fabric: 'Pure Cotton',
    occasion: 'Workwear',
    color: 'Classic Khaki Beige',
    colorHex: '#C3B091',
    sizes: ['30', '32', '34', '36', '38'],
    inStock: true,
    stockCount: 25,
    rating: 4.7,
    reviewCount: 91,
    isBestseller: false,
    careInstructions: [
      'Machine wash warm',
      'Tumble dry low',
      'Warm iron'
    ],
    styleTips: 'Pair with our Vedic linen shirts or formal polos.',
    reviews: []
  },
  {
    id: 'prod-w-6',
    name: 'Kashmiri Tilla Embroidered Kurti',
    subtitle: 'Fine Chanderi Silk Tunic with Metallic Thread Needlework',
    gender: 'women',
    category: 'tops-tunics',
    categoryLabel: 'Kurtis & Tops',
    price: 1899,
    originalPrice: 2899,
    discountPercentage: 34,
    images: [
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'An elegant straight kurti adorned with classic Kashmiri Tilla embroidery across the yoke and sleeve cuffs. Features side slits and a keyhole neckline.',
    fabric: 'Chanderi Silk',
    occasion: 'Workwear',
    color: 'Ivory Pearl & Silver',
    colorHex: '#F5F5F0',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    inStock: true,
    stockCount: 16,
    rating: 4.8,
    reviewCount: 45,
    isFestiveSpecial: false,
    careInstructions: [
      'Gentle hand wash in cold water with liquid soap',
      'Do not brush on embroidery'
    ],
    reviews: []
  },
  // --- EVERYDAY & FESTIVE EDIT: 10 styles from Rs 399 to Rs 2,899 ---
  {
    id: 'prod-w-7',
    name: 'Ilkal Handloom Cotton Saree',
    subtitle: 'With Traditional Zari Border & Running Blouse Piece',
    gender: 'women',
    category: 'sarees',
    categoryLabel: 'Banarasi Sarees',
    price: 1299,
    originalPrice: 2199,
    discountPercentage: 41,
    images: [
      'https://images.unsplash.com/photo-1609748340041-f5d61e061ebc?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1618901185975-d59f7091bcfe?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1678705730064-a7ecbab4b3fb?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1679006831648-7c9ea12e5807?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Woven on pit looms in Ilkal, north Karnataka, where the body and pallu are joined by the traditional tope teni technique. The cotton breathes through long Indian summers while the zari border keeps it festival-ready.',
    fabric: 'Pure Cotton',
    occasion: 'Festive',
    color: 'Sage Green',
    colorHex: '#7A8B6F',
    sizes: ['Free Size'],
    inStock: true,
    stockCount: 22,
    rating: 4.6,
    reviewCount: 87,
    isBestseller: true,
    craftsmanship: 'Handloom Pit Loom Weaving with Kondi Technique Joinery',
    careInstructions: [
      'Dry clean for the first two washes',
      'Hand wash separately in cold water thereafter',
      'Do not wring or bleach',
      'Iron on medium heat with a cotton cloth over the zari'
    ],
    styleTips: 'Drape in the Nivi style with oxidised silver jhumkas and a contrast maroon blouse for a classic South Indian festive look.',
    reviews: [
      {
        id: 'rev-prod-w-7-1',
        userName: 'Lakshmi Iyer',
        userCity: 'Bengaluru',
        rating: 5,
        date: '12 Aug 2026',
        title: 'Real handloom, not powerloom',
        comment: 'You can feel the difference in the weave immediately. The zari has not darkened after three washes.',
        verifiedPurchase: true
      },
      {
        id: 'rev-prod-w-7-2',
        userName: 'Sneha Rao',
        userCity: 'Hubli',
        rating: 4,
        date: '29 Jul 2026',
        title: 'Lovely for daily festive wear',
        comment: 'Very comfortable in Karnataka heat. Blouse piece is generous, my tailor was happy.',
        verifiedPurchase: true
      }
    ]
  },
  {
    id: 'prod-w-8',
    name: 'Mysore Georgette Everyday Saree',
    subtitle: 'Featherlight Drape with Contrast Satin Border',
    gender: 'women',
    category: 'sarees',
    categoryLabel: 'Banarasi Sarees',
    price: 899,
    originalPrice: 1599,
    discountPercentage: 44,
    images: [
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1610189025857-f42fe6e8dd91?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1610030469839-f909584b43f1?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1641699862936-be9f49b1c38d?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1610030469668-8e9f641aaf27?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'A no-fuss georgette saree that holds its pleats through a full workday. Light enough for the commute, structured enough for a boardroom, with a contrast satin border that needs no ironing.',
    fabric: 'Georgette',
    occasion: 'Workwear',
    color: 'Royal Indigo',
    colorHex: '#2C3E7B',
    sizes: ['Free Size'],
    inStock: true,
    stockCount: 31,
    rating: 4.5,
    reviewCount: 64,
    isNewArrival: true,
    craftsmanship: 'Fine Georgette Weave with Machine-Finished Satin Border',
    careInstructions: [
      'Machine wash on gentle cycle in a laundry bag',
      'Do not tumble dry',
      'Line dry in shade',
      'Low heat iron if needed'
    ],
    styleTips: 'Keep the pallu pinned and pair with a full-sleeve blouse and a slim belt for office wear.',
    reviews: [
      {
        id: 'rev-prod-w-8-1',
        userName: 'Divya Menon',
        userCity: 'Kochi',
        rating: 5,
        date: '12 Aug 2026',
        title: 'My go-to office saree',
        comment: 'Drapes in five minutes and does not crease on the scooter ride.',
        verifiedPurchase: true
      },
      {
        id: 'rev-prod-w-8-2',
        userName: 'Radhika Nair',
        userCity: 'Chennai',
        rating: 4,
        date: '29 Jul 2026',
        title: 'Great weight for summer',
        comment: 'Colour is exactly as shown. Needs a petticoat in a matching shade.',
        verifiedPurchase: true
      }
    ]
  },
  {
    id: 'prod-w-9',
    name: 'Chanderi Silk Kurta Set with Dupatta',
    subtitle: 'Three-Piece Set with Straight Pants & Zari Dupatta',
    gender: 'women',
    category: 'kurta-sets',
    categoryLabel: 'Kurta Sets',
    price: 2499,
    originalPrice: 3999,
    discountPercentage: 38,
    images: [
      'https://images.unsplash.com/photo-1756483509254-3cc48a5a15b2?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1756483510802-0acac24ab4e8?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1571908599407-cdb918ed83bf?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1756483510900-ec43edbafb45?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1668371679302-a8ec781e876e?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Chanderi from Madhya Pradesh has a glassy transparency no blend can copy. This set pairs a zari-buti kurta with straight pants and a matching dupatta, cut for movement through long festive evenings.',
    fabric: 'Chanderi Silk',
    occasion: 'Festive',
    color: 'Antique Gold',
    colorHex: '#B8912F',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    inStock: true,
    stockCount: 16,
    rating: 4.8,
    reviewCount: 118,
    isBestseller: true,
    isFestiveSpecial: true,
    craftsmanship: 'Handwoven Chanderi with Nakshi Zari Buti Work',
    careInstructions: [
      'Dry clean only',
      'Store folded in a muslin cloth, not on a hanger',
      'Keep away from direct sunlight',
      'Do not spray perfume directly on the fabric'
    ],
    styleTips: 'Wear with kundan studs and juttis. Skip the necklace and let the zari buti do the talking.',
    reviews: [
      {
        id: 'rev-prod-w-9-1',
        userName: 'Meera Joshi',
        userCity: 'Indore',
        rating: 5,
        date: '12 Aug 2026',
        title: 'Chanderi as it should be',
        comment: 'I grew up near Chanderi and this is the real weave. The transparency and the zari are authentic.',
        verifiedPurchase: true
      },
      {
        id: 'rev-prod-w-9-2',
        userName: 'Kavya Reddy',
        userCity: 'Hyderabad',
        rating: 5,
        date: '29 Jul 2026',
        title: 'Wore it for Diwali puja',
        comment: 'Three people asked where I bought it. The pants are properly lined, which most brands skip.',
        verifiedPurchase: true
      }
    ]
  },
  {
    id: 'prod-w-10',
    name: 'Bandhani Lightweight Lehenga Choli',
    subtitle: 'Kutch Tie-Dye Lehenga with Choli & Net Dupatta',
    gender: 'women',
    category: 'lehengas',
    categoryLabel: 'Lehenga Choli',
    price: 2899,
    originalPrice: 4999,
    discountPercentage: 42,
    images: [
      'https://images.unsplash.com/photo-1574847872646-abff244bbd87?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1619715613791-89d35b51ff81?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1649930055986-ca57250a7fd4?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1668371679302-a8ec781e876e?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1601432093209-8af1fd74b054?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Bandhani tied by hand in Kutch, each dot knotted before dyeing. Built on light georgette rather than heavy canvas, so you can actually dance in it through a full sangeet.',
    fabric: 'Georgette',
    occasion: 'Wedding',
    color: 'Marigold Yellow',
    colorHex: '#E8A317',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    inStock: true,
    stockCount: 9,
    rating: 4.7,
    reviewCount: 73,
    isFestiveSpecial: true,
    craftsmanship: 'Hand-Tied Kutchi Bandhani on Georgette',
    careInstructions: [
      'Dry clean only',
      'Expect a slight colour bleed on first clean, which is natural to bandhani',
      'Do not soak',
      'Store flat with tissue between folds'
    ],
    styleTips: 'Best for sangeet and haldi. Pair with mirror-work juttis and leave the dupatta on one shoulder for the twirl.',
    reviews: [
      {
        id: 'rev-prod-w-10-1',
        userName: 'Ishita Patel',
        userCity: 'Ahmedabad',
        rating: 5,
        date: '12 Aug 2026',
        title: 'Danced all night in this',
        comment: 'Under 900 grams, which matters when the sangeet runs to 2am. Real bandhani knots, you can see them.',
        verifiedPurchase: true
      },
      {
        id: 'rev-prod-w-10-2',
        userName: 'Nikita Shah',
        userCity: 'Surat',
        rating: 4,
        date: '29 Jul 2026',
        title: 'Beautiful colour, runs slightly big',
        comment: 'Ordered S, needed a small alteration at the waist. The yellow is stunning in photos.',
        verifiedPurchase: true
      }
    ]
  },
  {
    id: 'prod-w-11',
    name: 'Indo-Western Anarkali Maxi Dress',
    subtitle: 'Floor-Length Flare with Concealed Side Pockets',
    gender: 'women',
    category: 'women-dresses',
    categoryLabel: 'Indo-Western Dresses',
    price: 1899,
    originalPrice: 3200,
    discountPercentage: 41,
    images: [
      'https://images.unsplash.com/photo-1668371679302-a8ec781e876e?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1756483510802-0acac24ab4e8?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1756483510900-ec43edbafb45?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1668371679302-a8ec781e876e?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1601571115502-83ca3095735b?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'An Anarkali silhouette rebuilt as a maxi dress, with a fitted yoke, a full ghera flare and side pockets deep enough for a phone. Reception-ready without the dupatta management.',
    fabric: 'Georgette',
    occasion: 'Party',
    color: 'Deep Wine',
    colorHex: '#6B1F3B',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    inStock: true,
    stockCount: 18,
    rating: 4.6,
    reviewCount: 95,
    isNewArrival: true,
    craftsmanship: 'Panelled Ghera Construction with Concealed Seam Pockets',
    careInstructions: [
      'Hand wash cold or dry clean',
      'Do not bleach',
      'Hang dry on a padded hanger',
      'Steam rather than iron the flare'
    ],
    styleTips: 'Works for receptions and sangeet after-parties. Add a statement cuff and heels; no dupatta needed.',
    reviews: [
      {
        id: 'rev-prod-w-11-1',
        userName: 'Aditi Kulkarni',
        userCity: 'Mumbai',
        rating: 5,
        date: '12 Aug 2026',
        title: 'Pockets in an Anarkali, finally',
        comment: 'Perfect for receptions where you are holding a plate and a phone. Flare is enormous.',
        verifiedPurchase: true
      },
      {
        id: 'rev-prod-w-11-2',
        userName: 'Shreya Bose',
        userCity: 'Kolkata',
        rating: 4,
        date: '29 Jul 2026',
        title: 'Gorgeous but order true size',
        comment: 'The yoke is fitted. I went one size up and it was right.',
        verifiedPurchase: true
      }
    ]
  },
  {
    id: 'prod-w-12',
    name: 'Sanganeri Block Print Co-ord Set',
    subtitle: 'Cotton Shirt & Wide-Leg Trouser Set',
    gender: 'women',
    category: 'co-ords',
    categoryLabel: 'Co-ord Sets',
    price: 1499,
    originalPrice: 2499,
    discountPercentage: 40,
    images: [
      'https://images.unsplash.com/photo-1768651925875-d1523ed07cb6?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1777888766761-6af980dc6ef6?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1764583473839-63a1afa95667?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1655288828238-21d86ec971c3?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1667665970118-f55705003914?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Hand block printed in Sanganer with vegetable dyes, cut as a relaxed shirt and wide-leg trousers. Wear it as a set for brunch or split it across the week.',
    fabric: 'Pure Cotton',
    occasion: 'Casual',
    color: 'Forest Teal',
    colorHex: '#1F5F5B',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    inStock: true,
    stockCount: 26,
    rating: 4.5,
    reviewCount: 58,
    isNewArrival: true,
    craftsmanship: 'Sanganeri Hand Block Printing with Natural Vegetable Dyes',
    careInstructions: [
      'Wash separately for the first three washes',
      'Cold water, mild detergent',
      'Dry in shade to protect the vegetable dyes',
      'Medium iron'
    ],
    styleTips: 'Split the set: the shirt over jeans, the trousers with a plain tee. Two outfits for the price of one.',
    reviews: [
      {
        id: 'rev-prod-w-12-1',
        userName: 'Tanvi Agarwal',
        userCity: 'Jaipur',
        rating: 5,
        date: '12 Aug 2026',
        title: 'Block print is genuinely hand done',
        comment: 'You can see the tiny registration marks where the blocks meet. Machine prints never have that.',
        verifiedPurchase: true
      },
      {
        id: 'rev-prod-w-12-2',
        userName: 'Pooja Verma',
        userCity: 'Delhi',
        rating: 4,
        date: '29 Jul 2026',
        title: 'Very comfortable for work from home',
        comment: 'Cotton is thick and good quality. Trousers are long, I am 5ft2 and hemmed them.',
        verifiedPurchase: true
      }
    ]
  },
  {
    id: 'prod-m-6',
    name: 'Lucknowi Chikankari Cotton Kurta',
    subtitle: 'Hand-Embroidered Shadow Work on Pure Cotton',
    gender: 'men',
    category: 'men-kurtas',
    categoryLabel: 'Men Kurtas',
    price: 1199,
    originalPrice: 1999,
    discountPercentage: 40,
    images: [
      'https://images.unsplash.com/photo-1734418038517-ffc3a6a6751f?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1734418038940-2e5ee6a1b478?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1734418040900-e964f84e8abb?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1734418046223-567d550f457d?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1734418046848-6d168e211b45?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Chikankari embroidered by hand in Lucknow, where the shadow work sits on the reverse of the cloth so the motif glows through. Cut long with side slits and a mandarin placket.',
    fabric: 'Pure Cotton',
    occasion: 'Festive',
    color: 'Ivory White',
    colorHex: '#F5F1E6',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    inStock: true,
    stockCount: 24,
    rating: 4.7,
    reviewCount: 104,
    isBestseller: true,
    craftsmanship: 'Hand Chikankari Shadow Work (Bakhiya) by Lucknow Artisans',
    careInstructions: [
      'Hand wash in cold water with mild detergent',
      'Never brush or scrub the embroidery',
      'Dry flat in shade',
      'Iron on reverse with a pressing cloth'
    ],
    styleTips: 'Wear over churidar for festivals or with off-white linen trousers and loafers for a summer wedding brunch.',
    reviews: [
      {
        id: 'rev-prod-m-6-1',
        userName: 'Arjun Malhotra',
        userCity: 'Lucknow',
        rating: 5,
        date: '12 Aug 2026',
        title: 'Real bakhiya work',
        comment: 'I am from Lucknow and know chikan. The shadow work is done properly on the reverse, not printed.',
        verifiedPurchase: true
      },
      {
        id: 'rev-prod-m-6-2',
        userName: 'Rohit Sharma',
        userCity: 'Noida',
        rating: 5,
        date: '29 Jul 2026',
        title: 'Wore it for Eid',
        comment: 'Cotton is soft from the first wear. Length is right for 5ft10.',
        verifiedPurchase: true
      }
    ]
  },
  {
    id: 'prod-m-7',
    name: 'Khadi Cotton Nehru Jacket',
    subtitle: 'Handspun Khadi with Full Cotton Lining',
    gender: 'men',
    category: 'nehru-jackets',
    categoryLabel: 'Nehru Jackets',
    price: 1499,
    originalPrice: 2499,
    discountPercentage: 40,
    images: [
      'https://images.unsplash.com/photo-1710242350089-65eef7e49364?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1710242350089-65eef7e49364?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1785613590152-63d713bc94b4?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1534217466718-ef4950786e24?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1634410251313-b65c51944ab3?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Handspun, handwoven khadi that gets softer every year. Fully lined in cotton with five buttons and two welt pockets, structured enough to sharpen a plain kurta instantly.',
    fabric: 'Khadi',
    occasion: 'Festive',
    color: 'Charcoal Navy',
    colorHex: '#22293D',
    sizes: ['38', '40', '42', '44', '46'],
    inStock: true,
    stockCount: 19,
    rating: 4.6,
    reviewCount: 71,
    craftsmanship: 'Handspun Khadi Handwoven on Charkha, Fully Cotton Lined',
    careInstructions: [
      'Dry clean recommended',
      'Spot clean small marks immediately',
      'Air out after each wear instead of washing',
      'Steam to remove creases'
    ],
    styleTips: 'The fastest upgrade to any plain kurta. Also works over a white shirt with chinos for festive office days.',
    reviews: [
      {
        id: 'rev-prod-m-7-1',
        userName: 'Vikram Nair',
        userCity: 'Pune',
        rating: 5,
        date: '12 Aug 2026',
        title: 'Khadi that breathes',
        comment: 'Wore it through a four-hour reception in Pune humidity and stayed comfortable.',
        verifiedPurchase: true
      },
      {
        id: 'rev-prod-m-7-2',
        userName: 'Karthik Subramanian',
        userCity: 'Coimbatore',
        rating: 4,
        date: '29 Jul 2026',
        title: 'Good structure, size up',
        comment: 'Chest sizing runs slim. I took 42 for a 40 chest and it sits right over a kurta.',
        verifiedPurchase: true
      }
    ]
  },
  {
    id: 'prod-m-8',
    name: 'Pure Linen Mandarin Collar Shirt',
    subtitle: 'Breathable 60-Lea European Flax Linen',
    gender: 'men',
    category: 'linen-shirts',
    categoryLabel: 'Khadi & Linen Shirts',
    price: 1349,
    originalPrice: 2299,
    discountPercentage: 41,
    images: [
      'https://images.unsplash.com/photo-1693443688057-85f57b872a3c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1713881587420-113c1c43e28a?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1713881676551-b16f22ce4719?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1713881842156-3d9ef36418cc?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1591357037205-166318b51afd?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Pure 60-lea linen with a mandarin collar, so it reads formal without a tie. Linen creases by nature; that fall is the point, not a flaw.',
    fabric: 'Pure Linen',
    occasion: 'Workwear',
    color: 'Oat Beige',
    colorHex: '#D8C7A8',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    inStock: true,
    stockCount: 28,
    rating: 4.5,
    reviewCount: 82,
    isNewArrival: true,
    craftsmanship: '60-Lea European Flax Linen, Garment Washed for Softness',
    careInstructions: [
      'Machine wash cold on gentle cycle',
      'Do not wring',
      'Line dry and iron while slightly damp',
      'Wash dark and light linens separately'
    ],
    styleTips: 'Tuck it in with pleated trousers for the office, or leave it open over a white tee on weekends.',
    reviews: [
      {
        id: 'rev-prod-m-8-1',
        userName: 'Sanjay Gupta',
        userCity: 'Ahmedabad',
        rating: 5,
        date: '12 Aug 2026',
        title: 'Actual linen, not a blend',
        comment: 'You can tell from how it drapes and cools. Survives Gujarat summers.',
        verifiedPurchase: true
      },
      {
        id: 'rev-prod-m-8-2',
        userName: 'Imran Qureshi',
        userCity: 'Bhopal',
        rating: 4,
        date: '29 Jul 2026',
        title: 'Creases, as linen does',
        comment: 'If you want a crisp shirt this is not it. If you want linen, it is excellent.',
        verifiedPurchase: true
      }
    ]
  },
  {
    id: 'prod-m-9',
    name: 'Handloom Cotton Essential Tee',
    subtitle: 'Everyday Handloom Jersey with Side Vents',
    gender: 'men',
    category: 'casual-tees',
    categoryLabel: 'Casual Tees',
    price: 399,
    originalPrice: 799,
    discountPercentage: 50,
    images: [
      'https://images.unsplash.com/photo-1713881649391-a1c8ddaf83cd?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1740711152088-88a009e877bb?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1746436576869-bf5082894f5c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1617117475026-2eb3e68b63cf?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1582261484646-a545de6d2382?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'A plain handloom cotton tee at a price that makes buying three easy. Bio-washed so it will not pill, with side vents and a collar that keeps its shape.',
    fabric: 'Pure Cotton',
    occasion: 'Casual',
    color: 'Stone Grey',
    colorHex: '#8A8580',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    inStock: true,
    stockCount: 45,
    rating: 4.4,
    reviewCount: 139,
    isBestseller: true,
    craftsmanship: 'Handloom Cotton Jersey, Bio-Washed and Pre-Shrunk',
    careInstructions: [
      'Machine wash cold, inside out',
      'Tumble dry low or line dry',
      'Do not iron over any print',
      'Wash with similar colours'
    ],
    styleTips: 'The layer under every Nehru jacket and open linen shirt. Buy the stone grey and the ivory together.',
    reviews: [
      {
        id: 'rev-prod-m-9-1',
        userName: 'Nikhil Deshpande',
        userCity: 'Nagpur',
        rating: 5,
        date: '12 Aug 2026',
        title: 'Best value on the site',
        comment: 'Bought three. Pre-shrunk claim is true, no change after six washes.',
        verifiedPurchase: true
      },
      {
        id: 'rev-prod-m-9-2',
        userName: 'Farhan Ali',
        userCity: 'Hyderabad',
        rating: 4,
        date: '29 Jul 2026',
        title: 'Good cotton for the price',
        comment: 'Slightly boxy fit, which I like. Neck has held up well.',
        verifiedPurchase: true
      }
    ]
  }
];

export const CATEGORIES_LIST = [
  { id: 'all', label: 'All Collections', gender: 'all' },
  { id: 'kurta-sets', label: 'Women Kurta Sets', gender: 'women' },
  { id: 'sarees', label: 'Handloom Sarees', gender: 'women' },
  { id: 'lehengas', label: 'Bridal & Festive Lehengas', gender: 'women' },
  { id: 'women-dresses', label: 'Western Dresses', gender: 'women' },
  { id: 'co-ords', label: 'Co-ord Sets', gender: 'women' },
  { id: 'men-kurtas', label: 'Men Festive Kurtas', gender: 'men' },
  { id: 'nehru-jackets', label: 'Nehru Jackets & Waistcoats', gender: 'men' },
  { id: 'sherwanis', label: 'Wedding Sherwanis', gender: 'men' },
  { id: 'linen-shirts', label: 'Pure Linen Shirts', gender: 'men' },
  { id: 'trousers-chinos', label: 'Chinos & Trousers', gender: 'men' },
  { id: 'casual-tees', label: 'Everyday Cotton Tees', gender: 'men' }
];

export const INDIAN_STATES = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
  'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand',
  'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
  'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab',
  'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
  'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
  'Delhi NCR', 'Jammu & Kashmir', 'Ladakh', 'Puducherry', 'Chandigarh'
];
