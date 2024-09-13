// components/Pages/RegisterPage.js

import React from 'react';
import './RegisterPage.css'; 

// Signup.jsx
import { useEffect, useState, useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import useFetch from "../../UseFetch";
import { AuthContext, getAuthToken } from "./Auth/AuthProvider";
import axios from 'axios'
import appConfig from '../../../app-config';
// https://developers.google.com/identity/gsi/web/reference/js-reference

const Register = () => {
  const [isLoginSuccessful, setLoginSuccessful] = useState(false)

  const authContext = useContext(AuthContext);
  function signUpWithForm(e){
    e.preventDefault()
    var emailElement = document.getElementById('email')
    var firstNameElement = document.getElementById('firstName')
    var lastNameElement = document.getElementById('lastName')

    var passwordElement = document.getElementById('password')
    var hiddenElement = document.getElementById('from')
    let signUpBody = {
      'usernameOrEmail': emailElement.value,
      'email': emailElement.value,
      'password': passwordElement.value,
      'firstName': firstNameElement.value,
      'lastName': lastNameElement.value,
      'from': hiddenElement.value
    }
    debugger
    let config = {
      method: 'post',
      // maxBodyLength: Infinity,
      // url: 'http://localhost:5000/api/auth/login',
      headers: { 
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: signUpBody
    };

    axios(`${appConfig.BACKEND_BASE_URL}/api/auth/signup`, config)
    .then((response) => {
      authContext.signIn()
      console.log(JSON.stringify(response.data));
      let token = response.data.user.token
      if(token) {
        localStorage.setItem('propAuthToken', JSON.stringify({ token})); 
        // const navigate = useNavigate();
        // navigate('/Dashboard');
        setLoginSuccessful(true)
      }

    })
    .catch((error) => {
      console.log(error);
    });
  }
  const { handleGoogle, loading, error } = useFetch(
    `${appConfig.BACKEND_BASE_URL}/api/auth/signup`
  );

  useEffect(() => {
    //localStorage.removeItem('propAuthToken');
    // const VITE_REACT_APP_GOOGLE_CLIENT_ID="596693022834-oou2lgt3l76t8329mbvjo0p3ss6330ho.apps.googleusercontent.com"
    const VITE_REACT_APP_GOOGLE_CLIENT_ID=appConfig.VITE_REACT_APP_GOOGLE_CLIENT_ID
    /* global google */
    if (window.google) {
      google.accounts.id.initialize({
        client_id: VITE_REACT_APP_GOOGLE_CLIENT_ID,
        callback: handleGoogle,
      });

      google.accounts.id.renderButton(document.getElementById("signUpDiv"), {
        // type: "standard",
        theme: "filled_black",
        // size: "small",
        text: "continue_with",
        shape: "pill",
      });

      //get token from local storage
      let token= getAuthToken()
      token? setLoginSuccessful(true): setLoginSuccessful(false)
      // google.accounts.id.prompt()
    }
  }, [handleGoogle, isLoginSuccessful]);

  return (
    <div>
    {
    isLoginSuccessful? <Navigate to="/Dashboard"/> :
      <>
      <nav style={{ padding: "2rem" }}>
        <Link to="/">Go Back</Link>
      </nav>
      <header style={{ textAlign: "center" }}>
        <h1 className='w-50 mx-auto my-3'>Register to continue</h1>
      </header>
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className='w-50 m-auto'>
          <form method='post' action = {`${appConfig.BACKEND_BASE_URL}/api/auth/signup`}>
            <div className='row'>
              <label htmlFor='firstName' className='col-3'>FirstName</label>
              <input name='firstName' id='firstName' type='text' className='col-6 my-3' defaultValue=''/>
            </div>
            <div className='row'>
              <label htmlFor='lastName' className='col-3'>LastName</label>
              <input name='lastName' id='lastName' type='text' className='col-6 my-3' defaultValue=''/>
            </div>
            <div className='row'>
              <label htmlFor='email' className='col-3'>Email</label>
              <input name='email' id='email' type='text' className='col-6 my-3' defaultValue=''/>
            </div>
            <div className='row'>
              <label htmlFor='password' className='col-3'>Password</label>
              <input name='password' id='password' type='password' className='col-6 my-3' defaultValue=''/>
            </div>
            <div>
              <input name='from' id='from' type='hidden' value='form' className='bg-black rounded-4 text-white'/>
            </div>
            <input type='submit' className='btn btn-success mt-2 mb-3' style={{width: '300px', 'background-color': 'rgb(27, 63, 46)'}} onClick={signUpWithForm} defaultValue='Register'/>
          </form>
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {loading ? (
          <div>Loading....</div>
        ) : (
          <div id="signUpDiv" data-text="signup_with"></div>
        )}
      </main>
      <footer></footer>
    </>}
    </div>
  );
};

//export default SignUp;
export default Register;
