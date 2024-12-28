import axios from "axios";

const API_KEY = "1c5d7b88222fb1463479e66ebb378c98";
const BASE_URL = "https://api.themoviedb.org/3";

const getMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/now_playing`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data.results.slice(0, 10);
  } catch (error) {
    console.error("Erro ao buscar filmes:", error);
    return [];
  }
};

const getMovieById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${id}`, {
      params: {
        api_key: API_KEY,
        language: "pt-BR",
      },
    });
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar detalhes do filme:", error);
    return;
  }
};

export { getMovies, getMovieById };
