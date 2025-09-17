import { useEffect } from 'react';
import type { FontConfig } from '../utils/fontLoader';

interface WebFontConfig extends FontConfig {
  loading?: () => void;
  active: () => void;
  inactive: () => void;
  fontloading?: (familyName: string, fvd: string) => void;
  fontactive?: (familyName: string, fvd: string) => void;
  fontinactive?: (familyName: string, fvd: string) => void;
}

const useFontLoader = (config: WebFontConfig) => {
  useEffect(() => {
    const loadFonts = () => {
      if (window.WebFont) {
        window.WebFont.load({
          ...config,
          active: config.active || (() => {}),
          inactive: config.inactive || (() => {})
        });
      } else {
        // Fallback: Load WebFont script dynamically
        const script = document.createElement('script');
        script.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
        script.onload = () => {
          if (window.WebFont) {
            window.WebFont.load({
              ...config,
              active: config.active || (() => {}),
              inactive: config.inactive || (() => {})
            });
          }
        };
        document.head.appendChild(script);
      }
    };

    loadFonts();
  }, [config]);
};

export default useFontLoader;