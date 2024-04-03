import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import ProductList from './ProductList';
import './App.css'

function App() {
  return (
    <>
      <Provider store={store}>
      <div>
        <ProductList />
      </div>
    </Provider>
    </>
  )
}

export default App
