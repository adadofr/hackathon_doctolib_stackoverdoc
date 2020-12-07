import React from "react";
import "../styles/Button.scss";

function Button({ outline, children, onClick, type }) {
  return (
    <button
      className={
        !outline
          ? "btn btn-primary sd-btn"
          : "btn btn-outline-primary sd-btn-outline"
      }
      type={type}
      onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
