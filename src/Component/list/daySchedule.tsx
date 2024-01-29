import React from "react";
import {ResponseRoomEvent} from "../../../state/slices/types/room.type.ts";

// prime react
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Accordion, AccordionTab } from 'primereact/accordion';

interface DayScheduleProps {
    day: string;
    data : ResponseRoomEvent[] | undefined;
}

export const DaySchedule : React.FC<DayScheduleProps> = ({day,data}) => {
    return (
        <div>
            <Accordion multiple>
                <AccordionTab header={day}>
                    <DataTable value={data} tableStyle={{ minWidth: '50rem' }} rowHover>
                        <Column field="title" header="Courses" sortable></Column>
                        <Column field="start_time" header="Start Time" sortable></Column>
                        <Column field="end_time" header="End Time" sortable></Column>
                        <Column field="Professor.data_who" header="Professor" sortable></Column>
                    </DataTable>
                </AccordionTab>
            </Accordion>
        </div>
    );
}