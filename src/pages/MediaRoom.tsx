import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import EnquireButton from "@/components/EnquireButton";
import BackToTopButton from "@/components/BackToTopButton";
import { motion } from "framer-motion";
import { Calendar, ExternalLink, Newspaper } from "lucide-react";
import project2 from "@/assets/project-2.jpg";

const newsArticles = [
  {
    title: "Residential unit sales up 34% QoQ in July-September",
    date: "02-Jan-2021",
    excerpt: "The country's residential real estate market has shown initial signs of a pick-up during the July-September quarter, with sales rising 34% compared to the June quarter, although it was still 65% lower than the second quarter of 2019-20"
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
    title: "Housing sales festive growth in Mumbai, Pune seen leading key markets tally",
    date: "23-Oct-2020",
    excerpt: "Usually, the festive quarter of October-December sees housing sales across cities improve due to the auspiciousness of this period. During the Pitrupaksha period in the previous quarter, many homebuyers abstain from making purchases."
  },
  {
    title: "Realty sentiments turn positive; realtors, stakeholders optimistic over business comeback",
    date: "23-Oct-2020",
    excerpt: "The recent increase in real estate sales momentum has added to the positive sentiment among real estate stakeholders as the business confidence makes a comeback."
  },
  {
    title: "Last month property registrations in Maharashtra 26% more than September 2019",
    date: "23-Oct-2020",
    excerpt: "Property registrations in the state have gone up after the reduction of stamp duty for a limited period. Last month saw 2,40,333 registrations, up 26% from 1,90,841 in September 2019."
  },
  {
    title: "Mumbai residential registration bounces back to pre-Covid level on stamp duty cut",
    date: "01-Oct-2020",
    excerpt: "Registration of sales agreements stood at 5,597 in September, nearly 95% of pre-Covid level seen in February. The registration numbers rose 110% from July, reflected data from the office of the Inspector General of Registration Maharashtra."
  },
  {
    title: "Residential sales up 34% in top seven markets in Q3 2020: Report",
    date: "28-Sept-2020",
    excerpt: "Housing sales in top seven markets including Mumbai, Delhi-NCR, Bengaluru, Hyderabad, Chennai, Pune and Kolkata rose to 14,415 apartments, up 34% from the previous quarter, showed JLL India data."
  },
  {
    title: "In bid to boost realty, Maharashtra cuts stamp duty for 7 months",
    date: "27-Aug-2020",
    excerpt: "In a major decision to revive the stagnant property market, the state cabinet decided to reduce stamp duty on flats for seven months, starting September. The duty will be lowered from the existing 5% to 2% starting September 1 till December 31."
  },
  {
    title: "Property registrations up in June after two-month slack in Maharashtra",
    date: "02-Jul-2020",
    excerpt: "Property registrations across the state, particularly in Mumbai and Pune regions, increased significantly in June. While the revenue collection in the first quarter of this fiscal was 78% less than the corresponding period last year, in June, it was much better."
  },
  {
    title: "Property registration from builder's office by July-end",
    date: "01-Jul-2020",
    excerpt: "Property buyers can register their agreements online sitting in the builder's office by July-end. Builders and developers are being given access to a software to enable such a process."
  },
  {
    title: "Home loan rates of public sector banks turn attractive",
    date: "01-Jul-2020",
    excerpt: "Starting 1 July 2020, the State Bank of India is offering home loans starting at 6.95%. This will be the second-lowest rate for home loans after Bank of Baroda, which offers home loans from 6.85% onwards."
  },
  {
    title: "MHADA cuts premium on redevelopment projects",
    date: "28-Jun-2020",
    excerpt: "The Maharashtra Housing and Area Development Authority (MHADA) has announced a series of measures to expedite the process of redevelopment of MHADA colonies across the city, as many of them are in dilapidated condition."
  }
];

const MediaRoom = () => {
  return (
    <>
      <Navbar />
      <PageHero 
        title="Media Room"
        subtitle="Press Releases, News & Updates from Lalani Group"
        backgroundImage={project2}
      />
      <main className="pt-0">
        {/* News & Updates Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
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
    </>
  );
};

export default MediaRoom;
