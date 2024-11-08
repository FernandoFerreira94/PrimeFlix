import React from "react"; // Importa o React.

import { Link } from "react-router-dom"; // Importa Link para navegação entre rotas.
import { Nav } from "./styler"; // Importa o componente estilizado Nav.
import { FaHome, FaSignInAlt, FaUserAlt } from "react-icons/fa"; // Importa ícones da biblioteca react-icons.

export default function Header() {
  return (
    <Nav>
      <Link to="/home">
        <FaHome size={24} />
      </Link>
      <Link to="/login">
        <FaUserAlt size={24} />
      </Link>
      <Link to="/contato">
        <FaSignInAlt size={24} />{" "}
      </Link>
    </Nav>
  );
}
