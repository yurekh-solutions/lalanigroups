import { useNavigate, useLocation } from "react-router-dom";

const EnquireButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (location.pathname === "/contact") {
      // Already on contact page, just scroll to section
      const element = document.getElementById("schedule-visit");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        // Add highlight effect
        element.classList.add("ring-2", "ring-primary", "ring-offset-4", "ring-offset-background");
        setTimeout(() => {
          element.classList.remove("ring-2", "ring-primary", "ring-offset-4", "ring-offset-background");
        }, 2000);
      }
    } else {
      // Navigate to contact page with hash
      navigate("/contact#schedule-visit");
    }
  };

  return (
    <button
      onClick={handleClick}
      onTouchEnd={handleClick}
      className="fixed right-0 top-1/2 -translate-y-1/2 z-50 bg-primary text-primary-foreground font-body font-bold text-xs tracking-widest uppercase px-2 sm:px-3 py-4 sm:py-6 rounded-l-lg shadow-lg hover:bg-gold-light active:bg-gold-light transition-colors duration-300 cursor-pointer touch-manipulation"
      style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
      aria-label="Enquire Now - Schedule a Visit"
    >
      Enquire Now
    </button>
  );
};

export default EnquireButton;
