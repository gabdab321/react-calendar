import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {authState} from "../../types/authTypes";

const initialState: authState = {
    isLogged: JSON.parse(localStorage.getItem("isLogged") as string) || false
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuth(state: authState, action: PayloadAction<boolean>) {
            localStorage.setItem("isLogged", JSON.stringify(action.payload))
            state.isLogged = action.payload
        }
    }
})

export const authReducer = authSlice.reducer
export const {setAuth} = authSlice.actions