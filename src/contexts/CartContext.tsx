// src/contexts/CartContext.tsx
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import toast from 'react-hot-toast';
import { Product, CartItem, CartContextType } from '../types';

const CartContext = createContext<CartContextType | undefined>(undefined);
const CART_STORAGE_KEY = 'mimo_cart';

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const storedCart = localStorage.getItem(CART_STORAGE_KEY);
    if (storedCart) {
      try {
        return JSON.parse(storedCart);
      } catch (error) {
        console.error('Erro ao carregar carrinho:', error);
        return [];
      }
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product): void => {
    if (!product.stock) {
      toast.error(`${product.name} está esgotado!`, {
        icon: '❌',
      });
      return;
    }
    
    setCart((prev) => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        toast.success(`+1 ${product.name} adicionado!`, {
          icon: '🛒',
        });
        return prev.map(item =>
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      toast.success(`${product.name} adicionado ao carrinho!`, {
        icon: '🎉',
      });
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number): void => {
    const product = cart.find(item => item.id === id);
    setCart(prev => prev.filter(item => item.id !== id));
    toast.custom((t) => (
      <div className="toast-undo">
        <span>{product?.name} removido</span>
        <button 
          onClick={() => {
            if (product) {
              setCart(prev => [...prev, { ...product, quantity: product.quantity }]);
              toast.dismiss(t);
              toast.success(`${product.name} restaurado!`);
            }
          }}
        >
          Desfazer
        </button>
      </div>
    ), { duration: 4000 });
  };

  const updateQuantity = (id: number, quantity: number): void => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCart(prev => 
      prev.map(item => 
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = (): void => {
    setCart([]);
    localStorage.removeItem(CART_STORAGE_KEY);
    toast.success('Carrinho limpo!', { icon: '🗑️' });
  };

  const totalKz = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider value={{ 
      cart, 
      addToCart, 
      removeFromCart, 
      updateQuantity, 
      clearCart,
      totalKz, 
      totalItems 
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart deve ser usado dentro de CartProvider');
  }
  return context;
};