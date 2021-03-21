import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.tertiary};
  border-radius: 1rem;
  color: ${(props) => props.theme.colors.white};
  display: flex;
  flex-direction: column;
  height: 260px;
  justify-content: space-between;
  margin: 1rem 0;
  padding: 1rem 1.5rem;
  width: 49%;

  header {
    svg {
      width: 2rem;
      height: auto;
      margin-left: 0.5rem;
    }
  }

  footer {
    span {
      font-size: 1.3rem;
    }
  }
`
