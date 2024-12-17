<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Filme from "../Pages/Filmes";
import Header from "../Components/header";
=======
import React from "react"; // Importa a biblioteca React.
import { Routes, Route } from "react-router-dom"; // Importa os componentes Routes e Route da biblioteca react-router-dom.
import MyRoutes from "./MyRoutes"; // Importa o componente MyRoutes.

// Importa os componentes de página.
import Login from "../Pages/Login";
import Aluno from "../Pages/Aluno";
import Alunos from "../Pages/Alunos";
import Fotos from "../Pages/Fotos";
import Register from "../Pages/Register";
>>>>>>> d1b282492ba1f069c7a4dba31708eb42ac23ba9f
import Page404 from "../Pages/Page404";

export default function RouterApp() {
  return (
<<<<<<< HEAD
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filmes/:id" element={<Filme />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
=======
    <Routes>
      <Route path="/" element={<Alunos />} isClosed={false} />

      <Route path="/aluno/:id/edit" element={<Aluno />} isClosed />

      <Route path="/aluno/" element={<Aluno />} isClosed />

      <Route path="/fotos/:id" element={<Fotos />} isClosed />

      <Route path="/login" element={<Login />} isClosed={false} />

      <Route path="/register" element={<Register />} isClosed={false} />

      <Route path="*" element={<Page404 />} />
    </Routes>
>>>>>>> d1b282492ba1f069c7a4dba31708eb42ac23ba9f
  );
}
