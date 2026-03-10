import { motion } from "framer-motion";
import aboutBg from "@/assets/hero-1.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="relative section-padding overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={aboutBg} alt="Lalani Group developments" className="w-full h-full object-cover opacity-20" loading="lazy" />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      <div className="container-max relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold gradient-gold-text mb-6">
              About Lalani Group
            </h2>
            <div className="gold-divider !mx-0 mb-8" />
            <p className="font-body text-secondary-foreground leading-relaxed mb-6">
              Founded in the year 1985, The Lalani Group is one of the leading construction
              companies based in Mumbai. With over three decades of in-depth customer understanding
              and experience, The Lalani legacy boasts of homes and commercial spaces that offer
              unmatched quality and absolute value for money to its clients.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              Be it pioneering concepts, providing good customer support or using some of the most
              advanced technologies in design and construction, the Lalani Group has always been at
              the forefront, cementing a strong brand image that speaks of trust and recognition
              in the real estate industry.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-body font-semibold hover:bg-gold-light transition-colors duration-300"
            >
              Get In Touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="glass-card rounded-2xl p-8 lg:p-10">
              <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
                Our Promise
              </h3>
              <ul className="space-y-4">
                {[
                  "Premium quality construction with finest materials",
                  "Transparent dealings with RERA compliance",
                  "Timely delivery of all projects",
                  "World-class amenities & modern design",
                  "Prime locations across Mumbai",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="font-body text-secondary-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
