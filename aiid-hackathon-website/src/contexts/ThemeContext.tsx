import React, { createContext, useContext, useMemo, useState } from 'react';

// 将类型设为文件内部类型，避免非组件导出
type Theme = 'light' | 'dark';

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    document.documentElement.setAttribute('data-theme', theme === 'light' ? 'dark' : 'light');
  };

  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

// 移除非组件导出的 hook，改为导出组件消费者
export const ThemeConsumer: React.FC<{ children: (value: ThemeContextValue) => React.ReactNode }> = ({ children }) => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('ThemeConsumer must be used within ThemeProvider');
  return <>{children(ctx)}</>;
};