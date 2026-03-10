import { motion } from "framer-motion";
import { Quote, Play } from "lucide-react";
import { useState } from "react";

const testimonialsRow1 = [
  {
    name: "Mr. Subhash Tyagi",
    location: "801, Lalani Fairmont, Khar (W)",
    text: "While retiring from ONGC as a General Manager I was in search of a good residential premises built by the most genuine builder. I am happily living in Lalani Fairmont which I believe has clear distinction with other buildings in the surrounding area.",
  },
  {
    name: "Sunflower International",
    location: "Commercial Client",
    text: "When we were looking for office in Pune, right from identification of the exact area, specifications and correct information about every aspect of the place, Lalani group sales team and senior management were transparent and helpful throughout the process.",
  },
  {
    name: "Mr. & Mrs. Smith",
    location: "501, Royal Manor, Bandra (W)",
    text: "Our experience with the Lalani Group has been extremely professional. The building is a very elegant and tastefully done construction, very well finished. It was truly aesthetically to our liking.",
  },
  {
    name: "Ms. Jayshri Shivraj",
    location: "202, Orchid Enclave, Andheri (E)",
    text: "The Lalani Group's Construction at Orchid Enclave is effective and detailed, where the residents can get some of the best amenities and also experience quality living standards at competent pricing.",
  },
];

const testimonialsRow2 = [
  {
    name: "Mr. Rajesh Kumar",
    location: "Lalani Heritage, Malad (W)",
    text: "The attention to detail and quality of construction is exceptional. Lalani Group has delivered exactly what they promised. The entire process was smooth and transparent.",
  },
  {
    name: "Mrs. Priya Sharma",
    location: "Lalani Grandeur, Andheri (E)",
    text: "We are extremely satisfied with our purchase. The amenities are world-class and the location is perfect. Lalani Group has truly created a landmark property.",
  },
  {
    name: "Tech Solutions Pvt Ltd",
    location: "Lalani Business Park, Khar (W)",
    text: "As a corporate client, we found Lalani Group to be highly professional. The commercial space is well-designed with modern infrastructure and excellent connectivity.",
  },
  {
    name: "Mr. Anil Desai",
    location: "Lalani Fairmont, Khar (W)",
    text: "Living in a Lalani property gives you peace of mind. The build quality is superior and the maintenance is excellent. Highly recommend to anyone looking for a quality home.",
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonialsRow1[0] }) => (
  <div className="glass-card rounded-xl p-6 min-w-[350px] max-w-[350px] mx-3 hover:border-primary/50 transition-all duration-300">
    <Quote className="w-8 h-8 text-primary/40 mb-4" />
    <p className="font-body text-foreground/90 leading-relaxed text-sm mb-4 line-clamp-4">
      "{testimonial.text}"
    </p>
    <div className="border-t border-border pt-4">
      <p className="font-heading text-base font-bold text-foreground">
        {testimonial.name}
      </p>
      <p className="font-body text-xs text-primary mt-1">
        {testimonial.location}
      </p>
    </div>
  </div>
);

const TestimonialsSection = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section id="testimonials" className="section-padding bg-background overflow-hidden">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold gradient-gold-text mb-4">
            Testimonials
          </h2>
          <div className="gold-divider mb-6" />
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Hear what our satisfied customers have to say about their experience with Lalani Group
          </p>
        </motion.div>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
            {!showVideo ? (
              <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-gold-light/20 flex items-center justify-center cursor-pointer"
                   onClick={() => setShowVideo(true)}>
                <img 
                  src="https://img.youtube.com/vi/ZT7uTjJIMtE/maxresdefault.jpg" 
                  alt="Lalani Group Video"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all" />
                <div className="relative z-10 w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-10 h-10 text-white ml-1" fill="white" />
                </div>
              </div>
            ) : (
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/ZT7uTjJIMtE?autoplay=1"
                  title="Lalani Group Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            )}
          </div>
        </motion.div>

        {/* Marquee Row 1 - Forward */}
        <div className="relative mb-8">
          <div className="flex overflow-hidden">
            <motion.div
              className="flex"
              animate={{
                x: [0, -1400],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {[...testimonialsRow1, ...testimonialsRow1].map((testimonial, index) => (
                <TestimonialCard key={`row1-${index}`} testimonial={testimonial} />
              ))}
            </motion.div>
          </div>
        </div>

        {/* Marquee Row 2 - Reverse */}
        <div className="relative">
          <div className="flex overflow-hidden">
            <motion.div
              className="flex"
              animate={{
                x: [-1400, 0],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {[...testimonialsRow2, ...testimonialsRow2].map((testimonial, index) => (
                <TestimonialCard key={`row2-${index}`} testimonial={testimonial} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
