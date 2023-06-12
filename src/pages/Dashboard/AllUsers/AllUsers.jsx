import { FaUserGraduate, FaUserShield } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle";
import { useQuery } from "@tanstack/react-query";

const AllUsers = () => {

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    })

    return (
        <div className="w-10/12 mx-auto">
            <SectionTitle
                heading={"Manage Users"}
                subheading={"Control and Manage User Accounts"}
            ></SectionTitle>
            <div className="overflow-x-auto">
                <table className="table text-center">
                    {/* head */}
                    <thead>
                        <tr className="text-info bg-base-200">
                            <th>#</th>
                            <th>User Name</th>
                            <th>User Email</th>
                            <th>User Role</th>
                            <th>Update Role</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr
                                key={user._id}
                            >
                                <th>
                                    <p>{index + 1}</p>
                                </th>
                                <td className="font-bold">
                                    {user.name}
                                </td>
                                <td>
                                    {user.email}
                                </td>
                                <td> $ {user.role}</td>
                                <th>
                                    <div className="flex gap-4 justify-center">
                                        <button className="btn btn-outline btn-info btn-sm text-xl "><FaUserGraduate></FaUserGraduate></button>
                                        <button className="btn btn-outline btn-info btn-sm text-xl "><FaUserShield></FaUserShield></button>
                                    </div>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;