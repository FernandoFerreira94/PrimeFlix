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
  }
`;
