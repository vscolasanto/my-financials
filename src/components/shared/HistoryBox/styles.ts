import styled from 'styled-components'

interface ILegendProps {
  color: string
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${(props) => props.theme.colors.tertiary};
  border-radius: 1rem;
  color: ${(props) => props.theme.colors.white};
  margin: 1rem 0;
  padding: 1rem 1.5rem;
`

export const ChartContainer = styled.div`
  flex: 1;
  height: 240px;
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
  margin-bottom: 1rem;
`
export const LegendContainer = styled.ul`
  list-style: none;
  display: flex;
`

export const Legend = styled.li<ILegendProps>`
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin: 0 1rem;
  }

  > div {
    background-color: ${(props) => props.color};
    width: 2rem;
    height: 2rem;
    border-radius: 1rem;
  }

  > span {
    margin-left: 1rem;
  }
`
