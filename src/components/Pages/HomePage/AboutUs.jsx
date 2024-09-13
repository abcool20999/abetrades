import React from 'react';

const AboutUs = () => {
    return (
        <div className='row m-5'>
            <div className='col-6 p-2'>
                <h2>About Us</h2>
                <p>
                    Nec massa viverra eget feugiat pellentesque. Feugiat adipiscing massa vitae auctor mi massa. Sodales libero viverra cursus sed duis luctus nulla. In malesuada vulputate pharetra ipsum orci.
                </p>
                <button className="bg-black text-white ">Read More</button>
            </div>
            <div className='col-6 p-2'>
                <img src='/assets/fx.webp' className='w-50'>
                </img>
            </div>
        </div>
    )};


export default AboutUs;