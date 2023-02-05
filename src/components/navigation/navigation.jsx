import { getIsLoggedIn } from "auth/auth-selector"
import { NavItem, NavList } from "components/AppBar/AppBar.styled"
import { useSelector } from "react-redux"

export const Navigation = () => {
    const isLoggedin = useSelector(getIsLoggedIn)

    return (
        <NavList>
            <NavItem to='/'>Home</NavItem>
            {isLoggedin && <NavItem to='/contacts'>Contacts</NavItem>}
        </NavList>
    )
};