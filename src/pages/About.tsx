import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import MilestonesSection from "@/components/MilestonesSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import EnquireButton from "@/components/EnquireButton";
import BackToTopButton from "@/components/BackToTopButton";
import LeadCapturePopup from "@/components/LeadCapturePopup";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Target, Eye, Heart, Lightbulb, Users2, TrendingUp, CheckCircle2, Star, Award, Building, Home, Users, Crown, User, Briefcase } from "lucide-react";
import aboutBg from "@/assets/project-2.jpg";
import lalaniimg from "@/assets/logolalani.png";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";

const About = () => {
  const coreValues = [
    {
      icon: Heart,
      title: "Integrity",
      description: "Honest and transparent dealings with all stakeholders. Every promise we make, we keep."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "Committed to delivering superior quality in every project from architecture to finishing."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Embracing new technologies and design concepts for better living spaces."
    },
    {
      icon: Users2,
      title: "Customer Focus",
      description: "Your satisfaction is at the heart of everything we do from booking to possession."
    }
  ];

  const stats = [
    { icon: Building, number: "40+", label: "Projects Delivered" },
    { icon: Users, number: "4000+", label: "Happy Families" },
    { icon: Award, number: "40+", label: "Years Experience" },
    { icon: Home, number: "1985", label: "Year Founded" }
  ];



  const teamMembers = [
    {
      name: "Mr. Shoukat G. Lalani",
      role: "Founder, CEO and Managing Director",
      icon: Crown,
      description: "A source of inspiration to all at Lalani Group, the humble beginnings of Mr. Shoukat Lalani's our Group founder and leader has laid the basis for a strong value system which continues even today. After years of a rewarding and proficient career in diverse businesses during which he garnered acute business aspects and knowledge, Mr. Lalani found his niche in the Construction Industry and ever since, he has molded and guided the Lalani Group to its supreme position today.",
      highlights: [
        "Natural flair for leadership combined with business acumen",
        "Outstanding entrepreneurial skills driving vision",
        "One of leading voices of the industry"
      ]
    },
    {
      name: "Mr. Hussain S. Lalani",
      role: "Director",
      icon: User,
      description: "After graduating with a Bachelors of Science in Business, Finance from Virginia Tech University in USA, Mr. Hussain Lalani gained extensive work experience and exposure to global work-culture and systems as part of the Financial Management Development Program of Ingersoll-Rand at their Rotary Drills Division in Garland, Texas, USA.",
      highlights: [
        "Global perspective and international experience",
        "Leads Legal and Financial matters of the Group",
        "Supervises Accounts Department"
      ]
    },
    {
      name: "Mr. Shamsu S. Lalani",
      role: "Director",
      icon: User,
      description: "A graduate with a Bachelors of Science in Business, Management Information Systems from Virginia Tech University in the USA, Mr. Shamsu Lalani joined the Lalani Group in 1999. His strong infusion of the spirit of modern business ethos and innovative branding initiatives are designed to take the Group to the next level of superiority.",
      highlights: [
        "Passion for excellence and pioneering new concepts",
        "Transforms dream homes into beautiful reality",
        "Leads innovative branding initiatives"
      ]
    },
    {
      name: "Mr. Arun Bhandari",
      role: "General Manager",
      icon: Briefcase,
      description: "At the helm of every successful organization is a central figure who coordinates the smooth functioning of vital day-to-day operations and maintaining perfect synergy amongst the different departments. A qualified Management Graduate, Mr. Arun Bhandari oversees the entire administration of the office. Under his efficient administrative prowess, the office functions like a well-oiled machine."
    }
  ];

  const architects = [
    {
      name: "Mr. Salim Pradhan",
      qualification: "G. D. Arch.",
      role: "Head of Architectural Division",
      description: "One of the most experienced and well-known in the industry, Mr. Pradhan has an inspiring track record with over 26 years of experience in his field, which includes the planning and design of townships and residential complexes."
    },
    {
      name: "Mr. Yunus Jhaveri",
      qualification: "",
      role: "Senior Architect",
      description: "Has extensive experience in the construction industry and a legacy of impressive projects in his repertoire. He works in conjunction with Mr. Pradhan and lends his expertise and overview on all blue chip projects undertaken by the Lalani Group."
    }
  ];

  return (
    <>
      <SEO
        title="About Lalani Group | Trusted Real Estate Developers Mumbai Since 1985 | 40+ Years"
        description="Lalani Group – Founded in 1985 by Mr. Shaukat Lalani, Mumbai's most trusted real estate builders. 40+ completed projects, 4000+ happy families. Delivering premium 1BHK, 2BHK, 3BHK homes in Andheri, Malad, Khar, Jogeshwari, Bandra & BKC with integrity & excellence."
        keywords="Lalani Group history, about Lalani builders, Shaukat Lalani, best builders in Mumbai, trusted real estate developers Mumbai, leading property developers Mumbai, reputed builders Mumbai, 40 years real estate Mumbai, Mumbai construction company, Lalani Group legacy, founded 1985 Mumbai, top real estate company Mumbai, real estate brand Mumbai, builder reputation Mumbai, RERA compliant builders"
        canonicalUrl="/about"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "About Lalani Group",
          "description": "Lalani Group is one of Mumbai's most trusted real estate developers, founded in 1985 by Mr. Shaukat Lalani with 40+ years of excellence.",
          "url": "https://lalanigroup.in/about",
          "mainEntity": {
            "@type": "Organization",
            "name": "Lalani Group",
            "foundingDate": "1985",
            "founder": { "@type": "Person", "name": "Mr. Shaukat Lalani" },
            "numberOfEmployees": { "@type": "QuantitativeValue", "value": "200" },
            "areaServed": "Mumbai, Maharashtra, India",
            "slogan": "Building Trust, Creating Landmarks Since 1985"
          }
        }}
      />
      <Navbar />
      <PageHero 
        title="About Lalani Group"
        subtitle="Building Trust, Creating Landmarks Since 1985"
        backgroundImage={aboutBg}
      />
      <main className="pt-0">
        
      
        {/* About Content Section */}
        <section className="py-12 sm:py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto space-y-8">
              
              {/* Legacy Story */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.6 }}
                className="glass-3d rounded-2xl p-6 sm:p-8 md:p-10"
              >
                <div className="flex items-center gap-3 mb-5">
                  <Building className="w-7 h-7 text-primary" />
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold gradient-gold-text">
                    Our Legacy
                  </h2>
                </div>
                <div className="space-y-4 text-sm sm:text-base text-foreground/90 leading-relaxed">
                  <p>
                    Founded in the year 1985, The Lalani Group is one of the leading construction companies based in Mumbai. With over three decades of in-depth customer understanding and experience, The Lalani legacy boasts of homes and commercial spaces that offer unmatched quality and absolute value for money to its clients.
                  </p>
                  <p>
                    Unlike previously where the value for a real estate was solely dependent on its location; the real estate industry today is more about reputation. Be it pioneering concepts, providing good customer support or using some of the most advanced technologies in design and construction, the Lalani Group has always been at the forefront, therefore cementing a strong brand image that speaks of trust and recognition in the real estate industry.
                  </p>
                  <p>
                    A concoction of age old values with modern ideas has only benefited us in growing. Our achievements towards the finest services and successful completions have only helped us advance into engineering aesthetics and sound technology. We strive to look beyond the realm of what exists and are here to create beyond the norm of what is seen!
                  </p>
                </div>
              </motion.div>

              {/* Image with Stats */}
              <div className="grid lg:grid-cols-2 gap-6 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.1 }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src={lalaniimg}
                      alt="Lalani Group Legacy"
                      className="w-full h-auto object-cover "
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-2 right-2 right-4">
                      <div className="inline-block px-4 py-2 rounded-full bg-primary/90 backdrop-blur-sm text-primary-foreground text-sm font-semibold">
                        Since 1985
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="glass-3d rounded-2xl p-6 sm:p-8"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <Eye className="w-7 h-7 text-primary" />
                    <h3 className="text-xl sm:text-2xl font-heading font-bold gradient-gold-text">
                      Our Vision
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-foreground/90 leading-relaxed mb-6">
                    To be recognized as Mumbai's most trusted real estate developer, delivering exceptional quality and value in every project we undertake, while setting new benchmarks in customer satisfaction, sustainable development, and community living.
                  </p>
                  
                  <div className="flex items-center gap-3 mb-5">
                    <Target className="w-7 h-7 text-primary" />
                    <h3 className="text-xl sm:text-2xl font-heading font-bold gradient-gold-text">
                      Our Mission
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-foreground/90 leading-relaxed">
                    To create living and working spaces that enhance the quality of life for our customers through innovative design, superior construction, and unwavering commitment to excellence — while maintaining the highest standards of integrity and full transparency at every step.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-10 sm:mb-16"
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold gradient-gold-text mb-4">
                  Our Core Values
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                  The principles that guide us in everything we do
                </p>
              </motion.div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
                {coreValues.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="glass-3d rounded-2xl p-5 sm:p-6 text-center hover:shadow-glow-gold transition-all duration-500 group"
                  >
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <value.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-heading font-bold mb-2 text-foreground">
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

        {/* Team Section */}
        <section className="py-12 sm:py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-10 sm:mb-16"
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold gradient-gold-text mb-4">
                  The Team
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                  Meet the experienced team behind Lalani Group's success
                </p>
              </motion.div>

              {/* Leadership Team */}
              <div className="space-y-6 mb-12">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="glass-3d rounded-2xl p-6 sm:p-8 hover:shadow-glow-gold transition-all duration-500"
                  >
                    <div className="flex flex-col sm:flex-row gap-5 sm:gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto sm:mx-0">
                          <member.icon className="w-10 h-10 sm:w-12 sm:h-12 text-primary" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="mb-3">
                          <h3 className="text-lg sm:text-xl font-heading font-bold text-foreground mb-1">
                            {member.name}
                          </h3>
                          <p className="text-sm sm:text-base text-primary font-medium">
                            {member.role}
                          </p>
                        </div>
                        <p className="text-sm sm:text-base text-foreground/80 leading-relaxed mb-3">
                          {member.description}
                        </p>
                        {member.highlights && member.highlights.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {member.highlights.map((highlight, i) => (
                              <span 
                                key={i}
                                className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                              >
                                <CheckCircle2 className="w-3 h-3" />
                                {highlight}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Architectural Team */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.6 }}
                className="glass-3d rounded-2xl p-6 sm:p-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Users2 className="w-7 h-7 text-primary" />
                  <h3 className="text-xl sm:text-2xl font-heading font-bold gradient-gold-text">
                    Core Architectural Team
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-foreground/80 leading-relaxed mb-6">
                  The mainstay of our business and so a conscious decision made by the Lalani Group to work only with the very best just so that we can give you our customers the very best.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-5">
                  {architects.map((architect, index) => (
                    <motion.div
                      key={architect.name}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false, amount: 0.1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-gradient-to-br from-primary/5 to-transparent rounded-xl p-5"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <User className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-heading font-bold text-foreground mb-1">
                            {architect.name}
                          </h4>
                          {architect.qualification && (
                            <p className="text-xs text-primary mb-2">{architect.qualification}</p>
                          )}
                          <p className="text-xs sm:text-sm text-primary font-medium mb-2">
                            {architect.role}
                          </p>
                          <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
                            {architect.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <p className="text-sm sm:text-base text-foreground/80 leading-relaxed mt-6 italic">
                  A formidable duo, with excellent team spirit, both Mr. Pradhan and Mr. Jhaveri have a penchant for detail. Together they have imbibed this positive attitude in their approach and these attributes have borne fruits in the aesthetic output visible in the projects executed by the Lalani Group. Men with vision, they are invaluable assets to the Group.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Completed Projects Section */}
        <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-10 sm:mb-16"
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold gradient-gold-text mb-4">
                  Completed Projects
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                  A proud legacy of 40+ successfully delivered projects across Mumbai
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                {projects.filter(p => p.category === "completed").map((project, index) => (
                  <div
                    key={project.id}
                    className="glass-3d rounded-xl overflow-hidden hover:shadow-glow-gold transition-all duration-500 group"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                      <img 
                        src={project.image} 
                        alt={project.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        fetchPriority={index < 3 ? "high" : "low"}
                        decoding="async"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.parentElement!.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <div className="absolute top-3 right-3">
                        <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-semibold">
                          <CheckCircle2 className="w-3 h-3" />
                          Completed
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="text-base sm:text-lg font-heading font-bold text-foreground mb-2">
                        {project.name}
                      </h4>
                      <p className="text-xs sm:text-sm text-muted-foreground flex items-center gap-1 mb-3">
                        <Building className="w-3 h-3" />
                        {project.location}
                      </p>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-primary font-medium px-2 py-1 rounded-full bg-primary/10">
                          {project.type}
                        </span>
                        {project.images && project.images.length > 1 && (
                          <span className="text-xs text-muted-foreground">
                            {project.images.length} Photos
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.6 }}
                className="glass-3d rounded-2xl p-8 sm:p-12"
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold gradient-gold-text mb-4">
                  Ready to Find Your Dream Home?
                </h2>
                <p className="text-base sm:text-lg text-foreground/80 mb-6 sm:mb-8 max-w-2xl mx-auto">
                  Experience the Lalani Group difference. Explore our premium residential and commercial projects across Mumbai's prime locations.
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
      <LeadCapturePopup />
    </>
  );
};

export default About;