import * as S from './styles'

import Aside from 'components/core/Aside'
import Content from 'components/core/Content'
import MainHeader from 'components/core/MainHeader'

const Layout: React.FC = ({ children }) => (
  <S.Container>
    <MainHeader />
    <Aside />
    <Content>{children}</Content>
  </S.Container>
)

export default Layout
