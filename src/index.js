import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Context } from './context/context';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context>
    <BrowserRouter> 
        <App /> 
    </BrowserRouter>
    </Context>
  </React.StrictMode>
);


