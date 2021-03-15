import * as S from './styles'

import ContentHeader from 'components/shared/ContentHeader'
import SelectInput from 'components/shared/SelectInput'

const Dashboard: React.FC = () => {
  const options = [
    { value: 'ana', label: 'Ana' },
    { value: 'joaozinho', label: 'Joãozinho' },
    { value: 'pasquale', label: 'Pasquale' }
  ]

  return (
    <S.Container>
      <ContentHeader title="Dashboard" lineColor={'#2B5DFF'}>
        <SelectInput options={options} onChange={() => null} />
      </ContentHeader>
    </S.Container>
  )
}

export default Dashboard
