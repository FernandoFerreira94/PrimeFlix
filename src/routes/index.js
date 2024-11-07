import React from "react";
import { Routes, Route } from "react-router-dom"; // Importa os componentes Routes e Route da biblioteca react-router-dom para definir as rotas da aplicação.

// Importa os componentes de página
import Login from "../Pages/Login";
import Page404 from "../Pages/Page404";

// Define uma função chamada MyRoutes que retorna as rotas da aplicação
export default function MyRoutes() {
  return (
    <Routes>
      {/* Define a rota para a página de login. O atributo "exact" garante que esta rota corresponde exatamente ao caminho raiz "/". */}
      <Route exact path="/" element={<Login />} />
      {/* Define a rota para uma página 404, que será exibida para qualquer caminho não especificado. */}
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
