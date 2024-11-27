import styled, { createGlobalStyle } from "styled-components"; // Importa styled e createGlobalStyle da biblioteca styled-components.
import {
  primaryColor,
  primaryDarckColor,
  errorColor,
  successColor,
} from "../config/color"; // Importa cores definidas em um arquivo de configuração.
import "react-toastify/dist/ReactToastify.css"; // Importa os estilos do react-toastify para notificações.

export default createGlobalStyle`
  // Define estilos globais para a aplicação.
  * {
    font-family: Arial, Helvetica, sans-serif; // Define a família de fontes padrão.
    margin: 0; // Remove margens padrão.
    padding: 0; // Remove preenchimento padrão.
    outline: none; // Remove a borda de contorno ao focar nos elementos.
    box-sizing: border-box; // Define box-sizing como border-box para todos os elementos.
  }

  body, html, #root {
    height: 100%; // Define a altura de body, html e #root como 100%.
  }

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
  }
`;
