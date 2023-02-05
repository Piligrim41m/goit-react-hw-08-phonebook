import { logIn } from "auth/auth-operation";
// import { useState } from "react"
import { useDispatch } from "react-redux";
import { AuthButton, AuthContainer, AuthForm, AuthHeader, AuthInput, AuthLabel } from "./login.styled";

const LoginPage = () => {
    const dispatch = useDispatch()
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    // const HandleChange = ({ target: { name, value } }) => {
    //     switch (name) {
    //         case 'email':
    //             return setEmail(value);
    //         case 'password':
    //             return setPassword(value);
    //         default:
    //             return;
    //     }
    // };

    const handleSubmit = event => {
        const { email, password } = event.currentTarget.elements;
        event.preventDefault();
        dispatch(logIn({
            email: email.value,
            password: password.value,
        }))
        // setEmail('')
        // setPassword('')
    };

    return (
        <AuthContainer>
            <AuthHeader>Login</AuthHeader>
            <AuthForm autoComplete="off" onSubmit={handleSubmit}>
                <AuthLabel htmlFor="email">
                    <span>Email</span>
                    <AuthInput name="email" type='email'/>
                </AuthLabel>
                <AuthLabel htmlFor="password">
                    <span>Password</span>
                    <AuthInput name="password" type='password'/>
                </AuthLabel>
                <AuthButton type="submit">Login</AuthButton>
            </AuthForm>
        </AuthContainer>
    )
    // return (
    //     <div>
    //         <h2>Login</h2>
    //         <form onSubmit={HandleSubmit} autoComplete='of'>
    //             <label>
    //                 Email
    //                 <input
    //                     type='email'
    //                     name='email'
    //                     value={email}
    //                     onChange={HandleChange}
    //                 />                    
    //             </label>
    //             <label>
    //                 Password
    //                 <input
    //                     type='password'
    //                     name='password'
    //                     value={password}
    //                     onChange={HandleChange}
    //                 />                    
    //             </label>
    //             <button type="submit">Login</button>
    //         </form>
    //     </div>
    // )
}

export default LoginPage