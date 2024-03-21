import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    name: '',
    username:'',
    email: '',
    password: '',
    reenterPassword: '',
};


const signupReducer = createSlice({
    name: 'signup',
    initialState,
    reducers: {
        updateFormData: (state, action) => {
            return {
                ...state,
                ...action.payload,
            }
        }
    }
});

export const {updateFormData} = signupReducer.actions;
export default signupReducer.reducer;