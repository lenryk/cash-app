import React from "react";
import styled from "styled-components";

const HeadingStyles = styled.h1<HeadingProps>`
  font-family: Agrandir, sans-serif;
  font-size: 40px;
  line-height: 40px;
  color: ${({ theme, inverted }) =>
    inverted ? theme.colors.green : theme.colors.white};
`;

interface HeadingProps {
  children: React.ReactNode;
  inverted?: boolean;
}

export default function Heading({ children, inverted = false }: HeadingProps) {
  return <HeadingStyles inverted={inverted}>{children}</HeadingStyles>;
}
