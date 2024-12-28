import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  height: 60px;
  background-color: #1c1c1c;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const LogoText = styled.span`
  font-weight: bold;
  font-size: 20px;
  letter-spacing: 2px;
`;

export const XRed = styled.span`
  color: red;
  font-size: 28px;
`;

export const LinkLogo = styled.a`
  color: #fff;
  text-decoration: none;
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    color: #fff;
  }
`;
