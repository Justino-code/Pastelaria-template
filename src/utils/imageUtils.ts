// src/utils/imageUtils.ts

// Mapeamento de palavras-chave para IDs do Unsplash
const imageMap: Record<string, string> = {
  // SALGADOS
  'coxinha': '1601050690597-df0568f70950',
  'empada-frango': '1647540245408-171b9eba826e',
  'rissole-queijo': '1713517915303-ae3b3429f939',
  'folhado-frango': '1753826366766-b2aa6daba141',
  'pao-queijo': '1773399159457-b8e8ccdc980d',
  'croissant': '1651604033534-e66b281f1981',
  'pizza-slice': '1621998257812-20849f2491f3',
  'rissole-camarao': '1767974963436-2208b3553561',
  'folhado-calabresa': '1753826369014-7c288b8ad077',
  
  // DOCES
  'brigadeiro': '1702982852429-e0d0b27eb990',
  'cocada': '1745582763219-1a5259056ba3',
  'pudim': '1702728109878-c61a98d80491',
  'torta-limao': '1641848421776-dbb6426445b6',
  'cheesecake': '1708175313856-8573b2bf8a3a',
  'brownie': '1636743715220-d8f8dd900b87',
  'cookie': '1499636136210-6f4ee915583e',
  'donut': '1551024601-bec78aea704b',

  // BOLOS
  'bolo-aniversario': '1578985545062-69928b1d9587',
  'bolo-chocolate': '1617996884841-3949eaec3448',
  'bolo-baunilha': '1588195538326-c5b1e9f80a1b',
  'bolo-morango': '1648471233533-a13856a7f3ab',
  'bolo-coco': '1578985545062-69928b1d9587',
  'bolo-laranja': '1562440499-64c9a111f713',
  'bolo-limao': '1542210435-59f90e156f10?',
  'bolo-banana': '1571115177098-24ec42ed204d',
  'bolo-fuba': '1621303837174-89787a7d4729',
  'bolo-leite-ninho': '1724116379273-ba32b70d112c',
  'bolo-nutella': '1596194970481-2e6a33928361',

  // BEBIDAS
  'suco-natural': '1497534446932-c925b458314e',
  'suco-laranja': '1617108126666-3b4f0251913a',
  'suco-limao': '1534353473418-4cfa6c56fd38',
  'cafe-expresso': '1514432324607-a09d9b4aefdd',
  'cafe-com-leite': '1657969956482-d91b86099cba',
  'cappuccino': '1534778101976-62847782c213',
  'latte-macchiato': '1599398054066-846f28917f38',
  'mocha': '1618576230663-9714aecfb99a',
  'agua-mineral': '1591719482505-fcde0bdd0ed1',
  'agua-coco': '1711815122728-b370f7392f23',
  'milkshake-morango': '1553787499-6f9133860278',
  'milkshake-chocolate': '1689358459793-48a913791616'
};

// Imagem padrão caso não encontre o mapeamento
const DEFAULT_IMAGE_ID = '1601050690597-df0568f70950';

export const getProductImage = (keyword: string): string => {
  const imageId = imageMap[keyword] || DEFAULT_IMAGE_ID;
  return `https://images.unsplash.com/photo-${imageId}?w=400&h=400&fit=crop`;
};