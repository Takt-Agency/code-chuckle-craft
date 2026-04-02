import PageLayout from "@/components/PageLayout";
import { Gamepad2, Music, Palette, Trophy } from "lucide-react";

const Animations = () => (
  <PageLayout title="Animations" subtitle="Séjour des Jeunes">
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-20">
      <div className="text-center mb-12">
        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Un programme riche en animations est prévu pour les jeunes participants 
          tout au long de la semaine des championnats.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { icon: Trophy, title: "Tournois Jeunes", desc: "Compétitions de Scrabble® adaptées au niveau des jeunes joueurs, avec classement et remise de prix." },
          { icon: Gamepad2, title: "Jeux et ateliers", desc: "Ateliers ludiques autour des mots, jeux de société, défis vocabulaire et quiz interactifs." },
          { icon: Palette, title: "Activités créatives", desc: "Ateliers artistiques, calligraphie arabe, initiation à la mosaïque tunisienne." },
          { icon: Music, title: "Soirées", desc: "Soirées à thème, spectacles et moments de convivialité entre jeunes de tous les pays." },
        ].map((item) => (
          <div key={item.title} className="bg-card border border-border rounded-lg p-6">
            <item.icon className="w-8 h-8 text-primary mb-3" />
            <h3 className="font-display text-foreground font-bold text-lg mb-2">{item.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </PageLayout>
);

export default Animations;
