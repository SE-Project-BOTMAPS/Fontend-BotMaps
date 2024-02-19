import repository from "./index";
import {AxiosResponse} from "axios";
import type {SearchResponse} from "../state/slices/types/search.type.ts";

export default {
    async search(keyword : string) : Promise<AxiosResponse<SearchResponse>> {
        return await repository.get<SearchResponse>(`/search/${keyword}`)
    }
}