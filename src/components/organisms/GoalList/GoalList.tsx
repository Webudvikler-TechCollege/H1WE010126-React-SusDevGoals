import { GoalListStyled } from "./GoalList.styled"
import Divider from '../../../assets/images/divider.svg'
import { Link } from "react-router-dom"
import { GoalGridStyled } from "./GoalGrid.styled"
import { Container } from "../../atoms/Container/Container"
import { goals } from "../../../data/sdg"
import { GoalCard } from "../../molecules/GoalCard/GoalCard"

export const GoalList = () => {
  return (
    <GoalListStyled>
      <Container className="greybox">
        <h1>FN's verdensmål for bæredygtig udvikling</h1>
        <img src={Divider} />
        <Container className="center">
          <GoalGridStyled>
            {goals.map((value, index) => {
              return (
                <Link to={`/goal/${value.id}`} key={index} >
                  <GoalCard number={Number(value.id)} title={value.title} color={value.color} icon={value.icon} />
                </Link>
              )
            })}
          </GoalGridStyled>
        </Container>
      </Container>
    </GoalListStyled>
  )
}
