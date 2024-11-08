import React from "react";
import { Routes, Route } from "react-router-dom"; // Importa os componentes Routes e Route da biblioteca react-router-dom.
import MyRoutes from "./MyRoutes"; // Importa o componente MyRoute.
// Importa os componentes de página.
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import Page404 from "../Pages/Page404";

// Define uma função chamada Rota que retorna as rotas da aplicação.

export default function Rota() {
  return (
    <Routes>
      {/* Define a rota para a página de login. */}
      <Route path="/home" element={<Home />} />
      {/* Define a rota protegida para a página raiz, se necessário */}
      <Route
        path="/login"
        element={<MyRoutes component={<Login />} isClose={true} />}
      />
      {/* Define a rota para uma página 404, que será exibida para qualquer caminho não especificado. */}
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
