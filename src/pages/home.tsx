import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  useEffect(() => {
    document.title = "FASTFORWARD - Início";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Conheça a FASTFORWARD
                </h1>
                <p className="text-lg text-gray-600 mb-6">
                  Uma equipe focada em desenvolver soluções. Foque no que é mais importante - deixe a sua equipe no controle do processo.
                </p>
                <Link 
                  to="/empresa" 
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Ver mais
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              <div className="flex-1">
                <img 
                  src="/img/intro-img.jpg" 
                  alt="Pessoa mexendo no notebook" 
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Highlights Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <img 
                src="/img/icon_logo.svg" 
                alt="Logo" 
                className="w-16 h-16 mx-auto mb-4"
              />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Soluções feitas sob medida pensando em cada detalhe
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Cada projeto é único, e construí-los requer empenho e dedicação. Por isso, o projeto passa por todas as etapas cuidando de cada detalhe para torná-lo a sua ferramenta o mais eficaz possível.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "/img/icon_paleta.svg", text: "UX DESIGN" },
                { icon: "/img/icon_lampada.svg", text: "MARKETING DIGITAL" },
                { icon: "/img/icon_escudo.svg", text: "SEGURANÇA E CONFIANÇA" },
                { icon: "/img/icon_fluxo.svg", text: "RÁPIDEZ E FLUXO" },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-lg shadow">
                  <img src={item.icon} alt={item.text} className="w-10 h-10" />
                  <span className="text-divider-lista"></span>
                  <span className="font-semibold text-gray-800">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projeto Pérola Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">O projeto Pérola</h3>
                <p className="text-gray-600 mb-6">
                  Um sistema de gestão de atendimento capaz de criar tickets, que registram todo o ciclo de vida de um atendimento, possibilitando controle eficiente para as demandas de atendimento e a geração de relatórios para tomadas de decisões.
                </p>
                <Link to="/sobre" className="text-blue-600 hover:underline">
                 Saiba mais
                </Link>
              </div>
              <div className="flex-1">
                <img 
                  src="/img/projeto_perola_2.png" 
                  alt="Projeto Pérola" 
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Parceria Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <img 
                  src="/img/turma-do-bem.png" 
                  alt="Turma do Bem" 
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Nossa parceira: Turma do Bem</h3>
                <p className="text-gray-600 mb-6">
                  Conheça a nossa parceira a ONG Turma do Bem, uma ONG que tem como objetivo fornecer tratamento dentário para pessoas com dificuldades de acesso a estes tratamentos. Clique no botão abaixo e saiba mais sobre a ONG e seus projetos fantásticos.
                </p>
                <a 
                  href="https://turmadobem.org.br/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Conheça a turma
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Discover More Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Descubra mais sobre nós
              </h3>
              <p className="text-gray-600">
                Conteúdo de outras páginas e informações sobre a empresa, os integrantes ou projetos.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link to="/sobre" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <img src="/img/svg_projeto.svg" alt="Sobre o projeto" className="w-12 h-12 mb-4" />
                <p className="font-semibold text-gray-800">Sobre o projeto</p>
              </Link>
              <Link to="/integrantes" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <img src="/img/svg_sobre.svg" alt="Integrantes" className="w-12 h-12 mb-4" />
                <p className="font-semibold text-gray-800">Integrantes</p>
              </Link>
              <Link to="/faq" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <img src="/img/svg_faq.svg" alt="FAQ" className="w-12 h-12 mb-4" />
                <p className="font-semibold text-gray-800">Perguntas frequentes</p>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
