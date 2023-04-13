import { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'; 

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
            <Switch>
              <Route path="/product/:id" component={ProductDetials} />
              <Route path="/product" component={Store} />
              <Route path="/Cart" component={ShopCart} />
              <Redirect to="/product" />
            </Switch>
      </CartContextProvider>
    </ProductContextProvider>
  )
}

export default App
