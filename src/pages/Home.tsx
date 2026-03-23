import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectTabs from "@/components/ProjectTabs";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import BuyingProcess from "@/components/BuyingProcess";
import FeaturesGrid from "@/components/FeaturesGrid";
import StatsCounter from "@/components/StatsCounter";
import ImageGallery from "@/components/ImageGallery";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQAccordion from "@/components/FAQAccordion";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import EnquireButton from "@/components/EnquireButton";
import BackToTopButton from "@/components/BackToTopButton";
import LeadCapturePopup from "@/components/LeadCapturePopup";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, MapPin, Building2 } from "lucide-react";

const Home = () => {
  return (
    <>
      <SEO
        title="Lalani Group - Real Estate Developers Mumbai | Buy 1BHK 2BHK 3BHK Flats | MahaRERA Approved"
        description="Lalani Group – Mumbai's trusted real estate builders since 1985. Buy 1BHK, 2BHK, 3BHK apartments in Andheri East, Malad East, Khar West, Jogeshwari, Goregaon, BKC. 40+ projects delivered. 4000+ happy families. MahaRERA approved. Ready possession & under construction flats. Call 022-6728 0000!"
        keywords="Lalani Group Mumbai, buy flat Mumbai, flats for sale in Mumbai, 1BHK flats Andheri, 2BHK apartments Malad, 3BHK homes Khar, property in Mumbai, real estate Mumbai, Mumbai builders, property developers Mumbai, residential apartments Mumbai, buy property Mumbai, flats in western suburbs Mumbai, MahaRERA flats Mumbai, affordable luxury flats Mumbai, new projects Mumbai, ongoing projects Mumbai, ready possession flats Mumbai, property investment Mumbai, luxury apartments Mumbai, home for sale Mumbai, flat booking Mumbai"
        canonicalUrl="/"
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Featured Real Estate Projects by Lalani Group Mumbai",
            "description": "Premium residential and commercial projects by Lalani Group in prime Mumbai locations",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Lalani Goodwill - 1BHK 2BHK 3BHK in Andheri East", "url": "https://lalanigroup.in/projects/lalani-goodwill" },
              { "@type": "ListItem", "position": 2, "name": "Lalani Grandeur - 2BHK 3BHK in Malad East", "url": "https://lalanigroup.in/projects/lalani-grandeur" },
              { "@type": "ListItem", "position": 3, "name": "Lalani Heritage Park - 2BHK 3BHK in Jogeshwari West", "url": "https://lalanigroup.in/projects/lalani-heritage-park" },
              { "@type": "ListItem", "position": 4, "name": "Lalani Skyview - 2BHK 3BHK in Goregaon West", "url": "https://lalanigroup.in/projects/lalani-skyview" }
            ]
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Where are Lalani Group's residential projects located in Mumbai?",
                "acceptedAnswer": { "@type": "Answer", "text": "Lalani Group has residential projects across Andheri East, Malad East, Khar West, Jogeshwari West, Goregaon West, Bandra, and commercial projects in BKC and Khar West Mumbai." }
              },
              {
                "@type": "Question",
                "name": "What is the price range for Lalani Group flats in Mumbai?",
                "acceptedAnswer": { "@type": "Answer", "text": "Lalani Group offers 1BHK flats starting from ₹75 Lakhs, 2BHK from ₹98 Lakhs, and 3BHK from ₹1.12 Crore in prime Mumbai locations. Prices vary by location and configuration." }
              },
              {
                "@type": "Question",
                "name": "Are Lalani Group projects RERA approved?",
                "acceptedAnswer": { "@type": "Answer", "text": "Yes, all Lalani Group projects are MahaRERA registered. Lalani Goodwill: P51800079065 & P51800078852. You can verify at maharerait.mahaonline.gov.in." }
              }
            ]
          }
        ]}
      />
      <Navbar />
      <main>
        <HeroSection />
        
        {/* Stats Counter */}
        <StatsCounter />

        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* Projects with Tabs */}
        <ProjectTabs />

        {/* About Section */}
        <AboutSection />

        {/* Buying Process */}
        <BuyingProcess />

        {/* Features Grid */}
        <FeaturesGrid />

        {/* Image Gallery */}
        <ImageGallery />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* FAQ Accordion */}
        <FAQAccordion />

        {/* CTA Section with 3D Effects */}
        <section className="py-16 sm:py-20 lg:py-28 relative overflow-hidden section-3d-bg">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-gold-light/10 to-primary/20" />
          <div className="absolute inset-0 grid-3d-bg opacity-30" />
          
          {/* Floating 3D Elements */}
          <motion.div
            animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-10 w-16 h-16 border border-[#c9a962]/20 rounded-xl hidden lg:block"
            style={{ transform: "perspective(500px) rotateX(45deg)" }}
          />
          <motion.div
            animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-20 right-10 w-12 h-12 border border-[#c9a962]/10 rounded-full hidden lg:block"
          />
          
          <div className="container mx-auto px-3 sm:px-4 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 sm:mb-6 gradient-gold-text">
                Ready to Find Your Dream Home?
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-10 leading-relaxed px-4">
                Explore our ongoing projects and discover quality living spaces in prime Mumbai locations. 
                Our team is ready to help you find the perfect home.
              </p>
              
              {/* Quick Contact Info */}
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8 sm:mb-10">
                <div className="flex items-center gap-2 text-sm sm:text-base text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Mumbai, Maharashtra</span>
                </div>
                <div className="flex items-center gap-2 text-sm sm:text-base text-muted-foreground">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>+91-22-6728-0000</span>
                </div>
                <div className="flex items-center gap-2 text-sm sm:text-base text-muted-foreground">
                  <Building2 className="w-4 h-4 text-primary" />
                  <span>40+ Years Experience</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    to="/projects"
                    className="group flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-primary to-gold-light text-primary-foreground font-semibold text-sm sm:text-base shadow-depth-2 hover:shadow-glow-gold transition-all btn-3d"
                  >
                    View Our Projects
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    to="/contact"
                    className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl glass-3d border-2 border-primary text-primary font-semibold text-sm sm:text-base hover:bg-primary/10 transition-all"
                  >
                    Schedule a Visit
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <EnquireButton />
      <BackToTopButton />
      <LeadCapturePopup />
    </>
  );
};

export default Home;
