import styled from 'styled-components'

interface ITagProps {
  tagColor: string
}

export const Container = styled.li<ITagProps>`
  background-color: ${(props) => props.theme.colors.tertiary};
  border-radius: 0.5rem;
  list-style: none;
  margin-bottom: 1.5rem;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: 0.2s ease-in;
  position: relative;

  &:hover {
    transform: translateX(0.5rem);

    & div:first-of-type {
      transition: 0.2s ease-in-out;
      box-shadow: 0 0 10px ${(props) => props.tagColor};
    }
  }
`

export const Tag = styled.div<ITagProps>`
  background-color: ${(props) => props.tagColor};
  position: absolute;
  width: 5px;
  height: 60%;
  left: -2px;
`

export const Title = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-size: 2rem;
  }
`
