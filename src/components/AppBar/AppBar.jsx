import { getIsLoggedIn } from "auth/auth-selector"
import { AuthNav } from "components/authNav/authNav"
import { Navigation } from "components/navigation/navigation"
import { UserMenu } from "components/userMenu/userMenu"
import { useSelector } from "react-redux"
// import { NavLink } from "react-router-dom"
import { SiteHeader } from "./AppBar.styled"


export const AppBar = () => {
  const isLoggedIn = useSelector(getIsLoggedIn)
  return (
    <SiteHeader>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </SiteHeader>
//   <div>
//     {/* <div className="home">
//       <NavLink to='/'>Home</NavLink>
//     </div>
//       {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
//     {/* ------------------------------- */}
//     {/* <ul className="authNav">
//     <li><NavLink to="/login">Login</NavLink></li>
//     <li><NavLink to="/register">Register</NavLink></li>
//   </ul>
//   <div className="userMenu">
//     <p>mango@mail.com</p>
//     <button>Logout</button>
//   </div> */}
// </div>

) }
