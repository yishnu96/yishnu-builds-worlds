import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import CursorGlow from "@/components/CursorGlow";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CaseStudyPage from "./pages/CaseStudyPage";
import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";
import { useScrollRestoration } from "@/hooks/useScrollRestoration";

const queryClient = new QueryClient();

const AppContent = () => {
  const location = useLocation();
  useScrollRestoration();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/work/:slug" element={<CaseStudyPage />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CursorGlow />
      <Toaster />
      <Sonner />
      <ScrollProgress />
      <CustomCursor />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
