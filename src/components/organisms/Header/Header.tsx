import { Navbar } from "../Navbar/Navbar"
import { HeaderStyled } from "./Header.styled"
import Logo from '../../../assets/images/logo-sdg.svg'
import { Container } from "../../atoms/Container/Container"
import { Image } from "../../atoms/Image/Image"
import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <>
            <Container className="bluebar" />
            <HeaderStyled>
                <Link to="/"><Image src={Logo} alt="SDG" /></Link>
                <Navbar />
            </HeaderStyled>
        </>
    )
}