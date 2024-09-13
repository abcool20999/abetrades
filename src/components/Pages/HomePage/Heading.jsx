import React from 'react';
import './Heading.css';


const Heading = () => {
    return (
      <div id='homepage_heading' className='pb-5 bg-image pt-5 align-items-center' style={{backgroundImage: "url('../../../assets/forex.jpeg')", backgroundSize: 'cover', height: "500px"}}>
        <h1 className='text-white p-2 m-2 display-4 font-weight-bolder'>
          <b>Next Generation Funded Trading</b>
        </h1>
        <div className='row justify-content-center w-50 mx-auto'>
          <button className='bg-white text-black w-25 d-inline-block rounded-5 m-2'>Get Funded</button>
          <button className='d-inline-block w-25 rounded-5 m-2 border-dark'>Log In</button>
        </div>
      </div>
    )
}

export default Heading