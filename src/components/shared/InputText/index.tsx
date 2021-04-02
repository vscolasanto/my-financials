import React, { InputHTMLAttributes } from 'react'

import * as S from './styles'

type IInputText = InputHTMLAttributes<HTMLInputElement>

const InputText: React.FC<IInputText> = ({ ...props }) => (
  <S.Container {...props}></S.Container>
)

export default InputText
