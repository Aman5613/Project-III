import { toast } from "react-toastify"
import { instance } from "../Utils/axios.config"
import { setUser } from "./userSlice"


export const asyncCurrentUser = () => async (dispatch) => {
    try {
        const user = await JSON.parse(localStorage.getItem("user"))
        dispatch(setUser(user));
        if (!user) console.log("user is not logged in");
        else console.log(user.name, "is logged in");

    } catch (error) {
        toast.error(error.message)
    }
}

export const asyncregisterUser = (user) => async () => {
    try {
        await instance.post("/users", user);
    } catch (error) {
        toast.error(error.message);
    }
}
export const asyncLogin = (user) => async () => {

    try {
        const res = await instance.get(`/users?email=${user.email}&password=${user.password}`);
        if (!res.data || res.data.length === 0) {
            throw new Error("User not found");
        }
        localStorage.setItem("user", JSON.stringify(res.data[0]));
        toast.success("Login Successful");
    } catch (error) {
        toast.error(error.message);
    }

}

export const asyncLogout = () => async () => {
    try {
        localStorage.removeItem("user");
        toast.success("Logout Successful");
    } catch (error) {
        toast.error(error.message);
    }
}