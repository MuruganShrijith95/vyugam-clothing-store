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
  { id: 'trousers-chinos', label: 'Chinos & Trousers', gender: 'men' }
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
