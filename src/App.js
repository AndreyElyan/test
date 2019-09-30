import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import theme from './styles/theme';

import './config/ReactotronConfig';

import Routes from './routes';
import history from './services/history';

import store from './store';

import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Router history={history}>
            <Routes />
            <GlobalStyle />
            <ToastContainer />
          </Router>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
