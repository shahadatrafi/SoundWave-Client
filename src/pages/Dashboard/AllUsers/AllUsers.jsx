import { FaUserGraduate, FaUserShield } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const AllUsers = () => {

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    });

    const handleMakeInstructor = user => {

        Swal.fire({
            title: 'Are you sure?',
            text: `${user.name} will be a Instructor...!`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/users/${user._id}`, {
                    method: 'PUT'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.modifiedCount) {
                            const Toast = Swal.mixin({
                                toast: true,
                                position: 'top-end',
                                showConfirmButton: false,
                                timer: 3000,
                                timerProgressBar: true,
                                didOpen: (toast) => {
                                    toast.addEventListener('mouseenter', Swal.stopTimer)
                                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                                }
                            })

                            Toast.fire({
                                icon: 'success',
                                title: `${user.name} is now Instructor`
                            })
                            refetch();
                            const newInstructor = { name: user.name, image: user.image, email: user.email, role: 'instructor' }
                            fetch(`http://localhost:5000/instructors`, {
                                method: 'POST',
                                headers: {
                                    'content-type': 'application/json'
                                },
                                body: JSON.stringify(newInstructor)
                            })

                                .then(res => res.json())
                                .then(data => {
                                    if (data.insertedId) {
                                        refetch();
                                        
                                    }
                                })
                        }
                    })
            }
        })
    }

    const handleMakeAdmin = user => {

        Swal.fire({
            title: 'Are you sure?',
            text: `${user.name} will be a Admin...!`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/users/${user._id}`, {
                    method: 'PATCH'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.modifiedCount) {
                            refetch();
                            const Toast = Swal.mixin({
                                toast: true,
                                position: 'top-end',
                                showConfirmButton: false,
                                timer: 3000,
                                timerProgressBar: true,
                                didOpen: (toast) => {
                                    toast.addEventListener('mouseenter', Swal.stopTimer)
                                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                                }
                            })

                            Toast.fire({
                                icon: 'success',
                                title: `${user.name} is now Admin`
                            })
                        }
                    })
            }
        })
    }


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
                                        <button disabled={user.role === 'instructor'} onClick={() => handleMakeInstructor(user)} className="btn btn-outline btn-info btn-sm text-xl "><FaUserGraduate></FaUserGraduate></button>
                                        <button disabled={user.role === 'admin'} onClick={() => handleMakeAdmin(user)} className="btn btn-outline btn-info btn-sm text-xl "><FaUserShield></FaUserShield></button>
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