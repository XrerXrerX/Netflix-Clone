import React, { useRef } from 'react'
import './SignUpScreen.css'
// import { auth, db } from '../firebase';

function SignUpScreen() {

    const emailref = useRef(null)
    const passwordref = useRef(null)

    const register = (e) => {
        e.preventDefault();

        // auth.createUserWithEmaulAndPassword()
    };

    const signIn = (e) => {
        e.preventDefault();
    }
    return (
        <div className='signUpScreen'>
            <form action="">
                <h1>Sign In</h1>
                <input ref={emailref} type='email' placeholder='email' />
                <input ref={passwordref} type='password' placeholder='password' />
                <button type='submit' onClick={signIn}>Sign In</button>
                <h4>
                    <span className='signUpScreen_gray'> New to Netflix ?</span> <span className='signUpScreen__link' onClick={register}>Sign Up now.</span> </h4>
            </form>
        </div>
    )
}

export default SignUpScreen