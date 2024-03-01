import React from "react";
import {Dialog} from "primereact/dialog";
import {Badge} from "primereact/badge";
import {Divider} from "primereact/divider";

// type
import {EventKey, Response} from "../../state/slices/types/room.type.ts";
import {DaySchedule} from "./list/daySchedule.tsx";

// redux
import {useAppSelector} from "../../state/hook.ts";
import {roomModalSelector} from "../../state/slices/roomModalSlice.ts";

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
        {name: "Sunday", eventKey: "sun" as EventKey},
    ];

    const allDaysEmpty = days.every(
        (day) =>
            data?.events &&
            data.events[day.eventKey] &&
            data.events[day.eventKey].length === 0
    );

    return (
        <Dialog
            header={
                <>
                    <div className="flex flex-col justify-center items-center">
                        <div className="flex flex-row justify-center items-center gap-2.5">
                            <h2 className="text-xl font-bold">
                                Room Details: {roomModalState.roomCode}
                            </h2>
                            <Divider layout="vertical"/>
                            <div>
                                {roomModalState.isVacant?.isVacant ? (
                                    <Badge value="Vacant" severity="success" size={"large"}/>
                                ) : (
                                    <div>
                                        <Badge value="Occupied" severity="danger" size={"large"}/>
                                        <div className="flex gap-1 mt-1">
                                            <Badge
                                                value={roomModalState.isVacant?.occupyingEvent.title}
                                                severity="info"
                                                size={"normal"}
                                            />
                                            <Badge
                                                value={roomModalState.isVacant?.occupyingEvent.who}
                                                severity="success"
                                                size={"normal"}
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </>
            }
            footer={
            <div className="text-pink-500">The thing you're looking for might not be here, but hey, enjoy the journey!</div>
            }
            visible={true}
            style={{width: "50vw"}}
            closeOnEscape={true}
            dismissableMask={true}
            onHide={onHide}
            draggable={false}
            contentClassName={"p-4"}
        >
            <div className="border-solid border-0 border-l-8 border-black pl-2">
                <h3 className="mb-0 text-xl font-bold text-gray-900 mt-0">Regular Schedule</h3>
                <p className="mt-0 text-sm text-gray-600">This data represents a static regular schedule. Daily data
                    might not be available on this site.</p>
            </div>

            {allDaysEmpty ? (
                <p>No events available for any day.</p>
            ) : (
                <div>
                    {days
                        .filter(
                            (day) =>
                                data?.events &&
                                data.events[day.eventKey] &&
                                data.events[day.eventKey]?.length > 0
                        )
                        .map((day) => (
                            <DaySchedule
                                key={day.eventKey}
                                day={day.name}
                                data={data?.events[day.eventKey]}
                            />
                        ))}
                </div>
            )}
        </Dialog>
    );
};

export default ModalComponent;
