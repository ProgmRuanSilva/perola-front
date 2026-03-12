import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Empresa() {
  useEffect(() => {
    document.title = "FASTFORWARD - Empresa";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Intro */}
        <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Empresa</h1>
            <p className="text-lg opacity-90">
              Conheça mais sobre a FASTFORWARD, nossas cores, fontes e valores.
            </p>
          </div>
        </section>

        {/* Sobre Nós */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Sobre nós</h3>
                <p className="text-gray-600">
                  A FASTFORWARD é uma empresa de tecnologia voltada para o desenvolvimento de soluções digitais inovadoras. Atuamos na criação de sistemas web, automações e plataformas inteligentes que simplificam processos e impulsionam o crescimento de pessoas e organizações. Com foco em eficiência, acessibilidade e design funcional, buscamos acelerar o futuro digital por meio da inovação contínua e da colaboração entre talentos multidisciplinares.
                </p>
              </div>
              <div className="flex-1">
                <img src="/img/sobre_nos.png" alt="Sobre nós" className="rounded-lg shadow-lg w-full" />
              </div>
            </div>
          </div>
        </section>

        {/* Valores */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">NOSSOS VALORES</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                A FASTFORWARD acredita que a inovação é o motor do progresso e que a tecnologia deve servir às pessoas, simplificando o que é complexo.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <img src="/img/mission.svg" alt="Missão" className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">MISSÃO</h3>
                <p className="text-gray-600">
                  Acelerar o futuro digital por meio de soluções tecnológicas acessíveis, eficientes e humanas, conectando inovação e propósito.
                </p>
              </div>
              <div className="text-center p-6">
                <img src="/img/vision.svg" alt="Visão" className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">VISÃO</h3>
                <p className="text-gray-600">
                  Ser referência em desenvolvimento de sistemas e automações inteligentes, contribuindo para a transformação digital de pessoas, empresas e organizações sociais.
                </p>
              </div>
              <div className="text-center p-6">
                <img src="/img/honor.svg" alt="Valores" className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">VALORES</h3>
                <p className="text-gray-600">
                  Inovação constante, colaboração, qualidade, responsabilidade e aprendizado contínuo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Identidade Visual */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">IDENTIDADE VISUAL</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                A identidade visual da FASTFORWARD foi desenvolvida para refletir dinamismo, inovação e modernidade. Cada elemento foi pensado para transmitir a ideia de avanço e tecnologia acessível.
              </p>
            </div>
          </div>
        </section>

        {/* Logo */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Logo</h3>
                <p className="text-gray-600">
                  A logo da FASTFORWARD representa movimento, inovação e agilidade. Inspirada no símbolo de avanço ("»"), ela transmite a ideia de progresso contínuo e tecnologia em constante evolução. As linhas limpas e o design minimalista reforçam a modernidade e a objetividade da marca, enquanto as cores refletem energia, criatividade e confiança, valores centrais da empresa.
                </p>
              </div>
              <div className="flex-1 flex justify-center">
                <img src="/img/logo_black_blue.svg" alt="Logo" className="rounded-lg shadow-lg w-64" />
              </div>
            </div>
          </div>
        </section>

        {/* Cores */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 flex justify-center">
                <img src="/img/cores.png" alt="Cores" className="rounded-lg shadow-lg w-full max-w-md" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Cores</h3>
                <p className="text-gray-600">
                  A paleta principal utiliza os tons azul e roxo, que juntos simbolizam tecnologia, criatividade e confiança. O azul transmite segurança, estabilidade e profissionalismo — atributos essenciais para uma empresa voltada à inovação. O roxo, por sua vez, agrega um toque de originalidade e sofisticação, destacando a marca como criativa e visionária.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ícones */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ícones</h3>
                <p className="text-gray-600">
                  Os ícones foram escolhidos para representar visualmente ações e ideias de forma objetiva e intuitiva. Seu traço minimalista e uniforme harmoniza com o restante da identidade, facilitando a navegação e contribuindo para uma experiência visual coerente e moderna.
                </p>
              </div>
              <div className="flex-1 flex justify-center">
                <img src="/img/icones.png" alt="Ícones" className="rounded-lg shadow-lg w-full max-w-md" />
              </div>
            </div>
          </div>
        </section>

        {/* Fontes */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 flex justify-center">
                <img src="/img/texto.png" alt="Fontes" className="rounded-lg shadow-lg w-full max-w-md" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Fontes</h3>
                <p className="text-gray-600">
                  A identidade visual da FASTFORWARD utiliza as fontes Teko e Open Sans para criar um equilíbrio entre impacto e legibilidade. A Teko, com seu estilo geométrico e robusto, transmite modernidade, confiança e inovação, refletindo o caráter tecnológico da empresa. Já a Open Sans complementa com sua aparência limpa e versátil, garantindo excelente leitura em textos longos e interfaces digitais. Juntas, as duas fontes reforçam uma comunicação clara, profissional e contemporânea.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Discover More */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Descubra mais sobre nós</h3>
              <p className="text-gray-600">Conteúdo de outras páginas e informações sobre a empresa, os integrantes ou projetos.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link to="/faq" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <img src="/img/svg_faq.svg" alt="FAQ" className="w-12 h-12 mb-4" />
                <p className="font-semibold text-gray-800">Perguntas frequentes</p>
              </Link>
              <Link to="/contato" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <img src="/img/svg_contact.svg" alt="Contato" className="w-12 h-12 mb-4" />
                <p className="font-semibold text-gray-800">Contato</p>
              </Link>
              <Link to="/" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <img src="/img/svg_inicio.svg" alt="Início" className="w-12 h-12 mb-4" />
                <p className="font-semibold text-gray-800">Início</p>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
