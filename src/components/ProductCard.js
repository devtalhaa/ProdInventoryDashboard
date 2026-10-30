import React from 'react';

function ProductCard({ product, onDelete }) {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Stock:</strong> {product.stock} units</p>
      <button className="delete-btn" onClick={() => onDelete(product.id)}>
        🗑️ Delete
      </button>
    </div>
  );
}

export default ProductCard;
