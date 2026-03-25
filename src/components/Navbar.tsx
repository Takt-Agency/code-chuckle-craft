import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "À-PROPOS", active: false },
  { label: "COMPETITIONS", active: true },
  { label: "INSCRIPTIONS", active: false },
  { label: "PARTENAIRES", active: false },
  { label: "CONTACT", active: false },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-4 md:px-8 py-4 relative">
      <div className="flex items-center gap-3">
        <img src={logo} alt="Logo Championnats du Monde de Scrabble" className="h-12 w-12 md:h-16 md:w-16 object-contain" />
      </div>

      {/* Desktop nav */}
      <div className="hidden lg:flex items-center gap-8">
        {navItems.map((item) => (
          <a key={item.label} href="#" className={`nav-link ${item.active ? "nav-link-active" : ""}`}>
            {item.label}
          </a>
        ))}
        <span className="diamond" />
      </div>

      {/* Mobile hamburger */}
      <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)}>
        {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-sm z-50 flex flex-col items-center gap-4 py-6 lg:hidden">
          {navItems.map((item) => (
            <a key={item.label} href="#" className={`nav-link text-sm ${item.active ? "nav-link-active" : ""}`} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
