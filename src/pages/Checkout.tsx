// src/pages/Checkout.tsx
import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useCart } from '../contexts/CartContext';
import DeliveryMethodSelector from '../components/DeliveryMethodSelector';
import CustomerForm from '../components/CustomerForm';
import OrderSummary from '../components/OrderSummary';
import ThemeToggle from '../components/ThemeToggle';
import { ArrowLeft, CheckCircle, MapPin, Truck } from 'lucide-react';
import { DeliveryMethod, CustomerInfo } from '../types';

const Checkout: FC = () => {
  const navigate = useNavigate();
  const { cart, totalKz, clearCart } = useCart();
  
  const [deliveryMethod, setDeliveryMethod] = useState<DeliveryMethod>('pickup');
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    name: '',
    phone: '',
    address: '',
    deliveryMethod: 'pickup'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [orderId, setOrderId] = useState('');

  const deliveryFee = 1000;
  const subtotal = totalKz;
  const total = deliveryMethod === 'pickup' ? subtotal : subtotal + deliveryFee;

  // Redirecionar se carrinho vazio
  if (cart.length === 0 && !showSuccess) {
    navigate('/vitrine');
    return null;
  }

  const handleCustomerInfoChange = (info: Partial<CustomerInfo>) => {
    setCustomerInfo(prev => ({ ...prev, ...info, deliveryMethod }));
  };

  const handleDeliveryMethodChange = (method: DeliveryMethod) => {
    setDeliveryMethod(method);
    setCustomerInfo(prev => ({ ...prev, deliveryMethod: method }));
  };

  const handleSubmitOrder = async () => {
    // Validação básica
    if (!customerInfo.name.trim()) {
      toast.error('Por favor, digite seu nome');
      return;
    }
    if (!customerInfo.phone.trim()) {
      toast.error('Por favor, digite seu telefone');
      return;
    }
    if (deliveryMethod === 'delivery' && !customerInfo.address?.trim()) {
      toast.error('Por favor, digite seu endereço completo');
      return;
    }

    setIsSubmitting(true);

    // Simular envio do pedido (API call)
    await new Promise(resolve => setTimeout(resolve, 1500));

    const newOrderId = `MIMO-${Date.now()}`;
    setOrderId(newOrderId);

    const order = {
      id: newOrderId,
      items: cart,
      customerInfo: { ...customerInfo, deliveryMethod },
      subtotal,
      deliveryFee: deliveryMethod === 'delivery' ? deliveryFee : 0,
      total,
      createdAt: new Date(),
      status: 'confirmed'
    };

    // Salvar no localStorage para histórico
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));

    // Limpar carrinho e mostrar sucesso
    clearCart();
    setIsSubmitting(false);
    setShowSuccess(true);
    
    toast.success('Pedido realizado com sucesso!', {
      duration: 4000,
    });
  };

  if (showSuccess) {
    return (
      <div className="checkout-container">
        <header className="checkout-header">
          <button onClick={() => navigate('/vitrine')} className="back-btn">
            <ArrowLeft size={18} /> Voltar
          </button>
          <h2>Pedido Confirmado</h2>
          <ThemeToggle />
        </header>
        
        <div className="success-content">
          <CheckCircle size={80} className="success-icon" />
          <h2>Pedido realizado com sucesso!</h2>
          <p>Em breve você receberá a confirmação por WhatsApp.</p>
          <div className="order-info-card">
            <strong>Número do pedido:</strong>
            <code>{orderId}</code>
            <p className="order-message">
              {deliveryMethod === 'pickup' ? (
                <>
                  <MapPin size={14} />
                  Retire seu pedido na nossa loja
                </>
              ) : (
                <>
                  <Truck size={14} />
                  Seu pedido está a caminho
                </>
              )}
            </p>
          </div>
          <button 
            onClick={() => navigate('/vitrine')}
            className="back-to-shop-btn"
          >
            Voltar à Vitrina
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <header className="checkout-header">
        <button onClick={() => navigate('/carrinho')} className="back-btn">
          <ArrowLeft size={18} /> Voltar
        </button>
        <h2>Finalizar Pedido</h2>
        <ThemeToggle />
      </header>

      <div className="checkout-content">
        <div className="checkout-main">
          <DeliveryMethodSelector 
            selectedMethod={deliveryMethod}
            onMethodChange={handleDeliveryMethodChange}
          />
          
          <CustomerForm 
            customerInfo={customerInfo}
            deliveryMethod={deliveryMethod}
            onChange={handleCustomerInfoChange}
          />
        </div>

        <div className="checkout-sidebar">
          <OrderSummary 
            items={cart}
            subtotal={subtotal}
            deliveryFee={deliveryFee}
            deliveryMethod={deliveryMethod}
          />
          
          <button 
            onClick={handleSubmitOrder}
            disabled={isSubmitting}
            className="confirm-order-btn"
          >
            {isSubmitting ? 'Processando...' : 'Confirmar Pedido'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;