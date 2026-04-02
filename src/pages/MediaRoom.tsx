import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import EnquireButton from "@/components/EnquireButton";
import BackToTopButton from "@/components/BackToTopButton";
import LeadCapturePopup from "@/components/LeadCapturePopup";
import ImageGallery from "@/components/ImageGallery";

import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Calendar, MapPin, Award, Star } from "lucide-react";
import { useState, useEffect } from "react";
import project2 from "@/assets/project-2.jpg";

// Dynamic imports for all media images
const mediaImages2016 = import.meta.glob('@/assets/lalanimedia/9 CREDAI YOUTH WING EXPO VASHI NAVI MUMBAI  2016/*.{jpg,JPG,jpeg,png}', { eager: true, query: '?url', import: 'default' });
const mediaImages2015 = import.meta.glob('@/assets/lalanimedia/8 MCHI 2015/*.{jpg,JPG,jpeg,png}', { eager: true, query: '?url', import: 'default' });
const mediaImages2014 = import.meta.glob('@/assets/lalanimedia/7 MCHI EXP 2014/*.{jpg,JPG,jpeg,png}', { eager: true, query: '?url', import: 'default' });
const mediaImages2013HT = import.meta.glob('@/assets/lalanimedia/6 HT EXPO OCTOBER 2013/*.{jpg,JPG,jpeg,png}', { eager: true, query: '?url', import: 'default' });
const mediaImages2013Credai = import.meta.glob('@/assets/lalanimedia/5 MCHI CREDAI BKC OCTOBER 2013/*.{jpg,JPG,jpeg,png}', { eager: true, query: '?url', import: 'default' });
const mediaImages2012 = import.meta.glob('@/assets/lalanimedia/4 MCHI EXPO BKC NOVEMBER 2012/*.{jpg,JPG,jpeg,png}', { eager: true, query: '?url', import: 'default' });
const mediaImages2011 = import.meta.glob('@/assets/lalanimedia/3 DNA EXPO JANUARY 2011/*.{jpg,JPG,jpeg,png}', { eager: true, query: '?url', import: 'default' });
const mediaImages2010BKC = import.meta.glob('@/assets/lalanimedia/2 MCHI EXPO BKC OCTOBER 2010/*.{jpg,JPG,jpeg,png}', { eager: true, query: '?url', import: 'default' });
const mediaImages2010Thane = import.meta.glob('@/assets/lalanimedia/1 MCHI EXPO THANE MAY 2010/*.{jpg,JPG,jpeg,png}', { eager: true, query: '?url', import: 'default' });

// Award images
const awardImages2016 = import.meta.glob('@/assets/lalaniawards/*2016*/*.{jpg,JPG,jpeg,png}', { eager: true, query: '?url', import: 'default' });
const awardImages2014 = import.meta.glob('@/assets/lalaniawards/*2014*/*.{jpg,JPG,jpeg,png}', { eager: true, query: '?url', import: 'default' });
const awardImages2013 = import.meta.glob('@/assets/lalaniawards/*2013*/*.{jpg,JPG,jpeg,png}', { eager: true, query: '?url', import: 'default' });
const awardImages2012 = import.meta.glob('@/assets/lalaniawards/*2012*/*.{jpg,JPG,jpeg,png}', { eager: true, query: '?url', import: 'default' });
const awardImages2010 = import.meta.glob('@/assets/lalaniawards/*2010*/*.{jpg,JPG,jpeg,png}', { eager: true, query: '?url', import: 'default' });
const awardImages2009 = import.meta.glob('@/assets/lalaniawards/*2009*/*.{jpg,JPG,jpeg,png}', { eager: true, query: '?url', import: 'default' });
const awardImages2008 = import.meta.glob('@/assets/lalaniawards/*2008*/*.{jpg,JPG,jpeg,png}', { eager: true, query: '?url', import: 'default' });
const awardImages2007 = import.meta.glob('@/assets/lalaniawards/*2007*/*.{jpg,JPG,jpeg,png}', { eager: true, query: '?url', import: 'default' });

// Helper function to convert glob results to array
const globToArray = (globObj: Record<string, unknown>): string[] => {
  return Object.values(globObj) as string[];
};

interface MediaEvent {
  year: number;
  title: string;
  location: string;
  date: string;
  images: string[];
  type: 'media' | 'award';
}

interface AwardData {
  year: number;
  title: string;
  subtitle: string;
  location?: string;
  description: string;
}

