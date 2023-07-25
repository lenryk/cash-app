import React from "react";
import type { HeadFC } from "gatsby";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "../components/GlobalStyles";
import { theme } from "../theme";
import HeroContainer from "../containers/HeroContainer";
import PaymentsContainer from "../containers/PaymentsContainer";
import BankingContainer from "../containers/BankingContainer";
import CashContainer from "../containers/CashContainer";
import InvestingContainer from "../containers/InvestingContainer";

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
        <InvestingContainer />
      </ThemeProvider>
    </Main>
  );
}

export const Head: HeadFC = () => <title>Cash App</title>;
