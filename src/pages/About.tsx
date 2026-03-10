import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import MilestonesSection from "@/components/MilestonesSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import EnquireButton from "@/components/EnquireButton";
import BackToTopButton from "@/components/BackToTopButton";
import { motion } from "framer-motion";
import { Target, Eye, Heart, Lightbulb, Users2, TrendingUp } from "lucide-react";
import project3 from "@/assets/project-3.jpg";

const About = () => {
  const coreValues = [
    {
      icon: Heart,
      title: "Integrity",
      description: "We believe in honest and transparent dealings with all our stakeholders"
    },
    {
      icon: Target,
      title: "Excellence",
      description: "Committed to delivering superior quality in every project we undertake"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Embracing new technologies and design concepts for better living spaces"
    },
    {
      icon: Users2,
      title: "Customer Focus",
      description: "Your satisfaction and happiness is at the heart of everything we do"
    }
  ];

  return (
    <>
      <Navbar />
      <PageHero 
        title="About Lalani Group"
        subtitle="Building Trust, Creating Landmarks Since 1985"
        backgroundImage={project3}
      />
      <main className="pt-0">
        {/* About Content */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg border border-border/50">
                  <h2 className="text-3xl font-heading font-bold mb-6 text-primary">
                    Our Legacy
                  </h2>
                  <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                    Founded in the year 1985, The Lalani Group is one of the leading construction companies based in Mumbai. With over three decades of in-depth customer understanding and experience, The Lalani legacy boasts of homes and commercial spaces that offer unmatched quality and absolute value for money to its clients.
                  </p>
                  <p className="text-lg text-foreground/90 leading-relaxed">
                    Unlike previously where the value for a real estate was solely dependent on its location; the real estate industry today is more about reputation. Be it pioneering concepts, providing good customer support or using some of the most advanced technologies in design and construction, the Lalani Group has always been at the forefront, therefore cementing a strong brand image that speaks of trust and recognition in the real estate industry.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-8 border border-primary/20"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                      <Eye className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold mb-4 text-primary">
                      Our Vision
                    </h3>
                    <p className="text-foreground/80 leading-relaxed">
                      To be recognized as Mumbai's most trusted real estate developer, delivering exceptional quality and value in every project we undertake, while setting new benchmarks in customer satisfaction and sustainable development.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="bg-gradient-to-br from-gold-light/10 to-gold-light/5 rounded-xl p-8 border border-gold-light/20"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gold-light/20 flex items-center justify-center mb-4">
                      <Target className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold mb-4 text-primary">
                      Our Mission
                    </h3>
                    <p className="text-foreground/80 leading-relaxed">
                      To create living and working spaces that enhance the quality of life for our customers through innovative design, superior construction, and unwavering commitment to excellence, while maintaining the highest standards of integrity and transparency.
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
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
                  Our Core Values
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  The principles that guide us in everything we do
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {coreValues.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card rounded-xl p-6 shadow-lg border border-border/50 hover:border-primary/50 transition-all hover:shadow-xl text-center"
                  >
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-heading font-bold mb-3 text-foreground">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <MilestonesSection />

        {/* Leadership Message Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-background to-primary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-card rounded-2xl p-8 md:p-12 shadow-lg border border-border/50"
              >
                <div className="flex items-center gap-3 mb-6">
                  <TrendingUp className="w-8 h-8 text-primary" />
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary">
                    Our Commitment
                  </h2>
                </div>
                <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                  At Lalani Group, we understand that buying a home is one of the most important decisions in your life. That's why we are committed to making this journey as smooth and rewarding as possible. Our team of experienced professionals works tirelessly to ensure that every aspect of your home meets the highest standards of quality and design.
                </p>
                <p className="text-lg text-foreground/90 leading-relaxed">
                  We take pride in our legacy of trust and transparency, built over four decades of serving the people of Mumbai. As we continue to grow and evolve, our commitment to excellence remains unwavering. We invite you to be a part of the Lalani family and experience the difference that quality, integrity, and dedication can make.
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

export default About;
