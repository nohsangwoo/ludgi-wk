'use client';

import { useEffect, useState } from 'react';
import { useLanguageStore, useThemeStore } from '@/lib/store';

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Rehydrate stores on mount
    useLanguageStore.persist.rehydrate();
    useThemeStore.persist.rehydrate();
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return <>{children}</>;
}
