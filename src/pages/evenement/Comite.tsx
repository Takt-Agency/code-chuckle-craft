import PageLayout from "@/components/PageLayout";
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const members = [
  {
    name: "Patrice Jeanneret",
    role: "Président",
    country: "Suisse",
    flag: "https://www.tunis-cdm-scrabble-2026.org/wp-content/uploads/2025/08/switzerland-flag-icon-32.webp",
    photo: "https://www.tunis-cdm-scrabble-2026.org/wp-content/uploads/2025/06/patrice-jeanneret.jpeg",
  },
  {
    name: "Olivier Assinou",
    role: "1er Vice Président",
    country: "Bénin",
    flag: "https://www.tunis-cdm-scrabble-2026.org/wp-content/uploads/2025/08/benin-flag-icon-32.webp",
    photo: "https://www.tunis-cdm-scrabble-2026.org/wp-content/uploads/2025/06/olivier-assinou.jpeg",
  },
  {
    name: "Rokhaya Dieng",
    role: "Secrétaire Générale",
    country: "Sénégal",
    flag: "https://www.tunis-cdm-scrabble-2026.org/wp-content/uploads/2025/08/senegal-flag-icon-32.webp",
    photo: "https://www.tunis-cdm-scrabble-2026.org/wp-content/uploads/2025/10/rokhaya_dieng-205x300.webp",
  },
  {
    name: "Walid Guizani",
    role: "2ème Vice Président",
    country: "Tunisie",
    flag: "https://www.tunis-cdm-scrabble-2026.org/wp-content/uploads/2025/08/tunisia-flag-icon-32.webp",
    photo: null,
  },
  {
    name: "Yves Brenez",
    role: "Trésorier",
    country: "Belgique",
    flag: "https://www.tunis-cdm-scrabble-2026.org/wp-content/uploads/2025/08/belgium-flag-icon-32.webp",
    photo: "https://www.tunis-cdm-scrabble-2026.org/wp-content/uploads/2025/06/yves-brenez.jpeg",
  },
  {
    name: "Danièle Mekuate",
    role: "Communication - Promotion",
    country: "Cameroun",
    flag: "https://www.tunis-cdm-scrabble-2026.org/wp-content/uploads/2025/08/cameroon-flag-icon-32.webp",
    photo: "https://www.tunis-cdm-scrabble-2026.org/wp-content/uploads/2025/06/daniele-mekuate.jpeg",
  },
  {
    name: "J.Jacques Capdeville",
    role: "Site web",
    country: "France",
    flag: "https://www.tunis-cdm-scrabble-2026.org/wp-content/uploads/2025/08/france-flag-icon-32.webp",
    photo: "https://www.tunis-cdm-scrabble-2026.org/wp-content/uploads/2025/09/jean-jacques-200x300.webp",
  },
  {
    name: "Orphée Visvikis",
    role: "Organisation Classique",
    country: "Grèce",
    flag: "https://www.tunis-cdm-scrabble-2026.org/wp-content/uploads/2025/08/greece-flag-icon-32.webp",
    photo: "https://www.tunis-cdm-scrabble-2026.org/wp-content/uploads/2025/06/orphee-visvikis.jpeg",
  },
  {
    name: "Benoît Delafontaine",
    role: "Séjour des jeunes",
    country: "Suisse",
    flag: "https://www.tunis-cdm-scrabble-2026.org/wp-content/uploads/2025/08/switzerland-flag-icon-32.webp",
    photo: "https://www.tunis-cdm-scrabble-2026.org/wp-content/uploads/2025/06/benoit-delafontaine.jpg",
  },
  {
    name: "Louis Eggermont",
    role: "Organisation Duplicate",
    country: "Belgique",
    flag: "https://www.tunis-cdm-scrabble-2026.org/wp-content/uploads/2025/08/belgium-flag-icon-32.webp",
    photo: "https://www.tunis-cdm-scrabble-2026.org/wp-content/uploads/2025/12/louis-eggermont-768x1024.webp",
  },
  {
    name: "Christian Couvreur",
    role: "Arbitrage Duplicate",
    country: "France",
    flag: "https://www.tunis-cdm-scrabble-2026.org/wp-content/uploads/2025/08/france-flag-icon-32.webp",
    photo: "https://www.tunis-cdm-scrabble-2026.org/wp-content/uploads/2025/06/christian-couvreur.jpg",
  },
];

const Comite = () => (
  <PageLayout title="Comité d'Organisation" subtitle="L'équipe derrière l'événement">
    <div className="max-w-5xl mx-auto px-4 md:px-8 py-12 md:py-20">
      <AnimatedSection variant="fade-up">
        <div className="text-center mb-14">
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Le Comité d'Organisation des 54<sup>es</sup> Championnats du Monde de Scrabble
            Francophone réunit des membres de plusieurs pays francophones.
          </p>
        </div>
      </AnimatedSection>

      <StaggerContainer
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        staggerDelay={0.08}
      >
        {members.map((m) => (
          <StaggerItem key={m.name}>
            <div className="bg-card border border-border rounded-lg overflow-hidden text-center group hover:border-primary transition-colors">
              {/* Photo */}
              <div className="h-52 bg-secondary flex items-center justify-center overflow-hidden">
                {m.photo ? (
                  <img
                    src={m.photo}
                    alt={m.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center">
                    <span className="text-3xl text-muted-foreground font-heading">
                      {m.name.charAt(0)}
                    </span>
                  </div>
                )}
              </div>
              {/* Info */}
              <div className="p-5">
                <h3 className="font-display text-foreground font-bold text-lg">{m.name}</h3>
                <p className="text-primary text-xs uppercase tracking-widest font-bold mt-1 mb-2">
                  {m.role}
                </p>
                <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
                  <img src={m.flag} alt={m.country} className="w-5 h-auto" loading="lazy" />
                  <span>{m.country}</span>
                </div>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </PageLayout>
);

export default Comite;
