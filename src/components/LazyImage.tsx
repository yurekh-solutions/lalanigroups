import { useState } from "react";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  priority?: boolean; // For hero images that should load first
}

export const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = "w-full h-full object-cover",
  containerClassName = "",
  priority = false,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => setIsLoaded(true);
  const handleError = () => {
    setHasError(true);
  };

  return (
    <div className={`relative overflow-hidden ${containerClassName}`}>
      {/* Subtle skeleton while loading - faster animation */}
      {!isLoaded && !hasError && (
        <div 
          className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-700 animate-pulse"
          aria-hidden="true"
        />
      )}

      {/* Image with faster fade-in when loaded */}
      {!hasError && (
        <img
          src={src}
          alt={alt}
          className={`${className} transition-opacity duration-300 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={handleLoad}
          onError={handleError}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          decoding="async"
        />
      )}

      {/* Error State */}
      {hasError && (
        <div className={`flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-400 text-xs ${className}`}>
          <span>Image unavailable</span>
        </div>
      )}
    </div>
  );
};

export default LazyImage;
