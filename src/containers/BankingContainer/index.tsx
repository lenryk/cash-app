import React from "react";
import Section from "../../components/Section";
import styled from "styled-components";
import Image from "../../components/Image";
import Heading from "../../components/Heading";
import { devices } from "../../utils/breakpoints";

const ImagesWrapper = styled.div`
  display: none;

  @media only screen and ${devices.lg} {
    display: flex;
    gap: 10vw;
  }

  @media only screen and ${devices["3xl"]} {
    display: flex;
    gap: 15vw;
  }
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

const SectionStyles = styled(Section)`
  @media only screen and ${devices.lg} {
    justify-content: space-evenly;
  }
`;

const MobileOnlyAlien = styled(Image)`
  position: absolute;

  @media only screen and ${devices.lg} {
    display: none;
  }
`;

export default function BankingContainer() {
  return (
    <SectionStyles color="green">
      <ImagesWrapper>
        <Image
          src={"/images/banking/hole.svg"}
          alt="large black hole"
          left="-100px"
          top="-24px"
          showOnMobile={false}
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
          alt="track piece"
          left="-300px"
          top="170px"
          showOnMobile={false}
          zIndex={10}
          relative
        />
        <Image
          src={"/images/banking/ramp.svg"}
          alt="side ramp"
          left="-200px"
          top="250px"
          showOnMobile={false}
          zIndex={10}
          relative
        />
        <Image
          src={"/images/banking/track-2.svg"}
          alt="track piece"
          left="-400px"
          top="100px"
          showOnMobile={false}
          zIndex={10}
          relative
        />
        <Image
          src={"/images/banking/stairs.svg"}
          alt="stairs"
          left="-600px"
          top="400px"
          showOnMobile={false}
          zIndex={10}
          relative
        />
      </ImagesWrapper>
      <PositionWrapper>
        <TextWrapper>
          <Heading color="white">Banking</Heading>
          <Subtext inverted>
            Receive your paycheck, tax returns, and other direct deposits up to
            two days early using your Cash App routing and account number.
          </Subtext>
        </TextWrapper>
        <MobileStyles src="/images/banking/mobile.svg" alt="mobile" />
        <MobileOnlyAlien
          src={"/images/banking/monster.svg"}
          alt="alien space monster"
          right="0px"
          bottom="-20px"
          height="120px"
          showOnMobile={true}
          zIndex={30}
        />
      </PositionWrapper>
      <ImagesWrapper>
        <Image
          src={"/images/banking/stairs-ball.svg"}
          alt="stairs with a ball"
          bottom="100px"
          showOnMobile={false}
          zIndex={10}
          relative
        />
        <Image
          src={"/images/banking/ramp-2.svg"}
          alt="large hole"
          bottom="20px"
          showOnMobile={false}
          zIndex={10}
          relative
        />
        <Image
          src={"/images/banking/tube.svg"}
          alt="see through tube"
          left="50px"
          bottom="-80px"
          showOnMobile={false}
          zIndex={10}
          relative
        />
        <Image
          src={"/images/banking/hole.svg"}
          alt="large black hole"
          left="50px"
          bottom="-150px"
          showOnMobile={false}
          zIndex={10}
          relative
        />
        <Image
          src={"/images/banking/cubes.svg"}
          alt="rubix cube stairs"
          left="-350px"
          bottom="100px"
          showOnMobile={false}
          zIndex={10}
          relative
        />
        <Image
          src={"/images/banking/monster.svg"}
          alt="alien space monster"
          left="-350px"
          bottom="0px"
          height="100%"
          showOnMobile={false}
          zIndex={10}
          relative
        />
      </ImagesWrapper>
    </SectionStyles>
  );
}
