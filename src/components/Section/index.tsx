import styled from "styled-components";
import React from "react";

interface SectionProps {
  children: React.ReactNode;
  color?: string;
  className?: string;
}

const SectionWrapper = styled.section<SectionProps>`
  background-color: ${(props) => props.theme.colors[props.color]};
  min-height: 100%;
  width: 100%;
  padding: 34px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 40px;
`;

export default function Section({
  children,
  className,
  color = "white",
}: SectionProps) {
  return (
    <SectionWrapper className={className} color={color}>
      {children}
    </SectionWrapper>
  );
}
