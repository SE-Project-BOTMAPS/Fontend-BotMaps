import repository from "./index";
import type { Response } from "../state/slices/types/room.type"
import {AxiosResponse} from "axios";

export default {
    async getRoomBYCode(roomCode : string) : Promise<AxiosResponse<Response>> {
        return await repository.get<Response>(`/room/${roomCode}`)
    }
}