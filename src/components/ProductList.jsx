import React from 'react';
import ProductCard from './ProductCard.jsx';

function ProductList({ products, onDelete }) {
  if (products.length === 0) {
    return <p className="no-products">No products found. Try a different search or add a new product!</p>;
  }

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default ProductList;
