import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    font-family: Nunito;
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  a, button {
    cursor: pointer;
    text-decoration: unset;
  }

  ul, ol {
  list-style: none;
}
`;

export default GlobalStyles;
