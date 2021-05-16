import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  html,
  body {
    font-size: 10px;
    padding-left: 17.3vw;
    padding-right: 17.3vw;

  @media (max-width: 1200px) {
    padding-left: 1.8vw;
    padding-right: 1.8vw;
  }
}
`;

export default GlobalStyle;