import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, Store, Clock, MapPin, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";

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
    id: "ongoing",
    label: "Ongoing",
    icon: Clock
  }
];

const ProjectTabs = () => {
  const [activeTab, setActiveTab] = useState("all");

  // Filter projects based on active tab
  const filteredProjects = projects.filter(project => {
    if (activeTab === "all") return true;
    // For ongoing tab, show only projects with category "ongoing"
    if (activeTab === "ongoing") return project.category === "ongoing";
    // For residential/commercial tabs, show projects with that category OR "ongoing" projects of that type
    if (activeTab === "residential") return project.category === "residential" || (project.category === "ongoing" && project.type.toLowerCase().includes("residence"));
    if (activeTab === "commercial") return project.category === "commercial" || (project.category === "ongoing" && project.type.toLowerCase().includes("commercial"));
    return project.category === activeTab;
  });

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
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
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12 w-full max-w-lg sm:max-w-2xl mx-auto">
            {projectCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center justify-center gap-2 w-full px-4 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === category.id
                    ? "bg-gradient-to-r from-primary to-gold-light text-primary-foreground shadow-lg scale-105"
                    : "bg-card text-muted-foreground hover:text-foreground border border-border/50 hover:border-primary/50"
                }`}
              >
                <category.icon className="w-4 h-4 shrink-0" />
                <span className="text-sm sm:text-base">{category.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 1 }}
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

                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white font-bold text-lg">{project.type}</p>
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
