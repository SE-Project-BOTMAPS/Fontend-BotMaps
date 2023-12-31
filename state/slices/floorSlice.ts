import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store.ts";

interface FloorState {
    floor: number;
}
const initialState: FloorState = {
    floor: 5,
};

export const floorSlice = createSlice({
    name : "floor",
    initialState,
    reducers:{
        changeFloor: (state : FloorState, action : PayloadAction<number>) => {
            state.floor = action.payload;
        }
    }
})

export default floorSlice.reducer;
export const {changeFloor} = floorSlice.actions;
export const FloorSelector = (state : RootState) => state.Floor;