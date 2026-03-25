import PageLayout from "@/components/PageLayout";
import { MapPin } from "lucide-react";

const excursions = [
  {
    title: "Carthage & Sidi Bou Saïd",
    desc: "Visite des ruines antiques de Carthage (site UNESCO) et du village pittoresque de Sidi Bou Saïd avec ses maisons blanches et bleues emblématiques.",
  },
  {
    title: "Médina de Tunis",
    desc: "Découverte de la vieille ville de Tunis, classée au patrimoine mondial de l'UNESCO, ses souks, ses mosquées et ses palais historiques.",
  },
  {
    title: "Musée du Bardo",
    desc: "L'un des plus importants musées du bassin méditerranéen, abritant la plus grande collection de mosaïques romaines au monde.",
  },
  {
    title: "Journée plage",
    desc: "Détente et activités nautiques sur les plages de Gammarth et La Marsa, à proximité de l'hôtel.",
  },
];

const Excursions = () => (
  <PageLayout title="Excursions" subtitle="Séjour des Jeunes">
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-20">
      <div className="text-center mb-12">
        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Des excursions encadrées permettront aux jeunes de découvrir 
          les trésors culturels et naturels de la Tunisie.
        </p>
      </div>

      <div className="space-y-6">
        {excursions.map((exc) => (
          <div key={exc.title} className="bg-card border border-border rounded-lg p-6 flex gap-5">
            <MapPin className="w-7 h-7 text-primary shrink-0 mt-1" />
            <div>
              <h3 className="font-display text-foreground font-bold text-lg mb-2">{exc.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{exc.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </PageLayout>
);

export default Excursions;
