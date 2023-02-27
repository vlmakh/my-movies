import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import './index.css';
import './services/i18n';

ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement).render(
  <React.StrictMode>
    <BrowserRouter basename="/my-movies">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
