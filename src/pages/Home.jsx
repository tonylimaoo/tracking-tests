import React, { useEffect, useState } from 'react'
import "./Styles/Home.css"
import { handleViewItem, handlePurchase, handleAddToCart } from "../gtag/ga4events"

const Home = () => {

  const [count, setCount] = useState(0);

  useEffect(() => {

    const fetchProducts = async () => {
      fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => console.log(json));
    }

    fetchProducts();
  }, [])

  return (
    <div>
      <h1>Hello World!</h1>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Counter</button>
      <div className='events-container'>
        <button onClick={handleViewItem}>view_item</button>
        <button onClick={handleAddToCart}>add_to_cart</button>
        <button onClick={handlePurchase}>purchase</button>
      </div>
    </div>
  )
}

export default Home