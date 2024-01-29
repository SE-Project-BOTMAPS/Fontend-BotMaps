import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";
import repository from "../../repository/room.ts";

// type
import type {Response} from "./types/room.type.ts";
import {AxiosResponse} from "axios";

interface RoomModalState {
    roomCode: string
    isOpen: boolean
    data: Response | null
}

const initialState: RoomModalState = {
    roomCode: '',
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
        changeRoomCode: (state: RoomModalState, action : PayloadAction<string>) => {
            state.roomCode = action.payload
        }
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
        return data;
    }
);

export const {closeRoomModal,changeRoomCode} = roomModalSlice.actions
export default roomModalSlice.reducer
export const roomModalSelector = (state: RootState ) => state.RoomModal