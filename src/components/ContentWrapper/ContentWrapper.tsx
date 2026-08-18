import { Div } from "../Atoms/Div/Div"
import { ContentWrapperStyled } from "./ContentWrapper.styled"
import type { ContentWrapperProps } from "./ContentWrapper.types"

export const ContentWrapper = ({ pagetitle, children }: ContentWrapperProps) => {

  document.title = pagetitle

  return (
    <ContentWrapperStyled>
        <Div className="greybox">
          <Div className="center">
            <h1>{pagetitle}</h1>
          </Div>
        </Div>
        <Div className="center">
          {children}
        </Div>
    </ContentWrapperStyled>
  )
}
