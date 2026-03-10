import { motion } from "framer-motion";
import { Search, FileText, Home, Key, CheckCircle } from "lucide-react";
import hero2 from "@/assets/hero-2.jpg";

const steps = [
  {
    icon: Search,
    title: "Explore Projects",
    description: "Browse through our portfolio of residential and commercial properties across Mumbai's prime locations."
  },
  {
    icon: FileText,
    title: "Schedule Site Visit",
    description: "Book a personalized site visit to experience the project firsthand and consult with our experts."
  },
  {
    icon: Home,
    title: "Choose Your Home",
    description: "Select your preferred unit configuration and customize your dream home with our team's guidance."
  },
  {
    icon: CheckCircle,
    title: "Documentation",
    description: "Complete the registration process with transparent, MahaRERA-compliant documentation and agreements."
  },
  {
    icon: Key,
    title: "Get Your Keys",
    description: "Receive possession of your new home with quality assurance and comprehensive handover support."
  }
];

const BuyingProcess = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${hero2})` }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/85" />
      
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
              Simple & Transparent Process
            </span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 text-white">
            Your Journey to Dream Home
          </h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
            We've simplified the home buying process to make your experience smooth, transparent, and hassle-free from start to finish.
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-gold-light to-primary transform -translate-y-1/2" />
          
          <div className="grid grid-cols-5 gap-4 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                {/* Step Number Circle */}
                <div className="flex items-center justify-center mb-8">
                  <div className="relative w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center shadow-lg border border-primary/20">
                    <step.icon className="w-10 h-10 text-primary" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-card border-2 border-primary flex items-center justify-center">
                      <span className="text-sm font-bold text-primary">{index + 1}</span>
                    </div>
                  </div>
                </div>

                {/* Content Card */}
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-primary/50 shadow-lg hover:shadow-xl transition-all">
                  <h3 className="text-lg font-heading font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-white/80 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet Timeline */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex gap-4"
            >
              {/* Timeline Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-10 top-24 bottom-0 w-0.5 bg-gradient-to-b from-primary to-gold-light transform translate-x-1/2" />
              )}

              {/* Step Icon */}
              <div className="relative flex-shrink-0 w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center shadow-lg border border-primary/20">
                <step.icon className="w-9 h-9 text-primary" />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-card border-2 border-primary flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">{index + 1}</span>
                </div>
              </div>

              {/* Content Card */}
              <div className="flex-1 bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-primary/50 shadow-lg">
                <h3 className="text-xl font-heading font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-white/80 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-base md:text-lg text-muted-foreground mb-6">
            Have questions about the buying process? Our team is here to help!
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-primary to-gold-light text-primary-foreground font-semibold hover:shadow-xl transition-all hover:scale-105"
          >
            Contact Our Team
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default BuyingProcess;
