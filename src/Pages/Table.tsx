import { useParams } from "react-router-dom";
import { useEffect } from "react";
import DailyList from "../Component/list/dailyList/dailyList";

// redux
import { useAppDispatch, useAppSelector } from "../../state/hook.ts";
import { FloorSelector } from "../../state/slices/floorSlice.ts";
import {
  fetchSideBarDataAsync,
  SideBarSelector,
} from "../../state/slices/leftSideBarSlice.ts";

const Table = () => {
  const { floor } = useParams();

  const dispatch = useAppDispatch();
  const floorState = useAppSelector(FloorSelector);
  const sideBarState = useAppSelector(SideBarSelector);

  useEffect(() => {
    dispatch(fetchSideBarDataAsync(Number(floor)));
  }, [dispatch]);

  return (
    <div>
      <div
    className="flex justify-center py-8 "
      >
        <img src="/Logo/botmapsLogo.png" width={450} alt={"logo"} />
      </div>
      <hr />
      <div>
        <div className="mt-5 px-8 py-2">
          <DailyList data={sideBarState?.events} floor={Number(floor)}/>
        </div>
      </div>
    </div>
  );
};
export default Table;
