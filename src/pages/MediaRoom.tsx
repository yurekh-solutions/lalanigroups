import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import EnquireButton from "@/components/EnquireButton";
import BackToTopButton from "@/components/BackToTopButton";
import LeadCapturePopup from "@/components/LeadCapturePopup";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Calendar, ExternalLink, Newspaper, Image, Award, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import project2 from "@/assets/project-2.jpg";

// Media Gallery Images
import media1 from "@/assets/lalanimedia/media1.png";
import media3 from "@/assets/lalanimedia/media3.png";
import media4 from "@/assets/lalanimedia/media4.png";
import media5 from "@/assets/lalanimedia/media5.png";
import media6 from "@/assets/lalanimedia/media6.png";
import media7 from "@/assets/lalanimedia/media7.png";

// Awards Gallery Images
import awardCover from "@/assets/lalaniawards/awardcover.png";
import award from "@/assets/lalaniawards/award.png";
import award1 from "@/assets/lalaniawards/award1.png";
import award3 from "@/assets/lalaniawards/award3.png";
import award4 from "@/assets/lalaniawards/award4.png";
import award5 from "@/assets/lalaniawards/award5.png";
import award7 from "@/assets/lalaniawards/award7.png";
import award8 from "@/assets/lalaniawards/award8.png";

const mediaImages = [
  { src: media1, alt: "Lalani Group Media Coverage 1" },
  { src: media3, alt: "Lalani Group Media Coverage 3" },
  { src: media4, alt: "Lalani Group Media Coverage 4" },
  { src: media5, alt: "Lalani Group Media Coverage 5" },
  { src: media6, alt: "Lalani Group Media Coverage 6" },
  { src: media7, alt: "Lalani Group Media Coverage 7" },
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
];

