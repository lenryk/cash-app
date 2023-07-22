import React from "react";
import type { HeadFC } from "gatsby";
import Footer from "../components/Footer";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "../components/GlobalStyles";
import Section from "../components/Section";
import { theme } from "../theme";
import HeroContainer from "../containers/HeroContainer";

const Main = styled.main`
  height: calc(100dvh - 68px);
  width: calc(100dvw - 68px);
`;

export default function IndexPage() {
  return (
    <Main>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <HeroContainer />
        {/*<Section>*/}
        {/*  <h1>PAYMENTS</h1>*/}
        {/*</Section>*/}
        {/*<Section color="green">*/}
        {/*  <h1>BANKING</h1>*/}
        {/*</Section>*/}
        {/*<Section color="black">*/}
        {/*  <h1>CASH CARD BOOST</h1>*/}
        {/*</Section>*/}
        {/*<Section color="green">*/}
        {/*  <h1>INVESTING</h1>*/}
        {/*  <Footer inverted />*/}
        {/*</Section>*/}
      </ThemeProvider>
    </Main>
  );
}

export const Head: HeadFC = () => <title>Cash App</title>;
