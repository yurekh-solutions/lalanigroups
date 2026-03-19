import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import ProjectTabs from "@/components/ProjectTabs";
import ImageGallery from "@/components/ImageGallery";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import EnquireButton from "@/components/EnquireButton";
import BackToTopButton from "@/components/BackToTopButton";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { MapPin, Home, CheckCircle, Calendar, Shield, Award } from "lucide-react";
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
      <SEO
        title="Real Estate Projects in Mumbai | 1BHK 2BHK 3BHK Flats & Offices | Lalani Group"
        description="Browse Lalani Group's premium residential & commercial projects across Mumbai. 1BHK, 2BHK, 3BHK apartments in Andheri East, Malad East, Khar West, Jogeshwari, Goregaon. Commercial office spaces in BKC & Khar West. All MahaRERA approved. Book site visit now!"
        keywords="Lalani Group projects Mumbai, residential projects Mumbai, commercial projects Mumbai, flats in Andheri East, 1BHK Andheri, 2BHK Malad, 3BHK Khar, apartments Jogeshwari, flats Goregaon, office space Khar West, BKC commercial office, ready possession flats Mumbai, under construction projects Mumbai, new launch Mumbai, upcoming projects Mumbai, MahaRERA registered projects, buy apartment Mumbai, book flat Mumbai, site visit Mumbai, 2025 property Mumbai"
        canonicalUrl="/projects"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Real Estate Projects by Lalani Group Mumbai",
          "description": "Complete list of residential and commercial property projects by Lalani Group in prime Mumbai locations",
          "url": "https://lalanigroup.in/projects",
          "provider": {
            "@type": "Organization",
            "name": "Lalani Group",
            "url": "https://lalanigroup.in/"
          },
          "hasPart": [
            { "@type": "WebPage", "name": "Lalani Goodwill - Andheri East", "url": "https://lalanigroup.in/projects/lalani-goodwill" },
            { "@type": "WebPage", "name": "Lalani Grandeur - Malad East", "url": "https://lalanigroup.in/projects/lalani-grandeur" },
            { "@type": "WebPage", "name": "Lalani Heritage Park - Jogeshwari West", "url": "https://lalanigroup.in/projects/lalani-heritage-park" },
            { "@type": "WebPage", "name": "Lalani Skyview - Goregaon West", "url": "https://lalanigroup.in/projects/lalani-skyview" },
            { "@type": "WebPage", "name": "Lalani Business Park - Khar West", "url": "https://lalanigroup.in/projects/lalani-business-park" },
            { "@type": "WebPage", "name": "Lalani Corporate Plaza - BKC Mumbai", "url": "https://lalanigroup.in/projects/lalani-corporate-plaza" }
          ]
        }}
      />
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

        {/* Amenities Section with 3D Cards */}
        <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-background to-primary/5 section-3d-bg">
          <div className="container mx-auto px-3 sm:px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-8 sm:mb-12"
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-3 sm:mb-4 gradient-gold-text">
                  World-Class Amenities
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                  Experience luxury living with premium facilities designed for your comfort
                </p>
              </motion.div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {amenities.map((amenity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-center gap-3 glass-3d rounded-lg p-3 sm:p-4 hover:shadow-glow-gold transition-all duration-300 group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:shadow-glow-gold transition-all">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-xs sm:text-sm text-foreground/90">{amenity}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Additional Info Section with 3D Cards */}
        <section className="py-12 sm:py-16 bg-background">
          <div className="container mx-auto px-3 sm:px-4 lg:px-8">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 sm:gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="glass-3d rounded-2xl p-6 sm:p-8 hover:shadow-glow-gold transition-all duration-300"
                whileHover={{ rotateY: 2, rotateX: 2 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 shadow-depth-1">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl font-heading font-bold mb-3 sm:mb-4 gradient-gold-text">
                  Quality Assurance
                </h3>
                <p className="text-sm sm:text-base text-foreground/80 leading-relaxed mb-3 sm:mb-4">
                  Each Lalani Group project is designed with meticulous attention to detail, ensuring that every aspect meets the highest standards of quality and comfort.
                </p>
                <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                  Our developments feature modern architecture, premium finishes, and world-class amenities that set new benchmarks in luxury living.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="glass-3d rounded-2xl p-6 sm:p-8 hover:shadow-glow-gold transition-all duration-300"
                whileHover={{ rotateY: -2, rotateX: 2 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 shadow-depth-1">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl font-heading font-bold mb-3 sm:mb-4 gradient-gold-text">
                  Strategic Locations
                </h3>
                <p className="text-sm sm:text-base text-foreground/80 leading-relaxed mb-3 sm:mb-4">
                  All our projects are strategically located in prime areas of Mumbai, offering excellent connectivity to business districts, educational institutions, and healthcare facilities.
                </p>
                <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
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
