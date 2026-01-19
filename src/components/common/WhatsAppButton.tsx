"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Phone, QrCode } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // Toggle chatbot state
  const toggleChat = () => setIsOpen(!isOpen);

  // Constants
  const phoneNumber = "918532091012"; // Updated number from request
  const agentName = "Anurag Singh";

  const handleSend = () => {
    if (!message.trim()) return;

    // Construct WhatsApp URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    // Clear input
    setMessage("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4 font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="w-[350px] shadow-2xl rounded-2xl overflow-hidden flex flex-col mb-2 origin-bottom-right shadow-black/20"
          >
            {/* Call Back Banner */}
            <div className="bg-[#0f172a] p-4 flex items-center justify-between text-white border-b border-gray-800 rounded-t-2xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div className="leading-tight">
                  <p className="font-semibold text-sm">Want our team to</p>
                  <p className="font-semibold text-sm">call you back?</p>
                </div>
              </div>
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-2 px-4 rounded transition-colors"
                onClick={() => alert("Callback request feature coming soon!")}
              >
                Raise a Request
              </button>
            </div>

            {/* Chat Header */}
            <div className="bg-[#008069] p-4 flex items-center justify-between text-white relative shadow-md z-10">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-white text-[#008069] flex items-center justify-center font-bold text-sm">
                    AS
                  </div>
                  <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-[#008069]"></div>
                </div>
                <div>
                  <h3 className="font-bold text-base leading-tight">{agentName}</h3>
                  <p className="text-xs opacity-90">+{phoneNumber}</p>
                </div>
              </div>
              <div className="flex gap-2 text-white/80">
                <QrCode className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
                <X
                  className="w-5 h-5 cursor-pointer hover:text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                />
              </div>
            </div>

            {/* Chat Body (Beige with Doodles mostly approximated by a subtle texture or color) */}
            <div className="bg-[#efeae2] h-64 p-4 overflow-y-auto flex flex-col gap-4 bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat">
              <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm text-sm text-gray-800 max-w-[85%] self-start relative">
                <p>Hi there 👋</p>
                <p className="mt-1">How can I help you?</p>
                <span className="text-[10px] text-gray-400 absolute bottom-1 right-2">09:45</span>
              </div>
            </div>

            {/* Chat Footer */}
            <div className="bg-[#f0f2f5] p-2 flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Enter Your Message..."
                className="flex-1 bg-white rounded-full px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-green-500"
                autoFocus
              />
              <button
                onClick={handleSend}
                className={`p-2 rounded-full transition-all ${message.trim() ? "bg-[#008069] text-white" : "bg-gray-200 text-gray-400"
                  }`}
                disabled={!message.trim()}
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={toggleChat}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-[#25D366] rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.15)] flex items-center justify-center text-white hover:bg-[#20bd5a] transition-colors relative z-50 group"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-8 h-8" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {/* Ping effect removed for calmness */}
              <MessageCircle className="w-8 h-8 fill-current" />

              {/* Notification badge */}
              <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white"></span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
