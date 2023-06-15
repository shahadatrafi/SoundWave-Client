import { FaArrowLeft, FaCalendarPlus, FaCheckSquare, FaClipboardList, FaShoppingCart, FaUsers } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";


const Dashboard = () => {


    // const isInstructor = true;
    const [isInstructor] = useInstructor();
    console.log(isInstructor)
    const [isAdmin] = useAdmin();
    console.log(isAdmin)

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col my-10 items-center justify-center">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-outline btn-info drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

                <ul className="menu p-4 w-80 h-full bg-base-200 relative text-base-content">

                    <a className="normal-case text-4xl text-center mb-12 mt-6 font-semibold text-white">Sound <span className="text-cyan-300">Wave</span></a>

                    {/* Sidebar content here */}

                    {isAdmin?.admin ?
                        <>
                            <li>
                                <NavLink className='my-1 text-cyan-300 hover:text-cyan-500' to='/dashboard/allusers'>
                                    <FaUsers className="text-xl"></FaUsers> Manage Users
                                </NavLink>
                            </li>

                            <li><NavLink className='my-1 text-cyan-300 hover:text-cyan-500' to='/dashboard/allclasses'><FaClipboardList className="text-xl"></FaClipboardList> Manage Classes</NavLink></li>
                        </>
                        :
                        <>
                            {isInstructor?.instructor ?
                                <>
                                    <li>
                                        <NavLink className='my-1 text-cyan-300 hover:text-cyan-500' to='/dashboard/addclass'>
                                            <FaCalendarPlus className="text-xl mr-1"></FaCalendarPlus>
                                            Add A Class
                                        </NavLink>
                                    </li>

                                    <li><NavLink className='my-1 text-cyan-300 hover:text-cyan-500' to='/dashboard/addedclasses'><FaClipboardList className="text-xl"></FaClipboardList> My Classes</NavLink></li>
                                </>
                                :
                                <>
                                    <li>
                                        <NavLink className='my-1 text-cyan-300 hover:text-cyan-500' to='/dashboard/mycart'>
                                            <FaShoppingCart className="text-xl mr-1"></FaShoppingCart>
                                            Selected Classes
                                        </NavLink>
                                    </li>

                                    <li><NavLink className='my-1 text-cyan-300 hover:text-cyan-500' to='/dashboard/enrolledclass'><FaCheckSquare className="text-xl"></FaCheckSquare> Enrolled Classes</NavLink></li>
                                    <li><NavLink className='my-1 text-cyan-300 hover:text-cyan-500' to='/dashboard/paymenthistory'><FaClipboardList className="text-xl"></FaClipboardList> Payment History</NavLink></li>
                                </>}
                        </>}

                    {/* Go Back Home Button */}

                    <button><NavLink to="/" className="btn btn-info btn-block absolute bottom-5 left-0 "><FaArrowLeft></FaArrowLeft>Go Back Home</NavLink></button>

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;