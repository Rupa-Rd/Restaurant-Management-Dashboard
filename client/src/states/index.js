import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: "dark",
    userId: "60c72b2f5f1b2c001f8c7f85",
};

export const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
        setMode: (state) =>{
            state.mode = state.mode === "light" ? "dark" : "light";
        }
    }
})

export const {setMode} = globalSlice.actions;

export default  globalSlice.reducer;