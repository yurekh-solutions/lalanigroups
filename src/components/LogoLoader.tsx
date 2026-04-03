import { motion } from "framer-motion";
import lalaniLogo from "@/assets/LALANI_LOGO.png";

export default function LogoLoader() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[9999]"
    >
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="flex flex-col items-center gap-4"
      >
        <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-2xl">
          <img 
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect fill='%23D4AF37' width='200' height='200'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' font-size='80' font-weight='bold' fill='%23000'%3EL%3C/text%3E%3C/svg%3E"
            alt="Lalani Logo"
            className="w-20 h-20"
          />
        </div>
        <motion.div
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-white text-center"
        >
          <p className="text-lg font-semibold">Loading...</p>
          <p className="text-sm text-gray-300">Lalani Group</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
