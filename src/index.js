import React from 'react';
import { createRoot } from 'react-dom/client'; 
import App from './App';
import './App.scss';
import registerServiceWorker from './registerServiceWorker';

const container = document.getElementById('root');
const root = createRoot(container); 
root.render(<App />);

registerServiceWorker();