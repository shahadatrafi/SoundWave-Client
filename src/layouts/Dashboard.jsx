import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col my-10 items-center justify-center">
                {/* Page content here */} 
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <li><NavLink className='my-1' to='/dashboard/mycart'>My Selected Classes</NavLink></li>
                    <li><NavLink className='my-1' to='/dashboard/enrolledclass'>My Enrolled Classes:</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;