import { motion } from "framer-motion";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  {
    image: project1,
    name: "Lalani Goodwill",
    location: "J.B. Nagar, Andheri (E)",
    rera: "MahaRERA No. P51800079065",
    type: "1BHK, 2BHK & 3BHK Residences",
    status: "Ongoing",
  },
  {
    image: project2,
    name: "Lalani Business Park",
    location: "Khar (W)",
    rera: "MahaRERA No. P51800033063",
    type: "Commercial Spaces",
    status: "Ongoing",
  },
  {
    image: project3,
    name: "Velentine Apartment",
    location: "Malad (E)",
    rera: "MahaRERA No. P51800028866",
    type: "1BHK & 2BHK Residences",
    status: "Ready Possession",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold gradient-gold-text mb-4">
            Ongoing Projects
          </h2>
          <div className="gold-divider mb-6" />
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Discover our premium residential and commercial developments across Mumbai's prime locations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group glass-card rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-500"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={project.image}
                  alt={`${project.name} - ${project.location}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-body font-semibold ${
                    project.status === "Ready Possession"
                      ? "bg-green-500/20 text-green-400 border border-green-500/30"
                      : "bg-primary/20 text-primary border border-primary/30"
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-foreground mb-1">
                  {project.name}
                </h3>
                <p className="text-sm text-primary font-body mb-3">{project.location}</p>
                <p className="text-sm text-muted-foreground font-body mb-2">{project.type}</p>
                <div className="pt-3 border-t border-border">
                  <p className="text-xs text-muted-foreground font-body">{project.rera}</p>
                  <p className="text-xs text-muted-foreground font-body mt-1">
                    Available on{" "}
                    <a
                      href="https://maharerait.mahaonline.gov.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-gold-light underline"
                    >
                      maharerait.mahaonline.gov.in
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
