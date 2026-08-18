import { MainStyled } from "./Main.styled"

type MainProps = {
    children: React.ReactNode
}

export const Main = ({children}: MainProps) => {
    return (
        <MainStyled>
            {children}
        </MainStyled>
    )
}
