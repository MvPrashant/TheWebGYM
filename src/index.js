import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
//this is newest version of React june2022
root.render(
    <BrowserRouter>
      <App/>
    </BrowserRouter>
)


