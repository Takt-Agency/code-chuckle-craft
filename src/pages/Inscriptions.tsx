import PageLayout from "@/components/PageLayout";
import { ExternalLink } from "lucide-react";

const Inscriptions = () => (
  <PageLayout title="Inscriptions" subtitle="Rejoignez la compétition">
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-20">
      {/* Info Notice */}
      <div className="bg-card border-l-4 border-primary rounded-lg p-6 md:p-8 mb-10">
        <h3 className="font-display text-foreground font-bold text-lg mb-2">Information</h3>
        <p className="text-muted-foreground leading-relaxed">
          Les inscriptions se font à partir du site de la Fédération Française de Scrabble®. 
          Veuillez suivre le lien ci-dessous pour accéder au formulaire d'inscription officiel.
        </p>
      </div>

      {/* CTA */}
      <div className="text-center mb-12">
        <a
          href="https://www.ffsc.fr/inscription.php?page=inscriptions&id_tournoi=25802"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline-gold inline-flex items-center gap-2"
        >
          S'inscrire <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      {/* Tarifs */}
      <div className="bg-card border border-border rounded-lg p-8 md:p-12">
        <h3 className="font-heading text-2xl italic text-foreground mb-6">Tarifs</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-border">
                <th className="py-3 pr-4 text-primary font-display font-bold">Épreuve</th>
                <th className="py-3 text-primary font-display font-bold">Tarif</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border/50">
                <td className="py-3 pr-4">Championnat Individuel</td>
                <td className="py-3">Voir site FFSc</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 pr-4">Championnat par Paires</td>
                <td className="py-3">Voir site FFSc</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 pr-4">Duplicate</td>
                <td className="py-3">Voir site FFSc</td>
              </tr>
              <tr>
                <td className="py-3 pr-4">Blitz</td>
                <td className="py-3">Voir site FFSc</td>
              </tr>
            </tbody>
          </table>
        </div>
        <a
          href="https://www.tunis-cdm-scrabble-2026.org/tarifs/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 text-primary text-sm font-bold uppercase tracking-widest hover:text-foreground transition-colors"
        >
          Consulter les tarifs détaillés →
        </a>
      </div>
    </div>
  </PageLayout>
);

export default Inscriptions;
