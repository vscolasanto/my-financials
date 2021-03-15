import * as S from './styles'

import ContentHeader from 'components/shared/ContentHeader'
import SelectInput from 'components/shared/SelectInput'
import FinancialMovementCard from 'components/shared/FinancialMovementCard'

const FinancialMovement: React.FC = () => {
  const options = [
    { label: 'A', value: 'A' },
    { label: 'B', value: 'B' },
    { label: 'C', value: 'C' }
  ]

  const elements = () => {
    const cards = []
    const quantity = 15

    for (let i = 0; i < quantity; i++) {
      cards.push(
        <FinancialMovementCard
          key={i}
          title="Conta de luz"
          subtitle="01/03/2021"
          amount="320"
          tagColor="#7ab1c9"
        />
      )
    }

    return cards
  }

  return (
    <S.Container>
      <ContentHeader title="Movimentações de Saídas" lineColor="#E44C4E">
        <SelectInput options={options} onChange={() => null} />
        <SelectInput options={options} onChange={() => null} />
      </ContentHeader>

      {elements()}
    </S.Container>
  )
}

export default FinancialMovement
