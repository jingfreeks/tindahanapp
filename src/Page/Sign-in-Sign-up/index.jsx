import React from 'react';
import './styles.scss';
import Signin from '../../Components/signin';
import SignUp from '../../Components/sign-Up';
const SignInSignUpPage=()=>{
    return(
        <div className="sign-in-sign-up">
            <Signin />
            <SignUp />
        </div>
    )
}

export default SignInSignUpPage;