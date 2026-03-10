import { motion } from "framer-motion";
import { Shield, Award, Clock, HeadphonesIcon, Sparkles, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "RERA Certified",
    description: "All projects registered with MahaRERA for your security"
  },
  {
    icon: Award,
    title: "40 Years Legacy",
    description: "Four decades of excellence in construction"
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "Proven track record of on-time project completion"
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Dedicated customer service team always available"
  },
  {
    icon: Sparkles,
    title: "Premium Quality",
    description: "Superior materials and world-class amenities"
  },
  {
    icon: TrendingUp,
    title: "Best ROI",
    description: "Prime locations ensuring excellent returns"
  }
];

const FeaturesGrid = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 gradient-gold-text">
            Why Choose Lalani Group
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the difference with Mumbai's most trusted real estate developer
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-gold-light/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl" />
              
              <div className="relative bg-card rounded-2xl p-6 shadow-lg border border-border/50 hover:border-primary/50 transition-all duration-300 h-full">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-gold-light/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
