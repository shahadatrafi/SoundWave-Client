import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import InstructorsDetailsCard from "./InstrucorsDatailCard";


const InstructorsPage = () => {

    const [instructors, setInstructors] = useState([]);
    useEffect(() => {
        fetch('https://sound-wave-server.vercel.app/instructors')
            .then(res => res.json())
        .then(data => setInstructors(data))
    },[])

    return (
        <div className="container mx-auto mb-28 ">
            <SectionTitle
                heading={'Our Instructors'}
                subheading={"Meet Our Acclaimed Instructors"}
            ></SectionTitle>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {
                        instructors.map(instructor => <InstructorsDetailsCard
                            key={instructor._id}
                            instructor={instructor}
                        ></InstructorsDetailsCard>)
                    }
                </div>
        </div>
    );
};

export default InstructorsPage;