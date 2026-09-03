export type Gender = 'women' | 'men' | 'all';

export type Category = 
  // Women
  | 'sarees' 
  | 'kurta-sets' 
  | 'lehengas' 
  | 'women-dresses' 
  | 'co-ords' 
  | 'tops-tunics'
  // Men
  | 'men-kurtas' 
  | 'nehru-jackets' 
  | 'sherwanis' 
  | 'linen-shirts' 
  | 'trousers-chinos' 
  | 'casual-tees';

export type Occasion = 'Festive' | 'Wedding' | 'Casual' | 'Workwear' | 'Party';

export type Fabric = 
  | 'Pure Cotton' 
  | 'Chanderi Silk' 
  | 'Pure Linen' 
  | 'Georgette' 
  | 'Mulmul' 
  | 'Banarasi Silk' 
  | 'Khadi' 
  | 'Raw Silk';

export interface Review {
  id: string;
  userName: string;
  userCity: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  verifiedPurchase: boolean;
}

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  gender: 'women' | 'men';
  category: Category;
  categoryLabel: string;
  price: number; // in INR
  originalPrice: number; // in INR for discount calculation
  discountPercentage: number;
  images: string[];
  description: string;
  fabric: Fabric;
  occasion: Occasion;
  color: string;
  colorHex: string;
  sizes: string[];
  inStock: boolean;
  stockCount: number;
  rating: number;
  reviewCount: number;
  isBestseller?: boolean;
  isNewArrival?: boolean;
  isFestiveSpecial?: boolean;
  craftsmanship?: string;
  careInstructions: string[];
  reviews: Review[];
  styleTips?: string;
}

export interface CartItem {
  product: Product;
  selectedSize: string;
  selectedColor?: string;
  quantity: number;
}

export interface Coupon {
  code: string;
  discountPercentage?: number;
  discountAmount?: number;
  minOrderValue: number;
  description: string;
}

export interface ShippingAddress {
  fullName: string;
  phoneNumber: string;
  email: string;
  pincode: string;
  flatHouse: string;
  areaStreet: string;
  landmark?: string;
  city: string;
  state: string;
  addressType: 'Home' | 'Work' | 'Other';
}

export type PaymentMethod = 'upi' | 'cod' | 'card' | 'netbanking';

export interface Order {
  id: string;
  items: CartItem[];
  shippingAddress: ShippingAddress;
  subtotal: number;
  discount: number;
  shippingFee: number;
  total: number;
  paymentMethod: PaymentMethod;
  paymentDetails?: {
    upiId?: string;
    transactionId?: string;
  };
  orderDate: string;
  estimatedDeliveryDate: string;
  status: 'Confirmed' | 'Dispatched' | 'In Transit' | 'Out for Delivery' | 'Delivered';
  trackingNumber: string;
}

export interface FilterState {
  gender: Gender;
  category: string;
  occasion: string;
  fabric: string;
  priceRange: [number, number];
  sizes: string[];
  colors: string[];
  sortBy: 'featured' | 'price-low' | 'price-high' | 'rating' | 'newest' | 'discount';
  searchQuery: string;
}
