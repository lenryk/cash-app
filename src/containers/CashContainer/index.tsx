import React from "react";
import Section from "../../components/Section";
import styled from "styled-components";
import Image from "../../components/Image";
import { devices } from "../../utils/breakpoints";
import Heading from "../../components/Heading";

const MobileStyles = styled(Image)`
  position: relative;
  align-self: center;
  top: 60px;
  z-index: 30;

  @media only screen and ${devices.lg} {
    top: 80px;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
  max-width: 335px;
  min-width: 335px;
  height: 147px;
  justify-content: center;
`;

const Subtext = styled.p`
  font-family: Mulish, sans-serif;
  letter-spacing: 0.3px;
  line-height: 22px;
  color: white;
`;

const PositionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0;
  order: -1;
  position: relative;

  @media only screen and ${devices.lg} {
    flex-direction: row;
    //flex-wrap: wrap;
    gap: 0;
    right: -500px;
    order: 0;
    flex-basis: 100px;
    bottom: 50px;
    margin-top: 50px;
  }
`;

const SectionStyles = styled(Section)`
  display: flex;
  flex-direction: row;
  gap: 0;
  justify-content: center;

  @media only screen and ${devices.lg} {
    justify-content: flex-end;
  }
`;

const MainStairsStyles = styled(Image)`
  align-self: flex-end;

  @media only screen and ${devices["3xl"]} {
    //height: 50vw;
    //bottom: -200px;
  }
`;

const LeftStairsStyles = styled(Image)`
  //height: 75%;

  @media only screen and ${devices.lg} {
    //height: 60%;
  }

  @media only screen and ${devices["3xl"]} {
    //height: 75%;
  }
`;

export default function CashContainer() {
  return (
    <SectionStyles color="black">
      <LeftStairsStyles
        src="/images/cash/stairs-2.svg"
        alt="stairs 2"
        left="-50px"
        bottom="-220px"
        zIndex={10}
      />
      <PositionWrapper>
        <TextWrapper>
          <Heading color="green">Cash Card & Boost</Heading>
          <Subtext>
            The Cash Card is a free, customizable debit card that lets you pay
            online and in stores. It’s the only way to get Boosts—instant
            discounts that work at places where you want to spend.
          </Subtext>
        </TextWrapper>
        <MobileStyles src="/images/cash/mobile.svg" alt="mobile" relative />
      </PositionWrapper>
      <MainStairsStyles
        src="/images/cash/stairs.svg"
        alt="stairs"
        right="-110px"
        bottom="-100px"
        // height="100%"
        showOnMobile={false}
      />
      <Image
        src="/images/cash/burger.svg"
        alt="stairs"
        right="470px"
        bottom="310px"
        showOnMobile={false}
      />
      <Image
        src="/images/cash/coffee.svg"
        alt="stairs"
        right="370px"
        bottom="160px"
        showOnMobile={false}
      />
      <Image
        src="/images/cash/shoe.svg"
        alt="stairs"
        right="70px"
        bottom="310px"
        showOnMobile={false}
      />
      <Image
        src="/images/cash/card.svg"
        alt="stairs"
        right="360px"
        bottom="450px"
        showOnMobile={false}
      />
      <Image
        src="/images/cash/hand.svg"
        alt="stairs"
        right="260px"
        bottom="600px"
        showOnMobile={false}
      />
    </SectionStyles>
  );
}
