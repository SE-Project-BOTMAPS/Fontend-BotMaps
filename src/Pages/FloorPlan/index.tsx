import "./FloorPlan.css";
// redux state
import { useAppDispatch, useAppSelector } from "../../../state/hook";
import {
  changeFloor,
  FloorSelector,
} from "../../../state/slices/floorSlice.ts";

import FourthFloor from "../../Component/floorPlan/fourthFloor.tsx";
import FifthFloor from "../../Component/floorPlan/fifthFloor.tsx";
import Guildline from "../../Component/floorPlan/guildline.tsx";

const FloorPlan = () => {
  const FloorState = useAppSelector(FloorSelector);
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col min-h-screen bg-stone-100">
      <div className="flex-grow">
        <div className="flex justify-center mt-10 flex-col ">
          <div className="flex justify-center">
            <button
              className={`select-button floor4 ${
                FloorState.floor === 4 ? "active" : "notactive"
              } px-7 py-3 `}
              onClick={() => dispatch(changeFloor(4))}
            >
              <p>4th floor</p>
            </button>
            <button
              className={`select-button floor5 ${
                FloorState.floor === 5 ? "active" : "notactive"
              } px-7 py-3 `}
              onClick={() => dispatch(changeFloor(5))}
            >
              <p>5th floor</p>
            </button>
          </div>
          <div className="my-8">
          <Guildline />
          </div>
          <div className="mx-auto my-4">
            {FloorState.floor === 5 ? <FifthFloor /> : <FourthFloor />}
          </div>
        </div>
      </div>
      <footer className="text-center py-4">
        <p>Copyright © 2024 BOTMAPS</p>
      </footer>
    </div>
  );
};

export default FloorPlan;
