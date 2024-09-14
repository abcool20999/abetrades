
// App.jsx

import {React, useEffect, useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Layout/Header';
import HomePage from './components/Pages/HomePage/Hompage'
import Sidebar from './components/Layout/sidebar';
import Footer from './components/Layout/Footer/Footer';
//import HomePage from './components/Pages/HomePage';
import GetCapitalSuccess from './components/Pages/GetCapitalSuccess/GetCapitalSuccess';
import GetCapitalConfirm from './components/Pages/GetCapitalConfirm/GetCapitalConfirm';
import GetCapital from './components/Pages/GetCapital/GetCapital';
import Login from './components/Pages/Login';
import Logout from './components/Pages/Auth/Logout'
import Register from './components/Pages/Register';
import MyAccounts from './components/Pages/MyAccounts';
import Dashboard from './components/Pages/DashBoard/Dashboard';
import WebTrader from './components/WebTrader/WebTrader'
import AuthProvider, {AuthIsNotSignedIn, AuthIsSignedIn, getAuthToken} from "./components/Pages/Auth/AuthProvider";
import ProfilePage from './components/Pages/ProfilePage';
import SupportPage from './components/Pages/SupportPage';
import PaymentPage from './components/Pages/PaymentPage';
import Howitworks from './components/Pages/HowItworks';



const App = () => {
  const [user, setUser] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    console.log('useEffect called')
    var token = getAuthToken()
    if(token) {
      setIsAuthenticated(true)
      console.log('IsAuthenticated true')
      console.log(isAuthenticated)
    }
    else {
      setIsAuthenticated(false)
      console.log('IsAuthenticated false')
      console.log(isAuthenticated)
    }
   
  }, [isAuthenticated]);

  return (
    
    <div className="app w-100 container-lg">
      <Header isAuthenticated = {isAuthenticated}/>
        {      console.log(`isAuthenticated in render is ${isAuthenticated}`)        }
        <div className="main-content bg-light">  
          {/* <HomePage/> */}
          <div className=''>
          <AuthProvider>
            <AuthIsSignedIn>
              <Routes>
                <Route path={"/logout"} element={<Logout />} />
                {/* <Route path={"/protected"} element={<Protected />} /> */}
                <Route path='/' element={isAuthenticated ? <Dashboard user={user} /> : <HomePage />}
                // element={<HomePage/>} 
                />
                
                <Route path="/GetCapital" element={<GetCapital/>} />
                <Route path="/Login" element={<Login/>} />
                <Route path="/MyAccounts" element={<MyAccounts/>} />
                <Route path='/Dashboard' element={<Dashboard/>} />
                <Route path='/SignUp' element={<Register/>} />
                <Route path='/WebTrader' element={<WebTrader/>} />
                <Route path='/GetCapitalConfirm' element={<GetCapitalConfirm/>} />
                <Route path='/GetCapitalSuccess' element={<GetCapitalSuccess/>} />
                <Route path="/myprofile" element={<ProfilePage />} /> 
                <Route path="/support" element={<SupportPage />} /> 
                <Route path="/payment" element={<PaymentPage />} /> 
                <Route path="/howitworks" element={<Howitworks />} /> 
                
                

              </Routes>
            </AuthIsSignedIn>
            <AuthIsNotSignedIn>
              <Routes>
                <Route path='/SignUp' element={<Register/>} />
                <Route path={"/logout"} element={<Logout />} />
                  {/* <Route path={"/protected"} element={<Protected />} /> */}
                  <Route path='/' element= {<HomePage />}
                  // element={<HomePage/>} 
                  />
                  <Route path="/Login" element={<Login/>} />
              </Routes>
            </AuthIsNotSignedIn>
          </AuthProvider>


          </div>
        </div>
      <Footer />
    </div>
  
);


};
export default App;
