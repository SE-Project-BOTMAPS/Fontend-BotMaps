import "../list.css";
import React from "react";

// prime react
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {Accordion, AccordionTab} from 'primereact/accordion';

// type
import type {Events} from "../../../../state/slices/types/sideBar.type.ts";


interface listData {
    data?: Events;
}

const DailyList: React.FC<listData> = ({data}) => {
    return (
        <div>
            <div>
                <Accordion multiple activeIndex={[0,1]}>
                    <AccordionTab header="Study room">
                        <DataTable value={data?.study} tableStyle={{minWidth: '30rem'}} rowHover>
                            <Column field="title" header="Courses" sortable></Column>
                            <Column header="Range of time"
                                    body={(rowData => {
                                        return (
                                            <div>
                                                <p>{rowData.start_dt} - {rowData.end_dt}</p>
                                            </div>
                                        )
                                    })}
                            ></Column>
                            <Column field="who" header="Professor" sortable></Column>
                        </DataTable>
                    </AccordionTab>
                    <AccordionTab header="Reservation Room">
                        <DataTable value={data?.reserve} tableStyle={{minWidth: '30rem'}} rowHover>
                            <Column field="title" header="Courses" sortable></Column>
                            <Column header="Range of time"
                                    body={(rowData => {
                                        return (
                                            <div>
                                                <p>{rowData.start_dt} - {rowData.end_dt}</p>
                                            </div>
                                        )
                                    })}
                            ></Column>
                            <Column field="who" header="Professor" sortable></Column>
                        </DataTable>
                    </AccordionTab>
                </Accordion>
            </div>
        </div>
    );
};
export default DailyList;
