import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Index from "./pages/Index";
import About from "./pages/About";
import StatementOfFaith from "./pages/StatementOfFaith";
import Ministries from "./pages/Ministries";
import Events from "./pages/Events";
import SmallGroups from "./pages/SmallGroups";
import PlanVisit from "./pages/PlanVisit";
import WatchService from "./pages/WatchService";
import Give from "./pages/Give";
import NotFound from "./pages/NotFound";
import Careers from "./pages/Careers";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Blog from "./pages/Blog";
import BlogPostDetail from "./pages/BlogPostDetail";
import DevelopmentProcess from "./pages/DevelopmentProcess";
import HockeyProject from "./pages/HockeyProject";
import PetProject from "./pages/PetProject";
import SportRetailProject from "./pages/SportRetailProject";
import TechDetails from "./pages/TechDetails";
import WorkwearProject from "./pages/WorkwearProject";
import FireCatProject from "./pages/FireCatProject";

const App = () => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <SpeedInsights />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/statement-of-faith" element={<StatementOfFaith />} />
            <Route path="/ministries" element={<Ministries />} />
            <Route path="/events" element={<Events />} />
            <Route path="/small-groups" element={<SmallGroups />} />
            <Route path="/plan-visit" element={<PlanVisit />} />
            <Route path="/watch-service" element={<WatchService />} />
            <Route path="/give" element={<Give />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPostDetail />} />
            <Route path="/development-process" element={<DevelopmentProcess />} />
            <Route path="/hockey-project" element={<HockeyProject />} />
            <Route path="/pet-project" element={<PetProject />} />
            <Route path="/sport-retail-project" element={<SportRetailProject />} />
            <Route path="/tech-details" element={<TechDetails />} />
            <Route path="/workwear-project" element={<WorkwearProject />} />
            <Route path="/firecat-project" element={<FireCatProject />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
