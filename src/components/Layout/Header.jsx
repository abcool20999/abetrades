import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Header.css'; 
import logo2Url from '../../assets/logo2.png';

const Header = ({ isAuthenticated }) => {
  console.log(`isAuthenticated in header is ${isAuthenticated}`);

  return (
    <header className="list-group list-group-horizontal d-flex justify-content-between border-bottom-2 mb-4">
      <div className="logo list-group-item border-0 my-auto d-flex align-items-center">
        <img src={logo2Url} alt="Prop Firm Logo" className="logo-img" />
        <span className="ms-2">betrade</span> 
      </div>
      <nav className='list-group-item border-0'>
        <ul className="list-group list-group-horizontal">
          <li className='list-group-item border-0 text-black'>
            <Link to="/howitworks" className='text-black'>How it works</Link>
          </li>
          <li className='list-group-item border-0 text-black'>
            <Link to="/myaccounts" className='text-black'>My Accounts</Link>
          </li>
          <li className='list-group-item border-0 text-black'>
            <Link to="/getcapital" className='text-black'>Get Capital</Link>
          </li>
        </ul>
      </nav>
      <nav className='w-25 mx-0 my-auto'>
        <ul className='border-0 m-0'>
          {isAuthenticated ? (
            <div className='row'>
              <li className='col-4 m-1 border-4 rounded-5 border-dark'>
                <Link to="/logout">Logout</Link>
              </li>
              <li className='w-50 border-0 col-8 bg-black text-white border-dark rounded-5'>
                <Link to="/SignUp">Sign Up</Link>
              </li>
            </div>
          ) : (
            <div className='row'>
              <li className='col-4 m-1 border-4 rounded-5 border-dark'>
                <Link to="/login">Login</Link>
              </li>
              <li className='w-50 border-0 col-8 bg-black text-white border-dark rounded-5'>
                <Link to="/SignUp">Sign Up</Link>
              </li>
            </div>
          )}
        </ul>
      </nav>
      <Outlet />
    </header>
  );
};

export default Header;
