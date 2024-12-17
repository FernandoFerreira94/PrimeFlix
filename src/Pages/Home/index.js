import getMovies from "../../service/api";
import { BtnMovie, Container, TitleMovie } from "../../styles/GlobalStyles";
import { useEffect, useState } from "react";
export default function Filme() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <>
      <div>
        <TitleMovie>Titulo</TitleMovie>
        <Container>
          <h1>img</h1>
          <BtnMovie>Acessar</BtnMovie>
        </Container>
      </div>
    </>
  );
}
