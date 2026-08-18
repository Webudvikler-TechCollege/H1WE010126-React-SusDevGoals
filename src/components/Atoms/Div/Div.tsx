import { DivStyled } from "./Div.styled"
import type { DivProps } from "./Div.types"

export const Div = ({
  bgcolor, 
  width, 
  height, 
  children
} : DivProps) => {
  return (
    <DivStyled 
      bgcolor={bgcolor} 
      width={width} 
      height={height}
    >
        {children}
    </DivStyled>
  )
}
