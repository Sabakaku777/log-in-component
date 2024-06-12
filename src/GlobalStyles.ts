import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

* {
margin: 0;
padding:0;
font-family: "Poppins";

}

body {
  display:flex;
  justify-content:center;
  align-items: center;
  height: 100vh;

}
`;

export default GlobalStyles;
