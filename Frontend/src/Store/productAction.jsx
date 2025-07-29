import { toast } from "react-toastify"
import { instance } from "../Utils/axios.config";


export const asynccreateProduct =  (product) => async () => {
    try {
        const res = await instance.post("/products", product);
        console.log("Product created successfully:", res.data);
        toast.success("Product created successfully");
    } catch (error) {
        toast.error(error.message);
    }
}