import { NavItem, NavList } from "components/AppBar/AppBar.styled"
// import { NavLink } from "react-router-dom"

export const AuthNav = () => {
    return (
        <NavList>
            <NavItem to="/login">Login</NavItem>
            <NavItem to='/register'>Register</NavItem>
        </NavList>
        // <ul>
        //     <li><NavLink to="/login">Login</NavLink></li>
        //     <li><NavLink to="/register">Register</NavLink></li>
        // </ul>
    )
}