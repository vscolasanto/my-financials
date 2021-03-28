import React from 'react'
import * as S from './styles'

interface IMessageBoxProps {
  title: string
  icon: React.ReactNode
  description: string
  footerLabel: string
}

const MessageBox: React.FC<IMessageBoxProps> = ({
  title,
  icon,
  description,
  footerLabel
}) => (
  <S.Container>
    <header>
      <h2>
        {title} {icon}
      </h2>
      <p>{description}</p>
    </header>
    <footer>
      <span>{footerLabel}</span>
    </footer>
  </S.Container>
)

export default MessageBox
