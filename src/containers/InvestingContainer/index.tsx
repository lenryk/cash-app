import React from "react";
import Section from "../../components/Section";
import Footer from "../../components/Footer";
import styled from "styled-components";
import Image from "../../components/Image";
import Heading from "../../components/Heading";
import { devices } from "../../utils/breakpoints";

const PositionWrapper = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  @media only screen and ${devices.lg} {
    flex-direction: row;
    gap: 60px;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  max-width: 348px;
  max-height: 147px;
  justify-content: center;
  order: 0;
  z-index: 10;

  @media only screen and ${devices.lg} {
    gap: 13px;
  }
`;

const Subtext = styled.p<{ inverted: boolean }>`
  font-family: Mulish, sans-serif;
  letter-spacing: 0.3px;
  line-height: 22px;
  color: ${({ inverted, theme }) => (inverted ? theme.black : theme.white)};
`;

const InvestingHeading = styled(Heading)`
  align-self: center;
`;

const HeroImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;

  @media only screen and ${devices.lg} {
    gap: 80px;
    margin-bottom: clamp(200px, 12%, 600px);
    margin-top: auto;
  }
`;

const SectionStyles = styled(Section)`
  gap: 20px;

  @media only screen and ${devices.lg} {
    gap: 40px;
  }
`;

export default function InvestingContainer() {
  return (
    <SectionStyles color="green">
      <HeroImageWrapper>
        <InvestingHeading color="white">Investing</InvestingHeading>
        <PositionWrapper>
          <TextWrapper>
            <Heading color="black" small>
              Stocks
            </Heading>
            <Subtext inverted>
              Whether you’re an expert or just getting started, Cash App is the
              fastest and most accessible way to invest in stocks. Start now
              with as little as $1.
            </Subtext>
          </TextWrapper>
          <Image
            src="/images/investing/stocks-mobile.svg"
            alt="stocks mobile"
            relative
            zIndex={10}
          />
          <Image src="/images/investing/rays.svg" alt="rays" width="100%" />
          <Image
            src="/images/investing/bitcoin-mobile.svg"
            alt="bitcoin mobile"
            relative
            showOnMobile={false}
            zIndex={10}
          />
          <TextWrapper>
            <Heading color="black" small>
              Bitcoin
            </Heading>
            <Subtext inverted>
              Cash App is the fastest way to convert dollars to bitcoin. From
              your home screen, six taps are all it takes to stack sats, buy an
              entire bitcoin, or just see what it’s all about.
            </Subtext>
          </TextWrapper>
        </PositionWrapper>
        <Image
          src="/images/investing/floor-upscaled.jpeg"
          alt="floor"
          left="0"
          bottom="0"
          right="0"
          width="clamp(2000px, 100%, 100%)"
          showOnMobile={false}
        />
      </HeroImageWrapper>

      <Footer inverted />
    </SectionStyles>
  );
}
