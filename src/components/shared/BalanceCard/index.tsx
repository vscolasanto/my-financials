import React from 'react'
import * as S from './styles'

import CountUp from 'react-countup'

import { ReactComponent as DollarImg } from 'assets/images/dollar.svg'
import { ReactComponent as UpImg } from 'assets/images/arrow-up.svg'
import { ReactComponent as DownImg } from 'assets/images/arrow-down.svg'

interface BalancedCardProps {
  title: string
  amount: number
  footerLabel: string
  icon: 'dollar' | 'arrowUp' | 'arrowDown'
  color: string
}

const BalanceCard: React.FC<BalancedCardProps> = ({
  title,
  amount,
  footerLabel,
  icon,
  color
}) => {
  const iconSelected = React.useMemo(() => {
    switch (icon) {
      case 'dollar':
        return <DollarImg />
      case 'arrowUp':
        return <UpImg />
      case 'arrowDown':
        return <DownImg />
      default:
        null
    }
  }, [icon])

  return (
    <S.Container color={color}>
      <div>
        <span>{title}</span>
        <h1>
          <CountUp
            end={amount}
            prefix={'R$ '}
            separator="."
            decimal=","
            decimals={2}
          />
        </h1>
      </div>
      <small>{footerLabel}</small>
      {iconSelected}
    </S.Container>
  )
}

export default BalanceCard
