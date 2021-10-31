import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { googleSignIn } = useAuth();

    // THis is for Redirect to the initial page after login
    const location = useLocation()
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    const handleGoogleLogIn = () => {
        googleSignIn()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    return (
        <div className="container my-5">
            <button className="my-5" onClick={handleGoogleLogIn}>
                <img className="img-fluid" src="https://i.ibb.co/VtvJ2km/2dywpzc.png" alt="Login With Google" />
            </button>
        </div>
    );
};

export default Login;