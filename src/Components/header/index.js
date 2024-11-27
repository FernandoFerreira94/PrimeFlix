import React from "react"; // Importa o React.
import { Link } from "react-router-dom"; // Importa Link para navegação entre rotas.
import { FaHome, FaSignInAlt, FaUserAlt } from "react-icons/fa"; // Importa ícones da biblioteca react-icons.

import { Nav } from "./styler"; // Importa o componente estilizado Nav.

export default function Header() {
  return (
    <Nav>
      {/* Link para a rota raiz (home), com ícone de casa. */}
      <Link to="/">
        <FaHome size={24} />
      </Link>

      {/* Link para a rota de login, com ícone de usuário. */}
      <Link to="/register">
        <FaUserAlt size={24} />
      </Link>

      {/* Link para a rota de contato, com ícone de login. */}
      <Link to="/login">
        <FaSignInAlt size={24} />{" "}
      </Link>
    </Nav>
  );
}
