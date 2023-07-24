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
  margin-top: 5lvh;
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

  @media only screen and ${devices.lg} {
    flex-direction: row;
    align-self: center;
    flex-wrap: wrap;
    transform: translate(-200px, 100px);
  }
`;

const MobileStyles = styled.img`
  position: absolute;
  top: 35lvh;
  left: calc(55% - 400px);

  @media only screen and ${devices.lg} {
    top: 30px;
    left: 25%;
  }
`;

const SectionStyles = styled(Section)`
  background-image: url("/images/payments/floor.svg");
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: contain;

  @media only screen and ${devices.lg} {
    background-position: 0 520px;
  }
`;

export default function PaymentsContainer() {
  return (
    <SectionStyles color="white">
      <PositionWrapper>
        <TextWrapper>
          <Heading inverted>Payments</Heading>
          <Subtext inverted>
            Send and receive money with anyone, donate to an important cause, or
            tip professionals. Just enter a $cashtag, phone number, or scan
            their QR code to pay.
          </Subtext>
        </TextWrapper>
        <MobileStyles src="/images/payments/mobile.svg" alt="mobile" />
      </PositionWrapper>
      <div>
        <Image
          src={"/images/payments/column.svg"}
          alt="large column"
          left="-600px"
          bottom="-120px"
          showOnMobile={false}
        />
        <Image
          src={"/images/payments/pillar-medium.svg"}
          alt="large column"
          left="170px"
          bottom="40px"
          showOnMobile={false}
          zIndex={10}
        />
        <Image
          src={"/images/payments/pillar-small.svg"}
          alt="large column"
          left="280px"
          bottom="70px"
          showOnMobile={false}
        />
        <Image
          src={"/images/payments/column.svg"}
          alt="large column"
          left="500px"
          bottom="-60px"
          showOnMobile={false}
        />
        <Image
          src={"/images/payments/pillar-medium.svg"}
          alt="large column"
          left="600px"
          bottom="80px"
          showOnMobile={false}
          zIndex={10}
        />
      </div>
    </SectionStyles>
  );
}
