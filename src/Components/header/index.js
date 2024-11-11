import React from "react"; // Importa o React.
import { Link } from "react-router-dom"; // Importa Link para navegação entre rotas.
import { FaHome, FaSignInAlt, FaUserAlt } from "react-icons/fa"; // Importa ícones da biblioteca react-icons.
import { useSelector } from "react-redux"; // Importa useSelector do react-redux para acessar o estado do Redux.

import { Nav } from "./styler"; // Importa o componente estilizado Nav.

export default function Header() {
  // Usa o hook useSelector para acessar o estado do Redux.
  const botaoClicado = useSelector((state) => state.example.botaoClicado);

  return (
    <Nav>
      {/* Link para a rota raiz (home), com ícone de casa. */}
      <Link to="/">
        <FaHome size={24} />
      </Link>

      {/* Link para a rota de login, com ícone de usuário. */}
      <Link to="/login">
        <FaUserAlt size={24} />
      </Link>

      {/* Link para a rota de contato, com ícone de login. */}
      <Link to="/contato">
        <FaSignInAlt size={24} />{" "}
      </Link>

      {/* Exibe "Clicado" ou "Nao Clicado" com base no estado do Redux. */}
      {botaoClicado ? "Clicado" : "Nao Clicado"}
    </Nav>
  );
}
