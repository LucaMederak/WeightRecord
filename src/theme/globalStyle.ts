import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}
ul,
ol {
  list-style: none;
}
a {
  text-decoration: none;
  color: inherit;
}
html {
  font-size: 62.5%;
  scroll-behavior: smooth;
}
body {
  font-size: 1.6rem;
  font-family: "sans-serif";


  h1, h2 {
letter-spacing: 0.03em;
  }
  
}

input,
button,
textarea,
select {
  font-family: inherit;
}
`;
