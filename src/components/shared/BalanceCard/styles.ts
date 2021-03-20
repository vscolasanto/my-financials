import styled from 'styled-components'

interface IContainerProps {
  color: string
}

export const Container = styled.div<IContainerProps>`
  width: 32%;
  height: 150px;
  margin: 1rem 0;
  background-color: ${(props) => props.color};
  color: ${(props) => props.theme.colors.white};
  border-radius: 1rem;
  padding: 1rem 1.5rem;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > svg {
    position: absolute;
    height: 110%;
    top: -0.8rem;
    right: -2rem;
    opacity: 0.2;
  }

  > span {
    font-weight: 500;
  }

  > small {
    font-size: 1rem;
  }
`
