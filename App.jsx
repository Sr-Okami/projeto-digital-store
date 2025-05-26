import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import ProductListingPage from "./pages/ProductListingPage";
import ProductViewPage from "./pages/ProductViewPage";

const App = () => (
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
