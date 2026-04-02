import PageLayout from "@/components/PageLayout";

const Fisf = () => (
  <PageLayout title="La FISF" subtitle="Fédération Internationale de Scrabble® Francophone">
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-20">
      <div className="bg-card border border-border rounded-lg p-8 md:p-12 mb-8">
        <div className="flex justify-center mb-8">
          <img
            src="https://www.tunis-cdm-scrabble-2026.org/wp-content/uploads/2025/09/fisf_logo_4lignes_rvb.webp"
            alt="FISF"
            className="max-h-24 object-contain"
            loading="lazy"
          />
        </div>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            La <strong className="text-foreground">Fédération Internationale de Scrabble® Francophone (FISF)</strong> est 
            une association qui réunit les amateurs du jeu Scrabble®. Elle a été établie en 1978 à Bruxelles, 
            en Belgique par Hippolyte Wouters.
          </p>
          <p>
            Elle compte 24 pays et environ 23 000 licenciés comme membres. Le président actuel est Amédée Assomo.
          </p>
          <p>
            La FISF organise chaque année les Championnats du Monde de Scrabble® Francophone, 
            l'événement le plus prestigieux du Scrabble® francophone mondial, réunissant les meilleurs 
            joueurs de tous les pays membres.
          </p>
        </div>
      </div>

      <div className="bg-card border border-border rounded-lg p-8">
        <h3 className="font-heading text-2xl italic text-foreground mb-4">Missions</h3>
        <ul className="space-y-3 text-muted-foreground">
          {[
            "Promouvoir le Scrabble® francophone dans le monde",
            "Organiser les compétitions internationales",
            "Coordonner les fédérations nationales membres",
            "Établir les règlements officiels des compétitions",
            "Développer la pratique du Scrabble® auprès des jeunes",
          ].map((m) => (
            <li key={m} className="flex items-start gap-3">
              <span className="diamond w-2 h-2 mt-1.5 shrink-0" />
              <span>{m}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </PageLayout>
);

export default Fisf;
