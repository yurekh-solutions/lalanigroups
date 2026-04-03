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
      

        {/* Map and Form Section */}
       <section className="py-8 sm:py-12 section-3d-bg">
  <div className="container mx-auto px-3 sm:px-4 lg:px-8">
    <div className="max-w-6xl mx-auto">

      {/* Google Map */}
      <motion.div
        initial={{ opacity: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.6 }}
        className="glass-3d rounded-2xl p-2 sm:p-3 mb-8 sm:mb-12 shadow-depth-2"
      >
        <div className="rounded-xl overflow-hidden h-[250px] sm:h-[300px] md:h-[400px]">
          <iframe
            src="https://www.google.com/maps?q=LALANI+GROUP,+3R7P+QMJ,+34th+Rd,+Khar+West,+Mumbai,+Maharashtra+400052&output=embed"
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

        {/* Call */}
        <motion.a
          href="tel:02267280000"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-primary to-gold-light text-primary-foreground font-semibold text-sm sm:text-base shadow-depth-2 hover:shadow-glow-gold transition-all btn-3d"
        >
          <Phone className="w-4 h-4" />
          Call Now
        </motion.a>

        {/* WhatsApp */}
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

        {/* Email */}
        <motion.a
          href="mailto:info@lalanigroup.in"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl glass-3d border-2 border-primary/50 text-primary font-semibold text-sm sm:text-base hover:bg-primary/10 transition-all"
        >
          <Mail className="w-4 h-4" />
          Email Us
        </motion.a>

        {/* NEW: Directions Button */}
        <motion.a
          href="https://www.google.com/maps/dir/?api=1&destination=LALANI+GROUP,+3R7P+QMJ,+Khar+West,+Mumbai"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-blue-500 text-white font-semibold text-sm sm:text-base shadow-depth-2 hover:bg-blue-600 transition-all"
        >
          📍 Get Directions
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
