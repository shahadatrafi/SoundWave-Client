
const InstructorsDetailsCard = ({ instructor }) => {
    
    const { name, image, email } = instructor;

    return (
        <div className="card w-96 glass">
            <figure><img src={image} alt="car!" /></figure>
            <div className="card-body w-full">
                <h2 className="card-title text-white opacity-90">My name is {name}</h2>
                <p><span className="font-semibold text-white opacity-80">Email:</span> <span className="text-cyan-400 ">{email}</span></p>
            </div>
        </div>
    );
};

export default InstructorsDetailsCard;