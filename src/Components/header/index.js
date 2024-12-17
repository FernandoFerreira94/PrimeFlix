<<<<<<< HEAD
import { Link } from "react-router-dom";
import { BtnMyMovies } from "../../styles/GlobalStyles";
import { LogoText, Nav, XRed } from "./styler";

export default function Header() {
  return (
    <header>
      <Nav>
        <Link to="/">
          <LogoText>
            Prime Fli<XRed>x</XRed>
          </LogoText>
        </Link>
        <div>
          <Link to="/filmes">
            <BtnMyMovies>Filmes</BtnMyMovies>
          </Link>
          <BtnMyMovies>Meus Filmes</BtnMyMovies>
        </div>
      </Nav>
    </header>
=======
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
>>>>>>> d1b282492ba1f069c7a4dba31708eb42ac23ba9f
  );
}
