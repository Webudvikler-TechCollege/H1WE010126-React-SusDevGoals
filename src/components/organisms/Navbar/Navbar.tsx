import { NavLink } from "react-router-dom"
import { NavBarStyled } from "./NavBar.styled"

export const Navbar = () => {
    return (
        <NavBarStyled>
            <ul>
                <li><NavLink to="/goal/:goal_id">VERDENSMÅLENE</NavLink></li>
                <li><NavLink to="/education">UNDERVISNING</NavLink></li>
                <li><NavLink to="/customgoal">BYG DIT EGET MÅL</NavLink></li>
                <li><NavLink to="/faq">FAQ</NavLink></li>
                <li><NavLink to="/contact">KONTAKT OS</NavLink></li>
                <li><NavLink to="/login">LOGIN</NavLink></li>
            </ul>
        </NavBarStyled>
    )
}