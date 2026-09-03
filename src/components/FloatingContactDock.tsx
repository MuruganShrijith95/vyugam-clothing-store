import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import {
  STORE_NAME,
  WHATSAPP_NUMBER,
  TELEGRAM_USERNAME,
  isWhatsAppConfigured,
  isTelegramConfigured
} from '../config/store';

/** Telegram's mark isn't in lucide, so it's inlined. */
const TelegramIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M21.94 4.3 18.7 19.6c-.24 1.08-.88 1.35-1.79.84l-4.94-3.64-2.38 2.29c-.26.27-.49.49-1 .49l.35-5.05 9.2-8.31c.4-.36-.09-.56-.62-.2L6.15 13.18l-4.9-1.53c-1.06-.33-1.08-1.06.22-1.57l19.16-7.39c.89-.33 1.66.2 1.31 1.61z" />
  </svg>
);

export const FloatingContactDock: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userQuery, setUserQuery] = useState('');

  const whatsappReady = isWhatsAppConfigured();
  const telegramReady = isTelegramConfigured();

  // Nothing to show if neither channel has been configured yet.
  if (!whatsappReady && !telegramReady) return null;

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userQuery.trim() || !whatsappReady) return;

    const encodedText = encodeURIComponent(`Hi ${STORE_NAME} Stylist! I have a question: ${userQuery}`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`, '_blank', 'noopener,noreferrer');
    setUserQuery('');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5">
      {/* Popover Chat Widget */}
      {isOpen && whatsappReady && (
        <div className="mb-1 w-80 bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden animate-scale-in">
          {/* Header */}
          <div className="bg-[#075E54] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-amber-400 bg-stone-900 shrink-0 p-0.5 shadow">
                <img src="/logo.jpg" alt={`${STORE_NAME} Logo`} className="w-full h-full object-cover rounded-full" />
              </div>
              <div>
                <h4 className="text-xs font-bold">{STORE_NAME} Styling Desk</h4>
                <p className="text-[10px] text-emerald-200 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Online &bull; Replies in 2 mins
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-emerald-100 hover:text-white rounded-full hover:bg-emerald-800"
              aria-label="Close chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body message preview */}
          <div className="p-4 bg-[#ECE5DD] space-y-3 text-xs">
            <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm max-w-[90%] space-y-1">
              <p className="font-semibold text-stone-900">Namaste! 🙏</p>
              <p className="text-stone-700">
                Need sizing advice, custom color options, or wedding styling tips? Ask our Indian fashion experts!
              </p>
              <span className="text-[9px] text-stone-400 block text-right">Just now</span>
            </div>
          </div>

          {/* Input */}
          <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-stone-200 flex gap-2">
            <input
              type="text"
              placeholder="Ask about size, fabric, delivery..."
              value={userQuery}
              onChange={(e) => setUserQuery(e.target.value)}
              className="flex-1 bg-stone-100 border-0 rounded-xl px-3 py-2 text-xs text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-emerald-600"
            />
            <button
              type="submit"
              className="p-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-xl transition shadow"
              title="Send via WhatsApp"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* Telegram */}
      {telegramReady && (
        <a
          href={`https://t.me/${TELEGRAM_USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#229ED9] hover:bg-[#1c8ec2] text-white px-4 py-3 rounded-full shadow-2xl transition transform hover:scale-105 active:scale-95 font-bold text-xs"
          aria-label={`Chat with ${STORE_NAME} on Telegram`}
        >
          <TelegramIcon className="w-5 h-5" />
          <span className="hidden sm:inline tracking-wide">Telegram</span>
        </a>
      )}

      {/* WhatsApp */}
      {whatsappReady && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white px-4 py-3 rounded-full shadow-2xl transition transform hover:scale-105 active:scale-95 font-bold text-xs"
          aria-label="Chat with Stylist on WhatsApp"
        >
          <MessageCircle className="w-5 h-5 fill-white" />
          <span className="hidden sm:inline tracking-wide">WhatsApp Stylist</span>
        </button>
      )}
    </div>
  );
};
