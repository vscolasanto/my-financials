import * as S from './styles'

interface IFinancialMovementCardProps {
  title: string
  subtitle: string
  amount: string
  tagColor: string
}

const FinancialMovementCard: React.FC<IFinancialMovementCardProps> = ({
  title,
  subtitle,
  amount,
  tagColor
}) => {
  console.log('tagColor', tagColor)

  return (
    <S.Container tagColor={tagColor}>
      <S.Tag tagColor={tagColor} />
      <S.Title>
        <span>{title}</span>
        <small>{subtitle}</small>
      </S.Title>
      <h2>{amount}</h2>
    </S.Container>
  )
}

export default FinancialMovementCard
