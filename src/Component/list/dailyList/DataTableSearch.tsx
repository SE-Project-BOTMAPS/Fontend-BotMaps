import React from "react";
import {SearchResponse} from "../../../../state/slices/types/search.type.ts";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";


interface AccordionTabDailyProp {
    data?: SearchResponse;
}

export const DataTableSearch: React.FC<AccordionTabDailyProp> = ({data}) => {
    return (
        <DataTable value={data} tableStyle={{minWidth: '30rem'}} rowHover >
            <Column field="Location.location" header="Room"></Column>
            <Column header="Range of time"
                    body={(rowData => {
                        return (
                            <div>
                                <p>{rowData.start_time} - {rowData.end_time}</p>
                            </div>
                        )
                    })}
            ></Column>
            <Column field="day" header="Day" sortable></Column>
            <Column field="course_id" header="Courses" sortable
            body={(rowData => {
                return rowData.course_id !== 0 ? rowData.course_id : rowData.title;
            })}>
            </Column>
            <Column field="Professor.data_who" header="Professor" sortable></Column>
        </DataTable>
    )
}