import React from 'react'
import * as S from './styles'

import { MONTHS } from 'utils/months'
import gains from 'repositories/gains'
import expenses from 'repositories/expenses'

import { ReactComponent as Happy } from 'assets/images/happy.svg'
import { ReactComponent as Sad } from 'assets/images/sad.svg'
import { ReactComponent as Worried } from 'assets/images/worried.svg'

import ContentHeader from 'components/shared/ContentHeader'
import SelectInput from 'components/shared/SelectInput'
import BalanceCard from 'components/shared/BalanceCard'
import MessageBox from 'components/shared/MessageBox'
import PieChartBox from 'components/shared/PieChartBox'
import HistoryBox from 'components/shared/HistoryBox'
import BarChartBox from 'components/shared/BarChartBox'

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

  const totalExpenses = React.useMemo(() => {
    let total = 0

    expenses.forEach((item) => {
      const date = new Date(item.date)
      const year = date.getFullYear()
      const month = date.getMonth()

      if (month === selectedMonth && year === selectedYear) {
        try {
          total += Number(item.amount)
        } catch (err) {
          console.error(err)
          throw new Error('Invalid amount. Amount must be a number')
        }
      }
    })

    return total
  }, [selectedYear, selectedMonth])

  const totalGains = React.useMemo(() => {
    let total = 0

    gains.forEach((item) => {
      const date = new Date(item.date)
      const year = date.getFullYear()
      const month = date.getMonth()

      if (month === selectedMonth && year === selectedYear) {
        try {
          total += Number(item.amount)
        } catch (err) {
          console.error(err)
          throw new Error('Invalid amount. Amount must be a number')
        }
      }
    })

    return total
  }, [selectedYear, selectedMonth])

  const totalBalance = React.useMemo(() => {
    return totalGains - totalExpenses
  }, [totalGains, totalExpenses])

  const messageBalance = React.useMemo(() => {
    if (totalBalance < 0) {
      return {
        title: 'Que triste!',
        description: 'Neste mês você gastou mais do que deveria.',
        footerLabel:
          'Verifique seus gastos e tente cortar despesas desnecessárias.',
        icon: <Sad />
      }
    } else if (totalGains === 0 && totalExpenses === 0) {
      return {
        title: 'Opa...',
        description: 'Não há registros de entrada e saída neste mês.',
        footerLabel: 'Mantenha os lançamentos atualizados para controla-los!',
        icon: <Worried />
      }
    } else if (totalBalance === 0) {
      return {
        title: 'Quase...',
        description: 'Neste mês você gastou exatamente o que ganhou!',
        footerLabel:
          'Tome cuidado. No próximo mês tente poupar algum dinheiro.',
        icon: <Worried />
      }
    } else {
      return {
        title: 'Muito bem!',
        description: 'Suas finanças estão positivas!',
        footerLabel: 'Continue assim. Considere investir seu saldo.',
        icon: <Happy />
      }
    }
  }, [totalBalance, totalGains, totalExpenses])

  const relationGainVsExpanses = React.useMemo(() => {
    const total = totalGains + totalExpenses
    const percentGains = (totalGains / total) * 100
    const percentExpenses = (totalExpenses / total) * 100

    const data = [
      {
        name: 'Entradas',
        value: totalGains,
        percent: Number(percentGains.toFixed(1)) || 0,
        color: '#00D4AD'
      },
      {
        name: 'Saídas',
        value: totalExpenses,
        percent: Number(percentExpenses.toFixed(1)) || 0,
        color: '#E44C4E'
      }
    ]

    return data
  }, [totalGains, totalExpenses])

  const historyData = React.useMemo(() => {
    return MONTHS.map((_, month) => {
      let amountEntry = 0
      gains.forEach((gain) => {
        const date = new Date(gain.date)
        const gainMonth = date.getMonth()
        const gainYear = date.getFullYear()

        if (gainMonth === month && gainYear === selectedYear) {
          try {
            amountEntry += Number(gain.amount)
          } catch (err) {
            console.error(err)
            throw new Error('amountEntry is invalid. Must be a number!')
          }
        }
      })

      let amountOutput = 0
      expenses.forEach((expense) => {
        const date = new Date(expense.date)
        const expenseMonth = date.getMonth()
        const expenseYear = date.getFullYear()

        if (expenseMonth === month && expenseYear === selectedYear) {
          try {
            amountOutput += Number(expense.amount)
          } catch (err) {
            console.error(err)
            throw new Error('amountOutput is invalid. Must be a number!')
          }
        }
      })

      return {
        monthNumber: month,
        month: MONTHS[month].substr(0, 3),
        amountEntry,
        amountOutput
      }
    }).filter((item) => {
      const currentMonth = new Date().getMonth()
      const currentYear = new Date().getFullYear()

      return (
        (selectedYear === currentYear && item.monthNumber <= currentMonth) ||
        selectedYear < currentYear
      )
    })
  }, [selectedYear])

  const relationGainsRecurrentVsEventual = React.useMemo(() => {
    let amountRecurrent = 0
    let amountEventual = 0

    gains
      .filter((gain) => {
        const date = new Date(gain.date)
        const month = date.getMonth()
        const year = date.getFullYear()

        return month === selectedMonth && year === selectedYear
      })
      .forEach((gain) => {
        if (gain.frequency === 'recorrente') {
          return (amountRecurrent += Number(gain.amount))
        }
        if (gain.frequency === 'eventual') {
          return (amountEventual += Number(gain.amount))
        }
      })

    const total = amountRecurrent + amountEventual

    return [
      {
        name: 'Recorrentes',
        amount: amountRecurrent,
        percent: Number(((amountRecurrent / total) * 100).toFixed(1)) || 0,
        color: '#2B5DFF'
      },
      {
        name: 'Eventuais',
        amount: amountEventual,
        percent: Number(((amountEventual / total) * 100).toFixed(1)) || 0,
        color: '#E44C4E'
      }
    ]
  }, [selectedMonth, selectedYear])

  const relationExpensivesRecurrentVsEventual = React.useMemo(() => {
    let amountRecurrent = 0
    let amountEventual = 0

    expenses
      .filter((expense) => {
        const date = new Date(expense.date)
        const month = date.getMonth()
        const year = date.getFullYear()

        return month === selectedMonth && year === selectedYear
      })
      .forEach((expense) => {
        if (expense.frequency === 'recorrente') {
          return (amountRecurrent += Number(expense.amount))
        }
        if (expense.frequency === 'eventual') {
          return (amountEventual += Number(expense.amount))
        }
      })

    const total = amountRecurrent + amountEventual

    return [
      {
        name: 'Recorrentes',
        amount: amountRecurrent,
        percent: Number(((amountRecurrent / total) * 100).toFixed(1)) || 0,
        color: '#2B5DFF'
      },
      {
        name: 'Eventuais',
        amount: amountEventual,
        percent: Number(((amountEventual / total) * 100).toFixed(1)) || 0,
        color: '#E44C4E'
      }
    ]
  }, [selectedMonth, selectedYear])

  const handleChange = React.useCallback(
    (
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
    },
    []
  )

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
          amount={totalBalance}
          footerLabel="Atualizado com base nas entradas e saídas"
          icon="dollar"
          color="#4E41F0"
        />
        <BalanceCard
          title="Entradas"
          amount={totalGains}
          footerLabel="Atualizado com base nas entradas e saídas"
          icon="arrowUp"
          color="#00D4AD"
        />
        <BalanceCard
          title="Saídas"
          amount={totalExpenses}
          footerLabel="Atualizado com base nas entradas e saídas"
          icon="arrowDown"
          color="#E44C4E"
        />
        <MessageBox
          title={messageBalance.title}
          description={messageBalance.description}
          footerLabel={messageBalance.footerLabel}
          icon={messageBalance.icon}
        />
        <PieChartBox data={relationGainVsExpanses} />

        <HistoryBox
          data={historyData}
          lineColorAmountEntry="#00D4AD"
          lineColorAmountOutput="#E44C4E"
        />

        <BarChartBox title="Entradas" data={relationGainsRecurrentVsEventual} />

        <BarChartBox
          title="Saídas"
          data={relationExpensivesRecurrentVsEventual}
        />
      </S.Content>
    </S.Container>
  )
}

export default Dashboard
