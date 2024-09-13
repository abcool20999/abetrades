import React from 'react';
import './AvailableCapitalOptions.css';

const Testimonials = () => {
    return (
        <div className="container my-5">
            <div className='text-center mb-5'>
                <h2>Testimonials</h2>
                <p>Real Stories from Our Traders: See How We've Helped Them Succeed</p>
            </div>
            <nav aria-label="Available Capital Options">
                <ul className="row justify-content-between align-items-center">
                    <li className="col-1 text-center">
                        <a className="text-dark" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    <li className="col-5 bg-light p-4 rounded-3 shadow">
                        <h5 className="d-flex align-items-center mb-3">
                            <svg className='me-2'></svg>
                            <span>Testimonial 1</span>
                        </h5>
                        <p>
                            "Using this platform has transformed how I trade. The WebTrader's ease of use and helpful resources have made me confident in my trading decisions. With their support, I've been able to grow my investments steadily."
                        </p>
                        <div className="d-flex align-items-center mt-4">
                            <svg className='me-2'></svg>
                            <div>
                                <h6 className="mb-0">Jane Doe</h6>
                                <p className="text-muted mb-0">Financial Analyst</p>
                            </div>
                        </div>
                    </li>
                    <li className="col-5 bg-light p-4 rounded-3 shadow">
                        <h5 className="d-flex align-items-center mb-3">
                            <svg className='me-2'></svg>
                            <span>Testimonial 2</span>
                        </h5>
                        <p>
                            "Purus et turpis nulla elementum, sed vel. The flexibility and simplicity of the platform made it easy for me to start trading. I'm impressed by the clear guidance and how quickly I can access my earnings."
                        </p>
                        <div className="d-flex align-items-center mt-4">
                            <svg className='me-2'></svg>
                            <div>
                                <h6 className="mb-0">John Smith</h6>
                                <p className="text-muted mb-0">Full-Time Trader</p>
                            </div>
                        </div>
                    </li>
                    <li className="col-1 text-center">
                        <a className="text-dark" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Testimonials;
