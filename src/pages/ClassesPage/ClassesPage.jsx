import SectionTitle from "../../components/SectionTitle";
import ApprovedClassCard from "./ApprovedClassCard";
import useClasses from "../../hooks/useClasses";


const ClassesPage = () => {

    const [classes] = useClasses();
    const approvedClasses = classes.filter(c => c.status === 'approved');

    
    return (
        <div className="container mx-auto mb-28">
            <SectionTitle
                heading={"our popular Classes"}
                subheading={"In-Demand Course Offerings"}
            ></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {
                    approvedClasses.map(ApprovedClass => <ApprovedClassCard
                        key={ApprovedClass._id}
                        ApprovedClass={ApprovedClass}
                    ></ApprovedClassCard>)
                }
            </div>
        </div>
    );
};

export default ClassesPage;