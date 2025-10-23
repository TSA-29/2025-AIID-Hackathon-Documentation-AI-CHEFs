import React, { createContext, useContext, useMemo, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// 仅在文件内部声明类型，避免非组件导出
interface NavigationContextValue {
  activePath: string;
  setActivePath: (path: string) => void;
}

const NavigationContext = createContext<NavigationContextValue | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const [activePath, setActivePath] = useState<string>(location.pathname);

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location.pathname]);

  const value = useMemo(() => ({ activePath, setActivePath }), [activePath]);

  return <NavigationContext.Provider value={value}>{children}</NavigationContext.Provider>;
};

// 移除 hook 导出，改为导出 Consumer 组件，满足“仅导出组件”的要求
export const NavigationConsumer: React.FC<{ children: (value: NavigationContextValue) => React.ReactNode }> = ({ children }) => {
  const ctx = useContext(NavigationContext);
  if (!ctx) throw new Error('NavigationConsumer must be used within NavigationProvider');
  return <>{children(ctx)}</>;
};