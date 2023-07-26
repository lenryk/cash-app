import React, { useState } from "react";
import styled from "styled-components";
import { devices } from "../../utils/breakpoints";

const NavMenuWrapper = styled.nav`
  display: none;

  @media only screen and ${devices.lg} {
    display: flex;
    gap: 20px;
  }
`;

const MenuWrapper = styled.nav`
  display: flex;
  gap: 20px;
  font-family: Agrandir, serif;
  color: ${({ theme }) => theme.colors.white};
  justify-content: center;
  position: relative;
  z-index: 20;
  visibility: visible;
`;

const MobileNavWrapper = styled.nav<{ visible: boolean }>`
  position: fixed;
  display: ${({ visible }) => (visible ? "flex" : "none")};
  flex-direction: column;
  gap: 15px;
  background-color: ${({ theme }) => theme.colors.black};
  padding: 34px;
  top: 0;
  left: 0;
  right: 0;

  @media only screen and ${devices.lg} {
    display: none;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  &:visited {
    color: ${({ theme }) => theme.colors.white};
  }
`;

const MobileNavLink = styled(NavLink)`
  width: fit-content;
`;

const MobileHamburgerMenu = styled.img<{ visible: boolean }>`
  width: 24px;
  height: 24px;
  position: absolute;
  right: 0;
  cursor: pointer;

  @media only screen and ${devices.lg} {
    display: none;
  }
`;

const MobileCloseMenu = styled.img`
  width: 26px;
  height: 26px;
  position: absolute;
  right: 30px;
  top: 33px;
  cursor: pointer;
`;

export default function NavMenu({ className }: { className?: string }) {
  const [mobileNavVisible, setMobileNavVisible] = useState(false);
  const urls = {
    "sign in": "https://cash.app/login",
    legal: "https://cash.app/legal/us/en-us/tos",
    licenses: "https://code.cash.app/gradle-dependency-license-validation",
    security: "https://cash.app/security",
    careers: "https://cash.app/careers",
    press: "https://cash.app/press",
    support: "https://cash.app/help",
    status: "https://status.cash.app/",
    codeblog: "https://code.cash.app/",
  };

  return (
    <MenuWrapper className={className}>
      <NavMenuWrapper>
        {Object.entries(urls).map(([name, url]) => {
          return <NavLink href={url}>{name}</NavLink>;
        })}
      </NavMenuWrapper>
      <MobileHamburgerMenu
        src="/icons/hamburger.svg"
        alt="mobile menu"
        visible={mobileNavVisible}
        onClick={() => setMobileNavVisible((oldState) => !oldState)}
      />
      <MobileNavWrapper visible={mobileNavVisible}>
        <MobileCloseMenu
          src="/icons/close.svg"
          alt="close mobile menu"
          onClick={() => setMobileNavVisible(() => false)}
        />
        {Object.entries(urls).map(([name, url]) => {
          return <MobileNavLink href={url}>{name}</MobileNavLink>;
        })}
      </MobileNavWrapper>
    </MenuWrapper>
  );
}
