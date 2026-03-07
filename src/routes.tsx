import { createBrowserRouter } from "react-router-dom";
import App from "./root";
import Home from "./pages/home";
import Sobre from "./pages/sobre";
import Empresa from "./pages/empresa";
import FAQ from "./pages/faq";
import Contato from "./pages/contato";
import Integrantes from "./pages/integrantes";
import Projetos from "./pages/projetos";

// CRUD de Pessoas
import PessoaListagem from "./pages/admin/Listagem";
import PessoaCriar from "./pages/admin/Criar";
import PessoaDetalhes from "./pages/admin/Detalhes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "sobre", element: <Sobre /> },
      { path: "empresa", element: <Empresa /> },
      { path: "faq", element: <FAQ /> },
      { path: "contato", element: <Contato /> },
      { path: "integrantes", element: <Integrantes /> },
      { path: "projetos", element: <Projetos /> },

      { path: "admin", element: <PessoaListagem /> },
      { path: "admin/novo", element: <PessoaCriar /> },
      { path: "admin/:id", element: <PessoaDetalhes /> },
    ],
  },
]);
