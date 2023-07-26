import React from "react";
import styled from "styled-components";
import Icon from "../Icon";
import Button from "../../components/Button";
import SocialIcons from "../../components/Footer/SocialIcons";
import { devices } from "../../utils/breakpoints";

const Container = styled.footer`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;

  @media only screen and ${devices.lg} {
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
  }
`;

const ButtonsGroup = styled.div`
  display: flex;
  gap: 10px;
  height: fit-content;
  z-index: 20;
  flex-wrap: wrap;
  justify-content: center;

  @media only screen and ${devices.lg} {
    gap: 20px;
  }
`;

const FooterLegalText = styled.p<{ inverted: boolean }>`
  color: ${({ inverted, theme }) =>
    inverted ? theme.colors.gray : theme.colors.white};
  max-width: 364px;
  font-family: Mulish, serif;
  font-weight: 700;
  font-size: 10px;
  line-height: 13px;
  z-index: 10;
`;

const RightSideContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: center;
`;

const DownArrow = styled(Icon)`
  order: -1;
  flex-basis: 100%;

  @media only screen and ${devices.lg} {
    display: block;
    order: unset;
    flex-basis: unset;
  }
`;

export default function Footer({ inverted = false }: { inverted?: boolean }) {
  return (
    <Container>
      <ButtonsGroup>
        <Button
          inverted={inverted}
          href="https://apps.apple.com/us/app/cash-app/id711923939"
        >
          <Icon name="apple" />
          APP STORE
        </Button>
        <Button
          inverted={inverted}
          href="https://play.google.com/store/apps/details?id=com.squareup.cash&hl=en&gl=US"
        >
          <Icon name="playstore" />
          GOOGLE PLAY
        </Button>
      </ButtonsGroup>
      {!inverted && <DownArrow name="downArrow" height={30} width={18} />}
      <RightSideContainer>
        <FooterLegalText inverted={inverted}>
          Brokerage services by Cash App Investing LLC, member FINRA / SIPC. See
          our BrokerCheck. Investing involves risk; you may lose money. Bitcoin
          trading offered by Cash App. Cash App Investing does not trade bitcoin
          and Cash App is not a member of FINRA or SIPC. Cash App facilitates
          banking services through Sutton Bank and Lincoln Savings Bank, Members
          FDIC.
        </FooterLegalText>
        <SocialIcons inverted={inverted} />
      </RightSideContainer>
    </Container>
  );
}
