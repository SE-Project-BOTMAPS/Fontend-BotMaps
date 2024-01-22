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
    <div className="grid grid-cols-5 mx-auto pt-4">
      {Object.entries(colorGuideline).map(([name, color]) => (
        <div key={name} className="flex m-1">
          <div style={{ backgroundColor: color, width: '15px', height: '15px', borderRadius: '50%' ,margin:'auto 0'}}></div>
          <div className="text-sm mx-1">{name}</div>
        </div>
      ))}
    </div>
  );
};

export default Guildline;