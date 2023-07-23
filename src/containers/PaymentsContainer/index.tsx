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
  margin-top: 120px;
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

  @media only screen and ${devices.lg} {
    flex-direction: row;
    align-self: center;
    flex-wrap: wrap;
    transform: translate(100px, 0);
  }
`;

const OuterPositionWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-self: center;
`;

const MobileStyles = styled.img`
  position: relative;
  //width: 80%;

  @media only screen and ${devices.lg} {
    left: -300px;
    top: 50px;
  }
`;

export default function PaymentsContainer() {
  return (
    <Section color="white">
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
    </Section>
  );
}
