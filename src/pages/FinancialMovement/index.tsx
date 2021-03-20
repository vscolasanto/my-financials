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
  const movimentType = match.params.type
  const [selectedMonth, setSelectedMonth] = React.useState<number>(
    new Date().getMonth()
  )
  const [selectedYear, setSelectedYear] = React.useState<number>(
    new Date().getFullYear()
  )
  const [data, setData] = React.useState<IData[]>([])
  const [frequencyFilterSelected, setFrequencyFilterSelected] = React.useState([
    'recorrente',
    'eventual'
  ])

  const pageData = React.useMemo(() => {
    return movimentType === 'entradas'
      ? { title: 'Entradas', lineColor: '#00D4AD', data: gains }
      : { title: 'Saídas', lineColor: '#E44C4E', data: expenses }
  }, [movimentType])

  const months = React.useMemo(() => {
    return MONTHS.map((month, index) => ({
      value: index,
      label: month
    }))
  }, [])

  const years = React.useMemo(() => {
    const uniqueYears: number[] = []

    pageData.data.forEach((item) => {
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
  }, [pageData.data])

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

  const handleFrequencyClick = (frequency: string) => {
    const frequencyAlreadySelected = frequencyFilterSelected.findIndex(
      (item) => item === frequency
    )

    if (frequencyAlreadySelected >= 0) {
      const filtered = frequencyFilterSelected.filter(
        (freq) => freq !== frequency
      )
      setFrequencyFilterSelected(filtered)
    } else {
      setFrequencyFilterSelected((prev) => [...prev, frequency])
    }
  }

  React.useEffect(() => {
    const response = pageData.data
      .filter((filtered) => {
        const date = new Date(filtered.date)
        const month = date.getMonth()
        const year = date.getFullYear()

        return (
          month === selectedMonth &&
          year === selectedYear &&
          frequencyFilterSelected.includes(filtered.frequency)
        )
      })
      .map((item) => ({
        description: item.description,
        amountFormatted: formatCurrency(Number(item.amount)),
        frequency: item.frequency,
        dateFormatted: formatDate(item.date),
        tagColor: item.frequency === 'recorrente' ? '#4E41F0' : '#E44C4E'
      }))
    setData(response)
  }, [pageData.data, selectedMonth, selectedYear, frequencyFilterSelected])

  return (
    <S.Container>
      <ContentHeader title={pageData.title} lineColor={pageData.lineColor}>
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
        <button
          className={`filterRecurrent ${
            frequencyFilterSelected.includes('recorrente') && 'tag-activated'
          }`}
          onClick={() => handleFrequencyClick('recorrente')}
        >
          Recorrentes
        </button>
        <button
          className={`filterEventual ${
            frequencyFilterSelected.includes('eventual') && 'tag-activated'
          }`}
          onClick={() => handleFrequencyClick('eventual')}
        >
          Eventuais
        </button>
      </S.Filters>

      <S.Content>
        {data.map((card, i) => (
          <FinancialMovementCard
            key={i}
            title={card.description}
            subtitle={card.dateFormatted}
            amount={card.amountFormatted}
            tagColor={card.tagColor}
          />
        ))}
        {data.length === 0 && (
          <S.NoContentToShow>
            <h1>Nenhum resultado para os filtros solicitados!</h1>
          </S.NoContentToShow>
        )}
      </S.Content>
    </S.Container>
  )
}

export default FinancialMovement
