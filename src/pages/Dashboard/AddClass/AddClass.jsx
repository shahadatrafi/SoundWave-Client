import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Providers/AuthProvider/AuthProvider";
import SectionTitle from "../../../components/SectionTitle";
import Swal from "sweetalert2";


const AddClass = () => {

    const { user } = useContext(AuthContext);
    const token = localStorage.getItem('access-token');
    const img_token = import.meta.env.VITE_IMAGE_TOKEN;
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_token}`
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        const fromData = new FormData();
        fromData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: fromData
        })
            .then(res => res.json())
            .then(imgRes => {
                if (imgRes.success) {
                    const imgUrl = imgRes.data.display_url;
                    const { name, instructorEmail, instructorName, price, availableSeats } = data;
                    const newClass = { name, image: imgUrl, instructorEmail, instructorName, price: parseFloat(price), availableSeats: parseFloat(availableSeats), students: 0, status: 'pending' }
                    console.log(newClass);
                    fetch(`https://sound-wave-server.vercel.app/classes`, {
                        method: 'POST',
                        headers: {
                            'content-type': "application/json",
                            authorization: `bearer ${token}`
                        },
                        body: JSON.stringify(newClass)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.insertedId) {
                                reset();
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
                                    title: 'Class added successfully. It will be publish after review'
                                })
                            }
                        })
                }
            })

    };

    return (
        <div className="w-full max-w-2xl">
            <SectionTitle
                heading={"Add a Class"}
                subheading={"Expand Your Course Offerings and Empower Your Students"}
            ></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text text-info font-semibold">Class Name</span>
                    </label>
                    <input type="text" placeholder="Class Name"
                        {...register("name", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full my-4">
                    <label className="label">
                        <span className="label-text text-info">Class Image</span>
                    </label>
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
                </div>
                <div className="flex my-4 gap-4">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-info font-semibold">Instructor Name</span>
                        </label>
                        <input type="text" value={user.displayName} readOnly
                            {...register("instructorName")}
                            className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-info font-semibold">Instructor Email</span>
                        </label>
                        <input type="text" value={user.email} readOnly
                            {...register("instructorEmail")}
                            className="input input-bordered w-full " />
                    </div>
                </div>
                <div className="flex my-4 gap-4">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text text-info font-semibold">Available Seat</span>
                        </label>
                        <input type="number" {...register("availableSeats", { required: true })} placeholder="Type available Seat" className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-info font-semibold">Price</span>
                        </label>
                        <input type="number" {...register("price", { required: true })} placeholder="Type class price" className="input input-bordered w-full " />
                    </div>
                </div>

                <input className="btn btn-block btn-info mt-4" type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddClass;