import moment, {Moment} from "moment";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface State {
    pickedDate: Moment
}

const initialState: State = {
    pickedDate: moment()
}

const pickedDateSlice = createSlice({
    name: "pickedDateSlice",
    initialState,
    reducers: {
        setPickedDate(state: State, action: PayloadAction<Moment>) {
            state.pickedDate = action.payload
        }
    }
})

export const pickedDateReducer = pickedDateSlice.reducer
export const {setPickedDate} = pickedDateSlice.actions