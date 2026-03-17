import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What is the process to book a property with Lalani Group?",
    answer: "The booking process is simple and transparent. First, visit our project site or contact our sales team at 022-6728 0000 or sales@lalanigroup.in. Once you select your preferred unit, submit the booking form with required documents and pay the booking amount. Our team will guide you through documentation, home loan assistance, and registration process from start to finish."
  },
  {
    question: "Are all Lalani Group projects RERA registered?",
    answer: "Yes, all our ongoing projects are registered with MahaRERA (Maharashtra Real Estate Regulatory Authority). Lalani Goodwill carries RERA numbers P51800079065 and P51800078852, Lalani Business Park is registered under P51800033063, and Velentine Apartment under P51800028866. You can verify all registration details on the official MahaRERA website at maharerait.mahaonline.gov.in. We provide complete transparency and comply with all RERA regulations."
  },
  {
    question: "What types of properties does Lalani Group offer?",
    answer: "Lalani Group offers a wide range of properties to suit every need. Our residential portfolio includes 1BHK, 2BHK, and 3BHK apartments in prime Mumbai locations like Andheri (E), Malad, Khar, Jogeshwari, and Bandra. For commercial clients, we have premium office spaces in Khar West and the prestigious Bandra-Kurla Complex (BKC). We also offer weekend homes in Karjat for nature-lovers."
  },
  {
    question: "What payment plans are available?",
    answer: "We offer flexible payment plans tailored to your needs and budget. Options include construction-linked payment plans, down payment plans, and subvention schemes. We also provide full assistance with home loan processing from all leading banks and financial institutions including SBI, HDFC, ICICI, and Axis Bank. Our financial advisors will help you choose the most suitable payment option."
  },
  {
    question: "What amenities are provided in Lalani Group projects?",
    answer: "Our projects feature world-class amenities designed for modern living. Standard amenities include 24/7 security with CCTV surveillance, power backup, landscaped gardens, children's play area, gymnasium, swimming pool, clubhouse with indoor games, jogging track, ample covered car parking, high-speed elevators, rainwater harvesting, and fire fighting systems. Specific amenities may vary by project — contact us for details."
  },
  {
    question: "How can I track the construction progress?",
    answer: "We believe in full transparency. We provide regular construction updates through site visits, email updates, and our customer support team. You can schedule a site visit by calling 022-6728 0000 or writing to info@lalanigroup.in. We also comply with all MahaRERA requirements for project updates, which are published on the official RERA website."
  },
  {
    question: "What is the possession timeline for ongoing projects?",
    answer: "Possession timelines vary by project. Lalani Goodwill (Andheri East) is expected by December 2025, Lalani Business Park (Khar West) by June 2026, Lalani Grandeur (Malad East) by March 2026, Dream Residency (Karjat) by December 2026, and Lalani Corporate Plaza (BKC) by August 2026. Velentine Apartment (Malad East) is already ready with OC received. We have an excellent track record of timely project delivery."
  },
  {
    question: "Do you provide home loan assistance?",
    answer: "Yes, we have tie-ups with all leading banks and financial institutions to provide hassle-free home loan assistance. Our dedicated team helps with documentation, loan application submission, and securing the best interest rates available. We work with SBI, HDFC, ICICI, Axis, Bank of Baroda, and more. We make the entire financing process smooth and stress-free for our buyers."
  },
  {
    question: "Where is the Lalani Group head office located?",
    answer: "The Lalani Group head office is located at 7th Floor, Lalani Aura, 34th Road, Khar (W), Mumbai – 400052, Maharashtra, India. You can reach us by phone at 022-6728 0000, by fax at 022-6728 0011, or via email at info@lalanigroup.in. Our office is open Monday to Saturday, 10:00 AM to 6:00 PM."
  },
  {
    question: "What is your after-sales service policy?",
    answer: "We provide comprehensive after-sales support throughout your ownership experience. This includes property maintenance assistance, defect rectification during the warranty period, and dedicated support for any issues post-possession. Our customer service team is available 24/7 to address your concerns. The Lalani Group believes in building long-term relationships, and our legacy of happy customers across Bandra, Khar, Andheri, and Malad speaks for itself."
  }
];

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <HelpCircle className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold gradient-gold-text">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our projects and services
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-card rounded-xl border border-border/50 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-primary/5 transition-colors duration-200"
              >
                <span className="font-heading font-semibold text-foreground pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-primary" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-muted-foreground leading-relaxed border-t border-border/50 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;
