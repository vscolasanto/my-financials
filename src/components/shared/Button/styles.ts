import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  margin: 1rem 0;
  padding: 1rem;
  border: none;
  border-radius: 0.5rem;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.danger};
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.colors.danger + '80'};
  }
`
