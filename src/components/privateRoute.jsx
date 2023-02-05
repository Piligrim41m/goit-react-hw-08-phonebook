import { getIsLoggedIn, getIsRefreshing } from "auth/auth-selector"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"


export const PrivatRoute = ({ component: Component, redirectTo = '/' }) => {
    const isLoggedIn = useSelector(getIsLoggedIn)
    const isRefreshing = useSelector(getIsRefreshing)
    const shouldRedirect = !isLoggedIn && !isRefreshing;
    return (
        shouldRedirect ? <Navigate to={redirectTo}/> : Component
    )
}