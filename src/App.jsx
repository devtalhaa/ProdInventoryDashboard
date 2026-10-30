import { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import SearchBar from './components/SearchBar.jsx';
import AddProductForm from './components/AddProductForm.jsx';
import ProductList from './components/ProductList.jsx';
import './App.css';

const initialProducts = [
  { id: 1, name: 'Wireless Mouse',      category: 'Electronics', price: 25.99, stock: 50 },
  { id: 2, name: 'Notebook (A4)',        category: 'Stationery',  price: 3.49,  stock: 200 },
  { id: 3, name: 'USB-C Hub',            category: 'Electronics', price: 49.99, stock: 30 },
  { id: 4, name: 'Coffee Mug',           category: 'Kitchen',     price: 12.00, stock: 75 },
  { id: 5, name: 'Mechanical Keyboard', category: 'Electronics', price: 89.99, stock: 20 },
];

function App() {
  const [products, setProducts]       = useState(initialProducts);
  const [searchQuery, setSearchQuery] = useState('');

  function handleAddProduct(newProduct) {
    setProducts([...products, newProduct]);
  }

  function handleDeleteProduct(id) {
    setProducts(products.filter((p) => p.id !== id));
  }

  const filteredProducts = products.filter((p) => {
    const query = searchQuery.toLowerCase();
    return (
      p.name.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query)
    );
  });

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
