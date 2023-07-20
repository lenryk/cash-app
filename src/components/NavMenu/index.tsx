import React from "react";
import styled from "styled-components";

const NavMenuWrapper = styled.nav`
  display: flex;
  gap: 20px;
  font-family: Agrandir, serif;
  color: white;
  justify-content: center;
`;

const NavLink = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  &:visited {
    color: white;
  }
`;

export default function NavMenu() {
  const urls = {
    "sign in": "https://google.com",
    legal: "https://google.com",
    licenses: "https://google.com",
    security: "https://google.com",
    careers: "https://google.com",
    press: "https://google.com",
    support: "https://google.com",
    status: "https://google.com",
    codeblog: "https://google.com",
  };

  return (
    <NavMenuWrapper>
      {Object.entries(urls).map(([name, url]) => {
        return <NavLink href={url}>{name}</NavLink>;
      })}
    </NavMenuWrapper>
  );
}
