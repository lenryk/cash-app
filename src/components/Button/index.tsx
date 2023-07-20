import React from "react";
import styled from "styled-components";

interface ButtonProps {
  inverted: boolean;
  children: React.ReactNode;
}

const ButtonWrapper = styled.div<ButtonProps>`
  display: flex;
  background-color: ${(props) => (props.inverted ? "white" : "black")};
  justify-content: center;
  align-items: center;
  font-size: 12px;
  line-height: 18px;
  border-radius: 10px;
  border: ${(props) =>
    props.inverted ? "2px black solid" : "2px white solid"};
  width: 170px;
  gap: 3px;
  height: 50px;
  color: ${(props) => (props.inverted ? "black" : "white")};
  font-family: Agrandir, serif;
`;

export default function Button({ children, inverted = false }: ButtonProps) {
  return <ButtonWrapper inverted={inverted}>{children}</ButtonWrapper>;
}
