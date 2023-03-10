import { getIsLoggedIn } from "auth/auth-selector"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"


export const RestrictedRoute = ({ component: Component, redirectTo = '/'}) => {
    const isLoggedIn = useSelector(getIsLoggedIn)
    return isLoggedIn ? <Navigate to={redirectTo} /> : Component
}