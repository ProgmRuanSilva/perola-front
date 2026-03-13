import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { formatTelefone } from "~/utils/masks";

interface FormData {
  nome: string;
  email: string;
  contato: string;
  assunto: string;
  mensagem: string;
}

export default function Contato() {
  useEffect(() => {
    document.title = "FASTFORWARD - Contato";
  }, []);

  const [telefone, setTelefone] = useState("");

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Formulário enviado:", data);
    alert("Mensagem enviada com sucesso!");
    reset();
    setTelefone("");
  };

  const handleTelefoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatTelefone(e.target.value);
    setTelefone(formatted);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Intro */}
        <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contato</h1>
            <p className="text-lg opacity-90">
              Entre em contato: tire dúvidas, envie sugestões ou solicite
              informações.
            </p>
          </div>
        </section>

        {/* Form */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="max-w-xl mx-auto space-y-4"
            >
              <div>
                <label
                  htmlFor="nome"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Nome <span className="text-red-500">*</span>
                </label>
                <input
                  id="nome"
                  type="text"
                  {...register("nome", {
                    required: "Nome é obrigatório",
                    minLength: {
                      value: 3,
                      message: "Nome deve ter pelo menos 3 caracteres",
                    },
                    maxLength: {
                      value: 100,
                      message: "Nome deve ter no máximo 100 caracteres",
                    },
                    pattern: {
                      value: /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/,
                      message: "Nome deve conter apenas letras",
                    },
                  })}
                  placeholder="Seu nome completo"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                {errors.nome && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.nome.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  E-mail <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  {...register("email", {
                    required: "E-mail é obrigatório",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "E-mail inválido",
                    },
                  })}
                  placeholder="contato@email.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="contato"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Contato <span className="text-red-500">*</span>
                </label>
                <Controller
                  name="contato"
                  control={control}
                  rules={{
                    required: "Contato é obrigatório",
                    validate: (value) => {
                      const numbers = value.replace(/\D/g, "");
                      return (
                        numbers.length >= 10 ||
                        "Telefone deve ter pelo menos 10 dígitos"
                      );
                    },
                  }}
                  render={({ field }) => (
                    <input
                      {...field}
                      id="contato"
                      type="tel"
                      value={telefone}
                      onChange={(e) => {
                        const formatted = formatTelefone(e.target.value);
                        setTelefone(formatted);
                        field.onChange(formatted);
                      }}
                      onBlur={field.onBlur}
                      placeholder="(11) 99999-9999"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  )}
                />
                {errors.contato && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.contato.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="assunto"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Assunto <span className="text-red-500">*</span>
                </label>
                <input
                  id="assunto"
                  type="text"
                  {...register("assunto", {
                    required: "Assunto é obrigatório",
                    minLength: {
                      value: 5,
                      message: "Assunto deve ter pelo menos 5 caracteres",
                    },
                    maxLength: {
                      value: 100,
                      message: "Assunto deve ter no máximo 100 caracteres",
                    },
                  })}
                  placeholder="Assunto da mensagem"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                {errors.assunto && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.assunto.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="mensagem"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Mensagem <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="mensagem"
                  rows={5}
                  {...register("mensagem", {
                    required: "Mensagem é obrigatória",
                    minLength: {
                      value: 10,
                      message: "Mensagem deve ter pelo menos 10 caracteres",
                    },
                    maxLength: {
                      value: 1000,
                      message: "Mensagem deve ter no máximo 1000 caracteres",
                    },
                  })}
                  placeholder="O que você precisa?"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                />
                {errors.mensagem && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.mensagem.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </section>

        {/* Info Contact */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-gray-600 mb-6">
                Na FASTFORWARD, acreditamos que grandes ideias nascem de boas
                conversas. Se você tem dúvidas, sugestões ou quer saber mais
                sobre nossas soluções tecnológicas, estamos prontos para ouvir
                você. Entre em contato pelos nossos canais:
              </p>
              <div className="text-gray-700 space-y-2">
                <p>
                  <strong>Email:</strong> contato@FASTFORWARD.com.br
                </p>
                <p>
                  <strong>Telefone:</strong> +55 (11) 2657-7622
                </p>
                <p>
                  <strong>Endereço:</strong> Rua Arquiteto Olavo Redig de
                  Campos, 105, Torre B, 24 Andar. São Paulo, SP
                </p>
                <h3 className="text-xl font-bold text-blue-600 mt-6">
                  Tecnologia é sobre conexão — e tudo começa com uma conversa.
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* Discover More */}
        <section className="py-16">
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
                to="/integrantes"
                className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
              >
                <img
                  src="/img/svg_sobre.svg"
                  alt="Integrantes"
                  className="w-12 h-12 mb-4"
                />
                <p className="font-semibold text-gray-800">Integrantes</p>
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
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
