import React from "react";
import {Dialog} from "primereact/dialog";
import {Button} from "primereact/button";
// type
import {Eventkey, Response} from "../../state/slices/types/room.type.ts";
import {DaySchedule} from "./list/daySchedule.tsx";

// redux
import {useAppSelector} from "../../state/hook.ts";
import {roomModalSelector} from "../../state/slices/roomModalSlice.ts"

interface ModalComponentProps {
    data: Response | null;
    onHide: () => void;
}

const ModalComponent: React.FC<ModalComponentProps> = ({data, onHide}) => {
    const roomModalState = useAppSelector(roomModalSelector);
    const days = [
        {name: "Monday", eventKey: "mon" as Eventkey},
        {name: "Tuesday", eventKey: "tue" as Eventkey},
        {name: "Wednesday", eventKey: "wed" as Eventkey},
        {name: "Thursday", eventKey: "thu" as Eventkey},
        {name: "Friday", eventKey: "fri" as Eventkey},
        {name: "Saturday", eventKey: "sat" as Eventkey},
        {name: "Sunday", eventKey: "sun" as Eventkey}
    ];

    const allDaysEmpty = days.every(day => data?.events && data.events[day.eventKey] && data.events[day.eventKey].length === 0);

    return (
        <Dialog
            header={`Room ${roomModalState.roomCode} Details`}
            visible={true}
            style={{width: "50vw"}}
            closeOnEscape={true}
            dismissableMask={true}
            onHide={onHide}
            draggable={false}
        >
            {allDaysEmpty ? (
                <p>No events available for any day.</p>
            ) : (
                days
                    .filter(day => data?.events && data.events[day.eventKey] && data.events[day.eventKey]?.length > 0)
                    .map(day => (
                        <DaySchedule key={day.eventKey} day={day.name} data={data?.events[day.eventKey]}/>
                    ))
            )}
            <div className="flex justify-end mt-3">
                <Button label="Close" onClick={onHide} className="bg-zinc-700"/>
            </div>
        </Dialog>
    );
};

export default ModalComponent;
