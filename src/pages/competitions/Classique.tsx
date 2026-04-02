import PageLayout from "@/components/PageLayout";

const Classique = () => (
  <PageLayout title="Épreuves Classique" subtitle="Scrabble® classique individuel">
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-20">
      <div className="bg-card border border-border rounded-lg p-8 md:p-12 mb-8">
        <h3 className="font-heading text-2xl italic text-foreground mb-4">Le Scrabble® Classique</h3>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Le Scrabble® classique est le format traditionnel du jeu. Chaque joueur tire ses propres lettres 
            et doit former des mots sur le plateau en fonction de son tirage personnel.
          </p>
          <p>
            Les parties se jouent en face-à-face avec un temps de réflexion limité. 
            La stratégie, la gestion du temps et la connaissance du vocabulaire sont les clés du succès.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { title: "Format", desc: "22 rondes réparties sur plusieurs jours de compétition" },
          { title: "Temps de jeu", desc: "Parties chronométrées avec pendule" },
          { title: "Catégories", desc: "Classement par série selon le niveau des joueurs" },
          { title: "Classement", desc: "Points cumulés + spread (différentiel de points)" },
        ].map((item) => (
          <div key={item.title} className="bg-card border border-border rounded-lg p-6">
            <h4 className="font-display text-primary font-bold text-sm uppercase tracking-widest mb-2">{item.title}</h4>
            <p className="text-muted-foreground text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </PageLayout>
);

export default Classique;
