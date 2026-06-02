import { useState, useEffect } from 'react';

export function useTheme() {
  const getInitialTheme = () => {
    const stored = localStorage.getItem('qm-theme');
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  };

  const [theme, setTheme] = useState(() => {
    // SSR-safe: fallback to 'dark' if window is not available
    if (typeof window === 'undefined') return 'dark';
    return getInitialTheme();
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('qm-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'));

  return { theme, toggleTheme };
}
