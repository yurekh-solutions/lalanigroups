import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

// Local project images
import mainElevation from "@/assets/lalanigoodwill/1 Main Elevation.jpg";
import busines from "@/assets/lalanibusinespark/busines.png";
import busines3 from "@/assets/lalanibusinespark/busines3.png";
import business1 from "@/assets/lalanibusinespark/business1.png";
import business2 from "@/assets/lalanibusinespark/business2.png";
import dream from "@/assets/lalaniheritage/dream.png";
import heritage from "@/assets/lalaniheritage/heritage.png";
import lalaniaura from "@/assets/lalanibusinespark/lalaniaura.png";
import graduner from "@/assets/lalaniheritage/graduner.png";
import residency from "@/assets/lalanibusinespark/residency.png";
import quantum from "@/assets/lalanibusinespark/quantum.png";

const galleryImages = [
  { id: 1, src: mainElevation, title: "Lalani Goodwill", category: "Andheri East" },
  { id: 2, src: busines, title: "Lalani Business Park", category: "Khar West" },
  { id: 3, src: busines3, title: "Velentine Apartment", category: "Malad East" },
  { id: 4, src: business1, title: "Lalani Corporate Plaza", category: "BKC" },
  { id: 5, src: business2, title: "Lalani Towers", category: "Andheri West" },
  { id: 6, src: dream, title: "Lalani Dream Residency", category: "Karjat" },
  { id: 7, src: heritage, title: "Lalani Heritage Park", category: "Jogeshwari West" },
  { id: 8, src: lalaniaura, title: "Lalani Aura", category: "Commercial" },
  { id: 9, src: graduner, title: "Lalani Grandeur", category: "Goregaon East" },
  { id: 10, src: residency, title: "Lalani Skyview", category: "Goregaon West" },
  { id: 11, src: quantum, title: "Lalani Quantum", category: "Commercial" },
  { id: 12, src: mainElevation, title: "Premium Residences", category: "Mumbai" }
];

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handlePrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <>
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 gradient-gold-text">
              Project Gallery
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Take a visual tour of our stunning developments
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="relative group cursor-pointer overflow-hidden rounded-xl aspect-square"
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-bold text-sm mb-1">{image.title}</p>
                    <p className="text-white/80 text-xs">{image.category}</p>
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-12 h-12 rounded-full bg-primary/80 flex items-center justify-center">
                      <ZoomIn className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); handlePrevious(); }}
              className="absolute left-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
              className="absolute right-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="max-w-5xl max-h-[90vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].title}
                className="w-full h-full object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <h3 className="text-white font-bold text-xl mb-1">
                  {galleryImages[selectedImage].title}
                </h3>
                <p className="text-white/80 text-sm">
                  {galleryImages[selectedImage].category}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ImageGallery;
