import React from "react";
import type { HeadFC } from "gatsby";
import Footer from "../components/Footer";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "../components/GlobalStyles";
import Section from "../components/Section";
import { theme } from "../theme";
import HeroContainer from "../containers/HeroContainer";
import PaymentsContainer from "../containers/PaymentsContainer";

const Main = styled.main`
  height: 100dvh;
`;

export default function IndexPage() {
  return (
    <Main>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <HeroContainer />
        <PaymentsContainer />
        <Section color="green">
          <h1>BANKING</h1>
        </Section>
        <Section color="black">
          <h1>CASH CARD BOOST</h1>
        </Section>
        <Section color="green">
          <h1>INVESTING</h1>
          <Footer inverted />
        </Section>
      </ThemeProvider>
    </Main>
  );
}

export const Head: HeadFC = () => <title>Cash App</title>;
