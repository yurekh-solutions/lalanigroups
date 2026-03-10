import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Building2, Users, Award, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: Award,
    value: 40,
    suffix: "+",
    label: "Years of Excellence"
  },
  {
    icon: Building2,
    value: 40,
    suffix: "+",
    label: "Projects Completed"
  },
  {
    icon: Users,
    value: 4000,
    suffix: "+",
    label: "Happy Families"
  },
  {
    icon: TrendingUp,
    value: 3,
    suffix: "",
    label: "Ongoing Projects"
  }
];

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl lg:text-6xl font-bold">
      {count}{suffix}
    </span>
  );
};

const StatsCounter = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-gold-light/5 to-primary/10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 gradient-gold-text">
            Our Achievements
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Numbers that speak for our commitment and excellence
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-20 group-hover:opacity-30 transition-opacity duration-300 rounded-2xl blur-xl"
                   style={{ background: `linear-gradient(135deg, var(--tw-gradient-stops))` }} />
              
              <div className="relative bg-card rounded-2xl p-8 shadow-lg border border-border/50 hover:border-primary/50 transition-all duration-300 text-center">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-gold-light/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                
                <div className="gradient-gold-text mb-2">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                
                <p className="text-muted-foreground font-medium">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
