import "./leftside.css";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import DailyList from "../../Component/list/dailyList/dailyList";
import {useEffect, useState} from "react";
import SearchList from "../../Component/list/dailyList/searchList.tsx";

// redux
import {useAppDispatch, useAppSelector} from "../../../state/hook.ts"
import {FloorSelector} from "../../../state/slices/floorSlice.ts"
import {fetchSideBarDataAsync, SideBarSelector} from "../../../state/slices/leftSideBarSlice.ts"
import {searchAsync} from "../../../state/slices/searchSlice.ts";
import {SearchSelector} from "../../../state/slices/searchSlice.ts";

const LeftSideFrame = () => {
    const dispatch = useAppDispatch()
    const floorState = useAppSelector(FloorSelector)
    const sideBarState = useAppSelector(SideBarSelector)
    const searchState = useAppSelector(SearchSelector)
    const [keyword, setKeyword] = useState<string>("");

    useEffect(() => {
        dispatch(fetchSideBarDataAsync(floorState.floor))
    }, [dispatch, floorState.floor]);

    useEffect(() => {
        if(keyword === "") return
        dispatch(searchAsync(keyword));
    }, [dispatch, keyword]);


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
                        onChange={(e) => setKeyword(e.target.value)}
                    />
                </div>
                <div className="mt-5">
                    {
                        keyword !== "" ? (
                            <SearchList data={searchState.searchData}/>
                        ) : (
                            <DailyList data={sideBarState?.events}/>
                        )
                    }
                </div>
            </div>
        </div>
    );
};
export default LeftSideFrame;
