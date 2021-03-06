import styled from 'styled-components';
import { Nav } from '../Navbar/NavbarElements';
import { flexContainer } from '../Navbar/NavbarElements';

export const SigninContainer = styled.div`
    ${flexContainer};
    height: 100%;
    height:100vh;
    background-color: #01bf71;
`
// nav
export const NavSignin = styled(Nav)`
    background-color: transparent;
    position: absolute;
    width: 100%;
    justify-content: start;
`
export const SigninWrapper = styled.div`
    //I will use the same variable in all the wrappers
    ${flexContainer}
    max-width: 1100px;
`

export const SigninFormContainer = styled.div`
    ${flexContainer}
    background-color: black;
    padding: 2.5rem 2.8rem;
    border-radius: 5px;
    width:380px;
    @media(max-width:420px){
        width:95%;
    }
`
export const SigninForm = styled.form`
    width:100%;
`
export const SigninFormTitle = styled.h3`
    text-align:center;
    margin-top:2rem;
    margin-bottom:2rem;
    font-weight: normal;
`
export const SigninInputContainer = styled.div`
margin-bottom: 1.5rem;
`
export const SigninInputLabel = styled.label`
    display: block;
    margin-bottom:.5rem;
    font-size:.8rem;
`
export const SigninInputField = styled.input`
    width:100%;
    padding:.5rem 1rem;
`
export const SigninInputSubmit = styled.input`
    ${flexContainer}
    background-color: #01bf71;
    color: white;
    font-size:1rem;
    padding: 10px 15px;
    width:100%;
    border:0;
    border-radius: 3px;
    cursor:pointer;
`
export const ForgotPasswordLink = styled.p`
    display:block;
    text-align:center;
    font-size: .8rem;
    cursor:pointer;
`