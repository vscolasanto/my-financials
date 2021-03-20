import React from 'react'
import * as S from './styles'

import { MONTHS } from 'utils/months'
import gains from 'repositories/gains'
import expenses from 'repositories/expenses'

import { ReactComponent as Happy } from 'assets/images/happy.svg'

import ContentHeader from 'components/shared/ContentHeader'
import SelectInput from 'components/shared/SelectInput'
import BalanceCard from 'components/shared/BalanceCard'
import MessageBox from 'components/shared/MessageBox'

const Dashboard: React.FC = () => {
  const [selectedMonth, setSelectedMonth] = React.useState<number>(
    new Date().getMonth()
  )
  const [selectedYear, setSelectedYear] = React.useState<number>(
    new Date().getFullYear()
  )

  const months = React.useMemo(() => {
    return MONTHS.map((month, index) => ({
      value: index,
      label: month
    }))
  }, [])

  const years = React.useMemo(() => {
    const uniqueYears: number[] = []
    const years = [...gains, ...expenses]

    years.forEach((item) => {
      const year = new Date(item.date).getFullYear()

      if (!uniqueYears.includes(year)) {
        uniqueYears.push(year)
      }
    })

    const currentYear = new Date().getFullYear()

    if (!uniqueYears.includes(currentYear)) {
      uniqueYears.push(currentYear)
    }

    return uniqueYears
      .map((year) => ({
        value: year,
        label: year
      }))
      .sort((a, b) => b.label - a.label)
  }, [])

  const handleChange = (
    event:
      | React.FormEvent<HTMLInputElement>
      | React.FormEvent<HTMLSelectElement>
  ) => {
    try {
      const { name, value } = event.currentTarget

      name === 'month'
        ? setSelectedMonth(Number(value))
        : setSelectedYear(Number(value))
    } catch (err) {
      console.error(err)
      throw new Error('Invalid value. Year and Month must be a Number.')
    }
  }

  return (
    <S.Container>
      <ContentHeader title="Dashboard" lineColor={'#2B5DFF'}>
        <SelectInput
          name="month"
          options={months}
          value={selectedMonth}
          onChange={handleChange}
        />
        <SelectInput
          name="year"
          options={years}
          value={selectedYear}
          onChange={handleChange}
        />
      </ContentHeader>

      <S.Content>
        <BalanceCard
          title="Saldo"
          amount={150}
          footerLabel="Atualizado com base nas entradas e saídas"
          icon="dollar"
          color="#4E41F0"
        />
        <BalanceCard
          title="Entradas"
          amount={5000.0}
          footerLabel="Atualizado com base nas entradas e saídas"
          icon="arrowUp"
          color="#F7931B"
        />
        <BalanceCard
          title="Saídas"
          amount={4850.0}
          footerLabel="Atualizado com base nas entradas e saídas"
          icon="arrowDown"
          color="#E44C4E"
        />

        <MessageBox
          title={'Muito bem!'}
          description={'Suas finanças estão positivas!'}
          footerLabel={'Continue assim. Considere investir seu saldo.'}
          icon={<Happy />}
        />
      </S.Content>
    </S.Container>
  )
}

export default Dashboard
