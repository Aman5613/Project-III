import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { useDispatch} from "react-redux";
import { asynccreateProduct } from "../Store/productAction";

const CreateProduct = () => {
    const dispatch = useDispatch();
    console.log("create product page");

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (product) => {
        product.id = nanoid();
        // console.log(data);
        dispatch(asynccreateProduct(product));
        reset();
    };
    
    return (
        <div className="flex flex-col items-center justify-center space-y-5 ">
            <h1 className="font-bold text-3xl mt-10 mb-20 underline tracking-wider">Create Product</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-10">
                <input className="w-50 md:w-100 border-b outline-none text-center border-gray-500 text-gray-300" type="text" placeholder="Enter the title..." {...register("title")} />
                <input className="w-50 md:w-100 border-b outline-none text-center border-gray-500 text-gray-300" type="text" placeholder="Write the description" {...register("description")} />
                <input className="w-50 md:w-100 border-b outline-none text-center border-gray-500 text-gray-300" type="text" placeholder="Enter the price..." {...register("price")} />
                <input className="w-50 md:w-100 border-b outline-none text-center border-gray-500 text-gray-300" type="url" name="product-img" placeholder="Enter the image url..." {...register("imageUrl")} />
                <input type="submit" className="px-3 py-1 rounded-lg bg-blue-500 mt-10" />
            </form>
        </div>
    )
}

export default CreateProduct
