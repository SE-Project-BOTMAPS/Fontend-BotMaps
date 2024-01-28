export type ResponseRoomEvent = {
    id: string,
    title: string,
    code: string,
    day: string,
    start_time: string,
    end_time: string,
    location_id: string,
    professor_id: string,
    Location: {
        id: string,
        location: string,
        detail: string
    },
    Professor: {
        id: string,
        data_who: string,
        full_name: string
    }
}

export type Response = {
    events: ResponseRoomEvent[] | []
}