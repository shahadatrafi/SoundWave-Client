/* eslint-disable no-undef */
import { useForm } from "react-hook-form";
import SectionTitle from "../../components/SectionTitle";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../../components/SocialLogin";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";


const SignUp = () => {

    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const [error, setError] = useState('');

    const { register, handleSubmit, formState:{ errors } } = useForm();
    const onSubmit = (data) => {
        const password = data.password 
        const confirmPassword = data.confirmPassword

        if (password !== confirmPassword) {
            return setError("Password and confirm password don't match")
        }
        setError('')
        console.log(data);
        createUser(data.email, data.password)
            
            .then(res => {
                const loggedUser = res.user;
                console.log(loggedUser);
                updateProfile(loggedUser, {
                    displayName: data.name, photoURL: data.photoURL
                })
                    .then(() => {

                        const savedUser = {name: data.name, email: data.email, image: data.photoURL, role: 'student'}

                        fetch(`https://sound-wave-server.vercel.app/users`, {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(savedUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    navigate('/')
                                    const Toast = Swal.mixin({
                                        toast: true,
                                        position: 'top-end',
                                        showConfirmButton: false,
                                        timer: 3000,
                                        timerProgressBar: true,
                                        didOpen: (toast) => {
                                          toast.addEventListener('mouseenter', Swal.stopTimer)
                                          toast.addEventListener('mouseleave', Swal.resumeTimer)
                                        }
                                      })
                                      
                                      Toast.fire({
                                        icon: 'success',
                                        title: 'Signed Up successfully'
                                      })
                        }
                    })    
                    console.log('Profile Updated')
                }).catch(err => console.error(err.message))
            })
            .catch(err => {
            console.error(err.message)
        })

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
                <div><input className="input input-bordered border-info w-full mb-3 max-w-xs" {...register("photoURL", { required: true })} placeholder="Paste Your Photo URL" /></div>
                {errors.name && <p className="text-red-500">Photo is required</p>}
                <div><input className="btn btn-info w-full max-w-xs mt-6" type="submit" value='sign up' /></div>
            </form>
            <p className="mt-6"> Already have an account ? Please <Link to='/login' className="text-cyan-400 font-semibold">Login</Link> Here</p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default SignUp;