import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectTabs from "@/components/ProjectTabs";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import BuyingProcess from "@/components/BuyingProcess";
import FeaturesGrid from "@/components/FeaturesGrid";
import StatsCounter from "@/components/StatsCounter";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQAccordion from "@/components/FAQAccordion";
import InstagramFeed from "@/components/InstagramFeed";
import LogoLoader from "@/components/LogoLoader";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import EnquireButton from "@/components/EnquireButton";
import BackToTopButton from "@/components/BackToTopButton";
import LeadCapturePopup from "@/components/LeadCapturePopup";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, MapPin, Building2 } from "lucide-react";
import { useEffect } from "react";

const Home = () => {
  // No local loader needed - handled by App.tsx PageLoader globally

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

        {/* Explore Our Projects - Featured Projects Grid */}
        <section id="projects" className="py-16 md:py-24 bg-gradient-to-b from-background to-primary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.7 }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold gradient-gold-text mb-4">
                Explore Our Projects
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Browse through our diverse portfolio of residential and commercial developments
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
              {/* Featured Projects - Showing Ongoing Projects */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.6, delay: 0 }}
                className="group rounded-xl overflow-hidden cursor-pointer"
                onClick={() => window.location.href = '/lalani-goodwill'}
              >
                <div className="relative overflow-hidden aspect-[4/3] bg-gray-900">
                  <img
                    src="https://lalanigroup.in/assets/images/residential/r1/1.jpg"
                    alt="Lalani Goodwill"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/20 text-primary border border-primary/30">
                      Ongoing
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <h3 className="text-xl font-bold mb-1">Lalani Goodwill</h3>
                    <p className="text-sm text-white/80">Andheri East • June 2028</p>
                  </div>
                </div>
                <div className="p-4 bg-background border border-primary/10">
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2">Lalani Goodwill</h3>
                  <p className="text-sm text-muted-foreground mb-3">1BHK, 2BHK & 3BHK Residences</p>
                  <p className="text-xs text-primary font-semibold">J.B. Nagar, Andheri East</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="group rounded-xl overflow-hidden cursor-pointer"
                onClick={() => window.location.href = '/lalani-business-park'}
              >
                <div className="relative overflow-hidden aspect-[4/3] bg-gray-900">
                  <img
                    src="https://lalanigroup.in/assets/images/commercial/c1/1.jpg"
                    alt="Lalani Business Park"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/20 text-primary border border-primary/30">
                      Commercial
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <h3 className="text-xl font-bold mb-1">Lalani Business Park</h3>
                    <p className="text-sm text-white/80">Khar West • Premium Spaces</p>
                  </div>
                </div>
                <div className="p-4 bg-background border border-primary/10">
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2">Lalani Business Park</h3>
                  <p className="text-sm text-muted-foreground mb-3">Commercial Office Spaces</p>
                  <p className="text-xs text-primary font-semibold">Khar West, Mumbai</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="group rounded-xl overflow-hidden cursor-pointer"
                onClick={() => window.location.href = '/velentine-apartment'}
              >
                <div className="relative overflow-hidden aspect-[4/3] bg-gray-900">
                  <img
                    src="https://lalanigroup.in/assets/images/residential/r5/1.jpg"
                    alt="Velentine Apartment"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-500/20 text-green-400 border border-green-500/30">
                      Ready Possession
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <h3 className="text-xl font-bold mb-1">Velentine Apartment</h3>
                    <p className="text-sm text-white/80">Malad East • Move-in Ready</p>
                  </div>
                </div>
                <div className="p-4 bg-background border border-primary/10">
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2">Velentine Apartment</h3>
                  <p className="text-sm text-muted-foreground mb-3">1BHK & 2BHK Ready Apartments</p>
                  <p className="text-xs text-primary font-semibold">Malad East, Mumbai</p>
                </div>
              </motion.div>
            </div>

            {/* View All Projects Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center mt-12"
            >
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-gold-light text-primary-foreground font-semibold hover:shadow-lg transition-all group"
              >
                Browse All Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </section>
        <AboutSection />

        {/* Buying Process */}
        <BuyingProcess />

        {/* Features Grid */}
        <FeaturesGrid />

       

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
              initial={{ opacity: 1 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
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
                    to="/contact#schedule-visit"
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
      <InstagramFeed />
      <Footer />
      <WhatsAppButton />
      <EnquireButton />
      <BackToTopButton />
      <LeadCapturePopup />
    </>
  );
};

export default Home;
