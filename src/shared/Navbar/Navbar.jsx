import { Link, NavLink } from "react-router-dom";
import './Navbar.css'
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../hooks/useCart";

const Navbar = () => {

    const { user, logout } = useContext(AuthContext);
    const [cart] = useCart();

    const handleLogout = () => {
        logout();
    }

    const navigation = <>
        <li><NavLink to="/" className="nav-link text-cyan-300 hover:text-cyan-500 active:text-cyan-500">Home</NavLink></li>
        <li><NavLink to='/instructors' className="nav-link text-cyan-300 hover:text-cyan-500  active:text-cyan-500">Instructors</NavLink></li>
        <li><NavLink to='/classes' className="nav-link text-cyan-300 hover:text-cyan-500  active:text-cyan-500">Classes</NavLink></li>
        {user && <li><NavLink to='/dashboard' className="nav-link text-cyan-300 hover:text-cyan-500  active:text-cyan-500">Dashboard</NavLink></li>}
    </>

    return (
        <div className="navbar container mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                        {navigation}

                    </ul>
                </div>
                <a className="normal-case text-2xl font-semibold text-white">Sound <span className="text-cyan-300">Wave</span></a>
            </div>
            <div className="navbar-start hidden lg:flex">
                <ul className="menu menu-horizontal px-1">

                    {navigation}

                </ul>
            </div>
            <div className="navbar-end">
                {user ?
                    <>
                        <div className="indicator mr-4">
                            <Link to='/dashboard/mycart'>
                                <span className="indicator-item font-semibold badge badge-info">{cart?.length || 0}</span>
                                <FaShoppingCart className="text-2xl"></FaShoppingCart>
                            </Link>
                        </div>

                        <div className="w-12 mask mask-squircle mr-5">
                            {user.photoURL && <img src={user.photoURL} />}
                        </div>
                        
                        <Link onClick={handleLogout} className="btn text-cyan-300 hover:bg-cyan-500 border-2 hover:border-cyan-500 btn-outline norma">Log out</Link>
                        
                    </> :
                    <Link to='/login' className="btn text-cyan-300 hover:bg-cyan-500 border-2 hover:border-cyan-500 btn-outline norma">Login</Link>}
            </div>
        </div>
    );
};

export default Navbar;