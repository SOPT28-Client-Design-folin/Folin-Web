import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './assets/styles/GlobalStyles';
import theme from './assets/styles/theme';
import Router from './components/Router';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
