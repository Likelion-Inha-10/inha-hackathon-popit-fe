import { createGlobalStyle } from "styled-components";
import han1 from "./assets/fonts/NanumSquareB.woff";
import han2 from "./assets/fonts/NanumSquareR.ttf";
import han3 from "./assets/fonts/NanumSquareL.ttf";
import eng from "./assets/fonts/GmarketSansTTFBold.woff";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
}

@font-face {
  font-family: "NanumSquare";
  src: url(${han1}) format('woff');
  font-style: normal;
}
@font-face {
  font-family: "NanumSquareR";
  src: url(${han2}) format('ttf');
  font-style: normal;
}
@font-face {
  font-family: "NanumSquareL";
  src: url(${han3}) format('ttf');
  font-style: normal;
}

@font-face {
  font-family: "NanumSquare";
  src: url(${eng}) format('woff'); 
  font-style: normal;
  unicode-range: U+0041-005A, U+0061-007A;
}




`;

export default GlobalStyle;
