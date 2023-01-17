import {combineReducers, configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import {authReducer} from "./slices/authSlice";
import {modalsReducer} from "./slices/modalsSlice";
import {dateReducer} from "./slices/dateSlice";
import {pickedDateReducer} from "./slices/pickedDateSlice";

const reducer = combineReducers({
    auth: authReducer,
    modals: modalsReducer,
    date: dateReducer,
    pickedDate: pickedDateReducer
})

const customizedMiddleware = getDefaultMiddleware({
    serializableCheck: false,
})

const store = configureStore({
    reducer,
    middleware: customizedMiddleware,
    devTools: true
})

export type RootState = ReturnType<typeof reducer>
export type AppDispatch = typeof store.dispatch

export { store }