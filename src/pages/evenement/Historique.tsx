import PageLayout from "@/components/PageLayout";

const editions = [
  { year: "2024", city: "Djerba, Tunisie", edition: "53e" },
  { year: "2022", city: "Bruxelles, Belgique", edition: "52e" },
  { year: "2019", city: "Mons, Belgique", edition: "51e" },
  { year: "2018", city: "Arles, France", edition: "50e" },
  { year: "2017", city: "Rabat, Maroc", edition: "49e" },
  { year: "2016", city: "Charleroi, Belgique", edition: "48e" },
  { year: "2015", city: "Louvain-la-Neuve, Belgique", edition: "47e" },
  { year: "2014", city: "Paris, France", edition: "46e" },
  { year: "2013", city: "Nice, France", edition: "45e" },
  { year: "2012", city: "Montréal, Canada", edition: "44e" },
];

const Historique = () => (
  <PageLayout title="Historique des CDM" subtitle="Les éditions précédentes">
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-20">
      <div className="text-center mb-12">
        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Depuis plus de 50 ans, les Championnats du Monde de Scrabble® Francophone 
          rassemblent les meilleurs joueurs du monde entier dans des villes emblématiques.
        </p>
      </div>

      <div className="space-y-3">
        {editions.map((e) => (
          <div key={e.year} className="bg-card border border-border rounded-lg p-5 flex items-center gap-6">
            <span className="font-display text-primary text-2xl font-bold w-16 shrink-0">{e.year}</span>
            <div className="h-8 w-px bg-border" />
            <div>
              <span className="text-foreground font-bold text-sm">{e.edition} édition</span>
              <p className="text-muted-foreground text-sm">{e.city}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-card border-l-4 border-primary rounded-lg p-6 mt-10">
        <p className="text-primary font-display font-bold text-lg mb-1">2026 — 54e édition</p>
        <p className="text-muted-foreground">Tunis, Tunisie · Regency Tunis Hôtel · 18–26 juillet</p>
      </div>
    </div>
  </PageLayout>
);

export default Historique;
