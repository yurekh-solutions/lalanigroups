import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, Store, CheckCircle, MapPin, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { projects, getProjectsByCategory } from "@/data/projects";

const projectCategories = [
  {
    id: "all",
    label: "All Projects",
    icon: Building2
  },
  {
    id: "residential",
    label: "Residential",
    icon: Home
  },
  {
    id: "commercial",
    label: "Commercial",
    icon: Store
  },
  {
    id: "completed",
    label: "Completed",
    icon: CheckCircle
  }
];

const ProjectTabs = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects = getProjectsByCategory(activeTab);

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
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 gradient-gold-text">
            Explore Our Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Browse through our diverse portfolio of residential and commercial developments
          </p>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {projectCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === category.id
                    ? "bg-gradient-to-r from-primary to-gold-light text-primary-foreground shadow-lg scale-105"
                    : "bg-card text-muted-foreground hover:text-foreground border border-border/50 hover:border-primary/50"
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group bg-card rounded-2xl overflow-hidden shadow-lg border border-border/50 hover:border-primary/50 transition-all duration-300"
              >
                <Link to={`/projects/${project.slug}`} className="block">
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md ${
                        project.status === "Ready Possession"
                          ? "bg-green-500/80 text-white"
                          : "bg-primary/80 text-primary-foreground"
                      }`}>
                        {project.status}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white font-bold text-lg">{project.price}</p>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-heading font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                      {project.name}
                    </h3>
                    
                    <div className="flex items-start gap-2 mb-3">
                      <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <p className="text-sm text-muted-foreground">{project.location}</p>
                    </div>

                    <div className="space-y-2 mb-4">
                      <p className="text-sm text-foreground/80">
                        <span className="font-semibold">Type:</span> {project.type}
                      </p>
                      <p className="text-sm text-foreground/80">
                        <span className="font-semibold">Possession:</span> {project.possession}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-border">
                      <p className="text-xs text-muted-foreground mb-1">
                        MahaRERA: {project.rera}
                      </p>
                      <span className="text-xs text-primary hover:text-gold-light underline">
                        View Details →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectTabs;
