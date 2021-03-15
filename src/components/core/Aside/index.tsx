import * as S from './styles'

import logoImg from 'assets/logo.svg'

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
          src={logoImg}
          alt="Logo em formato de cifrão - My Financials "
        />
        <S.Title>Minhas Finanças</S.Title>
      </S.Header>

      <S.MenuContainer>
        <S.MenuItem href="opa">
          <RiDashboardFill />
          Dashboard
        </S.MenuItem>
        <S.MenuItem href="opa">
          <RiArrowUpLine />
          Entradas
        </S.MenuItem>
        <S.MenuItem href="opa">
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
