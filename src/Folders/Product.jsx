import React from 'react'
import HOC from './HOC'

function Product(props) {
    console.log(props)
  return (
    <>
    <h3>Product</h3>
   </>
  )
}

export default HOC(Product)
