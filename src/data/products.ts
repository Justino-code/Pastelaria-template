// src/data/products.ts
import { Product } from '../types';
import { getProductImage } from '../utils/imageUtils';

interface ProductData {
  name: string;
  price: number;
  category: 'salgados' | 'doces' | 'bolos' | 'bebidas';
  imageKeyword: string;
  stock: boolean;
  freshOut: boolean;
}

// Apenas produtos que têm imagem no mapeamento (40 produtos)
const productsData: ProductData[] = [
  // SALGADOS (9 produtos) - Preços entre 2.000 a 15.000 Kz
  { name: 'Coxinha', price: 2500, category: 'salgados', imageKeyword: 'coxinha', stock: true, freshOut: true },
  { name: 'Empada de Frango', price: 2800, category: 'salgados', imageKeyword: 'empada-frango', stock: true, freshOut: false },
  { name: 'Rissole de Queijo', price: 3000, category: 'salgados', imageKeyword: 'rissole-queijo', stock: true, freshOut: false },
  { name: 'Folhado de Frango', price: 3500, category: 'salgados', imageKeyword: 'folhado-frango', stock: true, freshOut: false },
  { name: 'Pão de Queijo', price: 2000, category: 'salgados', imageKeyword: 'pao-queijo', stock: true, freshOut: true },
  { name: 'Croissant', price: 3200, category: 'salgados', imageKeyword: 'croissant', stock: true, freshOut: false },
  { name: 'Pizza Slice', price: 4500, category: 'salgados', imageKeyword: 'pizza-slice', stock: true, freshOut: false },
  { name: 'Rissole de Camarão', price: 12000, category: 'salgados', imageKeyword: 'rissole-camarao', stock: false, freshOut: false },
  { name: 'Folhado de Calabresa', price: 3800, category: 'salgados', imageKeyword: 'folhado-calabresa', stock: true, freshOut: false },

  // DOCES (8 produtos) - Preços entre 1.000 a 10.000 Kz
  { name: 'Brigadeiro', price: 1500, category: 'doces', imageKeyword: 'brigadeiro', stock: true, freshOut: true },
  { name: 'Cocada', price: 1800, category: 'doces', imageKeyword: 'cocada', stock: true, freshOut: false },
  { name: 'Pudim', price: 3500, category: 'doces', imageKeyword: 'pudim', stock: true, freshOut: false },
  { name: 'Torta de Limão', price: 4500, category: 'doces', imageKeyword: 'torta-limao', stock: true, freshOut: false },
  { name: 'Cheesecake', price: 6500, category: 'doces', imageKeyword: 'cheesecake', stock: true, freshOut: false },
  { name: 'Brownie', price: 2500, category: 'doces', imageKeyword: 'brownie', stock: true, freshOut: true },
  { name: 'Cookie', price: 1200, category: 'doces', imageKeyword: 'cookie', stock: true, freshOut: false },
  { name: 'Donut', price: 2000, category: 'doces', imageKeyword: 'donut', stock: true, freshOut: false },

  // BOLOS (11 produtos) - Preços entre 10.000 a 60.000 Kz
  { name: 'Bolo de Aniversário', price: 25000, category: 'bolos', imageKeyword: 'bolo-aniversario', stock: true, freshOut: false },
  { name: 'Bolo de Chocolate', price: 32000, category: 'bolos', imageKeyword: 'bolo-chocolate', stock: true, freshOut: true },
  { name: 'Bolo de Baunilha', price: 22000, category: 'bolos', imageKeyword: 'bolo-baunilha', stock: true, freshOut: false },
  { name: 'Bolo de Morango', price: 28000, category: 'bolos', imageKeyword: 'bolo-morango', stock: true, freshOut: false },
  { name: 'Bolo de Coco', price: 26000, category: 'bolos', imageKeyword: 'bolo-coco', stock: true, freshOut: false },
  { name: 'Bolo de Laranja', price: 18000, category: 'bolos', imageKeyword: 'bolo-laranja', stock: true, freshOut: false },
  { name: 'Bolo de Limão', price: 19000, category: 'bolos', imageKeyword: 'bolo-limao', stock: true, freshOut: false },
  { name: 'Bolo de Banana', price: 17000, category: 'bolos', imageKeyword: 'bolo-banana', stock: true, freshOut: false },
  { name: 'Bolo de Fubá', price: 15000, category: 'bolos', imageKeyword: 'bolo-fuba', stock: true, freshOut: false },
  { name: 'Bolo de Leite Ninho', price: 45000, category: 'bolos', imageKeyword: 'bolo-leite-ninho', stock: true, freshOut: false },
  { name: 'Bolo de Nutella', price: 55000, category: 'bolos', imageKeyword: 'bolo-nutella', stock: true, freshOut: false },

  // BEBIDAS (12 produtos) - Preços entre 1.000 a 5.000 Kz
  { name: 'Suco Natural', price: 2500, category: 'bebidas', imageKeyword: 'suco-natural', stock: true, freshOut: true },
  { name: 'Suco de Laranja', price: 2000, category: 'bebidas', imageKeyword: 'suco-laranja', stock: true, freshOut: false },
  { name: 'Suco de Limão', price: 1800, category: 'bebidas', imageKeyword: 'suco-limao', stock: true, freshOut: false },
  { name: 'Café Expresso', price: 1500, category: 'bebidas', imageKeyword: 'cafe-expresso', stock: true, freshOut: false },
  { name: 'Café com Leite', price: 2200, category: 'bebidas', imageKeyword: 'cafe-com-leite', stock: true, freshOut: false },
  { name: 'Cappuccino', price: 3200, category: 'bebidas', imageKeyword: 'cappuccino', stock: true, freshOut: false },
  { name: 'Latte Macchiato', price: 3500, category: 'bebidas', imageKeyword: 'latte-macchiato', stock: true, freshOut: false },
  { name: 'Mocha', price: 3800, category: 'bebidas', imageKeyword: 'mocha', stock: true, freshOut: false },
  { name: 'Água Mineral', price: 1000, category: 'bebidas', imageKeyword: 'agua-mineral', stock: true, freshOut: false },
  { name: 'Água de Coco', price: 2800, category: 'bebidas', imageKeyword: 'agua-coco', stock: true, freshOut: true },
  { name: 'Milkshake de Morango', price: 4500, category: 'bebidas', imageKeyword: 'milkshake-morango', stock: true, freshOut: false },
  { name: 'Milkshake de Chocolate', price: 4500, category: 'bebidas', imageKeyword: 'milkshake-chocolate', stock: true, freshOut: false }
];

export const products: Product[] = productsData.map((item, index) => ({
  id: index + 1,
  name: item.name,
  price: item.price,
  category: item.category,
  stock: item.stock,
  freshOut: item.freshOut,
  image: getProductImage(item.imageKeyword)
}));