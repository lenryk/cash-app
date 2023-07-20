import React from "react";
import styled from "styled-components";
import Icon from "../Icon";

const Test = styled.div`
  background-color: red;
  border-radius: 10px;
  border: 2px white solid;
  width: 170px;
  height: 50px;
  color: white;
  font-family: Agrandir, serif;
`;

const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ButtonsGroup = styled.div`
  display: flex;
  gap: 20px;
`;

const FooterLegalText = styled.p`
  color: white;
  max-width: 363px;
  font-family: Mulish, serif;
  font-size: 0.65rem;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 30px;
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

export default function Footer() {
  return (
    <Container>
      <ButtonsGroup>
        <Test>
          <Icon name="apple" />
          APP STORE
        </Test>
        <Test>
          <Icon name="playstore" />
          GOOGLE PLAY
        </Test>
      </ButtonsGroup>
      <RightSideContainer>
        <FooterLegalText>
          Brokerage services by Cash App Investing LLC, member FINRA / SIPC. See
          our BrokerCheck. Investing involves risk; you may lose money. Bitcoin
          trading offered by Cash App. Cash App Investing does not trade bitcoin
          and Cash App is not a member of FINRA or SIPC. Cash App facilitates
          banking services through Sutton Bank and Lincoln Savings Bank, Members
          FDIC.
        </FooterLegalText>
        <SocialIcons>
          <Icon name="twitch" />
          <Icon name="twitter" />
          <Icon name="instagram" />
        </SocialIcons>
      </RightSideContainer>
    </Container>
  );
}
