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

  //background-image: url("/images/hero/mobile.svg");
  //background-position: center;
  //background-repeat: no-repeat;
  //background-size: contain;

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
  background-position: 50% -15vh;
  background-repeat: no-repeat;
  background-size: cover;

  @media only screen and ${devices.lg} {
    //background-position: center;
    background-position: 50% -8vh;
  }
`;

//
// const MobileStyles = styled(Img)`
//
//   // transform: ${(props) =>
//   //   props.transX && props.transY
//   //     ? `translate(${props.transX}, ${props.transY}) scale(calc(80%))`
//   //     : null};
//   //
//   // @media only screen and ${devices.lg} {
//   //   left: ${(props) => props.left};
//   //   transform: ${(props) =>
//   //     props.transX && props.transY
//   //       ? `translate(${props.transX}, ${props.transY}) scale(130%)`
//   //       : null};
//   // }
// `

export default function HeroContainer() {
  return (
    <SectionStyles color="black">
      <NavMenuStyles />
      <Img
        src="/images/hero/cashappLogo.svg"
        alt="cashapp logo"
        top="calc(7% - 44px)"
        left="calc(5% - 30px)"
      />
      <Img
        src="/images/hero/cube.svg"
        alt="decorative cube"
        transX="50%"
        transY="50%"
        top="calc(8% - 74px)"
        left="calc(13% - 74px)"
      />
      <Heading>
        CASH
        <br />
        <Img
          src="/images/hero/mobile.svg"
          alt="mobile phone"
          transX="50%"
          transY="50%"
          top="calc(50% - 454px)"
          left="calc(50% - 370px)"
        />
        <ZIndexWrapper>APP</ZIndexWrapper>
      </Heading>

      <Footer />
    </SectionStyles>
  );
}
