import PageLayout from "@/components/PageLayout";

const programme = [
  { jour: "Vendredi 18 juillet", events: ["Accueil des participants", "Cérémonie d'ouverture", "Cocktail de bienvenue"] },
  { jour: "Samedi 19 juillet", events: ["Épreuves Classique – Rondes 1 à 4", "Épreuves Duplicate – Rondes 1 à 3"] },
  { jour: "Dimanche 20 juillet", events: ["Épreuves Classique – Rondes 5 à 8", "Épreuves Duplicate – Rondes 4 à 6"] },
  { jour: "Lundi 21 juillet", events: ["Épreuves Classique – Rondes 9 à 12", "Épreuves Duplicate – Rondes 7 à 9"] },
  { jour: "Mardi 22 juillet", events: ["Épreuves Classique – Rondes 13 à 15", "Épreuve par Paires"] },
  { jour: "Mercredi 23 juillet", events: ["Journée libre", "Excursions organisées", "Blitz en soirée"] },
  { jour: "Jeudi 24 juillet", events: ["Épreuves Classique – Rondes 16 à 19", "Épreuves Duplicate – Rondes 10 à 12"] },
  { jour: "Vendredi 25 juillet", events: ["Épreuves Classique – Rondes 20 à 22", "Épreuves Duplicate – Rondes 13 à 15"] },
  { jour: "Samedi 26 juillet", events: ["Finales", "Cérémonie de clôture et remise des prix"] },
];

const Programme = () => (
  <PageLayout title="Programme" subtitle="Déroulement des championnats">
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-20">
      <div className="space-y-4">
        {programme.map((day) => (
          <div key={day.jour} className="bg-card border border-border rounded-lg p-6">
            <h3 className="font-display text-primary font-bold text-lg mb-3">{day.jour}</h3>
            <ul className="space-y-2">
              {day.events.map((ev) => (
                <li key={ev} className="flex items-start gap-3 text-muted-foreground text-sm">
                  <span className="diamond w-1.5 h-1.5 mt-1.5 shrink-0" />
                  <span>{ev}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </PageLayout>
);

export default Programme;
