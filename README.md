# Projeto React com react-router-dom

## Descrição
Este projeto é um exemplo de aplicação React que utiliza `react-router-dom` para gerenciar a navegação entre páginas. Inclui um componente `Header` com links de navegação e uma configuração de rotas para diferentes páginas, incluindo uma página de erro 404.

## Estrutura do Projeto
- **`App.js`**: Componente principal que envolve a aplicação com `BrowserRouter`.
- **`Header.js`**: Componente de cabeçalho que contém links de navegação.
- **`routes.js`**: Define as rotas da aplicação.
- **`Page404.js`**: Componente de página 404 que redireciona para a página inicial.
- **`history.js`**: Configuração opcional para histórico personalizado (não utilizada na versão 6 do `react-router-dom`).
- **`GlobalStyles.js`**: Estilos globais aplicados ao aplicativo.

## Configuração do `App.js`
```javascript
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Components/header";
import MyRoutes from "./routes";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <Router>
      <Header />
      <MyRoutes />
      <GlobalStyles />
    </Router>
  );
}

export default App;
