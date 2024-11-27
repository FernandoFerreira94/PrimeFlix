import React from "react"; // Importa a biblioteca React.
import { Routes, Route } from "react-router-dom"; // Importa os componentes Routes e Route da biblioteca react-router-dom.
import MyRoutes from "./MyRoutes"; // Importa o componente MyRoutes.

// Importa os componentes de página.
import Login from "../Pages/Login";
import Aluno from "../Pages/Aluno";
import Alunos from "../Pages/Alunos";
import Fotos from "../Pages/Fotos";
import Register from "../Pages/Register";
import Page404 from "../Pages/Page404";

// Define uma função chamada Rota que retorna as rotas da aplicação.
export default function Rota() {
  return (
    <Routes>
      <Route path="/" element={<Alunos />} isClosed={false} />

      <Route path="/aluno/:id/edit" element={<Aluno />} isClosed />

      <Route path="/aluno/" element={<Aluno />} isClosed />

      <Route path="/fotos/:id" element={<Fotos />} isClosed />

      <Route path="/login" element={<Login />} isClosed={false} />

      <Route path="/register" element={<Register />} isClosed={false} />

      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
