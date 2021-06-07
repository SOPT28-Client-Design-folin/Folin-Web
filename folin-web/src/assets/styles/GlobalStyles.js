import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import '../fonts/index.css';

const GlobalStyles = createGlobalStyle`
  ${reset}
  
  html,
  body {
    font-family: 'Noto Serif KR';
    box-sizing: border-box;
    font-size: 10px;

  @media (max-width: 1200px) {
    padding-right: 1.8vw;
  }
}
`;

export default GlobalStyles;
