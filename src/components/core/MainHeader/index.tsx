import React from 'react'
import * as S from './styles'

import { useTheme } from 'hooks/theme'

import Emoji from 'utils/emojis'

import Toggle from 'components/shared/Toggle'

const MainHeader: React.FC = () => {
  const { toggleTheme, theme } = useTheme()

  const [darkTheme, setDarkTheme] = React.useState(() =>
    theme.title === 'dark' ? true : false
  )

  const handleChangeTheme = () => {
    setDarkTheme(!darkTheme)
    toggleTheme()
  }

  const randomEmoji = React.useMemo(() => {
    const length = Emoji.length
    const index = Math.floor(Math.random() * length)
    return Emoji[index]
  }, [])

  return (
    <S.Container>
      <Toggle checked={darkTheme} onChange={handleChangeTheme} />
      <S.Profile>
        <S.Welcome>Olá, {randomEmoji}</S.Welcome>
        <S.Username>Vinicius Colasanto</S.Username>
      </S.Profile>
    </S.Container>
  )
}

export default MainHeader
