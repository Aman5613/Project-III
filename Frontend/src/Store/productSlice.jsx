import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    products : [],
}

const productSlice = createSlice({
    name : "Products",
    initialState,
    reducers : {
        setProducts : (state, action) =>{
            state.products  = action.payload;
        }
    }
})

export const { setProducts } = productSlice.actions;

export const productReducer = productSlice.reducer