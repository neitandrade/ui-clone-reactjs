import { createGlobalStyle } from 'styled-components';
// Ao invés de importar o Style inteiro, vamos importar apenas o createGlobalStyle

// Global Styles em toda a aplicação/
export default createGlobalStyle`
  * {
  margin: 0; 
  padding: 0; 
  box-sizing: border-box;
  }

  html, body, #root { 
    height: 100%;
  }
  
  *, button, input {
  border: 0;
  outline: 0;
  font-family: 'Roboto', sans-serif;
  }

  // Definir as cores do nosso protótipo	
  :root {
    --primary: #36393f;
    --secondary: #2f3136;
    --tertiary: #202225;
    --quaternary: #292b2f;
    --quinary: #393d42;
    --senary: #828386;
 
    --white: #fff;
    --gray: #8a8c90;
    --chat-input: rgb(64,68,75);
    --symbol: #74777a;
 
    --notification: #f84a4b;
    --discord: #6e86d6;
    --mention-detail: #f9a839;
    --mention-message: #413f3f;
 
    --link: #5d80d6;
 
    --rocketseat: #6633cc;
  }

`; 
