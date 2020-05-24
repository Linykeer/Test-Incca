import Login from "../pages/login/Login";
import AsyncStorage from "@react-native-community/async-storage";

export const checkAccount = () => {
  const login = new Login();

  return AsyncStorage.multiGet(["dataExpira", "paroquias"]).then((value) => {
    const dataExpiracao = JSON.parse(value[0][1])
      ? JSON.parse(value[0][1]).dataExpira
      : null;
    const paroquias = JSON.parse(value[1][1]);

    if (dataExpiracao && paroquias) {
      const dataAtual = new Date();
      const dataExpira = new Date(dataExpiracao);
      const isAuthenticated = dataExpira.getTime() > dataAtual.getTime();
      if (!isAuthenticated) {
        login.logout();
      }

      return isAuthenticated;
    }

    if (!dataExpiracao && paroquias) return true; //fiel
  });
};

export const formatDate = (data) => {
  let date = data ? new Date(data) : new Date();
  let day = date.getDate().toString().padStart(2, "0");
  let month = (date.getMonth() + 1).toString().padStart(2, "0");
  let year = date.getFullYear();

  return `${day}/${month}/${year}`;
};

export const formatDateIso = (data) => {
  if (!data) return formatDate(data);

  let date = data.split(":")[0];
  let day = date.split("-")[2].split("T")[0];
  let month = date.split("-")[1];
  let year = date.split("-")[0];

  return `${day}/${month}/${year}`;
};

export const handleError = (error) => {
  const status = error && error.status ? error.status : "";
  let message = "";

  switch (status) {
    case 400:
      message = error.data ? error.data : "Verifique os dados enviados";
      break;
    case 401:
      Login.logout();
      break;
    case 404:
      if (error.orderGet) message = "Não encontrado";
      break;
    case 500:
      message = "Erro no servidor";
      break;
    default:
      message = "Erro desconhecido!";
  }

  return message;
};
