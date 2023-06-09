/* eslint-disable no-undef */
import { useForm } from "react-hook-form";


const SignUp = () => {

    const { register, handleSubmit, formState:{ errors } } = useForm();
    const onSubmit = (data) => console.log(data);

    return (
        <div className="container mx-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div><input className="input input-bordered w-full max-w-xs" {...register("email", { required: true })} placeholder="Type Your Email" /></div>
                {errors.email && <p className="text-red-500">Email is required</p>}
                <div><input className="input input-bordered w-full max-w-xs" {...register("name", { required: true })} placeholder="Type Your Name" /></div>
                {errors.name && <p className="text-red-500">Name is required</p>}
                <div><input className="input input-bordered w-full max-w-xs" {...register("password", {
                    required: true,
                    minLength: 6,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                })} placeholder="Type Your Password" /></div>
                {errors.password?.type === 'required' && <p className="text-red-500">Password is required</p>}
                {errors.password?.type === 'minLength' && <p className="text-red-500">Password is less then 6 characters</p>}
                {errors.password?.type === 'pattern' && <p className="text-red-500">Password must have at lest one capital and special character</p>}
                <div><input className="input input-bordered w-full max-w-xs" {...register("confirmPassword", { required: true })} placeholder="Type Your Confirm Password" /></div>
                {errors.confirmPassword && <p className="text-red-500">Type Your Password here again</p>}
                {errors.confirmPassword !== errors.password && <p className="text-red-500">Password and confirm password will be same</p>
                }

                <div><input className="btn btn-info" type="submit" /></div>
            </form>
        </div>
    );
};

export default SignUp;