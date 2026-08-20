import { LabelStyled } from "./Label.styled"
import type { LabelProps } from "./Label.types"

export const Label = ({ htmlFor, title }: LabelProps) => {
  return (
    <LabelStyled htmlFor={htmlFor}>
        {title}
    </LabelStyled>
  )
}
