import { DivStyled } from "./Div.styled"
import type { DivProps } from "./Div.types"

export const Div = ({
  className,
  children
} : DivProps) => {
  return (
    <DivStyled className={className}>
        {children}
    </DivStyled>
  )
}
