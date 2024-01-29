import React, { ReactNode } from "react";
import "./Frame.css";
import { Splitter, SplitterPanel } from 'primereact/splitter';
import LeftSideFrame from './../Pages/LeftsideFrame/index';

const Frame = ({ children }: { children?: ReactNode }) => {
  return (
    <div className="splitter-container">
      <Splitter>
        <SplitterPanel className="splitter-panel-left" size={75}>
          <LeftSideFrame />
        </SplitterPanel>
        <SplitterPanel className="splitter-panel-right">
          {children}
        </SplitterPanel>
      </Splitter>
    </div>
  );
};

export default Frame;
