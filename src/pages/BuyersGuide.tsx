import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import EnquireButton from "@/components/EnquireButton";
import BackToTopButton from "@/components/BackToTopButton";
import FAQAccordion from "@/components/FAQAccordion";
import { motion } from "framer-motion";
import { CheckCircle, FileText, Home, Shield, TrendingUp, Users } from "lucide-react";
import project1 from "@/assets/project-1.jpg";

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
      <Navbar />
      <PageHero 
        title="Buyer's Guide"
        subtitle="Everything You Need to Know About Buying Property in Mumbai"
        backgroundImage={project1}
      />
      <main className="pt-0">
        {/* Guide Content */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16"
              >
                <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg border border-border/50">
                  <h2 className="text-3xl font-heading font-bold mb-6 text-primary">
                    Understanding Your Investment
                  </h2>
                  <p className="text-lg text-foreground/90 leading-relaxed">
                    Real estate is one of the most significant investments you'll make in your lifetime. Our comprehensive buyers' guide helps you navigate the complex process with confidence, ensuring you make informed decisions that align with your needs and budget.
                  </p>
                </div>
              </motion.div>

              {/* Key Considerations Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                {guideItems.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card rounded-xl p-6 shadow-lg border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-heading font-bold mb-3 text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Documentation Checklist */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 md:p-12 border border-primary/20"
              >
                <h2 className="text-3xl font-heading font-bold mb-8 text-primary">
                  Essential Documentation Checklist
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground">Before Purchase</h3>
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
    </>
  );
};

export default BuyersGuide;
