import { ContentWrapper } from "../../components/ContentWrapper/ContentWrapper"
import { GoalList } from "../../components/GoalList/GoalList"

export const HomePage = () => {
  return (
    <ContentWrapper pagetitle="Forside">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa aspernatur eos modi dolorem impedit ut adipisci optio nisi temporibus incidunt fuga amet qui provident perspiciatis, nobis at omnis, explicabo eveniet.</p>
        <GoalList />
    </ContentWrapper>
  )
}
