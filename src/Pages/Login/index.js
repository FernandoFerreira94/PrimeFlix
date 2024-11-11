import React from "react";
import { useDispatch } from "react-redux";

import { Teste } from "./styled";
import { Container } from "../../styles/GlobalStyles";
import * as clicaBotao from "../../store/modules/example/action";

export default function Login() {
  const despatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();

    despatch(clicaBotao.clicaBotaoRequest());
  }
  return (
    <Container>
      <Teste>Pagina de login</Teste>
      <button onClick={handleClick}>Click</button>
    </Container>
  );
}
