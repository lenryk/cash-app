import NavMenu from "../../components/NavMenu";
import Footer from "../../components/Footer";
import Section from "../../components/Section";
import React from "react";
import styled from "styled-components";
import { devices } from "../../utils/breakpoints";
import Image from "../../components/Image";

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

const MobileStyles = styled(Image)`
  width: calc((120% + 10vw) / 2);
  height: calc((130% + 60vw) / 2);

  @media only screen and ${devices.lg} {
    width: 100%;
    height: 140%;
    top: -86%;
    left: -50%;
  }
`;

export default function HeroContainer() {
  return (
    <SectionStyles color="black">
      <NavMenuStyles />
      <Image
        src="/images/hero/cashappLogo.svg"
        alt="cashapp logo"
        top="calc(7dvh - 44px)"
        left="calc(4dvw - 30px)"
        showOnMobile={false}
      />
      <Image
        src="/images/hero/cube.svg"
        alt="decorative cube"
        transX="50%"
        transY="50%"
        top="calc(10dvh - 74px)"
        left="calc(13dvw - 74px)"
      />
      <Image
        src="/images/hero/eyeButton.svg"
        alt="eye button"
        transX="50%"
        transY="50%"
        top="calc(12dvh - 36px)"
        right="calc((30dvw - 64px) /2)"
      />
      <Image
        src="/images/hero/stairs.svg"
        alt="eye button"
        transX="50%"
        transY="50%"
        top="2%"
        right="20%"
        width="calc((5% + 30vw) / 2)"
        showOnMobile={false}
      />
      <Image
        src="/images/hero/rubixStairs.svg"
        alt="eye button"
        transX="50%"
        transY="50%"
        bottom="15%"
        left="10%"
        width="calc((15% + 40vw) / 2)"
        showOnMobile={false}
      />
      <Image
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
