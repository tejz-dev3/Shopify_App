import React, { useEffect, useState } from 'react';
import ProductList from '../ProductList';
import './index.css'

function Index() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://products-8dk6.onrender.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log('error in fetching API: ', error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((furniture) =>
    furniture.product_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className='search-container'>
        <input type='search' placeholder='Search products' value={searchTerm}
        onChange={handleSearch} className='search-bar'/>
      </div>
        <ProductList products={filteredProducts} />
        </div>
      
    
  );
}

export default Index;
