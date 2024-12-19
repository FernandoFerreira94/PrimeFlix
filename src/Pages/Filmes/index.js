import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getMovieById } from "../../service/api";

import { BtnMovie, Container, TitleMovie } from "../../styles/GlobalStyles";
import { ContainerError, ErroDiv } from "../Page404/styled";
import { Paragrafo, Avaliacao } from "./styled";

export default function Filme() {
  const { id } = useParams();
  const [filmes, setFilme] = useState({});
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    const loadFilme = async () => {
      const data = await getMovieById(id);
      if (data) {
        setFilme(data);
        setLoading(false);
        setErro(false);
        console.log(data);
      } else {
        setErro(true);
      }
    };
    loadFilme();
  }, [id]);

  if (erro)
    return (
      <ErroDiv>
        <ContainerError>
          Filme nao encontrado
          <BtnMovie>
            <Link to="/">Voltar</Link>
          </BtnMovie>
        </ContainerError>
      </ErroDiv>
    );

  if (loading) return <Container>Loading</Container>;

  return (
    <>
      <TitleMovie>{filmes.title}</TitleMovie>
      <Container>
        <img
          src={`https://image.tmdb.org/t/p/w500${filmes.poster_path}`}
          alt={filmes.title}
        />
        <TitleMovie>Sinopse</TitleMovie>
        <Paragrafo>{filmes.overview}</Paragrafo>

        <Avaliacao>
          <strong>Avaliação: {filmes.vote_average} /10</strong>
        </Avaliacao>
        <div>
          <button>Salvar</button>
          <button>Trailer</button>
        </div>
      </Container>
    </>
  );
}
