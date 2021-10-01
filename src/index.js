import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/*
strict mode does not render any ui
it adds extra checks in development mode
it has no impact on a productiom build
*/
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
