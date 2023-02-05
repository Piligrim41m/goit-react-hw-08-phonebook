import { register } from "auth/auth-operation";
import { AuthButton, AuthContainer, AuthForm, AuthHeader, AuthInput, AuthLabel } from "pages/login/login.styled";
// import { useState } from "react"
import { useDispatch } from "react-redux";

const RegisterPage = () => {
    const dispatch = useDispatch()
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [name, setName] = useState('')

    // const HandleChange = ({ target: { name, value } }) => {
    //     switch (name) {
    //         case 'email':
    //             return setEmail(value);
    //         case 'password':
    //             return setPassword(value);
    //         case 'name':
    //             return setName(value);
    //         default:
    //             return;
    //     }
    // };

    const handleSubmit = event => {
        event.preventDefault();
        const { email, password, name } = event.currentTarget.elements;
        dispatch(register({
            email: email.value,
            password: password.value,
            name: name.value,
        }))
        // setEmail('')
        // setPassword('')
        // setName('')
    };

    return (
        <AuthContainer>
            <AuthHeader>Register</AuthHeader>
            <AuthForm autoComplete="off" onSubmit={handleSubmit}>
                <AuthLabel htmlFor="name">
                    <span>Name</span>
                    <AuthInput name="name" type='text'/>
                </AuthLabel>
                <AuthLabel htmlFor="email">
                    <span>Email</span>
                    <AuthInput name="email" type='email'/>
                </AuthLabel>
                <AuthLabel htmlFor="password">
                    <span>Password</span>
                    <AuthInput name="password" type='password'/>
                </AuthLabel>
                <AuthButton type="submit">Signup</AuthButton>
            </AuthForm> 
        </AuthContainer>
    )
    // return (
    //     <div>
    //         <h2>Login</h2>
    //         <form onSubmit={HandleSubmit} autoComplete='of'>
    //             <label>
    //                 Name
    //                 <input
    //                     type='name'
    //                     name='name'
    //                     value={name}
    //                     onChange={HandleChange}
    //                 />                    
    //             </label>
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
    //             <button type="submit">Signup</button>
    //         </form>
    //     </div>
    // )
}

export default RegisterPage