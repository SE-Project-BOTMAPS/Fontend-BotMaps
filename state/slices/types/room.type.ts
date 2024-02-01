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

type ResponseDay = {
    mon : ResponseRoomEvent[],
    tue : ResponseRoomEvent[],
    wed : ResponseRoomEvent[],
    thu : ResponseRoomEvent[],
    fri : ResponseRoomEvent[],
    sat : ResponseRoomEvent[],
    sun : ResponseRoomEvent[]
}

export type office = {
    data_who: string
    full_name : string
}

export type EventKey = keyof ResponseDay;

export type Response = {
    events: ResponseDay
    officeOf : office[]
}