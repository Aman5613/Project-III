import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    users : [],
}

const userSlice = createSlice({
    name : "user",
    initialState,
    reducers : {
        setUser : (state, action) => {
            state.users = action.payload;  // Setting the user data in the state
            // console.log(state, action);
        }
    }
})

export const { setUser } = userSlice.actions;

export const userReducer = userSlice.reducer;