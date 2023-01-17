import {dateEventItem, datesState} from "../../types/dateTypes";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import moment from "moment";

const initialState: datesState = {...JSON.parse(localStorage.getItem("dates") as string)}

const dateSlice = createSlice({
    name: "dateSlice",
    initialState: initialState,
    reducers: {
        addEvent(state: datesState, action: PayloadAction<{ id: string, key: string, event: dateEventItem }>) {
            action.payload.event.id = action.payload.id

            if(state[action.payload.key]) {
                state[action.payload.key].push(action.payload.event)
            } else {
                state[action.payload.key] = [action.payload.event]
            }

            localStorage.setItem("dates", JSON.stringify(state))
        },
        removeEvent(state: datesState, action: PayloadAction<{ key: string, id: string }>) {
            state[action.payload.key] = state[action.payload.key].filter(item => item.id !== action.payload.id)

            localStorage.setItem("dates", JSON.stringify(state))
        }
    }
})

export const dateReducer = dateSlice.reducer
export const {addEvent, removeEvent} = dateSlice.actions