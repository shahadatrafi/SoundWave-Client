import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useInstructor = () => {
    const { user, loading } = useContext(AuthContext);
    const token = localStorage.getItem('access-token');
    const {data: isInstructor, isLoading: isInstructorLoading } = useQuery({
        queryKey: ['isInstructor', user?.email],
        enabled: !loading && !!user?.email && !!localStorage.getItem('access-token'),

        queryFn: async() => {
            const res = await fetch(`https://sound-wave-server.vercel.app/users/instructor/${user?.email}`, {
                headers: {
                    authorization: `bearer ${token}`
                }
            });
            return res.json();
        }
    })
    return [isInstructor, isInstructorLoading]
};

export default useInstructor;