import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Sobre() {
  useEffect(() => {
    document.title = "FASTFORWARD - Sobre";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Intro */}
        <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Sobre o projeto</h1>
            <p className="text-lg opacity-90">
              Saiba mais sobre quem somos: trabalhamos com propósito, qualidade e compromisso em cada projeto.
            </p>
          </div>
        </section>

        {/* Parceria */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Parceria</h3>
                <p className="text-gray-600">
                  O objetivo da FASTFORWARD é desenvolver soluções inteligentes em TI e a nossa próxima novidade é o desenvolvimento de um software de Gestão de Atendimento e Controle. Com a parceria da ONG Turma do Bem, a equipe tem o desafio de criar uma inovação que atenda as necessidades da turma, para que possam atender ao maior número de pessoas que precisam do atendimento dentário necessário.
                </p>
              </div>
              <div className="flex-1">
                <img src="/img/parceria_tdb.png" alt="Parceria" className="rounded-lg shadow-lg w-full" />
              </div>
            </div>
          </div>
        </section>

        {/* Turma do Bem */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <img src="/img/historia_tdb.png" alt="Turma do Bem" className="rounded-lg shadow-lg w-full" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Turma do Bem</h3>
                <p className="text-gray-600 mb-4">
                  A Turma do Bem gerencia a maior rede de voluntariado especializado do mundo, contando com mais de 18 mil dentistas atuando em 12 países. Oferece atendimento odontológico gratuito à população de baixa renda em condição de vulnerabilidade social e com graves problemas bucais, focando em dois públicos principais: jovens de 11 a 17 anos e mulheres vítimas de violência de gênero que tiveram a dentição afetada. Em 20 anos, impactou mais de 82 mil jovens e 1100 mulheres.
                </p>
                <a href="https://turmadobem.org.br/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                 Conheça a turma
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* O Projeto */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">O Projeto</h3>
                <p className="text-gray-600">
                  Com a parceria da ONG Turma do Bem, a equipe tem o desafio de criar uma inovação que atenda as necessidades da turma, para que possam atender ao maior número de pessoas que precisam do atendimento dentário necessário. Para isso, vamos desenvolver um software que solucione os problemas da ONG.
                </p>
              </div>
              <div className="flex-1">
                <img src="/img/projeto_perola_2.png" alt="Projeto Pérola" className="rounded-lg shadow-lg w-full" />
              </div>
            </div>
          </div>
        </section>

        {/* Controle de Atendimento */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <img src="/img/sistema_slide1.png" alt="Controle de atendimento" className="rounded-lg shadow-lg w-full" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Controle de atendimento</h3>
                <p className="text-gray-600">
                  Nosso objetivo é desenvolver uma solução que atenda as demandas da ONG através de tickets de atendimento, que são associados aos serviços. Os canais de atendimento podem ser diversos, desde e-mail, telefone, whatsapp e formulários. Cada solicitação será responsável por criar um ticket que será tratado pela ONG.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Interface e Usabilidade */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Interface e usabilidade</h3>
                <p className="text-gray-600">
                  Focamos na experiência do usuário na questão de usabilidade e acessibilidade. Portanto, queremos que os usuários da plataforma tenham prazer de utilizá-la, que seja de fácil navegação e permita todo o acompanhamento do ciclo de vida de um atendimento.
                </p>
              </div>
              <div className="flex-1">
                <img src="/img/sistema_slide2.png" alt="Interface do sistema" className="rounded-lg shadow-lg w-full" />
              </div>
            </div>
          </div>
        </section>

        {/* Tecnologias */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">TECNOLOGIAS UTILIZADAS</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                O projeto foi desenvolvido utilizando as tecnologias em HTML, CSS e JavaScript, para o formulário de atendimento no site. Já para o aplicativo de gestão, foi utilizado Python para análises e dashboards e Java para a construção das regras de negócio e POO.
              </p>
            </div>
            <div className="flex justify-center gap-12">
              <div className="text-center">
                <img src="/img/logo_html_css_js.svg" alt="HTML, CSS, JS" className="h-16 mx-auto mb-2" />
                <p className="font-semibold text-gray-800">HTML + CSS + JS</p>
              </div>
              <div className="text-center">
                <img src="/img/logo_java_python.svg" alt="Java e Python" className="h-16 mx-auto mb-2" />
                <p className="font-semibold text-gray-800">JAVA E PYTHON</p>
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
              <Link to="/integrantes" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <img src="/img/svg_sobre.svg" alt="Integrantes" className="w-12 h-12 mb-4" />
                <p className="font-semibold text-gray-800">Integrantes</p>
              </Link>
              <Link to="/empresa" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <img src="/img/svg_empresa.svg" alt="Empresa" className="w-12 h-12 mb-4" />
                <p className="font-semibold text-gray-800">Empresa FASTFORWARD</p>
              </Link>
              <Link to="/faq" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <img src="/img/svg_faq.svg" alt="FAQ" className="w-12 h-12 mb-4" />
                <p className="font-semibold text-gray-800">Perguntas Frequentes (FAQ)</p>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
