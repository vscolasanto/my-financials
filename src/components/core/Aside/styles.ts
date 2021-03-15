import styled from 'styled-components'

export const Container = styled.div`
  grid-area: AS;
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.white};
  border-right: 1px solid ${(props) => props.theme.colors.white};
  padding: 0 1.5rem;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
`

export const LogoImg = styled.img`
  width: 2.5rem;
`

export const Title = styled.h2`
  font-weight: 100;
  text-shadow: 0 0 3px ${(props) => props.theme.colors.white},
    0 0 5px ${(props) => props.theme.colors.white};
  margin-left: 0.5rem;
`

export const MenuContainer = styled.nav`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const MenuItem = styled.a`
  margin: 0.5rem 0;
  display: flex;
  align-items: center;
  width: fit-content;

  > svg {
    margin-right: 0.5rem;
  }
`
