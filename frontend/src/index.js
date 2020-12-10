import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider, StylesProvider } from '@material-ui/core/styles';
import App from './components/App';
import theme from './styles/theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <StylesProvider injectFirst>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <App />
    </StylesProvider>
  </ThemeProvider>,
  document.querySelector('#root'),
);
