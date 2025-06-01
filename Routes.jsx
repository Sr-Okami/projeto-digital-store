import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./src/components/Layout.jsx";
import HomePage from "./src/pages/HomePage.jsx";
import ProductListingPage from "./src/pages/ProductListingPage.jsx";
import ProductViewPage from "./src/pages/ProductViewPage.jsx";

const App = () => (
  console.log("Foi renderizado o App"),
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="produtos" element={<ProductListingPage />} />
      <Route path="categorias" element={<div>Categorias</div>} />
      <Route path="meus-pedidos" element={<div>Meus Pedidos</div>} />
      <Route path="product/:id" element={<ProductViewPage />} />
    </Route>
  </Routes>
);

export default App;
