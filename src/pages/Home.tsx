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
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, MapPin, Building2 } from "lucide-react";

const Home = () => {
  return (
    <>
      <SEO
        title="Lalani Group - Premium Real Estate Developers in Mumbai | 1BHK, 2BHK, 3BHK Apartments"
        description="Lalani Group - Leading real estate builders in Mumbai since 1985. 40+ completed projects, 4000+ happy families. Explore luxury apartments in Andheri, Malad, Khar, Jogeshwari, BKC. MahaRERA approved. Call 022-6728 0000!"
        keywords="Lalani Group, Mumbai real estate, property in Mumbai, apartments for sale Mumbai, 1BHK flats, 2BHK apartments, 3BHK homes, Andheri properties, Malad real estate, Khar apartments, MahaRERA approved projects, luxury homes Mumbai"
        canonicalUrl="/"
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
    </>
  );
};

export default Home;
