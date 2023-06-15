import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const useCart = () => {
    const { user, loading } = useContext(AuthContext);
    const token = localStorage.getItem('access-token');


    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await fetch(`https://sound-wave-server.vercel.app/carts?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${token}`
                }
            })
            return res.json();
        }
    })
    return [cart, refetch]
};

export default useCart;