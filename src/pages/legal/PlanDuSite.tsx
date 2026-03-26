import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";

type SiteSection = {
  title: string;
  links: { label: string; to: string }[];
};

const sections: SiteSection[] = [
  {
    title: "Accueil",
    links: [
      { label: "Page d'accueil", to: "/" },
    ],
  },
  {
    title: "Événement",
    links: [
      { label: "La FISF", to: "/evenement/fisf" },
      { label: "Comité d'Organisation", to: "/evenement/comite" },
      { label: "Historique des CDM", to: "/evenement/historique" },
    ],
  },
  {
    title: "Compétitions",
    links: [
      { label: "Programme", to: "/competitions/programme" },
      { label: "Règlements", to: "/competitions/reglements" },
      { label: "Épreuves Classique", to: "/competitions/classique" },
      { label: "Épreuves Duplicate", to: "/competitions/duplicate" },
      { label: "Résultats", to: "/competitions/resultats" },
    ],
  },
  {
    title: "Inscriptions",
    links: [
      { label: "Inscriptions", to: "/inscriptions" },
    ],
  },
  {
    title: "Hébergement",
    links: [
      { label: "Hébergement", to: "/hebergement" },
      { label: "Verdi Tunis Beach Resort", to: "/hebergement/verdi" },
      { label: "Chambre Single", to: "/hebergement/verdi/chambre-single" },
      { label: "Chambre Double", to: "/hebergement/verdi/chambre-double" },
      { label: "Chambre Twin", to: "/hebergement/verdi/chambre-twin" },
      { label: "Réservations effectuées", to: "/hebergement/reservations" },
    ],
  },
  {
    title: "Infos pratiques",
    links: [
      { label: "Venir en Tunisie", to: "/infos-pratiques/venir" },
      { label: "Rejoindre l'hôtel", to: "/infos-pratiques/rejoindre" },
      { label: "Découvrir la Tunisie", to: "/infos-pratiques/decouvrir" },
    ],
  },
  {
    title: "Partenaires",
    links: [
      { label: "Nos partenaires", to: "/partenaires" },
      { label: "Devenir partenaire", to: "/partenaires/devenir" },
    ],
  },
  {
    title: "Séjour des Jeunes",
    links: [
      { label: "Descriptif", to: "/sejour-jeunes/descriptif" },
      { label: "Animations", to: "/sejour-jeunes/animations" },
      { label: "Excursions", to: "/sejour-jeunes/excursions" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Contactez-nous", to: "/contactez-nous" },
    ],
  },
  {
    title: "Informations légales",
    links: [
      { label: "Mentions légales", to: "/mentions-legales" },
      { label: "Politique de confidentialité", to: "/politique-de-confidentialite" },
      { label: "Politique des cookies", to: "/politique-des-cookies" },
      { label: "Plan du site", to: "/plan-du-site" },
    ],
  },
];

const PlanDuSite = () => (
  <PageLayout title="Plan du site" subtitle="Toutes les pages du site">
    <div className="max-w-5xl mx-auto px-4 md:px-8 py-12 md:py-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((section) => (
          <div key={section.title} className="bg-card border border-border rounded-lg p-6">
            <h2 className="font-display text-primary font-bold text-base uppercase tracking-widest mb-4 pb-3 border-b border-border">
              {section.title}
            </h2>
            <ul className="space-y-2">
              {section.links.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <span className="text-primary text-xs">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </PageLayout>
);

export default PlanDuSite;
