import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import ProjectTabs from "@/components/ProjectTabs";
import ImageGallery from "@/components/ImageGallery";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import EnquireButton from "@/components/EnquireButton";
import BackToTopButton from "@/components/BackToTopButton";
import { motion } from "framer-motion";
import { MapPin, Home, CheckCircle, Calendar, Award, Shield } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";

const Projects = () => {
  const projectHighlights = [
    {
      icon: MapPin,
      title: "Prime Locations",
      description: "Strategic locations across Mumbai"
    },
    {
      icon: Home,
      title: "Quality Living",
      description: "Modern amenities and superior construction"
    },
    {
      icon: CheckCircle,
      title: "RERA Approved",
      description: "All projects MahaRERA registered"
    },
    {
      icon: Calendar,
      title: "Timely Delivery",
      description: "Proven track record of on-time completion"
    }
  ];

  const amenities = [
    "24/7 Security with CCTV Surveillance",
    "Power Backup for Common Areas",
    "Landscaped Gardens & Green Spaces",
    "Children's Play Area",
    "Modern Gymnasium & Fitness Center",
    "Clubhouse with Recreation Facilities",
    "Ample Car Parking Space",
    "Rainwater Harvesting System",
    "High-Speed Elevators",
    "Intercom Facility",
    "Fire Fighting Systems",
    "Vastu Compliant Design"
  ];

  return (
    <>
      <Navbar />
      <PageHero 
        title="Our Projects"
        subtitle="Discover Premium Residential & Commercial Properties Across Mumbai"
        backgroundImage={hero1}
      />
      <main className="pt-0">
        {/* Projects with Tabs */}
        <ProjectTabs />

        {/* Image Gallery */}
        <ImageGallery />

        {/* Amenities Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-background to-primary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 gradient-gold-text">
                  World-Class Amenities
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Experience luxury living with premium facilities designed for your comfort
                </p>
              </motion.div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {amenities.map((amenity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-center gap-3 bg-card rounded-lg p-4 border border-border/50 hover:border-primary/50 transition-all shadow-sm hover:shadow-md"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm text-foreground/90">{amenity}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Additional Info Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4 text-primary">
                  Quality Assurance
                </h3>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Each Lalani Group project is designed with meticulous attention to detail, ensuring that every aspect meets the highest standards of quality and comfort.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  Our developments feature modern architecture, premium finishes, and world-class amenities that set new benchmarks in luxury living.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-gold-light/10 to-gold-light/5 rounded-2xl p-8 border border-gold-light/20"
              >
                <div className="w-12 h-12 rounded-lg bg-gold-light/20 flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4 text-primary">
                  Strategic Locations
                </h3>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  All our projects are strategically located in prime areas of Mumbai, offering excellent connectivity to business districts, educational institutions, and healthcare facilities.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  From spacious 1BHK apartments to luxurious 3BHK residences, we offer options to suit every lifestyle and budget.
                </p>
              </motion.div>
            </div>
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

export default Projects;
