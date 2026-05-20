import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { apiFetch } from "../../utils/api";
import type { Pessoa } from "../../types/pessoa";

export default function PessoaListagem() {
  const [pessoas, setPessoas] = useState<Pessoa[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    document.title = "FASTFORWARD - Admin";
    async function carregarDados() {
      try {
        const dados = await apiFetch<Pessoa[]>("/pessoas");
        setPessoas(dados);
      } catch (err: any) {
        setError(err.message || "Falha ao carregar pessoas.");
      } finally {
        setLoading(false);
      }
    }
    carregarDados();
  }, []);

  const handleDelete = async (id: number | string) => {
    if (window.confirm("Deseja realmente apagar este usuário?")) {
      try {
        await apiFetch(`/pessoas/${id}`, { method: "DELETE" });
        setPessoas((prev) => prev.filter((p) => p.id !== id));
      } catch (err: any) {
        alert(err.message || "Erro ao deletar");
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Gestão de usuários</h1>
          <Link
            to="/admin/novo"
            className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
          >
            Novo Usuário
          </Link>
        </div>

        {loading ? (
          <p className="text-gray-500">Carregando dados...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : pessoas.length === 0 ? (
          <p className="text-gray-600">Nenhum usuário encontrado.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pessoas.map((p) => (
              <div key={p.id} className="bg-white p-6 shadow rounded-lg border">
                <h2 className="text-xl font-semibold mb-2">{p.nomePessoa}</h2>
                <p className="text-gray-600"><strong>CPF:</strong> {p.cpfPessoa}</p>
                <div className="mt-4 flex space-x-3">
                  <Link
                    to={`/admin/${p.id}`}
                    className="text-blue-600 hover:underline"
                  >
                    Detalhes
                  </Link>
                  <Link
                    to={`/admin/${p.id}/editar`}
                    className="text-yellow-600 hover:text-yellow-800 hover:underline"
                  >
                    Editar
                  </Link>
                  <button
                    onClick={() => p.id && handleDelete(p.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Excluir
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
