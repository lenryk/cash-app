import React from "react";
import type { HeadFC } from "gatsby";
import Footer from "../components/Footer";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "../components/GlobalStyles";
import Section from "../components/Section";
import { theme } from "../theme";
import HeroContainer from "../containers/HeroContainer";
import PaymentsContainer from "../containers/PaymentsContainer";
import BankingContainer from "../containers/BankingContainer";
import CashContainer from "../containers/CashContainer";

const Main = styled.main`
  height: 100lvh;
`;

export default function IndexPage() {
  return (
    <Main>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <HeroContainer />
        <PaymentsContainer />
        <BankingContainer />
        <CashContainer />
        <Section color="green">
          <h1>INVESTING</h1>
          <Footer inverted />
        </Section>
      </ThemeProvider>
    </Main>
  );
}

export const Head: HeadFC = () => <title>Cash App</title>;
