import React from 'react'
import * as S from './styles'

import Emoji from 'utils/emojis'

import Toggle from 'components/shared/Toggle'

const MainHeader: React.FC = () => {
  const randomEmoji = React.useMemo(() => {
    const length = Emoji.length
    const index = Math.floor(Math.random() * length)
    return Emoji[index]
  }, [])

  return (
    <S.Container>
      <Toggle />
      <S.Profile>
        <S.Welcome>Olá, {randomEmoji}</S.Welcome>
        <S.Username>Vinicius Colasanto</S.Username>
      </S.Profile>
    </S.Container>
  )
}

export default MainHeader
