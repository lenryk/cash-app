import React from "react";
import type { HeadFC } from "gatsby";
import Footer from "../components/Footer";
import styled from "styled-components";
import GlobalStyles from "../components/GlobalStyles";

const Section = styled.section`
  //background-color: black;
`;

export default function IndexPage() {
  return (
    <main>
      <GlobalStyles />
      <Section>
        <Footer />
        {/*<Footer inverted />*/}
      </Section>
    </main>
  );
}

export const Head: HeadFC = () => <title>Cash App</title>;
