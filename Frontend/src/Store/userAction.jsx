import { toast } from "react-toastify"
import {instance} from "../Utils/axios.config"

export const asyncregisterUser = (user) => async (dispatch, getState) =>{
    try {
        // console.log(" Action User : ",user);
        const res = await instance.post("/users", user);
        // console.log(res);
    } catch (error) {
        toast.error("Registration failed. Please try again.");
    }
}