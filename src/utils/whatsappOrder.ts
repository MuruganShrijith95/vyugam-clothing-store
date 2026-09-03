import { Order, PaymentMethod } from '../types';
import { formatINR } from './pincodeChecker';
import { STORE_NAME, WHATSAPP_NUMBER, UPI_VPA } from '../config/store';

const PAYMENT_LABELS: Record<PaymentMethod, string> = {
  upi: 'UPI',
  cod: 'Cash on Delivery',
  card: 'Card / NetBanking',
  netbanking: 'NetBanking'
};

/** Formats the shipping address as the lines a courier would need. */
const formatAddress = (order: Order): string => {
  const a = order.shippingAddress;
  return [
    a.fullName,
    a.flatHouse,
    a.areaStreet,
    a.landmark ? `Landmark: ${a.landmark}` : null,
    `${a.city}, ${a.state} - ${a.pincode}`,
    `Phone: ${a.phoneNumber}`,
    a.email ? `Email: ${a.email}` : null,
    `Address type: ${a.addressType}`
  ]
    .filter(Boolean)
    .join('\n');
};

/**
 * Builds the plain-text order summary sent to the store's WhatsApp.
 * Uses WhatsApp's *bold* markup; keep it text-only so it stays readable
 * in the notification preview.
 */
export const buildOrderMessage = (order: Order): string => {
  const items = order.items
    .map(
      (item, idx) =>
        `${idx + 1}. ${item.product.name}\n` +
        `   Size: ${item.selectedSize} | Qty: ${item.quantity}\n` +
        `   ${formatINR(item.product.price * item.quantity)}`
    )
    .join('\n');

  const lines = [
    `*New order for ${STORE_NAME}*`,
    `Order ID: ${order.id}`,
    `Placed: ${order.orderDate}`,
    '',
    `*Items (${order.items.length})*`,
    items,
    '',
    `Subtotal: ${formatINR(order.subtotal)}`
  ];

  if (order.discount > 0) {
    lines.push(`Discount: -${formatINR(order.discount)}`);
  }

  lines.push(
    `Delivery: ${order.shippingFee === 0 ? 'FREE' : formatINR(order.shippingFee)}`,
    `*Total: ${formatINR(order.total)}*`,
    '',
    `*Payment:* ${PAYMENT_LABELS[order.paymentMethod]}`
  );

  if (order.paymentMethod === 'upi') {
    lines.push(`Paid to: ${UPI_VPA}`, `UPI reference: ${order.id}`);
  }

  lines.push(
    `*Expected delivery:* ${order.estimatedDeliveryDate}`,
    '',
    '*Deliver to*',
    formatAddress(order)
  );

  return lines.join('\n');
};

/** wa.me deep link carrying the order summary as the pre-filled message. */
export const buildOrderWhatsAppUrl = (order: Order): string =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildOrderMessage(order))}`;

/**
 * Opens WhatsApp with the order pre-filled.
 * Must be called synchronously from the click/submit handler — deferring it
 * behind a timeout gets the tab blocked as a popup.
 * Returns false when the browser blocked the tab, so the caller can offer a fallback link.
 */
export const openWhatsAppOrder = (order: Order): boolean => {
  const win = window.open(buildOrderWhatsAppUrl(order), '_blank', 'noopener,noreferrer');
  return win !== null;
};
