import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../Providers/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {

    const { googleLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSocialLogIn = () => {

        googleLogin()
            .then(res => {
                const loggedUser = res.user;
                

                const savedUser = { name: loggedUser.displayName, email: loggedUser.email, image: loggedUser.photoURL, role: 'student' }

                fetch(`http://localhost:5000/users`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(savedUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        navigate('/')
                        if (data.insertedId) {
                            
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
                                title: 'Signed in successfully'
                            })
                        }
                    }).catch(err => {
                        console.error(err.message)
                    })
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