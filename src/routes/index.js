import React from "react"; // Importa a biblioteca React.
import { Routes, Route } from "react-router-dom"; // Importa os componentes Routes e Route da biblioteca react-router-dom.
import MyRoutes from "./MyRoutes"; // Importa o componente MyRoutes.

// Importa os componentes de página.
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import Page404 from "../Pages/Page404";

// Define uma função chamada Rota que retorna as rotas da aplicação.
export default function Rota() {
  return (
    <Routes>
      {/* Define a rota para a página principal (home). */}
      <Route path="/" element={<Home />} />

      {/* Define a rota para a página de login. */}
      <Route path="/login" element={<Login />} />
      {/* Exemplo comentado de como usar o MyRoutes para rota protegida:
        <Route path="/login" element={<MyRoutes component={Login} isClose={true} />} /> 
      */}

      {/* Define uma rota para uma página 404, que será exibida para qualquer caminho não especificado. */}
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
