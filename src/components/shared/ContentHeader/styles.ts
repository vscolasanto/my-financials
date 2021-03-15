import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`
export const TitleContainer = styled.div`
  > h2 {
    color: ${(props) => props.theme.colors.white};
    text-shadow: 0 0 3px ${(props) => props.theme.colors.white};

    &::after {
      content: '';
      display: block;
      margin-top: 0.5rem;
      width: 55px;
      border-bottom: 5px solid ${(props) => props.theme.colors.info};
      box-shadow: 0 0 10px ${(props) => props.theme.colors.info};
    }
  }
`
export const Filters = styled.div``
