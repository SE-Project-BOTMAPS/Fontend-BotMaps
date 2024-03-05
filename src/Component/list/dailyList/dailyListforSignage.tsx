import "../list.css";
import React, { useEffect } from "react";

// prime react
import { DataTableDaily } from "./DataTableDaily.tsx";

// type
import type { Events } from "../../../../state/slices/types/sideBar.type.ts";

// redux


interface listData {
  data?: Events;
  floor?: number;
  fontSize?: string;
}

const DailyList: React.FC<listData> = ({ data, floor, fontSize }) => {
  const [currentDay, setCurrentDay] = React.useState("");

  const formatDate = (date: Date) => {
    const day = date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();
    const dayName = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const monthName = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    setCurrentDay(`${dayName[day]} ${monthName[month]} ${year}`);
    console.log(currentDay);
    
  };

  useEffect(() => {
    const date = new Date();
    formatDate(date);
  }, []);

  return (
    <div>
      <div>
        <h3 className="font-bold">
          {floor}
          <sup>th</sup> Floor Study Room
        </h3>

        <DataTableDaily data={data?.study} fontSize={fontSize} />
        <h3 className="font-bold">
          {floor}
          <sup>th</sup> Floor Reserve Room
        </h3>
        <DataTableDaily data={data?.reserve} fontSize={fontSize}/>
      </div>
    </div>
  );
};
export default DailyList;
