import { roomProps } from "./interface/room.ts";
import {useAppDispatch} from "../../../state/hook.ts";
import {fetchRoomDataAsync, changeRoomCode, isVacantAsync} from "../../../state/slices/roomModalSlice.ts"

export default function Room(props: roomProps) {
    const dispatch = useAppDispatch();
    const handleClick = () => {
        dispatch(fetchRoomDataAsync(props.r_code ?? ""))
            .then((res) =>{
                if (res.payload === null) return;
                dispatch(isVacantAsync(props.r_code ?? ""));
                dispatch(changeRoomCode(props.r_code ?? ""));

            })
    }
  return (
    <div
      style={{
        left: props.s_left,
        top: props.s_top,
        width: props.s_width,
        height: props.s_height,
        backgroundColor: props.s_bg_color,
        zIndex: props?.s_z_index,
      }}
      className={props.r_type}
      onClick={() => handleClick()}
    >
      {props.r_code}
    </div>
  );
}
