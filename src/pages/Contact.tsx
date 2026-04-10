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
