import React from "react";
import { getMovies } from "../../service/api";
import { BtnMovie, Container, TitleMovie } from "../../styles/GlobalStyles";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Filme() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFilmes = async () => {
      const movies = await getMovies();
      setFilmes(movies);
      setLoading(false);
    };
    fetchFilmes();
  }, []);

  if (loading) return <Container>Loading</Container>;

  return (
    <>
      <div>
        {filmes.map((filme) => (
          <div key={filme.id}>
            <TitleMovie>{filme.title}</TitleMovie>

            <Container>
              <img
                src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`}
                alt={filme.title}
              />
              <BtnMovie>
                <Link to={`/filme/${filme.id}`}>Acessar </Link>
              </BtnMovie>
            </Container>
          </div>
        ))}
      </div>
    </>
  );
}
