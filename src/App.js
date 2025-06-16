import React from 'react'
import Cart from './Cart'
import { CartProvider } from './CartContext'

export default function App() {
  return (
    <div>
      <CartProvider> 
      <Cart/>
      </CartProvider>
    </div>
  )
}
