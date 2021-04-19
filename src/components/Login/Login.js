import React, { useContext } from 'react';
import firebase from "firebase/app";
import './Login.css'
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import Navbar from '../HomePage/Header/Navbar/Navbar';

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
const provider = new firebase.auth.GoogleAuthProvider();

const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const signedInUser = { ...result.user }
                setLoggedInUser(signedInUser);
                history.replace(from);
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    };

    return (
        <div>
            <Navbar />
            <div className="google-login d-flex justify-content-center align-items-center">
            <button className="btn google-btn" onClick={handleGoogleSignIn}>
                <span className="google-icon">
                    <img
                        src="https://cdn.worldvectorlogo.com/logos/google-icon.svg"
                        alt="google-icon"
                    />
                </span>
                    Sign In With Google
            </button>
        </div>
        </div>
    );
};

export default Login;