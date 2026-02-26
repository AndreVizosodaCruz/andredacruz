import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import SmoothScrollProvider from './providers/SmoothScrollProvider';
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from './styles/global';
import { theme } from './styles/theme';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SmoothScrollProvider>
      <ThemeProvider theme={theme}>
        <Analytics />
        <SpeedInsights />
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </SmoothScrollProvider>
  </StrictMode>,
)
