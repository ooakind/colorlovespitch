import React from "react";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

let Circle = ({ className, color, size }) => {
  return (
    <FontAwesomeIcon
      className={className}
      icon={faCircle}
      size={size || "4x"}
      style={{ color: color }}
    />
  );
};

export { Circle };
