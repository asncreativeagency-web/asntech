import { useEffect } from 'react';

interface WebFontConfig {
  google?: {
    families: string[];
  };
  custom?: {
    families: string[];
    urls: string[];
  };
  loading?: () => void;
  active?: () => void;
  inactive?: () => void;
  fontloading?: (familyName: string, fvd: string) => void;
  fontactive?: (familyName: string, fvd: string) => void;
  fontinactive?: (familyName: string, fvd: string) => void;
}

declare global {
  interface Window {
    WebFont?: {
      load: (config: WebFontConfig) => void;
    };
  }
}

const useFontLoader = (config: WebFontConfig) => {
  useEffect(() => {
    const loadFonts = () => {
      if (window.WebFont) {
        window.WebFont.load(config);
      } else {
        // Fallback: Load WebFont script dynamically
        const script = document.createElement('script');
        script.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
        script.onload = () => {
          if (window.WebFont) {
            window.WebFont.load(config);
          }
        };
        document.head.appendChild(script);
      }
    };

    loadFonts();
  }, [config]);
};

export default useFontLoader;