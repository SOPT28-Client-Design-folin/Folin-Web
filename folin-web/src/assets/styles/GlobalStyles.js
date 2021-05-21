import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}
  
  html,
  body {
    font-family: 'Noto Serif KR';
    box-sizing: border-box;
    font-size: 10px;
    padding-left: 5vw;
    padding-right: 5vw;

  @media (max-width: 1200px) {
    padding-left: 1.8vw;
    padding-right: 1.8vw;
  }
}
`;

export default GlobalStyles;