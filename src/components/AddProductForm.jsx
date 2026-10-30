import React, { useState } from 'react';
import Dialog from './Dialog.jsx';

function AddProductForm({ onAdd }) {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    stock: '',
  });

  const [dialog, setDialog] = useState({ isOpen: false, message: '' });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!formData.name || !formData.category || !formData.price || !formData.stock) {
      setDialog({ isOpen: true, message: 'Please fill in all fields!' });
      return;
    }

    const newProduct = {
      id: Date.now(),
      name: formData.name,
      category: formData.category,
      price: parseFloat(formData.price),
      stock: parseInt(formData.stock),
    };

    onAdd(newProduct);
    setFormData({ name: '', category: '', price: '', stock: '' });
  }

  return (
    <div className="form-container">
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="category"
          placeholder="Category (e.g. Electronics)"
          value={formData.category}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Price (e.g. 29.99)"
          value={formData.price}
          onChange={handleChange}
          min="0"
          step="0.01"
        />
        <input
          type="number"
          name="stock"
          placeholder="Stock Quantity"
          value={formData.stock}
          onChange={handleChange}
          min="0"
        />
        <button type="submit">➕ Add Product</button>
      </form>

      <Dialog
        isOpen={dialog.isOpen}
        message={dialog.message}
        type="alert"
        onClose={() => setDialog({ isOpen: false, message: '' })}
      />
    </div>
  );
}

export default AddProductForm;
