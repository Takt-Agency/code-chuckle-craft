import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "ÉVÉNEMENT", to: "/evenement" },
  { label: "COMPÉTITIONS", to: "/competitions" },
  { label: "INSCRIPTIONS", to: "/inscriptions" },
  { label: "HÉBERGEMENT", to: "/hebergement" },
  { label: "INFOS PRATIQUES", to: "/infos-pratiques" },
  { label: "PARTENAIRES", to: "/partenaires" },
  { label: "CONTACT", to: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="flex items-center justify-between px-4 md:px-8 py-4 relative">
      <Link to="/" className="flex items-center gap-3">
        <img src={logo} alt="Logo CDM Scrabble 2026" className="h-12 w-12 md:h-16 md:w-16 object-contain" />
      </Link>

      {/* Desktop nav */}
      <div className="hidden xl:flex items-center gap-6">
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={`nav-link ${location.pathname === item.to ? "nav-link-active" : ""}`}
          >
            {item.label}
          </Link>
        ))}
        <span className="diamond" />
      </div>

      {/* Mobile hamburger */}
      <button className="xl:hidden text-foreground" onClick={() => setOpen(!open)}>
        {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-sm z-50 flex flex-col items-center gap-4 py-6 xl:hidden">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`nav-link text-sm ${location.pathname === item.to ? "nav-link-active" : ""}`}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
