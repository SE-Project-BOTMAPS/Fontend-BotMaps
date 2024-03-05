import { useParams } from "react-router-dom";
import { useEffect } from "react";
import DailyList from "../Component/list/dailyList/dailyListforSignage";

// redux
import { useAppDispatch, useAppSelector } from "../../state/hook.ts";
import {
  fetchSideBarDataAsync,
  SideBarSelector,
} from "../../state/slices/leftSideBarSlice.ts";

const Table = () => {
  const { floor } = useParams();

  const dispatch = useAppDispatch();
  const sideBarState = useAppSelector(SideBarSelector);

  useEffect(() => {
    dispatch(fetchSideBarDataAsync(Number(floor)));
  }, [dispatch]);

  return (
    <div>
      <div
    className="flex justify-center pt-10 "
      >
        <img src="/Logo/botmapsLogo.png" width={300} alt={"logo"} />
      </div>
      {/* <hr /> */}
      <div>
        <div className="px-8 ">
          <DailyList data={sideBarState?.events} floor={Number(floor)} fontSize="20px"/>
        </div>
      </div>
    </div>
  );
};
export default Table;
