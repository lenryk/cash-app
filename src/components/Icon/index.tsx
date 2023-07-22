import React from "react";
import styled from "styled-components";

interface ImageProps {
  inverted: boolean;
}

const Image = styled.img<ImageProps>`
  filter: ${(props) =>
    props.inverted
      ? "invert(100%) sepia(0%) saturate(7463%) hue-rotate(38deg) brightness(130%) contrast(100%);"
      : null};
`;

export default function Icon({
  name,
  className,
  height = 24,
  width = 24,
  inverted = false,
}: {
  name: string;
  height?: number;
  width?: number;
  inverted?: boolean;
  className?: string;
}) {
  return (
    <>
      <Image
        inverted={inverted}
        src={`/icons/${name}.svg`}
        width={width}
        height={height}
        alt={name}
        className={className}
      />
    </>
  );
}
