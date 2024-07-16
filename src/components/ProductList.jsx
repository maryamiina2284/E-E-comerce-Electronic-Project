import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../context/CartContext';
import mockProducts from '../pages/mockProducts';
import ProductCard from './ProductCard';

const ProductList = () => {
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState(mockProducts);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('default');

  useEffect(() => {
    let filteredProducts = mockProducts;

    if (searchTerm) {
      filteredProducts = filteredProducts.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (sortOption === 'priceLowHigh') {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'priceHighLow') {
      filteredProducts.sort((a, b) => b.price - a.price);
    }

    setProducts(filteredProducts);
  }, [searchTerm, sortOption]);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Products</h2>
      <div className="d-flex justify-content-between mb-4">
        <input
          type="text"
          className="form-control me-2"
          placeholder="Search products..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <select
          className="form-select"
          value={sortOption}
          onChange={e => setSortOption(e.target.value)}
        >
          <option value="default">Sort by</option>
          <option value="priceLowHigh">Price: Low to High</option>
          <option value="priceHighLow">Price: High to Low</option>
        </select>
      </div>
      <div className="row">
        {products.map(product => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
