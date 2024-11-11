import styled from "styled-components"; // Importa a biblioteca styled-components para criar componentes estilizados.

export const Teste = styled.h2`
  // Define o estilo para o componente Teste, que é um elemento h2.
  // criando uma função de if para verificar se isRed é true ou false declarado na tag
  color: blue; // Define a cor do texto como azul.

  small {
    // Define o estilo para elementos <small> dentro do componente Teste.
    color: red; // Define a cor do texto como vermelho.
    font-size: 12px; // Define o tamanho da fonte como 12px.
  }
`;

export const Paragrafo = styled.p`
  // Define o estilo para o componente Paragrafo, que é um elemento p.
  font-weight: bold; // Define o peso da fonte como negrito.
`;
