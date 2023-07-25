import React from "react";
import Section from "../../components/Section";
import styled from "styled-components";
import Image from "../../components/Image";
import { devices } from "../../utils/breakpoints";

const MobileStyles = styled(Image)`
  position: relative;
  align-self: center;
  top: 0;
  z-index: 30;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
  max-width: 348px;
  height: 147px;
  justify-content: center;
`;

const Subtext = styled.p<{ inverted: boolean }>`
  font-family: Mulish, sans-serif;
  letter-spacing: 0.3px;
  line-height: 22px;
  color: ${({ inverted, theme }) => (inverted ? theme.black : theme.white)};
`;

const PositionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media only screen and ${devices.lg} {
    flex-direction: row;
    gap: 0;
  }
`;

export default function CashContainer() {
  return (
    <Section color="black">
      <h1>Section</h1>

      <MobileStyles src="/cash/nmobile.svg" alt="mobile phone" />
    </Section>
  );
}
