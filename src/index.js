import React from 'react';
import ReactDOM from 'react-dom/client';
import theme from 'constants/theme';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import './index.css';

import { App } from 'components/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
