import { Link } from "react-router-dom";
import { BtnMyMovies } from "../../styles/GlobalStyles";
import { LinkLogo, LogoText, Nav, XRed } from "./styler";

export default function Header() {
  return (
    <header>
      <Nav>
        <LinkLogo href="/">
          <LogoText>
            Prime Fli<XRed>x</XRed>
          </LogoText>
        </LinkLogo>

        <BtnMyMovies>Meus Filmes</BtnMyMovies>
      </Nav>
    </header>
  );
}
