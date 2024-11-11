import React from "react"; // Importa o React.
import { Link } from "react-router-dom"; // Importa Link para navegação entre rotas.
import { FaHome, FaSignInAlt, FaUserAlt } from "react-icons/fa"; // Importa ícones da biblioteca react-icons.
import { useSelector } from "react-redux";

import { Nav } from "./styler"; // Importa o componente estilizado Nav.

export default function Header() {
  const botaoClicado = useSelector((state) => state.example.botaoClicado);
  return (
    <Nav>
      <Link to="/">
        <FaHome size={24} />
      </Link>
      <Link to="/login">
        <FaUserAlt size={24} />
      </Link>
      <Link to="/contato">
        <FaSignInAlt size={24} />{" "}
      </Link>
      {botaoClicado ? "Clicado" : "Nao Clicado"}
    </Nav>
  );
}
