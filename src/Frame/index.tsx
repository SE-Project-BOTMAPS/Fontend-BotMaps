import { ReactNode } from "react";
import LeftSideFrame from "../Pages/LeftsideFrame";
import "./Frame.css";
const Frame = ({ children }: { children?: ReactNode }) => {
  return (
    <div className="flex">
      <div className="Frame-Leftside">
        <LeftSideFrame />
      </div>
      <div className="Frame-Floorplan">{children}</div>
    </div>
  );
};
export default Frame;
