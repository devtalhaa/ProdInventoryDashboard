import { useState } from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import AddProductForm from './components/AddProductForm';
import ProductList from './components/ProductList';
import './App.css';

// ── Initial dummy products ──────────────────────────────────────────────────
const initialProducts = [
  { id: 1, name: 'Wireless Mouse',      category: 'Electronics', price: 25.99, stock: 50 },
  { id: 2, name: 'Notebook (A4)',        category: 'Stationery',  price: 3.49,  stock: 200 },
  { id: 3, name: 'USB-C Hub',            category: 'Electronics', price: 49.99, stock: 30 },
  { id: 4, name: 'Coffee Mug',           category: 'Kitchen',     price: 12.00, stock: 75 },
  { id: 5, name: 'Mechanical Keyboard', category: 'Electronics', price: 89.99, stock: 20 },
];

function App() {
  // ── State ──────────────────────────────────────────────────────────────────
  const [products, setProducts]       = useState(initialProducts);
  const [searchQuery, setSearchQuery] = useState('');

  // ── Add a new product ──────────────────────────────────────────────────────
  function handleAddProduct(newProduct) {
    setProducts([...products, newProduct]);
  }

  // ── Delete a product by id ─────────────────────────────────────────────────
  function handleDeleteProduct(id) {
    setProducts(products.filter((p) => p.id !== id));
  }

  // ── Live search filter (name OR category, case-insensitive) ───────────────
  const filteredProducts = products.filter((p) => {
    const query = searchQuery.toLowerCase();
    return (
      p.name.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query)
    );
  });

  // ── Summary numbers for the Navbar ────────────────────────────────────────
  const totalStock = products.reduce((sum, p) => sum + p.stock, 0);

  return (
    <div>
      <Navbar totalProducts={products.length} totalStock={totalStock} />

      <div className="container">
        <AddProductForm onAdd={handleAddProduct} />
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <ProductList products={filteredProducts} onDelete={handleDeleteProduct} />
      </div>
    </div>
  );
}

export default App;
