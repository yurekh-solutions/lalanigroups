import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import EnquireButton from "@/components/EnquireButton";
import BackToTopButton from "@/components/BackToTopButton";
import LeadCapturePopup from "@/components/LeadCapturePopup";
import SEO from "@/components/SEO";
import hero2 from "@/assets/hero-2.jpg";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle, Building2 } from "lucide-react";

const Contact = () => {
  const location = useLocation();

  // Scroll to schedule-visit section when navigating with hash
  useEffect(() => {
    if (location.hash === "#schedule-visit") {
      // Increased delay to ensure page is fully rendered and ScrollToTop doesn't override
      setTimeout(() => {
        const element = document.getElementById("schedule-visit");
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
          // Add highlight effect
          element.classList.add("ring-2", "ring-primary", "ring-offset-4", "ring-offset-background");
          setTimeout(() => {
            element.classList.remove("ring-2", "ring-primary", "ring-offset-4", "ring-offset-background");
          }, 2000);
        }
      }, 500);
    }
  }, [location]);

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: "7th Floor, Lalani Aura, 34th Road, Khar (W), Mumbai - 400052, Maharashtra, India",
      link: "https://maps.google.com/?q=Lalani+Aura+Khar+West+Mumbai"
    },
    {
      icon: Phone,
      title: "Phone",
      content: ["022-6728 0000", "+91-93226-42370"],
      link: "tel:02267280000"
    },
    {
      icon: Mail,
      title: "Email",
      content: ["info@lalanigroup.in", "sales@lalanigroup.in"],
      link: "mailto:info@lalanigroup.in"
    },
    {
      icon: Clock,
      title: "Office Hours",
      content: "Mon - Sat: 10:00 AM - 6:00 PM",
      link: null
    }
  ];

  return (
    <>
      <SEO
        title="Contact Lalani Group | Real Estate Inquiry Mumbai | Call 022-6728 0000"
        description="Contact Lalani Group for property inquiries in Mumbai. Visit Lalani Aura, 7th Floor, 34th Road, Khar West, Mumbai 400052. Call 022-6728 0000 or WhatsApp +91-93226-42370. Book free site visit for 1BHK, 2BHK, 3BHK apartments in Andheri, Malad, Khar, Jogeshwari."
        keywords="contact Lalani Group Mumbai, Lalani Group phone number, Lalani Group address Khar West, property inquiry Mumbai, book site visit Mumbai, real estate enquiry Mumbai, free site visit Mumbai flats, Lalani Group office Mumbai, sales team Mumbai real estate, property consultation Mumbai, WhatsApp property Mumbai"
        canonicalUrl="/contact"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact Lalani Group",
          "description": "Get in touch with Lalani Group for all property inquiries, site visit bookings, and real estate consultations in Mumbai.",
          "url": "https://lalanigroup.in/contact",
          "mainEntity": {
            "@type": "LocalBusiness",
            "name": "Lalani Group",
            "telephone": "+91-22-6728-0000",
            "email": "info@lalanigroup.in",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "7th Floor, Lalani Aura, 34th Road, Khar (W)",
              "addressLocality": "Mumbai",
              "addressRegion": "Maharashtra",
              "postalCode": "400052",
              "addressCountry": "IN"
            },
            "openingHours": "Mo-Sa 10:00-18:00"
          }
        }}
      />
      <Navbar />
      <PageHero 
        title="Contact Us"
        subtitle="Get in Touch with Our Team - We're Here to Help You Find Your Dream Home"
        backgroundImage={hero2}
      />
      <main className="pt-0">
        {/* Contact Info Cards with 3D Effects */}
        <section className="py-8 sm:py-12 relative -mt-16 z-10">
          <div className="container mx-auto px-3 sm:px-4 lg:px-8">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-3d rounded-xl p-5 sm:p-6 hover:shadow-glow-gold transition-all duration-300 group"
                  whileHover={{ y: -5, rotateX: 5 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:shadow-glow-gold transition-all">
                    <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <h3 className="text-base sm:text-lg font-heading font-bold mb-2 sm:mb-3 gradient-gold-text">{info.title}</h3>
                  {Array.isArray(info.content) ? (
                    <div className="space-y-1">
                      {info.content.map((item, i) => (
                        <a 
                          key={i}
                          href={info.link} 
                          className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors block"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  ) : info.link ? (
                    <a 
                      href={info.link} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-xs sm:text-sm text-muted-foreground">{info.content}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Map and Form Section */}
        <section className="py-8 sm:py-12 section-3d-bg">
          <div className="container mx-auto px-3 sm:px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              {/* Google Map */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="glass-3d rounded-2xl p-2 sm:p-3 mb-8 sm:mb-12 shadow-depth-2"
              >
                <div className="rounded-xl overflow-hidden h-[250px] sm:h-[300px] md:h-[400px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.6880936679887!2d72.83731551490221!3d19.068973987102728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9b5b5b5b5b5%3A0x5b5b5b5b5b5b5b5b!2sKhar%20West%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Lalani Group Office Location - Khar West Mumbai"
                  />
                </div>
              </motion.div>

              {/* Quick Actions */}
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
                <motion.a
                  href="tel:02267280000"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-primary to-gold-light text-primary-foreground font-semibold text-sm sm:text-base shadow-depth-2 hover:shadow-glow-gold transition-all btn-3d"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </motion.a>
                <motion.a
                  href="https://wa.me/919322642370?text=Hello%2C%20I%20am%20interested%20in%20Lalani%20Group%20properties"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl glass-3d border-2 border-green-500/50 text-green-400 font-semibold text-sm sm:text-base hover:bg-green-500/10 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </motion.a>
                <motion.a
                  href="mailto:info@lalanigroup.in"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl glass-3d border-2 border-primary/50 text-primary font-semibold text-sm sm:text-base hover:bg-primary/10 transition-all"
                >
                  <Mail className="w-4 h-4" />
                  Email Us
                </motion.a>
              </div>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <EnquireButton />
      <BackToTopButton />
      <LeadCapturePopup />
    </>
  );
};

export default Contact;
