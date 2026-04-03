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
        <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-2xl p-4">
          <img 
            src={lalaniLogo}
            alt="Lalani Group"
            className="w-full h-full object-contain"
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
