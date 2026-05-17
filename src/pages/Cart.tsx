// src/pages/Cart.tsx
import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useCart } from '../contexts/CartContext';
import CartItem from '../components/CartItem';
import ThemeToggle from '../components/ThemeToggle';
import { ArrowLeft, ShoppingBag, Tag, ShoppingCart } from 'lucide-react';

const Cart: FC = () => {
  const navigate = useNavigate();
  const { cart, updateQuantity, removeFromCart, totalKz, totalItems } = useCart();
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const deliveryFee = 1000;
  const subtotal = totalKz;
  const total = subtotal + deliveryFee - discount;

  const handleApplyCoupon = () => {
    if (couponCode === 'MIMO10') {
      setDiscount(subtotal * 0.1);
      toast.success('Cupom MIMO10 aplicado! 10% de desconto', {
        icon: '🏷️',
        duration: 4000,
      });
    } else if (couponCode === 'MIMO20') {
      setDiscount(subtotal * 0.2);
      toast.success('Cupom MIMO20 aplicado! 20% de desconto', {
        icon: '🏷️',
        duration: 4000,
      });
    } else {
      toast.error('Cupom inválido! Tente MIMO10 ou MIMO20');
    }
    setCouponCode('');
  };

  if (cart.length === 0) {
    return (
      <div className="cart-container">
        <header className="cart-header">
          <button onClick={() => navigate('/vitrine')} className="back-btn">
            <ArrowLeft size={18} /> Voltar
          </button>
          <h2>Meu Carrinho</h2>
          <ThemeToggle />
        </header>
        
        <div className="cart-content">
          <div className="empty-cart">
            <ShoppingCart size={80} className="empty-cart-icon" strokeWidth={1} />
            <h3>Carrinho vazio</h3>
            <p>Parece que você ainda não adicionou nenhum produto.</p>
            <button 
              onClick={() => navigate('/vitrine')}
              className="continue-shopping-btn"
            >
              Ver produtos
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <header className="cart-header">
        <button onClick={() => navigate('/vitrine')} className="back-btn">
          <ArrowLeft size={18} /> Voltar
        </button>
        <h2>Meu Carrinho</h2>
        <ThemeToggle />
      </header>

      <div className="cart-content">
        <div className="cart-left">
          <div className="cart-header-info">
            <h2>
              <ShoppingBag size={20} style={{ display: 'inline', marginRight: '8px' }} />
              Seus Pedidos
            </h2>
            <span className="cart-count">{totalItems} {totalItems === 1 ? 'item' : 'itens'}</span>
          </div>

          <div className="cart-items">
            {cart.map(item => (
              <CartItem
                key={item.id}
                item={item}
                onUpdateQuantity={updateQuantity}
                onRemove={removeFromCart}
              />
            ))}
          </div>
        </div>

        <div className="cart-right">
          <div className="cart-summary">
            <h3 className="summary-title">Resumo do Pedido</h3>
            
            <div className="summary-details">
              <div className="summary-row subtotal">
                <span>Subtotal</span>
                <span>{subtotal} Kz</span>
              </div>
              <div className="summary-row delivery">
                <span>Entrega</span>
                <span>{deliveryFee} Kz</span>
              </div>
              {discount > 0 && (
                <div className="summary-row" style={{ color: 'var(--success)' }}>
                  <span>Desconto</span>
                  <span>- {discount} Kz</span>
                </div>
              )}
              <div className="summary-row total">
                <strong>Total</strong>
                <strong className="summary-value">{total} Kz</strong>
              </div>
            </div>

            <div className="coupon-section">
              <div className="coupon-title">
                <Tag size={14} style={{ display: 'inline', marginRight: '6px' }} />
                Cupom de desconto
              </div>
              <div className="coupon-input-group">
                <input
                  type="text"
                  placeholder="Digite seu cupom"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="coupon-input"
                />
                <button onClick={handleApplyCoupon} className="coupon-btn">
                  Aplicar
                </button>
              </div>
              <p style={{ fontSize: '0.7rem', marginTop: '8px', color: 'var(--text)' }}>
                Cupons: MIMO10 (10%) | MIMO20 (20%)
              </p>
            </div>

            <button 
              onClick={() => navigate('/checkout')}
              className="checkout-btn"
            >
              Finalizar Pedido
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;