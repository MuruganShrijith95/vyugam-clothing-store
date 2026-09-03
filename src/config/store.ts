// Central storefront configuration.
//
// WHATSAPP_NUMBER is the number that receives customer orders and support
// messages. Use international format: country code + number, digits only —
// no '+', spaces or dashes. Example for India: 919876543210
//
// This MUST be replaced with the real VYUGAM WhatsApp Business number before
// going live, otherwise orders are sent to a stranger.
export const WHATSAPP_NUMBER = '919876543210';

export const STORE_NAME = 'VYUGAM';

/** The dummy number shipped with the template; used to guard against going live with it. */
const PLACEHOLDER_NUMBER = '919876543210';

/** False while WHATSAPP_NUMBER is still the placeholder, so the UI can warn instead of misdelivering. */
export const isWhatsAppConfigured = (): boolean =>
  WHATSAPP_NUMBER !== PLACEHOLDER_NUMBER && /^\d{10,15}$/.test(WHATSAPP_NUMBER);
