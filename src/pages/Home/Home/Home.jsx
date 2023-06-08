import Classes from "../Classes/Classes";
import FAQ from "../FAQ/FAQ";
import Instructors from "../Instructors/Instructors";
import Slider from "../Slider/Slider";


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Classes></Classes>
            <Instructors></Instructors>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;