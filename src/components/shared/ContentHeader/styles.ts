import styled from 'styled-components'

interface ITitleContainerProps {
  lineColor: string
}

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`
export const TitleContainer = styled.div<ITitleContainerProps>`
  > h2 {
    color: ${(props) => props.theme.colors.white};
    text-shadow: 0 0 3px ${(props) => props.theme.colors.white};

    &::after {
      content: '';
      display: block;
      margin-top: 0.5rem;
      width: 55px;
      border-bottom: 5px solid ${(props) => props.lineColor};
      box-shadow: 0 0 10px ${(props) => props.lineColor};
    }
  }
`
export const Filters = styled.div`
  display: flex;
`
