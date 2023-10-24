"use client";

import React from "react";
import { text } from "stream/consumers";

interface Props {
  text: string;
  children: React.ReactNode;
}

const MyComponent: React.FC<Props> = (props) => {
  const [showTooltip, setShowTooltip] = React.useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <>
      <div
        className="relative inline-block"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {props.children}
        {showTooltip && (
          <div className="absolute bg-black text-white text-xs rounded px-2 py-1 transform -translate-x-1/2 left-1/2 top-full z-10">
            {props.text}
          </div>
        )}
      </div>
    </>
  );
};

export default MyComponent;
