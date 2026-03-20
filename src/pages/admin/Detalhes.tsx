import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { apiFetch } from "../../utils/api";
import type { Pessoa } from "../../types/pessoa";

export default function PessoaDetalhes() {
  const { id } = useParams<{ id: string }>();
  const [pessoa, setPessoa] = useState<Pessoa | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    document.title = "FASTFORWARD - Detalhes Pessoa";

    async function carregarDetalhe() {
      try {
        const dados = await apiFetch<Pessoa>(`/pessoas/${id}`);
        setPessoa(dados);
      } catch (err: any) {
        setError(err.message || "Erro ao carregar detalhes");
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      carregarDetalhe();
    }
  }, [id]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 max-w-3xl">
        <div className="mb-6">
          <Link to="/admin" className="text-blue-600 hover:underline">
            &larr; Voltar para a lista
          </Link>
        </div>

        {loading ? (
          <p className="text-gray-500">Buscando dados no sistema...</p>
        ) : error ? (
          <div className="bg-red-50 text-red-600 p-4 rounded border border-red-200">
            {error}
          </div>
        ) : pessoa ? (
          <div className="bg-white rounded-lg shadow border p-8">
            <h1 className="text-3xl font-bold mb-6 border-b pb-2">Perfil do Usuário</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500 font-medium">Nome Completo</p>
                <p className="text-lg font-semibold">{pessoa.nomePessoa}</p>
              </div>

              <div>
                <p className="text-sm text-gray-500 font-medium">CPF</p>
                <p className="text-lg">{pessoa.cpfPessoa?.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")}</p>
              </div>

              <div>
                <p className="text-sm text-gray-500 font-medium">Contato</p>
                <p className="text-lg">
                  {pessoa.contatoPessoa || "N/A"}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500 font-medium">Endereço</p>
                <p className="text-lg">
                  {pessoa.enderecoPessoa || "N/A"}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500 font-medium">Tipo</p>
                <p className="text-lg">
                  {pessoa.tipoPessoa || "N/A"}
                </p>
              </div>

            </div>
          </div>
        ) : (
          <p className="text-gray-600">Usuário não encontrado.</p>
        )}
      </main>
      <Footer />
    </div>
  );
}
