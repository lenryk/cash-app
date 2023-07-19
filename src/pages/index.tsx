import React from "react";
import type { HeadFC } from "gatsby";
import Footer from "../components/Footer";
import styled from "styled-components";

const Section = styled.section`
  background-color: black;
`;

export default function IndexPage() {
  return (
    <main>
      <Section>
        <Footer />
      </Section>
    </main>
  );
}

export const Head: HeadFC = () => <title>Cash App</title>;
