import { DivStyled } from "./Div.styled"
import type { DivProps } from "./Div.types"

export const Div = ({
  bgcolor, 
  width, 
  height, 
  className,
  children
} : DivProps) => {
  return (
    <DivStyled 
      $bgcolor={bgcolor} 
      $width={width} 
      $height={height}
      className={className}
    >
        {children}
    </DivStyled>
  )
}
