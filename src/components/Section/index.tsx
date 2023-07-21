import styled from "styled-components";
import React from "react";

interface SectionProps {
  children: React.ReactNode;
  color?: string;
}

const SectionWrapper = styled.section<SectionProps>`
  background-color: ${(props) => props.theme.colors[props.color]};
  height: calc(100vh - 68px);
  padding: 34px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default function Section({ children, color = "white" }: SectionProps) {
  return <SectionWrapper color={color}>{children}</SectionWrapper>;
}
