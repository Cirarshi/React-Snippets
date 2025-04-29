import React from "react";
import { useState } from "react";

export default function TextExpander({
  collapsedNumWords = 10,
  expandableButtonText = "Show More",
  collapsedButtonText = "Show Less",
  buttonColor = "#1f09cd",
  className,
  expanded = false,
  children,
  // default values for props
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);

  const displayText = isExpanded
    ? children
    : children.split(" ").slice(0, collapsedNumWords).join(" ") + "...";

  const buttonStyle = {
    background: "none",
    border: "none",
    font: "inherit",
    cursor: "pointer",
    marginLeft: "5px",
    color: buttonColor,
  };

  return (
    <div className={className}>
      <span>{displayText}</span>
      <button onClick={() => setIsExpanded((exp) => !exp)} style={buttonStyle}>
        {isExpanded ? collapsedButtonText : expandableButtonText}
      </button>
    </div>
  );
}
