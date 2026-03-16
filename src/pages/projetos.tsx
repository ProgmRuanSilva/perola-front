import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const projetos = [
  {
    titulo: "Pérola",
    descricao: "Sistema de gestão de atendimento capable de criar tickets, que registram todo o ciclo de vida de um atendimento, possibilitando controle eficiente para as demandas de atendimento e a geração de relatórios para tomadas de decisões.",
    imagem: "/img/projeto_perola_2.png",
    tags: ["Java", "Python", "React", "TypeScript"],
    parceria: "Turma do Bem"
  },
  {
    titulo: "Sistema de Gestão",
    descricao: "Plataforma completa para gerenciamento de processos organizacionais, com foco em eficiência e automação de tarefas repetitivas.",
    imagem: "/img/sistema_slide1.png",
    tags: ["Java", "POO", "MySQL"],
    parceria: "Em desenvolvimento"
  }
];

export default function Projetos() {
  useEffect(() => {
    document.title = "FASTFORWARD - Projetos";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Intro */}
        <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Projetos</h1>
            <p className="text-lg opacity-90">
              Conheça nossos projetos e soluções desenvolvidas para transformar ideias em realidade.
            </p>
          </div>
        </section>

        {/* Projetos Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projetos.map((projeto, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="h-48 bg-gray-200 flex items-center justify-center">
                    <img 
                      src={projeto.imagem} 
                      alt={projeto.titulo} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900">{projeto.titulo}</h3>
                      <span className="text-sm text-blue-600 font-medium">
                        {projeto.parceria}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">
                      {projeto.descricao}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {projeto.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex} 
                          className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Em Breve */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Em Breve</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Estamos trabalhando em novas soluções inovadoras. Em breve, novos projetos serão adicionados aqui. Fique atento às atualizações!
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Tem uma ideia?</h2>
            <p className="text-gray-600 mb-6">
              Gostaria de desenvolver um projeto junto com a gente? Entre em contato e vamos conversar sobre sua ideia.
            </p>
            <Link 
              to="/contato" 
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Fale conosco
            </Link>
          </div>
        </section>

        {/* Discover More */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Descubra mais sobre nós</h3>
              <p className="text-gray-600">Conteúdo de outras páginas e informações sobre a empresa, os integrantes ou projetos.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link to="/sobre" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <img src="/img/svg_projeto.svg" alt="Sobre" className="w-12 h-12 mb-4" />
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
