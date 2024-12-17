import styled from "styled-components"; // Importa a biblioteca styled-components para criar componentes estilizados.

export const AlunoContainer = styled.div`
  margin: 20px 0 0 10px;

  div {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 5px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

export const IconsLista = styled.span`
  margin-left: auto;
  display: flex;
  gap: 10px;
  span {
    cursor: pointer;
  }
`;

export const PerfilPicture = styled.div`
  img {
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }
`;
