import React from 'react'
import * as S from './styles'

import Aside from 'components/Aside'
import Content from 'components/Content'
import MainHeader from 'components/MainHeader'

const Layout: React.FC = () => {
  return (
    <S.Container>
      <MainHeader />
      <Aside />
      <Content />
    </S.Container>
  )
}

export default Layout
