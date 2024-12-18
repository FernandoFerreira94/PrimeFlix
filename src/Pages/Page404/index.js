import { toast } from "react-toastify";
import { BtnMovie } from "../../styles/GlobalStyles";
import { ErroDiv, ContainerError, TitleErro } from "./styled";
import React, { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
export default function Page404() {
  useEffect(() => {
    toast.error("Pagina nao encontrada");
  }, []);
  return (
    <ErroDiv>
      <ContainerError>
        <TitleErro>404</TitleErro>
        <h2>Pagina não encontrada</h2>
        <BtnMovie>
          <Link to="/">Voltar para filmes</Link>
        </BtnMovie>
      </ContainerError>
    </ErroDiv>
  );
}
