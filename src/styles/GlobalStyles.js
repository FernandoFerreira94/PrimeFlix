import styled, { createGlobalStyle } from "styled-components";
import { primaryColor, primaryDarckColor } from "../config/color";

export default createGlobalStyle`
* {
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
}

body, html, #root {
height: 100%;
}

body {
    background-color: #eee;
}

button {
    cursor: pointer;
    display: block;
    padding: 2px;
    background: ${primaryColor};
    border-radius: 4px;
    color: #fff;
    border: 1px solid transparent;
    transition: all 0.2s;
}

button:hover {
    border: 1px solid black;
    transform: scale(1.06);
}

a {
    text-decoration: none;
    color: ${primaryColor};
}

ul {
    list-style: none;
}
`;

export const Container = styled.section`
  max-width: 360px;
  background: #fff;
  margin: 30px auto;
  padding: 10px;
`;
