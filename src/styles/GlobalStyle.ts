import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  ::before,
  ::after {
    box-sizing: border-box;
    
  }

  body {
    font-family: "Quicksand";
    font-size: 2.4rem;
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
    background: none;
  }

  input, select {
    border: none;
    font-family: inherit;
    cursor: pointer;
  }

`;
