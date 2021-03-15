import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 2.2rem;
  }

  html, body, #root {
    width: 100%;
    height: 100vh;
    font-size: 70%;
    color: ${(props) => props.theme.colors.white}
  }

  *, button, input {
    border: none;
    outline: none;
    font-family: 'Roboto', sans-serif;
  }

  a {
    color: ${(props) => props.theme.colors.white};
    text-decoration: none;
    transition: text-shadow .3s ease-in-out;

    &:hover {
      text-shadow: 0 0 5px ${(props) => props.theme.colors.white};
    }
  }

  a, p, span, svg {
    font-size: 1.6rem;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.8rem;
  }

  h3 {
    font-size: 1.6rem;
  }

  h1, h2, h3 {
    text-transform: uppercase;
  }

  button {
    cursor: pointer;
  }
`
