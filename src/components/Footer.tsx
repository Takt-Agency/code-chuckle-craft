import { Link } from "react-router-dom";
import logo from "@/assets/logo-cdm.png";

const Footer = () => (
  <footer className="bg-card border-t border-border">
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo & Info */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <img src={logo} alt="Logo CDM Scrabble 2026" className="h-20 w-20 object-contain" />
          <p className="text-muted-foreground text-sm text-center md:text-left">
            54es Championnats du Monde de Scrabble Francophone<br />
            18–26 juillet 2026 · Tunis, Tunisie
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <h4 className="font-display text-primary text-lg font-semibold mb-2">Navigation</h4>
          {[
            { to: "/", label: "Accueil" },
            { to: "/evenement", label: "Événement" },
            { to: "/competitions", label: "Compétitions" },
            { to: "/inscriptions", label: "Inscriptions" },
            { to: "/hebergement", label: "Hébergement" },
            { to: "/partenaires", label: "Partenaires" },
            { to: "/contact", label: "Contact" },
          ].map((link) => (
            <Link key={link.to} to={link.to} className="text-muted-foreground text-sm hover:text-primary transition-colors">
              {link.label}
            </Link>
          ))}
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <h4 className="font-display text-primary text-lg font-semibold mb-2">Contact</h4>
          <p className="text-muted-foreground text-sm">Regency Tunis Hôtel</p>
          <p className="text-muted-foreground text-sm">Gammarth, Tunis, Tunisie</p>
          <p className="text-muted-foreground text-sm mt-2">
            Organisé par la FISF et l'ASTUS
          </p>
        </div>
      </div>

      <div className="border-t border-border mt-10 pt-6 text-center">
        <p className="text-muted-foreground text-xs">
          © 2026 Championnats du Monde de Scrabble Francophone — Tous droits réservés
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
