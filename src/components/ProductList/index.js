
import React from "react";
import Products from "../Products";
import './index.css'

function index({products}) {
  return (
    <div className="product-list">
        {products.map(furniture => 
        <Products key={furniture.id} furniture={furniture}/>
        )}
    </div>
  )
}

export default index

