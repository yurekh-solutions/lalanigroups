import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, Gift, CheckCircle, ArrowRight } from "lucide-react";
import { trackEvent } from "@/lib/tracking";

const POPUP_DELAY = 10000; // Show after 10 seconds
const POPUP_STORAGE_KEY = "lalani_popup_shown";
const LEAD_STORAGE_KEY = "lalani_lead_submitted";

const LeadCapturePopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    project: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Check if popup was already shown or lead already submitted
  const canShowPopup = useCallback(() => {
    const popupShown = sessionStorage.getItem(POPUP_STORAGE_KEY);
    const leadSubmitted = localStorage.getItem(LEAD_STORAGE_KEY);
    return !popupShown && !leadSubmitted;
  }, []);

  // Exit intent detection (desktop only)
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && canShowPopup()) {
        setIsOpen(true);
        sessionStorage.setItem(POPUP_STORAGE_KEY, "true");
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [canShowPopup]);

  // Timed popup (after delay)
  useEffect(() => {
    const timer = setTimeout(() => {
      if (canShowPopup()) {
        setIsOpen(true);
        sessionStorage.setItem(POPUP_STORAGE_KEY, "true");
      }
    }, POPUP_DELAY);

    return () => clearTimeout(timer);
  }, [canShowPopup]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Track lead in Firebase
      await trackEvent("form", window.location.pathname, {
        type: "callback_request",
        name: formData.name,
        phone: formData.phone,
        project: formData.project || "Not specified",
        source: "popup",
      });

      // Mark lead as submitted
      localStorage.setItem(LEAD_STORAGE_KEY, "true");
      setIsSubmitted(true);

      // Auto close after success
      setTimeout(() => {
        setIsOpen(false);
      }, 3000);
    } catch (error) {
      console.error("Error submitting lead:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-x-4 top-1/2 -translate-y-1/2 sm:inset-auto sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 z-[61] max-w-md w-full mx-auto"
          >
            <div className="bg-gradient-to-br from-background via-background to-primary/5 rounded-2xl shadow-2xl border border-primary/20 overflow-hidden">
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-muted/50 hover:bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors z-10"
              >
                <X className="w-4 h-4" />
              </button>

              {!isSubmitted ? (
                <>
                  {/* Header */}
                  <div className="bg-gradient-to-r from-primary to-gold-light p-5 text-center">
                    <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-3">
                      <Gift className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-white mb-1">
                      Get Exclusive Offers!
                    </h3>
                    <p className="text-white/90 text-sm">
                      Request a callback & get special launch prices
                    </p>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="p-5 space-y-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Your Name *"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        placeholder="Phone Number *"
                        required
                        pattern="[0-9]{10}"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        Enter 10 digit mobile number
                      </p>
                    </div>
                    <div>
                      <select
                        value={formData.project}
                        onChange={(e) =>
                          setFormData({ ...formData, project: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      >
                        <option value="">Select Project (Optional)</option>
                        <option value="Lalani Goodwill, Andheri (E)">
                          Lalani Goodwill, Andheri (E)
                        </option>
                        <option value="Lalani Grandeur, Malad (E)">
                          Lalani Grandeur, Malad (E)
                        </option>
                        <option value="Lalani Heritage Park, Jogeshwari (W)">
                          Lalani Heritage Park, Jogeshwari (W)
                        </option>
                        <option value="Dream Residency, Karjat (W)">
                          Dream Residency, Karjat (W)
                        </option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-primary to-gold-light text-primary-foreground font-body font-semibold hover:shadow-glow-gold transition-all disabled:opacity-70"
                    >
                      {isLoading ? (
                        <span className="animate-pulse">Submitting...</span>
                      ) : (
                        <>
                          <Phone className="w-4 h-4" />
                          Request Callback
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <p className="text-xs text-center text-muted-foreground">
                      We'll call you within 30 minutes during business hours
                    </p>
                  </form>

                  {/* Trust Badges */}
                  <div className="px-5 pb-5">
                    <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        RERA Approved
                      </span>
                      <span className="flex items-center gap-1">
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        40+ Years Trust
                      </span>
                    </div>
                  </div>
                </>
              ) : (
                /* Success State */
                <div className="p-8 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", damping: 15, stiffness: 300 }}
                    className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4"
                  >
                    <CheckCircle className="w-10 h-10 text-green-500" />
                  </motion.div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                    Thank You!
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Our team will call you shortly with exclusive offers.
                  </p>
                  <p className="text-sm text-primary font-semibold">
                    Check your phone for a call from Lalani Group
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default LeadCapturePopup;
