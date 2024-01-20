import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store.ts";
import sideBarRepository from "../../repository/leftsidebar.ts";
import {AxiosResponse} from "axios";

// type
import type {Response} from "./types/sideBar.ts"

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

export const getFilteredEvents = (state: RootState,  includeReserved: boolean) => {
//     check via regex if the title contains "จอง"
    return state.SlideBar.data?.events
        .filter((event) => (includeReserved ? event.title.includes('จอง') : !event.title.includes('จอง')))
        .map((event) => ({
        roomNumber: event.location,
        time: `${event.start_dt} - ${event.end_dt}`,
        classDescription: {
            courseName: event.title,
            courseInstructor: event.who,
        },
        instructor: event.who,
    }));
}


export default leftSideBarSlice.reducer;
export const SideBarSelector = (state: RootState) => state.SlideBar.data;