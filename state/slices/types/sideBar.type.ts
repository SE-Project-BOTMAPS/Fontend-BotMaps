

export type ResponseEvent = {
    id: string,
    rrule: string,
    title: string,
    who: string,
    location: string,
    notes: string,
    start_dt: string,
    end_dt: string,
}

export type Events = {
    reserve : ResponseEvent[]
    study : ResponseEvent[]
}

export type Response = {
    events: Events
}

export type ClassDescription = {
    courseName: string;
    courseCode?: string;
    courseInstructor: string;
}


