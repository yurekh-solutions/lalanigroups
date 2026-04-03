import { motion } from "framer-motion";
import lalaniLogo from "@/assets/LALANI_LOGO.png";

export default function LogoLoader() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-gradient-to-br from-black to-black/80 flex items-center justify-center z-[9999]"
    >
      <motion.div
        className="flex flex-col items-center gap-6"
      >
        {/* Logo with pulse animation */}
        <motion.div
          animate={{ 
            scale: [1, 1.05, 1],
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-32 h-32 bg-gradient-to-br from-primary to-gold-light rounded-2xl flex items-center justify-center shadow-2xl p-4"
        >
          <img 
            src={lalaniLogo}
            alt="Lalani Group"
            className="w-full h-full object-contain"
          />
        </motion.div>

        {/* Loading text */}
        <div className="text-center">
          <motion.h2
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-2xl font-bold text-primary mb-2"
          >
            Loading
          </motion.h2>
          <p className="text-gray-400 text-sm">Lalani Group</p>
        </div>

        {/* Loading dots */}
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 1.4,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              className="w-3 h-3 bg-primary rounded-full"
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
