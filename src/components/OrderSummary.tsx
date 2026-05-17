// src/components/OrderSummary.tsx
import { FC } from 'react';
import { CartItem } from '../types';

interface OrderSummaryProps {
  items: CartItem[];
  subtotal: number;
  deliveryFee: number;
  deliveryMethod: 'pickup' | 'delivery';
}

const OrderSummary: FC<OrderSummaryProps> = ({ 
  items, 
  subtotal, 
  deliveryFee, 
  deliveryMethod 
}) => {
  const total = deliveryMethod === 'pickup' ? subtotal : subtotal + deliveryFee;

  return (
    <div className="order-summary">
      <h3>Resumo do Pedido</h3>
      
      <div className="summary-items">
        {items.map(item => (
          <div key={item.id} className="summary-item">
            <span>
              {item.quantity}x {item.name}
            </span>
            <span>{item.price * item.quantity} Kz</span>
          </div>
        ))}
      </div>
      
      <div className="summary-divider"></div>
      
      <div className="summary-line">
        <span>Subtotal</span>
        <span>{subtotal} Kz</span>
      </div>
      
      {deliveryMethod === 'delivery' && (
        <div className="summary-line">
          <span>Taxa de entrega</span>
          <span>{deliveryFee} Kz</span>
        </div>
      )}
      
      <div className="summary-line total">
        <strong>Total</strong>
        <strong className="total-value">{total} Kz</strong>
      </div>
    </div>
  );
};

export default OrderSummary;