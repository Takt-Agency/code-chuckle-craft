import PageLayout from "@/components/PageLayout";

const Duplicate = () => (
  <PageLayout title="Épreuves Duplicate" subtitle="Même tirage pour tous">
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-20">
      <div className="bg-card border border-border rounded-lg p-8 md:p-12 mb-8">
        <h3 className="font-heading text-2xl italic text-foreground mb-4">Le Scrabble Duplicate</h3>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            En Duplicate, tous les joueurs disposent du même tirage de lettres au même moment. 
            Cela élimine le facteur chance et met en valeur la pure connaissance lexicale et la capacité 
            à trouver le meilleur coup possible.
          </p>
          <p>
            Chaque joueur joue sur sa propre grille. Après chaque coup, la meilleure solution est annoncée 
            et placée sur toutes les grilles, garantissant une grille identique pour tous à chaque tour.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { title: "Format", desc: "15 rondes avec tirages identiques pour tous les participants" },
          { title: "Temps de réflexion", desc: "Temps limité par coup pour trouver le meilleur mot" },
          { title: "Scoring", desc: "Points attribués selon la qualité du mot trouvé par rapport au top" },
          { title: "Avantage", desc: "Aucun facteur de chance – la victoire récompense le meilleur joueur" },
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

export default Duplicate;
