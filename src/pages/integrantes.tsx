import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import IntegranteCard from "../components/IntegranteCard";

const integrantes = [
  {
    nome: "Cassio Ribeiro",
    rm: "RM 567295 - 1TDSPR",
    descricao:
      "20 anos de experiencia na area tributaria, descobriu na tecnologia uma paixão por resolução de problemas.",
    foto: "/img/cassio.jpg",
    linkedin: "https://www.linkedin.com/in/cassio-ribeiro-04223a46/",
    github: "https://github.com/cassio-ribeiro",
  },
  {
    nome: "Paulo Sousa",
    rm: "RM 568580 - 1TDSPR",
    descricao:
      "O representante do grupo, Paulo é conhecido por sua habilidade em comunicação, liderança e trabalho em equipe.",
    foto: "/img/paulo.jpg",
    linkedin: "https://www.linkedin.com/in/paulo-sousa-b97235246/",
    github: "https://github.com/PauloSousaJDEV",
  },
  {
    nome: "Ruan Silva",
    rm: "RM 566719 - 1TDSPB",
    descricao: "Startupeiro movido a café ☕",
    foto: "/img/ruan.png",
    linkedin: "https://www.linkedin.com/in/silva-ruan",
    github: "https://github.com/ProgmRuanSilva",
  },
];

export default function Integrantes() {
  useEffect(() => {
    document.title = "FASTFORWARD - Integrantes";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Intro */}
        <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Integrantes</h1>
            <p className="text-lg opacity-90">
              Nosso time é composto por profissionais dedicados e apaixonados
              pelo que fazem. Conheça um pouco mais sobre cada um de nós.
            </p>
          </div>
        </section>

        {/* Integrantes Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {integrantes.map((integrante, index) => (
                <IntegranteCard key={index} {...integrante} />
              ))}
            </div>
          </div>
        </section>

        {/* Discover More */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Descubra mais sobre nós
              </h3>
              <p className="text-gray-600">
                Conteúdo de outras páginas e informações sobre a empresa, os
                integrantes ou projetos.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                to="/empresa"
                className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
              >
                <img
                  src="/img/svg_empresa.svg"
                  alt="Empresa"
                  className="w-12 h-12 mb-4"
                />
                <p className="font-semibold text-gray-800">Sobre a empresa</p>
              </Link>
              <Link
                to="/faq"
                className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
              >
                <img
                  src="/img/svg_faq.svg"
                  alt="FAQ"
                  className="w-12 h-12 mb-4"
                />
                <p className="font-semibold text-gray-800">
                  Perguntas frequentes
                </p>
              </Link>
              <Link
                to="/contato"
                className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
              >
                <img
                  src="/img/svg_contact.svg"
                  alt="Contato"
                  className="w-12 h-12 mb-4"
                />
                <p className="font-semibold text-gray-800">Contato</p>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
