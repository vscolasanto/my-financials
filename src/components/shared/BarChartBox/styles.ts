import styled from 'styled-components'

interface ILegendProps {
  color: string
}

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.tertiary};
  border-radius: 1rem;
  color: ${(props) => props.theme.colors.white};
  display: flex;
  height: 260px;
  align-items: center;
  margin: 1rem 0;
  padding: 1rem 1.5rem;
  width: 49%;
`

export const LeftSide = styled.aside`
  padding: 2rem 0;

  > h3 {
    margin-bottom: 2rem;
  }
`
export const RightSide = styled.main`
  flex: 1;
  justify-content: center;
  height: 100%;
`

export const LegendContainer = styled.ul`
  list-style: none;
  max-height: 160px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 1rem;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.secondary};
    border-radius: 1rem;
  }

  ::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.colors.tertiary};
  }
`

export const Legend = styled.li<ILegendProps>`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;

  > div {
    font-size: 1.6rem;
    background-color: ${(props) => props.color};
    width: 5rem;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
  }

  > span {
    margin-left: 1rem;
  }
`
