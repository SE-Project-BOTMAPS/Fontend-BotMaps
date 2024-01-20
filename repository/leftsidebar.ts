import repository from "./index"
import {AxiosResponse} from "axios";
import {Response} from "../state/slices/types/sideBar.ts";

const basePath = import.meta.env.VITE_BASE_URL

export default {
    async getDailyEvents(floor : number) : Promise<AxiosResponse<Response>>{
        return await repository.get<Response>(`${basePath}/daily/${floor}`)
    }
}