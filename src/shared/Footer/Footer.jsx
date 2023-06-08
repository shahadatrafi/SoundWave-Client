import { Link } from "react-router-dom";
import { SiInstagram, SiFacebook, SiLinkedin, SiTwitter } from "react-icons/si";



const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
            <div className="my-auto ml-2">
                
                <a className="normal-case text-2xl font-semibold text-white mb-3">Sound <span className="text-cyan-300">Wave</span></a>
                <div className="duration-300 text-xl text-white flex gap-4">
                <SiFacebook className="duration-300 text-xl hover:-mt-2 hover:text-cyan-500"></SiFacebook>
                <SiInstagram className="duration-300 text-xl hover:-mt-2 hover:text-cyan-500"></SiInstagram>
                <SiTwitter className="duration-300 text-xl hover:-mt-2 hover:text-cyan-500"></SiTwitter>
                <SiLinkedin className="duration-300 text-xl hover:-mt-2 hover:text-cyan-500"></SiLinkedin>
                </div>
                
            </div>
            <div>
                <span className="footer-title text-white">Courses</span>
                <Link className="">Piano</Link>
                <Link className="">Drum</Link>
                <Link className="">Guitar</Link>
                <Link className="">Flute</Link>
            </div>
            <div>
                <span className="footer-title text-white">Company</span>
                <Link className="">About us</Link>
                <Link className="">Contact</Link>
                <Link className="">Instructors</Link>
                <Link className="">Classes</Link>
            </div>
            <div>
                <span className="footer-title text-white">Contact</span>
                <Link className="font-bold">Phone: <span className="font-normal">+8801654895265</span></Link>
                <Link className="font-bold">Email: <span className="font-normal">contact@soundwave.com</span></Link>
                <Link className="font-bold">Address: <span className="font-normal">Dhaka, Bangladesh</span></Link>
            </div>
        </footer>
    );
};

export default Footer;