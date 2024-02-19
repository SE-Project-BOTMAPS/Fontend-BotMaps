import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import type {SearchResponse} from "./types/search.type";
import {RootState} from "../store";
import repository from "../../repository/search.ts"
import {AxiosResponse} from "axios";

interface SearchState {
    searchData : SearchResponse
}

const initialState : SearchState = {
    searchData : []
}

export const searchSlice = createSlice({
    name : "search",
    initialState,
    reducers:{},
    extraReducers: (builder) =>{
        builder.addCase(searchAsync.fulfilled, (state,action) =>{
            state.searchData = action.payload
        })
    }
})

export const searchAsync = createAsyncThunk(
    'search/searchKeyword',
    async (keyword : string) : Promise<SearchResponse> =>{
        const {data} : AxiosResponse<SearchResponse> = await repository.search(keyword)
        return data
    }
)

export default searchSlice.reducer;
export const SearchSelector = (state : RootState) => state.Search

