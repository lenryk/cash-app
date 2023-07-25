import React from "react";
import styled from "styled-components";

const HeadingStyles = styled.h1<HeadingProps>`
  font-family: Agrandir, sans-serif;
  font-size: 40px;
  line-height: 40px;
  color: ${({ theme, color = "black" }) => theme.colors[color]};
`;

interface HeadingProps {
  children: React.ReactNode;
  color?: string;
}

export default function Heading({ children, color }: HeadingProps) {
  return <HeadingStyles color={color}>{children}</HeadingStyles>;
}
