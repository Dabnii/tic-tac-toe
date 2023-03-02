import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
 ${reset}
  * {
    box-sizing: border-box;
    font-family: "Montserrat", "Poppins", "Nanum Gothic", sans-serif !important;
    background-color: #ABCFA1;
  }

`;

export default GlobalStyle;
