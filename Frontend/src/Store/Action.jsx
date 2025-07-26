import { instance } from "../Utils/axios.config";
import { setUser } from "./userSlice";
import {setProducts} from "./productSlice";


export const asyncgetUsers = () => async (dispatch , getState ) => {
    try {
        // Fetching users from the API
        const userResponse = await instance.get("/users");
        dispatch(setUser(userResponse.data));
        
    } catch (error) {
        console.log(error.message);
    }
}

export const asyncgetProducts = () => async (dispatch, getState) => {
    try {
        const productResponse = await instance.get("/products");
        dispatch(setProducts(productResponse.data))
    } catch (error) {
        console.log(error.message);
        
    }
}