import { useContext } from "react";
import SectionTitle from "../../../components/SectionTitle";
import useClasses from "../../../hooks/useClasses";
import { AuthContext } from "../../../Providers/AuthProvider/AuthProvider";


const AddedClasses = () => {

    const { user } = useContext(AuthContext);
    const [classes] = useClasses();

    const MyClasses = classes.filter(c => c.instructorEmail === user?.email);


    return (
        <div className="w-10/12 mx-auto">
            <SectionTitle
                heading={"Manage Classes"}
                subheading={"Admin Panel: Control and Manage Class Offerings"}
            ></SectionTitle>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-info bg-base-200">
                            <th>#</th>
                            <th>Class Name</th>
                            <th>Class Image</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Total enrolled</th>
                            <th>feedback</th>
                            <th>Update</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            MyClasses.map((singleClass, index) => <tr
                                key={singleClass._id}
                            >
                                <th>
                                    <p>{index + 1}</p>
                                </th>
                                <td className="font-bold">
                                    {singleClass.name}
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={singleClass.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td> $ {singleClass.price}</td>
                                <td> {singleClass?.status}</td>
                                <td> {singleClass?.students}</td>
                                <td> { singleClass?.status === 'denied' ? <>{singleClass?.feedback}</> : <></>}</td>

                                <th>
                                <button className="btn btn-outline btn-info btn-block btn-sm">Update</button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AddedClasses;