import { Div } from "../Atoms/Div/Div"
import { Navbar } from "../Navbar/Navbar"
import { HeaderStyled } from "./Header.styled"
import Logo from '../../assets/images/logo-sdg.svg'
import { Image } from "../Atoms/Image/Image"

export const Header = () => {
    return (
        <>
            <Div bgcolor="primary" height="30px" width="100%"></Div>
            <HeaderStyled>
                <Image src={Logo} alt="SDG" />
                <Navbar />
            </HeaderStyled>
        </>
    )
}