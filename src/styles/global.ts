import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin:0;
    padding:0;
    box-sizing:border-box;
  }

  html, body, #root {
    height:100%;
    scroll-behavior: smooth !important;
  }

  body {
    background:${({ theme }) => theme.colors.bg};
    color:${({ theme }) => theme.colors.text};
    font-family: Inter, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    scroll-margin-top: 100px;
  }

  a {
    text-decoration: none;
    color: inherit;
    -webkit-tap-highlight-color: transparent; 
  }

  button, a {
    font-family: inherit; 
  }
`;
