import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {RootState} from "../store";
import repository from "../../repository/room.ts";

// type
import type {Response} from "./types/room.type.ts";
import {AxiosResponse} from "axios";

interface RoomModalState {
    isOpen: boolean
    data: Response | null
}

const initialState: RoomModalState = {
    isOpen: false,
    data: null
}

export const roomModalSlice = createSlice({
    name: 'roomModal',
    initialState,
    reducers: {
        closeRoomModal: (state: RoomModalState) => {
            state.isOpen = false
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchRoomDataAsync.fulfilled, (state, action) => {
            state.isOpen = true
            state.data = action.payload
        })
    }
})

export const fetchRoomDataAsync = createAsyncThunk(
    'roomModal/getRoomData',
    async (roomCode: string): Promise<Response> => {
        const {data}: AxiosResponse<Response> = await repository.getRoomBYCode(roomCode);
        console.log(data)
        return data;
    }
);

export const {closeRoomModal} = roomModalSlice.actions
export default roomModalSlice.reducer
export const roomModalSelector = (state: RootState ) => state.RoomModal