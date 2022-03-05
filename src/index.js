import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Crud from "./components/CRUD";
import "bootstrap/dist/css/bootstrap.min.css"

ReactDOM.render(
  <React.StrictMode>
    <Crud/>
  </React.StrictMode>,
  document.getElementById('root')
);
