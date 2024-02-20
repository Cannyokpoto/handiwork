import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import App from './App';
import reportWebVitals from './reportWebVitals';
import HandiworkContextProvider from './Components/Context/HandiworkContext';







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <HandiworkContextProvider>
        <App />
    </HandiworkContextProvider>

);


reportWebVitals();
