import React from "react";
import { ResponseEvent } from "../../../../state/slices/types/sideBar.type.ts";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

interface AccordionTabDailyProp {
  data?: ResponseEvent[];
  fontSize?: string;
  
}


export const DataTableDaily: React.FC<AccordionTabDailyProp> = ({ data, fontSize }) => {
  const getCurrentTime = (): string => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  const isCurrentTime = (start: string, end: string): boolean => {
    const currentTime = getCurrentTime();
    return currentTime >= start && currentTime <= end;
  };

  return (
    <DataTable
      value={data}
      tableStyle={{ minWidth: "30rem", fontSize: fontSize || "inherit" }}
      rowHover
      rowClassName={(rowData) =>
        isCurrentTime(rowData.start_dt, rowData.end_dt) ? "bg-black text-white" : ""
      }
    >
      <Column field="location" header="Room" sortable ></Column>
      <Column
        header="Range of time"
        body={(rowData) => (  
          <div>
            <p>
              {rowData.start_dt} - {rowData.end_dt}
            </p>
          </div>
        )}
      ></Column>
      <Column field="title" header="Courses" sortable></Column>
      <Column field="who" header="Professor" sortable></Column>
    </DataTable>
  );
};
