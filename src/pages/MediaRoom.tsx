import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import EnquireButton from "@/components/EnquireButton";
import BackToTopButton from "@/components/BackToTopButton";
import LeadCapturePopup from "@/components/LeadCapturePopup";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Calendar, ExternalLink, Newspaper, Image, Award, X, ChevronLeft, ChevronRight, Eye } from "lucide-react";
import { useState } from "react";
import project2 from "@/assets/project-2.jpg";

// Media Gallery Images
import mediaCover from "@/assets/lalanimedia/media.png.png";
import media1 from "@/assets/lalanimedia/media1.png";
import media3 from "@/assets/lalanimedia/media3.png";
import media4 from "@/assets/lalanimedia/media4.png";
import media5 from "@/assets/lalanimedia/media5.png";
import media6 from "@/assets/lalanimedia/media6.png";
import media7 from "@/assets/lalanimedia/media7.png";
import media10 from "@/assets/lalanimedia/media10.png";
import media11 from "@/assets/lalanimedia/media11.png";
import media12 from "@/assets/lalanimedia/media12.png";
import media13 from "@/assets/lalanimedia/media13.png";
import media14 from "@/assets/lalanimedia/media14.png";

// Awards Gallery Images
import awardCover from "@/assets/lalaniawards/awardcover.png";
import award from "@/assets/lalaniawards/award.png";
import award1 from "@/assets/lalaniawards/award1.png";
import award3 from "@/assets/lalaniawards/award3.png";
import award4 from "@/assets/lalaniawards/award4.png";
import award5 from "@/assets/lalaniawards/award5.png";
import award7 from "@/assets/lalaniawards/award7.png";
import award8 from "@/assets/lalaniawards/award8.png";
import award9 from "@/assets/lalaniawards/award9.png";

const mediaImages = [
  { src: mediaCover, alt: "Lalani Group Media Feature", size: "large" },
  { src: media1, alt: "Lalani Group Press Coverage", size: "small" },
  { src: media3, alt: "Lalani Group News Article", size: "medium" },
  { src: media4, alt: "Lalani Group Event Coverage", size: "large" },
  { src: media5, alt: "Lalani Group Publication", size: "small" },
  { src: media6, alt: "Lalani Group Interview", size: "medium" },
  { src: media7, alt: "Lalani Group Feature Story", size: "large" },
  { src: media10, alt: "Lalani Group Exhibition", size: "small" },
  { src: media11, alt: "Lalani Group Property Showcase", size: "medium" },
  { src: media12, alt: "Lalani Group Team Event", size: "large" },
  { src: media13, alt: "Lalani Group Expo", size: "small" },
  { src: media14, alt: "Lalani Group Ceremony", size: "medium" },
];

const awardImages = [
  { src: awardCover, alt: "Lalani Group Awards Cover" },
  { src: award, alt: "Lalani Group Award" },
  { src: award1, alt: "Lalani Group Award 1" },
  { src: award3, alt: "Lalani Group Award 3" },
  { src: award4, alt: "Lalani Group Award 4" },
  { src: award5, alt: "Lalani Group Award 5" },
  { src: award7, alt: "Lalani Group Award 7" },
  { src: award8, alt: "Lalani Group Award 8" },
  { src: award9, alt: "Lalani Group Award 9" },
];

const allAwards = [awardCover, award, award1, award3, award4, award5, award7, award8, award9];

const newsArticles = [
  {
    title: "Mumbai Real Estate Market Sees Strong Recovery with Record Registrations in 2024",
    date: "15-Jan-2025",
    excerpt: "Mumbai's property market continues its bullish run with record-breaking registrations in 2024."
  },
  {
    title: "MahaRERA Strengthens Homebuyer Protection with New Guidelines for 2025",
    date: "10-Jan-2025",
    excerpt: "MahaRERA has introduced new guidelines to strengthen homebuyer protection."
  },
  {
    title: "Mumbai's Western Suburbs Emerge as Top Residential Investment Destinations",
    date: "02-Dec-2024",
    excerpt: "Areas like Andheri East, Malad East, Jogeshwari West have emerged as top investment destinations."
  },
  {
    title: "Home Loan Rates Stabilize as RBI Holds Repo Rate; Positive for Buyers",
    date: "08-Nov-2024",
    excerpt: "The Reserve Bank of India's decision to hold the repo rate steady has brought stability."
  },
  {
    title: "Residential unit sales up 34% QoQ in July-September",
    date: "02-Jan-2021",
    excerpt: "The residential real estate market has shown initial signs of a pick-up."
  },
  {
    title: "Mumbai property registration bounces back to pre-Covid level",
    date: "21-Nov-2020",
    excerpt: "The Stamp duty reduction has resulted in a sharp bounce back in property sales."
  },
];

