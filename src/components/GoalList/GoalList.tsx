import { goals } from "../../data/sdg"
import { GoalListStyled } from "./GoalList.styled"
import Divider from '../../assets/images/divider.svg'
import { Link } from "react-router-dom"
import { Div } from "../Atoms/Div/Div"
import { GoalCard } from "../GoalCard/GoalCard"

export const GoalList = () => {
  return (
    <GoalListStyled>
      <Div className="greybox">
        <h1>FN's verdensmål for bæredygtig udvikling</h1>
        <img src={Divider} />
        <Div  className="center">
          <ul>
            {goals.map((value, index) => {
              return (
                <Link to={`/goal/${value.id}`} key={index} >
                  <GoalCard number={Number(value.id)} title={value.title} color={value.color} icon={value.icon} />
                </Link>
              )
            })}
          </ul>
        </Div>
      </Div>
    </GoalListStyled>
  )
}
