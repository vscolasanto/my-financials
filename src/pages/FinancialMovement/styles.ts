import styled from 'styled-components'

export const Container = styled.div``

export const Filters = styled.div`
  display: flex;
  justify-content: center;
  margin: 1.5rem;

  button {
    font-size: 1.6rem;
    padding: 1rem 2rem;
    margin: 0 1rem;
    background: none;
    color: ${(props) => props.theme.colors.white};
    transition: all 0.2s;

    &:hover {
      &.filterRecurrent::after {
        box-shadow: 0 0 5px ${(props) => props.theme.colors.info},
          0 0 10px ${(props) => props.theme.colors.info};
      }

      &.filterEventual::after {
        box-shadow: 0 0 5px ${(props) => props.theme.colors.danger},
          0 0 10px ${(props) => props.theme.colors.danger};
      }
    }
  }

  .filterRecurrent::after {
    content: '';
    display: block;
    width: 5rem;
    margin: 0 auto;
    height: 0.5rem;
    border-bottom: 8px solid ${(props) => props.theme.colors.info};
    transition: 0.2s ease-in-out;
  }

  .filterEventual::after {
    content: '';
    display: block;
    width: 5rem;
    margin: 0 auto;
    height: 0.5rem;
    border-bottom: 8px solid ${(props) => props.theme.colors.danger};
    transition: 0.2s ease-in-out;
  }
`
