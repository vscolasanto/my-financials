import React, { ButtonHTMLAttributes } from 'react'

import * as S from './styles'

type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

const Button: React.FC<IButtonProps> = ({ children, ...props }) => (
  <S.Container {...props}>{children}</S.Container>
)

export default Button
