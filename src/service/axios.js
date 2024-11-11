import axios from "axios"; // Importa a biblioteca axios para fazer requisições HTTP.

export default axios.create({
  baseURL: "COLOQUE SUA URL AQUI", // Define a URL base para todas as requisições feitas com essa instância do axios.
});
