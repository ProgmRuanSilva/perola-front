import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" className="mb-2">
              <img
                src="/img/logo_white_blue.svg"
                alt="FASTFORWARD"
                className="h-10"
              />
            </Link>
            <p className="text-gray-400 text-sm">
              Copyright 2026 - FASTFORWARD. Todos os direitos reservados.
            </p>
          </div>

          <nav>
            <ul className="flex gap-6">
              <li>
                <Link to="/empresa" className="text-gray-400 hover:text-white transition-colors">
                  Sobre nós
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-gray-400 hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
