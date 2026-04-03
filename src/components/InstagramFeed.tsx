import { motion } from "framer-motion";
import { Instagram, ArrowRight } from "lucide-react";

export default function InstagramFeed() {
  return (
    <section className="w-full py-16 sm:py-20 md:py-24 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-gold-light/5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-light/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-8">
            <Instagram className="w-8 h-8 text-primary" />
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground">
              Follow Us on <span className="bg-gradient-to-r from-primary via-gold-light to-primary bg-clip-text text-transparent">@lalanigroup</span>
            </h2>
          </div>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Stay updated with our latest luxury projects, stunning designs, and real estate success stories from Lalani Group
          </p>
        </motion.div>

        {/* Instagram Embed Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full max-w-5xl mx-auto mb-12"
        >
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-gold-light to-primary rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-all duration-300"></div>
            
            {/* Card */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-primary/20 bg-card backdrop-blur-sm">
              <iframe
                src="https://www.instagram.com/lalanigroup/embed"
                width="100%"
                height="600"
                frameBorder="0"
                scrolling="no"
                allowTransparency
                className="w-full"
                title="Lalani Group Instagram Feed"
              />
            </div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4"
        >
          <a
            href="https://www.instagram.com/lalanigroup/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full sm:w-64 h-14 flex items-center justify-center gap-2 px-8 sm:px-10 py-3.5 sm:py-4 bg-gradient-to-r from-primary to-gold-light text-primary-foreground rounded-full font-bold text-base sm:text-lg shadow-depth-2 hover:shadow-glow-gold hover:scale-105 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gold-light to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex items-center gap-2">
              <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
              <span>Visit @lalanigroup</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>
          
          <motion.a
            href="https://www.instagram.com/lalanigroup/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-64 h-14 flex items-center justify-center gap-2 px-8 sm:px-10 py-3.5 sm:py-4 border-2 border-primary text-primary rounded-full font-bold text-base sm:text-lg hover:bg-primary/10 transition-all duration-300 glass-3d"
          >
            <span>Follow Now</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
