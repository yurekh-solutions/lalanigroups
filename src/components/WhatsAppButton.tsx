import { useState, useEffect } from "react";
import { MessageCircle, Phone, ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { trackEvent } from "@/lib/tracking";
import { trackWhatsAppConversion, trackPhoneConversion } from "@/lib/conversionTracking";

const WHATSAPP_NUMBER = "919322642370";
const WHATSAPP_TEXT = "Hi, I am interested in Lalani Group Project. Please contact me.";
const PHONE_NUMBER = "tel:+919322642370";

const WhatsAppButton = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handlePhoneClick = async () => {
    await trackEvent('phone', window.location.pathname);
    trackPhoneConversion(); // Track for Google Ads & Facebook Ads
  };

  const handleWhatsAppClick = async () => {
    await trackEvent('whatsapp', window.location.pathname);
    trackWhatsAppConversion(); // Track for Google Ads & Facebook Ads
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Call Button */}
      <motion.a
        href={PHONE_NUMBER}
        onClick={handlePhoneClick}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
        aria-label="Call us"
      >
        <Phone className="w-7 h-7 text-white" />
      </motion.a>

      {/* WhatsApp Button - Direct to WhatsApp */}
      <motion.a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_TEXT)}`}
        onClick={handleWhatsAppClick}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0 }}
        className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </motion.a>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            onClick={scrollToTop}
            className="w-14 h-14 rounded-full bg-gradient-to-r from-primary to-gold-light flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
            aria-label="Back to top"
          >
            <ArrowUp className="w-6 h-6 text-white" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WhatsAppButton;
