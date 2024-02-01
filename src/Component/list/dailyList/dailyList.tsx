import "../list.css";
import React from "react";

// prime react
import {Accordion, AccordionTab} from 'primereact/accordion';
import {DataTableDaily} from "./DataTableDaily.tsx";

// type
import type {Events} from "../../../../state/slices/types/sideBar.type.ts";


interface listData {
    data?: Events;
}

const DailyList: React.FC<listData> = ({data}) => {
    return (
        <div>
            <div>
                <Accordion multiple activeIndex={[0, 1]}>
                    <AccordionTab header="Study Room">
                        <DataTableDaily data={data?.study}/>
                    </AccordionTab>
                    <AccordionTab header="Reservation Room">
                        <DataTableDaily data={data?.reserve}/>
                    </AccordionTab>
                </Accordion>
            </div>
        </div>
    );
};
export default DailyList;
