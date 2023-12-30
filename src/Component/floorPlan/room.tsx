import {roomProps} from "./interface/room.ts";

export default function Room(props : roomProps){
    return (
        <div
            style={{ left: props.s_left, top: props.s_top, width: props.s_width, height: props.s_height, backgroundColor: props.s_bg_color, zIndex: props?.s_z_index }}
            className={props.r_type}
        >
            {props.r_code}
        </div>
    )
}
