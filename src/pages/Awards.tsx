import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import EnquireButton from "@/components/EnquireButton";
import BackToTopButton from "@/components/BackToTopButton";
import LeadCapturePopup from "@/components/LeadCapturePopup";
import SEO from "@/components/SEO";
import { Award, X, ChevronLeft, ChevronRight, Calendar, MapPin, Users, Trophy, Star } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import project2 from "@/assets/project-2.jpg";

// Dynamic imports for all award images
const awardImages2016 = import.meta.glob('@/assets/lalaniawards/*2016*/*.{jpg,JPG,jpeg,png}', { eager: true, query: '?url', import: 'default' });
const awardImages2014 = import.meta.glob('@/assets/lalaniawards/*2014*/*.{jpg,JPG,jpeg,png}', { eager: true, query: '?url', import: 'default' });
const awardImages2013 = import.meta.glob('@/assets/lalaniawards/*2013*/*.{jpg,JPG,jpeg,png}', { eager: true, query: '?url', import: 'default' });
const awardImages2012 = import.meta.glob('@/assets/lalaniawards/*2012*/*.{jpg,JPG,jpeg,png}', { eager: true, query: '?url', import: 'default' });
const awardImages2010 = import.meta.glob('@/assets/lalaniawards/*2010*/*.{jpg,JPG,jpeg,png}', { eager: true, query: '?url', import: 'default' });
const awardImages2009 = import.meta.glob('@/assets/lalaniawards/*2009*/*.{jpg,JPG,jpeg,png}', { eager: true, query: '?url', import: 'default' });
const awardImages2008 = import.meta.glob('@/assets/lalaniawards/*2008*/*.{jpg,JPG,jpeg,png}', { eager: true, query: '?url', import: 'default' });
const awardImages2007 = import.meta.glob('@/assets/lalaniawards/*2007*/*.{jpg,JPG,jpeg,png}', { eager: true, query: '?url', import: 'default' });
const awardMain = import.meta.glob('@/assets/lalaniawards/1 Award For Lalani Residency*.{jpg,JPG,jpeg,png}', { eager: true, query: '?url', import: 'default' });

// Award data structure
interface AwardData {
  year: number;
  title: string;
  subtitle: string;
  location?: string;
  description: string;
}

// Helper function to convert glob results to array
const globToArray = (globObj: Record<string, unknown>): string[] => {
  return Object.values(globObj) as string[];
};

