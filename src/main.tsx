import React from 'react'; // optional but good for JSX support
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const container = document.getElementById('root');
if (!container) throw new Error('Root container missing in index.html');

createRoot(container).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
