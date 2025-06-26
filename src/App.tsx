
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import StatementOfFaith from "./pages/StatementOfFaith";
import Ministries from "./pages/Ministries";
import Events from "./pages/Events";
import PlanVisit from "./pages/PlanVisit";
import Give from "./pages/Give";
import NotFound from "./pages/NotFound";

const App = () => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/statement-of-faith" element={<StatementOfFaith />} />
            <Route path="/ministries" element={<Ministries />} />
            <Route path="/events" element={<Events />} />
            <Route path="/plan-visit" element={<PlanVisit />} />
            <Route path="/give" element={<Give />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
