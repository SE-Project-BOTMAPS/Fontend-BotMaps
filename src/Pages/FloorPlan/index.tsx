import "./FloorPlan.css";
// redux state
import { useAppDispatch, useAppSelector } from "../../../state/hook";
import {
  changeFloor,
  FloorSelector,
} from "../../../state/slices/floorSlice.ts";

import FourthFloor from "../../Component/floorPlan/fourthFloor.tsx";
import FifthFloor from "../../Component/floorPlan/fifthFloor.tsx";

const FloorPlan = () => {
  const FloorState = useAppSelector(FloorSelector);
  const dispatch = useAppDispatch();
  return (
    <div>
      <div className="flex justify-center mt-10">
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
      <div className="FloorContianer">
        {
          // should be FourthFloor instead of null
          FloorState.floor === 5 ? <FifthFloor /> : <FourthFloor />
        }
      </div>
    </div>
  );
};
export default FloorPlan;
