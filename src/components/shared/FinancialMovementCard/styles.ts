import styled from 'styled-components'

interface ITagProps {
  color: string
}

export const Container = styled.li`
  background-color: ${(props) => props.theme.colors.tertiary};
  border-radius: 0.5rem;
  list-style: none;
  margin: 0.5rem;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: 0.2s ease-in;
  position: relative;

  &:hover {
    transform: translateX(5px);

    & div:first-of-type {
      box-shadow: 0 0 10px ${(props) => props.color};
    }
  }
`

export const Tag = styled.div<ITagProps>`
  background-color: ${(props) => props.color};
  position: absolute;
  width: 5px;
  height: 60%;
  left: -2px;
`

export const Title = styled.div`
  display: flex;
  flex-direction: column;
`
