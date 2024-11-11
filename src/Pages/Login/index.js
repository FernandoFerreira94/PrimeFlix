import React from "react"; // Importa a biblioteca React.
import { useDispatch } from "react-redux"; // Importa useDispatch do react-redux para despachar ações para o Redux.

import { Teste } from "./styled"; // Importa o componente estilizado Teste.
import { Container } from "../../styles/GlobalStyles"; // Importa o componente estilizado Container.
import * as clicaBotao from "../../store/modules/example/action"; // Importa todas as ações do módulo example.

export default function Login() {
  const dispatch = useDispatch(); // Cria uma função dispatch para enviar ações ao Redux.

  function handleClick(e) {
    e.preventDefault(); // Previne o comportamento padrão do botão.

    dispatch(clicaBotao.clicaBotaoRequest()); // Despacha a ação clicaBotaoRequest do módulo example.
  }

  return (
    <Container>
      <Teste>Pagina de login</Teste>{" "}
      {/* Exibe o texto "Pagina de login" estilizado pelo componente Teste. */}
      <button onClick={handleClick}>Click</button>{" "}
      {/* Botão que, ao ser clicado, chama a função handleClick. */}
    </Container>
  );
}
