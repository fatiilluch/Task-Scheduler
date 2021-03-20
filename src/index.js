import React from 'react';   // nos permite crear las interfaces web 
import ReactDOM from 'react-dom';  
import './index.css';  //funca gracias a webpack 

import App from './App';  //importa App.js --> solo arranca la app (no hay codigo) 
import reportWebVitals from './reportWebVitals';

// registerServiceWorker --> para las apps que se encargan de simular datos de manera local 
// react guarda de manera temporal los datos de mi aplicacion

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
