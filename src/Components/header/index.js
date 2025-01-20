import React from "react";
import { BtnMyMovies } from "../../styles/GlobalStyles";
import { LinkFav, LinkLogo, LogoText, Nav, XRed } from "./styler";

export default function Header() {
  return (
    <header>
      <Nav>
        <LinkLogo href="/">
          <LogoText>
            Prime Fli<XRed>x</XRed>
          </LogoText>
        </LinkLogo>

        <BtnMyMovies>
          <LinkFav href="/favoritos">Meus Filmes</LinkFav>
        </BtnMyMovies>
      </Nav>
    </header>
  );
}
