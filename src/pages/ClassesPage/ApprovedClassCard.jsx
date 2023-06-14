import { useContext } from "react";
import {useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import useCart from "../../hooks/useCart";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";


const ApprovedClassCard = ({ ApprovedClass }) => {
    
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [, refetch] = useCart();
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();

    const { image, name, instructorName, availableSeats, students, price, _id } = ApprovedClass;

    const handleSelectClass = (approvedClass) => {

        if (user) {

            console.log(approvedClass);

            const selectedClass = {classId: _id, name, image, instructorName, price, email: user.email}

            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type':'application/json'
                },
                body: JSON.stringify(selectedClass)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Your class has been added',
                            showConfirmButton: false,
                            timer: 1500
                          })
                }
                })
        }
        else {
            navigate('/login', {state: {from: location}})
        }
        
}

    
    const setLeft = availableSeats - students;

    return (
        <div className={`card w-full glass ${setLeft === 0 ? 'bg-red-700 opacity-80' : ''}`}>
            <figure><img src={image} alt="car!" /></figure>
            <div className="card-body w-full">
                <h2 className="card-title text-white opacity-90">Learn <span className="text-cyan-400 ">{name}</span> with our instructor</h2>
                <div className="flex w-full items-center justify-between">
                    <p><span className="font-semibold text-white opacity-80">Instructor:</span> <span className="text-cyan-400 ">{instructorName}</span></p>
                <p><span className="font-semibold text-xl text-white opacity-80">Price:</span> <span className="text-cyan-400 font-bold text-xl">${price}</span></p>
                </div>
                <div className="flex w-full items-center justify-between">
                <p><span className="font-semibold text-white opacity-80">Available Sets:</span> <span className="text-cyan-400 ">{setLeft}</span></p>
                </div>
                <button onClick={()=> handleSelectClass(ApprovedClass)} disabled={setLeft === 0 || isAdmin?.admin || isInstructor?.instructor ? true : false} className="btn btn-outline btn-info btn-block mt-3">Select Course</button>
            </div>
        </div>
    );
};

export default ApprovedClassCard;