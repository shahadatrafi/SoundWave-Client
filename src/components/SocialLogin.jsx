import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../Providers/AuthProvider/AuthProvider";

const SocialLogin = () => {

    const { googleLogin } = useContext(AuthContext);

    const handleSocialLogIn = () => {
        googleLogin()
            .then(res => {
                const loggedUser = res.user;
                console.log(loggedUser);
            }).catch(err => {
            console.error(err.message)
        })
    }

    return (
        <div>
            <div className="divider max-w-xs mx-auto"> Also You Can </div>
            <button onClick={handleSocialLogIn} className="btn btn-outline btn-info btn-wide"><FcGoogle className="text-xl mr-2"></FcGoogle> Login With Google</button>
        </div>
    );
};

export default SocialLogin;