import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { asyncLogin } from "../Store/userAction";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { register, reset, handleSubmit } = useForm();
    const loginHandler = async (user) => {
        await dispatch(asyncLogin(user));
        localStorage.getItem("user") ? navigate("/") : toast.error("Login Failed");
    }
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="flex flex-col items-center justify-center ">
            <h1 className="font-bold text-3xl mt-10 mb-30 underline tracking-wider">Login Page</h1>
            <form onSubmit={handleSubmit(loginHandler)} className="flex flex-col space-y-10">
                <input {...register("email", { required: true })} type="email" placeholder="Enter Your Email" className="w-50 md:w-100 border-b outline-none text-center border-gray-500 text-black" />
                <div className="relative">
                    <input {...register("password", { required: true })} type={showPassword ? "text" : "password"} placeholder="Enter Your Password" className="w-50 md:w-100 border-b outline-none text-center border-gray-500 text-black pr-10" />
                    <button type="button" onClick={() => setShowPassword((prev) => !prev)} className="absolute right-2 top-1/2 transform -translate-y-1/2 text-sm text-blue-500" tabIndex={-1}> {showPassword ? <FaEyeSlash /> : <FaEye />}</button>
                </div>
                <input type="submit" className="px-3 py-1 border bg-blue-500 rounded-2xl font-bold text-black cursor-pointer hover:scale-103 mt-20" />
            </form>
            <p className="mt-5">New user <Link to={"/register"} className="text-blue-300 underline">Register</Link></p>
        </div>
    )
}

export default Login
