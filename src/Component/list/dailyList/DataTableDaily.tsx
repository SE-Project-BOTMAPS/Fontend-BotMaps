import React from "react";
import {ResponseEvent} from "../../../../state/slices/types/sideBar.type.ts";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";


interface AccordionTabDailyProp {
    data?: ResponseEvent[];
}

export const DataTableDaily: React.FC<AccordionTabDailyProp> = ({data}) => {
    return (
            <DataTable value={data} tableStyle={{minWidth: '30rem'}} rowHover>
                <Column field="location" header="Room" sortable></Column>
                <Column header="Range of time"
                        body={(rowData => {
                            return (
                                <div>
                                    <p>{rowData.start_dt} - {rowData.end_dt}</p>
                                </div>
                            )
                        })}
                ></Column>
                <Column field="title" header="Courses" sortable></Column>
                <Column field="who" header="Professor" sortable></Column>
            </DataTable>
    )
}