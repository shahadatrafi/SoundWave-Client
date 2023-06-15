import { useContext, useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import { AuthContext } from "../../../Providers/AuthProvider/AuthProvider";


const MyEnrolledClasses = () => {

    const { user } = useContext(AuthContext);
    const [enrolledClasses, setEnrolledClasses] = useState([]);

    const MyEnrolledClasses = enrolledClasses.filter(c => c.email === user?.email)

    useEffect(() => {
        fetch('http://localhost:5000/payments')
            .then(res => res.json())
            .then(data => {
                setEnrolledClasses(data);
        })
    },[])

    return (
        <div>
            <SectionTitle
                heading={"Your Enrolled Classes"}
                subheading={"Review with Your Enrolled Classes"}
            ></SectionTitle>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-info bg-base-200">
                            <th>#</th>
                            <th>Class Name</th>
                            <th>Price</th>
                            <th>Transaction Id</th>
                            

                        </tr>
                    </thead>
                    <tbody>
                        {
                            MyEnrolledClasses.map((c, index) => <tr
                                key={c._id}
                            >
                                <th>
                                    <p>{index + 1}</p>
                                </th>
                                <td className="font-bold">
                                    {c.className}
                                </td>
                                <td> $ {c.price}</td>
                                <th>
                                {c.TransactionId}
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyEnrolledClasses;