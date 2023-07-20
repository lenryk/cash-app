import React from "react";
import type { HeadFC } from "gatsby";
import Footer from "../components/Footer";
import styled, { createGlobalStyle } from "styled-components";

const Section = styled.section`
  background-color: black;
`;

const GlobalStyle = createGlobalStyle`
  body {
    background: blue;
  }
  
  @font-face {
    font-family: "Mulish";
    src: url(/fonts/Mulish-Bold.woff2) format("woff2");
  }

  @font-face {
    font-family: "Agrandir";
    src: url(/fonts/Agrandir-WideHeavy.woff2) format("woff2");
  }
`;

export default function IndexPage() {
  return (
    <main>
      <GlobalStyle />
      <Section>
        <Footer />
      </Section>
    </main>
  );
}

export const Head: HeadFC = () => <title>Cash App</title>;
