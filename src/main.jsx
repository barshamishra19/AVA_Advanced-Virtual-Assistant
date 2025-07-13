// src/main.jsx

import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import UserContext from './context/userContext.jsx';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <UserContext>
      <App />
    </UserContext>
  </React.StrictMode>
);