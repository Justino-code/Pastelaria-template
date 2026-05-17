// src/components/DeliveryMethodSelector.tsx
import { FC } from 'react';
import { DeliveryMethod } from '../types';
import { Store, Truck } from 'lucide-react';

interface DeliveryMethodSelectorProps {
  selectedMethod: DeliveryMethod;
  onMethodChange: (method: DeliveryMethod) => void;
}

const DeliveryMethodSelector: FC<DeliveryMethodSelectorProps> = ({ 
  selectedMethod, 
  onMethodChange 
}) => {
  return (
    <div className="delivery-methods">
      <h3>Como deseja receber seu pedido?</h3>
      <div className="method-buttons">
        <button
          className={`method-btn ${selectedMethod === 'pickup' ? 'active' : ''}`}
          onClick={() => onMethodChange('pickup')}
        >
          <Store size={24} />
          <div>
            <strong>Levantar na Loja</strong>
            <p>Retire no balcão • Grátis</p>
          </div>
        </button>
        
        <button
          className={`method-btn ${selectedMethod === 'delivery' ? 'active' : ''}`}
          onClick={() => onMethodChange('delivery')}
        >
          <Truck size={24} />
          <div>
            <strong>Entrega ao Domicílio</strong>
            <p>Entregamos na sua casa • 1.000 Kz</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default DeliveryMethodSelector;