import * as S from './styles'

import { ReactComponent as Logo } from 'assets/images/logo.svg'

import {
  RiDashboardFill,
  RiArrowUpLine,
  RiArrowDownLine,
  RiLogoutCircleLine
} from 'react-icons/ri'

import { useAuth } from 'hooks/auth'

const Aside: React.FC = () => {
  const { signOut } = useAuth()
  return (
    <S.Container>
      <S.Header>
        <Logo />
        <S.Title>Minhas Finanças</S.Title>
      </S.Header>

      <S.MenuContainer>
        <S.MenuItem href="/">
          <RiDashboardFill />
          Dashboard
        </S.MenuItem>
        <S.MenuItem href="/movimento/entradas">
          <RiArrowUpLine />
          Entradas
        </S.MenuItem>
        <S.MenuItem href="/movimento/saidas">
          <RiArrowDownLine />
          Saídas
        </S.MenuItem>
        <S.MenuButton onClick={signOut}>
          <RiLogoutCircleLine />
          Sair
        </S.MenuButton>
      </S.MenuContainer>
    </S.Container>
  )
}

export default Aside
