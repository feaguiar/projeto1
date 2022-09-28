import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/index.css';
import { BrowserRouter } from 'react-router-dom'
import MainRoutes from './routes';
import GlobalContextProvider from './context/GlobalContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalContextProvider>
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
    </GlobalContextProvider>
  </React.StrictMode>
);

