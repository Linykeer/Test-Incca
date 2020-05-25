import axios from "axios";

const connect = axios.create({
  baseURL: "https://localhost:/3333",
});


const api = (config = {}, token = null, autoCancel = false) => {
  return new Promise((resolve, reject) => {
    config.headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": `application/json; charset=utf-8`,
    };

    connect(config)
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
};

export default api;
