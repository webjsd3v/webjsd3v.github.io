import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import './index.module.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App title={
      'React Portfolio...'
    }/>
  </React.StrictMode>
);
