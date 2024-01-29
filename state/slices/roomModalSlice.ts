import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";
import repository from "../../repository/room.ts";
import {toastRef} from "../../repository";

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
        changeRoomCode: (state: RoomModalState, action: PayloadAction<string>) => {
            state.roomCode = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchRoomDataAsync.fulfilled, (state, action) => {
            if(action.payload === null) return
            state.isOpen = true
            state.data = action.payload
        })
    }
})

export const fetchRoomDataAsync = createAsyncThunk(
    'roomModal/getRoomData',
    async (roomCode: string): Promise<Response | null> => {
        const {data}: AxiosResponse<Response> = await repository.getRoomBYCode(roomCode);
        if (data.officeOf.length !== 0) {
            const officeOf = data.officeOf.map((office) => office.professor).join(', ')
            toastRef.current?.show({
                severity: 'info',
                summary: 'office room of',
                detail: `This room is office room of ${officeOf}`,
                life: 2000
            })
            return null
        }
        return data
    }
);

export const {closeRoomModal, changeRoomCode} = roomModalSlice.actions
export default roomModalSlice.reducer
export const roomModalSelector = (state: RootState) => state.RoomModal