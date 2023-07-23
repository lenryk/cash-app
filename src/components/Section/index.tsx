import styled from "styled-components";
import React from "react";

interface SectionProps {
  children: React.ReactNode;
  color: "white" | "green" | "black";
  className?: string;
}

const SectionWrapper = styled.section<SectionProps>`
  background-color: ${({ theme, color }) => theme.colors[color]};
  min-height: 100%;
  width: 100%;
  padding: 34px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 40px;
  position: relative;
  overflow: hidden;
`;

export default function Section({ children, className, color }: SectionProps) {
  return (
    <SectionWrapper className={className} color={color}>
      {children}
    </SectionWrapper>
  );
}
