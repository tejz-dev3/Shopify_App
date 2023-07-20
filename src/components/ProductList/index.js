// import React from 'react'
// import Products from '../Products'


// function index({products}) {
//   return (
//     <div>
//       {products.map(item =>   
//         <Products key = {item.id} item={item} />
//       )}
//     </div>
//   )
// }

// export default index



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

