import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";
import logo from "@/assets/logo-cdm.png";

const Footer = () => (
  <footer className="bg-card border-t border-border">
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
      <AnimatedSection variant="fade-up">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo & Info */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <img src={logo} alt="Logo CDM Scrabble 2026" className="h-16 object-contain" />
            <p className="text-muted-foreground text-sm text-center md:text-left">
              54<sup>es</sup> Championnats du Monde de Scrabble Francophone<br />
              18–26 juillet 2026 · Tunis, Tunisie
            </p>
          </div>

          {/* Événement */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <h4 className="font-display text-primary text-lg font-semibold mb-2">Événement</h4>
            {[
              { to: "/evenement/fisf", label: "La FISF" },
              { to: "/evenement/comite", label: "Comité d'Organisation" },
              { to: "/evenement/historique", label: "Historique des CDM" },
              { to: "/inscriptions", label: "Inscriptions" },
            ].map((link) => (
              <Link key={link.to} to={link.to} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                {link.label}
              </Link>
            ))}
          </div>

          {/* Compétitions & Séjour */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <h4 className="font-display text-primary text-lg font-semibold mb-2">Compétitions</h4>
            {[
              { to: "/competitions/programme", label: "Programme" },
              { to: "/competitions/classique", label: "Épreuves Classique" },
              { to: "/competitions/duplicate", label: "Épreuves Duplicate" },
              { to: "/competitions/resultats", label: "Résultats" },
              { to: "/hebergement", label: "Hébergement" },
            ].map((link) => (
              <Link key={link.to} to={link.to} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                {link.label}
              </Link>
            ))}
          </div>

          {/* Contact & Infos */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <h4 className="font-display text-primary text-lg font-semibold mb-2">Infos pratiques</h4>
            {[
              { to: "/infos-pratiques/venir", label: "Venir en Tunisie" },
              { to: "/infos-pratiques/rejoindre", label: "Rejoindre l'hôtel" },
              { to: "/infos-pratiques/decouvrir", label: "Découvrir la Tunisie" },
              { to: "/partenaires", label: "Partenaires" },
              { to: "/contact", label: "Contact" },
            ].map((link) => (
              <Link key={link.to} to={link.to} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <div className="border-t border-border mt-10 pt-6 text-center">
        <p className="text-muted-foreground text-xs">
          © 2026 Championnats du Monde de Scrabble Francophone — Tous droits réservés
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
