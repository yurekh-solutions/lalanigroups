import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

export default function InstagramFeed() {
  return (
    <section className="w-full py-12 sm:py-16 md:py-20 bg-gradient-to-b from-background via-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram className="w-8 h-8 text-pink-500" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
              Follow Us on <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">Instagram</span>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with our latest projects, events, and real estate insights
          </p>
        </motion.div>

        {/* Instagram Embed Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full max-w-4xl mx-auto"
        >
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-border/50 bg-card">
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
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://www.instagram.com/lalanigroup/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <Instagram className="w-5 h-5" />
            Visit @lalanigroup
          </a>
        </motion.div>
      </div>
    </section>
  );
}
