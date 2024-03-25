// eslint-disable-next-line prettier/prettier
import React from 'react'
import ReactDOM from 'react-dom'

import Login from './containers/Login'
import GlobalStyles from './styles/globalStyles'

// eslint-disable-next-line react/no-deprecated
ReactDOM.render(
  <>
    <Login />,
    <GlobalStyles />
  </>,

  document.getElementById('root')
)

/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
*/
