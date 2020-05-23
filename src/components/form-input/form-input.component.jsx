import React from "react";
import "./form-input.style.scss";

function FormInput({ handleChange, label, ...otherProps }) {
  return (
    <div className="group">
      <input
        className="form-input"
        onChange={handleChange}
        {...otherProps}
        autoComplete="off"
      />
      {label ? (
        <label
          className={`form-input-label ${
            otherProps.value.length ? "shrink" : ""
          } `}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
}

export default FormInput;