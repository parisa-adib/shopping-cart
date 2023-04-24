import { useState } from 'react';
import { Route, Navigate, Routes } from 'react-router-dom'; 

//components
import ProductDetials from './components/ProductDetials';
import Store from './components/Store';
import Navbar from './components/shared/Navbar';
import ShopCart from './components/ShopCart';

//context
import ProductContextProvider from './context/ProductContextProvider';
import CartContextProvider from './context/CartContextProvider';

function App() {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <Navbar />
            <Routes>
              <Route path="/product/:id" element={<ProductDetials />} />
              <Route path="/product" element={<Store />} />
              <Route path="/Cart" element={<ShopCart />} />
              <Route path="/*" element={<Navigate to="/product" />} />
            </Routes>
      </CartContextProvider>
    </ProductContextProvider>
  )
}

export default App
