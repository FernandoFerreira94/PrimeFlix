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
    console.log(response.data.results);
  } catch (error) {
    console.error("Erro ao buscar filmes:", error);
  }
};

export default getMovies;
