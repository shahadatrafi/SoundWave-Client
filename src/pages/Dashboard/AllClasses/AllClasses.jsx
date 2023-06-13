import { FaCheck } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle";
import useClasses from "../../../hooks/useClasses";
import Swal from "sweetalert2";

const AllClasses = () => {

    const [classes, refetch] = useClasses();

    const handleApproved = c => {

        Swal.fire({
            title: 'Are you sure?',
            text: `${c.name} will be a approved...!`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/classes/approved/${c._id}`, {
                    method: 'PUT'
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
                                title: `${c.name} is now approved class`
                            })
                        }
                    })
            }
        })
    }

    return (
        <div className="w-full">
            <SectionTitle
                
                heading={"Manage Classes"}
                subheading={"Control and Manage Instructors Classes"}
            ></SectionTitle>
            <div className="overflow-x-auto">
                <table className="table text-center">
                    {/* head */}
                    <thead>
                        <tr className="text-info bg-base-200">
                            <th>#</th>
                            <th>Class Name</th>
                            <th>Class Image</th>
                            <th>Instructor name</th>
                            <th>Instructor email</th>
                            <th>available seats</th>
                            <th>price</th>
                            <th>Status</th>
                            <th>Update Status</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes.map((c, index) => <tr
                                key={c._id}
                            >
                                <th>
                                    <p>{index + 1}</p>
                                </th>
                                <td className="font-bold">
                                    {c.name}
                                </td>
                                <td>
                                <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={c.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {c.instructorName}
                                </td>
                                <td>
                                    {c.instructorEmail}
                                </td>
                                <td>
                                    {c.availableSeats - c.students}
                                </td>
                                <td>
                                    $ {c.price}
                                </td>
                                <td>
                                    {c.status}
                                </td>
                                <th>
                                    <div className="flex gap-4 justify-center">
                                        <button disabled={c.status === 'approved' || c.status === 'denied'} onClick={() => handleApproved(c)} className="btn btn-outline btn-info btn-sm text-xl "><FaCheck></FaCheck></button>
                                        <button disabled={c.status === 'approved' || c.status === 'denied'} onClick={() => handleDenied(c)} className="btn btn-outline btn-info btn-sm text-xl "><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" /></svg></button>
                                    </div>
                                </th>
                                <th>
                                    <div className="flex gap-4 justify-center">
                                        <button onClick={() => handleFeedback(c)} className="btn btn-outline btn-info btn-sm text-xl "><FaCheck></FaCheck></button>
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

export default AllClasses;