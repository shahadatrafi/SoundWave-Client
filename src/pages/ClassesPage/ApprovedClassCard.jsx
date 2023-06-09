import { useState } from "react";


const ApprovedClassCard = ({ApprovedClass}) => {

    const { image, name, instructorName, availableSeats, students, price, _id, } = ApprovedClass;
    const [disable, setDisable] = useState(false)
    
    const setLeft = availableSeats - students;

    // if (setLeft === 0) {
    //    return setDisable(true)
    // }

    return (
        <div className={`card w-full glass ${setLeft === 0 ? 'bg-red-600 opacity-80' : ''}`}>
            <figure><img src={image} alt="car!" /></figure>
            <div className="card-body w-full">
                <h2 className="card-title text-white opacity-90">Learn <span className="text-cyan-400 text-xl">{name}</span> with our instructor</h2>
                <div className="flex w-full items-center justify-between">
                    <p><span className="font-semibold text-white opacity-80">Instructor:</span> <span className="text-cyan-400 text-xl">{instructorName}</span></p>
                <p><span className="font-semibold text-white opacity-80">Price:</span> <span className="text-cyan-400 text-xl">${price}</span></p>
                </div>
                <div className="flex w-full items-center justify-between">
                <p><span className="font-semibold text-white opacity-80">Available Sets:</span> <span className="text-cyan-400 text-xl">{setLeft}</span></p>
                    <p><span className="font-semibold text-white opacity-80">Students:</span> <span className="text-cyan-400 text-xl">{students}</span></p>
                </div>
                <button disabled={setLeft === 0 ? true : false} className="btn btn-outline btn-info btn-block mt-3">Select Course</button>
            </div>
        </div>
    );
};

export default ApprovedClassCard;