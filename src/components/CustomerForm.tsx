// src/components/CustomerForm.tsx
import { FC, ChangeEvent } from 'react';
import { CustomerInfo, DeliveryMethod } from '../types';

interface CustomerFormProps {
  customerInfo: CustomerInfo;
  deliveryMethod: DeliveryMethod;
  onChange: (info: Partial<CustomerInfo>) => void;
}

const CustomerForm: FC<CustomerFormProps> = ({ 
  customerInfo, 
  deliveryMethod, 
  onChange 
}) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onChange({ [name]: value });
  };

  return (
    <div className="customer-form">
      <h3>Seus dados</h3>
      
      <div className="form-group">
        <label htmlFor="name">Nome completo *</label>
        <input
          type="text"
          id="name"
          name="name"
          value={customerInfo.name}
          onChange={handleInputChange}
          placeholder="Digite seu nome"
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="phone">Telefone *</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={customerInfo.phone}
          onChange={handleInputChange}
          placeholder="923 456 789"
          required
        />
      </div>
      
      {deliveryMethod === 'delivery' && (
        <div className="form-group">
          <label htmlFor="address">Endereço completo *</label>
          <input
            type="text"
            id="address"
            name="address"
            value={customerInfo.address || ''}
            onChange={handleInputChange}
            placeholder="Rua, número, bairro, referência"
            required
          />
        </div>
      )}
    </div>
  );
};

export default CustomerForm;