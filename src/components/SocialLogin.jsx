import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
    return (
        <div>
            <div className="divider max-w-xs mx-auto"> Also You Can </div>
            <button className="btn btn-outline btn-info btn-wide"><FcGoogle className="text-xl mr-2"></FcGoogle> Login With Google</button>
        </div>
    );
};

export default SocialLogin;