const MediaRoom = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxType, setLightboxType] = useState<'media' | 'awards'>('media');

  const openLightbox = (index: number, type: 'media' | 'awards') => {
    setLightboxIndex(index);
    setLightboxType(type);
    setLightboxOpen(true);
  };

  const currentImages = lightboxType === 'media' ? mediaImages : awardImages;

  // Get height based on size
  const getHeight = (size: string) => {
    switch (size) {
      case 'large': return 'h-48 sm:h-56 md:h-72';
      case 'medium': return 'h-40 sm:h-48 md:h-60';
      case 'small': return 'h-32 sm:h-40 md:h-48';
      default: return 'h-40 sm:h-48 md:h-60';
    }
  };

  return (
    <>
      <SEO
        title="Media Room | News, Awards & Gallery - Lalani Group Mumbai"
        description="Latest news, awards, and media coverage from Lalani Group."
        keywords="Lalani Group news, Mumbai real estate news, MahaRERA updates"
        canonicalUrl="/media-room"
      />
      <Navbar />
      <PageHero 
        title="Media Room"
        subtitle="Press Releases, News & Updates from Lalani Group"
        backgroundImage={project2}
      />
      <main className="pt-0">
        {/* Awards Gallery Section - 3D Carousel */}
        <section className="py-5 md:py-10 bg-gradient-to-b from-card to-background overflow-x-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 1 }}
              className="max-w-6xl mx-auto mb-3 md:mb-5"
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <Award className="w-5 h-5 md:w-8 md:h-8 text-primary" />
                <h2 className="text-xl md:text-3xl font-heading font-bold text-foreground">
                  Awards & Recognition
                </h2>
              </div>
              <p className="text-center text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
                Celebrating excellence in real estate development with prestigious awards
              </p>
            </motion.div>
          </div>

          {/* Marquee Row 1 */}
          <div className="max-w-7xl mx-auto px-4 overflow-hidden mb-3">
            <div className="flex animate-marquee-forward">
              {[...allAwards, ...allAwards, ...allAwards].map((src, index) => (
                <div
                  key={`row1-${index}`}
                  className="flex-shrink-0 w-28 h-24 sm:w-36 sm:h-32 md:w-48 md:h-44 lg:w-56 lg:h-52 mx-2 rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden border-2 border-transparent hover:border-primary transition-all group cursor-pointer transform hover:scale-105 hover:-translate-y-2 duration-300"
                  onClick={() => openLightbox(index % allAwards.length, 'awards')}
                >
                  <img
                    src={src}
                    alt={`Award ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Marquee Row 2 */}
          <div className="max-w-7xl mx-auto px-4 overflow-hidden">
            <div className="flex animate-marquee-reverse">
              {[...allAwards.slice().reverse(), ...allAwards.slice().reverse(), ...allAwards.slice().reverse()].map((src, index) => (
                <div
                  key={`row2-${index}`}
                  className="flex-shrink-0 w-28 h-24 sm:w-36 sm:h-32 md:w-48 md:h-44 lg:w-56 lg:h-52 mx-2 rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden border-2 border-transparent hover:border-primary transition-all group cursor-pointer transform hover:scale-105 hover:-translate-y-2 duration-300"
                  onClick={() => openLightbox((allAwards.length - 1 - (index % allAwards.length)), 'awards')}
                >
                  <img
                    src={src}
                    alt={`Award ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Media Gallery Section - Unique Masonry */}
        <section className="py-5 md:py-10 bg-background relative">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 1 }}
              className="max-w-7xl mx-auto"
            >
              {/* Header */}
              <div className="text-center mb-4 md:mb-8">
                <h2 className="text-2xl md:text-4xl font-heading font-bold text-foreground mb-2">
                  <span className="gradient-gold-text">Media Gallery</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
                  A visual journey through our media presence and press coverage
                </p>
                <div className="w-16 md:w-24 h-0.5 md:h-1 bg-gradient-to-r from-primary to-yellow-500 mx-auto mt-3 rounded-full" />
              </div>

              {/* Creative Masonry Gallery */}
              <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-2 md:gap-3 space-y-2 md:space-y-3">
                {mediaImages.map((image, index) => (
                  <div
                    key={index}
                    className={`relative group break-inside-avoid cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500 transform hover:-translate-y-3 ${getHeight(image.size)}`}
                    onClick={() => openLightbox(index, 'media')}
                  >
                    <img
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Gold Border Animation */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-2xl transition-colors duration-500" />
                    
                    {/* Bottom Gold Line */}
                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary via-yellow-400 to-primary group-hover:w-full transition-all duration-700" />
                    
                    {/* Content Card */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      <div className="bg-white/10 backdrop-blur-xl rounded-xl p-3 md:p-4 border border-white/20">
                        <h3 className="text-white font-semibold text-sm md:text-base mb-1 line-clamp-2">{image.alt}</h3>
                        <div className="flex items-center gap-2 text-white/70 text-xs">
                          <Eye className="w-3 h-3" />
                          <span>Click to view</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Corner Badge */}
                    <div className="absolute top-3 right-3 w-10 h-10 bg-primary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100 shadow-lg">
                      <Image className="w-5 h-5 text-white" />
                    </div>
                    
                    {/* Shine Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 skew-x-12" />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* News & Updates Section - Card Design */}
        <section className="py-5 md:py-10 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 1 }}
              className="max-w-6xl mx-auto"
            >
              <div className="flex items-center justify-center gap-2 mb-4 md:mb-6">
                <Newspaper className="w-5 h-5 md:w-7 md:h-7 text-primary" />
                <h2 className="text-xl md:text-3xl font-heading font-bold text-foreground">
                  News & Updates
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                {newsArticles.map((article, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 1 }}
                    className="bg-background rounded-xl md:rounded-2xl p-4 md:p-5 shadow-lg border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Calendar className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-xs md:text-sm text-muted-foreground font-medium">
                        {article.date}
                      </span>
                    </div>
                    <h3 className="text-base md:text-lg font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <button className="flex items-center gap-2 text-xs md:text-sm text-primary font-semibold group-hover:gap-3 transition-all">
                      Read more
                      <ExternalLink className="w-3 h-3 md:w-4 md:h-4" />
                    </button>
                  </motion.div>
                ))}
              </div>

              {/* Disclaimer */}
              <div className="mt-4 md:mt-6 p-3 md:p-4 bg-muted/30 rounded-xl border border-border/50">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  <strong>Disclaimer:</strong> Lalani Group should not be held responsible for any information posted in this section. The News articles are merely for information purpose.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <EnquireButton />
      <BackToTopButton />
      <LeadCapturePopup />

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4">
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 p-3 bg-white/10 rounded-full text-white hover:bg-primary transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          
          <button
            onClick={() => setLightboxIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length)}
            className="absolute left-2 md:left-6 p-3 bg-white/10 rounded-full text-white hover:bg-primary transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <img
            src={currentImages[lightboxIndex].src}
            alt={currentImages[lightboxIndex].alt}
            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
          />
          
          <button
            onClick={() => setLightboxIndex((prev) => (prev + 1) % currentImages.length)}
            className="absolute right-2 md:right-6 p-3 bg-white/10 rounded-full text-white hover:bg-primary transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          
          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/10 rounded-full text-white text-sm">
            {lightboxIndex + 1} / {currentImages.length}
          </div>
        </div>
      )}
    </>
  );
};

export default MediaRoom;
