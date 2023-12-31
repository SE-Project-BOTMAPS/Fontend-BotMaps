import "./App.css";

// redux state
import {useAppDispatch, useAppSelector} from "../state/hook.ts"
import {changeFloor, FloorSelector} from "../state/slices/floorSlice.ts";

// components
import Sidebar from "./Component/sidebar";
import FifthFloor from "./Component/floorPlan/fifthFloor.tsx";
import FourthFloor from "./Component/floorPlan/fourthFloor.tsx";

function App() {
    const FloorState = useAppSelector(FloorSelector)
    const dispatch = useAppDispatch()
    return (
        <div className="">
            <Sidebar />
            <div className="inline-flex">
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
                        onClick={() => dispatch(changeFloor(5))}
                >
                    Fifth Floor
                </button>
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
                        onClick={() => dispatch(changeFloor(4))}
                >
                    Fourth Floor
                </button>
            </div>
            {
                // should be FourthFloor instead of null
                FloorState.floor === 5 ? <FifthFloor/> : <FourthFloor/>
            }
        </div>
    );
}

export default App;
