import Section from "../../components/Section";
import React from "react";
import Heading from "../../components/Heading";
import styled from "styled-components";

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
  max-width: 352px;
`;

const Subtext = styled.p`
  font-family: Mulish, sans-serif;
  letter-spacing: 0.3px;
  line-height: 22px;
`;

export default function PaymentsContainer() {
  return (
    <Section>
      <TextWrapper>
        <Heading inverted>Payments</Heading>
        <Subtext>
          Send and receive money with anyone, donate to an important cause, or
          tip professionals. Just enter a $cashtag, phone number, or scan their
          QR code to pay.
        </Subtext>
      </TextWrapper>
    </Section>
  );
}
