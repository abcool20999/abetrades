// components/Layout/Sidebar.js

import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h3>Menu</h3>
      </div>
      <div className="sidebar-content">
        <ul style={{marginLeft: '-10px'}}>
          <li className='bg-black bg-opacity-10 text-start rounded-5 p-1 my-1'>
            <Link className='text-white' to="/Dashboard">Dashboard</Link>
          </li>
          <li className='bg-black bg-opacity-10 text-start rounded-5 p-1 my-1'>
            <Link className='text-white' to="/GetCapital">Get Capital</Link>
          </li>
          <li className='bg-black bg-opacity-10 text-start rounded-5 p-1 my-1'>
            <Link className='text-white' to="/MyAccounts">My Accounts</Link>
          </li>
          <li className='bg-black bg-opacity-10 text-start rounded-5 p-1 my-1'>
            <Link className='text-white' to="/myprofile">My Profile</Link>
          </li>
          <li className='bg-black bg-opacity-10 text-start rounded-5 p-1 my-1'>
            <Link className='text-white' to="/support">Support</Link>
          </li>
          <li className='bg-black bg-opacity-10 text-start rounded-5 p-1 my-1'>
            <Link className='text-white' to="/WebTrader">WebTrader</Link>
          </li>
          <li className='bg-black bg-opacity-10 text-start rounded-5 p-1 my-1'>
            <Link className='text-white' to="/payment">Commisions/Pay</Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
