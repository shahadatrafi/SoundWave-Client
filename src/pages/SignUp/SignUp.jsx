/* eslint-disable no-undef */
import { useForm } from "react-hook-form";
import SectionTitle from "../../components/SectionTitle";
import { Link } from "react-router-dom";
import SocialLogin from "../../components/SocialLogin";
import { useState } from "react";


const SignUp = () => {

    const [error, setError] = useState('');

    const { register, handleSubmit, formState:{ errors } } = useForm();
    const onSubmit = (data) => {
        const password = data.password 
        const confirmPassword = data.confirmPassword

        if (password !== confirmPassword) {
            return setError("Password and confirm password don't matvh")
        }
        setError('')
        console.log(data);

    };


    return (
        <div className="container mx-auto text-center my-28">
            <SectionTitle heading={ "Create Your Account"} subheading={"Join our community and unlock a world of possibilities"}></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div><input type="email" className="input input-bordered border-info w-full mb-3 max-w-xs" {...register("email", { required: true })} placeholder="Type Your Email" /></div>
                {errors.email && <p className="text-red-500">Email is required</p>}
                <div><input className="input input-bordered border-info w-full mb-3 max-w-xs" {...register("name", { required: true })} placeholder="Type Your Name" /></div>
                {errors.name && <p className="text-red-500">Name is required</p>}
                <div><input type="password" name="password" className="input input-bordered border-info w-full mb-3 max-w-xs" {...register("password", {
                    required: true,
                    minLength: 6,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                })} placeholder="Type Your Password" /></div>
                {errors.password?.type === 'required' && <p className="text-red-500">Password is required</p>}
                {errors.password?.type === 'minLength' && <p className="text-red-500">Password is less then 6 characters</p>}
                {errors.password?.type === 'pattern' && <p className="text-red-500">Password must have at lest one capital and special character</p>}
                <div><input type="password" name="confirmPassword" className="input input-bordered border-info w-full mb-3 max-w-xs" {...register("confirmPassword", { required: true })} placeholder="Type Your Confirm Password" /></div>
                {errors.confirmPassword && <p className="text-red-500">Type Your Password here again</p>}
                {error && <p className="text-red-500">{error}</p>
                }
                <div><input className="btn btn-info w-full max-w-xs mt-6" type="submit" value='sign up' /></div>
            </form>
            <p className="mt-6"> Already have an account ? Please <Link to='/login' className="text-cyan-400 font-semibold">Login</Link> Here</p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default SignUp;