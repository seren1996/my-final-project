import React from 'react';
import './styles/App.css';
import Header from "./components/Header";
import Routing from "./components/Routing";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CartContext";
import MenuFromApi from "./context/MenuFromApi";



function App() {
  return <>
      <div className='App'>
        <MenuFromApi>
          <CartProvider>
            <Header/>
            <Routing />
            <Footer />
          </CartProvider>
        </MenuFromApi>
      </div>
  </>
}

export default App;











