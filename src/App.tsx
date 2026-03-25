import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Evenement from "./pages/Evenement.tsx";
import Competitions from "./pages/Competitions.tsx";
import Inscriptions from "./pages/Inscriptions.tsx";
import Hebergement from "./pages/Hebergement.tsx";
import InfosPratiques from "./pages/InfosPratiques.tsx";
import Partenaires from "./pages/Partenaires.tsx";
import Contact from "./pages/Contact.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/evenement" element={<Evenement />} />
          <Route path="/competitions" element={<Competitions />} />
          <Route path="/inscriptions" element={<Inscriptions />} />
          <Route path="/hebergement" element={<Hebergement />} />
          <Route path="/infos-pratiques" element={<InfosPratiques />} />
          <Route path="/partenaires" element={<Partenaires />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
