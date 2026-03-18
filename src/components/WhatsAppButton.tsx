import { useState, useEffect } from "react";
import { MessageCircle, Phone, X, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const WHATSAPP_NUMBER = "919322642370";
const WHATSAPP_TEXT = "Hi, I am interested in Lalani Group Project. Please contact me.";
const PHONE_NUMBER = "tel:+919322642370";

const WhatsAppButton = () => {
  const [expanded, setExpanded] = useState(false);
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

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Call Button */}
      <motion.a
        href={PHONE_NUMBER}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: expanded ? 0 : 0.1 }}
        className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
        aria-label="Call us"
      >
        <Phone className="w-7 h-7 text-white" />
      </motion.a>

      {/* WhatsApp Button */}
      <motion.button
        onClick={() => setExpanded(!expanded)}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: expanded ? 0.1 : 0 }}
        className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
        aria-label="WhatsApp options"
      >
        {expanded ? (
          <X className="w-6 h-6 text-[#fff]" />
        ) : (
          <MessageCircle className="w-7 h-7 text-[#fff]" />
        )}
      </motion.button>

      {/* Expanded Options */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="glass-card rounded-xl p-4 w-56 space-y-3 mb-1"
          >
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_TEXT)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-[#25D366]/10 hover:bg-[#25D366]/20 transition-colors"
            >
              <MessageCircle className="w-5 h-5 text-[#25D366] shrink-0" />
              <span className="font-body text-sm text-foreground">Quick Chat</span>
            </a>
            <Link
              to="/whatsapp"
              onClick={() => setExpanded(false)}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
            >
              <MessageCircle className="w-5 h-5 text-primary shrink-0" />
              <span className="font-body text-sm text-foreground">Inquiry Templates</span>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

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
