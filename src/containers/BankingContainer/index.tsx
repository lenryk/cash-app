import React from "react";
import Section from "../../components/Section";
import styled from "styled-components";
import Image from "../../components/Image";
import Heading from "../../components/Heading";
import { devices } from "../../utils/breakpoints";

const TopImagesWrapper = styled.div`
  display: flex;
  gap: 10vw;
`;

const BottomImagesWrapper = styled.div`
  display: flex;
  gap: 10vw;
`;

const MobileStyles = styled(Image)`
  position: relative;
  align-self: center;
  top: 0;
  z-index: 30;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
  max-width: 348px;
  height: 147px;
  justify-content: center;

  @media only screen and ${devices.lg} {
    //margin-top: 150px;
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
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media only screen and ${devices.lg} {
    flex-direction: row;
    gap: 0;
  }
`;

export default function BankingContainer() {
  return (
    <Section color="green">
      <TopImagesWrapper>
        <Image
          src={"/images/banking/hole.svg"}
          alt="large hole"
          left="-100px"
          top="-34px"
          showOnMobile
          zIndex={10}
          relative
        />
        <Image
          src={"/images/banking/pillar.svg"}
          alt="large pillar"
          left="-600px"
          top="100px"
          showOnMobile={false}
          zIndex={10}
          relative
        />
        <Image
          src={"/images/banking/track.svg"}
          alt="large pillar"
          left="-300px"
          top="170px"
          showOnMobile={false}
          zIndex={10}
          relative
        />
        <Image
          src={"/images/banking/ramp.svg"}
          alt="large pillar"
          left="-200px"
          top="250px"
          showOnMobile={false}
          zIndex={10}
          relative
        />
        <Image
          src={"/images/banking/track-2.svg"}
          alt="large pillar"
          left="-400px"
          top="100px"
          showOnMobile={false}
          zIndex={10}
          relative
        />
        <Image
          src={"/images/banking/stairs.svg"}
          alt="large pillar"
          left="-600px"
          top="400px"
          showOnMobile={false}
          zIndex={10}
          relative
        />
      </TopImagesWrapper>
      <PositionWrapper>
        <TextWrapper>
          <Heading>Banking</Heading>
          <Subtext inverted>
            Receive your paycheck, tax returns, and other direct deposits up to
            two days early using your Cash App routing and account number.
          </Subtext>
        </TextWrapper>
        <MobileStyles src="/images/banking/mobile.svg" alt="mobile" />
      </PositionWrapper>
      <BottomImagesWrapper>
        <Image
          src={"/images/banking/stairs-ball.svg"}
          alt="large hole"
          left="0"
          bottom="100px"
          showOnMobile={false}
          zIndex={10}
          relative
        />
        <Image
          src={"/images/banking/ramp-2.svg"}
          alt="large hole"
          left="0px"
          bottom="20px"
          showOnMobile={false}
          zIndex={10}
          relative
        />
        <Image
          src={"/images/banking/tube.svg"}
          alt="large hole"
          left="50px"
          bottom="-80px"
          showOnMobile={false}
          zIndex={10}
          relative
        />
        <Image
          src={"/images/banking/hole.svg"}
          alt="large hole"
          left="50px"
          bottom="-150px"
          showOnMobile={false}
          zIndex={10}
          relative
        />
        <Image
          src={"/images/banking/cubes.svg"}
          alt="large hole"
          left="-350px"
          bottom="100px"
          showOnMobile={false}
          zIndex={10}
          relative
        />
        <Image
          src={"/images/banking/monster.svg"}
          alt="large hole"
          left="-350px"
          bottom="0px"
          showOnMobile={false}
          zIndex={10}
          relative
        />
      </BottomImagesWrapper>
    </Section>
  );
}
