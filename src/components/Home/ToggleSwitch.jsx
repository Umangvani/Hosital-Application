import React, { useState } from "react";

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="flex items-center gap-2">
      <span className="text-gray-600">Availability</span>
      <div
        className={`w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer
          ${isOn ? "bg-blue-700" : "bg-gray-300"}`}
        onClick={() => setIsOn(!isOn)}
      >
        <div
          className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform 
            ${isOn ? "translate-x-6" : "translate-x-0"}`}
        ></div>
      </div>
    </div>
  );
};

export default ToggleSwitch;