import { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
//components
import ProductDetials from './components/ProductDetials';
import Store from './components/Store';
//context
import ProductContextProvider from './context/ProductContextProvider';

function App() {
  return (
    <ProductContextProvider>
      <Switch>
        <Route path="/product/:id" component={ProductDetials} />
        <Route path="/product" component={Store} />
        <Redirect to="/product" />
      </Switch>
    </ProductContextProvider>
  )
}

export default App
