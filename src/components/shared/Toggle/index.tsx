import React from 'react'
import * as S from './styles'

import { FaMoon, FaSun } from 'react-icons/fa'

const Toggle: React.FC = () => {
  const [check, setCheck] = React.useState(true)

  return (
    <S.Container>
      <S.ToggleLabel>Light</S.ToggleLabel>
      <S.ToggleSelector
        checked={check}
        onChange={() => setCheck(!check)}
        checkedIcon={<FaMoon />}
        uncheckedIcon={<FaSun />}
        height={24}
        width={52}
      />
      <S.ToggleLabel>Dark</S.ToggleLabel>
    </S.Container>
  )
}

export default Toggle
