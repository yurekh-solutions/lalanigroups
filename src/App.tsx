import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/context/AuthContext";
import ProtectedRoute from "@/components/Admin/ProtectedRoute";
import ScrollToTop from "./components/ScrollToTop";
import DisclaimerPopup from "./components/DisclaimerPopup";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import BuyersGuide from "./pages/BuyersGuide";
import MediaRoom from "./pages/MediaRoom";
import Contact from "./pages/Contact";
import WhatsAppInquiry from "./pages/WhatsAppInquiry";
import NotFound from "./pages/NotFound";
import AdminLogin from "./pages/Admin/Login";
import AdminDashboard from "./pages/Admin/Dashboard";
import LalaniGoodwill from "./pages/LalaniGoodwill";
import LalaniBusinessPark from "./pages/LalaniBusinessPark";
import LalaniHeritagePark from "./pages/LalaniHeritagePark";
import VelentineApartment from "./pages/VelentineApartment";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <DisclaimerPopup />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/lalani-goodwill" element={<Navigate to="/lalani-goodwill" replace />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/lalani-goodwill" element={<LalaniGoodwill />} />
            <Route path="/lalani-business-park" element={<LalaniBusinessPark />} />
            <Route path="/projects/lalani-business-park" element={<Navigate to="/lalani-business-park" replace />} />
            <Route path="/lalani-heritage-park" element={<LalaniHeritagePark />} />
            <Route path="/projects/lalani-heritage-park" element={<Navigate to="/lalani-heritage-park" replace />} />
            <Route path="/velentine-apartment" element={<VelentineApartment />} />
            <Route path="/projects/velentine-apartment" element={<Navigate to="/velentine-apartment" replace />} />
            <Route path="/buyers-guide" element={<BuyersGuide />} />
            <Route path="/media-room" element={<MediaRoom />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/whatsapp" element={<WhatsAppInquiry />} />
            
            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route 
              path="/admin/dashboard" 
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              } 
            />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
