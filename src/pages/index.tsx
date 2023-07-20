import React from "react";
import type { HeadFC } from "gatsby";
import Footer from "../components/Footer";
import styled from "styled-components";
import GlobalStyles from "../components/GlobalStyles";
import NavMenu from "../components/NavMenu";

const Section = styled.section`
  background-color: black;
  height: 100vh;
  //padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SectionTwo = styled.section`
  background-color: red;
  height: 100dvh;
`;

export default function IndexPage() {
  return (
    <main>
      <GlobalStyles />
      <Section>
        <NavMenu />
        <Footer />
        {/*<Footer inverted />*/}
      </Section>
      <SectionTwo>
        <h1>Testing</h1>
      </SectionTwo>
    </main>
  );
}

export const Head: HeadFC = () => <title>Cash App</title>;
