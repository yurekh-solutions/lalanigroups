import { Link } from "react-router-dom";

const EnquireButton = () => {
  return (
    <Link
      to="/contact"
      className="fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-primary text-primary-foreground font-body font-bold text-xs tracking-widest uppercase px-3 py-6 rounded-l-lg shadow-lg hover:bg-gold-light transition-colors duration-300"
      style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
    >
      Enquire Now
    </Link>
  );
};

export default EnquireButton;
