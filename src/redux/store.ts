import {combineReducers, configureStore} from "@reduxjs/toolkit";

const reducer = combineReducers({

})

const store = configureStore({
    reducer
})

export type RootState = ReturnType<typeof reducer>
export type AppDispatch = typeof store.dispatch

export { store }