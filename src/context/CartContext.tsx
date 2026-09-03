import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, Product, Coupon, Order } from '../types';
import { AVAILABLE_COUPONS } from '../data/products';

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, selectedSize: string, selectedColor?: string, quantity?: number) => void;
  removeFromCart: (productId: string, selectedSize: string) => void;
  updateQuantity: (productId: string, selectedSize: string, newQuantity: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  
  // Pricing & Calculations
  subtotal: number;
  originalSubtotal: number;
  totalSavings: number;
  appliedCoupon: Coupon | null;
  couponDiscount: number;
  applyCoupon: (code: string) => { success: boolean; message: string };
  removeCoupon: () => void;
  shippingFee: number;
  freeShippingThreshold: number;
  amountNeededForFreeShipping: number;
  finalTotal: number;
  totalItemCount: number;

  // Recent Orders
  orders: Order[];
  addOrder: (order: Order) => void;
}

const FREE_SHIPPING_THRESHOLD = 1499;
const STANDARD_SHIPPING_FEE = 99;

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('vastra_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [appliedCoupon, setAppliedCoupon] = useState<Coupon | null>(null);

  const [orders, setOrders] = useState<Order[]>(() => {
    try {
      const saved = localStorage.getItem('vastra_orders');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('vastra_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('vastra_orders', JSON.stringify(orders));
  }, [orders]);

  const addToCart = (product: Product, selectedSize: string, selectedColor?: string, quantity: number = 1) => {
    setCart(prev => {
      const existingIndex = prev.findIndex(
        item => item.product.id === product.id && item.selectedSize === selectedSize
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [...prev, {
          product,
          selectedSize,
          selectedColor: selectedColor || product.color,
          quantity
        }];
      }
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string, selectedSize: string) => {
    setCart(prev => prev.filter(
      item => !(item.product.id === productId && item.selectedSize === selectedSize)
    ));
  };

  const updateQuantity = (productId: string, selectedSize: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(productId, selectedSize);
      return;
    }
    setCart(prev => prev.map(item => {
      if (item.product.id === productId && item.selectedSize === selectedSize) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  const clearCart = () => {
    setCart([]);
    setAppliedCoupon(null);
  };

  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const originalSubtotal = cart.reduce((sum, item) => sum + item.product.originalPrice * item.quantity, 0);
  const totalItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Free shipping check
  const shippingFee = (subtotal >= FREE_SHIPPING_THRESHOLD || cart.length === 0) ? 0 : STANDARD_SHIPPING_FEE;
  const amountNeededForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);

  // Coupon calculations
  let couponDiscount = 0;
  if (appliedCoupon && subtotal >= appliedCoupon.minOrderValue) {
    if (appliedCoupon.discountPercentage) {
      couponDiscount = Math.round((subtotal * appliedCoupon.discountPercentage) / 100);
      // Cap at 1000 if festive
      if (appliedCoupon.code === 'FESTIVE20' && couponDiscount > 1000) {
        couponDiscount = 1000;
      }
    } else if (appliedCoupon.discountAmount) {
      couponDiscount = appliedCoupon.discountAmount;
    }
  }

  const finalTotal = Math.max(0, subtotal - couponDiscount + shippingFee);
  const totalSavings = (originalSubtotal - subtotal) + couponDiscount;

  const applyCoupon = (code: string) => {
    const trimmed = code.trim().toUpperCase();
    const coupon = AVAILABLE_COUPONS.find(c => c.code === trimmed);

    if (!coupon) {
      return { success: false, message: 'Invalid coupon code.' };
    }

    if (subtotal < coupon.minOrderValue) {
      return {
        success: false,
        message: `Min. cart value of ₹${coupon.minOrderValue} required for this coupon.`
      };
    }

    setAppliedCoupon(coupon);
    return { success: true, message: `Coupon ${coupon.code} applied successfully!` };
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
  };

  const addOrder = (newOrder: Order) => {
    setOrders(prev => [newOrder, ...prev]);
    clearCart();
  };

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      isCartOpen,
      setIsCartOpen,
      subtotal,
      originalSubtotal,
      totalSavings,
      appliedCoupon,
      couponDiscount,
      applyCoupon,
      removeCoupon,
      shippingFee,
      freeShippingThreshold: FREE_SHIPPING_THRESHOLD,
      amountNeededForFreeShipping,
      finalTotal,
      totalItemCount,
      orders,
      addOrder
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
