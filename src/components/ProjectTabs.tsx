import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, Clock, MapPin, CheckCircle, Search, X } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { projects } from "@/data/projects";

const projectCategories = [
  {
    id: "all",
    label: "All Projects",
    icon: Building2
  },
  {
    id: "ongoing",
    label: "Ongoing",
    icon: Clock
  }
];

const ProjectTabs = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchInput, setSearchInput] = useState(searchParams.get("q") || "");
  const searchQuery = searchParams.get("q") || "";

  const handleSearch = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (searchInput.trim()) {
      setSearchParams({ q: searchInput.trim() });
    } else {
      setSearchParams({});
    }
  };

  const clearSearch = () => {
    setSearchInput("");
    setSearchParams({});
  };

  // Filter projects based on active tab + search query
  const filteredProjects = projects.filter(project => {
    const matchesTab =
      activeTab === "all" ? true :
      activeTab === "ongoing" ? project.category === "ongoing" :
      false;

    if (!searchQuery.trim()) return matchesTab;

    const q = searchQuery.toLowerCase();
    const normalize = (s: string) => s.toLowerCase().replace(/[\s\-_]/g, "");
    const nq = normalize(q);
    const matchesSearch =
      project.name.toLowerCase().includes(q) ||
      normalize(project.name).includes(nq) ||
      project.slug.toLowerCase().includes(q) ||
      normalize(project.slug).includes(nq) ||
      project.location.toLowerCase().includes(q) ||
      project.area.toLowerCase().includes(q) ||
      project.type.toLowerCase().includes(q) ||
      (project.description?.toLowerCase().includes(q) ?? false);

    return matchesTab && matchesSearch;
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
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Browse through our diverse portfolio of residential and commercial developments
          </p>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="flex items-center max-w-xl mx-auto mb-8 bg-card border border-border rounded-2xl overflow-hidden shadow-md hover:border-primary/50 transition-all">
            <Search className="w-5 h-5 text-muted-foreground ml-4 shrink-0" />
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search by project, location, BHK type..."
              className="flex-1 bg-transparent text-foreground placeholder-muted-foreground outline-none text-sm py-3.5 px-3"
            />
            {searchInput && (
              <button type="button" onClick={clearSearch} className="px-3 text-muted-foreground hover:text-foreground transition-colors">
                <X className="w-4 h-4" />
              </button>
            )}
            <button
              type="submit"
              className="px-5 py-3.5 bg-gradient-to-r from-primary to-gold-light text-primary-foreground font-semibold text-sm hover:opacity-90 transition-all shrink-0"
            >
              Search
            </button>
          </form>

          {/* Active search label */}
          {searchQuery && (
            <p className="text-sm text-muted-foreground mb-4">
              Showing results for <span className="text-primary font-semibold">"{searchQuery}"</span>
              {" "}&mdash; {filteredProjects.length} project{filteredProjects.length !== 1 ? "s" : ""} found
            </p>
          )}

          {/* Tabs */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mb-8 sm:mb-12">
            {projectCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center justify-center gap-1.5 sm:gap-2 w-64 px-3 sm:px-4 py-2.5 sm:py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === category.id
                    ? "bg-gradient-to-r from-primary to-gold-light text-primary-foreground shadow-lg scale-105"
                    : "bg-card text-muted-foreground hover:text-foreground border border-border/50 hover:border-primary/50"
                }`}
              >
                <category.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                <span className="text-xs sm:text-sm">{category.label}</span>
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
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto"
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
                      {(project.slug === 'lalani-goodwill' || project.slug === 'lalani-business-park' || project.slug === 'velentine-apartment') && (
                        <p className="text-sm text-foreground/80">
                          <span className="font-semibold">Possession:</span> {project.possession}
                        </p>
                      )}
                    </div>

                    <div className="pt-4 border-t border-border">
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
