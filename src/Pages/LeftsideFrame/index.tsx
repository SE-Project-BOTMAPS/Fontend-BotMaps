import "./leftside.css";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import DailyList from "../../Component/list/dailyList/dailyList";
import {useEffect} from "react";

// redux
import {useAppDispatch, useAppSelector} from "../../../state/hook.ts"
import {FloorSelector} from "../../../state/slices/floorSlice.ts"
import {fetchSideBarDataAsync, SideBarSelector} from "../../../state/slices/leftSideBarSlice.ts"

const LeftSideFrame = () => {
    const dispatch = useAppDispatch()
    const floorState = useAppSelector(FloorSelector)
    const sideBarState = useAppSelector(SideBarSelector)

    useEffect(() => {
        dispatch(fetchSideBarDataAsync(floorState.floor))
    }, [dispatch, floorState.floor]);


    return (
        <div className="Leftside-container">
            <div>
                <img src="/Logo/botmapsLogo.png" width={150} alt={"logo"}/>
            </div>
            <hr/>
            <div>
                <div style={{display: "flex", alignItems: "end"}}>
                    <div style={{marginBottom: "1px", marginRight: "10px"}}>
                        <SearchIcon sx={{fontSize: "1.5rem", color: "#757575"}}/>
                    </div>
                    <TextField
                        size="small"
                        id="search"
                        label="search"
                        variant="standard"
                        sx={{width: "100%"}}
                    />
                </div>
                <div className="mt-5">
                    <DailyList data={sideBarState?.events}/>
                </div>
            </div>
        </div>
    );
};
export default LeftSideFrame;
