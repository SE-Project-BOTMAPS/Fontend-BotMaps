import repository from "./index";
import type { Response, isVacant } from "../state/slices/types/room.type"
import {AxiosResponse} from "axios";

export default {
    async getRoomBYCode(roomCode : string) : Promise<AxiosResponse<Response>> {
        return await repository.get<Response>(`/room/${roomCode}`)
    },
    async isVacant(roomCode : string) : Promise<AxiosResponse<isVacant>> {
        return await repository.get<isVacant>(`/isVacant/${roomCode}`)
    }
}