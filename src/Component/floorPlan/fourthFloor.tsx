import RoomComponent from "././room";

export default function FourthFloor() {
    return(
        <div className={"mapContainer"}>
            {/*    study room*/}
            <RoomComponent r_type={"study"} r_code={"413A"} s_left={"0px"} s_top={"300px"} s_width={"100px"} s_height={"100px"} s_bg_color={"#BAE0E6"}/>
            <RoomComponent r_type={"study"} r_code={"402"} s_left={"500px"} s_top={"0px"} s_width={"100px"} s_height={"150px"} s_bg_color={"#BAE0E6"}/>
            <RoomComponent r_type={"study"} r_code={"403"} s_left={"535px"} s_top={"200px"} s_width={"65px"} s_height={"50px"} s_bg_color={"#BAE0E6"}/>
            <RoomComponent r_type={"study"} r_code={"404"} s_left={"550px"} s_top={"250px"} s_width={"50px"} s_height={"50px"} s_bg_color={"#BAE0E6"}/>
            <RoomComponent r_type={"study"} r_code={"415A"} s_left={"200px"} s_top={"200px"} s_width={"100px"} s_height={"100px"} s_bg_color={"#BAE0E6"}/>
            <div id="R412" className="R412">
                <div className="R412-1"></div>
                <div className="R412-2"></div>
            </div>


            {/*    aj room*/}
            <RoomComponent r_type={"arjan"} r_code={"414A"} s_left={"150px"} s_top={"400px"} s_width={"50px"} s_height={"50px"} s_bg_color={"#E5E0B9"}/>
            <RoomComponent r_type={"arjan"} r_code={"410"} s_left={"400px"} s_top={"460px"} s_width={"50px"} s_height={"40px"} s_bg_color={"#E5E0B9"}/>
            <RoomComponent r_type={"arjan"} r_code={"409"} s_left={"450px"} s_top={"450px"} s_width={"50px"} s_height={"50px"} s_bg_color={"#E5E0B9"}/>
            <RoomComponent r_type={"arjan"} r_code={"405"} s_left={"480px"} s_top={"260px"} s_width={"70px"} s_height={"40px"} s_bg_color={"#E5E0B9"}/>
            <RoomComponent r_type={"arjan"} r_code={""} s_left={"0px"} s_top={"500px"} s_width={"30px"} s_height={"60px"} s_bg_color={"#E5E0B9"}/>
            <RoomComponent r_type={"arjan"} r_code={""} s_left={"0px"} s_top={"560px"} s_width={"55px"} s_height={"40px"} s_bg_color={"#E5E0B9"}/>
            <RoomComponent r_type={"arjan"} r_code={""} s_left={"55px"} s_top={"560px"} s_width={"45px"} s_height={"40px"} s_bg_color={"#E5E0B9"}/>
            <RoomComponent r_type={"arjan"} r_code={""} s_left={"30px"} s_top={"500px"} s_width={"50px"} s_height={"40px"} s_bg_color={"#E5E0B9"}/>
            <RoomComponent r_type={"arjan"} r_code={"402.5"} s_left={"550px"} s_top={"150px"} s_width={"50px"} s_height={"50px"} s_bg_color={"#E5E0B9"}/>
            <RoomComponent r_type={"arjan"} r_code={"448"} s_left={"100px"} s_top={"150px"} s_width={"50px"} s_height={"50px"} s_bg_color={"#E5E0B9"}/>
            <RoomComponent r_type={"arjan"} r_code={"444"} s_left={"300px"} s_top={"100px"} s_width={"50px"} s_height={"50px"} s_bg_color={"#E5E0B9"}/>

            {/* Admin */}
            <RoomComponent r_type={"admin"} r_code={"532"} s_left={"330px"} s_top={"200px"} s_width={"220px"} s_height={"100px"} s_bg_color={"#be68be"}/>

            {/* naksuksa */}
            <RoomComponent r_type={"naksuksa"} r_code={"401"} s_left={"400px"} s_top={"0px"} s_width={"100px"} s_height={"150px"} s_bg_color={"#9ada94"}/>
            <RoomComponent r_type={"naksuksa"} r_code={"422"} s_left={"300px"} s_top={"0px"} s_width={"100px"} s_height={"100px"} s_bg_color={"#9ada94"}/>

            {/*    lab room*/}
            <RoomComponent r_type={"lab"} r_code={"415B"} s_left={"100px"} s_top={"200px"} s_width={"100px"} s_height={"100px"} s_bg_color={"#E6BAD0"}/>
            <RoomComponent r_type={"lab"} r_code={"411B"} s_left={"200px"} s_top={"500px"} s_width={"100px"} s_height={"100px"} s_bg_color={"#E6BAD0"}/>
            <RoomComponent r_type={"lab"} r_code={"411A"} s_left={"300px"} s_top={"500px"} s_width={"100px"} s_height={"100px"} s_bg_color={"#E6BAD0"}/>
            <RoomComponent r_type={"lab"} r_code={"414B"} s_left={"150px"} s_top={"350px"} s_width={"50px"} s_height={"50px"} s_bg_color={"#E6BAD0"}/>
            <RoomComponent r_type={"lab"} r_code={"412"} s_left={"200px"} s_top={"500px"} s_width={"100px"} s_height={"100px"} s_bg_color={"#E6BAD0"}/>

            {/*    Lift*/}
            <RoomComponent r_type={"lift"} r_code={"Lift"} s_left={"200px"} s_top={"100px"} s_width={"100px"} s_height={"50px"} s_bg_color={"#9EABD9"}/>

            {/*    restroom*/}
            <RoomComponent r_type={"restroom"} r_code={"GR"} s_left={"150px"} s_top={"0px"} s_width={"50px"} s_height={"50px"} s_bg_color={"#9EABD9"}/>
            <RoomComponent r_type={"restroom"} r_code={"MR"} s_left={"220px"} s_top={"0px"} s_width={"80px"} s_height={"50px"} s_bg_color={"#9EABD9"}/>

            {/*    none*/}
            <RoomComponent r_type={"none"} r_code={""} s_left={"200px"} s_top={"350px"} s_width={"150px"} s_height={"100px"} s_bg_color={"#4D4D4D"}/>
            <RoomComponent r_type={"none"} r_code={""} s_left={"250px"} s_top={"50px"} s_width={"50px"} s_height={"50px"} s_bg_color={"#4D4D4D"}/>
            <RoomComponent r_type={"none"} r_code={""} s_left={"440px"} s_top={"300px"} s_width={"60px"} s_height={"100px"} s_bg_color={"#4D4D4D"}/>
            <RoomComponent r_type={"none"} r_code={""} s_left={"400px"} s_top={"370px"} s_width={"40px"} s_height={"30px"} s_bg_color={"#4D4D4D"}/>
            <RoomComponent r_type={"specialnone"} r_code={""} s_left={"400px"} s_top={"280px"} s_width={"100px"} s_height={"95px"} s_bg_color={"#4D4D4D"}/>
            <RoomComponent r_type={"specialnone"} r_code={""} s_left={"30px"} s_top={"500px"} s_width={"100px"} s_height={"60px"} s_bg_color={"#4D4D4D"}/>
            <RoomComponent r_type={"none"} r_code={""} s_left={"0px"} s_top={"400px"} s_width={"100px"} s_height={"100px"} s_bg_color={"#4D4D4D"}/>

            {/*    walkway*/}
            <RoomComponent r_type={"walk"} r_code={""} s_left={"150px"} s_top={"00px"} s_width={"450px"} s_height={"300px"} s_bg_color={"grey"} s_z_index={"-1"}/>
            <RoomComponent r_type={"walk"} r_code={""} s_left={"0px"} s_top={"300px"} s_width={"400px"} s_height={"300px"} s_bg_color={"grey"}  s_z_index={"-1"}/>
            <RoomComponent r_type={"walk"} r_code={""} s_left={"400px"} s_top={"300px"} s_width={"100px"} s_height={"200px"} s_bg_color={"grey"}  s_z_index={"-1"}/>
            <RoomComponent r_type={"walk"} r_code={""} s_left={"100px"} s_top={"50px"} s_width={"50px"} s_height={"250px"} s_bg_color={"grey"}  s_z_index={"-1"}/>

            {/*    fire*/}
            <RoomComponent r_type={"fire"} r_code={""} s_left={"400px"} s_top={"400px"} s_width={"100px"} s_height={"50px"} s_bg_color={"#ff8977"}/>
            <RoomComponent r_type={"fire"} r_code={""} s_left={"397px"} s_top={"415px"} s_width={"20px"} s_height={"20px"} s_bg_color={"#ff8977"}/>
            <RoomComponent r_type={"fire"} r_code={""} s_left={"565px"} s_top={"195px"} s_width={"20px"} s_height={"3px"} s_bg_color={"#ff8977"}/>
            <RoomComponent r_type={"fire"} r_code={""} s_left={"80px"} s_top={"150px"} s_width={"20px"} s_height={"20px"} s_bg_color={"#ff8977"}/>

            {/*    stair*/}
            <RoomComponent r_type={"stair"} r_code={""} s_left={"50px"} s_top={"50px"} s_width={"100px"} s_height={"100px"} s_bg_color={"#566573"}/>

        </div>
    )
}