'use client';

import { useEffect } from 'react';

export default function ThemeInitializer() {
  useEffect(() => {
    // Initialize theme from original template
    const defaultThemeMode = 'light';
    let themeMode;

    if (document.documentElement) {
      const storedTheme = localStorage.getItem('kt-theme');
      if (storedTheme) {
        themeMode = storedTheme;
      } else if (document.documentElement.hasAttribute('data-kt-theme-mode')) {
        const themeAttr = document.documentElement.getAttribute('data-kt-theme-mode');
        themeMode = themeAttr || defaultThemeMode;
      } else {
        themeMode = defaultThemeMode;
      }

      if (themeMode === 'system') {
        themeMode = window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light';
      }

      // Only add class if not already present (avoid unnecessary reflows)
      if (!document.documentElement.classList.contains(themeMode)) {
        document.documentElement.classList.add(themeMode);
      }
    }
  }, []);

  return null; // This component doesn't render anything
}
