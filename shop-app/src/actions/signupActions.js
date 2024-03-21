// import { createAction } from "@reduxjs/toolkit";
import {updateFormData} from'../Slice/signupReducers';


// export const updateFormData = createAction('UPDATE_FORM_DATA')

export const registerUser = (userData) => {
    return async (dispatch) => {
        try {
            dispatch(updateFormData(userData));
        }catch (error) {

        }
    };
};