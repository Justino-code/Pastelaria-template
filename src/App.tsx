// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { CartProvider } from './contexts/CartContext';
import { ThemeProvider } from './contexts/ThemeContext';
import Sidebar from './components/Sidebar';
import SplashScreen from './pages/SplashScreen';
import Vitrine from './pages/Vitrine';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <BrowserRouter>
          <Sidebar />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<SplashScreen />} />
              <Route path="/vitrine" element={<Vitrine />} />
              <Route path="/carrinho" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </div>
          <Toaster 
            position="top-right"
            toastOptions={{
              duration: 3000,
              style: {
                background: 'var(--bg-card)',
                color: 'var(--text-h)',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                padding: '12px 16px',
              },
              success: {
                iconTheme: {
                  primary: 'var(--success)',
                  secondary: 'white',
                },
              },
              error: {
                iconTheme: {
                  primary: 'var(--danger)',
                  secondary: 'white',
                },
              },
            }}
          />
        </BrowserRouter>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;