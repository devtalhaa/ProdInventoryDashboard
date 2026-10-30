import React, { useState } from 'react';

function AddProductForm({ onAdd }) {
  // Controlled form state — one object for all fields
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    stock: '',
  });

  // Update the right field when user types
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault(); // stop page reload

    // Basic validation
    if (!formData.name || !formData.category || !formData.price || !formData.stock) {
      alert('Please fill in all fields!');
      return;
    }

    // Build the new product object
    const newProduct = {
      id: Date.now(),                    // simple unique id
      name: formData.name,
      category: formData.category,
      price: parseFloat(formData.price),
      stock: parseInt(formData.stock),
    };

    onAdd(newProduct); // send it up to App

    // Reset the form
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
    </div>
  );
}

export default AddProductForm;
