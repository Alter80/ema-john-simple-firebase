import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { user, signInUsingGoole } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirectURL = location.state?.from || '/shop';
    console.log('came from', location.state?.from);

    const handleGoogleLogin = () => {
        signInUsingGoole()
            .then(result => {
                history.push(redirectURL);
            })
    }


    return (
        <div className='login-form'>
            <div>
                <h2>Login</h2>
                <form >
                    <input type='email' name='' id='' placeholder='your email' /> <br />
                    <input type='password' name='' id='' placeholder='your password' /> <br />
                    <input type="submit" value="Submit" />
                </form>

                <p>New to ema-john! <Link to='/register'>Create an Account</Link></p>

                <div>-----------------or---------------</div>
                <button className='btn-regular' onClick={handleGoogleLogin}>Google Sign in</button>
            </div>
        </div>
    );
};

export default Login;