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
}

const Img = styled.img<ImgProps>`
  position: absolute;
  transform: ${(props) =>
    props.transX && props.transY
      ? `translate(${props.transX}, ${props.transY})`
      : null};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  max-width: ${(props) => props.width};
  max-height: ${(props) => props.height};
  display: ${({ showOnMobile = true }) => (showOnMobile ? "block" : "none")};

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
    />
  );
}
