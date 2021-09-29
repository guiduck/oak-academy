import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto+Mono&subset=greek');

  *{
    margin: 0;
    padding: 0,
  }
  
  html, body, #root {
    font-family: 'Roboto Mono', monospace;
    width: 100%;
    height: 100%;

    max-width: 100%;
    max-height: 100%;
  }

  *, button, input{
    border: 0;
    background: none;
  }

  :root{
    --primary: #000;
    --secondary: #15181C;
    --like: #E8265E; 
  }
`