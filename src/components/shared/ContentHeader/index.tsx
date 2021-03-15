import * as S from './styles'

const ContentHeader: React.FC = () => {
  return (
    <S.Container>
      <S.TitleContainer>
        <h2>Dashboard</h2>
      </S.TitleContainer>
      <S.Filters></S.Filters>
    </S.Container>
  )
}

export default ContentHeader
