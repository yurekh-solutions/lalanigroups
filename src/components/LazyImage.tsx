import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
}

export const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = "w-full h-full object-cover",
  containerClassName = "",
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => setIsLoading(false);
  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className={`relative overflow-hidden bg-background/50 ${containerClassName}`}>
      {/* Loading Spinner Overlay */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 z-20 flex items-center justify-center bg-background/80 backdrop-blur-sm"
          >
            {/* Spinner Container */}
            <div className="flex flex-col items-center gap-3">
              {/* Main Spinner */}
              <div className="relative w-10 h-10">
                {/* Outer Ring */}
                <motion.div
                  className="absolute inset-0 rounded-full border-3 border-transparent border-t-[#c9a962] border-r-[#c9a962]"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
                {/* Inner Ring */}
                <motion.div
                  className="absolute inset-1 rounded-full border-2 border-transparent border-b-primary/40"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />
              </div>
              {/* Loading Text */}
              <motion.p
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-xs font-medium text-muted-foreground"
              >
                Loading...
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Image */}
      {!hasError && (
        <motion.img
          src={src}
          alt={alt}
          className={className}
          onLoad={handleLoad}
          onError={handleError}
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoading ? 0 : 1 }}
          transition={{ duration: 0.4 }}
          loading="lazy"
        />
      )}

      {/* Error State */}
      {hasError && (
        <div className={`flex items-center justify-center bg-background/70 text-muted-foreground text-xs ${className}`}>
          <span>⚠️ Failed to load image</span>
        </div>
      )}
    </div>
  );
};

export default LazyImage;
