import React from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import Layout from "./src/components/Layout";
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './src/styles/global.css';


createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Layout/>
    </BrowserRouter>
)
