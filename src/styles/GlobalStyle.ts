import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  ::before,
  ::after {
    box-sizing: border-box;
    
  }

  body {
    font-family: "Quicksand";
    margin: 0;
  }

  h1,
  h2,
  h3,
  p {
    margin: 0;
    font: inherit;
  }

  a{
    text-decoration: none;
    color: inherit;
  }

  ul{
    list-style: none;
    padding-left: 0;
    margin-bottom: 0;
    margin-top: 0;
  }

  button {
    padding: 0;
    border: none;
    cursor: pointer;
    font-family: inherit;
  }

  input {
    border: none;
    font: inherit;
  }

`;
