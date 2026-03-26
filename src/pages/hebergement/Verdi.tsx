import PageLayout from "@/components/PageLayout";
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import { Info, Bus } from "lucide-react";

const rooms = [
  {
    title: "Chambre Twin",
    subtitle: "Petit déjeuner",
    image: "https://www.tunis-cdm-scrabble-2026.org/wp-content/uploads/2026/01/verdi-twin_double.webp",
    to: "/hebergement/verdi/chambre-twin",
  },
  {
    title: "Chambre Double",
    subtitle: "Petit déjeuner",
    image: "https://www.tunis-cdm-scrabble-2026.org/wp-content/uploads/2026/01/verdi-twin_double.webp",
    to: "/hebergement/verdi/chambre-double",
  },
  {
    title: "Chambre Single",
    subtitle: "Petit déjeuner",
    image: "https://www.tunis-cdm-scrabble-2026.org/wp-content/uploads/2026/01/verid_single.webp",
    to: "/hebergement/verdi/chambre-single",
  },
];

const Verdi = () => (
  <PageLayout title="Réservations Verdi" subtitle="Formulaires de réservation Hôtel Verdi">
    <div className="max-w-5xl mx-auto px-4 md:px-8 py-12 md:py-20">
      <AnimatedSection variant="fade-up">
        <h2 className="font-heading text-2xl md:text-3xl italic text-foreground text-center mb-10">
          Chambre Single, Double ou Twin
        </h2>
      </AnimatedSection>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12" staggerDelay={0.12}>
        {rooms.map((room) => (
          <StaggerItem key={room.title}>
            <Link
              to={room.to}
              className="bg-card border border-border rounded-lg overflow-hidden group hover:border-primary transition-colors block"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="font-display text-foreground font-bold text-lg group-hover:text-primary transition-colors">
                  {room.title}
                </h3>
                <p className="text-primary text-xs uppercase tracking-widest font-bold mt-1">
                  {room.subtitle}
                </p>
              </div>
            </Link>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* Suppléments */}
      <AnimatedSection variant="fade-up" delay={0.2}>
        <div className="space-y-6">
          <h2 className="font-heading text-2xl italic text-foreground text-center mb-6">
            Suppléments
          </h2>

          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex gap-4">
              <Info className="w-6 h-6 text-primary shrink-0 mt-0.5" />
              <div>
                <h3 className="font-display text-foreground font-bold text-lg mb-2">
                  Taxe de séjour
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Une taxe de séjour de <span className="text-primary font-bold">4,00 €</span> est
                  appliquée par personne et par jour.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex gap-4">
              <Bus className="w-6 h-6 text-primary shrink-0 mt-0.5" />
              <div>
                <h3 className="font-display text-foreground font-bold text-lg mb-2">
                  Navette aéroport-hôtel
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Un service de navette entre l'aéroport et l'hôtel sera mis en place pour le
                  transfert le jour de votre arrivée. Les modalités pratiques et le tarif vous seront
                  communiqués ultérieurement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </PageLayout>
);

export default Verdi;
