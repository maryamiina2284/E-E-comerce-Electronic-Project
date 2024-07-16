import React from 'react';
import { useParams } from 'react-router-dom';
import mockProducts from '../pages/mockProducts';

const ProductDetails = () => {
  const { productId } = useParams();
  const product = mockProducts.find(p => p.id === parseInt(productId));

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="container m-4">
      <div className="card mb-4">
        <img src={product.image} className="card-img-top" alt={product.name} />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description}</p>
          <p className="card-text"><strong>${product.price.toFixed(2)}</strong></p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
