
import { Navbar } from "../Navbar/Navbar"
import { HeaderStyled } from "./Header.styled"
import Logo from '../../../assets/images/logo-sdg.svg'
import { Div } from "../Div/Div"
import { Image } from "../Image/Image"

export const Header = () => {
    return (
        <>
            <Div className="bluebar"></Div>
            <HeaderStyled>
                <Image src={Logo} alt="SDG" />
                <Navbar />
            </HeaderStyled>
        </>
    )
}