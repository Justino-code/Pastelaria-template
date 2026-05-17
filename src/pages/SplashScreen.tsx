// src/pages/SplashScreen.tsx (atualizado)
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SplashScreen: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/vitrine');
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="splash">
      <div className="splash-content">
        <div className="splash-logo">🥐</div>
        <h1>Mimo</h1>
        <p>Sabores que abraçam</p>
      </div>
    </div>
  );
};

export default SplashScreen;