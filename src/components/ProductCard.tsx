// src/components/ProductCard.tsx
import { FC } from 'react';
import { Product } from '../types';
import StockBadge from './StockBadge';
import { useCart } from '../contexts/CartContext';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        <img 
          src={product.image} 
          alt={product.name}
          className="product-image"
        />
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="price">{product.price.toLocaleString()} Kz</p>
        <StockBadge stock={product.stock} freshOut={product.freshOut} />
        <button 
          onClick={() => addToCart(product)}
          disabled={!product.stock}
          className="add-button"
        >
          <ShoppingCart size={18} />
          {product.stock ? 'Adicionar' : 'Esgotado'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;