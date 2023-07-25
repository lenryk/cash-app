import Section from "../../components/Section";
import React from "react";
import Heading from "../../components/Heading";
import styled from "styled-components";
import Image from "../../components/Image";
import { devices } from "../../utils/breakpoints";

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
  max-width: 352px;
  height: 147px;
  justify-content: center;

  @media only screen and ${devices.lg} {
    margin-top: 150px;
  }
`;

const Subtext = styled.p<{ inverted: boolean }>`
  font-family: Mulish, sans-serif;
  letter-spacing: 0.3px;
  line-height: 22px;
  color: ${({ inverted, theme }) => (inverted ? theme.black : theme.white)};
`;

const PositionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  transform: translate(0px, calc(-20% + 5lvh));
  z-index: 20;

  @media only screen and ${devices.lg} {
    flex-direction: row;
    align-self: center;
    flex-wrap: wrap;
    transform: translate(-200px, 50px);
  }
`;

const MobileStyles = styled.img`
  position: absolute;
  top: 180px;
  left: calc(55% - 350px);

  @media only screen and ${devices.lg} {
    top: 30px;
    left: 25%;
  }
`;

const SectionStyles = styled(Section)`
  flex-direction: column;
  justify-content: space-evenly;
`;

const ImagesStyles = styled.div`
  background-image: url("/images/payments/floor.svg");
  background-position: bottom;
  background-repeat: repeat-x;
  background-size: contain;
  margin: -34px;

  @media only screen and ${devices.lg} {
    background-position: 0 100px;
    display: flex;
    gap: 10vw;
  }

  @media only screen and ${devices["3xl"]} {
    background-position: 0 100px;
    display: flex;
    gap: 15vw;
  flex-grow: 1;
`;

export default function PaymentsContainer() {
  return (
    <SectionStyles color="white">
      <PositionWrapper>
        <TextWrapper>
          <Heading color="green">Payments</Heading>
          <Subtext inverted>
            Send and receive money with anyone, donate to an important cause, or
            tip professionals. Just enter a $cashtag, phone number, or scan
            their QR code to pay.
          </Subtext>
        </TextWrapper>
        <MobileStyles src="/images/payments/mobile.svg" alt="mobile" />
      </PositionWrapper>
      <ImagesStyles>
        <Image
          src={"/images/payments/column.svg"}
          alt="large column"
          left="-600px"
          bottom="-210px"
          zIndex={40}
          relative
        />
        <Image
          src={"/images/payments/pillar-medium.svg"}
          alt="medium pillar"
          left="-650px"
          bottom="-120px"
          showOnMobile={false}
          zIndex={30}
          relative
        />
        <Image
          src={"/images/payments/pillar-small.svg"}
          alt="small pillar"
          left="-800px"
          bottom="-130px"
          zIndex={20}
          showOnMobile={false}
          relative
        />
        <Image
          src={"/images/payments/column.svg"}
          alt="column"
          left="-1000px"
          bottom="-130px"
          showOnMobile={false}
          zIndex={30}
          relative
        />
        <Image
          src={"/images/payments/pillar-medium.svg"}
          alt="medium pillar"
          left="-1320px"
          bottom="-5px"
          showOnMobile={false}
          zIndex={20}
          relative
        />
        <Image
          src={"/images/payments/pillar-medium.svg"}
          alt="medium pillar"
          left="-2200px"
          bottom="-100px"
          showOnMobile={false}
          zIndex={30}
          relative
        />
        <Image
          src={"/images/payments/pillar-medium.svg"}
          alt="medium pillar"
          left="-2350px"
          bottom="-210px"
          showOnMobile={false}
          zIndex={40}
          relative
        />
        <Image
          src={"/images/payments/column.svg"}
          alt="large column"
          right="2800px"
          bottom="-20px"
          showOnMobile={false}
          zIndex={20}
          relative
        />
      </ImagesStyles>
    </SectionStyles>
  );
}
