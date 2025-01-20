import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Filme from "../Pages/Filmes";
import Header from "../Components/header";
import Admin from "../Pages/Admin";
import Favoritos from "../Pages/Favoritos";
import React from "react"; // Importa a biblioteca React.

import Page404 from "../Pages/Page404";
import Register from "../Pages/Register";

export default function RouterApp() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/filme/:id" element={<Filme />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
}
