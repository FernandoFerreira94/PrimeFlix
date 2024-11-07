import styled from "styled-components";

export const Teste = styled.h2`
  // criando uma funçao de if para verificar se isRed e true ou false declarado na tag
  color: ${(props) => (props.isBlue ? "blue" : "yellow")};

  small {
    color: red;
    font-size: 12px;
  }
`;

export const Paragrafo = styled.p`
  font-weight: bold;
`;
