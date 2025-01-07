import styled from "styled-components";

export const LiStyled = styled.li`
  margin-top: 5px;
  text-align: start;
  margin: 10px 0;
`;

export const UlStyled = styled.ul`
  list-style: none;
  width: 80%;
`;

export const TitleFav = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

export const LinkDetalhes = styled.a`
  color: black;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.04);
  }
`;

export const DivFav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
`;

export const BtnFav = styled.button`
  border: none;
  cursor: pointer;
  font-size: 17px;
  transition: all 0.2s;
  color: red;
  &:hover {
    transform: scale(1.1);
  }
`;

export const LinkVoltar = styled.a`
  border: none;
  cursor: pointer;
  font-size: 17px;
  transition: all 0.2s;
  color: red;
  margin: 10px;
`;

export const ContainerFav = styled.section`
  background-color: #f5f5f5;
  max-width: 40%;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  text-align: center;
  caret-color: transparent;
  margin-top: 80px;
`;
