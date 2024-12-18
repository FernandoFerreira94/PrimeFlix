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
  );
}
