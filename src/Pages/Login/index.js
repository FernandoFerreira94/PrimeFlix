import React from "react";
import { Teste, Paragrafo } from "./styled";
import { Container } from "../../styles/GlobalStyles";

export default function Login() {
  return (
    <Container>
      <Teste isBlue={true}>
        Hello
        <small> Lorem Ipsun</small>
      </Teste>
      <Paragrafo>Oies</Paragrafo>
      <a href="#">Hello</a>
      <button>Click</button>
    </Container>
  );
}
