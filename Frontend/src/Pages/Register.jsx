import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { asyncregisterUser } from "../Store/userAction";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

const Register = () => {
    const dispatch = useDispatch();
    const { register, reset, handleSubmit } = useForm();
    const navigate = useNavigate();
    const registerHandler = (user) => {
        user.id = nanoid();
        user.isAdmin = false;
        dispatch(asyncregisterUser(user));
        toast.success("Register Successful")
        navigate("/login");
    }
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="flex flex-col items-center justify-center ">
            <h1 className="font-bold text-3xl mt-10 mb-20 underline tracking-wider">Register User</h1>
            <form onSubmit={handleSubmit(registerHandler)} className="flex flex-col space-y-10">
                <input {...register("name")} type="text" placeholder="Enter Your Name" className="w-50 md:w-100 border-b outline-none text-center border-gray-500 text-gray-300" />
                <div className="relative">
                    <input {...register("password", { required: true })} type={showPassword ? "text" : "password"} placeholder="Enter Your Password" className="w-50 md:w-100 border-b outline-none text-center border-gray-500 text-gray-300 pr-10" />
                    <button type="button" onClick={() => setShowPassword((prev) => !prev)} className="absolute right-2 top-1/2 transform -translate-y-1/2 text-sm text-blue-500" tabIndex={-1}> {showPassword ? <FaEyeSlash /> : <FaEye />}</button>
                </div>                <input {...register("password")} type="password" placeholder="Enter Your Password" className="w-50 md:w-100 border-b outline-none text-center border-gray-500 text-gray-300" />
                <input type="submit" className="px-3 py-1 border bg-blue-500 rounded-2xl font-bold text-black cursor-pointer hover:scale-103 mt-20" />
            </form>
        </div>
    )
}

export default Register
