// Font Loading Utility
export interface FontConfig {
  google?: {
    families: string[];
  };
  custom?: {
    families: string[];
    urls: string[];
  };
}

export const loadFonts = (config: FontConfig): Promise<void> => {
  return new Promise((resolve, reject) => {
    // Check if WebFont is already loaded
    if ((window as any).WebFont) {
      (window as any).WebFont.load({
        ...config,
        active: resolve,
        inactive: reject,
      });
      return;
    }

    // Load WebFont script dynamically
    const script = document.createElement('script');
    script.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
    script.onload = () => {
      if ((window as any).WebFont) {
        (window as any).WebFont.load({
          ...config,
          active: resolve,
          inactive: reject,
        });
      } else {
        reject(new Error('WebFont failed to load'));
      }
    };
    script.onerror = () => reject(new Error('Failed to load WebFont script'));
    document.head.appendChild(script);
  });
};

// Default font configuration for the application
export const defaultFontConfig: FontConfig = {
  google: {
    families: ['Figtree:300,400,500,600,700,800,900']
  }
};