import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

/*
strict mode does not render any ui
it adds extra checks in development mode
it has no impact on a productiom build
*/
// BrowserRouter wasn't needed here in v5
ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);
