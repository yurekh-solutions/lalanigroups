import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import EnquireButton from "@/components/EnquireButton";
import BackToTopButton from "@/components/BackToTopButton";
import FAQAccordion from "@/components/FAQAccordion";
import LeadCapturePopup from "@/components/LeadCapturePopup";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { CheckCircle, FileText, Home, Shield, TrendingUp, Users } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";

const BuyersGuide = () => {
  const guideItems = [
    {
      icon: Home,
      title: "Location & Connectivity",
      description: "Evaluate proximity to schools, hospitals, markets, and public transport. Check future development plans in the area."
    },
    {
      icon: FileText,
      title: "Legal Documentation",
      description: "Verify all property documents, title deeds, and ensure the property has clear ownership with no legal disputes."
    },
    {
      icon: Shield,
      title: "Builder Reputation",
      description: "Research the builder's track record, past projects, delivery timelines, and customer reviews."
    },
    {
      icon: CheckCircle,
      title: "Quality & Amenities",
      description: "Inspect construction quality, materials used, and available amenities like parking, security, and recreational facilities."
    },
    {
      icon: TrendingUp,
      title: "Payment Plans",
      description: "Compare payment schedules, loan options, and understand all costs including registration, stamp duty, and maintenance."
    },
    {
      icon: Users,
      title: "RERA Compliance",
      description: "Ensure the project is registered with MahaRERA and verify all details on the official RERA website."
    }
  ];

  return (
    <>
      <SEO
        title="Home Buying Guide Mumbai 2025 | How to Buy Flat in Mumbai | Lalani Group"
        description="Complete step-by-step guide to buying property in Mumbai. How to buy a flat in Mumbai, RERA verification, home loan process, legal documents checklist, property registration. Expert advice from Lalani Group – 40+ years of trusted real estate experience."
        keywords="how to buy flat in Mumbai, home buying guide Mumbai, property buying process Mumbai, RERA verification Mumbai, home loan Mumbai, property documents checklist, real estate investment guide Mumbai, first time home buyer Mumbai, property registration Mumbai, stamp duty Mumbai, builder verification Mumbai, flat purchase checklist, property legal check"
        canonicalUrl="/buyers-guide"
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Buy a Flat in Mumbai",
            "description": "Step-by-step guide on buying property in Mumbai from Lalani Group with 40+ years of real estate expertise.",
            "totalTime": "PT30M",
            "step": [
              { "@type": "HowToStep", "position": 1, "name": "Evaluate Location & Connectivity", "text": "Check proximity to schools, hospitals, markets and public transport. Review upcoming infrastructure plans in the area." },
              { "@type": "HowToStep", "position": 2, "name": "Verify Legal Documentation", "text": "Verify all property documents, title deeds, and ensure clear ownership with no disputes." },
              { "@type": "HowToStep", "position": 3, "name": "Check Builder Reputation", "text": "Research the builder's track record, past projects, timely delivery, and customer reviews on Google." },
              { "@type": "HowToStep", "position": 4, "name": "Verify MahaRERA Registration", "text": "All projects in Maharashtra must be RERA registered. Verify at maharerait.mahaonline.gov.in before booking." },
              { "@type": "HowToStep", "position": 5, "name": "Arrange Home Loan Pre-Approval", "text": "Get pre-approved by SBI, HDFC, ICICI, or Axis Bank. Lalani Group assists with documentation for best interest rates." },
              { "@type": "HowToStep", "position": 6, "name": "Pay Booking Amount & Register", "text": "Pay booking amount, execute sale agreement, and complete property registration at the sub-registrar office." }
            ]
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is RERA and why is it important when buying a flat in Mumbai?",
                "acceptedAnswer": { "@type": "Answer", "text": "MahaRERA (Maharashtra Real Estate Regulatory Authority) ensures builders follow timelines, quality, and transparency. Always verify the RERA number at maharerait.mahaonline.gov.in before booking." }
              },
              {
                "@type": "Question",
                "name": "What is the stamp duty for property purchase in Mumbai?",
                "acceptedAnswer": { "@type": "Answer", "text": "Stamp duty in Mumbai is 5% for male buyers, 4% for female buyers, and 4.5% for joint ownership. Registration charges are 1% of the property value." }
              },
              {
                "@type": "Question",
                "name": "Which banks offer home loans for Lalani Group projects?",
                "acceptedAnswer": { "@type": "Answer", "text": "Lalani Group has tie-ups with SBI, HDFC, ICICI Bank, Axis Bank and more. Our team assists with documentation to get the best interest rates for your home loan." }
              }
            ]
          }
        ]}
      />
      <Navbar />
      <PageHero 
        title="Buyer's Guide"
        subtitle="Everything You Need to Know About Buying Property in Mumbai"
        backgroundImage={hero1}
      />
      <main className="pt-0">
        {/* Guide Content */}
        <section className="py-10 sm:py-14 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 1 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.6 }}
                className="mb-10 sm:mb-16"
              >
                <div className="bg-card rounded-2xl p-5 sm:p-8 md:p-12 shadow-lg border border-border/50">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold mb-4 sm:mb-6 text-primary text-center sm:text-left">
                    Understanding Your Investment
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg text-foreground/90 leading-relaxed text-center sm:text-left">
                    Real estate is one of the most significant investments you'll make in your lifetime. Our comprehensive buyers' guide helps you navigate the complex process with confidence, ensuring you make informed decisions that align with your needs and budget.
                  </p>
                </div>
              </motion.div>

              {/* Key Considerations Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-16">
                {guideItems.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 1 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card rounded-xl p-4 sm:p-6 shadow-lg border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3 sm:mb-4">
                      <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-heading font-bold mb-2 sm:mb-3 text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Documentation Checklist */}
              <motion.div
                initial={{ opacity: 1 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-5 sm:p-8 md:p-12 border border-primary/20"
              >
                <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold mb-6 sm:mb-8 text-primary text-center sm:text-left">
                  Essential Documentation Checklist
                </h2>
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-foreground">Before Purchase</h3>
                    <ul className="space-y-3">
                      {[
                        "Title deed verification",
                        "Encumbrance certificate",
                        "Approved building plans",
                        "Occupancy certificate",
                        "Property tax receipts",
                        "NOC from authorities"
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-foreground/80">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground">During Registration</h3>
                    <ul className="space-y-3">
                      {[
                        "Sale agreement",
                        "Stamp duty payment",
                        "Registration documents",
                        "Identity & address proof",
                        "PAN card copies",
                        "Payment receipts"
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-foreground/80">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQAccordion />
      </main>
      <Footer />
      <WhatsAppButton />
      <EnquireButton />
      <BackToTopButton />
      <LeadCapturePopup />
    </>
  );
};

export default BuyersGuide;
