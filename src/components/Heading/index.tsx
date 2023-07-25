import React from "react";
import styled from "styled-components";

const HeadingStyles = styled.h1<HeadingProps>`
  font-family: Agrandir, sans-serif;
  font-size: ${({ small = false }) => (small ? "22px" : "40px")};
  line-height: 40px;
  letter-spacing: 1.5px;
  color: ${({ theme, color = "black" }) => theme.colors[color]};
`;

interface HeadingProps {
  children: React.ReactNode;
  color?: string;
  className?: string;
  small?: boolean;
}

export default function Heading({
  children,
  color,
  className,
  small,
}: HeadingProps) {
  return (
    <HeadingStyles color={color} className={className} small={small}>
      {children}
    </HeadingStyles>
  );
}
