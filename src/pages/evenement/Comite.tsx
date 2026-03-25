import PageLayout from "@/components/PageLayout";
import { Users } from "lucide-react";

const Comite = () => (
  <PageLayout title="Comité d'Organisation" subtitle="L'équipe derrière l'événement">
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-20">
      <div className="text-center mb-12">
        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Le Comité d'Organisation des 54es Championnats du Monde de Scrabble Francophone 
          est composé de représentants de la FISF, de l'ASTUS et de la FFSc, travaillant ensemble 
          pour offrir un événement de qualité exceptionnelle.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { org: "FISF", role: "Organisation internationale", desc: "Fédération Internationale de Scrabble Francophone – Coordination globale de l'événement" },
          { org: "ASTUS", role: "Organisation locale", desc: "Association Scrabble Tunisie – Logistique locale et accueil des participants" },
          { org: "FFSc", role: "Support technique", desc: "Fédération Française de Scrabble – Gestion des inscriptions et arbitrage" },
          { org: "Regency Tunis Hôtel", role: "Lieu d'accueil", desc: "Hébergement et infrastructure pour le bon déroulement des compétitions" },
        ].map((item) => (
          <div key={item.org} className="bg-card border border-border rounded-lg p-6">
            <Users className="w-6 h-6 text-primary mb-3" />
            <h3 className="font-display text-foreground font-bold text-lg">{item.org}</h3>
            <p className="text-primary text-xs uppercase tracking-widest font-bold mt-1 mb-3">{item.role}</p>
            <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </PageLayout>
);

export default Comite;
