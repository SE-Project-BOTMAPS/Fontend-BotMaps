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
    className="flex justify-center py-10 "
      >
        <img src="/Logo/botmapsLogo.png" width={350} alt={"logo"} />
      </div>
      <hr />
      <div>
        <div className="mt-5 px-8 ">
          <DailyList data={sideBarState?.events} floor={Number(floor)}/>
        </div>
      </div>
    </div>
  );
};
export default Table;
