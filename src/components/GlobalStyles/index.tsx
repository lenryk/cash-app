import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background: blue;
  }
  
  @font-face {
    font-family: "Mulish";
    font-display: swap;
    src: url(/fonts/Mulish-Bold.woff2) format("woff2");
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: "Agrandir";
    font-display: swap;
    src: url(/fonts/Agrandir-WideHeavy.woff2) format("woff2");
    font-weight: 700;
    font-style: normal;
  }
`;

export default GlobalStyle;
