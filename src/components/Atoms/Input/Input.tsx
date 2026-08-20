import { InputStyled } from "./Input.styled"
import type { InputProps } from "./Input.types"

export const Input = ({ type, name, onChange }: InputProps) => {
  return (
    <InputStyled 
      type={type}
      name={name}
      onChange={onChange}
    />
  )
}
