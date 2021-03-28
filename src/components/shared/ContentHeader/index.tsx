import * as S from './styles'

interface IContentHeaderProps {
  title: string
  lineColor: string
  children: React.ReactNode
}

const ContentHeader: React.FC<IContentHeaderProps> = ({
  title,
  lineColor,
  children
}) => (
  <S.Container>
    <S.TitleContainer lineColor={lineColor}>
      <h2>{title}</h2>
    </S.TitleContainer>
    <S.Filters>{children}</S.Filters>
  </S.Container>
)

export default ContentHeader
