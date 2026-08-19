import { GoalCardStyled } from "./GoalCard.styled"
import parse from "html-react-parser";

type GoalCardProps = {
  number: number,
  title: string,
  color: string,
  icon: string
}

export const GoalCard = ({ number, title, color, icon }:GoalCardProps) => {
  return (
    <GoalCardStyled color={color}>
      <div>{number}</div>
      <div>{title}</div>
      <div>{parse(icon)}</div>
    </GoalCardStyled>
  )
}
