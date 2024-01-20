import "./leftside.css";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import DailyList from "../../Component/list/dailyList/dailyList";
import {useEffect} from "react";

// redux
import { useAppSelector,useAppDispatch} from "../../../state/hook.ts"
import { FloorSelector } from "../../../state/slices/floorSlice.ts"
import { fetchSideBarDataAsync,getFilteredEvents} from "../../../state/slices/leftSideBarSlice.ts"
import {ShowEvent} from "../../../state/slices/types/sideBar.ts";

const LeftSideFrame = () => {
  const dispatch = useAppDispatch()
  const floorState = useAppSelector(FloorSelector)
  const commonEvent : ShowEvent[] | undefined = useAppSelector(getFilteredEvents(false))
  const reservedEvent : ShowEvent[] | undefined = useAppSelector(getFilteredEvents(true))

  useEffect(() => {
    dispatch(fetchSideBarDataAsync(floorState.floor))
  }, [dispatch, floorState.floor]);


  return (
    <div className="Leftside-container">
      <div>
        <img src="/Logo/botmapsLogo.png" width={150}  alt={"logo"}/>
      </div>
      <hr />
      <div>
        <div style={{ display: "flex", alignItems: "end" }}>
          <div style={{ marginBottom: "1px", marginRight: "10px" }}>
            <SearchIcon sx={{ fontSize: "1.5rem", color: "#757575" }} />
          </div>
          <TextField
            size="small"
            id="search"
            label="search"
            variant="standard"
            sx={{ width: "100%" }}
          />
        </div>
        <div>
          <DailyList isStudyRoom={true} data={commonEvent}/>
        </div>
        <div>
          <DailyList isStudyRoom={false} data={reservedEvent}/>
        </div>
      </div>
    </div>
  );
};
export default LeftSideFrame;
