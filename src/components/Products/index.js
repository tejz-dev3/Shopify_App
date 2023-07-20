import React from "react";
import './index.css'

function index({furniture}) {
  return (
    <div className="product">
        <img src={furniture.product_image} className="image"/>
        <h4>{furniture.product_name}</h4>
        <h5>{furniture.product_cost}</h5>
    </div>
  )
}

export default index