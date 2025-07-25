import React from 'react';
import ReactDOM from 'react-dom';  // ✅ React 16 uses this
import App from './App';
import { Provider } from 'react-redux';
import { store } from './app/store';  // Ensure this is a named import
import './App.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')  // ✅ Ensure this exists in your index.html
);
