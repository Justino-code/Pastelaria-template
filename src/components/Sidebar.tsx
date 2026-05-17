// src/components/Sidebar.tsx
import { 
  Clock, 
  MapPin, 
  Phone, 
  Gift,
  Timer,
  Award,
  CreditCard,
  Banknote,
  Smartphone,
  Star
} from 'lucide-react';
import { SocialIcon } from 'react-custom-social-icons';

const Sidebar = () => {
  return (
    <aside className="global-sidebar">
      <div className="sidebar-content">
        
        <div className="sidebar-header">
          <div className="sidebar-logo">M</div>
          <div>
            <h2>Mimo</h2>
            <p>Sabores que abraçam</p>
          </div>
        </div>

        <div className="sidebar-card">
          <h3>
            <Clock size={16} />
            Horário
          </h3>
          <ul className="hours-list">
            <li><span>Segunda - Sexta</span><span>08h - 20h</span></li>
            <li><span>Sábado</span><span>09h - 18h</span></li>
            <li className="today"><span>Domingo</span><span>09h - 14h</span></li>
          </ul>
        </div>

        <div className="sidebar-card">
          <h3>
            <Gift size={16} />
            Promoção
          </h3>
          <div className="promo-badge">-20% OFF</div>
          <p><strong>Coxinha + Suco Natural</strong></p>
          <p className="promo-price">1.200 Kz <span className="old-price">1.500 Kz</span></p>
          <div className="promo-footer">
            <Timer size={12} />
            <span>Válido hoje</span>
          </div>
        </div>

        <div className="sidebar-card">
          <h3>
            <Phone size={16} />
            Contato
          </h3>
          <div className="contact-item">
            <Phone size={14} />
            <span>923 456 789</span>
          </div>
          <div className="contact-item">
            <MapPin size={14} />
            <span>Luanda</span>
          </div>
        </div>

        <div className="sidebar-card">
          <h3>Redes Sociais</h3>
          <div className="sidebar-social">
            <SocialIcon network="instagram" size={36} shape="round" />
            <SocialIcon network="facebook" size={36} shape="round" />
            <SocialIcon network="whatsapp" size={36} shape="round" />
          </div>
        </div>

        <div className="sidebar-card">
          <h3>
            <Award size={16} />
            Fidelidade
          </h3>
          <p>A cada 10 compras, 1 grátis</p>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: '30%' }}></div>
          </div>
          <p className="progress-text">Faltam 7 compras</p>
        </div>

        <div className="sidebar-card">
          <h3>
            <CreditCard size={16} />
            Pagamento
          </h3>
          <div className="payment-methods">
            <div className="payment-item">
              <Banknote size={20} />
              <span>Numerário</span>
            </div>
            <div className="payment-item">
              <CreditCard size={20} />
              <span>Multicaixa</span>
            </div>
            <div className="payment-item">
              <Smartphone size={20} />
              <span>ATM</span>
            </div>
          </div>
        </div>

        <div className="sidebar-card">
          <h3>
            <Star size={16} />
            Avaliação
          </h3>
          <div className="rating">
            <div className="stars">
              <Star size={14} fill="#fbbf24" color="#fbbf24" />
              <Star size={14} fill="#fbbf24" color="#fbbf24" />
              <Star size={14} fill="#fbbf24" color="#fbbf24" />
              <Star size={14} fill="#fbbf24" color="#fbbf24" />
              <Star size={14} fill="#fbbf24" color="#fbbf24" />
            </div>
            <span className="rating-text">(128 avaliações)</span>
          </div>
          <p style={{ fontSize: '0.75rem' }}>4.9 · Excelente!</p>
        </div>

      </div>
    </aside>
  );
};

export default Sidebar;