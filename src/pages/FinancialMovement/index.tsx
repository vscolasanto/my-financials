import React from 'react'
import * as S from './styles'

import { MONTHS, currentMonth, YEARS } from 'utils/date'

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

  const months = MONTHS
  const [month, setMonth] = React.useState(currentMonth())
  const [data, setData] = React.useState<IData[]>([])
  const years = YEARS
  const year = React.useState()[0]

  const filters = React.useMemo(() => {
    return type === 'entradas'
      ? { title: 'Entradas', lineColor: '#00D4AD' }
      : { title: 'Saídas', lineColor: '#E44C4E' }
  }, [type])

  const listData = React.useMemo(() => {
    return type === 'entradas' ? gains : expenses
  }, [type])

  const handleSelectMonth = (event: React.FormEvent<HTMLSelectElement>) => {
    const month = Number(event.currentTarget.value)
    setMonth(month)
  }

  React.useEffect(() => {
    const response = listData.map((item) => ({
      description: item.description,
      amountFormatted: item.amount,
      frequency: item.frequency,
      dateFormatted: item.date,
      tagColor: item.frequency === 'recorrente' ? '#4E41F0' : '#E44C4E'
    }))
    setData(response)
  }, [listData])

  return (
    <S.Container>
      <ContentHeader title={filters.title} lineColor={filters.lineColor}>
        <SelectInput
          options={months}
          value={month}
          onChange={handleSelectMonth}
        />
        <SelectInput
          options={years()}
          value={year}
          onChange={handleSelectMonth}
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