const Awards = () => {
  const [activeTab, setActiveTab] = useState<number>(2016);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxImages, setLightboxImages] = useState<AwardData[]>([]);

  // Award data organized by year
  const awardDataByYear: Record<number, AwardData[]> = {
    2016: [
      { year: 2016, title: "Best Project of the Year", subtitle: "Residential Mumbai", location: "Lalani Grandeur, Goregaon East", description: "Excellence in residential development recognized by industry experts" },
      { year: 2016, title: "Excellence in Design", subtitle: "Architecture Award", location: "Mumbai Region", description: "Innovative architectural design and modern living spaces" },
      { year: 2016, title: "Quality Construction", subtitle: "Best Residential Project", location: "Goregaon East", description: "Superior construction quality and timely delivery" },
      { year: 2016, title: "Customer Satisfaction", subtitle: "Top Rated Project", location: "Mumbai", description: "Highest customer satisfaction in residential segment" },
      { year: 2016, title: "Modern Amenities", subtitle: "Best Facilities Award", location: "Lalani Grandeur", description: "World-class amenities and lifestyle facilities" },
    ],
    2014: [
      { year: 2014, title: "National Real Estate Awards", subtitle: "Best Residential Project", location: "Lalani Residency, Thane West", description: "29th Anniversary National Real Estate Awards recognition" },
      { year: 2014, title: "Best Residential Project", subtitle: "Accommodation Times Award", location: "Thane West", description: "Excellence in residential development in Mumbai Metropolitan Region" },
    ],
    2013: [
      { year: 2013, title: "International Award", subtitle: "Platinum Eagle for Prestige", location: "International", description: "International recognition for quality and excellence" },
      { year: 2013, title: "Quality Excellence", subtitle: "Prestige and Quality Award", location: "Global", description: "Awarded for outstanding quality standards" },
    ],
    2012: [
      { year: 2012, title: "International Gold Star", subtitle: "Quality Certification", location: "Paris, France", description: "International Gold Star for Quality awarded in Paris" },
      { year: 2012, title: "Quality Certification", subtitle: "Gold Star Standards", location: "International", description: "Recognition of quality management systems" },
      { year: 2012, title: "Excellence Award", subtitle: "Quality Achievement", location: "Paris", description: "Excellence in quality standards" },
      { year: 2012, title: "Trophy Award", subtitle: "Quality Excellence", location: "International", description: "Trophy for quality excellence" },
      { year: 2012, title: "Best Quality", subtitle: "Quality Star Award", location: "Global", description: "Gold star for quality achievement" },
    ],
    2010: [
      { year: 2010, title: "Best Stall Design", subtitle: "MCHI Award", location: "MCHI Exhibition", description: "Excellence in exhibition stall design" },
    ],
    2009: [
      { year: 2009, title: "Social Contribution", subtitle: "Real Estate Sector", location: "Mumbai", description: "Recognition for social contribution in real estate" },
      { year: 2009, title: "Community Service", subtitle: "Excellence in Service", location: "Mumbai Region", description: "Award for community service initiatives" },
      { year: 2009, title: "Social Impact", subtitle: "Real Estate Award", location: "Mr. Hussain Lalani", description: "Recognition of social impact through development" },
    ],
    2008: [
      { year: 2008, title: "Best Commercial Project", subtitle: "Commercial Excellence", location: "Lalani Quantum, Pune", description: "Best commercial project in Pune region" },
      { year: 2008, title: "Commercial Achievement", subtitle: "Project Excellence", location: "Pune", description: "Recognition for commercial development excellence" },
      { year: 2008, title: "Business Park Award", subtitle: "Commercial Development", location: "Pune", description: "Award for outstanding business park development" },
    ],
    2007: [
      { year: 2007, title: "Best Mall of the Year", subtitle: "Main Street Mall", location: "Reliance Trends, Bandra West", description: "Best mall development in Mumbai" },
      { year: 2007, title: "Retail Excellence", subtitle: "Shopping Destination", location: "Bandra West", description: "Recognition for retail space excellence" },
      { year: 2007, title: "Commercial Landmark", subtitle: "Best Commercial", location: "Mumbai", description: "Award for landmark commercial development" },
    ],
  };

  // Get images for a specific year
  const getImagesForYear = (year: number): string[] => {
    const images: string[] = [];
    switch (year) {
      case 2016: return globToArray(awardImages2016 as Record<string, unknown>);
      case 2014: return globToArray(awardImages2014 as Record<string, unknown>);
      case 2013: return globToArray(awardImages2013 as Record<string, unknown>);
      case 2012: return globToArray(awardImages2012 as Record<string, unknown>);
      case 2010: return globToArray(awardImages2010 as Record<string, unknown>);
      case 2009: return globToArray(awardImages2009 as Record<string, unknown>);
      case 2008: return globToArray(awardImages2008 as Record<string, unknown>);
      case 2007: return globToArray(awardImages2007 as Record<string, unknown>);
      default: return globToArray(awardMain as Record<string, unknown>);
    }
  };

  const years = [2016, 2014, 2013, 2012, 2010, 2009, 2008, 2007];
  const currentImages = getImagesForYear(activeTab);
  const currentAwards = awardDataByYear[activeTab] || [];

  const openLightbox = (index: number, images: AwardData[]) => {
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <SEO
        title="Awards & Recognition | Lalani Group Mumbai"
        description="Celebrating excellence in real estate development with prestigious awards from Lalani Group."
        keywords="Lalani Group awards, real estate awards Mumbai, awards recognition"
        canonicalUrl="/awards"
      />
      <Navbar />
      <PageHero 
        title="Awards & Recognition"
        subtitle="Celebrating excellence in real estate development with prestigious awards"
        backgroundImage={project2}
      />
      <main className="pt-0">
        {/* Elegant Awards Section with Tabs */}
        <section className="py-8 sm:py-10 md:py-16 bg-gradient-to-b from-card via-background to-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <motion.div
              initial={{ opacity: 1 }}
              className="max-w-6xl mx-auto mb-8 md:mb-12"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <Trophy className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground">
                  Our Awards Gallery
                </h2>
              </div>
              <p className="text-center text-muted-foreground max-w-3xl mx-auto text-sm sm:text-base md:text-lg px-4">
                A journey through our years of excellence and achievements in real estate development
              </p>
            </motion.div>

            {/* Year Tabs */}
            <div className="max-w-7xl mx-auto">
              {/* Tab Navigation */}
              <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12">
                {years.map((year) => {
                  return (
                    <button
                      key={year}
                      onClick={() => setActiveTab(year)}
                      className={`relative px-4 py-2 md:px-6 md:py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                        activeTab === year
                          ? 'bg-primary text-white shadow-lg shadow-primary/30 scale-105'
                          : 'bg-card text-muted-foreground hover:bg-primary/10 hover:text-primary border border-border'
                      }`}
                    >
                      <span className="text-sm md:text-base">{year}</span>
                      {activeTab === year && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute inset-0 bg-primary rounded-xl -z-10"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Tab Content Panel */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-card/50 rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 border border-border/50 backdrop-blur-sm"
                >
                  {/* Year Header */}
                  <div className="flex items-center gap-3 mb-6 md:mb-8">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-xl md:rounded-2xl flex items-center justify-center">
                      <Calendar className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground">{activeTab} Awards</h3>
                    </div>
                  </div>

                  {/* Awards Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {awardDataByYear[activeTab]?.map((award, index) => {
                      const imageSrc = currentImages[index] || currentImages[0];
                      return (
                        <motion.div
                          key={`${activeTab}-${index}`}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="group relative h-auto min-h-[400px] sm:min-h-[450px] rounded-xl md:rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 bg-card"
                          onClick={() => openLightbox(index, awardDataByYear[activeTab] || [])}
                        >
                          {/* Image Container - Fixed height for consistent display */}
                          <div className="relative w-full h-64 sm:h-72 md:h-80 overflow-hidden bg-gradient-to-br from-primary/5 to-transparent">
                            <img
                              src={imageSrc}
                              alt={award.title}
                              className="w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-105"
                              loading="lazy"
                            />
                          </div>
                          
                          {/* Content Section */}
                          <div className="p-4 md:p-5">
                            {/* Badge */}
                            <div className="flex items-center gap-2 mb-2">
                              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                              <span className="text-xs md:text-sm font-medium text-primary">{award.subtitle}</span>
                            </div>
                            
                            {/* Title */}
                            <h4 className="text-lg md:text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                              {award.title}
                            </h4>
                            
                            {/* Location */}
                            {award.location && (
                              <div className="flex items-center gap-2 mb-3">
                                <MapPin className="w-3 h-3 md:w-4 md:h-4 text-muted-foreground" />
                                <span className="text-xs md:text-sm text-muted-foreground">{award.location}</span>
                              </div>
                            )}
                            
                            {/* Description - Always visible */}
                            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed line-clamp-3">
                              {award.description}
                            </p>
                            
                            {/* View Button */}
                            <div className="mt-4 flex items-center justify-between">
                              <div className="text-xs text-primary font-semibold">Click to view details</div>
                              <Award className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-2 group-hover:translate-x-0" />
                            </div>
                          </div>
                          
                          {/* Gold Border Animation on Hover */}
                          <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/30 rounded-xl md:rounded-2xl transition-colors duration-500 pointer-events-none" />
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <EnquireButton />
      <BackToTopButton />
      <LeadCapturePopup />

      {/* Lightbox */}
      {lightboxOpen && lightboxImages.length > 0 && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4">
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 p-3 bg-white/10 rounded-full text-white hover:bg-primary transition-colors z-10"
          >
            <X className="w-6 h-6" />
          </button>
          
          <button
            onClick={() => setLightboxIndex((prev) => (prev - 1 + lightboxImages.length) % lightboxImages.length)}
            className="absolute left-2 md:left-6 p-3 bg-white/10 rounded-full text-white hover:bg-primary transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <div className="max-w-5xl max-h-[85vh] flex flex-col items-center">
            <img
              src={currentImages[lightboxIndex] || currentImages[0]}
              alt={lightboxImages[lightboxIndex]?.title}
              className="max-w-full max-h-[60vh] object-contain rounded-xl shadow-2xl"
            />
            <div className="mt-6 text-center px-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <span className="text-sm font-medium text-yellow-300">{lightboxImages[lightboxIndex]?.subtitle}</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{lightboxImages[lightboxIndex]?.title}</h3>
              {lightboxImages[lightboxIndex]?.location && (
                <div className="flex items-center justify-center gap-2 mb-3">
                  <MapPin className="w-4 h-4 text-white/70" />
                  <span className="text-white/70">{lightboxImages[lightboxIndex]?.location}</span>
                </div>
              )}
              <p className="text-white/80 text-sm md:text-base max-w-2xl mx-auto">{lightboxImages[lightboxIndex]?.description}</p>
            </div>
          </div>
          
          <button
            onClick={() => setLightboxIndex((prev) => (prev + 1) % lightboxImages.length)}
            className="absolute right-2 md:right-6 p-3 bg-white/10 rounded-full text-white hover:bg-primary transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          
          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/10 rounded-full text-white text-sm">
            {lightboxIndex + 1} / {lightboxImages.length}
          </div>
        </div>
      )}
    </>
  );
};

export default Awards;
