import logo from "@/assets/logo.png";

const navItems = [
  { label: "À-PROPOS", active: false },
  { label: "COMPETITIONS", active: true },
  { label: "INSCRIPTIONS", active: false },
  { label: "PARTENAIRES", active: false },
  { label: "CONTACT", active: false },
];

const Navbar = () => (
  <nav className="flex items-center justify-between px-8 py-4">
    <div className="flex items-center gap-3">
      <img src={logo} alt="Logo Championnats du Monde de Scrabble" className="h-16 w-16 object-contain" />
    </div>
    <div className="flex items-center gap-8">
      {navItems.map((item) => (
        <a
          key={item.label}
          href="#"
          className={`nav-link ${item.active ? "nav-link-active" : ""}`}
        >
          {item.label}
        </a>
      ))}
      <span className="diamond" />
    </div>
  </nav>
);

export default Navbar;
