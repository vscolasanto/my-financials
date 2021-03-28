import { InputHTMLAttributes } from 'react'
import * as S from './styles'

interface ISelectInputProps extends InputHTMLAttributes<HTMLSelectElement> {
  options: {
    value: string | number
    label: string | number
  }[]
}

const SelectInput: React.FC<ISelectInputProps> = ({ options, ...props }) => (
  <S.Container>
    <select name="" id="" {...props}>
      {options?.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  </S.Container>
)

export default SelectInput
