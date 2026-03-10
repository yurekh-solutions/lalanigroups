import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What is the process to book a property with Lalani Group?",
    answer: "The booking process is simple and transparent. First, visit our project site or contact our sales team. Once you select your preferred unit, submit the booking form with required documents and pay the booking amount. Our team will guide you through documentation, loan assistance, and registration process."
  },
  {
    question: "Are all Lalani Group projects RERA registered?",
    answer: "Yes, all our ongoing projects are registered with MahaRERA (Maharashtra Real Estate Regulatory Authority). You can verify the registration details on the official MahaRERA website at maharerait.mahaonline.gov.in. We provide complete transparency and comply with all RERA regulations."
  },
  {
    question: "What payment plans are available?",
    answer: "We offer flexible payment plans tailored to your needs. Options include construction-linked plans, down payment plans, and subvention schemes. We also assist with home loan processing from leading banks and financial institutions. Our team will help you choose the best payment option."
  },
  {
    question: "What amenities are provided in Lalani Group projects?",
    answer: "Our projects feature world-class amenities including 24/7 security, power backup, landscaped gardens, children's play area, gymnasium, clubhouse, parking facilities, and more. Specific amenities vary by project. Contact us for detailed information about your preferred project."
  },
  {
    question: "How can I track the construction progress?",
    answer: "We provide regular updates on construction progress through site visits, email updates, and our customer portal. You can schedule site visits with our team to see the progress firsthand. We maintain complete transparency throughout the construction phase."
  },
  {
    question: "What is the possession timeline for ongoing projects?",
    answer: "Possession timelines vary by project. Lalani Goodwill is expected by December 2025, and Lalani Business Park by June 2026. We have a proven track record of timely delivery. Exact possession dates are mentioned in the agreement and we keep you updated on progress."
  },
  {
    question: "Do you provide home loan assistance?",
    answer: "Yes, we have tie-ups with leading banks and financial institutions to provide home loan assistance. Our team helps with documentation, loan application processing, and getting the best interest rates. We make the financing process smooth and hassle-free."
  },
  {
    question: "What is your after-sales service policy?",
    answer: "We provide comprehensive after-sales support including property maintenance, defect rectification during the warranty period, and assistance with any issues. Our dedicated customer service team is available 24/7 to address your concerns even after possession."
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
