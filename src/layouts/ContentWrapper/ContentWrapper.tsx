import { Container } from "../../components/atoms/Container/Container"
import { ContentWrapperStyled } from "./ContentWrapper.styled"
import type { ContentWrapperProps } from "./ContentWrapper.types"

export const ContentWrapper = ({ pagetitle, children }: ContentWrapperProps) => {

  document.title = pagetitle

  return (
    <ContentWrapperStyled>
        <Container className="greybar">
          <Container className="center">
            <h1>{pagetitle}</h1>
          </Container>
        </Container>
        <Container className="center">
          {children}
        </Container>
    </ContentWrapperStyled>
  )
}
