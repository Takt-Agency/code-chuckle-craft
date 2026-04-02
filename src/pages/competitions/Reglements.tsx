import PageLayout from "@/components/PageLayout";
import { FileText } from "lucide-react";

const Reglements = () => (
  <PageLayout title="Règlements" subtitle="Règles officielles">
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-20">
      <div className="space-y-6">
        {[
          { title: "Règlement général", desc: "Règles générales applicables à l'ensemble des compétitions des Championnats du Monde de Scrabble® Francophone." },
          { title: "Règlement Classique", desc: "Règles spécifiques aux épreuves de Scrabble® classique (parties individuelles avec tirage aléatoire)." },
          { title: "Règlement Duplicate", desc: "Règles spécifiques aux épreuves de Scrabble® duplicate (même tirage pour tous les joueurs)." },
          { title: "Règlement Paires", desc: "Règles spécifiques à l'épreuve par paires." },
          { title: "Règlement Blitz", desc: "Règles pour les parties rapides en format blitz." },
          { title: "Code de conduite", desc: "Comportement attendu des joueurs, accompagnateurs et spectateurs pendant toute la durée de l'événement." },
        ].map((r) => (
          <div key={r.title} className="bg-card border border-border rounded-lg p-6 flex gap-4">
            <FileText className="w-6 h-6 text-primary shrink-0 mt-0.5" />
            <div>
              <h3 className="font-display text-foreground font-bold text-lg mb-1">{r.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{r.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </PageLayout>
);

export default Reglements;
