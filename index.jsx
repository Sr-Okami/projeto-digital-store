import React from "react";
import { createRoot } from 'react-dom/client';
import { HashRouter } from "react-router-dom";
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import App from "./App.jsx";
import './src/assets/styles/global.css';


createRoot(document.getElementById('root')).render(
    <HashRouter>
        <App/>
    </HashRouter>
)
