/**
 * http://casesandberg.github.io/react-color/
 */
import React, { useState } from "react";
import { TwitterPicker } from "react-color";
import "./style.less";

export default ({ triangle = "top-right" }) => {
  let [visible, setVisible] = useState(false);
  let [color, setColor] = useState("#0f9096");
  const colors = [
    "#0f9096",
    "#FF6900",
    "#FCB900",
    "#7BDCB5",
    "#00D084",
    "#8ED1FC",
    "#0693E3",
    "#ABB8C3",
    "#EB144C",
    "#F78DA7",
  ];
  const onColorChange = (color) => {
    const { hex } = color;
    setColor(hex);
    setVisible(false);
    window.less.modifyVars({
      "@primary-color": hex,
    });
  };
  return (
    <div className="color-picker">
      <div
        className="color-picker-container"
        style={{ backgroundColor: color }}
        onClick={() => setVisible(!visible)}
      />
      {visible && (
        <TwitterPicker
          colors={colors}
          onChange={onColorChange}
          triangle={triangle}
        />
      )}
    </div>
  );
};
