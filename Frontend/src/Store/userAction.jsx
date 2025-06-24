import axios from "axios";

export const asyncgetProducts =  async () => {
    try {
        const res = await axios.get("/Products");
        console.log(res.data);
    } catch (error) {
        console.log(error);
        
    }
}