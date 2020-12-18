import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux'
import store from './redux/store'

import Container from '@material-ui/core/Container'

ReactDOM.render(
  <React.StrictMode>
    <Container>
      <Provider store={store}>
        <App />
      </Provider>
    </Container>
  </React.StrictMode>,
  document.getElementById('root')
);
