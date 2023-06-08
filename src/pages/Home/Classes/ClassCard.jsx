

const ClassCard = ({ classItem }) => {

    const { image, name, instructorName, availableSeats, students } = classItem;
    
    const setLeft = availableSeats - students;

    return (
        <div className="card w-full glass">
            <figure><img src={image} alt="car!" /></figure>
            <div className="card-body w-full">
                <h2 className="card-title text-white opacity-90">Learn {name} with { instructorName}</h2>
                <div className="flex w-full items-center justify-between">
                <p><span className="font-semibold text-white opacity-80">Available Sets:</span> <span className="text-cyan-400 text-xl">{setLeft}</span></p>
                <p><span className="font-semibold text-white opacity-80">Students:</span> <span className="text-cyan-400 text-xl">{students}</span></p>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;