import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import ApprovedClassCard from "./ApprovedClassCard";


const ClassesPage = () => {

    const [classes, setClasses] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
        .then(data => setClasses(data))
    }, [])
    
    return (
        <div className="container mx-auto mb-28">
            <SectionTitle
                heading={"our popular Classes"}
                subheading={"In-Demand Course Offerings"}
            ></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {
                    classes.map(ApprovedClass => <ApprovedClassCard
                        key={ApprovedClass._id}
                        ApprovedClass={ApprovedClass}
                    ></ApprovedClassCard>)
                }
            </div>
        </div>
    );
};

export default ClassesPage;