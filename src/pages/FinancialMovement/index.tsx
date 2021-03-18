import React from 'react'
import * as S from './styles'

import { MONTHS } from 'utils/months'
import formatCurrency from 'utils/formatCurrency'
import formatDate from 'utils/formatDate'

import gains from 'repositories/gains'
import expenses from 'repositories/expenses'

import ContentHeader from 'components/shared/ContentHeader'
import SelectInput from 'components/shared/SelectInput'
import FinancialMovementCard from 'components/shared/FinancialMovementCard'

interface IFinancialMovementeProps {
  match: {
    params: {
      type: string
    }
  }
}

interface IData {
  description: string
  amountFormatted: string
  frequency: string
  dateFormatted: string
  tagColor: string
}

const FinancialMovement: React.FC<IFinancialMovementeProps> = ({ match }) => {
  const { type } = match.params
  const [selectedMonth, setSelectedMonth] = React.useState(
    String(new Date().getMonth() + 1)
  )
  const [selectedYear, setSelectedYear] = React.useState(
    String(new Date().getFullYear())
  )
  const [data, setData] = React.useState<IData[]>([])

  const filters = React.useMemo(() => {
    return type === 'entradas'
      ? { title: 'Entradas', lineColor: '#00D4AD' }
      : { title: 'Saídas', lineColor: '#E44C4E' }
  }, [type])

  const listData = React.useMemo(() => {
    return type === 'entradas' ? gains : expenses
  }, [type])

  const months = React.useMemo(() => {
    return MONTHS.map((month, index) => ({
      value: index + 1,
      label: month
    }))
  }, [])

  const years = React.useMemo(() => {
    const uniqueYears: number[] = []

    listData.forEach((item) => {
      const year = new Date(item.date).getFullYear()

      if (!uniqueYears.includes(year)) {
        uniqueYears.push(year)
      }
    })

    return uniqueYears
      .map((year) => ({
        value: year,
        label: year
      }))
      .sort((a, b) => b.label - a.label)
  }, [listData])

  const handleChange = (
    event:
      | React.FormEvent<HTMLInputElement>
      | React.FormEvent<HTMLSelectElement>
  ) => {
    const { name, value } = event.currentTarget

    name === 'month' ? setSelectedMonth(value) : setSelectedYear(value)
  }

  React.useEffect(() => {
    const response = listData
      .filter((filtered) => {
        const date = new Date(filtered.date)
        const month = String(date.getMonth())
        const year = String(date.getFullYear())

        return month === selectedMonth && year === selectedYear
      })
      .map((item) => ({
        description: item.description,
        amountFormatted: formatCurrency(Number(item.amount)),
        frequency: item.frequency,
        dateFormatted: formatDate(item.date),
        tagColor: item.frequency === 'recorrente' ? '#4E41F0' : '#E44C4E'
      }))

    setData(response)
  }, [listData, selectedMonth, selectedYear])

  return (
    <S.Container>
      <ContentHeader title={filters.title} lineColor={filters.lineColor}>
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

      <S.Filters>
        <button className="filterRecurrent">Recorrentes</button>
        <button className="filterEventual">Eventuais</button>
      </S.Filters>

      {data.map((card, i) => (
        <FinancialMovementCard
          key={i}
          title={card.description}
          subtitle={card.dateFormatted}
          amount={card.amountFormatted}
          tagColor={card.tagColor}
        />
      ))}
    </S.Container>
  )
}

export default FinancialMovement
