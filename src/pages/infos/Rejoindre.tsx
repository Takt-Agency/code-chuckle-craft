import PageLayout from "@/components/PageLayout";
import { Car, Plane, MapPin } from "lucide-react";

const Rejoindre = () => (
  <PageLayout title="Rejoindre l'hôtel" subtitle="Transferts et transport">
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-20">
      <div className="space-y-6">
        <div className="bg-card border border-border rounded-lg p-6 md:p-8 flex gap-5">
          <Plane className="w-7 h-7 text-primary shrink-0 mt-1" />
          <div>
            <h3 className="font-display text-foreground font-bold text-lg mb-2">Navette Aéroport</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Un service de navette est organisé entre l'aéroport de Tunis-Carthage et le Regency Tunis Hôtel 
              à Gammarth. Le trajet dure environ 20 minutes.
            </p>
            <a
              href="https://www.tunis-cdm-scrabble-2026.org/rejoindre-lhotel/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-gold text-xs px-6 py-2 inline-block"
            >
              Réserver une navette
            </a>
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-6 md:p-8 flex gap-5">
          <Car className="w-7 h-7 text-primary shrink-0 mt-1" />
          <div>
            <h3 className="font-display text-foreground font-bold text-lg mb-2">Taxi</h3>
            <p className="text-muted-foreground leading-relaxed">
              Des taxis sont disponibles à la sortie de l'aéroport. Le trajet jusqu'à Gammarth coûte 
              environ 20–30 TND (dinars tunisiens). Privilégiez les taxis avec compteur.
            </p>
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-6 md:p-8 flex gap-5">
          <MapPin className="w-7 h-7 text-primary shrink-0 mt-1" />
          <div>
            <h3 className="font-display text-foreground font-bold text-lg mb-2">Adresse de l'hôtel</h3>
            <p className="text-muted-foreground leading-relaxed">
              Regency Tunis Hôtel<br />
              Gammarth, La Marsa<br />
              Tunis, Tunisie
            </p>
          </div>
        </div>
      </div>
    </div>
  </PageLayout>
);

export default Rejoindre;
