import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img src={product.image} className="card-img-top" width={100} height={200} alt={product.name} />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description}</p>
          <p className="card-text"><strong>${product.price.toFixed(2)}</strong></p>
          <Link to={`/product/${product.id}`} className="btn btn-secondary me-2">
            View Details
          </Link>
          <button className="btn btn-primary" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
