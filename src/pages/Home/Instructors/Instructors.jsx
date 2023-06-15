import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import InstructorCard from "./InstructorCard";


const Instructors = () => {

    const [instructors, setInstructors] = useState([]);
    useEffect(() => {
        fetch('https://sound-wave-server.vercel.app/instructors')
            .then(res => res.json())
        .then(data => setInstructors(data))
    },[])

    return (
        <div className="container mx-auto mb-28 ">
            <SectionTitle
                heading={'Our Popular Instructors'}
                subheading={"Meet Our Acclaimed Instructors"}
            ></SectionTitle>
                <div className="grid grid-cols-1 md:grid-cols-3 mx-28 md:mx-0 gap-8">
                    {
                        instructors.map(instructor => <InstructorCard
                            key={instructor._id}
                            instructor={instructor}
                        ></InstructorCard>)
                    }
                </div>
        </div>
    );
};

export default Instructors;