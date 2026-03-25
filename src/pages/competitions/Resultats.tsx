import PageLayout from "@/components/PageLayout";
import { Trophy } from "lucide-react";

const Resultats = () => (
  <PageLayout title="Résultats" subtitle="Classements et scores">
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-20">
      <div className="bg-card border-l-4 border-primary rounded-lg p-8 text-center">
        <Trophy className="w-12 h-12 text-primary mx-auto mb-4" />
        <h3 className="font-heading text-2xl italic text-foreground mb-4">
          Les résultats seront disponibles pendant le tournoi
        </h3>
        <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed">
          Les classements et résultats de toutes les épreuves seront publiés ici 
          en temps réel pendant les Championnats du Monde, du 18 au 26 juillet 2026.
        </p>
      </div>
    </div>
  </PageLayout>
);

export default Resultats;
