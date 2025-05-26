import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => (
  <div className="min-h-screen flex flex-col">
    {/*Aqui fica o cabecalho*/}
    <Header />
    <main className='flex-1'>
      <Outlet />      
    </main>

    <Footer />
    {/*Aqui fica o rodape*/}
  </div>
);

export default Layout;