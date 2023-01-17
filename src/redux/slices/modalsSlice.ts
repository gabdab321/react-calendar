import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {modalsState} from "../../types/modalsTypes";

const initialState: modalsState = {
    isLoginModalOpen: false,
    isSignModalOpen: false
}

const modalsSlice = createSlice({
    name: "modalsSlice",
    initialState: initialState,
    reducers: {
        setIsLoginModalOpen(state: modalsState, action: PayloadAction<boolean>) {
            state.isLoginModalOpen = action.payload
        },
        setIsSignModalOpen(state: modalsState, action: PayloadAction<boolean>) {
            state.isSignModalOpen = action.payload
        },
        showLoginModal(state: modalsState) {
            state.isLoginModalOpen = true
        },
        showSignModal(state: modalsState) {
            state.isSignModalOpen = true
        }
    }
})

export const modalsReducer = modalsSlice.reducer
export const {setIsLoginModalOpen, setIsSignModalOpen, showLoginModal, showSignModal} = modalsSlice.actions