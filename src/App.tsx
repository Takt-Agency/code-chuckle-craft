import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";

// Événement
import Fisf from "./pages/evenement/Fisf.tsx";
import Comite from "./pages/evenement/Comite.tsx";
import Historique from "./pages/evenement/Historique.tsx";

// Compétitions
import Competitions from "./pages/Competitions.tsx";
import Programme from "./pages/competitions/Programme.tsx";
import Reglements from "./pages/competitions/Reglements.tsx";
import Classique from "./pages/competitions/Classique.tsx";
import Duplicate from "./pages/competitions/Duplicate.tsx";
import Resultats from "./pages/competitions/Resultats.tsx";

// Inscriptions
import Inscriptions from "./pages/Inscriptions.tsx";

// Hébergement
import Hebergement from "./pages/Hebergement.tsx";
import Verdi from "./pages/hebergement/Verdi.tsx";
import Reservations from "./pages/hebergement/Reservations.tsx";
import ChambreSingle from "./pages/hebergement/ChambreSingle.tsx";
import ChambreDouble from "./pages/hebergement/ChambreDouble.tsx";
import ChambreTwin from "./pages/hebergement/ChambreTwin.tsx";

// Infos Pratiques
import Venir from "./pages/infos/Venir.tsx";
import Rejoindre from "./pages/infos/Rejoindre.tsx";
import Decouvrir from "./pages/infos/Decouvrir.tsx";

// Partenaires
import Partenaires from "./pages/Partenaires.tsx";
import DevenirPartenaire from "./pages/partenaires/DevenirPartenaire.tsx";

// Séjour des Jeunes
import Descriptif from "./pages/sejour/Descriptif.tsx";
import Animations from "./pages/sejour/Animations.tsx";
import Excursions from "./pages/sejour/Excursions.tsx";

// Contact
import Contact from "./pages/Contact.tsx";

// Legal
import MentionsLegales from "./pages/legal/MentionsLegales.tsx";
import PolitiqueConfidentialite from "./pages/legal/PolitiqueConfidentialite.tsx";
import PolitiqueCookies from "./pages/legal/PolitiqueCookies.tsx";
import PlanDuSite from "./pages/legal/PlanDuSite.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />

          {/* Événement */}
          <Route path="/evenement/fisf" element={<Fisf />} />
          <Route path="/evenement/comite" element={<Comite />} />
          <Route path="/evenement/historique" element={<Historique />} />

          {/* Compétitions */}
          <Route path="/competitions" element={<Competitions />} />
          <Route path="/competitions/programme" element={<Programme />} />
          <Route path="/competitions/reglements" element={<Reglements />} />
          <Route path="/competitions/classique" element={<Classique />} />
          <Route path="/competitions/duplicate" element={<Duplicate />} />
          <Route path="/competitions/resultats" element={<Resultats />} />

          {/* Inscriptions */}
          <Route path="/inscriptions" element={<Inscriptions />} />

          {/* Hébergement */}
          <Route path="/hebergement" element={<Hebergement />} />
          <Route path="/hebergement/verdi" element={<Verdi />} />
          <Route path="/hebergement/verdi/chambre-single" element={<ChambreSingle />} />
          <Route path="/hebergement/verdi/chambre-double" element={<ChambreDouble />} />
          <Route path="/hebergement/verdi/chambre-twin" element={<ChambreTwin />} />
          <Route path="/hebergement/reservations" element={<Reservations />} />

          {/* Infos Pratiques */}
          <Route path="/infos-pratiques/venir" element={<Venir />} />
          <Route path="/infos-pratiques/rejoindre" element={<Rejoindre />} />
          <Route path="/infos-pratiques/decouvrir" element={<Decouvrir />} />

          {/* Partenaires */}
          <Route path="/partenaires" element={<Partenaires />} />
          <Route path="/partenaires/devenir" element={<DevenirPartenaire />} />

          {/* Séjour des Jeunes */}
          <Route path="/sejour-jeunes/descriptif" element={<Descriptif />} />
          <Route path="/sejour-jeunes/animations" element={<Animations />} />
          <Route path="/sejour-jeunes/excursions" element={<Excursions />} />

          {/* Contact */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/contactez-nous" element={<Contact />} />

          {/* Legal */}
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/politique-de-confidentialite" element={<PolitiqueConfidentialite />} />
          <Route path="/politique-des-cookies" element={<PolitiqueCookies />} />
          <Route path="/plan-du-site" element={<PlanDuSite />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
