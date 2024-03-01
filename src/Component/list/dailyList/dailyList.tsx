import "../list.css";
import React, {useEffect} from "react";

// prime react
import {Accordion, AccordionTab} from 'primereact/accordion';
import {DataTableDaily} from "./DataTableDaily.tsx";

// type
import type {Events} from "../../../../state/slices/types/sideBar.type.ts";

// redux
import {useAppSelector} from "../../../../state/hook.ts";
import {FloorSelector} from "../../../../state/slices/floorSlice.ts"


interface listData {
    data?: Events;
}

const DailyList: React.FC<listData> = ({data}) => {
    const [currentDay, setCurrentDay] = React.useState("");
    const FloorState = useAppSelector(FloorSelector);

    const formatDate = (date: Date) => {
        const day = date.getDay();
        const month = date.getMonth();
        const year = date.getFullYear();
        const dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        setCurrentDay(`${dayName[day]} ${monthName[month]} ${year}`);
    };

    useEffect(() => {
        const date = new Date();
        formatDate(date);
    },[])

    return (
        <div>
            <div>
                <div className="border-solid border-0 border-l-8 border-black pl-2">
                <h3 className="mb-0 text-xl font-bold text-gray-900">Occupancy Status for {currentDay}:
                    Floor {FloorState.floor}</h3>
                <p className="mt-0 text-sm text-gray-600">Please note that the current usage status is subject to
                    change.</p>
                </div>
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
