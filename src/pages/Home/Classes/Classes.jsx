import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import ClassCard from "./ClassCard";

const Classes = () => {

    const [classes, setClasses] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
        .then(data => setClasses(data))
    },[])

    return (
        <div className="container mx-auto mb-28">
            <SectionTitle
                heading={"popular Classes"}
                subheading={"In-Demand Course Offerings"}
            ></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {
                    classes.map(classItem => <ClassCard
                        key={classItem._id}
                        classItem={classItem}
                    ></ClassCard>)
                }
            </div>
        </div>
    );
};

export default Classes;