import { Div } from "../Atoms/Div/Div"
import { Navbar } from "../Navbar/Navbar"
import { HeaderStyled } from "./Header.styled"

export const Header = () => {
    return (
        <>
            <Div bgcolor="primary" height="30px" width="100%"></Div>
            <HeaderStyled>
                <h1>Min nye react app</h1>
                <Navbar />
            </HeaderStyled>
        </>
    )
}