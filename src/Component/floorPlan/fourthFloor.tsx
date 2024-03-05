import RoomComponent from "././room";
import roomColor from "./interface/roomcolor";
import ModalComponent from "../roomModal.tsx";

// redux
import { useAppDispatch, useAppSelector } from "../../../state/hook.ts";
import {
  closeRoomModal,
  roomModalSelector,
} from "../../../state/slices/roomModalSlice.ts";

export default function FourthFloor() {
  const dispatch = useAppDispatch();
  const roomModalState = useAppSelector(roomModalSelector);

  const adjustLeftValue = (originalLeft: number) => {
    const adjustedLeft = originalLeft - 300;
    return adjustedLeft + "px";
  };

  return (
    <div className={"mapContainer"}>
      {/*    study room*/}
      <RoomComponent
        r_type={"study"}
        r_code={"413A"}
        s_left={adjustLeftValue(0)}
        s_top={"300px"}
        s_width={"100px"}
        s_height={"100px"}
        s_bg_color={roomColor.Study}
      />
      <RoomComponent
        r_type={"study"}
        r_code={"402"}
        s_left={adjustLeftValue(500)}
        s_top={"0px"}
        s_width={"100px"}
        s_height={"150px"}
        s_bg_color={roomColor.Study}
      />
      <RoomComponent
        r_type={"study"}
        r_code={"403"}
        s_left={adjustLeftValue(535)}
        s_top={"200px"}
        s_width={"65px"}
        s_height={"50px"}
        s_bg_color={roomColor.Study}
      />
      <RoomComponent
        r_type={"study"}
        r_code={"404"}
        s_left={adjustLeftValue(550)}
        s_top={"250px"}
        s_width={"50px"}
        s_height={"50px"}
        s_bg_color={roomColor.Study}
      />
      <RoomComponent
        r_type={"study"}
        r_code={"415A"}
        s_left={adjustLeftValue(200)}
        s_top={"200px"}
        s_width={"100px"}
        s_height={"100px"}
        s_bg_color={roomColor.Study}
      />
      <RoomComponent
        r_type={"study"}
        r_code={"412"}
        s_left={adjustLeftValue(100)}
        s_top={"500px"}
        s_width={"110px"}
        s_height={"100px"}
        s_bg_color={roomColor.Study}
      />

      {/*    aj room*/}
      <RoomComponent
        r_type={"arjan"}
        r_code={"414A"}
        s_left={adjustLeftValue(150)}
        s_top={"400px"}
        s_width={"50px"}
        s_height={"50px"}
        s_bg_color={roomColor.Arjarn}
      />
      <RoomComponent
        r_type={"arjan"}
        r_code={"410"}
        s_left={adjustLeftValue(400)}
        s_top={"460px"}
        s_width={"50px"}
        s_height={"40px"}
        s_bg_color={roomColor.Arjarn}
      />
      <RoomComponent
        r_type={"arjan"}
        r_code={"409"}
        s_left={adjustLeftValue(450)}
        s_top={"450px"}
        s_width={"50px"}
        s_height={"50px"}
        s_bg_color={roomColor.Arjarn}
      />
      <RoomComponent
        r_type={"arjan"}
        r_code={"405"}
        s_left={adjustLeftValue(480)}
        s_top={"260px"}
        s_width={"70px"}
        s_height={"40px"}
        s_bg_color={roomColor.Arjarn}
      />
      <RoomComponent
        r_type={"arjan"}
        r_code={""}
        s_left={adjustLeftValue(0)}
        s_top={"500px"}
        s_width={"30px"}
        s_height={"60px"}
        s_bg_color={roomColor.Arjarn}
      />
      <RoomComponent
        r_type={"arjan"}
        r_code={""}
        s_left={adjustLeftValue(0)}
        s_top={"560px"}
        s_width={"55px"}
        s_height={"40px"}
        s_bg_color={roomColor.Arjarn}
      />
      <RoomComponent
        r_type={"arjan"}
        r_code={""}
        s_left={adjustLeftValue(55)}
        s_top={"560px"}
        s_width={"45px"}
        s_height={"40px"}
        s_bg_color={roomColor.Arjarn}
      />
      <RoomComponent
        r_type={"arjan"}
        r_code={"402.5"}
        s_left={adjustLeftValue(550)}
        s_top={"150px"}
        s_width={"50px"}
        s_height={"50px"}
        s_bg_color={roomColor.Arjarn}
      />
      <RoomComponent
        r_type={"arjan"}
        r_code={"448"}
        s_left={adjustLeftValue(100)}
        s_top={"150px"}
        s_width={"50px"}
        s_height={"50px"}
        s_bg_color={roomColor.Arjarn}
      />
      <RoomComponent
        r_type={"arjan"}
        r_code={"444"}
        s_left={adjustLeftValue(300)}
        s_top={"100px"}
        s_width={"50px"}
        s_height={"50px"}
        s_bg_color={roomColor.Arjarn}
      />
      <RoomComponent
        r_type={"arjan"}
        r_code={""}
        s_left={adjustLeftValue(30)}
        s_top={"500px"}
        s_width={"50px"}
        s_height={"40px"}
        s_bg_color={roomColor.Arjarn}
      />

      {/* Admin */}
      <RoomComponent
        r_type={"admin"}
        r_code={"Admin"}
        s_left={adjustLeftValue(330)}
        s_top={"200px"}
        s_width={"220px"}
        s_height={"100px"}
        s_bg_color={roomColor.Admin}
      />

      {/* naksuksa */}
      <RoomComponent
        r_type={"naksuksa"}
        r_code={"401"}
        s_left={adjustLeftValue(400)}
        s_top={"0px"}
        s_width={"100px"}
        s_height={"150px"}
        s_bg_color={roomColor.Student}
      />
      <RoomComponent
        r_type={"naksuksa"}
        r_code={"422"}
        s_left={adjustLeftValue(300)}
        s_top={"0px"}
        s_width={"100px"}
        s_height={"100px"}
        s_bg_color={roomColor.Student}
      />

      {/*    lab room*/}
      <RoomComponent
        r_type={"lab"}
        r_code={"415B"}
        s_left={adjustLeftValue(100)}
        s_top={"200px"}
        s_width={"100px"}
        s_height={"100px"}
        s_bg_color={roomColor.Lab}
      />
      <RoomComponent
        r_type={"lab"}
        r_code={"411B"}
        s_left={adjustLeftValue(200)}
        s_top={"500px"}
        s_width={"100px"}
        s_height={"100px"}
        s_bg_color={roomColor.Lab}
      />
      <RoomComponent
        r_type={"lab"}
        r_code={"411A"}
        s_left={adjustLeftValue(300)}
        s_top={"500px"}
        s_width={"100px"}
        s_height={"100px"}
        s_bg_color={roomColor.Lab}
      />
      <RoomComponent
        r_type={"lab"}
        r_code={"414B"}
        s_left={adjustLeftValue(150)}
        s_top={"350px"}
        s_width={"50px"}
        s_height={"50px"}
        s_bg_color={roomColor.Lab}
      />

      {/*    Lift*/}
      <RoomComponent
        r_type={"lift"}
        r_code={"Lift"}
        s_left={adjustLeftValue(200)}
        s_top={"100px"}
        s_width={"100px"}
        s_height={"50px"}
        s_bg_color={roomColor.Lift}
      />

      {/*    restroom*/}
      <RoomComponent
        r_type={"restroom"}
        r_code={"GR"}
        s_left={adjustLeftValue(150)}
        s_top={"0px"}
        s_width={"50px"}
        s_height={"50px"}
        s_bg_color={roomColor.RestRoom}
      />
      <RoomComponent
        r_type={"restroom"}
        r_code={"MR"}
        s_left={adjustLeftValue(220)}
        s_top={"0px"}
        s_width={"80px"}
        s_height={"50px"}
        s_bg_color={roomColor.RestRoom}
      />

      {/*    none*/}
      <RoomComponent
        r_type={"none"}
        r_code={""}
        s_left={adjustLeftValue(200)}
        s_top={"350px"}
        s_width={"150px"}
        s_height={"100px"}
        s_bg_color={roomColor.NotRoom}
      />
      <RoomComponent
        r_type={"none"}
        r_code={""}
        s_left={adjustLeftValue(250)}
        s_top={"50px"}
        s_width={"50px"}
        s_height={"50px"}
        s_bg_color={roomColor.NotRoom}
      />
      <RoomComponent
        r_type={"none"}
        r_code={""}
        s_left={adjustLeftValue(440)}
        s_top={"300px"}
        s_width={"60px"}
        s_height={"100px"}
        s_bg_color={roomColor.NotRoom}
      />
      <RoomComponent
        r_type={"none"}
        r_code={""}
        s_left={adjustLeftValue(400)}
        s_top={"370px"}
        s_width={"40px"}
        s_height={"30px"}
        s_bg_color={roomColor.NotRoom}
      />
      <RoomComponent
        r_type={"specialnone"}
        r_code={""}
        s_left={adjustLeftValue(400)}
        s_top={"280px"}
        s_width={"100px"}
        s_height={"95px"}
        s_bg_color={roomColor.NotRoom}
      />
      <RoomComponent
        r_type={"specialnone"}
        r_code={""}
        s_left={adjustLeftValue(30)}
        s_top={"500px"}
        s_width={"100px"}
        s_height={"60px"}
        s_bg_color={roomColor.NotRoom}
      />
      <RoomComponent
        r_type={"none"}
        r_code={""}
        s_left={adjustLeftValue(0)}
        s_top={"400px"}
        s_width={"100px"}
        s_height={"100px"}
        s_bg_color={roomColor.NotRoom}
      />

      {/*    walkway*/}
      <RoomComponent
        r_type={"walk"}
        r_code={""}
        s_left={adjustLeftValue(150)}
        s_top={"00px"}
        s_width={"450px"}
        s_height={"300px"}
        s_bg_color={"grey"}
        s_z_index={"-1"}
      />
      <RoomComponent
        r_type={"walk"}
        r_code={""}
        s_left={adjustLeftValue(0)}
        s_top={"300px"}
        s_width={"400px"}
        s_height={"300px"}
        s_bg_color={"grey"}
        s_z_index={"-1"}
      />
      <RoomComponent
        r_type={"walk"}
        r_code={""}
        s_left={adjustLeftValue(400)}
        s_top={"300px"}
        s_width={"100px"}
        s_height={"200px"}
        s_bg_color={"grey"}
        s_z_index={"-1"}
      />
      <RoomComponent
        r_type={"walk"}
        r_code={""}
        s_left={adjustLeftValue(100)}
        s_top={"50px"}
        s_width={"50px"}
        s_height={"250px"}
        s_bg_color={"grey"}
        s_z_index={"-1"}
      />

      {/*    fire*/}
      <RoomComponent
        r_type={"fire"}
        r_code={""}
        s_left={adjustLeftValue(400)}
        s_top={"400px"}
        s_width={"100px"}
        s_height={"50px"}
        s_bg_color={roomColor.Fire}
      />
      <RoomComponent
        r_type={"fire"}
        r_code={""}
        s_left={adjustLeftValue(397)}
        s_top={"415px"}
        s_width={"20px"}
        s_height={"20px"}
        s_bg_color={roomColor.Fire}
      />
      <RoomComponent
        r_type={"fire"}
        r_code={""}
        s_left={adjustLeftValue(565)}
        s_top={"195px"}
        s_width={"20px"}
        s_height={"3px"}
        s_bg_color={roomColor.Fire}
      />
      <RoomComponent
        r_type={"fire"}
        r_code={""}
        s_left={adjustLeftValue(80)}
        s_top={"150px"}
        s_width={"20px"}
        s_height={"20px"}
        s_bg_color={roomColor.Fire}
      />

      {/*    stair*/}
      <RoomComponent
        r_type={"stair"}
        r_code={""}
        s_left={adjustLeftValue(50)}
        s_top={"50px"}
        s_width={"100px"}
        s_height={"100px"}
        s_bg_color={"#566573"}
      />
      <img
        src="../N.png"
        className="mb-8"
        alt="logo"
        style={{
          position: "absolute",
          left: "140px",
          top: "480px",
          width: "250px",
        }}
      />
      {roomModalState.isOpen && (
        <ModalComponent
          data={roomModalState?.data}
          onHide={() => dispatch(closeRoomModal())}
        />
      )}
    </div>
  );
}
