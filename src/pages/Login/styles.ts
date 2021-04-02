import styled from 'styled-components'

export const Container = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100vh;
  justify-content: center;
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3rem;

  > h3 {
    color: ${(props) => props.theme.colors.white};
    margin-left: 1rem;
  }

  > svg {
    height: 3rem;
  }
`

export const Form = styled.form`
  background-color: ${(props) => props.theme.colors.tertiary};
  border-radius: 1rem;
  height: 30rem;
  margin: 1rem;
  max-width: 30rem;
  padding: 2rem;
  width: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;
`

export const FormTitle = styled.h1`
  margin-bottom: 2rem;

  &::after {
    border-bottom: 5px solid ${(props) => props.theme.colors.danger};
    box-shadow: 0 0 10px ${(props) => props.theme.colors.danger};
    content: '';
    display: block;
    width: 55px;
  }
`
