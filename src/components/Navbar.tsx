import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo-cdm.png";

type NavItem = {
  label: string;
  to?: string;
  children?: { label: string; to: string }[];
};

const navItems: NavItem[] = [
  {
    label: "ÉVÉNEMENT",
    children: [
      { label: "La FISF", to: "/evenement/fisf" },
      { label: "Comité d'Organisation", to: "/evenement/comite" },
      { label: "Historique des CDM", to: "/evenement/historique" },
    ],
  },
  {
    label: "COMPÉTITIONS",
    children: [
      { label: "Programme", to: "/competitions/programme" },
      { label: "Règlements", to: "/competitions/reglements" },
      { label: "Épreuves Classique", to: "/competitions/classique" },
      { label: "Épreuves Duplicate", to: "/competitions/duplicate" },
      { label: "Résultats", to: "/competitions/resultats" },
    ],
  },
  {
    label: "INSCRIPTIONS",
    to: "/inscriptions",
  },
  {
    label: "HÉBERGEMENT",
    to: "/hebergement",
    children: [
      { label: "Réservations Verdi", to: "/hebergement/verdi" },
      { label: "Réservations effectuées", to: "/hebergement/reservations" },
    ],
  },
  {
    label: "INFOS PRATIQUES",
    children: [
      { label: "Venir en Tunisie", to: "/infos-pratiques/venir" },
      { label: "Rejoindre l'hôtel", to: "/infos-pratiques/rejoindre" },
      { label: "Découvrir la Tunisie", to: "/infos-pratiques/decouvrir" },
    ],
  },
  {
    label: "PARTENAIRES",
    to: "/partenaires",
    children: [
      { label: "Devenir partenaire", to: "/partenaires/devenir" },
    ],
  },
  {
    label: "SÉJOUR DES JEUNES",
    children: [
      { label: "Descriptif", to: "/sejour-jeunes/descriptif" },
      { label: "Animations", to: "/sejour-jeunes/animations" },
      { label: "Excursions", to: "/sejour-jeunes/excursions" },
    ],
  },
];

const DesktopDropdown = ({ item }: { item: NavItem }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  const isActive =
    (item.to && location.pathname === item.to) ||
    item.children?.some((c) => location.pathname === c.to);

  useEffect(() => {
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, []);

  const handleEnter = () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); setOpen(true); };
  const handleLeave = () => { timeoutRef.current = setTimeout(() => setOpen(false), 150); };

  if (!item.children) {
    return (
      <Link to={item.to!} className={`nav-link ${isActive ? "nav-link-active" : ""}`}>
        {item.label}
      </Link>
    );
  }

  return (
    <div ref={ref} className="relative" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      {item.to ? (
        <Link
          to={item.to}
          className={`nav-link flex items-center gap-1 ${isActive ? "nav-link-active" : ""}`}
        >
          {item.label}
          <ChevronDown className="w-3 h-3" />
        </Link>
      ) : (
        <button className={`nav-link flex items-center gap-1 ${isActive ? "nav-link-active" : ""}`}>
          {item.label}
          <ChevronDown className="w-3 h-3" />
        </button>
      )}

      {open && (
        <div className="absolute top-full left-0 mt-1 bg-card border border-border rounded-md shadow-lg py-2 min-w-[220px] z-50">
          {item.children.map((child) => (
            <Link
              key={child.to}
              to={child.to}
              className={`block px-4 py-2 text-xs uppercase tracking-widest font-body transition-colors ${
                location.pathname === child.to
                  ? "text-primary bg-secondary"
                  : "text-muted-foreground hover:text-primary hover:bg-secondary"
              }`}
              onClick={() => setOpen(false)}
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => { setOpen(false); setExpandedMobile(null); }, [location.pathname]);

  return (
    <nav className="flex items-center justify-between px-4 md:px-8 py-4 relative">
      <Link to="/" className="flex items-center gap-3 shrink-0">
        <img src={logo} alt="Logo CDM Scrabble 2026" className="h-12 w-12 md:h-16 md:w-16 object-contain" />
      </Link>

      {/* Desktop nav */}
      <div className="hidden xl:flex items-center gap-5 2xl:gap-6">
        {navItems.map((item) => (
          <DesktopDropdown key={item.label} item={item} />
        ))}
        <span className="diamond" />
      </div>

      {/* Mobile hamburger */}
      <button className="xl:hidden text-foreground" onClick={() => setOpen(!open)}>
        {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-sm z-50 flex flex-col py-4 xl:hidden max-h-[80vh] overflow-y-auto">
          {navItems.map((item) => (
            <div key={item.label}>
              {item.children ? (
                <>
                  <button
                    className="w-full flex items-center justify-between px-6 py-3 nav-link text-sm"
                    onClick={() =>
                      setExpandedMobile(expandedMobile === item.label ? null : item.label)
                    }
                  >
                    {item.to ? (
                      <Link to={item.to} className="hover:text-primary" onClick={(e) => e.stopPropagation()}>
                        {item.label}
                      </Link>
                    ) : (
                      item.label
                    )}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        expandedMobile === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {expandedMobile === item.label && (
                    <div className="bg-card/50 pl-10 py-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.to}
                          to={child.to}
                          className={`block py-2 text-xs uppercase tracking-widest font-body ${
                            location.pathname === child.to ? "text-primary" : "text-muted-foreground hover:text-primary"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link to={item.to!} className="block px-6 py-3 nav-link text-sm">
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
