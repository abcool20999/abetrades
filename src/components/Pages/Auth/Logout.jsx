import React, { useEffect, useContext } from "react";
import Login from "../Login";
import {AuthContext} from "./AuthProvider";
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
const Logout = () => {
  const { signOut } = useContext(AuthContext);
  useEffect(()=>{
    localStorage.removeItem('propAuthToken');
    //signOut()
  })
  const handleLogout = () => {
    console.log("logout!");
    localStorage.removeItem('propAuthToken');
  };
  return   <Login></Login>

 
};

export default Logout;