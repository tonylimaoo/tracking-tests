import { useState, useEffect } from 'react'
import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Banana from './pages/Banana';
import Footer from './components/Footer';
import EcommerceHome from './pages/Ecommerce/EcommerceHome';
import Product from './pages/Ecommerce/Product/Product';
import Cart from './pages/Ecommerce/Cart/Cart';
import Checkout from './pages/Ecommerce/Checkout/Checkout';

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log("renderizou");
    gtag('js', new Date());
    gtag('config', 'G-X9RTCMVBM8', {
      send_page_view: false
    });
}, [])

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/ecommerce/home' element={<EcommerceHome />} />
          <Route path='/ecommerce/product/:id' element={<Product />} />
          <Route path='/ecommerce/cart' element={<Cart />} />
          <Route path='/ecommerce/checkout' element={<Checkout />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
