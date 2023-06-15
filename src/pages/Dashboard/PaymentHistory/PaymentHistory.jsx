import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider/AuthProvider";
import SectionTitle from "../../../components/SectionTitle";


const PaymentHistory = () => {

    const { user } = useContext(AuthContext);
    const [paymentHistory, setPaymentHistory] = useState([]);

    const MyPayments = paymentHistory.filter(c => c.email === user?.email)

    useEffect(() => {
        fetch('https://sound-wave-server.vercel.app/payments')
            .then(res => res.json())
            .then(data => {
                setPaymentHistory(data);
        })
    },[])

    return (
        <div>
            <SectionTitle
                heading={"Your Payment History"}
                subheading={"Review Your Payment"}
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
                            MyPayments.map((c, index) => <tr
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

export default PaymentHistory;