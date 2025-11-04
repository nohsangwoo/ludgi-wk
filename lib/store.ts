import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { translations, Language, TranslationKey } from './translations';

interface LanguageStore {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
}

interface ThemeStore {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
  toggleTheme: () => void;
}

export const useLanguageStore = create<LanguageStore>()(
  persist(
    (set, get) => ({
      language: 'ko',
      setLanguage: (lang: Language) => set({ language: lang }),
      t: (key: TranslationKey) => {
        const { language } = get();
        return translations[language][key] || key;
      },
    }),
    {
      name: 'language-storage',
      skipHydration: true,
    }
  )
);

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set, get) => ({
      theme: 'light',
      setTheme: (theme: 'light' | 'dark') => {
        set({ theme });
        if (typeof window !== 'undefined') {
          if (theme === 'dark') {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
        }
      },
      toggleTheme: () => {
        const currentTheme = get().theme;
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        get().setTheme(newTheme);
      },
    }),
    {
      name: 'theme-storage',
    }
  )
);
