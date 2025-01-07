import { React, useEffect, useState } from "react";
import { FiDelete } from "react-icons/fi";
import { Link } from "react-router-dom";
import { TitleMovie, BtnMovie, BtnTrailer } from "../../styles/GlobalStyles";

import {
  BtnFav,
  DivFav,
  LinkDetalhes,
  LiStyled,
  TitleFav,
  UlStyled,
  ContainerFav,
} from "./styled";
import { ContainerError, ErroDiv } from "../Page404/styled";
import { toast } from "react-toastify";

export default function Favoritos() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const listaFilmes = localStorage.getItem("@primeFlix");
    setFilmes(JSON.parse(listaFilmes) || []);
  }, []);

  function handleDelete(id, title) {
    let filtroFilmes = filmes.filter((item) => item.id !== id);
    setFilmes(filtroFilmes);
    localStorage.setItem("@primeFlix", JSON.stringify(filtroFilmes));
    toast.error(`${title} excluido`);
  }

  return (
    <>
      {filmes.length === 0 && (
        <ErroDiv>
          <ContainerError>
            <TitleMovie>Meus Filmes</TitleMovie>
            <p>Voçê não possue nenhum filme salvo :( </p>{" "}
            <BtnTrailer>
              <Link to="/">Clica aqui</Link>
            </BtnTrailer>
          </ContainerError>
        </ErroDiv>
      )}
      <ContainerFav>
        <TitleMovie>Meus Filmes</TitleMovie>
        <UlStyled>
          {filmes.map((filme) => {
            return (
              <LiStyled key={filme.id}>
                <TitleFav>{filme.title}</TitleFav>
                <DivFav>
                  <LinkDetalhes href={`/filme/${filme.id}`}>
                    Ver detalhers
                  </LinkDetalhes>
                  <BtnFav onClick={() => handleDelete(filme.id, filme.title)}>
                    <FiDelete />
                  </BtnFav>
                </DivFav>
                <hr />
              </LiStyled>
            );
          })}
        </UlStyled>
      </ContainerFav>
    </>
  );
}
