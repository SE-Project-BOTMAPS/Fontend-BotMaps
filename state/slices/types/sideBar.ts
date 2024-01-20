
export type Event = {
    id: number,
    rrule: string,
    title: string,
    who: string,
    location: string,
    notes: string,
    start_dt: string,
    end_dt: string,
}

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

export type Response = {
    events: ResponseEvent[]
}

export type ClassDescription = {
    courseName: string;
    courseCode?: string;
    courseInstructor: string;
}

export type ShowEvent = {
    roomNumber: string;
    time: string;
    classDescription: ClassDescription;
    instructor?: string;
}


