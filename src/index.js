import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Partners from './pages/Partners';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/partners" element={<Partners />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
