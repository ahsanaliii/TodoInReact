import React from "react";
import "./Button.css";

export default function Button(props) {

  return (
    <div>
      <button
        className="button"
        type={props.type || "button"}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </div>
  );
}
