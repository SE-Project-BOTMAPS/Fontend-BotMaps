import { ReactNode } from "react";
import "./Frame.css";
import { Splitter, SplitterPanel } from 'primereact/splitter';
import LeftSideFrame from './../Pages/LeftsideFrame/index';
        
const Frame = ({ children }: { children?: ReactNode }) => {
  return (
    <Splitter style={{ height: '100vdh' }}>
            <SplitterPanel className="">
              <LeftSideFrame/>
            </SplitterPanel>
            {/* <SplitterPanel className=""></SplitterPanel> */}
            <SplitterPanel className="">{children}</SplitterPanel>
        </Splitter>
    // <div className="flex">
    //   <div className="Frame-Leftside">
    //     <LeftSideFrame />
    //   </div>
    //   <div className="Frame-Floorplan">{children}</div>
      
    // </div>
  );
};
export default Frame;
