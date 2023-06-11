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
                    <li><NavLink to="/" className="nav-link text-cyan-300 hover:text-cyan-500 active:text-cyan-500">Home</NavLink></li>
                    <li><NavLink to='/instructors' className="nav-link text-cyan-300 hover:text-cyan-500  active:text-cyan-500">Instructors</NavLink></li>
                    <li><NavLink to='/classes' className="nav-link text-cyan-300 hover:text-cyan-500  active:text-cyan-500">Classes</NavLink></li>
                    -------------------------------------------------
                    <li><NavLink className='my-1 text-cyan-300 hover:text-cyan-500' to='/dashboard/mycart'>Selected Classes</NavLink></li>
                    <li><NavLink className='my-1 text-cyan-300 hover:text-cyan-500' to='/dashboard/enrolledclass'>Enrolled Classes:</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;