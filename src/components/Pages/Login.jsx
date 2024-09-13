// components/Pages/LoginPage.js

import {React, useEffect, useState} from 'react';
import { useNavigate, Navigate } from 'react-router-dom';

import axios from 'axios'
// const LoginI = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = (e) => {
//     e.preventDefault();
//     // Placeholder login logic
//     console.log('Logging in with:', email, password);
//     // Clear form fields after login
//     setEmail('');
//     setPassword('');
//   };

//   const handleLoginWithGoogle = () => {
//     // Placeholder login with Google logic
//     console.log('Logging in with Google');
//   };

//   const handleLoginWithApple = () => {
//     // Placeholder login with Apple logic
//     console.log('Logging in with Apple');
//   };

//   return (
//     <div className="login">
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <div className="form-group">
//           <label htmlFor="email">Email Address</label>
//           <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password</label>
//           <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//       <div className="social-login">
//         <button onClick={handleLoginWithGoogle}>Login with Google</button>
//         <button onClick={handleLoginWithApple}>Login with Apple</button>
//       </div>
//     </div>
//   );
// };



// import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useFetch from "../../UseFetch";
import { useContext } from "react";
import {AuthContext} from "./Auth/AuthProvider";
import appConfig from '../../../app-config';
// https://developers.google.com/identity/gsi/web/reference/js-reference

const Login = () => {
  const [isLoginSuccessful, setLoginSuccessful] = useState(false)
  const { signIn } = useContext(AuthContext);
  const { handleGoogle, loading, error } = useFetch(
    //"http://localhost:5000/api/auth/login"
    `${appConfig.BACKEND_BASE_URL}/api/auth/login`
  );
  // const VITE_REACT_APP_GOOGLE_CLIENT_ID="596693022834-oou2lgt3l76t8329mbvjo0p3ss6330ho.apps.googleusercontent.com"
  const VITE_REACT_APP_GOOGLE_CLIENT_ID=appConfig.VITE_REACT_APP_GOOGLE_CLIENT_ID
  useEffect(() => {

    //var clientid = import.meta.env.VITE_REACT_APP_GOOGLE_CLIENT_ID
    var clientid = VITE_REACT_APP_GOOGLE_CLIENT_ID
    console.log(clientid)
    /* global google */
    if (window.google) {
        // console.log('removing token before login')
        // localStorage.removeItem('propAuthToken');
        google.accounts.id.initialize({
        //client_id: import.meta.env.VITE_REACT_APP_GOOGLE_CLIENT_ID,
        client_id: VITE_REACT_APP_GOOGLE_CLIENT_ID,
        callback: handleGoogle,
      });

      google.accounts.id.renderButton(document.getElementById("loginDiv"), {
        // type: "standard",
        theme: "filled_black",
        // size: "small",
        text: "signin_with",
        shape: "pill",
      });

      // google.accounts.id.prompt()    
      }
  }, [handleGoogle, isLoginSuccessful]);

  function formLogin(){
    // console.log('removing token before login')
    // localStorage.removeItem('propAuthToken');
    var emailElement = document.getElementById('email')
    var passwordElement = document.getElementById('password')
    var hiddenElement = document.getElementById('from')
    let loginBody = {
      'usernameOrEmail': emailElement.value,
      'password': passwordElement.value,
      'from': hiddenElement.value
    }
    let config = {
      method: 'post',
      // maxBodyLength: Infinity,
      // url: 'http://localhost:5000/api/auth/login',
      headers: { 
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: loginBody
    };

    axios(`${appConfig.BACKEND_BASE_URL}/api/auth/login`, config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      let token = response.data.userInfo.token
      if(token) {
        localStorage.setItem('propAuthToken', token); 
        // const navigate = useNavigate();
        // navigate('/Dashboard');
        //signIn()
        setLoginSuccessful(true)
      }

    })
    .catch((error) => {
      console.log(error);
    });
  }


  return (
    <>
        {isLoginSuccessful? <Navigate to="/Dashboard"/> :
        
        <div>
      <nav style={{ padding: "2rem" }}>
        <Link to="/">Go Back</Link>
      </nav>
      <header style={{ textAlign: "center" }}>
        <h1 className='w-50 mx-auto my-3'>Login to continue</h1>
      </header>
      <div className='w-50 m-auto' >
        <div className='row'>
          <label for='email' className='col-3'>Email</label>  
          <input id='email' name='email' type='email' className='col-6 my-3'/>
        </div>
        <div className='row'>
          <label for='password' className='col-3'>Password</label>
          <input id='password' name='password' type='password' className='col-6 my-3'/>
        </div>

        <input id='from' name='from' type='hidden' value='form'/>
        <input type='submit' onClick = {formLogin} style={{width: '300px', 'background-color': 'rgb(27, 63, 46)' }} className='btn mt-2 mb-5'/>
      </div>
      <h5>OR Continue with Google</h5>
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {error && <p style={{ color: "red" }}>{error}</p>}
        {loading ? <div>Loading....</div> : <div id="loginDiv"></div>}
      </main>
      <footer></footer>
        </div>
        }

    </>
  );
};

export default Login;
//export default Login;
