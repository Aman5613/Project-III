import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    cart: []
}

const cartSlice = createSlice({
    name: "carts",
    initialState,
    reducers: {
        loadCart: (state, action) => {
            state.cart = action.payload;
        }
    }
})

export const { loadCart } = cartSlice.actions


export default cartSlice.reducer;