import axios from "axios"; // Importa a biblioteca axios para fazer requisições HTTP.

export default axios.create({
  baseURL: "https://curso1.otavioniranda.com.br", // Define a URL base para todas as requisições feitas com essa instância do axios.
});
