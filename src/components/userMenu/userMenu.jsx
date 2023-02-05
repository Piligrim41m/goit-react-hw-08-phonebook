import { logOut } from "auth/auth-operation";
import { getUsername } from "auth/auth-selector"
import { useDispatch, useSelector } from "react-redux"
import { LogOutButton, Salutation, UserMenuContainer, UserName } from "./userMenu.styled";

export const UserMenu = () => {
    const dispatch = useDispatch();
    const userName = useSelector(getUsername);

    const handleClick = () => {
        return dispatch(logOut())
    }

    return (
        <UserMenuContainer>
            <Salutation>
                Welcome <UserName>{userName}</UserName>
            </Salutation>
            <LogOutButton type="button" onClick={handleClick}>Log out</LogOutButton>
        </UserMenuContainer>
    )
    // return (
    //     <div className="userMenu">
    //         <p>{userName}</p>
    //         <button type="button" onClick={handleClick} >Logout</button>
    //     </div>
    // )
}