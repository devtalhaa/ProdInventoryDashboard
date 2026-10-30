import React, { useState } from 'react';
import Dialog from './Dialog.jsx';

function ProductCard({ product, onDelete }) {
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Stock:</strong> {product.stock} units</p>
      <button className="delete-btn" onClick={() => setShowConfirm(true)}>
        🗑️ Delete
      </button>

      <Dialog
        isOpen={showConfirm}
        message={`Are you sure you want to delete "${product.name}"?`}
        type="confirm"
        onClose={() => setShowConfirm(false)}
        onConfirm={() => {
          setShowConfirm(false);
          onDelete(product.id);
        }}
      />
    </div>
  );
}

export default ProductCard;
