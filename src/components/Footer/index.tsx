import React from "react";
import styled from "styled-components";
import Icon from "../Icon";
import Button from "../../components/Button";
import SocialIcons from "../../components/Footer/SocialIcons";

const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ButtonsGroup = styled.div`
  display: flex;
  gap: 20px;
  height: fit-content;
`;

const FooterLegalText = styled.p`
  color: white;
  max-width: 364px;
  font-family: Mulish, serif;
  font-size: 10px;
  line-height: 13px;
`;

// const Icon = styled.div`
//   background-color: orange;
//   height: 24px;
//   width: 24px;
// `;

const RightSideContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export default function Footer({ inverted = false }: { inverted?: boolean }) {
  return (
    <Container>
      <ButtonsGroup>
        <Button inverted={inverted}>
          <Icon name="apple" />
          APP STORE
        </Button>
        <Button inverted={inverted}>
          <Icon name="playstore" />
          GOOGLE PLAY
        </Button>
      </ButtonsGroup>
      {!inverted && <Icon name="downArrow" height={30} width={18} />}
      <RightSideContainer>
        <FooterLegalText>
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
