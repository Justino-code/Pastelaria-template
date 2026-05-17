// src/pages/Vitrine.tsx (simplificado)
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import FilterButtons from '../components/FilterButtons';
import ThemeToggle from '../components/ThemeToggle';
import { FilterCategory } from '../types';
import { useCart } from '../contexts/CartContext';
import Logo from '../components/Logo';

const Vitrine = () => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('todos');
  const { totalItems } = useCart();
  const navigate = useNavigate();

  const filteredProducts = products.filter(product => {
    if (activeFilter === 'todos') return true;
    return product.category === activeFilter;
  });

  return (
    <div className="vitrine-container">
      <header className="vitrine-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Logo variant="header" />
          <h1>Mimo</h1>
        </div>
        <div className="header-actions">
          <ThemeToggle />
          <button
            className="cart-icon-btn"
            onClick={() => navigate('/carrinho')}
          >
            <ShoppingBag size={20} />
            {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
          </button>
        </div>
      </header>

      <FilterButtons
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />

      <div className="products-grid">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="empty-state">
          <p>Nenhum produto encontrado</p>
        </div>
      )}
    </div>
  );
};

export default Vitrine;