import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 2.2rem;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
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
    transition: all .2s ease-in-out;

    &:hover {
      text-shadow: 0 0 3px ${(props) => props.theme.colors.white};
    }

    > svg {
      margin-right: 0.5rem;
      transition: .2s ease-in-out;
    }

    &:hover svg {
      filter: drop-shadow(0 0 3px ${(props) => props.theme.colors.white});
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

  small {
    font-size: 1.2rem;
  }

  button {
    cursor: pointer;
  }
`
