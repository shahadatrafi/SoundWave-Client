

const SectionTitle = ({ heading, subheading }) => {
    
    return (
        <div className="text-center mb-12">
            <h3 className="text-white opacity-90 font-semibold text-4xl capitalize mb-2">{heading}</h3>
            <p className="text-cyan-400 font-semibold mb-5">{subheading}</p>
            <hr className="w-12 border-2 rounded-lg mx-auto border-cyan-400" />
        </div>
    );
};

export default SectionTitle;