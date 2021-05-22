import React from "react";
import Router from "./components/Router";
import GlobalStyles from "./assets/styles/GlobalStyles";
import theme from "./assets/styles/theme";
import Second from '../src/components/Second/Second.js';
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router path="/second">
        <Second />
        </Router>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
