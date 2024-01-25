import RoomComponent from "././room";
import roomcolor from "./interface/roomcolor";
import ModalComponent from "../dialog";
import { useState } from "react";


export default function FourthFloor() {
    
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedRoomCode,setSelectedRoomcode] = useState("");

    const handleRoomClick = (roomcode:string)=>{
        setSelectedRoomcode(roomcode);
        setIsModalVisible(true);
    }
  
    const hideModal = () => {
      setIsModalVisible(false);
    }
    
    return(
        <div className={"mapContainer"}>
            {/*    study room*/}
            <RoomComponent r_type={"study"} r_code={"413A"} s_left={"0px"} s_top={"300px"} s_width={"100px"} s_height={"100px"} s_bg_color={roomcolor.StudyRoom} onClick={() => handleRoomClick("413A")}/>
            <RoomComponent r_type={"study"} r_code={"402"} s_left={"500px"} s_top={"0px"} s_width={"100px"} s_height={"150px"} s_bg_color={roomcolor.StudyRoom} onClick={() => handleRoomClick("402")}/>
            <RoomComponent r_type={"study"} r_code={"403"} s_left={"535px"} s_top={"200px"} s_width={"65px"} s_height={"50px"} s_bg_color={roomcolor.StudyRoom} onClick={() => handleRoomClick("403")}/>
            <RoomComponent r_type={"study"} r_code={"404"} s_left={"550px"} s_top={"250px"} s_width={"50px"} s_height={"50px"} s_bg_color={roomcolor.StudyRoom} onClick={() => handleRoomClick("404")}/>
            <RoomComponent r_type={"study"} r_code={"415A"} s_left={"200px"} s_top={"200px"} s_width={"100px"} s_height={"100px"} s_bg_color={roomcolor.StudyRoom} onClick={() => handleRoomClick("415A")}/>
            <RoomComponent r_type={"study"} r_code={"412"} s_left={"100px"} s_top={"500px"} s_width={"110px"} s_height={"100px"} s_bg_color={roomcolor.StudyRoom} onClick={() => handleRoomClick("412")}/>

            {/*    aj room*/}
            <RoomComponent r_type={"arjan"} r_code={"414A"} s_left={"150px"} s_top={"400px"} s_width={"50px"} s_height={"50px"} s_bg_color={roomcolor.ArjarnRoom} onClick={() => handleRoomClick("414A")}/>
            <RoomComponent r_type={"arjan"} r_code={"410"} s_left={"400px"} s_top={"460px"} s_width={"50px"} s_height={"40px"} s_bg_color={roomcolor.ArjarnRoom} onClick={() => handleRoomClick("410")}/>
            <RoomComponent r_type={"arjan"} r_code={"409"} s_left={"450px"} s_top={"450px"} s_width={"50px"} s_height={"50px"} s_bg_color={roomcolor.ArjarnRoom} onClick={() => handleRoomClick("409")}/>
            <RoomComponent r_type={"arjan"} r_code={"405"} s_left={"480px"} s_top={"260px"} s_width={"70px"} s_height={"40px"} s_bg_color={roomcolor.ArjarnRoom} onClick={() => handleRoomClick("405")}/>
            <RoomComponent r_type={"arjan"} r_code={""} s_left={"0px"} s_top={"500px"} s_width={"30px"} s_height={"60px"} s_bg_color={roomcolor.ArjarnRoom} onClick={() => handleRoomClick("")}/>
            <RoomComponent r_type={"arjan"} r_code={""} s_left={"0px"} s_top={"560px"} s_width={"55px"} s_height={"40px"} s_bg_color={roomcolor.ArjarnRoom} onClick={() => handleRoomClick("")}/>
            <RoomComponent r_type={"arjan"} r_code={""} s_left={"55px"} s_top={"560px"} s_width={"45px"} s_height={"40px"} s_bg_color={roomcolor.ArjarnRoom} onClick={() => handleRoomClick("")}/>
            <RoomComponent r_type={"arjan"} r_code={"402.5"} s_left={"550px"} s_top={"150px"} s_width={"50px"} s_height={"50px"} s_bg_color={roomcolor.ArjarnRoom} onClick={() => handleRoomClick("402.5")}/>
            <RoomComponent r_type={"arjan"} r_code={"448"} s_left={"100px"} s_top={"150px"} s_width={"50px"} s_height={"50px"} s_bg_color={roomcolor.ArjarnRoom} onClick={() => handleRoomClick("448")}/>
            <RoomComponent r_type={"arjan"} r_code={"444"} s_left={"300px"} s_top={"100px"} s_width={"50px"} s_height={"50px"} s_bg_color={roomcolor.ArjarnRoom} onClick={() => handleRoomClick("444")}/>
            <RoomComponent r_type={"arjan"} r_code={""} s_left={"30px"} s_top={"500px"} s_width={"50px"} s_height={"40px"} s_bg_color={roomcolor.ArjarnRoom} onClick={() => handleRoomClick("")}/>

            {/* Admin */}
            <RoomComponent r_type={"admin"} r_code={"Admin"} s_left={"330px"} s_top={"200px"} s_width={"220px"} s_height={"100px"} s_bg_color={roomcolor.AdminRoom} onClick={() => handleRoomClick("Admin")}/>

            {/* naksuksa */}
            <RoomComponent r_type={"naksuksa"} r_code={"401"} s_left={"400px"} s_top={"0px"} s_width={"100px"} s_height={"150px"} s_bg_color={roomcolor.StudentRoom} onClick={() => handleRoomClick("401")}/>
            <RoomComponent r_type={"naksuksa"} r_code={"422"} s_left={"300px"} s_top={"0px"} s_width={"100px"} s_height={"100px"} s_bg_color={roomcolor.StudentRoom} onClick={() => handleRoomClick("422")}/>

            {/*    lab room*/}
            <RoomComponent r_type={"lab"} r_code={"415B"} s_left={"100px"} s_top={"200px"} s_width={"100px"} s_height={"100px"} s_bg_color={roomcolor.LabRoom} onClick={() => handleRoomClick("415B")}/>
            <RoomComponent r_type={"lab"} r_code={"411B"} s_left={"200px"} s_top={"500px"} s_width={"100px"} s_height={"100px"} s_bg_color={roomcolor.LabRoom} onClick={() => handleRoomClick("411B")}/>
            <RoomComponent r_type={"lab"} r_code={"411A"} s_left={"300px"} s_top={"500px"} s_width={"100px"} s_height={"100px"} s_bg_color={roomcolor.LabRoom} onClick={() => handleRoomClick("411A")}/>
            <RoomComponent r_type={"lab"} r_code={"414B"} s_left={"150px"} s_top={"350px"} s_width={"50px"} s_height={"50px"} s_bg_color={roomcolor.LabRoom} onClick={() => handleRoomClick("414B")}/>

            {/*    Lift*/}
            <RoomComponent r_type={"lift"} r_code={"Lift"} s_left={"200px"} s_top={"100px"} s_width={"100px"} s_height={"50px"} s_bg_color={roomcolor.Lift}/>

            {/*    restroom*/}
            <RoomComponent r_type={"restroom"} r_code={"GR"} s_left={"150px"} s_top={"0px"} s_width={"50px"} s_height={"50px"} s_bg_color={roomcolor.RestRoom}/>
            <RoomComponent r_type={"restroom"} r_code={"MR"} s_left={"220px"} s_top={"0px"} s_width={"80px"} s_height={"50px"} s_bg_color={roomcolor.RestRoom}/>

            {/*    none*/}
            <RoomComponent r_type={"none"} r_code={""} s_left={"200px"} s_top={"350px"} s_width={"150px"} s_height={"100px"} s_bg_color={roomcolor.NotRoom}/>
            <RoomComponent r_type={"none"} r_code={""} s_left={"250px"} s_top={"50px"} s_width={"50px"} s_height={"50px"} s_bg_color={roomcolor.NotRoom}/>
            <RoomComponent r_type={"none"} r_code={""} s_left={"440px"} s_top={"300px"} s_width={"60px"} s_height={"100px"} s_bg_color={roomcolor.NotRoom}/>
            <RoomComponent r_type={"none"} r_code={""} s_left={"400px"} s_top={"370px"} s_width={"40px"} s_height={"30px"} s_bg_color={roomcolor.NotRoom}/>
            <RoomComponent r_type={"specialnone"} r_code={""} s_left={"400px"} s_top={"280px"} s_width={"100px"} s_height={"95px"} s_bg_color={roomcolor.NotRoom}/>
            <RoomComponent r_type={"specialnone"} r_code={""} s_left={"30px"} s_top={"500px"} s_width={"100px"} s_height={"60px"} s_bg_color={roomcolor.NotRoom}/>
            <RoomComponent r_type={"none"} r_code={""} s_left={"0px"} s_top={"400px"} s_width={"100px"} s_height={"100px"} s_bg_color={roomcolor.NotRoom}/>

            {/*    walkway*/}
            <RoomComponent r_type={"walk"} r_code={""} s_left={"150px"} s_top={"00px"} s_width={"450px"} s_height={"300px"} s_bg_color={"grey"} s_z_index={"-1"}/>
            <RoomComponent r_type={"walk"} r_code={""} s_left={"0px"} s_top={"300px"} s_width={"400px"} s_height={"300px"} s_bg_color={"grey"}  s_z_index={"-1"}/>
            <RoomComponent r_type={"walk"} r_code={""} s_left={"400px"} s_top={"300px"} s_width={"100px"} s_height={"200px"} s_bg_color={"grey"}  s_z_index={"-1"}/>
            <RoomComponent r_type={"walk"} r_code={""} s_left={"100px"} s_top={"50px"} s_width={"50px"} s_height={"250px"} s_bg_color={"grey"}  s_z_index={"-1"}/>

            {/*    fire*/}
            <RoomComponent r_type={"fire"} r_code={""} s_left={"400px"} s_top={"400px"} s_width={"100px"} s_height={"50px"} s_bg_color={roomcolor.Fire}/>
            <RoomComponent r_type={"fire"} r_code={""} s_left={"397px"} s_top={"415px"} s_width={"20px"} s_height={"20px"} s_bg_color={roomcolor.Fire}/>
            <RoomComponent r_type={"fire"} r_code={""} s_left={"565px"} s_top={"195px"} s_width={"20px"} s_height={"3px"} s_bg_color={roomcolor.Fire}/>
            <RoomComponent r_type={"fire"} r_code={""} s_left={"80px"} s_top={"150px"} s_width={"20px"} s_height={"20px"} s_bg_color={roomcolor.Fire}/>

            {/*    stair*/}
            <RoomComponent r_type={"stair"} r_code={""} s_left={"50px"} s_top={"50px"} s_width={"100px"} s_height={"100px"} s_bg_color={"#566573"}/>
            {isModalVisible && (
                <ModalComponent RoomCode={selectedRoomCode} onHide={hideModal} />
            )}
        </div>
    )
}