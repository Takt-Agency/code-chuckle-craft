import PageLayout from "@/components/PageLayout";
import { BookOpen } from "lucide-react";

const Descriptif = () => (
  <PageLayout title="Séjour des Jeunes" subtitle="Descriptif du programme">
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-20">
      <div className="bg-card border border-border rounded-lg p-8 md:p-12 mb-8">
        <BookOpen className="w-10 h-10 text-primary mb-4" />
        <h3 className="font-heading text-2xl italic text-foreground mb-4">
          Programme Jeunes – CDM 2026
        </h3>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Le Séjour des Jeunes est un programme spécialement conçu pour les jeunes scrabbleurs 
            accompagnant l'événement. Il propose un mélange d'activités ludiques, éducatives et 
            sportives encadrées par des animateurs qualifiés.
          </p>
          <p>
            Les jeunes participants auront l'opportunité de participer à des tournois adaptés 
            à leur niveau, de découvrir la culture tunisienne à travers des excursions, 
            et de profiter d'animations variées tout au long de la semaine.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: "Âge", desc: "Programme ouvert aux jeunes de 8 à 17 ans" },
          { title: "Encadrement", desc: "Animateurs qualifiés et encadrement permanent" },
          { title: "Activités", desc: "Tournois, animations, excursions et loisirs" },
        ].map((item) => (
          <div key={item.title} className="bg-card border border-border rounded-lg p-6 text-center">
            <h4 className="font-display text-primary font-bold text-sm uppercase tracking-widest mb-2">{item.title}</h4>
            <p className="text-muted-foreground text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </PageLayout>
);

export default Descriptif;
