import { configureStore } from "@reduxjs/toolkit";
import FloorReducer from "./slices/floorSlice";
import SlideBarReducer from "./slices/leftSideBarSlice.ts";
export const store = configureStore({
    reducer: {
        Floor: FloorReducer,
        SlideBar: SlideBarReducer
    }
});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;