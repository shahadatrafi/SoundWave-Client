import SectionTitle from "../../../components/SectionTitle";
import useCart from "../../../hooks/useCart";


const MyCart = () => {

    const [cart] = useCart();

    return (
        <div className="w-10/12 mx-auto">
            <SectionTitle
                heading={"Your Selected Classes"}
                subheading={"Review and Proceed with Your Selected Classes"}
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
                            <th>Payment</th>
                            <th>Remove</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((selectedclass, index) => <tr
                                key={selectedclass._id}
                            >
                                <th>
                                    <p>{index + 1}</p>
                                </th>
                                <td className="font-bold">
                                    {selectedclass.name}
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={selectedclass.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td> $ {selectedclass.price}</td>
                                <th>
                                <button className="btn btn-outline btn-info btn-block btn-sm">Pay</button>
                                </th>
                                <th>
                                <button className="btn btn-outline btn-info btn-block btn-sm">Delete</button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCart;