
const InstructorCard = ({instructor}) => {

    const { image, name,} = instructor;


    return (
        <div className="card w-72 md:w-96  glass">
            <figure><img src={image} alt="car!" /></figure>
            <div className="card-body w-full">
                <h2 className="card-title text-white opacity-90">Meet with { name}</h2>
            </div>
        </div>
    );
};

export default InstructorCard;