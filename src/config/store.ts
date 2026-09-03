// Central storefront configuration.
//
// Contact and payment identifiers live here and nowhere else, so going live
// is a matter of editing this one file.

export const STORE_NAME = 'VYUGAM';

// ---------------------------------------------------------------------------
// WhatsApp
// ---------------------------------------------------------------------------
// International format: country code + number, digits only — no '+', spaces
// or dashes. Example for India: 917550371346
export const WHATSAPP_NUMBER: string = '917550371346';

// ---------------------------------------------------------------------------
// Telegram
// ---------------------------------------------------------------------------
// The public username of the shop's Telegram account or channel, WITHOUT the
// leading '@'. Resolves to https://t.me/<username>
export const TELEGRAM_USERNAME: string = 'vyugamstore';

// ---------------------------------------------------------------------------
// UPI
// ---------------------------------------------------------------------------
// The shop's Virtual Payment Address that receives money, e.g. 'vyugam@okhdfcbank'.
// This is the payee ('pa') in every UPI intent link and QR the site generates.
export const UPI_VPA: string = 'vyugam@upi';

// Name shown in the customer's UPI app while confirming payment. Keep it close
// to the name registered against the VPA so the payment doesn't look suspect.
export const UPI_PAYEE_NAME: string = 'VYUGAM';

// ---------------------------------------------------------------------------
// Placeholder guards
// ---------------------------------------------------------------------------
// Template defaults that must not reach production; the UI degrades gracefully
// instead of sending customers or their money to the wrong place.
const PLACEHOLDER_WHATSAPP: string = '919876543210';
const PLACEHOLDER_TELEGRAM: string = 'vyugamstore';
const PLACEHOLDER_UPI: string = 'vyugam@upi';

/** False while WHATSAPP_NUMBER is still the placeholder, so the UI can warn instead of misdelivering. */
export const isWhatsAppConfigured = (): boolean =>
  WHATSAPP_NUMBER !== PLACEHOLDER_WHATSAPP && /^\d{10,15}$/.test(WHATSAPP_NUMBER);

/** False until a real Telegram username is set; the Telegram button hides itself. */
export const isTelegramConfigured = (): boolean =>
  TELEGRAM_USERNAME !== PLACEHOLDER_TELEGRAM && /^[A-Za-z0-9_]{5,32}$/.test(TELEGRAM_USERNAME);

/** False until a real VPA is set; checkout then falls back to COD-only. */
export const isUpiConfigured = (): boolean =>
  UPI_VPA !== PLACEHOLDER_UPI && /^[\w.\-]{2,256}@[A-Za-z]{2,64}$/.test(UPI_VPA);
