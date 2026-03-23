import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DISCLAIMER_STORAGE_KEY = "lalani_disclaimer_agreed";

const DisclaimerPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has already agreed to disclaimer
    const hasAgreed = localStorage.getItem(DISCLAIMER_STORAGE_KEY);
    if (!hasAgreed) {
      setIsOpen(true);
      // Prevent scrolling when popup is open
      document.body.style.overflow = "hidden";
    }
  }, []);

  const handleAgree = () => {
    localStorage.setItem(DISCLAIMER_STORAGE_KEY, "true");
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop - blocks interaction */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100]"
          />

          {/* Disclaimer Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4"
          >
            <div className="bg-white rounded-lg shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col">
              {/* Header */}
              <div className="bg-gradient-to-r from-primary to-gold-light px-6 py-4 text-center">
                <h2 className="text-xl sm:text-2xl font-heading font-bold text-white tracking-wide">
                  DISCLAIMER
                </h2>
              </div>

              {/* Content - Scrollable */}
              <div className="flex-1 overflow-y-auto px-6 py-5 text-gray-700 text-sm leading-relaxed">
                <p className="mb-4 font-semibold text-gray-800">
                  "Thank you for visiting Lalani Group's website.
                </p>

                <p className="mb-4 text-justify">
                  Specifications and amenities mentioned in this website are only representational and informative. Information, images and visuals, drawings plans or sketches shown in this websites are only an architects impression and are only indicative of the envisaged developments and the same are subject to approvals from local authorities. The Developer/Promoter reserves rights to make additions, deletions, alterations or amendments as and when it deem fit and proper, without any prior notice. No representation or warranty is made or intended as to the accuracy or completeness of information and no commitments are being given under this website as to it's suitability or adequacy for any purpose or otherwise howsoever.
                </p>

                <p className="mb-4 text-justify">
                  All dimensions mentioned in the drawings may vary/differ due to construction contingencies and site conditions. Actual product/ development and any other aspect may differ from what is portrayed herein. All layouts, plans, specifications, dimensions, designs, measurements and locations are indicative and not to scale and are subject to change as may be decided by the company or competent authority. Revision, alteration, modification, addition, deletion, substitution or recast, if any, may be necessary during construction.
                </p>

                <p className="mb-4 text-justify">
                  Interior designing used in the flat/unit plan and images are only for representation purpose. The picture of the proposed Residential Flat/Unit and all furnitures, fixtures, items, electronic goods, amenities, landscaping, accessories etc. specified therein are only for the purpose of show casing the Residential Flat/Unit and the Developer is not liable / required to provide any furniture, items, electronic goods amenities, accessories etc. as displayed in the pictures. The Recreational Facilities and amenities will form a part of Developer/Promoter's retained area and will not form a part of common amenities and facilities.
                </p>

                <p className="mb-4 text-justify">
                  The views shown in the picture may vary over period of time and does not guarantee the same. All intending purchaser/s are bound to inspect all plans and approvals and visit project site and apprise themselves of all plans and approvals and other relevant information and nothing in this website is intended to substitute to the intending purchaser the actual plans and approvals obtained from time to time. The relationship between the Developer and the actual customers will be governed strictly by the agreements to be executed from time to time and not on the terms of this website. All details and prices quoted are indicative and have been calculated on basic rate.
                </p>

                <p className="mb-4 text-justify">
                  This website is merely conceptual and is not a legal document. It cannot be treated as a part of the final purchase agreement/s that may be executed from time to time. The Developer reserves right to change, amend, modify the contents of the brochure and architectural specifications during development stages. The Developer/Management holds no responsibility for its accuracy and shall not be liable to any intending purchaser or any one for the changes/ alterations/ improvements so made.
                </p>

                <p className="mb-2 font-semibold text-gray-800">
                  MAHA RERA website:{" "}
                  <a
                    href="https://maharera.mahaonline.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-gold-light underline"
                  >
                    www.maharera.mahaonline.gov.in
                  </a>
                </p>
              </div>

              {/* Footer with Button */}
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-center">
                <button
                  onClick={handleAgree}
                  className="px-8 py-3 bg-gradient-to-r from-primary to-gold-light text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300 text-sm sm:text-base tracking-wide"
                >
                  I AGREE
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default DisclaimerPopup;
