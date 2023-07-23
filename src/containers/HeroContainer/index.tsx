import NavMenu from "../../components/NavMenu";
import Footer from "../../components/Footer";
import Section from "../../components/Section";
import React from "react";
import styled from "styled-components";
import { devices } from "../../utils/breakpoints";

const Heading = styled.h1`
  font-family: Agrandir, sans-serif;
  font-size: 25vw;
  color: white;
  width: fit-content;
  height: min-content;
  line-height: 20vw;
  text-align: center;
  align-self: center;
  position: relative;
  margin-top: 10dvh;

  @media only screen and ${devices.lg} {
    font-size: 250px;
    line-height: 205px;
  }
`;

interface ImgProps {
  transX?: string;
  transY?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  zIndex?: number;
  width?: string;
  height?: string;
  showOnMobile?: boolean;
}

const Img = styled.img<ImgProps>`
  position: absolute;
  transform: ${(props) =>
    props.transX && props.transY
      ? `translate(${props.transX}, ${props.transY})`
      : null};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  max-width: ${(props) => props.width};
  max-height: ${(props) => props.height};
  display: ${({ showOnMobile = true }) => (showOnMobile ? "block" : "none")};

  @media only screen and ${devices.lg} {
    display: block;
  }
`;

const NavMenuStyles = styled(NavMenu)`
  position: relative;
  z-index: 30;
`;

const ZIndexWrapper = styled.span`
  position: relative;
  z-index: 20;
`;

const SectionStyles = styled(Section)`
  background-image: url("/images/hero/rays.svg");
  background-position: 50% -10vh;
  background-repeat: no-repeat;
  background-size: 120dvh 110dvh;

  @media only screen and ${devices.lg} {
    background-position: 50% 0;
    background-size: cover;
  }
`;

const MobileStyles = styled(Img)`
  width: calc((120% + 10vw) / 2);
  height: calc((130% + 60vw) / 2);

  @media only screen and ${devices.lg} {
    width: 100%;
    height: 140%;
    top: -85%;
    left: -50%;
  }
`;

export default function HeroContainer() {
  return (
    <SectionStyles color="black">
      <NavMenuStyles />
      <Img
        src="/images/hero/cashappLogo.svg"
        alt="cashapp logo"
        top="calc(7dvh - 44px)"
        left="calc(4dvw - 30px)"
        showOnMobile={false}
      />
      <Img
        src="/images/hero/cube.svg"
        alt="decorative cube"
        transX="50%"
        transY="50%"
        top="calc(10dvh - 74px)"
        left="calc(13dvw - 74px)"
      />
      <Img
        src="/images/hero/eyeButton.svg"
        alt="eye button"
        transX="50%"
        transY="50%"
        top="calc(16dvh - 36px)"
        right="calc((30dvw - 64px) /2)"
      />
      <Img
        src="/images/hero/stairs.svg"
        alt="eye button"
        transX="50%"
        transY="50%"
        top="2%"
        right="20%"
        width="calc((5% + 30vw) / 2)"
        showOnMobile={false}
      />
      <Img
        src="/images/hero/rubixStairs.svg"
        alt="eye button"
        transX="50%"
        transY="50%"
        bottom="15%"
        left="10%"
        width="calc((15% + 40vw) / 2)"
        showOnMobile={false}
      />
      <Img
        src="/images/hero/pillar.svg"
        alt="eye button"
        transX="50%"
        transY="50%"
        bottom="30%"
        left="-8dvw"
        height="calc((15% + 40vw) / 2)"
        width="calc((15% + 40vw) / 2)"
        showOnMobile={false}
      />
      <Heading>
        CASH
        <br />
        <MobileStyles
          src="/images/hero/mobile.svg"
          alt="mobile phone"
          transX="50%"
          transY="50%"
          top="-85%"
          left="-16%"
        />
        <ZIndexWrapper>APP</ZIndexWrapper>
      </Heading>

      <Footer />
    </SectionStyles>
  );
}
