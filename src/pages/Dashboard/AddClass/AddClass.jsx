import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Providers/AuthProvider/AuthProvider";
import SectionTitle from "../../../components/SectionTitle";


const AddClass = () => {

    const { user } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

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