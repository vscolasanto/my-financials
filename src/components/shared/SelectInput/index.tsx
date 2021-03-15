import * as S from './styles'

interface ISelectInputProps {
  options: {
    value: string | number
    label: string | number
  }[]
  onChange: () => void
}

const SelectInput: React.FC<ISelectInputProps> = ({ options }) => {
  return (
    <S.Container>
      <select name="" id="">
        {options?.map(({ value, label }) => (
          <option key={value} value="A">
            {label}
          </option>
        ))}
      </select>
    </S.Container>
  )
}

export default SelectInput