const newsArticles = [
  {
    title: "Mumbai Real Estate Market Sees Strong Recovery with Record Registrations in 2024",
    date: "15-Jan-2025",
    excerpt: "Mumbai's property market continues its bullish run with record-breaking registrations in 2024. The city recorded over 1.4 lakh property registrations, driven by strong demand for 1BHK and 2BHK apartments in western suburbs like Andheri, Malad, Khar, and Goregaon."
  },
  {
    title: "MahaRERA Strengthens Homebuyer Protection with New Guidelines for 2025",
    date: "10-Jan-2025",
    excerpt: "MahaRERA has introduced new guidelines to strengthen homebuyer protection, including mandatory quarterly project updates and stricter penalties for delayed possession. All developers must now provide detailed construction schedules linked to their RERA registrations."
  },
  {
    title: "Mumbai's Western Suburbs Emerge as Top Residential Investment Destinations",
    date: "02-Dec-2024",
    excerpt: "Areas like Andheri East, Malad East, Jogeshwari West, and Khar West have emerged as top investment destinations for homebuyers. Proximity to metro corridors, Western Express Highway, and major employment hubs is driving demand for quality projects in these micro-markets."
  },
  {
    title: "Home Loan Rates Stabilize as RBI Holds Repo Rate; Positive for Buyers",
    date: "08-Nov-2024",
    excerpt: "The Reserve Bank of India's decision to hold the repo rate steady has brought stability to home loan interest rates. With rates hovering between 8.5-9%, homebuyers are finding EMIs more manageable, boosting demand for under-construction properties in Mumbai."
  },
  {
    title: "Residential unit sales up 34% QoQ in July-September",
    date: "02-Jan-2021",
    excerpt: "The country's residential real estate market has shown initial signs of a pick-up during the July-September quarter, with sales rising 34% compared to the June quarter, although it was still 65% lower than the second quarter of 2019-20."
  },
  {
    title: "Mumbai property registration bounces back to pre-Covid level on stamp duty cut",
    date: "21-Nov-2020",
    excerpt: "The Stamp duty reduction and a continuing price correction has resulted in a sharp bounce back in September property sales in Mumbai, the country's most expensive property market, as indicated by the registration activity during the month."
  },
  {
    title: "Festive quarter: Mumbai and Pune saw the highest housing sales",
    date: "26-Oct-2020",
    excerpt: "Going by past trends and current developments, Mumbai Metropolitan Region (MMR) and Pune are likely to witness the highest housing sales improvement during the ongoing festive quarter - by 36% and 34% respectively."
  },
  {
    title: "Realty sentiments turn positive; realtors and stakeholders optimistic over business comeback",
    date: "23-Oct-2020",
    excerpt: "The recent increase in real estate sales momentum has added to the positive sentiment among real estate stakeholders as the business confidence makes a comeback."
  },
  {
    title: "Last month property registrations in Maharashtra 26% more than September 2019",
    date: "23-Oct-2020",
    excerpt: "Property registrations in the state have gone up after the reduction of stamp duty for a limited period. Last month saw 2,40,333 registrations, up 26% from 1,90,841 in September 2019."
  },
  {
    title: "In bid to boost realty, Maharashtra cuts stamp duty for 7 months",
    date: "27-Aug-2020",
    excerpt: "In a major decision to revive the stagnant property market, the state cabinet decided to reduce stamp duty on flats for seven months, starting September. The duty will be lowered from the existing 5% to 2% starting September 1 till December 31."
  },
  {
    title: "Home loan rates of public sector banks turn attractive",
    date: "01-Jul-2020",
    excerpt: "Starting 1 July 2020, the State Bank of India is offering home loans starting at 6.95%. This will be the second-lowest rate for home loans after Bank of Baroda, which offers home loans from 6.85% onwards."
  },
  {
    title: "Property registrations up in June after two-month slack in Maharashtra",
    date: "02-Jul-2020",
    excerpt: "Property registrations across the state, particularly in Mumbai and Pune regions, increased significantly in June. While the revenue collection in the first quarter of this fiscal was 78% less than the corresponding period last year, in June, it was much better."
  }
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

  return (
    <>
      <SEO
        title="Media Room | News, Awards & Gallery - Lalani Group Mumbai"
        description="Latest news, awards, and media coverage from Lalani Group. Stay informed about Mumbai real estate market trends, MahaRERA updates, home loan rates, property registrations, and Lalani Group achievements."
        keywords="Lalani Group news, Mumbai real estate news, MahaRERA updates, property market Mumbai, real estate trends, home loan news, property registration Mumbai, Lalani Group awards, real estate awards Mumbai, construction awards, developer awards"
        canonicalUrl="/media-room"
      />
      <Navbar />
      <PageHero 
        title="Media Room"
        subtitle="Press Releases, News & Updates from Lalani Group"
        backgroundImage={project2}
      />
      <main className="pt-0">
        {/* Awards Gallery Section */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              <div className="flex items-center gap-3 mb-8">
                <Award className="w-8 h-8 text-primary" />
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                  Awards & Recognition
                </h2>
              </div>
              <p className="text-muted-foreground mb-8 max-w-3xl">
                Lalani Group has been recognized for excellence in real estate development with numerous awards and accolades over the years.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {awardImages.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="aspect-square overflow-hidden rounded-xl cursor-pointer group border border-border hover:border-primary/50 transition-all"
                    onClick={() => openLightbox(index, 'awards')}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Media Gallery Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              <div className="flex items-center gap-3 mb-8">
                <Image className="w-8 h-8 text-primary" />
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                  Media Gallery
                </h2>
              </div>
              <p className="text-muted-foreground mb-8 max-w-3xl">
                Explore our media coverage, press releases, and featured articles highlighting Lalani Group's contributions to Mumbai's real estate landscape.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {mediaImages.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="aspect-video overflow-hidden rounded-xl cursor-pointer group border border-border hover:border-primary/50 transition-all"
                    onClick={() => openLightbox(index, 'media')}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* News & Updates Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 1 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.6 }}
              className="max-w-6xl mx-auto"
            >
              <div className="flex items-center gap-3 mb-12">
                <Newspaper className="w-8 h-8 text-primary" />
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                  News & Updates
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {newsArticles.map((article, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 1 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="bg-card rounded-xl p-6 shadow-lg border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl group"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <Calendar className="w-5 h-5 text-primary shrink-0 mt-1" />
                      <span className="text-sm text-muted-foreground font-medium">
                        {article.date}
                      </span>
                    </div>
                    <h3 className="text-lg font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {article.excerpt}
                    </p>
                    <button className="flex items-center gap-2 text-sm text-primary font-semibold hover:gap-3 transition-all">
                      Read more
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </motion.div>
                ))}
              </div>

              {/* Disclaimer */}
              <motion.div
                initial={{ opacity: 1 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.6 }}
                className="mt-12 p-6 bg-muted/30 rounded-xl border border-border/50"
              >
                <p className="text-xs text-muted-foreground leading-relaxed">
                  <strong>Disclaimer:</strong> Lalani Group should not be held responsible for any information posted in this section. The News articles or information posted in these sections are merely for information purpose and have been received from various print media's or real estate associations or government resolutions. People are advised to use their own discretion while using this information.
                </p>
              </motion.div>
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4">
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 p-2 text-white hover:text-primary transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          
          <button
            onClick={() => setLightboxIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length)}
            className="absolute left-4 p-2 text-white hover:text-primary transition-colors"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          
          <img
            src={currentImages[lightboxIndex].src}
            alt={currentImages[lightboxIndex].alt}
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
          />
          
          <button
            onClick={() => setLightboxIndex((prev) => (prev + 1) % currentImages.length)}
            className="absolute right-4 p-2 text-white hover:text-primary transition-colors"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      )}
    </>
  );
};

export default MediaRoom;
