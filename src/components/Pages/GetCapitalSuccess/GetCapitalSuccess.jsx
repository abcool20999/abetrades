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
                    <p>You have been funded, an email has been sent with your Login details</p>
                    <a className='btn bg-dark text-white' href='/myChallenges'>Go to MyChallenges</a>
                </div>
            </div>
        </div>
    );
};

export default GetCapitalSuccess;