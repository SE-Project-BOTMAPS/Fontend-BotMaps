import React from "react";
import roomcolor from "./interface/roomcolor";

interface ColorGuideline {
  [key: string]: string;
}

const generateColorGuideline = (roomcolor: Record<string, string>): ColorGuideline => {
  const colorGuideline: ColorGuideline = {};
  for (const area in roomcolor) {
    if (roomcolor.hasOwnProperty(area)) {
      colorGuideline[area] = roomcolor[area];
    }
  }
  return colorGuideline;
};

const colorGuideline: ColorGuideline = generateColorGuideline(roomcolor);

const Guildline: React.FC = () => {
  return (
    <div className="grid grid-cols-5 mx-auto ">
      {Object.entries(colorGuideline).map(([area, color]) => (
        <div key={area} style={{ backgroundColor: color }} className="rounded-full  text-center text-sm p-2 m-2">
          {area}
          <div className="round"></div>
        </div>
      ))}
    </div>
  );
};

export default Guildline;
