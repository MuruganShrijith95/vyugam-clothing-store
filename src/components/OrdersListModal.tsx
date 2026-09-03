import React from 'react';
import { X, Package, Truck, ArrowRight, ExternalLink } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatINR } from '../utils/pincodeChecker';
import { Order } from '../types';

interface OrdersListModalProps {
  isOpen: boolean;
  onClose: () => void;
  onViewOrder: (order: Order) => void;
}

export const OrdersListModal: React.FC<OrdersListModalProps> = ({
  isOpen,
  onClose,
  onViewOrder
}) => {
  const { orders } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6">
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full p-6 shadow-2xl relative border border-stone-200 animate-scale-in max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-stone-200 pb-4">
          <div className="flex items-center gap-2">
            <Package className="w-5 h-5 text-amber-800" />
            <h3 className="font-serif text-xl font-bold text-stone-900">
              Your Orders ({orders.length})
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto py-4 space-y-4 flex-1">
          {orders.length === 0 ? (
            <div className="text-center py-12 space-y-3">
              <div className="w-14 h-14 bg-stone-100 rounded-full flex items-center justify-center mx-auto text-stone-400">
                <Package className="w-7 h-7" />
              </div>
              <h4 className="font-serif text-base font-bold text-stone-800">No past orders found</h4>
              <p className="text-xs text-stone-500">When you place an order, its real-time BlueDart tracking will appear here.</p>
            </div>
          ) : (
            orders.map((order) => (
              <div
                key={order.id}
                className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-3 hover:border-amber-700/50 transition cursor-pointer"
                onClick={() => onViewOrder(order)}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-mono font-bold text-xs text-stone-900">{order.id}</span>
                    <span className="text-[11px] text-stone-500 block">Placed on {order.orderDate}</span>
                  </div>
                  <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded-full text-[11px] font-bold">
                    {order.status}
                  </span>
                </div>

                {/* Items Thumbnails */}
                <div className="flex items-center gap-2 overflow-x-auto py-1">
                  {order.items.map((item, idx) => (
                    <img
                      key={idx}
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-12 h-14 object-cover rounded-lg border border-stone-200 shrink-0"
                    />
                  ))}
                  <div className="text-xs text-stone-600 pl-2">
                    <p className="font-bold">{order.items.length} {order.items.length === 1 ? 'Item' : 'Items'}</p>
                    <p className="text-stone-500">Delivering to {order.shippingAddress.city}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-stone-200/80 text-xs">
                  <div className="flex items-center gap-1.5 text-stone-700">
                    <Truck className="w-3.5 h-3.5 text-amber-700" />
                    <span>Est: <strong>{order.estimatedDeliveryDate}</strong></span>
                  </div>
                  <div className="flex items-center gap-1 font-bold text-amber-900">
                    <span>View Receipt ({formatINR(order.total)})</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="pt-3 border-t border-stone-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-stone-900 text-white rounded-xl text-xs font-bold hover:bg-stone-800"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
