import React from 'react'
import "./LoginScreen.css"
import { useState } from 'react';
import SignUpScreen from './SignUpScreen';
import { Link } from 'react-router-dom';


function LoginScreen() {

    const [sigIn, setSignIn] = useState(false);
    // const [homeSkip, setHome] = useState(false);

    return (
        <div className='loginScreen'>
            <div class="loginScreen__background">
                <img
                    className="loginScreen__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
                    alt=""
                />
                <button onClick={() => setSignIn(true)} className='loginScreen__button'>
                    Sign In
                </button>
                <div class="loginScreen__gradient" />
                <div class="loginScreen__body">
                    {sigIn ? (
                        <SignUpScreen />
                    ) : (
                        <>
                            <h1>Unlimited Films, TV Programmes and more.</h1>
                            <h2>Watch anywhere. Cancel at any time.</h2>
                            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                            <div className="loginScreen__input">
                                <form action="">
                                    <input type='email' placeholder='Email Address' />
                                    <button onClick={() => setSignIn(true)} className='loginScreen__getStarted'>GET STARTED</button>
                                    <button className='loginScreen__getStarted1'>   <Link
                                        className="aref_s" to="/skiphome">SKIP LOGIN TO HOME SCREEN</Link>
                                    </button>
                                </form>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}
export default LoginScreen