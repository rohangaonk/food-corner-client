import React from "react";

function DayWeek({ name, isActive }) {
  return (
    <div
      className={`flex items-center justify-center h-6 w-6 rounded-full ${
        isActive ? "bg-primary" : "bg-gray-400"
      }`}
    >
      <span className="text-white font-normal text-font-12">{name}</span>
    </div>
  );
}

export default DayWeek;
