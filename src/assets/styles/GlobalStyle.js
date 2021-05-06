import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding:0;
    font-family: 'Open Sans', sans-serif;
  }
  html{
    box-sizing: border-box;
  }
  *, *::after, *::before{
    box-sizing: inherit;
  }
`;
