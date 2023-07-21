import React from "react";
import type { HeadFC } from "gatsby";
import Footer from "../components/Footer";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../components/GlobalStyles";
import Section from "../components/Section";
import { theme } from "../theme";
import HeroContainer from "../containers/HeroContainer";

export default function IndexPage() {
  return (
    <main>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <HeroContainer />
        <Section>
          <h1>PAYMENTS</h1>
        </Section>
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
    </main>
  );
}

export const Head: HeadFC = () => <title>Cash App</title>;
