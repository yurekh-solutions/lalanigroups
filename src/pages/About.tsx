import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import MilestonesSection from "@/components/MilestonesSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import EnquireButton from "@/components/EnquireButton";
import BackToTopButton from "@/components/BackToTopButton";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Target, Eye, Heart, Lightbulb, Users2, TrendingUp, CheckCircle2, Star } from "lucide-react";
import project3 from "@/assets/project-3.jpg";
import { Link } from "react-router-dom";

const About = () => {
  const coreValues = [
    {
      icon: Heart,
      title: "Integrity",
      description: "We believe in honest and transparent dealings with all our stakeholders, customers, and partners. Every promise we make, we keep."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "Committed to delivering superior quality in every project we undertake. From architecture to finishing, we accept nothing less than the best."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Embracing new technologies and design concepts to create better living and working spaces that meet the evolving needs of modern Mumbai."
    },
    {
      icon: Users2,
      title: "Customer Focus",
      description: "Your satisfaction and happiness is at the heart of everything we do. We provide dedicated support from booking to possession and beyond."
    }
  ];



  const legacyProjects = [
    { name: "Royal Manor", location: "St. Roque Road, Bandra (W)", type: "Luxury Residences" },
    { name: "Orchid Enclave", location: "Andheri (E)", type: "Residential Apartments" },
    { name: "Lalani Fairmont", location: "Khar (W)", type: "Premium Residences" },
    { name: "Lalani Aura", location: "34th Road, Khar (W)", type: "Corporate HQ Building" },
    { name: "Valentine Apartment", location: "Malad (E)", type: "Residential Complex" },
    { name: "Dream Heights", location: "Malad (W)", type: "Residential Project" },
    { name: "Utsav Complex", location: "Kandivali (E)", type: "Residential Complex" },
    { name: "Navnit Chambers", location: "Khar (W)", type: "Commercial Complex" },
  ];

  return (
    <>
      <SEO
        title="About Lalani Group | 40+ Years of Real Estate Excellence in Mumbai"
        description="Learn about Lalani Group - Founded in 1985 by Mr. Shaukat Lalani. 40+ completed projects, 4000+ happy families. Mumbai's trusted real estate developer with presence in Andheri, Malad, Khar, Bandra, Jogeshwari."
        keywords="Lalani Group history, about Lalani builders, Shaukat Lalani, Mumbai builders, real estate company Mumbai, trusted developers Mumbai, 40 years experience"
        canonicalUrl="/about"
      />
      <Navbar />
      <PageHero 
        title="About Lalani Group"
        subtitle="Building Trust, Creating Landmarks Since 1985"
        backgroundImage={project3}
      />
      <main className="pt-0">
        {/* About Content with 3D Effects */}
        <section className="py-12 sm:py-16 md:py-24 section-3d-bg">
          <div className="container mx-auto px-3 sm:px-4 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6 sm:space-y-8"
              >
                <div className="glass-3d rounded-2xl p-6 sm:p-8 md:p-12 shadow-depth-2">
                  <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 sm:mb-6 gradient-gold-text">
                    Our Legacy
                  </h2>
                  <p className="text-base sm:text-lg text-foreground/90 leading-relaxed mb-4 sm:mb-6">
                    Founded in the year 1985 by Mr. Shaukat Lalani, The Lalani Group is one of the leading construction companies based in Mumbai. With over four decades of in-depth customer understanding and experience, The Lalani legacy boasts of homes and commercial spaces that offer unmatched quality and absolute value for money to its clients.
                  </p>
                  <p className="text-base sm:text-lg text-foreground/90 leading-relaxed mb-4 sm:mb-6">
                    Unlike previously where the value for a real estate was solely dependent on its location; the real estate industry today is more about reputation. Be it pioneering concepts, providing good customer support or using some of the most advanced technologies in design and construction, the Lalani Group has always been at the forefront, therefore cementing a strong brand image that speaks of trust and recognition in the real estate industry.
                  </p>
                  <p className="text-base sm:text-lg text-foreground/90 leading-relaxed">
                    From landmark residential towers in Bandra, Khar, Andheri, Malad, Jogeshwari and Goregaon to premier commercial complexes in BKC and Khar West, Lalani Group has built more than 40 projects and created homes for over 4,000 families across Mumbai. The group continues to set new standards in quality, design, and customer care.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="glass-3d rounded-xl p-6 sm:p-8 hover:shadow-glow-gold transition-all duration-300"
                    whileHover={{ rotateY: 2, rotateX: 2 }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 shadow-depth-1">
                      <Eye className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-heading font-bold mb-3 sm:mb-4 gradient-gold-text">
                      Our Vision
                    </h3>
                    <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                      To be recognized as Mumbai's most trusted real estate developer, delivering exceptional quality and value in every project we undertake, while setting new benchmarks in customer satisfaction, sustainable development, and community living.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="glass-3d rounded-xl p-6 sm:p-8 hover:shadow-glow-gold transition-all duration-300"
                    whileHover={{ rotateY: -2, rotateX: 2 }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 shadow-depth-1">
                      <Target className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-heading font-bold mb-3 sm:mb-4 gradient-gold-text">
                      Our Mission
                    </h3>
                    <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                      To create living and working spaces that enhance the quality of life for our customers through innovative design, superior construction, and unwavering commitment to excellence — while maintaining the highest standards of integrity and full transparency at every step.
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values Section with 3D Cards */}
        <section className="py-12 sm:py-16 bg-gradient-to-b from-primary/5 to-background">
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
                  Our Core Values
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                  The principles that guide us in everything we do
                </p>
              </motion.div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {coreValues.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="glass-3d rounded-xl p-5 sm:p-6 text-center hover:shadow-glow-gold transition-all duration-300 group"
                    whileHover={{ y: -5, rotateX: 5 }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:shadow-glow-gold transition-all">
                      <value.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-heading font-bold mb-2 sm:mb-3 text-foreground">
                      {value.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <MilestonesSection />

        {/* Legacy Projects Section */}
        <section className="py-12 sm:py-16 bg-background">
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
                  Completed Projects
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                  A proud legacy of 40+ successfully delivered projects across Mumbai
                </p>
              </motion.div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                {legacyProjects.map((project, index) => (
                  <motion.div
                    key={project.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.06 }}
                    className="glass-3d rounded-xl p-4 sm:p-5 hover:shadow-glow-gold transition-all duration-300 group"
                    whileHover={{ y: -3 }}
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    <h4 className="text-sm font-heading font-bold text-foreground mb-1">{project.name}</h4>
                    <p className="text-xs text-muted-foreground">{project.location}</p>
                    <p className="text-xs text-primary/70 mt-1">{project.type}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Message Section with 3D Effects */}
        <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-background to-primary/5 section-3d-bg">
          <div className="container mx-auto px-3 sm:px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="glass-3d rounded-2xl p-6 sm:p-8 md:p-12 shadow-depth-2"
              >
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <Star className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold gradient-gold-text">
                    Why Customers Choose Lalani Group
                  </h2>
                </div>
                <p className="text-base sm:text-lg text-foreground/90 leading-relaxed mb-4 sm:mb-6">
                  At Lalani Group, we understand that buying a home is one of the most important decisions in your life. That’s why we are committed to making this journey as smooth and rewarding as possible. Our team of experienced professionals works tirelessly to ensure that every aspect of your home meets the highest standards of quality and design.
                </p>
                <p className="text-base sm:text-lg text-foreground/90 leading-relaxed mb-4 sm:mb-6">
                  We take pride in our legacy of trust and transparency, built over four decades of serving the people of Mumbai. Whether it is a 1BHK starter home in Andheri or a premium 3BHK in Khar, every Lalani property is designed with the same care, commitment, and craftsmanship.
                </p>
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold gradient-gold-text">
                    Our Commitment
                  </h2>
                </div>
                <p className="text-base sm:text-lg text-foreground/90 leading-relaxed mb-6 sm:mb-8">
                  As we continue to grow and evolve with the changing needs of Mumbai, our commitment to excellence remains unwavering. We invite you to be a part of the Lalani family and experience the difference that quality, integrity, and four decades of dedication can make in your life.
                </p>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    to="/projects"
                    className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-primary to-gold-light text-primary-foreground font-semibold text-sm sm:text-base shadow-depth-2 hover:shadow-glow-gold transition-all btn-3d"
                  >
                    Explore Our Projects
                  </Link>
                </motion.div>
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

export default About;
