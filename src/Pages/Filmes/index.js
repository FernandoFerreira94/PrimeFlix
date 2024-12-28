import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getMovieById } from "../../service/api";

import { BtnTrailer, Container, TitleMovie } from "../../styles/GlobalStyles";
import { ContainerError, ErroDiv } from "../Page404/styled";
import { Paragrafo, Avaliacao } from "./styled";
import { toast } from "react-toastify";

export default function Filme() {
  // Pega o ID do filme a partir dos parâmetros da URL
  const { id } = useParams();

  // Define os estados iniciais
  const [filmes, setFilme] = useState({});
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    // Função assíncrona para carregar os detalhes do filme
    const loadFilme = async () => {
      const data = await getMovieById(id);
      if (data) {
        setFilme(data); // Atualiza o estado com os dados do filme
        setLoading(false); // Define loading como falso, indicando que os dados foram carregados
        setErro(false); // Reseta o estado de erro
      } else {
        setErro(true); // Define erro como verdadeiro se não houver dados
      }
    };
    loadFilme();
  }, [id]);

  // Exibe mensagem de erro se o filme não for encontrado
  if (erro)
    return (
      <ErroDiv>
        <ContainerError>
          Filme não encontrado
          <BtnTrailer>
            <Link to="/">Voltar</Link>
          </BtnTrailer>
        </ContainerError>
      </ErroDiv>
    );

  // Função para salvar o filme nos favoritos/local storage
  function salvarFilme() {
    const minhaLista = localStorage.getItem("@filmes");

    // Recupera a lista de filmes salvos ou inicializa um array vazio
    let filmesSalvos = JSON.parse(minhaLista) || [];

    // Verifica se o filme já está salvo
    const hasFilme = filmesSalvos.some(
      (filmesSalvo) => filmesSalvo.id === filmes.id
    );

    if (hasFilme) {
      toast.warning("Já possui esse filme"); // Exibe toast de aviso se o filme já estiver salvo
      return;
    }
    filmesSalvos.push(filmes); // Adiciona o filme à lista de salvos

    // Atualiza o local storage com a nova lista de filmes
    localStorage.setItem("@filmes", JSON.stringify(filmesSalvos));
    toast.success("Filme salvo com sucesso"); // Exibe toast de sucesso
  }

  // Exibe mensagem de carregamento enquanto os dados estão sendo obtidos
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
          <BtnTrailer onClick={salvarFilme}>Salvar</BtnTrailer>
          <BtnTrailer>
            <Link
              to={`https://youtube.com/results?search_query=${filmes.title} trailer`}
              target="_blank"
              rel="external"
            >
              Trailer
            </Link>
          </BtnTrailer>
        </div>
      </Container>
    </>
  );
}
