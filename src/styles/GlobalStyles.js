import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
padding: 0;
margin: 0;
box-sizing: border-box;
font-family: Arial, Helvetica, sans-serif;
}

button {
  cursor: pointer;
}

<<<<<<< HEAD
a{
color: #fff;
text-decoration:none;
}
`;

export const Container = styled.section`
  background-color: #f5f5f5;
  max-width: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  text-align: center;
  margin-top: 20px;
`;

export const TitleMovie = styled.h3`
  text-align: center;
  margin: 15px;
`;

export const BtnMovie = styled.button`
  width: 100%;
  height: 30px;
  border-radius: 0 0 8px 8px;
  border: 1px solid transparent;
  background-color: #1b98e0;
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  transition: all 0.2s;
  &:hover {
    color: black;
  }
`;

export const BtnMyMovies = styled.button`
  padding: 4px 8px;
  border-radius: 10px;
  border: 1px solid rgb(0, 0, 0, 0.4);
  transition: all 0.2s;
  font-size: 14px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  margin-left: 10px;
  &:hover {
    transform: scale(1.02);
    border: 1px solid black;
    color: #fff;
    background-color: black;
=======
  body {
    background-color: #eee; // Define a cor de fundo do body.
  }

  button {
    cursor: pointer; // Define o cursor como pointer ao passar o mouse.
    display: block; // Define o botão como um bloco.
    padding:4px; // Define o preenchimento do botão.
    background: ${primaryColor}; // Define a cor de fundo do botão.
    border-radius: 4px; // Define bordas arredondadas.
    color: #fff; // Define a cor do texto.
    border: 1px solid black; // Define a borda do botão como transparente.
    transition: all 0.2s; // Define a transição de todas as propriedades com duração de 0.2 segundos.
    user-select: none;
  }

  button:hover {
    transform: scale(1.01); // Aumenta o tamanho do botão em 6% ao passar o mouse.
    filter: brightness(90%);
  }

  a {
    text-decoration: none; // Remove a decoração de texto (sublinhado).
    color: #fff; // Define a cor do texto.
    font-weight: bold; // Define o peso da fonte como negrito.
    transition: all 0.2s; // Define a transição de todas as propriedades com duração de 0.2 segundos.
  }

  a:hover {
    text-decoration: underline; // Adiciona sublinhado ao passar o mouse.
  }

  ul {
    list-style: none; // Remove os marcadores de lista.
    margin: 20px; 
  }
  
  li{
    margin: 5px 0;
    width:70%;
  }

  input {
    height: 30px;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.4);
    padding: 10px;
    font-size: 16px;
    &:focus {
      border: 1px solid ${primaryColor};
    }
  }

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    gap: 3px;
  }

`;

export const Container = styled.section`
  max-width: 80%;
  width: 600px;
  background: #fff; // Define a cor de fundo como branco.
  margin: 30px auto; // Define margens de 20px acima/abaixo e 60px nas laterais.
  padding: 30px; // Define o preenchimento de 10px.
  border-radius: 5px; // Define bordas arredondadas com raio de 15px.
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
  h1 {
    text-align: center;
>>>>>>> d1b282492ba1f069c7a4dba31708eb42ac23ba9f
  }
`;