const MediaRoom = () => {
  const [activeTab, setActiveTab] = useState<number>(2016);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);

  // Award data organized by year
  const awardDataByYear: Record<number, AwardData[]> = {
    2016: [
      { year: 2016, title: "Best Project of the Year - Residential", subtitle: "Lalani Grandeur", location: "Mumbai", description: "Award for excellence in residential development" },
      { year: 2016, title: "Excellence in Commercial Development", subtitle: "Lalani Business Park", location: "Mumbai", description: "Recognition for outstanding commercial project" },
      { year: 2016, title: "Innovation in Architecture", subtitle: "Design Excellence Award", location: "Mumbai", description: "Award for innovative architectural design" },
      { year: 2016, title: "Sustainable Development Award", subtitle: "Green Building Initiative", location: "Mumbai", description: "Recognition for sustainable construction practices" },
      { year: 2016, title: "Customer Satisfaction Award", subtitle: "Client Choice Award", location: "Mumbai", description: "Award for exceptional customer service" }
    ],
    2014: [
      { year: 2014, title: "Rising Star Developer", subtitle: "Emerging Leader", location: "Mumbai", description: "Recognition as an emerging leader in real estate" },
      { year: 2014, title: "Quality Construction Award", subtitle: "Build Excellence", location: "Mumbai", description: "Award for superior construction quality" }
    ],
    2013: [
      { year: 2013, title: "Best Affordable Housing", subtitle: "People's Choice", location: "Mumbai", description: "Award for affordable housing excellence" },
      { year: 2013, title: "Timely Delivery Award", subtitle: "Commitment Fulfilled", location: "Mumbai", description: "Recognition for on-time project delivery" }
    ],
    2012: [
      { year: 2012, title: "Luxury Living Award", subtitle: "Premium Development", location: "Mumbai", description: "Award for luxury residential project" },
      { year: 2012, title: "Best Amenities", subtitle: "Lifestyle Excellence", location: "Mumbai", description: "Recognition for world-class amenities" },
      { year: 2012, title: "Prime Location Award", subtitle: "Connectivity Plus", location: "Mumbai", description: "Award for strategic location advantage" },
      { year: 2012, title: "Value for Money", subtitle: "Smart Investment", location: "Mumbai", description: "Recognition for providing excellent value" },
      { year: 2012, title: "Modern Design Award", subtitle: "Contemporary Living", location: "Mumbai", description: "Award for modern architectural design" }
    ],
    2010: [
      { year: 2010, title: "First Time Homebuyer Award", subtitle: "Dream Home", location: "Mumbai", description: "Recognition for helping first-time buyers" }
    ],
    2009: [
      { year: 2009, title: "Trust & Reliability", subtitle: "Builder You Can Trust", location: "Mumbai", description: "Award for building trust with customers" },
      { year: 2009, title: "Safety Standards", subtitle: "Secure Construction", location: "Mumbai", description: "Recognition for maintaining high safety standards" },
      { year: 2009, title: "Community Impact", subtitle: "Making a Difference", location: "Mumbai", description: "Award for positive community impact" }
    ],
    2008: [
      { year: 2008, title: "Emerging Developer", subtitle: "New Force in Real Estate", location: "Mumbai", description: "Recognition as an emerging developer" },
      { year: 2008, title: "Innovation Award", subtitle: "Thinking Different", location: "Mumbai", description: "Award for innovative approaches" },
      { year: 2008, title: "Customer First", subtitle: "Service Excellence", location: "Mumbai", description: "Recognition for customer-centric approach" }
    ],
    2007: [
      { year: 2007, title: "Debut Project Award", subtitle: "Strong Start", location: "Mumbai", description: "Recognition for impressive debut project" },
      { year: 2007, title: "Promise of Excellence", subtitle: "Future Leader", location: "Mumbai", description: "Award showing promise of future excellence" },
      { year: 2007, title: "Local Hero", subtitle: "Community Favorite", location: "Mumbai", description: "Recognition as a local favorite builder" }
    ]
  };

  // Helper function to convert glob results to array
  const globToArray = (globObj: Record<string, unknown>): string[] => {
    return Object.values(globObj) as string[];
  };

  // Media events organized by year
  const mediaEvents: Record<number, MediaEvent[]> = {
    2016: [
      { year: 2016, title: "CREDAI Youth Wing Expo", location: "Vashi, Navi Mumbai", date: "2016", images: globToArray(mediaImages2016), type: 'media' },
    ],
    2015: [
      { year: 2015, title: "MCHI Exhibition", location: "Mumbai", date: "2015", images: globToArray(mediaImages2015), type: 'media' },
    ],
    2014: [
      { year: 2014, title: "MCHI Expo", location: "Mumbai", date: "2014", images: globToArray(mediaImages2014), type: 'media' },
    ],
    2013: [
      { year: 2013, title: "HT Expo", location: "Mumbai", date: "October 2013", images: globToArray(mediaImages2013HT), type: 'media' },
      { year: 2013, title: "MCHI CREDAI Expo", location: "BKC, Mumbai", date: "October 2013", images: globToArray(mediaImages2013Credai), type: 'media' },
    ],
    2012: [
      { year: 2012, title: "MCHI Expo", location: "BKC, Mumbai", date: "November 2012", images: globToArray(mediaImages2012), type: 'media' },
    ],
    2010: [
      { year: 2010, title: "MCHI Expo BKC", location: "BKC, Mumbai", date: "October 2010", images: globToArray(mediaImages2010BKC), type: 'media' },
      { year: 2010, title: "MCHI Expo Thane", location: "Thane", date: "May 2010", images: globToArray(mediaImages2010Thane), type: 'media' },
    ],
  };

  const openLightbox = (index: number, images: string[]) => {
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  // Get all years from both media and awards
  const allYears = Array.from(new Set([
    ...Object.keys(mediaEvents).map(Number),
    ...Object.keys(awardDataByYear).map(Number)
  ])).sort((a, b) => b - a); // Sort descending

  const currentEvents = mediaEvents[activeTab] || [];
  const currentAwards = awardDataByYear[activeTab] || [];

  return (
    <>
      <SEO
        title="Media Room | Gallery - Lalani Group Mumbai"
        description="Latest news, media gallery and awards from Lalani Group."
        keywords="Lalani Group news, Mumbai real estate news, MahaRERA updates, awards"
        canonicalUrl="/media-room"
      />
      <Navbar />
      <PageHero 
        title="Media Room "
        subtitle="Press Releases, Media Events & Recognition from Lalani Group"
        backgroundImage={project2}
      />
      <main className="pt-0">
        {/* Section 1: Media Events */}
        <section className="py-8 sm:py-10 md:py-16 bg-gradient-to-b from-card via-background to-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <motion.div
              initial={{ opacity: 1 }}
              className="max-w-6xl mx-auto mb-8 md:mb-12"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <Calendar className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground">
                  Media Events Gallery
                </h2>
              </div>
              <p className="text-center text-muted-foreground max-w-3xl mx-auto text-sm sm:text-base md:text-lg px-4">
                A visual journey through our exhibitions, expos, and media appearances
              </p>
            </motion.div>

            {/* Year Tabs for Media */}
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12">
                {allYears.map((year) => (
                  <button
                    key={year}
                    onClick={() => setActiveTab(year)}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                      activeTab === year
                        ? 'bg-gradient-to-r from-primary to-primary/80 text-white shadow-lg shadow-primary/30 scale-105'
                        : 'bg-card text-muted-foreground hover:bg-primary/10 hover:text-primary border border-border'
                    }`}
                  >
                    <span className="text-sm md:text-base">{year}</span>
                  </button>
                ))}
              </div>

              {/* Media Events Content */}
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6 md:space-y-8"
              >
                {currentEvents.length > 0 && currentEvents.map((event, eventIndex) => (
                  <div key={`${activeTab}-${eventIndex}`}>
                    {/* Event Header Card */}
                    <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent rounded-t-2xl p-4 md:p-6 border-b border-primary/20">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg">
                            <Calendar className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl md:text-2xl font-bold text-foreground">{event.title}</h3>
                            <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <MapPin className="w-3 h-3" />
                                <span>{event.location}</span>
                              </div>
                              <span>•</span>
                              <span>{event.date}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Images - Horizontal Scroll Gallery */}
                    <div className="bg-card/30 rounded-b-2xl p-4 border border-t-0 border-border/50">
                      <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide snap-x snap-mandatory" style={{ scrollBehavior: 'smooth' }}>
                        {event.images.map((imageSrc, imgIndex) => (
                          <motion.div
                            key={`${activeTab}-${eventIndex}-${imgIndex}`}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: imgIndex * 0.05 }}
                            className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[400px] aspect-video rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 group relative snap-start"
                            onClick={() => openLightbox(imgIndex, event.images)}
                          >
                            <img
                              src={imageSrc}
                              alt={`${event.title} - Photo ${imgIndex + 1}`}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                              <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm font-medium">
                                View Photo {imgIndex + 1}
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 3: Awards & Recognition */}
        <section className="py-8 sm:py-10 md:py-16 bg-gradient-to-b from-card via-background to-card border-t border-border/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <motion.div
              initial={{ opacity: 1 }}
              className="max-w-6xl mx-auto mb-8 md:mb-12"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <Award className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground">
                  Awards & Recognition
                </h2>
              </div>
              <p className="text-center text-muted-foreground max-w-3xl mx-auto text-sm sm:text-base md:text-lg px-4">
                Celebrating excellence in real estate development with prestigious awards
              </p>
            </motion.div>

            {/* Year Tabs for Awards */}
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12">
                {allYears.map((year) => (
                  <button
                    key={year}
                    onClick={() => setActiveTab(year)}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                      activeTab === year
                        ? 'bg-gradient-to-r from-primary to-primary/80 text-white shadow-lg shadow-primary/30 scale-105'
                        : 'bg-card text-muted-foreground hover:bg-primary/10 hover:text-primary border border-border'
                    }`}
                  >
                    <span className="text-sm md:text-base">{year}</span>
                  </button>
                ))}
              </div>

              {/* Awards Content - Card Design */}
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {currentAwards.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {currentAwards.slice(0, 12).map((award, awardIndex) => {
                      let awardImages: string[] = [];
                      
                      switch(award.year) {
                        case 2016: awardImages = globToArray(awardImages2016 as Record<string, unknown>); break;
                        case 2014: awardImages = globToArray(awardImages2014 as Record<string, unknown>); break;
                        case 2013: awardImages = globToArray(awardImages2013 as Record<string, unknown>); break;
                        case 2012: awardImages = globToArray(awardImages2012 as Record<string, unknown>); break;
                        case 2010: awardImages = globToArray(awardImages2010 as Record<string, unknown>); break;
                        case 2009: awardImages = globToArray(awardImages2009 as Record<string, unknown>); break;
                        case 2008: awardImages = globToArray(awardImages2008 as Record<string, unknown>); break;
                        case 2007: awardImages = globToArray(awardImages2007 as Record<string, unknown>); break;
                        default: awardImages = globToArray(awardImages2016 as Record<string, unknown>);
                      }
                      
                      const imageSrc = awardImages[awardIndex % Math.max(awardImages.length, 1)] || project2;
                      const lightboxImgs = awardImages.length > 0 ? awardImages : [imageSrc];
                      const lightboxStart = awardImages.length > 0 ? awardIndex % awardImages.length : 0;

                      return (
                        <motion.div
                          key={`${activeTab}-${awardIndex}`}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: awardIndex * 0.05 }}
                          className="group relative h-auto min-h-[400px] sm:min-h-[450px] rounded-xl md:rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 bg-card"
                          onClick={() => openLightbox(lightboxStart, lightboxImgs)}
                        >
                          {/* Image Container */}
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
                              <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                                <Star className="w-3 h-3 text-white fill-white" />
                              </div>
                              <span className="text-xs md:text-sm font-medium text-primary">{award.subtitle}</span>
                            </div>

                            {/* Title */}
                            <h4 className="text-lg md:text-xl font-bold text-foreground mb-3 leading-tight">
                              {award.title}
                            </h4>

                            {/* Location */}
                            {award.location && (
                              <div className="flex items-center gap-2 mb-2">
                                <MapPin className="w-3 h-3 text-muted-foreground" />
                                <span className="text-xs text-muted-foreground">{award.location}</span>
                              </div>
                            )}

                            {/* Description */}
                            <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 mb-3">
                              {award.description}
                            </p>

                            {/* Click Hint */}
                            <div className="flex items-center justify-between text-xs text-muted-foreground mt-4 pt-3 border-t border-border/50">
                              <span>Click to view details</span>
                              <Award className="w-4 h-4 text-primary" />
                            </div>
                          </div>

                          {/* Border Highlight on Hover */}
                          <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/30 rounded-xl md:rounded-2xl transition-colors duration-500 pointer-events-none" />
                        </motion.div>
                      );
                    })}
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </section>
         <ImageGallery /> 
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
          
          <img
            src={lightboxImages[lightboxIndex]}
            alt={`Media Event Photo ${lightboxIndex + 1}`}
            className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
          />
          
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

export default MediaRoom;
