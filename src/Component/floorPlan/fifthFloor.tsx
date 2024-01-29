import RoomComponent from "././room";
import roomColor from "./interface/roomcolor";
import ModalComponent from "../roomModal.tsx";

// redux
import {useAppDispatch, useAppSelector} from "../../../state/hook.ts"
import {closeRoomModal, roomModalSelector} from "../../../state/slices/roomModalSlice.ts"

export default function FifthFloor() {

    const dispatch = useAppDispatch();
    const roomModalState = useAppSelector(roomModalSelector);

    return (
        <div className={"mapContainer"}>
            {/*    study room*/}
            <RoomComponent r_type={"study"} r_code={"518"} s_left={"0px"} s_top={"300px"} s_width={"100px"}
                           s_height={"200px"} s_bg_color={roomColor.StudyRoom}
            />
            <RoomComponent r_type={"study"} r_code={"516"} s_left={"200px"} s_top={"500px"} s_width={"200px"}
                           s_height={"100px"} s_bg_color={roomColor.StudyRoom}
            />
            <RoomComponent r_type={"study"} r_code={"521"} s_left={"100px"} s_top={"200px"} s_width={"200px"}
                           s_height={"100px"} s_bg_color={roomColor.StudyRoom}
            />
            <RoomComponent r_type={"study"} r_code={"501"} s_left={"400px"} s_top={"0px"} s_width={"100px"}
                           s_height={"150px"} s_bg_color={roomColor.StudyRoom}
            />

            {/*    aj room*/}
            <RoomComponent r_type={"arjan"} r_code={"520"} s_left={"150px"} s_top={"400px"} s_width={"50px"}
                           s_height={"50px"} s_bg_color={roomColor.ArjarnRoom}
            />
            <RoomComponent r_type={"arjan"} r_code={"519"} s_left={"150px"} s_top={"350px"} s_width={"50px"}
                           s_height={"50px"} s_bg_color={roomColor.ArjarnRoom}
            />
            <RoomComponent r_type={"arjan"} r_code={"515"} s_left={"400px"} s_top={"460px"} s_width={"50px"}
                           s_height={"40px"} s_bg_color={roomColor.ArjarnRoom}
            />
            <RoomComponent r_type={"arjan"} r_code={"514"} s_left={"450px"} s_top={"450px"} s_width={"50px"}
                           s_height={"50px"} s_bg_color={roomColor.ArjarnRoom}
            />
            <RoomComponent r_type={"arjan"} r_code={"532"} s_left={"330px"} s_top={"200px"} s_width={"50px"}
                           s_height={"100px"} s_bg_color={roomColor.ArjarnRoom}
            />
            <RoomComponent r_type={"arjan"} r_code={"508"} s_left={"380px"} s_top={"200px"} s_width={"50px"}
                           s_height={"50px"} s_bg_color={roomColor.ArjarnRoom}
            />
            <RoomComponent r_type={"arjan"} r_code={"509"} s_left={"380px"} s_top={"250px"} s_width={"50px"}
                           s_height={"50px"} s_bg_color={roomColor.ArjarnRoom}
            />
            <RoomComponent r_type={"arjan"} r_code={"510"} s_left={"440px"} s_top={"300px"} s_width={"60px"}
                           s_height={"50px"} s_bg_color={roomColor.ArjarnRoom}
            />
            <RoomComponent r_type={"arjan"} r_code={"504"} s_left={"500px"} s_top={"255px"} s_width={"50px"}
                           s_height={"45px"} s_bg_color={roomColor.ArjarnRoom}
            />
            <RoomComponent r_type={"arjan"} r_code={"505"} s_left={"550px"} s_top={"255px"} s_width={"50px"}
                           s_height={"45px"} s_bg_color={roomColor.ArjarnRoom}
            />
            <RoomComponent r_type={"arjan"} r_code={"503"} s_left={"550px"} s_top={"200px"} s_width={"50px"}
                           s_height={"45px"} s_bg_color={roomColor.ArjarnRoom}
            />
            <RoomComponent r_type={"arjan"} r_code={"529"} s_left={"350px"} s_top={"0px"} s_width={"50px"}
                           s_height={"100px"} s_bg_color={roomColor.ArjarnRoom}
            />
            <RoomComponent r_type={"arjan"} r_code={"595"} s_left={"370px"} s_top={"100px"} s_width={"30px"}
                           s_height={"50px"} s_bg_color={roomColor.ArjarnRoom}
            />
            <RoomComponent r_type={"arjan"} r_code={"559"} s_left={"550px"} s_top={"150px"} s_width={"50px"}
                           s_height={"50px"} s_bg_color={roomColor.ArjarnRoom}
            />
            <RoomComponent r_type={"arjan"} r_code={"558"} s_left={"100px"} s_top={"150px"} s_width={"50px"}
                           s_height={"50px"} s_bg_color={roomColor.ArjarnRoom}
            />

            {/*    lab room*/}
            <RoomComponent r_type={"lab"} r_code={"oasys"} s_left={"0px"} s_top={"500px"} s_width={"200px"}
                           s_height={"100px"} s_bg_color={roomColor.LabRoom}/>

            {/*    Network room*/}
            <RoomComponent r_type={"network"} r_code={"NW"} s_left={"300px"} s_top={"0px"} s_width={"50px"}
                           s_height={"100px"} s_bg_color={roomColor.AdminRoom}/>

            {/*    Lift*/}
            <RoomComponent r_type={"lift"} r_code={"Lift"} s_left={"200px"} s_top={"100px"} s_width={"100px"}
                           s_height={"50px"} s_bg_color={roomColor.RestRoom}/>

            {/*    restroom*/}
            <RoomComponent r_type={"restroom"} r_code={"GR"} s_left={"150px"} s_top={"0px"} s_width={"50px"}
                           s_height={"50px"} s_bg_color={roomColor.RestRoom}/>
            <RoomComponent r_type={"restroom"} r_code={"MR"} s_left={"220px"} s_top={"0px"} s_width={"80px"}
                           s_height={"50px"} s_bg_color={roomColor.RestRoom}/>

            {/*    none*/}
            <RoomComponent r_type={"none"} r_code={""} s_left={"500px"} s_top={"0px"} s_width={"100px"}
                           s_height={"150px"} s_bg_color={roomColor.NotRoom}/>
            <RoomComponent r_type={"none"} r_code={""} s_left={"300px"} s_top={"100px"} s_width={"40px"}
                           s_height={"50px"} s_bg_color={roomColor.NotRoom}/>
            <RoomComponent r_type={"none"} r_code={""} s_left={"200px"} s_top={"350px"} s_width={"150px"}
                           s_height={"100px"} s_bg_color={roomColor.NotRoom}/>
            <RoomComponent r_type={"none"} r_code={""} s_left={"250px"} s_top={"50px"} s_width={"50px"}
                           s_height={"25px"} s_bg_color={roomColor.NotRoom}/>
            <RoomComponent r_type={"none"} r_code={""} s_left={"250px"} s_top={"75px"} s_width={"50px"}
                           s_height={"25px"} s_bg_color={roomColor.NotRoom}/>
            <RoomComponent r_type={"none"} r_code={""} s_left={"440px"} s_top={"350px"} s_width={"60px"}
                           s_height={"50px"} s_bg_color={roomColor.NotRoom}/>
            <RoomComponent r_type={"none"} r_code={""} s_left={"400px"} s_top={"370px"} s_width={"40px"}
                           s_height={"30px"} s_bg_color={roomColor.NotRoom}/>
            <RoomComponent r_type={"none"} r_code={""} s_left={"440px"} s_top={"255px"} s_width={"60px"}
                           s_height={"45px"} s_bg_color={roomColor.NotRoom}/>
            <RoomComponent r_type={"none"} r_code={""} s_left={"450px"} s_top={"200px"} s_width={"100px"}
                           s_height={"45px"} s_bg_color={roomColor.NotRoom}/>

            {/*    walkway*/}
            <RoomComponent r_type={"walk"} r_code={""} s_left={"150px"} s_top={"00px"} s_width={"450px"}
                           s_height={"300px"} s_bg_color={"grey"} s_z_index={"-1"}/>
            <RoomComponent r_type={"walk"} r_code={""} s_left={"0px"} s_top={"300px"} s_width={"400px"}
                           s_height={"300px"} s_bg_color={"grey"} s_z_index={"-1"}/>
            <RoomComponent r_type={"walk"} r_code={""} s_left={"400px"} s_top={"300px"} s_width={"100px"}
                           s_height={"200px"} s_bg_color={"grey"} s_z_index={"-1"}/>
            <RoomComponent r_type={"walk"} r_code={""} s_left={"100px"} s_top={"50px"} s_width={"50px"}
                           s_height={"250px"} s_bg_color={"grey"} s_z_index={"-1"}/>

            {/*    fire*/}
            <RoomComponent r_type={"fire"} r_code={""} s_left={"400px"} s_top={"400px"} s_width={"100px"}
                           s_height={"50px"} s_bg_color={roomColor.Fire}/>
            <RoomComponent r_type={"fire"} r_code={""} s_left={"397px"} s_top={"415px"} s_width={"20px"}
                           s_height={"20px"} s_bg_color={roomColor.Fire}/>
            <RoomComponent r_type={"fire"} r_code={""} s_left={"565px"} s_top={"195px"} s_width={"20px"}
                           s_height={"3px"} s_bg_color={roomColor.Fire}/>
            <RoomComponent r_type={"fire"} r_code={""} s_left={"80px"} s_top={"150px"} s_width={"20px"}
                           s_height={"20px"} s_bg_color={roomColor.Fire}/>

            {/*    stair*/}
            <RoomComponent r_type={"stair"} r_code={""} s_left={"50px"} s_top={"50px"} s_width={"100px"}
                           s_height={"100px"} s_bg_color={"#566573"}/>
            {roomModalState.isOpen && (
                <ModalComponent data={roomModalState.data} onHide={() => dispatch(closeRoomModal())}/>
            )}
        </div>
    )
}