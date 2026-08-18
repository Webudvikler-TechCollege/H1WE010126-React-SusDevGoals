import { NavLink } from "react-router-dom"
import { NavBarStyled } from "./NavBar.styled"

export const Navbar = () => {
    return (
        <NavBarStyled>
            <ul>
                <li><NavLink to="/">VERDENSMÅLENE</NavLink></li>
                <li><NavLink to="/">UNDERVISNING</NavLink></li>
                <li><NavLink to="/">BYG DIT EGET MÅL</NavLink></li>
                <li><NavLink to="/">FAQ</NavLink></li>
                <li><NavLink to="/">KONTAKT OS</NavLink></li>
                <li><NavLink to="/">LOGIN</NavLink></li>
            </ul>
        </NavBarStyled>
    )
}