import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import { Themeprovider } from './Context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Themeprovider>
    <App />
  </Themeprovider>
    
  
)
