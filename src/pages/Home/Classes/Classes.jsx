import SectionTitle from "../../../components/SectionTitle";
import ClassCard from "./ClassCard";
import useClasses from "../../../hooks/useClasses";



const Classes = () => {

    const [classes] = useClasses();
    const approvedClasses = classes.filter(c => c.status === 'approved');

    return (
        <div className="container mx-auto mb-28">
            <SectionTitle
                heading={"our popular Classes"}
                subheading={"In-Demand Course Offerings"}
            ></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-3 mx-20 md:mx-0 gap-8">
                {
                    approvedClasses.map(classItem => <ClassCard
                        key={classItem._id}
                        classItem={classItem}
                    ></ClassCard>)
                }
            </div>
        </div>
    );
};

export default Classes;