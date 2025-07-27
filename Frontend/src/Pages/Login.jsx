import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
    const { register, reset, handleSubmit } = useForm();
    const loginHandler = (user) => {
        user.id = nanoid();
        toast.success("Login Successful")
        console.log(user);
    }
    return (
        <div className="flex flex-col items-center justify-center ">
            <h1 className="font-bold text-3xl mt-10 mb-30 underline tracking-wider">Login Page</h1>
            <form onSubmit={handleSubmit(loginHandler)} className="flex flex-col space-y-10">
                <input {...register("email")} type="email" placeholder="Enter Your Email" className="w-50 md:w-100 border-b outline-none text-center border-gray-500 text-gray-300" />
                <input {...register("password")} type="password" placeholder="Enter Your Password" className="w-50 md:w-100 border-b outline-none text-center border-gray-500 text-gray-300" />
                <input type="submit" className="px-3 py-1 border bg-blue-500 rounded-2xl font-bold text-black cursor-pointer hover:scale-103 mt-20" />
            </form>
            <p className="mt-5">New user <Link to={"/register"} className="text-blue-300 underline">Register</Link></p>
        </div>
    )
}

export default Login
