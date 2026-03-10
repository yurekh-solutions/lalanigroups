import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const WHATSAPP_NUMBER = "919322642370";
const WHATSAPP_TEXT = "Hi, I am interested in Lalani Group Project. Please contact me.";

const WhatsAppButton = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
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

      <button
        onClick={() => setExpanded(!expanded)}
        className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
        aria-label="WhatsApp options"
      >
        {expanded ? (
          <X className="w-6 h-6 text-[#fff]" />
        ) : (
          <MessageCircle className="w-7 h-7 text-[#fff]" />
        )}
      </button>
    </div>
  );
};

export default WhatsAppButton;
