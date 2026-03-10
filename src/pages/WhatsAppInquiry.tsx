import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Send, Phone, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const WHATSAPP_NUMBER = "919136242706";

const templates = [
  { label: "General Inquiry", text: "Hi, I am interested in Lalani Group projects. Please share more details." },
  { label: "Site Visit", text: "Hi, I would like to schedule a site visit for Lalani Group project. Please confirm availability." },
  { label: "Pricing Details", text: "Hi, I am looking for pricing details of Lalani Group projects. Kindly share the rate card." },
  { label: "Lalani Goodwill", text: "Hi, I am interested in Lalani Goodwill, Andheri (E). Please share project details and availability." },
  { label: "Lalani Business Park", text: "Hi, I am interested in Lalani Business Park, Khar (W). Please share commercial space details." },
  { label: "Velentine Apartment", text: "Hi, I am interested in Velentine Apartment, Malad (E). Please share availability and pricing." },
];

const WhatsAppInquiry = () => {
  const [customMessage, setCustomMessage] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const sendMessage = (text: string) => {
    const fullMessage = name ? `${text}\n\nName: ${name}${phone ? `\nPhone: ${phone}` : ""}` : text;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(fullMessage)}`, "_blank");
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (customMessage.trim()) sendMessage(customMessage);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-24 pb-16">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <div className="w-16 h-16 rounded-full bg-[#25D366]/15 flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-8 h-8 text-[#25D366]" />
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold gradient-gold-text mb-4">
              WhatsApp Inquiry
            </h1>
            <div className="gold-divider mb-6" />
            <p className="font-body text-muted-foreground max-w-xl mx-auto">
              Choose a pre-filled template or write your own message. We'll respond within minutes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
            {/* Templates */}
            <div className="lg:col-span-3 space-y-4">
              <h2 className="font-heading text-xl font-bold text-foreground mb-2">Quick Templates</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {templates.map((t, i) => (
                  <motion.button
                    key={t.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    onClick={() => sendMessage(t.text)}
                    className="glass-card rounded-xl p-5 text-left hover:border-[#25D366]/40 transition-all duration-300 group"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-body font-semibold text-foreground text-sm mb-1.5">{t.label}</p>
                        <p className="font-body text-xs text-muted-foreground leading-relaxed line-clamp-2">{t.text}</p>
                      </div>
                      <div className="w-9 h-9 rounded-full bg-[#25D366]/10 flex items-center justify-center shrink-0 group-hover:bg-[#25D366]/20 transition-colors">
                        <Send className="w-4 h-4 text-[#25D366]" />
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Custom message */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-2"
            >
              <div className="glass-card rounded-2xl p-6 lg:p-8 sticky top-28">
                <h2 className="font-heading text-xl font-bold text-foreground mb-6">Custom Message</h2>
                <form onSubmit={handleCustomSubmit} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name (optional)"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#25D366]/50 transition-all"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number (optional)"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#25D366]/50 transition-all"
                  />
                  <textarea
                    placeholder="Type your message..."
                    rows={5}
                    required
                    value={customMessage}
                    onChange={(e) => setCustomMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#25D366]/50 transition-all resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] text-[#fff] font-body font-semibold hover:bg-[#20bd5a] transition-colors duration-300"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Send via WhatsApp
                  </button>
                </form>

                <div className="mt-6 pt-6 border-t border-border flex items-center gap-3">
                  <Phone className="w-4 h-4 text-primary" />
                  <a href="tel:+919136242706" className="font-body text-sm text-primary hover:text-gold-light">
                    +91 91362 42706
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default WhatsAppInquiry;
