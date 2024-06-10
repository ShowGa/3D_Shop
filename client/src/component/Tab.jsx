import React, { useState } from "react";
import { useSnapshot } from "valtio";

import state from "../store";
import { logoShirt, stylishShirt } from "../assets";
import ColorPicker from "./ColorPicker";
import FilePicker from "./FilePicker";
import AiPicker from "./AiPicker";

const Tab = ({ tab, isFillterTab, isActiveTab, handleClick }) => {
  const snap = useSnapshot(state);

  const activeStyles =
    isFillterTab && isActiveTab
      ? { background: snap.color, opacity: 0.5 }
      : { backgroundColor: "transparent", opacity: 1 };

  return (
    <div
      key={tab.name}
      className={`tab-btn ${
        isFillterTab ? "rounded-full glassmorhism" : "rounded-4"
      }`}
      onClick={handleClick}
      style={activeStyles}
    >
      <img
        src={tab.icon}
        alt={tab.name}
        className={`${
          isFillterTab ? "w-2/3 h-2/3" : "w-11/12 h-11/12 object-contain"
        }`}
      />
    </div>
  );
};

export default Tab;
