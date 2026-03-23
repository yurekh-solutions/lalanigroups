import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Don't scroll to top if navigating to a hash anchor (e.g. /contact#schedule-visit)
    if (hash) return;
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant"
    });
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
