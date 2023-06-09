import { Link } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle";
import { useForm } from "react-hook-form";
import SocialLogin from "../../components/SocialLogin";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";


const Login = () => {

    const { loginUser } = useContext(AuthContext);

    const { register, handleSubmit, formState:{ errors } } = useForm();
    const onSubmit = (data) => {
        loginUser(data.email, data.password)
            .then(res => {
                const loggedInUser = res.user;
                console.log(loggedInUser);
            })
            .catch(err => {
            console.err(err.message)
        })
    }

    return (
        <div className="container mx-auto text-center my-28">
            <SectionTitle heading={ "Log In to Your Account"} subheading={"Access your personalized experience and connect with our community"}></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div><input type="email" className="input input-bordered border-info w-full mb-3 max-w-xs" {...register("email", { required: true })} placeholder="Type Your Email" /></div>
                {errors.email && <p className="text-red-500">Email is required</p>}
                
                <div><input type="password" name="password" className="input input-bordered border-info w-full mb-3 max-w-xs" {...register("password", {required: true})} placeholder="Type Your Password" /></div>
                <div><input className="btn btn-info w-full max-w-xs mt-6" type="submit" value='log in' /></div>
            </form>
            <p className="mt-6"> New here ? Please <Link to='/signup' className="text-cyan-400 font-semibold">Sign up</Link> Here</p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;