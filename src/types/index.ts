// src/types/index.ts
export interface Product {
  id: number;
  name: string;
  price: number;        // em Kwanzas (Kz)
  category: 'salgados' | 'doces' | 'bolos' | 'bebidas';
  stock: boolean;
  freshOut: boolean;
  image: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export type FilterCategory = Product['category'] | 'todos';

export interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  totalKz: number;
  totalItems: number;
}

export type DeliveryMethod = 'pickup' | 'delivery';

export interface CustomerInfo {
  name: string;
  phone: string;
  address?: string;
  deliveryMethod: DeliveryMethod;
}

export interface Order extends CustomerInfo {
  id: string;
  items: CartItem[];
  subtotal: number;
  deliveryFee: number;
  total: number;
  createdAt: Date;
  status: 'pending' | 'confirmed' | 'preparing' | 'ready' | 'delivered';
}
