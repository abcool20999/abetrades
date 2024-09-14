import Sidebar from '../../Layout/sidebar';

const GetCapitalSuccess = () => {
    return (
        <div className=" row">
            <div className='col-4'>
                <Sidebar></Sidebar>
            </div>
            <div className='row col-8'>
                <div className="confirmation">
                    <h3>Congratulations</h3>
                    <p>You have been funded, navigate to the webtrader and start making money</p>
                    <a className='btn bg-dark text-white' href='/Dashboard'>Go to MyDashboard</a>
                </div>
            </div>
        </div>
    );
};

export default GetCapitalSuccess;