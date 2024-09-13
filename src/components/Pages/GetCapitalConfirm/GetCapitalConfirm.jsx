import Sidebar from '../../Layout/sidebar';

const GetCapitalConfirm = () => {
    return (
        <div className=" row">
            <div className='col-4'>
                <Sidebar></Sidebar>
            </div>
            <div className='row col-8'>
                <div className="confirmation">
                    <h3>Confirm Your Capital Request</h3>
                    <p>Amount: CA$500</p>
                    <p>Platform Leverage: 1:100</p>
                    <a className='btn bg-dark text-white' href='/GetCapitalSuccess'>Confirm & Proceed</a>
                </div>
            </div>
        </div>
    );
};

export default GetCapitalConfirm;

