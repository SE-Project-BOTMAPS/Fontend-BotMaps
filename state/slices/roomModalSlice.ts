import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";

interface RoomModalState {
    isOpen: boolean
    data: string
}

const initialState: RoomModalState = {
    isOpen: false,
    data: ''
}

export const roomModalSlice = createSlice({
    name: 'roomModal',
    initialState,
    reducers: {
        closeRoomModal: (state: RoomModalState) => {
            state.isOpen = false
        },
        clickedRoom: (state: RoomModalState, payload: PayloadAction<string>) => {
            state.data = payload.payload
            state.isOpen = true
        }
    }
})

export const {closeRoomModal, clickedRoom} = roomModalSlice.actions
export default roomModalSlice.reducer
export const roomModalSelector = (state: RootState ) => state.RoomModal