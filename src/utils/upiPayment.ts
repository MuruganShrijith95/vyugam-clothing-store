import QRCode from 'qrcode';
import { UPI_VPA, UPI_PAYEE_NAME } from '../config/store';

/** UPI apps we offer a direct hand-off to, plus the generic chooser. */
export type UpiApp = 'any' | 'phonepe' | 'gpay' | 'paytm';

/**
 * URL scheme per app. 'any' uses the standard upi:// scheme, which makes
 * Android show the app chooser; the others jump straight into one app.
 */
const APP_SCHEMES: Record<UpiApp, string> = {
  any: 'upi://pay',
  phonepe: 'phonepe://pay',
  gpay: 'tez://upi/pay',
  paytm: 'paytmmp://pay'
};

export const UPI_APP_LABELS: Record<UpiApp, string> = {
  any: 'Any UPI App',
  phonepe: 'PhonePe',
  gpay: 'Google Pay',
  paytm: 'Paytm'
};

interface UpiParams {
  amount: number;
  /** Order id, used as the transaction reference so payments reconcile to an order. */
  orderId: string;
}

/**
 * Builds the UPI query string shared by every app scheme and the QR.
 * Field names follow the NPCI UPI deep-linking spec:
 *   pa = payee address, pn = payee name, am = amount,
 *   cu = currency, tn = transaction note, tr = transaction reference.
 */
const buildUpiQuery = ({ amount, orderId }: UpiParams): string => {
  const params = new URLSearchParams({
    pa: UPI_VPA,
    pn: UPI_PAYEE_NAME,
    am: amount.toFixed(2),
    cu: 'INR',
    tn: `${UPI_PAYEE_NAME} order ${orderId}`,
    // Reference must be alphanumeric for most PSPs.
    tr: orderId.replace(/[^A-Za-z0-9]/g, '')
  });
  // URLSearchParams encodes spaces as '+', which some UPI apps render literally
  // in the payment note. Percent-encoding is what the spec's examples use.
  return params.toString().replace(/\+/g, '%20');
};

/** Deep link that opens the chosen UPI app with the amount pre-filled. */
export const buildUpiUrl = (app: UpiApp, params: UpiParams): string =>
  `${APP_SCHEMES[app]}?${buildUpiQuery(params)}`;

/** The payload encoded into the QR — always the generic scheme, so any app can scan it. */
export const buildUpiQrPayload = (params: UpiParams): string =>
  buildUpiUrl('any', params);

/** Renders the UPI QR as a PNG data URL for an <img src>. */
export const buildUpiQrDataUrl = (params: UpiParams): Promise<string> =>
  QRCode.toDataURL(buildUpiQrPayload(params), {
    width: 320,
    margin: 1,
    errorCorrectionLevel: 'M',
    color: { dark: '#1c1917', light: '#ffffff' }
  });

/**
 * UPI deep links only resolve on a device with a UPI app installed — i.e.
 * phones. On desktop the QR is the only workable path, so the UI leads with it.
 */
export const supportsUpiIntent = (): boolean =>
  typeof navigator !== 'undefined' &&
  /android|iphone|ipad|ipod/i.test(navigator.userAgent);
