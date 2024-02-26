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
    <div className="grid grid-cols-5 mx-10 p-4 border border-solid border-black rounded-2xl bg-white">
      {Object.entries(colorGuideline).map(([name, color]) => (
        <div key={name} className="flex m-1 justify-center">
          <div style={{ backgroundColor: color, width: '15px', height: '15px', borderRadius: '50%', margin: 'auto 0', border: '1px solid #000' }}></div>
          <div className="text-sm mx-1">{name}</div>
        </div>
      ))}
    </div>
  );
};

export default Guildline;
