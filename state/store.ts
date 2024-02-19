import { configureStore } from "@reduxjs/toolkit";
import FloorReducer from "./slices/floorSlice";
import SlideBarReducer from "./slices/leftSideBarSlice.ts";
import RoomModalSlice from "./slices/roomModalSlice.ts";
import SearchSlice from "./slices/searchSlice.ts";

export const store = configureStore({
    reducer: {
        Floor: FloorReducer,
        SlideBar: SlideBarReducer,
        RoomModal: RoomModalSlice,
        Search: SearchSlice
    }
});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;