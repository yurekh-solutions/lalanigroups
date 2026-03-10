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
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
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

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-gold-light/10 to-primary/20" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDI0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00ek0xMiAxNmMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptMCAyNGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 gradient-gold-text">
                Ready to Find Your Dream Home?
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
                Explore our ongoing projects and discover quality living spaces in prime Mumbai locations. 
                Our team is ready to help you find the perfect home.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/projects"
                  className="group px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-gold-light text-primary-foreground font-semibold shadow-lg hover:shadow-2xl transition-all hover:scale-105 flex items-center justify-center gap-2"
                >
                  View Our Projects
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-4 rounded-xl bg-card border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-all hover:scale-105 shadow-lg"
                >
                  Schedule a Visit
                </Link>
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
