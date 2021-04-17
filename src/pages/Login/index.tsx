import React, { useState } from 'react'
import * as S from './styles'

import { ReactComponent as LogoImg } from 'assets/images/logo.svg'

import InputText from 'components/shared/InputText'
import Button from 'components/shared/Button'

import { useAuth } from 'hooks/auth'

const Login: React.FC = () => {
  const { signIn } = useAuth()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  return (
    <S.Container>
      <S.Logo>
        <LogoImg />
        <h1>Minhas Finanças</h1>
      </S.Logo>

      <S.Form onSubmit={() => signIn(email, password)}>
        <S.FormTitle>Entrar</S.FormTitle>

        <InputText
          autoComplete="off"
          placeholder="Insira seu email"
          required
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <InputText
          placeholder="Insira sua senha"
          required
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button type="submit">Acessar</Button>
      </S.Form>
    </S.Container>
  )
}

export default Login
