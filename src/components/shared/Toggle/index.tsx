import React from 'react'
import * as S from './styles'

import { RiMoonClearFill, RiSunFill } from 'react-icons/ri'

interface IToggleProps {
  checked: boolean
  onChange: () => void
}

const Toggle: React.FC<IToggleProps> = ({ checked, onChange }) => {
  return (
    <S.Container>
      <S.ToggleSelector
        checked={checked}
        onChange={onChange}
        checkedIcon={<RiMoonClearFill />}
        uncheckedIcon={<RiSunFill />}
        height={24}
        width={52}
      />
    </S.Container>
  )
}

export default Toggle
