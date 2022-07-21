import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin:0;
    padding:0;
    outline:none;
    box-sizing:border-box;


    transition:  background-color .3s, color .3s;
  }
    
  html {
      font-size: 62.5%;      
  }

  html, body { 
    height:100%; 
    width:100%;

    font-family: 'Space Mono', monospace, sans-serif;
    background-color: ${({ theme }) => theme.colors.background};
  }

  button, input { 
    font-family: 'Space Mono', monospace, sans-serif;

  }

`
