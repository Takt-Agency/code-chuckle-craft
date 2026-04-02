import PageLayout from "@/components/PageLayout";
import nexiaLogo from "@/assets/img/logo.png";

const partners = [
  {
    name: "ASTUS – Association Scrabble® Tunisie",
    logo: "https://www.tunis-cdm-scrabble-2026.org/wp-content/uploads/2025/06/logo_astus-300x87.webp",
    desc: "Association organisatrice locale des championnats, représentant le Scrabble® en Tunisie.",
    url: "https://www.facebook.com/Scrabble-Tunisie-578053995984801",
  },
  {
    name: "Fédération Française de Scrabble®",
    logo: "https://www.tunis-cdm-scrabble-2026.org/wp-content/uploads/2025/12/logo_federationscrabble-horizontale-rvb.webp",
    desc: "La FFSc regroupe les joueurs licenciés de Scrabble® de France avec plus de 14 000 licenciés dans plus de 900 clubs.",
    url: "https://www.ffscrabble.fr/",
  },
  {
    name: "FISF – Fédération Internationale de Scrabble® Francophone",
    logo: "https://www.tunis-cdm-scrabble-2026.org/wp-content/uploads/2025/09/fisf_logo_4lignes_rvb.webp",
    desc: "Association réunissant les amateurs du jeu Scrabble®, établie en 1978, comptant 24 pays et environ 23 000 licenciés.",
    url: "https://www.fisf.net/",
  },
  {
    name: "Office National du Tourisme Tunisien",
    logo: "https://www.tunis-cdm-scrabble-2026.org/wp-content/uploads/2025/12/office-du-tourisme-tunisie.webp",
    desc: "Établissement public chargé de développer le secteur touristique tunisien et de promouvoir la destination Tunisie.",
    url: "https://www.tourisme.gov.tn/?page_id=3236&lang=fr",
  },
  {
    name: "Médina Hôtels & Resorts",
    logo: "https://www.tunis-cdm-scrabble-2026.org/wp-content/uploads/2025/09/logo-medina_hotels-_fond-bleu-ai-1024x403.webp",
    desc: "Trois hôtels pour un séjour exceptionnel en Tunisie, alliant confort moderne, bien-être et authenticité.",
    url: "https://www.medinahotelsandresorts.com/fr",
  },
  {
    name: "Regency Tunis Hôtel",
    logo: "https://www.tunis-cdm-scrabble-2026.org/wp-content/uploads/2025/09/logo-regency-tunis-by-medina.webp",
    desc: "Établissement 5 étoiles situé à Gammarth, lieu principal de l'événement.",
    url: "https://www.tunis-cdm-scrabble-2026.org/hebergement/",
  },
  {
    name: "Larousse",
    logo: "https://www.tunis-cdm-scrabble-2026.org/wp-content/uploads/2025/06/logo_larousse.webp",
    desc: "Maison d'édition fondée en 1852, éditeur du dictionnaire de référence pour le Scrabble® francophone.",
    url: "https://www.larousse.fr/",
  },
  {
    name: "Mattel",
    logo: "https://www.tunis-cdm-scrabble-2026.org/wp-content/uploads/2025/06/logo_mattel.webp",
    desc: "Fabricant mondial de jouets, éditeur du Scrabble® pour les marchés hors Amérique du Nord.",
    url: "https://lesjouetsmattel.fr/",
  },
  {
    name: "Délégation Wallonie-Bruxelles en Tunisie",
    logo: "https://www.tunis-cdm-scrabble-2026.org/wp-content/uploads/2025/12/logo_-_dgwb_tunisie.webp",
    desc: "Représentation diplomatique de Wallonie-Bruxelles, lieu d'accueil et d'échanges avec les partenaires tunisiens.",
    url: "http://www.wallonie-bruxelles.tn/",
  },
  {
    name: "Nexia Digital",
    logo: nexiaLogo,
    desc: "Agence digitale spécialisée dans la conception web, le marketing digital et les solutions numériques innovantes. Partenaire technologique de l'événement.",
    url: "http://nexia-digital.net/",
  },
];

const Partenaires = () => (
  <PageLayout title="Partenaires" subtitle="Ils nous soutiennent">
    <div className="max-w-5xl mx-auto px-4 md:px-8 py-12 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {partners.map((p) => (
          <a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors group flex flex-col"
          >
            <div className="h-20 flex items-center justify-center mb-4">
              <img
                src={p.logo}
                alt={p.name}
                className="max-h-full max-w-[200px] object-contain brightness-90 group-hover:brightness-100 transition-all"
                loading="lazy"
              />
            </div>
            <h3 className="font-display text-foreground font-bold text-base mb-2">{p.name}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed flex-1">{p.desc}</p>
          </a>
        ))}
      </div>
    </div>
  </PageLayout>
);

export default Partenaires;
