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
  /* ******* */
  /* Hidden ARROWS IN INPUT */
  /* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
/* ******* */
`;
