import React from 'react'
import {
    SigninContainer,
    SigninFormContainer,
    NavSignin,
    SigninWrapper,
    SigninForm,
    SigninFormTitle,
    SigninInputContainer,
    SigninInputLabel,
    SigninInputField,
    SigninInputSubmit,
    ForgotPasswordLink
} from './signinElements';
import { NavLogoRoute } from '../Navbar/NavbarElements'

export const Login = () => {
    return (
        <>
            <SigninContainer>
                <NavSignin>
                    <NavLogoRoute to='/'>MORA</NavLogoRoute>
                </NavSignin>
                <SigninWrapper>
                    <SigninFormContainer>
                        <SigninForm>
                            <SigninFormTitle>Sign in to your account</SigninFormTitle>
                            <SigninInputContainer>
                                <SigninInputLabel htmlFor='email'>
                                    Email
                                </SigninInputLabel>
                                <SigninInputField type='email' name='email'>

                                </SigninInputField>
                            </SigninInputContainer>

                            <SigninInputContainer>
                                <SigninInputLabel htmlFor='password'>
                                    Password
                                </SigninInputLabel>
                                <SigninInputField type='password' name='password'>

                                </SigninInputField>
                            </SigninInputContainer>
                            <SigninInputContainer>
                                <SigninInputSubmit type='submit'>

                                </SigninInputSubmit>
                            </SigninInputContainer>
                            <ForgotPasswordLink>Forgot Password</ForgotPasswordLink>
                        </SigninForm>
                      
                    </SigninFormContainer>

                </SigninWrapper>
            </SigninContainer>
        </>
    )
}

/*
THIS EXLPLAIN THE CLEANUP FN IN EFFECT
function returnsCleanupFn(){
    let available = true;
    setTimeout( () => {
        if(available){
            console.log('state was updated');
        } else {
            console.log('upss component is not available');
        }
    }, 4000);

    return () => available = !available
}


undefined
returnsCleanupFn()()
false


*/