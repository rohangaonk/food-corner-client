import React, { useState } from "react";

function Toggle() {
  const [active, setActive] = useState(false);
  return (
    <div className="min-w-fit flex">
      <button
        onClick={() => setActive((prev) => !prev)}
        className="relative w-10 h-4 bg-gray-300 rounded-r-full rounded-l-full"
      >
        <div
          className={`w-4 h-4 rounded-full absolute top-0 transition-all ${
            active ? "translate-x-6 bg-primary" : "bg-gray-400"
          }`}
        ></div>
      </button>
    </div>
  );
}

export default Toggle;
