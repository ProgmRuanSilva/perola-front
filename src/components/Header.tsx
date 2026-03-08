import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { to: "/", label: "início" },
  { to: "/sobre", label: "sobre" },
  { to: "/integrantes", label: "integrantes" },
  { to: "/empresa", label: "empresa" },
  { to: "/faq", label: "faq" },
  { to: "/contato", label: "contato" },
  { to: "/admin", label: "admin" },
];

export default function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header className="bg-gray-900 text-white relative z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center" onClick={handleNavClick}>
          <img
            src="/img/logo_black_white_150px.svg"
            alt="FASTFORWARD"
            className="h-12"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex">
          <ul className="flex gap-8">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`hover:text-blue-400 transition-colors ${location.pathname === link.to
                    ? "text-blue-400 font-semibold"
                    : ""
                    }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Hamburger button */}
        <button
          id="hamburger-btn"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className="md:hidden text-white p-1 focus:outline-none"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? (
            /* Close icon */
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            /* Hamburger icon */
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={`md:hidden bg-gray-800 overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? "max-h-120 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <nav className="container mx-auto px-4 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={handleNavClick}
                  className={`block py-2 text-lg hover:text-blue-400 transition-colors ${location.pathname === link.to
                    ? "text-blue-400 font-semibold"
                    : ""
                    }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
