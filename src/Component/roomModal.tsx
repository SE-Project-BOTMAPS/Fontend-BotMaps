import React from "react";
import {Dialog} from "primereact/dialog";
import {Badge} from 'primereact/badge';
import {Divider} from 'primereact/divider';

// type
import {EventKey, Response} from "../../state/slices/types/room.type.ts";
import {DaySchedule} from "./list/daySchedule.tsx";

// redux
import {useAppSelector} from "../../state/hook.ts";
import {roomModalSelector} from "../../state/slices/roomModalSlice.ts"

import CurTime from "./Current Time/CurTime.tsx";

interface ModalComponentProps {
    data: Response | null;
    onHide: () => void;
}

const ModalComponent: React.FC<ModalComponentProps> = ({data, onHide}) => {
    const roomModalState = useAppSelector(roomModalSelector);
    const days = [
        {name: "Monday", eventKey: "mon" as EventKey},
        {name: "Tuesday", eventKey: "tue" as EventKey},
        {name: "Wednesday", eventKey: "wed" as EventKey},
        {name: "Thursday", eventKey: "thu" as EventKey},
        {name: "Friday", eventKey: "fri" as EventKey},
        {name: "Saturday", eventKey: "sat" as EventKey},
        {name: "Sunday", eventKey: "sun" as EventKey}
    ];

    const allDaysEmpty = days.every(day => data?.events && data.events[day.eventKey] && data.events[day.eventKey].length === 0);

    return (
        <Dialog
            header={
                <>
                    <div className="flex flex-row justify-center items-center gap-2.5">
                        <h2 className="text-xl font-bold">Room Details: {roomModalState.roomCode}</h2>
                        <Divider layout="vertical"/>
                        {
                            <div>
                                {
                                    roomModalState?.isVacant ? (
                                        <Badge value="Vacant" severity="success" size={"large"}/>
                                        ) : (
                                            <Badge value="Occupied" severity="danger" size={"large"}/>
                                            )
                                        }
                            </div>
                            
                        }
                        <Divider layout="vertical"/>
                        <CurTime/>
                    </div>
                </>
            }
            visible={true}
            style={{width: "50vw"}}
            closeOnEscape={true}
            dismissableMask={true}
            onHide={onHide}
            draggable={false}
            contentClassName={"p-4"}
        >
            {allDaysEmpty ? (
                <p>No events available for any day.</p>
            ) : (
                <div>
                    {days
                        .filter(day => data?.events && data.events[day.eventKey] && data.events[day.eventKey]?.length > 0)
                        .map(day => (
                            <DaySchedule key={day.eventKey} day={day.name} data={data?.events[day.eventKey]}/>
                        ))}
                </div>
            )}
        </Dialog>
    );
};

export default ModalComponent;
