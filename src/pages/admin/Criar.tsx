import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { apiFetch } from "../../utils/api";
import type { CreatePessoaDTO } from "../../types/pessoa";

export default function PessoaCriar() {
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CreatePessoaDTO>();

  useEffect(() => {
    document.title = "FASTFORWARD - Novo Usuário";
  }, []);

  const onSubmit = async (data: CreatePessoaDTO) => {
    try {
      setErrorMsg(null);
      await apiFetch("/pessoas", {
        method: "POST",
        body: JSON.stringify(data),
      });
      alert("Pessoa criada com sucesso!");
      navigate("/admin");
    } catch (err: any) {
      setErrorMsg(err.message || "Erro ao salvar pessoa");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 max-w-2xl">
        <div className="mb-6">
          <Link to="/admin" className="text-blue-600 hover:underline">
            &larr; Voltar
          </Link>
        </div>
        <h1 className="text-3xl font-bold mb-6">Novo Usuário</h1>

        {errorMsg && (
          <div className="bg-red-50 text-red-600 p-4 rounded mb-6 border border-red-200">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block font-medium mb-1">Nome Completo</label>
            <input
              type="text"
              {...register("nomePessoa", { required: "Nome é obrigatório" })}
              className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500"
            />
            {errors.nomePessoa && <p className="text-red-500 text-sm">{errors.nomePessoa.message}</p>}
          </div>

          <div>
            <label className="block font-medium mb-1">CPF</label>
            <input
              type="text"
              {...register("cpfPessoa", {
                required: "CPF é obrigatório",
                pattern: { value: /^\d{11}$/, message: "Digite apenas os 11 números do CPF" }
              })}
              placeholder="Ex: 12345678900"
              className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500"
            />
            {errors.cpfPessoa && <p className="text-red-500 text-sm">{errors.cpfPessoa.message}</p>}
          </div>

          <div>
            <label className="block font-medium mb-1">Contato</label>
            <input
              type="text"
              {...register("contatoPessoa")}
              placeholder="Ex: (11) 98765-4321"
              className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Endereço</label>
            <input
              type="text"
              {...register("enderecoPessoa")}
              placeholder="Ex: Rua A, 123"
              className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Tipo de Pessoa</label>
            <input
              type="text"
              {...register("tipoPessoa")}
              placeholder="Ex: Física"
              className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 text-white font-bold py-2 rounded shadow hover:bg-blue-700 disabled:opacity-50"
          >
            {isSubmitting ? "Salvando..." : "Salvar Usuário"}
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
}
