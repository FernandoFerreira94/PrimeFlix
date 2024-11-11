import styled from "styled-components"; // Importa a biblioteca styled-components para criar componentes estilizados.
import { primaryColor } from "../../config/color"; // Importa a cor primária da configuração de cores.

export const Nav = styled.nav`
  // Define o componente estilizado Nav, que é um elemento nav.

  background: ${primaryColor}; // Define o plano de fundo como a cor primária importada.
  display: flex; // Utiliza Flexbox para o layout dos itens dentro do nav.
  justify-content: center; // Centraliza os itens ao longo do eixo principal.
  gap: 8%; // Define um espaçamento de 8% entre os itens.
  width: 100%; // Define a largura do nav como 100% do contêiner pai.
  padding: 15px 0; // Adiciona padding de 15px no eixo vertical (acima e abaixo).
`;
