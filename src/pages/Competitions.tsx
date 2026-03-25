import PageLayout from "@/components/PageLayout";

const competitions = [
  {
    title: "Championnat du Monde Individuel",
    desc: "La compétition reine qui sacrera le champion du monde 2026. Les meilleurs joueurs de chaque pays s'affrontent lors de parties officielles chronométrées.",
  },
  {
    title: "Championnat du Monde par Paires",
    desc: "Épreuve en duo qui met en valeur la stratégie collective et la complicité entre coéquipiers.",
  },
  {
    title: "Championnat du Monde Duplicate",
    desc: "Tous les joueurs jouent sur la même grille au même moment. Une épreuve qui élimine le facteur chance du tirage.",
  },
  {
    title: "Blitz",
    desc: "Des parties rapides et intenses où la vitesse de réflexion est aussi importante que la connaissance du vocabulaire.",
  },
];

const Competitions = () => (
  <PageLayout title="Compétitions" subtitle="Les épreuves officielles">
    <div className="max-w-5xl mx-auto px-4 md:px-8 py-12 md:py-20">
      <div className="text-center mb-16">
        <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Les 54es Championnats du Monde proposent plusieurs épreuves officielles 
          permettant à tous les niveaux de joueurs de participer et de se mesurer 
          aux meilleurs scrabbleurs francophones du monde.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {competitions.map((comp) => (
          <div key={comp.title} className="bg-card border border-border rounded-lg p-8 hover:border-primary transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <span className="diamond w-2.5 h-2.5" />
              <h3 className="font-display text-foreground font-bold text-xl">{comp.title}</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">{comp.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </PageLayout>
);

export default Competitions;
