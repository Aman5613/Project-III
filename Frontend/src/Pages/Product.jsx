import React, { useEffect } from 'react'
import { instance } from '../Utils/axios.config';
import { Navigate, useNavigate } from 'react-router-dom';

const Product = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user"));
    // console.log(user);

    const [products, setProducts] = React.useState([]);

    useEffect(() => {
        instance.get("/products")

            .then(response => {
                setProducts(response.data);
                // console.log(response.data);
            })
            .catch(error => {
                console.error("Error fetching products:", error);
            });
    }, []);

    console.log(products);

    return (
        <div>
            {user.isAdmin ? <button onClick={() => navigate("/create-product")} className="px-3 py-1 bg-blue-500 rounded font-bold cursor-pointer hover:scale-103  text-white">Create Product</button> : null}
            <h1>Products</h1>
            <div className='flex flex-wrap gap-5'>
                {
                    products.map((product) => (
                        <div key={product.id} className="card w-80 flex flex-col items-center text-center border px-2 py-1 rounded border-gray-600">
                            <img
                                src={product.imageUrl}
                                alt="product-img"
                                className='w-80 h-60 overflow-hidden  rounded transition-transform duration-200 '
                            />
                            <h2 className="text-xl font-bold">{product.title}</h2>
                            <p className="text-white">{product.price}</p>
                            <p className="text-gray-500">{product.description}</p>
                        </div>
                    ))
                }
                {/* <div className="card w-80 flex flex-col items-center text-center border px-2 py-1 rounded border-gray-600">
                    <img
                        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                        alt="product-img"
                        className='w-80 h-60 overflow-hidden  rounded transition-transform duration-200 '
                    />
                    <h2 className="text-xl font-bold">Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h2>
                    <p className="text-white">Price: $109.95</p>
                    <p className="text-gray-500">Description: Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</p>
                </div> */}
            </div>
        </div>
    )
}

export default Product