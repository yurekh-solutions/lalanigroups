import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import LogoLoader from "./LogoLoader";

export default function PageLoader({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Show loader on every route change
    setIsLoading(true);

    // Hide loader after content loads (adjust timing based on image loading)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // 1.5 seconds for professional feel

    return () => clearTimeout(timer);
  }, [location.pathname]); // Trigger on every route change

  return (
    <>
      {isLoading && <LogoLoader />}
      {children}
    </>
  );
}
