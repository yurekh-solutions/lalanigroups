import { motion } from "framer-motion";
import { Building2, Home, Users, HardHat } from "lucide-react";

const milestones = [
  { icon: Building2, value: "40", label: "Years Of Experience" },
  { icon: Home, value: "40+", label: "Projects Completed" },
  { icon: Users, value: "4000+", label: "Happy Families" },
  { icon: HardHat, value: "03", label: "Projects Under Construction" },
];

const MilestonesSection = () => {
  return (
    <section id="milestones" className="section-padding bg-secondary/30">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold gradient-gold-text mb-4">
            Milestones
          </h2>
          <div className="gold-divider" />
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {milestones.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-xl p-6 lg:p-8 text-center group hover:border-primary/30 transition-all duration-500"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="font-heading text-3xl lg:text-4xl font-bold gradient-gold-text mb-2">
                {item.value}
              </div>
              <p className="font-body text-sm text-muted-foreground">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MilestonesSection;
