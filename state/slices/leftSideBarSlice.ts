import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store.ts";
import sideBarRepository from "../../repository/leftsidebar.ts";
import {AxiosResponse} from "axios";

// type
import type {Response} from "./types/sideBar.type.ts"

interface leftSideBarState {
    data: Response | null
}

const initialState: leftSideBarState = {
    data: null
}

const leftSideBarSlice = createSlice({
    name: 'leftSideBar',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchSideBarDataAsync.fulfilled, (state, action: PayloadAction<Response>) => {
            state.data = action.payload;
        })
    },
});

export const fetchSideBarDataAsync = createAsyncThunk(
    'leftSideBar/getLeftSideBarData',
    async (floor: number): Promise<Response> => {
        const {data}: AxiosResponse<Response> = await sideBarRepository.getDailyEvents(floor);
        return data;
    }
);

export default leftSideBarSlice.reducer;
export const SideBarSelector = (state: RootState) => state.SlideBar.data;