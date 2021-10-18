import React, { useContext, useState } from 'react';
import "./Sign.css"
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebaseConfig from "./Firebase.Config"
import { userContext } from '../../../App';
import { useHistory, useLocation } from 'react-router';
initializeApp(firebaseConfig);

const SignIn = () => {
    const [loggedInUser,setLoggedInUser]=useContext(userContext)
    const history =useHistory()
    const location=useLocation()
    let { from } = location.state || { from: { pathname: "/" } };
    const [user, setUser] = useState({
        isSignIn: false,
        name: "",
        email: "",
        photo: ""
    })
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const { name, email, photo, isSignIn } = user;
    const handleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const { displayName, email, photoURL } = result.user;
                const singnInUser = {
                    isSignIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL,
                }
                setUser(singnInUser)
                setLoggedInUser(singnInUser)
                history.replace(from);

            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }
    return (
        <div className="signin">
        <div  style={{ padding: '10px', margin: "20px" }}> 
            {
                isSignIn ? <button  className="btn btn-primary"  onClick={() => setUser(" ")}>signout</button> : <button  className="btn btn-primary" onClick={handleSignIn} >Sign In with Google</button>
            }
            <br /> <br />
            {
                isSignIn && <div>
                    <img src={photo} alt="" />
                    <p>Name : - {name}</p>
                    <p>Email :- {email}</p>
                </div>
            }
            </div>
        </div>
    );
}

export default SignIn;