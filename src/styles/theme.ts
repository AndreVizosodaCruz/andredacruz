export const theme = {
  colors: {
    bg: '#FDFCFA',
    surface: '#111111',
    text: '#1C1917',
    secondary: '#a8a8a8',
    muted: '#9ca3af',
    accent: '#8B9D83',
    border: '#1f1f1f',
    borderLight: '#e7e5e4',
    white: '#fff'
  },

  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '40px',
    xxl: '80px'
  },

  radius: {
    sm: '6px',
    md: '12px',
    lg: '20px'
  },

  container: {
    max: '1200px'
  },

  fontSizes: {
    h1: '3.5rem',
    h2: '2.5rem',
    h3: '1.75rem',
    bodyBig: '1.25rem',
    body: '1rem',
    small: '0.875rem',
    caption: '0.75rem'
  }
};

export type ThemeType = typeof theme;