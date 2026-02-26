import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      bg: string;
      surface: string;
      text: string;
      secondary: string;
      muted: string;
      accent: string;
      border: string;
      borderLight: string;
      white: string;
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
    radius: {
      sm: string;
      md: string;
      lg: string;
    };
    container: {
      max: string;
    };

  fontSizes: {
    h1: string,
    h2: string,
    h3: string,
    bodyBig: string,
    body: string,
    small: string,
    caption: string,
  }
  }
}
