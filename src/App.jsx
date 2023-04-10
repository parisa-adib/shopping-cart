import { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'; 

//components
import ProductDetials from './components/ProductDetials';
import Store from './components/Store';

//context
import ProductContextProvider from './context/ProductContextProvider';
import CartContextProvider from './context/CartContextProvider';

function App() {
  return (
    <ProductContextProvider>
      <CartContextProvider>
          <Switch>
            <Route path="/product/:id" component={ProductDetials} />
            <Route path="/product" component={Store} />
            <Redirect to="/product" />
          </Switch>
      </CartContextProvider>
    </ProductContextProvider>
  )
}

export default App
