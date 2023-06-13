
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";

const AdminRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin();
    console.log(user);
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <div className="flex justify-center items-center min-h-screen">
            <span className="loading loading-dots loading-lg"></span>
        </div>
    }

    if (user && isAdmin?.admin) {
       return  children 
    }

    return (
        <Navigate to="/login" state={{ from: location }} replace></Navigate>
    );
};

export default AdminRoute;