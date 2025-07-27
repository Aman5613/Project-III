import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    products : []
}

const productsSlice = createSlice({
    initialState,
    name : "products",
    reducers : {
        setProducts : (state, action) => [
            state.products = action.payload
        ]
    }
})

export const {setProducts} = productsSlice.actions

export default productsSlice.reducer;