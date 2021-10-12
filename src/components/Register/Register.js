import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const { user, signInUsingGoole } = useAuth();
    return (
        <div className='login-form'>
            <div>
                <h2>Register: Create Account</h2>
                <form >
                    <input type="email" name="" id="" placeholder='your email' />
                    <br />
                    <input type="password" name="" id="" placeholder='your password' />
                    <br />
                    <input type="password" name="" id="" placeholder='Re-enter your password' />
                    <br />
                    <input type="submit" value="Submit" />
                </form>

                <p>Already have an account <Link to='/login'>Login</Link></p>
                <div>--------------------or-------------------</div>
                <button className="btn-regular" onClick={signInUsingGoole}>Google Sign in</button>
            </div>
        </div>
    );
};

export default Register;