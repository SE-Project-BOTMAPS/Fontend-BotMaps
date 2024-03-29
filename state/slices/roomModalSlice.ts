import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import repository from "../../repository/room.ts";
import { toastRef } from "../../repository";
import {isVacant} from "./types/room.type.ts";

// type
import type { Response } from "./types/room.type.ts";
import { AxiosResponse } from "axios";

interface RoomModalState {
  roomCode: string;
  isOpen: boolean;
  data: Response | null;
  isVacant: isVacant | null;
}

const initialState: RoomModalState = {
  roomCode: "",
  isOpen: false,
  data: null,
  isVacant: null,
};

export const roomModalSlice = createSlice({
  name: "roomModal",
  initialState,
  reducers: {
    closeRoomModal: (state: RoomModalState) => {
      state.isOpen = false;
    },
    changeRoomCode: (state: RoomModalState, action: PayloadAction<string>) => {
      state.roomCode = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRoomDataAsync.fulfilled, (state, action) => {
      if (action.payload === null) return;
      state.isOpen = true;
      state.data = action.payload;
    });
    builder.addCase(isVacantAsync.fulfilled, (state, action) => {
      state.isVacant = action.payload;
    });
  },
});

export const fetchRoomDataAsync = createAsyncThunk(
  "roomModal/getRoomData",
  async (roomCode: string): Promise<Response | null> => {
    const { data }: AxiosResponse<Response> = await repository.getRoomBYCode(
      roomCode
    );
    if (data.officeOf.length !== 0) {
      const officeOf = data.officeOf
        .map(
          (office) => office.native_name ?? office.full_name ?? office.data_who
        )
        .join(", ");
      toastRef.current?.show({
        severity: "info",
        summary: "Office Room of",
        detail: `${officeOf}`,
        life: 2000,
      });
      return null;
    }
    return data;
  }
)

export const isVacantAsync = createAsyncThunk(
    "roomModal/isVacant",
    async (roomCode: string): Promise<isVacant> => {
        const { data } : AxiosResponse<isVacant> = await repository.isVacant(roomCode);
        return data
    }
)

export const { closeRoomModal, changeRoomCode } = roomModalSlice.actions;
export default roomModalSlice.reducer;
export const roomModalSelector = (state: RootState) => state.RoomModal;
