import AdicionarUsuario from "../pages/adicionarUsuario/AdicionarUsuario";
import VisualizarUsuarios from "../pages/visualizarUsuarios/VisualizarUsuarios";

export const routes = [

  {
    key: "adicionarUsuario",
    component: AdicionarUsuario,
    title: "Adicionar usuario",
    hideNavBar: true,
  },
  {
    key: "visualizarUsuarios",
    component: VisualizarUsuarios,
    title: "Visualizar usuarios",
    hideNavBar: true,
  },

];
