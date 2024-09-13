import React from 'react';
import './AvailableCapitalOptions.css';

const AvailableCapitalOptions = () => {
    return (
        <div className="available-capital-options-container p-4">
            <h2 className='text-center mb-5'>Available Capital Options</h2>
            <nav aria-label="Available Capital Options">
                <ul className="row justify-content-center">
                    {/* Previous Button */}
                    <li className="col-1 d-flex align-items-center justify-content-center">

                    </li>
                    {/* Beginner Option */}
                    <li className="capoptionslist card col-3 m-3">
                        <div className='card-body'>
                            <h5 className="card-title">Beginner</h5>
                            <p className="card-text">
                                Start with a $500 capital, perfect for those new to trading. Create an account, access our WebTrader, and start trading. Withdraw 90% of your profits, while the firm keeps 10%.
                            </p>
                        </div>
                        <div className="row card-footer d-flex justify-content-between align-items-center">
                            <h5>CA$500</h5>
                            <button className="btn-get-funded">Get Funded</button>
                        </div>
                    </li>
                    {/* Intermediate Option */}
                    <li className="capoptionslist card col-3 m-3">
                        <div className='card-body'>
                            <h5 className="card-title">Intermediate</h5>
                            <p className="card-text">
                                For traders with some experience, the $1,000 capital plan lets you trade larger amounts. Create an account, trade on WebTrader, and withdraw 90% of your earnings.
                            </p>
                        </div>
                        <div className="row card-footer d-flex justify-content-between align-items-center">
                            <h5>CA$1000</h5>
                            <button className="btn-get-funded">Get Funded</button>
                        </div>
                    </li>
                    {/* Expert Option */}
                    <li className="capoptionslist card col-3 m-3">
                        <div className='card-body'>
                            <h5 className="card-title">Expert</h5>
                            <p className="card-text">
                                Experienced traders can maximize returns with a $2,000 capital. Create an account, access premium tools on WebTrader, and keep 90% of your profits while the firm retains 10%.
                            </p>
                        </div>
                        <div className="row card-footer d-flex justify-content-between align-items-center">
                            <h5>CA$2000</h5>
                            <button className="btn-get-funded">Get Funded</button>
                        </div>
                    </li>
                    {/* Next Button */}
                    <li className="col-1 d-flex align-items-center justify-content-center">

                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default AvailableCapitalOptions;
