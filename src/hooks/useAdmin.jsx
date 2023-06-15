import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useAdmin = () => {
    const { user } = useContext(AuthContext);
    const token = localStorage.getItem('access-token');
    const {data: isAdmin, isLoading: isAdminLoading } = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async() => {
            const res = await fetch(`https://sound-wave-server.vercel.app/users/admin/${user?.email}`, {
                headers: {
                    authorization: `bearer ${token}`
                }
            });
            return res.json();
        }
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;