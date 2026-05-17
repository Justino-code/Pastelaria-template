// src/components/StockBadge.tsx
import { FC } from 'react';

interface StockBadgeProps {
  stock: boolean;
  freshOut: boolean;
}

const StockBadge: FC<StockBadgeProps> = ({ stock, freshOut }) => {
  if (!stock) {
    return <span className="badge out">❌ Esgotado</span>;
  }
  if (freshOut) {
    return <span className="badge fresh">🔥 Saído agora</span>;
  }
  return <span className="badge available">✅ Disponível</span>;
};

export default StockBadge;
