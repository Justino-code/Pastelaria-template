// src/components/CartItem.tsx
import { FC } from 'react';
import { CartItem as CartItemType } from '../types';
import { Trash2, Plus, Minus } from 'lucide-react';

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemove: (id: number) => void;
}

const CartItem: FC<CartItemProps> = ({ item, onUpdateQuantity, onRemove }) => {
  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img src={item.image} alt={item.name} />
      </div>
      
      <div className="cart-item-details">
        <h3>{item.name}</h3>
        <p className="cart-item-price">{item.price} Kz</p>
        
        <div className="cart-item-actions">
          <div className="quantity-controls">
            <button 
              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
              className="qty-btn"
              aria-label="Diminuir quantidade"
            >
              <Minus size={16} />
            </button>
            <span className="quantity">{item.quantity}</span>
            <button 
              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
              className="qty-btn"
              aria-label="Aumentar quantidade"
            >
              <Plus size={16} />
            </button>
          </div>
          
          <button 
            onClick={() => onRemove(item.id)}
            className="remove-btn"
            aria-label="Remover item"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
      
      <div className="cart-item-subtotal">
        <span className="subtotal-label">Subtotal</span>
        <strong>{item.price * item.quantity} Kz</strong>
      </div>
    </div>
  );
};

export default CartItem;