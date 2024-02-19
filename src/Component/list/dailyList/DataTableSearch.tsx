import React from "react";
import {SearchResponse} from "../../../../state/slices/types/search.type.ts";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";


interface AccordionTabDailyProp {
    data?: SearchResponse;
}

export const DataTableSearch: React.FC<AccordionTabDailyProp> = ({data}) => {
    return (
        <DataTable value={data} tableStyle={{minWidth: '30rem'}} rowHover>
            <Column field="Location.location" header="Room" sortable></Column>
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
            <Column field="title" header="Courses" sortable></Column>
            <Column field="Professor.data_who" header="Professor" sortable></Column>
        </DataTable>
    )
}