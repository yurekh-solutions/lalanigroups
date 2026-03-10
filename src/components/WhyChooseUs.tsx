import { motion } from "framer-motion";
import { Shield, Award, Users, Building, Clock, CheckCircle2 } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";

const features = [
  {
    icon: Shield,
    title: "40+ Years of Trust",
    description: "Since 1985, delivering quality homes with unwavering commitment to excellence and integrity."
  },
  {
    icon: Building,
    title: "40+ Projects Delivered",
    description: "Successfully completed diverse residential and commercial projects across Mumbai's prime locations."
  },
  {
    icon: Users,
    title: "4000+ Happy Families",
    description: "Thousands of satisfied homeowners trust Lalani Group for their dream homes and investments."
  },
  {
    icon: Award,
    title: "MahaRERA Approved",
    description: "All projects are registered and approved by MahaRERA, ensuring transparency and compliance."
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "Commitment to timely project completion with quality construction and finishing standards."
  },
  {
    icon: CheckCircle2,
    title: "Quality Assurance",
    description: "Earthquake-resistant structures, premium materials, and meticulous attention to every detail."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${hero1})` }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80" />
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
              Why Choose Lalani Group
            </span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 text-white">
            Building Dreams, Creating Landmarks
          </h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
            With over four decades of excellence in real estate, we've established ourselves as one of Mumbai's most trusted developers, delivering quality homes and creating lasting relationships.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20 hover:border-primary/50 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-primary/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 md:w-8 md:h-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-heading font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-white/80 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-base md:text-lg text-muted-foreground mb-6">
            Ready to find your dream home with a trusted developer?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/projects"
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-primary to-gold-light text-primary-foreground font-semibold hover:shadow-xl transition-all hover:scale-105"
            >
              View Our Projects
            </a>
            <a
              href="/contact"
              className="px-8 py-3.5 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-all hover:scale-105"
            >
              Talk to Our Experts
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
