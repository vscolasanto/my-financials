import React from 'react'
import * as S from './styles'

import { ReactComponent as LogoImg } from 'assets/images/logo.svg'

import InputText from 'components/shared/InputText'
import Button from 'components/shared/Button'

const Login: React.FC = () => {
  return (
    <S.Container>
      <S.Logo>
        <LogoImg />
        <h1>Minhas Finanças</h1>
      </S.Logo>

      <S.Form onSubmit={() => console.log()}>
        <S.FormTitle>Entrar</S.FormTitle>

        <InputText
          autoComplete="off"
          placeholder="Insira seu email"
          required
          type="email"
        />

        <InputText placeholder="Insira sua senha" required type="password" />

        <Button type="submit">Acessar</Button>
      </S.Form>
    </S.Container>
  )
}

export default Login
