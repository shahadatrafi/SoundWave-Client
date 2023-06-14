import Swal from "sweetalert2";
import SectionTitle from "../../../components/SectionTitle";
import useCart from "../../../hooks/useCart";
import { Link } from "react-router-dom";


const MyCart = () => {

    const [cart, refetch] = useCart();
    
    const handleDelete = id => {
        
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                              )
                    }
                })
            }
          })
    }

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
                            cart.map((selectedClass, index) => <tr
                                key={selectedClass._id}
                            >
                                <th>
                                    <p>{index + 1}</p>
                                </th>
                                <td className="font-bold">
                                    {selectedClass.name}
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={selectedClass.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td> $ {selectedClass.price}</td>
                                <th>
                                <Link to='/dashboard/payment'><button className="btn btn-outline btn-info btn-block btn-sm">Pay</button></Link>
                                </th>
                                <th>
                                <button onClick={()=>handleDelete(selectedClass._id)} className="btn btn-outline btn-info btn-block btn-sm">Delete</button>
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