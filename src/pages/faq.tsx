import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const faqItems = [
  {
    question: "Quais serviços a FASTFORWARD oferece?",
    answer: "Nossa plataforma oferece soluções de organização inteligente, otimização de processos e gestão colaborativa para empresas de diversos setores."
  },
  {
    question: "Como posso entrar em contato com a equipe?",
    answer: "Você pode entrar em contato conosco através da nossa página 'Contato'."
  },
  {
    question: "Quais são os horários de atendimento?",
    answer: "Nossos horários de atendimento são de segunda a sexta-feira, das 8h às 20h."
  },
  {
    question: "A empresa atende clientes de todo o Brasil (ou Internacionalmente)?",
    answer: "Sim, a FASTFORWARD atende clientes em todo o Brasil e também possui soluções para o mercado internacional."
  },
  {
    question: "Qual é o diferencial da FASTFORWARD em relação a outras empresas?",
    answer: "Nos destacamos pela combinação entre design estratégico e tecnologia sob medida, garantindo soluções únicas que se adaptam perfeitamente às necessidades de cada cliente."
  },
  {
    question: "A FASTFORWARD desenvolve projetos personalizados?",
    answer: "Sim! Cada projeto é construído do zero com base nas metas, identidade e público do cliente, assegurando exclusividade e alta performance."
  },
  {
    question: "Quais tecnologias a FASTFORWARD utiliza em seus projetos?",
    answer: "Trabalhamos com tecnologias modernas como HTML5, CSS3, JavaScript, React, Python e outras stacks que garantem desempenho, segurança e escalabilidade."
  },
  {
    question: "Como funciona o processo de desenvolvimento de um projeto?",
    answer: "Iniciamos com uma análise detalhada do cliente, seguimos com o planejamento e prototipagem, desenvolvimento técnico e, por fim, entrega e suporte contínuo."
  },
  {
    question: "A FASTFORWARD oferece suporte após a entrega do projeto?",
    answer: "Sim. Oferecemos acompanhamento técnico e suporte pós-lançamento para garantir que a solução continue eficiente e atualizada ao longo do tempo."
  }
];

export default function FAQ() {
  useEffect(() => {
    document.title = "FASTFORWARD - FAQ";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Intro */}
        <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">FAQ</h1>
            <p className="text-lg opacity-90">
              Suas dúvidas e perguntas mais frequentes são respondidas aqui.
            </p>
          </div>
        </section>

        {/* Intro Text */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h3 className="text-xl font-bold text-gray-900 mb-4">O que é a FASTFORWARD?</h3>
            <p className="text-gray-600">
              A FASTFORWARD é uma plataforma inovadora que visa otimizar processos e impulsionar a transformação digital nas empresas.
            </p>
          </div>
        </section>

        {/* FAQ Items */}
        <section className="py-8 pb-16">
          <div className="container mx-auto px-4">
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <details key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <summary className="p-4 cursor-pointer font-semibold text-gray-800 hover:bg-gray-50 transition-colors flex justify-between items-center">
                    {item.question}
                    <svg className="w-5 h-5 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="p-4 pt-0 text-gray-600 border-t">
                    {item.answer}
                  </div>
                </details>
              ))}
            </div>
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
              <Link to="/contato" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <img src="/img/svg_contact.svg" alt="Contato" className="w-12 h-12 mb-4" />
                <p className="font-semibold text-gray-800">Contato</p>
              </Link>
              <Link to="/" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <img src="/img/svg_inicio.svg" alt="Início" className="w-12 h-12 mb-4" />
                <p className="font-semibold text-gray-800">Início</p>
              </Link>
              <Link to="/sobre" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <img src="/img/svg_sobre.svg" alt="Sobre" className="w-12 h-12 mb-4" />
                <p className="font-semibold text-gray-800">Sobre</p>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
