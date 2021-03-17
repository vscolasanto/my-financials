import * as S from './styles'

import Logo from 'assets/images/logo.svg'

import {
  RiDashboardFill,
  RiArrowUpLine,
  RiArrowDownLine,
  RiLogoutCircleLine
} from 'react-icons/ri'

const Aside: React.FC = () => {
  return (
    <S.Container>
      <S.Header>
        <S.LogoImg
          src={Logo}
          alt="Logo em formato de cifrão - My Financials "
        />
        <S.Title>Minhas Finanças</S.Title>
      </S.Header>

      <S.MenuContainer>
        <S.MenuItem href="/dashboard">
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
        <S.MenuItem href="opa">
          <RiLogoutCircleLine />
          Sair
        </S.MenuItem>
      </S.MenuContainer>
    </S.Container>
  )
}

export default Aside
