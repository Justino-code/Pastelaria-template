<div align="center">
  <img src="src/assets/logo.svg" alt="Logo" width="80" />
  <h1>Pastelaria Template</h1>
  <p>Template básico para pequenas pastelarias e lanchonetes</p>
</div>

<br />

## 📋 Descrição

Template simples e funcional para estabelecimentos de pequeno porte que desejam ter um sistema digital de pedidos. Ideal para pastelarias, lanchonetes e cafeterias que estão começando no digital.

## 🚀 Tecnologias

- React 18 + TypeScript
- Vite
- React Router DOM
- Lucide React
- React Hot Toast
- LocalStorage

## 📦 Instalação

```bash
git clone https://github.com/justino-code/pastelaria-template.git
cd pastelaria-template
npm install
npm run dev
```

## 🎯 Funcionalidades

- Vitrine com filtros
- Indicador de stock
- Carrinho persistente
- Checkout (retirada/entrega)
- Dark/Light theme
- Responsivo

## 📁 Estrutura

```
src/
├── assets/          # Imagens e logo
├── components/      # Componentes
├── contexts/        # Context API
├── data/            # Produtos (mock)
├── pages/           # Páginas
├── styles/          # CSS
├── types/           # TypeScript
└── utils/           # Utilitários
```

## 🛠️ Scripts

```bash
npm run dev      # Desenvolvimento
npm run build    # Build produção
npm run preview  # Preview build
```

## 📱 Responsividade

| Tela | Comportamento |
|------|---------------|
| Desktop | Sidebar visível |
| Mobile | Sidebar oculta |

## 🔧 Como usar

### 1. Dados dos produtos (obrigatório)

Substitua os dados mockados por uma API real:

**Antes (`src/data/products.ts`):**
```ts
export const products: Product[] = [ ... ]
```

**Depois (buscando da API):**
```ts
export const products: Product[] = await fetch('/api/products').then(res => res.json())
```

### 2. Persistência do carrinho (opcional)

O template usa LocalStorage. Para enviar ao backend, modifique o `CartContext.tsx`:

```tsx
// Adicione esta função
const syncCartToServer = async (cart: CartItem[]) => {
  await fetch('/api/cart', { method: 'POST', body: JSON.stringify(cart) })
}

// Chame dentro do useEffect do carrinho
useEffect(() => {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart))
  syncCartToServer(cart) // adicione esta linha
}, [cart])
```

### 3. Checkout (recomendado)

No `handleSubmitOrder` do `Checkout.tsx`, troque a simulação por uma chamada real:

```tsx
// Antes (simulação)
await new Promise(resolve => setTimeout(resolve, 1500))

// Depois (API real)
const response = await fetch('/api/orders', { method: 'POST', body: JSON.stringify(order) })
```

### 4. Personalização visual

- Cores: `src/styles/variables.css`
- Logo: `src/assets/logo.svg`
- Informações da loja: `src/components/Sidebar.tsx`

## 📄 Licença

MIT