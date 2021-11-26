import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import ISSProvider from './context/ISSProvider';

ReactDOM.render(
  <React.StrictMode>
    <ISSProvider>
      <App />
    </ISSProvider> 
  </React.StrictMode>,
  document.getElementById('root')
);
