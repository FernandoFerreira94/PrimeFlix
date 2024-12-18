import styled from "styled-components";

export const ContainerError = styled.section`
  max-width: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  text-align: center;
  margin-top: 20px;
  row-gap: 20px;
`;

export const ErroDiv = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 60px);
  flex-direction: column;
  justify-content: center;
`;

export const TitleErro = styled.h1`
  font-size: 40px;
`;
