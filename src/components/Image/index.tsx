import styled from "styled-components";
import React from "react";
import { devices } from "../../utils/breakpoints";

interface ImgProps {
  transX?: string;
  transY?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  zIndex?: number;
  width?: string;
  height?: string;
  showOnMobile?: boolean;
  src: string;
  alt: string;
  className?: string;
  relative?: boolean;
}

const Img = styled.img<ImgProps>`
  position: ${({ relative }) => (relative ? "relative" : "absolute")};
  transform: ${({ transX, transY }) =>
    transX && transY ? `translate(${transX}, ${transY})` : null};
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};
  max-width: ${({ width }) => width};
  max-height: ${({ height }) => height};
  display: ${({ showOnMobile = true }) => (showOnMobile ? "block" : "none")};
  z-index: ${({ zIndex }) => zIndex};

  @media only screen and ${devices.lg} {
    display: block;
  }
`;

export default function Image({
  transX,
  transY,
  top,
  left,
  right,
  bottom,
  zIndex,
  width,
  height,
  showOnMobile,
  alt,
  src,
  className,
  relative = false,
}: ImgProps) {
  return (
    <Img
      src={src}
      transY={transY}
      transX={transX}
      top={top}
      left={left}
      right={right}
      bottom={bottom}
      zIndex={zIndex}
      width={width}
      height={height}
      showOnMobile={showOnMobile}
      alt={alt}
      className={className}
      relative={relative}
    />
  );
}
