import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import EnquireButton from "@/components/EnquireButton";
import BackToTopButton from "@/components/BackToTopButton";
import hero2 from "@/assets/hero-2.jpg";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <>
      <Navbar />
      <PageHero 
        title="Contact Us"
        subtitle="Get in Touch with Our Team - We're Here to Help You Find Your Dream Home"
        backgroundImage={hero2}
      />
      <main className="pt-0">
        {/* Contact Info Cards */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-card rounded-xl p-6 shadow-lg border border-border/50 hover:border-primary/50 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-heading font-bold mb-2">Address</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  7th Floor, Lalani Aura, 34th Road, Khar (W), Mumbai - 400052
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-card rounded-xl p-6 shadow-lg border border-border/50 hover:border-primary/50 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-heading font-bold mb-2">Phone</h3>
                <a href="tel:02267280000" className="text-muted-foreground text-sm hover:text-primary transition-colors block mb-1">
                  022-6728 0000
                </a>
                <p className="text-muted-foreground text-xs">Fax: 022-6728 0011</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-card rounded-xl p-6 shadow-lg border border-border/50 hover:border-primary/50 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-heading font-bold mb-2">Email</h3>
                <a href="mailto:info@lalanigroup.in" className="text-muted-foreground text-sm hover:text-primary transition-colors block mb-1">
                  info@lalanigroup.in
                </a>
                <a href="mailto:sales@lalanigroup.in" className="text-muted-foreground text-sm hover:text-primary transition-colors block">
                  sales@lalanigroup.in
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-card rounded-xl p-6 shadow-lg border border-border/50 hover:border-primary/50 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-heading font-bold mb-2">Office Hours</h3>
                <p className="text-muted-foreground text-sm">
                  Monday - Saturday<br />
                  10:00 AM - 6:00 PM
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <EnquireButton />
      <BackToTopButton />
    </>
  );
};

export default Contact;
