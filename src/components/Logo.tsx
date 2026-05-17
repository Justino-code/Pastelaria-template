// src/components/Logo.tsx
import { FC, useEffect, useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import logoSvg from '../assets/logo.svg';
import logoDarkSvg from '../assets/logo-dark.svg';

interface LogoProps {
  size?: number;
  variant?: 'default' | 'sidebar' | 'header';
}

const Logo: FC<LogoProps> = ({ size = 40, variant = 'default' }) => {
  const { theme } = useTheme();
  const [currentLogoSrc, setCurrentLogoSrc] = useState(logoSvg);

  useEffect(() => {
    setCurrentLogoSrc(theme === 'dark' ? logoDarkSvg : logoSvg);
  }, [theme]);

  const getSize = () => {
    if (variant === 'sidebar') return 48;
    if (variant === 'header') return 36;
    return size;
  };

  const actualSize = getSize();

  return (
    <img
      src={currentLogoSrc}
      alt="Mimo Logo"
      width={actualSize}
      height={actualSize}
      className={`logo logo-${variant}`}
      style={{
        display: 'inline-block',
        objectFit: 'contain'
      }}
    />
  );
};

export default Logo;