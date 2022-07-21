import { createGlobalStyle } from "styled-components";
import han from "./assets/fonts/NanumSquareB.woff";
import eng from "./assets/fonts/GmarketSansTTFBold.woff";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
}

@font-face {
  font-family: "NanumSquareB";
  src: url(${han}) format('woff');
  font-style: normal;
}

@font-face {
  font-family: "NanumSquareB";
  src: url(${eng}) format('woff'); 
  font-style: normal;
  unicode-range: U+0041-005A, U+0061-007A;
}

* {
  font-family: "NanumSquareB";
}
`;

export default GlobalStyle;
