import React from 'react'
import * as S from './styles'

import { RiMoonClearFill, RiSunFill } from 'react-icons/ri'

const Toggle: React.FC = () => {
  const [check, setCheck] = React.useState(true)

  return (
    <S.Container>
      <S.ToggleSelector
        checked={check}
        onChange={() => setCheck(!check)}
        checkedIcon={<RiMoonClearFill />}
        uncheckedIcon={<RiSunFill />}
        height={24}
        width={52}
      />
    </S.Container>
  )
}

export default Toggle
